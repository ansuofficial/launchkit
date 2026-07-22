import type { FeatureAnnouncementEmailProps } from "./index";

export const featureAnnouncementPreview: FeatureAnnouncementEmailProps = {
  featureName: "Smart Workflows",
  headline: "Automate handoffs without losing context",
  description:
    "Smart Workflows routes tasks between teams based on rules you define. Status changes, approvals, and notifications happen automatically so nothing falls through the cracks.",
  benefits: [
    {
      title: "Visual builder",
      description: "Design multi-step flows with triggers, conditions, and actions.",
    },
    {
      title: "Cross-team routing",
      description: "Assign work to the right squad based on labels, priority, or SLA.",
    },
    {
      title: "Audit trail",
      description: "Every automated action is logged for compliance and debugging.",
    },
  ],
  ctaLabel: "Try Smart Workflows",
  ctaUrl: "https://launchkit.io/workflows",
};