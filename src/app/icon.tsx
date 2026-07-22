import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Browser tab favicon from the LaunchKit brand mark. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1A1A1F",
          borderRadius: 8,
        }}
      >
        <svg
          width="22"
          height="22"
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
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.85"
            fill="none"
          />
          <path
            d="M15 31.5 L24 37 L33 31.5"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.35"
            fill="none"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
