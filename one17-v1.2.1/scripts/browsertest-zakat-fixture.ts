// One-off fixture for visual verification of the invariant 26 Zakat
// Advisory engine (task #103/CHECK6E). Reuses the existing
// browsertest-wm-holding-investor (already a real HNI-tier client) so the
// nisab-breach path is genuinely triggered by real declared wealth, not a
// fabricated number. Leaves persistent browsertest- data behind on purpose.
// Run with: npx tsx scripts/browsertest-zakat-fixture.ts
import 'dotenv/config';
import { PrismaService } from '../src/prisma/prisma.service';
import { AuditService } from '../src/audit/audit.service';
import { RbacService } from '../src/rbac/rbac.service';
import { DelegationService } from '../src/delegation/delegation.service';
import { WorkflowEngineService } from '../src/workflow/workflow.service';
import { WmService } from '../src/wm/wm.service';
import { NotificationService } from '../src/notification/notification.service';
import { ZakatService } from '../src/zakat/zakat.service';
import { LedgerService } from '../src/ledger/ledger.service';
import { EventJournalService } from '../src/event-journal/event-journal.service';
import { AuthService } from '../src/auth/auth.service';
import { MfaService } from '../src/mfa/mfa.service';

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));
  const ledger = new LedgerService(prisma, audit, delegation, workflow);
  const eventJournal = new EventJournalService(prisma, ledger);
  const wm = new WmService(prisma, audit, delegation, workflow, eventJournal);
  const notification = new NotificationService(prisma);
  const zakat = new ZakatService(prisma, audit, delegation, workflow, wm, notification);

  const investor = await prisma.investor.findFirstOrThrow({ where: { contactEmail: 'browsertest-wm-holding-investor@one17.test' } });
  const advisor = await prisma.appUser.findFirstOrThrow({ where: { email: 'browsertest-wm-advisor@one17.test' } });

  let shariahReviewer = await prisma.appUser.findFirst({ where: { email: 'browsertest-shariah-reviewer@one17.test' } });
  if (!shariahReviewer) {
    shariahReviewer = await prisma.appUser.create({ data: { email: 'browsertest-shariah-reviewer@one17.test', displayName: 'browsertest-shariah-reviewer' } });
    await rbac.assignRole({ userId: shariahReviewer.id, roleCode: 'SHARIAH_REV' });
    const authService = new AuthService(prisma, audit, new MfaService(prisma, audit));
    await authService.setPassword(shariahReviewer.id, 'BrowserTest1!');
  }

  const existingSub = await prisma.zakatClientSubscription.findUnique({ where: { investorId: investor.investorId } });
  if (existingSub) {
    console.log(`Zakat fixture already exists for investorId ${investor.investorId}, subscription isActive=${existingSub.isActive}.`);
    const runs = await prisma.zakatAssessmentRun.findMany({ where: { investorId: investor.investorId } });
    console.log(`${runs.length} existing assessment run(s): ${runs.map((r) => `${r.id} (${r.status})`).join(', ')}`);
    await prisma.$disconnect();
    return;
  }

  await zakat.updateNisabConfig(85, 1_500_000n, advisor.id); // 85g @ ₦15,000/g -> ₦127,500,000 threshold
  await zakat.activateSubscription(investor.investorId, advisor.id);
  await zakat.electRateBasis(investor.investorId, 'GREGORIAN');

  const nisabStatus = await zakat.isNisabBreached(investor.investorId);
  console.log(`Nisab status for ${investor.investorId}: breached=${nisabStatus.breached}, wealth=${nisabStatus.totalWealthKobo}, threshold=${nisabStatus.nisabThresholdKobo}`);

  const run = await zakat.createAssessmentSandbox({
    investorId: investor.investorId,
    assessmentDateGregorian: new Date('2026-07-06'),
    assessmentDateHijri: '21 Muharram 1448',
    createdByUserId: advisor.id,
  });

  await zakat.declareScheduleItem({ zakatAssessmentRunId: run.id, scheduleType: 'CASH_BANK', description: 'Cash in hand + bank balances', amountKobo: 6_761_096_14n, zakatability: 'ZAKATABLE', declaredByUserId: advisor.id });
  await zakat.declareScheduleItem({ zakatAssessmentRunId: run.id, scheduleType: 'GOLD_SILVER', description: 'Gold jewelry + coins', amountKobo: 500_000_00n, zakatability: 'ZAKATABLE', declaredByUserId: advisor.id });
  await zakat.declareScheduleItem({ zakatAssessmentRunId: run.id, scheduleType: 'FIXED_ASSET', description: 'Personal residence (Lagos)', amountKobo: 300_000_000_00n, zakatability: 'NON_ZAKATABLE', declaredByUserId: advisor.id });
  await zakat.declareScheduleItem({ zakatAssessmentRunId: run.id, scheduleType: 'RECEIVABLE', description: 'Money owed by business partner', amountKobo: 17_000_000_00n, zakatability: 'ZAKATABLE', declaredByUserId: advisor.id });
  await zakat.declareScheduleItem({ zakatAssessmentRunId: run.id, scheduleType: 'LIABILITY', description: 'Short-term payables due within 1 year', amountKobo: 21_500_000_00n, zakatability: 'ZAKATABLE', declaredByUserId: advisor.id });

  await zakat.computeAssessment(run.id);

  console.log(`Fixture created.`);
  console.log(`Investor: ${investor.fullLegalName} (${investor.investorId})`);
  console.log(`Assessment run: ${run.id} — DRAFT, awaiting client agreement (log in as the investor portal user to Agree)`);
  console.log(`Shariah reviewer ops login: browsertest-shariah-reviewer@one17.test / BrowserTest1!`);
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
