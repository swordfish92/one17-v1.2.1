import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { ConfigureBureauProviderInput, UpdateBureauPolicyInput } from './bureau-gateway.types';
export declare class BureauGatewayService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly BUREAU_ADAPTERS;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService);
    private resolveBureauAdapter;
    listProviders(): Promise<(Omit<{
        id: string;
        updatedAt: Date;
        updatedByUserId: string | null;
        name: string;
        isActive: boolean;
        providerSlot: number;
        apiConfig: import("@prisma/client/runtime/client").JsonValue;
        costPerPullKobo: bigint;
    }, "apiConfig" | "costPerPullKobo"> & {
        costPerPullKobo: string;
        apiConfigKeys: string[];
        apiConfigSensitiveKeys: string[];
        automationStatus: "AUTOMATED" | "MANUAL_PENDING_API" | "NOT_CONTRACTED";
    })[]>;
    configureProvider(input: ConfigureBureauProviderInput, actorUserId: string): Promise<Omit<{
        id: string;
        updatedAt: Date;
        updatedByUserId: string | null;
        name: string;
        isActive: boolean;
        providerSlot: number;
        apiConfig: import("@prisma/client/runtime/client").JsonValue;
        costPerPullKobo: bigint;
    }, "apiConfig" | "costPerPullKobo"> & {
        costPerPullKobo: string;
        apiConfigKeys: string[];
        apiConfigSensitiveKeys: string[];
        automationStatus: "AUTOMATED" | "MANUAL_PENDING_API" | "NOT_CONTRACTED";
    }>;
    getPolicy(): Promise<{
        id: number;
        updatedAt: Date;
        updatedByUserId: string | null;
        minIntervalDays: number;
    } | {
        id: number;
        minIntervalDays: null;
        updatedByUserId: null;
        updatedAt: null;
    }>;
    updatePolicy(input: UpdateBureauPolicyInput, actorUserId: string): Promise<{
        id: number;
        updatedAt: Date;
        updatedByUserId: string | null;
        minIntervalDays: number;
    }>;
    triggerPull(counterpartyId: string, actorUserId: string): Promise<{
        id: string;
        counterpartyId: string;
        providerId: string;
        costKobo: bigint;
        resultSummary: string;
        pulledByUserId: string;
        pulledAt: Date;
    } & {
        costKobo: string;
    }>;
    listPullHistory(counterpartyId: string): Promise<({
        provider: {
            name: string;
        };
    } & {
        id: string;
        counterpartyId: string;
        providerId: string;
        costKobo: bigint;
        resultSummary: string;
        pulledByUserId: string;
        pulledAt: Date;
    } & {
        costKobo: string;
    })[]>;
    listAllPullHistory(actorUserId: string): Promise<({
        counterparty: {
            legalName: string;
        };
        provider: {
            name: string;
        };
        pulledBy: {
            email: string;
            displayName: string;
        };
    } & {
        id: string;
        counterpartyId: string;
        providerId: string;
        costKobo: bigint;
        resultSummary: string;
        pulledByUserId: string;
        pulledAt: Date;
    } & {
        costKobo: string;
    })[]>;
    private serializeProvider;
    private serializePullLog;
    private assertCapability;
}
