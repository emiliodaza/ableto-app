// ─────────────────────────────────────────────────────────────────────────────
// EmailJS Configuration
//
// To make the contact and application forms send real emails:
//
//  1. Go to https://www.emailjs.com and create a free account.
//  2. Add an Email Service (e.g. Gmail) and copy the Service ID below.
//  3. Create Email Templates — see variable names listed below.
//  4. Go to Account > API Keys and copy your Public Key below.
//
// CONTACT TEAM TEMPLATE (sent to team@abletolab.org):
//   {{from_name}}   {{from_email}}   {{subject}}   {{message}}
//
// CONTACT CONFIRM TEMPLATE (confirmation sent to the user):
//   {{from_name}}   {{from_email}}   {{subject}}
//
// APPLICATION TEAM TEMPLATE (sent to team@abletolab.org):
//   {{full_name}}   {{email}}   {{phone}}   {{role}}   {{skills}}
//   {{motivation}}  {{portfolio}}  {{linkedin}}  {{resume}}
//
// APPLICATION CONFIRM TEMPLATE (confirmation sent to the applicant):
//   {{full_name}}   {{email}}   {{role}}
//
// STORE ORDER TEMPLATE (sent to team@abletolab.org):
//   {{customer_name}}  {{customer_email}}  {{customer_phone}}
//   {{order_items}}    {{order_total}}     {{delivery_info}}   {{notes}}
// ─────────────────────────────────────────────────────────────────────────────

export const EMAILJS_SERVICE_ID              = 'service_cj8vo73'
export const EMAILJS_CONTACT_TEMPLATE        = 'template_vhdp12n'
export const EMAILJS_CONTACT_CONFIRM_TEMPLATE = 'template_det5e6t'
export const EMAILJS_APPLY_TEMPLATE          = 'template_7rmxpqi'
export const EMAILJS_APPLY_CONFIRM_TEMPLATE  = 'template_h3in6ts'
export const EMAILJS_STORE_TEMPLATE          = 'YOUR_STORE_TEMPLATE_ID'
export const EMAILJS_PUBLIC_KEY              = 'SskUw0c8r25mUIjhs'
