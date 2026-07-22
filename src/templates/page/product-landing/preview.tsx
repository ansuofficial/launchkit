import type { ProductLandingPageProps } from "./index";
import { TEMPLATE_IMAGES } from "@/elements/assets";

export const productLandingPreview: ProductLandingPageProps = {
  brandName: "LaunchKit",
  eyebrow: "Product operations platform",
  headline: "Ship product work with clarity, not chaos",
  subheadline:
    "Unify roadmaps, launch checklists, and customer updates so your team moves from idea to release without losing the thread.",
  primaryCtaLabel: "Start free trial",
  primaryCtaUrl: "https://launchkit.io/signup",
  secondaryCtaLabel: "Watch 2-min demo",
  secondaryCtaUrl: "https://launchkit.io/demo",
  heroImageUrl: TEMPLATE_IMAGES.pageHeroProduct,
  logosLabel: "Trusted by product teams at",
  logos: "Northwind · Atlas · Lumen · Vantage · Orbit",
  stats: [
    { value: "12k+", label: "Teams shipping weekly" },
    { value: "38%", label: "Faster release cycles" },
    { value: "4.9", label: "Average team rating" },
  ],
  features: [
    {
      title: "Launch playbooks",
      description:
        "Reusable checklists for GTM, support, and engineering so every release follows a proven path.",
      icon: "rocket",
    },
    {
      title: "Secure by default",
      description:
        "SSO, audit logs, and role-based access for teams handling sensitive roadmap data.",
      icon: "shield",
    },
    {
      title: "Shared source of truth",
      description:
        "One live view of priorities, owners, and status. No more hunting across docs and threads.",
      icon: "layers",
    },
    {
      title: "Insights that matter",
      description:
        "Track adoption, feedback, and launch health without building another dashboard.",
      icon: "chart",
    },
    {
      title: "Built for teams",
      description:
        "Invite PMs, designers, and engineers with permissions that match how you already work.",
      icon: "users",
    },
    {
      title: "Ship on schedule",
      description:
        "Timeline views and reminders keep stakeholders aligned without another status meeting.",
      icon: "clock",
    },
  ],
  featureSectionTitle: "Turn launches into a system, not a scramble",
  featureSectionBody:
    "Connect roadmap items to emails, docs, and customer updates. When a feature ships, every channel stays in sync.",
  featureBullets: [
    "Link any roadmap item to a launch checklist",
    "Auto-draft changelog and customer notes",
    "Notify owners when blockers appear",
  ],
  featureImageUrl: TEMPLATE_IMAGES.pageFeatureWorkflow,
  testimonial: {
    quote:
      "LaunchKit replaced three tools for us. Launches went from frantic Slack threads to a calm, shared checklist everyone trusts.",
    name: "Maya Chen",
    role: "Head of Product, Northwind Labs",
    avatarUrl: TEMPLATE_IMAGES.pageTestimonial,
  },
};
