"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const letter_service_1 = require("../letter/letter.service");
const letterhead_service_1 = require("../letterhead/letterhead.service");
const tax_service_1 = require("./tax.service");
const RUN = Date.now();
let failed = false;
function ok(label) { console.log(`OK: ${label}`); }
function fail(label, detail) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const letterhead = new letterhead_service_1.LetterheadService(prisma, audit, delegation, workflow);
    const letter = new letter_service_1.LetterService(prisma, audit, delegation, workflow, letterhead);
    const tax = new tax_service_1.TaxService(prisma, audit, delegation, workflow, letter);
    const finAdmin = await prisma.appUser.create({ data: { email: `tax-smoke-fin-${RUN}@one17.test`, displayName: 'tax-smoke-fin' } });
    await prisma.userRole.create({ data: { userId: finAdmin.id, roleCode: 'FIN_ADMIN' } });
    const mdCeo = await prisma.appUser.create({ data: { email: `tax-smoke-ceo-${RUN}@one17.test`, displayName: 'tax-smoke-ceo' } });
    await prisma.userRole.create({ data: { userId: mdCeo.id, roleCode: 'MD_CEO' } });
    const investor = await prisma.investor.findFirst({ where: { entityType: 'HNWI_INDIVIDUAL' } });
    if (!investor) {
        fail('fixture: no HNWI_INDIVIDUAL investor found in DB — cannot run adversarial set');
        await prisma.onModuleDestroy();
        process.exit(1);
    }
    const uniqueTaxType = 'WHT';
    const janDate = new Date('2026-01-15');
    const v1 = await tax.proposeRateVersion({
        taxType: uniqueTaxType,
        rates: [{ category: 'INDIVIDUAL', incomeType: 'ADVERSARIAL_SMOKE_INCOME', ratePct: 5 }],
        effectiveFrom: new Date('2026-01-01'),
        proposedByUserId: finAdmin.id,
    });
    const v1Approved = await tax.approveRateVersion({ workflowInstanceId: v1.workflowInstanceId, approverUserId: mdCeo.id });
    if (v1Approved?.status === 'ACTIVE')
        ok('adversarial 1a: v1 (5%, eff 2026-01-01) approved ACTIVE');
    else
        fail('adversarial 1a: v1 did not become ACTIVE', v1Approved);
    const janCompute = await tax.computeWht({ investorId: investor.investorId, incomeType: 'ADVERSARIAL_SMOKE_INCOME', grossKobo: 10000n, transactionDate: janDate });
    if (janCompute.configured && janCompute.whtKobo === 500n)
        ok(`adversarial 1b: Jan transaction computes at v1's 5% (${janCompute.whtKobo} kobo)`);
    else
        fail('adversarial 1b: Jan transaction did not compute at v1 rate', janCompute);
    const v2 = await tax.proposeRateVersion({
        taxType: uniqueTaxType,
        rates: [{ category: 'INDIVIDUAL', incomeType: 'ADVERSARIAL_SMOKE_INCOME', ratePct: 15 }],
        effectiveFrom: new Date('2026-06-01'),
        proposedByUserId: finAdmin.id,
    });
    const v2Approved = await tax.approveRateVersion({ workflowInstanceId: v2.workflowInstanceId, approverUserId: mdCeo.id });
    if (v2Approved?.status === 'ACTIVE')
        ok('adversarial 1c: v2 (15%, eff 2026-06-01) approved ACTIVE, supersedes v1');
    else
        fail('adversarial 1c: v2 did not become ACTIVE', v2Approved);
    const v1AfterSupersession = await prisma.taxRateVersion.findUniqueOrThrow({ where: { id: v1.id } });
    if (v1AfterSupersession.status === 'SUPERSEDED')
        ok('adversarial 1d: v1 correctly flipped to SUPERSEDED (never deleted)');
    else
        fail('adversarial 1d: v1 status wrong after v2 approval', v1AfterSupersession.status);
    const janComputeAfter = await tax.computeWht({ investorId: investor.investorId, incomeType: 'ADVERSARIAL_SMOKE_INCOME', grossKobo: 10000n, transactionDate: janDate });
    if (janComputeAfter.configured && janComputeAfter.whtKobo === 500n)
        ok(`adversarial 1e (THE ADVERSARIAL PROOF): Jan transaction STILL computes at v1's 5% (${janComputeAfter.whtKobo} kobo) after v2 approval -- never retroactive`);
    else
        fail('adversarial 1e: Jan transaction computation changed after v2 approval — RETROACTIVE BUG', janComputeAfter);
    const juneCompute = await tax.computeWht({ investorId: investor.investorId, incomeType: 'ADVERSARIAL_SMOKE_INCOME', grossKobo: 10000n, transactionDate: new Date('2026-06-15') });
    if (juneCompute.configured && juneCompute.whtKobo === 1500n)
        ok(`adversarial 1f: June transaction (after v2's effectiveFrom) correctly computes at v2's 15% (${juneCompute.whtKobo} kobo)`);
    else
        fail('adversarial 1f: June transaction did not compute at v2 rate', juneCompute);
    await tax.grantExemption({ investorId: investor.investorId, taxType: uniqueTaxType, reason: 'ADVERSARIAL_SMOKE exemption', grantedByUserId: finAdmin.id });
    const exemptCompute = await tax.computeWht({ investorId: investor.investorId, incomeType: 'ADVERSARIAL_SMOKE_INCOME', grossKobo: 10000n, transactionDate: new Date('2026-06-15') });
    if (exemptCompute.exempt && exemptCompute.whtKobo === 0n && exemptCompute.netKobo === 10000n)
        ok('adversarial 2: exempt investor computes whtKobo=0, netKobo=gross -- never deducted despite an ACTIVE 15% rate covering the date');
    else
        fail('adversarial 2: exempt investor was still deducted', exemptCompute);
    await tax.revokeExemption(investor.investorId, uniqueTaxType, finAdmin.id);
    try {
        await tax.computeVat({ serviceOrFeeType: `ADVERSARIAL_SMOKE_UNCONFIGURED_${RUN}`, amountKobo: 10000n, transactionDate: new Date() });
        fail('adversarial 3a: computeVat did not refuse for an unconfigured service/fee type');
    }
    catch (err) {
        ok(`adversarial 3a: computeVat refuses honestly when unconfigured -- ${err.message.split('\n')[0]}`);
    }
    const noConfigCompute = await tax.computeWht({ investorId: investor.investorId, incomeType: `ADVERSARIAL_SMOKE_NO_VERSION_${RUN}`, grossKobo: 10000n, transactionDate: new Date() });
    if (!noConfigCompute.configured && noConfigCompute.whtKobo === 0n && noConfigCompute.netKobo === 10000n)
        ok('adversarial 3b: unconfigured WHT income type degrades to visible zero (configured:false) rather than fabricating or blocking');
    else
        fail('adversarial 3b: unconfigured WHT did not degrade honestly', noConfigCompute);
    console.log(failed ? '\nADVERSARIAL SET: FAILURES FOUND' : '\nADVERSARIAL SET OK — invariant 65(c)(iv) proven live against the real DB.');
    await prisma.onModuleDestroy();
    process.exit(failed ? 1 : 0);
}
main().catch((e) => { console.error(e); process.exit(1); });
//# sourceMappingURL=tax-adversarial.smoke.js.map