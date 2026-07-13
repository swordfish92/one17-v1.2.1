"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const notification_service_1 = require("../notification/notification.service");
const task_service_1 = require("../task/task.service");
const calendar_service_1 = require("./calendar.service");
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
    const notification = new notification_service_1.NotificationService(prisma);
    const task = new task_service_1.TaskService(prisma, notification);
    const calendar = new calendar_service_1.CalendarService(prisma, audit, notification);
    const orgUnitCode = `CAL_SMOKE_${RUN}`;
    await prisma.orgUnit.create({ data: { code: orgUnitCode, name: 'Calendar Smoke Dept' } });
    const position = await prisma.position.create({ data: { title: `Calendar Smoke Role ${RUN}`, orgUnitCode, cadre: 'Associate', notch: 1 } });
    const userA = await prisma.appUser.create({ data: { email: `cal-a-${RUN}@one17.test`, displayName: 'Calendar A' } });
    const employeeA = await prisma.employee.create({ data: { surname: 'A', firstName: `Calendar${RUN}`, positionId: position.id, orgUnitCode, appUserId: userA.id, hireDate: new Date() } });
    const userB = await prisma.appUser.create({ data: { email: `cal-b-${RUN}@one17.test`, displayName: 'Calendar B' } });
    const userC = await prisma.appUser.create({ data: { email: `cal-c-${RUN}@one17.test`, displayName: 'Calendar C' } });
    const personal = await calendar.createPersonalEntry(userA.id, { title: `Dentist ${RUN}`, startsAt: new Date(Date.now() + 3 * 86_400_000) });
    const mineA1 = await calendar.getMyCalendar(userA.id);
    if (mineA1.some((e) => e.id === personal.id)) {
        ok("owner's own calendar includes a personal entry they just created");
    }
    else {
        fail("owner's calendar did not include their own personal entry", mineA1);
    }
    await expectReject("user B cannot read user A's private personal entry (cross-user leak test)", () => calendar.getEntry(personal.id, userB.id));
    const mineB1 = await calendar.getMyCalendar(userB.id);
    if (!mineB1.some((e) => e.id === personal.id)) {
        ok("user B's own calendar list does not include user A's private entry (cross-user leak test)");
    }
    else {
        fail("user B's calendar leaked user A's private entry", mineB1);
    }
    await expectReject('user B cannot edit a personal entry they do not own', () => calendar.updatePersonalEntry(personal.id, userB.id, { title: 'hijacked' }));
    const updated = await calendar.updatePersonalEntry(personal.id, userA.id, { title: `Dentist (rescheduled) ${RUN}` });
    if (updated.title === `Dentist (rescheduled) ${RUN}`) {
        ok('owner can update the title of their own personal entry');
    }
    else {
        fail('personal entry title did not update', updated);
    }
    await expectReject('user B cannot delete a personal entry they do not own', () => calendar.deleteEntry(personal.id, userB.id));
    await calendar.deleteEntry(personal.id, userA.id);
    ok('owner can delete their own personal entry');
    const meeting1 = await calendar.createMeeting(userA.id, {
        title: `Budget sync ${RUN}`,
        startsAt: new Date(Date.now() + 2 * 86_400_000),
        endsAt: new Date(Date.now() + 2 * 86_400_000 + 3_600_000),
        attendeeUserIds: [userB.id],
    });
    const mineB2 = await calendar.getMyCalendar(userB.id);
    const invitedRow = mineB2.find((e) => e.id === meeting1.id);
    if (invitedRow && invitedRow.attendees.some((a) => a.attendeeUserId === userB.id && a.status === 'PENDING')) {
        ok("a meeting invite plots on the attendee's own calendar with PENDING status, before any response");
    }
    else {
        fail("meeting invite did not plot correctly on attendee's calendar", mineB2);
    }
    await expectReject('a non-attendee cannot respond to a meeting they were not invited to', () => calendar.respondToMeeting(meeting1.id, userC.id, 'ACCEPTED'));
    await calendar.respondToMeeting(meeting1.id, userB.id, 'ACCEPTED');
    const accepted = await calendar.getEntry(meeting1.id, userB.id);
    if (accepted.attendees.find((a) => a.attendeeUserId === userB.id)?.status === 'ACCEPTED') {
        ok('attendee accepting a meeting persists ACCEPTED status');
    }
    else {
        fail('meeting acceptance did not persist', accepted);
    }
    await expectReject('a non-organizer, non-owner attendee cannot delete a meeting', () => calendar.deleteEntry(meeting1.id, userB.id));
    const dueAt = new Date(Date.now() + 5 * 86_400_000);
    const taskRow = await task.assignTask({ title: `File the FY report ${RUN}`, assigneeEmployeeId: employeeA.id, assignedByUserId: userA.id, dueAt });
    await calendar.runSyncSweep(new Date());
    const mineA2 = await calendar.getMyCalendar(userA.id);
    const taskEntry = mineA2.find((e) => e.sourceType === 'Task' && e.sourceId === taskRow.id);
    if (taskEntry && taskEntry.isAutoPlotted && taskEntry.kind === 'TASK_DEADLINE') {
        ok('runSyncSweep auto-plots a task deadline onto its assignee\'s own calendar, flagged isAutoPlotted');
    }
    else {
        fail('task deadline did not sync onto the calendar', mineA2);
    }
    if (taskEntry) {
        await expectReject('an auto-plotted task deadline can never be deleted from the calendar directly (55c2i)', () => calendar.deleteEntry(taskEntry.id, userA.id));
    }
    await calendar.runSyncSweep(new Date());
    const countAfterResync = await prisma.calendarEntry.count({ where: { sourceType: 'Task', sourceId: taskRow.id } });
    if (countAfterResync === 1) {
        ok('re-running the sync sweep upserts the SAME row (idempotent), never duplicates it');
    }
    else {
        fail('sync sweep duplicated the task-deadline calendar entry on re-run', { countAfterResync });
    }
    const icsEntry = await calendar.createPersonalEntry(userA.id, { title: `ICS check entry ${RUN}`, startsAt: new Date(Date.now() + 86_400_000) });
    const token1 = await calendar.getOrCreateFeedToken(userA.id);
    const token2 = await calendar.getOrCreateFeedToken(userA.id);
    if (token1.token === token2.token) {
        ok('getOrCreateFeedToken is idempotent — repeat calls return the SAME token, not a new one each time');
    }
    else {
        fail('feed token was regenerated on a second call instead of reused', { token1, token2 });
    }
    const { ics } = await calendar.getIcsFeedByToken(token1.token);
    if (ics.includes('BEGIN:VCALENDAR') && ics.includes(`ICS check entry ${RUN}`)) {
        ok('the ICS feed for a valid token renders a well-formed VCALENDAR containing the owner\'s own entry');
    }
    else {
        fail('ICS feed content was malformed or missing the expected entry', ics.slice(0, 200));
    }
    await calendar.revokeFeedToken(userA.id);
    await expectReject('a revoked feed token can no longer fetch the ICS feed', () => calendar.getIcsFeedByToken(token1.token));
    await calendar.deleteEntry(icsEntry.id, userA.id);
    const soon = new Date(Date.now() + 5 * 60_000);
    const reminderEntry = await calendar.createPersonalEntry(userA.id, { title: `Reminder check ${RUN}`, startsAt: soon, reminderLeadMinutes: 10 });
    const notifCountBefore = await prisma.notification.count({ where: { recipientUserId: userA.id, title: 'Upcoming calendar entry' } });
    await calendar.runReminderSweep(new Date());
    const notifCountAfterFirst = await prisma.notification.count({ where: { recipientUserId: userA.id, title: 'Upcoming calendar entry' } });
    const reminderEntryAfter = await prisma.calendarEntry.findUniqueOrThrow({ where: { id: reminderEntry.id } });
    if (notifCountAfterFirst === notifCountBefore + 1 && reminderEntryAfter.remindedAt) {
        ok('an entry within its own reminder lead window fires exactly one notification and stamps remindedAt');
    }
    else {
        fail('reminder sweep did not fire as expected', { notifCountBefore, notifCountAfterFirst, remindedAt: reminderEntryAfter.remindedAt });
    }
    await calendar.runReminderSweep(new Date());
    const notifCountAfterSecond = await prisma.notification.count({ where: { recipientUserId: userA.id, title: 'Upcoming calendar entry' } });
    if (notifCountAfterSecond === notifCountAfterFirst) {
        ok('re-running the reminder sweep does not re-fire for an entry already reminded (remindedAt dedup guard)');
    }
    else {
        fail('reminder sweep re-fired a duplicate notification for an already-reminded entry', { notifCountAfterFirst, notifCountAfterSecond });
    }
    await calendar.deleteEntry(reminderEntry.id, userA.id);
    const busyRangeStart = new Date();
    const busyRangeEnd = new Date(Date.now() + 3 * 86_400_000);
    const busyBefore = await calendar.getBusyBlocks([userA.id, userB.id], busyRangeStart, busyRangeEnd);
    const bHasMeeting1 = busyBefore[userB.id]?.some((b) => b.startsAt.getTime() === meeting1.startsAt.getTime());
    if (bHasMeeting1) {
        ok("user B's ACCEPTED meeting shows as a busy block, with no title exposed in the block shape itself");
    }
    else {
        fail("accepted meeting did not appear as a busy block", busyBefore);
    }
    const meeting2 = await calendar.createMeeting(userA.id, {
        title: `Second meeting ${RUN}`,
        startsAt: new Date(Date.now() + 26 * 60 * 60_000),
        endsAt: new Date(Date.now() + 27 * 60 * 60_000),
        attendeeUserIds: [userB.id],
    });
    await calendar.respondToMeeting(meeting2.id, userB.id, 'DECLINED');
    const busyAfterDecline = await calendar.getBusyBlocks([userB.id], busyRangeStart, busyRangeEnd);
    const bHasMeeting2 = busyAfterDecline[userB.id]?.some((b) => b.startsAt.getTime() === meeting2.startsAt.getTime());
    if (!bHasMeeting2) {
        ok('a DECLINED meeting invite does not count as a busy block for that attendee');
    }
    else {
        fail('a declined meeting still showed as busy', busyAfterDecline);
    }
    await prisma.calendarMeetingAttendee.deleteMany({ where: { calendarEntryId: { in: [meeting1.id, meeting2.id] } } });
    await prisma.calendarEntry.deleteMany({ where: { OR: [{ id: { in: [meeting1.id, meeting2.id] } }, { sourceType: 'Task', sourceId: taskRow.id }] } });
    await prisma.calendarFeedToken.deleteMany({ where: { userId: userA.id } });
    await prisma.task.deleteMany({ where: { id: taskRow.id } });
    await prisma.notification.deleteMany({ where: { recipientUserId: { in: [userA.id, userB.id, userC.id] } } });
    await prisma.employee.deleteMany({ where: { orgUnitCode } });
    await prisma.appUser.deleteMany({ where: { id: { in: [userA.id, userB.id, userC.id] } } });
    await prisma.position.deleteMany({ where: { orgUnitCode } });
    await prisma.orgUnit.deleteMany({ where: { code: orgUnitCode } });
    if (failed) {
        console.error('\nSMOKE FAILED — Staff Calendar (invariant 55c2).');
        process.exit(1);
    }
    console.log('\nSMOKE OK — Staff Calendar (invariant 55c2) against the real live DB.');
}
main()
    .catch((err) => {
    console.error('SMOKE FAILED (unhandled):', err);
    process.exit(1);
})
    .finally(() => process.exit(failed ? 1 : 0));
//# sourceMappingURL=calendar.smoke.js.map