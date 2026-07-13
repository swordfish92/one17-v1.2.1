import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { LetterService } from '../letter/letter.service';
import { ApproveTaxRateVersionInput, AssessStampDutyInput, ComputeVatInput, ComputeVatResult, ComputeWhtInput, ComputeWhtResult, ConfigureRemittanceDueDateInput, ConfigureTaxGlMappingInput, CreateFeeInvoiceInput, GrantExemptionInput, ProposeTaxRateVersionInput, RecognizeVendorInvoiceVatInput, TaxTypeCode } from './tax.types';
export declare class TaxService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly workflow;
    private readonly letter;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService, workflow: WorkflowEngineService, letter: LetterService);
    listRateVersions(taxType?: TaxTypeCode): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        version: number;
        proposedByUserId: string;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        effectiveFrom: Date;
        taxType: import("../../generated/prisma/enums").TaxType;
        rates: import("@prisma/client/runtime/client").JsonValue;
    }[]>;
    proposeRateVersion(input: ProposeTaxRateVersionInput): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        version: number;
        proposedByUserId: string;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        effectiveFrom: Date;
        taxType: import("../../generated/prisma/enums").TaxType;
        rates: import("@prisma/client/runtime/client").JsonValue;
    }>;
    approveRateVersion(input: ApproveTaxRateVersionInput): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        version: number;
        proposedByUserId: string;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        effectiveFrom: Date;
        taxType: import("../../generated/prisma/enums").TaxType;
        rates: import("@prisma/client/runtime/client").JsonValue;
    } | null>;
    private validateRateShape;
    private getEffectiveVersion;
    grantExemption(input: GrantExemptionInput): Promise<{
        id: string;
        createdAt: Date;
        reason: string;
        investorId: string;
        taxType: import("../../generated/prisma/enums").TaxType;
        grantedByUserId: string;
    }>;
    revokeExemption(investorId: string, taxType: TaxTypeCode, actorUserId: string): Promise<{
        id: string;
        createdAt: Date;
        reason: string;
        investorId: string;
        taxType: import("../../generated/prisma/enums").TaxType;
        grantedByUserId: string;
    } | null>;
    listExemptions(taxType?: TaxTypeCode): Promise<({
        investor: {
            fullLegalName: string;
        };
    } & {
        id: string;
        createdAt: Date;
        reason: string;
        investorId: string;
        taxType: import("../../generated/prisma/enums").TaxType;
        grantedByUserId: string;
    })[]>;
    computeWht(input: ComputeWhtInput): Promise<ComputeWhtResult>;
    computeVat(input: ComputeVatInput): Promise<ComputeVatResult>;
    createFeeInvoice(input: CreateFeeInvoiceInput): Promise<{
        id: string;
        createdAt: Date;
        description: string;
        createdByUserId: string;
        investorId: string | null;
        counterpartyId: string | null;
        invoiceNumber: string;
        invoiceDate: Date;
        vatKobo: bigint;
        feeAmountKobo: bigint;
        vatRateVersionId: string | null;
        totalKobo: bigint;
    }>;
    listFeeInvoices(): Promise<({
        investor: {
            fullLegalName: string;
        } | null;
        counterparty: {
            legalName: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        description: string;
        createdByUserId: string;
        investorId: string | null;
        counterpartyId: string | null;
        invoiceNumber: string;
        invoiceDate: Date;
        vatKobo: bigint;
        feeAmountKobo: bigint;
        vatRateVersionId: string | null;
        totalKobo: bigint;
    })[]>;
    recognizeVendorInvoiceVat(input: RecognizeVendorInvoiceVatInput): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").VendorInvoiceStatus;
        createdAt: Date;
        createdByUserId: string;
        matchedAt: Date | null;
        journalEntryId: string | null;
        vendorId: string;
        purchaseOrderId: string;
        invoiceNumber: string;
        invoiceAmountKobo: bigint;
        invoiceDate: Date;
        matchVarianceNote: string | null;
        paidJournalEntryId: string | null;
        vatKobo: bigint;
        recognizedVatRateVersionId: string | null;
    }>;
    assessStampDuty(input: AssessStampDutyInput): Promise<{
        id: string;
        entityType: string;
        entityId: string;
        assessedByUserId: string;
        assessedAt: Date;
        instrumentType: string;
        dutyKobo: bigint;
        taxRateVersionId: string;
    } | null>;
    listStampDutyAssessments(): Promise<{
        id: string;
        entityType: string;
        entityId: string;
        assessedByUserId: string;
        assessedAt: Date;
        instrumentType: string;
        dutyKobo: bigint;
        taxRateVersionId: string;
    }[]>;
    listGlMappings(): Promise<{
        id: string;
        configuredByUserId: string | null;
        taxType: import("../../generated/prisma/enums").TaxType;
        payableAccountCode: string | null;
        configuredAt: Date | null;
    }[]>;
    configureGlMapping(input: ConfigureTaxGlMappingInput): Promise<{
        id: string;
        configuredByUserId: string | null;
        taxType: import("../../generated/prisma/enums").TaxType;
        payableAccountCode: string | null;
        configuredAt: Date | null;
    }>;
    listRemittanceDueDateConfigs(): Promise<{
        id: string;
        isActive: boolean;
        taxType: import("../../generated/prisma/enums").TaxType;
        authority: string;
        dayOfMonthDue: number;
    }[]>;
    configureRemittanceDueDate(input: ConfigureRemittanceDueDateInput, actorUserId: string): Promise<{
        id: string;
        isActive: boolean;
        taxType: import("../../generated/prisma/enums").TaxType;
        authority: string;
        dayOfMonthDue: number;
    }>;
    runRemittanceDueDateSweep(scheduledFor: Date): Promise<{
        configsChecked: number;
        batchesCreated: number;
    }>;
    private computePeriodTaxTotal;
    listRemittanceBatches(taxType?: TaxTypeCode): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").TaxRemittanceStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        dueDate: Date;
        periodLabel: string;
        taxType: import("../../generated/prisma/enums").TaxType;
        totalKobo: bigint;
        authority: string;
        letterInstanceId: string | null;
        remittedAt: Date | null;
        remittedByUserId: string | null;
    }[]>;
    proposeRemittanceApproval(batchId: string, actorUserId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").TaxRemittanceStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        dueDate: Date;
        periodLabel: string;
        taxType: import("../../generated/prisma/enums").TaxType;
        totalKobo: bigint;
        authority: string;
        letterInstanceId: string | null;
        remittedAt: Date | null;
        remittedByUserId: string | null;
    }>;
    approveRemittanceBatch(workflowInstanceId: string, approverUserId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").TaxRemittanceStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        dueDate: Date;
        periodLabel: string;
        taxType: import("../../generated/prisma/enums").TaxType;
        totalKobo: bigint;
        authority: string;
        letterInstanceId: string | null;
        remittedAt: Date | null;
        remittedByUserId: string | null;
    } | null>;
    retryRemittanceLetter(batchId: string, actorUserId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").TaxRemittanceStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        dueDate: Date;
        periodLabel: string;
        taxType: import("../../generated/prisma/enums").TaxType;
        totalKobo: bigint;
        authority: string;
        letterInstanceId: string | null;
        remittedAt: Date | null;
        remittedByUserId: string | null;
    }>;
    markRemitted(batchId: string, actorUserId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").TaxRemittanceStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        dueDate: Date;
        periodLabel: string;
        taxType: import("../../generated/prisma/enums").TaxType;
        totalKobo: bigint;
        authority: string;
        letterInstanceId: string | null;
        remittedAt: Date | null;
        remittedByUserId: string | null;
    }>;
    private assertCapability;
}
