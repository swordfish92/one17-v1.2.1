import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { NotificationService } from '../notification/notification.service';
import { DocumentService } from '../document/document.service';
import { ConfigureScreeningListSourceInput, RunScreeningInput, ProposeHitAdjudicationInput, ManualScreeningAttestationInput } from './screening-gateway.types';
export declare class ScreeningGatewayService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly workflow;
    private readonly notification;
    private readonly document;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService, workflow: WorkflowEngineService, notification: NotificationService, document: DocumentService);
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
    proposeSourceConfig(input: ConfigureScreeningListSourceInput, actorUserId: string): Promise<Omit<{
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
    approveSourceConfig(workflowInstanceId: string, approverUserId: string): Promise<Omit<{
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
    private serializeSource;
    getConfig(): Promise<{
        id: number;
        updatedAt: Date;
        updatedByUserId: string | null;
        activeProviderMode: import("../../generated/prisma/enums").ScreeningProviderMode;
        matchThresholdScore: number;
        redThresholdScore: number;
        freshnessMaxAgeDays: number;
    }>;
    updateConfig(input: {
        activeProviderMode?: 'LOCAL_LISTS' | 'COMMERCIAL' | 'MANUAL';
        matchThresholdScore?: number;
        redThresholdScore?: number;
        freshnessMaxAgeDays?: number;
    }, actorUserId: string): Promise<{
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
    proposeCommercialProviderConfig(input: {
        providerSlot: number;
        name: string;
        apiKey?: string;
        isActive?: boolean;
    }, actorUserId: string): Promise<Omit<{
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
    approveCommercialProviderConfig(workflowInstanceId: string, approverUserId: string): Promise<Omit<{
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
    private serializeCommercialProvider;
    runListDownloadSweep(_scheduledFor: Date): Promise<{
        succeeded: string[];
        failed: string[];
        parked: string[];
    }>;
    private downloadAndParse;
    screenSubject(input: RunScreeningInput): Promise<{
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
    private runCommercialScreen;
    recordManualAttestation(input: ManualScreeningAttestationInput): Promise<{
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
    proposeHitAdjudication(input: ProposeHitAdjudicationInput): Promise<{
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
    approveHitAdjudication(workflowInstanceId: string, approverUserId: string): Promise<{
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
    private computeFingerprint;
    ensureScreened(subjectType: 'INVESTOR' | 'COUNTERPARTY', subjectId: string, subjectNameScreened: string, actorUserId: string): Promise<void>;
    hasBlockingScreeningResult(subjectType: 'INVESTOR' | 'COUNTERPARTY', subjectId: string): Promise<{
        blocked: boolean;
        reason?: string;
    }>;
    runRescreeningSweep(_scheduledFor: Date, systemUserId: string): Promise<{
        investorsChecked: number;
        counterpartiesChecked: number;
        newMatchAlerts: number;
    }>;
    private raiseRescreeningAlert;
    listFreshnessDaysSinceDownload(): Promise<{
        sourceCode: string;
        daysSince: number | null;
        isParked: boolean;
    }[]>;
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
    private assertCapability;
}
