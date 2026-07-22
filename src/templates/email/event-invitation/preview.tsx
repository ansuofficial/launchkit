import type { EventInvitationEmailProps } from "./index";

export const eventInvitationPreview: EventInvitationEmailProps = {
  eventName: "Building Reliable Product Teams",
  eventDate: "Thursday, April 3, 2026",
  eventTime: "11:00 AM - 12:00 PM PT",
  location: "Live webinar · <a href='https://flowstack.io/events' style='color:#5EA8FF;text-decoration:none;'>flowstack.io/events</a>",
  description:
    "Join product and engineering leaders for a practical session on reducing coordination overhead, improving release cadence, and keeping stakeholders informed without status-meeting fatigue.",
  agenda: [
    "Framework for async decision-making across time zones",
    "Live demo: changelog and launch templates in production",
    "Q&A with Flowstack's Head of Product",
  ],
  ctaLabel: "Reserve your spot",
  ctaUrl: "https://flowstack.io/events/building-reliable-teams",
};