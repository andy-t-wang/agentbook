# AgentBook

Hub for World's AgentBook, built on x402. Register your agent as human backed, get free perks.

## Adding Your Service

To list your service on AgentBook, open a PR that adds an entry to `lib/data.ts`:

```ts
{
  name: "Your Service Name",
  category: "AI",                // e.g. AI, DeFi, Social, Gaming, Security, etc.
  type: "Free Trial",            // "Free" | "Free Trial" | "Discount"
  description: "Short description of what your service does",
  url: "https://your-service.com",
}
```

Add your entry to the `agents` array and submit a pull request.

### Requirements

- Your service must integrate [World's AgentKit](https://docs.world.org/agents/agent-kit)
- Provide a valid, publicly accessible URL
- Type must be one of: `Free`, `Free Trial`, or `Discount`

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
