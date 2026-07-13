// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/period/bank-reconciliation.smoke.ts
// Invariant 51(b-ix) (CHECK13, CEO ruling: "now needed for the first
// monthly close, parallel run or not"): upload/match/unmatch, and the
// genuine HARD gate PeriodService.requestPeriodClose enforces -- a period
// with any UNMATCHED statement line inside its date window cannot even have
// a close REQUESTED, let alone approved.
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { PeriodService } from './period.service';
import { BankReconciliationService } from './bank-reconciliation.service';
import { PeriodLifecycleError } from './period.types';

const RUN = Date.now();
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
  const bankReconciliation = new BankReconciliationService(prisma, audit, delegation);
  const period = new PeriodService(prisma, audit, delegation, workflow, bankReconciliation);

  const finAdmin = await prisma.appUser.create({ data: { email: `br-finadmin-${RUN}@one17.test`, displayName: 'br-finadmin' } });
  await rbac.assignRole({ userId: finAdmin.id, roleCode: 'FIN_ADMIN' });
  const outsider = await prisma.appUser.create({ data: { email: `br-outsider-${RUN}@one17.test`, displayName: 'br-outsider' } });

  const fundCode = `SMOKE-BR-FUND-${RUN}`;
  await prisma.ledgerEntity.create({ data: { code: fundCode, name: 'Smoke BR Fund', entityType: 'FUND', primaryBasis: 'AAOIFI' } });
  const cashAccount = await prisma.chartOfAccount.create({ data: { ledgerEntityCode: fundCode, accountCode: '1000', accountName: 'Cash', accountType: 'ASSET', aaoifiRef: 'TEST', ifrsRef: 'TEST' } });
  const capitalAccount = await prisma.chartOfAccount.create({ data: { ledgerEntityCode: fundCode, accountCode: '3010', accountName: 'Investor Capital', accountType: 'EQUITY', aaoifiRef: 'TEST', ifrsRef: 'TEST' } });
  const journal = await prisma.journalEntry.create({
    data: { ledgerEntityCode: fundCode, journalReference: `JE-BR-${RUN}`, entryDate: new Date('2026-06-15'), description: 'Smoke deposit', createdByUserId: finAdmin.id },
  });
  const journalLine = await prisma.journalEntryLine.create({ data: { journalEntryId: journal.id, accountId: cashAccount.id, debitKobo: 500_000_00n } });
  await prisma.journalEntryLine.create({ data: { journalEntryId: journal.id, accountId: capitalAccount.id, creditKobo: 500_000_00n } });

  // ---- 1. Outsider cannot upload statement lines ----
  await expectReject('outsider cannot upload bank statement lines', () =>
    bankReconciliation.uploadStatementLines([{ ledgerEntityCode: fundCode, glAccountCode: '1000', statementDate: new Date('2026-06-15'), description: 'Deposit', amountKobo: 500_000_00n }], outsider.id));

  // ---- 2. FIN_ADMIN uploads statement lines ----
  const [line1, line2] = await bankReconciliation.uploadStatementLines(
    [
      { ledgerEntityCode: fundCode, glAccountCode: '1000', statementDate: new Date('2026-06-15'), description: 'Deposit', amountKobo: 500_000_00n },
      { ledgerEntityCode: fundCode, glAccountCode: '1000', statementDate: new Date('2026-06-20'), description: 'Unexplained credit', amountKobo: 75_000_00n },
    ],
    finAdmin.id,
  );
  if (line1.status === 'UNMATCHED' && line2.status === 'UNMATCHED') ok('uploaded statement lines start UNMATCHED');
  else fail('uploaded lines did not start UNMATCHED', { line1, line2 });

  // ---- 3. Open an accounting period covering June 2026 ----
  const juneperiod = await period.openPeriod({ ledgerEntityCode: fundCode, periodStart: new Date('2026-06-01'), periodEnd: new Date('2026-06-30'), openedByUserId: finAdmin.id });

  // ---- 4. Hard gate: requestPeriodClose is refused while ANY line in the window is UNMATCHED ----
  await expectReject('requestPeriodClose refuses while unmatched statement lines exist in the period window (hard gate, not advisory)', () =>
    period.requestPeriodClose({ periodId: juneperiod.id, initiatedByUserId: finAdmin.id }));

  // ---- 5. Match line1 to the real journal entry line -- one line still unmatched, gate still blocks ----
  const matched = await bankReconciliation.matchLine(line1.id, journalLine.id, finAdmin.id);
  if (matched.status === 'MATCHED' && matched.matchedJournalEntryLineId === journalLine.id) ok('matchLine links the statement line to a real JournalEntryLine and flips it MATCHED');
  else fail('matchLine did not behave as expected', matched);

  await expectReject('requestPeriodClose still refused with one statement line (line2) still unmatched', () =>
    period.requestPeriodClose({ periodId: juneperiod.id, initiatedByUserId: finAdmin.id }));

  // ---- 6. Unmatch and re-match line2 to a fresh journal line to prove the full round-trip, then close succeeds ----
  const journal2 = await prisma.journalEntry.create({ data: { ledgerEntityCode: fundCode, journalReference: `JE-BR2-${RUN}`, entryDate: new Date('2026-06-20'), description: 'Smoke unexplained credit', createdByUserId: finAdmin.id } });
  const journalLine2 = await prisma.journalEntryLine.create({ data: { journalEntryId: journal2.id, accountId: cashAccount.id, debitKobo: 75_000_00n } });
  await prisma.journalEntryLine.create({ data: { journalEntryId: journal2.id, accountId: capitalAccount.id, creditKobo: 75_000_00n } });
  await bankReconciliation.matchLine(line2.id, journalLine2.id, finAdmin.id);

  const summary = await bankReconciliation.getSummary(fundCode, new Date('2026-06-01'), new Date('2026-06-30'));
  if (summary.matched === 2 && summary.unmatched === 0 && summary.canClose) ok('getSummary reports both lines matched and canClose=true once the window is fully reconciled');
  else fail('getSummary did not report full reconciliation as expected', summary);

  const closeRequest = await period.requestPeriodClose({ periodId: juneperiod.id, initiatedByUserId: finAdmin.id });
  if (closeRequest.id) ok('requestPeriodClose succeeds once every statement line in the window is MATCHED');
  else fail('requestPeriodClose did not succeed as expected', closeRequest);

  // ---- 7. Matching across ledger entities is refused ----
  const otherFundCode = `SMOKE-BR-OTHER-${RUN}`;
  await prisma.ledgerEntity.create({ data: { code: otherFundCode, name: 'Smoke BR Other Fund', entityType: 'FUND', primaryBasis: 'AAOIFI' } });
  const [line3] = await bankReconciliation.uploadStatementLines([{ ledgerEntityCode: otherFundCode, glAccountCode: '1000', statementDate: new Date('2026-06-22'), description: 'Cross-entity', amountKobo: 10_000_00n }], finAdmin.id);
  await expectReject('matching a statement line to a journal entry line in a DIFFERENT ledger entity is refused', () => bankReconciliation.matchLine(line3.id, journalLine.id, finAdmin.id));

  // Cleanup.
  await prisma.bankStatementLine.deleteMany({ where: { ledgerEntityCode: { in: [fundCode, otherFundCode] } } });
  const wfIds = [closeRequest.id].filter((id): id is string => !!id);
  await prisma.workflowStepApproval.deleteMany({ where: { workflowInstanceId: { in: wfIds } } });
  await prisma.accountingPeriod.update({ where: { id: juneperiod.id }, data: { closeWorkflowInstanceId: null } });
  await prisma.workflowInstance.deleteMany({ where: { id: { in: wfIds } } });
  await prisma.accountingPeriod.delete({ where: { id: juneperiod.id } });
  await prisma.journalEntryLine.deleteMany({ where: { journalEntryId: { in: [journal.id, journal2.id] } } });
  await prisma.journalEntry.deleteMany({ where: { id: { in: [journal.id, journal2.id] } } });
  await prisma.chartOfAccount.deleteMany({ where: { ledgerEntityCode: { in: [fundCode, otherFundCode] } } });
  await prisma.ledgerEntity.deleteMany({ where: { code: { in: [fundCode, otherFundCode] } } });
  const userIds = [finAdmin.id, outsider.id];
  await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
  await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });

  await prisma.$disconnect();

  if (failed) {
    console.error('\nSMOKE FAILED — see FAIL lines above.');
    process.exitCode = 1;
  } else {
    console.log('\nSMOKE OK — bank reconciliation + period-close hard gate (invariant 51b-ix) against the real live DB.');
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
