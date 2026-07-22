import type { WelcomeEmailProps } from "./index";

export const welcomePreview: WelcomeEmailProps = {
  userName: "Alex",
  headline: "Welcome to LaunchKit, Alex",
  intro:
    "You now have a workspace built for shipping fast and staying aligned. Complete the steps below to connect your team and send your first project update.",
  steps: [
    {
      title: "Invite your team",
      description: "Add collaborators and assign roles in under two minutes.",
    },
    {
      title: "Connect your tools",
      description: "Sync GitHub, Slack, and Linear to centralize context.",
    },
    {
      title: "Create your first project",
      description: "Use our project brief template to align on scope and goals.",
    },
  ],
  ctaLabel: "Complete setup",
  ctaUrl: "https://launchkit.io/onboarding",
};