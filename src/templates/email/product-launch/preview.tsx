import type { ProductLaunchEmailProps } from "./index";

export const productLaunchPreview: ProductLaunchEmailProps = {
  productName: "LaunchKit Analytics",
  tagline: "Insights that keep your team in sync",
  headline: "Introducing LaunchKit Analytics",
  description:
    "Turn product signals into clear decisions. LaunchKit Analytics gives engineering and product leaders a single view of adoption, performance, and team health, without another dashboard to maintain.",
  features: [
    {
      title: "Real-time dashboards",
      description: "Monitor key metrics across teams with live, filterable views.",
    },
    {
      title: "Automated alerts",
      description: "Get notified when adoption drops or error rates spike.",
    },
    {
      title: "Export-ready reports",
      description: "Share weekly summaries with stakeholders in one click.",
    },
  ],
  stats: [
    { value: "38%", label: "Faster decisions" },
    { value: "12k", label: "Active workspaces" },
    { value: "4.9", label: "Avg. team rating" },
  ],
  ctaLabel: "Explore Analytics",
  ctaUrl: "https://launchkit.io/analytics",
};
