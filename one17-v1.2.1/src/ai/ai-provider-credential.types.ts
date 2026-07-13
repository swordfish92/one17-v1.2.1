// Invariant 73(b) (CHECK27): AI provider credential adapters -- types for
// the AiProviderCredential propose/approve service. Same shape family as
// payment-gateway.types.ts / attendance.types.ts (write-only masked
// secret, provider slot 1-3, MD-approved maker!=checker).
export class AiProviderCredentialError extends Error {}

// providerSlot is a fixed 1/2/3 convention (invariant 73b): 1 = Anthropic
// Claude, 2 = OpenAI, 3 = the config-defined third vendor (any OpenAI-
// compatible or self-hosted endpoint via baseUrl). providerName here is
// the value AiTieredModelPolicy.providerName must match for a capability's
// tiered-model config to resolve to a REAL credentialed vendor.
export interface ConfigureAiProviderCredentialInput {
  providerSlot: number;
  providerName: string;
  apiKey?: string;
  baseUrl?: string;
  isActive: boolean;
}
