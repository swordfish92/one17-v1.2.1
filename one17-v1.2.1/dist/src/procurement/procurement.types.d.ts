export interface CreateVendorInput {
    vendorCode: string;
    legalName: string;
    rcNumber?: string;
    tin?: string;
    bankName?: string;
    bankAccountNumber?: string;
    bankAccountName?: string;
    createdByUserId: string;
}
export interface CreatePurchaseOrderLineInput {
    description: string;
    quantity: number;
    unitPriceKobo: bigint;
}
export interface CreatePurchaseOrderInput {
    poNumber: string;
    vendorId: string;
    encumbranceId: string;
    ledgerEntityCode: string;
    description: string;
    lines: CreatePurchaseOrderLineInput[];
    createdByUserId: string;
}
export interface MatchInvoiceInput {
    invoiceId: string;
    actorUserId: string;
    assetUsefulLifeMonths?: number;
}
export interface DisposeAssetInput {
    assetRegisterEntryId: string;
    disposalDate: Date;
    proceedsKobo: bigint;
    gainLossAccountCode: string;
    disposedByUserId: string;
}
export declare class ProcurementError extends Error {
    constructor(message: string);
}
