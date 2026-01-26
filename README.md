# 🚀 Mezuran | Personal Portfolio

A high-performance, type-safe digital showcase built with the **Astro Islands architecture**. This project serves as my professional hub, featuring my work in full-stack development, data science, and game engineering.

[View Live Site →](https://mezuran.github.io)

---

## 🛠 Tech Stack

- **Framework:** [Astro 4.0+](https://astro.build/) (Static Site Generation)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strictly Typed)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Content:** [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) (Markdown-based project/blog management)
- **Deployment:** GitHub Pages

## ✨ Key Features

- **Blazing Fast:** Near-zero JavaScript baseline for incredible Lighthouse scores.
- **Type-Safe:** End-to-end type safety across components and content schemas.
- **Responsive Design:** Mobile-first approach optimized for all screen sizes.
- **Dark Mode Support:** Smooth theme switching implemented with low-latency scripts.
- **SEO Optimized:** Automated sitemap generation and OpenGraph meta tags.

## 📁 Project Structure

```text
/
├── src/
│   ├── components/    # Reusable UI components
│   ├── content/       # Type-checked Markdown files (Projects/Posts)
│   ├── layouts/       # Base page wrappers
│   ├── pages/         # File-based routing
│   └── styles/        # Global CSS & Tailwind config
├── public/            # Static assets (fonts, icons)
└── astro.config.mjs   # Astro configuration

```

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed and [pnpm](https://pnpm.io/) (recommended) or npm.

### Installation

1. **Clone the repo:**
```bash
git clone [https://github.com/mezuran/mezuran.github.io.git](https://github.com/mezuran/mezuran.github.io.git)

```


2. **Install dependencies:**
```bash
pnpm install

```


3. **Start development server:**
```bash
pnpm dev

```



## 📜 Commands

| Command | Action |
| --- | --- |
| `pnpm dev` | Starts local dev server at `localhost:4321` |
| `pnpm build` | Builds the static site to `./dist/` |
| `pnpm preview` | Previews the build locally before deploying |
| `pnpm astro check` | Runs diagnostics (Type-check & lint) |

---

**Developed with ❤️ by Mezuran**