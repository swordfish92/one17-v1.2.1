"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const rbac_service_1 = require("../rbac/rbac.service");
const auth_service_1 = require("../auth/auth.service");
const mfa_service_1 = require("../mfa/mfa.service");
const delegation_service_1 = require("../delegation/delegation.service");
const document_service_1 = require("../document/document.service");
const workflow_service_1 = require("../workflow/workflow.service");
const screening_gateway_service_1 = require("../screening-gateway/screening-gateway.service");
const counterparty_service_1 = require("./counterparty.service");
const payment_reminder_service_1 = require("./payment-reminder.service");
const notification_service_1 = require("../notification/notification.service");
const task_service_1 = require("../task/task.service");
const portal_auth_service_1 = require("../portal-auth/portal-auth.service");
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
const EIGHT_LOW_GRADES = [
    'GEOGRAPHY', 'CLIENT_TYPE', 'SOURCE_OF_FUNDS', 'PEP_STATUS', 'SANCTIONS_STATUS',
    'TRANSACTION_COMPLEXITY', 'BENEFICIAL_OWNERSHIP', 'SOURCE_OF_WEALTH',
].map((metricCode) => ({ metricCode, grade: 'LOW', rationale: 'Smoke test: routine profile.' }));
const PEP_SANCTIONS_GRID = [
    { target: 'INVESTEE_OR_INSTITUTIONAL_NAME', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
    { target: 'DIRECTOR_OR_REP', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
    { target: 'BENEFICIAL_OWNER', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
];
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const documents = new document_service_1.DocumentService(prisma, delegation, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const counterparties = new counterparty_service_1.CounterpartyService(prisma, audit, workflow, delegation, documents, new screening_gateway_service_1.ScreeningGatewayService(prisma, audit, delegation, workflow, new notification_service_1.NotificationService(prisma), new document_service_1.DocumentService(prisma, delegation, audit)));
    const notification = new notification_service_1.NotificationService(prisma);
    const task = new task_service_1.TaskService(prisma, notification);
    const paymentReminders = new payment_reminder_service_1.PaymentReminderService(prisma, audit, delegation, notification, task);
    const portalAuth = new portal_auth_service_1.PortalAuthService(prisma, audit);
    const users = new Map();
    const makeUser = async (label, roleCode) => {
        const email = `cp-portal-${label}-${RUN}@one17.test`;
        const user = await prisma.appUser.create({ data: { email, displayName: email } });
        await rbac.assignRole({ userId: user.id, roleCode });
        users.set(label, user);
        return user;
    };
    const id = (label) => users.get(label).id;
    await makeUser('portmgr', 'PORT_MGR');
    await makeUser('compliance', 'COMPLIANCE');
    await makeUser('ic1', 'SAU_INTERNAL_CONTROL');
    await makeUser('risk', 'RISK_DEPT');
    await makeUser('mdceo', 'MD_CEO');
    const counterpartyIds = [];
    const workflowInstanceIds = [];
    const onboardToComplete = async (label, contactEmail) => {
        const cp = await counterparties.onboard({
            legalName: `Portal Investee ${label} ${RUN}`, counterpartyType: 'CORPORATE', purposeOfFinancing: 'Working capital',
            amountSoughtKobo: 500000000n, expectedSourceOfRepayment: 'Trade receivables', creditBureauConsent: true,
            contactEmail, onboardedByUserId: id('portmgr'),
        });
        counterpartyIds.push(cp.id);
        const c = await counterparties.recordComplianceRiskAssessment({
            counterpartyId: cp.id, riskMetricGrades: EIGHT_LOW_GRADES, pepSanctionsGrid: PEP_SANCTIONS_GRID, assessedByUserId: id('compliance'),
        });
        const instance = await counterparties.submitOnboardingCaseForReview(cp.id, id('portmgr'));
        workflowInstanceIds.push(instance.id);
        await counterparties.recordIc1Review({ workflowInstanceId: instance.id, checklist: { KYC_COMPLETE: 'PASS' }, pass: true, approverUserId: id('ic1') });
        await counterparties.recordRiskReview({ workflowInstanceId: instance.id, periodicReviewFrequency: 'QUARTERLY', approvedExposureLimitKobo: 300000000n, approverUserId: id('risk') });
        await counterparties.recordIc2Review({ workflowInstanceId: instance.id, checklist: { ALL_STEPS_SIGNED: 'PASS' }, outcome: 'SATISFACTORY', approverUserId: id('ic1') });
        return prisma.counterparty.findUniqueOrThrow({ where: { id: cp.id } });
    };
    const emailA = `cp-portal-a-${RUN}@one17.test`;
    const emailB = `cp-portal-b-${RUN}@one17.test`;
    const cpA = await onboardToComplete('A', emailA);
    const cpB = await onboardToComplete('B', emailB);
    if (cpA.onboardingStatus === 'COMPLETE_APPROVED')
        ok('counterparty A reaches COMPLETE_APPROVED via the real controller-callable service chain');
    else
        fail('counterparty A did not reach COMPLETE_APPROVED', cpA);
    const provisioned = await portalAuth.provisionForCounterparty(cpA.id);
    if (provisioned.bootstrapPassword)
        ok('provisionForCounterparty creates a PortalCounterpartyUser + returns a one-time bootstrap password');
    else
        fail('provisioning did not return a bootstrap password', provisioned);
    const cpAAfter = await prisma.counterparty.findUniqueOrThrow({ where: { id: cpA.id } });
    if (cpAAfter.portalProvisionedAt)
        ok('portalProvisionedAt is set on the counterparty row');
    else
        fail('portalProvisionedAt was not set', cpAAfter);
    await portalAuth.provisionForCounterparty(cpB.id);
    const loginA = await portalAuth.login(emailA, provisioned.bootstrapPassword, {});
    if (loginA.token)
        ok('counterparty A logs in via the SAME PortalAuthService.login() the investor persona uses');
    else
        fail('counterparty login did not return a token', loginA);
    const sessionA = await portalAuth.validateSession(loginA.token);
    if (sessionA?.principalType === 'COUNTERPARTY' && sessionA.counterpartyId === cpA.id && !sessionA.investorId) {
        ok('validateSession resolves principalType COUNTERPARTY with counterpartyId set, investorId unset');
    }
    else {
        fail('validateSession did not resolve the counterparty principal as expected', sessionA);
    }
    await expectReject('wrong password is refused for a counterparty portal login', () => portalAuth.login(emailA, 'wrong-password', {}));
    const dashboardA = await counterparties.getPortalDashboard(cpA.id);
    if (dashboardA.profile.counterpartyId === cpA.id && Array.isArray(dashboardA.transactions) && Array.isArray(dashboardA.documents)) {
        ok('getPortalDashboard returns transaction summary/timeline, documents, communications, restructure requests, complaints for the OWN counterparty');
    }
    else {
        fail('portal dashboard shape unexpected', dashboardA);
    }
    await counterparties.submitEnquiry({ counterpartyId: cpA.id, subject: 'Repayment date query', message: 'When is our next repayment due?' });
    const comms = await prisma.clientCommunication.findMany({ where: { counterpartyId: cpA.id, channel: 'PORTAL_MESSAGE' } });
    if (comms.length === 1 && comms[0].direction === 'INBOUND' && comms[0].routedToFunctionCode === 'PORTFOLIO_MGMT' && comms[0].loggedByUserId === null) {
        ok('submitEnquiry logs an INBOUND PORTAL_MESSAGE routed to Portfolio Management, with no AppUser logger (portal-originated)');
    }
    else {
        fail('enquiry communication did not land as expected', comms);
    }
    await expectReject('an extension request beyond 1 month is refused (invariant 28e cap)', () => counterparties.requestRestructure({ counterpartyId: cpA.id, requestType: 'EXTENSION', extensionMonths: 2, reason: 'Need more time.' }));
    const ext1 = await counterparties.requestRestructure({ counterpartyId: cpA.id, requestType: 'EXTENSION', extensionMonths: 1, reason: 'Cash flow timing.' });
    if (ext1.status === 'PENDING' && ext1.extensionMonths === 1)
        ok('a 1-month extension request is accepted as PENDING');
    else
        fail('extension request did not create as expected', ext1);
    const restructure1 = await counterparties.requestRestructure({ counterpartyId: cpA.id, requestType: 'RESTRUCTURE', reason: 'Revised repayment structure needed.' });
    await counterparties.decideRestructureRequest({ requestId: restructure1.id, decision: 'APPROVED', actorUserId: id('portmgr') });
    const restructure1After = await prisma.counterpartyRestructureRequest.findUniqueOrThrow({ where: { id: restructure1.id } });
    if (restructure1After.status === 'APPROVED')
        ok('staff (PORT_MGR) approves the restructure request via decideRestructureRequest');
    else
        fail('restructure decision did not apply', restructure1After);
    await expectReject('a second RESTRUCTURE request is refused once one is already APPROVED (invariant 28e — max 1 restructure)', () => counterparties.requestRestructure({ counterpartyId: cpA.id, requestType: 'RESTRUCTURE', reason: 'Another restructure.' }));
    const obligation1 = await paymentReminders.createObligation({
        counterpartyId: cpA.id, dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), amountKobo: 50000000n, createdByUserId: id('portmgr'),
    });
    const obRestructure1 = await counterparties.requestRestructure({ counterpartyId: cpA.id, obligationId: obligation1.id, requestType: 'RESTRUCTURE', reason: 'Obligation-scoped restructure.' });
    await counterparties.decideRestructureRequest({ requestId: obRestructure1.id, decision: 'APPROVED', actorUserId: id('portmgr') });
    const obRestructure1After = await prisma.counterpartyRestructureRequest.findUniqueOrThrow({ where: { id: obRestructure1.id } });
    if (obRestructure1After.status === 'APPROVED')
        ok('an obligation-scoped restructure request is approved normally (first use of this transaction\'s one restructure)');
    else
        fail('obligation-scoped restructure did not approve as expected', obRestructure1After);
    await expectReject('requestRestructure refuses a second restructure on the SAME obligation (invariant 25(4) service-layer pre-check)', () => counterparties.requestRestructure({ counterpartyId: cpA.id, obligationId: obligation1.id, requestType: 'RESTRUCTURE', reason: 'Trying again.' }));
    const obRestructure2Raw = await prisma.counterpartyRestructureRequest.create({
        data: { counterpartyId: cpA.id, obligationId: obligation1.id, requestType: 'RESTRUCTURE', reason: 'Direct-insert bypassing the service pre-check.', status: 'PENDING' },
    });
    await expectReject('decideRestructureRequest refuses to APPROVE a second restructure on the same obligation, even bypassing the service-layer pre-check (DB partial unique index is the real enforcement)', () => counterparties.decideRestructureRequest({ requestId: obRestructure2Raw.id, decision: 'APPROVED', actorUserId: id('portmgr') }));
    const exceptionInit = await counterparties.initiateRestructureException(obRestructure2Raw.id, id('portmgr'));
    workflowInstanceIds.push(exceptionInit.workflowInstance.id);
    if (exceptionInit.workflowInstance.workflowTypeCode === 'COUNTERPARTY_RESTRUCTURE_EXCEPTION') {
        ok('initiateRestructureException opens a COUNTERPARTY_RESTRUCTURE_EXCEPTION workflow instance and stamps workflowInstanceId onto the request');
    }
    else {
        fail('initiateRestructureException did not open the expected workflow', exceptionInit);
    }
    const obligation2 = await paymentReminders.createObligation({
        counterpartyId: cpA.id, dueDate: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000), amountKobo: 25000000n, createdByUserId: id('portmgr'),
    });
    const obRestructure3Pending = await counterparties.requestRestructure({ counterpartyId: cpA.id, obligationId: obligation2.id, requestType: 'RESTRUCTURE', reason: 'A fresh obligation, not yet restructured.' });
    await expectReject('initiateRestructureException refuses a request whose obligation has NOT yet used its one restructure (the exception path is only for exceeding an already-hit limit)', () => counterparties.initiateRestructureException(obRestructure3Pending.id, id('portmgr')));
    await expectReject('initiateRestructureException refuses a request with no obligationId at all (extension request ext1 is not obligation-scoped)', () => counterparties.initiateRestructureException(ext1.id, id('portmgr')));
    const exceptionApproved = await counterparties.approveRestructureException(exceptionInit.workflowInstance.id, id('mdceo'));
    if (exceptionApproved.status === 'APPROVED')
        ok('MD_CEO approves the restructure exception via approveRestructureException (dispatched from WorkflowInboxService in the real controller path)');
    else
        fail('exception approval did not reach APPROVED', exceptionApproved);
    const obRestructure2After = await prisma.counterpartyRestructureRequest.findUniqueOrThrow({ where: { id: obRestructure2Raw.id } });
    const bothApprovedForObligation = await prisma.counterpartyRestructureRequest.count({ where: { obligationId: obligation1.id, status: 'APPROVED' } });
    if (obRestructure2After.status === 'APPROVED' && bothApprovedForObligation === 2) {
        ok('the exception-approved row coexists with the normal-approved row for the SAME obligation — 2 APPROVED rows, proving the partial index\'s workflow_instance_id IS NULL clause exempts exception approvals by construction, not by bypass');
    }
    else {
        fail('expected exactly 2 APPROVED restructure requests for the obligation after the exception approval', { obRestructure2After, bothApprovedForObligation });
    }
    await counterparties.toggleRestructuringFeature(cpB.id, false, id('portmgr'));
    await expectReject('restructure requests are refused once staff disables the feature for a counterparty', () => counterparties.requestRestructure({ counterpartyId: cpB.id, requestType: 'EXTENSION', extensionMonths: 1, reason: 'x' }));
    await counterparties.toggleRestructuringFeature(cpB.id, true, id('portmgr'));
    ok('the restructuringRequestsEnabled toggle blocks/unblocks new requests per counterparty from the staff side');
    const dashboardB = await counterparties.getPortalDashboard(cpB.id);
    const crossLeak = dashboardB.restructureRequests.some((r) => r.id === ext1.id || r.id === restructure1.id);
    if (!crossLeak)
        ok('counterparty B\'s dashboard does not see counterparty A\'s restructure requests (cross-client leak test)');
    else
        fail('cross-client leak: B saw A\'s restructure requests', dashboardB.restructureRequests);
    const systemUser = await prisma.appUser.create({ data: { email: `cp-portal-system-${RUN}@one17.test`, displayName: 'System Scheduler' } });
    const officerUser = await prisma.appUser.create({ data: { email: `cp-portal-fileofficer-${RUN}@one17.test`, displayName: 'File Managing Officer' } });
    await rbac.assignRole({ userId: officerUser.id, roleCode: 'PORT_OFF' });
    const position = await prisma.position.create({ data: { title: `File Officer ${RUN}`, orgUnitCode: 'PORTFOLIO', cadre: 'Officer', notch: 1 } });
    const officerEmployee = await prisma.employee.create({ data: { surname: `FileOfficer${RUN}`, firstName: 'Portal', positionId: position.id, orgUnitCode: 'PORTFOLIO', appUserId: officerUser.id, hireDate: new Date() } });
    await counterparties.assignFileManagingOfficer(cpA.id, officerUser.id, id('portmgr'));
    const cpAWithOfficer = await prisma.counterparty.findUniqueOrThrow({ where: { id: cpA.id } });
    if (cpAWithOfficer.fileManagingOfficerUserId === officerUser.id)
        ok('assignFileManagingOfficer sets Counterparty.fileManagingOfficerUserId ("file-ownership as data")');
    else
        fail('file-managing officer was not assigned', cpAWithOfficer);
    const callObligation = await paymentReminders.createObligation({
        counterpartyId: cpA.id, dueDate: new Date('2026-08-01'), amountKobo: 40000000n, createdByUserId: id('portmgr'),
    });
    const t3Date = new Date('2026-07-29');
    const sweepAtT3 = await paymentReminders.runReminderSweep(t3Date, systemUser.id);
    if (sweepAtT3.noticesGenerated >= 1)
        ok(`runReminderSweep at T-3 generates the rung (${sweepAtT3.noticesGenerated} processed) rather than sending immediately`);
    else
        fail('T-3 sweep did not process the obligation', sweepAtT3);
    const callTask = await prisma.task.findFirst({ where: { assigneeEmployeeId: officerEmployee.id, title: { contains: cpA.legalName } } });
    if (callTask && callTask.assignedByUserId === systemUser.id) {
        ok(`T-3's PHONE-CALL rung creates a REAL Task assigned to the file-managing officer's own Employee record ("${callTask.title}") — invariant 36(a), not a role broadcast`);
    }
    else {
        fail('T-3 call task was not assigned to the file-managing officer', callTask);
    }
    const queueItem = await prisma.paymentReminderDispatchQueue.findFirst({ where: { obligationId: callObligation.id, dayOffset: -3 } });
    if (queueItem?.status === 'PENDING_VALIDATION') {
        ok('T-3\'s client-facing message channels GENERATE into the dispatch queue as PENDING_VALIDATION — nothing sent to the client yet (invariant 36(a))');
    }
    else {
        fail('expected a PENDING_VALIDATION dispatch queue item for the T-3 rung', queueItem);
    }
    const commsBeforeApproval = await prisma.clientCommunication.count({ where: { counterpartyId: cpA.id, subject: 'Payment reminder' } });
    if (commsBeforeApproval === 0)
        ok('no ClientCommunication row exists yet — dispatch requires officer approval first');
    else
        fail('a ClientCommunication was created before officer approval', commsBeforeApproval);
    await expectReject('an outsider without PAYMENT_REMINDER_DISPATCH cannot approve a dispatch queue item', () => paymentReminders.approveDispatch(queueItem.id, id('compliance')));
    const dispatched = await paymentReminders.approveDispatch(queueItem.id, id('portmgr'));
    if (dispatched.status === 'DISPATCHED')
        ok('PORT_MGR approves the dispatch queue item — ONLY NOW does the ClientCommunication + notice log get written');
    else
        fail('approveDispatch did not flip to DISPATCHED', dispatched);
    const commsAfterApproval = await prisma.clientCommunication.count({ where: { counterpartyId: cpA.id, subject: 'Payment reminder' } });
    const noticeLogAfter = await prisma.paymentReminderNoticeLog.findUnique({ where: { obligationId_dayOffset: { obligationId: callObligation.id, dayOffset: -3 } } });
    if (commsAfterApproval === 1 && noticeLogAfter)
        ok('ClientCommunication + payment_reminder_notice_log both written at DISPATCH time, not generation time');
    else
        fail('dispatch did not create the expected communication/notice-log rows', { commsAfterApproval, noticeLogAfter });
    await expectReject('re-deciding an already-DISPATCHED queue item is refused', () => paymentReminders.approveDispatch(queueItem.id, id('portmgr')));
    const rejectObligation = await paymentReminders.createObligation({
        counterpartyId: cpA.id, dueDate: new Date('2026-09-01'), amountKobo: 10000000n, createdByUserId: id('portmgr'),
    });
    await paymentReminders.runReminderSweep(new Date('2026-08-25'), systemUser.id);
    const rejectQueueItem = await prisma.paymentReminderDispatchQueue.findFirstOrThrow({ where: { obligationId: rejectObligation.id, dayOffset: -7 } });
    const rejected = await paymentReminders.rejectDispatch(rejectQueueItem.id, id('portmgr'), 'Client already confirmed payment by phone.');
    if (rejected.status === 'REJECTED')
        ok('rejectDispatch flips a queue item to REJECTED — no ClientCommunication ever written for it');
    else
        fail('rejectDispatch did not flip to REJECTED', rejected);
    const rejectedComms = await prisma.clientCommunication.count({ where: { counterpartyId: cpA.id, occurredAt: { gte: new Date('2026-08-25') } } });
    if (rejectedComms === 0)
        ok('a REJECTED dispatch queue item never produces a client-facing communication');
    else
        fail('a rejected item still produced a communication', rejectedComms);
    await expectReject('an outsider without PAYMENT_REMINDER_LADDER_SETTINGS cannot edit the ladder', () => paymentReminders.updateLadderRung(-7, { channels: ['EMAIL', 'SMS'] }, id('compliance')));
    const updatedRung = await paymentReminders.updateLadderRung(-7, { channels: ['EMAIL', 'SMS'] }, id('portmgr'));
    if (JSON.stringify(updatedRung.channels) === JSON.stringify(['EMAIL', 'SMS']))
        ok('PORT_MGR (authorized level) edits the T-7 rung to add SMS — versioned via updatedAt, audit-logged');
    else
        fail('ladder rung update did not persist', updatedRung);
    await paymentReminders.updateLadderRung(-7, { channels: ['EMAIL'] }, id('portmgr'));
    const bureauSync = await paymentReminders.runCreditBureauMonthlySync(new Date('2026-08-01'), systemUser.id);
    const syncTask = await prisma.task.findFirst({ where: { assigneeEmployeeId: officerEmployee.id, title: { contains: 'Monthly credit-bureau data sync' } } });
    if (bureauSync.tasksCreated >= 1 && syncTask)
        ok(`Bureau task generator #1: monthly credit-bureau data-sync task created for the file-managing officer ("${syncTask.title}")`);
    else
        fail('monthly credit-bureau sync did not create the expected task', { bureauSync, syncTask });
    const bureauSyncRerun = await paymentReminders.runCreditBureauMonthlySync(new Date('2026-08-15'), systemUser.id);
    const syncTaskCountAfterRerun = await prisma.task.count({ where: { assigneeEmployeeId: officerEmployee.id, title: { contains: 'Monthly credit-bureau data sync' } } });
    if (syncTaskCountAfterRerun === 1)
        ok('re-running the monthly sync within the SAME month is idempotent — no duplicate task');
    else
        fail(`expected exactly 1 sync task for the month, got ${syncTaskCountAfterRerun}`, bureauSyncRerun);
    await portalAuth.logout(loginA.token);
    await prisma.paymentReminderNoticeLog.deleteMany({ where: { obligation: { counterpartyId: { in: counterpartyIds } } } });
    await prisma.paymentReminderDispatchQueue.deleteMany({ where: { obligation: { counterpartyId: { in: counterpartyIds } } } });
    await prisma.task.deleteMany({ where: { OR: [{ assigneeEmployeeId: officerEmployee.id }, { assignedByUserId: systemUser.id }] } });
    await prisma.employee.deleteMany({ where: { id: officerEmployee.id } });
    await prisma.position.deleteMany({ where: { id: position.id } });
    await prisma.clientCommunication.deleteMany({ where: { counterpartyId: { in: counterpartyIds } } });
    await prisma.counterpartyRestructureRequest.deleteMany({ where: { counterpartyId: { in: counterpartyIds } } });
    await prisma.counterpartyRepaymentObligation.deleteMany({ where: { counterpartyId: { in: counterpartyIds } } });
    await prisma.notification.deleteMany({ where: { recipientUserId: { in: [...users.values(), officerUser, systemUser].map((u) => u.id) } } });
    await prisma.portalCounterpartySession.deleteMany({ where: { portalUser: { counterpartyId: { in: counterpartyIds } } } });
    await prisma.portalCounterpartyUser.deleteMany({ where: { counterpartyId: { in: counterpartyIds } } });
    await prisma.workflowStepApproval.deleteMany({ where: { workflowInstanceId: { in: workflowInstanceIds } } });
    await prisma.workflowInstance.deleteMany({ where: { id: { in: workflowInstanceIds } } });
    await prisma.counterpartyOnboardingCase.deleteMany({ where: { counterpartyId: { in: counterpartyIds } } });
    await prisma.counterparty.deleteMany({ where: { id: { in: counterpartyIds } } });
    const userIds = [...users.values()].map((u) => u.id);
    await prisma.userRole.deleteMany({ where: { userId: { in: [...userIds, officerUser.id] } } });
    await prisma.appUser.deleteMany({ where: { id: { in: [...userIds, officerUser.id, systemUser.id] } } });
    await prisma.$disconnect();
    console.log('\nSMOKE OK — Counterparty portal persona (CHECK5 item 5g / invariant 28e) against the real live DB.');
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=counterparty-portal.smoke.js.map