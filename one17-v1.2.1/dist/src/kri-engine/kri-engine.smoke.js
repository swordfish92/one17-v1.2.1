"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const kri_engine_service_1 = require("./kri-engine.service");
let failed = false;
function ok(label) { console.log(`OK: ${label}`); }
function fail(label, detail) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const engine = new kri_engine_service_1.KriEngineService(prisma, audit);
    const readingDate = new Date();
    readingDate.setHours(0, 0, 0, 0);
    const result = await engine.runDailyBatch(readingDate);
    ok(`Batch run: ${result.computed} readings computed, ${result.skipped} definitions skipped (not instrumented), ${result.escalations} RED escalations`);
    const totalDefs = await prisma.kriDefinition.count();
    if (totalDefs === 50)
        ok(`50 kri_definition rows present (grew from CHECK15's 49 — CPL-07 added for the CHECK26 screening list-freshness KRI)`);
    else
        fail(`expected 50 kri_definitions, got ${totalDefs}`);
    const notInstrumented = await prisma.kriReading.findMany({
        where: { readingDate, ragStatus: 'NOT_INSTRUMENTED' },
    });
    const notInstrumentedDefs = await prisma.kriDefinition.count({ where: { computeStatus: { not: 'INSTRUMENTED' } } });
    if (notInstrumented.length >= notInstrumentedDefs && notInstrumented.every((r) => r.value === null)) {
        ok(`${notInstrumented.length} NOT_INSTRUMENTED readings (>= ${notInstrumentedDefs} non-instrumented definitions; the excess is BZ-01/BZ-05 correctly reporting "no ACTIVE budget yet"), all with null value — honest N/A, never fake green`);
    }
    else {
        fail(`expected >= ${notInstrumentedDefs} NOT_INSTRUMENTED readings all with null value, got ${notInstrumented.length} (some non-null: ${notInstrumented.filter((r) => r.value !== null).length})`);
    }
    const bz01Rows = await prisma.kriReading.findMany({ where: { kriCode: 'BZ-01', readingDate } });
    const bz01PerEntity = bz01Rows.find((r) => !r.isAggregate);
    const bz01Aggregate = bz01Rows.find((r) => r.isAggregate);
    if (bz01PerEntity && bz01Aggregate && bz01PerEntity.ledgerEntityCode) {
        ok(`BZ-01: per-entity row (${bz01PerEntity.ledgerEntityCode}) + aggregate row both present`);
    }
    else {
        fail(`BZ-01: expected both a per-entity and an aggregate row, got ${JSON.stringify(bz01Rows)}`);
    }
    const cpl02 = await prisma.kriReading.findFirst({ where: { kriCode: 'CPL-02', readingDate, isAggregate: true } });
    if (cpl02 && cpl02.value !== null && Number(cpl02.value) >= 0) {
        ok(`CPL-02 Open Shariah Non-Compliance computed: ${cpl02.value} (rag=${cpl02.ragStatus})`);
    }
    else {
        fail(`CPL-02 did not compute a reading`, cpl02);
    }
    const tr03 = await prisma.kriReading.findFirst({ where: { kriCode: 'TR-03', readingDate, isAggregate: true } });
    if (tr03?.detail && tr03.detail.requirementKobo === (15000000000n).toString()) {
        ok(`TR-03 CAR resolved requirementKobo=15,000,000,000 (₦150m, the real invariant-13 figure, not TD_'s ₦30m)`);
    }
    else {
        fail(`TR-03 did not resolve the ₦150m capital requirement`, tr03?.detail);
    }
    if (tr03 && tr03.ragStatus === 'AWAITING_MATRIX') {
        ok(`TR-03 correctly reports AWAITING_MATRIX — its matrix category has real config but null numeric thresholds, never a guessed G/A/R (invariant 16)`);
    }
    else {
        fail(`TR-03 expected AWAITING_MATRIX given this DB's current matrix state, got ${tr03?.ragStatus}`);
    }
    const redReadings = await prisma.kriReading.findMany({ where: { readingDate, ragStatus: 'RED' } });
    const escalations = await prisma.kriEscalation.findMany({ where: { kriReadingId: { in: redReadings.map((r) => r.id) } } });
    if (escalations.length === redReadings.length) {
        ok(`${redReadings.length} RED reading(s) this run, all ${escalations.length} have a matching kri_escalation row`);
    }
    else {
        fail(`expected ${redReadings.length} escalations for ${redReadings.length} RED readings, got ${escalations.length}`);
    }
    const syntheticCheck = await prisma.complianceCheck.create({
        data: { checkCode: `SMOKE-ADVERSARIAL-${Date.now()}`, description: 'Synthetic non-compliance for the CHECK4 RED-escalation adversarial test', result: 'NON_COMPLIANT' },
    });
    await engine.runDailyBatch(readingDate);
    const cpl02Red = await prisma.kriReading.findFirst({ where: { kriCode: 'CPL-02', readingDate, isAggregate: true } });
    const cpl02Escalation = await prisma.kriEscalation.findFirst({ where: { kriReadingId: cpl02Red?.id }, orderBy: { escalatedAt: 'desc' } });
    if (cpl02Red?.ragStatus === 'RED' && cpl02Escalation?.ownerLabel === 'CEO + SSB') {
        ok(`Adversarial RED test: injecting 1 non-compliant record flips CPL-02 GREEN->RED and writes an escalation row owned by "CEO + SSB" (the seeded escalation_owner) — RED->escalation proven live, not just by absence`);
    }
    else {
        fail(`expected CPL-02 to go RED with a "CEO + SSB" escalation after injecting non-compliance`, { rag: cpl02Red?.ragStatus, owner: cpl02Escalation?.ownerLabel });
    }
    await prisma.complianceCheck.delete({ where: { id: syntheticCheck.id } });
    await engine.runDailyBatch(readingDate);
    const beforeCount = await prisma.kriReading.count({ where: { readingDate } });
    await engine.runDailyBatch(readingDate);
    const afterCount = await prisma.kriReading.count({ where: { readingDate } });
    if (beforeCount === afterCount)
        ok(`Re-running the same day's batch is idempotent (${beforeCount} readings before and after)`);
    else
        fail(`expected idempotent re-run, got ${beforeCount} before vs ${afterCount} after`);
    console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — KRI engine batch run against the real live DB.`);
    process.exitCode = failed ? 1 : 0;
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=kri-engine.smoke.js.map