# Requirements Document

## Introduction

This feature implements direct email functionality using EmailJS service to send contact form submissions directly to the portfolio owner's email without requiring the user to open their email client. The system will replace the current mailto fallback with a reliable, production-ready email delivery service.

## Glossary

- **Contact Form**: The web form component that collects user information (first name, last name, email, message)
- **EmailJS**: A third-party service that enables sending emails directly from client-side JavaScript applications
- **Service ID**: EmailJS configuration identifier for the email service provider
- **Template ID**: EmailJS configuration identifier for the email template format
- **Public Key**: EmailJS authentication key for client-side API calls
- **Form Submission**: The action of sending contact form data to EmailJS service
- **Toast Notification**: UI feedback message displayed to users after form submission

## Requirements

### Requirement 1

**User Story:** As a portfolio visitor, I want to send a message through the contact form, so that I can reach the portfolio owner without opening my email client

#### Acceptance Criteria

1. WHEN the user fills out the contact form with first name, last name, email, and message, THE Contact Form SHALL validate all required fields before submission
2. WHEN the user clicks the "Send Message" button, THE Contact Form SHALL send the form data to EmailJS service
3. IF the EmailJS submission succeeds, THEN THE Contact Form SHALL display a success toast notification with message "Message sent successfully! I'll get back to you soon."
4. IF the EmailJS submission fails, THEN THE Contact Form SHALL display an error toast notification and fall back to the mailto method
5. WHEN the email is sent successfully, THE Contact Form SHALL clear all form fields

### Requirement 2

**User Story:** As a portfolio owner, I want to receive formatted emails from the contact form, so that I can easily read and respond to inquiries

#### Acceptance Criteria

1. WHEN a form submission is sent via EmailJS, THE EmailJS Service SHALL deliver an email to the configured recipient address
2. THE EmailJS Service SHALL format the email with the sender's full name in the subject line
3. THE EmailJS Service SHALL include the sender's email address in the email body
4. THE EmailJS Service SHALL include the complete message content in the email body
5. THE EmailJS Service SHALL include a reply-to header with the sender's email address

### Requirement 3

**User Story:** As a developer, I want to configure EmailJS credentials securely, so that the email service can be easily maintained and updated

#### Acceptance Criteria

1. THE Contact Form SHALL store EmailJS Service ID, Template ID, and Public Key in environment variables
2. THE Contact Form SHALL load EmailJS configuration from environment variables at runtime
3. WHEN EmailJS credentials are missing, THE Contact Form SHALL fall back to the mailto method
4. THE Contact Form SHALL not expose EmailJS credentials in client-side code or version control
5. THE Contact Form SHALL provide clear console warnings when EmailJS is not configured

### Requirement 4

**User Story:** As a portfolio visitor, I want immediate feedback during form submission, so that I know my message is being processed

#### Acceptance Criteria

1. WHEN the user clicks "Send Message", THE Contact Form SHALL disable the submit button
2. WHILE the form is submitting, THE Contact Form SHALL display a loading spinner on the submit button
3. WHILE the form is submitting, THE Contact Form SHALL change the button text to "Sending..."
4. WHILE the form is submitting, THE Contact Form SHALL disable all form input fields
5. WHEN the submission completes (success or failure), THE Contact Form SHALL re-enable all form controls
