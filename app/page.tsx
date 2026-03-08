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
      <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 font-mono text-sm overflow-x-auto">
        <span className="text-purple-500 shrink-0">$</span>
        <code className="text-gray-700 whitespace-nowrap">{command}</code>
        <button
          onClick={handleCopy}
          className="ml-auto shrink-0 px-3 py-1 rounded-md text-xs font-sans font-medium transition-all cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-600"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}

const typeBadgeColors: Record<AgentType, string> = {
  Free: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Free Trial": "bg-blue-50 text-blue-700 border-blue-200",
  Discount: "bg-orange-50 text-orange-700 border-orange-200",
};

export default function Home() {
  const [showRegister, setShowRegister] = useState(true);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <header className="border-b border-gray-100 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 py-16 sm:py-20">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            Agent<span className="text-purple-600">Book</span>
          </h1>
          <p className="mt-3 text-lg text-gray-500 max-w-xl">
            Hub for World&apos;s AgentKit, built on x402. Register your agent
            as human backed, get free perks.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => setShowRegister((v) => !v)}
              className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium transition-colors cursor-pointer"
            >
              Register my agent
            </button>
            <a
              href="https://docs.world.org/agents/agent-kit"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-medium transition-colors"
            >
              Read the docs
            </a>
          </div>

          {showRegister && (
            <div className="mt-4">
              <p className="text-sm text-gray-400 mb-2">
                Register with a single command:
              </p>
              <CopyCommand />
            </div>
          )}
        </div>
      </header>


      {/* Table */}
      <main className="max-w-5xl mx-auto px-4 pb-10">
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
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
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-3 font-medium">
                    <a
                      href={agent.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      {agent.name}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-gray-500">{agent.category}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium border ${typeBadgeColors[agent.type]}`}
                    >
                      {agent.type}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-400 hidden sm:table-cell">
                    {agent.description}
                  </td>
                </tr>
              ))}
              {agents.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 py-8 text-center text-gray-400"
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
