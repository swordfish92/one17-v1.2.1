"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildAnthropicRequest = buildAnthropicRequest;
exports.buildOpenAiRequest = buildOpenAiRequest;
exports.buildGenericOpenAiCompatibleRequest = buildGenericOpenAiCompatibleRequest;
exports.callAnthropic = callAnthropic;
exports.callOpenAi = callOpenAi;
exports.callGenericOpenAiCompatible = callGenericOpenAiCompatible;
const ANTHROPIC_API_BASE = 'https://api.anthropic.com';
const ANTHROPIC_VERSION = '2023-06-01';
const OPENAI_API_BASE = 'https://api.openai.com';
function buildAnthropicRequest(apiKey, input) {
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
function buildOpenAiRequest(apiKey, input) {
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
function buildGenericOpenAiCompatibleRequest(apiKey, baseUrl, input) {
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
function extractText(json) {
    if (Array.isArray(json?.content)) {
        const block = json.content.find((b) => b?.type === 'text');
        if (typeof block?.text === 'string')
            return block.text;
    }
    if (Array.isArray(json?.choices) && typeof json.choices[0]?.message?.content === 'string') {
        return json.choices[0].message.content;
    }
    return '';
}
async function sendRequest(spec) {
    const res = await fetch(spec.url, { method: spec.method, headers: spec.headers, body: JSON.stringify(spec.body) });
    const json = await res.json();
    if (!res.ok) {
        throw new Error(`AI provider request failed (HTTP ${res.status}): ${JSON.stringify(json)}`);
    }
    return { text: extractText(json), raw: json };
}
async function callAnthropic(apiKey, input) {
    return sendRequest(buildAnthropicRequest(apiKey, input));
}
async function callOpenAi(apiKey, input) {
    return sendRequest(buildOpenAiRequest(apiKey, input));
}
async function callGenericOpenAiCompatible(apiKey, baseUrl, input) {
    return sendRequest(buildGenericOpenAiCompatibleRequest(apiKey, baseUrl, input));
}
//# sourceMappingURL=ai-provider-clients.js.map