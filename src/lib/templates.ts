import type { ReactElement } from "react";
import { MeetingSummaryDocument } from "@/templates/document/meeting-summary";
import { meetingSummaryPreview } from "@/templates/document/meeting-summary/preview";
import { ProductProposalDocument } from "@/templates/document/product-proposal";
import { productProposalPreview } from "@/templates/document/product-proposal/preview";
import { ProductRoadmapDocument } from "@/templates/document/product-roadmap";
import { productRoadmapPreview } from "@/templates/document/product-roadmap/preview";
import { ProjectBriefDocument } from "@/templates/document/project-brief";
import { projectBriefPreview } from "@/templates/document/project-brief/preview";
import { ChangelogEmail } from "@/templates/email/changelog";
import { changelogPreview } from "@/templates/email/changelog/preview";
import { CustomerSuccessEmail } from "@/templates/email/customer-success";
import { customerSuccessPreview } from "@/templates/email/customer-success/preview";
import { EventInvitationEmail } from "@/templates/email/event-invitation";
import { eventInvitationPreview } from "@/templates/email/event-invitation/preview";
import { FeatureAnnouncementEmail } from "@/templates/email/feature-announcement";
import { featureAnnouncementPreview } from "@/templates/email/feature-announcement/preview";
import { NewsletterEmail } from "@/templates/email/newsletter";
import { newsletterPreview } from "@/templates/email/newsletter/preview";
import { ProductLaunchEmail } from "@/templates/email/product-launch";
import { productLaunchPreview } from "@/templates/email/product-launch/preview";
import { SecurityUpdateEmail } from "@/templates/email/security-update";
import { securityUpdatePreview } from "@/templates/email/security-update/preview";
import { WelcomeEmail } from "@/templates/email/welcome";
import { welcomePreview } from "@/templates/email/welcome/preview";
import { AgencyPage } from "@/templates/page/agency";
import { agencyPreview } from "@/templates/page/agency/preview";
import { PricingPage } from "@/templates/page/pricing";
import { pricingPreview } from "@/templates/page/pricing/preview";
import { ProductLandingPage } from "@/templates/page/product-landing";
import { productLandingPreview } from "@/templates/page/product-landing/preview";
import { WebinarPage } from "@/templates/page/webinar";
import { webinarPreview } from "@/templates/page/webinar/preview";

export type TemplateType = "email" | "document" | "page";

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
    slug: "product-launch",
    name: "Product Launch",
    category: "Product",
    type: "email",
    featured: true,
    status: "ready",
    description: "Announce a new product with confidence and clarity.",
    component: () => ProductLaunchEmail(productLaunchPreview),
    previewGradient: "from-[#6D5EF7] to-[#151826]",
  },
  {
    slug: "newsletter",
    name: "Newsletter",
    category: "Marketing",
    type: "email",
    featured: true,
    status: "ready",
    description: "Weekly product newsletter with editorial layout.",
    component: () => NewsletterEmail(newsletterPreview),
    previewGradient: "from-[#F59E0B] via-[#EF4444] to-[#8B5CF6]",
  },
  {
    slug: "welcome",
    name: "Welcome Email",
    category: "Product",
    type: "email",
    status: "ready",
    description: "Onboard new users with a polished first impression.",
    component: () => WelcomeEmail(welcomePreview),
    previewGradient: "from-[#5EA8FF] to-[#6D5EF7]",
  },
  {
    slug: "feature-announcement",
    name: "Feature Announcement",
    category: "Product",
    type: "email",
    status: "ready",
    description: "Highlight a major feature release to your user base.",
    component: () => FeatureAnnouncementEmail(featureAnnouncementPreview),
    previewGradient: "from-[#8B7CFF] to-[#BFA7FF]",
  },
  {
    slug: "changelog",
    name: "Changelog",
    category: "Product",
    type: "email",
    status: "ready",
    description: "Ship notes and version updates in a scannable format.",
    component: () => ChangelogEmail(changelogPreview),
    previewGradient: "from-[#0F111A] to-[#6D5EF7]",
  },
  {
    slug: "event-invitation",
    name: "Event Invitation",
    category: "Marketing",
    type: "email",
    status: "ready",
    description: "Invite attendees to webinars, launches, and meetups.",
    component: () => EventInvitationEmail(eventInvitationPreview),
    previewGradient: "from-[#EF4444] to-[#F59E0B]",
  },
  {
    slug: "customer-success",
    name: "Customer Success",
    category: "Marketing",
    type: "email",
    status: "ready",
    description: "Celebrate milestones and nurture customer relationships.",
    component: () => CustomerSuccessEmail(customerSuccessPreview),
    previewGradient: "from-[#10B981] to-[#5EA8FF]",
  },
  {
    slug: "security-update",
    name: "Security Update",
    category: "Product",
    type: "email",
    status: "ready",
    description: "Communicate security patches with clarity and urgency.",
    component: () => SecurityUpdateEmail(securityUpdatePreview),
    previewGradient: "from-[#374151] to-[#6D5EF7]",
  },
  {
    slug: "product-proposal",
    name: "Product Proposal",
    category: "Business",
    type: "document",
    status: "ready",
    description: "Structured proposal for client engagements.",
    component: () => ProductProposalDocument(productProposalPreview),
    previewGradient: "from-[#6D5EF7] to-[#151826]",
  },
  {
    slug: "project-brief",
    name: "Project Brief",
    category: "Business",
    type: "document",
    status: "ready",
    description: "Align stakeholders with scope, goals, and timeline.",
    component: () => ProjectBriefDocument(projectBriefPreview),
    previewGradient: "from-[#5EA8FF] to-[#0F111A]",
  },
  {
    slug: "meeting-summary",
    name: "Meeting Summary",
    category: "Business",
    type: "document",
    status: "ready",
    description: "Capture decisions and action items after meetings.",
    component: () => MeetingSummaryDocument(meetingSummaryPreview),
    previewGradient: "from-[#8B7CFF] to-[#374151]",
  },
  {
    slug: "product-roadmap",
    name: "Product Roadmap",
    category: "Product",
    type: "document",
    status: "ready",
    description: "Share quarterly priorities and strategic direction.",
    component: () => ProductRoadmapDocument(productRoadmapPreview),
    previewGradient: "from-[#6D5EF7] to-[#10B981]",
  },
  {
    slug: "product-landing",
    name: "Product Landing",
    category: "Product",
    type: "page",
    featured: true,
    status: "ready",
    description:
      "SaaS product homepage with hero, features, social proof, and CTA.",
    component: () => ProductLandingPage(productLandingPreview),
    previewGradient: "from-[#6D5EF7] to-[#5EA8FF]",
  },
  {
    slug: "pricing",
    name: "Pricing",
    category: "Marketing",
    type: "page",
    status: "ready",
    description:
      "Three-tier pricing layout with trust strip and FAQ for conversion.",
    component: () => PricingPage(pricingPreview),
    previewGradient: "from-[#F0EEFC] to-[#6D5EF7]",
  },
  {
    slug: "webinar",
    name: "Webinar Landing",
    category: "Marketing",
    type: "page",
    status: "ready",
    description:
      "Event registration page with agenda, speaker, and save-your-seat CTA.",
    component: () => WebinarPage(webinarPreview),
    previewGradient: "from-[#0B0C15] to-[#6D5EF7]",
  },
  {
    slug: "agency",
    name: "Agency Studio",
    category: "Business",
    type: "page",
    status: "ready",
    description:
      "Studio landing with capabilities, project grid, and process steps.",
    component: () => AgencyPage(agencyPreview),
    previewGradient: "from-[#151826] to-[#8B7CFF]",
  },
];

export function getTemplateBySlug(
  type: TemplateType,
  slug: string,
): TemplateMeta | undefined {
  return templates.find((t) => t.type === type && t.slug === slug);
}

/** Canonical browse + preview URL (docs-style, single surface). */
export function getTemplateHref(template: Pick<TemplateMeta, "type" | "slug">): string {
  return `/templates/${template.type}/${template.slug}`;
}

export function isTemplateType(value: string): value is TemplateType {
  return value === "email" || value === "document" || value === "page";
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

export function getTemplatesByCategory(
  category: TemplateCategory,
): TemplateMeta[] {
  return templates.filter((t) => t.category === category);
}

export interface TemplateFilters {
  category?: TemplateCategory | "all";
  type?: TemplateType | "all";
}

export function filterTemplates({
  category = "all",
  type = "all",
}: TemplateFilters = {}): TemplateMeta[] {
  return templates.filter((t) => {
    const matchCategory = category === "all" || t.category === category;
    const matchType = type === "all" || t.type === type;
    return matchCategory && matchType;
  });
}

export const TEMPLATE_CATEGORIES: TemplateCategory[] = [
  "Product",
  "Marketing",
  "Business",
];