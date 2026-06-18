import { ImageResponse } from "next/og";

export const alt = "TryAutoQuote | Find the Best Auto Insurance Rates";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0A2A4F 0%, #1a4a7a 60%, #2B5BA8 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative arc top-right */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            border: "2px solid rgba(56,182,201,0.25)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            border: "2px solid rgba(56,182,201,0.15)",
            display: "flex",
          }}
        />

        {/* Teal accent dot row */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginBottom: "32px",
          }}
        >
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "rgba(255,255,255,0.3)", display: "flex" }} />
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#38B6C9", display: "flex" }} />
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "rgba(255,255,255,0.3)", display: "flex" }} />
        </div>

        {/* Logo / brand */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "white",
            letterSpacing: "-1px",
            display: "flex",
            marginBottom: "24px",
          }}
        >
          TryAuto
          <span style={{ color: "#38B6C9" }}>Quote</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "28px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.75)",
            textAlign: "center",
            maxWidth: "720px",
            lineHeight: 1.4,
            display: "flex",
          }}
        >
          Compare personalized auto insurance rates from top carriers - free, in minutes.
        </div>

        {/* CTA pill */}
        <div
          style={{
            marginTop: "48px",
            background: "linear-gradient(90deg, #2B5BA8, #38B6C9)",
            borderRadius: "999px",
            padding: "14px 40px",
            fontSize: "20px",
            fontWeight: 600,
            color: "white",
            display: "flex",
          }}
        >
          Get a Free Quote →
        </div>

        {/* Bottom domain label */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            fontSize: "16px",
            color: "rgba(255,255,255,0.35)",
            display: "flex",
          }}
        >
          tryautoquote.com
        </div>
      </div>
    ),
    { ...size }
  );
}
