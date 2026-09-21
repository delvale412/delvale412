import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#08090b",
          backgroundImage:
            "linear-gradient(to bottom right, #0d0f12 0%, #08090b 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <span
          style={{
            color: "#34e0b0",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            fontFamily: "monospace",
          }}
        >
          Software Developer / Full Stack
        </span>
        <span
          style={{
            marginTop: 28,
            color: "#f4f5f3",
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          Matheus do Vale
        </span>
        <span style={{ marginTop: 24, color: "#9aa0a6", fontSize: 28, maxWidth: 820 }}>
          Transformando ideias em soluções digitais.
        </span>
      </div>
    ),
    { ...size },
  );
}
