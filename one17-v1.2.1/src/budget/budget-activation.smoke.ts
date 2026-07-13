// Run with: npx tsx src/budget/budget-activation.smoke.ts
// Proves Phase4 Directive §3 (invariant 20) end-to-end: BOARD_APPROVED ->
// ACTIVE is a real, workflow-gated, maker!=checker action requiring a
// boardResolutionRef; F-BZ-01 KRI reads NOTHING until that flip happens;
// expenditure encumbrance is blocked pre-activation and budget-checked
// post-activation; SAU review -> CEO approval sequencing is enforced.
// Uses an ISOLATED fixture (own fiscalYear/scenario label) rather than the
// real Scenario 2 row, which earlier smoke-test runs this session already
// (bug-)flipped to ACTIVE before the isolation-fixture fix landed — exactly
// the contamination that fix was meant to prevent going forward.
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { BudgetActivationService } from './budget-activation.service';
import { KriEngineService } from '../kri-engine/kri-engine.service';

const RUN = Date.now();
let failed = false;
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));
  const activation = new BudgetActivationService(prisma, audit, delegation, workflow);
  const kriEngine = new KriEngineService(prisma, audit);

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

  // A fixed fiscal year would collide with itself across repeat runs (the
  // whole point of this test is "no second concurrent ACTIVE version per
  // fiscal year" — a prior run's ACTIVE version would then wrongly block a
  // fresh run). Widened from the original 900-bucket modulo (9000 + RUN %
  // 900) after a real collision surfaced during an unrelated tranche's
  // full regression sweep late in a long session — see
  // procurement.smoke.ts's identical fix for the same root cause
  // (budget_version rows are never cleaned up here either, matching the
  // permanent-residue doctrine; no SUPERSEDED status exists to retire
  // one). CAUTION: fiscalYear is fed straight into `new Date(fiscalYear,
  // ...)` below (readingDate) — it must stay a value JS's Date can
  // represent as a plausible year, so this is widened to 90,000 buckets
  // (still Date-safe up to ~98999), NOT the 900,000 first tried (that
  // produced an Invalid Date once fed to new Date(), a real regression
  // caught by this same file's own KRI-batch assertion below).
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
      monthlyAmounts: { create: Array.from({ length: 12 }, (_, i) => ({ month: i + 1, amountKobo: 1_000_000n })) }, // FY total 12,000,000 kobo
    },
  });

  // --- F-BZ-01/05 KRIs report NO APPROVED BUDGET before activation ---
  // readingDate is set INSIDE our isolated fiscalYear so the KRI engine's
  // own `readingDate.getFullYear()` budget lookup targets our isolated
  // version, not the real Scenario 2 (fiscal 2026, already ACTIVE from
  // earlier contamination this session predates the isolation-fixture
  // discipline).
  const readingDate = new Date(fiscalYear, 5, 15);
  const preBatch = await kriEngine.runDailyBatch(readingDate);
  const bz01Pre = await prisma.kriReading.findFirst({ where: { kriCode: 'BZ-01', readingDate, isAggregate: true } });
  const bz05Pre = await prisma.kriReading.findFirst({ where: { kriCode: 'BZ-05', readingDate, isAggregate: true } });
  if (bz01Pre?.ragStatus === 'NOT_INSTRUMENTED' && bz01Pre.value === null && bz05Pre?.ragStatus === 'NOT_INSTRUMENTED') {
    ok(`F-BZ-01/BZ-05 KRIs correctly report NOT_INSTRUMENTED ("NO APPROVED BUDGET") for fiscalYear ${fiscalYear} before activation (${preBatch.computed} readings computed this batch)`);
  } else {
    fail('expected BZ-01/BZ-05 to report NOT_INSTRUMENTED before activation', { bz01Pre, bz05Pre });
  }

  // --- Encumbrance blocked pre-activation ---
  try {
    await activation.requestEncumbrance(line.id, 500_000n, 'Pre-activation spend attempt', finAdmin.id);
    fail('expected encumbrance request to be blocked before budget activation');
  } catch (err) {
    ok(`Encumbrance correctly blocked pre-activation: ${(err as Error).message}`);
  }

  // --- Activation requires boardResolutionRef ---
  try {
    await activation.requestActivation(version.id, '', finAdmin.id);
    fail('expected activation request without boardResolutionRef to be rejected');
  } catch (err) {
    ok(`Activation request correctly requires boardResolutionRef: ${(err as Error).message}`);
  }

  // --- Activation workflow: propose then approve (maker != checker) ---
  const activationWf = await activation.requestActivation(version.id, `BOARD-RES-${RUN}`, finAdmin.id);
  try {
    await activation.approveActivation(activationWf.id, finAdmin.id);
    fail('expected self-approval of budget activation to be rejected');
  } catch (err) {
    ok(`Self-approval of budget activation correctly rejected: ${(err as Error).message}`);
  }
  await activation.approveActivation(activationWf.id, ceo.id);
  const activated = await prisma.budgetVersion.findUniqueOrThrow({ where: { id: version.id } });
  if (activated.status === 'ACTIVE' && activated.boardResolutionRef === `BOARD-RES-${RUN}`) {
    ok(`Budget version flipped BOARD_APPROVED -> ACTIVE by a DIFFERENT approver (MD_CEO), boardResolutionRef persisted`);
  } else {
    fail('budget version did not activate correctly', activated);
  }

  // --- F-BZ-01/05 KRIs now read from THIS budget (the "closing the
  // dangling reference" gate) — BZ-05's fixedCostsKobo must reflect our
  // newly-ACTIVE line; the FINAL breakevenAumKobo legitimately stays null
  // here too (impliedFeeRate=0, since this isolated COMPANY fixture has no
  // actual revenue postings) — that null is the SAME honest-N/A discipline
  // the engine applies everywhere else (dividing by a zero fee rate would
  // be a fabricated number, not a real one), not a wiring failure.
  await kriEngine.runDailyBatch(readingDate);
  const bz05Post = await prisma.kriReading.findFirst({ where: { kriCode: 'BZ-05', readingDate, isAggregate: true } });
  if ((bz05Post?.detail as any)?.fixedCostsKobo === '12000000') {
    ok(`F-BZ-05 Breakeven AUM now reads fixedCostsKobo=12,000,000 from the newly-ACTIVE budget line — the "closing the dangling reference" gate proven live (final ratio stays null here since this isolated fixture has zero actual revenue, correctly not fabricated)`);
  } else {
    fail('F-BZ-05 did not pick up the newly-activated budget line', bz05Post);
  }

  // --- A second concurrent ACTIVE version for the same FY is rejected ---
  const version2 = await prisma.budgetVersion.create({ data: { fiscalYear, scenarioLabel: `Activation Smoke B ${RUN}`, status: 'BOARD_APPROVED', proposedByUserId: finAdmin.id } });
  try {
    await activation.requestActivation(version2.id, `BOARD-RES-B-${RUN}`, finAdmin.id);
    fail('expected a second concurrent ACTIVE version for the same fiscal year to be rejected');
  } catch (err) {
    ok(`Second concurrent ACTIVE version for the same fiscal year correctly rejected: ${(err as Error).message}`);
  }

  // --- System budget check: within budget succeeds ---
  const { encumbrance: enc1, workflowInstance: encWf1 } = await activation.requestEncumbrance(line.id, 5_000_000n, 'Within-budget spend', finAdmin.id);
  ok(`Encumbrance within budget accepted post-activation: ${enc1.amountKobo} kobo (available was 12,000,000)`);

  // --- System budget check: over budget rejected ---
  try {
    await activation.requestEncumbrance(line.id, 8_000_000n, 'Over-budget spend attempt', finAdmin.id);
    fail('expected an over-budget encumbrance request to be rejected (5m already encumbered + 8m > 12m FY budget)');
  } catch (err) {
    ok(`System budget check correctly rejects over-budget request: ${(err as Error).message}`);
  }

  // --- SAU review then CEO approval sequencing ---
  try {
    await workflow.approveNextStep(encWf1.id, ceo.id); // CEO tries to approve step 1, which requires BUDGET_CONTROL_REVIEW
    fail('expected CEO to be ineligible for step 1 (BUDGET_CONTROL_REVIEW is the SAU Internal Control capability, not BUDGET_MANAGEMENT)');
  } catch (err) {
    ok(`CEO correctly ineligible for step 1 (SAU Internal Control review): ${(err as Error).message}`);
  }
  await workflow.approveNextStep(encWf1.id, sau.id);
  ok('SAU Internal Control successfully completes step 1 (budget/SOP conformity review)');
  const afterSau = await prisma.workflowInstance.findUniqueOrThrow({ where: { id: encWf1.id } });
  if (afterSau.status === 'PENDING_APPROVAL') ok('Requisition still PENDING_APPROVAL after SAU step — CEO step 2 required next');
  else fail(`expected PENDING_APPROVAL after step 1, got ${afterSau.status}`);
  const afterCeo = await workflow.approveNextStep(encWf1.id, ceo.id);
  if (afterCeo.status === 'APPROVED') ok('CEO approval (step 2, amount-tiered per DoA) completes the requisition');
  else fail(`expected APPROVED after CEO step, got ${afterCeo.status}`);

  console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — budget-core activation wiring proven against the real live DB.`);
  process.exitCode = failed ? 1 : 0;
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
