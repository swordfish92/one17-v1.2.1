import { StreamableFile } from '@nestjs/common';
import type { AuthenticatedPortalUser } from '../portal-auth/portal-auth.types';
import { CounterpartyService } from '../counterparty/counterparty.service';
import { ComplaintService } from '../complaint/complaint.service';
import { BureauGatewayService } from '../bureau-gateway/bureau-gateway.service';
import { LetterService } from '../letter/letter.service';
import { PortalRequestRestructureDto, PortalSubmitEnquiryDto, PortalRaiseComplaintDto, PortalUploadFacilityDocumentDto } from './portal-counterparty.types';
export declare class PortalCounterpartyController {
    private readonly counterparty;
    private readonly complaints;
    private readonly bureauGateway;
    private readonly letters;
    constructor(counterparty: CounterpartyService, complaints: ComplaintService, bureauGateway: BureauGatewayService, letters: LetterService);
    private assertCounterparty;
    dashboard(user: AuthenticatedPortalUser): Promise<{
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
    submitEnquiry(dto: PortalSubmitEnquiryDto, user: AuthenticatedPortalUser): Promise<{
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
    }>;
    requestRestructure(dto: PortalRequestRestructureDto, user: AuthenticatedPortalUser): Promise<{
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
    }>;
    raiseComplaint(dto: PortalRaiseComplaintDto, user: AuthenticatedPortalUser): Promise<{
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
    submitFacilityApplication(dto: {
        requestedAmountKobo: string;
        purpose: string;
    }, user: AuthenticatedPortalUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").FacilityApplicationStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        counterpartyId: string;
        disbursedByUserId: string | null;
        disbursedAt: Date | null;
        requestedAmountKobo: bigint;
        purpose: string;
        targetedReturnPct: import("@prisma/client-runtime-utils").Decimal | null;
        termsRecordedByUserId: string | null;
        termsRecordedAt: Date | null;
    }>;
    uploadFacilityApplicationDocument(id: string, dto: PortalUploadFacilityDocumentDto, user: AuthenticatedPortalUser): Promise<{
        id: string;
        entityType: string;
        entityId: string;
        documentType: string;
        fileReference: string;
        uploadedByUserId: string | null;
        uploadedByCounterpartyId: string | null;
        uploadedAt: Date;
    }>;
    listFacilityApplicationDocuments(id: string, user: AuthenticatedPortalUser): Promise<({
        uploadedBy: {
            displayName: string;
        } | null;
    } & {
        id: string;
        entityType: string;
        entityId: string;
        documentType: string;
        fileReference: string;
        uploadedByUserId: string | null;
        uploadedByCounterpartyId: string | null;
        uploadedAt: Date;
    })[]>;
    getFacilityApplicationChecklist(id: string, user: AuthenticatedPortalUser): Promise<{
        required: string[];
        uploadedTypes: string[];
        missing: string[];
        complete: boolean;
    }>;
    listBureauPulls(user: AuthenticatedPortalUser): Promise<({
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
}
