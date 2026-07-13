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
const parameters_service_1 = require("./parameters.service");
const product_service_1 = require("../product/product.service");
async function expectReject(label, fn) {
    try {
        await fn();
        console.error(`FAIL (expected rejection): ${label}`);
        process.exitCode = 1;
    }
    catch (err) {
        console.log(`OK (rejected as expected): ${label} — ${err.message.split('\n')[0]}`);
    }
}
async function expectSucceed(label, fn) {
    try {
        const result = await fn();
        console.log(`OK (succeeded as expected): ${label}`);
        return result;
    }
    catch (err) {
        console.error(`FAIL (expected success): ${label}`, err);
        process.exitCode = 1;
        return undefined;
    }
}
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const parameters = new parameters_service_1.ParameterService(prisma, audit, delegation);
    const product = new product_service_1.ProductService(prisma, audit, delegation);
    const RUN = Date.now();
    const ceo = await prisma.appUser.create({
        data: { email: `params-ceo-${RUN}@one17.test`, displayName: 'params-ceo' },
    });
    await rbac.assignRole({ userId: ceo.id, roleCode: 'MD_CEO' });
    const admin = await prisma.appUser.create({
        data: { email: `params-admin-${RUN}@one17.test`, displayName: 'params-admin' },
    });
    await rbac.assignRole({ userId: admin.id, roleCode: 'SUPER_ADMIN' });
    const shariahRev = await prisma.appUser.create({
        data: { email: `params-shariahrev-${RUN}@one17.test`, displayName: 'params-shariahrev' },
    });
    await rbac.assignRole({ userId: shariahRev.id, roleCode: 'SHARIAH_REV' });
    const portMgr = await prisma.appUser.create({
        data: { email: `params-portmgr-${RUN}@one17.test`, displayName: 'params-portmgr' },
    });
    await rbac.assignRole({ userId: portMgr.id, roleCode: 'PORT_MGR' });
    const productCode = `SMOKE-MUDARABAH-POOL-1-${RUN}`;
    await expectReject('CEO alone (no PRODUCT_SETUP_INITIATION INITIATE) cannot create a product', () => parameters.createProduct({
        code: productCode,
        name: 'Smoke Test Mudarabah Pool',
        engineType: 'PSR_WATERFALL',
        createdByUserId: ceo.id,
    }));
    await expectSucceed('PORT_MGR (holds PRODUCT_SETUP_INITIATION INITIATE) creates MUDARABAH_POOL product', () => parameters.createProduct({
        code: productCode,
        name: 'Smoke Test Mudarabah Pool',
        engineType: 'PSR_WATERFALL',
        createdByUserId: portMgr.id,
    }));
    const v1 = await expectSucceed('set pool constants (60:40 base, 40:60 surplus, fees blocked)', () => parameters.setPoolParameters({
        productCode,
        createdByUserId: admin.id,
        approvedByUserId: ceo.id,
        psrPoolMudaribShare: 0.4,
        surplusInvestorShare: 0.4,
        surplusMudaribShare: 0.6,
    }));
    if (v1 && v1.feesAllowedOnPool !== false) {
        console.error('FAIL: feesAllowedOnPool should default to false (AMD-03 current position)');
        process.exitCode = 1;
    }
    else {
        console.log('OK: feesAllowedOnPool defaults to false');
    }
    await expectReject('service rejects psrPoolMudaribShare outside (0,1)', () => parameters.setPoolParameters({
        productCode,
        createdByUserId: admin.id,
        psrPoolMudaribShare: 1.5,
    }));
    await expectReject('service rejects surplus shares not summing to 1.0', () => parameters.setPoolParameters({
        productCode,
        createdByUserId: admin.id,
        surplusInvestorShare: 0.5,
        surplusMudaribShare: 0.6,
    }));
    await expectReject('database CHECK constraint rejects invalid psr share (service bypassed)', () => prisma.productParameters.create({
        data: {
            productCode,
            version: 999,
            psrPoolMudaribShare: 1.2,
            createdByUserId: admin.id,
        },
    }));
    await expectReject('database CHECK constraint rejects mismatched surplus sum (service bypassed)', () => prisma.productParameters.create({
        data: {
            productCode,
            version: 998,
            surplusInvestorShare: 0.5,
            surplusMudaribShare: 0.6,
            createdByUserId: admin.id,
        },
    }));
    const v2 = await expectSucceed('new parameter VERSION flips feesAllowedOnPool to true (simulated future SEC change)', () => parameters.setPoolParameters({
        productCode,
        createdByUserId: admin.id,
        approvedByUserId: ceo.id,
        psrPoolMudaribShare: 0.4,
        surplusInvestorShare: 0.4,
        surplusMudaribShare: 0.6,
        feesAllowedOnPool: true,
    }));
    const current = await parameters.getCurrentParameters(productCode);
    if (current &&
        current.version === v2?.version &&
        current.feesAllowedOnPool === true) {
        console.log(`OK: current parameters are version ${current.version} with feesAllowedOnPool=true`);
    }
    else {
        console.error('FAIL: getCurrentParameters did not return the latest version with the new fee policy');
        process.exitCode = 1;
    }
    const history = await prisma.productParameters.findMany({
        where: { productCode },
        orderBy: { version: 'asc' },
    });
    if (history.length === 2 &&
        history[0].feesAllowedOnPool === false &&
        history[1].feesAllowedOnPool === true) {
        console.log('OK: version history preserved — v1 (fees blocked) is still on record alongside v2 (fees allowed)');
    }
    else {
        console.error('FAIL: expected exactly 2 versions with the fee-policy change visible in history');
        process.exitCode = 1;
    }
    await prisma.product.update({
        where: { code: productCode },
        data: { status: 'ACTIVE' },
    });
    await expectReject('fee-flip on an ACTIVE product without Board/SSB refs fails', () => parameters.setPoolParameters({
        productCode,
        createdByUserId: admin.id,
        psrPoolMudaribShare: 0.4,
        surplusInvestorShare: 0.4,
        surplusMudaribShare: 0.6,
        feesAllowedOnPool: false,
    }));
    await expectReject('PSR-constant change on an ACTIVE product without Board/SSB refs fails', () => parameters.setPoolParameters({
        productCode,
        createdByUserId: admin.id,
        psrPoolMudaribShare: 0.35,
        surplusInvestorShare: 0.4,
        surplusMudaribShare: 0.6,
        feesAllowedOnPool: true,
    }));
    await expectReject('same fee-flip fails with only ONE of the two refs populated', () => parameters.setPoolParameters({
        productCode,
        createdByUserId: admin.id,
        psrPoolMudaribShare: 0.4,
        surplusInvestorShare: 0.4,
        surplusMudaribShare: 0.6,
        feesAllowedOnPool: false,
        boardResolutionRef: 'BOARD-RES-2026-021',
    }));
    const v3 = await expectSucceed('same fee-flip succeeds once BOTH refs are populated', () => parameters.setPoolParameters({
        productCode,
        createdByUserId: admin.id,
        approvedByUserId: ceo.id,
        psrPoolMudaribShare: 0.4,
        surplusInvestorShare: 0.4,
        surplusMudaribShare: 0.6,
        feesAllowedOnPool: false,
        boardResolutionRef: 'BOARD-RES-2026-021',
        ssbResolutionRef: 'SSB-RES-2026-009',
    }));
    if (v3 &&
        v3.version === 3 &&
        v3.feesAllowedOnPool === false &&
        v3.boardResolutionRef &&
        v3.ssbResolutionRef) {
        console.log('OK: version 3 recorded with both governance refs populated');
    }
    else {
        console.error('FAIL: version 3 did not persist as expected with governance refs');
        process.exitCode = 1;
    }
    await expectSucceed('unchanged resubmission on an ACTIVE product does not require refs', () => parameters.setPoolParameters({
        productCode,
        createdByUserId: admin.id,
        psrPoolMudaribShare: 0.4,
        surplusInvestorShare: 0.4,
        surplusMudaribShare: 0.6,
        feesAllowedOnPool: false,
    }));
    const v4 = await expectSucceed('fee accrual on the pool is permitted once BOTH refs back the flip to true', () => parameters.setPoolParameters({
        productCode,
        createdByUserId: admin.id,
        approvedByUserId: ceo.id,
        psrPoolMudaribShare: 0.4,
        surplusInvestorShare: 0.4,
        surplusMudaribShare: 0.6,
        feesAllowedOnPool: true,
        boardResolutionRef: 'BOARD-RES-2026-022',
        ssbResolutionRef: 'SSB-RES-2026-010',
    }));
    if (v4?.feesAllowedOnPool === true && v4.effectiveFrom) {
        console.log(`OK: version ${v4.version} is effective-dated (${v4.effectiveFrom.toISOString()}) with feesAllowedOnPool=true — fee accrual now permitted on this pool`);
    }
    else {
        console.error('FAIL: expected a governed version with feesAllowedOnPool=true and a populated effectiveFrom');
        process.exitCode = 1;
    }
    const productCode2 = `SMOKE-MUDARABAH-POOL-2-${RUN}`;
    await parameters.createProduct({
        code: productCode2,
        name: 'Smoke Test Mudarabah Pool 2 (activation gate)',
        engineType: 'PSR_WATERFALL',
        createdByUserId: portMgr.id,
    });
    await expectReject('AMD-12: activation refused for a product with zero parameter versions, naming what is missing', () => parameters.activateProduct(productCode2, ceo.id));
    await parameters.setPoolParameters({
        productCode: productCode2,
        createdByUserId: admin.id,
        psrPoolMudaribShare: 0.4,
        surplusInvestorShare: 0.4,
        surplusMudaribShare: 0.6,
    });
    await expectReject('AMD-12: activation refused while the current parameter version is unapproved', () => parameters.activateProduct(productCode2, ceo.id));
    await parameters.setPoolParameters({
        productCode: productCode2,
        createdByUserId: admin.id,
        approvedByUserId: ceo.id,
        psrPoolMudaribShare: 0.4,
        surplusInvestorShare: 0.4,
        surplusMudaribShare: 0.6,
    });
    await expectReject('AMD-12/invariant 44(b): activation still refused -- governed parameters alone do not satisfy the Shariah-approval gate', () => parameters.activateProduct(productCode2, ceo.id));
    await product.approveProductShariah({
        productCode: productCode2,
        ssbResolutionRef: 'SMOKE-PARAMS-SSB-RES',
        approvedByUserId: shariahRev.id,
    });
    await expectSucceed('AMD-12/invariant 44(b): activation succeeds once parameters exist, are approved, PSR constants are populated, AND Shariah approval is on file', () => parameters.activateProduct(productCode2, ceo.id));
    await prisma.productParameters.deleteMany({ where: { productCode } });
    await prisma.product.delete({ where: { code: productCode } });
    await prisma.productParameters.deleteMany({
        where: { productCode: productCode2 },
    });
    await prisma.product.delete({ where: { code: productCode2 } });
    await prisma.userRole.deleteMany({
        where: { userId: { in: [ceo.id, admin.id, shariahRev.id, portMgr.id] } },
    });
    await prisma.appUser.deleteMany({
        where: { id: { in: [ceo.id, admin.id, shariahRev.id, portMgr.id] } },
    });
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=parameters.smoke.js.map