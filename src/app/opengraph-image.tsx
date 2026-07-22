import { ImageResponse } from "next/og";

export const alt = "LaunchKit - Professional templates for modern teams";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social share image with brand mark and tagline. */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(145deg, #08090F 0%, #151826 55%, #1A1438 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 22,
              background: "#1A1A1F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <svg
              width="52"
              height="52"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 13 L33 18.5 L24 24 L15 18.5 Z"
                fill="white"
                fillOpacity="0.95"
              />
              <path
                d="M15 26.5 L24 32 L33 26.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity="0.85"
                fill="none"
              />
              <path
                d="M15 31.5 L24 37 L33 31.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity="0.35"
                fill="none"
              />
            </svg>
          </div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            LaunchKit
          </div>
        </div>
        <div
          style={{
            fontSize: 40,
            fontWeight: 600,
            lineHeight: 1.25,
            maxWidth: 900,
            letterSpacing: "-0.02em",
          }}
        >
          Professional email, document, and page templates
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 24,
            color: "rgba(255,255,255,0.62)",
            maxWidth: 800,
          }}
        >
          Built with Elements · Open source · Production ready
        </div>
        <div
          style={{
            marginTop: 48,
            display: "flex",
            gap: 12,
          }}
        >
          <div
            style={{
              padding: "10px 18px",
              borderRadius: 999,
              background: "rgba(109, 94, 247, 0.25)",
              color: "#BFA7FF",
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            #BuiltWithElements
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
