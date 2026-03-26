export type AgentType = "Free" | "Free Trial" | "Discount";

export type Agent = {
  name: string;
  category: string;
  type: AgentType;
  description: string;
  url?: string;
};

export const agents: Agent[] = [
  {
    name: "AgentVid",
    category: "AI",
    type: "Free Trial",
    description: "AI-powered video generation on World Chain",
    url: "https://x402-worldchain.vercel.app/",
  },
  {
    name: "InstaClaw",
    category: "AI",
    type: "Free Trial",
    description:
      "Managed hosting for Claude-powered AI agents on dedicated VMs",
    url: "https://instaclaw.io/",
  },
  {
    name: "Newsworthy",
    category: "Crypto",
    type: "Free",
    description:
      "Token-curated news feed for crypto and AI news via staked bonds",
    url: "https://newsworthy-app.vercel.app/",
  },
  {
    name: "Code Canvas",
    category: "AI",
    type: "Free Trial",
    description: "npx @takisvc/code-canvas setup",
  },
  {
    name: "Carbon & Cashmere",
    category: "Crypto Intelligence",
    type: "Free Trial",
    description:
      "32 crypto intelligence APIs: ML signals, regime detection, orderbook, whale tracking, DeFi yields. 3 free calls per endpoint.",
    url: "https://api.carbon-cashmere.de/.well-known/x402.json",
  },
];

export const categories = [
  "All",
  ...Array.from(new Set(agents.map((a) => a.category))).sort(),
];

export const types: AgentType[] = ["Free", "Free Trial", "Discount"];
