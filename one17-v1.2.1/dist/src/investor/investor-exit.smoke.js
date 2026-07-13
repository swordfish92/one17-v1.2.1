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
const investor_exit_service_1 = require("./investor-exit.service");
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
    const exitService = new investor_exit_service_1.InvestorExitService(prisma, audit, delegation, workflow);
    const bd = await prisma.appUser.create({ data: { email: `ie-bd-${RUN}@one17.test`, displayName: 'ie-bd' } });
    await rbac.assignRole({ userId: bd.id, roleCode: 'BD' });
    const compliance = await prisma.appUser.create({ data: { email: `ie-compliance-${RUN}@one17.test`, displayName: 'ie-compliance' } });
    await rbac.assignRole({ userId: compliance.id, roleCode: 'COMPLIANCE' });
    const outsider = await prisma.appUser.create({ data: { email: `ie-outsider-${RUN}@one17.test`, displayName: 'ie-outsider' } });
    const fundCode = `SMOKE-IE-FUND-${RUN}`;
    await prisma.ledgerEntity.create({ data: { code: fundCode, name: 'Smoke IE Fund', entityType: 'FUND', primaryBasis: 'AAOIFI' } });
    const productCode = `SMOKE-IE-PROD-${RUN}`;
    await prisma.product.create({ data: { code: productCode, name: 'Smoke IE Product', engineType: 'UNIT_NAV' } });
    const investor = await prisma.investor.create({
        data: {
            investorId: `SMOKE-IE-INV-${RUN}`, fullLegalName: 'Smoke Exit Investor', entityType: 'HNWI_INDIVIDUAL',
            nationality: 'NG', contactEmail: `ie-inv-${RUN}@one17.test`, contactPhone: '+2340000000060',
            onboardedByUserId: bd.id, kycStatus: 'KYC_COMPLETE', amlStatus: 'CLEARED', fundStatus: 'ACTIVE', onboardingStage: 'STAGE_2_COMPLETE',
        },
    });
    const account = await prisma.productAccount.create({
        data: { investorId: investor.investorId, productCode, startDate: new Date(), principalOrCommittedKobo: 100000000n, status: 'ACTIVE' },
    });
    await expectReject('outsider cannot propose an investor exit', () => exitService.requestExit({ investorId: investor.investorId, exitType: 'MATURITY_TRANSITION', requestedByUserId: outsider.id }));
    await expectReject('FINAL_EXIT refused while an open product account exists (request-time gate)', () => exitService.requestExit({ investorId: investor.investorId, exitType: 'FINAL_EXIT', requestedByUserId: bd.id }));
    const maturityRequest = await exitService.requestExit({ investorId: investor.investorId, exitType: 'MATURITY_TRANSITION', requestedByUserId: bd.id });
    if (maturityRequest.status === 'PENDING' && maturityRequest.workflowInstanceId)
        ok('MATURITY_TRANSITION request created despite an open product account (no holdings gate on this exit type)');
    else
        fail('MATURITY_TRANSITION request not created as expected', maturityRequest);
    await expectReject('BD cannot approve their own exit request', () => exitService.decideExit(maturityRequest.workflowInstanceId, bd.id, 'APPROVE'));
    const approvedMaturity = await exitService.decideExit(maturityRequest.workflowInstanceId, compliance.id, 'APPROVE');
    const investorAfterMaturity = await prisma.investor.findUniqueOrThrow({ where: { investorId: investor.investorId } });
    if (approvedMaturity.status === 'APPROVED' && investorAfterMaturity.fundStatus === 'MATURED')
        ok('approved MATURITY_TRANSITION flips Investor.fundStatus to MATURED');
    else
        fail('MATURITY_TRANSITION approval did not flip fundStatus as expected', { approvedMaturity, investorAfterMaturity });
    await expectReject('FINAL_EXIT still refused with the open product account, even from MATURED', () => exitService.requestExit({ investorId: investor.investorId, exitType: 'FINAL_EXIT', requestedByUserId: bd.id }));
    await prisma.productAccount.update({ where: { id: account.id }, data: { status: 'MATURED' } });
    const finalExitRequest = await exitService.requestExit({ investorId: investor.investorId, exitType: 'FINAL_EXIT', requestedByUserId: bd.id });
    const approvedFinal = await exitService.decideExit(finalExitRequest.workflowInstanceId, compliance.id, 'APPROVE');
    const investorAfterFinal = await prisma.investor.findUniqueOrThrow({ where: { investorId: investor.investorId } });
    if (approvedFinal.status === 'APPROVED' && investorAfterFinal.fundStatus === 'EXITED')
        ok('FINAL_EXIT succeeds once every holding is off ACTIVE, flips Investor.fundStatus to EXITED');
    else
        fail('FINAL_EXIT did not complete as expected', { approvedFinal, investorAfterFinal });
    await prisma.investor.update({ where: { investorId: investor.investorId }, data: { fundStatus: 'MATURED' } });
    const raceRequest = await exitService.requestExit({ investorId: investor.investorId, exitType: 'FINAL_EXIT', requestedByUserId: bd.id });
    await prisma.productAccount.update({ where: { id: account.id }, data: { status: 'ACTIVE' } });
    await expectReject('decide-time re-check refuses FINAL_EXIT if a holding reopened after the request was submitted (TOCTOU close)', () => exitService.decideExit(raceRequest.workflowInstanceId, compliance.id, 'APPROVE'));
    await prisma.productAccount.update({ where: { id: account.id }, data: { status: 'MATURED' } });
    const dormantInvestor = await prisma.investor.create({
        data: {
            investorId: `SMOKE-IE-DORM-${RUN}`, fullLegalName: 'Smoke Dormancy Investor', entityType: 'HNWI_INDIVIDUAL',
            nationality: 'NG', contactEmail: `ie-dorm-${RUN}@one17.test`, contactPhone: '+2340000000061',
            onboardedByUserId: bd.id, kycStatus: 'KYC_COMPLETE', amlStatus: 'CLEARED', fundStatus: 'ACTIVE', onboardingStage: 'STAGE_2_COMPLETE',
        },
    });
    await prisma.productAccount.create({
        data: { investorId: dormantInvestor.investorId, productCode, startDate: new Date('2020-01-01'), principalOrCommittedKobo: 100000000n, status: 'ACTIVE' },
    });
    const sweepNow = new Date();
    const sweepResult = await exitService.runDormancySweep(sweepNow);
    const dormantAfterSweep = await prisma.investor.findUniqueOrThrow({ where: { investorId: dormantInvestor.investorId } });
    if (sweepResult.markedDormant >= 1 && dormantAfterSweep.fundStatus === 'DORMANT')
        ok('dormancy sweep flips an ACTIVE investor with no in-window transaction to DORMANT');
    else
        fail('dormancy sweep did not mark the stale investor DORMANT as expected', { sweepResult, dormantAfterSweep });
    const investorIds = [investor.investorId, dormantInvestor.investorId];
    await prisma.investorExitRequest.deleteMany({ where: { investorId: { in: investorIds } } });
    const wfIds = [maturityRequest.workflowInstanceId, finalExitRequest.workflowInstanceId, raceRequest.workflowInstanceId].filter((id) => !!id);
    await prisma.workflowStepApproval.deleteMany({ where: { workflowInstanceId: { in: wfIds } } });
    await prisma.workflowInstance.deleteMany({ where: { id: { in: wfIds } } });
    await prisma.productAccount.deleteMany({ where: { investorId: { in: investorIds } } });
    await prisma.investor.deleteMany({ where: { investorId: { in: investorIds } } });
    await prisma.product.delete({ where: { code: productCode } });
    await prisma.ledgerEntity.delete({ where: { code: fundCode } });
    const userIds = [bd.id, compliance.id, outsider.id];
    await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
    await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });
    await prisma.$disconnect();
    if (failed) {
        console.error('\nSMOKE FAILED — see FAIL lines above.');
        process.exitCode = 1;
    }
    else {
        console.log('\nSMOKE OK — investor exit/closure flow (invariant 51b-v) against the real live DB.');
    }
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=investor-exit.smoke.js.map