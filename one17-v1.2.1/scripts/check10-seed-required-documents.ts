import 'dotenv/config';
// Invariant 44(e) (CHECK10): "config-defined required-document list per
// application type." Standalone script (not folded into prisma/seed.ts)
// for the same reason as check10-seed-metric-definitions.ts -- needs a
// real AppUser as createdByUserId, which the config-only production seed
// deliberately never creates. Run AFTER bootstrap-admin.ts/walkthrough-seed.ts.
import { PrismaService } from '../src/prisma/prisma.service';

function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string): never { console.error(`FAIL: ${label}`); process.exit(1); }

// The four document types invariant 44(e) names by example verbatim:
// "financials, incorporation docs, Shariah certs, collateral evidence."
const REQUIRED_DOCUMENTS = [
  { applicationType: 'FACILITY_APPLICATION', documentType: 'FINANCIALS' },
  { applicationType: 'FACILITY_APPLICATION', documentType: 'INCORPORATION_DOCS' },
  { applicationType: 'FACILITY_APPLICATION', documentType: 'SHARIAH_CERT' },
  { applicationType: 'FACILITY_APPLICATION', documentType: 'COLLATERAL_EVIDENCE' },
];

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const admin = await prisma.appUser.findFirst({
    where: { roles: { some: { roleCode: 'SUPER_ADMIN' } } },
    orderBy: { createdAt: 'asc' },
  });
  if (!admin) fail('No SUPER_ADMIN user found on this database -- run scripts/bootstrap-admin.ts or scripts/walkthrough-seed.ts first.');

  for (const row of REQUIRED_DOCUMENTS) {
    const existing = await prisma.requiredDocumentConfig.findUnique({
      where: { applicationType_documentType: { applicationType: row.applicationType, documentType: row.documentType } },
    });
    if (existing) { ok(`${row.applicationType}/${row.documentType} already on file (idempotent re-run)`); continue; }
    await prisma.requiredDocumentConfig.create({ data: { ...row, status: 'ACTIVE', createdByUserId: admin!.id } });
    ok(`${row.applicationType}/${row.documentType} recorded`);
  }
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
