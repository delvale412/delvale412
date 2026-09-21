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
          fontFamily: "sans-serif",
        }}
      >
        <span style={{ color: "#34e0b0", fontSize: 96, fontWeight: 700 }}>M</span>
      </div>
    ),
    { ...size },
  );
}
