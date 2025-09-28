# EmailJS Setup Guide for Form Submission

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Registration Form Submission - {{from_name}}

**Content:**

```
Hello,

You have received a new registration form submission:

**Personal Information:**
- Name: {{first_name}} {{last_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- State: {{state}}
- Gender: {{gender}}

**Consent Preferences:**
- Email Marketing: {{email_consent}}
- Text Messages: {{text_consent}}
- SMS Consent: {{sms_consent}}

**Message:**
{{message}}

Submitted on: {{submitted_date}}

Best regards,
Your Website
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (e.g., `user_abc123def456`)

## Step 5: Update the Code

Replace these placeholders in your `join-now.html` file:

1. Replace `YOUR_PUBLIC_KEY` with your actual public key
2. Replace `YOUR_SERVICE_ID` with your service ID
3. Replace `YOUR_TEMPLATE_ID` with your template ID
4. Replace `your-email@example.com` with your actual email address

## Step 6: Test the Form

1. Open your form in a web browser
2. Fill out and submit the form
3. Check your email for the submission
4. Check the browser console for any error messages

## Free Tier Limits

- 200 emails per month
- 2 email services
- 2 email templates
- Perfect for small to medium websites

## Troubleshooting

- Make sure all IDs are correct
- Check browser console for errors
- Verify your email service is properly connected
- Ensure your template variables match the code

## Security Note

- Never expose your private keys in client-side code
- Only use the public key in your HTML file
- Consider implementing server-side validation for production use
