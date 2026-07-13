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
const budget_extraction_service_1 = require("./budget-extraction.service");
const RUN = Date.now();
const FISCAL_YEAR = 9000 + (RUN % 900);
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
    const budget = new budget_extraction_service_1.BudgetExtractionService(prisma, audit, delegation);
    const finAdmin = await prisma.appUser.create({ data: { email: `budget-author-finadmin-${RUN}@one17.test`, displayName: 'budget-author-finadmin' } });
    await rbac.assignRole({ userId: finAdmin.id, roleCode: 'FIN_ADMIN' });
    const outsider = await prisma.appUser.create({ data: { email: `budget-author-outsider-${RUN}@one17.test`, displayName: 'budget-author-outsider' } });
    await expectReject('outsider (no BUDGET_MANAGEMENT) cannot propose a budget version', () => budget.createBudgetVersion(FISCAL_YEAR, 'Isolated Smoke Scenario', 'DRAFT', outsider.id));
    const version = await budget.createBudgetVersion(FISCAL_YEAR, 'Isolated Smoke Scenario', 'DRAFT', finAdmin.id);
    if (version.fiscalYear === FISCAL_YEAR && version.status === 'DRAFT') {
        ok(`FIN_ADMIN proposes a new budget_version (fiscalYear=${FISCAL_YEAR}, status=DRAFT) via the live action, not just the one-time CLI loader`);
    }
    else {
        fail(`expected a DRAFT budget_version for the isolated fiscal year`, version);
    }
    const reproposed = await budget.createBudgetVersion(FISCAL_YEAR, 'Isolated Smoke Scenario', 'BOARD_APPROVED', finAdmin.id);
    if (reproposed.id === version.id && reproposed.status === 'BOARD_APPROVED') {
        ok(`re-proposing the SAME (fiscalYear, scenarioLabel) upserts status in place (DRAFT -> BOARD_APPROVED), not a duplicate row`);
    }
    else {
        fail(`expected an in-place status update on the same budget_version row`, { reproposed, originalId: version.id });
    }
    const auditRow = await prisma.auditTrail.findFirst({ where: { entityType: 'budget_version', entityId: version.id, action: 'CREATE' } });
    if (auditRow) {
        ok(`budget_version creation is audit-logged (actorUserId=${auditRow.actorUserId})`);
    }
    else {
        fail(`expected an audit_trail row for the budget_version creation`);
    }
    const versions = await budget.listBudgetVersions();
    const listed = versions.find((v) => v.id === version.id);
    if (listed && listed._count.lines === 0) {
        ok(`listBudgetVersions() surfaces the new version with its real (zero, so far) line count — not a fabricated summary`);
    }
    else {
        fail(`expected the new version in listBudgetVersions() with lines._count === 0`, listed);
    }
    const lines = await budget.listBudgetLines(version.id);
    if (Array.isArray(lines) && lines.length === 0) {
        ok(`listBudgetLines() on a version with no loaded lines returns an empty array, not an error — the screen's "run the TPL_11 import" empty state is real, not fabricated`);
    }
    else {
        fail(`expected an empty lines array`, lines);
    }
    console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — Budget Management authoring screen (invariant 39b) against the real live DB.`);
    process.exitCode = failed ? 1 : 0;
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=budget-extraction-authoring.smoke.js.map