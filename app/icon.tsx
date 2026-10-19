import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

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
          background: "#08090b",
          borderRadius: 7,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 48 48" fill="none">
          <path d="M5 7 L24 41 L43 7" stroke="#a78bfa" strokeWidth="6" strokeLinecap="square" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
