import type { ReactElement } from "react";
import { HelloEmail } from "@/templates/email/hello";

export type TemplateType = "email" | "document";

export type TemplateCategory = "Product" | "Marketing" | "Business";

export type TemplateStatus = "ready" | "planned";

export interface TemplateMeta {
  slug: string;
  name: string;
  category: TemplateCategory;
  type: TemplateType;
  featured?: boolean;
  description: string;
  status: TemplateStatus;
  component?: () => ReactElement;
  /** Placeholder gradient for planned template previews */
  previewGradient?: string;
}

export const templates: TemplateMeta[] = [
  {
    slug: "hello",
    name: "Hello LaunchKit",
    category: "Product",
    type: "email",
    featured: true,
    status: "ready",
    description: "Welcome email showcasing shared Elements blocks.",
    component: HelloEmail,
    previewGradient: "from-[#6D5EF7] to-[#5EA8FF]",
  },
  {
    slug: "newsletter",
    name: "Newsletter",
    category: "Marketing",
    type: "email",
    featured: true,
    status: "planned",
    description: "Weekly product newsletter with editorial layout.",
    previewGradient: "from-[#F59E0B] via-[#EF4444] to-[#8B5CF6]",
  },
  {
    slug: "product-launch",
    name: "Product Launch",
    category: "Product",
    type: "email",
    status: "planned",
    description: "Announce a new product with confidence and clarity.",
    previewGradient: "from-[#6D5EF7] to-[#151826]",
  },
  {
    slug: "welcome",
    name: "Welcome Email",
    category: "Product",
    type: "email",
    status: "planned",
    description: "Onboard new users with a polished first impression.",
    previewGradient: "from-[#5EA8FF] to-[#6D5EF7]",
  },
  {
    slug: "feature-announcement",
    name: "Feature Announcement",
    category: "Product",
    type: "email",
    status: "planned",
    description: "Highlight a major feature release to your user base.",
    previewGradient: "from-[#8B7CFF] to-[#BFA7FF]",
  },
  {
    slug: "changelog",
    name: "Changelog",
    category: "Product",
    type: "email",
    status: "planned",
    description: "Ship notes and version updates in a scannable format.",
    previewGradient: "from-[#0F111A] to-[#6D5EF7]",
  },
  {
    slug: "event-invitation",
    name: "Event Invitation",
    category: "Marketing",
    type: "email",
    status: "planned",
    description: "Invite attendees to webinars, launches, and meetups.",
    previewGradient: "from-[#EF4444] to-[#F59E0B]",
  },
  {
    slug: "customer-success",
    name: "Customer Success",
    category: "Marketing",
    type: "email",
    status: "planned",
    description: "Celebrate milestones and nurture customer relationships.",
    previewGradient: "from-[#10B981] to-[#5EA8FF]",
  },
  {
    slug: "security-update",
    name: "Security Update",
    category: "Product",
    type: "email",
    status: "planned",
    description: "Communicate security patches with clarity and urgency.",
    previewGradient: "from-[#374151] to-[#6D5EF7]",
  },
  {
    slug: "product-proposal",
    name: "Product Proposal",
    category: "Business",
    type: "document",
    status: "planned",
    description: "Structured proposal for client engagements.",
    previewGradient: "from-[#6D5EF7] to-[#151826]",
  },
  {
    slug: "project-brief",
    name: "Project Brief",
    category: "Business",
    type: "document",
    status: "planned",
    description: "Align stakeholders with scope, goals, and timeline.",
    previewGradient: "from-[#5EA8FF] to-[#0F111A]",
  },
  {
    slug: "meeting-summary",
    name: "Meeting Summary",
    category: "Business",
    type: "document",
    status: "planned",
    description: "Capture decisions and action items after meetings.",
    previewGradient: "from-[#8B7CFF] to-[#374151]",
  },
  {
    slug: "product-roadmap",
    name: "Product Roadmap",
    category: "Product",
    type: "document",
    status: "planned",
    description: "Share quarterly priorities and strategic direction.",
    previewGradient: "from-[#6D5EF7] to-[#10B981]",
  },
];

export function getTemplateBySlug(
  type: TemplateType,
  slug: string,
): TemplateMeta | undefined {
  return templates.find((t) => t.type === type && t.slug === slug);
}

export function getTemplatesByType(type: TemplateType): TemplateMeta[] {
  return templates.filter((t) => t.type === type);
}

export function getFeaturedTemplates(): TemplateMeta[] {
  return templates.filter((t) => t.featured);
}

export function getReadyTemplates(): TemplateMeta[] {
  return templates.filter((t) => t.status === "ready");
}