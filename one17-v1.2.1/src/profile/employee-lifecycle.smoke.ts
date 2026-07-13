// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/profile/employee-lifecycle.smoke.ts
// Invariant 50(b) (CHECK12): governed employee lifecycle -- onboarding,
// offboarding (incl. login deactivation), and the performanceIncentivePct
// amendment addendum with its non-retroactive-on-an-in-flight-cycle guard.
// Own SMOKE-prefixed fixtures throughout -- never touches the walkthrough
// DB or its real employees.
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { UserDeactivationService } from '../rbac/user-deactivation.service';
import { EmployeeLifecycleService } from './employee-lifecycle.service';

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
  const authService = new AuthService(prisma, audit, new MfaService(prisma, audit));
  const rbac = new RbacService(prisma, audit, workflow, authService);
  const userDeactivation = new UserDeactivationService(prisma, audit, delegation);
  const lifecycle = new EmployeeLifecycleService(prisma, audit, delegation, workflow, userDeactivation);

  const hr = await prisma.appUser.create({ data: { email: `elc-hr-${RUN}@one17.test`, displayName: 'elc-hr' } });
  await rbac.assignRole({ userId: hr.id, roleCode: 'HR_ADMIN' });
  const mdCeo = await prisma.appUser.create({ data: { email: `elc-mdceo-${RUN}@one17.test`, displayName: 'elc-mdceo' } });
  await rbac.assignRole({ userId: mdCeo.id, roleCode: 'MD_CEO' });
  const outsider = await prisma.appUser.create({ data: { email: `elc-outsider-${RUN}@one17.test`, displayName: 'elc-outsider' } });

  const orgUnit = await prisma.orgUnit.create({ data: { code: `SMOKE-ELC-ORG-${RUN}`, name: 'Smoke ELC Org Unit' } });
  const position = await prisma.position.create({ data: { title: `Smoke ELC Officer ${RUN}`, orgUnitCode: orgUnit.code, cadre: 'OFFICER', notch: 1 } });

  // ---- 1. Outsider (no EMPLOYEE_LIFECYCLE_INITIATION) cannot propose a hire ----
  await expectReject('outsider cannot propose a new hire', () =>
    lifecycle.requestOnboarding({ surname: 'Smoke', firstName: 'Candidate', positionId: position.id, orgUnitCode: orgUnit.code, hireDate: new Date(), requestedByUserId: outsider.id }));

  // ---- 2. HR proposes a new hire (default 25% incentive pct, linked login requested) ----
  const linkedEmail = `elc-newhire-${RUN}@one17.test`;
  const onboarding = await lifecycle.requestOnboarding({
    surname: 'Smoke', firstName: 'NewHire', positionId: position.id, orgUnitCode: orgUnit.code, hireDate: new Date('2026-08-01'),
    linkedUserEmail: linkedEmail, requestedByUserId: hr.id,
  });
  if (onboarding.status === 'PENDING' && onboarding.workflowInstanceId && Number(onboarding.proposedPerformanceIncentivePct) === 25) {
    ok('requestOnboarding creates a PENDING request, workflow initiated, default 25% incentive pct carried');
  } else {
    fail('requestOnboarding did not create the expected PENDING/25% row', onboarding);
  }

  // ---- 3. HR cannot approve their own onboarding request (maker != checker) ----
  await expectReject('HR cannot approve their own onboarding request', () =>
    lifecycle.decideOnboarding(onboarding.workflowInstanceId!, hr.id, 'APPROVE'));

  // ---- 4. MD_CEO approves -> Employee row created ACTIVE with linked login ----
  const approvedOnboarding = await lifecycle.decideOnboarding(onboarding.workflowInstanceId!, mdCeo.id, 'APPROVE');
  if (approvedOnboarding.status === 'APPROVED' && approvedOnboarding.resultingEmployeeId) {
    ok('onboarding APPROVED -- Employee row created');
  } else {
    fail('onboarding did not reach APPROVED with a resultingEmployeeId', approvedOnboarding);
  }
  const employee = await prisma.employee.findUniqueOrThrow({ where: { id: approvedOnboarding.resultingEmployeeId! }, include: { appUser: true } });
  if (employee.status === 'ACTIVE' && employee.appUser?.email === linkedEmail && employee.appUser.status === 'ACTIVE') {
    ok('resulting Employee is ACTIVE with a linked, ACTIVE AppUser login');
  } else {
    fail('resulting Employee/AppUser state looks wrong', employee);
  }

  // ---- 5. HR proposes an offboarding ----
  const offboarding = await lifecycle.requestOffboarding(employee.id, 'Smoke test resignation.', hr.id);
  await expectReject('HR cannot approve their own offboarding request', () =>
    lifecycle.decideOffboarding(offboarding.workflowInstanceId!, hr.id, 'APPROVE'));
  const approvedOffboarding = await lifecycle.decideOffboarding(offboarding.workflowInstanceId!, mdCeo.id, 'APPROVE');
  const employeeAfterOffboarding = await prisma.employee.findUniqueOrThrow({ where: { id: employee.id }, include: { appUser: true } });
  if (approvedOffboarding.status === 'APPROVED' && employeeAfterOffboarding.status === 'TERMINATED' && employeeAfterOffboarding.appUser?.status === 'SUSPENDED') {
    ok('offboarding APPROVED -- Employee.status TERMINATED AND linked AppUser login deactivated (SUSPENDED), invariant 50(b)');
  } else {
    fail('offboarding did not deactivate the linked login as expected', { approvedOffboarding, employeeAfterOffboarding });
  }

  // ---- 6. Cannot offboard an already-TERMINATED employee ----
  await expectReject('cannot offboard an employee who is already TERMINATED', () =>
    lifecycle.requestOffboarding(employee.id, 'Duplicate attempt.', hr.id));

  // ---- 7. performanceIncentivePct amendment: happy path (no in-flight cycle) ----
  const secondHireOnboarding = await lifecycle.requestOnboarding({
    surname: 'Smoke', firstName: 'PctTest', positionId: position.id, orgUnitCode: orgUnit.code, hireDate: new Date('2026-08-01'), requestedByUserId: hr.id,
  });
  const approvedSecondHire = await lifecycle.decideOnboarding(secondHireOnboarding.workflowInstanceId!, mdCeo.id, 'APPROVE');
  const pctEmployee = await prisma.employee.findUniqueOrThrow({ where: { id: approvedSecondHire.resultingEmployeeId! } });

  const pctRequest = await lifecycle.requestIncentivePctChange(pctEmployee.id, 30, hr.id);
  const approvedPctChange = await lifecycle.decideIncentivePctChange(pctRequest.workflowInstanceId!, mdCeo.id, 'APPROVE');
  const pctEmployeeAfter = await prisma.employee.findUniqueOrThrow({ where: { id: pctEmployee.id } });
  if (approvedPctChange.status === 'APPROVED' && Number(pctEmployeeAfter.performanceIncentivePct) === 30) {
    ok('performanceIncentivePct amendment applies once approved (no in-flight cycle) -- 25% -> 30%');
  } else {
    fail('performanceIncentivePct amendment did not apply as expected', { approvedPctChange, pctEmployeeAfter });
  }

  // ---- 8. "Never retroactive" adversarial: an in-flight (not yet INCENTIVE_COMPUTED) cycle blocks the approval outright ----
  const cycle = await prisma.appraisalCycle.create({
    data: { cycleType: 'INCENTIVE_CYCLE', periodStart: new Date('2026-01-01'), periodEnd: new Date('2026-06-30'), status: 'SCORING' },
  });
  await prisma.employeeScoreSubmission.create({ data: { appraisalCycleId: cycle.id, employeeId: pctEmployee.id } });
  const secondPctRequest = await lifecycle.requestIncentivePctChange(pctEmployee.id, 40, hr.id);
  await expectReject('performanceIncentivePct approval refused outright while a cycle is in flight (invariant 50b addendum: never retroactive)', () =>
    lifecycle.decideIncentivePctChange(secondPctRequest.workflowInstanceId!, mdCeo.id, 'APPROVE'));
  const pctEmployeeStillUnchanged = await prisma.employee.findUniqueOrThrow({ where: { id: pctEmployee.id } });
  const secondPctRequestStillPending = await prisma.employeeIncentivePctChangeRequest.findUniqueOrThrow({ where: { id: secondPctRequest.id } });
  if (Number(pctEmployeeStillUnchanged.performanceIncentivePct) === 30 && secondPctRequestStillPending.status === 'PENDING') {
    ok('blocked change left the employee pct unchanged (still 30%) and the request PENDING (not consumed) -- retryable once the cycle closes');
  } else {
    fail('blocked change left unexpected state', { pctEmployeeStillUnchanged, secondPctRequestStillPending });
  }

  // ---- 9. Once the cycle reaches INCENTIVE_COMPUTED, the same pending request can now be approved ----
  await prisma.appraisalCycle.update({ where: { id: cycle.id }, data: { status: 'INCENTIVE_COMPUTED' } });
  const nowApprovedPctChange = await lifecycle.decideIncentivePctChange(secondPctRequest.workflowInstanceId!, mdCeo.id, 'APPROVE');
  const pctEmployeeFinal = await prisma.employee.findUniqueOrThrow({ where: { id: pctEmployee.id } });
  if (nowApprovedPctChange.status === 'APPROVED' && Number(pctEmployeeFinal.performanceIncentivePct) === 40) {
    ok('retrying after the cycle reaches INCENTIVE_COMPUTED succeeds -- 30% -> 40%');
  } else {
    fail('retry after cycle closure did not apply as expected', { nowApprovedPctChange, pctEmployeeFinal });
  }

  // ---- 10. Reject path: onboarding rejection creates no Employee row ----
  const rejectOnboarding = await lifecycle.requestOnboarding({
    surname: 'Smoke', firstName: 'Rejected', positionId: position.id, orgUnitCode: orgUnit.code, hireDate: new Date('2026-08-01'), requestedByUserId: hr.id,
  });
  const rejected = await lifecycle.decideOnboarding(rejectOnboarding.workflowInstanceId!, mdCeo.id, 'REJECT', 'Smoke test rejection.');
  if (rejected.status === 'REJECTED' && !rejected.resultingEmployeeId) ok('rejected onboarding creates no Employee row');
  else fail('reject path left unexpected state', rejected);

  // Cleanup.
  await prisma.employeeScoreSubmission.deleteMany({ where: { appraisalCycleId: cycle.id } });
  await prisma.appraisalCycle.delete({ where: { id: cycle.id } });
  const requestIds = [onboarding.id, secondHireOnboarding.id, rejectOnboarding.id];
  await prisma.employeeOnboardingRequest.updateMany({ where: { id: { in: requestIds } }, data: { resultingEmployeeId: null } });
  await prisma.employeeIncentivePctChangeRequest.deleteMany({ where: { employeeId: pctEmployee.id } });
  await prisma.employeeOffboardingRequest.deleteMany({ where: { employeeId: employee.id } });
  await prisma.employeeOnboardingRequest.deleteMany({ where: { id: { in: requestIds } } });
  const employeeIds = [employee.id, pctEmployee.id];
  await prisma.employee.deleteMany({ where: { id: { in: employeeIds } } });
  await prisma.position.delete({ where: { id: position.id } });
  await prisma.orgUnit.delete({ where: { code: orgUnit.code } });
  const wfIds = [onboarding.workflowInstanceId, offboarding.workflowInstanceId, secondHireOnboarding.workflowInstanceId, pctRequest.workflowInstanceId, secondPctRequest.workflowInstanceId, rejectOnboarding.workflowInstanceId].filter((id): id is string => !!id);
  await prisma.workflowStepApproval.deleteMany({ where: { workflowInstanceId: { in: wfIds } } });
  await prisma.workflowInstance.deleteMany({ where: { id: { in: wfIds } } });
  const userIds = [hr.id, mdCeo.id, outsider.id, employee.appUserId, employeeAfterOffboarding.appUser?.id].filter((id): id is string => !!id);
  await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
  await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });

  await prisma.$disconnect();

  if (failed) {
    console.error('\nSMOKE FAILED — see FAIL lines above.');
    process.exitCode = 1;
  } else {
    console.log('\nSMOKE OK — employee lifecycle (invariant 50b) against the real live DB.');
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
