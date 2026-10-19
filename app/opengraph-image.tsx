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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <svg width="84" height="84" viewBox="0 0 48 48" fill="none">
            <path d="M5 7 L24 41 L43 7" stroke="#a78bfa" strokeWidth="4.5" strokeLinecap="square" />
            <path d="M15.5 7 L24 22 L32.5 7" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="square" />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 28 }}>
            <span style={{ color: '#f4f5f3', fontSize: 64, fontWeight: 700, letterSpacing: 18 }}>VALE</span>
            <span style={{ color: '#9aa0a6', fontSize: 20, letterSpacing: 10, marginTop: 6 }}>DESENVOLVIMENTOS</span>
          </div>
        </div>
        <span style={{ marginTop: 56, color: '#f4f5f3', fontSize: 52, fontWeight: 700, lineHeight: 1.15, maxWidth: 900 }}>
          Seu negócio aparecendo e clientes chamando no WhatsApp.
        </span>
        <span style={{ marginTop: 20, color: '#a78bfa', fontSize: 26 }}>
          Pronto em dias · Matheus do Vale
        </span>
      </div>
    ),
    { ...size },
  );
}
