# Agents.md - LaunchKit Agent Guidance

> **Read this file before writing any code.** It defines how AI agents and contributors must maintain standards for the LaunchKit project.

## Related Documents

Always read these before starting work:

| Document | Purpose |
|----------|---------|
| [prd.md](./prd.md) | Product requirements, IA, categories, quality standards |
| [pid.md](./pid.md) | Vision, deliverables, tech stack, non-goals |
| [design-system.md](./design-system.md) | Colors, typography, spacing, components, motion |
| [plan.md](./plan.md) | Step-by-step implementation roadmap |

---

## Rule 1. Do not use em dashes (m-dashes)

Never use em dashes (`—`) or en dashes (`–`) in copy, comments, or documentation.

- Prefer commas, periods, colons, parentheses, or a plain hyphen (`-`) only for ranges or compound words.
- If an em dash appears anywhere in the project, remove it.

## Project Identity

**Name:** LaunchKit  
**Tagline:** Professional email & document templates for modern software teams.  
**Motto:** Beautiful communication should be effortless.

**Challenge:** Build With Elements Challenge 2026 (deadline: July 31, 2026)

**Purpose:** A premium open-source collection of production-ready email and document templates built with [Elements](https://unlayer.com/elements) (`@unlayer/react-elements`). LaunchKit is a cohesive design system, not isolated one-off templates.

**Vision:** Templates should feel like they belong at Stripe, Linear, Vercel, Notion, Apple, or Raycast. Clarity and timeless design over decorative effects.

**Target audience:** SaaS startups, indie hackers, open-source maintainers, developer tools, product teams, agencies, B2B software companies.

---

## Non-Negotiables (Non-Goals)

Do **not** build or add:

- Authentication
- Backend / API server
- AI generation features
- User accounts
- Dashboard
- CMS
- Database

The focus is **template quality** and **landing page presentation** only.

---

## Tech Stack

| Layer | Technology | Usage |
|-------|------------|-------|
| Templates | `@unlayer/react-elements` | Email and document templates **only** |
| Framework | Next.js 15 (App Router) | Landing page, preview routes |
| Language | TypeScript (strict) | Entire codebase |
| Landing UI | **shadcn/ui** + Tailwind CSS | All web UI components (default) |
| Icons | Lucide React | Line icons only, no filled sets |
| Fonts | Inter (primary), Geist (alternative) | Via `next/font` |
| Version control | GitHub | Public repo, MIT license |

### UI Component Policy (shadcn-first)

**Default to shadcn/ui for all web UI.** Use components from `src/components/ui/` (Button, Card, Badge, Tabs, etc.) for:

- Landing page sections
- Template browse page
- Preview page chrome (toolbars, layout wrappers)
- Any interactive web interface

**Only use `@unlayer/react-elements` where required:**

- Inside `<Email>`, `<Document>`, or `<Page>` template trees
- Shared blocks in `src/elements/shared/` that compose into templates
- `renderToHtml()` / `renderToPlainText()` output

**Do not** build custom landing UI primitives when a shadcn component exists. Extend shadcn via `className` and design tokens, not bespoke Button/Card implementations.

**Link + Button pattern:** This project uses shadcn base-nova (`@base-ui/react`). For navigation buttons, use `buttonVariants()` with Next.js `<Link>` - not `asChild`.

```tsx
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

<Link href="/templates" className={cn(buttonVariants({ variant: "outline" }))}>
  Browse Templates
</Link>
```

**Critical rule:** Tailwind and shadcn classes are for the **web app only**. Email and document templates use Elements props and inline styles. Never use Tailwind or shadcn inside `<Email>` or `<Document>` trees.

---

## Folder Structure

```
launchkit/
├── Agents.md                 # This file
├── README.md                 # Product + developer entrypoint
├── CONTRIBUTING.md
├── CHANGELOG.md
├── design-system.md
├── plan.md / prd.md / pid.md
├── docs/                     # Audits and long-form notes
├── public/
│   └── images/               # Screenshots, hero assets, template previews
├── scripts/
│   ├── export-html.ts        # Batch static HTML export
│   └── smoke-render.ts       # CI smoke render of all templates
└── src/
    ├── app/                  # Next.js App Router
    │   ├── page.tsx          # Landing page
    │   ├── templates/        # Browse + /templates/[type]/[slug] preview
    │   └── preview/          # Legacy redirects → /templates/...
    ├── components/
    │   ├── ui/               # shadcn/ui primitives
    │   ├── landing/          # Landing page sections
    │   ├── templates/        # Browse + preview chrome
    │   └── preview/          # Preview frame helpers
    ├── elements/
    │   ├── shared/           # Reusable Elements blocks
    │   └── assets/           # SVG / graphic helpers
    ├── templates/
    │   ├── email/<slug>/     # index.tsx + preview.tsx
    │   ├── document/<slug>/
    │   └── page/<slug>/
    ├── lib/
    │   ├── render.ts         # renderToHtml wrappers
    │   ├── templates.ts      # Template registry
    │   └── preview-html.ts   # Safe iframe preparation
    └── styles/
        ├── globals.css
        └── tokens.css
```

Every new template gets its own folder. Never dump multiple templates into one file.

Canonical preview URL: `/templates/<type>/<slug>`. Legacy `/preview/...` routes only redirect.

---

## Elements Coding Rules

Elements is the **only** way to author email and document templates.

### Hierarchy (mandatory)

```
<Email | Page | Document>
  └── <Row layout={ColumnLayouts.*}>
        └── <Column>
              └── <Heading | Paragraph | Button | Image | ... />
```

- **Never** skip levels (e.g., content directly inside `Row`, or `Row` directly inside `Email`)
- Use `ColumnLayouts` enum for row layouts
- Column count must match the layout (e.g., `TwoEqual` requires exactly 2 `<Column>` children)

### Root wrappers

| Wrapper | Output | Use for |
|---------|--------|---------|
| `<Email>` | Table-based HTML | All email templates |
| `<Document>` | Print-tuned HTML | All document templates |
| `<Page>` | Flexbox HTML | Optional web previews only |

### Rendering

- Export HTML via `renderToHtml()` from `@unlayer/react-elements`
- Never hand-write HTML for templates
- Preview routes (`/templates/<type>/<slug>`) call `renderToHtml()` server-side and inject into an iframe via preview chrome

### Email defaults

- Content width: `600px`
- Font stack: `Inter, -apple-system, BlinkMacSystemFont, sans-serif`
- Primary CTA color: `#6D5EF7` (design system primary purple)
- Background: light (`#FFFFFF` / `#F8F9FC`) for email body rows; dark accents sparingly

### Shared components

Build reusable blocks in `src/elements/shared/` and compose them inside templates. Do not duplicate header/footer markup across templates.

---

## Design System Enforcement

All values come from [design-system.md](./design-system.md). Do not invent colors, spacing, or radii.

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `bg-primary` | `#08090F` | Dark sections (gallery, footer) |
| `bg-secondary` | `#0F111A` | Dark card surfaces |
| `bg-surface` | `#151826` | Elevated dark cards |
| `border` | `rgba(255,255,255,0.08)` | Dark section borders |
| `accent-primary` | `#6D5EF7` | CTAs, key highlights |
| `accent-secondary` | `#8B7CFF` | Hover states |
| `accent-blue` | `#5EA8FF` | Links, secondary accents |
| `accent-highlight` | `#BFA7FF` | Subtle emphasis |

Gradients: use sparingly, only to reinforce focus.

### Typography

- Headings: 700-800 weight
- Body: 400-500 weight
- Line height: 150-170%
- Typography carries hierarchy before color

### Spacing

Use only: `8, 16, 24, 32, 48, 64, 96` (px). No arbitrary values like `13px` or `37px`.

### Radii

- Cards: `20px`
- Buttons: `14px`
- Inputs: `12px`

### Grid

- 12-column desktop grid
- Max content width: `1280px`
- 8-point spacing system

### Motion

- Allowed: fade, scale, slide
- Max duration: `250ms`
- Animations support usability; never distract

### Icons

- Lucide only, line style
- No filled icon sets (no Font Awesome solid, no Heroicons solid)

### Voice

- Professional, concise, developer-friendly, confident
- Avoid marketing hype
- Every sentence must add value

---

## Landing Page Standards

### Layout model (reference screenshot)

The landing page uses a **full-width layout** with:

- **Light sections** (hero, featured, value props, trust row): white / off-white backgrounds
- **Dark section** (preview gallery): `#08090F` background
- **No challenge sidebar** - the dark right panel in the reference image is challenge context, not part of LaunchKit UI

### Section order (from PRD IA)

1. Nav
2. Hero
3. Featured Templates
4. Template Categories (or integrated into gallery/browse)
5. Why LaunchKit
6. Preview Gallery
7. GitHub CTA
8. Footer

### Featured Templates section (required structure)

The Featured Templates block **must** include three parts, in this order:

```
1. SectionHeader
   ├── Title (h2)
   ├── Description (1-2 sentences)
   └── GitHub CTA button ("View on GitHub" + GitHub icon)

2. Showcase card grid (2 columns desktop, 1 column mobile)
   ├── FeaturedTemplateCard (template preview + name badge)
   └── FeaturedTemplateCard
```

**Rules:**

- Never show showcase cards without the section header above them
- GitHub CTA must appear in the Featured section header, not only in the footer
- GitHub CTA also appears in a dedicated bottom CTA band (two placements total)
- Section header copy: professional, concise, no marketing hype
- Gap between header block and card grid: `48px`
- Section padding: `64px` vertical

### Required landing components

| Component | Responsibility |
|-----------|----------------|
| `FeaturedSectionHeader` | Title, description, GitHub CTA |
| `FeaturedTemplateCard` | Preview thumbnail, template name, link to preview route |
| `FeaturedTemplates` | Composes header + card grid |

### Accessibility

- Sufficient color contrast (WCAG AA minimum)
- Alt text on all preview images
- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`)
- Keyboard-accessible buttons and links
- Focus states on interactive elements

---

## Template Authoring Checklist

Before marking any template complete, verify:

- [ ] Uses correct root wrapper (`<Email>` or `<Document>`)
- [ ] Follows Row → Column → content hierarchy
- [ ] Uses shared components from `src/elements/shared/` where applicable
- [ ] Realistic copy: no lorem ipsum, no "TODO" placeholders
- [ ] Consistent spacing (8pt rhythm)
- [ ] Colors from design system only
- [ ] `renderToHtml()` produces valid output without errors
- [ ] Preview route works at `/templates/email/<slug>`, `/templates/document/<slug>`, or `/templates/page/<slug>`
- [ ] Presentation-ready: would you send this to a real customer?
- [ ] Registered in `src/lib/templates.ts` with correct category and metadata

---

## Deliverables (Templates)

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

---

## Code Quality Rules

1. **Focused diffs** - only modify code required by the task; no drive-by refactors
2. **Match existing patterns** - naming, imports, file structure
3. **No decorative clutter** - every pixel has a reason
4. **No placeholder layouts** - every section must look intentional
5. **No inconsistent spacing** - stick to the spacing scale
6. **No random colors** - design system tokens only
7. **TypeScript strict** - no `any` unless absolutely necessary with a comment explaining why
8. **Reusable over duplicated** - extend shared components, don't copy-paste

---

## README and Asset Standards

The GitHub README must include:

- Hero banner image
- Project overview and tagline
- Template gallery with screenshots
- Installation instructions (`git clone`, `npm install`, `npm run dev`)
- Folder structure diagram
- GIF demo of landing page + template previews
- MIT license
- Acknowledgements to Elements / Unlayer

Screenshots: capture at 2x resolution. Use `scripts/export-html.ts` to generate static HTML assets for README.

---

## Common Mistakes to Avoid

| Mistake | Correct approach |
|---------|------------------|
| Building custom Button/Card instead of shadcn | Use `src/components/ui/` shadcn components |
| Using Tailwind inside `<Email>` components | Elements props and inline styles only |
| Skipping Row/Column hierarchy | Always nest content inside Column inside Row |
| Cards without Featured section header | Always render `FeaturedSectionHeader` first |
| GitHub CTA only in footer | Also place in Featured Templates header |
| Lorem ipsum or placeholder text | Realistic business copy |
| Arbitrary spacing values | Use 8, 16, 24, 32, 48, 64, 96 only |
| Heavy shadows or flashy animations | Soft depth, max 250ms subtle motion |
| Building auth, backend, or CMS | Stay within non-goals |
| Copying competitor layouts directly | Take inspiration from restraint and hierarchy only |
| Hand-writing email HTML | Always use `renderToHtml()` |

---

## Quality Gate (Final)

Before submission to the Build With Elements Challenge:

1. Landing page matches reference layout (light hero, featured header + cards, dark gallery)
2. All 12 templates render and preview correctly
3. README is professional with screenshots and GIF
4. Repository is public with MIT license
5. Opening the repo evokes: *"This is exactly how professional communication should look."*

---

## Agent Workflow Summary

```
1. Read Agents.md → prd.md → pid.md → design-system.md → plan.md
2. Identify current phase from plan.md
3. Implement only what that phase requires
4. Run checklist (template or landing, as applicable)
5. Do not advance to next phase without completing checkpoints
6. Never violate non-goals or design system rules
```
