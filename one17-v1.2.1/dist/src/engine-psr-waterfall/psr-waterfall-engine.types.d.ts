export interface WaterfallParticipantInput {
    productAccountId: string;
    capitalKobo: bigint;
    targetRatePct: number;
    activeDays: number;
    kycValid: boolean;
}
export interface ComputeWaterfallInput {
    ledgerEntityCode: string;
    productCode: string;
    periodStart: Date;
    periodEnd: Date;
    recordDate: Date;
    poolProfitKobo: bigint;
    betaPoolPct: number;
    gammaPoolPct: number;
    deltaPoolPct: number;
    surplusSharingEnabled: boolean;
    participants: WaterfallParticipantInput[];
    hibahOfferedKobo: bigint;
    shariahFlagsClear: boolean;
    boardResolutionRef: string | null;
    createdByUserId: string;
}
export interface WaterfallParticipantResult {
    productAccountId: string;
    entitlementKobo: bigint;
    twe: number;
    priorityPayoutKobo: bigint;
    surplusPayoutKobo: bigint;
    hibahKobo: bigint;
    withheldForKyc: boolean;
    totalPayoutKobo: bigint;
}
export interface ComputeWaterfallResult {
    mudaribBaseKobo: bigint;
    investorPoolKobo: bigint;
    totalEntitlementsKobo: bigint;
    surplusKobo: bigint;
    shortfallKobo: bigint;
    mudaribRetainedKobo: bigint;
    mudaribSurplusKobo: bigint;
    participants: WaterfallParticipantResult[];
    dcGateResults: DcGateResult[];
}
export interface DcGateResult {
    gate: string;
    description: string;
    passed: boolean;
    detail: string;
}
export interface AllocateLossInput {
    ledgerEntityCode: string;
    poolLossKobo: bigint;
    participants: {
        productAccountId: string;
        capitalKobo: bigint;
    }[];
    ssbResolutionRef: string | null;
    companyFundedHibahKobo: bigint;
}
export interface LossAllocationResult {
    participantLossKobo: {
        productAccountId: string;
        lossKobo: bigint;
        hibahOffsetKobo: bigint;
        netLossKobo: bigint;
    }[];
}
export interface PurificationResult {
    toCharityKobo: bigint;
}
export declare class PsrWaterfallEngineError extends Error {
    constructor(message: string);
}
