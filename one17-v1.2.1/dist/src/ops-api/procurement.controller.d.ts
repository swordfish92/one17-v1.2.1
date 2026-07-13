import type { AuthenticatedUser } from '../auth/auth.types';
import { ProcurementService } from '../procurement/procurement.service';
export declare class ProcurementController {
    private readonly procurement;
    constructor(procurement: ProcurementService);
    listVendors(): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").VendorStatus;
        createdAt: Date;
        createdByUserId: string;
        rcNumber: string | null;
        bankName: string | null;
        legalName: string;
        vendorCode: string;
        tin: string | null;
        bankAccountNumber: string | null;
        bankAccountName: string | null;
        performanceRating: import("@prisma/client-runtime-utils").Decimal | null;
    }[]>;
    createVendor(dto: {
        vendorCode: string;
        legalName: string;
        rcNumber?: string;
        tin?: string;
        bankName?: string;
        bankAccountNumber?: string;
        bankAccountName?: string;
    }, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").VendorStatus;
        createdAt: Date;
        createdByUserId: string;
        rcNumber: string | null;
        bankName: string | null;
        legalName: string;
        vendorCode: string;
        tin: string | null;
        bankAccountNumber: string | null;
        bankAccountName: string | null;
        performanceRating: import("@prisma/client-runtime-utils").Decimal | null;
    }>;
    listPurchaseOrders(): Promise<({
        vendor: {
            id: string;
            status: import("../../generated/prisma/enums").VendorStatus;
            createdAt: Date;
            createdByUserId: string;
            rcNumber: string | null;
            bankName: string | null;
            legalName: string;
            vendorCode: string;
            tin: string | null;
            bankAccountNumber: string | null;
            bankAccountName: string | null;
            performanceRating: import("@prisma/client-runtime-utils").Decimal | null;
        };
        lines: {
            id: string;
            description: string;
            unitPriceKobo: bigint;
            purchaseOrderId: string;
            quantity: import("@prisma/client-runtime-utils").Decimal;
            lineAmountKobo: bigint;
        }[];
        vendorInvoices: {
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
        }[];
    } & {
        id: string;
        status: import("../../generated/prisma/enums").PurchaseOrderStatus;
        createdAt: Date;
        description: string;
        createdByUserId: string;
        ledgerEntityCode: string;
        issuedAt: Date | null;
        poNumber: string;
        vendorId: string;
        encumbranceId: string;
        totalAmountKobo: bigint;
    })[]>;
    createPurchaseOrder(dto: {
        poNumber: string;
        vendorId: string;
        encumbranceId: string;
        ledgerEntityCode: string;
        description: string;
        lines: {
            description: string;
            quantity: number;
            unitPriceKobo: string;
        }[];
    }, user: AuthenticatedUser): Promise<{
        lines: {
            id: string;
            description: string;
            unitPriceKobo: bigint;
            purchaseOrderId: string;
            quantity: import("@prisma/client-runtime-utils").Decimal;
            lineAmountKobo: bigint;
        }[];
    } & {
        id: string;
        status: import("../../generated/prisma/enums").PurchaseOrderStatus;
        createdAt: Date;
        description: string;
        createdByUserId: string;
        ledgerEntityCode: string;
        issuedAt: Date | null;
        poNumber: string;
        vendorId: string;
        encumbranceId: string;
        totalAmountKobo: bigint;
    }>;
    issuePurchaseOrder(id: string, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").PurchaseOrderStatus;
        createdAt: Date;
        description: string;
        createdByUserId: string;
        ledgerEntityCode: string;
        issuedAt: Date | null;
        poNumber: string;
        vendorId: string;
        encumbranceId: string;
        totalAmountKobo: bigint;
    }>;
    recordGoodsReceipt(id: string, dto: {
        receivedAmountKobo: string;
        notes?: string;
    }, user: AuthenticatedUser): Promise<{
        id: string;
        createdAt: Date;
        notes: string | null;
        receivedByUserId: string;
        purchaseOrderId: string;
        receivedAmountKobo: bigint;
    }>;
    recordVendorInvoice(id: string, dto: {
        vendorId: string;
        invoiceNumber: string;
        invoiceAmountKobo: string;
        invoiceDate: string;
    }, user: AuthenticatedUser): Promise<{
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
    matchInvoice(id: string, dto: {
        assetUsefulLifeMonths?: number;
    }, user: AuthenticatedUser): Promise<{
        invoice: {
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
        };
        matched: boolean;
        note: string;
        journalEntryId?: undefined;
        assetRegisterEntry?: undefined;
    } | {
        invoice: {
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
        };
        matched: boolean;
        journalEntryId: string;
        assetRegisterEntry: {
            id: string;
            status: import("../../generated/prisma/enums").AssetStatus;
            createdAt: Date;
            description: string;
            createdByUserId: string;
            ledgerEntityCode: string;
            purchaseOrderId: string | null;
            assetCode: string;
            costKobo: bigint;
            acquisitionDate: Date;
            usefulLifeMonths: number;
            accumulatedDepreciationKobo: bigint;
            disposedAt: Date | null;
        } | null;
        note?: undefined;
    }>;
    createPaymentBatch(dto: {
        batchNumber: string;
        ledgerEntityCode: string;
        vendorInvoiceIds: string[];
    }, user: AuthenticatedUser): Promise<{
        batch: {
            id: string;
            status: import("../../generated/prisma/enums").PaymentBatchStatus;
            createdAt: Date;
            workflowInstanceId: string | null;
            createdByUserId: string;
            ledgerEntityCode: string;
            journalEntryId: string | null;
            paidAt: Date | null;
            totalAmountKobo: bigint;
            batchNumber: string;
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
    listAssetRegister(): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").AssetStatus;
        createdAt: Date;
        description: string;
        createdByUserId: string;
        ledgerEntityCode: string;
        purchaseOrderId: string | null;
        assetCode: string;
        costKobo: bigint;
        acquisitionDate: Date;
        usefulLifeMonths: number;
        accumulatedDepreciationKobo: bigint;
        disposedAt: Date | null;
    }[]>;
    disposeAsset(id: string, dto: {
        disposalDate: string;
        proceedsKobo: string;
        gainLossAccountCode: string;
    }, user: AuthenticatedUser): Promise<{
        asset: {
            id: string;
            status: import("../../generated/prisma/enums").AssetStatus;
            createdAt: Date;
            description: string;
            createdByUserId: string;
            ledgerEntityCode: string;
            purchaseOrderId: string | null;
            assetCode: string;
            costKobo: bigint;
            acquisitionDate: Date;
            usefulLifeMonths: number;
            accumulatedDepreciationKobo: bigint;
            disposedAt: Date | null;
        };
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
        gainLossKobo: bigint;
    }>;
}
