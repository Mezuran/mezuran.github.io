# Mezuran | Personal Portfolio

A high-performance, type-safe digital showcase built with **Astro 5 Islands Architecture**. This project serves as my professional hub, featuring my work in full-stack development, DevOps, and game engineering.

[View Live Site](https://mezuran.github.io)

---

## Tech Stack

- **Framework:** [Astro 5](https://astro.build/) (Static Site Generation)
- **UI Islands:** [Svelte 5](https://svelte.dev/) (Typing animation)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Deployment:** GitHub Pages

## Key Features

- **Blazing Fast:** Near-zero JavaScript baseline with isolated Svelte islands
- **Type-Safe:** End-to-end TypeScript across components
- **Responsive Design:** Mobile-first approach optimized for all screen sizes
- **SEO Optimized:** OpenGraph meta tags, Twitter cards, canonical URLs
- **i18n:** Client-side language switching (English, Indonesian, Chinese) via `?lang=` query param
- **Animations:** Particle canvas, floating orbs, typing effect, scroll reveals, glassmorphism navbar

## Project Structure

```text
/
├── src/
│   ├── components/       # UI components (Astro + Svelte)
│   │   ├── Hero.astro          # Hero section with particles + typing
│   │   ├── Navbar.astro        # Sticky glassmorphism navigation
│   │   ├── About.astro         # Bio section
│   │   ├── Skills.astro        # Bento grid skill cards
│   │   ├── Experience.astro    # Work experience timeline
│   │   ├── Education.astro     # Education history
│   │   ├── Certifications.astro # Certifications list
│   │   ├── Projects.astro      # Project showcase cards
│   │   ├── GitHubActivity.astro # GitHub stats widget
│   │   ├── Contact.astro       # Contact info + social links
│   │   ├── LanguageSwitcher.astro # Language dropdown
│   │   ├── ParticleBackground.astro # Canvas mesh particles
│   │   ├── ScrollProgress.astro # Top progress bar
│   │   └── TypingText.svelte    # Svelte typing animation
│   ├── i18n/
│   │   └── translations.ts     # EN/ID/ZH translation dictionaries
│   ├── layouts/
│   │   └── Layout.astro        # Base page layout
│   ├── pages/
│   │   └── index.astro         # Home page
│   ├── scripts/
│   │   └── i18n.ts             # Client-side i18n runtime
│   └── styles/
│       └── global.css          # Tailwind imports + animations
├── public/                     # Static assets (favicon, fonts)
└── astro.config.mjs            # Astro configuration
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/) (recommended)

### Installation

```bash
git clone https://github.com/mezuran/mezuran.github.io.git
cd mezuran.github.io
pnpm install
```

### Development

```bash
pnpm dev          # Start dev server at localhost:4321
pnpm build        # Build static site to ./dist/
pnpm preview      # Preview build locally
```

## i18n

Switch language via query parameter or navbar dropdown:

- `/?lang=en` — English (default)
- `/?lang=id` — Indonesian
- `/?lang=zh` — Chinese

Translations are client-side: the page renders in English, then the `applyTranslations()` script swaps all `data-i18n` elements at runtime.

## License

MIT

---

**Developed by Khaizuran Athmarrullah**
