// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/replay/replay.smoke.ts
// Item 2 of the post-Check-2 instruction: "Replay harness completes BEFORE
// engine code — it is the acceptance mechanism, so it exists before the
// thing it accepts." Ingests the REAL workbook CSV history — Halal Fund
// transactions, Halal Fund NAV history, Mudarabah investor transactions
// (placements) — into staging, and proves reconciliation COUNTS only. No
// engine math runs here; that is tasks 39/40/42, deliberately deferred.
import 'dotenv/config';
import * as fs from 'fs';
import * as path from 'path';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { ReplayService } from './replay.service';

const RUN = Date.now();
const WORKBOOK_DIR = path.join(__dirname, '..', '..', '..', 'Workbook_Extracts');

let failed = false;
function ok(label: string) {
  console.log(`OK: ${label}`);
}
function fail(label: string, detail?: unknown) {
  console.error(`FAIL: ${label}`, detail ?? '');
  failed = true;
}

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));
  const replay = new ReplayService(prisma, audit, delegation);

  const email = `replay-finadmin-${RUN}@one17.test`;
  let user = await prisma.appUser.findUnique({ where: { email } });
  if (!user) {
    user = await prisma.appUser.create({ data: { email, displayName: email } });
    await rbac.assignRole({ userId: user.id, roleCode: 'FIN_ADMIN' });
  }

  // Adversarial: a role with no REPLAY_HARNESS capability cannot ingest.
  const investorEmail = `replay-investor-${RUN}@one17.test`;
  let investorUser = await prisma.appUser.findUnique({ where: { email: investorEmail } });
  if (!investorUser) {
    investorUser = await prisma.appUser.create({ data: { email: investorEmail, displayName: investorEmail } });
    await rbac.assignRole({ userId: investorUser.id, roleCode: 'INVESTOR' });
  }
  try {
    await replay.ingestCsv({
      sourceCode: 'SHOULD_FAIL',
      fileName: 'x.csv',
      csvContent: 'a,b\n1,2\n',
      skipLeadingLines: 0,
      uploadedByUserId: investorUser.id,
    });
    fail('INVESTOR should not be able to ingest a replay source file');
  } catch {
    ok('INVESTOR correctly rejected from ingesting a replay source file (no REPLAY_HARNESS capability)');
  }

  const SOURCES: { sourceCode: string; file: string; skip: number }[] = [
    { sourceCode: 'HALAL_FUND_TXN_HISTORY', file: path.join(WORKBOOK_DIR, 'Halal_Fund', '04_Transactions_VALUES.csv.csv'), skip: 2 },
    { sourceCode: 'HALAL_FUND_NAV_HISTORY', file: path.join(WORKBOOK_DIR, 'Halal_Fund', '18_NAV_History_VALUES.csv.csv'), skip: 2 },
    { sourceCode: 'MUDARABAH_TXN_HISTORY', file: path.join(WORKBOOK_DIR, 'Private_Mudarabah', '06_Investor_Transactions_VALUES.csv.csv'), skip: 3 },
  ];

  const batchIds = new Map<string, string>();
  for (const src of SOURCES) {
    const csvContent = fs.readFileSync(src.file, 'utf-8');
    const batch = await replay.ingestCsv({
      sourceCode: src.sourceCode,
      fileName: path.basename(src.file),
      csvContent,
      skipLeadingLines: src.skip,
      uploadedByUserId: user.id,
    });
    batchIds.set(src.sourceCode, batch.id);
    ok(`${src.sourceCode}: ingested ${batch.totalRows} rows from ${path.basename(src.file)}`);

    // reconciliationCounts reads the MOST RECENT batch for a source code —
    // scoped correctly even though ingestion itself is append-only (a
    // second run of this smoke test, or a fresh workbook export in
    // production, adds a new batch rather than overwriting history).
    const counts = await replay.reconciliationCounts(src.sourceCode);
    console.log(`  ${counts.detail}`);
  }

  // Targeted assertions proving the three named datasets actually landed —
  // scoped to THIS run's own batch, since ingestion is deliberately
  // append-only (re-running this smoke test adds new batches rather than
  // mutating prior ones; a global count across all history would double-
  // count on every re-run).
  const txnCount = await prisma.replaySourceRow.count({ where: { batchId: batchIds.get('HALAL_FUND_TXN_HISTORY') } });
  if (txnCount === 894) ok(`Halal Fund transaction history: all ${txnCount} historical rows staged`);
  else fail(`expected 894 Halal Fund txn rows, got ${txnCount}`);

  const navCount = await prisma.replaySourceRow.count({ where: { batchId: batchIds.get('HALAL_FUND_NAV_HISTORY') } });
  if (navCount === 367) ok(`Halal Fund NAV history: all ${navCount} rows staged, including the known placeholder/instruction rows and the defective negative-NAV row at year-end — not cleaned, staged as-is`);
  else fail(`expected 367 NAV history rows, got ${navCount}`);

  const mudarabahCount = await prisma.replaySourceRow.count({ where: { batchId: batchIds.get('MUDARABAH_TXN_HISTORY') } });
  if (mudarabahCount === 1001) ok(`Mudarabah investor transactions (placements): all ${mudarabahCount} rows staged`);
  else fail(`expected 1001 Mudarabah txn rows, got ${mudarabahCount}`);

  // Re-ingesting the same file creates ANOTHER new batch (ingestion is
  // deliberately append-only/versioned by batch, mirroring MigrationBatch —
  // a fresh workbook export becomes a new batch, never an in-place mutation
  // of history) — prove that explicitly by comparing batch counts before
  // and after, rather than asserting an absolute count that would break on
  // every re-run of this smoke test.
  const batchesBefore = await prisma.replayBatch.count({ where: { sourceCode: 'HALAL_FUND_NAV_HISTORY' } });
  const secondBatch = await replay.ingestCsv({
    sourceCode: 'HALAL_FUND_NAV_HISTORY',
    fileName: '18_NAV_History_VALUES.csv.csv',
    csvContent: fs.readFileSync(SOURCES[1].file, 'utf-8'),
    skipLeadingLines: 2,
    uploadedByUserId: user.id,
  });
  const batchesAfter = await prisma.replayBatch.count({ where: { sourceCode: 'HALAL_FUND_NAV_HISTORY' } });
  if (batchesAfter === batchesBefore + 1 && secondBatch.totalRows === 367) {
    ok(`re-ingesting the same workbook export creates a new batch (append-only history: ${batchesBefore} -> ${batchesAfter}), not an in-place overwrite`);
  } else {
    fail(`expected batch count to grow by exactly 1 (${batchesBefore} -> ${batchesBefore + 1}) with totalRows=367, got ${batchesAfter} batches, latest totalRows=${secondBatch.totalRows}`);
  }

  // ---- Invariant 39(c), Tier 3: REPLAY_HARNESS's live screen wiring ----
  const allReplayBatches = await replay.listBatches();
  if (allReplayBatches.length >= 2 && allReplayBatches.every((b) => typeof b.sourceCode === 'string')) {
    ok(`listBatches() surfaces all ${allReplayBatches.length} replay batches — the new ReplayController's read backing, not a fabricated summary`);
  } else {
    fail(`expected listBatches() to return at least 2 real batches`, allReplayBatches.length);
  }

  console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — replay harness ingestion + reconciliation counts proven against the real workbook CSV history.`);
  process.exitCode = failed ? 1 : 0;
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
