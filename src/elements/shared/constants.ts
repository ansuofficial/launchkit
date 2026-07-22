/** Shared Elements defaults - email, document, and page templates */

export const EMAIL_CONTENT_WIDTH = "600px";
/** Print-friendly document width (letter/A4 content area) */
export const DOC_CONTENT_WIDTH = "720px";
/** Web page content width (Unlayer marketplace standard) */
export const PAGE_CONTENT_WIDTH = "960px";

/** Outer canvas - soft neutral (Unlayer-style) */
export const EMAIL_OUTER_BG = "#F4F5F7";
export const EMAIL_ROW_BG = "#FFFFFF";
export const DOC_OUTER_BG = "#F4F5F7";
export const DOC_ROW_BG = "#FFFFFF";
export const PAGE_OUTER_BG = "#FFFFFF";
export const PAGE_ROW_BG = "#FFFFFF";
export const PAGE_SURFACE = "#F7F8FA";
export const PAGE_DARK = "#0B0C15";
export const PAGE_DARK_SOFT = "#151826";

/** Single brand accent - use sparingly (CTA, links, small labels) */
export const ACCENT_PURPLE = "#6D5EF7";
export const ACCENT_SOFT = "#F0EEFC";
export const ACCENT_BLUE = "#5EA8FF";

export const TEXT_PRIMARY = "#1A1A1F";
export const TEXT_MUTED = "#6B7280";
export const TEXT_SUBTLE = "#9CA3AF";
export const TEXT_ON_DARK = "#FFFFFF";
export const TEXT_ON_DARK_MUTED = "rgba(255,255,255,0.72)";

/** Quiet surfaces - prefer these over saturated purple washes */
export const SURFACE_MUTED = "#F7F8FA";
export const BORDER_SUBTLE = "#E8EAEF";

export const FONT_FAMILY = {
  label: "Inter",
  value: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
} as const;
