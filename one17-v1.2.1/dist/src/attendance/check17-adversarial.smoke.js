"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const notification_service_1 = require("../notification/notification.service");
const rbac_service_1 = require("../rbac/rbac.service");
const auth_service_1 = require("../auth/auth.service");
const mfa_service_1 = require("../mfa/mfa.service");
const attendance_service_1 = require("./attendance.service");
const leave_service_1 = require("../leave/leave.service");
const task_service_1 = require("../task/task.service");
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
    const notification = new notification_service_1.NotificationService(prisma);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const attendance = new attendance_service_1.AttendanceService(prisma, audit, delegation, workflow, notification);
    const leave = new leave_service_1.LeaveService(prisma, audit, delegation);
    const task = new task_service_1.TaskService(prisma, notification);
    const orgUnitCode = `CHECK17_SMOKE_${RUN}`;
    await prisma.orgUnit.create({ data: { code: orgUnitCode, name: 'CHECK17 Smoke Dept' } });
    const supPosition = await prisma.position.create({ data: { title: `Supervisor ${RUN}`, orgUnitCode, cadre: 'Snr Associate 1', notch: 1 } });
    const repPosition = await prisma.position.create({ data: { title: `Report ${RUN}`, orgUnitCode, cadre: 'Associate', notch: 1 } });
    const makeUser = async (label, roleCode) => {
        const email = `check17-smoke-${label}-${RUN}@one17.test`;
        const user = await prisma.appUser.create({ data: { email, displayName: email } });
        await rbac.assignRole({ userId: user.id, roleCode });
        return user;
    };
    const hrUser = await makeUser('hr', 'HR_ADMIN');
    const supUser = await prisma.appUser.create({ data: { email: `check17-smoke-sup-${RUN}@one17.test`, displayName: 'sup' } });
    const repUser = await prisma.appUser.create({ data: { email: `check17-smoke-rep-${RUN}@one17.test`, displayName: 'rep' } });
    const outsiderUser = await prisma.appUser.create({ data: { email: `check17-smoke-outsider-${RUN}@one17.test`, displayName: 'outsider' } });
    const supervisor = await prisma.employee.create({ data: { surname: 'Supervisor', firstName: `S${RUN}`, positionId: supPosition.id, orgUnitCode, appUserId: supUser.id, hireDate: new Date() } });
    const report = await prisma.employee.create({ data: { surname: 'Report', firstName: `R${RUN}`, positionId: repPosition.id, orgUnitCode, appUserId: repUser.id, reportsToId: supervisor.id, hireDate: new Date() } });
    const terminatedEmployee = await prisma.employee.create({ data: { surname: 'Terminated', firstName: `T${RUN}`, positionId: repPosition.id, orgUnitCode, appUserId: null, hireDate: new Date(), status: 'TERMINATED' } });
    const provider = await attendance.proposeProviderConfig({ providerSlot: 1, adapterType: 'FILE_IMPORT', name: `CHECK17 FileImport ${RUN}`, isActive: true }, hrUser.id);
    const mdUser = await makeUser('md', 'MD_CEO');
    await attendance.approveProviderConfig(provider.configWorkflowInstanceId, mdUser.id);
    const malformedResult = await attendance.importFileEvents(provider.id, [
        { deviceUserRef: 'DL-OK-1', occurredAt: new Date().toISOString(), method: 'DOOR_UNLOCK' },
        { deviceUserRef: '', occurredAt: new Date().toISOString(), method: 'DOOR_UNLOCK' },
        { deviceUserRef: 'DL-OK-2', occurredAt: 'not-a-date', method: 'DOOR_UNLOCK' },
    ], hrUser.id);
    if (malformedResult.imported === 1 && malformedResult.rejected.length === 2) {
        ok('FileImport rejects malformed rows to a visible error list (missing deviceUserRef, unparseable occurredAt) while still importing the valid row — invariant 63(c) adversarial case');
    }
    else {
        fail('FileImport did not correctly separate valid/malformed rows', malformedResult);
    }
    await attendance.mapLockUser({ providerId: provider.id, deviceUserRef: 'DL-TERM', employeeId: terminatedEmployee.id }, hrUser.id);
    await attendance.importFileEvents(provider.id, [{ deviceUserRef: 'DL-TERM', occurredAt: new Date().toISOString(), method: 'DOOR_UNLOCK' }], hrUser.id);
    const alertEvent = await prisma.attendanceEvent.findFirst({ where: { providerId: provider.id, deviceUserRef: 'DL-TERM' } });
    const securityAlertAudit = await prisma.auditTrail.findFirst({ where: { action: 'SECURITY_ALERT', entityType: 'attendance_event', entityId: alertEvent?.id } });
    if (alertEvent?.isTerminatedAlert && securityAlertAudit) {
        ok('an unlock event for a TERMINATED employee raises a SECURITY_ALERT audit record and flags isTerminatedAlert — invariant 40(d), never recorded as an ordinary attendance mark');
    }
    else {
        fail('terminated-employee unlock did not raise the expected security alert', { alertEvent, securityAlertAudit });
    }
    const excEvent = await prisma.attendanceEvent.create({ data: { providerId: provider.id, deviceUserRef: 'DL-OK-1', employeeId: report.id, occurredAt: new Date(), method: 'DOOR_UNLOCK', rawRef: `manual-${RUN}` } });
    const excRequest = await attendance.requestException(repUser.id, { attendanceEventId: excEvent.id, disputedDate: new Date().toISOString(), reason: 'Was on approved errand' });
    await expectReject('an employee cannot adjudicate their own exception request', () => attendance.decideExceptionRequest(excRequest.id, 'ACCEPTED', repUser.id));
    await expectReject('an outsider (not the direct supervisor) cannot adjudicate an exception request', () => attendance.decideExceptionRequest(excRequest.id, 'ACCEPTED', outsiderUser.id));
    const decided = await attendance.decideExceptionRequest(excRequest.id, 'ACCEPTED', supUser.id);
    if (decided.status === 'ACCEPTED') {
        ok('the real direct supervisor (reports-to) successfully adjudicates an exception request');
    }
    else {
        fail('supervisor adjudication did not persist as expected', decided);
    }
    const year = new Date().getFullYear();
    const balances = await leave.getMyBalances(report.id, year);
    const annual = balances.find((b) => b.leaveTypeCode === 'ANNUAL');
    const remaining = Number(annual.entitledDays) - Number(annual.usedDays);
    await expectReject('a leave application for more days than the remaining balance is refused', () => leave.applyForLeave(repUser.id, { leaveTypeCode: 'ANNUAL', startDate: `${year}-01-01`, endDate: new Date(new Date(`${year}-01-01`).getTime() + (remaining + 5) * 86_400_000).toISOString().slice(0, 10) }));
    const validLeave = await leave.applyForLeave(repUser.id, { leaveTypeCode: 'ANNUAL', startDate: `${year}-06-10`, endDate: `${year}-06-11` });
    await expectReject('an employee cannot approve their own leave application', () => leave.supervisorDecide(validLeave.id, 'APPROVED', repUser.id));
    await expectReject('a non-supervisor cannot approve a leave application', () => leave.supervisorDecide(validLeave.id, 'APPROVED', outsiderUser.id));
    await expectReject('HR cannot acknowledge a leave application before supervisor approval', () => leave.hrAcknowledge(validLeave.id, hrUser.id));
    const approved = await leave.supervisorDecide(validLeave.id, 'APPROVED', supUser.id);
    if (approved.status === 'SUPERVISOR_APPROVED') {
        ok('the real direct supervisor approves a leave application (reports-to check, not a capability grant)');
    }
    else {
        fail('supervisor approval did not persist as expected', approved);
    }
    const acknowledged = await leave.hrAcknowledge(validLeave.id, hrUser.id);
    if (acknowledged.status === 'HR_ACKNOWLEDGED') {
        ok('HR_ADMIN (LEAVE_MANAGEMENT INITIATE) acknowledges a supervisor-approved leave application, debiting the balance');
    }
    else {
        fail('HR acknowledgment did not persist as expected', acknowledged);
    }
    const balancesAfter = await leave.getMyBalances(report.id, year);
    const annualAfter = balancesAfter.find((b) => b.leaveTypeCode === 'ANNUAL');
    if (Number(annualAfter.usedDays) === Number(annual.usedDays) + 2) {
        ok('HR acknowledgment debits exactly the requested day count from the balance');
    }
    else {
        fail('balance debit after HR acknowledgment was incorrect', { before: annual, after: annualAfter });
    }
    await expectReject('assigning a task tagged to a KPI outside the assignee\'s active scorecard is refused (invariant 64d(i))', () => task.assignTask({ title: 'Bad KPI tag', assigneeEmployeeId: report.id, assignedByUserId: supUser.id, kpiDefinitionId: '00000000-0000-0000-0000-000000000000' }));
    const selfTask = await task.assignTask({ title: 'Self-created task', assigneeEmployeeId: report.id, assignedByUserId: repUser.id });
    if (selfTask.assigneeEmployeeId === report.id && selfTask.assignedByUserId === repUser.id) {
        ok('an employee can self-create a task (assignee === assigner === self) — invariant 64d(ii)');
    }
    else {
        fail('self-created task did not persist as expected', selfTask);
    }
    const submission = await task.createSubmission(repUser.id, { title: 'Please review the Q3 numbers' });
    const preAcceptTaskCount = await prisma.task.count({ where: { assigneeEmployeeId: supervisor.id } });
    await expectReject('the submitter cannot decide their own submission', () => task.acceptSubmission(submission.id, repUser.id));
    const declinedSub = await task.declineSubmission(submission.id, supUser.id);
    const postDeclineTaskCount = await prisma.task.count({ where: { assigneeEmployeeId: supervisor.id } });
    if (declinedSub.status === 'DECLINED' && postDeclineTaskCount === preAcceptTaskCount) {
        ok('declining a submission never creates a task on the supervisor — a subordinate can never force-order a senior (invariant 64d(iii))');
    }
    else {
        fail('decline unexpectedly created a task, or status did not persist', { declinedSub, preAcceptTaskCount, postDeclineTaskCount });
    }
    const submission2 = await task.createSubmission(repUser.id, { title: 'Please review the Q4 numbers' });
    const { task: acceptedTask } = await task.acceptSubmission(submission2.id, supUser.id);
    if (acceptedTask.assigneeEmployeeId === supervisor.id && acceptedTask.assignedByUserId === supUser.id) {
        ok('accepting a submission creates a self-assigned task on the supervisor (their own acceptance, never the subordinate\'s order) — invariant 64d(iii)');
    }
    else {
        fail('accepted submission did not create the expected self-assigned task', acceptedTask);
    }
    await prisma.taskSubmission.deleteMany({ where: { submittedByEmployeeId: report.id } });
    await prisma.task.deleteMany({ where: { assigneeEmployeeId: { in: [report.id, supervisor.id] } } });
    await prisma.leaveApplication.deleteMany({ where: { employeeId: report.id } });
    await prisma.leaveEntitlement.deleteMany({ where: { employeeId: report.id } });
    await prisma.attendanceExceptionRequest.deleteMany({ where: { employeeId: report.id } });
    await prisma.attendanceEvent.deleteMany({ where: { providerId: provider.id } });
    await prisma.attendanceLockUserMapping.deleteMany({ where: { providerId: provider.id } });
    await prisma.attendanceProvider.delete({ where: { id: provider.id } });
    await prisma.employee.deleteMany({ where: { orgUnitCode } });
    const userIds = [hrUser.id, mdUser.id, supUser.id, repUser.id, outsiderUser.id];
    await prisma.workflowStepApproval.deleteMany({ where: { approverUserId: { in: userIds } } });
    await prisma.workflowInstance.deleteMany({ where: { initiatedByUserId: { in: userIds } } });
    await prisma.notification.deleteMany({ where: { recipientUserId: { in: userIds } } });
    await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
    await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });
    await prisma.position.deleteMany({ where: { orgUnitCode } });
    await prisma.orgUnit.deleteMany({ where: { code: orgUnitCode } });
    console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — CHECK17 Attendance/Leave/Task-KPI/Submissions adversarial evidence against the real live DB.`);
    process.exitCode = failed ? 1 : 0;
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=check17-adversarial.smoke.js.map