import type { AuthenticatedUser } from '../auth/auth.types';
import { AiProviderCredentialService } from '../ai/ai-provider-credential.service';
import { ConfigureAiProviderCredentialDto } from './ops-api.types';
export declare class AiProviderCredentialController {
    private readonly credentials;
    constructor(credentials: AiProviderCredentialService);
    listCredentials(user: AuthenticatedUser): Promise<(Omit<{
        id: string;
        createdAt: Date;
        isActive: boolean;
        providerSlot: number;
        configuredByUserId: string | null;
        pendingIsActive: boolean | null;
        pendingProposedByUserId: string | null;
        configWorkflowInstanceId: string | null;
        providerName: string;
        apiKey: string | null;
        baseUrl: string | null;
        pendingProviderName: string | null;
        pendingApiKey: string | null;
        pendingBaseUrl: string | null;
    }, "apiKey" | "pendingApiKey"> & {
        hasApiKey: boolean;
        apiKeyPreview: string | null;
        hasPendingApiKeyRotation: boolean;
    })[]>;
    proposeCredential(dto: ConfigureAiProviderCredentialDto, user: AuthenticatedUser): Promise<Omit<{
        id: string;
        createdAt: Date;
        isActive: boolean;
        providerSlot: number;
        configuredByUserId: string | null;
        pendingIsActive: boolean | null;
        pendingProposedByUserId: string | null;
        configWorkflowInstanceId: string | null;
        providerName: string;
        apiKey: string | null;
        baseUrl: string | null;
        pendingProviderName: string | null;
        pendingApiKey: string | null;
        pendingBaseUrl: string | null;
    }, "apiKey" | "pendingApiKey"> & {
        hasApiKey: boolean;
        apiKeyPreview: string | null;
        hasPendingApiKeyRotation: boolean;
    }>;
    approveCredential(workflowInstanceId: string, user: AuthenticatedUser): Promise<Omit<{
        id: string;
        createdAt: Date;
        isActive: boolean;
        providerSlot: number;
        configuredByUserId: string | null;
        pendingIsActive: boolean | null;
        pendingProposedByUserId: string | null;
        configWorkflowInstanceId: string | null;
        providerName: string;
        apiKey: string | null;
        baseUrl: string | null;
        pendingProviderName: string | null;
        pendingApiKey: string | null;
        pendingBaseUrl: string | null;
    }, "apiKey" | "pendingApiKey"> & {
        hasApiKey: boolean;
        apiKeyPreview: string | null;
        hasPendingApiKeyRotation: boolean;
    }>;
}
