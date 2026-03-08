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
          background: "linear-gradient(135deg, #f8f7ff 0%, #ffffff 50%, #f3f0ff 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: "-2px",
          }}
        >
          <span style={{ color: "#111" }}>Agent</span>
          <span style={{ color: "#7c3aed" }}>Book</span>
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#6b7280",
            marginTop: 20,
            lineHeight: 1.4,
            maxWidth: 700,
          }}
        >
          Hub for World&apos;s AgentBook, built on x402. Register your agent as human backed, get free perks.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginTop: 48,
            background: "#f9fafb",
            border: "2px solid #e5e7eb",
            borderRadius: 12,
            padding: "16px 24px",
            fontSize: 20,
            maxWidth: 800,
          }}
        >
          <span style={{ color: "#7c3aed", fontWeight: 600 }}>$</span>
          <span style={{ color: "#4b5563", fontFamily: "monospace" }}>
            npx @worldcoin/agentkit-cli register
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
