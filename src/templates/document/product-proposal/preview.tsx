import type { ProductProposalDocumentProps } from "./index";

export const productProposalPreview: ProductProposalDocumentProps = {
  title: "Analytics Platform Implementation Proposal",
  clientName: "Northwind Labs",
  preparedBy: "Maya Chen, Solutions Lead",
  date: "March 18, 2026",
  validUntil: "April 18, 2026",
  executiveSummary:
    "This proposal outlines a 12-week engagement to deploy Flowstack Analytics for Northwind Labs, migrate historical metrics, and train product and engineering teams on dashboards, alerts, and reporting workflows.",
  objectives: [
    "Centralize product and engineering metrics in a single analytics workspace",
    "Reduce weekly reporting effort by at least 40% through automated exports",
    "Establish alert thresholds for adoption, latency, and error-rate regressions",
  ],
  deliverables: [
    {
      name: "Discovery & architecture",
      description: "Data source inventory, KPI map, and integration plan.",
    },
    {
      name: "Platform configuration",
      description: "Workspace setup, role-based access, and dashboard suite.",
    },
    {
      name: "Migration & validation",
      description: "Historical data import with reconciliation against existing reports.",
    },
    {
      name: "Enablement",
      description: "Admin training, operator runbooks, and handoff documentation.",
    },
  ],
  timeline: [
    ["Discovery", "Weeks 1-2", "Signed-off KPI map and data contracts"],
    ["Build", "Weeks 3-8", "Live dashboards and alert rules"],
    ["Migrate", "Weeks 9-10", "Validated historical datasets"],
    ["Enable", "Weeks 11-12", "Trained admins and documented runbooks"],
  ],
  investment:
    "Fixed engagement of $48,000 USD, including implementation, training, and 30 days of post-launch support.",
  nextSteps:
    "Schedule a kickoff workshop, confirm data owners, and return a signed statement of work by April 4.",
  ctaLabel: "Schedule kickoff",
  ctaUrl: "https://flowstack.io/proposals/northwind",
};