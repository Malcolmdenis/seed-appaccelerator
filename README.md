# The App Accelerator

> Build production apps in minutes by chatting with Appy.

The App Accelerator is an AI-powered platform that turns plain-English ideas into real, deployable applications. Users describe what they want, Appy plans it, builds it, and ships it — no coding required.

---

## What it does

1. User describes their app in natural language
2. Appy analyzes the request and creates a blueprint
3. Code is generated incrementally with automatic error correction
4. The app runs live in an isolated sandbox preview
5. The user iterates through chat refinements
6. One click deploys the finished app to a production URL

## Tech overview

- **Frontend**: React 19 + TypeScript + Vite + TailwindCSS
- **Backend**: Workers runtime + Durable Objects + D1 (SQLite)
- **AI**: Multi-provider routing (Anthropic, OpenAI, Google AI Studio)
- **Sandboxing**: Isolated containers per app preview
- **Real-time**: WebSocket streaming for live generation feedback

## SDK

Build apps programmatically:

```bash
npm install @seed-ar/sdk
```

```ts
import { PhasicClient } from '@seed-ar/sdk';

const client = new PhasicClient({
  baseUrl: 'https://seed.ar',
  apiKey: process.env.SEED_API_KEY!,
});

const session = await client.build('Build a simple hello world page.', {
  projectType: 'app',
  autoGenerate: true,
});

await session.wait.deployable();
console.log('Preview URL:', session.state.previewUrl);
session.close();
```

See [`sdk/README.md`](sdk/README.md) for the full SDK reference.

---

## Local development

### Prerequisites

- Node.js 22+ or Bun
- A Wrangler-compatible cloud account with Workers, D1, R2, KV, AI Gateway
- A Google Gemini API key (or other supported LLM provider)

### Setup

```bash
# Install dependencies
bun install

# Run the guided setup
bun run setup

# Start development servers
bun run dev
```

Visit `http://localhost:5173`.

### Required environment variables

Copy `.dev.vars.example` to `.dev.vars` and fill in:

- `GOOGLE_AI_STUDIO_API_KEY` — primary AI provider key
- `JWT_SECRET` — random string, used for session signing
- `WEBHOOK_SECRET` — random string, used for webhook auth
- `SECRETS_ENCRYPTION_KEY` — random string, encrypts user-stored API keys
- `ALLOWED_EMAIL` — restrict access to a specific email (single-tenant mode)
- `CUSTOM_DOMAIN` — your production domain

For deployment, copy `.dev.vars.example` to `.prod.vars` and fill in production values.

## Deployment

```bash
bun run deploy
```

The deploy script provisions infrastructure, applies database migrations, and pushes the worker.

### Custom domain DNS

For preview app routing, add this DNS record in the zone hosting your `CUSTOM_DOMAIN`:

- **Type:** CNAME
- **Name:** `*` (or `*.preview` if you use a preview subdomain)
- **Target:** your base domain
- **Proxy status:** Proxied

DNS propagation can take up to an hour.

---

## Project structure

```
/src         Frontend (React)
/worker      Backend (workers runtime)
  /agents    AI generation agents and Appy persona
  /api       HTTP and WebSocket endpoints
  /database  Drizzle ORM, services, schema
  /services  Sandbox, OAuth, secrets, rate limiting
/sdk         Official TypeScript SDK
/shared      Types shared between frontend and worker
/migrations  D1 database migrations
/scripts     Setup, deploy, undeploy automation
```

## Common customization tasks

**Change the AI model used for an operation:**
Edit `worker/agents/inferutils/config.ts` → `AGENT_CONFIG`

**Change Appy's personality:**
Edit `worker/agents/operations/UserConversationProcessor.ts` (system prompt)

**Add a new LLM tool Appy can use:**
1. Create `worker/agents/tools/toolkit/my-tool.ts`
2. Register it in `worker/agents/tools/customTools.ts`

**Add a new API endpoint:**
1. Define types in `src/api-types.ts`
2. Add to `src/lib/api-client.ts`
3. Create service in `worker/database/services/`
4. Create controller in `worker/api/controllers/`
5. Add route in `worker/api/routes/`

## License

MIT — see [LICENSE](LICENSE).
