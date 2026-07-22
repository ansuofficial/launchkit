import type { MeetingSummaryDocumentProps } from "./index";

export const meetingSummaryPreview: MeetingSummaryDocumentProps = {
  meetingTitle: "Smart Workflows Launch Readiness",
  meetingDate: "Thursday, March 19, 2026",
  duration: "45 minutes",
  facilitator: "Jordan Lee",
  attendees:
    "Jordan Lee, Sam Okonkwo, Priya Nair, Chris Alvarez, Dana Brooks (Customer Success)",
  agenda: [
    "Beta feedback summary and open issues",
    "GA criteria and remaining blockers",
    "Go-to-market timeline and enablement plan",
    "Support readiness and escalation paths",
  ],
  discussion: [
    "Beta workspaces reported strong value on approval routing; nested conditions still need polish.",
    "Reliability targets met for 14 consecutive days; one intermittent timeout under investigation.",
    "Sales and CS request a one-page workflow cookbook before customer webinars.",
    "Support coverage plan agreed for launch week with extended hours on day one.",
  ],
  decisions: [
    "Target GA date remains April 24, 2026, contingent on nested-condition fix.",
    "Limit GA messaging to Growth and Enterprise; Free tier stays waitlisted.",
    "Publish workflow cookbook by April 10 for GTM and CS training.",
  ],
  actionItems: [
    ["Ship nested-condition fix", "Sam Okonkwo", "Mar 28", "In progress"],
    ["Draft GA blog + changelog", "Chris Alvarez", "Apr 7", "Not started"],
    ["Finalize support runbook", "Dana Brooks", "Apr 10", "In progress"],
    ["Record admin onboarding video", "Priya Nair", "Apr 12", "Not started"],
  ],
  nextMeeting:
    "Launch checkpoint - Tuesday, April 7, 2026 at 10:00 AM PT (async notes if no blockers).",
};