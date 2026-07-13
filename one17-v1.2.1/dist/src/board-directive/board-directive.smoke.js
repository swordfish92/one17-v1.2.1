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
const board_directive_service_1 = require("./board-directive.service");
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
    const boardDirective = new board_directive_service_1.BoardDirectiveService(prisma, audit, delegation, task);
    const orgUnitCode = `BOARD_DIRECTIVE_SMOKE_${RUN}`;
    await prisma.orgUnit.create({ data: { code: orgUnitCode, name: 'Board Directive Smoke Dept' } });
    const mdPosition = await prisma.position.create({ data: { title: `MD ${RUN}`, orgUnitCode, cadre: 'Executive', notch: 1 } });
    const delegatePosition = await prisma.position.create({ data: { title: `Delegate ${RUN}`, orgUnitCode, cadre: 'Snr Associate 1', notch: 1 } });
    const csUser = await prisma.appUser.create({ data: { email: `boarddir-cs-${RUN}@one17.test`, displayName: 'cs' } });
    await rbac.assignRole({ userId: csUser.id, roleCode: 'CS' });
    const mdUser = await prisma.appUser.create({ data: { email: `boarddir-md-${RUN}@one17.test`, displayName: 'md' } });
    await rbac.assignRole({ userId: mdUser.id, roleCode: 'MD_CEO' });
    const mdEmployee = await prisma.employee.create({ data: { surname: 'Md', firstName: `Chief${RUN}`, positionId: mdPosition.id, orgUnitCode, appUserId: mdUser.id, hireDate: new Date() } });
    const delegateUser = await prisma.appUser.create({ data: { email: `boarddir-delegate-${RUN}@one17.test`, displayName: 'delegate' } });
    await rbac.assignRole({ userId: delegateUser.id, roleCode: 'PORT_OFF' });
    const delegateEmployee = await prisma.employee.create({ data: { surname: 'Delegate', firstName: `Report${RUN}`, positionId: delegatePosition.id, orgUnitCode, appUserId: delegateUser.id, reportsToId: mdEmployee.id, hireDate: new Date() } });
    const outsiderUser = await prisma.appUser.create({ data: { email: `boarddir-outsider-${RUN}@one17.test`, displayName: 'outsider' } });
    await rbac.assignRole({ userId: outsiderUser.id, roleCode: 'INVESTOR' });
    const dueAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
    let directive;
    let overdueDirective;
    try {
        await expectReject('an outsider without BOARD_DIRECTIVE_MANAGEMENT cannot issue a directive', () => boardDirective.issueDirective({ title: 'x', description: 'x', dueAt }, outsiderUser.id));
        directive = await boardDirective.issueDirective({ title: 'Adopt the FY27 risk appetite matrix', description: 'Board resolution RES-2027-014 directs Management to adopt the revised matrix.', committeeTag: 'Risk Committee', resolutionRef: 'RES-2027-014', dueAt }, csUser.id);
        if (directive.status === 'ISSUED' && directive.taskId) {
            ok('CS issues a directive: ISSUED status, auto-created task recorded (invariant 37c-ii)');
        }
        else {
            fail('directive did not issue correctly', directive);
        }
        const rootTask = await prisma.task.findUniqueOrThrow({ where: { id: directive.taskId } });
        if (rootTask.assigneeEmployeeId === mdEmployee.id && rootTask.directiveId === directive.id && rootTask.dueAt?.getTime() === dueAt.getTime()) {
            ok('the auto-created task is assigned to the MD, carries the Board\'s timeline, and links back to the directive');
        }
        else {
            fail('auto-created task did not link correctly', rootTask);
        }
        await expectReject('a non-addressee (delegate, before any delegation) cannot acknowledge the directive', () => boardDirective.acknowledgeDirective(directive.id, delegateUser.id));
        await expectReject('an outsider cannot acknowledge the directive', () => boardDirective.acknowledgeDirective(directive.id, outsiderUser.id));
        const acknowledged = await boardDirective.acknowledgeDirective(directive.id, mdUser.id);
        if (acknowledged.status === 'ACKNOWLEDGED' && acknowledged.acknowledgedByUserId === mdUser.id) {
            ok('the addressed MD acknowledges — ISSUED -> ACKNOWLEDGED, ownership-gated (not a capability check)');
        }
        else {
            fail('acknowledge did not flip status correctly', acknowledged);
        }
        await expectReject('cannot acknowledge a directive twice (already ACKNOWLEDGED)', () => boardDirective.acknowledgeDirective(directive.id, mdUser.id));
        const subTask = await task.assignTask({ title: 'Draft the revised risk appetite matrix for Board sign-off', assigneeEmployeeId: delegateEmployee.id, assignedByUserId: mdUser.id, dueAt });
        await prisma.task.update({ where: { id: subTask.id }, data: { directiveId: directive.id } });
        await boardDirective.reportDirectiveBack(directive.id, csUser.id).catch(() => undefined);
        const stillNotCompleted = await prisma.boardDirective.findUniqueOrThrow({ where: { id: directive.id } });
        if (stillNotCompleted.status !== 'REPORTED_BACK') {
            ok('reportDirectiveBack correctly refuses before every delegated task is DONE (roll-up not yet COMPLETED)');
        }
        else {
            fail('reportDirectiveBack should not have succeeded before delegated work completed', stillNotCompleted);
        }
        await task.startTask(subTask.id, delegateUser.id);
        const afterStart = await boardDirective.refreshDirectiveStatus(directive.id, mdUser.id);
        if (afterStart.status === 'IN_PROGRESS') {
            ok('roll-up derives IN_PROGRESS the moment any task in the chain starts — never hand-set (invariant 37c-ii)');
        }
        else {
            fail('expected IN_PROGRESS once the delegated sub-task started', afterStart);
        }
        await task.completeTask(subTask.id, delegateUser.id);
        const beforeRootDone = await boardDirective.refreshDirectiveStatus(directive.id, mdUser.id);
        if (beforeRootDone.status === 'IN_PROGRESS') {
            ok('roll-up correctly stays IN_PROGRESS while the ROOT task (MD\'s own) is still open, even though the delegated sub-task is DONE');
        }
        else {
            fail('roll-up should not reach COMPLETED while the root task is still open', beforeRootDone);
        }
        await task.startTask(rootTask.id, mdUser.id);
        await task.completeTask(rootTask.id, mdUser.id);
        const afterAllDone = await boardDirective.refreshDirectiveStatus(directive.id, mdUser.id);
        if (afterAllDone.status === 'COMPLETED') {
            ok('roll-up derives COMPLETED once EVERY task in the chain (root + delegated) is DONE');
        }
        else {
            fail('expected COMPLETED once all tasks in the chain are DONE', afterAllDone);
        }
        await expectReject('an outsider without BOARD_DIRECTIVE_MANAGEMENT cannot report a directive back', () => boardDirective.reportDirectiveBack(directive.id, outsiderUser.id));
        const reportedBack = await boardDirective.reportDirectiveBack(directive.id, csUser.id);
        if (reportedBack.status === 'REPORTED_BACK' && reportedBack.reportedBackByUserId === csUser.id) {
            ok('CS reports the directive back — COMPLETED -> REPORTED_BACK, the terminal state (invariant 37c-ii)');
        }
        else {
            fail('reportDirectiveBack did not finalize correctly', reportedBack);
        }
        await expectReject('an already REPORTED_BACK directive cannot be reported back twice', () => boardDirective.reportDirectiveBack(directive.id, csUser.id));
        const list = await boardDirective.listDirectives(csUser.id);
        if (list.some((d) => d.id === directive.id)) {
            ok('CS lists the Board directive register (roll-up visible to CS/Board view, invariant 37c-ii)');
        }
        else {
            fail('directive missing from listDirectives', list);
        }
        await expectReject('an outsider without BOARD_DIRECTIVE_MANAGEMENT cannot list the directive register', () => boardDirective.listDirectives(outsiderUser.id));
        const overdueDueAt = new Date(Date.now() - 24 * 60 * 60 * 1000);
        overdueDirective = await boardDirective.issueDirective({ title: 'Overdue governance item', description: 'Deliberately past due for the CEO-dashboard-exceptions assertion.', dueAt: overdueDueAt }, csUser.id);
        const overdueList = await boardDirective.listOverdueDirectives();
        const overdueIds = overdueList.map((d) => d.id);
        if (overdueIds.includes(overdueDirective.id) && !overdueIds.includes(directive.id)) {
            ok('listOverdueDirectives (CEO dashboard exceptions feed) includes the overdue-and-open directive, excludes the closed REPORTED_BACK one');
        }
        else {
            fail('listOverdueDirectives did not filter correctly', { overdueIds, expected: overdueDirective.id, excluded: directive.id });
        }
    }
    finally {
        const directiveIds = [directive?.id, overdueDirective?.id].filter((x) => !!x);
        if (directiveIds.length) {
            const overdueRootTaskId = overdueDirective
                ? (await prisma.boardDirective.findUnique({ where: { id: overdueDirective.id } }))?.taskId
                : null;
            await prisma.boardDirective.updateMany({ where: { id: { in: directiveIds } }, data: { taskId: null } });
            await prisma.task.deleteMany({ where: { directiveId: { in: directiveIds } } });
            if (overdueRootTaskId)
                await prisma.task.deleteMany({ where: { id: overdueRootTaskId } });
            await prisma.boardDirective.deleteMany({ where: { id: { in: directiveIds } } });
        }
        await prisma.employee.deleteMany({ where: { orgUnitCode } });
        const userIds = [csUser.id, mdUser.id, delegateUser.id, outsiderUser.id];
        await prisma.notification.deleteMany({ where: { recipientUserId: { in: userIds } } });
        await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
        await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });
        await prisma.position.deleteMany({ where: { orgUnitCode } });
        await prisma.orgUnit.deleteMany({ where: { code: orgUnitCode } });
    }
    console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — Board Escalations & Directives (invariant 37c-ii) against the real live DB.`);
    process.exitCode = failed ? 1 : 0;
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=board-directive.smoke.js.map