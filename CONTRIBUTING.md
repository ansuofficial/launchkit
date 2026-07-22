# Contributing to LaunchKit

Thanks for helping build professional email and document templates for modern software teams. This guide covers how we work as an open-source project.

## Code of conduct

By participating, you agree to uphold our [Code of Conduct](./CODE_OF_CONDUCT.md).

## Project standards

Read these before writing code:

| Document | Purpose |
|----------|---------|
| [Agents.md](./Agents.md) | Non-negotiables, stack, folder structure, Elements rules |
| [prd.md](./prd.md) | Product requirements and quality bar |
| [design-system.md](./design-system.md) | Colors, type, spacing, motion |
| [plan.md](./plan.md) | Implementation roadmap |

### Non-goals

Do **not** open PRs that add:

- Authentication, user accounts, or dashboards
- Backend / API servers or databases
- AI generation features
- CMS integrations

Focus on **template quality** and **landing presentation**.

## Development setup

### Prerequisites

- **Node.js** 20 LTS or newer
- **npm** 10+ (ships with Node)
- Git

### Install and run

```bash
git clone https://github.com/ansuofficial/launchkit.git
cd launchkit
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Useful scripts

| Script | Command | Purpose |
|--------|---------|---------|
| Dev server | `npm run dev` | Local Next.js app with Turbopack |
| Lint | `npm run lint` | ESLint (Next.js config) |
| Typecheck | `npm run typecheck` | TypeScript `tsc --noEmit` |
| Smoke | `npm run smoke` | Render all registered templates |
| Build | `npm run build` | Production build |
| Export HTML | `npm run export-html` | Static HTML under `public/exports/` |

CI runs lint, typecheck, smoke, and build on every pull request.

## Branch and PR workflow

We use a standard **fork and pull request** model.

1. **Fork** the repository (or create a branch if you have write access).
2. **Create a branch** from `main` with a clear name:
   - `feat/welcome-email-polish`
   - `fix/preview-iframe-height`
   - `docs/readme-quickstart`
   - `chore/ci-node-version`
3. **Make focused commits.** Prefer conventional-style subjects:
   - `feat: add security update email template`
   - `fix: correct newsletter footer links`
   - `docs: document smoke script in README`
4. **Keep PRs small** when possible (one template or one concern).
5. **Open a pull request** against `main` using the PR template.
6. Ensure **CI is green** before requesting review.
7. A maintainer will review for design-system fit, Elements hierarchy, and copy quality.

### Commit message style

```
type(scope): short summary

Optional body explaining why, not only what.
```

Common types: `feat`, `fix`, `docs`, `style`, `refactor`, `chore`, `ci`, `test`.

## Adding a template

1. Create a folder under `src/templates/email/<slug>/`, `document/`, or `page/`.
2. Add `index.tsx` (Elements component) and `preview.tsx` (sample data).
3. Use the correct root: `<Email>`, `<Document>`, or `<Page>`.
4. Always nest content: **Root → Row → Column → content**. Never skip levels.
5. Prefer shared blocks from `src/elements/shared/`.
6. Use design-system colors and 8-point spacing only.
7. Register the template in `src/lib/templates.ts`.
8. Verify `/preview/email/<slug>` (or document/page equivalent).
9. Run `npm run smoke` and confirm no failures.

### Template quality checklist

- [ ] Realistic business copy (no lorem ipsum)
- [ ] Shared components where applicable
- [ ] Consistent spacing and typography
- [ ] `renderToHtml()` succeeds via smoke script
- [ ] Presentation-ready for a real customer

### Web UI vs Elements

| Layer | Tools |
|-------|--------|
| Landing, browse, preview chrome | shadcn/ui + Tailwind in `src/components/` |
| Email / document / page templates | `@unlayer/react-elements` only |

Never use Tailwind or shadcn class names inside `<Email>` or `<Document>` trees.

## Reporting bugs and ideas

- **Bugs:** [Bug report](https://github.com/ansuofficial/launchkit/issues/new?template=bug_report.yml)
- **Features:** [Feature request](https://github.com/ansuofficial/launchkit/issues/new?template=feature_request.yml)
- **New templates:** [Template request](https://github.com/ansuofficial/launchkit/issues/new?template=template_request.yml)

Search existing issues first to avoid duplicates.

## Security

Do not open public issues for vulnerabilities. See [SECURITY.md](./SECURITY.md).

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](./LICENSE).

## Questions

Open a discussion issue or start a PR draft if you want early feedback on direction. We value clear intent over perfect first drafts.
