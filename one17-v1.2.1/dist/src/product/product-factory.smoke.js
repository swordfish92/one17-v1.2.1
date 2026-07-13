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
const ledger_service_1 = require("../ledger/ledger.service");
const parameters_service_1 = require("../parameters/parameters.service");
const product_service_1 = require("./product.service");
const product_factory_service_1 = require("./product-factory.service");
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
    const authService = new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit));
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, authService);
    const ledger = new ledger_service_1.LedgerService(prisma, audit, delegation, workflow);
    const parameters = new parameters_service_1.ParameterService(prisma, audit, delegation);
    const product = new product_service_1.ProductService(prisma, audit, delegation);
    const factory = new product_factory_service_1.ProductFactoryService(prisma, audit, parameters, ledger, workflow);
    const portMgrA = await prisma.appUser.create({ data: { email: `pf-portmgr-a-${RUN}@one17.test`, displayName: 'pf-portmgr-a' } });
    await rbac.assignRole({ userId: portMgrA.id, roleCode: 'PORT_MGR' });
    const cio = await prisma.appUser.create({ data: { email: `pf-cio-${RUN}@one17.test`, displayName: 'pf-cio' } });
    await rbac.assignRole({ userId: cio.id, roleCode: 'CIO' });
    const mdCeo = await prisma.appUser.create({ data: { email: `pf-mdceo-${RUN}@one17.test`, displayName: 'pf-mdceo' } });
    await rbac.assignRole({ userId: mdCeo.id, roleCode: 'MD_CEO' });
    const shariahRev = await prisma.appUser.create({ data: { email: `pf-shariahrev-${RUN}@one17.test`, displayName: 'pf-shariahrev' } });
    await rbac.assignRole({ userId: shariahRev.id, roleCode: 'SHARIAH_REV' });
    const outsider = await prisma.appUser.create({ data: { email: `pf-outsider-${RUN}@one17.test`, displayName: 'pf-outsider' } });
    const superAdmin = await prisma.appUser.create({ data: { email: `pf-superadmin-${RUN}@one17.test`, displayName: 'pf-superadmin' } });
    await rbac.assignRole({ userId: superAdmin.id, roleCode: 'SUPER_ADMIN' });
    const FUND_CODE = `SMOKE-PF-FUND-${RUN}`;
    const POOL_CODE = `SMOKE-PF-POOL-${RUN}`;
    const MANDATE_CODE = `SMOKE-PF-MANDATE-${RUN}`;
    await expectReject('outsider (no PRODUCT_SETUP_INITIATION INITIATE) cannot initiate a product setup', () => factory.initiateProductSetup({ code: FUND_CODE, name: 'Smoke PF Fund', engineType: 'UNIT_NAV', initiatedByUserId: outsider.id }));
    await expectReject('SUPER_ADMIN (register-cleanliness: no longer holds PRODUCT_SETUP_INITIATION) cannot initiate a product setup', () => factory.initiateProductSetup({ code: FUND_CODE, name: 'Smoke PF Fund', engineType: 'UNIT_NAV', initiatedByUserId: superAdmin.id }));
    const { product: fundProduct, workflowInstance: fundWf } = await factory.initiateProductSetup({
        code: FUND_CODE, name: 'Smoke PF Fund', engineType: 'UNIT_NAV', initiatedByUserId: portMgrA.id,
    });
    const fundProductReread = await prisma.product.findUniqueOrThrow({ where: { code: fundProduct.code } });
    if (fundProductReread.status === 'DRAFT' && fundProductReread.setupWorkflowInstanceId === fundWf.id) {
        ok('initiateProductSetup (PORT_MGR) creates DRAFT product with setupWorkflowInstanceId linked to the workflow instance');
    }
    else {
        fail('initiateProductSetup did not link product<->workflow instance as expected', fundProductReread);
    }
    await expectReject('PORT_MGR A cannot review their own PRODUCT_SETUP (maker != checker)', () => factory.approveProductSetupByCode(FUND_CODE, portMgrA.id));
    await expectReject('MD_CEO cannot approve before the CIO review step (step order enforced)', () => factory.approveProductSetupByCode(FUND_CODE, mdCeo.id));
    const afterCioReview = await factory.approveProductSetupByCode(FUND_CODE, cio.id);
    if (afterCioReview.status !== 'APPROVED' && afterCioReview.ledgerEntity === null) {
        ok('CIO review (step 1) advances the chain but does NOT yet provision the ledger entity -- MD_CEO approval still pending');
    }
    else {
        fail('CIO review unexpectedly reached APPROVED / provisioned early', afterCioReview);
    }
    await expectReject('CIO lacks PRODUCT_SETUP_APPROVAL -- cannot supply the final MD_CEO-tier approval', () => factory.approveProductSetupByCode(FUND_CODE, cio.id));
    const approved = await factory.approveProductSetupByCode(FUND_CODE, mdCeo.id);
    if (approved.status === 'APPROVED' && approved.ledgerEntity?.code === `${FUND_CODE}-01`) {
        ok(`MD_CEO final approval -> APPROVED, ledger entity ${approved.ledgerEntity.code} auto-provisioned (three-step chain complete)`);
    }
    else {
        fail('approveProductSetup did not reach APPROVED + provision the ledger entity as expected', approved);
    }
    const fundCoa = await prisma.chartOfAccount.findMany({ where: { ledgerEntityCode: `${FUND_CODE}-01` } });
    if (fundCoa.length === 12 && fundCoa.some((a) => a.accountCode === '1110')) {
        ok(`fund CoA template loaded (${fundCoa.length} accounts, includes 1110 Investment Account per invariant 44a fund vocabulary)`);
    }
    else {
        fail(`expected 12 fund CoA accounts including 1110, got ${fundCoa.length}`, fundCoa.map((a) => a.accountCode));
    }
    await expectReject('re-approving an already-provisioned product setup is refused', () => factory.approveProductSetupByCode(FUND_CODE, mdCeo.id));
    await expectReject('activateProduct refuses a fund with neither governed parameters nor Shariah approval', () => parameters.activateProduct(FUND_CODE, mdCeo.id));
    await product.approveProductShariah({ productCode: FUND_CODE, ssbResolutionRef: `SMOKE-SSB-RES-${RUN}`, approvedByUserId: shariahRev.id });
    await expectReject('activateProduct still refuses -- Shariah approval alone does not satisfy the governed-parameters gate', () => parameters.activateProduct(FUND_CODE, mdCeo.id));
    await parameters.setPoolParameters({
        productCode: FUND_CODE, psrPoolMudaribShare: 0.3, surplusInvestorShare: 0.6, surplusMudaribShare: 0.4,
        createdByUserId: superAdmin.id, approvedByUserId: mdCeo.id,
    });
    const activated = await parameters.activateProduct(FUND_CODE, mdCeo.id);
    if (activated.status === 'ACTIVE') {
        ok('activateProduct succeeds once BOTH governed parameters AND Shariah approval are on file');
    }
    else {
        fail('activateProduct did not flip to ACTIVE', activated);
    }
    const reread = await prisma.product.findUniqueOrThrow({ where: { code: FUND_CODE } });
    if (reread.engineType === 'UNIT_NAV') {
        ok('product engineType unchanged (UNIT_NAV) after the full create->review->approve->Shariah->activate chain -- structurally immutable (no code path updates it)');
    }
    else {
        fail('product engineType changed unexpectedly', reread);
    }
    await factory.initiateProductSetup({ code: POOL_CODE, name: 'Smoke PF Pool', engineType: 'PSR_WATERFALL', initiatedByUserId: portMgrA.id });
    await factory.approveProductSetupByCode(POOL_CODE, cio.id);
    await factory.approveProductSetupByCode(POOL_CODE, mdCeo.id);
    const poolCoa = await prisma.chartOfAccount.findMany({ where: { ledgerEntityCode: `${POOL_CODE}-01` } });
    if (poolCoa.length === 11 && !poolCoa.some((a) => a.accountCode === '1110')) {
        ok(`pool CoA template loaded (${poolCoa.length} accounts, correctly OMITS 1110 Investment Account -- invariant 44a pool vocabulary)`);
    }
    else {
        fail(`expected 11 pool CoA accounts excluding 1110, got ${poolCoa.length}`, poolCoa.map((a) => a.accountCode));
    }
    const poolLedgerEntity = await prisma.ledgerEntity.findUniqueOrThrow({ where: { code: `${POOL_CODE}-01` } });
    if (poolLedgerEntity.entityType === 'POOL' && poolLedgerEntity.primaryBasis === 'AAOIFI') {
        ok('PSR_WATERFALL product auto-provisions a POOL-type ledger entity on AAOIFI basis (AMD-11.2)');
    }
    else {
        fail('pool ledger entity has wrong entityType/primaryBasis', poolLedgerEntity);
    }
    await factory.initiateProductSetup({ code: MANDATE_CODE, name: 'Smoke PF Mandate', engineType: 'MANDATE', initiatedByUserId: portMgrA.id });
    await factory.approveProductSetupByCode(MANDATE_CODE, cio.id);
    const mandateApproved = await factory.approveProductSetupByCode(MANDATE_CODE, mdCeo.id);
    if (mandateApproved.status === 'APPROVED' && mandateApproved.ledgerEntity?.code === `${MANDATE_CODE}-01`) {
        ok(`invariant 60(c): MANDATE product setup reaches APPROVED and auto-provisions ledger entity ${mandateApproved.ledgerEntity.code} -- the "MANDATE is the pre-existing engine's territory" exclusion is closed`);
    }
    else {
        fail('MANDATE product setup did not reach APPROVED + provision as expected', mandateApproved);
    }
    const mandateLedgerEntity = await prisma.ledgerEntity.findUniqueOrThrow({ where: { code: `${MANDATE_CODE}-01` } });
    if (mandateLedgerEntity.entityType === 'MANDATE') {
        ok('MANDATE product auto-provisions a MANDATE-type ledger entity (LedgerEntityType.MANDATE)');
    }
    else {
        fail('mandate ledger entity has wrong entityType', mandateLedgerEntity);
    }
    const mandateCoa = await prisma.chartOfAccount.findMany({ where: { ledgerEntityCode: `${MANDATE_CODE}-01` } });
    if (mandateCoa.length === 11 && !mandateCoa.some((a) => a.accountCode === '1110')) {
        ok(`MANDATE CoA template loaded (${mandateCoa.length} accounts, correctly OMITS 1110 -- reuses the POOL vocabulary since a mandate is a participation, not a unit-NAV instrument)`);
    }
    else {
        fail(`expected 11 mandate CoA accounts excluding 1110, got ${mandateCoa.length}`, mandateCoa.map((a) => a.accountCode));
    }
    await expectReject('approveProductSetupByCode on an already-provisioned product names the gap', () => factory.approveProductSetupByCode(FUND_CODE, mdCeo.id));
    const allCodes = [FUND_CODE, POOL_CODE, MANDATE_CODE];
    const allLedgerCodes = allCodes.map((c) => `${c}-01`);
    await prisma.chartOfAccount.deleteMany({ where: { ledgerEntityCode: { in: allLedgerCodes } } });
    await prisma.ledgerEntity.deleteMany({ where: { code: { in: allLedgerCodes } } });
    await prisma.productParameters.deleteMany({ where: { productCode: { in: allCodes } } });
    await prisma.product.updateMany({ where: { code: { in: allCodes } }, data: { setupWorkflowInstanceId: null } });
    await prisma.product.deleteMany({ where: { code: { in: allCodes } } });
    const setupWfInstances = await prisma.workflowInstance.findMany({ where: { entityType: 'product_setup', entityId: { in: allCodes } } });
    const setupWfIds = setupWfInstances.map((w) => w.id);
    await prisma.workflowStepApproval.deleteMany({ where: { workflowInstanceId: { in: setupWfIds } } });
    await prisma.workflowInstance.deleteMany({ where: { id: { in: setupWfIds } } });
    const userIds = [portMgrA.id, cio.id, mdCeo.id, shariahRev.id, outsider.id, superAdmin.id];
    await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
    await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });
    await prisma.$disconnect();
    if (failed) {
        console.error('\nSMOKE FAILED — see FAIL lines above.');
        process.exitCode = 1;
    }
    else {
        console.log('\nSMOKE OK — product factory (invariant 44b, 60b/c) against the real live DB.');
    }
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=product-factory.smoke.js.map