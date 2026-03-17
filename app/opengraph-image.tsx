import { ImageResponse } from "next/og";

export const alt = "AgentBook - World AgentKit Registry";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: "-2px",
            color: "#000000",
          }}
        >
          AgentBook
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#6e6e80",
            marginTop: 20,
            lineHeight: 1.4,
            maxWidth: 700,
          }}
        >
          Hub for World&apos;s AgentKit, built on x402. Register your agent as
          human backed, get free perks.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginTop: 48,
            background: "#f7f7f8",
            border: "2px solid #e5e5e5",
            borderRadius: 8,
            padding: "16px 24px",
            fontSize: 20,
            maxWidth: 800,
          }}
        >
          <span style={{ color: "#000000", fontWeight: 700 }}>$</span>
          <span style={{ color: "#353740", fontFamily: "monospace" }}>
            npx @worldcoin/agentkit-cli register
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
