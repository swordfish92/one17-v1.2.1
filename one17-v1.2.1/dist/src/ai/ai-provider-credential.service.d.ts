import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { ConfigureAiProviderCredentialInput } from './ai-provider-credential.types';
export declare class AiProviderCredentialService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly workflow;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService, workflow: WorkflowEngineService);
    listCredentials(actorUserId: string): Promise<(Omit<{
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
    proposeCredential(input: ConfigureAiProviderCredentialInput, actorUserId: string): Promise<Omit<{
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
    approveCredential(workflowInstanceId: string, approverUserId: string): Promise<Omit<{
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
    private serialize;
    private assertCapability;
}
