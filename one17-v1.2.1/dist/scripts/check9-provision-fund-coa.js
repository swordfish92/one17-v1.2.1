"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../src/prisma/prisma.service");
const PENDING_REF = 'PENDING -- see scripts/check9-provision-fund-coa.ts (invariant 44b CoA template not yet built)';
const HF_CODE = 'ONE17-HALAL-FUND-01';
const POOL_CODE = 'ONE17-MUDARABAH-POOL-01';
const HF_ACCOUNTS = [
    { accountCode: '1000', accountName: 'Cash', accountType: 'ASSET' },
    { accountCode: '1110', accountName: 'Investment Account', accountType: 'ASSET' },
    { accountCode: '1200', accountName: 'Accrued Income', accountType: 'ASSET' },
    { accountCode: '2000', accountName: 'Redemption Payable', accountType: 'LIABILITY' },
    { accountCode: '2020', accountName: 'Fee Payable', accountType: 'LIABILITY' },
    { accountCode: '2060', accountName: 'Distribution Payable', accountType: 'LIABILITY' },
    { accountCode: '2070', accountName: 'Charity Payable', accountType: 'LIABILITY' },
    { accountCode: '3010', accountName: 'Investor Capital', accountType: 'EQUITY' },
    { accountCode: '3020', accountName: 'Retained Earnings', accountType: 'EQUITY' },
    { accountCode: '4010', accountName: 'Income', accountType: 'INCOME' },
    { accountCode: '5030', accountName: 'Fee Expense', accountType: 'EXPENSE' },
    { accountCode: '6000', accountName: 'Impairment / Loss Expense', accountType: 'EXPENSE' },
];
const POOL_ACCOUNTS = HF_ACCOUNTS.filter((a) => a.accountCode !== '1110');
async function provision(prisma, ledgerEntityCode, accounts) {
    let created = 0, skipped = 0;
    for (const acct of accounts) {
        const existing = await prisma.chartOfAccount.findFirst({ where: { ledgerEntityCode, accountCode: acct.accountCode } });
        if (existing) {
            skipped++;
            continue;
        }
        await prisma.chartOfAccount.create({
            data: { ledgerEntityCode, accountCode: acct.accountCode, accountName: acct.accountName, accountType: acct.accountType, aaoifiRef: PENDING_REF, ifrsRef: PENDING_REF },
        });
        created++;
    }
    console.log(`OK: ${ledgerEntityCode}: ${created} chart_of_account rows created, ${skipped} already present.`);
}
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const hfEntity = await prisma.ledgerEntity.findUnique({ where: { code: HF_CODE } });
    if (hfEntity)
        await provision(prisma, HF_CODE, HF_ACCOUNTS);
    else
        console.log(`SKIP: ${HF_CODE} not found on this database.`);
    const poolEntity = await prisma.ledgerEntity.findUnique({ where: { code: POOL_CODE } });
    if (poolEntity)
        await provision(prisma, POOL_CODE, POOL_ACCOUNTS);
    else
        console.log(`SKIP: ${POOL_CODE} not found on this database.`);
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=check9-provision-fund-coa.js.map