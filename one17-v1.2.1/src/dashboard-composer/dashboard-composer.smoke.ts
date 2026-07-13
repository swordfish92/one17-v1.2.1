import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { DashboardComposerService } from './dashboard-composer.service';

const RUN = Date.now().toString().slice(-8);

async function expectReject(label: string, fn: () => Promise<unknown>) {
  try {
    await fn();
    console.error(`FAIL (expected rejection): ${label}`);
    process.exitCode = 1;
  } catch (err) {
    console.log(`OK: rejected as expected: ${label} — ${(err as Error).message.split('\n')[0]}`);
  }
}
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); process.exitCode = 1; }

// Invariant 73(a) (CHECK27) adversarial set: proves the Composer's central
// discipline -- compose-time RBAC filtering of the picker, a hard server-side
// re-check on save (never trusting a client-supplied tile list), and a
// render-time re-check keyed to the CURRENT VIEWER (not the original
// composer) that redacts per-tile rather than failing the whole dashboard.
async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));
  const composer = new DashboardComposerService(prisma, audit, delegation);

  const orgUnitA = `DASH_SMOKE_A_${RUN}`;
  const orgUnitB = `DASH_SMOKE_B_${RUN}`;
  await prisma.orgUnit.create({ data: { code: orgUnitA, name: 'Dash Smoke Dept A' } });
  await prisma.orgUnit.create({ data: { code: orgUnitB, name: 'Dash Smoke Dept B' } });
  const posA = await prisma.position.create({ data: { title: `Dash Smoke A ${RUN}`, orgUnitCode: orgUnitA, cadre: 'Snr Associate 1', notch: 1 } });
  const posB = await prisma.position.create({ data: { title: `Dash Smoke B ${RUN}`, orgUnitCode: orgUnitB, cadre: 'Snr Associate 1', notch: 1 } });

  const makeUser = async (label: string, roleCodes: string[], orgUnitCode: string, position: { id: string }) => {
    const email = `dashcomp-smoke-${label}-${RUN}@one17.test`;
    const user = await prisma.appUser.create({ data: { email, displayName: email } });
    for (const roleCode of roleCodes) await rbac.assignRole({ userId: user.id, roleCode });
    const employee = await prisma.employee.create({ data: { surname: label, firstName: `Dash${RUN}`, positionId: position.id, orgUnitCode, appUserId: user.id, hireDate: new Date() } });
    return { user, employee };
  };

  // procOfficer: PROCUREMENT_OPERATIONS only, org unit A. Composes PERSONAL.
  const { user: procOfficer } = await makeUser('procofficer', ['CORP_SERVICES'], orgUnitA, posA);
  // deptChiefA: PROCUREMENT_OPERATIONS + DASHBOARD_COMPOSER_PUBLISH, org unit A. Publishes DEPARTMENT.
  const { user: deptChiefA } = await makeUser('deptchief', ['CORP_SERVICES', 'DEPT_CHIEF'], orgUnitA, posA);
  // staffSameDeptA: PROCUREMENT_OPERATIONS, org unit A (same dept as deptChiefA, no publish right).
  const { user: staffSameDeptA } = await makeUser('staffsame', ['CORP_SERVICES'], orgUnitA, posA);
  // staffOtherDeptB: PROCUREMENT_OPERATIONS too, but a DIFFERENT org unit.
  const { user: staffOtherDeptB } = await makeUser('staffother', ['CORP_SERVICES'], orgUnitB, posB);
  // outsiderNoProc: COMPLIANCE role (no PROCUREMENT_OPERATIONS), same org unit A as deptChiefA -- proves per-tile redaction is capability-driven, not just org-scope-driven.
  const { user: outsiderNoProc } = await makeUser('outsider', ['COMPLIANCE'], orgUnitA, posA);
  // complianceUser: COMPLIANCE role, used purely for the cross-department picker-separation proof.
  const { user: complianceUser } = await makeUser('compliance', ['COMPLIANCE'], orgUnitB, posB);

  // Composer-eligible MetricDefinition rows are seeded by the standalone
  // scripts/check10-seed-metric-definitions.ts (deliberately NOT folded
  // into prisma/seed.ts -- that script is the config-only, zero-demo-data
  // production seed and creates no people, while MetricDefinition.
  // createdByUserId is a real FK). A genuinely fresh DB (exactly what
  // RES-001's clean-room release gate provisions) never runs that
  // standalone script, so the picker would be empty for everyone -- ensure
  // the rows this suite actually exercises exist here, idempotently,
  // matching every other smoke test's self-contained-fixture convention
  // rather than depending on an external script having already run.
  const COMPOSER_METRIC_FIXTURES: { metricCode: string; version: number; displayLabel: string; screenCode: string; businessMeaning: string; sourceTablesAndJoins: string; inclusionExclusionRules: string; ownerRoleCode: string; ledgerReconcilable: boolean; requiredFunctionCode: string; composerResolverKey: string }[] = [
    { metricCode: 'COMPOSER.OPEN_ENCUMBRANCES', version: 1, displayLabel: 'Open Encumbrances', screenCode: 'DASHBOARD_COMPOSER', businessMeaning: 'Count of budget-line encumbrances currently OPEN (committed but not yet fully matched/closed).', sourceTablesAndJoins: 'COUNT(encumbrance WHERE status=OPEN).', inclusionExclusionRules: 'INCLUDES: OPEN status only. EXCLUDES: MATCHED/CLOSED/CANCELLED.', ownerRoleCode: 'CORP_SERVICES', ledgerReconcilable: false, requiredFunctionCode: 'PROCUREMENT_OPERATIONS', composerResolverKey: 'open_encumbrances_count' },
    { metricCode: 'COMPOSER.ISSUED_PURCHASE_ORDERS', version: 1, displayLabel: 'Issued Purchase Orders', screenCode: 'DASHBOARD_COMPOSER', businessMeaning: 'Count of purchase orders in ISSUED status (sent to vendor, awaiting goods receipt).', sourceTablesAndJoins: 'COUNT(purchase_order WHERE status=ISSUED).', inclusionExclusionRules: 'INCLUDES: ISSUED only. EXCLUDES: DRAFT/RECEIVED/MATCHED/CLOSED/CANCELLED.', ownerRoleCode: 'CORP_SERVICES', ledgerReconcilable: false, requiredFunctionCode: 'PROCUREMENT_OPERATIONS', composerResolverKey: 'issued_purchase_orders_count' },
    { metricCode: 'COMPOSER.PAYROLL_RUNS_YTD', version: 1, displayLabel: 'Payroll Runs YTD', screenCode: 'DASHBOARD_COMPOSER', businessMeaning: 'Count of payroll runs generated in the current calendar year, any status.', sourceTablesAndJoins: 'COUNT(payroll_run WHERE period_year = current year).', inclusionExclusionRules: 'Every status (DRAFT through PAID) counts -- this is an activity-volume metric, not a completion metric.', ownerRoleCode: 'HR_ADMIN', ledgerReconcilable: false, requiredFunctionCode: 'PAYROLL_PREPARATION', composerResolverKey: 'payroll_runs_ytd_count' },
    { metricCode: 'COMPOSER.ACTIVE_HEADCOUNT', version: 1, displayLabel: 'Active Headcount', screenCode: 'DASHBOARD_COMPOSER', businessMeaning: 'Count of employees currently in ACTIVE status.', sourceTablesAndJoins: 'COUNT(employee WHERE status=ACTIVE).', inclusionExclusionRules: 'INCLUDES: ACTIVE only. EXCLUDES: TERMINATED/SUSPENDED and any other non-active status.', ownerRoleCode: 'HR_ADMIN', ledgerReconcilable: false, requiredFunctionCode: 'PAYROLL_PREPARATION', composerResolverKey: 'active_headcount' },
    { metricCode: 'COMPOSER.OPEN_COMPLAINTS', version: 1, displayLabel: 'Open Complaints', screenCode: 'DASHBOARD_COMPOSER', businessMeaning: 'Count of complaints not yet resolved or closed (OPEN or IN_PROGRESS).', sourceTablesAndJoins: 'COUNT(complaint WHERE status IN (OPEN, IN_PROGRESS)).', inclusionExclusionRules: 'INCLUDES: OPEN, IN_PROGRESS. EXCLUDES: RESOLVED, CLOSED.', ownerRoleCode: 'COMPLIANCE', ledgerReconcilable: false, requiredFunctionCode: 'COMPLAINT_MANAGEMENT', composerResolverKey: 'open_complaints_count' },
    { metricCode: 'COMPOSER.COMPLAINTS_BREACHED_SLA', version: 1, displayLabel: 'Complaints Past SLA', screenCode: 'DASHBOARD_COMPOSER', businessMeaning: 'Count of still-open complaints whose SLA due date has already passed.', sourceTablesAndJoins: 'COUNT(complaint WHERE status IN (OPEN, IN_PROGRESS) AND sla_due_at < NOW()).', inclusionExclusionRules: 'Same population as COMPOSER.OPEN_COMPLAINTS, further filtered to slaDueAt in the past.', ownerRoleCode: 'COMPLIANCE', ledgerReconcilable: false, requiredFunctionCode: 'COMPLAINT_MANAGEMENT', composerResolverKey: 'complaints_breached_sla_count' },
    { metricCode: 'COMPOSER.OPEN_SCREENING_HITS', version: 1, displayLabel: 'Open Screening Hits', screenCode: 'DASHBOARD_COMPOSER', businessMeaning: 'Count of sanctions screening hits still awaiting Compliance/IC adjudication (invariant 72b).', sourceTablesAndJoins: 'COUNT(screening_hit WHERE status=OPEN).', inclusionExclusionRules: 'INCLUDES: OPEN only. EXCLUDES: ADJUDICATED.', ownerRoleCode: 'COMPLIANCE', ledgerReconcilable: false, requiredFunctionCode: 'SCREENING_PERFORM', composerResolverKey: 'open_screening_hits_count' },
    { metricCode: 'COMPOSER.TOTAL_INVESTOR_COUNT', version: 1, displayLabel: 'Total Investors on File', screenCode: 'DASHBOARD_COMPOSER', businessMeaning: 'Raw count of every Investor row, any fund status.', sourceTablesAndJoins: 'COUNT(investor).', inclusionExclusionRules: 'Every investor row, unfiltered -- distinct from CEO_DASHBOARD.TOTAL_INVESTORS which counts only investors with an ACTIVE holding.', ownerRoleCode: 'CBGO', ledgerReconcilable: false, requiredFunctionCode: 'BD_DASHBOARD', composerResolverKey: 'total_investor_count' },
    { metricCode: 'COMPOSER.PUBLIC_INTAKE_PENDING', version: 1, displayLabel: 'Public Intake Pending Review', screenCode: 'DASHBOARD_COMPOSER', businessMeaning: 'Count of public self-registration/enquiry submissions still awaiting staff review.', sourceTablesAndJoins: 'COUNT(public_intake_submission WHERE status=PENDING).', inclusionExclusionRules: 'INCLUDES: PENDING only. EXCLUDES: PROMOTED/REJECTED.', ownerRoleCode: 'CBGO', ledgerReconcilable: false, requiredFunctionCode: 'BD_DASHBOARD', composerResolverKey: 'public_intake_pending_count' },
    { metricCode: 'COMPOSER.ACCOUNTING_PERIODS_OPEN', version: 1, displayLabel: 'Open Accounting Periods', screenCode: 'DASHBOARD_COMPOSER', businessMeaning: 'Count of accounting periods (across all ledger entities) currently OPEN for posting.', sourceTablesAndJoins: 'COUNT(accounting_period WHERE status=OPEN).', inclusionExclusionRules: 'INCLUDES: OPEN only. EXCLUDES: CLOSED.', ownerRoleCode: 'FIN_ADMIN', ledgerReconcilable: false, requiredFunctionCode: 'FINANCIAL_STATEMENTS', composerResolverKey: 'accounting_periods_open_count' },
    { metricCode: 'COMPOSER.RISK_APPETITE_RED_COUNT', version: 1, displayLabel: 'KRIs in RED (latest batch)', screenCode: 'DASHBOARD_COMPOSER', businessMeaning: 'Count of aggregate KRI readings at RED RAG status in the most recent daily KRI batch.', sourceTablesAndJoins: 'COUNT(kri_reading WHERE is_aggregate=true AND reading_date=(latest) AND rag_status=RED).', inclusionExclusionRules: 'Only the most recent readingDate\'s aggregate rows. If no batch has ever run, reports honest N/A (NOT_INSTRUMENTED), never a fabricated zero.', ownerRoleCode: 'CRAO', ledgerReconcilable: false, requiredFunctionCode: 'RISK_APPETITE_MATRIX', composerResolverKey: 'risk_appetite_red_count' },
  ];
  // createdByUserId must be a PERMANENT actor, never one of this suite's
  // own disposable fixture users -- MetricDefinition rows are real catalog
  // data (never cleaned up, matching check10-seed-metric-definitions.ts's
  // own permanence), so a disposable user here would deadlock this suite's
  // own final cleanup on the FK. prisma/seed.ts always provisions this
  // system actor directly (SYSTEM_SCHEDULER's own AppUser).
  const systemUser = await prisma.appUser.findFirstOrThrow({ where: { email: 'system-scheduler@one17.test' } });
  for (const def of COMPOSER_METRIC_FIXTURES) {
    const existing = await prisma.metricDefinition.findUnique({ where: { metricCode_version: { metricCode: def.metricCode, version: def.version } } });
    if (!existing) await prisma.metricDefinition.create({ data: { ...def, createdByUserId: systemUser.id } });
  }

  // --- Compose-time picker filtering: real, provable separation across departments ---
  const procList = await composer.listComposableMetrics(procOfficer.id);
  const procCodes = new Set(procList.map((m) => m.metricCode));
  if (procCodes.has('COMPOSER.OPEN_ENCUMBRANCES') && procCodes.has('COMPOSER.ISSUED_PURCHASE_ORDERS') && !procCodes.has('COMPOSER.OPEN_COMPLAINTS') && !procCodes.has('COMPOSER.PAYROLL_RUNS_YTD')) {
    ok('picker for a Procurement seat shows procurement metrics, hides Compliance/Payroll metrics');
  } else {
    fail('picker RBAC filtering wrong for procOfficer', [...procCodes]);
  }

  const complianceList = await composer.listComposableMetrics(complianceUser.id);
  const complianceCodes = new Set(complianceList.map((m) => m.metricCode));
  if (complianceCodes.has('COMPOSER.OPEN_COMPLAINTS') && complianceCodes.has('COMPOSER.OPEN_SCREENING_HITS') && !complianceCodes.has('COMPOSER.OPEN_ENCUMBRANCES') && !complianceCodes.has('COMPOSER.PAYROLL_RUNS_YTD')) {
    ok('picker for a Compliance seat shows compliance/screening metrics, hides Procurement/Payroll metrics -- the invariant\'s own adversarial example, proven live');
  } else {
    fail('picker RBAC filtering wrong for complianceUser', [...complianceCodes]);
  }

  // --- Save-time hard re-check: a tampered tile list naming an unheld metric is refused outright ---
  await expectReject('cannot compose a tile for a metric gated by a capability the actor does not hold', () =>
    composer.saveDashboard({ name: 'Tampered', scope: 'PERSONAL', tiles: [{ metricCode: 'COMPOSER.OPEN_COMPLAINTS', presentation: 'KPI_TILE', position: 0 }] }, procOfficer.id));

  // --- PERSONAL dashboard: procOfficer composes and saves a real tile ---
  const personalDash = await composer.saveDashboard({ name: `Proc Personal ${RUN}`, scope: 'PERSONAL', tiles: [{ metricCode: 'COMPOSER.OPEN_ENCUMBRANCES', presentation: 'KPI_TILE', position: 0 }] }, procOfficer.id);
  if (personalDash.scope === 'PERSONAL' && personalDash.tiles.length === 1) ok('procOfficer saves a PERSONAL dashboard with an eligible tile');
  else fail('PERSONAL dashboard did not save as expected', personalDash);

  // --- DEPARTMENT publish requires DASHBOARD_COMPOSER_PUBLISH, not just metric VIEW ---
  await expectReject('a seat holding metric VIEW but not DASHBOARD_COMPOSER_PUBLISH cannot publish a DEPARTMENT dashboard', () =>
    composer.saveDashboard({ name: 'Should Fail', scope: 'DEPARTMENT', tiles: [{ metricCode: 'COMPOSER.ISSUED_PURCHASE_ORDERS', presentation: 'KPI_TILE', position: 0 }] }, procOfficer.id));

  // --- A DEPARTMENT publish is forced to the actor's OWN org unit server-side, never a client-supplied one ---
  await expectReject('a HoD cannot publish a DEPARTMENT dashboard to a different org unit than their own', () =>
    composer.saveDashboard({ name: 'Cross-Dept Attempt', scope: 'DEPARTMENT', orgUnitCode: orgUnitB, tiles: [{ metricCode: 'COMPOSER.ISSUED_PURCHASE_ORDERS', presentation: 'KPI_TILE', position: 0 }] }, deptChiefA.id));

  // --- deptChiefA publishes for real ---
  const deptDash = await composer.saveDashboard({ name: `Procurement Department ${RUN}`, scope: 'DEPARTMENT', tiles: [{ metricCode: 'COMPOSER.ISSUED_PURCHASE_ORDERS', presentation: 'BAR', position: 0 }] }, deptChiefA.id);
  if (deptDash.scope === 'DEPARTMENT' && deptDash.orgUnitCode === orgUnitA) ok('DEPT_CHIEF publishes a DEPARTMENT dashboard, server-forced to their own org unit');
  else fail('DEPARTMENT dashboard did not save with the expected forced org unit', deptDash);

  // --- Render-time: same-department viewer holding the capability sees the real resolved value ---
  const viewSameDept = await composer.getDashboard(deptDash.id, staffSameDeptA.id);
  const tileSameDept = viewSameDept.tiles[0] as any;
  if (tileSameDept.redacted === false && typeof tileSameDept.value === 'number') {
    ok('a same-department viewer holding the gating capability sees the real resolved tile value at render time');
  } else {
    fail('same-department capable viewer did not get a resolved tile', tileSameDept);
  }

  // --- Render-time: a different-department viewer is refused the whole dashboard, even holding the same capability ---
  await expectReject('a different-department viewer cannot open a DEPARTMENT dashboard published to another org unit, even holding the same metric capability', () =>
    composer.getDashboard(deptDash.id, staffOtherDeptB.id));

  // --- Render-time: same-department viewer WITHOUT the gating capability gets a redacted tile, not the real figure, and the dashboard still renders (not all-or-nothing) ---
  const viewOutsider = await composer.getDashboard(deptDash.id, outsiderNoProc.id);
  const tileOutsider = viewOutsider.tiles[0] as any;
  if (tileOutsider.redacted === true && tileOutsider.value === null && viewOutsider.tiles.length === 1) {
    ok('a same-department viewer lacking the gating capability sees a REDACTED tile (not the real figure), and the dashboard as a whole still renders -- render-time re-check is per-viewer, per-tile, never all-or-nothing');
  } else {
    fail('redaction did not behave as expected for a capability-lacking same-department viewer', tileOutsider);
  }

  // --- PERSONAL dashboards stay private to their owner ---
  await expectReject('a PERSONAL dashboard belonging to someone else cannot be opened', () => composer.getDashboard(personalDash.id, staffSameDeptA.id));
  const ownPersonalView = await composer.getDashboard(personalDash.id, procOfficer.id);
  if ((ownPersonalView.tiles[0] as any).redacted === false) ok('the PERSONAL dashboard\'s own owner sees their own resolved tile');
  else fail('owner could not view their own PERSONAL dashboard tile resolved', ownPersonalView.tiles[0]);

  // --- Findability: listMyDashboards includes own-org DEPARTMENT dashboards but not another's PERSONAL one ---
  const staffList = await composer.listMyDashboards(staffSameDeptA.id);
  const staffListIds = new Set(staffList.map((d) => d.id));
  if (staffListIds.has(deptDash.id) && !staffListIds.has(personalDash.id)) {
    ok('listMyDashboards surfaces own-org DEPARTMENT dashboards, never another user\'s PERSONAL dashboard');
  } else {
    fail('listMyDashboards returned the wrong set for staffSameDeptA', [...staffListIds]);
  }

  // --- Delete is owner-only ---
  await expectReject('only the dashboard\'s own owner may delete it', () => composer.deleteDashboard(deptDash.id, staffSameDeptA.id));

  // --- Audit trail proof: CREATE + PERMISSION_DENIED both logged ---
  const createdAudit = await prisma.auditTrail.findMany({ where: { entityType: 'saved_dashboard', entityId: { in: [personalDash.id, deptDash.id] }, action: 'CREATE' } });
  const deniedAudit = await prisma.auditTrail.findMany({ where: { entityType: 'dashboard_composer_tile', action: 'PERMISSION_DENIED' } });
  if (createdAudit.length === 2 && deniedAudit.length >= 1) ok('every dashboard creation and every save-time RBAC refusal is audit-logged (no approval workflow -- a view moves no money)');
  else fail('expected audit_trail rows for CREATE and PERMISSION_DENIED were not both found', { createdAudit: createdAudit.length, deniedAudit: deniedAudit.length });

  // --- Cleanup ---
  await composer.deleteDashboard(deptDash.id, deptChiefA.id);
  await composer.deleteDashboard(personalDash.id, procOfficer.id);
  const userIds = [procOfficer.id, deptChiefA.id, staffSameDeptA.id, staffOtherDeptB.id, outsiderNoProc.id, complianceUser.id];
  await prisma.employee.deleteMany({ where: { appUserId: { in: userIds } } });
  await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
  await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });
  await prisma.position.deleteMany({ where: { id: { in: [posA.id, posB.id] } } });
  await prisma.orgUnit.deleteMany({ where: { code: { in: [orgUnitA, orgUnitB] } } });

  console.log('\nSMOKE OK — DashboardComposer (invariant 73a) compose-time + render-time RBAC adversarial set against the real live DB.');
  await prisma.$disconnect();
}
main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
