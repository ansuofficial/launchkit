# Open Source Readiness Audit

**Date:** 2026-07-22  
**Branch:** `chore/open-source-readiness`  
**Auditor role:** Senior Staff Engineer / Open Source Maintainer  
**Scope:** Repository clarity, maintainability, discoverability, and developer experience. No product redesign.

---

## 1. Repository audit summary

LaunchKit is already a strong foundation for an open-source template library:

- Solid product code: 8 email, 4 document, and 4 page templates with shared Elements blocks
- Working Next.js 15 app with landing, browse, and live preview
- Core OSS files present: MIT LICENSE, CONTRIBUTING, CODE_OF_CONDUCT, SECURITY, issue/PR templates, CI, Dependabot
- Clear stack boundary: shadcn for web UI, Elements for templates
- Smoke render script as a real quality gate

What keeps it from feeling "feature-ready for Unlayer / GitHub Trending" is not missing features. It is incomplete packaging:

| Area | Status |
|------|--------|
| Template quality and app structure | Strong |
| Open-source policy files | Strong |
| README as a product page | Incomplete |
| Dead / non-project files in the tree | Needs cleanup |
| Documented consumer workflows (render, Resend, export) | Missing or placeholder |
| Internal planning docs vs contributor docs | Blurry |
| Visual assets (screenshots / GIF) | Empty `public/images/` |

A first-time visitor can run the app, but cannot fully answer: how do I render HTML for production, how do I send with Resend, where do screenshots live, and why is `mcps/` in this repo?

---

## 2. Identified issues (by severity)

### Critical

| ID | Issue | Why it matters |
|----|--------|----------------|
| C1 | `scripts/export-html.ts` is a Phase 7 placeholder while `npm run export-html` is advertised | Broken DX; README/CONTRIBUTING claim a workflow that does nothing |
| C2 | README lacks screenshots, template catalog, rendering workflow, Resend integration, and clear customization path | First impression for Unlayer judges and companies; audit requires these answers |
| C3 | `mcps/` (agent task tool schemas) is tracked in git | Not part of LaunchKit; confuses contributors; noise in clone and PR diffs |

### High

| ID | Issue | Why it matters |
|----|--------|----------------|
| H1 | Empty / stale paths: `src/templates/email/hello/` (empty), `document/.gitkeep` with real templates present | Looks unfinished |
| H2 | No `.editorconfig` | Inconsistent formatting across editors for multi-contributor repos |
| H3 | No `CHANGELOG.md` | Consumers and contributors cannot see release history or project maturity |
| H4 | Docs still describe `/preview/email/<slug>` as primary; app uses `/templates/<type>/<slug>` with legacy redirects | Onboarding friction and outdated Agents/plan references |
| H5 | `public/images/` only has `.gitkeep` | README cannot show a premium gallery without assets (documented limitation; no broken image links) |

### Medium

| ID | Issue | Why it matters |
|----|--------|----------------|
| M1 | Root is crowded with internal planning docs (`prd.md`, `pid.md`, `plan.md`) without a docs index | Fine for challenge agents; harder for external contributors to know what is required vs historical |
| M2 | `Agents.md` folder structure diagram is outdated (missing page templates, browse UI, preview panel, assets) | Agents and humans follow stale layout |
| M3 | `plan.md` still shows incomplete Phase 4–7 checkboxes despite templates and OSS files existing | False signal that the project is mid-build |
| M4 | No `/preview/page/[slug]` redirect (email/document only) | Inconsistent legacy URL story |
| M5 | Audit filename typo at root (`open-sourse-readiness-audit.md`) | Unprofessional discoverability |

### Low

| ID | Issue | Why it matters |
|----|--------|----------------|
| L1 | `TemplateStatus` still includes `"planned"` while all registered templates are `"ready"` | Harmless; keep for future templates |
| L2 | `package.json` `"private": true` | Correct (not an npm package); document so people do not expect `npm publish` |
| L3 | No deployed live demo URL | Optional; local demo is enough if documented clearly |

---

## 3. Proposed folder structure

No radical restructure. Keep the existing intentional split. Clean non-product noise and add a small `docs/` area for long-form contributor material.

```
launchkit/
├── .github/                 # CI, issue/PR templates, Dependabot
├── .editorconfig            # NEW - editor consistency
├── docs/                    # NEW - audits and deep contributor guides
│   └── open-source-readiness-audit.md
├── public/
│   └── images/              # README / marketing assets (screenshots when available)
├── scripts/
│   ├── export-html.ts       # FIXED - real batch HTML export
│   └── smoke-render.ts
├── src/
│   ├── app/                 # Next.js routes
│   ├── components/
│   │   ├── ui/              # shadcn primitives
│   │   ├── landing/         # Landing sections
│   │   ├── templates/       # Browse + preview chrome
│   │   └── preview/         # Preview helpers (iframe frame)
│   ├── elements/
│   │   ├── shared/          # Reusable Elements blocks
│   │   └── assets/          # SVG / graphic helpers for templates
│   ├── templates/
│   │   ├── email/<slug>/
│   │   ├── document/<slug>/
│   │   └── page/<slug>/
│   ├── lib/                 # Registry, render, site constants
│   ├── hooks/
│   └── styles/
├── Agents.md                # Engineering standards (AI + human)
├── CHANGELOG.md             # NEW
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── LICENSE
├── README.md                # Expanded product + DX entrypoint
├── design-system.md         # Keep at root (referenced heavily)
├── prd.md / pid.md / plan.md
└── package.json
```

**Explicitly out of the product tree:**

- `mcps/` - local agent tooling; gitignored, not published
- `terminals/` - already gitignored
- Empty experiment folders under `src/templates/`

**Why not move all planning docs into `docs/` now?**  
Those files are hard-linked from Agents.md, CONTRIBUTING, and challenge workflow. Moving them in this pass adds churn without improving templates. Index them clearly from README instead.

---

## 4. File rename recommendations

| Current | Recommendation | Rationale |
|---------|----------------|-----------|
| `open-sourse-readiness-audit.md` | `docs/open-source-readiness-audit.md` | Fix spelling; keep root clean |
| `/preview/email/[slug]` routes | Keep as thin redirects only | Already deprecated; document canonical `/templates/...` |
| None required for components | Keep current names | Landing/browse/Elements names are already descriptive |

No mass renames of template folders or shared components. Names are already slug-aligned and predictable.

---

## 5. Documentation improvements

| Document | Action |
|----------|--------|
| **README.md** | Expand to premium OSS entrypoint: overview, features, install, routes, template catalog, architecture, render HTML, Resend, contributing, license, credits |
| **CONTRIBUTING.md** | Add "Customize a template", "Render HTML", "Send with Resend", align routes with `/templates/...` |
| **Agents.md** | Refresh folder structure diagram to match repo |
| **plan.md** | Mark completed phases so status matches reality |
| **docs/open-source-readiness-audit.md** | This audit (justification record) |
| **CHANGELOG.md** | Start keep-a-changelog style history |

Avoid new docs unless they answer a real consumer question. Prefer README + CONTRIBUTING over a docs explosion.

---

## 6. Open source improvements

| Item | Action |
|------|--------|
| LICENSE | Keep MIT |
| CONTRIBUTING / CoC / SECURITY | Keep; tighten content |
| Issue + PR templates | Keep (already valuable) |
| CI + Dependabot | Keep |
| `.editorconfig` | Add |
| `CHANGELOG.md` | Add |
| `mcps/` in git | Remove from tracking; ignore |
| Screenshots | Structure README for assets; do not invent fake image URLs |

---

## 7. Code organization improvements

| Change | Justification |
|--------|---------------|
| Implement `export-html.ts` using registry + `renderTemplateToHtml` | Matches smoke script patterns; fulfills advertised script |
| Add `/preview/page/[slug]` redirect | Parity with email/document legacy routes |
| Remove empty `hello` template folder | Dead path |
| Remove obsolete `.gitkeep` under populated template trees where useless | Less noise |
| Leave shared Elements and landing components as-is | Already coherent; no over-modularization |

---

## 8. Implementation plan

Ordered for safety and impact:

1. Record this audit under `docs/` and remove the typo-named root file  
2. Remove non-product `mcps/` from git; ignore it; drop empty `hello/`  
3. Implement `scripts/export-html.ts`  
4. Add `.editorconfig` and `CHANGELOG.md`  
5. Expand `README.md` and update `CONTRIBUTING.md`  
6. Sync `Agents.md` structure + `plan.md` completion status  
7. Add page preview legacy redirect  
8. Run `lint`, `typecheck`, `smoke`, `export-html`, `build`  
9. Commit and push branch for PR review  

**Constraints honored:** no auth/backend/AI, no redesign of landing or templates, no clever abstractions, no boilerplate-only files.

---

## Implementation status

| Step | Status |
|------|--------|
| Audit complete | Done (this document) |
| Code and docs changes | Applied on `chore/open-source-readiness` |
| Test + push | Follows implementation |

---

## Out of scope (explicit)

- Capturing real 2x screenshots / GIF (requires browser session and product approval of assets)
- Deploying a production demo host
- Publishing to npm
- Moving `prd.md` / `pid.md` / `plan.md` into `docs/` (deferred to avoid reference churn)
- Template visual redesign
