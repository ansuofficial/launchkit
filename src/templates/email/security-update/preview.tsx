import type { SecurityUpdateEmailProps } from "./index";

export const securityUpdatePreview: SecurityUpdateEmailProps = {
  headline: "API token rotation required",
  severity: "Important - action required",
  summary:
    "We identified unusual activity affecting a subset of API tokens created before January 2026. No customer data was accessed, but we are requiring rotation as a precaution.",
  whatHappened:
    "On March 10, our security team detected automated attempts to validate legacy API tokens against third-party integrations. The activity was blocked within 12 minutes and traced to a misconfigured partner webhook, not a breach of Flowstack infrastructure.",
  whatWeDid:
    "We invalidated affected tokens, notified integration partners, and deployed additional rate limiting on authentication endpoints. A full audit is published on our status page.",
  actionRequired: [
    {
      title: "Rotate API tokens",
      description: "Generate new tokens in Settings → API and update your integrations.",
    },
    {
      title: "Review access logs",
      description: "Check the audit log for any unrecognized requests in the past 30 days.",
    },
    {
      title: "Enable MFA",
      description: "Require multi-factor authentication for all admin accounts.",
    },
  ],
  ctaLabel: "Review security settings",
  ctaUrl: "https://flowstack.io/settings/security",
};