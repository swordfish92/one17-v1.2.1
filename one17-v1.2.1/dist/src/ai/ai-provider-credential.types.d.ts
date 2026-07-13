export declare class AiProviderCredentialError extends Error {
}
export interface ConfigureAiProviderCredentialInput {
    providerSlot: number;
    providerName: string;
    apiKey?: string;
    baseUrl?: string;
    isActive: boolean;
}
