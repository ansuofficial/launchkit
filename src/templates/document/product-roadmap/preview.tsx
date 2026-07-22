import type { ProductRoadmapDocumentProps } from "./index";

export const productRoadmapPreview: ProductRoadmapDocumentProps = {
  title: "LaunchKit Product Roadmap",
  period: "H1 2026",
  audience: "customers and partners",
  lastUpdated: "March 15, 2026",
  vision:
    "Make cross-team coordination effortless so product, engineering, and GTM share one source of truth for launches, workflows, and outcomes without adding process overhead.",
  themes: [
    {
      title: "Automate",
      description: "Remove manual handoffs",
      items: [
        "Smart Workflows GA",
        "Approval chains",
        "SLA-based routing",
      ],
    },
    {
      title: "Inform",
      description: "Clarity without meetings",
      items: [
        "Live launch dashboards",
        "Changelog digests",
        "Stakeholder digests",
      ],
    },
    {
      title: "Trust",
      description: "Enterprise-ready foundations",
      items: [
        "Audit log export",
        "SSO expansion",
        "Regional data residency",
      ],
    },
  ],
  timeline: [
    ["Now (Q1)", "Ship workflows", "Smart Workflows GA, admin cookbook, reliability SLOs"],
    ["Next (Q2)", "Scale insights", "Cross-project analytics, scheduled digests, API v2"],
    ["Later (H2)", "Platform depth", "Marketplace templates, advanced governance, mobile review"],
  ],
  principles: [
    "Customer outcomes over feature count - ship what reduces coordination cost",
    "Reliability first - new capabilities launch behind measured quality gates",
    "Transparent sequencing - public roadmap updates each quarter with rationale",
  ],
};