# CINI'S Website (Next.js)

A full multi-page rebuild of the CINI'S Sterile & Office Cleaning Services
site — real routes for every page, a working contact form backed by a
server API route, and a refreshed version of the original navy/blue theme.

## Special features & animations

- **Hero wipe-in** — on page load, the hero photo reveals left-to-right
  like a single squeegee pass, then the headline and CTA settle in
  behind it. One deliberate moment, not motion scattered everywhere.
- **Before/After slider** (`components/BeforeAfterSlider.js`) — a
  drag-to-compare widget on the homepage, built on a native
  `<input type="range">` so it works with keyboard and screen readers,
  not just a mouse. It currently uses the same photo with a tint
  applied to simulate "before" — swap in real before/after photography
  any time by passing different `beforeSrc`/`afterSrc` props.
- **Service Finder** (`components/ServiceFinder.js`) — an interactive
  "what kind of space is this?" widget on the homepage that recommends
  the right service page on click, instead of making visitors read
  through all five.
- **Scroll reveal** (`components/RevealOnScroll.js`) — section headings
  fade up gently the first time they scroll into view. Applied only to
  headings, not to every card, so it reads as intentional rather than
  a blanket "everything fades in" effect.
- All animation respects `prefers-reduced-motion` — visitors with that
  system setting enabled see the finished layout immediately, no motion.

## What's included

- **Real routing** (Next.js App Router) — every page is its own route,
  not an anchor on one long page:
  - `/` — Home
  - `/about`
  - `/contact`
  - `/services/cleanroom`
  - `/services/laboratory`
  - `/services/lab-preparation`
  - `/services/post-maintenance`
  - `/services/office`
- **A real backend for the contact form** — `app/api/contact/route.js`
  is a server route that validates submissions and sends an email via
  SMTP (using `nodemailer`). It's not just client-side simulation.
- Responsive, accessible layout with a sticky header, dropdown services
  menu, testimonial carousel, and a reusable service-page template.
- Uses the business's existing logo and photos from csocs.com.au so the
  branding matches what's already live.

## Running it locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

Without any further setup, the contact form will still work end-to-end —
submissions are logged to the server console instead of emailed, so you
can test it immediately.

## Turning on real email delivery

1. Copy `.env.example` to `.env.local`.
2. Fill in SMTP credentials from your email provider (e.g. Gmail with an
   app password, or a transactional provider like SendGrid, Mailgun, or
   your web host's SMTP details):

   ```
   SMTP_HOST=smtp.yourprovider.com
   SMTP_PORT=587
   SMTP_USER=your-smtp-username
   SMTP_PASS=your-smtp-password
   CONTACT_TO_EMAIL=cinis@csocs.com.au
   ```
3. Restart the dev server (or redeploy). Enquiries submitted through
   `/contact` will now be emailed to `CONTACT_TO_EMAIL`, with the
   customer's address set as the reply-to.

## Deploying

This is a standard Next.js app, so it deploys to any Next.js-compatible
host:

- **Vercel** (simplest): push this folder to a GitHub repo, import it at
  vercel.com, add the same environment variables in the project
  settings, and deploy.
- **Any Node host** (e.g. a VPS, Railway, Render): run `npm run build`
  then `npm run start`, with the environment variables set on the host.

## Customising

- Colours, spacing and type live in `app/globals.css` (CSS variables at
  the top of the file).
- Page copy lives directly in each `app/**/page.js` file.
- Service page content (intro + bullet points) is set per-page in
  `app/services/*/page.js`, all rendered through the shared
  `components/ServiceDetail.js` template.
- Swap in your own photography by replacing the image URLs in
  `app/page.js`, `app/about/page.js`, and the service pages — then add
  your image host to `next.config.mjs` under `images.remotePatterns`.
