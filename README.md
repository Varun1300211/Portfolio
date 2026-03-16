# Varun Kumar Gupta Portfolio

This is a production-ready portfolio built with Next.js App Router, TypeScript, and Tailwind CSS. It is designed as a lightweight static site that presents professional experience, selected projects, and contact information in a clean recruiter-friendly format.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static assets from `public/`

No extra UI libraries or animation frameworks are used, which keeps the build small and deployment straightforward.

## How the project is organized

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/
│   ├── contact-card.tsx
│   ├── contact-section.tsx
│   ├── experience-section.tsx
│   ├── experience-timeline.tsx
│   ├── external-link.tsx
│   ├── hero-section.tsx
│   ├── primary-button.tsx
│   ├── project-card.tsx
│   ├── projects-section.tsx
│   ├── section-heading.tsx
│   ├── site-footer.tsx
│   └── site-header.tsx
├── data/
│   ├── contact-links.ts
│   ├── experience.ts
│   ├── personal-info.ts
│   └── projects.ts
└── types/
    └── portfolio.ts
```

## How it works

The site is rendered from a single page at [src/app/page.tsx](/Users/varun/Portfolio/src/app/page.tsx). That page assembles the major sections in order:

- Navbar
- Hero
- Experience
- Projects
- Contact
- Footer

Each section is implemented as a reusable React component under [src/components](/Users/varun/Portfolio/src/components).

Content is intentionally data-driven:

- [src/data/personal-info.ts](/Users/varun/Portfolio/src/data/personal-info.ts) stores hero copy, navigation items, footer text, and CTA links
- [src/data/experience.ts](/Users/varun/Portfolio/src/data/experience.ts) stores timeline entries
- [src/data/projects.ts](/Users/varun/Portfolio/src/data/projects.ts) stores project cards
- [src/data/contact-links.ts](/Users/varun/Portfolio/src/data/contact-links.ts) stores contact methods

Shared TypeScript types live in [src/types/portfolio.ts](/Users/varun/Portfolio/src/types/portfolio.ts), so the UI and data stay aligned.

This means most content updates do not require component changes. For example:

- To add or reorder experience, edit [src/data/experience.ts](/Users/varun/Portfolio/src/data/experience.ts)
- To replace projects, edit [src/data/projects.ts](/Users/varun/Portfolio/src/data/projects.ts)
- To update hero text or resume/GitHub links, edit [src/data/personal-info.ts](/Users/varun/Portfolio/src/data/personal-info.ts)

## How to update portfolio content quickly

If you only want to update portfolio content, you usually do not need to touch the React components.

- Update hero text, navbar labels, footer title, and CTA buttons in [src/data/personal-info.ts](/Users/varun/Portfolio/src/data/personal-info.ts)
- Add, remove, or reorder work experience in [src/data/experience.ts](/Users/varun/Portfolio/src/data/experience.ts)
- Add, remove, or reorder projects in [src/data/projects.ts](/Users/varun/Portfolio/src/data/projects.ts)
- Update email, LinkedIn, or GitHub details in [src/data/contact-links.ts](/Users/varun/Portfolio/src/data/contact-links.ts)

Typical content-only workflow:

1. Edit the relevant file in `src/data/`
2. Run `npm run dev`
3. Check the change in the browser
4. Run `npm run build` before deploying

If you want to replace project screenshots or icons:

- Add the file under [public/img](/Users/varun/Portfolio/public/img)
- Update the corresponding `src` field in the relevant data file

## Local development

### 1. Install dependencies

```bash
npm install
```

### 2. Start the dev server

```bash
npm run dev
```

By default, Next.js serves the app at:

```text
http://localhost:3000
```

### 3. Open the site

Visit `http://localhost:3000` in the browser.

## Available scripts

```bash
npm run dev
```

Starts the local development server with hot reload.

```bash
npm run build
```

Creates the optimized production build.

```bash
npm run start
```

Runs the built production app locally after `npm run build`.

```bash
npm run lint
```

Runs ESLint across the codebase.

## Metadata and SEO

Global metadata is defined in [src/app/layout.tsx](/Users/varun/Portfolio/src/app/layout.tsx). This includes:

- page title
- description
- Open Graph metadata
- Twitter metadata
- canonical URL
- favicon references

The favicon placeholder currently points to:

- [public/favicon-placeholder.png](/Users/varun/Portfolio/public/favicon-placeholder.png)

You can replace that file later with the final icon without changing code.

## Accessibility and UX details

The project includes:

- semantic section structure
- a proper `h1` in the hero
- labeled `h2` section headings
- keyboard-visible focus styles
- skip-to-content support
- safe external links with `noopener noreferrer`
- reduced-motion-friendly smooth scrolling
- a dedicated 404 page in [src/app/not-found.tsx](/Users/varun/Portfolio/src/app/not-found.tsx)

## Images and assets

Images are served from [public/img](/Users/varun/Portfolio/public/img). The UI uses Next.js `Image` for optimized handling of local assets.

## Deployment

This project is easy to deploy on Vercel or Netlify.

Typical production flow:

```bash
npm install
npm run build
```

Because the app is built on standard Next.js features without extra runtime dependencies, deployment should work cleanly on common Next.js hosting platforms.

## Reference files

The original static HTML files are still present in the repository:

- [index.html](/Users/varun/Portfolio/index.html)
- [project.html](/Users/varun/Portfolio/project.html)
- [contact.html](/Users/varun/Portfolio/contact.html)

They are no longer used by the Next.js app, but they remain as migration reference material.
