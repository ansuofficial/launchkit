/**
 * Iconic Brands CDN
 * Sample: https://iconicbrands.vercel.app/icons/google/default.svg
 * Pattern: https://iconicbrands.vercel.app/icons/{slug}/{variant}.svg
 */

const CDN = "https://iconicbrands.vercel.app/icons";

export function brandIconUrl(slug: string, variant = "default"): string {
  return `${CDN}/${slug}/${variant}.svg`;
}

/** Partner logos shown in the trust marquee (dark band). */
export const TRUST_BRANDS = [
  { name: "Google", slug: "google" },
  { name: "Dropbox", slug: "dropbox" },
  { name: "Airbnb", slug: "airbnb" },
  { name: "Spotify", slug: "spotify" },
  { name: "Microsoft", slug: "microsoft" },
  { name: "Stripe", slug: "stripe" },
  { name: "GitHub", slug: "github" },
  { name: "Notion", slug: "notion" },
  { name: "Linear", slug: "linear" },
  { name: "Figma", slug: "figma" },
  { name: "Slack", slug: "slack" },
  { name: "Vercel", slug: "vercel" },
] as const;
