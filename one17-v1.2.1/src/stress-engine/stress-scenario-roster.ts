// Phase4 Directive §2 / Formula Library C2/C5. Scenario magnitudes as DATA
// — the "Master Assumptions sheet" equivalent — never literals in
// stress-engine.service.ts (DQ-11/13, invariant 10; CHECK4 adversarial: grep
// the service file for these numbers = zero findings). Sourced from the
// extracted ERM sheets' own stated magnitudes (C2/C5) — per C3 finding 1,
// these are TEST DATA shapes (the numbers themselves, not company state),
// same "shape is real, values await Board confirmation" discipline as every
// other TD_-sourced seed in this codebase. Seeded ACTIVE v1 so the engine is
// runnable now; amendment 27 governs CHANGES to these rows going forward via
// STRESS_BASELINE_PUBLICATION-adjacent config workflow (not built as a
// separate propose/approve flow this pass — the config itself is direct-
// edit like BudgetVarianceRagThreshold, while PUBLISHING A RUN'S OUTPUT as
// the official baseline is the part that actually goes through the
// workflow, per the literal Directive text: "ad-hoc runs... without
// touching the approved baseline; publishing a NEW baseline requires the
// approval chain").
export interface StressScenarioSeed {
  modelType:
    | 'LIQUIDITY'
    | 'CAPITAL_ADEQUACY'
    | 'REVENUE_SENSITIVITY'
    | 'COUNTERPARTY_DEFAULT'
    | 'PORTFOLIO_SHOCK'
    | 'REVERSE_STRESS';
  scenarioCode: string;
  scenarioLabel: string;
  parameters: Record<string, unknown>;
}

export const STRESS_SCENARIO_ROSTER: StressScenarioSeed[] = [
  // ---- LIQUIDITY: 8 scenarios (C2/C4 sheet 05) ----
  { modelType: 'LIQUIDITY', scenarioCode: 'LIQ-01', scenarioLabel: 'Mild Redemption 20%', parameters: { redemptionPct: 0.20 } },
  { modelType: 'LIQUIDITY', scenarioCode: 'LIQ-02', scenarioLabel: 'Moderate Redemption 30%', parameters: { redemptionPct: 0.30 } },
  { modelType: 'LIQUIDITY', scenarioCode: 'LIQ-03', scenarioLabel: 'Severe Redemption 50%', parameters: { redemptionPct: 0.50 } },
  { modelType: 'LIQUIDITY', scenarioCode: 'LIQ-04', scenarioLabel: 'Receivable Delay 30 days', parameters: { receivableDelayDays: 30 } },
  { modelType: 'LIQUIDITY', scenarioCode: 'LIQ-05', scenarioLabel: 'Receivable Delay 60 days', parameters: { receivableDelayDays: 60 } },
  { modelType: 'LIQUIDITY', scenarioCode: 'LIQ-06', scenarioLabel: 'Receivable Delay 90 days', parameters: { receivableDelayDays: 90 } },
  { modelType: 'LIQUIDITY', scenarioCode: 'LIQ-07', scenarioLabel: 'Expense Surge', parameters: { expenseSurgeFactor: 1.2 } },
  { modelType: 'LIQUIDITY', scenarioCode: 'LIQ-08', scenarioLabel: 'Combined Severe (redemption + delay + counterparty default + expense surge)', parameters: { redemptionPct: 0.50, receivableDelayDays: 90, expenseSurgeFactor: 1.2, combinedInflowFactor: 0.1, largestCounterpartyDefault: true } },
  // ---- CAPITAL_ADEQUACY: single stress-input set (C2/C4 sheet 06) ----
  { modelType: 'CAPITAL_ADEQUACY', scenarioCode: 'CAP-01', scenarioLabel: 'Standard Capital Stress', parameters: { creditLossesKobo: 0, writeDownsKobo: 0, impairmentKobo: 0, portfolioLossKobo: 0, recapBufferFactor: 1.2 } },
  // ---- REVENUE_SENSITIVITY: 10 scenarios (C5 sheet 07) ----
  { modelType: 'REVENUE_SENSITIVITY', scenarioCode: 'REV-01', scenarioLabel: 'AUM Decline 10%', parameters: { aumDeclinePct: 0.10 } },
  { modelType: 'REVENUE_SENSITIVITY', scenarioCode: 'REV-02', scenarioLabel: 'AUM Decline 20%', parameters: { aumDeclinePct: 0.20 } },
  { modelType: 'REVENUE_SENSITIVITY', scenarioCode: 'REV-03', scenarioLabel: 'AUM Decline 30%', parameters: { aumDeclinePct: 0.30 } },
  { modelType: 'REVENUE_SENSITIVITY', scenarioCode: 'REV-04', scenarioLabel: 'Fee Compression Mild', parameters: { feeCompressionPct: 0.10 } },
  { modelType: 'REVENUE_SENSITIVITY', scenarioCode: 'REV-05', scenarioLabel: 'Fee Compression Severe', parameters: { feeCompressionPct: 0.25 } },
  { modelType: 'REVENUE_SENSITIVITY', scenarioCode: 'REV-06', scenarioLabel: 'Client Loss 30% (factor 0.7)', parameters: { clientLossFactor: 0.7 } },
  { modelType: 'REVENUE_SENSITIVITY', scenarioCode: 'REV-07', scenarioLabel: 'Client Loss 20% (factor 0.8)', parameters: { clientLossFactor: 0.8 } },
  { modelType: 'REVENUE_SENSITIVITY', scenarioCode: 'REV-08', scenarioLabel: 'Cost Surge', parameters: { opexSurgeFactor: 1.2 } },
  { modelType: 'REVENUE_SENSITIVITY', scenarioCode: 'REV-09', scenarioLabel: 'Combined AUM Decline + Fee Compression', parameters: { aumDeclinePct: 0.20, feeCompressionPct: 0.10 } },
  { modelType: 'REVENUE_SENSITIVITY', scenarioCode: 'REV-10', scenarioLabel: 'Combined Severe (AUM decline + fee compression + cost surge)', parameters: { aumDeclinePct: 0.30, feeCompressionPct: 0.25, opexSurgeFactor: 1.2, clientLossFactor: 0.7 } },
  // ---- COUNTERPARTY_DEFAULT: escalation ladder (DQ-10, row 13/21) ----
  { modelType: 'COUNTERPARTY_DEFAULT', scenarioCode: 'CPD-LADDER', scenarioLabel: 'Credit — DPD Escalation Ladder', parameters: { headOfRiskDays: 30, ceoBoardDays: 60, legalDays: 90 } },
  // ---- PORTFOLIO_SHOCK: 4 levels x 8 asset classes (C5 sheet 09) ----
  { modelType: 'PORTFOLIO_SHOCK', scenarioCode: 'PS-SHOCKS', scenarioLabel: '4-Level Shock Matrix', parameters: { mildPct: 0.05, moderatePct: 0.15, severePct: 0.30, extremePct: 0.50 } },
  // ---- REVERSE_STRESS: 8 failure events (C5 sheet 10, ERMF) ----
  { modelType: 'REVERSE_STRESS', scenarioCode: 'RSE-01', scenarioLabel: 'Mass Redemption Run', parameters: { indicator: 'liquiditySurvivalDays', redemptionPct: 0.40 } },
  { modelType: 'REVERSE_STRESS', scenarioCode: 'RSE-02', scenarioLabel: 'Capital Adequacy Breach', parameters: { indicator: 'carSurplusMargin' } },
  { modelType: 'REVERSE_STRESS', scenarioCode: 'RSE-03', scenarioLabel: 'Major Counterparty Default', parameters: { indicator: 'largestEad' } },
  { modelType: 'REVERSE_STRESS', scenarioCode: 'RSE-04', scenarioLabel: 'Revenue Collapse', parameters: { indicator: 'revenuePctOfBase', thresholdPct: 0.40 } },
  { modelType: 'REVERSE_STRESS', scenarioCode: 'RSE-05', scenarioLabel: 'Reputational / Shariah Non-Compliance Event', parameters: { indicator: 'shariahRagPassthrough' } },
  { modelType: 'REVERSE_STRESS', scenarioCode: 'RSE-06', scenarioLabel: 'IT / Operational Outage', parameters: { indicator: 'itDowntimeHours' } },
  { modelType: 'REVERSE_STRESS', scenarioCode: 'RSE-07', scenarioLabel: 'Concentrated Portfolio Loss', parameters: { indicator: 'aumSharePct', thresholdPct: 0.30 } },
  { modelType: 'REVERSE_STRESS', scenarioCode: 'RSE-08', scenarioLabel: 'Regulatory Sanction / Funding Freeze', parameters: { indicator: 'fundingDaysAt40PctRedemption' } },
];
