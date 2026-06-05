# ambyte-agency

> Built as a voluntary (pro-bono) contribution for **ambyte-agency**.

A modern, performant, and fully internationalized platform built with Next.js.

## Features

-  Multi-Language Support — Fully integrated i18n with English, Arabic, and French. Adding new languages is as simple as adding a JSON file.
- Modern UI/UX— Crafted with Tailwind CSS and shadcn/ui for a clean, responsive, and accessible design.
- Performance Optimized — Dynamic imports, optimized images via Next.js `<Image>`, and lazy-loaded animation components.
- Rich Media** — Interactive hero parallax, image galleries with lightbox, and animated page transitions.
-  Fully Responsive— Seamless experience across all devices.

## Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js](https://nextjs.org/) (App Router) | React framework with file-based routing |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Bun](https://bun.sh/) | Fast JavaScript runtime & package manager |
| [shadcn/ui](https://ui.shadcn.com/) | Accessible component primitives |
| [next-intl](https://next-intl.dev/) | Internationalization (i18n) |
| [Framer Motion](https://motion.dev/) | Animations & transitions |

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine

### Installation

```bash
git clone <repository-url>
cd frontend
bun install
```

### Development

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
bun run build
bun start
```

## Project Structure

```
frontend/
├── app/                  # Next.js App Router pages & layouts
│   ├── (root)/           # Public-facing pages
│   ├── (admin)/          # Admin panel
│   └── i18n/             # i18n request configuration
├── components/
│   ├── modules/          # Feature-specific components (hero, services, contact, etc.)
│   └── ui/               # Reusable UI primitives (button, card, dialog, etc.)
├── messages/             # Translation JSON files
│   ├── en.json
│   ├── ar.json
│   └── fr.json
├── lib/                  # Utility functions
└── public/               # Static assets
```

## Localization Guide

Adding a new language is straightforward:

1. Create a new JSON file in `messages/` (e.g., `de.json` for German)
2. Copy the structure from `en.json` and translate the values
3. Add the locale code to the `locales` array in `app/i18n/request.ts`
4. The language switcher will automatically include the new option

### Example: Adding German

**messages/de.json:**
```json
{
  "Navbar": {
    "home": "Startseite",
    "services": "Dienstleistungen"
  }
}
```

**app/i18n/request.ts:**
```ts
const locales = ['en', 'ar', 'fr', 'de'];
```


# ambyte-agency
# ambyte-agency
