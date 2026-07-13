"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../prisma/prisma.service");
const notification_service_1 = require("../notification/notification.service");
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
    const notification = new notification_service_1.NotificationService(prisma);
    const task = new task_service_1.TaskService(prisma, notification);
    const orgUnitCode = `TASK_SMOKE_${RUN}`;
    const otherOrgUnitCode = `TASK_SMOKE_OTHER_${RUN}`;
    await prisma.orgUnit.create({ data: { code: orgUnitCode, name: 'Task Smoke Dept' } });
    await prisma.orgUnit.create({ data: { code: otherOrgUnitCode, name: 'Task Smoke Other Dept' } });
    const seniorPosition = await prisma.position.create({ data: { title: `Senior ${RUN}`, orgUnitCode, cadre: 'Executive', notch: 1 } });
    const managerPosition = await prisma.position.create({ data: { title: `Manager ${RUN}`, orgUnitCode, cadre: 'Snr Associate 1', notch: 1 } });
    const juniorPosition = await prisma.position.create({ data: { title: `Junior ${RUN}`, orgUnitCode, cadre: 'Associate', notch: 1 } });
    const otherPosition = await prisma.position.create({ data: { title: `Unrelated ${RUN}`, orgUnitCode: otherOrgUnitCode, cadre: 'Associate', notch: 1 } });
    const seniorUser = await prisma.appUser.create({ data: { email: `task-senior-${RUN}@one17.test`, displayName: 'senior' } });
    const senior = await prisma.employee.create({ data: { surname: 'Senior', firstName: `Chief${RUN}`, positionId: seniorPosition.id, orgUnitCode, appUserId: seniorUser.id, hireDate: new Date() } });
    const managerUser = await prisma.appUser.create({ data: { email: `task-manager-${RUN}@one17.test`, displayName: 'manager' } });
    const manager = await prisma.employee.create({ data: { surname: 'Manager', firstName: `Line${RUN}`, positionId: managerPosition.id, orgUnitCode, appUserId: managerUser.id, reportsToId: senior.id, hireDate: new Date() } });
    const junior1User = await prisma.appUser.create({ data: { email: `task-junior1-${RUN}@one17.test`, displayName: 'junior1' } });
    const junior1 = await prisma.employee.create({ data: { surname: 'Junior', firstName: `One${RUN}`, positionId: juniorPosition.id, orgUnitCode, appUserId: junior1User.id, reportsToId: manager.id, hireDate: new Date() } });
    const junior2User = await prisma.appUser.create({ data: { email: `task-junior2-${RUN}@one17.test`, displayName: 'junior2' } });
    const junior2 = await prisma.employee.create({ data: { surname: 'Junior', firstName: `Two${RUN}`, positionId: juniorPosition.id, orgUnitCode, appUserId: junior2User.id, reportsToId: manager.id, hireDate: new Date() } });
    const unrelatedUser = await prisma.appUser.create({ data: { email: `task-unrelated-${RUN}@one17.test`, displayName: 'unrelated' } });
    const unrelated = await prisma.employee.create({ data: { surname: 'Unrelated', firstName: `Person${RUN}`, positionId: otherPosition.id, orgUnitCode: otherOrgUnitCode, appUserId: unrelatedUser.id, hireDate: new Date() } });
    const seniorSubordinates = await task.listSubordinateEmployeeIds(senior.id);
    if (seniorSubordinates.includes(manager.id) && seniorSubordinates.includes(junior1.id) && seniorSubordinates.includes(junior2.id) && !seniorSubordinates.includes(unrelated.id)) {
        ok('listSubordinateEmployeeIds walks the FULL multi-level subtree (senior -> manager -> both juniors), not just one hop, and excludes an unrelated employee');
    }
    else {
        fail('listSubordinateEmployeeIds did not return the expected multi-level subtree', seniorSubordinates);
    }
    const managerSubordinates = await task.listSubordinateEmployeeIds(manager.id);
    if (managerSubordinates.includes(junior1.id) && managerSubordinates.includes(junior2.id) && !managerSubordinates.includes(senior.id)) {
        ok('listSubordinateEmployeeIds from a mid-level manager returns only their own subtree (both juniors), never walks upward to the senior');
    }
    else {
        fail('mid-level listSubordinateEmployeeIds returned an unexpected set', managerSubordinates);
    }
    const juniorSubordinates = await task.listSubordinateEmployeeIds(junior1.id);
    if (juniorSubordinates.length === 0) {
        ok('a leaf employee (no direct reports) has an empty subordinate set');
    }
    else {
        fail('expected an empty subordinate set for a leaf employee', juniorSubordinates);
    }
    const dueAt = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);
    await expectReject('assignTask still enforces reports-to: senior cannot assign directly to a grand-report (junior1) bypassing manager', () => task.assignTask({ title: 'x', assigneeEmployeeId: junior1.id, assignedByUserId: seniorUser.id, dueAt }));
    const taskWithDeliverable = await task.assignTask({
        title: `Prepare the FY27 pack ${RUN}`,
        assigneeEmployeeId: junior1.id,
        assignedByUserId: managerUser.id,
        dueAt,
        deliverableUrl: `/documents/fy27-draft-${RUN}.pdf`,
    });
    if (taskWithDeliverable.deliverableUrl === `/documents/fy27-draft-${RUN}.pdf`) {
        ok('assignTask persists a deliverableUrl set at assignment time (invariant 55c)');
    }
    else {
        fail('deliverableUrl did not persist at assignment time', taskWithDeliverable);
    }
    const taskWithoutDeliverable = await task.assignTask({ title: `No deliverable yet ${RUN}`, assigneeEmployeeId: junior2.id, assignedByUserId: managerUser.id, dueAt });
    await expectReject('an outsider (not the assignee) cannot set the deliverable URL on someone else\'s task', () => task.setDeliverableUrl(taskWithoutDeliverable.id, `/documents/x-${RUN}.pdf`, managerUser.id));
    const updatedDeliverable = await task.setDeliverableUrl(taskWithoutDeliverable.id, `/documents/fy27-final-${RUN}.pdf`, junior2User.id);
    if (updatedDeliverable.deliverableUrl === `/documents/fy27-final-${RUN}.pdf`) {
        ok('the assignee sets the deliverable URL later, as the deliverable becomes known — ownership-gated (invariant 55c)');
    }
    else {
        fail('setDeliverableUrl did not persist correctly', updatedDeliverable);
    }
    const managerPageView = await task.listForTasksPage(managerUser.id);
    if (managerPageView.subordinates.some((t) => t.id === taskWithDeliverable.id) && managerPageView.subordinates.some((t) => t.id === taskWithoutDeliverable.id)) {
        ok('listForTasksPage returns the caller\'s full reporting subtree\'s tasks (manager sees both juniors\' tasks)');
    }
    else {
        fail('listForTasksPage subordinates set missing expected tasks', managerPageView.subordinates);
    }
    const junior1PageView = await task.listForTasksPage(junior1User.id);
    if (junior1PageView.mine.some((t) => t.id === taskWithDeliverable.id) && junior1PageView.subordinates.length === 0) {
        ok('listForTasksPage for a leaf employee returns their own task as "mine" and an empty subordinates set (identity-derived, no caller-supplied employeeId)');
    }
    else {
        fail('listForTasksPage did not correctly scope a leaf employee\'s view', junior1PageView);
    }
    const unrelatedPageView = await task.listForTasksPage(unrelatedUser.id);
    if (!unrelatedPageView.mine.some((t) => t.id === taskWithDeliverable.id) && !unrelatedPageView.subordinates.some((t) => t.id === taskWithDeliverable.id)) {
        ok('an unrelated employee\'s listForTasksPage view never leaks another org unit\'s tasks (realm isolation)');
    }
    else {
        fail('unrelated employee saw a task outside their own realm', unrelatedPageView);
    }
    const filteredByOrgUnit = await task.listForTasksPage(managerUser.id, { orgUnitCode });
    if (filteredByOrgUnit.subordinates.length === 2) {
        ok('listForTasksPage applies the orgUnitCode filter app-side over the subordinate set');
    }
    else {
        fail('orgUnitCode filter did not narrow the subordinate set as expected', filteredByOrgUnit.subordinates);
    }
    await task.startTask(taskWithDeliverable.id, junior1User.id);
    const filteredByStatus = await task.listForTasksPage(managerUser.id, { status: 'IN_PROGRESS' });
    if (filteredByStatus.subordinates.length === 1 && filteredByStatus.subordinates[0].id === taskWithDeliverable.id) {
        ok('listForTasksPage applies the status filter app-side over the subordinate set');
    }
    else {
        fail('status filter did not narrow the subordinate set as expected', filteredByStatus.subordinates);
    }
    const employeelessUser = await prisma.appUser.create({ data: { email: `task-noemp-${RUN}@one17.test`, displayName: 'no-employee' } });
    const employeelessView = await task.listForTasksPage(employeelessUser.id);
    if (employeelessView.mine.length === 0 && employeelessView.subordinates.length === 0) {
        ok('a caller with no Employee record gets an empty view, never an error (e.g. an admin/system account)');
    }
    else {
        fail('expected an empty view for a caller with no Employee record', employeelessView);
    }
    await prisma.task.deleteMany({ where: { assigneeEmployeeId: { in: [junior1.id, junior2.id] } } });
    await prisma.employee.deleteMany({ where: { orgUnitCode: { in: [orgUnitCode, otherOrgUnitCode] } } });
    const userIds = [seniorUser.id, managerUser.id, junior1User.id, junior2User.id, unrelatedUser.id, employeelessUser.id];
    await prisma.notification.deleteMany({ where: { recipientUserId: { in: userIds } } });
    await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });
    await prisma.position.deleteMany({ where: { orgUnitCode: { in: [orgUnitCode, otherOrgUnitCode] } } });
    await prisma.orgUnit.deleteMany({ where: { code: { in: [orgUnitCode, otherOrgUnitCode] } } });
    console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — dedicated Tasks page backend (invariant 55c) against the real live DB.`);
    process.exitCode = failed ? 1 : 0;
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=task.smoke.js.map