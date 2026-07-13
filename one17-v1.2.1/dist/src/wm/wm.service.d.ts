import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { EventJournalService } from '../event-journal/event-journal.service';
import { NwcsTier } from './wm.types';
export declare class WmService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly workflow;
    private readonly eventJournal;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService, workflow: WorkflowEngineService, eventJournal: EventJournalService);
    seedReferenceData(): Promise<{
        assetClasses: number;
        tierBands: number;
        scenarios: number;
    }>;
    listClients(): Promise<({
        investor: {
            fullLegalName: string;
            contactEmail: string;
        };
    } & {
        investorId: string;
        onboardedByUserId: string;
        portalProvisionedAt: Date | null;
        currentTier: import("../../generated/prisma/enums").WmClientTier;
        tierUpdatedAt: Date;
        advisorUserId: string | null;
        onboardedAt: Date;
    })[]>;
    getClientDashboard(investorId: string): Promise<{
        profile: {
            investor: {
                fullLegalName: string;
                contactEmail: string;
            };
        } & {
            investorId: string;
            onboardedByUserId: string;
            portalProvisionedAt: Date | null;
            currentTier: import("../../generated/prisma/enums").WmClientTier;
            tierUpdatedAt: Date;
            advisorUserId: string | null;
            onboardedAt: Date;
        };
        combinedBook: {
            oneSeventeenByProduct: {
                productAccountId: string;
                productCode: string;
                valueKobo: string;
            }[];
            externalByAsset: {
                id: string;
                assetClassCode: string;
                valueKobo: string;
                verificationTag: import("../../generated/prisma/enums").WmVerificationTag;
                shariahScreenTag: import("../../generated/prisma/enums").WmShariahScreenTag;
            }[];
            byAssetClassKobo: {
                [k: string]: string;
            };
            totalKobo: string;
        };
        allocationPolicy: {
            id: string;
            createdAt: Date;
            version: number;
            createdByUserId: string;
            isActive: boolean;
            wmClientProfileId: string;
            targetAllocations: import("@prisma/client/runtime/client").JsonValue;
            riskBand: import("../../generated/prisma/enums").WmRiskBand;
            clientAcknowledgedAt: Date | null;
        } | null;
        riskProfile: {
            id: string;
            createdAt: Date;
            version: number;
            createdByUserId: string;
            isActive: boolean;
            wmClientProfileId: string;
            riskBand: import("../../generated/prisma/enums").WmRiskBand;
            clientAcknowledgedAt: Date | null;
            questionnaireResponses: import("@prisma/client/runtime/client").JsonValue;
        } | null;
        growthPlan: {
            id: string;
            createdAt: Date;
            version: number;
            createdByUserId: string;
            isActive: boolean;
            wmClientProfileId: string;
            clientAcknowledgedAt: Date | null;
            horizon: string;
            milestones: import("@prisma/client/runtime/client").JsonValue;
            targetGlidePath: import("@prisma/client/runtime/client").JsonValue;
            reviewSchedule: string;
        } | null;
        advisoryRecords: {
            id: string;
            createdAt: Date;
            riskNotes: string | null;
            respondedAt: Date | null;
            advisorUserId: string;
            wmClientProfileId: string;
            recommendation: string;
            rationale: string;
            shariahNote: string | null;
            clientResponse: import("../../generated/prisma/enums").WmAdvisoryResponse;
        }[];
        publishedRiskAssessments: ({
            id: string;
            status: import("../../generated/prisma/enums").WmRiskAssessmentStatus;
            createdAt: Date;
            publishedAt: Date | null;
            scenarioConfigId: string;
            ranByUserId: string;
            wmClientProfileId: string;
            combinedBookSnapshot: import("@prisma/client/runtime/client").JsonValue;
            preShockValueKobo: bigint;
            postShockValueKobo: bigint;
            reviewedByUserId: string | null;
        } & {
            preShockValueKobo: string;
            postShockValueKobo: string;
        })[];
        disclaimers: string[];
    }>;
    getPortalDashboard(investorId: string): Promise<{
        complaints: {
            id: string;
            updatedAt: Date;
            status: import("../../generated/prisma/enums").ComplaintStatus;
            createdAt: Date;
            description: string;
            investorId: string | null;
            counterpartyId: string | null;
            receivedAt: Date;
            ownerUserId: string | null;
            category: string;
            escalatedAt: Date | null;
            loggedByUserId: string | null;
            slaDueAt: Date;
            escalatedToUserId: string | null;
            resolvedAt: Date | null;
            resolutionNotes: string | null;
            isDsr: boolean;
            dsrCategory: import("../complaint/complaint.types").DsrCategory | null;
            dsrLegalBasis: string | null;
        }[];
        profile: {
            investor: {
                fullLegalName: string;
                contactEmail: string;
            };
        } & {
            investorId: string;
            onboardedByUserId: string;
            portalProvisionedAt: Date | null;
            currentTier: import("../../generated/prisma/enums").WmClientTier;
            tierUpdatedAt: Date;
            advisorUserId: string | null;
            onboardedAt: Date;
        };
        combinedBook: {
            oneSeventeenByProduct: {
                productAccountId: string;
                productCode: string;
                valueKobo: string;
            }[];
            externalByAsset: {
                id: string;
                assetClassCode: string;
                valueKobo: string;
                verificationTag: import("../../generated/prisma/enums").WmVerificationTag;
                shariahScreenTag: import("../../generated/prisma/enums").WmShariahScreenTag;
            }[];
            byAssetClassKobo: {
                [k: string]: string;
            };
            totalKobo: string;
        };
        allocationPolicy: {
            id: string;
            createdAt: Date;
            version: number;
            createdByUserId: string;
            isActive: boolean;
            wmClientProfileId: string;
            targetAllocations: import("@prisma/client/runtime/client").JsonValue;
            riskBand: import("../../generated/prisma/enums").WmRiskBand;
            clientAcknowledgedAt: Date | null;
        } | null;
        riskProfile: {
            id: string;
            createdAt: Date;
            version: number;
            createdByUserId: string;
            isActive: boolean;
            wmClientProfileId: string;
            riskBand: import("../../generated/prisma/enums").WmRiskBand;
            clientAcknowledgedAt: Date | null;
            questionnaireResponses: import("@prisma/client/runtime/client").JsonValue;
        } | null;
        growthPlan: {
            id: string;
            createdAt: Date;
            version: number;
            createdByUserId: string;
            isActive: boolean;
            wmClientProfileId: string;
            clientAcknowledgedAt: Date | null;
            horizon: string;
            milestones: import("@prisma/client/runtime/client").JsonValue;
            targetGlidePath: import("@prisma/client/runtime/client").JsonValue;
            reviewSchedule: string;
        } | null;
        advisoryRecords: {
            id: string;
            createdAt: Date;
            riskNotes: string | null;
            respondedAt: Date | null;
            advisorUserId: string;
            wmClientProfileId: string;
            recommendation: string;
            rationale: string;
            shariahNote: string | null;
            clientResponse: import("../../generated/prisma/enums").WmAdvisoryResponse;
        }[];
        publishedRiskAssessments: ({
            id: string;
            status: import("../../generated/prisma/enums").WmRiskAssessmentStatus;
            createdAt: Date;
            publishedAt: Date | null;
            scenarioConfigId: string;
            ranByUserId: string;
            wmClientProfileId: string;
            combinedBookSnapshot: import("@prisma/client/runtime/client").JsonValue;
            preShockValueKobo: bigint;
            postShockValueKobo: bigint;
            reviewedByUserId: string | null;
        } & {
            preShockValueKobo: string;
            postShockValueKobo: string;
        })[];
        disclaimers: string[];
        isWmClient: true;
        investor?: undefined;
        holdings?: undefined;
        pyramid?: undefined;
    } | {
        isWmClient: false;
        investor: {
            fullLegalName: string;
            contactEmail: string;
            relationshipManagerUserId: string | null;
        };
        holdings: {
            byProduct: {
                productAccountId: string;
                productCode: string;
                valueKobo: string;
            }[];
            totalKobo: string;
        };
        pyramid: {
            tiers: {
                tier: NwcsTier;
                sortOrder: number;
                serviceDescriptor: string;
                minTotalWealthUsd: number;
                minTotalWealthKobo: string;
            }[];
            clientTier: NwcsTier;
            clientTotalWealthKobo: string;
            atOrAboveCeiling: boolean;
            isWmClient: boolean;
        };
        complaints: {
            id: string;
            updatedAt: Date;
            status: import("../../generated/prisma/enums").ComplaintStatus;
            createdAt: Date;
            description: string;
            investorId: string | null;
            counterpartyId: string | null;
            receivedAt: Date;
            ownerUserId: string | null;
            category: string;
            escalatedAt: Date | null;
            loggedByUserId: string | null;
            slaDueAt: Date;
            escalatedToUserId: string | null;
            resolvedAt: Date | null;
            resolutionNotes: string | null;
            isDsr: boolean;
            dsrCategory: import("../complaint/complaint.types").DsrCategory | null;
            dsrLegalBasis: string | null;
        }[];
    }>;
    onboardWmClient(input: {
        investorId: string;
        advisorUserId?: string;
        onboardedByUserId: string;
    }): Promise<{
        investorId: string;
        onboardedByUserId: string;
        portalProvisionedAt: Date | null;
        currentTier: import("../../generated/prisma/enums").WmClientTier;
        tierUpdatedAt: Date;
        advisorUserId: string | null;
        onboardedAt: Date;
    }>;
    computeTotalWealthKobo(investorId: string): Promise<bigint>;
    combinedBookSnapshot(investorId: string): Promise<{
        oneSeventeenByProduct: {
            productAccountId: string;
            productCode: string;
            valueKobo: string;
        }[];
        externalByAsset: {
            id: string;
            assetClassCode: string;
            valueKobo: string;
            verificationTag: import("../../generated/prisma/enums").WmVerificationTag;
            shariahScreenTag: import("../../generated/prisma/enums").WmShariahScreenTag;
        }[];
        byAssetClassKobo: {
            [k: string]: string;
        };
        totalKobo: string;
    }>;
    getPrincipalProfitBreakdown(investorId: string): Promise<{
        accounts: {
            productAccountId: string;
            productCode: string;
            principalKobo: string;
            profitKobo: string | null;
        }[];
        totalPrincipalKobo: string;
        totalProfitKobo: string;
    }>;
    private activeTierBands;
    getFxConfig(): Promise<{
        id: number;
        updatedAt: Date;
        updatedByUserId: string | null;
        nairaPerUsd: import("@prisma/client-runtime-utils").Decimal;
    }>;
    updateFxRate(nairaPerUsd: number, actorUserId: string): Promise<{
        id: number;
        updatedAt: Date;
        updatedByUserId: string | null;
        nairaPerUsd: import("@prisma/client-runtime-utils").Decimal;
    }>;
    private resolveTier;
    recomputeTier(investorId: string): Promise<{
        tier: string;
        changed: boolean;
    }>;
    declareClientAsset(input: {
        investorId: string;
        assetClassCode: string;
        description: string;
        quantity?: number;
        declaredValueKobo: bigint;
        valuationDate: Date;
        custodyFlag: 'ONE17' | 'EXTERNAL';
        evidenceDocumentId?: string;
        declaredByUserId: string;
        maturityDate?: Date;
        tenorMonths?: number;
        scheduledProfitTakingDates?: string[];
        targetReturnPct?: number;
    }): Promise<{
        asset: {
            id: string;
            createdAt: Date;
            description: string;
            workflowInstanceId: string | null;
            verifiedByUserId: string | null;
            maturityDate: Date | null;
            valuationDate: Date;
            quantity: import("@prisma/client-runtime-utils").Decimal | null;
            targetReturnPct: import("@prisma/client-runtime-utils").Decimal | null;
            wmClientProfileId: string;
            assetClassCode: string;
            declaredValueKobo: bigint;
            custodyFlag: import("../../generated/prisma/enums").WmCustodyFlag;
            evidenceDocumentId: string | null;
            verificationTag: import("../../generated/prisma/enums").WmVerificationTag;
            verifiedAt: Date | null;
            shariahScreenTag: import("../../generated/prisma/enums").WmShariahScreenTag;
            declaredByUserId: string;
            tenorMonths: number | null;
            scheduledProfitTakingDates: import("@prisma/client/runtime/client").JsonValue | null;
        } & {
            declaredValueKobo: string;
        };
        workflowInstance: any;
    }>;
    private serializeAsset;
    private serializeAssessmentRun;
    verifyClientAsset(workflowInstanceId: string, verifierUserId: string): Promise<{
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
    }>;
    setShariahScreen(assetId: string, tag: 'SCREENED_COMPLIANT' | 'SCREENED_NON_COMPLIANT' | 'UNSCREENED', actorUserId: string): Promise<{
        id: string;
        createdAt: Date;
        description: string;
        workflowInstanceId: string | null;
        verifiedByUserId: string | null;
        maturityDate: Date | null;
        valuationDate: Date;
        quantity: import("@prisma/client-runtime-utils").Decimal | null;
        targetReturnPct: import("@prisma/client-runtime-utils").Decimal | null;
        wmClientProfileId: string;
        assetClassCode: string;
        declaredValueKobo: bigint;
        custodyFlag: import("../../generated/prisma/enums").WmCustodyFlag;
        evidenceDocumentId: string | null;
        verificationTag: import("../../generated/prisma/enums").WmVerificationTag;
        verifiedAt: Date | null;
        shariahScreenTag: import("../../generated/prisma/enums").WmShariahScreenTag;
        declaredByUserId: string;
        tenorMonths: number | null;
        scheduledProfitTakingDates: import("@prisma/client/runtime/client").JsonValue | null;
    }>;
    getHoldingDetail(assetId: string, investorId: string): Promise<{
        asset: {
            id: string;
            createdAt: Date;
            description: string;
            workflowInstanceId: string | null;
            verifiedByUserId: string | null;
            maturityDate: Date | null;
            valuationDate: Date;
            quantity: import("@prisma/client-runtime-utils").Decimal | null;
            targetReturnPct: import("@prisma/client-runtime-utils").Decimal | null;
            wmClientProfileId: string;
            assetClassCode: string;
            declaredValueKobo: bigint;
            custodyFlag: import("../../generated/prisma/enums").WmCustodyFlag;
            evidenceDocumentId: string | null;
            verificationTag: import("../../generated/prisma/enums").WmVerificationTag;
            verifiedAt: Date | null;
            shariahScreenTag: import("../../generated/prisma/enums").WmShariahScreenTag;
            declaredByUserId: string;
            tenorMonths: number | null;
            scheduledProfitTakingDates: import("@prisma/client/runtime/client").JsonValue | null;
        } & {
            declaredValueKobo: string;
        };
        valuationHistory: {
            valueKobo: string;
            id: string;
            createdAt: Date;
            valuationDate: Date;
            wmClientAssetId: string;
            recordedByUserId: string;
        }[];
        actionRequests: {
            requestedAmountKobo: string;
            id: string;
            status: import("../../generated/prisma/enums").WmHoldingActionStatus;
            createdAt: Date;
            notes: string | null;
            requestType: import("../../generated/prisma/enums").WmHoldingActionType;
            wmClientAssetId: string;
            actionedByUserId: string | null;
            actionedAt: Date | null;
        }[];
    }>;
    private submitHoldingActionRequest;
    requestTopUp(assetId: string, investorId: string, requestedAmountKobo: bigint, notes?: string): Promise<{
        requestedAmountKobo: string;
        id: string;
        status: import("../../generated/prisma/enums").WmHoldingActionStatus;
        createdAt: Date;
        notes: string | null;
        requestType: import("../../generated/prisma/enums").WmHoldingActionType;
        wmClientAssetId: string;
        actionedByUserId: string | null;
        actionedAt: Date | null;
    }>;
    requestRedemption(assetId: string, investorId: string, requestedAmountKobo: bigint, notes?: string): Promise<{
        requestedAmountKobo: string;
        id: string;
        status: import("../../generated/prisma/enums").WmHoldingActionStatus;
        createdAt: Date;
        notes: string | null;
        requestType: import("../../generated/prisma/enums").WmHoldingActionType;
        wmClientAssetId: string;
        actionedByUserId: string | null;
        actionedAt: Date | null;
    }>;
    listPendingHoldingActionRequests(actorUserId: string): Promise<{
        requestedAmountKobo: string;
        wmClientAsset: {
            wmClientProfile: {
                investor: {
                    fullLegalName: string;
                };
            } & {
                investorId: string;
                onboardedByUserId: string;
                portalProvisionedAt: Date | null;
                currentTier: import("../../generated/prisma/enums").WmClientTier;
                tierUpdatedAt: Date;
                advisorUserId: string | null;
                onboardedAt: Date;
            };
        } & {
            id: string;
            createdAt: Date;
            description: string;
            workflowInstanceId: string | null;
            verifiedByUserId: string | null;
            maturityDate: Date | null;
            valuationDate: Date;
            quantity: import("@prisma/client-runtime-utils").Decimal | null;
            targetReturnPct: import("@prisma/client-runtime-utils").Decimal | null;
            wmClientProfileId: string;
            assetClassCode: string;
            declaredValueKobo: bigint;
            custodyFlag: import("../../generated/prisma/enums").WmCustodyFlag;
            evidenceDocumentId: string | null;
            verificationTag: import("../../generated/prisma/enums").WmVerificationTag;
            verifiedAt: Date | null;
            shariahScreenTag: import("../../generated/prisma/enums").WmShariahScreenTag;
            declaredByUserId: string;
            tenorMonths: number | null;
            scheduledProfitTakingDates: import("@prisma/client/runtime/client").JsonValue | null;
        };
        id: string;
        status: import("../../generated/prisma/enums").WmHoldingActionStatus;
        createdAt: Date;
        notes: string | null;
        requestType: import("../../generated/prisma/enums").WmHoldingActionType;
        wmClientAssetId: string;
        actionedByUserId: string | null;
        actionedAt: Date | null;
    }[]>;
    actionHoldingRequest(requestId: string, actorUserId: string): Promise<{
        requestedAmountKobo: string;
        id: string;
        status: import("../../generated/prisma/enums").WmHoldingActionStatus;
        createdAt: Date;
        notes: string | null;
        requestType: import("../../generated/prisma/enums").WmHoldingActionType;
        wmClientAssetId: string;
        actionedByUserId: string | null;
        actionedAt: Date | null;
    }>;
    getNwcsPyramidData(investorId: string): Promise<{
        tiers: {
            tier: NwcsTier;
            sortOrder: number;
            serviceDescriptor: string;
            minTotalWealthUsd: number;
            minTotalWealthKobo: string;
        }[];
        clientTier: import("../../generated/prisma/enums").WmClientTier;
        clientTotalWealthKobo: string;
    }>;
    private static readonly PRE_WM_CEILING_SORT_ORDER;
    getPreWmPyramidData(investorId: string): Promise<{
        tiers: {
            tier: NwcsTier;
            sortOrder: number;
            serviceDescriptor: string;
            minTotalWealthUsd: number;
            minTotalWealthKobo: string;
        }[];
        clientTier: NwcsTier;
        clientTotalWealthKobo: string;
        atOrAboveCeiling: boolean;
        isWmClient: boolean;
    }>;
    listPreWmProspects(): Promise<{
        investorId: string;
        fullLegalName: string;
        contactEmail: string;
    }[]>;
    setAllocationPolicy(input: {
        investorId: string;
        targetAllocations: Record<string, number>;
        riskBand: string;
        createdByUserId: string;
    }): Promise<any>;
    acknowledgeAllocationPolicy(id: string, investorId: string): Promise<any>;
    setRiskProfile(input: {
        investorId: string;
        questionnaireResponses: Record<string, unknown>;
        riskBand: string;
        createdByUserId: string;
    }): Promise<any>;
    acknowledgeRiskProfile(id: string, investorId: string): Promise<any>;
    setGrowthPlan(input: {
        investorId: string;
        horizon: string;
        milestones: unknown;
        targetGlidePath: unknown;
        reviewSchedule: string;
        createdByUserId: string;
    }): Promise<any>;
    acknowledgeGrowthPlan(id: string, investorId: string): Promise<any>;
    private createVersioned;
    private ackVersioned;
    createAdvisoryRecord(input: {
        investorId: string;
        recommendation: string;
        rationale: string;
        riskNotes?: string;
        shariahNote?: string;
        advisorUserId: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        riskNotes: string | null;
        respondedAt: Date | null;
        advisorUserId: string;
        wmClientProfileId: string;
        recommendation: string;
        rationale: string;
        shariahNote: string | null;
        clientResponse: import("../../generated/prisma/enums").WmAdvisoryResponse;
    }>;
    respondToAdvisory(recordId: string, investorId: string, response: 'ACCEPTED' | 'DECLINED' | 'DEFERRED'): Promise<{
        id: string;
        createdAt: Date;
        riskNotes: string | null;
        respondedAt: Date | null;
        advisorUserId: string;
        wmClientProfileId: string;
        recommendation: string;
        rationale: string;
        shariahNote: string | null;
        clientResponse: import("../../generated/prisma/enums").WmAdvisoryResponse;
    }>;
    runSandboxRiskAssessment(input: {
        investorId: string;
        scenarioCode: string;
        ranByUserId: string;
    }): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").WmRiskAssessmentStatus;
        createdAt: Date;
        publishedAt: Date | null;
        scenarioConfigId: string;
        ranByUserId: string;
        wmClientProfileId: string;
        combinedBookSnapshot: import("@prisma/client/runtime/client").JsonValue;
        preShockValueKobo: bigint;
        postShockValueKobo: bigint;
        reviewedByUserId: string | null;
    } & {
        preShockValueKobo: string;
        postShockValueKobo: string;
    }>;
    publishRiskAssessment(runId: string, reviewedByUserId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").WmRiskAssessmentStatus;
        createdAt: Date;
        publishedAt: Date | null;
        scenarioConfigId: string;
        ranByUserId: string;
        wmClientProfileId: string;
        combinedBookSnapshot: import("@prisma/client/runtime/client").JsonValue;
        preShockValueKobo: bigint;
        postShockValueKobo: bigint;
        reviewedByUserId: string | null;
    } & {
        preShockValueKobo: string;
        postShockValueKobo: string;
    }>;
    chargeAdvisoryFee(input: {
        investorId: string;
        ledgerEntityCode: string;
        amountKobo: bigint;
        drAccountCodeOverride: string;
        crAccountCodeOverride: string;
        entryDate: Date;
        actorUserId: string;
    }): Promise<{
        journal: {
            lines: {
                id: string;
                description: string | null;
                journalEntryId: string;
                accountId: string;
                debitKobo: bigint;
                creditKobo: bigint;
            }[];
        } & {
            id: string;
            status: import("../../generated/prisma/enums").JournalEntryStatus;
            createdAt: Date;
            description: string;
            createdByUserId: string;
            ledgerEntityCode: string;
            journalReference: string;
            entryDate: Date;
            postedAt: Date | null;
            journalClass: import("../../generated/prisma/enums").JournalClass;
            divergenceType: string | null;
            adjustmentForBasis: import("../../generated/prisma/enums").AccountingBasis | null;
            interEntityRef: string | null;
            postingWorkflowInstanceId: string | null;
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
    private assertCapability;
}
