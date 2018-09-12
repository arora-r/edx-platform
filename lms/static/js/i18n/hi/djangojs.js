

(function (globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function (n) {
    var v=(n != 1);
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  
  /* gettext library */

  django.catalog = {
    " and ": "\u0914\u0930", 
    "Admin": "\u0935\u094d\u092f\u0935\u0938\u094d\u0925\u093e\u092a\u0915", 
    "Are you sure you want to delete this comment?": "\u0915\u094d\u092f\u093e \u0906\u092a \u0935\u093e\u0915\u0908 \u0907\u0938 \u091f\u093f\u092a\u094d\u092a\u0923\u0940 \u0915\u094b \u0939\u091f\u093e\u0928\u093e \u091a\u093e\u0939\u0924\u0947 \u0939\u0948\u0902?", 
    "Are you sure you want to delete this page? This action cannot be undone.": "\u0915\u094d\u200d\u092f\u093e \u0906\u092a \u0907\u0938 \u092a\u0943\u0937\u094d\u200d\u0920 \u0915\u094b \u0928\u0937\u094d\u091f \u0915\u0930\u0928\u0947 \u0939\u0947\u0924\u0941 \u0938\u0939\u092e\u0924 \u0939\u0948\u0902 ? \u092f\u0939 \u0915\u094d\u0930\u093f\u092f\u093e \u0905\u0938\u0902\u092a\u093e\u0926\u093f\u0924 \u0928\u0939\u0940\u0902 \u0915\u0940 \u091c\u093e \u0938\u0915\u0924\u0940 \u0939\u0948\u0964", 
    "Are you sure you want to delete this post?": "\u0915\u094d\u092f\u093e \u0906\u092a \u0935\u093e\u0915\u0908 \u0907\u0938 \u092a\u094b\u0938\u094d\u091f \u0915\u094b \u0939\u091f\u093e\u0928\u093e \u091a\u093e\u0939\u0924\u0947 \u0939\u0948\u0902?", 
    "Are you sure you want to delete this response?": "\u0915\u094d\u092f\u093e \u0906\u092a \u0935\u093e\u0915\u0908 \u0907\u0938 \u091c\u0935\u093e\u092c \u0915\u094b \u0939\u091f\u093e\u0928\u093e \u091a\u093e\u0939\u0924\u0947 \u0939\u0948\u0902?", 
    "Are you sure you want to delete this update?": "\u0915\u094d\u092f\u093e \u0906\u092a \u0907\u0938 \u0905\u092a\u0921\u0947\u091f \u0915\u094b \u0939\u091f\u093e\u0928\u093e \u091a\u093e\u0939\u0924\u0947\u0902 \u0939\u0948\u0902?", 
    "Are you sure you wish to delete this item. It cannot be reversed!\n\nAlso any content that links/refers to this item will no longer work (e.g. broken images and/or links)": "\u0915\u094d\u092f\u093e \u0906\u092a \u0935\u093e\u0915\u0908 \u0907\u0938 \u0905\u0902\u0936 \u0915\u094b \u0928\u0937\u094d\u091f \u0915\u0930\u0928\u093e \u091a\u093e\u0939\u0924\u0947 \u0939\u0948\u0902? \u0907\u0938 \u0915\u094d\u0930\u093f\u092f\u093e \u0915\u094b \u092c\u0926\u0932\u093e \u0928\u0939\u0940\u0902 \u091c\u093e \u0938\u0915\u0924\u093e! \n\u0914\u0930 \u0924\u094b \u0914\u0930 \u0907\u0938 \u0905\u0902\u0936 \u0938\u0947 \u091c\u0941\u0921\u093c\u0947 \u0939\u0941\u092f\u0947 \u0905\u0928\u094d\u092f \u0905\u0902\u0936 \u092f\u093e \u0932\u093f\u0902\u0915\u094d\u0938 \u092d\u0940 \u0938\u093e\u0925 \u0939\u0940 \u092e\u0947\u0902 \u0928\u0937\u094d\u091f \u0939\u094b \u091c\u093e\u092f\u0947\u0902\u0917\u0947\u0964", 
    "Blockquote": "\u092c\u094d\u0932\u094c\u0915\u0915\u094d\u0935\u094b\u091f", 
    "Blockquote (Ctrl+Q)": "\u092c\u094d\u0932\u0949\u0915\u0915\u094d\u0935\u094b\u091f (Ctrl+Q)", 
    "Bold (Ctrl+B)": "\u092c\u094b\u0932\u094d\u0921 (Ctrl+B)", 
    "Bulleted List (Ctrl+U)": "\u092c\u0941\u0932\u0947\u091f\u094b\u0902 \u0935\u093e\u0932\u0940 \u0938\u0942\u091a\u0940 (Ctrl+U)", 
    "Cancel": "\u0930\u0926\u094d\u0926 \u0915\u0930\u0947\u0902", 
    "Close": "\u092c\u0902\u0926 \u0915\u0930\u0947\u0902", 
    "Code Sample (Ctrl+K)": "\u0915\u094b\u0921 \u0938\u093e\u092e\u094d\u092a\u0932 (Ctrl+K)", 
    "Component": "\u0916\u0902\u0921", 
    "Course Number:": "\u092a\u093e\u0920\u094d\u092f\u0915\u094d\u0930\u092e \u0938\u0902\u0916\u094d\u092f\u093e:", 
    "Course Outline": "\u092a\u093e\u0920\u094d\u092f\u0915\u094d\u0930\u092e \u0915\u0940 \u0930\u0942\u092a\u0930\u0947\u0916\u093e", 
    "Date Added": "\u091c\u094b\u0921\u093c\u0940 \u0917\u092f\u0940 \u0924\u093f\u0925\u093f", 
    "Delete": "\u0928\u0937\u094d\u091f \u0915\u0930\u0947\u0902", 
    "Delete File Confirmation": "\u092b\u093e\u0907\u0932 \u0928\u0937\u094d\u091f \u0915\u0930\u0928\u0947 \u0915\u093e \u092a\u0941\u0937\u094d\u091f\u093f\u0915\u0930\u0923", 
    "Delete Page Confirmation": "\u092a\u0943\u0937\u094d\u200d\u0920 \u0915\u0930\u0928\u0947 \u0915\u093e \u092a\u0941\u0937\u094d\u091f\u093f\u0915\u0930\u0923", 
    "Deleting": "\u0928\u0937\u094d\u091f \u0939\u094b \u0930\u0939\u093e \u0939\u0948", 
    "Description": "\u0935\u093f\u0935\u0930\u0923", 
    "Duration (sec)": "\u0905\u0935\u0927\u093f (sec)", 
    "Edit": "\u092a\u0930\u093f\u0935\u0930\u094d\u0924\u0928 \u0915\u0930\u0947\u0902", 
    "Editing: %(title)s": "\u0938\u0902\u0936\u094b\u0927\u0928 \u0915\u0930\u0928\u093e:  %(title)s", 
    "Editor": "\u0938\u0902\u092a\u093e\u0926\u0915", 
    "Email": "\u0908-\u092e\u0947\u0932", 
    "Emails successfully sent. The following users are no longer enrolled in the course:": "\u0908-\u092e\u0947\u0932\u0947\u0902 \u0938\u092b\u093c\u0932\u0924\u093e\u092a\u0942\u0930\u094d\u0935\u0915 \u092d\u0947\u091c \u0926\u0940 \u0917\u0908\u0902\u0964 \u0907\u0928 \u0909\u092a\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e\u0913\u0902 \u0915\u093e \u0928\u093e\u092e \u092a\u093e\u0920\u094d\u092f\u0915\u094d\u0930\u092e \u0938\u0947 \u0939\u091f\u093e \u0926\u093f\u092f\u093e \u0917\u092f\u093e \u0939\u0948:", 
    "Error adding/removing users as beta testers.": "\u092c\u0940\u091f\u093e \u092a\u0930\u0940\u0915\u094d\u0937\u0915 \u0915\u0947 \u0930\u0942\u092a \u092e\u0947\u0902 \u0909\u092a\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e\u0913\u0902 \u0915\u094b \u0939\u091f\u093e\u0928\u0947/\u091c\u094b\u0921\u093c\u0928\u0947 \u092e\u0947\u0902 \u0924\u094d\u0930\u0941\u091f\u093f\u0964", 
    "Error changing user's permissions.": "\u0909\u092a\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e \u0915\u0940 \u0905\u0928\u0941\u092e\u0924\u093f\u092f\u094b\u0902 \u0915\u094b \u092c\u0926\u0932\u0928\u0947 \u092e\u0947\u0902 \u0924\u094d\u0930\u0941\u091f\u093f\u0964", 
    "Error enrolling/unenrolling users.": "\u0909\u092a\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e\u0913\u0902 \u0915\u093e \u0928\u093e\u092e\u093e\u0902\u0915\u0928/\u0905\u0928\u093e\u092e\u093e\u0902\u0915\u0928 \u0915\u0930\u0928\u0947 \u092e\u0947\u0902 \u0924\u094d\u0930\u0941\u091f\u093f\u0964 ", 
    "Error generating grades. Please try again.": "\u0917\u094d\u0930\u0947\u0921 \u092c\u0928\u093e\u0928\u0947 \u092e\u0947 \u0915\u0941\u091b \u0917\u0921\u093c\u092c\u0921\u093c\u0964 \u0915\u0943\u092a\u092f\u093e \u092b\u093f\u0930 \u0938\u0947 \u0915\u094b\u0936\u093f\u0936 \u0915\u0930\u0947\u0902\u0964", 
    "Error getting student list.": "\u091b\u093e\u0924\u094d\u0930 \u0938\u0942\u091a\u0940 \u092a\u093e\u0928\u0947 \u092e\u0947\u0902 \u0915\u0941\u091b \u0917\u0921\u093c\u092c\u0921\u093c\u0964", 
    "Error listing task history for this student and problem.": "\u0907\u0938 \u091b\u093e\u0924\u094d\u0930 \u0914\u0930 \u0938\u092e\u0938\u094d\u092f\u093e \u0915\u0947 \u0915\u093e\u092e \u0915\u0947 \u0907\u0924\u093f\u0939\u093e\u0938 \u0915\u094b \u0938\u0942\u091a\u0940\u092c\u0926\u094d\u0927 \u0915\u0930\u0928\u0947 \u092e\u0947\u0902 \u0915\u0941\u091b \u0917\u0921\u093c\u092c\u0921\u093c\u0964", 
    "Error retrieving grading configuration.": "\u0917\u094d\u0930\u0947\u0921\u093f\u0902\u0917 \u0915\u0949\u0928\u092b\u093c\u093f\u0917\u0930\u0947\u0936\u0928 \u0935\u093e\u092a\u093f\u0938 \u0932\u0947\u0928\u0947 \u092e\u0947\u0902 \u0915\u0941\u091b \u0917\u0921\u093c\u092c\u0921\u093c\u0964", 
    "Error sending email.": "\u0908-\u092e\u0947\u0932 \u0928\u0939\u0940\u0902 \u092d\u0947\u091c\u093e \u091c\u093e \u0938\u0915\u093e\u0964", 
    "Files must be in JPEG or PNG format.": "\u092b\u093e\u0907\u0932\u0947\u0902 JPEG \u092f\u093e PNG \u092b\u0949\u0930\u094d\u092e\u0947\u091f \u092e\u0947\u0902 \u0939\u094b\u0928\u0940 \u091a\u093e\u0939\u093f\u092f\u0947\u0902.", 
    "Find discussions": "\u091a\u0930\u094d\u091a\u093e\u0913\u0902 \u0915\u094b \u0922\u0942\u0902\u0922\u0947\u0902", 
    "Fullscreen": "\u092a\u0942\u0930\u094d\u0923 \u0938\u094d\u0915\u094d\u0930\u0940\u0928", 
    "Grace period must be specified in HH:MM format.": "\u092e\u0941\u0939\u0932\u0924 \u0915\u0940 \u0905\u0935\u0927\u093f \u0915\u093e \u092a\u094d\u0930\u093e\u0930\u0942\u092a HH:MM \u0939\u094b\u0928\u093e \u091a\u093e\u0939\u093f\u090f.", 
    "Group name is required": "\u0938\u092e\u0942\u0939 \u0915\u0947 \u0928\u093e\u092e \u0915\u0940 \u0906\u0935\u0936\u094d\u200d\u092f\u0915\u0924\u093e \u0939\u0948", 
    "Heading": "\u0936\u0940\u0930\u094d\u0937\u0915", 
    "Heading (Ctrl+H)": "\u0936\u0940\u0930\u094d\u0937\u0915 (Ctrl+H)", 
    "Hide Discussion": " \u091a\u0930\u094d\u091a\u093e \u091b\u093f\u092a\u093e\u090f\u0902", 
    "Horizontal Rule (Ctrl+R)": "\u0915\u094d\u0937\u0948\u0924\u093f\u091c \u0928\u093f\u092f\u092e (Ctrl + R)", 
    "Hyperlink (Ctrl+L)": "\u0939\u093e\u0907\u092a\u0930\u0932\u093f\u0902\u0915 (Ctrl+L)", 
    "Image (Ctrl+G)": "\u0907\u092e\u0947\u091c (Ctrl+G)", 
    "Italic (Ctrl+I)": "\u0906\u0907\u091f\u0948\u0932\u093f\u0915 (Ctrl+I)", 
    "Key should only contain letters, numbers, _, or -": "\u091a\u093e\u092c\u0940 \u092e\u0947\u0902 \u092e\u093e\u0924\u094d\u0930 \u0905\u0915\u094d\u0937\u0930, \u0938\u0902\u0916\u094d\u092f\u093e, _, \u092f\u093e - \u0939\u0940 \u0939\u094b \u0938\u0915\u0924\u0947 \u0939\u0948\u0902", 
    "Links are generated on demand and expire within 5 minutes due to the sensitive nature of student information.": "\u091b\u093e\u0924\u094d\u0930 \u0917\u094d\u0930\u0947\u0921 \u091c\u093e\u0928\u0915\u093e\u0930\u0940 \u0915\u0940 \u0938\u0902\u0935\u0947\u0926\u0928\u0936\u0940\u0932 \u092a\u094d\u0930\u0915\u0943\u0924\u093f \u0915\u0947 \u0915\u093e\u0930\u0923 \u0932\u093f\u0902\u0915\u094d\u0938 \u092e\u093e\u0902\u0917 \u092a\u0930 \u0939\u0940 \u0909\u0924\u094d\u092a\u0928\u094d\u0928 \u0939\u094b\u0924\u0947 \u0939\u0948 \u0914\u0930 5 \u092e\u093f\u0928\u091f \u0915\u0947 \u0905\u0902\u0926\u0930-\u0905\u0902\u0926\u0930 \u0938\u092e\u093e\u092a\u094d\u0924 \u0939\u094b \u091c\u093e\u0924\u0947 \u0939\u0948\u0902", 
    "List item": "\u0906\u0907\u091f\u092e \u0938\u0942\u091a\u0940 ", 
    "Load Another File": "\u0915\u094b\u0908 \u0914\u0930 \u092b\u093e\u0907\u0932 \u0932\u094b\u0921 \u0915\u0930\u0947\u0902", 
    "Load all responses": "\u0938\u092d\u0940 \u091c\u0935\u093e\u092c \u0932\u094b\u0921 \u0915\u0930\u0947\u0902", 
    "Loading content": "\u0932\u094b\u0921\u093f\u0902\u0917 \u0915\u0902\u091f\u0947\u0902\u091f", 
    "Loading more threads": "\u0914\u0930 \u0915\u0921\u093c\u093f\u092f\u093e\u0902 \u0932\u094b\u0921 \u0915\u0930\u0947\u0902", 
    "Markdown Editing Help": "\u092e\u093e\u0930\u094d\u0915\u0921\u093e\u0909\u0928 \u090f\u0921\u0940\u091f\u093f\u0902\u0917 \u092e\u0926\u0926", 
    "Module state successfully deleted.": "\u092e\u0949\u0921\u094d\u092f\u0942\u0932 \u0938\u094d\u0925\u093f\u0924\u093f \u0915\u094b \u0938\u092b\u0932\u0924\u093e\u092a\u0942\u0930\u094d\u0935\u0915 \u0939\u091f\u093e\u092f\u093e \u0917\u092f\u093e\u0964", 
    "Name": "\u0928\u093e\u092e", 
    "Not in Use": "\u0909\u092a\u092f\u094b\u0917 \u092e\u0947\u0902 \u0928\u0939\u0940\u0902", 
    "Number of Students": "\u091b\u093e\u0924\u094d\u0930\u094b\u0902 \u0915\u0940 \u0938\u0902\u0916\u094d\u092f\u093e", 
    "Numbered List (Ctrl+O)": "\u0928\u092e\u094d\u092c\u0930\u094b\u0902 \u0935\u093e\u0932\u0940 \u0938\u0942\u091a\u0940 (Ctrl+O)", 
    "OK": "\u0920\u0940\u0915", 
    "OpenAssessment Save Error": "\u0916\u0941\u0932\u0947 \u092e\u0942\u0932\u094d\u200d\u092f\u093e\u0902\u0915\u0928 \u0915\u094b \u091c\u092e\u093e \u0915\u0930\u0928\u0947 \u092e\u0947\u0902 \u0924\u094d\u0930\u0941\u091f\u093f \u092a\u094d\u0930\u093e\u092a\u094d\u200d\u0924 \u0939\u0941\u0908", 
    "Please address the errors on this page first, and then save your progress.": "\u0915\u0943\u092a\u092f\u093e \u0907\u0938 \u092a\u0943\u0937\u094d\u0920 \u092a\u0930 \u091c\u094b \u0917\u0932\u0924\u093f\u092f\u093e\u0901 \u0939\u0948\u0902 \u092a\u0939\u0932\u0947 \u0909\u0928\u094d\u0939\u0947\u0902 \u0920\u0940\u0915 \u0915\u0930\u0947\u0902 \u092b\u093f\u0930 \u0905\u092a\u0928\u0947 \u0915\u093e\u092e \u0915\u094b \u092c\u091a\u093e\u092f\u0947\u0902\u0964", 
    "Please enter a student email address or username.": "\u0915\u0943\u092a\u092f\u093e \u091b\u093e\u0924\u094d\u0930 \u0915\u093e \u0908-\u092e\u0947\u0932 \u092a\u0924\u093e \u092f\u093e \u0909\u092a\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e \u0928\u093e\u092e \u0926\u0930\u094d\u091c \u0915\u0930\u0947\u0902\u0964", 
    "Please enter a username or email.": "\u0915\u0943\u092a\u092f\u093e \u0909\u092a\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e \u0928\u093e\u092e \u092f\u093e \u0908-\u092e\u0947\u0932 \u092a\u0924\u093e \u0926\u0930\u094d\u091c \u0915\u0930\u0947\u0902\u0964", 
    "Please enter an integer between 0 and 100.": "\u0915\u0943\u092a\u092f\u093e 0 \u0938\u0947 100 \u0915\u0947 \u092c\u0940\u091a \u0915\u0940 \u092a\u0942\u0930\u094d\u0923\u093e\u0902\u0915 \u0938\u0902\u0916\u094d\u092f\u093e \u0926\u0930\u094d\u091c \u0915\u0930\u0947\u0902.", 
    "Please enter an integer greater than 0.": "\u0915\u0943\u092a\u093e\u092f 0 \u0938\u0947 \u092c\u095c\u0940 \u092a\u0942\u0930\u094d\u0923\u093e\u0902\u0915 \u0938\u0902\u0916\u094d\u092f\u093e \u0926\u0947\u0902\u0964", 
    "Please enter non-negative integer.": "\u0938\u0915\u093e\u0930\u093e\u0924\u094d\u092e\u0915 \u092a\u0942\u0930\u094d\u0923\u093e\u0902\u0915 \u0938\u0902\u0916\u094d\u092f\u093e \u0926\u0930\u094d\u091c \u0915\u0930\u0947\u0902.", 
    "Previous": "\u092a\u093f\u091b\u0932\u093e", 
    "Redo (Ctrl+Shift+Z)": "\u092b\u093f\u0930 \u0938\u0947 \u0915\u0930\u0947\u0902 (Ctrl+Shift+Z)", 
    "Redo (Ctrl+Y)": "\u092b\u093f\u0930 \u0938\u0947 \u0915\u0930\u0947\u0902 (Ctrl+Y)", 
    "Remove": "\u0939\u091f\u093e\u090f\u0902", 
    "Requester": "\u0928\u093f\u0935\u0947\u0926\u0915", 
    "Required": "\u0906\u0935\u0936\u094d\u092f\u0915", 
    "Save": "\u0938\u0947\u0935 \u0915\u0930\u0947\u0902", 
    "Save Changes": "\u092a\u0930\u093f\u0935\u0930\u094d\u0924\u0928 \u0938\u0947\u0935 \u0915\u0930\u0947\u0902", 
    "Saving": "\u0938\u0947\u0935 \u0939\u094b \u0930\u0939\u093e \u0939\u0948", 
    "Settings": "\u0938\u0947\u091f\u093f\u0902\u0917\u094d\u0938", 
    "Show Discussion": " \u091a\u0930\u094d\u091a\u093e \u0926\u093f\u0916\u093e\u090f\u0902", 
    "Showing all responses": "\u0938\u092d\u0940 \u091c\u0935\u093e\u092c \u0926\u093f\u0916\u093e\u090f \u091c\u093e \u0930\u0939\u0947 \u0939\u0948\u0902", 
    "Sorry, there was an error parsing the subtitles that you uploaded. Please check the format and try again.": "\u0939\u092e\u0947\u0902 \u0916\u0947\u0926 \u0939\u0948, \u0915\u093f \u0906\u092a\u0915\u0947 \u0926\u094d\u0935\u093e\u0930\u093e \u0905\u0902\u0924\u0930\u093f\u0924 \u0915\u093f\u092f\u0947 \u091c\u093e\u0928\u0947 \u0935\u093e\u0932\u0947 \u0909\u092a\u0916\u0902\u0921\u094b\u0902 \u092e\u0947\u0902 \u0924\u094d\u0930\u0941\u091f\u093f \u092a\u094d\u0930\u093e\u092a\u094d\u200d\u0924 \u0939\u0941\u0908\u0964 \u0915\u0943\u092a\u092f\u093e \u092a\u094d\u0930\u093e\u0930\u0942\u092a \u0915\u0940 \u091c\u093e\u0902\u091a \u0915\u0930 \u092a\u0941\u0928: \u092a\u094d\u0930\u092f\u093e\u0938 \u0915\u0930\u0947\u0902\u0964 ", 
    "Staff": "\u0915\u0930\u094d\u092e\u091a\u093e\u0930\u0940", 
    "Submitted": "\u092a\u094d\u0930\u0938\u094d\u0924\u0941\u0924 \u0915\u0930 \u0926\u093f\u092f\u093e \u0917\u092f\u093e", 
    "Successfully enrolled and sent email to the following users:": "\u0938\u092b\u093c\u0932\u0924\u093e\u092a\u0942\u0930\u094d\u0935\u0915 \u0926\u093e\u0916\u093f\u0932\u093e \u0939\u094b \u0917\u092f\u093e \u0914\u0930 \u0907\u0928-\u0907\u0928 \u091b\u093e\u0924\u094d\u0930\u094b\u0902 \u0915\u094b \u0908-\u092e\u0947\u0932 \u092d\u0947\u091c \u0926\u0940 \u0917\u0908 \u0939\u0948:", 
    "Successfully enrolled the following users:": "\u0907\u0928 \u0909\u092a\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e\u0913\u0902 \u0915\u093e \u0938\u092b\u093c\u0932\u0924\u093e\u092a\u0942\u0930\u094d\u0935\u0915 \u0928\u093e\u092e\u093e\u0902\u0915\u0928 \u0939\u094b \u0917\u092f\u093e:", 
    "Successfully sent enrollment emails to the following users. They will be allowed to enroll once they register:": "\u0907\u0928 \u091b\u093e\u0924\u094d\u0930\u094b\u0902 \u0915\u094b \u0938\u092b\u093c\u0932\u0924\u093e\u092a\u0942\u0930\u094d\u0935\u0915 \u0928\u093e\u092e\u093e\u0902\u0915\u0928 \u0915\u093e \u0908-\u092e\u0947\u0932 \u092d\u0947\u091c\u093e \u0926\u093f\u092f\u093e \u0917\u092f\u093e\u0964 \u0930\u091c\u093f\u0938\u094d\u091f\u0930 \u0939\u094b \u091c\u093e\u0928\u0947 \u092a\u0930 \u0909\u0928\u094d\u0939\u0947\u0902 \u0928\u093e\u092e\u093e\u0902\u0915\u0928 \u0915\u0930\u0928\u0947 \u0915\u0940 \u0905\u0928\u0941\u092e\u0924\u093f \u0939\u094b\u0917\u0940:", 
    "Successfully sent enrollment emails to the following users. They will be enrolled once they register:": "\u0907\u0928 \u091b\u093e\u0924\u094d\u0930\u094b\u0902 \u0915\u094b \u0938\u092b\u093c\u0932\u0924\u093e\u092a\u0942\u0930\u094d\u0935\u0915 \u0928\u093e\u092e\u093e\u0902\u0915\u0928 \u0915\u093e \u0908-\u092e\u0947\u0932 \u092d\u0947\u091c \u0926\u093f\u092f\u093e \u0917\u092f\u093e \u0939\u0948\u0964 \u0930\u091c\u093f\u0938\u094d\u091f\u0930 \u0915\u0930\u0928\u0947 \u0915\u0947 \u092c\u093e\u0926 \u0907\u0928\u0915\u093e \u0928\u093e\u092e\u093e\u0902\u0915\u0928 \u0915\u0930 \u0926\u093f\u092f\u093e \u091c\u093e\u090f\u0917\u093e\u0903", 
    "Task Progress": "\u0915\u093e\u0930\u094d\u092f \u092a\u094d\u0930\u0917\u0924\u093f", 
    "Task Type": "\u0915\u093e\u0930\u094d\u092f \u092a\u094d\u0930\u0915\u093e\u0930", 
    "Task inputs": "\u091f\u093e\u0938\u094d\u0915 \u0907\u0928\u092a\u0941\u091f", 
    "The course must have an assigned start date.": "\u0907\u0938 \u092a\u093e\u0920\u094d\u092f\u0915\u094d\u0930\u092e \u0915\u0947 \u092a\u094d\u0930\u093e\u0930\u0902\u092d \u0939\u094b\u0928\u0947 \u0915\u0940 \u0924\u093f\u0925\u093f \u0939\u094b\u0928\u0940 \u091a\u093e\u0939\u093f\u090f.", 
    "The enrollment end date cannot be after the course end date.": "\u0907\u0938 \u092a\u093e\u0920\u094d\u092f\u0915\u094d\u0930\u092e \u0915\u0947 \u0928\u093e\u092e\u093e\u0902\u0915\u0928 \u0915\u0940 \u0938\u092e\u093e\u092a\u094d\u0924\u093f \u0924\u093f\u0925\u093f \u0907\u0938 \u092a\u093e\u0920\u094d\u092f\u0915\u094d\u0930\u092e \u0915\u0947 \u092a\u094d\u0930\u093e\u0930\u0902\u092d \u0915\u0940 \u0924\u093f\u0925\u093f \u0938\u0947 \u092a\u0936\u094d\u091a\u093e\u0924 \u0928\u0939\u0940\u0902 \u0939\u094b \u0938\u0915\u0924\u0940.", 
    "The enrollment start date cannot be after the enrollment end date.": "\u0907\u0938 \u092a\u093e\u0920\u094d\u092f\u0915\u094d\u0930\u092e \u0915\u0947 \u0928\u093e\u092e\u093e\u0902\u0915\u0928 \u0915\u0947 \u092a\u094d\u0930\u093e\u0930\u0902\u092d \u0939\u094b\u0928\u0947 \u0915\u0940 \u0924\u093f\u0925\u093f \u0907\u0938\u0915\u0947 \u0928\u093e\u092e\u093e\u0902\u0915\u0928 \u0915\u0940 \u0938\u092e\u093e\u092a\u094d\u0924\u093f \u0924\u093f\u0925\u093f \u0938\u0947 \u092a\u0936\u094d\u091a\u093e\u0924 \u0928\u0939\u0940\u0902 \u0939\u094b \u0938\u0915\u0924\u0940.", 
    "The following users are no longer enrolled in the course:": "\u0907\u0928 \u0909\u092a\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e\u0913\u0902 \u0915\u093e \u0928\u093e\u092e \u092a\u093e\u0920\u094d\u092f\u0915\u094d\u0930\u092e \u0938\u0947 \u0939\u091f\u093e \u0926\u093f\u092f\u093e \u0917\u092f\u093e \u0939\u0948:", 
    "There is no email history for this course.": "\u0907\u0938 \u092a\u093e\u0920\u094d\u092f\u0915\u094d\u0930\u092e \u0915\u093e \u0915\u094b\u0908 \u0908-\u092e\u0947\u0932 \u0907\u0924\u093f\u0939\u093e\u0938 \u0928\u0939\u0940\u0902 \u0939\u0948\u0964", 
    "There was an error obtaining email task history for this course.": "\u0907\u0938 \u092a\u093e\u0920\u094d\u092f\u0915\u094d\u0930\u092e \u0915\u0947 \u0908-\u092e\u0947\u0932 \u091f\u093e\u0938\u094d\u0915 \u0932\u093f\u0938\u094d\u091f \u0915\u093e \u0907\u0924\u093f\u0939\u093e\u0938 \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0915\u0930\u0928\u0947 \u092e\u0947\u0902 \u0915\u0941\u091b \u0917\u0921\u093c\u092c\u0921\u093c \u0939\u0941\u0908\u0964", 
    "There was an error with the upload": "\u0905\u092a\u0932\u094b\u0921 \u0915\u0930\u0928\u0947 \u092e\u0947\u0902 \u0924\u094d\u0930\u0941\u091f\u093f \u0939\u0941\u0908", 
    "There's already another assignment type with this name.": "\u0907\u0938 \u0928\u093e\u092e \u0915\u093e \u0915\u093e\u0930\u094d\u092f \u092a\u0939\u0932\u0947 \u0938\u0947 \u0939\u0940 \u092e\u094c\u091c\u0942\u0926 \u0939\u0948", 
    "These users were not added as beta testers:": "\u0907\u0928 \u0909\u092a\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e\u0913\u0902 \u0915\u094b \u092c\u0940\u091f\u093e \u092a\u0930\u0940\u0915\u094d\u0937\u0915 \u0915\u0947 \u0930\u0942\u092a \u092e\u0947\u0902 \u091c\u094b\u0921\u093c\u093e \u0928\u0939\u0940\u0902 \u0917\u092f\u093e:", 
    "These users were not affiliated with the course so could not be unenrolled:": "\u0907\u0928 \u0909\u092a\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e\u0913\u0902 \u0915\u093e \u092a\u093e\u0920\u094d\u092f\u0915\u094d\u0930\u092e \u0938\u0947 \u0915\u094b\u0908 \u0938\u0902\u092c\u0902\u0927 \u0928\u0939\u0940\u0902 \u0925\u093e \u0907\u0938\u0932\u093f\u090f \u0907\u0928\u0915\u093e \u0928\u093e\u092e\u093e\u0902\u0915\u0928 \u0930\u0926\u094d\u0926 \u0928\u0939\u0940\u0902 \u0915\u093f\u092f\u093e \u091c\u093e \u0938\u0915\u093e:", 
    "These users were not removed as beta testers:": "\u0907\u0928 \u0909\u092a\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e\u0913\u0902 \u0915\u094b \u092c\u0940\u091f\u093e \u092a\u0930\u0940\u0915\u094d\u0937\u0915 \u0915\u0947 \u0930\u0942\u092a \u0938\u0947 \u0928\u0939\u0940\u0902 \u0939\u091f\u093e\u092f\u093e \u0917\u092f\u093e:", 
    "These users were successfully added as beta testers:": "\u0907\u0928 \u0909\u092a\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e\u0913\u0902 \u0915\u094b \u0938\u092b\u093c\u0932\u0924\u093e\u092a\u0942\u0930\u094d\u0935\u0915 \u092c\u0940\u091f\u093e \u092a\u0930\u0940\u0915\u094d\u0937\u0915 \u0915\u0947 \u0930\u0942\u092a \u092e\u0947\u0902 \u091c\u094b\u0921\u093c \u0926\u093f\u092f\u093e \u0917\u092f\u093e:", 
    "These users were successfully removed as beta testers:": "\u0907\u0928 \u0909\u092a\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e\u0913\u0902 \u0915\u094b \u0938\u092b\u093c\u0932\u0924\u093e\u092a\u0942\u0930\u094d\u0935\u0915 \u092c\u0940\u091f\u093e \u092a\u0930\u0940\u0915\u094d\u0937\u0915 \u0915\u0947 \u0930\u0942\u092a \u0938\u0947 \u0939\u091f\u093e \u0926\u093f\u092f\u093e \u0917\u092f\u093e:", 
    "These users will be allowed to enroll once they register:": "\u0907\u0928 \u091b\u093e\u0924\u094d\u0930\u094b\u0902 \u0915\u094b \u0930\u091c\u093f\u0938\u094d\u091f\u0930 \u0939\u094b \u091c\u093e\u0928\u0947 \u092a\u0930 \u0928\u093e\u092e\u093e\u0902\u0915\u0928 \u0932\u0947\u0928\u0947 \u0915\u0940 \u0905\u0928\u0941\u092e\u0924\u093f \u0939\u094b\u0917\u0940:", 
    "These users will be enrolled once they register:": "\u0930\u091c\u093f\u0938\u094d\u091f\u0930 \u0939\u094b\u0928\u0947 \u0915\u0947 \u092c\u093e\u0926 \u0907\u0928 \u091b\u093e\u0924\u094d\u0930\u094b\u0902 \u0915\u093e \u0928\u093e\u092e\u093e\u0902\u0915\u0928 \u0915\u0930 \u0926\u093f\u092f\u093e \u091c\u093e\u090f\u0917\u093e:", 
    "This action cannot be undone.": "\u0907\u0938 \u0915\u094d\u0930\u093f\u092f\u093e \u0915\u094b \u092a\u0942\u0930\u094d\u0935\u0935\u0924 \u0928\u0939\u0940\u0902 \u0915\u093f\u092f\u093e \u091c\u093e \u0938\u0915\u0924\u093e \u0939\u0948.", 
    "This link will open in a new browser window/tab": "\u092f\u0939 \u0932\u093f\u0902\u0915 \u090f\u0915 \u0928\u090f \u092c\u094d\u0930\u093e\u0909\u095b\u0930 \u0935\u093f\u0902\u0921\u094b / \u091f\u0948\u092c \u092e\u0947\u0902 \u0916\u0941\u0932\u0947\u0917\u0940", 
    "This may be happening because of an error with our server or your internet connection. Try refreshing the page or making sure you are online.": "\u0939\u092e\u093e\u0930\u0947 \u0938\u0930\u094d\u0935\u0930 \u092a\u0930 \u0924\u094d\u0930\u0941\u091f\u093f \u0915\u0947 \u0935\u091c\u0939 \u0938\u0947 \u092f\u093e \u0906\u092a\u0915\u0947 \u0907\u0902\u091f\u0930\u0928\u0947\u091f \u0915\u0928\u0947\u0915\u094d\u0936\u0928 \u0915\u0947 \u0938\u093e\u0925 \u0915\u093f\u0938\u0940 \u0924\u094d\u0930\u0941\u091f\u093f \u0915\u0947 \u0915\u093e\u0930\u0923 \u092f\u0939 \u0939\u094b \u0938\u0915\u0924\u093e \u0939\u0948| \u092a\u0943\u0937\u094d\u0920 \u092b\u093f\u0930 \u0938\u0947 \u0916\u094b\u0932\u0947 \u092f\u093e \u0938\u0941\u0928\u093f\u0936\u094d\u091a\u093f\u0924 \u0915\u0930\u0947\u0902 \u0915\u093f \u0906\u092a \u0911\u0928\u0932\u093e\u0907\u0928 \u0939\u0948\u0902|", 
    "Undo (Ctrl+Z)": "\u092b\u093f\u0930 \u0938\u0947 \u0915\u0930\u0947\u0902 (Ctrl+Z)", 
    "Unit": "\u092f\u0942\u0928\u093f\u091f", 
    "Unknown": "\u0905\u092a\u0930\u093f\u091a\u093f\u0924", 
    "Upload New File": "\u0928\u0908 \u092b\u093e\u0907\u0932 \u0905\u092a\u0932\u094b\u0921 \u0915\u093f\u091c\u093f\u092f\u0947  ", 
    "Upload completed": "\u0905\u092a\u0932\u094b\u0921 \u092a\u0942\u0930\u093e \u0939\u0941\u0906", 
    "Upload translation": "\u0905\u0928\u0941\u0935\u093e\u0926 \u0905\u092a\u0932\u094b\u0921 \u0915\u093f\u092f\u093e \u0917\u092f\u093e", 
    "Upload your course image.": "\u0905\u092a\u0928\u0947 \u092a\u093e\u0920\u094d\u092f\u0915\u094d\u0930\u092e \u0915\u0940 \u091b\u0935\u093f \u0905\u092a\u0932\u094b\u0921 \u0915\u0930\u0947\u0902.", 
    "Uploading": "\u0905\u092a\u0932\u094b\u0921 \u0939\u094b \u0930\u0939\u093e \u0939\u0948", 
    "Username": "\u0909\u092a\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e \u0928\u093e\u092e", 
    "Users must create and activate their account before they can be promoted to beta tester.": "\u092c\u0940\u091f\u093e \u092a\u0930\u0940\u0915\u094d\u0937\u0915 \u0915\u0947 \u0932\u093f\u090f \u092a\u0926\u094b\u0928\u094d\u0928\u0924 \u0939\u094b\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u092a\u0939\u0932\u0947 \u0909\u092a\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e\u0913\u0902 \u0915\u0947 \u0916\u093e\u0924\u0947 \u0915\u094b \u092c\u0928\u093e\u0928\u093e \u0914\u0930 \u0938\u0915\u094d\u0930\u093f\u092f \u0915\u0930\u0928\u093e \u091c\u093c\u0930\u0942\u0930\u0940 \u0939\u0948\u0964", 
    "We're sorry, there was an error": "\u0924\u094d\u0930\u0941\u091f\u093f \u0915\u0947 \u0932\u093f\u090f \u0939\u092e\u0947\u0902 \u0916\u0947\u0926 \u0939\u0948", 
    "You must specify a name": "\u0928\u093e\u092e \u0926\u0947\u0928\u093e \u0906\u0935\u0936\u094d\u092f\u0915 \u0939\u0948", 
    "You've made some changes": "\u0906\u092a\u0928\u0947 \u0915\u0941\u091b \u092c\u0926\u0932\u093e\u0935 \u0915\u093f\u092f\u0947 \u0939\u0948\u0902", 
    "You've made some changes, but there are some errors": "\u0906\u092a\u0928\u0947 \u0915\u0941\u091b \u092c\u0926\u0932\u093e\u0935 \u0915\u093f\u092f\u0947 \u0939\u0948\u0902 \u0932\u0947\u0915\u093f\u0928 \u0907\u0938\u092e\u0947\u0902 \u0925\u094b\u0921\u093c\u0940 \u0917\u0932\u0924\u093f\u092f\u093e\u0901 \u0939\u0948\u0902", 
    "Your changes will not take effect until you save your progress.": "\u0906\u092a\u0915\u0947 \u0926\u094d\u0935\u093e\u0930\u093e \u0915\u093f\u092f\u093e \u0917\u092f\u093e \u092a\u0930\u094d\u0924\u093f\u0935\u0930\u094d\u0924\u0928 \u0938\u0947\u0935 \u0915\u093f\u092f\u0947 \u091c\u093e\u0928\u0947 \u0915\u0947 \u092a\u0936\u094d\u091a\u093e\u0924\u094d \u0939\u0940 \u092a\u094d\u0930\u092d\u093e\u0935\u0940 \u0939\u094b\u0917\u093e.", 
    "Your changes will not take effect until you save your progress. Take care with key and value formatting, as validation is not implemented.": "\u0906\u092a\u0928\u0947 \u091c\u094b \u092c\u0926\u0932\u093e\u0935 \u0915\u093f\u092f\u0947 \u0939\u0948\u0902 \u0935\u0947 \u0924\u092c \u0924\u0915 \u0905\u0938\u0930\u0926\u093e\u0930 \u0928\u0939\u0940\u0902 \u0939\u094b\u0902\u0917\u0947 \u091c\u092c \u0924\u0915 \u0906\u092a \u0905\u092a\u0928\u093e \u0915\u093e\u092e \u092c\u091a\u093e\u0924\u0947 \u0928\u0939\u0940\u0902 \u0939\u0948\u0902\u0964 \u092c\u091f\u0928 \u0914\u0930 \u092e\u0942\u0932\u094d\u092f \u0921\u093e\u0932\u0924\u0947 \u0938\u092e\u092f \u0927\u094d\u092f\u093e\u0928 \u0926\u0947\u0902 \u0928\u0939\u0940\u0902 \u0924\u094b \u0920\u0940\u0915 \u092e\u093e\u0928\u094d\u092f\u0924\u093e \u0928\u0939\u0940\u0902 \u092e\u093f\u0932\u0947\u0917\u0940\u0964", 
    "Your file has been deleted.": "\u0906\u092a\u0915\u0940 \u092b\u093e\u0907\u0932 \u0928\u0937\u094d\u091f \u0915\u0940 \u091c\u093e \u091a\u0941\u0915\u0940 \u0939\u0948.", 
    "Your message cannot be blank.": "\u0906\u092a\u0915\u093e \u0938\u0928\u094d\u0926\u0947\u0936 \u0916\u093e\u0932\u0940 \u0928\u0939\u0940\u0902 \u0939\u094b \u0938\u0915\u0924\u093e\u0964", 
    "Your message must have a subject.": "\u0906\u092a\u0915\u0947 \u0938\u0928\u094d\u0926\u0947\u0936 \u0915\u093e \u0935\u093f\u0937\u092f \u0939\u094b\u0928\u093e \u091a\u093e\u0939\u093f\u090f\u0964", 
    "Your policy changes have been saved.": "\u0906\u092a\u0928\u0947 \u091c\u094b \u0928\u0940\u0924\u093f \u092a\u0930\u093f\u0935\u0930\u094d\u0924\u0928 \u0915\u093f\u092f\u0947 \u0939\u0948\u0902 \u0935\u0947 \u0938\u0947\u0935 \u0915\u093f\u092f\u0947 \u091c\u093e \u091a\u0941\u0915\u0947 \u0939\u0948\u0902\u0964", 
    "anonymous": "\u0917\u0941\u092e\u0928\u093e\u092e", 
    "emphasized text": "\u0905\u0915\u094d\u0937\u0930 \u091c\u093f\u0928 \u092a\u0930 \u091c\u093c\u094b\u0930 \u0926\u093f\u092f\u093e \u0917\u092f\u093e \u0939\u0948 ", 
    "enter code here": "\u092f\u0939\u093e\u0902 \u0915\u094b\u0921 \u0921\u093e\u0932\u0947\u0902", 
    "enter link description here": "\u0932\u093f\u0902\u0915 \u0915\u093e \u0935\u0930\u094d\u0923\u0928 \u092f\u0939\u093e\u0902 \u0926\u0947\u0902", 
    "or": "\u092f\u093e", 
    "strong text": "\u092e\u094b\u091f\u0947-\u092e\u094b\u091f\u0947 \u0905\u0915\u094d\u0937\u0930", 
    "\u2026": "\u2026"
  };

  django.gettext = function (msgid) {
    var value = django.catalog[msgid];
    if (typeof(value) == 'undefined') {
      return msgid;
    } else {
      return (typeof(value) == 'string') ? value : value[0];
    }
  };

  django.ngettext = function (singular, plural, count) {
    var value = django.catalog[singular];
    if (typeof(value) == 'undefined') {
      return (count == 1) ? singular : plural;
    } else {
      return value[django.pluralidx(count)];
    }
  };

  django.gettext_noop = function (msgid) { return msgid; };

  django.pgettext = function (context, msgid) {
    var value = django.gettext(context + '\x04' + msgid);
    if (value.indexOf('\x04') != -1) {
      value = msgid;
    }
    return value;
  };

  django.npgettext = function (context, singular, plural, count) {
    var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
    if (value.indexOf('\x04') != -1) {
      value = django.ngettext(singular, plural, count);
    }
    return value;
  };
  

  django.interpolate = function (fmt, obj, named) {
    if (named) {
      return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
    } else {
      return fmt.replace(/%s/g, function(match){return String(obj.shift())});
    }
  };


  /* formatting library */

  django.formats = {
    "DATETIME_FORMAT": "N j, Y, P", 
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d", 
      "%m/%d/%Y %H:%M:%S", 
      "%m/%d/%Y %H:%M:%S.%f", 
      "%m/%d/%Y %H:%M", 
      "%m/%d/%Y", 
      "%m/%d/%y %H:%M:%S", 
      "%m/%d/%y %H:%M:%S.%f", 
      "%m/%d/%y %H:%M", 
      "%m/%d/%y"
    ], 
    "DATE_FORMAT": "j F Y", 
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d", 
      "%m/%d/%Y", 
      "%m/%d/%y", 
      "%b %d %Y", 
      "%b %d, %Y", 
      "%d %b %Y", 
      "%d %b, %Y", 
      "%B %d %Y", 
      "%B %d, %Y", 
      "%d %B %Y", 
      "%d %B, %Y"
    ], 
    "DECIMAL_SEPARATOR": ".", 
    "FIRST_DAY_OF_WEEK": "0", 
    "MONTH_DAY_FORMAT": "j F", 
    "NUMBER_GROUPING": "0", 
    "SHORT_DATETIME_FORMAT": "m/d/Y P", 
    "SHORT_DATE_FORMAT": "d-m-Y", 
    "THOUSAND_SEPARATOR": ",", 
    "TIME_FORMAT": "g:i A", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H:%M"
    ], 
    "YEAR_MONTH_FORMAT": "F Y"
  };

  django.get_format = function (format_type) {
    var value = django.formats[format_type];
    if (typeof(value) == 'undefined') {
      return format_type;
    } else {
      return value;
    }
  };

  /* add to global namespace */
  globals.pluralidx = django.pluralidx;
  globals.gettext = django.gettext;
  globals.ngettext = django.ngettext;
  globals.gettext_noop = django.gettext_noop;
  globals.pgettext = django.pgettext;
  globals.npgettext = django.npgettext;
  globals.interpolate = django.interpolate;
  globals.get_format = django.get_format;

}(this));

