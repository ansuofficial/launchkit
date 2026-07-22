/**
 * Canonical site links for LaunchKit chrome (nav, hero, footer, CTAs).
 *
 * - Repo CTAs (Get Started, Start Building, View Repository) → githubUrl
 * - Docs / product references → Elements or Unlayer URLs below
 * - In-app browse routes stay relative (/templates, /preview/...)
 */
export const SITE = {
  name: "LaunchKit",
  tagline: "Professional email & document templates for modern software teams.",
  /** Public LaunchKit repository (clone, star, contribute). */
  githubUrl: "https://github.com/ansuofficial/launchkit",
  /** Elements product page (Unlayer). */
  elementsUrl: "https://unlayer.com/elements",
  /** Elements documentation. */
  elementsDocsUrl: "https://docs.unlayer.com/elements",
  /** Unlayer company / product home. */
  unlayerUrl: "https://unlayer.com",
  challengeHashtag: "#BuiltWithElements",
} as const;