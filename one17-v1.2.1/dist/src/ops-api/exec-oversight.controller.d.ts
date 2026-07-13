import type { AuthenticatedUser } from '../auth/auth.types';
import { ExecOversightService } from '../exec-oversight/exec-oversight.service';
import { WmService } from '../wm/wm.service';
import { CounterpartyService } from '../counterparty/counterparty.service';
import { StatementService } from '../statement/statement.service';
import { CertificateService } from '../certificate/certificate.service';
import { LetterService } from '../letter/letter.service';
import { ClientMessagingService } from '../client-messaging/client-messaging.service';
import { BureauGatewayService } from '../bureau-gateway/bureau-gateway.service';
import { StartOversightSessionDto, ProposeOversightPolicyDto } from './ops-api.types';
export declare class ExecOversightController {
    private readonly execOversight;
    private readonly wm;
    private readonly counterparty;
    private readonly statements;
    private readonly certificates;
    private readonly letters;
    private readonly messaging;
    private readonly bureauGateway;
    constructor(execOversight: ExecOversightService, wm: WmService, counterparty: CounterpartyService, statements: StatementService, certificates: CertificateService, letters: LetterService, messaging: ClientMessagingService, bureauGateway: BureauGatewayService);
    startSession(dto: StartOversightSessionDto, user: AuthenticatedUser, ip: string): Promise<{
        id: string;
        ipAddress: string | null;
        investorId: string | null;
        counterpartyId: string | null;
        startedAt: Date;
        principalType: import("../../generated/prisma/enums").OversightPrincipalType;
        viewedByUserId: string;
        endedAt: Date | null;
    }>;
    endSession(id: string, user: AuthenticatedUser): Promise<{
        id: string;
        ipAddress: string | null;
        investorId: string | null;
        counterpartyId: string | null;
        startedAt: Date;
        principalType: import("../../generated/prisma/enums").OversightPrincipalType;
        viewedByUserId: string;
        endedAt: Date | null;
    }>;
    listLog(): Promise<({
        investor: {
            fullLegalName: string;
        } | null;
        counterparty: {
            legalName: string;
        } | null;
        viewedByUser: {
            email: string;
            displayName: string;
        };
    } & {
        id: string;
        ipAddress: string | null;
        investorId: string | null;
        counterpartyId: string | null;
        startedAt: Date;
        principalType: import("../../generated/prisma/enums").OversightPrincipalType;
        viewedByUserId: string;
        endedAt: Date | null;
    })[]>;
    private resolveSession;
    dashboard(id: string, user: AuthenticatedUser): Promise<{
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
    } | {
        profile: {
            counterpartyId: string;
            legalName: string;
            contactEmail: string | null;
        };
        transactionSummary: {
            count: number;
            totalAmountKobo: string;
        };
        transactions: {
            amountKobo: string;
            unitPriceKobo: string | null;
            id: string;
            status: import("../../generated/prisma/enums").TxnStatus;
            createdAt: Date;
            ledgerEntityCode: string;
            counterpartyId: string | null;
            postedJournalEntryId: string | null;
            productAccountId: string | null;
            txnType: import("../../generated/prisma/enums").TxnType;
            valueDate: Date;
            unitsQty: import("@prisma/client-runtime-utils").Decimal | null;
            makerUserId: string;
            checkerUserId: string | null;
            migrationSourceSystem: string | null;
            migrationSourceDocumentRef: string | null;
        }[];
        documents: {
            id: string;
            entityType: string;
            entityId: string;
            documentType: string;
            fileReference: string;
            uploadedByUserId: string | null;
            uploadedByCounterpartyId: string | null;
            uploadedAt: Date;
        }[];
        communications: {
            id: string;
            occurredAt: Date;
            createdAt: Date;
            investorId: string | null;
            counterpartyId: string | null;
            summary: string;
            direction: import("../../generated/prisma/enums").CommunicationDirection;
            leadId: string | null;
            channel: string;
            subject: string | null;
            routedToFunctionCode: string | null;
            loggedByUserId: string | null;
        }[];
        restructureRequests: {
            id: string;
            status: import("../../generated/prisma/enums").CounterpartyRestructureRequestStatus;
            createdAt: Date;
            reason: string;
            workflowInstanceId: string | null;
            decidedAt: Date | null;
            counterpartyId: string;
            requestType: import("../../generated/prisma/enums").CounterpartyRestructureRequestType;
            decidedByUserId: string | null;
            decisionNotes: string | null;
            obligationId: string | null;
            extensionMonths: number | null;
        }[];
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
        facilityApplications: import("../counterparty/counterparty.types").FacilityApplicationProgress[];
        repaymentObligations: {
            amountKobo: string;
            id: string;
            status: import("../../generated/prisma/enums").RepaymentObligationStatus;
            createdAt: Date;
            createdByUserId: string;
            counterpartyId: string;
            paidAt: Date | null;
            facilityApplicationId: string | null;
            dueDate: Date;
            paidByUserId: string | null;
        }[];
        restructuringRequestsEnabled: boolean;
    }>;
    statementAccounts(id: string, user: AuthenticatedUser): Promise<import("../statement/statement.types").StatementAccountSummary[]>;
    certificateList(id: string, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").CertificateStatus;
        createdAt: Date;
        investorId: string;
        certificateNumber: string | null;
        productAccountId: string | null;
        ndMandateAccountId: string | null;
        productClass: import("../../generated/prisma/enums").CertificateProductClass;
        dataSnapshot: import("@prisma/client/runtime/client").JsonValue;
        pdfBytes: import("@prisma/client/runtime/client").Bytes | null;
        documentRegisterEntryId: string | null;
        templateId: string | null;
        issuedAt: Date | null;
    }[]>;
    letterList(id: string, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").LetterInstanceStatus;
        createdAt: Date;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        investorId: string | null;
        rejectionNotes: string | null;
        counterpartyId: string | null;
        productAccountId: string | null;
        ndMandateAccountId: string | null;
        pdfBytes: import("@prisma/client/runtime/client").Bytes | null;
        documentRegisterEntryId: string | null;
        templateId: string;
        issuedAt: Date | null;
        letterType: string;
        mergedBody: string;
        generatedByUserId: string;
    }[]>;
    messages(id: string, user: AuthenticatedUser): Promise<({
        loggedBy: {
            displayName: string;
        } | null;
    } & {
        id: string;
        occurredAt: Date;
        createdAt: Date;
        investorId: string | null;
        counterpartyId: string | null;
        summary: string;
        direction: import("../../generated/prisma/enums").CommunicationDirection;
        leadId: string | null;
        channel: string;
        subject: string | null;
        routedToFunctionCode: string | null;
        loggedByUserId: string | null;
    })[]>;
    bureauPulls(id: string, user: AuthenticatedUser): Promise<({
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
    listPolicies(): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        version: number;
        proposedByUserId: string;
        approvedByUserId: string | null;
        approvedAt: Date | null;
        grantedRoleCodes: import("@prisma/client/runtime/client").JsonValue;
    }[]>;
    proposePolicy(dto: ProposeOversightPolicyDto, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        version: number;
        proposedByUserId: string;
        approvedByUserId: string | null;
        approvedAt: Date | null;
        grantedRoleCodes: import("@prisma/client/runtime/client").JsonValue;
    }>;
    approvePolicy(id: string, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        version: number;
        proposedByUserId: string;
        approvedByUserId: string | null;
        approvedAt: Date | null;
        grantedRoleCodes: import("@prisma/client/runtime/client").JsonValue;
    }>;
}
