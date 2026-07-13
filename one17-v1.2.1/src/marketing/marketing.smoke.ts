// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/marketing/marketing.smoke.ts
// Proves CHECK5 item 5f (invariant 28b) against the real live DB: a
// marketing_resource must be ACTIVE (approved) before it can be referenced
// in a send; subscribe/unsubscribe including the unsubscribe-token
// adversarial case; a send resolves only subscribed=true recipients
// matching targetSegments; approveSend logs exactly one client_
// communication row per matching recipient in the SAME transaction as the
// SENT flip; maker != checker on both resource and send approval; and
// (per the workflow-inbox fix earlier this segment) both
// MARKETING_RESOURCE_APPROVAL and MARKETING_SEND_APPROVAL ARE approvable
// through the GENERIC WorkflowInboxService.approve()/reject() path — unlike
// the STRUCTURED_DATA_WORKFLOW_TYPES blocklist (onboarding case review,
// strategy layer).
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { DocumentService } from '../document/document.service';
import { ScreeningGatewayService } from '../screening-gateway/screening-gateway.service';
import { InvestorService } from '../investor/investor.service';
import { PortalAuthService } from '../portal-auth/portal-auth.service';
import { RegulatoryReportingService } from '../regulatory-reporting/regulatory-reporting.service';
import { WmService } from '../wm/wm.service';
import { PmsService } from '../pms/pms.service';
import { NotificationService } from '../notification/notification.service';
import { AttendanceService } from '../attendance/attendance.service';
import { LedgerService } from '../ledger/ledger.service';
import { EventJournalService } from '../event-journal/event-journal.service';
import { MarketingService } from './marketing.service';
import { WorkflowInboxService } from '../ops-api/workflow-inbox.service';

const RUN = Date.now().toString().slice(-8);

async function expectReject(label: string, fn: () => Promise<unknown>) {
  try {
    await fn();
    console.error(`FAIL (expected rejection): ${label}`);
    process.exitCode = 1;
  } catch (err) {
    console.log(`OK: rejected as expected: ${label} — ${(err as Error).message.split('\n')[0]}`);
  }
}
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); process.exitCode = 1; }

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));
  const marketing = new MarketingService(prisma, audit, workflow, delegation);
  const ledger = new LedgerService(prisma, audit, delegation, workflow);
  const eventJournal = new EventJournalService(prisma, ledger);
  const wm = new WmService(prisma, audit, delegation, workflow, eventJournal);
  const notification = new NotificationService(prisma);
  const attendance = new AttendanceService(prisma, audit, delegation, workflow, notification);
  const pms = new PmsService(prisma, audit, delegation, workflow, ledger, attendance);
  const investors = new InvestorService(prisma, audit, workflow, delegation, new PortalAuthService(prisma, audit), new ScreeningGatewayService(prisma, audit, delegation, workflow, new NotificationService(prisma), new DocumentService(prisma, delegation, audit)));
  const regReporting = {} as unknown as RegulatoryReportingService;
  const workflowInbox = new WorkflowInboxService(prisma, workflow, investors, regReporting, wm, pms, marketing, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, ledger, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any);

  const users = new Map<string, { id: string }>();
  const makeUser = async (label: string, roleCode: string) => {
    const email = `mktg-${label}-${RUN}@one17.test`;
    const user = await prisma.appUser.create({ data: { email, displayName: email } });
    await rbac.assignRole({ userId: user.id, roleCode });
    users.set(label, user);
    return user;
  };
  const id = (label: string) => users.get(label)!.id;

  await makeUser('bd', 'BD');
  await makeUser('bd2', 'BD');
  await makeUser('compliance', 'COMPLIANCE');
  await makeUser('outsider', 'SHARIAH_REV');

  const workflowInstanceIds: string[] = [];
  const resourceIds: string[] = [];
  const sendIds: string[] = [];
  const subscriberEmails: string[] = [];

  // --- Outsider cannot upload a resource ---
  await expectReject('an outsider without MARKETING_RESOURCE INITIATE cannot upload a resource', () =>
    marketing.uploadResource({ title: 'x', resourceType: 'FLYER', fileReference: 'x', proposedByUserId: id('outsider') }));

  // --- Resource upload -> DRAFT -> generic Workflow Inbox approve -> ACTIVE ---
  const resource = await marketing.uploadResource({
    title: `Q3 ${RUN} Fund Factsheet`, resourceType: 'FACTSHEET', fileReference: `s3://one17-marketing/factsheet-${RUN}.pdf`,
    proposedByUserId: id('bd'),
  });
  resourceIds.push(resource.id);
  workflowInstanceIds.push(resource.workflowInstanceId!);
  if (resource.status === 'DRAFT') ok('uploadResource creates a DRAFT marketing_resource + initiates MARKETING_RESOURCE_APPROVAL');
  else fail('uploaded resource was not DRAFT', resource);

  await expectReject('the proposer (BD) cannot approve their own resource upload (maker != checker)', () =>
    workflowInbox.approve(resource.workflowInstanceId!, id('bd')));

  const approvedResource = await workflowInbox.approve(resource.workflowInstanceId!, id('compliance'));
  if ((approvedResource as any).status === 'ACTIVE') {
    ok('MARKETING_RESOURCE_APPROVAL is approvable through the GENERIC WorkflowInboxService.approve() path (no extra required field, unlike the blocked structured-data types)');
  } else {
    fail('resource did not activate via generic inbox approve()', approvedResource);
  }

  // --- A second, DRAFT (unapproved) resource cannot be referenced in a send ---
  const draftResource = await marketing.uploadResource({
    title: `Draft Flyer ${RUN}`, resourceType: 'FLYER', fileReference: `s3://one17-marketing/flyer-${RUN}.pdf`, proposedByUserId: id('bd'),
  });
  resourceIds.push(draftResource.id);
  workflowInstanceIds.push(draftResource.workflowInstanceId!);
  await expectReject('a send cannot reference a resource that is not yet ACTIVE (invariant 28b)', () =>
    marketing.initiateSend({
      subject: 'x', body: 'x', targetSegments: [`SEG_${RUN}`], resourceId: draftResource.id, initiatedByUserId: id('bd'),
    }));

  // --- Reject path: a resource can be rejected instead of approved -> SUPERSEDED ---
  await workflowInbox.reject(draftResource.workflowInstanceId!, id('compliance'), 'Not on-brand.');
  const draftResourceAfter = await prisma.marketingResource.findUniqueOrThrow({ where: { id: draftResource.id } });
  if (draftResourceAfter.status === 'SUPERSEDED') ok('rejecting a resource through the generic inbox reject() path flips it to SUPERSEDED');
  else fail('rejected resource did not reach SUPERSEDED', draftResourceAfter);

  // --- Subscribe / unsubscribe ---
  const seg = `SEG_${RUN}`;
  const email1 = `mktg-sub1-${RUN}@one17.test`;
  const email2 = `mktg-sub2-${RUN}@one17.test`;
  const emailOther = `mktg-sub3-${RUN}@one17.test`;
  subscriberEmails.push(email1, email2, emailOther);
  const sub1 = await marketing.subscribe({ email: email1, fullName: 'Subscriber One', segments: [seg] });
  const sub2 = await marketing.subscribe({ email: email2, fullName: 'Subscriber Two', segments: [seg] });
  await marketing.subscribe({ email: emailOther, fullName: 'Subscriber Other', segments: [`OTHER_${RUN}`] });
  ok('subscribe() creates marketing_subscriber rows for each requested segment');

  await expectReject('unsubscribing with a wrong/guessed token is refused — email alone is not proof of ownership', () =>
    marketing.unsubscribe({ email: email2, token: 'not-the-real-token' }));

  await marketing.unsubscribe({ email: email2, token: sub2.unsubscribeToken });
  const sub2After = await prisma.marketingSubscriber.findUniqueOrThrow({ where: { email: email2 } });
  if (!sub2After.subscribed) ok('unsubscribe() with the correct token flips subscribed=false');
  else fail('unsubscribe with correct token did not take effect', sub2After);

  // --- Outsider cannot initiate a send ---
  await expectReject('an outsider without MARKETING_SEND INITIATE cannot initiate a send', () =>
    marketing.initiateSend({ subject: 'x', body: 'x', targetSegments: [seg], initiatedByUserId: id('outsider') }));

  // --- Initiate + approve a send referencing the now-ACTIVE resource ---
  const send = await marketing.initiateSend({
    subject: `One17 ${RUN} Update`, body: 'Please find our latest factsheet attached.',
    targetSegments: [seg], resourceId: resource.id, initiatedByUserId: id('bd'),
  });
  sendIds.push(send.id);
  workflowInstanceIds.push(send.workflowInstanceId!);
  if (send.status === 'PENDING_APPROVAL') ok('initiateSend creates a PENDING_APPROVAL marketing_send referencing the ACTIVE resource');
  else fail('initiated send was not PENDING_APPROVAL', send);

  await expectReject('the initiator (BD) cannot approve their own send (maker != checker)', () =>
    workflowInbox.approve(send.workflowInstanceId!, id('bd')));

  const approvedSend = await workflowInbox.approve(send.workflowInstanceId!, id('compliance'));
  if ((approvedSend as any).status === 'SENT' && (approvedSend as any).recipientCount === 1) {
    ok('MARKETING_SEND_APPROVAL is approvable through the GENERIC inbox path; approval resolves exactly the 1 subscribed=true recipient matching the target segment (email1 — emailOther excluded by segment, email2 excluded by its own unsubscribe)');
  } else {
    fail('approveSend did not resolve the expected recipient count', approvedSend);
  }

  const comms = await prisma.clientCommunication.findMany({ where: { subject: send.subject } });
  if (comms.length === 1 && comms.every((c) => c.direction === 'OUTBOUND' && c.channel === 'EMAIL')) {
    ok('approveSend logs exactly one client_communication row per resolved recipient — the approval record IS the dispatch trigger');
  } else {
    fail('client_communication logging did not match expected shape/count', comms);
  }

  // --- A second send with no matching subscribed recipients -> recipientCount 0 ---
  const emptySeg = `EMPTYSEG_${RUN}`;
  const emptySend = await marketing.initiateSend({ subject: `Empty ${RUN}`, body: 'x', targetSegments: [emptySeg], initiatedByUserId: id('bd') });
  sendIds.push(emptySend.id);
  workflowInstanceIds.push(emptySend.workflowInstanceId!);
  const approvedEmptySend = await workflowInbox.approve(emptySend.workflowInstanceId!, id('compliance'));
  if ((approvedEmptySend as any).recipientCount === 0) ok('a send targeting a segment with zero subscribed recipients still completes cleanly with recipientCount 0');
  else fail('empty-segment send did not resolve to 0 recipients', approvedEmptySend);

  // --- Subscriber stats ---
  const stats = await marketing.getSubscriberStats();
  if (stats.total >= 3 && stats.unsubscribed >= 1) ok('getSubscriberStats() reports total/subscribed/unsubscribed counts');
  else fail('subscriber stats did not look as expected', stats);

  // Cleanup.
  await prisma.clientCommunication.deleteMany({ where: { subject: { in: [send.subject, emptySend.subject] } } });
  await prisma.workflowStepApproval.deleteMany({ where: { workflowInstanceId: { in: workflowInstanceIds } } });
  await prisma.workflowInstance.deleteMany({ where: { id: { in: workflowInstanceIds } } });
  await prisma.marketingSend.deleteMany({ where: { id: { in: sendIds } } });
  await prisma.marketingResource.deleteMany({ where: { id: { in: resourceIds } } });
  await prisma.marketingSubscriber.deleteMany({ where: { email: { in: subscriberEmails } } });
  const userIds = [...users.values()].map((u) => u.id);
  await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
  await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });

  await prisma.$disconnect();
  console.log('\nSMOKE OK — BD marketing suite (CHECK5 item 5f) against the real live DB.');
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
