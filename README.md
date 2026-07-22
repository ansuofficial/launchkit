# LaunchKit

**Professional email and document templates for modern software teams.**

Beautiful communication should be effortless.

[![CI](https://github.com/ansuofficial/launchkit/actions/workflows/ci.yml/badge.svg)](https://github.com/ansuofficial/launchkit/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![#BuiltWithElements](https://img.shields.io/badge/%23BuiltWithElements-6D5EF7?style=flat)](https://unlayer.com/elements)

LaunchKit is a premium open-source collection of production-ready **email**, **document**, and **page** templates built with [Elements](https://unlayer.com/elements) (`@unlayer/react-elements`). It is a cohesive design system, not a pile of one-off layouts.

> **Challenge:** Build With Elements Challenge 2026 · `#BuiltWithElements`

---

## Features

- **Email templates** for product launches, welcome sequences, changelogs, security updates, and more
- **Document templates** for proposals, briefs, meeting summaries, and roadmaps
- **Page templates** for product landing, pricing, webinars, and agency sites
- **Live previews** via Next.js App Router
- **Shared Elements blocks** for consistent headers, CTAs, and footers
- **shadcn/ui** landing and browse experience themed to the LaunchKit design system

## Quick start

### Prerequisites

- Node.js 20+
- npm 10+

### Install

```bash
git clone https://github.com/ansuofficial/launchkit.git
cd launchkit
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/templates` | Browse all templates |
| `/preview/email/<slug>` | Email HTML preview |
| `/preview/document/<slug>` | Document HTML preview |

### Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run lint         # ESLint
npm run typecheck    # TypeScript check
npm run smoke        # Render all templates (CI gate)
npm run export-html  # Export static HTML for assets
```

## Repository layout

```
src/
├── app/                 # Next.js routes (landing, browse, previews)
├── components/
│   ├── ui/              # shadcn/ui primitives
│   ├── landing/         # Landing sections
│   └── templates/       # Browse UI
├── elements/
│   ├── shared/          # Reusable Elements blocks
│   └── assets/          # SVG / graphic helpers
├── templates/
│   ├── email/           # Email templates (one folder per slug)
│   ├── document/        # Document templates
│   └── page/            # Page templates
└── lib/
    ├── templates.ts     # Template registry
    └── render.ts        # renderToHtml wrappers
```

## Contributing

We welcome issues and pull requests. Please read:

- [CONTRIBUTING.md](./CONTRIBUTING.md) - setup, branch workflow, template checklist
- [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) - community standards
- [SECURITY.md](./SECURITY.md) - vulnerability reporting
- [Agents.md](./Agents.md) - engineering standards for this repo

### Standard open-source flow

1. Fork the repo (or branch from `main`)
2. Create a focused branch (`feat/...`, `fix/...`, `docs/...`)
3. Open a PR against `main`
4. Keep CI green (lint, typecheck, smoke, build)

## License

[MIT](./LICENSE)

## Acknowledgements

- Built with [Elements](https://unlayer.com/elements) by [Unlayer](https://unlayer.com)
- UI primitives via [shadcn/ui](https://ui.shadcn.com)
- Icons by [Lucide](https://lucide.dev)

**#BuiltWithElements**
