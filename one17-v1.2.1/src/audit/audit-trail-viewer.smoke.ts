// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/audit/audit-trail-viewer.smoke.ts
// Invariant 59 (CHECK15) adversarial set: listEvents finds a freshly-written
// event and filters correctly; getEntityHistory returns full record
// lifecycle in order; sensitive fields are masked in both before/after;
// getLatestIntegrityCheck reads (never recomputes) the real scheduler
// result; export produces an immutable report_run and rejects an empty
// filter; AUDIT_TRAIL_VIEW's pre-existing 10-role VIEW grant is intact.
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { AuditTrailViewerService } from './audit-trail-viewer.service';
import { AuditTrailViewerError } from './audit-trail-viewer.types';

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
  const viewer = new AuditTrailViewerService(prisma);

  const actor = await prisma.appUser.create({ data: { email: `atv-actor-${RUN}@one17.test`, displayName: 'atv-actor' } });
  const entityId = `SMOKE-ENTITY-${RUN}`;

  // === Write a small history via the real AuditService, exactly the way
  // every other service in this codebase writes audit rows -- this test
  // computes nothing new, it only reads back what AuditService produces. ===
  await audit.record({
    actorUserId: actor.id, actorRole: 'FIN_ADMIN', action: 'CREATE',
    entityType: 'SmokeAuditEntity', entityId, before: null,
    after: { name: 'Initial', bankAccountNumber: '0123456789', notes: 'clean' },
  });
  await audit.record({
    actorUserId: actor.id, actorRole: 'FIN_ADMIN', action: 'UPDATE',
    entityType: 'SmokeAuditEntity', entityId,
    before: { name: 'Initial', bankAccountNumber: '0123456789' },
    after: { name: 'Updated', bankAccountNumber: '0123456789', apiKey: 'sk-should-not-leak' },
  });

  // === listEvents finds the fresh rows, filterable by entity ===
  const page = await viewer.listEvents({ entityType: 'SmokeAuditEntity', entityId }, 1, 50);
  if (page.total === 2 && page.events.length === 2) {
    ok(`listEvents() finds both freshly-written events for entityId=${entityId} (total=${page.total})`);
  } else {
    fail('expected exactly 2 events for the fixture entity', page);
  }
  if (page.events.every((e) => e.actorName === 'atv-actor')) {
    ok('listEvents() resolves actorUserId -> displayName correctly');
  } else {
    fail('actor name resolution failed', page.events.map((e) => e.actorName));
  }

  // === Masking: bankAccountNumber and apiKey never appear in plaintext ===
  const serialized = JSON.stringify(page.events);
  if (!serialized.includes('0123456789') && !serialized.includes('sk-should-not-leak')) {
    ok('sensitive fields (bankAccountNumber, apiKey) are masked in listEvents() output — before/after never leak raw secret values');
  } else {
    fail('sensitive value leaked unmasked through listEvents()', serialized);
  }
  const updateEvent = page.events.find((e) => e.action === 'UPDATE')!;
  if ((updateEvent.after as any).apiKey === '***MASKED***' && (updateEvent.after as any).name === 'Updated') {
    ok('masking is field-selective: apiKey masked, non-sensitive fields (name) pass through unchanged');
  } else {
    fail('masking was not field-selective as expected', updateEvent.after);
  }

  // === getEntityHistory: full lifecycle in chronological order ===
  const history = await viewer.getEntityHistory('SmokeAuditEntity', entityId);
  if (history.length === 2 && history[0].action === 'CREATE' && history[1].action === 'UPDATE') {
    ok('getEntityHistory() returns the full record lifecycle in chronological order (CREATE, then UPDATE)');
  } else {
    fail('getEntityHistory() ordering or count wrong', history.map((h) => h.action));
  }

  // === Integrity check: read-only, honestly reflects whatever the real
  // scheduler last computed (never hardcoded, never recomputed here) ===
  const integrity = await viewer.getLatestIntegrityCheck();
  const realCheck = await prisma.scheduledJobRun.findFirst({ where: { jobCode: 'AUDIT_INTEGRITY_NIGHTLY' }, orderBy: { scheduledFor: 'desc' } });
  if (!realCheck && integrity.status === 'NEVER_RUN') {
    ok('getLatestIntegrityCheck() honestly reports NEVER_RUN when no scheduled run exists yet');
  } else if (realCheck && integrity.status === realCheck.status) {
    ok(`getLatestIntegrityCheck() reads the real latest AUDIT_INTEGRITY_NIGHTLY run (status=${integrity.status}, ok=${integrity.ok}, flaggedCount=${integrity.flaggedCount}) rather than recomputing`);
  } else {
    fail('getLatestIntegrityCheck() did not match the actual scheduled_job_run row', { integrity, realCheck });
  }

  // === Export as report_run: immutable, and empty-filter rejected ===
  const exported = await viewer.exportAsReportRun({ entityType: 'SmokeAuditEntity', entityId }, actor.id);
  if (exported.eventCount === 2) {
    ok(`exportAsReportRun() produces a report_run (${exported.reportRunId}) with the correct event count (${exported.eventCount})`);
  } else {
    fail('export event count wrong', exported);
  }
  await expectReject('DB trigger rejects UPDATE on the exported report_run (same AMD-11 immutability trigger every snapshot reuses)', () =>
    prisma.reportRun.update({ where: { id: exported.reportRunId }, data: { figures: {} } }));
  await expectReject('exportAsReportRun() rejects a filter matching zero events', () =>
    viewer.exportAsReportRun({ entityType: 'SmokeAuditEntity', entityId: `no-such-entity-${RUN}` }, actor.id));

  // === AUDIT_TRAIL_VIEW's pre-existing 10-role VIEW grant is intact
  // (no new seed work was needed for this task -- confirming that holds) ===
  const grants = await prisma.rolePermission.findMany({ where: { functionCode: 'AUDIT_TRAIL_VIEW', level: 'VIEW' } });
  const grantedRoles = new Set(grants.map((g) => g.roleCode));
  const expectedRoles = ['SUPER_ADMIN', 'MD_CEO', 'PORT_MGR', 'PORT_OFF', 'FIN_ADMIN', 'COMPLIANCE', 'SHARIAH_REV', 'AUDITOR', 'CRAO', 'HEAD_SAU'];
  if (expectedRoles.every((r) => grantedRoles.has(r))) {
    ok(`AUDIT_TRAIL_VIEW VIEW grant set intact across all ${expectedRoles.length} roles -- this screen is reachable by everyone who already held the capability`);
  } else {
    fail('AUDIT_TRAIL_VIEW VIEW grant set is missing an expected role', { expectedRoles, grantedRoles: [...grantedRoles] });
  }

  console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — Audit Trail Viewer proven: event listing + entity filtering, sensitive-field masking, entity-history ordering, honest integrity read, immutable report_run export, empty-filter rejection, pre-existing VIEW grants intact.`);
  process.exitCode = failed ? 1 : 0;
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
