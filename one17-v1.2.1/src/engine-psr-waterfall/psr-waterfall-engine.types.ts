// Invariant 6 (absolute, per Check-3 instruction): this engine shares NO
// calculation code with src/engine-halal-fund/ — no shared "engine-common"
// module, no cross-imports. Day-count/rounding helpers are deliberately
// re-implemented locally in the PSR service rather than imported from the
// Halal Fund engine, even though the math looks similar — duplication here
// is the point (diffable module dependency graphs at Check-3), not an
// oversight.

export interface WaterfallParticipantInput {
  productAccountId: string;
  capitalKobo: bigint;
  targetRatePct: number; // annualized, e.g. 16 for 16%
  activeDays: number; // Formula Library A2: overlap of placement window with the distribution period
  kycValid: boolean; // DC-05: KYC withhold-and-redistribute-to-others
}

export interface ComputeWaterfallInput {
  ledgerEntityCode: string;
  productCode: string;
  periodStart: Date;
  periodEnd: Date;
  recordDate: Date;
  poolProfitKobo: bigint; // BR-PAE-01: confirmed income only (income_received + accrued_income)
  betaPoolPct: number; // AMD-01 pool constant, default 40 (Mudarib share of TOTAL profit)
  gammaPoolPct: number; // AMD-02 pool constant, default 40 (investor share of SURPLUS)
  deltaPoolPct: number; // AMD-02 pool constant, default 60 (Mudarib share of SURPLUS); gamma+delta must = 100
  // Invariant 70(a) (CEO ruling, 12-Jul-2026): the above-benchmark inverse
  // surplus split is an explicit PROVISION, never automatic. When false, ANY
  // above-entitlement amount ("surplus") flows entirely to the Mudarib
  // (mudaribSurplusKobo) and gamma/delta are NOT applied at all -- "a pool
  // without the election runs its base PSR on all profit," per the charter's
  // own text. runWaterfallDistribution derives this from the product's
  // CURRENTLY LOCKED prospectus sheet (never a caller-supplied override --
  // a governance flag, not a calculation input the caller gets to pick).
  surplusSharingEnabled: boolean;
  participants: WaterfallParticipantInput[];
  hibahOfferedKobo: bigint; // AMD-01 A4: optional voluntary Hibah in a shortfall period, funded from the Mudarib share
  shariahFlagsClear: boolean; // DC-06
  boardResolutionRef: string | null; // DC-07 (required above threshold — enforced via the standing DISTRIBUTION workflow's own approval tiers, not re-invented here)
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
  mudaribRetainedKobo: bigint; // mudaribBase - hibahFromMudarib
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
  poolLossKobo: bigint; // positive number representing the loss magnitude
  participants: { productAccountId: string; capitalKobo: bigint }[];
  ssbResolutionRef: string | null; // DC-08: loss scenario requires SSB sign-off
  companyFundedHibahKobo: bigint; // AMD-01 A4: Hibah may also apply in LOSS periods, funded from COMPANY, never the pool
}

export interface LossAllocationResult {
  participantLossKobo: { productAccountId: string; lossKobo: bigint; hibahOffsetKobo: bigint; netLossKobo: bigint }[];
}

export interface PurificationResult {
  toCharityKobo: bigint;
}

export class PsrWaterfallEngineError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PsrWaterfallEngineError';
  }
}
