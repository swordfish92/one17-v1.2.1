export interface ComputeDailyNavInput {
    ledgerEntityCode: string;
    valuationDate: Date;
    launchDate: Date;
    launchPrice: number;
    offerSpreadPct: number;
    bidSpreadPct: number;
}
export interface DailyNavResult {
    valuationDate: Date;
    portfolioMktValKobo: bigint;
    marketValueSource: 'BOTTOM_UP' | 'MANUAL_ENTRY';
    uninvestedCashKobo: bigint;
    accruedUnpaidFeesKobo: bigint;
    totalNavKobo: bigint;
    unitsOutstanding: number;
    navPerUnit: number;
    offerPrice: number;
    bidPrice: number;
}
export interface ProposeMarketValueEntryInput {
    ledgerEntityCode: string;
    valuationDate: Date;
    marketValueKobo: bigint;
    proposedByUserId: string;
}
export interface ApproveMarketValueEntryInput {
    entryId: string;
    approvedByUserId: string;
}
export interface AccrueFeesInput {
    ledgerEntityCode: string;
    accrualDate: Date;
    navBaseKobo: bigint;
    feeRates: {
        feeType: string;
        annualRatePct: number;
    }[];
}
export interface RunDistributionInput {
    ledgerEntityCode: string;
    productCode: string;
    periodStart: Date;
    periodEnd: Date;
    recordDate: Date;
    method: 'INCOME' | 'NAV' | null;
    incomeBasisKobo: bigint;
    closingNavKobo: bigint;
    openingNavKobo: bigint;
    netSubscriptionsKobo: bigint;
    navHistoryComplete: boolean;
    priorDeclaredKobo: bigint;
    distributablePct: number;
    priorTotalDistributedKobo: bigint;
    exDivPricePerUnit: number | null;
    participants: DistributionParticipantInput[];
    createdByUserId: string;
}
export interface DistributionParticipantInput {
    productAccountId: string;
    unitsAtRecord: number;
    isDrip: boolean;
    cashPaidKobo: bigint;
}
export interface DistributionParticipantResult {
    productAccountId: string;
    dpsAmount: number;
    totalPayoutKobo: bigint;
    dripAmountKobo: bigint;
    dripUnits: number;
}
export interface RunDistributionResult {
    methodUsed: 'INCOME' | 'NAV';
    netAvailableKobo: bigint;
    toParticipantsKobo: bigint;
    retainedKobo: bigint;
    rollingDistributableKobo: bigint;
    dps: number;
    participants: DistributionParticipantResult[];
}
export declare class HalalFundEngineError extends Error {
    constructor(message: string);
}
