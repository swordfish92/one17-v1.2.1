export class CertificateError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CertificateError';
  }
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

// Invariant 44(a)/52(b): mandatory STRUCTURE per product class is standing
// law, hardcoded -- these are the only shapes that ever exist. Only
// disclaimerText/secRuleDisclaimer wording is template-governed content.
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

// Invariant 52(b): "Issuance is IMMEDIATE and AUTOMATIC at subscription
// approval" -- called from WITHIN an already capability-gated approval flow
// (SubscriptionService.approveSubscription), never as a standalone
// user-facing action, so this input carries no capability gate of its own.
export interface IssueOrQueueCertificateInput {
  investorId: string;
  productClass: CertificateProductClassKey;
  productAccountId?: string;
  ndMandateAccountId?: string;
  dataSnapshot: CertificateDataSnapshot;
  triggeredByUserId: string;
}
