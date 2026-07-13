import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { WmService } from '../wm/wm.service';
import { NotificationService } from '../notification/notification.service';
import { DeclareZakatItemInput, DeclareZakatItemClientInput } from './zakat.types';
export declare class ZakatService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly workflow;
    private readonly wm;
    private readonly notification;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService, workflow: WorkflowEngineService, wm: WmService, notification: NotificationService);
    getNisabConfig(): Promise<{
        id: number;
        updatedAt: Date;
        approvedByUserId: string | null;
        approvedAt: Date | null;
        nisabGoldGrams: import("@prisma/client-runtime-utils").Decimal | null;
        goldPricePerGramKobo: bigint | null;
    }>;
    updateNisabConfig(nisabGoldGrams: number, goldPricePerGramKobo: bigint, actorUserId: string): Promise<{
        id: number;
        updatedAt: Date;
        approvedByUserId: string | null;
        approvedAt: Date | null;
        nisabGoldGrams: import("@prisma/client-runtime-utils").Decimal | null;
        goldPricePerGramKobo: bigint | null;
    } & {
        goldPricePerGramKobo: string | null;
    }>;
    private serializeNisabConfig;
    private getNisabThresholdKobo;
    activateSubscription(investorId: string, actorUserId: string): Promise<{
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
    deactivateSubscription(investorId: string, actorUserId: string): Promise<{
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
    electRateBasis(investorId: string, rateBasis: 'LUNAR' | 'GREGORIAN'): Promise<{
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
    isNisabBreached(investorId: string): Promise<{
        breached: boolean;
        totalWealthKobo: string;
        nisabThresholdKobo: string | null;
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
    isZakatTabActive(investorId: string): Promise<boolean>;
    requestSubscription(investorId: string, consentAcknowledged: boolean): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").ZakatSubscriptionRequestStatus;
        approvedByUserId: string | null;
        investorId: string;
        approvedAt: Date | null;
        consentAcknowledgedAt: Date;
        requestedAt: Date;
    }>;
    listPendingSubscriptionRequests(actorUserId: string): Promise<({
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
    approveSubscriptionRequest(requestId: string, actorUserId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").ZakatSubscriptionRequestStatus;
        approvedByUserId: string | null;
        investorId: string;
        approvedAt: Date | null;
        consentAcknowledgedAt: Date;
        requestedAt: Date;
    }>;
    createAssessmentSandbox(input: {
        investorId: string;
        assessmentDateGregorian: Date;
        assessmentDateHijri: string;
        createdByUserId: string;
    }): Promise<{
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
    clientAgreeToSandbox(runId: string, investorId: string): Promise<{
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
    }>;
    declareScheduleItem(input: DeclareZakatItemInput): Promise<{
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
    declareScheduleItemAsClient(investorId: string, input: DeclareZakatItemClientInput): Promise<{
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
    private declareScheduleItemCore;
    private systemPortalClientUserId;
    verifyScheduleItem(workflowInstanceId: string, verifierUserId: string): Promise<{
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
    private serializeItem;
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
    submitForCertification(runId: string, actorUserId: string): Promise<{
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
    certifyAssessment(workflowInstanceId: string, certifierUserId: string): Promise<{
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
    private serializeRun;
    private resolveAdvisorRecipients;
    runNisabBreachMonitor(): Promise<{
        checked: number;
        prompted: number;
    }>;
    private isAnniversaryToday;
    runAnnualReminderSweep(scheduledFor: Date): Promise<{
        checked: number;
        reminded: number;
    }>;
    listAssessmentsForInvestor(investorId: string): Promise<({
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
    getAssessmentDetail(runId: string, investorId: string): Promise<{
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
    getAssessmentDetailStaff(runId: string): Promise<{
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
    listPendingCertifications(actorUserId: string): Promise<({
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
    private computeVerifiedNetZakatableKobo;
    getZakatPositionForClient(investorId: string): Promise<{
        subscription: {
            isActive: true;
            rateBasisElection: import("../../generated/prisma/enums").ZakatRateBasis | null;
        };
        assessment: null;
        oneSeventeenTotalKobo: string;
        composition: {
            scheduleType: string;
            zakatability: "ZAKATABLE";
            amountKobo: string;
            verificationTag: "VERIFIED";
            declarationSource: null;
        }[];
        nisab: {
            breached: boolean;
            totalWealthKobo: string;
            nisabThresholdKobo: string | null;
        };
        verifiedNetZakatableKobo: string;
        officialNetZakatableKobo: null;
        officialZakatDueKobo: null;
        items: never[];
    } | {
        subscription: {
            isActive: true;
            rateBasisElection: import("../../generated/prisma/enums").ZakatRateBasis | null;
        };
        assessment: {
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
        oneSeventeenTotalKobo: string;
        composition: ({
            scheduleType: string;
            zakatability: string;
            amountKobo: string;
            verificationTag: string;
            declarationSource: string;
        } | {
            scheduleType: string;
            zakatability: "ZAKATABLE";
            amountKobo: string;
            verificationTag: "VERIFIED";
            declarationSource: null;
        })[];
        nisab: {
            breached: boolean;
            totalWealthKobo: string;
            nisabThresholdKobo: string | null;
        };
        verifiedNetZakatableKobo: string;
        officialNetZakatableKobo: string | null;
        officialZakatDueKobo: string | null;
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
    getPortfolioAdvisoryFeed(investorId: string, actorUserId: string): Promise<{
        isActive: boolean;
        totalAssetSizeKobo: string;
        mixByScheduleType: Record<string, string>;
    }>;
    private assertCapability;
}
