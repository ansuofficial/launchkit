import type { ChangelogEmailProps } from "./index";

export const changelogPreview: ChangelogEmailProps = {
  version: "v2.8.0",
  releaseDate: "March 12, 2026",
  summary:
    "This release focuses on workflow automation, faster search, and reliability improvements across the platform.",
  sections: [
    {
      label: "Added",
      items: [
        "Smart Workflows builder with conditional routing",
        "Full-text search across projects, docs, and comments",
        "Bulk export for audit logs (Enterprise)",
      ],
    },
    {
      label: "Improved",
      items: [
        "Dashboard load time reduced by 35% on large workspaces",
        "Notification batching for high-volume teams",
      ],
    },
    {
      label: "Fixed",
      items: [
        "Timezone display in scheduled reports",
        "Occasional duplicate webhook deliveries",
      ],
    },
  ],
  ctaLabel: "View full changelog",
  ctaUrl: "https://launchkit.io/changelog/v2-8-0",
};