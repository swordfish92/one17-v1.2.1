import 'dotenv/config';
// Invariant 43(a) (CHECK10): the governed metric definition catalog.
// "No metric ships without one." Standalone script (not folded into
// prisma/seed.ts) because it needs a real AppUser as createdByUserId --
// prisma/seed.ts is the config-only, zero-demo-data production seed
// (RUNBOOK.md §4) and deliberately creates no people. Run this AFTER
// scripts/bootstrap-admin.ts (production) or walkthrough-seed.ts (demo)
// so a real SUPER_ADMIN/staff user already exists.
import { PrismaService } from '../src/prisma/prisma.service';

function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string): never { console.error(`FAIL: ${label}`); process.exit(1); }

const DEFINITIONS = [
  {
    metricCode: 'CEO_DASHBOARD.TOTAL_AUM',
    version: 2,
    displayLabel: 'Total AUM (₦)',
    screenCode: 'CEO_DASHBOARD',
    businessMeaning: 'Total assets under management across every live product holding, all three product types.',
    sourceTablesAndJoins: 'SUM(product_account.principal_or_committed_kobo WHERE status=ACTIVE) + SUM(nd_mandate_account.committed_capital_kobo WHERE status=ACTIVE AND committed_capital_kobo IS NOT NULL). Two separate queries, summed in application code (DashboardService.totalAumKobo) -- no single SQL join spans both tables since they have no common key beyond investor_id.',
    inclusionExclusionRules: 'INCLUDES: ACTIVE product_account rows (Halal Fund + Mudarabah Pool) at cost/committed value (never mark-to-market NAV -- see invariant 44a, pool never gets a market value at all); ACTIVE nd_mandate_account rows with a non-null committed_capital_kobo. EXCLUDES: DRAFT/MATURED/CLOSED product accounts; DRAFT nd_mandate_account rows (not yet activated); FUND/POOL participantType mandates (their capital lives on the participant entity\'s own books, invariant 6a inter-entity rule -- counting it here would double-count). v1 (superseded) summed ONLY product_account, silently excluding every ND Mandate holding -- the defect the CEO\'s advisor named.',
    ownerRoleCode: 'FIN_ADMIN',
    ledgerReconcilable: false,
  },
  {
    metricCode: 'CEO_DASHBOARD.TOTAL_INVESTORS',
    version: 2,
    displayLabel: 'Total Investors',
    screenCode: 'CEO_DASHBOARD',
    businessMeaning: 'Count of distinct investors holding an active position in any product, across all three product types.',
    sourceTablesAndJoins: 'COUNT(DISTINCT investorId) across product_account.investor_id (status=ACTIVE) UNION nd_mandate_account.investor_id (status=ACTIVE, investor_id IS NOT NULL). Computed as a JS Set union in DashboardService.totalInvestorsCount, not a SQL UNION, since the two tables have no FK to each other.',
    inclusionExclusionRules: 'INCLUDES: any investor with at least one ACTIVE holding in ProductAccount OR NdMandateAccount. EXCLUDES: investors with only DRAFT/MATURED/CLOSED accounts; FUND/POOL participantType mandates (investorId is null for those by construction). v1 (superseded) counted ONLY product_account investors (335 on the 502-investor walkthrough data set) -- the defect the CEO\'s advisor named by exact figure; v2 correctly reads 502.',
    ownerRoleCode: 'FIN_ADMIN',
    ledgerReconcilable: false,
  },
  {
    metricCode: 'CEO_DASHBOARD.LARGEST_EXPOSURE',
    version: 1,
    displayLabel: 'Largest Exposure (₦)',
    screenCode: 'CEO_DASHBOARD',
    businessMeaning: 'Largest single-counterparty exposure at default (EAD), from the latest COUNTERPARTY_DEFAULT stress run.',
    sourceTablesAndJoins: 'MAX(counterparty_transaction.amount_kobo WHERE txn_type=PLACEMENT AND status=POSTED, grouped by counterparty) -- computed in StressEngineService.runCounterpartyDefaultStress, read here from the latest stress_test_run.outputs snapshot.',
    inclusionExclusionRules: 'INCLUDES: POSTED PLACEMENT transactions per counterparty with a non-null probabilityOfDefaultPct. EXCLUDES: counterparties with no PD set (not modeled). Invariant 43(b): counterparty_transaction is an operational table, not journal-verified -- marked NOT ledger-reconcilable pending a governed GL mapping for counterparty exposure (no ACTIVE LedgerReconciliationConfig exists for this metric; see QUESTIONS_FOR_REVIEW.md).',
    ownerRoleCode: 'FIN_ADMIN',
    ledgerReconcilable: false,
  },
  {
    metricCode: 'CEO_DASHBOARD.TOTAL_EL',
    version: 1,
    displayLabel: 'Total EL (₦)',
    screenCode: 'CEO_DASHBOARD',
    businessMeaning: 'Total expected loss (EAD x PD x LGD) summed across all modeled counterparties, from the latest COUNTERPARTY_DEFAULT stress run.',
    sourceTablesAndJoins: 'SUM(per-counterparty elKobo) from StressEngineService.runCounterpartyDefaultStress outputs, read here from the latest stress_test_run.outputs snapshot.',
    inclusionExclusionRules: 'Same population as CEO_DASHBOARD.LARGEST_EXPOSURE. Invariant 43(b): same operational-table (not ledger-verified) status -- NOT ledger-reconcilable pending a governed GL mapping.',
    ownerRoleCode: 'FIN_ADMIN',
    ledgerReconcilable: false,
  },
  // Invariant 73(a) (CHECK27): the Dashboard Composer's own composable
  // catalog. requiredFunctionCode + composerResolverKey are BOTH set here
  // (both null on every row above -- documentation-only, not composer-
  // pickable). Deliberately spans several departments/capabilities so the
  // RBAC-filtered picker has genuine separation to prove -- see
  // composable-metric-registry.ts's own header comment for the exact
  // adversarial rationale ("a Compliance head never even sees payroll
  // metrics").
  {
    metricCode: 'COMPOSER.OPEN_ENCUMBRANCES',
    version: 1,
    displayLabel: 'Open Encumbrances',
    screenCode: 'DASHBOARD_COMPOSER',
    businessMeaning: 'Count of budget-line encumbrances currently OPEN (committed but not yet fully matched/closed).',
    sourceTablesAndJoins: 'COUNT(encumbrance WHERE status=OPEN).',
    inclusionExclusionRules: 'INCLUDES: OPEN status only. EXCLUDES: MATCHED/CLOSED/CANCELLED.',
    ownerRoleCode: 'CORP_SERVICES',
    ledgerReconcilable: false,
    requiredFunctionCode: 'PROCUREMENT_OPERATIONS',
    composerResolverKey: 'open_encumbrances_count',
  },
  {
    metricCode: 'COMPOSER.ISSUED_PURCHASE_ORDERS',
    version: 1,
    displayLabel: 'Issued Purchase Orders',
    screenCode: 'DASHBOARD_COMPOSER',
    businessMeaning: 'Count of purchase orders in ISSUED status (sent to vendor, awaiting goods receipt).',
    sourceTablesAndJoins: 'COUNT(purchase_order WHERE status=ISSUED).',
    inclusionExclusionRules: 'INCLUDES: ISSUED only. EXCLUDES: DRAFT/RECEIVED/MATCHED/CLOSED/CANCELLED.',
    ownerRoleCode: 'CORP_SERVICES',
    ledgerReconcilable: false,
    requiredFunctionCode: 'PROCUREMENT_OPERATIONS',
    composerResolverKey: 'issued_purchase_orders_count',
  },
  {
    metricCode: 'COMPOSER.PAYROLL_RUNS_YTD',
    version: 1,
    displayLabel: 'Payroll Runs YTD',
    screenCode: 'DASHBOARD_COMPOSER',
    businessMeaning: 'Count of payroll runs generated in the current calendar year, any status.',
    sourceTablesAndJoins: 'COUNT(payroll_run WHERE period_year = current year).',
    inclusionExclusionRules: 'Every status (DRAFT through PAID) counts -- this is an activity-volume metric, not a completion metric.',
    ownerRoleCode: 'HR_ADMIN',
    ledgerReconcilable: false,
    requiredFunctionCode: 'PAYROLL_PREPARATION',
    composerResolverKey: 'payroll_runs_ytd_count',
  },
  {
    metricCode: 'COMPOSER.ACTIVE_HEADCOUNT',
    version: 1,
    displayLabel: 'Active Headcount',
    screenCode: 'DASHBOARD_COMPOSER',
    businessMeaning: 'Count of employees currently in ACTIVE status.',
    sourceTablesAndJoins: 'COUNT(employee WHERE status=ACTIVE).',
    inclusionExclusionRules: 'INCLUDES: ACTIVE only. EXCLUDES: TERMINATED/SUSPENDED and any other non-active status.',
    ownerRoleCode: 'HR_ADMIN',
    ledgerReconcilable: false,
    requiredFunctionCode: 'PAYROLL_PREPARATION',
    composerResolverKey: 'active_headcount',
  },
  {
    metricCode: 'COMPOSER.OPEN_COMPLAINTS',
    version: 1,
    displayLabel: 'Open Complaints',
    screenCode: 'DASHBOARD_COMPOSER',
    businessMeaning: 'Count of complaints not yet resolved or closed (OPEN or IN_PROGRESS).',
    sourceTablesAndJoins: 'COUNT(complaint WHERE status IN (OPEN, IN_PROGRESS)).',
    inclusionExclusionRules: 'INCLUDES: OPEN, IN_PROGRESS. EXCLUDES: RESOLVED, CLOSED.',
    ownerRoleCode: 'COMPLIANCE',
    ledgerReconcilable: false,
    requiredFunctionCode: 'COMPLAINT_MANAGEMENT',
    composerResolverKey: 'open_complaints_count',
  },
  {
    metricCode: 'COMPOSER.COMPLAINTS_BREACHED_SLA',
    version: 1,
    displayLabel: 'Complaints Past SLA',
    screenCode: 'DASHBOARD_COMPOSER',
    businessMeaning: 'Count of still-open complaints whose SLA due date has already passed.',
    sourceTablesAndJoins: 'COUNT(complaint WHERE status IN (OPEN, IN_PROGRESS) AND sla_due_at < NOW()).',
    inclusionExclusionRules: 'Same population as COMPOSER.OPEN_COMPLAINTS, further filtered to slaDueAt in the past.',
    ownerRoleCode: 'COMPLIANCE',
    ledgerReconcilable: false,
    requiredFunctionCode: 'COMPLAINT_MANAGEMENT',
    composerResolverKey: 'complaints_breached_sla_count',
  },
  {
    metricCode: 'COMPOSER.OPEN_SCREENING_HITS',
    version: 1,
    displayLabel: 'Open Screening Hits',
    screenCode: 'DASHBOARD_COMPOSER',
    businessMeaning: 'Count of sanctions screening hits still awaiting Compliance/IC adjudication (invariant 72b).',
    sourceTablesAndJoins: 'COUNT(screening_hit WHERE status=OPEN).',
    inclusionExclusionRules: 'INCLUDES: OPEN only. EXCLUDES: ADJUDICATED.',
    ownerRoleCode: 'COMPLIANCE',
    ledgerReconcilable: false,
    requiredFunctionCode: 'SCREENING_PERFORM',
    composerResolverKey: 'open_screening_hits_count',
  },
  {
    metricCode: 'COMPOSER.TOTAL_INVESTOR_COUNT',
    version: 1,
    displayLabel: 'Total Investors on File',
    screenCode: 'DASHBOARD_COMPOSER',
    businessMeaning: 'Raw count of every Investor row, any fund status.',
    sourceTablesAndJoins: 'COUNT(investor).',
    inclusionExclusionRules: 'Every investor row, unfiltered -- distinct from CEO_DASHBOARD.TOTAL_INVESTORS which counts only investors with an ACTIVE holding.',
    ownerRoleCode: 'CBGO',
    ledgerReconcilable: false,
    requiredFunctionCode: 'BD_DASHBOARD',
    composerResolverKey: 'total_investor_count',
  },
  {
    metricCode: 'COMPOSER.PUBLIC_INTAKE_PENDING',
    version: 1,
    displayLabel: 'Public Intake Pending Review',
    screenCode: 'DASHBOARD_COMPOSER',
    businessMeaning: 'Count of public self-registration/enquiry submissions still awaiting staff review.',
    sourceTablesAndJoins: 'COUNT(public_intake_submission WHERE status=PENDING).',
    inclusionExclusionRules: 'INCLUDES: PENDING only. EXCLUDES: PROMOTED/REJECTED.',
    ownerRoleCode: 'CBGO',
    ledgerReconcilable: false,
    requiredFunctionCode: 'BD_DASHBOARD',
    composerResolverKey: 'public_intake_pending_count',
  },
  {
    metricCode: 'COMPOSER.ACCOUNTING_PERIODS_OPEN',
    version: 1,
    displayLabel: 'Open Accounting Periods',
    screenCode: 'DASHBOARD_COMPOSER',
    businessMeaning: 'Count of accounting periods (across all ledger entities) currently OPEN for posting.',
    sourceTablesAndJoins: 'COUNT(accounting_period WHERE status=OPEN).',
    inclusionExclusionRules: 'INCLUDES: OPEN only. EXCLUDES: CLOSED.',
    ownerRoleCode: 'FIN_ADMIN',
    ledgerReconcilable: false,
    requiredFunctionCode: 'FINANCIAL_STATEMENTS',
    composerResolverKey: 'accounting_periods_open_count',
  },
  {
    metricCode: 'COMPOSER.RISK_APPETITE_RED_COUNT',
    version: 1,
    displayLabel: 'KRIs in RED (latest batch)',
    screenCode: 'DASHBOARD_COMPOSER',
    businessMeaning: 'Count of aggregate KRI readings at RED RAG status in the most recent daily KRI batch.',
    sourceTablesAndJoins: 'COUNT(kri_reading WHERE is_aggregate=true AND reading_date=(latest) AND rag_status=RED).',
    inclusionExclusionRules: 'Only the most recent readingDate\'s aggregate rows. If no batch has ever run, reports honest N/A (NOT_INSTRUMENTED), never a fabricated zero.',
    ownerRoleCode: 'CRAO',
    ledgerReconcilable: false,
    requiredFunctionCode: 'RISK_APPETITE_MATRIX',
    composerResolverKey: 'risk_appetite_red_count',
  },
];

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const admin = await prisma.appUser.findFirst({
    where: { roles: { some: { roleCode: 'SUPER_ADMIN' } } },
    orderBy: { createdAt: 'asc' },
  });
  if (!admin) fail('No SUPER_ADMIN user found on this database -- run scripts/bootstrap-admin.ts or scripts/walkthrough-seed.ts first.');

  for (const def of DEFINITIONS) {
    const existing = await prisma.metricDefinition.findUnique({
      where: { metricCode_version: { metricCode: def.metricCode, version: def.version } },
    });
    if (existing) { ok(`${def.metricCode} v${def.version} already on file (idempotent re-run)`); continue; }
    // Supersede any prior ACTIVE version of the same metric.
    await prisma.metricDefinition.updateMany({
      where: { metricCode: def.metricCode, status: 'ACTIVE' },
      data: { status: 'SUPERSEDED' },
    });
    await prisma.metricDefinition.create({ data: { ...def, createdByUserId: admin!.id } });
    ok(`${def.metricCode} v${def.version} recorded`);
  }
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
