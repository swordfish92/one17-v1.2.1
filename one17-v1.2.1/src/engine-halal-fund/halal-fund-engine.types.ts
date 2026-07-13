// Invariant 6 (absolute, per Check-3 instruction): this engine shares NO
// calculation code with src/engine-psr-waterfall/ — no shared "engine-
// common" module, no cross-imports. Small helpers below (day-count,
// rounding) are deliberately local to this file/service rather than
// factored out, even though the PSR engine needs near-identical helpers —
// duplication here is the point, not an oversight.

export interface ComputeDailyNavInput {
  ledgerEntityCode: string;
  valuationDate: Date;
  // Formula Library B2: "Launch day override: price = 100.00 (Parameters)."
  launchDate: Date;
  launchPrice: number;
  offerSpreadPct: number; // B0 default 0.015
  bidSpreadPct: number; // B0 default 0.010
}

export interface DailyNavResult {
  valuationDate: Date;
  portfolioMktValKobo: bigint;
  // CHECK16 62(c): which source portfolioMktValKobo came from -- the
  // bottom-up PortfolioPosition sum (the untouched default) or a governed,
  // FA-confirmed PortfolioMarketValueEntry override for this exact date.
  marketValueSource: 'BOTTOM_UP' | 'MANUAL_ENTRY';
  uninvestedCashKobo: bigint;
  accruedUnpaidFeesKobo: bigint;
  totalNavKobo: bigint;
  unitsOutstanding: number;
  navPerUnit: number;
  offerPrice: number;
  bidPrice: number;
}

// CHECK16 62(c): NAV market-value entry.
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
  // Formula Library B0/F-HF-04: 5 fee types, annual rate on NAV.
  feeRates: { feeType: string; annualRatePct: number }[];
}

export interface RunDistributionInput {
  ledgerEntityCode: string;
  productCode: string;
  periodStart: Date;
  periodEnd: Date;
  recordDate: Date;
  method: 'INCOME' | 'NAV' | null; // null = engine picks per AMD-05 default rule
  incomeBasisKobo: bigint; // Method A input (confirmed accrued+received income)
  closingNavKobo: bigint; // Method B input
  openingNavKobo: bigint;
  netSubscriptionsKobo: bigint;
  navHistoryComplete: boolean; // AMD-05: "default: B when NAV history is complete and locked, else A"
  priorDeclaredKobo: bigint; // Sigma already declared this cycle
  distributablePct: number; // >= 0.80, SEC floor (B0/F-HF-05)
  priorTotalDistributedKobo: bigint; // for the AMD-05 corrected rolling register
  exDivPricePerUnit: number | null; // required if any participant is DRIP-elected
  participants: DistributionParticipantInput[];
  createdByUserId: string;
}

export interface DistributionParticipantInput {
  productAccountId: string;
  unitsAtRecord: number;
  isDrip: boolean;
  cashPaidKobo: bigint; // 0 for full-DRIP elections
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

export class HalalFundEngineError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'HalalFundEngineError';
  }
}
