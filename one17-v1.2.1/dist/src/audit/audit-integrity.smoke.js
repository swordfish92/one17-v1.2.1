"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("./audit.service");
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    console.log("=== Pass 1: full-table integrity check (before this run's tampering) ===");
    const before = await audit.verifyChainIntegrity();
    console.log(JSON.stringify({
        ok: before.ok,
        rowsChecked: before.rowsChecked,
        failureCount: before.failures.length,
    }, null, 2));
    if (before.failures.length > 0) {
        const affected = await prisma.auditTrail.findMany({
            where: { id: { in: before.failures.map((f) => BigInt(f.id)) } },
            select: { id: true, entityType: true, action: true },
        });
        console.log('Entity types of the failing rows (for root-cause attribution — see', "this file's header comment: known historical Date-hashing bug,", 'fixed going forward in canonical-json.ts):');
        console.log(JSON.stringify(affected.map((a) => ({
            id: a.id.toString(),
            entityType: a.entityType,
            action: a.action,
        })), null, 2));
    }
    else {
        console.log('OK: full chain intact —', before.rowsChecked, 'rows verified');
    }
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
    console.log(`\nTarget row for the drill: id=${target.id}, entityId=${target.entityId}`);
    console.log('\n=== Disabling audit_trail_no_update (simulating a dropped/bypassed trigger) ===');
    await prisma.$executeRawUnsafe(`ALTER TABLE "audit_trail" DISABLE TRIGGER "audit_trail_no_update"`);
    console.log('Trigger disabled.');
    try {
        console.log('\n=== Tampering with the row directly (bypassing the app entirely) ===');
        await prisma.$executeRawUnsafe(`UPDATE "audit_trail" SET "after" = '{"note":"TAMPERED — trigger was disabled first"}' WHERE "id" = ${target.id}`);
        console.log(`UPDATE succeeded against id=${target.id} — this would have been rejected with the trigger enabled.`);
    }
    finally {
        console.log('\n=== Re-enabling audit_trail_no_update immediately ===');
        await prisma.$executeRawUnsafe(`ALTER TABLE "audit_trail" ENABLE TRIGGER "audit_trail_no_update"`);
        const [{ tgenabled }] = await prisma.$queryRawUnsafe(`SELECT tgenabled::text FROM pg_trigger WHERE tgname = 'audit_trail_no_update' AND tgrelid = 'audit_trail'::regclass`);
        if (tgenabled !== 'O') {
            console.error(`FAIL: trigger re-enable did not take effect — tgenabled='${tgenabled}', expected 'O'`);
            process.exitCode = 1;
        }
        else {
            console.log("Trigger re-enabled and VERIFIED enabled (tgenabled='O').");
        }
    }
    console.log('\n=== Pass 2: full-table integrity check (after tampering) ===');
    const after = await audit.verifyChainIntegrity();
    console.log(JSON.stringify({
        ok: after.ok,
        rowsChecked: after.rowsChecked,
        failureCount: after.failures.length,
    }, null, 2));
    const caught = after.failures.find((f) => f.id === target.id.toString());
    if (!after.ok && caught) {
        console.log('OK: the nightly integrity job DETECTED the tamper —');
        console.log(JSON.stringify(caught, null, 2));
    }
    else {
        console.error('FAIL: expected verifyChainIntegrity() to flag the tampered row');
        process.exitCode = 1;
    }
    console.log('\nNote: the tampered row and every audit_trail row after it in the pre-existing chain now', 'fail hash-chain verification permanently (this IS the detection mechanism — a nightly job', 'would page someone). This row is deliberately left as evidence of the drill, labelled', "entityType='integrity_drill', not silently repaired: repairing a tampered audit row is", 'itself indistinguishable from the tamper it exists to catch.');
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=audit-integrity.smoke.js.map