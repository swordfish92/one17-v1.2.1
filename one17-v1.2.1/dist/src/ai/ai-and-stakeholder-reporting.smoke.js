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
const one17_ai_service_1 = require("./one17-ai.service");
const stakeholder_reporting_service_1 = require("../stakeholder-reporting/stakeholder-reporting.service");
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
    const ai = new one17_ai_service_1.One17AIService(prisma, audit, delegation, workflow);
    const stakeholderReporting = new stakeholder_reporting_service_1.StakeholderReportingService(prisma, audit, delegation, workflow);
    await prisma.aiCapabilityFlag.updateMany({ where: { capabilityCode: { in: ['AI_CHAT', 'AI_SHARIAH_ASSIST'] } }, data: { isEnabled: false, updatedByUserId: null, workflowInstanceId: null } });
    await prisma.aiKillSwitch.upsert({ where: { id: 1 }, create: { id: 1, isActive: false }, update: { isActive: false, activatedByUserId: null, reason: null } });
    const superAdmin = await prisma.appUser.create({ data: { email: `ai-superadmin-${RUN}@one17.test`, displayName: 'ai-superadmin' } });
    await rbac.assignRole({ userId: superAdmin.id, roleCode: 'SUPER_ADMIN' });
    const ict = await prisma.appUser.create({ data: { email: `ai-ict-${RUN}@one17.test`, displayName: 'ai-ict' } });
    await rbac.assignRole({ userId: ict.id, roleCode: 'ICT' });
    const mdCeo = await prisma.appUser.create({ data: { email: `ai-mdceo-${RUN}@one17.test`, displayName: 'ai-mdceo' } });
    await rbac.assignRole({ userId: mdCeo.id, roleCode: 'MD_CEO' });
    const shariahRev = await prisma.appUser.create({ data: { email: `ai-shariahrev-${RUN}@one17.test`, displayName: 'ai-shariahrev' } });
    await rbac.assignRole({ userId: shariahRev.id, roleCode: 'SHARIAH_REV' });
    const finAdmin = await prisma.appUser.create({ data: { email: `ai-finadmin-${RUN}@one17.test`, displayName: 'ai-finadmin' } });
    await rbac.assignRole({ userId: finAdmin.id, roleCode: 'FIN_ADMIN' });
    const corpServices = await prisma.appUser.create({ data: { email: `ai-corpsvc-${RUN}@one17.test`, displayName: 'ai-corpsvc' } });
    await rbac.assignRole({ userId: corpServices.id, roleCode: 'CORP_SERVICES' });
    const cs = await prisma.appUser.create({ data: { email: `ai-cs-${RUN}@one17.test`, displayName: 'ai-cs' } });
    await rbac.assignRole({ userId: cs.id, roleCode: 'CS' });
    const chatFlagBefore = await prisma.aiCapabilityFlag.findUniqueOrThrow({ where: { capabilityCode: 'AI_CHAT' } });
    if (chatFlagBefore.isEnabled)
        fail('expected AI_CHAT to ship OFF by default (invariant 33e)', chatFlagBefore);
    const superAdminAttempt = await ai.invoke({ askingUserId: superAdmin.id, capabilityCode: 'AI_CHAT', promptText: 'Summarize this quarter.', requestedDataPointCodes: [], orgUnitCode: 'FINCON' });
    if (superAdminAttempt.outcome === 'REFUSED' && superAdminAttempt.refusalReason?.includes('disabled (global flag OFF)')) {
        ok(`flag-off is inert even for SUPER_ADMIN (who DOES hold a standing AI_CHAT grant): "${superAdminAttempt.refusalReason}"`);
    }
    else {
        fail('SUPER_ADMIN was not correctly refused by the flag-off gate', superAdminAttempt);
    }
    const refusalLog = await prisma.aiInteractionLog.findUniqueOrThrow({ where: { id: superAdminAttempt.interactionLogId } });
    if (refusalLog.outcome === 'REFUSED' && refusalLog.gate1FlagEnabled === false && refusalLog.askingUserId === superAdmin.id) {
        ok('the refusal itself is logged in ai_interaction_log (invariant 33d: "including refusals")');
    }
    else {
        fail('refusal was not logged correctly', refusalLog);
    }
    for (const capabilityCode of ['AI_CHAT', 'AI_SHARIAH_ASSIST']) {
        const toggleWf = await ai.requestFlagToggle(capabilityCode, ict.id);
        await expectReject(`ICT (the requester) approving their own ${capabilityCode} flag toggle`, () => ai.approveFlagToggle(toggleWf.id, ict.id));
        const approved = await ai.approveFlagToggle(toggleWf.id, mdCeo.id);
        if (approved?.isEnabled === true)
            ok(`AI_CAPABILITY_FLAG_TOGGLE: MD_CEO approval flips ${capabilityCode} ACTIVE via the real DoA workflow (ICT initiates, MD_CEO approves)`);
        else
            fail(`${capabilityCode} flag toggle did not flip correctly`, approved);
    }
    const noContextAttempt = await ai.invoke({ askingUserId: shariahRev.id, capabilityCode: 'AI_SHARIAH_ASSIST', promptText: 'Draft an analysis note.', requestedDataPointCodes: [], orgUnitCode: 'FINCON' });
    if (noContextAttempt.outcome === 'REFUSED' && noContextAttempt.refusalReason?.includes('workflow-step context')) {
        ok(`AI_SHARIAH_ASSIST: SHARIAH_REV (correctly GRANTED the capability, flag now ON) is refused with NO Shariah-review workflow context: "${noContextAttempt.refusalReason}"`);
    }
    else {
        fail('wrong-context request was not refused correctly', noContextAttempt);
    }
    const shariahWfInstance = await workflow.initiate({ workflowTypeCode: 'INVESTOR_MANDATE_SHARIAH_REVIEW', entityType: 'investor_mandate', entityId: `smoke-mandate-${RUN}`, scenario: 'STANDARD', initiatedByUserId: finAdmin.id });
    const rightContextAttempt = await ai.invoke({ askingUserId: shariahRev.id, capabilityCode: 'AI_SHARIAH_ASSIST', promptText: 'Draft an analysis note.', requestedDataPointCodes: [], context: { workflowInstanceId: shariahWfInstance.id }, orgUnitCode: 'FINCON' });
    if (rightContextAttempt.outcome === 'ALLOWED') {
        ok('AI_SHARIAH_ASSIST: the SAME request, WITH a live INVESTOR_MANDATE_SHARIAH_REVIEW workflow-step context supplied, is ALLOWED — "outside its permitted context, a granted capability is silent" (invariant 33f-3), proven both ways');
    }
    else {
        fail('right-context request was incorrectly refused', rightContextAttempt);
    }
    const prompt = 'How many vendors and scheduled jobs does the platform have?';
    const requestedCodes = ['VENDOR_COUNT', 'SCHEDULED_JOB_COUNT'];
    const corpServicesAnswer = await ai.invoke({ askingUserId: corpServices.id, capabilityCode: 'AI_CHAT', promptText: prompt, requestedDataPointCodes: requestedCodes, orgUnitCode: 'CORP_SERVICES' });
    const ictAnswer = await ai.invoke({ askingUserId: ict.id, capabilityCode: 'AI_CHAT', promptText: prompt, requestedDataPointCodes: requestedCodes, orgUnitCode: 'CORP_SERVICES' });
    if (corpServicesAnswer.includedDataPointCodes.includes('VENDOR_COUNT') && !corpServicesAnswer.includedDataPointCodes.includes('SCHEDULED_JOB_COUNT') &&
        ictAnswer.includedDataPointCodes.includes('SCHEDULED_JOB_COUNT') && !ictAnswer.includedDataPointCodes.includes('VENDOR_COUNT') &&
        corpServicesAnswer.responseText !== ictAnswer.responseText) {
        ok(`two-role scoping: IDENTICAL prompt + IDENTICAL requested data points, DIFFERENT assembled answers — CORP_SERVICES sees [${corpServicesAnswer.includedDataPointCodes}], ICT sees [${ictAnswer.includedDataPointCodes}] (invariant 33a: "if the user can't view it, the AI can't say it")`);
    }
    else {
        fail('two-role scoping did not differ as expected', { corpServicesAnswer, ictAnswer });
    }
    const testOrgUnit = await prisma.orgUnit.create({ data: { code: `SMOKE_AI_ORGUNIT_${RUN}`, name: 'Smoke Test Org Unit' } });
    const now = new Date();
    await prisma.aiTokenBudget.create({ data: { orgUnitCode: testOrgUnit.code, periodYear: now.getFullYear(), periodMonth: now.getMonth() + 1, tokenLimit: 5 } });
    const smallRequest = await ai.invoke({ askingUserId: ict.id, capabilityCode: 'AI_CHAT', promptText: 'hi', requestedDataPointCodes: [], orgUnitCode: testOrgUnit.code });
    if (smallRequest.outcome === 'ALLOWED') {
        ok(`token budget: a small request (~1 token) succeeds against a 5-token/period budget for a fresh org unit`);
    }
    else {
        fail('small request unexpectedly refused', smallRequest);
    }
    const bigRequest = await ai.invoke({ askingUserId: ict.id, capabilityCode: 'AI_CHAT', promptText: 'a much longer prompt that will clearly exceed the tiny five token budget for this smoke test org unit', requestedDataPointCodes: [], orgUnitCode: testOrgUnit.code });
    if (bigRequest.outcome === 'REFUSED' && bigRequest.refusalReason?.includes('Token budget exhausted')) {
        ok(`token budget: a larger request is gracefully REFUSED once the period budget would be exceeded: "${bigRequest.refusalReason}"`);
    }
    else {
        fail('budget exhaustion was not refused correctly', bigRequest);
    }
    await ai.activateKillSwitch(ict.id, 'Smoke test — proving the emergency stop');
    const duringKillSwitch = await ai.invoke({ askingUserId: ict.id, capabilityCode: 'AI_CHAT', promptText: 'hi', requestedDataPointCodes: [], orgUnitCode: 'CORP_SERVICES' });
    if (duringKillSwitch.outcome === 'REFUSED' && duringKillSwitch.refusalReason?.includes('kill switch is active')) {
        ok(`kill switch: an otherwise-fully-authorized request (flag ON, granted, no context needed, budget available) is dropped instantly once the kill switch is active: "${duringKillSwitch.refusalReason}"`);
    }
    else {
        fail('kill switch did not override an otherwise-valid request', duringKillSwitch);
    }
    await ai.deactivateKillSwitch(ict.id);
    const afterDeactivation = await ai.invoke({ askingUserId: ict.id, capabilityCode: 'AI_CHAT', promptText: 'hi', requestedDataPointCodes: [], orgUnitCode: 'CORP_SERVICES' });
    if (afterDeactivation.outcome === 'ALLOWED') {
        ok('kill switch: deactivating restores normal gate evaluation (request now ALLOWED again)');
    }
    else {
        fail('request after kill-switch deactivation was unexpectedly refused', afterDeactivation);
    }
    await expectReject('UPDATE on ai_interaction_log is rejected at the DB level (insert-only trigger)', () => prisma.aiInteractionLog.update({ where: { id: refusalLog.id }, data: { responseText: 'tampered' } }));
    await expectReject('a user without AI_AUDITLOG_QUERY reading the AI interaction log', () => ai.listInteractionLog(ict.id));
    const logForMdCeo = await ai.listInteractionLog(mdCeo.id);
    if (Array.isArray(logForMdCeo) && logForMdCeo.length > 0) {
        ok(`MD_CEO (holds AI_AUDITLOG_QUERY VIEW) can read the interaction log — ${logForMdCeo.length} rows`);
    }
    else {
        fail('MD_CEO was unexpectedly unable to read the interaction log', logForMdCeo);
    }
    const internalReport = await stakeholderReporting.generateReport({
        department: 'FINCON', reportType: 'MONTHLY_FINANCIAL_SUMMARY', periodStart: new Date(2026, 5, 1), periodEnd: new Date(2026, 5, 30),
        figures: { totalAumKobo: '6700000000' }, audienceClass: 'INTERNAL', generatedByUserId: finAdmin.id,
    });
    await expectReject('distributing an unapproved (DRAFT) stakeholder report', () => stakeholderReporting.distribute({ stakeholderReportRunId: internalReport.id, audienceClass: 'INTERNAL', recipientDescription: 'FinCon department circulation', distributedByUserId: finAdmin.id }));
    const internalWf = await stakeholderReporting.submitForApproval(internalReport.id, finAdmin.id);
    await expectReject('the report generator (FIN_ADMIN) approving their own report (maker != checker)', () => stakeholderReporting.approveReport(internalWf.id, finAdmin.id));
    await stakeholderReporting.approveReport(internalWf.id, mdCeo.id);
    const internalDistribution = await stakeholderReporting.distribute({ stakeholderReportRunId: internalReport.id, audienceClass: 'INTERNAL', recipientDescription: 'FinCon department circulation', distributedByUserId: finAdmin.id });
    if (internalDistribution.signOffByUserId === null) {
        ok('INTERNAL audience distribution succeeds once APPROVED, with NO sign-off required');
    }
    else {
        fail('INTERNAL distribution unexpectedly required/recorded a sign-off', internalDistribution);
    }
    const clientReport = await stakeholderReporting.generateReport({
        department: 'PORTFOLIO', reportType: 'CLIENT_QUARTERLY_STATEMENT', periodStart: new Date(2026, 3, 1), periodEnd: new Date(2026, 5, 30),
        figures: { navPerUnit: '105.00' }, audienceClass: 'CLIENT', generatedByUserId: finAdmin.id,
    });
    const clientWf = await stakeholderReporting.submitForApproval(clientReport.id, finAdmin.id);
    await stakeholderReporting.approveReport(clientWf.id, mdCeo.id);
    await expectReject('CLIENT audience distribution with NO sign-off supplied', () => stakeholderReporting.distribute({ stakeholderReportRunId: clientReport.id, audienceClass: 'CLIENT', recipientDescription: 'Client portal delivery', distributedByUserId: finAdmin.id }));
    await expectReject('CLIENT audience distribution sign-off by a user who lacks STAKEHOLDER_REPORT_DISTRIBUTION_SIGNOFF', () => stakeholderReporting.distribute({ stakeholderReportRunId: clientReport.id, audienceClass: 'CLIENT', recipientDescription: 'Client portal delivery', distributedByUserId: finAdmin.id, signOffByUserId: finAdmin.id }));
    const clientDistribution = await stakeholderReporting.distribute({ stakeholderReportRunId: clientReport.id, audienceClass: 'CLIENT', recipientDescription: 'Client portal delivery', distributedByUserId: finAdmin.id, signOffByUserId: mdCeo.id });
    if (clientDistribution.signOffByUserId === mdCeo.id) {
        ok('CLIENT audience distribution succeeds ONLY with a valid MD/DoA sign-off (invariant 24)');
    }
    else {
        fail('CLIENT distribution did not record the sign-off correctly', clientDistribution);
    }
    await expectReject('UPDATE on stakeholder_distribution_log is rejected at the DB level (insert-only trigger)', () => prisma.stakeholderDistributionLog.update({ where: { id: clientDistribution.id }, data: { recipientDescription: 'tampered' } }));
    const boardReport = await stakeholderReporting.generateReport({
        department: 'GOVERNANCE', reportType: 'Board Management Report', periodStart: new Date(2026, 5, 1), periodEnd: new Date(2026, 5, 30),
        figures: { totalAumKobo: '6700000000' }, audienceClass: 'BOARD', generatedByUserId: cs.id,
    });
    const boardWf = await stakeholderReporting.submitForApproval(boardReport.id, cs.id);
    await stakeholderReporting.approveReport(boardWf.id, mdCeo.id);
    await expectReject('BOARD audience distribution with NO sign-off supplied (invariant 37c-iv extends invariant 24\'s DoA rule)', () => stakeholderReporting.distribute({ stakeholderReportRunId: boardReport.id, audienceClass: 'BOARD', recipientDescription: 'Board pack circulation', distributedByUserId: cs.id }));
    const boardDistribution = await stakeholderReporting.distribute({ stakeholderReportRunId: boardReport.id, audienceClass: 'BOARD', recipientDescription: 'Board pack circulation', distributedByUserId: cs.id, signOffByUserId: mdCeo.id });
    if (boardDistribution.signOffByUserId === mdCeo.id) {
        ok('CS distributes a Board Paper (BOARD audience) — requires MD/DoA sign-off exactly like CLIENT/REGULATOR (invariant 37c-iv)');
    }
    else {
        fail('BOARD distribution did not record the sign-off correctly', boardDistribution);
    }
    console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — AI Services Layer foundation + Stakeholder Reporting distribution rules (Check-6B item 2) against the real live DB.`);
    process.exitCode = failed ? 1 : 0;
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=ai-and-stakeholder-reporting.smoke.js.map