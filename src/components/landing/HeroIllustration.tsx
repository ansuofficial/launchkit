import { cn } from "@/lib/utils";

/**
 * Hero product mockup: desktop email preview + mobile document preview.
 * Mirrors LaunchKit (email & document templates). Static, no CTAs, no badges.
 */
export function HeroIllustration({ className }: { className?: string }) {
  return (
    <div
      className={cn("relative w-full select-none", className)}
      aria-hidden
    >
      <svg
        viewBox="0 0 560 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block h-auto w-full"
        preserveAspectRatio="xMidYMid meet"
        role="img"
      >
        <title>
          LaunchKit preview: product launch email on desktop and welcome email on
          mobile
        </title>

        <defs>
          <filter
            id="lk-hero-card"
            x="-6%"
            y="-6%"
            width="112%"
            height="116%"
          >
            <feDropShadow
              dx="0"
              dy="10"
              stdDeviation="14"
              floodColor="#0A0A0F"
              floodOpacity="0.08"
            />
          </filter>
          <filter
            id="lk-hero-phone"
            x="-8%"
            y="-6%"
            width="116%"
            height="112%"
          >
            <feDropShadow
              dx="0"
              dy="12"
              stdDeviation="12"
              floodColor="#0A0A0F"
              floodOpacity="0.1"
            />
          </filter>
          <clipPath id="lk-hero-browser-clip">
            <rect x="16" y="44" width="392" height="320" rx="14" />
          </clipPath>
          <clipPath id="lk-hero-phone-clip">
            <rect x="384" y="56" width="156" height="316" rx="22" />
          </clipPath>
        </defs>

        {/* Browser: /preview/email/product-launch */}
        <g filter="url(#lk-hero-card)">
          <rect
            x="16"
            y="20"
            width="392"
            height="348"
            rx="16"
            fill="#FFFFFF"
            stroke="#E8EAEF"
            strokeWidth="1"
          />
          <rect x="16" y="20" width="392" height="28" rx="16" fill="#FAFBFC" />
          <rect x="16" y="36" width="392" height="12" fill="#FAFBFC" />
          <circle cx="36" cy="34" r="4.5" fill="#FF5F57" />
          <circle cx="52" cy="34" r="4.5" fill="#FEBC2E" />
          <circle cx="68" cy="34" r="4.5" fill="#28C840" />
          <rect x="100" y="26" width="224" height="16" rx="8" fill="#F3F4F6" />
          <text
            x="212"
            y="37"
            textAnchor="middle"
            fill="#6B7280"
            fontFamily="Inter, system-ui, sans-serif"
            fontSize="8"
            fontWeight="500"
          >
            launchkit.dev / preview / email / product-launch
          </text>

          <g clipPath="url(#lk-hero-browser-clip)">
            <rect x="16" y="48" width="392" height="316" fill="#F4F5F7" />

            {/* Email canvas */}
            <rect
              x="52"
              y="60"
              width="320"
              height="292"
              rx="8"
              fill="#FFFFFF"
              stroke="#E8EAEF"
              strokeWidth="1"
            />

            {/* Brand header */}
            <rect x="72" y="78" width="22" height="22" rx="6" fill="#1A1A1F" />
            <path
              d="M83 84.5 L88 88 L83 91.5 L78 88 Z"
              fill="white"
              opacity="0.95"
            />
            <path
              d="M78 93 L83 96 L88 93"
              stroke="white"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.85"
            />
            <text
              x="102"
              y="93"
              fill="#1A1A1F"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="12"
              fontWeight="700"
            >
              LaunchKit
            </text>
            <text
              x="352"
              y="93"
              textAnchor="end"
              fill="#9CA3AF"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="8"
              fontWeight="600"
            >
              EMAIL
            </text>

            {/* Soft hero band (template media block, not a chart) */}
            <rect x="72" y="112" width="280" height="64" rx="8" fill="#F0EEFC" />
            <rect x="88" y="128" width="72" height="8" rx="4" fill="#6D5EF7" opacity="0.35" />
            <rect x="88" y="144" width="120" height="6" rx="3" fill="#6D5EF7" opacity="0.18" />
            <rect x="88" y="156" width="96" height="6" rx="3" fill="#6D5EF7" opacity="0.12" />
            <rect x="248" y="124" width="88" height="40" rx="8" fill="#FFFFFF" opacity="0.7" />
            <text
              x="292"
              y="142"
              textAnchor="middle"
              fill="#6D5EF7"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="8"
              fontWeight="600"
            >
              Product Launch
            </text>
            <text
              x="292"
              y="154"
              textAnchor="middle"
              fill="#9CA3AF"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="7"
            >
              Template preview
            </text>

            <text
              x="72"
              y="202"
              fill="#9CA3AF"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="8"
              fontWeight="600"
              letterSpacing="0.08em"
            >
              NEW RELEASE
            </text>
            <text
              x="72"
              y="224"
              fill="#1A1A1F"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="15"
              fontWeight="700"
            >
              Ship polished emails
            </text>
            <text
              x="72"
              y="242"
              fill="#6B7280"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="9.5"
            >
              Production-ready templates for modern software teams.
            </text>
            <text
              x="72"
              y="256"
              fill="#6B7280"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="9.5"
            >
              Built with Elements. Open source. Easy to customize.
            </text>

            {/* Template type cards (what LaunchKit ships) */}
            <rect x="72" y="274" width="132" height="54" rx="8" fill="#F7F8FA" />
            <text
              x="84"
              y="294"
              fill="#1A1A1F"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="11"
              fontWeight="700"
            >
              8 emails
            </text>
            <text
              x="84"
              y="310"
              fill="#6B7280"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="8"
            >
              Launch · Welcome · Changelog
            </text>
            <text
              x="84"
              y="322"
              fill="#6B7280"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="8"
            >
              Newsletter · Events · Security
            </text>

            <rect x="212" y="274" width="140" height="54" rx="8" fill="#F7F8FA" />
            <text
              x="224"
              y="294"
              fill="#1A1A1F"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="11"
              fontWeight="700"
            >
              4 documents
            </text>
            <text
              x="224"
              y="310"
              fill="#6B7280"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="8"
            >
              Proposal · Brief · Roadmap
            </text>
            <text
              x="224"
              y="322"
              fill="#6B7280"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="8"
            >
              Meeting summary
            </text>
          </g>
        </g>

        {/* Phone: /preview/email/welcome (mobile email) */}
        <g filter="url(#lk-hero-phone)">
          <rect
            x="380"
            y="48"
            width="164"
            height="332"
            rx="28"
            fill="#1A1A1F"
          />
          <rect
            x="384"
            y="56"
            width="156"
            height="316"
            rx="24"
            fill="#FFFFFF"
          />
          <rect x="430" y="64" width="64" height="9" rx="4.5" fill="#E8EAEF" />

          <g clipPath="url(#lk-hero-phone-clip)">
            <text
              x="462"
              y="100"
              textAnchor="middle"
              fill="#6D5EF7"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="11"
              fontWeight="700"
            >
              LaunchKit
            </text>
            <text
              x="462"
              y="116"
              textAnchor="middle"
              fill="#9CA3AF"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="7.5"
              fontWeight="600"
              letterSpacing="0.06em"
            >
              WELCOME EMAIL
            </text>

            <text
              x="400"
              y="144"
              fill="#1A1A1F"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="13"
              fontWeight="700"
            >
              Welcome aboard
            </text>
            <text
              x="400"
              y="162"
              fill="#6B7280"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="8.5"
            >
              Start with a template that
            </text>
            <text
              x="400"
              y="174"
              fill="#6B7280"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="8.5"
            >
              already looks production-ready.
            </text>

            {/* Steps = product workflow */}
            <rect x="400" y="190" width="124" height="42" rx="8" fill="#F7F8FA" />
            <text
              x="412"
              y="208"
              fill="#9CA3AF"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="9"
              fontWeight="600"
            >
              01
            </text>
            <text
              x="434"
              y="208"
              fill="#1A1A1F"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="9.5"
              fontWeight="600"
            >
              Browse templates
            </text>
            <text
              x="434"
              y="222"
              fill="#9CA3AF"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="7.5"
            >
              Emails &amp; documents
            </text>

            <rect x="400" y="240" width="124" height="42" rx="8" fill="#F7F8FA" />
            <text
              x="412"
              y="258"
              fill="#9CA3AF"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="9"
              fontWeight="600"
            >
              02
            </text>
            <text
              x="434"
              y="258"
              fill="#1A1A1F"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="9.5"
              fontWeight="600"
            >
              Open a preview
            </text>
            <text
              x="434"
              y="272"
              fill="#9CA3AF"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="7.5"
            >
              Live render with Elements
            </text>

            <rect x="400" y="290" width="124" height="42" rx="8" fill="#F7F8FA" />
            <text
              x="412"
              y="308"
              fill="#9CA3AF"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="9"
              fontWeight="600"
            >
              03
            </text>
            <text
              x="434"
              y="308"
              fill="#1A1A1F"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="9.5"
              fontWeight="600"
            >
              Customize &amp; ship
            </text>
            <text
              x="434"
              y="322"
              fill="#9CA3AF"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="7.5"
            >
              Props, copy, brand colors
            </text>

            {/* Footer meta (no button) */}
            <text
              x="462"
              y="350"
              textAnchor="middle"
              fill="#9CA3AF"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="7.5"
            >
              Built with Elements
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}
