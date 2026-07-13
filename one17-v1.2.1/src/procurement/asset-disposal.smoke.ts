// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/procurement/asset-disposal.smoke.ts
// Invariant 51(b-x) (CHECK13): fixed-asset disposal/derecognition -- the
// multi-line journal (Dr Cash + Dr Accumulated Depreciation = Cr Asset at
// cost +/- Gain/Loss) EventJournalService's single-dr/single-cr shape
// cannot express, fired directly through LedgerService.
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { LedgerService } from '../ledger/ledger.service';
import { EventJournalService } from '../event-journal/event-journal.service';
import { ProcurementService } from './procurement.service';
import { ProcurementError } from './procurement.types';

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
  const ledger = new LedgerService(prisma, audit, delegation, workflow);
  const eventJournal = new EventJournalService(prisma, ledger);
  const procurement = new ProcurementService(prisma, audit, delegation, workflow, eventJournal, ledger);

  const corpServices = await prisma.appUser.create({ data: { email: `ad-corpsvc-${RUN}@one17.test`, displayName: 'ad-corpsvc' } });
  await rbac.assignRole({ userId: corpServices.id, roleCode: 'CORP_SERVICES' });
  const outsider = await prisma.appUser.create({ data: { email: `ad-outsider-${RUN}@one17.test`, displayName: 'ad-outsider' } });

  const fundCode = `SMOKE-AD-FUND-${RUN}`;
  await prisma.ledgerEntity.create({ data: { code: fundCode, name: 'Smoke AD Fund', entityType: 'FUND', primaryBasis: 'AAOIFI' } });
  const accountCodes: [string, string, 'ASSET' | 'EXPENSE'][] = [['1000', 'Cash', 'ASSET'], ['1170', 'Fixed Assets', 'ASSET'], ['1175', 'Accumulated Depreciation', 'ASSET'], ['6025', 'Gain/(Loss) on Disposal of Assets', 'EXPENSE']];
  for (const [accountCode, accountName, accountType] of accountCodes) {
    await prisma.chartOfAccount.create({ data: { ledgerEntityCode: fundCode, accountCode, accountName, accountType, aaoifiRef: 'TEST', ifrsRef: 'TEST' } });
  }

  // Asset A: sold at a LOSS (proceeds < net book value).
  const assetA = await prisma.assetRegisterEntry.create({
    data: { assetCode: `SMOKE-AD-A-${RUN}`, description: 'Smoke laptop A', ledgerEntityCode: fundCode, costKobo: 1_000_000_00n, acquisitionDate: new Date('2024-01-01'), usefulLifeMonths: 36, accumulatedDepreciationKobo: 600_000_00n, status: 'ACTIVE', createdByUserId: corpServices.id },
  });
  // Asset B: sold at a GAIN (proceeds > net book value).
  const assetB = await prisma.assetRegisterEntry.create({
    data: { assetCode: `SMOKE-AD-B-${RUN}`, description: 'Smoke laptop B', ledgerEntityCode: fundCode, costKobo: 1_000_000_00n, acquisitionDate: new Date('2024-01-01'), usefulLifeMonths: 36, accumulatedDepreciationKobo: 900_000_00n, status: 'ACTIVE', createdByUserId: corpServices.id },
  });

  // ---- 1. Outsider cannot dispose an asset ----
  await expectReject('outsider cannot dispose a fixed asset', () =>
    procurement.disposeAsset({ assetRegisterEntryId: assetA.id, disposalDate: new Date('2026-07-09'), proceedsKobo: 300_000_00n, gainLossAccountCode: '6025', disposedByUserId: outsider.id }));

  // ---- 2. Asset A: net book value = 1,000,000 - 600,000 = 400,000; proceeds 300,000 -> loss of 100,000 ----
  const disposalA = await procurement.disposeAsset({ assetRegisterEntryId: assetA.id, disposalDate: new Date('2026-07-09'), proceedsKobo: 300_000_00n, gainLossAccountCode: '6025', disposedByUserId: corpServices.id });
  if (disposalA.gainLossKobo === -100_000_00n && disposalA.asset.status === 'DISPOSED') ok('disposal at a LOSS computes gainLossKobo correctly (negative) and flips status DISPOSED');
  else fail('loss-disposal did not compute as expected', disposalA);

  const journalA = await prisma.journalEntry.findUniqueOrThrow({ where: { id: disposalA.journal.id }, include: { lines: true } });
  const totalDebitA = journalA.lines.reduce((s, l) => s + l.debitKobo, 0n);
  const totalCreditA = journalA.lines.reduce((s, l) => s + l.creditKobo, 0n);
if (totalDebitA === totalCreditA && totalDebitA === 300_000_00n + 600_000_00n + 100_000_00n) ok('loss-disposal journal balances (Dr Cash 300k + Dr AccumDep 600k + Dr Loss 100k = Cr Asset 1,000k)');
  else fail('loss-disposal journal does not balance as expected', { totalDebitA, totalCreditA, lines: journalA.lines });

  // ---- 3. Asset B: net book value = 1,000,000 - 900,000 = 100,000; proceeds 250,000 -> gain of 150,000 ----
  const disposalB = await procurement.disposeAsset({ assetRegisterEntryId: assetB.id, disposalDate: new Date('2026-07-09'), proceedsKobo: 250_000_00n, gainLossAccountCode: '6025', disposedByUserId: corpServices.id });
  if (disposalB.gainLossKobo === 150_000_00n) ok('disposal at a GAIN computes gainLossKobo correctly (positive)');
  else fail('gain-disposal did not compute as expected', disposalB);

  const journalB = await prisma.journalEntry.findUniqueOrThrow({ where: { id: disposalB.journal.id }, include: { lines: true } });
  const totalDebitB = journalB.lines.reduce((s, l) => s + l.debitKobo, 0n);
  const totalCreditB = journalB.lines.reduce((s, l) => s + l.creditKobo, 0n);
  if (totalDebitB === totalCreditB && totalCreditB === 1_000_000_00n + 150_000_00n) ok('gain-disposal journal balances (Dr Cash 250k + Dr AccumDep 900k = Cr Asset 1,000k + Cr Gain 150k)');
  else fail('gain-disposal journal does not balance as expected', { totalDebitB, totalCreditB, lines: journalB.lines });

  if (journalB.status === 'DRAFT') ok('the fired disposal journal itself stays DRAFT -- a genuinely separate checker must still post it');
  else fail('disposal journal did not land in the expected DRAFT (awaiting posting approval) state', journalB);

  // ---- 4. A second disposal attempt on an already-DISPOSED asset is refused ----
  await expectReject('a second disposal attempt on an already-DISPOSED asset is refused', () =>
    procurement.disposeAsset({ assetRegisterEntryId: assetA.id, disposalDate: new Date('2026-07-10'), proceedsKobo: 1_00_00n, gainLossAccountCode: '6025', disposedByUserId: corpServices.id }));

  // Cleanup.
  const wfInstances = await prisma.workflowInstance.findMany({ where: { entityType: 'journal_entry', entityId: { in: [disposalA.journal.id, disposalB.journal.id] } } });
  const wfIds = wfInstances.map((w) => w.id);
  await prisma.workflowStepApproval.deleteMany({ where: { workflowInstanceId: { in: wfIds } } });
  await prisma.workflowInstance.deleteMany({ where: { id: { in: wfIds } } });
  await prisma.journalEntryLine.deleteMany({ where: { journalEntryId: { in: [disposalA.journal.id, disposalB.journal.id] } } });
  await prisma.journalEntry.deleteMany({ where: { id: { in: [disposalA.journal.id, disposalB.journal.id] } } });
  await prisma.assetRegisterEntry.deleteMany({ where: { id: { in: [assetA.id, assetB.id] } } });
  await prisma.chartOfAccount.deleteMany({ where: { ledgerEntityCode: fundCode } });
  await prisma.ledgerEntity.delete({ where: { code: fundCode } });
  const userIds = [corpServices.id, outsider.id];
  await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
  await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });

  await prisma.$disconnect();

  if (failed) {
    console.error('\nSMOKE FAILED — see FAIL lines above.');
    process.exitCode = 1;
  } else {
    console.log('\nSMOKE OK — fixed-asset disposal/derecognition (invariant 51b-x) against the real live DB.');
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
