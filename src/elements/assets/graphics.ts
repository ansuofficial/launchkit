import { SVG } from "./colors";
import { svgToDataUri } from "./encode";

/** Brand mark - small, quiet; not a color explosion */
export function logoMarkSvg(size = 48): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 48 48" fill="none">
  <rect width="48" height="48" rx="12" fill="#1A1A1F"/>
  <path d="M24 13 L33 18.5 L24 24 L15 18.5 Z" fill="white" opacity="0.95"/>
  <path d="M15 26.5 L24 32 L33 26.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>
  <path d="M15 31.5 L24 37 L33 31.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.35"/>
</svg>`;
}

export function logoMarkDataUri(size = 48): string {
  return svgToDataUri(logoMarkSvg(size));
}

/**
 * Product launch hero - dark canvas, floating dashboard UI, soft blobs.
 * Feels like a SaaS marketing asset, not a stock photo.
 */
export function dashboardHeroSvg(width = 600, height = 280): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">
  <defs>
    <linearGradient id="dh-bg" x1="0" y1="0" x2="${width}" y2="${height}" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${SVG.bgPrimary}"/>
      <stop offset="55%" stop-color="${SVG.bgSecondary}"/>
      <stop offset="100%" stop-color="#1A1438"/>
    </linearGradient>
    <linearGradient id="dh-blob" x1="80" y1="40" x2="320" y2="220" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${SVG.accent}" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="${SVG.accentBlue}" stop-opacity="0.12"/>
    </linearGradient>
    <linearGradient id="dh-card" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${SVG.bgSurface}"/>
      <stop offset="100%" stop-color="${SVG.bgSecondary}"/>
    </linearGradient>
    <linearGradient id="dh-bar" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${SVG.accentSecondary}"/>
      <stop offset="100%" stop-color="${SVG.accent}"/>
    </linearGradient>
    <linearGradient id="dh-line" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${SVG.accent}"/>
      <stop offset="100%" stop-color="${SVG.accentBlue}"/>
    </linearGradient>
  </defs>

  <rect width="${width}" height="${height}" fill="url(#dh-bg)"/>
  <ellipse cx="140" cy="80" rx="160" ry="100" fill="url(#dh-blob)"/>
  <ellipse cx="480" cy="220" rx="140" ry="90" fill="${SVG.accentBlue}" opacity="0.12"/>
  <circle cx="520" cy="48" r="4" fill="${SVG.accentHighlight}" opacity="0.7"/>
  <circle cx="68" cy="220" r="3" fill="${SVG.accentBlue}" opacity="0.6"/>
  <circle cx="300" cy="36" r="2.5" fill="white" opacity="0.35"/>

  <!-- Main dashboard card -->
  <g transform="translate(72 48)">
    <rect width="456" height="184" rx="16" fill="url(#dh-card)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
    <!-- Title bar -->
    <circle cx="22" cy="22" r="5" fill="#FF5F57"/>
    <circle cx="40" cy="22" r="5" fill="#FEBC2E"/>
    <circle cx="58" cy="22" r="5" fill="#28C840"/>
    <rect x="88" y="14" width="120" height="14" rx="7" fill="rgba(255,255,255,0.08)"/>
    <!-- Sidebar -->
    <rect x="16" y="44" width="72" height="124" rx="10" fill="rgba(255,255,255,0.04)"/>
    <rect x="28" y="58" width="48" height="8" rx="4" fill="${SVG.accent}" opacity="0.85"/>
    <rect x="28" y="78" width="40" height="6" rx="3" fill="rgba(255,255,255,0.18)"/>
    <rect x="28" y="94" width="36" height="6" rx="3" fill="rgba(255,255,255,0.12)"/>
    <rect x="28" y="110" width="42" height="6" rx="3" fill="rgba(255,255,255,0.12)"/>
    <!-- Chart area -->
    <rect x="104" y="44" width="220" height="124" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)"/>
    <path d="M120 140 L150 118 L180 128 L210 92 L240 104 L270 72 L300 88" fill="none" stroke="url(#dh-line)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M120 140 L150 118 L180 128 L210 92 L240 104 L270 72 L300 88 L300 152 L120 152 Z" fill="${SVG.accent}" opacity="0.12"/>
    <!-- Bars panel -->
    <rect x="340" y="44" width="100" height="124" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)"/>
    <rect x="356" y="128" width="14" height="24" rx="3" fill="url(#dh-bar)" opacity="0.55"/>
    <rect x="376" y="108" width="14" height="44" rx="3" fill="url(#dh-bar)" opacity="0.7"/>
    <rect x="396" y="88" width="14" height="64" rx="3" fill="url(#dh-bar)" opacity="0.85"/>
    <rect x="416" y="72" width="14" height="80" rx="3" fill="url(#dh-bar)"/>
  </g>

  <!-- Floating metric chip -->
  <g transform="translate(428 36)">
    <rect width="108" height="44" rx="12" fill="${SVG.bgSurface}" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="14" y="18" font-family="Inter,system-ui,sans-serif" font-size="10" fill="${SVG.textOnDarkMuted}">Adoption</text>
    <text x="14" y="34" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="700" fill="${SVG.white}">+38%</text>
    <circle cx="88" cy="22" r="10" fill="${SVG.success}" opacity="0.2"/>
    <path d="M83 23 L87 27 L95 17" stroke="${SVG.success}" stroke-width="1.8" stroke-linecap="round" fill="none"/>
  </g>
</svg>`;
}

export function dashboardHeroDataUri(): string {
  return svgToDataUri(dashboardHeroSvg());
}

/** Soft welcome illustration - abstract workspace + check path */
export function welcomeHeroSvg(width = 600, height = 220): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">
  <defs>
    <linearGradient id="wh-bg" x1="0" y1="0" x2="${width}" y2="${height}">
      <stop offset="0%" stop-color="#EEF0FF"/>
      <stop offset="50%" stop-color="${SVG.softPurple}"/>
      <stop offset="100%" stop-color="#E8F2FF"/>
    </linearGradient>
    <linearGradient id="wh-orb" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${SVG.accent}" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="${SVG.accentBlue}" stop-opacity="0.15"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#wh-bg)"/>
  <circle cx="480" cy="70" r="90" fill="url(#wh-orb)"/>
  <circle cx="120" cy="160" r="60" fill="${SVG.accentBlue}" opacity="0.1"/>
  <circle cx="300" cy="40" r="24" fill="${SVG.accentHighlight}" opacity="0.25"/>

  <!-- Floating cards -->
  <g transform="translate(88 52)">
    <rect width="160" height="100" rx="16" fill="white" stroke="#E4E7F0"/>
    <rect x="16" y="20" width="48" height="48" rx="12" fill="${SVG.softPurple}"/>
    <path d="M32 44 L40 52 L56 36" stroke="${SVG.accent}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <rect x="76" y="28" width="64" height="10" rx="5" fill="#E8EAEF"/>
    <rect x="76" y="48" width="48" height="8" rx="4" fill="#F0F1F5"/>
  </g>
  <g transform="translate(270 68)">
    <rect width="160" height="100" rx="16" fill="white" stroke="#E4E7F0"/>
    <rect x="16" y="20" width="48" height="48" rx="12" fill="#E8F2FF"/>
    <circle cx="40" cy="44" r="12" stroke="${SVG.accentBlue}" stroke-width="2" fill="none"/>
    <path d="M40 38 V44 L44 47" stroke="${SVG.accentBlue}" stroke-width="2" stroke-linecap="round"/>
    <rect x="76" y="28" width="64" height="10" rx="5" fill="#E8EAEF"/>
    <rect x="76" y="48" width="48" height="8" rx="4" fill="#F0F1F5"/>
  </g>
  <g transform="translate(452 44)">
    <rect width="100" height="120" rx="16" fill="white" stroke="#E4E7F0"/>
    <rect x="18" y="20" width="64" height="8" rx="4" fill="${SVG.accent}" opacity="0.85"/>
    <rect x="18" y="40" width="52" height="6" rx="3" fill="#E8EAEF"/>
    <rect x="18" y="56" width="58" height="6" rx="3" fill="#E8EAEF"/>
    <rect x="18" y="72" width="40" height="6" rx="3" fill="#E8EAEF"/>
    <rect x="18" y="92" width="64" height="14" rx="7" fill="${SVG.softPurple}"/>
  </g>

  <!-- Connecting dots path -->
  <path d="M168 152 C 220 180, 280 180, 340 152" stroke="${SVG.accent}" stroke-width="2" stroke-dasharray="4 6" opacity="0.45" fill="none"/>
</svg>`;
}

export function welcomeHeroDataUri(): string {
  return svgToDataUri(welcomeHeroSvg());
}

/** Feature announcement - floating product cards on purple wash */
export function featureHeroSvg(width = 600, height = 200): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">
  <defs>
    <linearGradient id="fh-bg" x1="0" y1="0" x2="${width}" y2="${height}">
      <stop offset="0%" stop-color="#1A1438"/>
      <stop offset="100%" stop-color="${SVG.bgPrimary}"/>
    </linearGradient>
    <linearGradient id="fh-glow" x1="200" y1="0" x2="500" y2="200">
      <stop offset="0%" stop-color="${SVG.accent}" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="${SVG.accentBlue}" stop-opacity="0.1"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#fh-bg)"/>
  <ellipse cx="380" cy="100" rx="200" ry="120" fill="url(#fh-glow)"/>

  <g transform="translate(56 40) rotate(-4 120 60)">
    <rect width="200" height="120" rx="14" fill="${SVG.bgSurface}" stroke="rgba(255,255,255,0.12)"/>
    <rect x="16" y="18" width="80" height="10" rx="5" fill="rgba(255,255,255,0.15)"/>
    <rect x="16" y="40" width="168" height="8" rx="4" fill="rgba(255,255,255,0.08)"/>
    <rect x="16" y="56" width="140" height="8" rx="4" fill="rgba(255,255,255,0.06)"/>
    <rect x="16" y="84" width="72" height="20" rx="10" fill="${SVG.accent}"/>
  </g>
  <g transform="translate(280 28) rotate(3 140 70)">
    <rect width="260" height="144" rx="16" fill="${SVG.bgSecondary}" stroke="rgba(255,255,255,0.14)"/>
    <rect x="20" y="20" width="100" height="12" rx="6" fill="${SVG.accentSecondary}" opacity="0.9"/>
    <rect x="20" y="48" width="220" height="10" rx="5" fill="rgba(255,255,255,0.1)"/>
    <rect x="20" y="68" width="180" height="10" rx="5" fill="rgba(255,255,255,0.07)"/>
    <rect x="20" y="100" width="48" height="28" rx="8" fill="rgba(109,94,247,0.25)"/>
    <rect x="78" y="100" width="48" height="28" rx="8" fill="rgba(94,168,255,0.2)"/>
    <rect x="136" y="100" width="48" height="28" rx="8" fill="rgba(191,167,255,0.2)"/>
  </g>
</svg>`;
}

export function featureHeroDataUri(): string {
  return svgToDataUri(featureHeroSvg());
}

/** Editorial newsletter banner */
export function newsletterHeroSvg(width = 600, height = 180): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">
  <defs>
    <linearGradient id="nh-bg" x1="0" y1="0" x2="${width}" y2="0">
      <stop offset="0%" stop-color="${SVG.bgPrimary}"/>
      <stop offset="60%" stop-color="#15102A"/>
      <stop offset="100%" stop-color="#1C1640"/>
    </linearGradient>
    <linearGradient id="nh-wave" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${SVG.accent}"/>
      <stop offset="50%" stop-color="${SVG.accentSecondary}"/>
      <stop offset="100%" stop-color="${SVG.accentBlue}"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#nh-bg)"/>
  <path d="M0 120 C 80 90, 140 150, 220 110 C 300 70, 360 140, 440 100 C 520 60, 560 90, 600 70 L 600 180 L 0 180 Z" fill="${SVG.accent}" opacity="0.12"/>
  <path d="M0 140 C 100 110, 160 160, 250 130 C 340 100, 400 150, 500 120 C 560 100, 590 110, 600 100" stroke="url(#nh-wave)" stroke-width="2.5" fill="none" opacity="0.85"/>
  <circle cx="72" cy="56" r="28" fill="${SVG.accent}" opacity="0.25"/>
  <text x="48" y="64" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="700" fill="white">24</text>
  <text x="120" y="52" font-family="Inter,system-ui,sans-serif" font-size="12" fill="${SVG.accentHighlight}" letter-spacing="2">WEEKLY</text>
  <text x="120" y="78" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="700" fill="white">Ship notes</text>
  <rect x="420" y="36" width="140" height="88" rx="14" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)"/>
  <rect x="438" y="54" width="64" height="8" rx="4" fill="${SVG.accentBlue}" opacity="0.7"/>
  <rect x="438" y="72" width="104" height="6" rx="3" fill="rgba(255,255,255,0.15)"/>
  <rect x="438" y="88" width="88" height="6" rx="3" fill="rgba(255,255,255,0.1)"/>
</svg>`;
}

export function newsletterHeroDataUri(): string {
  return svgToDataUri(newsletterHeroSvg());
}

/** Event invitation - calendar + dark stage */
export function eventHeroSvg(width = 600, height = 200): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">
  <defs>
    <linearGradient id="eh-bg" x1="0" y1="0" x2="${width}" y2="${height}">
      <stop offset="0%" stop-color="#120A24"/>
      <stop offset="100%" stop-color="${SVG.bgPrimary}"/>
    </linearGradient>
    <radialGradient id="eh-spot" cx="70%" cy="40%" r="50%">
      <stop offset="0%" stop-color="${SVG.accent}" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="${SVG.accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#eh-bg)"/>
  <rect width="${width}" height="${height}" fill="url(#eh-spot)"/>
  <circle cx="90" cy="160" r="3" fill="white" opacity="0.3"/>
  <circle cx="140" cy="40" r="2" fill="${SVG.accentHighlight}" opacity="0.5"/>
  <circle cx="520" cy="160" r="2.5" fill="${SVG.accentBlue}" opacity="0.5"/>

  <!-- Calendar card -->
  <g transform="translate(380 36)">
    <rect width="160" height="128" rx="16" fill="${SVG.bgSurface}" stroke="rgba(255,255,255,0.12)"/>
    <rect width="160" height="36" rx="16" fill="${SVG.accent}"/>
    <rect y="20" width="160" height="16" fill="${SVG.accent}"/>
    <text x="80" y="24" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="11" font-weight="600" fill="white" letter-spacing="1">APR</text>
    <text x="80" y="84" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="42" font-weight="800" fill="white">16</text>
    <text x="80" y="110" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="12" fill="${SVG.textOnDarkMuted}">Thursday</text>
  </g>

  <!-- Ticket stub left -->
  <g transform="translate(48 56)">
    <rect width="280" height="96" rx="14" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)"/>
    <text x="24" y="36" font-family="Inter,system-ui,sans-serif" font-size="11" fill="${SVG.accentHighlight}" letter-spacing="1.5">YOU'RE INVITED</text>
    <text x="24" y="62" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="700" fill="white">Product Summit</text>
    <text x="24" y="84" font-family="Inter,system-ui,sans-serif" font-size="12" fill="${SVG.textOnDarkMuted}">Live · Online + SF</text>
  </g>
</svg>`;
}

export function eventHeroDataUri(): string {
  return svgToDataUri(eventHeroSvg());
}

/** Customer success celebration */
export function celebrationHeroSvg(width = 600, height = 180): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">
  <defs>
    <linearGradient id="ch-bg" x1="0" y1="0" x2="${width}" y2="${height}">
      <stop offset="0%" stop-color="#ECFDF5"/>
      <stop offset="50%" stop-color="#EEF0FF"/>
      <stop offset="100%" stop-color="#E8F2FF"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#ch-bg)"/>
  <!-- confetti -->
  <rect x="60" y="30" width="8" height="8" rx="2" fill="${SVG.accent}" transform="rotate(15 64 34)"/>
  <rect x="520" y="40" width="6" height="10" rx="2" fill="${SVG.accentBlue}" transform="rotate(-20 523 45)"/>
  <circle cx="140" cy="48" r="4" fill="${SVG.success}"/>
  <circle cx="460" cy="36" r="3" fill="${SVG.accentSecondary}"/>
  <circle cx="400" cy="150" r="3.5" fill="${SVG.warning}"/>
  <rect x="280" y="24" width="7" height="7" rx="1.5" fill="${SVG.accentHighlight}" transform="rotate(30 283 27)"/>
  <path d="M100 140 L108 120 L116 140" stroke="${SVG.accent}" stroke-width="2" fill="none"/>
  <path d="M500 130 L508 110 L516 130" stroke="${SVG.accentBlue}" stroke-width="2" fill="none"/>

  <!-- Trophy / milestone badge -->
  <g transform="translate(230 28)">
    <circle cx="70" cy="70" r="62" fill="white" stroke="#E4E7F0"/>
    <circle cx="70" cy="70" r="48" fill="${SVG.softPurple}"/>
    <path d="M54 62 L70 40 L86 62 L80 88 L60 88 Z" fill="${SVG.accent}"/>
    <rect x="58" y="88" width="24" height="8" rx="2" fill="${SVG.accentSecondary}"/>
    <rect x="52" y="96" width="36" height="6" rx="3" fill="${SVG.accent}" opacity="0.4"/>
  </g>
</svg>`;
}

export function celebrationHeroDataUri(): string {
  return svgToDataUri(celebrationHeroSvg());
}

/** Security shield hero */
export function securityHeroSvg(width = 600, height = 180): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">
  <defs>
    <linearGradient id="sh-bg" x1="0" y1="0" x2="${width}" y2="${height}">
      <stop offset="0%" stop-color="#1A1214"/>
      <stop offset="100%" stop-color="${SVG.bgPrimary}"/>
    </linearGradient>
    <linearGradient id="sh-shield" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${SVG.accentSecondary}"/>
      <stop offset="100%" stop-color="${SVG.accent}"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#sh-bg)"/>
  <ellipse cx="300" cy="100" rx="160" ry="80" fill="${SVG.accent}" opacity="0.12"/>

  <g transform="translate(248 28)">
    <path d="M52 8 L96 28 V64 C96 96 72 118 52 126 C32 118 8 96 8 64 V28 Z" fill="url(#sh-shield)"/>
    <path d="M52 24 L80 38 V64 C80 86 64 102 52 108 C40 102 24 86 24 64 V38 Z" fill="white" opacity="0.15"/>
    <path d="M38 66 L48 76 L68 50" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </g>

  <text x="48" y="78" font-family="Inter,system-ui,sans-serif" font-size="12" fill="#FCA5A5" letter-spacing="1.5">SECURITY ADVISORY</text>
  <text x="48" y="108" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="700" fill="white">Protected &amp; patched</text>
  <rect x="48" y="128" width="100" height="6" rx="3" fill="rgba(255,255,255,0.15)"/>
</svg>`;
}

export function securityHeroDataUri(): string {
  return svgToDataUri(securityHeroSvg());
}

/** Changelog version strip */
export function changelogHeroSvg(version: string, width = 600, height = 140): string {
  const safe = version.replace(/[<>&"']/g, "");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">
  <defs>
    <linearGradient id="cl-bg" x1="0" y1="0" x2="${width}" y2="${height}">
      <stop offset="0%" stop-color="${SVG.bgPrimary}"/>
      <stop offset="100%" stop-color="#12162A"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#cl-bg)"/>
  <rect x="0" y="0" width="6" height="${height}" fill="${SVG.accent}"/>
  <text x="40" y="52" font-family="Inter,system-ui,sans-serif" font-size="12" fill="${SVG.accentHighlight}" letter-spacing="2">RELEASE</text>
  <text x="40" y="92" font-family="Inter,system-ui,sans-serif" font-size="36" font-weight="800" fill="white">${safe}</text>
  <!-- commit dots -->
  <circle cx="420" cy="48" r="6" fill="${SVG.success}"/>
  <circle cx="460" cy="48" r="6" fill="${SVG.accentBlue}"/>
  <circle cx="500" cy="48" r="6" fill="${SVG.accent}"/>
  <circle cx="540" cy="48" r="6" fill="${SVG.accentSecondary}"/>
  <path d="M420 70 V100 M460 70 V100 M500 70 V100 M540 70 V100" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
  <path d="M420 100 H540" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
  <text x="420" y="122" font-family="Inter,system-ui,sans-serif" font-size="10" fill="${SVG.textOnDarkMuted}">shipped</text>
</svg>`;
}

export function changelogHeroDataUri(version: string): string {
  return svgToDataUri(changelogHeroSvg(version));
}

/** Mini growth chart for stats / docs */
export function growthChartSvg(width = 200, height = 80): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">
  <defs>
    <linearGradient id="gc-fill" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${SVG.accent}" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="${SVG.accent}" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" rx="12" fill="${SVG.softPurple}"/>
  <path d="M16 60 L48 48 L80 52 L112 28 L144 36 L184 16" fill="none" stroke="${SVG.accent}" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M16 60 L48 48 L80 52 L112 28 L144 36 L184 16 L184 68 L16 68 Z" fill="url(#gc-fill)"/>
</svg>`;
}

export function growthChartDataUri(): string {
  return svgToDataUri(growthChartSvg());
}

/** Abstract document header band */
export function documentHeaderSvg(label: string, width = 720, height = 96): string {
  const safe = label.replace(/[<>&"']/g, "");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">
  <defs>
    <linearGradient id="doc-bg" x1="0" y1="0" x2="${width}" y2="0">
      <stop offset="0%" stop-color="${SVG.bgPrimary}"/>
      <stop offset="100%" stop-color="#1A1640"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#doc-bg)"/>
  <circle cx="${width - 80}" cy="20" r="60" fill="${SVG.accent}" opacity="0.2"/>
  <circle cx="${width - 40}" cy="80" r="40" fill="${SVG.accentBlue}" opacity="0.12"/>
  <rect x="0" y="0" width="6" height="${height}" fill="${SVG.accent}"/>
  <text x="40" y="56" font-family="Inter,system-ui,sans-serif" font-size="14" fill="${SVG.accentHighlight}" letter-spacing="2">${safe.toUpperCase()}</text>
</svg>`;
}

export function documentHeaderDataUri(label: string): string {
  return svgToDataUri(documentHeaderSvg(label));
}

/** Icon badge SVGs for feature rows */
export function iconBadgeSvg(
  kind: "chart" | "bolt" | "shield" | "users" | "spark" | "check",
  bg: string = SVG.softPurple,
  fg: string = SVG.accent,
): string {
  const icons: Record<string, string> = {
    chart: `<path d="M14 30 V18 M22 30 V12 M30 30 V20" stroke="${fg}" stroke-width="2.5" stroke-linecap="round"/>`,
    bolt: `<path d="M24 10 L16 24 H22 L20 34 L30 18 H24 Z" fill="${fg}"/>`,
    shield: `<path d="M22 10 L32 14 V22 C32 28 26 33 22 35 C18 33 12 28 12 22 V14 Z" stroke="${fg}" stroke-width="2" fill="none"/><path d="M17 22 L21 26 L28 18" stroke="${fg}" stroke-width="2" stroke-linecap="round" fill="none"/>`,
    users: `<circle cx="18" cy="18" r="5" stroke="${fg}" stroke-width="2" fill="none"/><circle cx="28" cy="18" r="5" stroke="${fg}" stroke-width="2" fill="none"/><path d="M10 32 C10 26 14 24 18 24 C22 24 26 26 26 32" stroke="${fg}" stroke-width="2" fill="none"/><path d="M22 32 C22 26 26 24 30 24 C34 24 38 26 38 32" stroke="${fg}" stroke-width="2" fill="none"/>`,
    spark: `<path d="M22 10 L24 18 L32 20 L24 22 L22 30 L20 22 L12 20 L20 18 Z" fill="${fg}"/>`,
    check: `<circle cx="22" cy="22" r="12" stroke="${fg}" stroke-width="2" fill="none"/><path d="M16 22 L20 26 L28 16" stroke="${fg}" stroke-width="2.5" stroke-linecap="round" fill="none"/>`,
  };
  return `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
  <rect width="44" height="44" rx="12" fill="${bg}"/>
  ${icons[kind] ?? icons.spark}
</svg>`;
}

export function iconBadgeDataUri(
  kind: "chart" | "bolt" | "shield" | "users" | "spark" | "check",
  bg?: string,
  fg?: string,
): string {
  return svgToDataUri(iconBadgeSvg(kind, bg, fg));
}
