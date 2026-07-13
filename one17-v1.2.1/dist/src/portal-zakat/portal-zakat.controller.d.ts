import type { AuthenticatedPortalUser } from '../portal-auth/portal-auth.types';
import { PrismaService } from '../prisma/prisma.service';
import { ZakatService } from '../zakat/zakat.service';
import { ElectZakatRateBasisDto, RequestZakatSubscriptionDto, DeclareZakatScheduleItemClientDto } from './portal-zakat.types';
export declare class PortalZakatController {
    private readonly zakat;
    private readonly prisma;
    constructor(zakat: ZakatService, prisma: PrismaService);
    private assertInvestor;
    getSubscription(user: AuthenticatedPortalUser): Promise<{
        investorId: string;
        isActive: boolean;
        rateBasisElection: import("../../generated/prisma/enums").ZakatRateBasis | null;
        zakatAnniversaryGregorian: Date | null;
        zakatAnniversaryHijri: string | null;
        activatedByUserId: string;
        activatedAt: Date;
        deactivatedByUserId: string | null;
        deactivatedAt: Date | null;
    } | null>;
    electRateBasis(dto: ElectZakatRateBasisDto, user: AuthenticatedPortalUser): Promise<{
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
    listAssessments(user: AuthenticatedPortalUser): Promise<({
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
    getAssessmentDetail(runId: string, user: AuthenticatedPortalUser): Promise<{
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
    agreeToSandbox(runId: string, user: AuthenticatedPortalUser): Promise<{
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
    requestSubscription(dto: RequestZakatSubscriptionDto, user: AuthenticatedPortalUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").ZakatSubscriptionRequestStatus;
        approvedByUserId: string | null;
        investorId: string;
        approvedAt: Date | null;
        consentAcknowledgedAt: Date;
        requestedAt: Date;
    }>;
    getPosition(user: AuthenticatedPortalUser): Promise<{
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
    declareScheduleItem(runId: string, dto: DeclareZakatScheduleItemClientDto, user: AuthenticatedPortalUser): Promise<{
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
}
