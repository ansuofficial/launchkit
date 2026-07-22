# Security Policy

## Supported versions

LaunchKit is a static template library and Next.js presentation app. Security updates apply to the latest commit on the default branch (`main`).

| Version | Supported |
|---------|-----------|
| `main` (latest) | Yes |
| Older commits / tags | Best effort only |

## What is in scope

- Vulnerabilities in this repository's application code, build scripts, or CI configuration
- Dependency issues that affect consumers who install and run this project
- Unsafe handling of user-controlled input in the web app (for example XSS in preview chrome)

## What is out of scope

- Issues in third-party products (Unlayer Elements, Next.js, npm packages) that should be reported upstream
- Feature requests or template design feedback (use GitHub Issues instead)
- Social engineering or physical attacks

## Reporting a vulnerability

Please **do not** open a public GitHub issue for security vulnerabilities.

1. Prefer GitHub's private vulnerability reporting if enabled on this repository:
   - **Security** tab → **Report a vulnerability**
   - Or: https://github.com/ansuofficial/launchkit/security/advisories/new
2. If private reporting is unavailable, contact the maintainer via GitHub:
   - https://github.com/ansuofficial

Include as much detail as you can:

- Description of the issue and impact
- Steps to reproduce or a proof of concept
- Affected commit, branch, or release
- Suggested fix (optional)

## Response expectations

- **Acknowledgement:** within 7 days when possible
- **Status update:** as we investigate and patch
- **Disclosure:** coordinated after a fix is available, unless the risk is already public

We appreciate responsible disclosure and will credit reporters who want attribution (unless you prefer to remain anonymous).
