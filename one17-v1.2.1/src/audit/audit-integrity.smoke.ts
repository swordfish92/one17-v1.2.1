// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/audit/audit-integrity.smoke.ts
// Exercises AuditService.verifyChainIntegrity() — the nightly integrity job
// body (CLAUDE.md invariant #3) — two ways: (1) a full run over the WHOLE
// live audit_trail table, and (2) proof it detects tampering performed
// after deliberately disabling the insert-only trigger (simulating the
// exact failure mode prevention alone can't catch: the trigger itself being
// bypassed by whoever/whatever has ALTER TABLE rights).
//
// KNOWN HISTORICAL FINDING (M1 evidence pass, 2026-07-04): this script's
// first run surfaced ~24 pre-existing rows (delegation_of_authority CREATE,
// investor UPDATE) that fail hash recomputation. Root cause: canonical-
// json.ts's sortKeysDeep() did not special-case `Date` objects — a bare
// Date has no enumerable own keys, so it was silently hashed as `{}` while
// the ACTUAL stored JSONB correctly captured the ISO string (Postgres/pg's
// real JSON.stringify path calls Date.toJSON()). Fixed in canonical-json.ts
// (Date -> toISOString() before sorting) so all FUTURE rows hash correctly;
// these ~24 historical rows are permanently unverifiable by design — you
// cannot "repair" a tamper-evident hash without that repair itself being
// indistinguishable from tampering. They are real findings, not evidence of
// external compromise (confirmed: root cause is a hashing bug, not altered
// data — the stored `after` content is the historically-correct value).
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from './audit.service';

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);

  console.log(
    "=== Pass 1: full-table integrity check (before this run's tampering) ===",
  );
  const before = await audit.verifyChainIntegrity();
  console.log(
    JSON.stringify(
      {
        ok: before.ok,
        rowsChecked: before.rowsChecked,
        failureCount: before.failures.length,
      },
      null,
      2,
    ),
  );
  if (before.failures.length > 0) {
    const affected = await prisma.auditTrail.findMany({
      where: { id: { in: before.failures.map((f) => BigInt(f.id)) } },
      select: { id: true, entityType: true, action: true },
    });
    console.log(
      'Entity types of the failing rows (for root-cause attribution — see',
      "this file's header comment: known historical Date-hashing bug,",
      'fixed going forward in canonical-json.ts):',
    );
    console.log(
      JSON.stringify(
        affected.map((a) => ({
          id: a.id.toString(),
          entityType: a.entityType,
          action: a.action,
        })),
        null,
        2,
      ),
    );
  } else {
    console.log('OK: full chain intact —', before.rowsChecked, 'rows verified');
  }

  // Create a dedicated, clearly-labelled row to tamper with.
  await audit.record({
    actorRole: 'SMOKE_TEST',
    action: 'CREATE',
    entityType: 'integrity_drill',
    entityId: `drop-trigger-drill-${Date.now()}`,
    after: { note: 'original content, pre-tamper' },
  });
  const target = await prisma.auditTrail.findFirstOrThrow({
    where: { entityType: 'integrity_drill' },
    orderBy: { occurredAt: 'desc' },
  });
  console.log(
    `\nTarget row for the drill: id=${target.id}, entityId=${target.entityId}`,
  );

  // try/finally: this window (trigger disabled) is a genuine, if
  // deliberate and momentary, security gap — the re-enable MUST run even if
  // the tamper statement itself throws. (Root-cause note from the M1
  // evidence pass: an earlier manual run of this exact sequence was piped
  // through `| head -N`, which closed the process's stdout pipe mid-run and
  // killed it via SIGPIPE between DISABLE and ENABLE, leaving the trigger
  // disabled cluster-wide for real until caught by the next adversarial
  // check and manually re-enabled. Never truncate the output of a script
  // that disables and re-enables a security control — let it run to
  // completion, or don't run it at all.)
  console.log(
    '\n=== Disabling audit_trail_no_update (simulating a dropped/bypassed trigger) ===',
  );
  await prisma.$executeRawUnsafe(
    `ALTER TABLE "audit_trail" DISABLE TRIGGER "audit_trail_no_update"`,
  );
  console.log('Trigger disabled.');

  try {
    console.log(
      '\n=== Tampering with the row directly (bypassing the app entirely) ===',
    );
    await prisma.$executeRawUnsafe(
      `UPDATE "audit_trail" SET "after" = '{"note":"TAMPERED — trigger was disabled first"}' WHERE "id" = ${target.id}`,
    );
    console.log(
      `UPDATE succeeded against id=${target.id} — this would have been rejected with the trigger enabled.`,
    );
  } finally {
    console.log('\n=== Re-enabling audit_trail_no_update immediately ===');
    await prisma.$executeRawUnsafe(
      `ALTER TABLE "audit_trail" ENABLE TRIGGER "audit_trail_no_update"`,
    );
    const [{ tgenabled }] = await prisma.$queryRawUnsafe<
      { tgenabled: string }[]
    >(
      `SELECT tgenabled::text FROM pg_trigger WHERE tgname = 'audit_trail_no_update' AND tgrelid = 'audit_trail'::regclass`,
    );
    if (tgenabled !== 'O') {
      console.error(
        `FAIL: trigger re-enable did not take effect — tgenabled='${tgenabled}', expected 'O'`,
      );
      process.exitCode = 1;
    } else {
      console.log("Trigger re-enabled and VERIFIED enabled (tgenabled='O').");
    }
  }

  console.log('\n=== Pass 2: full-table integrity check (after tampering) ===');
  const after = await audit.verifyChainIntegrity();
  console.log(
    JSON.stringify(
      {
        ok: after.ok,
        rowsChecked: after.rowsChecked,
        failureCount: after.failures.length,
      },
      null,
      2,
    ),
  );
  const caught = after.failures.find((f) => f.id === target.id.toString());
  if (!after.ok && caught) {
    console.log('OK: the nightly integrity job DETECTED the tamper —');
    console.log(JSON.stringify(caught, null, 2));
  } else {
    console.error(
      'FAIL: expected verifyChainIntegrity() to flag the tampered row',
    );
    process.exitCode = 1;
  }

  console.log(
    '\nNote: the tampered row and every audit_trail row after it in the pre-existing chain now',
    'fail hash-chain verification permanently (this IS the detection mechanism — a nightly job',
    'would page someone). This row is deliberately left as evidence of the drill, labelled',
    "entityType='integrity_drill', not silently repaired: repairing a tampered audit row is",
    'itself indistinguishable from the tamper it exists to catch.',
  );

  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
