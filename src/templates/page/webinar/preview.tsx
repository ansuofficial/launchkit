import type { WebinarPageProps } from "./index";
import { TEMPLATE_IMAGES } from "@/elements/assets";

export const webinarPreview: WebinarPageProps = {
  brandName: "Flowstack",
  eventLabel: "Product webinar",
  headline: "Building reliable product launches in 2026",
  subheadline:
    "A practical session for PMs and marketing leads on coordinating roadmap, messaging, and customer updates without the last-minute scramble.",
  dateLabel: "Thursday, August 14",
  timeLabel: "10:00 AM PT · 45 minutes",
  locationLabel: "Live on Zoom · recording included",
  ctaLabel: "Register free",
  ctaUrl: "https://flowstack.io/events/reliable-launches",
  speakerImageUrl: TEMPLATE_IMAGES.pageWebinarSpeaker,
  takeaways: [
    {
      title: "Launch systems that stick",
      description:
        "A lightweight playbook structure you can reuse for features, migrations, and pricing changes.",
    },
    {
      title: "Metrics that matter",
      description:
        "Which launch KPIs to track in week one vs. month one, and how to report them to leadership.",
    },
    {
      title: "Cross-team rituals",
      description:
        "How product, design, and GTM stay aligned with one shared checklist instead of five docs.",
    },
  ],
  agenda: [
    {
      time: "0:00",
      title: "Why launches still break",
      detail: "Common failure modes from real SaaS teams and what early signals look like.",
    },
    {
      time: "0:12",
      title: "The Flowstack launch model",
      detail: "A four-phase checklist from freeze to follow-up, with owner templates.",
    },
    {
      time: "0:28",
      title: "Live walkthrough",
      detail: "Wiring a feature announcement email, roadmap note, and customer success note.",
    },
    {
      time: "0:40",
      title: "Q&A",
      detail: "Open floor for process, tooling, and org design questions.",
    },
  ],
  speaker: {
    name: "Jordan Ellis",
    role: "Director of Product Marketing, Flowstack",
    bio: "Jordan has led launch programs at three B2B SaaS companies and writes about product communication systems. They will share field-tested templates you can apply the same day.",
  },
};
