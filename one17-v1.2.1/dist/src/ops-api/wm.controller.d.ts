import type { AuthenticatedUser } from '../auth/auth.types';
import { PrismaService } from '../prisma/prisma.service';
import { WmService } from '../wm/wm.service';
import { PortalAuthService } from '../portal-auth/portal-auth.service';
import { OnboardWmClientDto, DeclareClientAssetDto, SetShariahScreenDto, SetAllocationPolicyDto, SetRiskProfileDto, SetGrowthPlanDto, CreateAdvisoryRecordDto, RunSandboxRiskAssessmentDto, ChargeAdvisoryFeeDto, UpdateWmFxRateDto } from './ops-api.types';
export declare class WmController {
    private readonly wm;
    private readonly portalAuth;
    private readonly prisma;
    constructor(wm: WmService, portalAuth: PortalAuthService, prisma: PrismaService);
    listAssetClasses(): Promise<{
        createdAt: Date;
        code: string;
        isActive: boolean;
        label: string;
        custodyDefault: import("../../generated/prisma/enums").WmCustodyFlag;
        shariahScreeningRule: string | null;
    }[]>;
    listStressScenarios(): Promise<{
        id: string;
        status: string;
        createdAt: Date;
        version: number;
        label: string;
        scenarioCode: string;
        shockPctByAssetClass: import("@prisma/client/runtime/client").JsonValue;
    }[]>;
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
    listPreWmProspects(): Promise<{
        investorId: string;
        fullLegalName: string;
        contactEmail: string;
    }[]>;
    preWmPyramid(investorId: string): Promise<{
        tiers: {
            tier: import("../wm/wm.types").NwcsTier;
            sortOrder: number;
            serviceDescriptor: string;
            minTotalWealthUsd: number;
            minTotalWealthKobo: string;
        }[];
        clientTier: import("../wm/wm.types").NwcsTier;
        clientTotalWealthKobo: string;
        atOrAboveCeiling: boolean;
        isWmClient: boolean;
    }>;
    clientDashboard(investorId: string): Promise<{
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
    onboardClient(investorId: string, dto: OnboardWmClientDto, user: AuthenticatedUser): Promise<{
        profile: {
            investorId: string;
            onboardedByUserId: string;
            portalProvisionedAt: Date | null;
            currentTier: import("../../generated/prisma/enums").WmClientTier;
            tierUpdatedAt: Date;
            advisorUserId: string | null;
            onboardedAt: Date;
        };
        portal: {
            portalUserId: string;
            bootstrapPassword: string;
        };
    }>;
    recomputeTier(investorId: string): Promise<{
        tier: string;
        changed: boolean;
    }>;
    declareAsset(investorId: string, dto: DeclareClientAssetDto, user: AuthenticatedUser): Promise<{
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
    nwcsPyramid(investorId: string): Promise<{
        tiers: {
            tier: import("../wm/wm.types").NwcsTier;
            sortOrder: number;
            serviceDescriptor: string;
            minTotalWealthUsd: number;
            minTotalWealthKobo: string;
        }[];
        clientTier: import("../../generated/prisma/enums").WmClientTier;
        clientTotalWealthKobo: string;
    }>;
    holdingDetailStaff(assetId: string, investorId: string): Promise<{
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
    getFxConfig(): Promise<{
        id: number;
        updatedAt: Date;
        updatedByUserId: string | null;
        nairaPerUsd: import("@prisma/client-runtime-utils").Decimal;
    }>;
    updateFxRate(dto: UpdateWmFxRateDto, user: AuthenticatedUser): Promise<{
        id: number;
        updatedAt: Date;
        updatedByUserId: string | null;
        nairaPerUsd: import("@prisma/client-runtime-utils").Decimal;
    }>;
    listPendingHoldingActionRequests(user: AuthenticatedUser): Promise<{
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
    actionHoldingRequest(id: string, user: AuthenticatedUser): Promise<{
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
    setShariahScreen(assetId: string, dto: SetShariahScreenDto, user: AuthenticatedUser): Promise<{
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
    setAllocationPolicy(investorId: string, dto: SetAllocationPolicyDto, user: AuthenticatedUser): Promise<any>;
    setRiskProfile(investorId: string, dto: SetRiskProfileDto, user: AuthenticatedUser): Promise<any>;
    setGrowthPlan(investorId: string, dto: SetGrowthPlanDto, user: AuthenticatedUser): Promise<any>;
    createAdvisoryRecord(investorId: string, dto: CreateAdvisoryRecordDto, user: AuthenticatedUser): Promise<{
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
    runSandboxRiskAssessment(investorId: string, dto: RunSandboxRiskAssessmentDto, user: AuthenticatedUser): Promise<{
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
    publishRiskAssessment(runId: string, user: AuthenticatedUser): Promise<{
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
    chargeAdvisoryFee(investorId: string, dto: ChargeAdvisoryFeeDto, user: AuthenticatedUser): Promise<{
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
}
