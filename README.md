# Vaibhav Bhujbal — Portfolio

Personal portfolio of **Vaibhav Bhujbal**, Full Stack Developer / Angular Specialist / Enterprise Software Engineer. Built as a premium, single-page marketing site with a hidden internal architecture page.

## Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4** for the design system
- **Framer Motion** for scroll reveals, magnetic buttons, and micro-interactions
- **GSAP** for the hero headline text reveal
- **Lenis** for smooth scrolling
- **React Three Fiber** for the subtle particle/grid hero background
- **react-hook-form + zod** for the contact form
- **next-themes** for dark/light mode (dark by default)
- **lucide-react** and **react-icons** for iconography

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Structure

```
src/
├── app/                # Routes: home, /projects/[slug], /architecture
├── components/
│   ├── ui/             # Design system primitives (button, reveal, counter, ...)
│   ├── layout/          # Nav, footer, cursor, smooth scroll, theme
│   ├── sections/        # Page sections (hero, projects, skills, ...)
│   └── architecture/    # Diagrams used on the hidden /architecture page
├── data/                # Content: profile, projects, skills, experience
└── lib/                 # Shared utilities
```

## Content

All copy lives in `src/data/*.ts` — update project case studies, skills, experience, and testimonials there without touching component code.

## Resume

`public/resume.pdf` is a placeholder — replace it with a real resume to power the "Download Resume" button.

There's also a hidden, unlinked `/architecture` page covering system design, auth flow, role hierarchy, API flow, database schema, and deployment pipeline.
