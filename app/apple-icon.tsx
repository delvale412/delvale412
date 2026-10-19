import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#08090b",
        }}
      >
        <svg width="112" height="112" viewBox="0 0 48 48" fill="none">
          <path d="M5 7 L24 41 L43 7" stroke="#a78bfa" strokeWidth="4.5" strokeLinecap="square" />
          <path d="M15.5 7 L24 22 L32.5 7" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="square" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
