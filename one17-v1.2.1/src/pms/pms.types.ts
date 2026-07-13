export class PmsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PmsError';
  }
}

// Invariant 51(c2) (CHECK12): KPI definitions were seed-only (no propose/
// approve service) -- this closes that gap. @@unique([kraCode, tier]) on
// KpiDefinition means propose only succeeds when no row exists yet for that
// (kraCode, tier) pair; amending an already-ACTIVE definition is parked,
// not built here (see ProposeKpiDefinitionInput's service-side guard).
export interface ProposeKpiDefinitionInput {
  kraCode: string;
  tier: 'JUNIOR' | 'SENIOR' | 'CHIEF';
  kpiText: string;
  kpiClass: 'CORE' | 'STRATEGIC' | 'SECONDARY' | 'PROCESS_INTEGRITY';
  objectiveText?: string;
  exampleActivity?: string;
  measurementBasis?: 'AUTO' | 'MANUAL' | 'HYBRID';
  frequency?: string;
  proposedByUserId: string;
}

export interface ApproveKpiDefinitionInput {
  workflowInstanceId: string;
  approverUserId: string;
}

// Invariant 51(c2) KPI class-weighting addendum (CEO ruling 8-Jul-2026):
// "MD_CEO approves, no exceptions" -- versioned exactly like
// RiskAppetiteMatrixVersion, scoped to (orgUnitCode, tier) rather than
// global. weights must cover all 4 KpiClass values and sum to 100.00.
export interface ProposeWeightMatrixVersionInput {
  orgUnitCode: string;
  tier: 'JUNIOR' | 'SENIOR' | 'CHIEF';
  weights: { kpiClass: 'CORE' | 'STRATEGIC' | 'SECONDARY' | 'PROCESS_INTEGRITY'; weightPct: number }[];
  proposedByUserId: string;
}

export interface ApproveWeightMatrixVersionInput {
  workflowInstanceId: string;
  approverUserId: string;
}

// Invariant 37(e): Salary/Emolument setup editor — cadre x notch x
// component, versioned + governed (invariant 10: no salary literal in
// code). One EmolumentStructure row per (cadre, notch, component, version);
// "ACTIVE" is scoped to that exact tuple, not a single global version like
// the risk appetite matrix — a cadre's HOUSING allowance can be revised
// without touching its BASIC salary row.
export interface ProposeEmolumentComponentInput {
  cadre: string;
  notch: number;
  component: string;
  componentType: 'SALARY' | 'ALLOWANCE' | 'COST_REFUND';
  annualAmountKobo: bigint;
  taxable: boolean;
  effectiveFrom: Date;
  proposedByUserId: string;
}

// SDS §3.3 memo §D — governed, never hardcoded (invariant 10).
export const INCENTIVE_BANDS: { minScorePct: number; payoutPct: number; sortOrder: number }[] = [
  { minScorePct: 90, payoutPct: 100, sortOrder: 1 },
  { minScorePct: 80, payoutPct: 80, sortOrder: 2 },
  { minScorePct: 70, payoutPct: 60, sortOrder: 3 },
  { minScorePct: 60, payoutPct: 40, sortOrder: 4 },
  { minScorePct: 0, payoutPct: 0, sortOrder: 5 },
];

// SDS §3.4 — severity -> gate outcome, governed config (invariant 10). Gate
// can only protect or reduce pay, never increase (SDS §7.3) — every payout
// factor here is <= 100%.
export const GATE_SEVERITY_CONFIG: { severity: string; outcome: 'FULL_RELEASE' | 'CAPPED' | 'DEFERRED' | 'SUSPENDED'; cappedPct?: number }[] = [
  { severity: 'NONE', outcome: 'FULL_RELEASE' },
  { severity: 'MINOR', outcome: 'CAPPED', cappedPct: 50 },
  { severity: 'MAJOR', outcome: 'DEFERRED' },
  { severity: 'SEVERE', outcome: 'SUSPENDED' },
];

// SDS §4 — Nigerian PAYE structure (Finance Act graduated bands + the
// Consolidated Relief Allowance formula) as versioned config; TaxRuleService
// reads this, never a literal rate/threshold in the calculator itself.
// FINCON validates before activation (status DRAFT -> ACTIVE is a separate
// governed step, not part of this seed).
export const TAX_RULE_CONFIG_V1 = {
  version: 1,
  consolidatedReliefFlatKobo: 20_000_000n, // NGN200,000 x 100 kobo/naira
  consolidatedReliefPctOfGross: 21, // 1% + 20% of gross, expressed as one combined 21% for the % portion (SDS keeps this a single config field)
  bands: [
    { fromKobo: '0', toKobo: '30000000', ratePct: 7 }, // NGN0 - 300,000 (annual, x100 kobo/naira)
    { fromKobo: '30000000', toKobo: '60000000', ratePct: 11 },
    { fromKobo: '60000000', toKobo: '110000000', ratePct: 15 },
    { fromKobo: '110000000', toKobo: '160000000', ratePct: 19 },
    { fromKobo: '160000000', toKobo: '320000000', ratePct: 21 },
    { fromKobo: '320000000', toKobo: null, ratePct: 24 },
  ],
  pensionEmployeePct: 8,
  nhfPct: 2.5,
};
