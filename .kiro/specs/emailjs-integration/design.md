# Design Document

## Overview

This design implements EmailJS integration into the existing Contact component to enable direct email delivery from the contact form. The solution uses the @emailjs/browser package to send emails client-side without requiring a backend server. The implementation maintains the existing UI/UX while replacing the mailto fallback with a production-ready email service.

## Architecture

### High-Level Flow

```
User fills form → User clicks Submit → Validate inputs → Call EmailJS API → Handle response → Show feedback → Clear form (on success)
```

### Component Structure

- **Contact Component**: Existing React component that will be enhanced with EmailJS functionality
- **EmailJS Service**: Third-party service handling email delivery
- **Environment Configuration**: Vite environment variables for EmailJS credentials
- **Toast Notifications**: Existing sonner toast system for user feedback

### Dependencies

- `@emailjs/browser`: Official EmailJS client library (to be installed)
- Existing dependencies: `sonner` (toast notifications), `lucide-react` (icons), `framer-motion` (animations)

## Components and Interfaces

### EmailJS Configuration Interface

```typescript
interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}
```

### Form Data Interface (Existing)

```typescript
interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}
```

### EmailJS Template Variables

The EmailJS template will receive these variables:

```typescript
interface EmailTemplateParams {
  from_name: string;      // firstName + lastName
  from_email: string;     // email
  message: string;        // message
  to_name: string;        // Portfolio owner name (optional)
}
```

## Data Models

### Environment Variables

Create `.env` file (not committed to git):

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### EmailJS Configuration Loading

```typescript
const getEmailJSConfig = (): EmailJSConfig | null => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.warn('EmailJS not configured. Using fallback method.');
    return null;
  }

  return { serviceId, templateId, publicKey };
};
```

## Implementation Details

### Modified handleSubmit Flow

1. **Prevent default form submission**
2. **Set loading state** (disable form, show spinner)
3. **Get EmailJS configuration** from environment variables
4. **If EmailJS is configured:**
   - Call EmailJS send function with form data
   - On success: Show success toast, clear form
   - On error: Log error, fall back to mailto
5. **If EmailJS is not configured:**
   - Fall back to mailto method immediately
6. **Reset loading state** (re-enable form)

### EmailJS Integration Function

```typescript
const sendEmailViaEmailJS = async (
  formData: ContactFormData,
  config: EmailJSConfig
): Promise<boolean> => {
  try {
    const emailjs = await import('@emailjs/browser');
    
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Akshay Gangurde', // Portfolio owner name
    };

    await emailjs.send(
      config.serviceId,
      config.templateId,
      templateParams,
      config.publicKey
    );

    return true;
  } catch (error) {
    console.error('EmailJS error:', error);
    return false;
  }
};
```

### Fallback Strategy

The implementation maintains a graceful degradation strategy:

1. **Primary**: EmailJS (if configured)
2. **Fallback**: Mailto link (existing implementation)

This ensures the contact form always works, even if EmailJS is not set up or fails.

## Error Handling

### Error Scenarios

1. **EmailJS not configured**: Silently fall back to mailto with console warning
2. **EmailJS API failure**: Show error toast, fall back to mailto
3. **Network error**: Show error toast, fall back to mailto
4. **Invalid form data**: Prevented by HTML5 validation (existing)

### Error Messages

- Success: "Message sent successfully! I'll get back to you soon."
- EmailJS failure: "Failed to send message. Please try again or contact me directly."
- Mailto fallback: "Opening your email client..."

### Error Logging

All EmailJS errors will be logged to console for debugging:

```typescript
console.error('EmailJS error:', error);
```

## Testing Strategy

### Manual Testing Checklist

1. **With EmailJS configured:**
   - Submit form with valid data → Should send email via EmailJS
   - Submit form with invalid email → Should show HTML5 validation error
   - Submit form while offline → Should show error and fall back to mailto
   - Submit form multiple times → Should handle each submission independently

2. **Without EmailJS configured:**
   - Submit form → Should fall back to mailto immediately
   - Check console → Should show configuration warning

3. **UI/UX Testing:**
   - Click submit → Button should show loading state
   - During submission → All inputs should be disabled
   - After success → Form should clear
   - After error → Form should remain filled

### Environment Testing

- Test with `.env` file present (EmailJS configured)
- Test without `.env` file (fallback to mailto)
- Test with invalid credentials (should fail gracefully)

## EmailJS Setup Instructions

### For Portfolio Owner

1. **Create EmailJS Account**: Sign up at https://www.emailjs.com/
2. **Add Email Service**: Connect Gmail, Outlook, or other email provider
3. **Create Email Template**: Use these variables:
   - `{{from_name}}` - Sender's full name
   - `{{from_email}}` - Sender's email address
   - `{{message}}` - Message content
   - `{{to_name}}` - Your name (optional)
4. **Get Credentials**: Copy Service ID, Template ID, and Public Key
5. **Configure Environment**: Add credentials to `.env` file
6. **Test**: Submit a test message through the contact form

### Example Email Template

```
Subject: New Portfolio Contact from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

## Security Considerations

1. **Public Key Exposure**: EmailJS public key is safe to expose in client-side code (it's designed for this)
2. **Rate Limiting**: EmailJS provides built-in rate limiting to prevent abuse
3. **Environment Variables**: Use `.env` file and add to `.gitignore` to avoid committing credentials
4. **Input Validation**: HTML5 validation prevents malformed data submission
5. **CORS**: EmailJS handles CORS automatically

## Performance Considerations

1. **Lazy Loading**: EmailJS library is dynamically imported only when needed
2. **No Backend Required**: Client-side solution reduces infrastructure complexity
3. **Fast Response**: EmailJS API typically responds in < 1 second
4. **Graceful Degradation**: Mailto fallback ensures functionality even if EmailJS is slow or unavailable
