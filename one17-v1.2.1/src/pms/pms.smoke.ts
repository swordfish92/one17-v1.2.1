// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/pms/pms.smoke.ts
// CHECK5 item 4 (invariant 18, SDS §7) adversarial set against the REAL
// live DB (PORTFOLIO org unit / SENIOR tier / Snr Associate 1 cadre, all seeded
// in slot A as DRAFT — this smoke test's setup phase activates the SPECIFIC
// rows it needs, standing in for the SDS §5 activation-checklist workflow,
// which is a separate, later governance concern, not this pass's scope):
// no KPI/weight/band/gate/tax-rate/emolument literal in PmsService; scoring
// chain SoD (self can never validate its own submission, and each of
// supervisor/SAU/Chief is a DIFFERENT capability); CEO cycle approval is
// the chain's final link; incentive computation is insert-only (a second
// compute attempt is a no-op, never an overwrite); behavioural gate can
// only reduce pay, never increase it (CAPPED/SUSPENDED cases proven);
// payroll journals hit COMPANY only, and posting itself now runs through
// invariant 46(f)'s three-hand chain (HR_ADMIN prepares -> Finance reviews
// -> MD/CEO approves) rather than the generic JOURNAL_ENTRIES maker-
// checker — only MD/CEO's approval (the chain's last step) releases
// posting/payment.
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { DocumentService } from '../document/document.service';
import { ScreeningGatewayService } from '../screening-gateway/screening-gateway.service';
import { LedgerService } from '../ledger/ledger.service';
import { PmsService } from './pms.service';
import { NotificationService } from '../notification/notification.service';
import { AttendanceService } from '../attendance/attendance.service';
import { WorkflowInboxService } from '../ops-api/workflow-inbox.service';
import { InvestorService } from '../investor/investor.service';
import { PortalAuthService } from '../portal-auth/portal-auth.service';
import { WmService } from '../wm/wm.service';
import { RegulatoryReportingService } from '../regulatory-reporting/regulatory-reporting.service';
import { EventJournalService } from '../event-journal/event-journal.service';
import { MarketingService } from '../marketing/marketing.service';

const RUN = Date.now();
let failed = false;
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function expectReject(label: string, fn: () => unknown | Promise<unknown>) {
  try { await fn(); fail(`expected rejection: ${label}`); }
  catch (err) { ok(`rejected as expected: ${label} — ${(err as Error).message.split('\n')[0]}`); }
}

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));
  const ledger = new LedgerService(prisma, audit, delegation, workflow);
  const notification = new NotificationService(prisma);
  const attendance = new AttendanceService(prisma, audit, delegation, workflow, notification);
  const pms = new PmsService(prisma, audit, delegation, workflow, ledger, attendance);
  const investors = new InvestorService(prisma, audit, workflow, delegation, new PortalAuthService(prisma, audit), new ScreeningGatewayService(prisma, audit, delegation, workflow, new NotificationService(prisma), new DocumentService(prisma, delegation, audit)));
  const eventJournal = new EventJournalService(prisma, ledger);
  const wm = new WmService(prisma, audit, delegation, workflow, eventJournal);
  const regReporting = {} as unknown as RegulatoryReportingService;
  const marketing = {} as unknown as MarketingService;
  const workflowInbox = new WorkflowInboxService(prisma, workflow, investors, regReporting, wm, pms, marketing, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, ledger, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any);

  await pms.seedReferenceData();

  // ---- Activation setup (standing in for the SDS §5 checklist, out of
  // this pass's scope) — PORTFOLIO / SENIOR / Snr Associate 1 only (the
  // one cadre/notch TPL_09 actually shipped emolument rows for). ----
  const orgUnitCode = 'PORTFOLIO';
  const tier = 'SENIOR';
  const cadre = 'Snr Associate 1';
  const notch = 2;
  const tierKpis = await prisma.kpiDefinition.findMany({ where: { kra: { orgUnitCode }, tier } });
  if (tierKpis.length === 0) throw new Error(`No ${orgUnitCode}/${tier} kpi_definition rows seeded — cannot run this smoke test.`);
  await prisma.kpiDefinition.updateMany({ where: { id: { in: tierKpis.map((k) => k.id) } }, data: { status: 'ACTIVE' } });
  const tierWeights = await prisma.kpiWeightMatrix.findMany({ where: { orgUnitCode, tier } });
  const weightSum = tierWeights.reduce((s, w) => s + Number(w.weightPct), 0);
  if (Math.round(weightSum) !== 100) throw new Error(`${orgUnitCode}/${tier} kpi_weight_matrix rows sum to ${weightSum}%, not 100% — cannot activate (DB CHECK would reject).`);
  await prisma.kpiWeightMatrix.updateMany({ where: { id: { in: tierWeights.map((w) => w.id) } }, data: { status: 'ACTIVE' } });
  const cadreEmolument = await prisma.emolumentStructure.findMany({ where: { cadre, notch } });
  if (cadreEmolument.length === 0) throw new Error(`No ${cadre} / notch ${notch} emolument_structure rows seeded — cannot run this smoke test.`);
  await prisma.emolumentStructure.updateMany({ where: { id: { in: cadreEmolument.map((e) => e.id) } }, data: { status: 'ACTIVE' } });
  ok(`activation setup: ${tierKpis.length} kpi_definition + ${tierWeights.length} kpi_weight_matrix (Σ=${weightSum}%) + ${cadreEmolument.length} emolument_structure rows -> ACTIVE for ${orgUnitCode}/${tier}/${cadre}`);

  const finAdmin = await prisma.appUser.create({ data: { email: `pms-finadmin-${RUN}@one17.test`, displayName: 'x' } });
  await rbac.assignRole({ userId: finAdmin.id, roleCode: 'FIN_ADMIN' });
  await pms.validateTaxRuleConfig(1, finAdmin.id);
  ok('FINCON validates tax_rule_config v1 -> ACTIVE');

  // ---- Fixture staff: employee (self-scorer), supervisor, SAU QA, Chief, HR admin, CEO, outsider ----
  const selfUser = await prisma.appUser.create({ data: { email: `pms-employee-${RUN}@one17.test`, displayName: 'x' } });
  await rbac.assignRole({ userId: selfUser.id, roleCode: 'PORT_OFF' });
  const supervisorUser = await prisma.appUser.create({ data: { email: `pms-supervisor-${RUN}@one17.test`, displayName: 'x' } });
  await rbac.assignRole({ userId: supervisorUser.id, roleCode: 'PMS_SUPERVISOR' });
  const sauUser = await prisma.appUser.create({ data: { email: `pms-sau-${RUN}@one17.test`, displayName: 'x' } });
  await rbac.assignRole({ userId: sauUser.id, roleCode: 'SAU_INTERNAL_CONTROL' });
  const chiefUser = await prisma.appUser.create({ data: { email: `pms-chief-${RUN}@one17.test`, displayName: 'x' } });
  await rbac.assignRole({ userId: chiefUser.id, roleCode: 'DEPT_CHIEF' });
  const hrAdmin = await prisma.appUser.create({ data: { email: `pms-hr-${RUN}@one17.test`, displayName: 'x' } });
  await rbac.assignRole({ userId: hrAdmin.id, roleCode: 'HR_ADMIN' });
  const md = await prisma.appUser.create({ data: { email: `pms-md-${RUN}@one17.test`, displayName: 'x' } });
  await rbac.assignRole({ userId: md.id, roleCode: 'MD_CEO' });
  const outsider = await prisma.appUser.create({ data: { email: `pms-outsider-${RUN}@one17.test`, displayName: 'x' } });

  const position = await prisma.position.create({ data: { title: `PMS Smoke Officer ${RUN}`, orgUnitCode, cadre, notch } });
  const employee = await prisma.employee.create({ data: { surname: `Smoke${RUN}`, firstName: 'PMS', positionId: position.id, orgUnitCode, appUserId: selfUser.id, hireDate: new Date() } });

  // ---- Role scorecard: pure derivation from ACTIVE config ----
  const scorecard = await pms.getEmployeeScorecard(employee.id);
  if (scorecard.length === tierKpis.length && scorecard.every((s) => s.weightPct > 0)) {
    ok(`role scorecard derives ${scorecard.length} KPI rows with real weights from ACTIVE kpi_weight_matrix (no stored base-case row)`);
  } else {
    fail('role scorecard did not derive correctly', scorecard);
  }

  // ---- Cycle lifecycle + self-score ----
  const cycle = await pms.startCycle({ cycleType: 'INCENTIVE_CYCLE', orgUnitCode, periodStart: new Date(2026, 5, 1), periodEnd: new Date(2026, 5, 30), actorUserId: hrAdmin.id });
  await expectReject('outsider (no PMS_CYCLE_MANAGEMENT) cannot open a cycle for scoring', () => pms.openForScoring(cycle.id, outsider.id));
  await pms.openForScoring(cycle.id, hrAdmin.id);

  await expectReject('cannot self-score before the cycle is open for SCORING twice / with the wrong user', () =>
    pms.submitSelfScore({ cycleId: cycle.id, employeeId: employee.id, scores: scorecard.map((s) => ({ kpiDefinitionId: s.kpiDefinitionId, selfScorePct: 95 })), actorUserId: outsider.id }));

  const submission = await pms.submitSelfScore({
    cycleId: cycle.id, employeeId: employee.id,
    scores: scorecard.map((s) => ({ kpiDefinitionId: s.kpiDefinitionId, selfScorePct: 95 })),
    actorUserId: selfUser.id,
  });
  ok(`employee self-scores all ${scorecard.length} KPIs at 95% -> employee_score_submission SELF_SCORED`);

  // ---- Scoring chain SoD: self cannot validate own submission ----
  await expectReject('employee cannot validate their own submission (self != supervisor)', () => workflowInbox.approve(submission.workflowInstanceId!, selfUser.id));
  await expectReject('an outsider without PMS_SUPERVISOR_VALIDATION cannot approve the supervisor step', () => workflowInbox.approve(submission.workflowInstanceId!, outsider.id));

  // ---- Task #152 (invariant 37e): adjustValidatedScore — the supervisor
  // adjusts a KPI's validated score BEFORE the chain finalizes; the self
  // score is never silently overwritten, and only a PMS_SUPERVISOR_
  // VALIDATION holder may adjust.
  await expectReject('an outsider (no PMS_SUPERVISOR_VALIDATION) cannot adjust a validated score', () =>
    pms.adjustValidatedScore(submission.id, scorecard[0].kpiDefinitionId, 80, outsider.id));
  const adjusted = await pms.adjustValidatedScore(submission.id, scorecard[0].kpiDefinitionId, 80, supervisorUser.id);
  const selfScoreAfterAdjust = await prisma.employeeKpiScore.findUniqueOrThrow({ where: { employeeScoreSubmissionId_kpiDefinitionId: { employeeScoreSubmissionId: submission.id, kpiDefinitionId: scorecard[0].kpiDefinitionId } } });
  if (adjusted.validatedScorePct?.toString() === '80' && selfScoreAfterAdjust.selfScorePct.toString() === '95') {
    ok('supervisor adjusts a KPI to 80% (validatedScorePct) — the original 95% self-score is preserved untouched, never overwritten');
  } else {
    fail('adjustValidatedScore did not persist correctly', { adjusted, selfScoreAfterAdjust });
  }

  const step1 = await workflowInbox.approve(submission.workflowInstanceId!, supervisorUser.id);
  const step2 = await workflowInbox.approve(submission.workflowInstanceId!, sauUser.id);
  const step3 = await workflowInbox.approve(submission.workflowInstanceId!, chiefUser.id);
  const submissionAfter = await prisma.employeeScoreSubmission.findUniqueOrThrow({ where: { id: submission.id } });
  if ((step3 as any).status === 'APPROVED' && submissionAfter.status === 'VALIDATED') {
    ok(`scoring chain (supervisor -> SAU QA -> Chief, three DIFFERENT capabilities) validates the submission -> VALIDATED`);
  } else {
    fail('scoring chain did not complete correctly', { step1: (step1 as any).status, step2: (step2 as any).status, step3: (step3 as any).status, submissionStatus: submissionAfter.status });
  }

  // ---- Task #152 (invariant 37e): role_scorecard_override — a SEPARATE
  // CEO-approval-gated governance action (SDS §1), not part of the cycle
  // lifecycle. HR proposes, CEO approves via the standing Workflow Inbox
  // (PMS_SCORECARD_OVERRIDE dispatch, already wired).
  await expectReject('outsider (no PMS_CYCLE_MANAGEMENT) cannot propose a scorecard override', () =>
    pms.proposeScorecardOverride({ employeeId: employee.id, kpiDefinitionId: scorecard[0].kpiDefinitionId, overrideWeightPct: 40, reason: 'smoke test', createdByUserId: outsider.id }));
  const override = await pms.proposeScorecardOverride({ employeeId: employee.id, kpiDefinitionId: scorecard[0].kpiDefinitionId, overrideWeightPct: 40, reason: 'smoke test override', createdByUserId: hrAdmin.id });
  await expectReject('HR (initiator) cannot also approve their own scorecard override (maker != checker)', () => workflowInbox.approve(override.workflowInstanceId!, hrAdmin.id));
  await workflowInbox.approve(override.workflowInstanceId!, md.id);
  const overrideAfter = await prisma.roleScorecardOverride.findUniqueOrThrow({ where: { id: override.id } });
  if (overrideAfter.status === 'ACTIVE') {
    ok('CEO approves the role scorecard override via the standing Workflow Inbox -> ACTIVE');
  } else {
    fail('scorecard override did not activate correctly', overrideAfter);
  }

  // ---- Cycle-level CEO approval (the chain's final link, cycle-wide) ----
  const cycleWf = await pms.submitCycleForApproval(cycle.id, hrAdmin.id);
  await expectReject('HR (initiator) cannot also approve the cycle (maker != checker)', () => workflowInbox.approve(cycleWf.id, hrAdmin.id));
  const cycleApproval = await workflowInbox.approve(cycleWf.id, md.id);
  const cycleAfter = await prisma.appraisalCycle.findUniqueOrThrow({ where: { id: cycle.id } });
  if ((cycleApproval as any).status === 'APPROVED' && cycleAfter.status === 'APPROVED') {
    ok('CEO approves the cycle (scoring chain\'s final link, applied once per cycle) -> appraisal_cycle APPROVED');
  } else {
    fail('cycle approval did not flip status', cycleAfter);
  }

  // ---- Invariant 25(1) (Check-6 reminder-ladder tranche): task-default ->
  // PMS behavioural-gate feed. Isolated fixture (own employee/cycle) so it
  // doesn't interfere with the scoring-chain assertions above/below — this
  // only exercises applyTaskDefaultGate/runTaskDefaultGateFeed's own
  // severity-resolution + monotonic-tightening logic (already-proven
  // scoring/gate/incentive plumbing is exercised elsewhere in this file). ----
  const systemUser = await prisma.appUser.create({ data: { email: `pms-system-${RUN}@one17.test`, displayName: 'System Scheduler' } });
  const gateFeedEmployeeUser = await prisma.appUser.create({ data: { email: `pms-gatefeed-emp-${RUN}@one17.test`, displayName: 'x' } });
  const gateFeedEmployee = await prisma.employee.create({ data: { surname: `GateFeed${RUN}`, firstName: 'PMS', positionId: position.id, orgUnitCode, appUserId: gateFeedEmployeeUser.id, hireDate: new Date() } });
  const gateFeedCycle = await pms.startCycle({ cycleType: 'INCENTIVE_CYCLE', orgUnitCode, periodStart: new Date(2026, 6, 1), periodEnd: new Date(2026, 6, 30), actorUserId: hrAdmin.id });
  await prisma.employeeScoreSubmission.create({ data: { appraisalCycleId: gateFeedCycle.id, employeeId: gateFeedEmployee.id, status: 'SELF_SCORED' } });
  await prisma.appraisalCycle.update({ where: { id: gateFeedCycle.id }, data: { status: 'APPROVED' } });

  const belowThreshold = await pms.runTaskDefaultGateFeed([{ employeeId: gateFeedEmployee.id, count: 0 }], systemUser.id);
  if (belowThreshold.gatesApplied === 0) ok('runTaskDefaultGateFeed applies no gate when the defaulted-task count is below the lowest configured task_default_gate_policy threshold (1)');
  else fail('expected zero gates applied below the lowest threshold', belowThreshold);

  const minorFeed = await pms.runTaskDefaultGateFeed([{ employeeId: gateFeedEmployee.id, count: 1 }], systemUser.id);
  const gateAfterMinor = await prisma.behaviouralGateCheck.findUniqueOrThrow({ where: { appraisalCycleId_employeeId: { appraisalCycleId: gateFeedCycle.id, employeeId: gateFeedEmployee.id } } });
  if (minorFeed.gatesApplied === 1 && gateAfterMinor.assessedByUserId === systemUser.id && gateAfterMinor.evidenceRef === 'TASK_DEFAULT_COUNT:1') {
    ok(`runTaskDefaultGateFeed creates a behavioural_gate_check for 1 DEFAULTED task -> MINOR severity -> outcome ${gateAfterMinor.outcome}, assessed by the system actor (no human capability check on this scheduled path, same as TaskService.runEscalationSweep/ZakatService.runNisabBreachMonitor)`);
  } else {
    fail('task-default gate feed did not create the expected gate check', { minorFeed, gateAfterMinor });
  }

  const severeFeed = await pms.runTaskDefaultGateFeed([{ employeeId: gateFeedEmployee.id, count: 5 }], systemUser.id);
  const gateAfterSevere = await prisma.behaviouralGateCheck.findUniqueOrThrow({ where: { appraisalCycleId_employeeId: { appraisalCycleId: gateFeedCycle.id, employeeId: gateFeedEmployee.id } } });
  if (severeFeed.gatesApplied === 1 && gateAfterSevere.outcome !== gateAfterMinor.outcome) {
    ok(`a WORSENING task-default count (1 -> 5 DEFAULTED tasks) tightens the existing gate from ${gateAfterMinor.outcome} to ${gateAfterSevere.outcome} (SEVERE severity)`);
  } else {
    fail('escalating the defaulted-task count did not tighten the gate as expected', { gateAfterMinor, gateAfterSevere });
  }

  const relaxAttempt = await pms.runTaskDefaultGateFeed([{ employeeId: gateFeedEmployee.id, count: 1 }], systemUser.id);
  const gateAfterRelaxAttempt = await prisma.behaviouralGateCheck.findUniqueOrThrow({ where: { appraisalCycleId_employeeId: { appraisalCycleId: gateFeedCycle.id, employeeId: gateFeedEmployee.id } } });
  if (relaxAttempt.gatesApplied === 1 && gateAfterRelaxAttempt.outcome === gateAfterSevere.outcome) {
    ok(`the feed never RELAXES an existing outcome: re-running with a LOWER count (5 -> 1 DEFAULTED tasks) leaves the already-applied ${gateAfterSevere.outcome} gate untouched ("can only protect or reduce, never increase" applies to this automatic feed too)`);
  } else {
    fail('the gate feed incorrectly relaxed an existing outcome', { gateAfterSevere, gateAfterRelaxAttempt });
  }

  // ---- Behavioural gate: no gate check exists yet — computeIncentive's
  // per-employee loop structurally skips any submission without one
  // (`if (!gate) continue`), never assuming a PASS (invariant 16's honest-
  // gap discipline applied to pay, not just KRI readings). ----
  const gateCheckCountBefore = await prisma.behaviouralGateCheck.count({ where: { appraisalCycleId: cycle.id, employeeId: employee.id } });
  if (gateCheckCountBefore === 0) ok('no behavioural_gate_check exists yet for this employee — computeIncentive would skip it rather than assume PASS');
  else fail(`expected zero gate checks before recording one, got ${gateCheckCountBefore}`);

  await pms.recordBehaviouralGate({ cycleId: cycle.id, employeeId: employee.id, attendanceOk: true, ethicalConductOk: true, severity: 'MINOR', assessedByUserId: hrAdmin.id });
  const results = await pms.computeIncentive(cycle.id, hrAdmin.id);
  const myResult = results.find((r) => r.employeeId === employee.id);
  // BigInt division floors (like the service's own gateFactor computation),
  // so an odd preGateIncentiveKobo legitimately loses its least-significant
  // kobo on the 50% cap — compare against the SAME floor division the
  // service performs, not JS float division (which doesn't floor).
  if (myResult && myResult.gateOutcome === 'CAPPED' && BigInt(myResult.finalIncentiveKobo) === BigInt(myResult.preGateIncentiveKobo) / 2n) {
    ok(`behavioural gate MINOR severity -> CAPPED at 50% -> final incentive is exactly half the pre-gate amount (pre=${myResult.preGateIncentiveKobo}, final=${myResult.finalIncentiveKobo}) — gate reduced, never increased, pay`);
  } else {
    fail('behavioural gate did not correctly cap the incentive', myResult);
  }

  // ---- Insert-only: a second compute attempt does not overwrite the result ----
  const cycleForSecondAttempt = await prisma.appraisalCycle.findUniqueOrThrow({ where: { id: cycle.id } });
  await prisma.appraisalCycle.update({ where: { id: cycle.id }, data: { status: 'APPROVED' } }); // simulate re-entry (cycle already moved to INCENTIVE_COMPUTED above)
  const secondResults = await pms.computeIncentive(cycle.id, hrAdmin.id);
  const resultCountAfter = await prisma.employeeIncentiveResult.count({ where: { appraisalCycleId: cycle.id, employeeId: employee.id } });
  if (resultCountAfter === 1) {
    ok(`incentive computation is insert-only: a second compute attempt on the same cycle produced ${secondResults.length} NEW result(s) (existing employee result count stayed at 1, never overwritten — "corrections = reversal + recompute" per SDS §7.2)`);
  } else {
    fail(`expected exactly 1 employee_incentive_result row after a second compute attempt, got ${resultCountAfter}`, { cycleStatus: cycleForSecondAttempt.status });
  }

  // ---- Payroll P-A: COMPANY only, gated on JOURNAL_ENTRIES not PMS_PAYROLL for posting ----
  const payrollCompany = await prisma.ledgerEntity.create({ data: { code: `PMS-SMOKE-COMPANY-${RUN}`, name: 'PMS Smoke Company', entityType: 'COMPANY', primaryBasis: 'IFRS' } });
  await prisma.chartOfAccount.createMany({
    data: [
      { ledgerEntityCode: payrollCompany.code, accountCode: '6000', accountName: 'Staff Cost', accountType: 'EXPENSE', aaoifiRef: 'N/A', ifrsRef: 'IAS 19' },
      { ledgerEntityCode: payrollCompany.code, accountCode: '6010', accountName: 'Incentive Expense', accountType: 'EXPENSE', aaoifiRef: 'N/A', ifrsRef: 'IAS 19' },
      { ledgerEntityCode: payrollCompany.code, accountCode: '2100', accountName: 'PAYE Payable', accountType: 'LIABILITY', aaoifiRef: 'N/A', ifrsRef: 'IAS 12' },
      { ledgerEntityCode: payrollCompany.code, accountCode: '2110', accountName: 'Pension Payable', accountType: 'LIABILITY', aaoifiRef: 'N/A', ifrsRef: 'IAS 19' },
      { ledgerEntityCode: payrollCompany.code, accountCode: '2120', accountName: 'NHF Payable', accountType: 'LIABILITY', aaoifiRef: 'N/A', ifrsRef: 'IAS 19' },
      { ledgerEntityCode: payrollCompany.code, accountCode: '2130', accountName: 'Net Pay Payable', accountType: 'LIABILITY', aaoifiRef: 'N/A', ifrsRef: 'IAS 19' },
    ],
  });
  // Invariant 46(f): CEO ruling — payroll is a three-hand chain. HR_ADMIN
  // prepares (maker) -> Finance reviews -> MD/CEO approves; only MD/CEO's
  // approval releases posting/payment. Discovered while building this: the
  // OLD design let FIN_ADMIN both run AND post payroll single-handed
  // (maker!=checker blocked only the SAME person, never the same role) with
  // zero HR_ADMIN or MD_CEO involvement — a genuine defect against this
  // ruling, fixed rather than left beside the new chain (invariant 43e).
  await expectReject('outsider (no PAYROLL_PREPARATION) cannot prepare payroll', () => pms.runPayroll({
    periodMonth: 6, periodYear: 2026, ledgerEntityCode: payrollCompany.code,
    drStaffCostAccountCode: '6000', drIncentiveExpenseAccountCode: '6010', crPayePayableAccountCode: '2100',
    crPensionPayableAccountCode: '2110', crNhfPayableAccountCode: '2120', crNetPayPayableAccountCode: '2130', actorUserId: outsider.id,
  }));
  await expectReject('FIN_ADMIN (Finance reviews, does not prepare) cannot prepare payroll either', () => pms.runPayroll({
    periodMonth: 6, periodYear: 2026, ledgerEntityCode: payrollCompany.code,
    drStaffCostAccountCode: '6000', drIncentiveExpenseAccountCode: '6010', crPayePayableAccountCode: '2100',
    crPensionPayableAccountCode: '2110', crNhfPayableAccountCode: '2120', crNetPayPayableAccountCode: '2130', actorUserId: finAdmin.id,
  }));
  const payrollRun = await pms.runPayroll({
    periodMonth: 6, periodYear: 2026, ledgerEntityCode: payrollCompany.code,
    drStaffCostAccountCode: '6000', drIncentiveExpenseAccountCode: '6010', crPayePayableAccountCode: '2100',
    crPensionPayableAccountCode: '2110', crNhfPayableAccountCode: '2120', crNetPayPayableAccountCode: '2130', actorUserId: hrAdmin.id,
  });
  const myLine = await prisma.payrollRunLine.findFirst({ where: { payrollRunId: payrollRun.id, employeeId: employee.id } });
  if (myLine && myLine.incentiveKobo > 0n && myLine.grossKobo > 0n) {
    ok(`payroll_run drafted for ${payrollCompany.code} by HR_ADMIN (maker): employee gross=${myLine.grossKobo}, PAYE=${myLine.payeKobo}, incentive=${myLine.incentiveKobo} (net of gate), netPay=${myLine.netPayKobo}`);
  } else {
    fail('payroll run line missing or incentive not carried through', myLine);
  }
  await postPmsPayroll();

  async function postPmsPayroll() {
    await expectReject('the maker (HR_ADMIN) cannot also review their own payroll run (maker != checker)', () =>
      workflowInbox.approve(payrollRun.workflowInstanceId!, hrAdmin.id));
    await expectReject('an outsider (no PAYROLL_FINANCE_REVIEW) cannot perform the Finance review step', () =>
      workflowInbox.approve(payrollRun.workflowInstanceId!, outsider.id));
    await expectReject('MD_CEO cannot skip ahead and approve before Finance has reviewed (step 1 is PAYROLL_FINANCE_REVIEW, not PAYROLL_CEO_APPROVAL)', () =>
      workflowInbox.approve(payrollRun.workflowInstanceId!, md.id));

    // Step 1: Finance reviews. Journal must NOT post yet — only MD/CEO's
    // approval (the LAST step) releases posting/payment.
    await workflowInbox.approve(payrollRun.workflowInstanceId!, finAdmin.id);
    const journalAfterFinance = await prisma.journalEntry.findUniqueOrThrow({ where: { id: payrollRun.journalEntryId! } });
    const runAfterFinance = await prisma.payrollRun.findUniqueOrThrow({ where: { id: payrollRun.id } });
    if (journalAfterFinance.status === 'DRAFT' && runAfterFinance.status === 'PENDING_APPROVAL') {
      ok('Finance review (step 1) alone does NOT post the journal or flip payroll_run to POSTED — invariant 46(f): only MD/CEO approval releases posting/payment');
    } else {
      fail('journal or payroll_run posted prematurely after Finance review alone', { journalStatus: journalAfterFinance.status, runStatus: runAfterFinance.status });
    }
    await expectReject('Finance cannot approve their own review step a second time (step 2 now requires PAYROLL_CEO_APPROVAL, which FIN_ADMIN lacks)', () =>
      workflowInbox.approve(payrollRun.workflowInstanceId!, finAdmin.id));

    // Step 2: MD/CEO approves — through the GENERIC Workflow Inbox, not a
    // dedicated route, proving WorkflowInboxService's JOURNAL_POSTING
    // dispatch correctly handles the PAYROLL_THREE_HAND scenario: without
    // its payroll_run lookup, the journal would post (approveJournalPosting
    // is scenario-agnostic) but payroll_run would stay stuck PENDING_
    // APPROVAL forever (the "the workflow instance approved but the owning
    // record never learned about it" class of bug this dispatch table
    // exists to prevent for every other side-effecting workflow type).
    await workflowInbox.approve(payrollRun.workflowInstanceId!, md.id);
    const journal = await prisma.journalEntry.findUniqueOrThrow({ where: { id: payrollRun.journalEntryId! } });
    const runAfter = await prisma.payrollRun.findUniqueOrThrow({ where: { id: payrollRun.id } });
    if (journal.status === 'POSTED' && journal.ledgerEntityCode === payrollCompany.code && runAfter.status === 'POSTED' && runAfter.approvedByUserId === md.id) {
      ok(`payroll journal POSTED to COMPANY entity ${payrollCompany.code} only — payroll_run flips to POSTED via MD/CEO's approval closing the three-hand chain (invariant 46f)`);
    } else {
      fail('payroll journal did not post correctly once MD/CEO closed the chain', { journalStatus: journal.status, runStatus: runAfter.status });
    }
  }

  await emolumentStructureSection();

  async function emolumentStructureSection() {
    const finAdmin2 = await prisma.appUser.create({ data: { email: `pms-finadmin2-${RUN}@one17.test`, displayName: 'x' } });
    await rbac.assignRole({ userId: finAdmin2.id, roleCode: 'FIN_ADMIN' });

    await expectReject('outsider (no EMOLUMENT_STRUCTURE_MANAGEMENT) cannot propose an emolument component', () =>
      pms.proposeEmolumentComponent({
        cadre: `SMOKE-CADRE-${RUN}`, notch: 1, component: 'BASIC', componentType: 'SALARY',
        annualAmountKobo: 100_00000n, taxable: true, effectiveFrom: new Date(), proposedByUserId: outsider.id,
      }));

    const proposed = await pms.proposeEmolumentComponent({
      cadre: `SMOKE-CADRE-${RUN}`, notch: 1, component: 'BASIC', componentType: 'SALARY',
      annualAmountKobo: 500_000_00n, taxable: true, effectiveFrom: new Date(), proposedByUserId: finAdmin.id,
    });
    if (proposed.component.status === 'DRAFT' && proposed.component.version === 1) {
      ok('FIN_ADMIN proposes v1 of a new emolument component — persists as DRAFT');
    } else {
      fail('proposed emolument component did not persist correctly', proposed.component);
    }

    await expectReject('the SAME FIN_ADMIN who proposed cannot also approve (maker != checker)', () =>
      workflowInbox.approve(proposed.workflowInstance.id, finAdmin.id));

    const approved = await workflowInbox.approve(proposed.workflowInstance.id, finAdmin2.id);
    const activeRow = await prisma.emolumentStructure.findUniqueOrThrow({ where: { id: proposed.component.id } });
    if (approved && activeRow.status === 'ACTIVE' && activeRow.approvedByUserId === finAdmin2.id) {
      ok('a DIFFERENT FIN_ADMIN approves via the Workflow Inbox — component flips DRAFT->ACTIVE, dispatched through EMOLUMENT_STRUCTURE_APPROVAL to PmsService.approveEmolumentComponent');
    } else {
      fail('emolument component did not activate correctly', { approved, activeRow });
    }

    // A second, revised version for the SAME (cadre, notch, component) —
    // proves "supersede via a new row" is scoped to the exact tuple, not
    // global (a sibling ALLOWANCE component or a different notch must be
    // untouched).
    const revised = await pms.proposeEmolumentComponent({
      cadre: `SMOKE-CADRE-${RUN}`, notch: 1, component: 'BASIC', componentType: 'SALARY',
      annualAmountKobo: 600_000_00n, taxable: true, effectiveFrom: new Date(), proposedByUserId: finAdmin.id,
    });
    if (revised.component.version === 2) {
      ok('a revised BASIC component for the SAME (cadre, notch) proposes as v2, not a fresh v1');
    } else {
      fail('revised component did not version correctly', revised.component);
    }
    await workflowInbox.approve(revised.workflowInstance.id, finAdmin2.id);
    const [oldRow, newRow] = await Promise.all([
      prisma.emolumentStructure.findUniqueOrThrow({ where: { id: proposed.component.id } }),
      prisma.emolumentStructure.findUniqueOrThrow({ where: { id: revised.component.id } }),
    ]);
    if (oldRow.status === 'SUPERSEDED' && newRow.status === 'ACTIVE') {
      ok('v1 flips to SUPERSEDED and v2 becomes ACTIVE for the exact same (cadre, notch, component) tuple — never both ACTIVE at once');
    } else {
      fail('supersede-on-approval did not scope correctly', { oldRow, newRow });
    }

    const list = await pms.listEmolumentStructure();
    const ourRows = list.filter((r) => r.cadre === `SMOKE-CADRE-${RUN}`);
    if (ourRows.length === 2 && ourRows.every((r) => r.annualAmountKobo && typeof r.annualAmountKobo === 'string')) {
      ok('listEmolumentStructure returns both versions (audit visibility), kobo values as strings');
    } else {
      fail('listEmolumentStructure did not return the expected rows', ourRows);
    }
  }

  // ==========================================================================
  // Invariant 51(c2) (CHECK12): PMS strategy-spine KPI layer -- KPI
  // definitions + class-weighting matrix, previously seed-only (the setup
  // phase above activates rows via a direct `updateMany` bypass, standing
  // in for the governance this section actually builds). Own fresh org
  // unit/KRA/tier fixtures, isolated from PORTFOLIO/SENIOR above so
  // approving a new weight-matrix version here doesn't supersede rows the
  // earlier scoring/incentive assertions still depend on.
  // ==========================================================================
  {
    const spineOrgUnit = await prisma.orgUnit.create({ data: { code: `SMOKE-SPINE-${RUN}`, name: `Smoke Spine Org ${RUN}` } });
    const spineKra = await prisma.enterpriseKra.create({ data: { code: `SMOKE-KRA-${RUN}`, name: 'Smoke KRA', orgUnitCode: spineOrgUnit.code, status: 'ACTIVE' } });

    await expectReject('an outsider cannot propose a new KPI definition', () =>
      pms.proposeKpiDefinition({ kraCode: spineKra.code, tier: 'JUNIOR', kpiText: 'Smoke KPI', kpiClass: 'CORE', proposedByUserId: outsider.id }));

    const kpiProposal = await pms.proposeKpiDefinition({ kraCode: spineKra.code, tier: 'JUNIOR', kpiText: 'Smoke KPI text', kpiClass: 'CORE', proposedByUserId: hrAdmin.id });
    if (kpiProposal.status === 'DRAFT') ok('proposeKpiDefinition creates a DRAFT row, workflow initiated');
    else fail('proposeKpiDefinition did not create the expected DRAFT row', kpiProposal);

    await expectReject('a duplicate (kraCode, tier) KPI definition proposal is refused', () =>
      pms.proposeKpiDefinition({ kraCode: spineKra.code, tier: 'JUNIOR', kpiText: 'Different text', kpiClass: 'STRATEGIC', proposedByUserId: hrAdmin.id }));

    await expectReject('the proposer (HR) cannot approve their own KPI definition (maker != checker)', () =>
      pms.approveKpiDefinition({ workflowInstanceId: kpiProposal.workflowInstanceId!, approverUserId: hrAdmin.id }));

    const approvedKpi = await pms.approveKpiDefinition({ workflowInstanceId: kpiProposal.workflowInstanceId!, approverUserId: md.id });
    if ((approvedKpi as any)?.status === 'ACTIVE') ok('MD_CEO approves the new KPI definition -> ACTIVE');
    else fail('KPI definition approval did not activate as expected', approvedKpi);

    // ---- KPI class-weighting matrix (CEO ruling: MD_CEO approves, no exceptions) ----
    const fourClasses: { kpiClass: 'CORE' | 'STRATEGIC' | 'SECONDARY' | 'PROCESS_INTEGRITY'; weightPct: number }[] = [
      { kpiClass: 'CORE', weightPct: 40 }, { kpiClass: 'STRATEGIC', weightPct: 30 },
      { kpiClass: 'SECONDARY', weightPct: 20 }, { kpiClass: 'PROCESS_INTEGRITY', weightPct: 10 },
    ];
    await expectReject('a weight matrix proposal not summing to 100% is refused', () =>
      pms.proposeWeightMatrixVersion({ orgUnitCode: spineOrgUnit.code, tier: 'JUNIOR', weights: [{ kpiClass: 'CORE', weightPct: 50 }, { kpiClass: 'STRATEGIC', weightPct: 30 }, { kpiClass: 'SECONDARY', weightPct: 10 }, { kpiClass: 'PROCESS_INTEGRITY', weightPct: 5 }], proposedByUserId: hrAdmin.id }));
    await expectReject('a weight matrix proposal missing a class is refused', () =>
      pms.proposeWeightMatrixVersion({ orgUnitCode: spineOrgUnit.code, tier: 'JUNIOR', weights: [{ kpiClass: 'CORE', weightPct: 60 }, { kpiClass: 'STRATEGIC', weightPct: 40 }], proposedByUserId: hrAdmin.id }));

    const weightProposal = await pms.proposeWeightMatrixVersion({ orgUnitCode: spineOrgUnit.code, tier: 'JUNIOR', weights: fourClasses, proposedByUserId: hrAdmin.id });
    if (weightProposal.rows.length === 4 && weightProposal.rows.every((r) => r.status === 'DRAFT' && r.version === 1)) {
      ok('proposeWeightMatrixVersion creates 4 DRAFT rows (one per class), version 1, sharing one workflow instance');
    } else {
      fail('proposeWeightMatrixVersion did not create the expected rows', weightProposal.rows);
    }

    await expectReject('the proposer (HR) cannot approve their own weight-matrix version (maker != checker)', () =>
      pms.approveWeightMatrixVersion({ workflowInstanceId: weightProposal.workflowInstance.id, approverUserId: hrAdmin.id }));
    await expectReject('a second HR_ADMIN (not MD_CEO) cannot approve a weight-matrix version — MD_CEO-only, no exceptions', () =>
      pms.approveWeightMatrixVersion({ workflowInstanceId: weightProposal.workflowInstance.id, approverUserId: finAdmin.id }));

    // ---- "Never retroactive": an in-flight cycle for this org unit/tier blocks approval outright ----
    const spinePosition = await prisma.position.create({ data: { title: `Smoke Spine Officer ${RUN}`, orgUnitCode: spineOrgUnit.code, cadre: `SMOKE-SPINE-CADRE-${RUN}`, notch: 1 } });
    await prisma.cadreTierMap.create({ data: { cadre: spinePosition.cadre, tier: 'JUNIOR' } });
    const spineEmployeeUser = await prisma.appUser.create({ data: { email: `pms-spine-emp-${RUN}@one17.test`, displayName: 'x' } });
    const spineEmployee = await prisma.employee.create({ data: { surname: `SmokeSpine${RUN}`, firstName: 'Emp', positionId: spinePosition.id, orgUnitCode: spineOrgUnit.code, appUserId: spineEmployeeUser.id, hireDate: new Date() } });
    const spineCycle = await prisma.appraisalCycle.create({ data: { cycleType: 'INCENTIVE_CYCLE', orgUnitCode: spineOrgUnit.code, periodStart: new Date(2026, 0, 1), periodEnd: new Date(2026, 0, 31), status: 'SCORING' } });
    await prisma.employeeScoreSubmission.create({ data: { appraisalCycleId: spineCycle.id, employeeId: spineEmployee.id } });

    await expectReject('a weight-matrix version cannot be approved while its org unit/tier has an in-flight PMS cycle (invariant 51c2: never retroactive)', () =>
      pms.approveWeightMatrixVersion({ workflowInstanceId: weightProposal.workflowInstance.id, approverUserId: md.id }));
    const rowsStillDraft = await prisma.kpiWeightMatrix.findMany({ where: { orgUnitCode: spineOrgUnit.code, tier: 'JUNIOR', version: 1 } });
    if (rowsStillDraft.every((r) => r.status === 'DRAFT')) {
      ok('blocked weight-matrix approval leaves rows DRAFT (not consumed) — retryable once the cycle closes');
    } else {
      fail('blocked approval left unexpected row state', rowsStillDraft);
    }

    // ---- Once the cycle reaches INCENTIVE_COMPUTED, the same pending proposal can now be approved ----
    await prisma.appraisalCycle.update({ where: { id: spineCycle.id }, data: { status: 'INCENTIVE_COMPUTED' } });
    const approvedWeights = await pms.approveWeightMatrixVersion({ workflowInstanceId: weightProposal.workflowInstance.id, approverUserId: md.id });
    const activeRows = await prisma.kpiWeightMatrix.findMany({ where: { orgUnitCode: spineOrgUnit.code, tier: 'JUNIOR', version: 1 } });
    if (approvedWeights && activeRows.length === 4 && activeRows.every((r) => r.status === 'ACTIVE')) {
      ok('retrying after the cycle reaches INCENTIVE_COMPUTED succeeds -- all 4 class rows -> ACTIVE');
    } else {
      fail('retry after cycle closure did not activate as expected', { approvedWeights, activeRows });
    }

    // ---- A second version supersedes the first ----
    const secondWeights = await pms.proposeWeightMatrixVersion({
      orgUnitCode: spineOrgUnit.code, tier: 'JUNIOR',
      weights: [{ kpiClass: 'CORE', weightPct: 25 }, { kpiClass: 'STRATEGIC', weightPct: 25 }, { kpiClass: 'SECONDARY', weightPct: 25 }, { kpiClass: 'PROCESS_INTEGRITY', weightPct: 25 }],
      proposedByUserId: hrAdmin.id,
    });
    await pms.approveWeightMatrixVersion({ workflowInstanceId: secondWeights.workflowInstance.id, approverUserId: md.id });
    const [v1After, v2After] = await Promise.all([
      prisma.kpiWeightMatrix.findMany({ where: { orgUnitCode: spineOrgUnit.code, tier: 'JUNIOR', version: 1 } }),
      prisma.kpiWeightMatrix.findMany({ where: { orgUnitCode: spineOrgUnit.code, tier: 'JUNIOR', version: 2 } }),
    ]);
    if (v1After.every((r) => r.status === 'SUPERSEDED') && v2After.every((r) => r.status === 'ACTIVE')) {
      ok('a second approved weight-matrix version supersedes the first, scoped to the same (orgUnitCode, tier) — never both ACTIVE at once');
    } else {
      fail('version supersession did not scope correctly', { v1After, v2After });
    }
  }

  console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — PMS slot B (CHECK5 item 4) against the real live DB.`);
  process.exitCode = failed ? 1 : 0;
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
