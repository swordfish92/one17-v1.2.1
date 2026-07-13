// Run with: npx tsx src/budget/budget-extraction-authoring.smoke.ts
// Invariant 39(b), Tier 2: BUDGET_MANAGEMENT's "propose/load a budget_version"
// step (task 47) had a full service implementation but had only ever been
// exercised via the one-time TPL_11 CLI loader script — no capability-gated
// proof it works as a live, repeatable action. Uses an isolated fixture
// fiscal year (a large synthetic year, never a real one) to avoid any
// contamination of the real historical budget rows the loader script
// already populated.
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { BudgetExtractionService } from './budget-extraction.service';

const RUN = Date.now();
const FISCAL_YEAR = 9000 + (RUN % 900);
let failed = false;
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function expectReject(label: string, fn: () => unknown | Promise<unknown>) {
  try { await fn(); fail(`expected rejection: ${label}`); }
  catch (err) { ok(`rejected as expected: ${label} — ${(err as Error).message.split('\n')[0]}`); }
}

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));
  const budget = new BudgetExtractionService(prisma, audit, delegation);

  const finAdmin = await prisma.appUser.create({ data: { email: `budget-author-finadmin-${RUN}@one17.test`, displayName: 'budget-author-finadmin' } });
  await rbac.assignRole({ userId: finAdmin.id, roleCode: 'FIN_ADMIN' });
  const outsider = await prisma.appUser.create({ data: { email: `budget-author-outsider-${RUN}@one17.test`, displayName: 'budget-author-outsider' } });

  // ---- capability-gated creation ----
  await expectReject('outsider (no BUDGET_MANAGEMENT) cannot propose a budget version', () =>
    budget.createBudgetVersion(FISCAL_YEAR, 'Isolated Smoke Scenario', 'DRAFT', outsider.id));
  const version = await budget.createBudgetVersion(FISCAL_YEAR, 'Isolated Smoke Scenario', 'DRAFT', finAdmin.id);
  if (version.fiscalYear === FISCAL_YEAR && version.status === 'DRAFT') {
    ok(`FIN_ADMIN proposes a new budget_version (fiscalYear=${FISCAL_YEAR}, status=DRAFT) via the live action, not just the one-time CLI loader`);
  } else {
    fail(`expected a DRAFT budget_version for the isolated fiscal year`, version);
  }

  // ---- idempotent upsert on the same (fiscalYear, scenarioLabel) key ----
  const reproposed = await budget.createBudgetVersion(FISCAL_YEAR, 'Isolated Smoke Scenario', 'BOARD_APPROVED', finAdmin.id);
  if (reproposed.id === version.id && reproposed.status === 'BOARD_APPROVED') {
    ok(`re-proposing the SAME (fiscalYear, scenarioLabel) upserts status in place (DRAFT -> BOARD_APPROVED), not a duplicate row`);
  } else {
    fail(`expected an in-place status update on the same budget_version row`, { reproposed, originalId: version.id });
  }

  // ---- audit trail records the proposal ----
  const auditRow = await prisma.auditTrail.findFirst({ where: { entityType: 'budget_version', entityId: version.id, action: 'CREATE' } });
  if (auditRow) {
    ok(`budget_version creation is audit-logged (actorUserId=${auditRow.actorUserId})`);
  } else {
    fail(`expected an audit_trail row for the budget_version creation`);
  }

  // ---- listBudgetVersions surfaces the new version with a real line count ----
  const versions = await budget.listBudgetVersions();
  const listed = versions.find((v) => v.id === version.id);
  if (listed && listed._count.lines === 0) {
    ok(`listBudgetVersions() surfaces the new version with its real (zero, so far) line count — not a fabricated summary`);
  } else {
    fail(`expected the new version in listBudgetVersions() with lines._count === 0`, listed);
  }

  // ---- listBudgetLines against an empty version returns an empty array, not an error ----
  const lines = await budget.listBudgetLines(version.id);
  if (Array.isArray(lines) && lines.length === 0) {
    ok(`listBudgetLines() on a version with no loaded lines returns an empty array, not an error — the screen's "run the TPL_11 import" empty state is real, not fabricated`);
  } else {
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
