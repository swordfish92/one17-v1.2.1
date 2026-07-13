import type { AuthenticatedUser } from '../auth/auth.types';
import { ZakatService } from '../zakat/zakat.service';
import { UpdateZakatNisabConfigDto, CreateZakatAssessmentDto, DeclareZakatScheduleItemDto } from './ops-api.types';
export declare class ZakatController {
    private readonly zakat;
    constructor(zakat: ZakatService);
    getNisabConfig(): Promise<{
        id: number;
        updatedAt: Date;
        approvedByUserId: string | null;
        approvedAt: Date | null;
        nisabGoldGrams: import("@prisma/client-runtime-utils").Decimal | null;
        goldPricePerGramKobo: bigint | null;
    }>;
    updateNisabConfig(dto: UpdateZakatNisabConfigDto, user: AuthenticatedUser): Promise<{
        id: number;
        updatedAt: Date;
        approvedByUserId: string | null;
        approvedAt: Date | null;
        nisabGoldGrams: import("@prisma/client-runtime-utils").Decimal | null;
        goldPricePerGramKobo: bigint | null;
    } & {
        goldPricePerGramKobo: string | null;
    }>;
    listActiveSubscriptions(): Promise<({
        investor: {
            fullLegalName: string;
            contactEmail: string;
        };
    } & {
        investorId: string;
        isActive: boolean;
        rateBasisElection: import("../../generated/prisma/enums").ZakatRateBasis | null;
        zakatAnniversaryGregorian: Date | null;
        zakatAnniversaryHijri: string | null;
        activatedByUserId: string;
        activatedAt: Date;
        deactivatedByUserId: string | null;
        deactivatedAt: Date | null;
    })[]>;
    activateSubscription(investorId: string, user: AuthenticatedUser): Promise<{
        investorId: string;
        isActive: boolean;
        rateBasisElection: import("../../generated/prisma/enums").ZakatRateBasis | null;
        zakatAnniversaryGregorian: Date | null;
        zakatAnniversaryHijri: string | null;
        activatedByUserId: string;
        activatedAt: Date;
        deactivatedByUserId: string | null;
        deactivatedAt: Date | null;
    }>;
    deactivateSubscription(investorId: string, user: AuthenticatedUser): Promise<{
        investorId: string;
        isActive: boolean;
        rateBasisElection: import("../../generated/prisma/enums").ZakatRateBasis | null;
        zakatAnniversaryGregorian: Date | null;
        zakatAnniversaryHijri: string | null;
        activatedByUserId: string;
        activatedAt: Date;
        deactivatedByUserId: string | null;
        deactivatedAt: Date | null;
    }>;
    getNisabStatus(investorId: string): Promise<{
        breached: boolean;
        totalWealthKobo: string;
        nisabThresholdKobo: string | null;
    }>;
    createAssessment(investorId: string, dto: CreateZakatAssessmentDto, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").ZakatAssessmentStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        createdByUserId: string;
        investorId: string;
        certifiedByUserId: string | null;
        assessmentDateGregorian: Date;
        assessmentDateHijri: string;
        rateBasis: import("../../generated/prisma/enums").ZakatRateBasis;
        oneSeventeenBalancesSnapshot: import("@prisma/client/runtime/client").JsonValue;
        netZakatableKobo: bigint | null;
        zakatDueKobo: bigint | null;
        certifiedAt: Date | null;
    } & {
        netZakatableKobo: string | null;
        zakatDueKobo: string | null;
    }>;
    listAssessmentsForClient(investorId: string): Promise<({
        id: string;
        status: import("../../generated/prisma/enums").ZakatAssessmentStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        createdByUserId: string;
        investorId: string;
        certifiedByUserId: string | null;
        assessmentDateGregorian: Date;
        assessmentDateHijri: string;
        rateBasis: import("../../generated/prisma/enums").ZakatRateBasis;
        oneSeventeenBalancesSnapshot: import("@prisma/client/runtime/client").JsonValue;
        netZakatableKobo: bigint | null;
        zakatDueKobo: bigint | null;
        certifiedAt: Date | null;
    } & {
        netZakatableKobo: string | null;
        zakatDueKobo: string | null;
    })[]>;
    getAssessmentDetail(runId: string): Promise<{
        run: {
            items: {
                id: string;
                createdAt: Date;
                description: string;
                workflowInstanceId: string | null;
                amountKobo: bigint;
                verifiedByUserId: string | null;
                custodyFlag: import("../../generated/prisma/enums").WmCustodyFlag;
                verificationTag: import("../../generated/prisma/enums").WmVerificationTag;
                verifiedAt: Date | null;
                declaredByUserId: string | null;
                zakatAssessmentRunId: string;
                scheduleType: import("../../generated/prisma/enums").ZakatScheduleType;
                zakatability: import("../../generated/prisma/enums").ZakatItemZakatability;
                declarationSource: import("../../generated/prisma/enums").ZakatDeclarationSource;
            }[];
        } & {
            id: string;
            status: import("../../generated/prisma/enums").ZakatAssessmentStatus;
            createdAt: Date;
            workflowInstanceId: string | null;
            createdByUserId: string;
            investorId: string;
            certifiedByUserId: string | null;
            assessmentDateGregorian: Date;
            assessmentDateHijri: string;
            rateBasis: import("../../generated/prisma/enums").ZakatRateBasis;
            oneSeventeenBalancesSnapshot: import("@prisma/client/runtime/client").JsonValue;
            netZakatableKobo: bigint | null;
            zakatDueKobo: bigint | null;
            certifiedAt: Date | null;
        } & {
            netZakatableKobo: string | null;
            zakatDueKobo: string | null;
        };
        items: ({
            id: string;
            createdAt: Date;
            description: string;
            workflowInstanceId: string | null;
            amountKobo: bigint;
            verifiedByUserId: string | null;
            custodyFlag: import("../../generated/prisma/enums").WmCustodyFlag;
            verificationTag: import("../../generated/prisma/enums").WmVerificationTag;
            verifiedAt: Date | null;
            declaredByUserId: string | null;
            zakatAssessmentRunId: string;
            scheduleType: import("../../generated/prisma/enums").ZakatScheduleType;
            zakatability: import("../../generated/prisma/enums").ZakatItemZakatability;
            declarationSource: import("../../generated/prisma/enums").ZakatDeclarationSource;
        } & {
            amountKobo: string;
        })[];
    }>;
    declareScheduleItem(runId: string, dto: DeclareZakatScheduleItemDto, user: AuthenticatedUser): Promise<{
        item: {
            id: string;
            createdAt: Date;
            description: string;
            workflowInstanceId: string | null;
            amountKobo: bigint;
            verifiedByUserId: string | null;
            custodyFlag: import("../../generated/prisma/enums").WmCustodyFlag;
            verificationTag: import("../../generated/prisma/enums").WmVerificationTag;
            verifiedAt: Date | null;
            declaredByUserId: string | null;
            zakatAssessmentRunId: string;
            scheduleType: import("../../generated/prisma/enums").ZakatScheduleType;
            zakatability: import("../../generated/prisma/enums").ZakatItemZakatability;
            declarationSource: import("../../generated/prisma/enums").ZakatDeclarationSource;
        } & {
            amountKobo: string;
        };
        workflowInstance: any;
    }>;
    computeAssessment(runId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").ZakatAssessmentStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        createdByUserId: string;
        investorId: string;
        certifiedByUserId: string | null;
        assessmentDateGregorian: Date;
        assessmentDateHijri: string;
        rateBasis: import("../../generated/prisma/enums").ZakatRateBasis;
        oneSeventeenBalancesSnapshot: import("@prisma/client/runtime/client").JsonValue;
        netZakatableKobo: bigint | null;
        zakatDueKobo: bigint | null;
        certifiedAt: Date | null;
    } & {
        netZakatableKobo: string | null;
        zakatDueKobo: string | null;
    }>;
    submitForCertification(runId: string, user: AuthenticatedUser): Promise<{
        run: {
            id: string;
            status: import("../../generated/prisma/enums").ZakatAssessmentStatus;
            createdAt: Date;
            workflowInstanceId: string | null;
            createdByUserId: string;
            investorId: string;
            certifiedByUserId: string | null;
            assessmentDateGregorian: Date;
            assessmentDateHijri: string;
            rateBasis: import("../../generated/prisma/enums").ZakatRateBasis;
            oneSeventeenBalancesSnapshot: import("@prisma/client/runtime/client").JsonValue;
            netZakatableKobo: bigint | null;
            zakatDueKobo: bigint | null;
            certifiedAt: Date | null;
        } & {
            netZakatableKobo: string | null;
            zakatDueKobo: string | null;
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
    listPendingCertifications(user: AuthenticatedUser): Promise<({
        subscription: {
            investor: {
                fullLegalName: string;
            };
        } & {
            investorId: string;
            isActive: boolean;
            rateBasisElection: import("../../generated/prisma/enums").ZakatRateBasis | null;
            zakatAnniversaryGregorian: Date | null;
            zakatAnniversaryHijri: string | null;
            activatedByUserId: string;
            activatedAt: Date;
            deactivatedByUserId: string | null;
            deactivatedAt: Date | null;
        };
    } & {
        id: string;
        status: import("../../generated/prisma/enums").ZakatAssessmentStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        createdByUserId: string;
        investorId: string;
        certifiedByUserId: string | null;
        assessmentDateGregorian: Date;
        assessmentDateHijri: string;
        rateBasis: import("../../generated/prisma/enums").ZakatRateBasis;
        oneSeventeenBalancesSnapshot: import("@prisma/client/runtime/client").JsonValue;
        netZakatableKobo: bigint | null;
        zakatDueKobo: bigint | null;
        certifiedAt: Date | null;
    } & {
        netZakatableKobo: string | null;
        zakatDueKobo: string | null;
    })[]>;
    listPendingSubscriptionRequests(user: AuthenticatedUser): Promise<({
        investor: {
            fullLegalName: string;
            contactEmail: string;
        };
    } & {
        id: string;
        status: import("../../generated/prisma/enums").ZakatSubscriptionRequestStatus;
        approvedByUserId: string | null;
        investorId: string;
        approvedAt: Date | null;
        consentAcknowledgedAt: Date;
        requestedAt: Date;
    })[]>;
    approveSubscriptionRequest(requestId: string, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").ZakatSubscriptionRequestStatus;
        approvedByUserId: string | null;
        investorId: string;
        approvedAt: Date | null;
        consentAcknowledgedAt: Date;
        requestedAt: Date;
    }>;
    getPortfolioAdvisoryFeed(investorId: string, user: AuthenticatedUser): Promise<{
        isActive: boolean;
        totalAssetSizeKobo: string;
        mixByScheduleType: Record<string, string>;
    }>;
}
