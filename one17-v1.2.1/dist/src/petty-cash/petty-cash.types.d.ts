export declare class PettyCashError extends Error {
    constructor(message: string);
}
export interface EstablishFloatInput {
    floatCode: string;
    custodianUserId: string;
    officeLabel: string;
    ledgerEntityCode?: string;
    floatCeilingKobo: bigint;
    singleVoucherCapKobo: bigint;
    establishedByUserId: string;
}
export interface AdjustFloatCapsInput {
    floatId: string;
    floatCeilingKobo?: bigint;
    singleVoucherCapKobo?: bigint;
    actorUserId: string;
}
export interface CaptureVoucherInput {
    floatId: string;
    voucherDate: Date;
    payee: string;
    expenseAccountCode: string;
    amountKobo: bigint;
    createdByUserId: string;
}
export interface InitiateReplenishmentClaimInput {
    floatId: string;
    voucherIds: string[];
    initiatedByUserId: string;
}
export interface RecordSpotCheckInput {
    floatId: string;
    countedKobo: bigint;
    notes?: string;
    checkedByUserId: string;
}
