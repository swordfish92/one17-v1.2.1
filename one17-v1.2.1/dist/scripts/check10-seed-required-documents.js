"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../src/prisma/prisma.service");
function ok(label) { console.log(`OK: ${label}`); }
function fail(label) { console.error(`FAIL: ${label}`); process.exit(1); }
const REQUIRED_DOCUMENTS = [
    { applicationType: 'FACILITY_APPLICATION', documentType: 'FINANCIALS' },
    { applicationType: 'FACILITY_APPLICATION', documentType: 'INCORPORATION_DOCS' },
    { applicationType: 'FACILITY_APPLICATION', documentType: 'SHARIAH_CERT' },
    { applicationType: 'FACILITY_APPLICATION', documentType: 'COLLATERAL_EVIDENCE' },
];
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const admin = await prisma.appUser.findFirst({
        where: { roles: { some: { roleCode: 'SUPER_ADMIN' } } },
        orderBy: { createdAt: 'asc' },
    });
    if (!admin)
        fail('No SUPER_ADMIN user found on this database -- run scripts/bootstrap-admin.ts or scripts/walkthrough-seed.ts first.');
    for (const row of REQUIRED_DOCUMENTS) {
        const existing = await prisma.requiredDocumentConfig.findUnique({
            where: { applicationType_documentType: { applicationType: row.applicationType, documentType: row.documentType } },
        });
        if (existing) {
            ok(`${row.applicationType}/${row.documentType} already on file (idempotent re-run)`);
            continue;
        }
        await prisma.requiredDocumentConfig.create({ data: { ...row, status: 'ACTIVE', createdByUserId: admin.id } });
        ok(`${row.applicationType}/${row.documentType} recorded`);
    }
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=check10-seed-required-documents.js.map