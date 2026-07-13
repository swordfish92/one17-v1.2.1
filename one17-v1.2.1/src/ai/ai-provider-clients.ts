// Invariant 73(b) (CHECK27): minimal, REAL HTTP client wrappers for the
// three AI provider slots. This module ships INERT -- it holds no
// credential state of its own, bakes in no key, and calls out only when a
// caller explicitly supplies a live apiKey (which itself only exists once
// an AiProviderCredential row has been proposed AND MD_CEO-approved AND
// marked isActive, per AiProviderCredentialService). It is NOT invoked by
// any scheduled job or by One17AIService's live-answer path today -- see
// the TODO on AiProviderCredentialService for why that rewiring is
// deliberately left for a later, separate task.
//
// Endpoint paths, auth header names, and request/response shapes verified
// via WebFetch against each provider's own current documentation:
//
//   - Anthropic Messages API -- https://platform.claude.com/docs/en/api/messages
//     (fetched 2026-07-12): POST https://api.anthropic.com/v1/messages,
//     headers `content-type: application/json`, `x-api-key: <key>`,
//     `anthropic-version: 2023-06-01`; body { model, max_tokens,
//     messages: [{role, content}], system? (optional) }; response
//     { content: [{type: "text", text}], ... }.
//
//   - OpenAI Chat Completions API -- https://platform.openai.com/docs/api-reference/chat
//     (endpoint path, auth header, and minimal request/response shape
//     cross-checked against the published OpenAI OpenAPI spec,
//     https://raw.githubusercontent.com/openai/openai-openapi/master/openapi.yaml,
//     fetched 2026-07-12): POST https://api.openai.com/v1/chat/completions,
//     headers `content-type: application/json`,
//     `Authorization: Bearer <key>`; body { model, messages: [{role,
//     content}] }; response { choices: [{message: {content}}], ... }.
//
//   - Slot 3 (config-defined third vendor, invariant 73b -- "one config-
//     defined third", deliberately unnamed): no specific vendor to look
//     up docs for, so this is built as a GENERIC OpenAI-compatible client
//     (the de facto standard wire shape shared by self-hosted/OpenAI-
//     compatible endpoints -- vLLM, LiteLLM proxies, Ollama's OpenAI-
//     compat server, etc.) using the credential's own baseUrl + apiKey,
//     hitting `${baseUrl}/chat/completions` with the same body/header
//     shape as OpenAI.

export interface AiChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface AiChatRequestInput {
  model: string;
  maxTokens: number;
  systemPrompt?: string;
  messages: AiChatMessage[];
}

// The constructed-but-not-yet-sent request -- exposed separately from the
// send functions below so request CONSTRUCTION (headers/endpoint/body
// shape) can be unit-proven without a real network call or a real key
// (see src/ai/ai-provider-credential.smoke.ts).
export interface AiRequestSpec {
  url: string;
  method: 'POST';
  headers: Record<string, string>;
  body: Record<string, unknown>;
}

export interface AiChatResult {
  text: string;
  raw: unknown;
}

const ANTHROPIC_API_BASE = 'https://api.anthropic.com';
const ANTHROPIC_VERSION = '2023-06-01';
const OPENAI_API_BASE = 'https://api.openai.com';

export function buildAnthropicRequest(apiKey: string, input: AiChatRequestInput): AiRequestSpec {
  return {
    url: `${ANTHROPIC_API_BASE}/v1/messages`,
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': ANTHROPIC_VERSION,
    },
    body: {
      model: input.model,
      max_tokens: input.maxTokens,
      ...(input.systemPrompt ? { system: input.systemPrompt } : {}),
      messages: input.messages.map((m) => ({ role: m.role, content: m.content })),
    },
  };
}

export function buildOpenAiRequest(apiKey: string, input: AiChatRequestInput): AiRequestSpec {
  return {
    url: `${OPENAI_API_BASE}/v1/chat/completions`,
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${apiKey}`,
    },
    body: {
      model: input.model,
      max_tokens: input.maxTokens,
      messages: [
        ...(input.systemPrompt ? [{ role: 'system', content: input.systemPrompt }] : []),
        ...input.messages.map((m) => ({ role: m.role, content: m.content })),
      ],
    },
  };
}

// Generic OpenAI-compatible client for slot 3 -- baseUrl is config-supplied
// (AiProviderCredential.baseUrl), never hardcoded, since invariant 73(b)
// deliberately leaves this vendor unnamed ("one config-defined third").
export function buildGenericOpenAiCompatibleRequest(apiKey: string, baseUrl: string, input: AiChatRequestInput): AiRequestSpec {
  const normalizedBase = baseUrl.replace(/\/+$/, '');
  return {
    url: `${normalizedBase}/chat/completions`,
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${apiKey}`,
    },
    body: {
      model: input.model,
      max_tokens: input.maxTokens,
      messages: [
        ...(input.systemPrompt ? [{ role: 'system', content: input.systemPrompt }] : []),
        ...input.messages.map((m) => ({ role: m.role, content: m.content })),
      ],
    },
  };
}

function extractText(json: any): string {
  // Anthropic shape: content: [{type: "text", text: "..."}]
  if (Array.isArray(json?.content)) {
    const block = json.content.find((b: any) => b?.type === 'text');
    if (typeof block?.text === 'string') return block.text;
  }
  // OpenAI-compatible shape (OpenAI + generic slot 3): choices[0].message.content
  if (Array.isArray(json?.choices) && typeof json.choices[0]?.message?.content === 'string') {
    return json.choices[0].message.content;
  }
  return '';
}

async function sendRequest(spec: AiRequestSpec): Promise<AiChatResult> {
  const res = await fetch(spec.url, { method: spec.method, headers: spec.headers, body: JSON.stringify(spec.body) });
  const json = await res.json();
  if (!res.ok) {
    throw new Error(`AI provider request failed (HTTP ${res.status}): ${JSON.stringify(json)}`);
  }
  return { text: extractText(json), raw: json };
}

// Real network callers -- functional (given a genuine key) but not wired
// into any live code path in this task; a future rewiring of
// One17AIService's buildResponse() would call one of these per the
// AiTieredModelPolicy.providerName resolved for the capability, only
// AFTER the existing kill-switch/flag/RBAC/context/budget gates pass.
export async function callAnthropic(apiKey: string, input: AiChatRequestInput): Promise<AiChatResult> {
  return sendRequest(buildAnthropicRequest(apiKey, input));
}

export async function callOpenAi(apiKey: string, input: AiChatRequestInput): Promise<AiChatResult> {
  return sendRequest(buildOpenAiRequest(apiKey, input));
}

export async function callGenericOpenAiCompatible(apiKey: string, baseUrl: string, input: AiChatRequestInput): Promise<AiChatResult> {
  return sendRequest(buildGenericOpenAiCompatibleRequest(apiKey, baseUrl, input));
}
