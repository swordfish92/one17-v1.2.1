import { StreamableFile } from '@nestjs/common';
import type { AuthenticatedPortalUser } from '../portal-auth/portal-auth.types';
import { WmService } from '../wm/wm.service';
import { ComplaintService } from '../complaint/complaint.service';
import { StatementService } from '../statement/statement.service';
import { CertificateService } from '../certificate/certificate.service';
import { LetterService } from '../letter/letter.service';
import { PaymentGatewayService } from '../payment-gateway/payment-gateway.service';
import { SubscriptionService } from '../subscription/subscription.service';
import { NotificationService } from '../notification/notification.service';
import { OffersService } from '../product/offers.service';
import { MarketingService } from '../marketing/marketing.service';
import { RespondToAdvisoryDto, RaiseComplaintDto, SubmitHoldingActionRequestDto, RequestProductRedemptionDto, PortalSubscribeToOfferDto } from './portal-wm.types';
export declare class PortalWmController {
    private readonly wm;
    private readonly complaints;
    private readonly statements;
    private readonly certificates;
    private readonly letters;
    private readonly paymentGateway;
    private readonly subscriptions;
    private readonly notifications;
    private readonly offers;
    private readonly marketing;
    constructor(wm: WmService, complaints: ComplaintService, statements: StatementService, certificates: CertificateService, letters: LetterService, paymentGateway: PaymentGatewayService, subscriptions: SubscriptionService, notifications: NotificationService, offers: OffersService, marketing: MarketingService);
    private assertInvestor;
    dashboard(user: AuthenticatedPortalUser): Promise<{
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
    }>;
    respondToAdvisory(id: string, dto: RespondToAdvisoryDto, user: AuthenticatedPortalUser): Promise<{
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
    acknowledgeAllocationPolicy(id: string, user: AuthenticatedPortalUser): Promise<any>;
    acknowledgeRiskProfile(id: string, user: AuthenticatedPortalUser): Promise<any>;
    acknowledgeGrowthPlan(id: string, user: AuthenticatedPortalUser): Promise<any>;
    nwcsPyramid(user: AuthenticatedPortalUser): Promise<{
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
    holdingDetail(assetId: string, user: AuthenticatedPortalUser): Promise<{
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
    requestTopUp(assetId: string, dto: SubmitHoldingActionRequestDto, user: AuthenticatedPortalUser): Promise<{
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
    requestRedemption(assetId: string, dto: SubmitHoldingActionRequestDto, user: AuthenticatedPortalUser): Promise<{
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
    raiseComplaint(dto: RaiseComplaintDto, user: AuthenticatedPortalUser): Promise<{
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
    }>;
    listStatementAccounts(user: AuthenticatedPortalUser): Promise<import("../statement/statement.types").StatementAccountSummary[]>;
    downloadStatement(kind: 'PRODUCT' | 'MANDATE', id: string, periodStart: string | undefined, periodEnd: string | undefined, user: AuthenticatedPortalUser): Promise<StreamableFile>;
    listCertificates(user: AuthenticatedPortalUser): Promise<{
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
    downloadCertificate(id: string, user: AuthenticatedPortalUser): Promise<StreamableFile>;
    listLetters(user: AuthenticatedPortalUser): Promise<{
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
    downloadLetter(id: string, user: AuthenticatedPortalUser): Promise<StreamableFile>;
    depositInstructions(productCode: string, user: AuthenticatedPortalUser): Promise<{
        gatewayName: string;
        custodianBankName: string;
        custodianAccountNumber: string;
        depositReference: string;
    }>;
    requestProductRedemption(productAccountId: string, dto: RequestProductRedemptionDto, user: AuthenticatedPortalUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").SubscriptionRequestStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        amountKobo: bigint;
        initiatedByUserId: string;
        decidedAt: Date | null;
        productCode: string;
        investorId: string;
        effectiveDate: Date;
        requestType: import("../../generated/prisma/enums").SubscriptionRequestType;
        computedUnits: import("@prisma/client-runtime-utils").Decimal | null;
        navPerUnitUsed: import("@prisma/client-runtime-utils").Decimal | null;
        resultProductAccountId: string | null;
        resultNdMandateAccountId: string | null;
        rejectionReason: string | null;
    }>;
    principalProfitBreakdown(user: AuthenticatedPortalUser): Promise<{
        accounts: {
            productAccountId: string;
            productCode: string;
            principalKobo: string;
            profitKobo: string | null;
        }[];
        totalPrincipalKobo: string;
        totalProfitKobo: string;
    }>;
    listNotifications(user: AuthenticatedPortalUser): Promise<{
        id: string;
        createdAt: Date;
        title: string;
        recipientUserId: string | null;
        recipientInvestorId: string | null;
        type: import("../../generated/prisma/enums").NotificationType;
        body: string;
        linkPath: string | null;
        isRead: boolean;
    }[]>;
    markNotificationRead(id: string, user: AuthenticatedPortalUser): Promise<{
        id: string;
        createdAt: Date;
        title: string;
        recipientUserId: string | null;
        recipientInvestorId: string | null;
        type: import("../../generated/prisma/enums").NotificationType;
        body: string;
        linkPath: string | null;
        isRead: boolean;
    }>;
    listOffers(user: AuthenticatedPortalUser): Promise<import("../product/offers.types").OfferCard[]>;
    getOfferDetail(productCode: string, user: AuthenticatedPortalUser): Promise<import("../product/offers.types").OfferCard>;
    listOfferPublications(user: AuthenticatedPortalUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        version: number;
        proposedByUserId: string;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        fileReference: string;
        title: string;
        resourceType: string;
    }[]>;
    subscribeToOffer(productCode: string, dto: PortalSubscribeToOfferDto, user: AuthenticatedPortalUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").SubscriptionRequestStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        amountKobo: bigint;
        initiatedByUserId: string;
        decidedAt: Date | null;
        productCode: string;
        investorId: string;
        effectiveDate: Date;
        requestType: import("../../generated/prisma/enums").SubscriptionRequestType;
        computedUnits: import("@prisma/client-runtime-utils").Decimal | null;
        navPerUnitUsed: import("@prisma/client-runtime-utils").Decimal | null;
        resultProductAccountId: string | null;
        resultNdMandateAccountId: string | null;
        rejectionReason: string | null;
    }>;
}
