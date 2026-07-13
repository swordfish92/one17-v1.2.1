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
const board_minutes_service_1 = require("./board-minutes.service");
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
    const boardMinutes = new board_minutes_service_1.BoardMinutesService(prisma, audit, delegation, notification);
    const csUser = await prisma.appUser.create({ data: { email: `boardmin-cs-${RUN}@one17.test`, displayName: 'cs' } });
    await rbac.assignRole({ userId: csUser.id, roleCode: 'CS' });
    const mdUser = await prisma.appUser.create({ data: { email: `boardmin-md-${RUN}@one17.test`, displayName: 'md' } });
    await rbac.assignRole({ userId: mdUser.id, roleCode: 'MD_CEO' });
    const widenedRecipient = await prisma.appUser.create({ data: { email: `boardmin-widened-${RUN}@one17.test`, displayName: 'widened' } });
    await rbac.assignRole({ userId: widenedRecipient.id, roleCode: 'PORT_MGR' });
    const outsiderUser = await prisma.appUser.create({ data: { email: `boardmin-outsider-${RUN}@one17.test`, displayName: 'outsider' } });
    await rbac.assignRole({ userId: outsiderUser.id, roleCode: 'INVESTOR' });
    const sauUser = await prisma.appUser.create({ data: { email: `boardmin-sau-${RUN}@one17.test`, displayName: 'sau' } });
    await rbac.assignRole({ userId: sauUser.id, roleCode: 'SAU_INTERNAL_CONTROL' });
    await expectReject('an outsider cannot upload Board Minutes', () => boardMinutes.uploadMinutes({ title: 'x', fileReference: 'x.pdf' }, outsiderUser.id));
    const minutes = await boardMinutes.uploadMinutes({ title: `Board Minutes Q3 ${RUN}`, fileReference: `board-minutes-${RUN}.pdf`, committeeTag: undefined }, csUser.id);
    if (minutes.committeeTag === null)
        ok('CS uploads Board Minutes (Full-Board, committeeTag null)');
    else
        fail('minutes did not persist correctly', minutes);
    const sauList = await boardMinutes.listMinutesForViewer(sauUser.id);
    if (!sauList.some((m) => m.id === minutes.id)) {
        ok('SAU (no standing BOARD_MINUTES_MANAGEMENT grant, unlike Board Directives/Calendar) does NOT see the minutes — restricted ACL tier, invariant 37c-v');
    }
    else {
        fail('SAU should not see un-transmitted Board Minutes (ACL leak)', sauList);
    }
    await expectReject('SAU cannot access the minutes record directly either (restricted ACL tier, invariant 37c-v)', () => boardMinutes.getMinutes(minutes.id, sauUser.id));
    const csListBeforeTransmit = await boardMinutes.listMinutesForViewer(csUser.id);
    if (csListBeforeTransmit.some((m) => m.id === minutes.id)) {
        ok('CS (base BOARD_MINUTES_MANAGEMENT VIEW holder) sees the minutes immediately, before any transmission');
    }
    else {
        fail('CS should see the minutes as a base capability holder', csListBeforeTransmit);
    }
    await expectReject('the widened recipient cannot acknowledge before being transmitted to', () => boardMinutes.acknowledgeTransmission(minutes.id, widenedRecipient.id));
    const transmission = await boardMinutes.transmitMinutes(minutes.id, widenedRecipient.id, csUser.id);
    if (transmission.recipientUserId === widenedRecipient.id && !transmission.acknowledgedAt) {
        ok('CS transmits the minutes to a non-Board recipient — this IS the ACL-widening act (invariant 37c-v: "unless widened")');
    }
    else {
        fail('transmission did not record correctly', transmission);
    }
    const widenedGetsAccess = await boardMinutes.getMinutes(minutes.id, widenedRecipient.id);
    if (widenedGetsAccess.id === minutes.id) {
        ok('the widened recipient can now view the SAME minutes record — the transmission row IS the ACL grant');
    }
    else {
        fail('widened recipient should now have access', widenedGetsAccess);
    }
    await expectReject('an outsider (never transmitted to) is still blocked even after another user was widened', () => boardMinutes.getMinutes(minutes.id, outsiderUser.id));
    const acknowledged = await boardMinutes.acknowledgeTransmission(minutes.id, widenedRecipient.id);
    if (acknowledged.acknowledgedAt) {
        ok('the widened recipient acknowledges — the SAME transmission row now carries the acknowledgment trail entry (invariant 37c-v)');
    }
    else {
        fail('acknowledgeTransmission did not set acknowledgedAt', acknowledged);
    }
    await expectReject('acknowledging a second time is refused (already acknowledged)', () => boardMinutes.acknowledgeTransmission(minutes.id, widenedRecipient.id));
    const widenedList = await boardMinutes.listMinutesForViewer(widenedRecipient.id);
    if (widenedList.length === 1 && widenedList[0].id === minutes.id) {
        ok('the widened recipient\'s own list shows ONLY the minutes transmitted to them — the restricted ACL, not a full register view');
    }
    else {
        fail('widened recipient\'s list should show exactly the one transmitted record', widenedList);
    }
    await prisma.notification.deleteMany({ where: { recipientUserId: widenedRecipient.id } });
    await prisma.boardMinutesTransmission.deleteMany({ where: { minutesId: minutes.id } });
    await prisma.boardMinutes.delete({ where: { id: minutes.id } });
    const userIds = [csUser.id, mdUser.id, widenedRecipient.id, outsiderUser.id, sauUser.id];
    await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
    await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });
    console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — Board Minutes (invariant 37c-v) against the real live DB.`);
    process.exitCode = failed ? 1 : 0;
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=board-minutes.smoke.js.map