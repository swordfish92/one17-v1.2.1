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
const notification_service_1 = require("../notification/notification.service");
const screening_gateway_service_1 = require("../screening-gateway/screening-gateway.service");
const counterparty_service_1 = require("../counterparty/counterparty.service");
const bureau_gateway_service_1 = require("./bureau-gateway.service");
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
    const documents = new document_service_1.DocumentService(prisma, delegation, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const counterparties = new counterparty_service_1.CounterpartyService(prisma, audit, workflow, delegation, documents, new screening_gateway_service_1.ScreeningGatewayService(prisma, audit, delegation, workflow, new notification_service_1.NotificationService(prisma), new document_service_1.DocumentService(prisma, delegation, audit)));
    const bureauGateway = new bureau_gateway_service_1.BureauGatewayService(prisma, audit, delegation);
    const makeUser = async (label, roleCode) => {
        const email = `bureau-smoke-${label}-${RUN}@one17.test`;
        const user = await prisma.appUser.create({ data: { email, displayName: email } });
        await rbac.assignRole({ userId: user.id, roleCode });
        return user;
    };
    const riskUser = await makeUser('risk', 'RISK_DEPT');
    const portOff = await makeUser('portoff', 'PORT_OFF');
    const compliance = await makeUser('compliance', 'COMPLIANCE');
    const ic1 = await makeUser('ic1', 'SAU_INTERNAL_CONTROL');
    const riskReview = await makeUser('riskreview', 'RISK_DEPT');
    const outsider = await makeUser('outsider', 'COMPLIANCE');
    const onboardToComplete = async (label) => {
        const cp = await counterparties.onboard({
            legalName: `Bureau Smoke ${label} ${RUN}`, counterpartyType: 'SME', purposeOfFinancing: 'Working capital',
            amountSoughtKobo: 100000000n, expectedSourceOfRepayment: 'Sales receipts', creditBureauConsent: true,
            contactEmail: `bureau-smoke-${label}-obligor-${RUN}@one17.test`, onboardedByUserId: portOff.id,
        });
        await counterparties.recordComplianceRiskAssessment({
            counterpartyId: cp.id,
            riskMetricGrades: ['GEOGRAPHY', 'CLIENT_TYPE', 'SOURCE_OF_FUNDS', 'PEP_STATUS', 'SANCTIONS_STATUS', 'TRANSACTION_COMPLEXITY', 'BENEFICIAL_OWNERSHIP', 'SOURCE_OF_WEALTH']
                .map((metricCode) => ({ metricCode, grade: 'LOW', rationale: 'Bureau gateway smoke test.' })),
            pepSanctionsGrid: [
                { target: 'INVESTEE_OR_INSTITUTIONAL_NAME', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
                { target: 'DIRECTOR_OR_REP', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
                { target: 'BENEFICIAL_OWNER', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
            ],
            assessedByUserId: compliance.id,
        });
        const instance = await counterparties.submitOnboardingCaseForReview(cp.id, portOff.id);
        await counterparties.recordIc1Review({ workflowInstanceId: instance.id, checklist: { KYC_COMPLETE: 'PASS' }, pass: true, approverUserId: ic1.id });
        await counterparties.recordRiskReview({ workflowInstanceId: instance.id, periodicReviewFrequency: 'QUARTERLY', approvedExposureLimitKobo: 80000000n, approverUserId: riskReview.id });
        await counterparties.recordIc2Review({ workflowInstanceId: instance.id, checklist: { ALL_STEPS_SIGNED: 'PASS' }, outcome: 'SATISFACTORY', approverUserId: ic1.id });
        return prisma.counterparty.findUniqueOrThrow({ where: { id: cp.id } });
    };
    const cpConsented = await onboardToComplete('consented');
    let cpNoConsent = await onboardToComplete('noconsent');
    cpNoConsent = await prisma.counterparty.update({ where: { id: cpNoConsent.id }, data: { creditBureauConsentAt: null } });
    await expectReject('an outsider without BUREAU_GATEWAY_POLICY cannot configure a provider', () => bureauGateway.configureProvider({ providerSlot: 1, name: 'X', apiConfig: {}, costPerPullKobo: 10000n, isActive: true }, outsider.id));
    await expectReject('an outsider without BUREAU_GATEWAY_PULL cannot trigger a pull', () => bureauGateway.triggerPull(cpConsented.id, outsider.id));
    const activeProviderBeforeTest = await prisma.bureauProvider.findFirst({ where: { isActive: true } });
    if (!activeProviderBeforeTest) {
        await expectReject('no active provider configured -> pull refused', () => bureauGateway.triggerPull(cpConsented.id, portOff.id));
    }
    else {
        console.log('SKIP: "no active provider" case — a provider is already active from a prior session (correctly left untouched).');
    }
    const slot1Before = await prisma.bureauProvider.findUnique({ where: { providerSlot: 1 } });
    const provider = await bureauGateway.configureProvider({ providerSlot: 1, name: `Smoke Bureau Vendor ${RUN}`, apiConfig: { endpoint: 'https://example.test' }, costPerPullKobo: 50000n, isActive: true }, riskUser.id);
    if (provider.name.includes('Smoke Bureau Vendor') && provider.isActive)
        ok('RISK_DEPT configures provider slot 1 (Risk owns bureau policy)');
    else
        fail('provider configuration did not persist as expected', provider);
    await expectReject('no credit-bureau consent on file -> pull refused', () => bureauGateway.triggerPull(cpNoConsent.id, portOff.id));
    const pull1 = await bureauGateway.triggerPull(cpConsented.id, portOff.id);
    if (pull1.resultSummary.includes('NOT CONTRACTED') && pull1.costKobo === '50000') {
        ok('officer-triggered pull succeeds — real pipeline (consent + frequency + provider), honest "not contracted" placeholder result, real cost-per-pull logged');
    }
    else {
        fail('pull did not produce the expected honest placeholder result', pull1);
    }
    await expectReject('re-pulling before minIntervalDays has elapsed is refused (Risk-owned frequency policy)', () => bureauGateway.triggerPull(cpConsented.id, portOff.id));
    const policyBefore = await bureauGateway.getPolicy();
    await expectReject('an outsider cannot update the bureau policy', () => bureauGateway.updatePolicy({ minIntervalDays: 1 }, outsider.id));
    await expectReject('minIntervalDays must be at least 1', () => bureauGateway.updatePolicy({ minIntervalDays: 0 }, riskUser.id));
    const policy = await bureauGateway.updatePolicy({ minIntervalDays: 1 }, riskUser.id);
    ok('RISK_DEPT updates the frequency/interval policy (Risk owns bureau policy)');
    const history = await bureauGateway.listPullHistory(cpConsented.id);
    if (history.length === 1 && history[0].provider?.name?.includes('Smoke Bureau Vendor')) {
        ok('listPullHistory returns the pull with provider name attached — the same method both staff view and portal-counterparty.controller.ts read from');
    }
    else {
        fail('listPullHistory did not return the expected row', history);
    }
    const auditRows = await prisma.auditTrail.findMany({ where: { entityType: 'bureau_pull_log', entityId: pull1.id } });
    if (auditRows.length >= 1)
        ok('every pull logged to audit_trail (consent verified at onboarding, cost-per-pull visible)');
    else
        fail('expected an audit_trail row for the pull', auditRows);
    if (policyBefore.minIntervalDays != null) {
        await bureauGateway.updatePolicy({ minIntervalDays: policyBefore.minIntervalDays }, riskUser.id);
    }
    const cpIds = [cpConsented.id, cpNoConsent.id];
    await prisma.bureauPullLog.deleteMany({ where: { counterpartyId: { in: cpIds } } });
    if (slot1Before) {
        await prisma.bureauProvider.update({ where: { providerSlot: 1 }, data: { name: slot1Before.name, apiConfig: slot1Before.apiConfig, costPerPullKobo: slot1Before.costPerPullKobo, isActive: slot1Before.isActive } });
    }
    else {
        await prisma.bureauProvider.delete({ where: { providerSlot: 1 } });
    }
    const cases = await prisma.counterpartyOnboardingCase.findMany({ where: { counterpartyId: { in: cpIds } } });
    const wfIds = cases.map((c) => c.workflowInstanceId).filter((x) => !!x);
    await prisma.workflowStepApproval.deleteMany({ where: { workflowInstanceId: { in: wfIds } } });
    await prisma.workflowInstance.deleteMany({ where: { id: { in: wfIds } } });
    await prisma.counterpartyOnboardingCase.deleteMany({ where: { counterpartyId: { in: cpIds } } });
    await prisma.counterparty.deleteMany({ where: { id: { in: cpIds } } });
    const userIds = [riskUser.id, portOff.id, compliance.id, ic1.id, riskReview.id, outsider.id];
    await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
    await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });
    console.log(JSON.stringify({ policyMinIntervalDaysRestoredTo: policyBefore.minIntervalDays, testRanWithMinIntervalDays: policy.minIntervalDays }));
    console.log('\nSMOKE OK — BureauGateway (invariant 36c) against the real live DB.');
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=bureau-gateway.smoke.js.map