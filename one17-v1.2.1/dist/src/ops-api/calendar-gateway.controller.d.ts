import type { Request } from 'express';
import type { AuthenticatedUser } from '../auth/auth.types';
import { CalendarGatewayService } from '../calendar/calendar-gateway.service';
import { ConfigureCalendarProviderDto } from './ops-api.types';
export declare class CalendarGatewayController {
    private readonly calendarGateway;
    constructor(calendarGateway: CalendarGatewayService);
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
    proposeProviderConfig(dto: ConfigureCalendarProviderDto, user: AuthenticatedUser): Promise<Omit<{
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
    approveProviderConfig(workflowInstanceId: string, user: AuthenticatedUser): Promise<Omit<{
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
    listMyConnections(user: AuthenticatedUser): Promise<{
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
    getAuthorizationUrl(providerId: string, user: AuthenticatedUser, req: Request): Promise<import("../calendar/calendar-gateway.types").AuthorizationUrlResult>;
    handleCallback(providerId: string, code: string, state: string, user: AuthenticatedUser, req: Request): Promise<{
        id: string;
        providerId: string;
        scope: string;
        expiresAt: Date | null;
        connectedAt: Date;
    }>;
    revokeConnection(id: string, user: AuthenticatedUser): Promise<{
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
    private callbackUrl;
}
