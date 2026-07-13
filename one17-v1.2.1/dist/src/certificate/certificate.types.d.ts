export declare class CertificateError extends Error {
    constructor(message: string);
}
export type CertificateProductClassKey = 'HF_UNIT_NAV' | 'POOL_ND_PSR' | 'ND_WAKALAH';
export interface ProposeCertificateTemplateInput {
    productClass: CertificateProductClassKey;
    disclaimerText: string;
    secRuleDisclaimer: string;
    proposedByUserId: string;
}
export interface ApproveCertificateTemplateInput {
    workflowInstanceId: string;
    approverUserId: string;
}
export interface HfUnitNavSnapshot {
    unitsAllotted: number;
    navPerUnitAtAllotment: number;
    allotmentDate: string;
}
export interface PoolNdPsrSnapshot {
    principalKobo: string;
    tenorLabel: string;
    investorRatioPct: number | null;
    mudaribRatioPct: number | null;
    targetReturnPct: number | null;
}
export interface NdWakalahSnapshot {
    principalKobo: string;
    tenorLabel: string;
    wakalahFeeRatePa: number | null;
    expectedProfitPct: number | null;
}
export type CertificateDataSnapshot = HfUnitNavSnapshot | PoolNdPsrSnapshot | NdWakalahSnapshot;
export interface IssueOrQueueCertificateInput {
    investorId: string;
    productClass: CertificateProductClassKey;
    productAccountId?: string;
    ndMandateAccountId?: string;
    dataSnapshot: CertificateDataSnapshot;
    triggeredByUserId: string;
}
