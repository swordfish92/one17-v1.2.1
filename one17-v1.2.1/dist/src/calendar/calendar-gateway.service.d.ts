import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { AuthorizationUrlResult, ConfigureCalendarProviderInput } from './calendar-gateway.types';
export declare class CalendarGatewayService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly workflow;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService, workflow: WorkflowEngineService);
    listProviders(): Promise<(Omit<{
        id: string;
        createdAt: Date;
        name: string;
        isActive: boolean;
        providerSlot: number;
        adapterType: import("../../generated/prisma/enums").CalendarAdapterType;
        clientId: string | null;
        clientSecret: string | null;
        configuredByUserId: string | null;
        pendingName: string | null;
        pendingClientId: string | null;
        pendingClientSecret: string | null;
        pendingIsActive: boolean | null;
        pendingProposedByUserId: string | null;
        configWorkflowInstanceId: string | null;
        tenantId: string | null;
        pendingTenantId: string | null;
    }, "clientSecret" | "pendingClientSecret"> & {
        hasPendingSecretRotation: boolean;
        hasSecret: boolean;
        secretPreview: string | null;
    })[]>;
    proposeProviderConfig(input: ConfigureCalendarProviderInput, actorUserId: string): Promise<Omit<{
        id: string;
        createdAt: Date;
        name: string;
        isActive: boolean;
        providerSlot: number;
        adapterType: import("../../generated/prisma/enums").CalendarAdapterType;
        clientId: string | null;
        clientSecret: string | null;
        configuredByUserId: string | null;
        pendingName: string | null;
        pendingClientId: string | null;
        pendingClientSecret: string | null;
        pendingIsActive: boolean | null;
        pendingProposedByUserId: string | null;
        configWorkflowInstanceId: string | null;
        tenantId: string | null;
        pendingTenantId: string | null;
    }, "clientSecret" | "pendingClientSecret"> & {
        hasPendingSecretRotation: boolean;
        hasSecret: boolean;
        secretPreview: string | null;
    }>;
    approveProviderConfig(workflowInstanceId: string, approverUserId: string): Promise<Omit<{
        id: string;
        createdAt: Date;
        name: string;
        isActive: boolean;
        providerSlot: number;
        adapterType: import("../../generated/prisma/enums").CalendarAdapterType;
        clientId: string | null;
        clientSecret: string | null;
        configuredByUserId: string | null;
        pendingName: string | null;
        pendingClientId: string | null;
        pendingClientSecret: string | null;
        pendingIsActive: boolean | null;
        pendingProposedByUserId: string | null;
        configWorkflowInstanceId: string | null;
        tenantId: string | null;
        pendingTenantId: string | null;
    }, "clientSecret" | "pendingClientSecret"> & {
        hasPendingSecretRotation: boolean;
        hasSecret: boolean;
        secretPreview: string | null;
    }>;
    listMyConnections(userId: string): Promise<{
        id: string;
        providerId: string;
        provider: {
            id: string;
            name: string;
            isActive: boolean;
            adapterType: import("../../generated/prisma/enums").CalendarAdapterType;
        };
        scope: string;
        expiresAt: Date | null;
        connectedAt: Date;
        revokedAt: Date | null;
        lastSyncedAt: Date | null;
    }[]>;
    private oauthScopeFor;
    getAuthorizationUrl(providerId: string, actorUserId: string, redirectUri: string): Promise<AuthorizationUrlResult>;
    handleCallback(providerId: string, code: string, state: string, redirectUri: string, actorUserId: string): Promise<{
        id: string;
        providerId: string;
        scope: string;
        expiresAt: Date | null;
        connectedAt: Date;
    }>;
    private exchangeCodeForTokens;
    private refreshAccessToken;
    revokeConnection(connectionId: string, actorUserId: string): Promise<{
        id: string;
        userId: string;
        expiresAt: Date | null;
        revokedAt: Date | null;
        providerId: string;
        accessTokenEncrypted: string;
        refreshTokenEncrypted: string | null;
        scope: string;
        connectedAt: Date;
        lastSyncedAt: Date | null;
    }>;
    private bestEffortRevokeAtVendor;
    private static readonly SYNC_HORIZON_DAYS;
    static readonly EXTERNAL_BUSY_TITLE = "Busy (external)";
    runExternalSyncSweep(now: Date): Promise<{
        connectionsProcessed: number;
        synced: number;
        errors: number;
    }>;
    private upsertBusyBlock;
    private ensureFreshAccessToken;
    private fetchExternalBusyBlocks;
    private fetchMicrosoftGraphBusyBlocks;
    private fetchGoogleBusyBlocks;
    private serializeProvider;
    private assertCapability;
}
