"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const rbac_service_1 = require("../rbac/rbac.service");
const auth_service_1 = require("../auth/auth.service");
const mfa_service_1 = require("../mfa/mfa.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const notification_service_1 = require("../notification/notification.service");
const task_service_1 = require("../task/task.service");
const profile_service_1 = require("../profile/profile.service");
const RUN = Date.now();
let failed = false;
function ok(label) { console.log(`OK: ${label}`); }
function fail(label, detail) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function expectReject(label, fn) {
    try {
        await fn();
        fail(`expected rejection: ${label}`);
    }
    catch (err) {
        ok(`rejected as expected: ${label} — ${err.message.split('\n')[0]}`);
    }
}
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const notification = new notification_service_1.NotificationService(prisma);
    const task = new task_service_1.TaskService(prisma, notification);
    const profile = new profile_service_1.ProfileService(prisma, audit, delegation, workflow, notification);
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
    ok(`employee names stored split: surname="${staff.surname}" firstName="${staff.firstName}" middleName="${staff.middleName}" — no full_name field exists`);
    await expectReject('outsider editing another employee\'s free-edit fields', () => profile.updateFreeEditFields(staff.id, outsiderUser.id, { hobbiesInterests: 'Chess' }));
    const freeEdit = await profile.updateFreeEditFields(staff.id, staffUser.id, { numberOfChildren: 2, hobbiesInterests: 'Chess; Reading', emergencyContactName: 'John Doe', emergencyContactPhone: '+2348030000000', emergencyContactRelationship: 'BROTHER' });
    if (freeEdit.hobbiesInterests === 'Chess; Reading' && freeEdit.numberOfChildren === 2) {
        ok('free-edit fields (children count, hobbies, emergency contact) saved directly by the employee themselves — no workflow');
    }
    else {
        fail('free-edit fields did not save correctly', freeEdit);
    }
    await expectReject('an outsider (no EMPLOYEE_PERSONAL_RECORDS grant) reading another employee\'s personal record', () => profile.getPersonalRecord(staff.id, outsiderUser.id));
    const selfRead = await profile.getPersonalRecord(staff.id, staffUser.id);
    const hrRead = await profile.getPersonalRecord(staff.id, hrUser.id);
    if (selfRead?.hobbiesInterests === 'Chess; Reading' && hrRead?.hobbiesInterests === 'Chess; Reading') {
        ok('personal record IS readable by the employee themselves AND by HR (EMPLOYEE_PERSONAL_RECORDS VIEW) — PII discipline holds for everyone else');
    }
    else {
        fail('self/HR read did not return the expected record', { selfRead, hrRead });
    }
    await expectReject('requesting a gated change with no fields supplied', () => profile.requestGatedChange(staff.id, staffUser.id, {}));
    const changeRequest = await profile.requestGatedChange(staff.id, staffUser.id, {
        maritalStatus: 'MARRIED',
        residentialAddress: '12 Smoke Street, Abuja',
        nextOfKinName: 'Fatima Bello',
        nextOfKinRelationship: 'SPOUSE',
        nextOfKinPhone: '+2348030000001',
    });
    await expectReject('the employee themselves acknowledging their own gated change request (maker != checker)', () => profile.acknowledgeChange(changeRequest.workflowInstanceId, staffUser.id));
    const acknowledged = await profile.acknowledgeChange(changeRequest.workflowInstanceId, hrUser.id);
    const recordAfterAck = await profile.getPersonalRecord(staff.id, staffUser.id);
    if (acknowledged?.status === 'ACKNOWLEDGED' && recordAfterAck?.maritalStatus === 'MARRIED' && recordAfterAck?.residentialAddress === '12 Smoke Street, Abuja' && recordAfterAck?.nextOfKinName === 'Fatima Bello') {
        ok('HR acknowledgment (a DIFFERENT user than the requester) applies the gated change — marital status/address/next-of-kin now live on the personal record');
    }
    else {
        fail('gated change did not apply correctly after HR acknowledgment', { acknowledged, recordAfterAck });
    }
    const notificationsAfterAck = await notification.listMine(staffUser.id);
    if (notificationsAfterAck.some((n) => n.type === 'PERSONAL_RECORD_CHANGE_DECIDED')) {
        ok('the employee receives a notification once HR decides their personal-record change request (invariant 29a "notifications inbox")');
    }
    else {
        fail('no PERSONAL_RECORD_CHANGE_DECIDED notification found', notificationsAfterAck);
    }
    const secondRequest = await profile.requestGatedChange(staff.id, staffUser.id, { residentialAddress: '99 Rejected Ave' });
    await profile.rejectChange(secondRequest.workflowInstanceId, hrUser.id, 'Insufficient supporting evidence.');
    const requests = await profile.listMyChangeRequests(staff.id);
    const rejectedRow = requests.find((r) => r.id === secondRequest.id);
    const recordAfterReject = await profile.getPersonalRecord(staff.id, staffUser.id);
    if (rejectedRow?.status === 'REJECTED' && recordAfterReject?.residentialAddress === '12 Smoke Street, Abuja') {
        ok('HR rejecting a gated change leaves the personal record UNCHANGED at its last-acknowledged value (the rejected address never applied)');
    }
    else {
        fail('rejection did not behave correctly', { rejectedRow, recordAfterReject });
    }
    await expectReject('an unrelated user (not the assignee\'s reports_to, not self) assigning a task', () => task.assignTask({ title: 'Unauthorized assignment attempt', assigneeEmployeeId: staff.id, assignedByUserId: outsiderUser.id }));
    const assignedTask = await task.assignTask({ title: 'Prepare Q3 pack', description: 'Draft the quarterly pack for review.', assigneeEmployeeId: staff.id, assignedByUserId: managerUser.id });
    ok(`manager (staff's own reports_to) assigns a task to their direct report — task ${assignedTask.id} created OPEN`);
    const taskNotifications = await notification.listMine(staffUser.id);
    if (taskNotifications.some((n) => n.type === 'TASK_ASSIGNED')) {
        ok('the assignee receives a TASK_ASSIGNED notification');
    }
    else {
        fail('no TASK_ASSIGNED notification found', taskNotifications);
    }
    const selfTask = await task.assignTask({ title: 'Personal reminder', assigneeEmployeeId: staff.id, assignedByUserId: staffUser.id });
    ok(`self-assignment succeeds without a reports_to relationship (assigning to ONESELF): task ${selfTask.id}`);
    await expectReject('the assignee\'s manager (not the assignee) starting the assignee\'s task', () => task.startTask(assignedTask.id, managerUser.id));
    await task.startTask(assignedTask.id, staffUser.id);
    const completed = await task.completeTask(assignedTask.id, staffUser.id);
    if (completed.status === 'DONE' && completed.completedAt) {
        ok('the assignee starts and completes their own task — time-tracking fields (startedAt/completedAt) populated');
    }
    else {
        fail('task completion did not populate time-tracking fields', completed);
    }
    const managerView = await task.listDirectReportsTasks(manager.id);
    if (managerView.some((t) => t.id === assignedTask.id) && !managerView.some((t) => t.id === selfTask.id)) {
        fail('unexpected: manager view should include both staff tasks (assigned + self)', managerView);
    }
    else if (managerView.length === 2) {
        ok(`manager sees BOTH of their direct report's tasks (${managerView.length}) — invariant 29(a) "managers additionally see direct-reports' task/SLA summaries"`);
    }
    else {
        fail('manager direct-reports task view did not return the expected count', managerView);
    }
    await profile.uploadSop(hrUser.id, 'POLICY', `sop-${RUN}.pdf`);
    await prisma.appUser.update({ where: { id: hrUser.id }, data: {} });
    const staffSops = await profile.listSopLibrary(staffUser.id);
    if (staffSops.length === 0) {
        ok(`SOP library is dept-scoped: staff (org unit ${orgUnitCode}) sees ZERO SOPs uploaded to a different department`);
    }
    else {
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
//# sourceMappingURL=profile.smoke.js.map