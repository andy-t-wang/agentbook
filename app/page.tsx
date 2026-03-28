"use client";

import { useState } from "react";
import { agents, type AgentType } from "@/lib/data";

function CopyCommand() {
  const [copied, setCopied] = useState(false);
  const command = "npx @worldcoin/agentkit-cli register <your-agent-address>";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="flex items-center gap-3 bg-[#f7f7f8] border border-[#e5e5e5] rounded-md px-5 py-3.5 font-mono text-sm overflow-x-auto">
        <span className="text-black shrink-0 font-bold">$</span>
        <code className="text-[#353740] whitespace-nowrap">{command}</code>
        <button
          onClick={handleCopy}
          className="ml-auto shrink-0 px-3 py-1 rounded text-xs font-sans font-medium transition-all cursor-pointer bg-black hover:bg-[#2d2d2d] text-white"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}

const typeBadgeColors: Record<AgentType, string> = {
  Free: "bg-[#f7f7f8] text-black border-[#d9d9d9]",
  "Free Trial": "bg-[#f7f7f8] text-[#353740] border-[#d9d9d9]",
  Discount: "bg-[#f7f7f8] text-[#353740] border-[#d9d9d9]",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Nav */}
      <nav className="border-b border-[#e5e5e5]">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="text-[17px] font-bold tracking-tight">
              AgentBook
            </span>
            <div className="hidden sm:flex items-center gap-6 text-sm text-[#353740]">
              <a
                href="https://docs.world.org/agents/agent-kit"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
              >
                Docs
              </a>
              <span className="text-[#6e6e80] cursor-default">Registry</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="border-b border-[#e5e5e5]">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-16">
          <p className="text-sm text-[#6e6e80] mb-4">AgentKit Registry</p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.1] max-w-2xl">
            AgentBook
          </h1>
          <p className="mt-5 text-lg text-[#6e6e80] max-w-xl leading-relaxed">
            Hub for World&apos;s AgentKit, built on x402. Register your agent as
            human backed, get free perks.
          </p>

          <div className="mt-8">
            <p className="text-sm text-[#6e6e80] mb-2">
              Register with a single command:
            </p>
            <CopyCommand />
          </div>
        </div>
      </header>

      {/* Table */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-[#e5e5e5] text-[#6e6e80] text-xs uppercase tracking-wider">
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Category</th>
                <th className="px-4 py-3 font-medium">Type</th>
                <th className="px-4 py-3 font-medium hidden sm:table-cell">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {agents.map((agent) => (
                <tr
                  key={agent.name}
                  className="border-b border-[#ececf1] hover:bg-[#f7f7f8] transition-colors"
                >
                  <td className="px-4 py-3.5 font-medium">
                    {agent.url ? (
                      <a
                        href={agent.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black underline decoration-[#d9d9d9] underline-offset-2 hover:decoration-black transition-colors"
                      >
                        {agent.name}
                      </a>
                    ) : (
                      <span>{agent.name}</span>
                    )}
                  </td>
                  <td className="px-4 py-3.5 text-[#6e6e80]">
                    {agent.category}
                  </td>
                  <td className="px-4 py-3.5">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded text-xs font-medium border whitespace-nowrap ${typeBadgeColors[agent.type]}`}
                    >
                      {agent.type}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-[#6e6e80] hidden sm:table-cell">
                    {agent.description}
                  </td>
                </tr>
              ))}
              {agents.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 py-8 text-center text-[#6e6e80]"
                  >
                    No agents registered yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
