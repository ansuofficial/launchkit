# Changelog

All notable changes to LaunchKit are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/) for tagged releases.

## [Unreleased]

### Added

- Premium README screenshots under `public/images/readme/` (2x retina) and `npm run screenshots` capture script

- Open-source readiness pass: `.editorconfig`, `CHANGELOG.md`, expanded README and CONTRIBUTING
- Working `npm run export-html` that writes static HTML under `public/exports/`
- Legacy redirect for `/preview/page/<slug>` to match email and document routes
- Audit record at `docs/open-source-readiness-audit.md`

### Removed

- Non-product `mcps/` agent tooling from the published repository
- Empty unused `src/templates/email/hello/` path

### Changed

- README and CONTRIBUTING document canonical browse routes, HTML rendering, and Resend usage
- Agents.md folder structure aligned with the current repository layout
- plan.md phase checkboxes updated to reflect completed template and polish work

## [0.1.0] - 2026-07

### Added

- Premium README screenshots under `public/images/readme/` (2x retina) and `npm run screenshots` capture script

- Landing page, template browse UI, and live previews
- 8 email templates, 4 document templates, and 4 page templates built with Elements
- Shared Elements blocks under `src/elements/shared/`
- Template registry and smoke render script
- MIT license, CONTRIBUTING, CODE_OF_CONDUCT, SECURITY, GitHub issue/PR templates, CI, Dependabot
