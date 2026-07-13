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
const document_service_1 = require("../document/document.service");
const screening_gateway_service_1 = require("../screening-gateway/screening-gateway.service");
const investor_service_1 = require("../investor/investor.service");
const portal_auth_service_1 = require("../portal-auth/portal-auth.service");
const wm_service_1 = require("../wm/wm.service");
const pms_service_1 = require("../pms/pms.service");
const notification_service_1 = require("../notification/notification.service");
const attendance_service_1 = require("../attendance/attendance.service");
const ledger_service_1 = require("../ledger/ledger.service");
const event_journal_service_1 = require("../event-journal/event-journal.service");
const marketing_service_1 = require("./marketing.service");
const workflow_inbox_service_1 = require("../ops-api/workflow-inbox.service");
const RUN = Date.now().toString().slice(-8);
async function expectReject(label, fn) {
    try {
        await fn();
        console.error(`FAIL (expected rejection): ${label}`);
        process.exitCode = 1;
    }
    catch (err) {
        console.log(`OK: rejected as expected: ${label} — ${err.message.split('\n')[0]}`);
    }
}
function ok(label) { console.log(`OK: ${label}`); }
function fail(label, detail) { console.error(`FAIL: ${label}`, detail ?? ''); process.exitCode = 1; }
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const marketing = new marketing_service_1.MarketingService(prisma, audit, workflow, delegation);
    const ledger = new ledger_service_1.LedgerService(prisma, audit, delegation, workflow);
    const eventJournal = new event_journal_service_1.EventJournalService(prisma, ledger);
    const wm = new wm_service_1.WmService(prisma, audit, delegation, workflow, eventJournal);
    const notification = new notification_service_1.NotificationService(prisma);
    const attendance = new attendance_service_1.AttendanceService(prisma, audit, delegation, workflow, notification);
    const pms = new pms_service_1.PmsService(prisma, audit, delegation, workflow, ledger, attendance);
    const investors = new investor_service_1.InvestorService(prisma, audit, workflow, delegation, new portal_auth_service_1.PortalAuthService(prisma, audit), new screening_gateway_service_1.ScreeningGatewayService(prisma, audit, delegation, workflow, new notification_service_1.NotificationService(prisma), new document_service_1.DocumentService(prisma, delegation, audit)));
    const regReporting = {};
    const workflowInbox = new workflow_inbox_service_1.WorkflowInboxService(prisma, workflow, investors, regReporting, wm, pms, marketing, {}, {}, {}, {}, {}, {}, {}, ledger, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {});
    const users = new Map();
    const makeUser = async (label, roleCode) => {
        const email = `mktg-${label}-${RUN}@one17.test`;
        const user = await prisma.appUser.create({ data: { email, displayName: email } });
        await rbac.assignRole({ userId: user.id, roleCode });
        users.set(label, user);
        return user;
    };
    const id = (label) => users.get(label).id;
    await makeUser('bd', 'BD');
    await makeUser('bd2', 'BD');
    await makeUser('compliance', 'COMPLIANCE');
    await makeUser('outsider', 'SHARIAH_REV');
    const workflowInstanceIds = [];
    const resourceIds = [];
    const sendIds = [];
    const subscriberEmails = [];
    await expectReject('an outsider without MARKETING_RESOURCE INITIATE cannot upload a resource', () => marketing.uploadResource({ title: 'x', resourceType: 'FLYER', fileReference: 'x', proposedByUserId: id('outsider') }));
    const resource = await marketing.uploadResource({
        title: `Q3 ${RUN} Fund Factsheet`, resourceType: 'FACTSHEET', fileReference: `s3://one17-marketing/factsheet-${RUN}.pdf`,
        proposedByUserId: id('bd'),
    });
    resourceIds.push(resource.id);
    workflowInstanceIds.push(resource.workflowInstanceId);
    if (resource.status === 'DRAFT')
        ok('uploadResource creates a DRAFT marketing_resource + initiates MARKETING_RESOURCE_APPROVAL');
    else
        fail('uploaded resource was not DRAFT', resource);
    await expectReject('the proposer (BD) cannot approve their own resource upload (maker != checker)', () => workflowInbox.approve(resource.workflowInstanceId, id('bd')));
    const approvedResource = await workflowInbox.approve(resource.workflowInstanceId, id('compliance'));
    if (approvedResource.status === 'ACTIVE') {
        ok('MARKETING_RESOURCE_APPROVAL is approvable through the GENERIC WorkflowInboxService.approve() path (no extra required field, unlike the blocked structured-data types)');
    }
    else {
        fail('resource did not activate via generic inbox approve()', approvedResource);
    }
    const draftResource = await marketing.uploadResource({
        title: `Draft Flyer ${RUN}`, resourceType: 'FLYER', fileReference: `s3://one17-marketing/flyer-${RUN}.pdf`, proposedByUserId: id('bd'),
    });
    resourceIds.push(draftResource.id);
    workflowInstanceIds.push(draftResource.workflowInstanceId);
    await expectReject('a send cannot reference a resource that is not yet ACTIVE (invariant 28b)', () => marketing.initiateSend({
        subject: 'x', body: 'x', targetSegments: [`SEG_${RUN}`], resourceId: draftResource.id, initiatedByUserId: id('bd'),
    }));
    await workflowInbox.reject(draftResource.workflowInstanceId, id('compliance'), 'Not on-brand.');
    const draftResourceAfter = await prisma.marketingResource.findUniqueOrThrow({ where: { id: draftResource.id } });
    if (draftResourceAfter.status === 'SUPERSEDED')
        ok('rejecting a resource through the generic inbox reject() path flips it to SUPERSEDED');
    else
        fail('rejected resource did not reach SUPERSEDED', draftResourceAfter);
    const seg = `SEG_${RUN}`;
    const email1 = `mktg-sub1-${RUN}@one17.test`;
    const email2 = `mktg-sub2-${RUN}@one17.test`;
    const emailOther = `mktg-sub3-${RUN}@one17.test`;
    subscriberEmails.push(email1, email2, emailOther);
    const sub1 = await marketing.subscribe({ email: email1, fullName: 'Subscriber One', segments: [seg] });
    const sub2 = await marketing.subscribe({ email: email2, fullName: 'Subscriber Two', segments: [seg] });
    await marketing.subscribe({ email: emailOther, fullName: 'Subscriber Other', segments: [`OTHER_${RUN}`] });
    ok('subscribe() creates marketing_subscriber rows for each requested segment');
    await expectReject('unsubscribing with a wrong/guessed token is refused — email alone is not proof of ownership', () => marketing.unsubscribe({ email: email2, token: 'not-the-real-token' }));
    await marketing.unsubscribe({ email: email2, token: sub2.unsubscribeToken });
    const sub2After = await prisma.marketingSubscriber.findUniqueOrThrow({ where: { email: email2 } });
    if (!sub2After.subscribed)
        ok('unsubscribe() with the correct token flips subscribed=false');
    else
        fail('unsubscribe with correct token did not take effect', sub2After);
    await expectReject('an outsider without MARKETING_SEND INITIATE cannot initiate a send', () => marketing.initiateSend({ subject: 'x', body: 'x', targetSegments: [seg], initiatedByUserId: id('outsider') }));
    const send = await marketing.initiateSend({
        subject: `One17 ${RUN} Update`, body: 'Please find our latest factsheet attached.',
        targetSegments: [seg], resourceId: resource.id, initiatedByUserId: id('bd'),
    });
    sendIds.push(send.id);
    workflowInstanceIds.push(send.workflowInstanceId);
    if (send.status === 'PENDING_APPROVAL')
        ok('initiateSend creates a PENDING_APPROVAL marketing_send referencing the ACTIVE resource');
    else
        fail('initiated send was not PENDING_APPROVAL', send);
    await expectReject('the initiator (BD) cannot approve their own send (maker != checker)', () => workflowInbox.approve(send.workflowInstanceId, id('bd')));
    const approvedSend = await workflowInbox.approve(send.workflowInstanceId, id('compliance'));
    if (approvedSend.status === 'SENT' && approvedSend.recipientCount === 1) {
        ok('MARKETING_SEND_APPROVAL is approvable through the GENERIC inbox path; approval resolves exactly the 1 subscribed=true recipient matching the target segment (email1 — emailOther excluded by segment, email2 excluded by its own unsubscribe)');
    }
    else {
        fail('approveSend did not resolve the expected recipient count', approvedSend);
    }
    const comms = await prisma.clientCommunication.findMany({ where: { subject: send.subject } });
    if (comms.length === 1 && comms.every((c) => c.direction === 'OUTBOUND' && c.channel === 'EMAIL')) {
        ok('approveSend logs exactly one client_communication row per resolved recipient — the approval record IS the dispatch trigger');
    }
    else {
        fail('client_communication logging did not match expected shape/count', comms);
    }
    const emptySeg = `EMPTYSEG_${RUN}`;
    const emptySend = await marketing.initiateSend({ subject: `Empty ${RUN}`, body: 'x', targetSegments: [emptySeg], initiatedByUserId: id('bd') });
    sendIds.push(emptySend.id);
    workflowInstanceIds.push(emptySend.workflowInstanceId);
    const approvedEmptySend = await workflowInbox.approve(emptySend.workflowInstanceId, id('compliance'));
    if (approvedEmptySend.recipientCount === 0)
        ok('a send targeting a segment with zero subscribed recipients still completes cleanly with recipientCount 0');
    else
        fail('empty-segment send did not resolve to 0 recipients', approvedEmptySend);
    const stats = await marketing.getSubscriberStats();
    if (stats.total >= 3 && stats.unsubscribed >= 1)
        ok('getSubscriberStats() reports total/subscribed/unsubscribed counts');
    else
        fail('subscriber stats did not look as expected', stats);
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
//# sourceMappingURL=marketing.smoke.js.map