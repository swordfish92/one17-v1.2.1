import type { AuthenticatedUser } from '../auth/auth.types';
import { TaxService } from '../tax/tax.service';
import { ProposeTaxRateVersionDto, GrantTaxExemptionDto, CreateFeeInvoiceDto, RecognizeVendorInvoiceVatDto, AssessStampDutyDto, ConfigureTaxGlMappingDto, ConfigureRemittanceDueDateDto } from './ops-api.types';
export declare class TaxController {
    private readonly tax;
    constructor(tax: TaxService);
    listRateVersions(taxType?: 'WHT' | 'VAT' | 'STAMP_DUTY'): Promise<{
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
    proposeRateVersion(dto: ProposeTaxRateVersionDto, user: AuthenticatedUser): Promise<{
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
    listExemptions(taxType?: 'WHT' | 'VAT' | 'STAMP_DUTY'): Promise<({
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
    grantExemption(dto: GrantTaxExemptionDto, user: AuthenticatedUser): Promise<{
        id: string;
        createdAt: Date;
        reason: string;
        investorId: string;
        taxType: import("../../generated/prisma/enums").TaxType;
        grantedByUserId: string;
    }>;
    revokeExemption(investorId: string, taxType: 'WHT' | 'VAT' | 'STAMP_DUTY', user: AuthenticatedUser): Promise<{
        id: string;
        createdAt: Date;
        reason: string;
        investorId: string;
        taxType: import("../../generated/prisma/enums").TaxType;
        grantedByUserId: string;
    } | null>;
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
    createFeeInvoice(dto: CreateFeeInvoiceDto, user: AuthenticatedUser): Promise<{
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
    recognizeVendorInvoiceVat(id: string, dto: RecognizeVendorInvoiceVatDto, user: AuthenticatedUser): Promise<{
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
    assessStampDuty(dto: AssessStampDutyDto, user: AuthenticatedUser): Promise<{
        id: string;
        entityType: string;
        entityId: string;
        assessedByUserId: string;
        assessedAt: Date;
        instrumentType: string;
        dutyKobo: bigint;
        taxRateVersionId: string;
    } | null>;
    listGlMappings(): Promise<{
        id: string;
        configuredByUserId: string | null;
        taxType: import("../../generated/prisma/enums").TaxType;
        payableAccountCode: string | null;
        configuredAt: Date | null;
    }[]>;
    configureGlMapping(dto: ConfigureTaxGlMappingDto, user: AuthenticatedUser): Promise<{
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
    configureRemittanceDueDate(dto: ConfigureRemittanceDueDateDto, user: AuthenticatedUser): Promise<{
        id: string;
        isActive: boolean;
        taxType: import("../../generated/prisma/enums").TaxType;
        authority: string;
        dayOfMonthDue: number;
    }>;
    listRemittanceBatches(taxType?: 'WHT' | 'VAT' | 'STAMP_DUTY'): Promise<{
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
    submitRemittanceForApproval(id: string, user: AuthenticatedUser): Promise<{
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
    retryRemittanceLetter(id: string, user: AuthenticatedUser): Promise<{
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
    markRemitted(id: string, user: AuthenticatedUser): Promise<{
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
}
