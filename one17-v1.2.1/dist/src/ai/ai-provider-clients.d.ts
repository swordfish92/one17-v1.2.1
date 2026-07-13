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
export declare function buildAnthropicRequest(apiKey: string, input: AiChatRequestInput): AiRequestSpec;
export declare function buildOpenAiRequest(apiKey: string, input: AiChatRequestInput): AiRequestSpec;
export declare function buildGenericOpenAiCompatibleRequest(apiKey: string, baseUrl: string, input: AiChatRequestInput): AiRequestSpec;
export declare function callAnthropic(apiKey: string, input: AiChatRequestInput): Promise<AiChatResult>;
export declare function callOpenAi(apiKey: string, input: AiChatRequestInput): Promise<AiChatResult>;
export declare function callGenericOpenAiCompatible(apiKey: string, baseUrl: string, input: AiChatRequestInput): Promise<AiChatResult>;
