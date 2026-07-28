/**
 * Iconic Brands CDN
 * Sample: https://iconicbrands.vercel.app/icons/google/default.svg
 * Pattern: https://iconicbrands.vercel.app/icons/{slug}/{variant}.svg
 */

const CDN = "https://iconicbrands.vercel.app/icons";

export function brandIconUrl(slug: string, variant = "default"): string {
  return `${CDN}/${slug}/${variant}.svg`;
}

export type TrustBrand = {
  name: string;
  /**
   * Iconic Brands slug when the brand exists on
   * https://iconicbrands.vercel.app (preferred logo source).
   */
  iconicSlug: string | null;
  /**
   * Fallback wordmark path (Unlayer public marquee assets).
   * Used when Iconic Brands has no matching icon so the strip
   * stays complete and consistent.
   */
  localPath: string;
};

/**
 * Public customer logos from Unlayer's homepage marquee.
 * Ecosystem context for Elements / Unlayer only.
 * These are not verified partners or customers of LaunchKit.
 */
export const TRUST_BRANDS: readonly TrustBrand[] = [
  {
    name: "Mastercard",
    iconicSlug: "mastercard",
    localPath: "/images/partners/mastercard.png",
  },
  {
    name: "Bank of America",
    iconicSlug: "bank-of-america",
    localPath: "/images/partners/bank-of-america.png",
  },
  {
    name: "Fidelity",
    iconicSlug: null,
    localPath: "/images/partners/fidelity.png",
  },
  {
    name: "Twilio",
    iconicSlug: "twilio",
    localPath: "/images/partners/twilio.png",
  },
  {
    name: "Lightspeed",
    iconicSlug: null,
    localPath: "/images/partners/lightspeed.png",
  },
  {
    name: "Chargebee",
    iconicSlug: null,
    localPath: "/images/partners/chargebee.png",
  },
  {
    name: "Keap",
    iconicSlug: null,
    localPath: "/images/partners/keap.png",
  },
  {
    name: "Airship",
    iconicSlug: null,
    localPath: "/images/partners/airship.png",
  },
  {
    name: "Hive",
    iconicSlug: "hive",
    localPath: "/images/partners/hive.png",
  },
  {
    name: "Innovaccer",
    iconicSlug: null,
    localPath: "/images/partners/innovaccer.png",
  },
] as const;

/**
 * Prefer Iconic Brands when a slug exists; otherwise local marquee wordmark.
 */
export function trustBrandLogoSrc(brand: TrustBrand): string {
  if (brand.iconicSlug) {
    return brandIconUrl(brand.iconicSlug, "default");
  }
  return brand.localPath;
}

export function trustBrandUsesIconic(brand: TrustBrand): boolean {
  return brand.iconicSlug !== null;
}
