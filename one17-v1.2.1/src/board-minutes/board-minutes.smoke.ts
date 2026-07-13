// Run with: npx tsx src/board-minutes/board-minutes.smoke.ts
// Invariant 37(c)(v): Board Minutes — restricted ACL tier (Board/CS/MD
// only unless widened) + the acknowledgment/access trail, both served by
// the SAME BoardMinutesTransmission table.
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { NotificationService } from '../notification/notification.service';
import { BoardMinutesService } from './board-minutes.service';

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
  const boardMinutes = new BoardMinutesService(prisma, audit, delegation, notification);

  const csUser = await prisma.appUser.create({ data: { email: `boardmin-cs-${RUN}@one17.test`, displayName: 'cs' } });
  await rbac.assignRole({ userId: csUser.id, roleCode: 'CS' });
  const mdUser = await prisma.appUser.create({ data: { email: `boardmin-md-${RUN}@one17.test`, displayName: 'md' } });
  await rbac.assignRole({ userId: mdUser.id, roleCode: 'MD_CEO' });
  const widenedRecipient = await prisma.appUser.create({ data: { email: `boardmin-widened-${RUN}@one17.test`, displayName: 'widened' } });
  await rbac.assignRole({ userId: widenedRecipient.id, roleCode: 'PORT_MGR' });
  const outsiderUser = await prisma.appUser.create({ data: { email: `boardmin-outsider-${RUN}@one17.test`, displayName: 'outsider' } });
  await rbac.assignRole({ userId: outsiderUser.id, roleCode: 'INVESTOR' });
  // SAU/AUDITOR-class users deliberately have NO standing grant on
  // BOARD_MINUTES_MANAGEMENT (unlike Board Directives/Calendar) — proving
  // the "restricted ACL tier" is genuinely tighter here.
  const sauUser = await prisma.appUser.create({ data: { email: `boardmin-sau-${RUN}@one17.test`, displayName: 'sau' } });
  await rbac.assignRole({ userId: sauUser.id, roleCode: 'SAU_INTERNAL_CONTROL' });

  await expectReject('an outsider cannot upload Board Minutes', () =>
    boardMinutes.uploadMinutes({ title: 'x', fileReference: 'x.pdf' }, outsiderUser.id));

  const minutes = await boardMinutes.uploadMinutes({ title: `Board Minutes Q3 ${RUN}`, fileReference: `board-minutes-${RUN}.pdf`, committeeTag: undefined }, csUser.id);
  if (minutes.committeeTag === null) ok('CS uploads Board Minutes (Full-Board, committeeTag null)');
  else fail('minutes did not persist correctly', minutes);

  const sauList = await boardMinutes.listMinutesForViewer(sauUser.id);
  if (!sauList.some((m) => m.id === minutes.id)) {
    ok('SAU (no standing BOARD_MINUTES_MANAGEMENT grant, unlike Board Directives/Calendar) does NOT see the minutes — restricted ACL tier, invariant 37c-v');
  } else {
    fail('SAU should not see un-transmitted Board Minutes (ACL leak)', sauList);
  }

  await expectReject('SAU cannot access the minutes record directly either (restricted ACL tier, invariant 37c-v)', () =>
    boardMinutes.getMinutes(minutes.id, sauUser.id));

  const csListBeforeTransmit = await boardMinutes.listMinutesForViewer(csUser.id);
  if (csListBeforeTransmit.some((m) => m.id === minutes.id)) {
    ok('CS (base BOARD_MINUTES_MANAGEMENT VIEW holder) sees the minutes immediately, before any transmission');
  } else {
    fail('CS should see the minutes as a base capability holder', csListBeforeTransmit);
  }

  await expectReject('the widened recipient cannot acknowledge before being transmitted to', () =>
    boardMinutes.acknowledgeTransmission(minutes.id, widenedRecipient.id));

  const transmission = await boardMinutes.transmitMinutes(minutes.id, widenedRecipient.id, csUser.id);
  if (transmission.recipientUserId === widenedRecipient.id && !transmission.acknowledgedAt) {
    ok('CS transmits the minutes to a non-Board recipient — this IS the ACL-widening act (invariant 37c-v: "unless widened")');
  } else {
    fail('transmission did not record correctly', transmission);
  }

  const widenedGetsAccess = await boardMinutes.getMinutes(minutes.id, widenedRecipient.id);
  if (widenedGetsAccess.id === minutes.id) {
    ok('the widened recipient can now view the SAME minutes record — the transmission row IS the ACL grant');
  } else {
    fail('widened recipient should now have access', widenedGetsAccess);
  }

  await expectReject('an outsider (never transmitted to) is still blocked even after another user was widened', () =>
    boardMinutes.getMinutes(minutes.id, outsiderUser.id));

  const acknowledged = await boardMinutes.acknowledgeTransmission(minutes.id, widenedRecipient.id);
  if (acknowledged.acknowledgedAt) {
    ok('the widened recipient acknowledges — the SAME transmission row now carries the acknowledgment trail entry (invariant 37c-v)');
  } else {
    fail('acknowledgeTransmission did not set acknowledgedAt', acknowledged);
  }
  await expectReject('acknowledging a second time is refused (already acknowledged)', () =>
    boardMinutes.acknowledgeTransmission(minutes.id, widenedRecipient.id));

  const widenedList = await boardMinutes.listMinutesForViewer(widenedRecipient.id);
  if (widenedList.length === 1 && widenedList[0].id === minutes.id) {
    ok('the widened recipient\'s own list shows ONLY the minutes transmitted to them — the restricted ACL, not a full register view');
  } else {
    fail('widened recipient\'s list should show exactly the one transmitted record', widenedList);
  }

  // Cleanup.
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
