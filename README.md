# AbleTo Website

Official website for AbleTo — live at [ableto.tech](https://ableto.tech)

Built with React + Vite. Bilingual (English / Spanish). Deployed automatically via Vercel on every push to `main`.

---

## Getting Started

**Requirements:** Node.js 18+

```bash
# 1. Clone the repo
git clone https://github.com/emiliodaza/ableto-app.git
cd ableto-app

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
src/
├── assets/          # Images and static files
├── components/      # Shared components (Navbar, Footer)
├── config/          # EmailJS configuration
├── contexts/        # Language context (EN/ES)
├── data/            # teamData.js — edit this to update team members
├── i18n/            # translations.js — all UI text in EN and ES
└── pages/           # One file per page
    ├── Home.jsx
    ├── Team.jsx
    ├── Products.jsx
    ├── Contact.jsx
    ├── Apply.jsx
    ├── PrivacyPolicy.jsx
    ├── TermsOfService.jsx
    └── CookiePolicy.jsx
```

---

## Common Tasks

### Update team members
Edit `src/data/teamData.js`. Each member has these key fields:

```js
{
  name: 'Full Name',
  role: 'Title',
  university: 'University Name',
  department: 'Engineering' | 'Design & Product' | 'Marketing & Communications',
  isFounder: true/false,   // shows in Co-Founders section
  isExecutive: true/false, // shows in Executive Board section
  isFormer: true/false,    // greys out card with "Former" badge
  showInEng: true/false,   // also show this person in Engineering section
  bio: 'English bio',
  bioEs: 'Spanish bio',
  photo: '',               // URL to photo, or '' for initials avatar
  linkedin: '',
  projects: ['Touchless', 'DotSense'],
}
```

### Update site text
All UI text lives in `src/i18n/translations.js`. Every string has an `en` and `es` version. Find the key you want to change and update both languages.

### Add a new page
1. Create `src/pages/YourPage.jsx`
2. Add the route in `src/App.jsx`:
   ```jsx
   <Route path="/your-path" element={<YourPage />} />
   ```
3. Link to it from the Navbar or Footer if needed

---

## Branching Workflow

```bash
# Create your branch off main
git checkout -b your-name/feature-name

# Make changes, then commit
git add -A
git commit -m "Short description of what you changed"

# Push your branch
git push -u origin your-name/feature-name
```

Open a Pull Request on GitHub into `main`. Once merged, Vercel deploys automatically — no manual steps needed.

**Do not push directly to `main`.**

---

## Email Forms (Contact & Apply)

Forms use [EmailJS](https://emailjs.com) to send emails to `team@abletolab.org`. To enable them locally, fill in your credentials in `src/config/emailjs.js`:

```js
export const EMAILJS_SERVICE_ID       = 'your_service_id'
export const EMAILJS_CONTACT_TEMPLATE = 'your_contact_template_id'
export const EMAILJS_APPLY_TEMPLATE   = 'your_apply_template_id'
export const EMAILJS_PUBLIC_KEY       = 'your_public_key'
```

Contact Emilio for the credentials. Do not commit real credentials to the repo.

---

## Build & Preview

```bash
npm run build    # Builds to dist/
npm run preview  # Previews the production build locally
```

---

## Deployment

Vercel watches the `main` branch. Every merge to `main` triggers an automatic production deployment to [ableto.tech](https://ableto.tech). No manual deployment steps are needed.
