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
const board_calendar_service_1 = require("./board-calendar.service");
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
    const boardCalendar = new board_calendar_service_1.BoardCalendarService(prisma, audit, delegation, notification);
    const csUser = await prisma.appUser.create({ data: { email: `boardcal-cs-${RUN}@one17.test`, displayName: 'cs' } });
    await rbac.assignRole({ userId: csUser.id, roleCode: 'CS' });
    const outsiderUser = await prisma.appUser.create({ data: { email: `boardcal-outsider-${RUN}@one17.test`, displayName: 'outsider' } });
    await rbac.assignRole({ userId: outsiderUser.id, roleCode: 'INVESTOR' });
    await expectReject('an outsider cannot create a Board Calendar event', () => boardCalendar.createEvent({ title: 'x', startsAt: new Date() }, outsiderUser.id));
    await expectReject('an outsider cannot list the Board Calendar', () => boardCalendar.listEvents(outsiderUser.id));
    await expectReject('an outsider cannot update the reminder config', () => boardCalendar.updateReminderConfig(5, outsiderUser.id));
    await expectReject('a negative daysBefore is rejected', () => boardCalendar.updateReminderConfig(-1, csUser.id));
    const updatedConfig = await boardCalendar.updateReminderConfig(2, csUser.id);
    if (updatedConfig.daysBefore === 2)
        ok('CS updates the governed reminder lead time (invariant 10: no hardcoded threshold)');
    else
        fail('reminder config did not update', updatedConfig);
    const dueSoon = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);
    const farOut = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
    const eventDueSoon = await boardCalendar.createEvent({ title: `Board Meeting Q3 ${RUN}`, committeeTag: 'Risk Committee', startsAt: dueSoon }, csUser.id);
    const eventFarOut = await boardCalendar.createEvent({ title: `Board Meeting Q4 ${RUN}`, startsAt: farOut }, csUser.id);
    if (eventDueSoon.committeeTag === 'Risk Committee' && eventFarOut.committeeTag === null) {
        ok('events created: committeeTag free text (Risk Committee) vs null (Full-Board)');
    }
    else {
        fail('event committeeTag did not persist as expected', { eventDueSoon, eventFarOut });
    }
    const list = await boardCalendar.listEvents(csUser.id);
    if (list.some((e) => e.id === eventDueSoon.id) && list.some((e) => e.id === eventFarOut.id)) {
        ok('CS lists the Board Calendar');
    }
    else {
        fail('listEvents missing created events', list);
    }
    const sweep1 = await boardCalendar.runReminderSweep(new Date());
    const eventDueSoonAfter = await prisma.boardCalendarEvent.findUniqueOrThrow({ where: { id: eventDueSoon.id } });
    const eventFarOutAfter = await prisma.boardCalendarEvent.findUniqueOrThrow({ where: { id: eventFarOut.id } });
    if (sweep1.reminded >= 1 && eventDueSoonAfter.remindedAt && !eventFarOutAfter.remindedAt) {
        ok('reminder sweep fires for the event within the governed window, not the far-out one');
    }
    else {
        fail('reminder sweep did not discriminate correctly', { sweep1, eventDueSoonAfter, eventFarOutAfter });
    }
    const csNotifications = await prisma.notification.findMany({ where: { recipientUserId: csUser.id, title: 'Upcoming Board Calendar event' } });
    if (csNotifications.some((n) => n.body.includes(`Board Meeting Q3 ${RUN}`))) {
        ok('CS (a BOARD_CALENDAR_MANAGEMENT VIEW holder) receives the reminder notification');
    }
    else {
        fail('expected a reminder notification for the CS user', csNotifications);
    }
    const sweep2 = await boardCalendar.runReminderSweep(new Date());
    if (sweep2.reminded === 0) {
        ok('reminder sweep is idempotent — an already-reminded event fires exactly once (remindedAt dedup guard, same pattern as Task.amberNotifiedAt)');
    }
    else {
        fail('reminder sweep re-fired for an already-reminded event', sweep2);
    }
    const mdUser = await prisma.appUser.create({ data: { email: `boardcal-md-${RUN}@one17.test`, displayName: 'md' } });
    await rbac.assignRole({ userId: mdUser.id, roleCode: 'MD_CEO' });
    await expectReject('an outsider cannot submit a report pack', () => boardCalendar.submitReportPack({ calendarEventId: eventDueSoon.id, title: 'x', fileReference: 'x' }, outsiderUser.id));
    const submission = await boardCalendar.submitReportPack({ calendarEventId: eventDueSoon.id, title: `Risk Committee pack ${RUN}`, fileReference: `/documents/pack-${RUN}.pdf` }, mdUser.id);
    if (submission.status === 'SUBMITTED' && submission.submittedByUserId === mdUser.id) {
        ok('MD_CEO submits a report/presentation pack against a calendar item (invariant 55b, newly granted INITIATE)');
    }
    else {
        fail('submitReportPack did not create the expected row', submission);
    }
    await expectReject('an outsider cannot mark a submission received', () => boardCalendar.markSubmissionReceived(submission.id, 'RECEIVED', undefined, outsiderUser.id));
    const received = await boardCalendar.markSubmissionReceived(submission.id, 'RECEIVED', undefined, csUser.id);
    if (received.status === 'RECEIVED' && received.receivedByUserId === csUser.id && received.receivedAt) {
        ok('CS tracks receipt of the submitted pack — SUBMITTED -> RECEIVED, a distinct actor+timestamp (invariant 55b)');
    }
    else {
        fail('markSubmissionReceived did not flip status correctly', received);
    }
    await expectReject('a submission already tracked (RECEIVED) cannot be marked again', () => boardCalendar.markSubmissionReceived(submission.id, 'RECEIVED', undefined, csUser.id));
    const incompleteSubmission = await boardCalendar.submitReportPack({ calendarEventId: eventDueSoon.id, title: `Incomplete pack ${RUN}`, fileReference: `/documents/pack-incomplete-${RUN}.pdf` }, mdUser.id);
    const incomplete = await boardCalendar.markSubmissionReceived(incompleteSubmission.id, 'INCOMPLETE', 'Missing appendix C', csUser.id);
    if (incomplete.status === 'INCOMPLETE' && incomplete.completenessNote === 'Missing appendix C') {
        ok('CS can mark a pack INCOMPLETE with a completeness note (invariant 55b)');
    }
    else {
        fail('INCOMPLETE path did not persist correctly', incomplete);
    }
    const submissionList = await boardCalendar.listSubmissionsForEvent(eventDueSoon.id, csUser.id);
    if (submissionList.length === 2 && submissionList.some((s) => s.id === submission.id) && submissionList.some((s) => s.id === incompleteSubmission.id)) {
        ok('listSubmissionsForEvent returns both submissions for the calendar item');
    }
    else {
        fail('listSubmissionsForEvent did not return the expected rows', submissionList);
    }
    await expectReject('an outsider cannot list submissions for an event', () => boardCalendar.listSubmissionsForEvent(eventDueSoon.id, outsiderUser.id));
    await prisma.boardCalendarSubmission.deleteMany({ where: { id: { in: [submission.id, incompleteSubmission.id] } } });
    await prisma.notification.deleteMany({ where: { recipientUserId: { in: [csUser.id, outsiderUser.id, mdUser.id] } } });
    await prisma.boardCalendarEvent.deleteMany({ where: { id: { in: [eventDueSoon.id, eventFarOut.id] } } });
    await prisma.boardCalendarReminderConfig.update({ where: { id: 1 }, data: { daysBefore: 3, updatedByUserId: null } });
    const userIds = [csUser.id, outsiderUser.id, mdUser.id];
    await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
    await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });
    console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — Board Calendar (invariant 37c-iii) against the real live DB.`);
    process.exitCode = failed ? 1 : 0;
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=board-calendar.smoke.js.map