export type AgentType = "Free" | "Free Trial" | "Discount";

export type Agent = {
  name: string;
  category: string;
  type: AgentType;
  description: string;
  url: string;
};

export const agents: Agent[] = [
  {
    name: "AgentVid",
    category: "AI",
    type: "Free Trial",
    description: "AI-powered video generation on World Chain",
    url: "https://x402-worldchain.vercel.app/",
  },
];

export const categories = [
  "All",
  ...Array.from(new Set(agents.map((a) => a.category))).sort(),
];

export const types: AgentType[] = ["Free", "Free Trial", "Discount"];
