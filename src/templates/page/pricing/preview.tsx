import type { PricingPageProps } from "./index";

export const pricingPreview: PricingPageProps = {
  brandName: "Flowstack",
  headline: "Pricing that scales with your team",
  subheadline:
    "Start free for side projects. Upgrade when launches, approvals, and customer updates need a real system.",
  tiers: [
    {
      name: "Starter",
      price: "$0",
      period: "per month",
      description: "For indie builders validating a product idea.",
      features:
        "✓ Up to 3 seats<br/>✓ 2 active launch playbooks<br/>✓ Email templates library<br/>✓ Community support",
      ctaLabel: "Get started",
      ctaUrl: "https://flowstack.io/signup?plan=starter",
    },
    {
      name: "Growth",
      price: "$49",
      period: "per seat / month",
      description: "For product teams shipping every week.",
      features:
        "✓ Unlimited playbooks<br/>✓ Shared roadmaps<br/>✓ Brand kit & custom domains<br/>✓ Priority chat support",
      ctaLabel: "Start Growth trial",
      ctaUrl: "https://flowstack.io/signup?plan=growth",
      highlighted: true,
    },
    {
      name: "Business",
      price: "$99",
      period: "per seat / month",
      description: "For orgs with security and scale requirements.",
      features:
        "✓ SSO & SCIM<br/>✓ Audit logs<br/>✓ Dedicated success manager<br/>✓ Custom data retention",
      ctaLabel: "Contact sales",
      ctaUrl: "https://flowstack.io/contact?plan=business",
    },
  ],
  faqs: [
    {
      question: "Can I switch plans later?",
      answer:
        "Yes. Upgrade or downgrade anytime. Prorated charges apply on the Growth and Business plans.",
    },
    {
      question: "Do you offer nonprofit or education pricing?",
      answer:
        "We offer 40% off for verified nonprofits and accredited educational institutions. Contact sales with proof of status.",
    },
    {
      question: "What happens to my data if I cancel?",
      answer:
        "You can export projects, templates, and brand assets as JSON and HTML for 30 days after cancellation.",
    },
  ],
};
