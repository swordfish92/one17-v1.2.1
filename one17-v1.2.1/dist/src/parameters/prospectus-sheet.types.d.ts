export declare class ProspectusSheetError extends Error {
}
export interface ProspectusSheetFields {
    prospectusRef?: string;
    authorizedUnits?: number;
    fundSizeCapKobo?: bigint;
    offerSpreadPct?: number;
    bidSpreadPct?: number;
    valuationFrequency?: string;
    minimumSubscriptionKobo?: bigint;
    minimumAdditionalInvestmentKobo?: bigint;
    minimumRedemptionKobo?: bigint;
    minimumHoldingKobo?: bigint;
    managementFeeRatePct?: number;
    adminFeeRatePct?: number;
    custodianFeeRatePct?: number;
    secFeeRatePct?: number;
    auditFeeRatePct?: number;
    distributionMethod?: string;
    distributionFrequency?: string;
    distributableIncomePct?: number;
    minimumParticipationKobo?: bigint;
    poolTenorMonths?: number;
    surplusSharingEnabled?: boolean;
    psrPoolMudaribShare?: number;
    surplusInvestorShare?: number;
    surplusMudaribShare?: number;
    mandateRoleModel?: 'MUDARABAH_PSR' | 'WAKALAH';
    mandateFeeRatePct?: number;
    targetedReturnBenchmarkPct?: number;
    investmentType?: string;
    tenorLockInMonths?: number;
    minimumInvestmentKobo?: bigint;
    fundingStructure?: 'LUMP_SUM' | 'PERIODIC_CALL';
    offerNarrativeBrief?: string;
    offerNarrativeOpportunity?: string;
    offerNarrativeDynamics?: string;
    offerNarrativeRiskSummary?: string;
    offerNarrativeModelDescription?: string;
}
export interface ProposeSheetInput extends ProspectusSheetFields {
    productCode: string;
    initiatedByUserId: string;
}
export interface EditDraftSheetInput extends ProspectusSheetFields {
    sheetId: string;
    actorUserId: string;
}
export interface ProposeAmendmentInput extends ProspectusSheetFields {
    productCode: string;
    proposedByUserId: string;
}
