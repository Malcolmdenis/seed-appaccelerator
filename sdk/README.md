# @seed-ar/sdk

Official TypeScript SDK for The App Accelerator — build and deploy fullstack apps with AI.

## Compatibility

Works in any JavaScript runtime with native WebSocket support:

| Runtime | Support |
|---------|---------|
| Workers / Edge | Native WebSocket |
| Browsers | Native WebSocket |
| Bun | Native WebSocket |
| Node.js 22+ | Native WebSocket |

## Installation

```bash
npm install @seed-ar/sdk
```

## Quick Start

```ts
import { PhasicClient } from '@seed-ar/sdk';

const client = new PhasicClient({
  baseUrl: 'https://seed.ar',
  apiKey: process.env.SEED_API_KEY!,
});

// Build a new app
const session = await client.build('Build a todo app with React');

// Wait until deployable and deploy
await session.wait.deployable();
session.deployPreview();
const preview = await session.wait.previewDeployed();

console.log('Preview URL:', preview.previewURL);
console.log('Files:', session.files.listPaths());

session.close();
```

## Authentication

| Method | Use Case |
|--------|----------|
| `apiKey` | Recommended. Automatically exchanged for a short-lived JWT. |
| `token` | Use when you already have a JWT access token. |

```ts
// Using API key (recommended)
const client = new PhasicClient({
  baseUrl: 'https://seed.ar',
  apiKey: 'seed_xxxxxxxxxxxx',
});

// Using pre-minted JWT
const client = new PhasicClient({
  baseUrl: 'https://seed.ar',
  token: 'eyJhbGciOiJIUzI1NiIs...',
});
```

## Clients

| Client | Default Behavior |
|--------|------------------|
| `SeedClient` | No default - specify `behaviorType` in build options |
| `PhasicClient` | `behaviorType: 'phasic'` (phase-based generation) |
| `AgenticClient` | `behaviorType: 'agentic'` (autonomous agent) |

All clients share the same API. The specialized clients simply set a default `behaviorType`.

## HTTP Retry

HTTP requests automatically retry on 5xx errors.

```ts
const client = new PhasicClient({
  baseUrl: 'https://seed.ar',
  apiKey: 'seed_xxx',
  retry: {
    enabled: true,        // Default: true
    initialDelayMs: 1000, // Default: 1000
    maxDelayMs: 10000,    // Default: 10000
    maxRetries: 3,        // Default: 3
  },
});
```

## Utilities

### Blueprint Parsing

```ts
import { BlueprintStreamParser, blueprintToMarkdown } from '@seed-ar/sdk';

const parser = new BlueprintStreamParser();
parser.append(chunk1);
parser.append(chunk2);
const markdown = parser.toMarkdown();

const md = blueprintToMarkdown(blueprint);
```

### Timeout Helper

```ts
import { withTimeout, TimeoutError } from '@seed-ar/sdk';

try {
  const result = await withTimeout(someAsyncOperation(), 30000, 'Operation timed out');
} catch (e) {
  if (e instanceof TimeoutError) {
    console.log('Timed out!');
  }
}
```

## Error Handling

All API methods return an `ApiResponse<T>` discriminated union:

```ts
const result = await client.apps.get('app-id');

if (result.success) {
  console.log(result.data);
} else {
  console.error(result.error.message);
}
```

## TypeScript

All types are exported:

```ts
import type {
  // Client & Session
  SeedClientOptions,
  BuildOptions,
  BuildSession,
  SessionState,
  SessionFiles,
  SessionPhases,

  // Phase Timeline
  PhaseInfo,
  PhaseFile,
  PhaseStatus,
  PhaseFileStatus,
  PhaseEventType,
  PhaseTimelineEvent,
  PhaseTimelineChangeType,

  // API
  ApiResponse,
  AppDetails,
  Credentials,
  BehaviorType,
  ProjectType,
} from '@seed-ar/sdk';
```

## License

MIT
