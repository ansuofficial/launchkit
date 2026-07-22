/**
 * Hero graphic inspired by the Gatsby-style signal wave:
 * flowing gradient path, floating craft icons, glowing dual mark.
 */
export function HeroIllustration() {
  return (
    <div
      className="relative mx-auto w-full max-w-[540px] overflow-visible lg:max-w-none"
      aria-hidden
    >
      <svg
        viewBox="0 0 560 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full overflow-visible"
        overflow="visible"
        role="img"
      >
        <title>Templates flowing into LaunchKit</title>

        <defs>
          <linearGradient
            id="lk-wave"
            x1="40"
            y1="240"
            x2="500"
            y2="110"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#6D5EF7" />
            <stop offset="45%" stopColor="#7B8CFF" />
            <stop offset="100%" stopColor="#5EA8FF" />
          </linearGradient>
          <linearGradient
            id="lk-wave-glow"
            x1="40"
            y1="240"
            x2="500"
            y2="110"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#6D5EF7" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#5EA8FF" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="lk-mark-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8B7CFF" stopOpacity="0.35" />
            <stop offset="45%" stopColor="#6D5EF7" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#6D5EF7" stopOpacity="0" />
          </radialGradient>
          <filter
            id="lk-mark-glow"
            x="-60%"
            y="-60%"
            width="220%"
            height="220%"
          >
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter
            id="lk-path-soft"
            x="-20%"
            y="-40%"
            width="140%"
            height="180%"
          >
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        {/* Soft ambient wash under the curve */}
        <path
          d="M36 248 C 110 248, 145 88, 230 112 C 315 136, 330 250, 420 198 C 470 168, 500 138, 528 128"
          stroke="url(#lk-wave-glow)"
          strokeWidth="36"
          strokeLinecap="round"
          filter="url(#lk-path-soft)"
          opacity="0.9"
        />

        {/* Main signal wave */}
        <path
          d="M36 248 C 110 248, 145 88, 230 112 C 315 136, 330 250, 420 198 C 470 168, 500 138, 528 128"
          stroke="url(#lk-wave)"
          strokeWidth="3.25"
          strokeLinecap="round"
          className="lk-hero-path"
        />

        {/* Start node */}
        <circle cx="36" cy="248" r="5.5" fill="#6D5EF7" />
        <circle
          cx="36"
          cy="248"
          r="11"
          stroke="#6D5EF7"
          strokeWidth="1.5"
          opacity="0.28"
        />

        {/* End node (feeds into mark) */}
        <circle cx="528" cy="128" r="4" fill="#5EA8FF" />

        {/* -- Floating monoline craft icons -- */}

        {/* Code brackets */}
        <g transform="translate(78 138)" opacity="0.88">
          <path
            d="M9 3 L2 16 L9 29"
            stroke="#6D5EF7"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 3 L24 16 L17 29"
            stroke="#6D5EF7"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Envelope */}
        <g transform="translate(142 52)" opacity="0.85">
          <rect
            x="0.5"
            y="3"
            width="26"
            height="17"
            rx="2.5"
            stroke="#8B7CFF"
            strokeWidth="1.5"
          />
          <path
            d="M1 5.5 L13.5 14 L26 5.5"
            stroke="#8B7CFF"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </g>

        {/* Document */}
        <g transform="translate(198 168)" opacity="0.85">
          <path
            d="M4 0.5 H16 L24 8.5 V26 H4 Z"
            stroke="#5EA8FF"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M16 0.5 V8.5 H24" stroke="#5EA8FF" strokeWidth="1.5" />
          <line
            x1="8"
            y1="13"
            x2="20"
            y2="13"
            stroke="#5EA8FF"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          <line
            x1="8"
            y1="17.5"
            x2="17"
            y2="17.5"
            stroke="#5EA8FF"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </g>

        {/* Layout / window */}
        <g transform="translate(268 48)" opacity="0.82">
          <rect
            x="0.5"
            y="0.5"
            width="24"
            height="22"
            rx="2.5"
            stroke="#6D5EF7"
            strokeWidth="1.5"
          />
          <line x1="0.5" y1="7.5" x2="24.5" y2="7.5" stroke="#6D5EF7" strokeWidth="1.25" />
          <line x1="9" y1="7.5" x2="9" y2="22.5" stroke="#6D5EF7" strokeWidth="1.25" />
        </g>

        {/* Cloud */}
        <g transform="translate(318 218)" opacity="0.8">
          <path
            d="M7 18 H22 A6 6 0 0 0 22 6 A8.5 8.5 0 0 0 6 9.5 A5 5 0 0 0 7 18 Z"
            stroke="#5EA8FF"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </g>

        {/* Paper plane */}
        <g transform="translate(362 108)" opacity="0.9">
          <path
            d="M1 12 L28 2 L13 23 L10.5 15.5 Z"
            fill="#6D5EF7"
            opacity="0.9"
          />
          <path
            d="M10.5 15.5 L28 2"
            stroke="white"
            strokeWidth="1.1"
            opacity="0.55"
          />
          <path
            d="M10.5 15.5 L13 23"
            stroke="white"
            strokeWidth="1"
            opacity="0.4"
          />
        </g>

        {/* Check circle */}
        <g transform="translate(102 228)" opacity="0.78">
          <circle
            cx="12"
            cy="12"
            r="11"
            stroke="#5EA8FF"
            strokeWidth="1.5"
          />
          <path
            d="M6.5 12.2 L10 15.5 L17.5 8"
            stroke="#5EA8FF"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Shield */}
        <g transform="translate(410 228)" opacity="0.75">
          <path
            d="M12 1.5 L23 6.5 V13.5 C23 19.5 17.5 24 12 25.5 C6.5 24 1 19.5 1 13.5 V6.5 Z"
            stroke="#8B7CFF"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M8 13 L11 16 L16.5 10"
            stroke="#8B7CFF"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* -- Destination mark: Elements diamond × LaunchKit layers -- */}
        <g transform="translate(430 48)" filter="url(#lk-mark-glow)">
          <circle cx="58" cy="58" r="72" fill="url(#lk-mark-halo)" />
          <circle cx="58" cy="58" r="54" fill="#6D5EF7" opacity="0.08" />

          {/* Soft white badge */}
          <circle
            cx="58"
            cy="58"
            r="46"
            fill="white"
            stroke="#E8EAEF"
            strokeWidth="1"
          />

          {/* Teal “Elements” diamond (left, slightly behind) */}
          <g transform="translate(24 32)">
            <path d="M22 0 L40 18 L22 36 L4 18 Z" fill="#3ECFCF" />
            <path
              d="M22 8 L32 18 L22 28 L12 18 Z"
              fill="white"
              opacity="0.95"
            />
            <path
              d="M22 14 L26 18 L22 22 L18 18 Z"
              fill="#3ECFCF"
              opacity="0.9"
            />
          </g>

          {/* Purple LaunchKit mark (right, overlapping) */}
          <g transform="translate(48 34)">
            <circle cx="28" cy="24" r="26" fill="#6D5EF7" />
            {/* White layered / spark mark */}
            <path
              d="M28 10 L40 18 L28 26 L16 18 Z"
              fill="white"
              opacity="0.98"
            />
            <path
              d="M16 26 L28 34 L40 26"
              stroke="white"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.9"
            />
            <path
              d="M16 33 L28 41 L40 33"
              stroke="white"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.45"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
