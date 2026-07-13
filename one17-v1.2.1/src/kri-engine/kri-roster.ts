// Formula Library C6 — AUTHORITATIVE KRI ROSTER (29 named + 11 reserved =
// 40), plus platform-added rows ruled in separately (Hibah, Pool Servicing
// Cost Ratio, provisional-accrual aging, capital-transition, and BZ-05
// breakeven AUM — named nowhere in C6's numbered list but explicitly
// required by Phase4 Directive §3). computeStatus marks which of these
// carry REAL computation in this pass; everything else is genuinely
// NOT_YET_INSTRUMENTED or RESERVED — never a fake green (the spec's own
// standard, restated in CLAUDE.md invariant 16).
//
// riskAppetiteCategoryRef matches RiskAppetiteCategory.riskCategory exactly
// (seed.ts's 13-row matrix) — null where no matrix row covers the metric
// (documented per-row, not a gap hidden by a false mapping).
export interface KriRosterEntry {
  code: string;
  name: string;
  category: string;
  direction: 'HIGHER_BETTER' | 'LOWER_BETTER';
  isZeroTolerance?: boolean;
  riskAppetiteCategoryRef?: string | null;
  computeStatus: 'INSTRUMENTED' | 'NOT_YET_INSTRUMENTED' | 'RESERVED';
  notes?: string;
}

export const KRI_ROSTER: KriRosterEntry[] = [
  // ---- CR: Credit ----
  { code: 'CR-01', name: 'Counterparty Concentration', category: 'Credit', direction: 'LOWER_BETTER', riskAppetiteCategoryRef: 'Credit — Single Counterparty', computeStatus: 'INSTRUMENTED' },
  { code: 'CR-02', name: 'Sector Concentration (Largest)', category: 'Credit', direction: 'LOWER_BETTER', computeStatus: 'NOT_YET_INSTRUMENTED', notes: 'No counterparty sector/industry field in schema yet.' },
  { code: 'CR-03', name: 'Total Overdue Receivables %', category: 'Credit', direction: 'LOWER_BETTER', riskAppetiteCategoryRef: 'Credit — Overdue', computeStatus: 'NOT_YET_INSTRUMENTED', notes: 'No receivables-aging model in schema yet.' },
  { code: 'CR-04', name: '90+ DPD Counterparty Count', category: 'Credit', direction: 'LOWER_BETTER', riskAppetiteCategoryRef: 'Credit — DPD Escalation', computeStatus: 'NOT_YET_INSTRUMENTED', notes: 'DPD ladder needs a receivables/exposure-by-counterparty model not yet built.' },
  { code: 'CR-05', name: 'Collateral Coverage Ratio', category: 'Credit', direction: 'HIGHER_BETTER', computeStatus: 'NOT_YET_INSTRUMENTED', notes: 'No collateral register in schema yet.' },
  { code: 'CR-06', name: 'Expected Loss as % of Capital', category: 'Credit', direction: 'LOWER_BETTER', computeStatus: 'NOT_YET_INSTRUMENTED', notes: 'Needs PD/LGD inputs not yet modeled.' },
  { code: 'CR-07', name: 'Documentation Completeness %', category: 'Credit', direction: 'HIGHER_BETTER', computeStatus: 'NOT_YET_INSTRUMENTED' },
  { code: 'CR-08', name: 'Unperfected Required Collateral Count', category: 'Credit', direction: 'LOWER_BETTER', computeStatus: 'NOT_YET_INSTRUMENTED' },
  { code: 'CR-09', name: 'Average Internal Credit Score', category: 'Credit', direction: 'HIGHER_BETTER', computeStatus: 'NOT_YET_INSTRUMENTED' },
  // ---- TR: Treasury ----
  { code: 'TR-01', name: 'Liquidity Coverage Ratio (LCR)', category: 'Treasury', direction: 'HIGHER_BETTER', riskAppetiteCategoryRef: 'Treasury — LCR', computeStatus: 'NOT_YET_INSTRUMENTED', notes: '30-day stressed outflow model belongs to the liquidity stress service (task 53), not this pass.' },
  { code: 'TR-02', name: 'Liquidity Runway (days)', category: 'Treasury', direction: 'HIGHER_BETTER', riskAppetiteCategoryRef: 'Treasury — Liquidity Runway', computeStatus: 'INSTRUMENTED', notes: 'CHECK16 62(d): TR-06\'s own cash figure (same category) over the trailing-90-day net REDEMPTION/SUBSCRIPTION Txn outflow rate. TR-01 (LCR) stays deferred — that is a genuinely different 30-day STRESSED-outflow model belonging to the liquidity stress service (task 53), not this pass.' },
  { code: 'TR-03', name: 'Capital Adequacy Ratio (CAR)', category: 'Treasury', direction: 'HIGHER_BETTER', riskAppetiteCategoryRef: 'Treasury — Capital Adequacy', computeStatus: 'INSTRUMENTED', notes: 'DQ-1 corrected: CAR = capital / requirement x100, never the workbook display defect.' },
  { code: 'TR-04', name: 'Capital Surplus', category: 'Treasury', direction: 'HIGHER_BETTER', riskAppetiteCategoryRef: 'Treasury — Capital Adequacy', computeStatus: 'INSTRUMENTED' },
  { code: 'TR-05', name: 'Investor Redemption Pressure', category: 'Treasury', direction: 'LOWER_BETTER', computeStatus: 'INSTRUMENTED', notes: 'CHECK16 62(d): unblocked by the real redemption pipeline SubscriptionRequest now provides (invariant 42a) — pending REDEMPTION demand as % of total AUM. BZ-07 ("Investor Redemption Notice Coverage") stays deferred deliberately — that KRI is specifically about a per-mandate notice-period field that still does not exist in schema; this pipeline data does not resolve it.' },
  { code: 'TR-06', name: 'Cash as % of Total Assets', category: 'Treasury', direction: 'HIGHER_BETTER', riskAppetiteCategoryRef: 'Treasury — Liquidity Runway', computeStatus: 'INSTRUMENTED' },
  // ---- CPL: Compliance (zero-tolerance) ----
  { code: 'CPL-01', name: 'Open Regulatory Breaches', category: 'Compliance', direction: 'LOWER_BETTER', isZeroTolerance: true, riskAppetiteCategoryRef: 'Compliance — Regulatory', computeStatus: 'INSTRUMENTED', notes: 'CHECK5 item 2: count of regulatory_filing_calendar entries past deadline with no CERTIFIED/FILED regulatory_filing_run for the current period.' },
  { code: 'CPL-02', name: 'Open Shariah Non-Compliance', category: 'Compliance', direction: 'LOWER_BETTER', isZeroTolerance: true, riskAppetiteCategoryRef: 'Compliance — Shariah', computeStatus: 'INSTRUMENTED', notes: 'Computed from TPL_13 compliance_check rows where result != COMPLIANT.' },
  { code: 'CPL-03', name: 'Open Complaint Aging Breaches', category: 'Compliance', direction: 'LOWER_BETTER', riskAppetiteCategoryRef: 'Compliance — Regulatory', computeStatus: 'INSTRUMENTED', notes: 'Invariant 28(f): count of OPEN/IN_PROGRESS complaint rows currently AMBER or BREACHED against complaint_sla_config (derived at read time, never stored).' },
  { code: 'CPL-04', name: 'Transactions Missing Shariah Approval', category: 'Compliance', direction: 'LOWER_BETTER', isZeroTolerance: true, riskAppetiteCategoryRef: 'Compliance — Shariah', computeStatus: 'NOT_YET_INSTRUMENTED', notes: 'No per-transaction Shariah-approval-required flag exists on txn yet.' },
  { code: 'CPL-05', name: 'Overdue KYC Periodic Reviews', category: 'Compliance', direction: 'LOWER_BETTER', riskAppetiteCategoryRef: 'Compliance — Regulatory', computeStatus: 'INSTRUMENTED', notes: 'Invariant 51(b-vii) (CHECK13): count of investor/counterparty onboarding cases whose periodicReviewFrequency window has elapsed since lastPeriodicReviewAt (or onboarding-complete date if never reviewed) -- the field CLAUDE.md itself named as "currently recorded but consumed by NOTHING."' },
  { code: 'CPL-06', name: 'Open Data Breach Register Entries', category: 'Compliance', direction: 'LOWER_BETTER', isZeroTolerance: true, riskAppetiteCategoryRef: 'Compliance — Regulatory', computeStatus: 'INSTRUMENTED', notes: 'Invariant 57(b)(iv) (CHECK15, NDPA/GAID): count of data_breach_register_entry rows not yet CLOSED -- "feeds the risk module" per the charter\'s own phrasing. Zero-tolerance since an open NDPC/data-subject notification obligation is a live statutory exposure, not a routine operational metric.' },
  { code: 'CPL-07', name: 'Screening List Freshness (days since last successful download)', category: 'Compliance', direction: 'LOWER_BETTER', computeStatus: 'INSTRUMENTED', notes: 'Invariant 72(a) (CHECK26): worst-case (max) days-since-last-successful-download across every ACTIVE, non-parked ScreeningListSource. Informational (no matrix row governs list-staleness yet) -- a never-downloaded ACTIVE source reports null/N/A honestly rather than a fabricated "0 days".' },
  // ---- OR: Operational ----
  { code: 'OR-01', name: 'Monthly Op Loss Rate', category: 'Operational', direction: 'LOWER_BETTER', riskAppetiteCategoryRef: 'Operational Risk', computeStatus: 'NOT_YET_INSTRUMENTED', notes: 'No operational-loss-event register in schema yet.' },
  { code: 'OR-02', name: 'System Downtime Hrs/Month', category: 'Operational', direction: 'LOWER_BETTER', riskAppetiteCategoryRef: 'Operational Risk', computeStatus: 'NOT_YET_INSTRUMENTED', notes: 'Manual input per ERM v2.0 changelog — no data-entry screen built yet.' },
  { code: 'OR-03', name: 'Active Deployments Past Maturity Without Closure', category: 'Operational', direction: 'LOWER_BETTER', riskAppetiteCategoryRef: 'Operational Risk', computeStatus: 'NOT_YET_INSTRUMENTED', notes: 'Needs a maturity-vs-closure-status query over product accounts; deferred.' },
  // ---- IM: Investment ----
  { code: 'IM-01', name: 'Largest Portfolio Concentration', category: 'Investment', direction: 'LOWER_BETTER', riskAppetiteCategoryRef: 'Investment — Concentration', computeStatus: 'NOT_YET_INSTRUMENTED', notes: 'Needs an asset-class exposure model; deferred to the portfolio-stress service (task 53).' },
  { code: 'IM-02', name: 'Level 3 Illiquid Asset Ratio', category: 'Investment', direction: 'LOWER_BETTER', computeStatus: 'NOT_YET_INSTRUMENTED', notes: 'DQ-14 correction requires a liquidity_class field on exposures; not yet modeled — deferred to task 53 (portfolio stress).' },
  { code: 'IM-03', name: 'Weighted Average Portfolio Return %', category: 'Investment', direction: 'HIGHER_BETTER', computeStatus: 'NOT_YET_INSTRUMENTED' },
  { code: 'IM-04', name: 'Return Underperformance vs Benchmark', category: 'Investment', direction: 'LOWER_BETTER', computeStatus: 'NOT_YET_INSTRUMENTED' },
  // ---- BZ: Business ----
  { code: 'BZ-01', name: 'Revenue vs Budget', category: 'Business', direction: 'HIGHER_BETTER', riskAppetiteCategoryRef: 'Revenue', computeStatus: 'INSTRUMENTED', notes: 'DQ-13 corrected: derives from GL actuals vs ACTIVE budget_line, no hardcoded revenue-stream figures.' },
  { code: 'BZ-04', name: 'Cost Coverage Ratio', category: 'Business', direction: 'HIGHER_BETTER', riskAppetiteCategoryRef: 'Revenue', computeStatus: 'INSTRUMENTED' },
  { code: 'BZ-05', name: 'Breakeven AUM', category: 'Business', direction: 'HIGHER_BETTER', riskAppetiteCategoryRef: 'Revenue', computeStatus: 'INSTRUMENTED', notes: "Not in C6's numbered 29 but explicitly required by Phase4 Directive §3 (F-BZ-05) — added here so it has one home rather than none." },
  { code: 'BZ-06', name: 'Investor Concentration (Largest Investor %)', category: 'Business', direction: 'LOWER_BETTER', riskAppetiteCategoryRef: 'Investment — Concentration', computeStatus: 'INSTRUMENTED' },
  { code: 'BZ-07', name: 'Investor Redemption Notice Coverage', category: 'Business', direction: 'HIGHER_BETTER', computeStatus: 'NOT_YET_INSTRUMENTED', notes: 'No redemption-notice-period field on investor_mandate yet.' },
  // ---- Platform additions (rulings) ----
  { code: 'CAPITAL-TRANS', name: 'Capital Transition vs Funding-Plan Milestones', category: 'Platform', direction: 'HIGHER_BETTER', riskAppetiteCategoryRef: 'Treasury — Capital Adequacy', computeStatus: 'NOT_YET_INSTRUMENTED', notes: 'Needs a funding-plan-milestone register (rights issue / private placement / retained earnings tranches) not yet built.' },
  { code: 'HIBAH-FREQ', name: 'Hibah Frequency', category: 'Platform', direction: 'LOWER_BETTER', computeStatus: 'INSTRUMENTED', notes: 'Informational Shariah-dashboard monitor (not RAG-banded against a matrix row) — count of distribution_line_item rows with hibah_kobo > 0.' },
  { code: 'HIBAH-CUML', name: 'Hibah Cumulative Value', category: 'Platform', direction: 'LOWER_BETTER', computeStatus: 'INSTRUMENTED', notes: 'Informational — sum of hibah_kobo across all distribution_line_item rows to date.' },
  { code: 'POOL-SVC-RATIO', name: 'Pool Servicing Cost Ratio', category: 'Platform', direction: 'LOWER_BETTER', computeStatus: 'INSTRUMENTED', notes: 'SRS v1.1 AMD-03 recommended KRI: servicing opex / Mudarib PSR income.' },
  { code: 'ND-PROV-AGE', name: 'Provisional Accrual Aging', category: 'Platform', direction: 'LOWER_BETTER', computeStatus: 'INSTRUMENTED', notes: 'PART E §E7 — provisional ND-mandate accruals outstanding beyond kri_engine_config.provisional_accrual_aging_days without declaration.' },
];

// KRI-030..040 — the 11 reserved slots from C6 ("Reserved — Not Yet
// Instrumented"), never a fake green.
for (let i = 30; i <= 40; i++) {
  KRI_ROSTER.push({
    code: `KRI-${String(i).padStart(3, '0')}`,
    name: 'Reserved — Not Yet Instrumented',
    category: 'Reserved',
    direction: 'LOWER_BETTER',
    computeStatus: 'RESERVED',
  });
}
