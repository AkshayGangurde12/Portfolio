# EmailJS Setup Guide

This guide will help you configure EmailJS to send emails directly from your contact form without opening any email client or popup.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Copy the **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

### Template Content:

**Subject:**
```
New Portfolio Contact from {{from_name}}
```

**Body:**
```
Hello {{to_name}},

You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Click **Save** and copy the **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in your dashboard
2. Find your **Public Key** (also called API Key)
3. Copy this key

## Step 5: Configure Environment Variables

1. Open the `.env` file in your project root
2. Replace the placeholder values with your actual credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

**Example:**
```env
VITE_EMAILJS_SERVICE_ID=service_abc123xyz
VITE_EMAILJS_TEMPLATE_ID=template_def456uvw
VITE_EMAILJS_PUBLIC_KEY=ghi789rst
```

## Step 6: Test Your Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out the form with test data
4. Click "Send Message"
5. You should see a success message and receive an email

## Troubleshooting

### "EmailJS not configured" warning in console
- Check that all three environment variables are set in `.env`
- Make sure variable names start with `VITE_`
- Restart your development server after changing `.env`

### Email not received
- Check your EmailJS dashboard for failed requests
- Verify your email service is properly connected
- Check spam/junk folder
- Ensure template variables match exactly: `{{from_name}}`, `{{from_email}}`, `{{message}}`, `{{to_name}}`

### Form opens email client instead
- This means EmailJS is not configured or failed
- Check browser console for error messages
- Verify your credentials are correct

## Features

✅ **No email client popup** - Emails are sent directly in the background
✅ **No extra pages** - User stays on your portfolio
✅ **Instant feedback** - Success/error messages via toast notifications
✅ **Form validation** - Built-in HTML5 validation
✅ **Loading states** - Button shows spinner while sending
✅ **Graceful fallback** - Uses mailto only if EmailJS fails

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email services
- 2 email templates
- Basic support

This is perfect for a portfolio contact form!

## Security Notes

- Your EmailJS public key is safe to expose in client-side code
- The `.env` file is in `.gitignore` to prevent committing credentials
- EmailJS provides built-in rate limiting to prevent abuse
- Never commit your actual credentials to version control

## Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/
