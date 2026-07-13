// Invariant 6 (absolute, extends pairwise to all three engines): this
// engine shares NO calculation code with src/engine-halal-fund/ or
// src/engine-psr-waterfall/ — zero cross-imports, small helpers
// deliberately re-implemented locally rather than factored into a shared
// module.

export interface CreateMandateInput {
  mandateRef: string;
  ledgerEntityCode: string;
  participantType: 'INVESTOR' | 'FUND' | 'POOL';
  investorId?: string;
  participantLedgerEntityCode?: string;
  sharingMode: 'MUDARABAH_PSR' | 'WAKALAH';
  investorRatio?: number; // MUDARABAH_PSR only
  mudaribRatio?: number;
  wakalahFeeRatePa?: number; // WAKALAH only
  targetReturnPct?: number; // benchmark label only, SC-01 — never accrued against
  startDate: Date;
  maturityDate?: Date;
  createdByUserId: string;
  // Invariant 43(a) (CHECK10): investor-side capital commitment, for AUM
  // aggregation only — never fed into a sharing/accrual computation
  // (those take their own explicit capitalKobo/mandateAumKobo parameter
  // per call, unaffected by this field). FUND/POOL participants never
  // set this — see the schema field's own comment.
  committedCapitalKobo?: bigint;
}

export interface ActivateMandateInput {
  ndMandateAccountId: string;
  // E4: REQUIRED at commencement for WAKALAH mode, no default.
  surplusTreatment?: 'CLIENT_ALL' | 'AGENT_RETAINS' | 'SHARED';
  sharedRatio?: number; // required iff surplusTreatment === 'SHARED'
  activatedByUserId: string;
}

export interface ComputeMudarabahPsrInput {
  ndMandateAccountId: string;
  realizedProfitKobo: bigint; // BR-PAE-01 basis: confirmed income only, no pooling, no TWE
  kycValid: boolean;
  shariahFlagsClear: boolean;
}

export interface MudarabahPsrResult {
  clientShareKobo: bigint;
  one17ShareKobo: bigint;
  isLoss: boolean;
  withheldForKyc: boolean;
  gateResults: { gate: string; passed: boolean; detail: string }[];
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
  excessKobo: bigint; // returns above expected/benchmark, treated per surplus_treatment
  excessToClientKobo: bigint;
  excessToAgentKobo: bigint;
  withheldForKyc: boolean;
  gateResults: { gate: string; passed: boolean; detail: string }[];
}

export interface AccrueProvisionalInput {
  ndMandateAccountId: string;
  accrualDate: Date;
  capitalKobo: bigint;
  expectedRatePct: number;
}

export class NdMandateEngineError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NdMandateEngineError';
  }
}
