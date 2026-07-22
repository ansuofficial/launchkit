import type { ProjectBriefDocumentProps } from "./index";

export const projectBriefPreview: ProjectBriefDocumentProps = {
  projectName: "Smart Workflows GA Launch",
  owner: "Jordan Lee, Product Manager",
  status: "In progress",
  lastUpdated: "March 20, 2026",
  problem:
    "Teams rely on manual handoffs between product, support, and engineering. Status updates are delayed, ownership is unclear, and SLA breaches are discovered after the fact.",
  goals: [
    "Ship Smart Workflows to all Growth and Enterprise plans",
    "Migrate the top 20 manual playbooks into automated flows",
    "Achieve 80% weekly active usage among enabled workspaces within 60 days",
  ],
  successMetrics: [
    "Time-to-first-workflow under 10 minutes for new admins",
    "30% reduction in manual status pings in Slack",
    "Fewer than 2 P1 incidents related to workflow runtime in launch month",
  ],
  inScope: [
    "Visual workflow builder and conditional routing",
    "Audit log for automated actions",
    "Migration tooling for existing playbooks",
    "In-product onboarding and admin docs",
  ],
  outOfScope: [
    "Custom scripting language for advanced users",
    "Native mobile workflow editor",
    "Third-party marketplace for shared templates",
  ],
  stakeholders: [
    ["Product", "Jordan Lee", "Scope, prioritization, launch readiness"],
    ["Engineering", "Sam Okonkwo", "Builder, runtime, reliability"],
    ["Design", "Priya Nair", "Editor UX and empty states"],
    ["GTM", "Chris Alvarez", "Positioning, enablement, pricing"],
  ],
  milestones: [
    ["Beta freeze", "April 3, 2026", "Sam Okonkwo"],
    ["GA candidate", "April 17, 2026", "Jordan Lee"],
    ["Public launch", "April 24, 2026", "Chris Alvarez"],
    ["Post-launch review", "May 8, 2026", "Jordan Lee"],
  ],
  risks: [
    "Migration edge cases for nested approval chains may require phased rollout",
    "Support load may spike if admin onboarding is incomplete",
    "Dependency on audit-log export for Enterprise compliance review",
  ],
};