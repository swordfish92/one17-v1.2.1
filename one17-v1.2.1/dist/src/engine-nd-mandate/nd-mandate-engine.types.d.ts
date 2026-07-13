export interface CreateMandateInput {
    mandateRef: string;
    ledgerEntityCode: string;
    participantType: 'INVESTOR' | 'FUND' | 'POOL';
    investorId?: string;
    participantLedgerEntityCode?: string;
    sharingMode: 'MUDARABAH_PSR' | 'WAKALAH';
    investorRatio?: number;
    mudaribRatio?: number;
    wakalahFeeRatePa?: number;
    targetReturnPct?: number;
    startDate: Date;
    maturityDate?: Date;
    createdByUserId: string;
    committedCapitalKobo?: bigint;
}
export interface ActivateMandateInput {
    ndMandateAccountId: string;
    surplusTreatment?: 'CLIENT_ALL' | 'AGENT_RETAINS' | 'SHARED';
    sharedRatio?: number;
    activatedByUserId: string;
}
export interface ComputeMudarabahPsrInput {
    ndMandateAccountId: string;
    realizedProfitKobo: bigint;
    kycValid: boolean;
    shariahFlagsClear: boolean;
}
export interface MudarabahPsrResult {
    clientShareKobo: bigint;
    one17ShareKobo: bigint;
    isLoss: boolean;
    withheldForKyc: boolean;
    gateResults: {
        gate: string;
        passed: boolean;
        detail: string;
    }[];
}
export interface ComputeWakalahInput {
    ndMandateAccountId: string;
    mandateAumKobo: bigint;
    days: number;
    realizedProfitKobo: bigint;
    incentivePortionKobo: bigint;
    kycValid: boolean;
    shariahFlagsClear: boolean;
}
export interface WakalahResult {
    wakalahFeeKobo: bigint;
    clientReturnKobo: bigint;
    excessKobo: bigint;
    excessToClientKobo: bigint;
    excessToAgentKobo: bigint;
    withheldForKyc: boolean;
    gateResults: {
        gate: string;
        passed: boolean;
        detail: string;
    }[];
}
export interface AccrueProvisionalInput {
    ndMandateAccountId: string;
    accrualDate: Date;
    capitalKobo: bigint;
    expectedRatePct: number;
}
export declare class NdMandateEngineError extends Error {
    constructor(message: string);
}
