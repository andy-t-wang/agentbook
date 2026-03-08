# Add Service to AgentBook

Add a new service entry to the AgentBook registry.

## Instructions

1. Read `lib/data.ts` to see the current list of agents.
2. Add a new entry to the `agents` array with the following fields:
   - `name`: The service name
   - `category`: A category string (e.g. "AI", "DeFi", "Social", "Gaming", "Security", "NFTs", "Governance", "Analytics")
   - `type`: Must be one of `"Free"`, `"Free Trial"`, or `"Discount"`
   - `description`: A short one-line description of the service
   - `url`: The public URL of the service
3. All fields are required. The `type` field must exactly match one of the three allowed values.
4. Do not modify or remove existing entries.
5. After adding the entry, verify the project builds with `npm run build`.
