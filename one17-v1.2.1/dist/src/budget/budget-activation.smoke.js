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
const budget_activation_service_1 = require("./budget-activation.service");
const kri_engine_service_1 = require("../kri-engine/kri-engine.service");
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
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const activation = new budget_activation_service_1.BudgetActivationService(prisma, audit, delegation, workflow);
    const kriEngine = new kri_engine_service_1.KriEngineService(prisma, audit);
    const finAdminEmail = `budgetact-finadmin-${RUN}@one17.test`;
    let finAdmin = await prisma.appUser.findUnique({ where: { email: finAdminEmail } });
    if (!finAdmin) {
        finAdmin = await prisma.appUser.create({ data: { email: finAdminEmail, displayName: finAdminEmail } });
        await rbac.assignRole({ userId: finAdmin.id, roleCode: 'FIN_ADMIN' });
    }
    const ceoEmail = `budgetact-ceo-${RUN}@one17.test`;
    let ceo = await prisma.appUser.findUnique({ where: { email: ceoEmail } });
    if (!ceo) {
        ceo = await prisma.appUser.create({ data: { email: ceoEmail, displayName: ceoEmail } });
        await rbac.assignRole({ userId: ceo.id, roleCode: 'MD_CEO' });
    }
    const sauEmail = `budgetact-sau-${RUN}@one17.test`;
    let sau = await prisma.appUser.findUnique({ where: { email: sauEmail } });
    if (!sau) {
        sau = await prisma.appUser.create({ data: { email: sauEmail, displayName: sauEmail } });
        await rbac.assignRole({ userId: sau.id, roleCode: 'SAU_INTERNAL_CONTROL' });
    }
    const fiscalYear = 9000 + (RUN % 90_000);
    const company = await prisma.ledgerEntity.findFirstOrThrow({ where: { entityType: 'COMPANY' } });
    const version = await prisma.budgetVersion.upsert({
        where: { fiscalYear_scenarioLabel: { fiscalYear, scenarioLabel: `Activation Smoke ${RUN}` } },
        create: { fiscalYear, scenarioLabel: `Activation Smoke ${RUN}`, status: 'BOARD_APPROVED', proposedByUserId: finAdmin.id },
        update: {},
    });
    const line = await prisma.budgetLine.create({
        data: {
            budgetVersionId: version.id,
            ledgerEntityCode: company.code,
            budgetLineGroup: 'Opex',
            lineDescription: `Smoke Test Opex Line ${RUN}`,
            class: 'OPEX',
            phasingMethod: 'EVEN_12',
            sourceSheetRef: 'smoke-test',
            monthlyAmounts: { create: Array.from({ length: 12 }, (_, i) => ({ month: i + 1, amountKobo: 1000000n })) },
        },
    });
    const readingDate = new Date(fiscalYear, 5, 15);
    const preBatch = await kriEngine.runDailyBatch(readingDate);
    const bz01Pre = await prisma.kriReading.findFirst({ where: { kriCode: 'BZ-01', readingDate, isAggregate: true } });
    const bz05Pre = await prisma.kriReading.findFirst({ where: { kriCode: 'BZ-05', readingDate, isAggregate: true } });
    if (bz01Pre?.ragStatus === 'NOT_INSTRUMENTED' && bz01Pre.value === null && bz05Pre?.ragStatus === 'NOT_INSTRUMENTED') {
        ok(`F-BZ-01/BZ-05 KRIs correctly report NOT_INSTRUMENTED ("NO APPROVED BUDGET") for fiscalYear ${fiscalYear} before activation (${preBatch.computed} readings computed this batch)`);
    }
    else {
        fail('expected BZ-01/BZ-05 to report NOT_INSTRUMENTED before activation', { bz01Pre, bz05Pre });
    }
    try {
        await activation.requestEncumbrance(line.id, 500000n, 'Pre-activation spend attempt', finAdmin.id);
        fail('expected encumbrance request to be blocked before budget activation');
    }
    catch (err) {
        ok(`Encumbrance correctly blocked pre-activation: ${err.message}`);
    }
    try {
        await activation.requestActivation(version.id, '', finAdmin.id);
        fail('expected activation request without boardResolutionRef to be rejected');
    }
    catch (err) {
        ok(`Activation request correctly requires boardResolutionRef: ${err.message}`);
    }
    const activationWf = await activation.requestActivation(version.id, `BOARD-RES-${RUN}`, finAdmin.id);
    try {
        await activation.approveActivation(activationWf.id, finAdmin.id);
        fail('expected self-approval of budget activation to be rejected');
    }
    catch (err) {
        ok(`Self-approval of budget activation correctly rejected: ${err.message}`);
    }
    await activation.approveActivation(activationWf.id, ceo.id);
    const activated = await prisma.budgetVersion.findUniqueOrThrow({ where: { id: version.id } });
    if (activated.status === 'ACTIVE' && activated.boardResolutionRef === `BOARD-RES-${RUN}`) {
        ok(`Budget version flipped BOARD_APPROVED -> ACTIVE by a DIFFERENT approver (MD_CEO), boardResolutionRef persisted`);
    }
    else {
        fail('budget version did not activate correctly', activated);
    }
    await kriEngine.runDailyBatch(readingDate);
    const bz05Post = await prisma.kriReading.findFirst({ where: { kriCode: 'BZ-05', readingDate, isAggregate: true } });
    if (bz05Post?.detail?.fixedCostsKobo === '12000000') {
        ok(`F-BZ-05 Breakeven AUM now reads fixedCostsKobo=12,000,000 from the newly-ACTIVE budget line — the "closing the dangling reference" gate proven live (final ratio stays null here since this isolated fixture has zero actual revenue, correctly not fabricated)`);
    }
    else {
        fail('F-BZ-05 did not pick up the newly-activated budget line', bz05Post);
    }
    const version2 = await prisma.budgetVersion.create({ data: { fiscalYear, scenarioLabel: `Activation Smoke B ${RUN}`, status: 'BOARD_APPROVED', proposedByUserId: finAdmin.id } });
    try {
        await activation.requestActivation(version2.id, `BOARD-RES-B-${RUN}`, finAdmin.id);
        fail('expected a second concurrent ACTIVE version for the same fiscal year to be rejected');
    }
    catch (err) {
        ok(`Second concurrent ACTIVE version for the same fiscal year correctly rejected: ${err.message}`);
    }
    const { encumbrance: enc1, workflowInstance: encWf1 } = await activation.requestEncumbrance(line.id, 5000000n, 'Within-budget spend', finAdmin.id);
    ok(`Encumbrance within budget accepted post-activation: ${enc1.amountKobo} kobo (available was 12,000,000)`);
    try {
        await activation.requestEncumbrance(line.id, 8000000n, 'Over-budget spend attempt', finAdmin.id);
        fail('expected an over-budget encumbrance request to be rejected (5m already encumbered + 8m > 12m FY budget)');
    }
    catch (err) {
        ok(`System budget check correctly rejects over-budget request: ${err.message}`);
    }
    try {
        await workflow.approveNextStep(encWf1.id, ceo.id);
        fail('expected CEO to be ineligible for step 1 (BUDGET_CONTROL_REVIEW is the SAU Internal Control capability, not BUDGET_MANAGEMENT)');
    }
    catch (err) {
        ok(`CEO correctly ineligible for step 1 (SAU Internal Control review): ${err.message}`);
    }
    await workflow.approveNextStep(encWf1.id, sau.id);
    ok('SAU Internal Control successfully completes step 1 (budget/SOP conformity review)');
    const afterSau = await prisma.workflowInstance.findUniqueOrThrow({ where: { id: encWf1.id } });
    if (afterSau.status === 'PENDING_APPROVAL')
        ok('Requisition still PENDING_APPROVAL after SAU step — CEO step 2 required next');
    else
        fail(`expected PENDING_APPROVAL after step 1, got ${afterSau.status}`);
    const afterCeo = await workflow.approveNextStep(encWf1.id, ceo.id);
    if (afterCeo.status === 'APPROVED')
        ok('CEO approval (step 2, amount-tiered per DoA) completes the requisition');
    else
        fail(`expected APPROVED after CEO step, got ${afterCeo.status}`);
    console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — budget-core activation wiring proven against the real live DB.`);
    process.exitCode = failed ? 1 : 0;
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=budget-activation.smoke.js.map