"""
Test that various events are fired for models in the student app.
"""


from unittest import mock
import pytest

from django.db.utils import IntegrityError
from django.test import TestCase
from django_countries.fields import Country

from common.djangoapps.student.models import CourseEnrollmentAllowed, CourseEnrollment
from common.djangoapps.student.tests.factories import CourseEnrollmentAllowedFactory, UserFactory, UserProfileFactory
from common.djangoapps.student.tests.tests import UserSettingsEventTestMixin

from openedx_events.learning.data import (
    CourseData,
    CourseEnrollmentData,
    UserData,
    UserPersonalData,
)
from openedx_events.learning.signals import COURSE_ENROLLMENT_CREATED
from openedx_events.tests.utils import OpenEdxEventsTestMixin
from openedx.core.djangolib.testing.utils import skip_unless_lms

from xmodule.modulestore.tests.django_utils import SharedModuleStoreTestCase
from xmodule.modulestore.tests.factories import CourseFactory


class TestUserProfileEvents(UserSettingsEventTestMixin, TestCase):
    """
    Test that we emit field change events when UserProfile models are changed.
    """
    def setUp(self):
        super().setUp()
        self.table = 'auth_userprofile'
        self.user = UserFactory.create()
        self.profile = self.user.profile
        self.reset_tracker()

    def test_change_one_field(self):
        """
        Verify that we emit an event when a single field changes on the user
        profile.
        """
        self.profile.year_of_birth = 1900
        self.profile.save()
        self.assert_user_setting_event_emitted(setting='year_of_birth', old=None, new=self.profile.year_of_birth)

        # Verify that we remove the temporary `_changed_fields` property from
        # the model after we're done emitting events.
        with pytest.raises(AttributeError):
            self.profile._changed_fields    # pylint: disable=pointless-statement, protected-access

    def test_change_many_fields(self):
        """
        Verify that we emit one event per field when many fields change on the
        user profile in one transaction.
        """
        self.profile.gender = 'o'
        self.profile.bio = 'test bio'
        self.profile.save()
        self.assert_user_setting_event_emitted(setting='bio', old=None, new=self.profile.bio)
        self.assert_user_setting_event_emitted(setting='gender', old='m', new='o')

    def test_unicode(self):
        """
        Verify that the events we emit can handle unicode characters.
        """
        old_name = self.profile.name
        self.profile.name = 'Dånîél'
        self.profile.save()
        self.assert_user_setting_event_emitted(setting='name', old=old_name, new=self.profile.name)

    def test_country(self):
        """
        Verify that we properly serialize the JSON-unfriendly Country field.
        """
        self.profile.country = Country('AL', 'dummy_flag_url')
        self.profile.save()
        self.assert_user_setting_event_emitted(setting='country', old=None, new=self.profile.country)

    def test_excluded_field(self):
        """
        Verify that we don't emit events for ignored fields.
        """
        self.profile.meta = {'foo': 'bar'}
        self.profile.save()
        self.assert_no_events_were_emitted()

    @mock.patch('common.djangoapps.student.models.UserProfile.save', side_effect=IntegrityError)
    def test_no_event_if_save_failed(self, _save_mock):
        """
        Verify no event is triggered if the save does not complete. Note that the pre_save
        signal is not called in this case either, but the intent is to make it clear that this model
        should never emit an event if save fails.
        """
        self.profile.gender = "unknown"
        with pytest.raises(IntegrityError):
            self.profile.save()
        self.assert_no_events_were_emitted()


class TestUserEvents(UserSettingsEventTestMixin, TestCase):
    """
    Test that we emit field change events when User models are changed.
    """
    def setUp(self):
        super().setUp()
        self.user = UserFactory.create()
        self.reset_tracker()
        self.table = 'auth_user'

    def test_change_one_field(self):
        """
        Verify that we emit an event when a single field changes on the user.
        """
        old_username = self.user.username
        self.user.username = 'new username'
        self.user.save()
        self.assert_user_setting_event_emitted(setting='username', old=old_username, new=self.user.username)

    def test_change_many_fields(self):
        """
        Verify that we emit one event per field when many fields change on the
        user in one transaction.
        """
        old_email = self.user.email
        old_is_staff = self.user.is_staff
        self.user.email = 'foo@bar.com'
        self.user.is_staff = True
        self.user.save()
        self.assert_user_setting_event_emitted(setting='email', old=old_email, new=self.user.email)
        self.assert_user_setting_event_emitted(setting='is_staff', old=old_is_staff, new=self.user.is_staff)

    def test_password(self):
        """
        Verify that password values are not included in the event payload.
        """
        self.user.password = 'new password'
        self.user.save()
        self.assert_user_setting_event_emitted(setting='password', old=None, new=None)

    def test_related_fields_ignored(self):
        """
        Verify that we don't emit events for related fields.
        """
        self.user.loginfailures_set.create()
        self.user.save()
        self.assert_no_events_were_emitted()

    @mock.patch('django.contrib.auth.models.User.save', side_effect=IntegrityError)
    def test_no_event_if_save_failed(self, _save_mock):
        """
        Verify no event is triggered if the save does not complete. Note that the pre_save
        signal is not called in this case either, but the intent is to make it clear that this model
        should never emit an event if save fails.
        """
        self.user.password = 'new password'
        with pytest.raises(IntegrityError):
            self.user.save()
        self.assert_no_events_were_emitted()

    def test_no_first_and_last_name_events(self):
        """
        Verify that first_name and last_name events are not emitted.
        """
        self.user.first_name = "Donald"
        self.user.last_name = "Duck"
        self.user.save()
        self.assert_no_events_were_emitted()

    def test_enrolled_after_email_change(self):
        """
        Test that when a user's email changes, the user is enrolled in pending courses.
        """
        pending_enrollment = CourseEnrollmentAllowedFactory(auto_enroll=True)  # lint-amnesty, pylint: disable=unused-variable

        # the e-mail will change to test@edx.org (from something else)
        assert self.user.email != 'test@edx.org'

        # there's a CEA for the new e-mail
        assert CourseEnrollmentAllowed.objects.count() == 1
        assert CourseEnrollmentAllowed.objects.filter(email='test@edx.org').count() == 1

        # Changing the e-mail to the enrollment-allowed e-mail should enroll
        self.user.email = 'test@edx.org'
        self.user.save()
        self.assert_user_enrollment_occurred('edX/toy/2012_Fall')

        # CEAs shouldn't have been affected
        assert CourseEnrollmentAllowed.objects.count() == 1
        assert CourseEnrollmentAllowed.objects.filter(email='test@edx.org').count() == 1


@skip_unless_lms
class EnrollmentEventsTest(SharedModuleStoreTestCase, OpenEdxEventsTestMixin):
    """
    Tests for the Open edX Events associated with the enrollment process through the enroll method.

    This class guarantees that the following events are sent during the user's enrollment, with
    the exact Data Attributes as the event definition stated:

        - COURSE_ENROLLMENT_CREATED: sent after the user's enrollment.
    """

    ENABLED_OPENEDX_EVENTS = ["org.openedx.learning.course.enrollment.created.v1"]

    @classmethod
    def setUpClass(cls):
        """
        Set up class method for the Test class.

        This method starts manually events isolation. Explanation here:
        openedx/core/djangoapps/user_authn/views/tests/test_events.py#L44
        """
        super().setUpClass()
        cls.start_events_isolation()

    def setUp(self):  # pylint: disable=arguments-differ
        super().setUp()
        self.course = CourseFactory.create()
        self.user = UserFactory.create(
            username="test",
            email="test@example.com",
            password="password",
        )
        self.user_profile = UserProfileFactory.create(user=self.user, name="Test Example")
        self.receiver_called = False

    def _event_receiver_side_effect(self, **kwargs):  # pylint: disable=unused-argument
        """
        Used show that the Open edX Event was called by the Django signal handler.
        """
        self.receiver_called = True

    def test_enrollment_created_event_emitted(self):
        """
        Test whether the student enrollment event is sent after the user's
        enrollment process.

        Expected result:
            - COURSE_ENROLLMENT_CREATED is sent and received by the mocked receiver.
            - The arguments that the receiver gets are the arguments sent by the event
            except the metadata generated on the fly.
        """
        event_receiver = mock.Mock(side_effect=self._event_receiver_side_effect)
        COURSE_ENROLLMENT_CREATED.connect(event_receiver)

        enrollment = CourseEnrollment.enroll(self.user, self.course.id)

        self.assertTrue(self.receiver_called)
        self.assertDictContainsSubset(
            {
                "signal": COURSE_ENROLLMENT_CREATED,
                "sender": None,
                "enrollment": CourseEnrollmentData(
                    user=UserData(
                        pii=UserPersonalData(
                            username=self.user.username,
                            email=self.user.email,
                            name=self.user.profile.name,
                        ),
                        id=self.user.id,
                        is_active=self.user.is_active,
                    ),
                    course=CourseData(
                        course_key=self.course.id,
                        display_name=self.course.display_name,
                    ),
                    mode=enrollment.mode,
                    is_active=enrollment.is_active,
                    creation_date=enrollment.created,
                ),
            },
            event_receiver.call_args.kwargs
        )
