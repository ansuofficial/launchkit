import type { CustomerSuccessEmailProps } from "./index";

export const customerSuccessPreview: CustomerSuccessEmailProps = {
  customerName: "Northwind Labs",
  milestone: "One year on LaunchKit Enterprise",
  message:
    "Your team has shipped 148 releases, onboarded 240 collaborators, and maintained a 99.97% uptime SLA. We are proud to be part of your growth, and excited for what is next.",
  stats: [
    { value: "148", label: "Releases shipped" },
    { value: "240", label: "Team members" },
    { value: "99.97%", label: "Platform uptime" },
  ],
  ctaLabel: "Schedule a strategy review",
  ctaUrl: "https://launchkit.io/customer-success",
};