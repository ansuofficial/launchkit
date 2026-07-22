import type { NewsletterEmailProps } from "./index";

export const newsletterPreview: NewsletterEmailProps = {
  edition: "Edition 24 · March 2026",
  intro:
    "Shipped three major improvements this week, plus a look at how distributed teams stay aligned without adding process overhead.",
  articles: [
    {
      title: "How we cut deploy time by 40%",
      summary:
        "Our platform team rolled out parallel preview environments and smarter caching. Here is what changed, and what we learned along the way.",
      readUrl: "https://launchkit.io/blog/deploy-time",
    },
    {
      title: "Template library refresh",
      summary:
        "Twelve new email and document templates are live, built on Elements for consistent, production-ready output.",
      readUrl: "https://launchkit.io/blog/templates",
    },
    {
      title: "Community spotlight: OpenCLI",
      summary:
        "OpenCLI uses LaunchKit to onboard 12,000 developers each month. Their team shares the playbook.",
      readUrl: "https://launchkit.io/blog/opencli",
    },
  ],
  ctaLabel: "View all updates",
  ctaUrl: "https://launchkit.io/changelog",
};