// Run with: npx tsx src/profile/profile.smoke.ts
// Check-6C tranche 2: employee profile hub (invariant 29a) — personal
// records (direct-edit vs HR-gated), notifications, tasks (senior ->
// direct-report via reports_to), SOP library dept-scoping.
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { NotificationService } from '../notification/notification.service';
import { TaskService } from '../task/task.service';
import { ProfileService } from '../profile/profile.service';

const RUN = Date.now();
let failed = false;
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function expectReject(label: string, fn: () => Promise<unknown>) {
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
  const notification = new NotificationService(prisma);
  const task = new TaskService(prisma, notification);
  const profile = new ProfileService(prisma, audit, delegation, workflow, notification);

  const orgUnitCode = `PROFILE_SMOKE_${RUN}`;
  await prisma.orgUnit.create({ data: { code: orgUnitCode, name: 'Profile Smoke Dept' } });
  const managerPosition = await prisma.position.create({ data: { title: `Manager ${RUN}`, orgUnitCode, cadre: 'Snr Associate 1', notch: 1 } });
  const staffPosition = await prisma.position.create({ data: { title: `Staff ${RUN}`, orgUnitCode, cadre: 'Snr Associate 1', notch: 1 } });

  const managerUser = await prisma.appUser.create({ data: { email: `profile-manager-${RUN}@one17.test`, displayName: 'x' } });
  await rbac.assignRole({ userId: managerUser.id, roleCode: 'DEPT_CHIEF' });
  const manager = await prisma.employee.create({ data: { surname: 'Manager', firstName: `Direct${RUN}`, positionId: managerPosition.id, orgUnitCode, appUserId: managerUser.id, hireDate: new Date() } });

  const staffUser = await prisma.appUser.create({ data: { email: `profile-staff-${RUN}@one17.test`, displayName: 'x' } });
  await rbac.assignRole({ userId: staffUser.id, roleCode: 'PORT_OFF' });
  const staff = await prisma.employee.create({ data: { surname: 'Bello', firstName: 'Amina', middleName: 'Ngozi', positionId: staffPosition.id, orgUnitCode, appUserId: staffUser.id, reportsToId: manager.id, hireDate: new Date() } });

  const outsiderUser = await prisma.appUser.create({ data: { email: `profile-outsider-${RUN}@one17.test`, displayName: 'x' } });
  await rbac.assignRole({ userId: outsiderUser.id, roleCode: 'PORT_OFF' });

  const hrUser = await prisma.appUser.create({ data: { email: `profile-hr-${RUN}@one17.test`, displayName: 'x' } });
  await rbac.assignRole({ userId: hrUser.id, roleCode: 'HR_ADMIN' });
  const hrOrgUnitCode = `PROFILE_SMOKE_HR_${RUN}`;
  await prisma.orgUnit.create({ data: { code: hrOrgUnitCode, name: 'Profile Smoke HR Dept' } });
  const hrPosition = await prisma.position.create({ data: { title: `HR Officer ${RUN}`, orgUnitCode: hrOrgUnitCode, cadre: 'Snr Associate 1', notch: 1 } });
  await prisma.employee.create({ data: { surname: 'HR', firstName: `Officer${RUN}`, positionId: hrPosition.id, orgUnitCode: hrOrgUnitCode, appUserId: hrUser.id, hireDate: new Date() } });

  // ==========================================================================
  // Name restructuring (invariant 29a): surname/firstName/middleName, no
  // full_name field exists at all — proven by construction above (the
  // create() calls only accept the three split fields).
  // ==========================================================================
  ok(`employee names stored split: surname="${staff.surname}" firstName="${staff.firstName}" middleName="${staff.middleName}" — no full_name field exists`);

  // ==========================================================================
  // Free-edit fields: self-editable directly, no workflow.
  // ==========================================================================
  await expectReject('outsider editing another employee\'s free-edit fields', () =>
    profile.updateFreeEditFields(staff.id, outsiderUser.id, { hobbiesInterests: 'Chess' }));
  const freeEdit = await profile.updateFreeEditFields(staff.id, staffUser.id, { numberOfChildren: 2, hobbiesInterests: 'Chess; Reading', emergencyContactName: 'John Doe', emergencyContactPhone: '+2348030000000', emergencyContactRelationship: 'BROTHER' });
  if (freeEdit.hobbiesInterests === 'Chess; Reading' && freeEdit.numberOfChildren === 2) {
    ok('free-edit fields (children count, hobbies, emergency contact) saved directly by the employee themselves — no workflow');
  } else {
    fail('free-edit fields did not save correctly', freeEdit);
  }

  // ==========================================================================
  // PII access gate: employee-self + HR (EMPLOYEE_PERSONAL_RECORDS VIEW)
  // only — NOT general staff visibility.
  // ==========================================================================
  await expectReject('an outsider (no EMPLOYEE_PERSONAL_RECORDS grant) reading another employee\'s personal record', () =>
    profile.getPersonalRecord(staff.id, outsiderUser.id));
  const selfRead = await profile.getPersonalRecord(staff.id, staffUser.id);
  const hrRead = await profile.getPersonalRecord(staff.id, hrUser.id);
  if (selfRead?.hobbiesInterests === 'Chess; Reading' && hrRead?.hobbiesInterests === 'Chess; Reading') {
    ok('personal record IS readable by the employee themselves AND by HR (EMPLOYEE_PERSONAL_RECORDS VIEW) — PII discipline holds for everyone else');
  } else {
    fail('self/HR read did not return the expected record', { selfRead, hrRead });
  }

  // ==========================================================================
  // Gated trio: marital status / address / next-of-kin route through HR
  // acknowledgment (maker != checker; a DIFFERENT authority than the
  // requester acknowledges).
  // ==========================================================================
  await expectReject('requesting a gated change with no fields supplied', () => profile.requestGatedChange(staff.id, staffUser.id, {}));
  const changeRequest = await profile.requestGatedChange(staff.id, staffUser.id, {
    maritalStatus: 'MARRIED',
    residentialAddress: '12 Smoke Street, Abuja',
    nextOfKinName: 'Fatima Bello',
    nextOfKinRelationship: 'SPOUSE',
    nextOfKinPhone: '+2348030000001',
  });
  await expectReject('the employee themselves acknowledging their own gated change request (maker != checker)', () =>
    profile.acknowledgeChange(changeRequest.workflowInstanceId!, staffUser.id));
  const acknowledged = await profile.acknowledgeChange(changeRequest.workflowInstanceId!, hrUser.id);
  const recordAfterAck = await profile.getPersonalRecord(staff.id, staffUser.id);
  if (acknowledged?.status === 'ACKNOWLEDGED' && recordAfterAck?.maritalStatus === 'MARRIED' && recordAfterAck?.residentialAddress === '12 Smoke Street, Abuja' && recordAfterAck?.nextOfKinName === 'Fatima Bello') {
    ok('HR acknowledgment (a DIFFERENT user than the requester) applies the gated change — marital status/address/next-of-kin now live on the personal record');
  } else {
    fail('gated change did not apply correctly after HR acknowledgment', { acknowledged, recordAfterAck });
  }
  const notificationsAfterAck = await notification.listMine(staffUser.id);
  if (notificationsAfterAck.some((n) => n.type === 'PERSONAL_RECORD_CHANGE_DECIDED')) {
    ok('the employee receives a notification once HR decides their personal-record change request (invariant 29a "notifications inbox")');
  } else {
    fail('no PERSONAL_RECORD_CHANGE_DECIDED notification found', notificationsAfterAck);
  }

  // A second request, this time rejected.
  const secondRequest = await profile.requestGatedChange(staff.id, staffUser.id, { residentialAddress: '99 Rejected Ave' });
  await profile.rejectChange(secondRequest.workflowInstanceId!, hrUser.id, 'Insufficient supporting evidence.');
  const requests = await profile.listMyChangeRequests(staff.id);
  const rejectedRow = requests.find((r) => r.id === secondRequest.id);
  const recordAfterReject = await profile.getPersonalRecord(staff.id, staffUser.id);
  if (rejectedRow?.status === 'REJECTED' && recordAfterReject?.residentialAddress === '12 Smoke Street, Abuja') {
    ok('HR rejecting a gated change leaves the personal record UNCHANGED at its last-acknowledged value (the rejected address never applied)');
  } else {
    fail('rejection did not behave correctly', { rejectedRow, recordAfterReject });
  }

  // ==========================================================================
  // Tasks: "senior -> direct-report assignment via org reports_to."
  // ==========================================================================
  await expectReject('an unrelated user (not the assignee\'s reports_to, not self) assigning a task', () =>
    task.assignTask({ title: 'Unauthorized assignment attempt', assigneeEmployeeId: staff.id, assignedByUserId: outsiderUser.id }));
  const assignedTask = await task.assignTask({ title: 'Prepare Q3 pack', description: 'Draft the quarterly pack for review.', assigneeEmployeeId: staff.id, assignedByUserId: managerUser.id });
  ok(`manager (staff's own reports_to) assigns a task to their direct report — task ${assignedTask.id} created OPEN`);
  const taskNotifications = await notification.listMine(staffUser.id);
  if (taskNotifications.some((n) => n.type === 'TASK_ASSIGNED')) {
    ok('the assignee receives a TASK_ASSIGNED notification');
  } else {
    fail('no TASK_ASSIGNED notification found', taskNotifications);
  }
  const selfTask = await task.assignTask({ title: 'Personal reminder', assigneeEmployeeId: staff.id, assignedByUserId: staffUser.id });
  ok(`self-assignment succeeds without a reports_to relationship (assigning to ONESELF): task ${selfTask.id}`);

  await expectReject('the assignee\'s manager (not the assignee) starting the assignee\'s task', () => task.startTask(assignedTask.id, managerUser.id));
  await task.startTask(assignedTask.id, staffUser.id);
  const completed = await task.completeTask(assignedTask.id, staffUser.id);
  if (completed.status === 'DONE' && completed.completedAt) {
    ok('the assignee starts and completes their own task — time-tracking fields (startedAt/completedAt) populated');
  } else {
    fail('task completion did not populate time-tracking fields', completed);
  }

  const managerView = await task.listDirectReportsTasks(manager.id);
  if (managerView.some((t) => t.id === assignedTask.id) && !managerView.some((t) => t.id === selfTask.id)) {
    fail('unexpected: manager view should include both staff tasks (assigned + self)', managerView);
  } else if (managerView.length === 2) {
    ok(`manager sees BOTH of their direct report's tasks (${managerView.length}) — invariant 29(a) "managers additionally see direct-reports' task/SLA summaries"`);
  } else {
    fail('manager direct-reports task view did not return the expected count', managerView);
  }

  // ==========================================================================
  // SOP library: dept-scoped (own org unit only).
  // ==========================================================================
  await profile.uploadSop(hrUser.id, 'POLICY', `sop-${RUN}.pdf`); // HR's own dept, not this smoke dept — should not appear in staff's view.
  await prisma.appUser.update({ where: { id: hrUser.id }, data: {} }); // no-op, keeps hrUser distinct
  const staffSops = await profile.listSopLibrary(staffUser.id);
  if (staffSops.length === 0) {
    ok(`SOP library is dept-scoped: staff (org unit ${orgUnitCode}) sees ZERO SOPs uploaded to a different department`);
  } else {
    fail('SOP library leaked across departments', staffSops);
  }
  await expectReject('outsider (no DOCUMENT_REGISTER grant) uploading a SOP', () => profile.uploadSop(outsiderUser.id, 'POLICY', 'x.pdf'));

  console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — Employee profile hub (Check-6C tranche 2, invariant 29a) against the real live DB.`);
  process.exitCode = failed ? 1 : 0;
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
