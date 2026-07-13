// Run with: npx tsx src/dashboard/role-dashboards.smoke.ts
// Invariant 58 (CHECK14): proves the three new role operational dashboards
// (Company Accounting, Fund Accounting, BD) against the REAL live DB --
// each service runs end-to-end, returns the DashboardGroup[] shape every
// screen renders, and the aging/funnel arithmetic this tranche newly
// instrumented is checked against known inputs, not just "didn't throw."
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { LedgerService } from '../ledger/ledger.service';
import { ReconciliationService } from '../reconciliation/reconciliation.service';
import { ReportingService } from '../reporting/reporting.service';
import { CompanyAccountingDashboardService, CompanyAccountingDashboardError } from './company-accounting-dashboard.service';
import { FundAccountingDashboardService } from './fund-accounting-dashboard.service';
import { BdDashboardService } from './bd-dashboard.service';
import { bucketByAge, daysBetween } from './dashboard-aging.util';

let failed = false;
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const ledger = new LedgerService(prisma, audit, delegation, workflow);
  const reconciliation = new ReconciliationService(prisma);
  const reporting = new ReportingService(prisma, audit, delegation, workflow, ledger);

  // --- Pure aging-bucket arithmetic (invariant 58: the platform's first
  // AR/AP aging engine) -- known inputs, known buckets, no DB dependency.
  const today = new Date('2026-07-09T00:00:00Z');
  const buckets = bucketByAge([
    { ageDays: daysBetween(new Date('2026-07-01T00:00:00Z'), today), amountKobo: 1_000_00n }, // 8 days -> 0-30
    { ageDays: daysBetween(new Date('2026-06-01T00:00:00Z'), today), amountKobo: 2_000_00n }, // 38 days -> 31-60
    { ageDays: daysBetween(new Date('2026-05-01T00:00:00Z'), today), amountKobo: 3_000_00n }, // 69 days -> 61-90
    { ageDays: daysBetween(new Date('2026-01-01T00:00:00Z'), today), amountKobo: 4_000_00n }, // 189 days -> 90+
    { ageDays: daysBetween(new Date('2026-07-15T00:00:00Z'), today), amountKobo: 9_999_00n }, // NOT YET DUE -- must be excluded entirely
  ]);
  const b0 = buckets.find((b) => b.bucket === '0-30');
  const b31 = buckets.find((b) => b.bucket === '31-60');
  const b61 = buckets.find((b) => b.bucket === '61-90');
  const b90 = buckets.find((b) => b.bucket === '90+');
  if (b0?.amountKobo === '100000' && b31?.amountKobo === '200000' && b61?.amountKobo === '300000' && b90?.amountKobo === '400000') {
    ok('bucketByAge sorts 4 known-age items into the correct 0-30/31-60/61-90/90+ buckets');
  } else fail('bucketByAge bucket mismatch', buckets);
  const totalBucketed = buckets.reduce((s, b) => s + BigInt(b.amountKobo), 0n);
  if (totalBucketed === 10_000_00n) ok('bucketByAge excludes the not-yet-due item entirely (9,999.00 kobo never appears in any bucket)');
  else fail(`bucketByAge should total 1,000,000 kobo (4 overdue items only), got ${totalBucketed}`);

  // --- CompanyAccountingDashboardService: live DB, real shape.
  const companyDash = new CompanyAccountingDashboardService(prisma, reconciliation, reporting);
  const companyResult = await companyDash.getDashboard();
  const expectedCompanyGroups = ['INCOME_EXPENSE_VS_BUDGET', 'VARIANCE_BY_COST_CENTRE', 'RECEIVABLES_PAYABLES_AGEING', 'PENDING_POSTINGS', 'PERIOD_CLOSE_STATUS'];
  const companyGroupCodes = companyResult.groups.map((g) => g.groupCode);
  if (companyGroupCodes[0] === 'NO_COMPANY_ENTITY' || expectedCompanyGroups.every((c) => companyGroupCodes.includes(c))) {
    ok(`Company Accounting Dashboard returns the expected group set: ${companyGroupCodes.join(', ')}`);
  } else fail('Company Accounting Dashboard missing expected groups', companyGroupCodes);

  const incomeGroup = companyResult.groups.find((g) => g.groupCode === 'INCOME_EXPENSE_VS_BUDGET');
  const incomeMetric = incomeGroup?.metrics?.find((m) => m.label === 'Income — Current Period (₦)');
  if (incomeMetric && typeof incomeMetric.value === 'string' && incomeMetric.note?.includes('UNRECONCILED TO LEDGER')) {
    ok('Income tile routes through ReconciliationService and honestly reports UNRECONCILED TO LEDGER (no LedgerReconciliationConfig activated yet, invariant 43b)');
  } else if (incomeMetric?.reconTile) {
    ok('Income tile is ledger-reconciled (a LedgerReconciliationConfig has been activated) — recon tile present');
  } else fail('Income tile missing or in an unexpected shape', incomeMetric);

  // --- exportAsReportRun: proves the honest-refusal path when no ACTIVE
  // framework map exists, OR the success path if one does -- either way
  // proving the code path runs against real data, not assumed.
  const anyUser = await prisma.appUser.findFirst({ where: { status: 'ACTIVE' } });
  if (anyUser) {
    try {
      const exportResult = await companyDash.exportAsReportRun(anyUser.id);
      ok(`exportAsReportRun succeeded — report_run ${exportResult.reportRunId} created (an ACTIVE accounting_framework_map exists)`);
    } catch (err) {
      if (err instanceof CompanyAccountingDashboardError) {
        ok(`exportAsReportRun refused cleanly: "${err.message}"`);
      } else {
        fail('exportAsReportRun threw an unexpected error type', err);
      }
    }
  } else {
    fail('No active AppUser found to test exportAsReportRun with');
  }

  // --- FundAccountingDashboardService: live DB, per-fund shape.
  const fundDash = new FundAccountingDashboardService(prisma, reconciliation);
  const fundResult = await fundDash.getDashboard();
  const expectedFundGroups = ['NAV_AND_UNITS', 'SUBSCRIPTION_REDEMPTION_PIPELINE', 'ACCRUALS_VS_FEES', 'DISTRIBUTION_LIFECYCLE', 'FUND_RECEIVABLES_AGEING', 'UPCOMING_SCHEDULER_RUNS'];
  if (fundResult.funds.length > 0) {
    const firstFund = fundResult.funds[0];
    const fundGroupCodes = firstFund.groups.map((g) => g.groupCode);
    if (expectedFundGroups.every((c) => fundGroupCodes.includes(c))) {
      ok(`Fund Accounting Dashboard returns ${fundResult.funds.length} fund(s), each with the expected 6 groups`);
    } else fail(`Fund ${firstFund.ledgerEntityCode} missing expected groups`, fundGroupCodes);
  } else {
    ok('Fund Accounting Dashboard returns an empty fund list (no FUND/POOL ledger entities) -- honest empty state, not an error');
  }

  // --- BdDashboardService: live DB, funnel shape, own vs enterprise scope.
  const bdDash = new BdDashboardService(prisma);
  if (anyUser) {
    const bdOwn = await bdDash.getDashboard(anyUser.id, 'own');
    const bdEnterprise = await bdDash.getDashboard(anyUser.id, 'enterprise');
    const expectedBdGroups = ['MOBILIZATION', 'LEAD_FUNNEL', 'AUM_GROWTH_ATTRIBUTION', 'MARKETING_PERFORMANCE', 'RETENTION_WORKLIST'];
    const bdOwnCodes = bdOwn.groups.map((g) => g.groupCode);
    if (expectedBdGroups.every((c) => bdOwnCodes.includes(c))) {
      ok(`BD Dashboard (scope=own) returns the expected 5 groups: ${bdOwnCodes.join(', ')}`);
    } else fail('BD Dashboard missing expected groups', bdOwnCodes);

    const funnelGroup = bdOwn.groups.find((g) => g.groupCode === 'LEAD_FUNNEL');
    const funnelRows = (funnelGroup?.tableRows ?? []) as { stage: string; count: number }[];
    if (funnelRows.length === 5 && funnelRows[0].stage === 'Public Intake (pending)' && funnelRows[4].stage === 'Funded') {
      ok('Lead funnel table has all 5 live-derived stages in the correct order (Public Intake -> Lead -> Express -> Full KYC -> Funded)');
    } else fail('Lead funnel table has an unexpected shape', funnelRows);

    const enterpriseMobilization = bdEnterprise.groups.find((g) => g.groupCode === 'MOBILIZATION')?.metrics?.find((m) => m.label === 'Total Mobilized (₦)')?.value;
    const ownMobilization = bdOwn.groups.find((g) => g.groupCode === 'MOBILIZATION')?.metrics?.find((m) => m.label === 'Total Mobilized (₦)')?.value;
    if (typeof enterpriseMobilization === 'string' && typeof ownMobilization === 'string' && BigInt(enterpriseMobilization) >= BigInt(ownMobilization)) {
      ok(`scope=enterprise total mobilized (₦${enterpriseMobilization} kobo) >= scope=own for the same user (₦${ownMobilization} kobo) -- the officer filter genuinely narrows the query`);
    } else fail('scope=own vs scope=enterprise mobilization comparison failed', { ownMobilization, enterpriseMobilization });
  } else {
    fail('No active AppUser found to test BdDashboardService with');
  }

  // --- Capability seeding: the three new dashboard capabilities exist
  // with exactly the named seats (invariant 58d's "correct VIEW grants
  // from day one").
  const companyGrants = await prisma.rolePermission.findMany({ where: { functionCode: 'COMPANY_ACCOUNTING_DASHBOARD' } });
  const fundGrants = await prisma.rolePermission.findMany({ where: { functionCode: 'FUND_ACCOUNTING_DASHBOARD' } });
  const bdGrants = await prisma.rolePermission.findMany({ where: { functionCode: 'BD_DASHBOARD' } });
  const companyRoles = new Set(companyGrants.map((g) => g.roleCode));
  const fundRoles = new Set(fundGrants.map((g) => g.roleCode));
  const bdRoles = new Set(bdGrants.map((g) => g.roleCode));
  if (['COMP_ACCT', 'MGR_FINCON', 'CFO'].every((r) => companyRoles.has(r)) && companyRoles.size === 3) {
    ok('COMPANY_ACCOUNTING_DASHBOARD grants exactly COMP_ACCT/MGR_FINCON/CFO -- no AUDITOR/MD_CEO broadening (landing-page ambiguity guard, invariant 58d)');
  } else fail('COMPANY_ACCOUNTING_DASHBOARD grant set unexpected', [...companyRoles]);
  if (['FUND_ACCT', 'MGR_FINCON', 'CFO'].every((r) => fundRoles.has(r)) && fundRoles.size === 3) {
    ok('FUND_ACCOUNTING_DASHBOARD grants exactly FUND_ACCT/MGR_FINCON/CFO');
  } else fail('FUND_ACCOUNTING_DASHBOARD grant set unexpected', [...fundRoles]);
  if (['BD', 'MGR_BD', 'CBGO', 'REL_OFF', 'MKT_OFF'].every((r) => bdRoles.has(r)) && bdRoles.size === 5) {
    ok('BD_DASHBOARD grants exactly BD/MGR_BD/CBGO/REL_OFF/MKT_OFF');
  } else fail('BD_DASHBOARD grant set unexpected', [...bdRoles]);

  // --- MetricDefinition rows: the first this table has ever carried.
  const metricDefs = await prisma.metricDefinition.findMany({ where: { metricCode: { startsWith: 'COMPANY_ACCT_DASHBOARD.' } } });
  if (metricDefs.length === 4 && metricDefs.every((m) => m.status === 'ACTIVE')) {
    ok('4 COMPANY_ACCT_DASHBOARD.* metric_definition rows exist, all ACTIVE (invariant 43a, first population of this table)');
  } else fail(`expected 4 ACTIVE COMPANY_ACCT_DASHBOARD.* metric_definition rows, got ${metricDefs.length}`, metricDefs.map((m) => m.metricCode));

  console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — role operational dashboards (invariant 58, CHECK14) against the real live DB.`);
  process.exitCode = failed ? 1 : 0;
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
