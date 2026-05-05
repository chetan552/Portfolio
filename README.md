# chetanch.vercel.com — Personal Portfolio

A minimal, modern personal site built with Next.js 16, React 19, and Tailwind CSS v4.

## Tech

- **Framework** — [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Styling** — [Tailwind CSS v4](https://tailwindcss.com/) with class-based dark mode
- **Fonts** — Geist Sans + Geist Mono via `next/font`
- **Hosting** — [Vercel](https://vercel.com/)

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Editing content

All content lives in [`lib/content.ts`](./lib/content.ts):

- `profile` — name, title, location, links
- `about` — paragraphs for the About section
- `experience` — career timeline
- `projects` — featured projects
- `skills` — grouped skill list
- `openSource` — open source contributions

Edit the file, save, and the dev server will hot-reload.

## Deploy

Push the repo to GitHub and import it into Vercel — no configuration needed. The site is a fully static, all-server-component app, so it builds and deploys in seconds.

```bash
# from the project root
git init
git add .
git commit -m "Initial portfolio"
git remote add origin git@github.com:chetan552/portfolio.git
git push -u origin main
```

Then in Vercel: **New Project → Import** the repo → **Deploy**.

To use a custom domain, add it in Vercel project settings and update `siteUrl` in [`app/layout.tsx`](./app/layout.tsx) so OG/canonical tags resolve correctly.

## Project structure

```
app/
  layout.tsx        — root, metadata, fonts, theme bootstrap
  page.tsx          — composes sections
  globals.css       — Tailwind + design tokens
components/
  Nav.tsx
  Hero.tsx
  About.tsx
  Experience.tsx
  Projects.tsx
  Skills.tsx
  Contact.tsx
  Footer.tsx
  SectionHeading.tsx
  ThemeToggle.tsx   — client component
  ThemeScript.tsx   — pre-paint dark-mode script
lib/
  content.ts        — all site content
```
