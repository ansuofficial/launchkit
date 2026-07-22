# LaunchKit

**Professional email, document, and page templates for modern software teams.**

Beautiful communication should be effortless.

[![CI](https://github.com/ansuofficial/launchkit/actions/workflows/ci.yml/badge.svg)](https://github.com/ansuofficial/launchkit/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![#BuiltWithElements](https://img.shields.io/badge/%23BuiltWithElements-6D5EF7?style=flat)](https://unlayer.com/elements)

LaunchKit is a premium open-source collection of production-ready templates built with [Elements](https://unlayer.com/elements) (`@unlayer/react-elements`). It is a cohesive design system, not a pile of one-off layouts.

> **Challenge:** Build With Elements Challenge 2026 · `#BuiltWithElements`

---

## Features

- **Email templates** for product launches, welcome sequences, changelogs, security updates, and more
- **Document templates** for proposals, briefs, meeting summaries, and roadmaps
- **Page templates** for product landing, pricing, webinars, and agency sites
- **Live previews** in a Next.js browse experience
- **Shared Elements blocks** for consistent headers, CTAs, footers, and layouts
- **HTML + plain-text export** via `renderToHtml` / `renderToPlainText` wrappers
- **shadcn/ui** landing and browse UI themed to the LaunchKit design system

## Live demo

Run the app locally (see [Quick start](#quick-start)). There is no separate hosted demo required to evaluate the templates.

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/templates` | Browse all templates |
| `/templates/email/<slug>` | Email preview |
| `/templates/document/<slug>` | Document preview |
| `/templates/page/<slug>` | Page preview |

Legacy `/preview/email|document|page/<slug>` URLs redirect to the routes above.

## Screenshots

Preview thumbnails and README marketing assets live under `public/images/`. Capture them locally after running the app, or use exported HTML from `npm run export-html` as a base for static assets.

Suggested captures (2x resolution when possible):

- Landing hero
- Featured templates section
- Browse page with a live email preview
- One document and one page template

## Quick start

### Prerequisites

- Node.js 20+ (see `.nvmrc`)
- npm 10+

### Install and run

```bash
git clone https://github.com/ansuofficial/launchkit.git
cd launchkit
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Development server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript (`tsc --noEmit`) |
| `npm run smoke` | Render every registered template (CI gate) |
| `npm run export-html` | Write static HTML to `public/exports/` |

This package is **not published to npm** (`private: true`). Use it as a cloneable template library and presentation app.

## Template catalog

### Email (8)

| Template | Slug | Category |
|----------|------|----------|
| Product Launch | `product-launch` | Product |
| Welcome Email | `welcome` | Product |
| Feature Announcement | `feature-announcement` | Product |
| Changelog | `changelog` | Product |
| Newsletter | `newsletter` | Marketing |
| Event Invitation | `event-invitation` | Marketing |
| Customer Success | `customer-success` | Marketing |
| Security Update | `security-update` | Product |

### Document (4)

| Template | Slug | Category |
|----------|------|----------|
| Product Proposal | `product-proposal` | Business |
| Project Brief | `project-brief` | Business |
| Meeting Summary | `meeting-summary` | Business |
| Product Roadmap | `product-roadmap` | Product |

### Page (4)

| Template | Slug | Category |
|----------|------|----------|
| Product Landing | `product-landing` | Product |
| Pricing | `pricing` | Marketing |
| Webinar Landing | `webinar` | Marketing |
| Agency Studio | `agency` | Business |

Each template lives in its own folder:

```
src/templates/<type>/<slug>/
  index.tsx      # Elements component
  preview.tsx    # Sample props / demo data
```

Register new templates in `src/lib/templates.ts`.

## Repository layout

```
src/
├── app/                    # Next.js App Router (landing, browse, previews)
├── components/
│   ├── ui/                 # shadcn/ui primitives
│   ├── landing/            # Landing page sections
│   ├── templates/          # Browse + preview chrome
│   └── preview/            # Preview frame helpers
├── elements/
│   ├── shared/             # Reusable Elements blocks
│   └── assets/             # SVG / graphic helpers for templates
├── templates/
│   ├── email/              # One folder per email slug
│   ├── document/           # One folder per document slug
│   └── page/               # One folder per page slug
├── lib/
│   ├── templates.ts        # Registry (slug, category, component)
│   ├── render.ts           # renderToHtml / renderToPlainText wrappers
│   └── preview-html.ts     # Safe iframe preview preparation
└── styles/                 # Global CSS + design tokens

scripts/
├── smoke-render.ts         # CI smoke test
└── export-html.ts          # Static HTML export

docs/                       # Audits and long-form notes
```

**Boundary rule:** Tailwind and shadcn are for the web app only. Email, document, and page templates use Elements props and inline styles. Never put Tailwind classes inside `<Email>`, `<Document>`, or `<Page>` trees.

## Development workflow

1. Clone, install, run `npm run dev`
2. Browse templates at `/templates`
3. Open a template at `/templates/<type>/<slug>`
4. Edit `src/templates/...` and shared blocks under `src/elements/shared/`
5. Confirm with `npm run smoke` (and lint/typecheck before PRs)

### Adding a template

1. Create `src/templates/<type>/<slug>/index.tsx` and `preview.tsx`
2. Use the correct root: `<Email>`, `<Document>`, or `<Page>`
3. Always nest: **Root → Row → Column → content**
4. Prefer shared blocks from `src/elements/shared/`
5. Use colors and spacing from [design-system.md](./design-system.md)
6. Register in `src/lib/templates.ts`
7. Run `npm run smoke`

Full checklist: [CONTRIBUTING.md](./CONTRIBUTING.md).

## Rendering HTML

Templates are React components. Render them with the project wrappers:

```ts
import { ProductLaunchEmail } from "@/templates/email/product-launch";
import { productLaunchPreview } from "@/templates/email/product-launch/preview";
import {
  renderTemplateToHtml,
  renderTemplateToPlainText,
} from "@/lib/render";

const html = renderTemplateToHtml(
  ProductLaunchEmail(productLaunchPreview),
);

const text = renderTemplateToPlainText(
  ProductLaunchEmail(productLaunchPreview),
);
```

Or batch-export every ready template:

```bash
npm run export-html
# → public/exports/email/*.html
# → public/exports/document/*.html
# → public/exports/page/*.html
```

`public/exports/` is gitignored. Generate assets when you need them for email providers, QA, or README media.

### Customize sample data

Each template accepts props. Start from `preview.tsx`, pass your brand copy, URLs, and names, then re-render.

Shared visual defaults (widths, accent color, fonts) live in `src/elements/shared/constants.ts` and [design-system.md](./design-system.md).

## Using with Resend

LaunchKit produces HTML (and plain text). Send it with any transactional provider. Example with [Resend](https://resend.com):

```ts
import { Resend } from "resend";
import { WelcomeEmail } from "@/templates/email/welcome";
import { renderTemplateToHtml, renderTemplateToPlainText } from "@/lib/render";

const resend = new Resend(process.env.RESEND_API_KEY);

const props = {
  // your props - mirror the shape in welcome/preview.tsx
  firstName: "Alex",
  ctaUrl: "https://example.com/get-started",
};

const html = renderTemplateToHtml(WelcomeEmail(props));
const text = renderTemplateToPlainText(WelcomeEmail(props));

await resend.emails.send({
  from: "LaunchKit <onboarding@yourdomain.com>",
  to: "user@example.com",
  subject: "Welcome aboard",
  html,
  text,
});
```

Notes:

- Keep provider keys in environment variables (never commit `.env`)
- Prefer the exported HTML for debugging deliverability
- LaunchKit itself has no backend, auth, or send API by design

## Contributing

We welcome issues and pull requests. Please read:

- [CONTRIBUTING.md](./CONTRIBUTING.md) - setup, branch workflow, template checklist
- [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) - community standards
- [SECURITY.md](./SECURITY.md) - vulnerability reporting
- [Agents.md](./Agents.md) - engineering standards for this repo
- [CHANGELOG.md](./CHANGELOG.md) - notable changes
- [docs/open-source-readiness-audit.md](./docs/open-source-readiness-audit.md) - repository audit notes

### Standard flow

1. Fork (or branch from `main`)
2. Create a focused branch (`feat/...`, `fix/...`, `docs/...`)
3. Keep CI green: lint, typecheck, smoke, build
4. Open a PR against `main`

## License

[MIT](./LICENSE)

## Credits

- Built with [Elements](https://unlayer.com/elements) by [Unlayer](https://unlayer.com)
- UI primitives via [shadcn/ui](https://ui.shadcn.com)
- Icons by [Lucide](https://lucide.dev)

**#BuiltWithElements**
