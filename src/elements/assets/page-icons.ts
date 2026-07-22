import { svgToDataUri } from "./encode";

/**
 * Minimal line icons on a near-white tile.
 * Quiet enough for premium marketing pages (not sticker-like).
 */
function iconSvg(
  path: string,
  {
    stroke = "#1A1A1F",
    bg = "#F3F4F6",
    size = 44,
  }: { stroke?: string; bg?: string; size?: number } = {},
): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 48 48" fill="none">
  <rect width="48" height="48" rx="12" fill="${bg}"/>
  <g stroke="${stroke}" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" fill="none">
    ${path}
  </g>
</svg>`;
}

export const PAGE_ICONS = {
  zap: () =>
    iconSvg(
      `<path d="M26 14 L19 26 H25 L22 34 L31 22 H25 Z" fill="#1A1A1F" stroke="none"/>`,
    ),
  shield: () =>
    iconSvg(
      `<path d="M24 13 L34 17 V25 C34 31 29.5 35 24 36.5 C18.5 35 14 31 14 25 V17 Z"/><path d="M20 24.5 L22.8 27.2 L28.5 20.5"/>`,
    ),
  layers: () =>
    iconSvg(
      `<path d="M24 14 L34 20 L24 26 L14 20 Z"/><path d="M14 25.5 L24 31.5 L34 25.5"/><path d="M14 30.5 L24 36.5 L34 30.5"/>`,
    ),
  chart: () =>
    iconSvg(
      `<path d="M15 33 V21"/><path d="M22 33 V16"/><path d="M29 33 V24"/><path d="M15 33 H35"/>`,
    ),
  users: () =>
    iconSvg(
      `<circle cx="20" cy="20" r="3.5"/><path d="M13 33 C13 28 16 26 20 26 C24 26 27 28 27 33"/><circle cx="30" cy="20.5" r="3"/><path d="M28 33 C28.4 29.5 31 28 34 28 C36.2 28 37.5 29.2 38 31.5"/>`,
    ),
  clock: () =>
    iconSvg(
      `<circle cx="24" cy="24" r="10.5"/><path d="M24 17.5 V24 L29 27"/>`,
    ),
  spark: () =>
    iconSvg(
      `<path d="M24 13 V18"/><path d="M24 30 V35"/><path d="M13 24 H18"/><path d="M30 24 H35"/><path d="M16 16 L19.5 19.5"/><path d="M28.5 28.5 L32 32"/><path d="M32 16 L28.5 19.5"/><path d="M19.5 28.5 L16 32"/>`,
    ),
  check: () =>
    iconSvg(
      `<circle cx="24" cy="24" r="10.5"/><path d="M17.5 24 L21.5 28 L30.5 19"/>`,
    ),
  globe: () =>
    iconSvg(
      `<circle cx="24" cy="24" r="10.5"/><path d="M13.5 24 H34.5"/><path d="M24 13.5 C28 17.5 28 30.5 24 34.5 C20 30.5 20 17.5 24 13.5 Z"/>`,
    ),
  rocket: () =>
    iconSvg(
      `<path d="M24 13 C28 17 30 22.5 30 28 L24 34 L18 28 C18 22.5 20 17 24 13 Z"/><circle cx="24" cy="22" r="2.25"/><path d="M18 28 L14.5 34"/><path d="M30 28 L33.5 34"/>`,
    ),
} as const;

export type PageIconKey = keyof typeof PAGE_ICONS;

export function pageIconDataUri(key: PageIconKey): string {
  return svgToDataUri(PAGE_ICONS[key]());
}
