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
const budget_review_pack_service_1 = require("./budget-review-pack.service");
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
    const svc = new budget_review_pack_service_1.BudgetReviewPackService(prisma, audit, delegation, workflow);
    const finadmin = await prisma.appUser.create({ data: { email: `brp-finadmin-${RUN}@one17.test`, displayName: 'brp-finadmin' } });
    await rbac.assignRole({ userId: finadmin.id, roleCode: 'FIN_ADMIN' });
    const ceo = await prisma.appUser.create({ data: { email: `brp-ceo-${RUN}@one17.test`, displayName: 'brp-ceo' } });
    await rbac.assignRole({ userId: ceo.id, roleCode: 'MD_CEO' });
    const companyEntity = await prisma.ledgerEntity.findFirst({ where: { entityType: 'COMPANY' } })
        ?? await prisma.ledgerEntity.create({ data: { code: `SMOKE-BRP-COMPANY-${RUN}`, name: 'Smoke BRP Company', entityType: 'COMPANY', primaryBasis: 'IFRS' } });
    const scenario2 = await prisma.budgetVersion.create({ data: { fiscalYear: 2099, scenarioLabel: `Smoke Scenario ${RUN}`, status: 'BOARD_APPROVED', proposedByUserId: finadmin.id } });
    const plainLine = await prisma.budgetLine.create({
        data: { budgetVersionId: scenario2.id, ledgerEntityCode: companyEntity.code, budgetLineGroup: 'Smoke Group', lineDescription: 'Smoke Plain Line', class: 'OPEX', phasingMethod: 'EVEN_12', sourceSheetRef: 'smoke:1' },
    });
    await prisma.budgetLineMonthlyAmount.create({ data: { budgetLineId: plainLine.id, month: 3, amountKobo: 100000000n } });
    const driverLine0 = await prisma.budgetLine.create({
        data: { budgetVersionId: scenario2.id, ledgerEntityCode: companyEntity.code, budgetLineGroup: 'Smoke Driver Group', lineDescription: 'Smoke FUM-driven Line', class: 'OPEX', phasingMethod: 'DRIVER_PCT_OF_FUM', driverBasis: 'FUM_MONTHLY (smoke fixture)', driverRateOrFactor: 0.002, sourceSheetRef: 'smoke:2' },
    });
    await prisma.budgetLineMonthlyAmount.create({ data: { budgetLineId: driverLine0.id, month: 3, amountKobo: 5000000n } });
    if (scenario2.status !== 'ACTIVE')
        ok(`fixture budget version status is ${scenario2.status}, not ACTIVE — budget core has not activated yet (that's task 54/Phase 4)`);
    else
        fail('expected the fixture version to still be pre-activation for this test to be meaningful');
    const monthlyPack = await svc.generatePack({
        templateCode: 'MONTHLY_MGMT_BUDGET_PACK', budgetVersionId: scenario2.id, month: 3,
        actualsByLineIdKobo: {}, generatedByUserId: finadmin.id,
    });
    if (monthlyPack.variance.suspended && monthlyPack.variance.message?.includes('NO APPROVED BUDGET')) {
        ok('MONTHLY_MGMT_BUDGET_PACK correctly renders "NO APPROVED BUDGET — variance reporting suspended" pre-activation — never fake green, never an empty table that looks like performance');
    }
    else {
        fail('expected suspended state pre-activation', monthlyPack.variance);
    }
    const quarterlyPack = await svc.generatePack({
        templateCode: 'QUARTERLY_BOARD_BUDGET_PACK', budgetVersionId: scenario2.id, month: 3,
        actualsByLineIdKobo: {}, generatedByUserId: finadmin.id,
    });
    if (quarterlyPack.variance.suspended)
        ok('QUARTERLY_BOARD_BUDGET_PACK also correctly suspended pre-activation');
    else
        fail('expected quarterly pack suspended too');
    await expectReject('DB trigger rejects UPDATE on a report_run (Budget Review Pack reuses the AMD-11 immutability trigger)', () => prisma.reportRun.update({ where: { id: monthlyPack.reportRun.id }, data: { figures: {} } }));
    await expectReject('DB trigger rejects DELETE on a report_run', () => prisma.reportRun.delete({ where: { id: monthlyPack.reportRun.id } }));
    await expectReject('maker cannot approve their own pack for circulation', () => svc.approveForCirculation(monthlyPack.workflowInstanceId, finadmin.id));
    const approved = await svc.approveForCirculation(monthlyPack.workflowInstanceId, ceo.id);
    if (approved.status === 'APPROVED')
        ok('a different reviewer (MD_CEO) approves the pack for circulation — maker != checker enforced by the standing WorkflowEngineService');
    else
        fail('circulation approval failed', approved);
    await prisma.budgetVersion.update({ where: { id: scenario2.id }, data: { status: 'ACTIVE' } });
    const budgeted = await prisma.budgetLineMonthlyAmount.findFirstOrThrow({ where: { budgetLineId: plainLine.id, month: 3 } });
    const TIGHT_THRESHOLD_VERSION = 90001;
    const LOOSE_THRESHOLD_VERSION = 90002;
    const overVariancePct = 60;
    await prisma.budgetVarianceRagThreshold.deleteMany({ where: { version: { in: [TIGHT_THRESHOLD_VERSION, LOOSE_THRESHOLD_VERSION] } } });
    await prisma.budgetVarianceRagThreshold.create({ data: { version: TIGHT_THRESHOLD_VERSION, amberPct: 5, redPct: 10 } });
    const actuals = { [plainLine.id]: BigInt(Math.round(Number(budgeted.amountKobo) * (1 + overVariancePct / 100))) };
    const activePack = await svc.generatePack({
        templateCode: 'MONTHLY_MGMT_BUDGET_PACK', budgetVersionId: scenario2.id, month: 3,
        actualsByLineIdKobo: actuals, generatedByUserId: finadmin.id,
    });
    if (!activePack.variance.suspended && activePack.variance.lines.length > 0) {
        ok(`once ACTIVE, the pack computes a real variance view (${activePack.variance.lines.length} lines) instead of the suspended placeholder`);
    }
    else {
        fail('expected a real variance view once ACTIVE', activePack.variance);
    }
    const overBudgetLine = activePack.variance.lines.find((l) => l.budgetLineId === plainLine.id);
    if (overBudgetLine.rag === 'RED')
        ok(`RAG correctly flags the ${overVariancePct}%-over-budget line RED at the tight threshold (red=10%, variance=${(overBudgetLine.variancePct * 100).toFixed(2)}%)`);
    else
        fail('expected RED rag on the demo over-budget line', overBudgetLine);
    await prisma.budgetVarianceRagThreshold.upsert({ where: { version: LOOSE_THRESHOLD_VERSION }, create: { version: LOOSE_THRESHOLD_VERSION, amberPct: 70, redPct: 80 }, update: {} });
    const rePack = await svc.computeVarianceView({ templateCode: 'MONTHLY_MGMT_BUDGET_PACK', budgetVersionId: scenario2.id, month: 3, actualsByLineIdKobo: actuals, generatedByUserId: finadmin.id });
    const sameLineNewRag = rePack.lines.find((l) => l.budgetLineId === plainLine.id);
    if (sameLineNewRag.rag === 'GREEN')
        ok(`after versioning a new, deliberately looser threshold (amber=70%, red=80%), the SAME ${overVariancePct}% variance now reads GREEN — RAG re-evaluates from config with zero code change`);
    else
        fail('expected the new threshold version to change the RAG classification', sameLineNewRag);
    const withoutOverride = await svc.computeVarianceView({ templateCode: 'MONTHLY_MGMT_BUDGET_PACK', budgetVersionId: scenario2.id, month: 3, actualsByLineIdKobo: {}, generatedByUserId: finadmin.id });
    const withOverride = await svc.computeVarianceView({ templateCode: 'MONTHLY_MGMT_BUDGET_PACK', budgetVersionId: scenario2.id, month: 3, actualsByLineIdKobo: {}, actualDriverOverrides: { FUM: 200_000_000_000 }, generatedByUserId: finadmin.id });
    const lineNoOverride = withoutOverride.lines.find((l) => l.budgetLineId === driverLine0.id);
    const lineWithOverride = withOverride.lines.find((l) => l.budgetLineId === driverLine0.id);
    if (lineNoOverride.budgetKobo === lineWithOverride.budgetKobo && lineNoOverride.fyBudgetKobo === lineWithOverride.fyBudgetKobo) {
        ok(`driver re-forecast: the BUDGET column is identical (${lineNoOverride.budgetKobo} kobo) with or without an actual-FUM override — it never changes`);
    }
    else {
        fail('the budget column changed when it should not have', { lineNoOverride, lineWithOverride });
    }
    if (lineWithOverride.fyReforecastKobo !== null && lineWithOverride.fyReforecastKobo !== lineNoOverride.fyBudgetKobo) {
        ok(`driver re-forecast: FY re-forecast (${lineWithOverride.fyReforecastKobo} kobo) diverges from the FY budget (${lineNoOverride.fyBudgetKobo} kobo) once an actual FUM override is supplied — this is the Planning-module payoff §5a promised`);
    }
    else {
        fail('expected the re-forecast to diverge from budget once an override is applied', lineWithOverride);
    }
    const history = await svc.listPacks();
    const foundActivePack = history.find((h) => h.reportRunId === activePack.reportRun.id);
    if (foundActivePack) {
        ok(`listPacks() finds the pack generated above (${foundActivePack.templateCode}, circulation status ${foundActivePack.circulationStatus})`);
    }
    else {
        fail('listPacks() did not find the pack generated above', history.map((h) => h.reportRunId));
    }
    const viewGrants = await prisma.rolePermission.findMany({ where: { functionCode: 'BUDGET_REVIEW_PACK', level: 'VIEW' } });
    const viewRoles = new Set(viewGrants.map((g) => g.roleCode));
    if (['FIN_ADMIN', 'CFO', 'MD_CEO', 'AUDITOR'].every((r) => viewRoles.has(r))) {
        ok('BUDGET_REVIEW_PACK now grants VIEW to FIN_ADMIN/CFO/MD_CEO/AUDITOR -- the INITIATE/APPROVE-without-VIEW gap (CHECK11 49(g)(i)\'s bug class) is fixed on this capability');
    }
    else {
        fail('BUDGET_REVIEW_PACK VIEW grant set incomplete', [...viewRoles]);
    }
    console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — Budget Review Pack proven: suspended-state gate, RAG-from-config, driver re-forecast, immutable report_run, maker!=checker circulation approval, CHECK15 reachability (listPacks + VIEW grants).`);
    process.exitCode = failed ? 1 : 0;
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=budget-review-pack.smoke.js.map