// ─────────────────────────────────────────────────────────────────────────────
// EmailJS Configuration
//
// To make the contact and application forms send real emails:
//
//  1. Go to https://www.emailjs.com and create a free account.
//  2. Add an Email Service (e.g. Gmail) and copy the Service ID below.
//  3. Create two Email Templates — one for contact, one for applications.
//     Use the variable names listed in each template below.
//  4. Go to Account > API Keys and copy your Public Key below.
//
// Contact template variables:
//   {{from_name}}   {{from_email}}   {{subject}}   {{message}}
//
// Application template variables:
//   {{full_name}}   {{email}}   {{phone}}   {{role}}   {{skills}}
//   {{motivation}}  {{portfolio}}  {{linkedin}}  {{resume}}
// ─────────────────────────────────────────────────────────────────────────────

export const EMAILJS_SERVICE_ID   = 'YOUR_SERVICE_ID'
export const EMAILJS_CONTACT_TEMPLATE = 'YOUR_CONTACT_TEMPLATE_ID'
export const EMAILJS_APPLY_TEMPLATE   = 'YOUR_APPLY_TEMPLATE_ID'
export const EMAILJS_PUBLIC_KEY   = 'YOUR_PUBLIC_KEY'
