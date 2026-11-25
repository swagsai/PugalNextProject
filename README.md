# Auralis Studio: Design Agency Homepage

A modern, responsive, single-page design agency website built for the **Next.js Developer Internship task**.
It contains the four required sections (Hero, Services, Portfolio, Contact) plus a navbar, footer, dark mode and scroll animations.

- **Live demo:** _add your Vercel URL here after deploying_
- **Repository:** _add your GitHub URL here_

## Tech stack

| Area        | Choice                                                         |
| ----------- | -------------------------------------------------------------- |
| Framework   | Next.js (App Router) + React, functional components only       |
| Language    | JavaScript (ES modules, JSX)                                   |
| Styling     | Tailwind CSS v4, no component libraries or templates           |
| Fonts       | Geist Sans / Mono via the `geist` package (self-hosted)        |
| Images      | `next/image` (automatic WebP/AVIF, responsive `sizes`, lazy loading) |
| Animation   | CSS transitions/keyframes + `IntersectionObserver` (no animation library) |

## Setup instructions

Requirements: Node.js 20.9 or newer.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server at http://localhost:3000
npm run dev

# 3. Optional: production build
npm run build
npm start
```

### Deploying to Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new). The defaults work with no configuration.
3. Optional: set `NEXT_PUBLIC_SITE_URL` to your production URL so Open Graph / SEO metadata uses the right domain.

## Project structure

```
src/
├── app/
│   ├── layout.jsx            # Fonts, SEO metadata, no-flash dark mode script
│   ├── page.jsx              # Composes the sections
│   ├── globals.css           # Tailwind import, theme tokens, keyframes
│   └── api/contact/route.js  # Server-side validation for the contact form
├── components/
│   ├── layout/               # Navbar, Footer
│   ├── sections/             # Hero, Services, Portfolio, Contact (one per section)
│   └── ui/                   # Reusable: Button, Container, SectionHeading,
│                             #   ProjectCard, Reveal, ThemeToggle, Icons
├── data/                     # site.js, services.js, projects.js (content kept out of JSX)
└── lib/validators.js         # Form validation shared by client and server
public/projects/              # Portfolio thumbnails
```

### Design decisions

- **Content lives in `src/data/`**, so adding a service or project means editing one array, not the markup.
- **Server Components by default.** Only components that need browser state are Client Components (`Navbar`, `Contact`, `Reveal`, `ThemeToggle`), which keeps the JavaScript sent to the browser small.
- **One validator, two places.** `validateContactForm` gives instant feedback in the browser and is re-run in the API route so the server never trusts the client.
- **Accessibility:** semantic landmarks, labelled sections, `aria-*` on the menu and form errors, visible focus rings, and `prefers-reduced-motion` support.

## Features

**Required**

- Hero with agency name, tagline, two call-to-action buttons and a gradient background
- Services: 4 cards, each with an icon, title and description
- Portfolio: responsive grid of 6 projects with thumbnails, titles and hover effects
- Contact: name, email, message and submit button, with validation and a success message
- Fully responsive (mobile-first, with a collapsible mobile menu)

**Bonus**

- Tailwind CSS
- Scroll-reveal and floating-gradient animations
- SEO: page title template, description, Open Graph and Twitter card metadata, theme colour
- Dark mode toggle (remembers the choice, falls back to the system preference, no flash on load)
- Image optimisation with `next/image`

## Assumptions

- **Agency, copy and portfolio are fictional.** "Auralis Studio" and its projects are placeholders.
- **Portfolio thumbnails are original abstract artwork** generated for this project (no stock images or copied templates).
- **The contact form has no email provider.** `POST /api/contact` validates the data and returns success. To receive real messages, send an email or store the lead inside `src/app/api/contact/route.js` (for example with Resend or Nodemailer).
- **Projects are not clickable.** The brief only asks for a thumbnail and title; case-study pages would be the natural next step.

## AI usage

The assignment permits AI assistance. This project was scaffolded with AI help, and I reviewed the code so I can explain every component and decision in the technical discussion.
