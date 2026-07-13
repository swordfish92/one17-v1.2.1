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
const letterhead_service_1 = require("./letterhead.service");
const statement_service_1 = require("../statement/statement.service");
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
function samplePayload(overrides = {}) {
    return {
        companyName: 'Smoke Test Capital Limited',
        addressLine1: '1 Smoke Test Way',
        addressLine2: 'Victoria Island, Lagos',
        rcNumber: `RC-SMOKE-${RUN}`,
        secRegistrationLine: `SEC/SMOKE/${RUN}`,
        brandPrimaryColorHex: '#111111',
        brandAccentColorHex: '#222222',
        brandDeepColorHex: '#333333',
        footerDisclaimer: 'Smoke test footer disclaimer.',
        proposedByUserId: '',
        ...overrides,
    };
}
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const authService = new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit));
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, authService);
    const letterhead = new letterhead_service_1.LetterheadService(prisma, audit, delegation, workflow);
    const statements = new statement_service_1.StatementService(prisma, letterhead);
    const cs = await prisma.appUser.create({ data: { email: `lh-cs-${RUN}@one17.test`, displayName: 'lh-cs' } });
    await rbac.assignRole({ userId: cs.id, roleCode: 'CS' });
    const mdCeo = await prisma.appUser.create({ data: { email: `lh-mdceo-${RUN}@one17.test`, displayName: 'lh-mdceo' } });
    await rbac.assignRole({ userId: mdCeo.id, roleCode: 'MD_CEO' });
    const outsider = await prisma.appUser.create({ data: { email: `lh-outsider-${RUN}@one17.test`, displayName: 'lh-outsider' } });
    const both = await prisma.appUser.create({ data: { email: `lh-both-${RUN}@one17.test`, displayName: 'lh-both' } });
    await rbac.assignRole({ userId: both.id, roleCode: 'CS' });
    await rbac.assignRole({ userId: both.id, roleCode: 'MD_CEO' });
    const baseline = await prisma.letterheadTemplate.findFirst({ where: { status: 'ACTIVE' } });
    if (!baseline) {
        const nullContent = await letterhead.getActiveContent();
        if (nullContent === null)
            ok('getActiveContent() returns null when no version has ever reached ACTIVE (seed v1 stays DRAFT, placeholder content never leaks)');
        else
            fail('getActiveContent() should be null with no ACTIVE version', nullContent);
    }
    else {
        ok('a prior smoke/manual run already activated a version — skipping the null-baseline assertion, not a failure');
    }
    const preTemplateInvestor = await prisma.investor.create({
        data: {
            investorId: `SMOKE-LH-INV-${RUN}`, fullLegalName: 'Smoke Letterhead Investor', entityType: 'HNWI_INDIVIDUAL',
            nationality: 'NG', taxIdentificationNumber: `TIN-LH-${RUN}`, contactEmail: `lh-inv-${RUN}@one17.test`,
            contactPhone: '+2340000000099', registeredAddress: 'Test address', sourceOfFunds: 'Business income',
            onboardedByUserId: cs.id, kycStatus: 'KYC_COMPLETE', amlStatus: 'CLEARED', fundStatus: 'ACTIVE',
        },
    });
    const halalFundProduct = await prisma.product.findFirst({ where: { engineType: 'UNIT_NAV' } });
    let productAccount = null;
    if (halalFundProduct) {
        productAccount = await prisma.productAccount.create({
            data: {
                investorId: preTemplateInvestor.investorId, productCode: halalFundProduct.code,
                principalOrCommittedKobo: 10000000n, startDate: new Date(), status: 'ACTIVE', unitsHeld: '0',
            },
        });
        const pdfBeforeActivation = await statements.generateStatementPdf('PRODUCT', productAccount.id, preTemplateInvestor.investorId, new Date(0), new Date());
        if (pdfBeforeActivation.byteLength > 0)
            ok('StatementService.generateStatementPdf() succeeds with no ACTIVE letterhead template — never blocks on missing governed config (invariant 52a fallback principle)');
        else
            fail('statement PDF generation produced an empty buffer before any letterhead is ACTIVE', pdfBeforeActivation.byteLength);
    }
    else {
        ok('no UNIT_NAV product exists in this DB to render a pre-activation statement against — skipping (not a letterhead failure)');
    }
    await expectReject('an outsider cannot propose a letterhead version', () => letterhead.proposeVersion(samplePayload({ proposedByUserId: outsider.id })));
    const proposed = await letterhead.proposeVersion(samplePayload({ proposedByUserId: cs.id }));
    if (proposed.status === 'DRAFT' && proposed.workflowInstanceId) {
        ok('proposeVersion creates a DRAFT row, auto-incrementing version, and opens the single-step workflow');
    }
    else {
        fail('proposeVersion did not create the expected row', proposed);
    }
    await expectReject('an outsider cannot approve a letterhead version', () => letterhead.approveVersion({ workflowInstanceId: proposed.workflowInstanceId, approverUserId: outsider.id }));
    await expectReject('the proposer (CS) cannot approve their own proposal (maker != checker, capability-level block)', () => letterhead.approveVersion({ workflowInstanceId: proposed.workflowInstanceId, approverUserId: cs.id }));
    const proposedByBoth = await letterhead.proposeVersion(samplePayload({ proposedByUserId: both.id, companyName: 'Smoke Both-Role Capital Limited' }));
    await expectReject('a dual-role (CS+MD_CEO) user still cannot approve their own proposal (engine-level maker != checker)', () => letterhead.approveVersion({ workflowInstanceId: proposedByBoth.workflowInstanceId, approverUserId: both.id }));
    const activated = await letterhead.approveVersion({ workflowInstanceId: proposed.workflowInstanceId, approverUserId: mdCeo.id });
    if (activated?.status === 'ACTIVE')
        ok('MD_CEO approves the proposal -> ACTIVE');
    else
        fail('approveVersion did not activate as expected', activated);
    const activeContent = await letterhead.getActiveContent();
    if (activeContent?.companyName === 'Smoke Test Capital Limited' && activeContent.addressLine2 === 'Victoria Island, Lagos') {
        ok('getActiveContent() now returns the newly-activated version\'s content');
    }
    else {
        fail('getActiveContent() did not return the expected activated content', activeContent);
    }
    if (productAccount) {
        const pdfAfterActivation = await statements.generateStatementPdf('PRODUCT', productAccount.id, preTemplateInvestor.investorId, new Date(0), new Date());
        if (pdfAfterActivation.byteLength > 0)
            ok('StatementService.generateStatementPdf() still succeeds once a letterhead IS ACTIVE (governed header path exercised, not just the fallback)');
        else
            fail('statement PDF generation produced an empty buffer after activation', pdfAfterActivation.byteLength);
    }
    const secondProposal = await letterhead.proposeVersion(samplePayload({ proposedByUserId: cs.id, companyName: 'Smoke Test Capital Limited V2' }));
    const secondActivated = await letterhead.approveVersion({ workflowInstanceId: secondProposal.workflowInstanceId, approverUserId: mdCeo.id });
    const firstAfterSupersede = await prisma.letterheadTemplate.findUniqueOrThrow({ where: { id: proposed.id } });
    if (secondActivated?.status === 'ACTIVE' && firstAfterSupersede.status === 'SUPERSEDED') {
        ok('activating a new version supersedes the prior global ACTIVE row — never two ACTIVE at once');
    }
    else {
        fail('version supersession did not behave as expected', { secondActivated, firstAfterSupersede });
    }
    const versions = await letterhead.listVersions();
    const activeCount = versions.filter((v) => v.status === 'ACTIVE').length;
    if (activeCount === 1)
        ok('exactly one ACTIVE version exists across the full version history');
    else
        fail(`expected exactly 1 ACTIVE version, found ${activeCount}`, versions.map((v) => ({ version: v.version, status: v.status })));
    if (productAccount)
        await prisma.productAccount.delete({ where: { id: productAccount.id } });
    await prisma.investor.delete({ where: { investorId: preTemplateInvestor.investorId } });
    const workflowInstanceIds = [proposed.workflowInstanceId, proposedByBoth.workflowInstanceId, secondProposal.workflowInstanceId];
    await prisma.letterheadTemplate.deleteMany({ where: { id: { in: [proposed.id, proposedByBoth.id, secondProposal.id] } } });
    await prisma.workflowStepApproval.deleteMany({ where: { workflowInstanceId: { in: workflowInstanceIds } } });
    await prisma.workflowInstance.deleteMany({ where: { id: { in: workflowInstanceIds } } });
    const userIds = [cs.id, mdCeo.id, outsider.id, both.id];
    await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
    await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });
    await prisma.$disconnect();
    if (failed) {
        console.error('\nSMOKE FAILED — see FAIL lines above.');
        process.exitCode = 1;
    }
    else {
        console.log('\nSMOKE OK — corporate letterhead template (invariant 52a) against the real live DB.');
    }
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=letterhead.smoke.js.map