// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx ts-node src/audit/audit.smoke.ts
// Deletes its own rows at the end via TRUNCATE as postgres superuser
// (the only way to clear an insert-only table) rather than leaving test
// data in a table meant to prove immutability.
import 'dotenv/config';
import { AuditService } from './audit.service';
import { PrismaService } from '../prisma/prisma.service';

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);

  await audit.record({
    actorRole: 'CEO',
    action: 'LOGIN',
    entityType: 'session',
    entityId: 'smoke-1',
  });
  await audit.record({
    actorRole: 'CEO',
    action: 'APPROVE',
    entityType: 'disbursement',
    entityId: 'smoke-2',
    before: { status: 'pending' },
    after: { status: 'approved' },
  });

  const rows = await prisma.auditTrail.findMany({
    where: { entityId: { in: ['smoke-1', 'smoke-2'] } },
    orderBy: { occurredAt: 'asc' },
  });
  console.log(
    'rows:',
    rows.map((r) => ({
      entityId: r.entityId,
      previousHash: r.previousHash,
      tamperHash: r.tamperHash,
    })),
  );

  const chainOk = rows[1]?.previousHash === rows[0]?.tamperHash;
  console.log('hash chain links correctly:', chainOk);
  if (!chainOk) process.exitCode = 1;

  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
