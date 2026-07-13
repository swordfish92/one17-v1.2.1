import type { AuthenticatedUser } from '../auth/auth.types';
import { ScreeningGatewayService } from '../screening-gateway/screening-gateway.service';
import { ConfigureScreeningCommercialProviderDto, ConfigureScreeningListSourceDto, ManualScreeningAttestationDto, ProposeHitAdjudicationDto, RunScreeningDto, UpdateScreeningGatewayConfigDto } from './ops-api.types';
export declare class ScreeningGatewayController {
    private readonly screening;
    constructor(screening: ScreeningGatewayService);
    listSources(): Promise<(Omit<{
        id: string;
        updatedAt: Date;
        name: string;
        isActive: boolean;
        sourceCode: import("../../generated/prisma/enums").ScreeningListSourceCode;
        configuredByUserId: string | null;
        pendingIsActive: boolean | null;
        pendingProposedByUserId: string | null;
        configWorkflowInstanceId: string | null;
        fileFormat: import("../../generated/prisma/enums").ScreeningListFileFormat;
        downloadUrl: string;
        extraConfig: import("@prisma/client/runtime/client").JsonValue | null;
        isParked: boolean;
        parkedReason: string | null;
        lastSuccessfulDownloadAt: Date | null;
        lastListVersion: string | null;
        lastAttemptAt: Date | null;
        lastAttemptStatus: string | null;
        pendingDownloadUrl: string | null;
        pendingExtraConfig: import("@prisma/client/runtime/client").JsonValue | null;
    }, "extraConfig" | "pendingExtraConfig"> & {
        hasExtraConfig: boolean;
        hasPendingExtraConfig: boolean;
    })[]>;
    proposeSourceConfig(dto: ConfigureScreeningListSourceDto, user: AuthenticatedUser): Promise<Omit<{
        id: string;
        updatedAt: Date;
        name: string;
        isActive: boolean;
        sourceCode: import("../../generated/prisma/enums").ScreeningListSourceCode;
        configuredByUserId: string | null;
        pendingIsActive: boolean | null;
        pendingProposedByUserId: string | null;
        configWorkflowInstanceId: string | null;
        fileFormat: import("../../generated/prisma/enums").ScreeningListFileFormat;
        downloadUrl: string;
        extraConfig: import("@prisma/client/runtime/client").JsonValue | null;
        isParked: boolean;
        parkedReason: string | null;
        lastSuccessfulDownloadAt: Date | null;
        lastListVersion: string | null;
        lastAttemptAt: Date | null;
        lastAttemptStatus: string | null;
        pendingDownloadUrl: string | null;
        pendingExtraConfig: import("@prisma/client/runtime/client").JsonValue | null;
    }, "extraConfig" | "pendingExtraConfig"> & {
        hasExtraConfig: boolean;
        hasPendingExtraConfig: boolean;
    }>;
    approveSourceConfig(workflowInstanceId: string, user: AuthenticatedUser): Promise<Omit<{
        id: string;
        updatedAt: Date;
        name: string;
        isActive: boolean;
        sourceCode: import("../../generated/prisma/enums").ScreeningListSourceCode;
        configuredByUserId: string | null;
        pendingIsActive: boolean | null;
        pendingProposedByUserId: string | null;
        configWorkflowInstanceId: string | null;
        fileFormat: import("../../generated/prisma/enums").ScreeningListFileFormat;
        downloadUrl: string;
        extraConfig: import("@prisma/client/runtime/client").JsonValue | null;
        isParked: boolean;
        parkedReason: string | null;
        lastSuccessfulDownloadAt: Date | null;
        lastListVersion: string | null;
        lastAttemptAt: Date | null;
        lastAttemptStatus: string | null;
        pendingDownloadUrl: string | null;
        pendingExtraConfig: import("@prisma/client/runtime/client").JsonValue | null;
    }, "extraConfig" | "pendingExtraConfig"> & {
        hasExtraConfig: boolean;
        hasPendingExtraConfig: boolean;
    }>;
    listFreshness(): Promise<{
        sourceCode: string;
        daysSince: number | null;
        isParked: boolean;
    }[]>;
    getConfig(): Promise<{
        id: number;
        updatedAt: Date;
        updatedByUserId: string | null;
        activeProviderMode: import("../../generated/prisma/enums").ScreeningProviderMode;
        matchThresholdScore: number;
        redThresholdScore: number;
        freshnessMaxAgeDays: number;
    }>;
    updateConfig(dto: UpdateScreeningGatewayConfigDto, user: AuthenticatedUser): Promise<{
        id: number;
        updatedAt: Date;
        updatedByUserId: string | null;
        activeProviderMode: import("../../generated/prisma/enums").ScreeningProviderMode;
        matchThresholdScore: number;
        redThresholdScore: number;
        freshnessMaxAgeDays: number;
    }>;
    listCommercialProviders(): Promise<(Omit<{
        id: string;
        updatedAt: Date;
        name: string;
        isActive: boolean;
        providerSlot: number;
        configuredByUserId: string | null;
        pendingName: string | null;
        pendingIsActive: boolean | null;
        pendingProposedByUserId: string | null;
        configWorkflowInstanceId: string | null;
        apiKey: string | null;
        pendingApiKey: string | null;
    }, "apiKey" | "pendingApiKey"> & {
        hasApiKey: boolean;
        apiKeyPreview: string | null;
        hasPendingApiKeyRotation: boolean;
    })[]>;
    proposeCommercialProviderConfig(dto: ConfigureScreeningCommercialProviderDto, user: AuthenticatedUser): Promise<Omit<{
        id: string;
        updatedAt: Date;
        name: string;
        isActive: boolean;
        providerSlot: number;
        configuredByUserId: string | null;
        pendingName: string | null;
        pendingIsActive: boolean | null;
        pendingProposedByUserId: string | null;
        configWorkflowInstanceId: string | null;
        apiKey: string | null;
        pendingApiKey: string | null;
    }, "apiKey" | "pendingApiKey"> & {
        hasApiKey: boolean;
        apiKeyPreview: string | null;
        hasPendingApiKeyRotation: boolean;
    }>;
    approveCommercialProviderConfig(workflowInstanceId: string, user: AuthenticatedUser): Promise<Omit<{
        id: string;
        updatedAt: Date;
        name: string;
        isActive: boolean;
        providerSlot: number;
        configuredByUserId: string | null;
        pendingName: string | null;
        pendingIsActive: boolean | null;
        pendingProposedByUserId: string | null;
        configWorkflowInstanceId: string | null;
        apiKey: string | null;
        pendingApiKey: string | null;
    }, "apiKey" | "pendingApiKey"> & {
        hasApiKey: boolean;
        apiKeyPreview: string | null;
        hasPendingApiKeyRotation: boolean;
    }>;
    screenSubject(dto: RunScreeningDto, user: AuthenticatedUser): Promise<{
        run: {
            id: string;
            initiatedByUserId: string | null;
            screenedAt: Date;
            outcome: string;
            subjectType: import("../../generated/prisma/enums").ScreeningSubjectType;
            subjectId: string;
            subjectNameScreened: string;
            providerMode: import("../../generated/prisma/enums").ScreeningProviderMode;
            thresholdUsed: number;
            listVersionsScreened: import("@prisma/client/runtime/client").JsonValue;
            fingerprint: string | null;
        };
        hits: {
            id: string;
            status: string;
            createdAt: Date;
            decisionProposedByUserId: string | null;
            decisionWorkflowInstanceId: string | null;
            screeningRunId: string;
            listEntryId: string | null;
            matchedName: string;
            matchScore: number;
            pendingOutcome: import("../../generated/prisma/enums").ScreeningHitAdjudicationOutcome | null;
            pendingRationale: string | null;
            adjudicatedOutcome: import("../../generated/prisma/enums").ScreeningHitAdjudicationOutcome | null;
            adjudicatedRationale: string | null;
            adjudicatedByUserId: string | null;
            adjudicatedAt: Date | null;
        }[];
    }>;
    recordManualAttestation(dto: ManualScreeningAttestationDto, user: AuthenticatedUser): Promise<{
        hits: {
            id: string;
            status: string;
            createdAt: Date;
            decisionProposedByUserId: string | null;
            decisionWorkflowInstanceId: string | null;
            screeningRunId: string;
            listEntryId: string | null;
            matchedName: string;
            matchScore: number;
            pendingOutcome: import("../../generated/prisma/enums").ScreeningHitAdjudicationOutcome | null;
            pendingRationale: string | null;
            adjudicatedOutcome: import("../../generated/prisma/enums").ScreeningHitAdjudicationOutcome | null;
            adjudicatedRationale: string | null;
            adjudicatedByUserId: string | null;
            adjudicatedAt: Date | null;
        }[];
    } & {
        id: string;
        initiatedByUserId: string | null;
        screenedAt: Date;
        outcome: string;
        subjectType: import("../../generated/prisma/enums").ScreeningSubjectType;
        subjectId: string;
        subjectNameScreened: string;
        providerMode: import("../../generated/prisma/enums").ScreeningProviderMode;
        thresholdUsed: number;
        listVersionsScreened: import("@prisma/client/runtime/client").JsonValue;
        fingerprint: string | null;
    }>;
    listOpenHits(): Promise<({
        run: {
            id: string;
            initiatedByUserId: string | null;
            screenedAt: Date;
            outcome: string;
            subjectType: import("../../generated/prisma/enums").ScreeningSubjectType;
            subjectId: string;
            subjectNameScreened: string;
            providerMode: import("../../generated/prisma/enums").ScreeningProviderMode;
            thresholdUsed: number;
            listVersionsScreened: import("@prisma/client/runtime/client").JsonValue;
            fingerprint: string | null;
        };
        listEntry: {
            id: string;
            entityType: string | null;
            createdAt: Date;
            nationality: string | null;
            sourceCode: import("../../generated/prisma/enums").ScreeningListSourceCode;
            sourceRecordId: string;
            primaryName: string;
            aliases: import("@prisma/client/runtime/client").JsonValue;
            dateOfBirth: string | null;
            programme: string | null;
            listVersion: string;
            rawDetail: import("@prisma/client/runtime/client").JsonValue;
        } | null;
    } & {
        id: string;
        status: string;
        createdAt: Date;
        decisionProposedByUserId: string | null;
        decisionWorkflowInstanceId: string | null;
        screeningRunId: string;
        listEntryId: string | null;
        matchedName: string;
        matchScore: number;
        pendingOutcome: import("../../generated/prisma/enums").ScreeningHitAdjudicationOutcome | null;
        pendingRationale: string | null;
        adjudicatedOutcome: import("../../generated/prisma/enums").ScreeningHitAdjudicationOutcome | null;
        adjudicatedRationale: string | null;
        adjudicatedByUserId: string | null;
        adjudicatedAt: Date | null;
    })[]>;
    proposeHitAdjudication(hitId: string, dto: ProposeHitAdjudicationDto, user: AuthenticatedUser): Promise<{
        hit: {
            id: string;
            status: string;
            createdAt: Date;
            decisionProposedByUserId: string | null;
            decisionWorkflowInstanceId: string | null;
            screeningRunId: string;
            listEntryId: string | null;
            matchedName: string;
            matchScore: number;
            pendingOutcome: import("../../generated/prisma/enums").ScreeningHitAdjudicationOutcome | null;
            pendingRationale: string | null;
            adjudicatedOutcome: import("../../generated/prisma/enums").ScreeningHitAdjudicationOutcome | null;
            adjudicatedRationale: string | null;
            adjudicatedByUserId: string | null;
            adjudicatedAt: Date | null;
        };
        workflowInstance: {
            id: string;
            entityType: string;
            entityId: string;
            updatedAt: Date;
            status: import("../../generated/prisma/enums").WorkflowStatus;
            createdAt: Date;
            workflowTypeCode: string;
            scenario: string | null;
            approvalRuleId: string;
            amountKobo: bigint | null;
            initiatedByUserId: string;
        };
    }>;
    approveHitAdjudication(workflowInstanceId: string, user: AuthenticatedUser): Promise<{
        id: string;
        status: string;
        createdAt: Date;
        decisionProposedByUserId: string | null;
        decisionWorkflowInstanceId: string | null;
        screeningRunId: string;
        listEntryId: string | null;
        matchedName: string;
        matchScore: number;
        pendingOutcome: import("../../generated/prisma/enums").ScreeningHitAdjudicationOutcome | null;
        pendingRationale: string | null;
        adjudicatedOutcome: import("../../generated/prisma/enums").ScreeningHitAdjudicationOutcome | null;
        adjudicatedRationale: string | null;
        adjudicatedByUserId: string | null;
        adjudicatedAt: Date | null;
    }>;
}
