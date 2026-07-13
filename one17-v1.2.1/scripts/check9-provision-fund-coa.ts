import 'dotenv/config';
// Invariant 42(b) (CHECK9): closes a real pre-existing defect found while
// wiring engines to EventJournalService -- ONE17-HALAL-FUND-01 and
// ONE17-MUDARABAH-POOL-01 (created by scripts/walkthrough-seed.ts) have
// ZERO chart_of_account rows, meaning no journal has ever been postable
// against either entity. Fixed here, standalone (not folded back into
// walkthrough-seed.ts's own ledger-entity-creation blocks) because those
// blocks are idempotency-guarded on the entity already existing, so a
// re-run would never reach a CoA-creation step added inside them.
//
// Every account code/name below is copied VERBATIM from the existing
// event_journal_config seed rows (prisma/seed.ts, Check-2 origin,
// Formula-Library-derived) -- never invented here. Where a config row
// names a RANGE (e.g. "1100-1150"), one literal code within that range is
// picked for this fund's single Investment Account / Income / Fee
// Expense / Fee Payable line -- a genuine simplification, not a
// fabrication of new codes; a multi-line CoA within those ranges is the
// future product-factory CoA template's job (invariant 44b).
//
// aaoifiRef/ifrsRef: no authoritative per-account standard citation was
// available (One17_Reporting_Standards_Spec_v1.md states the CoA is
// "entity-template based per product factory" -- not yet built). Rather
// than invent specific FAS/IAS paragraph numbers, every row is stamped
// with an honest "PENDING" marker naming this file, so nobody mistakes a
// placeholder for a real classification. See QUESTIONS_FOR_REVIEW.md.
import { PrismaService } from '../src/prisma/prisma.service';

const PENDING_REF = 'PENDING -- see scripts/check9-provision-fund-coa.ts (invariant 44b CoA template not yet built)';

const HF_CODE = 'ONE17-HALAL-FUND-01';
const POOL_CODE = 'ONE17-MUDARABAH-POOL-01';

const HF_ACCOUNTS = [
  { accountCode: '1000', accountName: 'Cash', accountType: 'ASSET' as const },
  { accountCode: '1110', accountName: 'Investment Account', accountType: 'ASSET' as const },
  { accountCode: '1200', accountName: 'Accrued Income', accountType: 'ASSET' as const },
  { accountCode: '2000', accountName: 'Redemption Payable', accountType: 'LIABILITY' as const },
  { accountCode: '2020', accountName: 'Fee Payable', accountType: 'LIABILITY' as const },
  { accountCode: '2060', accountName: 'Distribution Payable', accountType: 'LIABILITY' as const },
  { accountCode: '2070', accountName: 'Charity Payable', accountType: 'LIABILITY' as const },
  { accountCode: '3010', accountName: 'Investor Capital', accountType: 'EQUITY' as const },
  { accountCode: '3020', accountName: 'Retained Earnings', accountType: 'EQUITY' as const },
  { accountCode: '4010', accountName: 'Income', accountType: 'INCOME' as const },
  { accountCode: '5030', accountName: 'Fee Expense', accountType: 'EXPENSE' as const },
  { accountCode: '6000', accountName: 'Impairment / Loss Expense', accountType: 'EXPENSE' as const },
];

// Invariant 44(a): the pool never carries an Investment Account line the
// way a unit-NAV fund does -- capital + allocated profit only. Everything
// else mirrors HF's set (cash, capital, distribution, fee, charity).
const POOL_ACCOUNTS = HF_ACCOUNTS.filter((a) => a.accountCode !== '1110');

async function provision(prisma: PrismaService, ledgerEntityCode: string, accounts: typeof HF_ACCOUNTS) {
  let created = 0, skipped = 0;
  for (const acct of accounts) {
    const existing = await prisma.chartOfAccount.findFirst({ where: { ledgerEntityCode, accountCode: acct.accountCode } });
    if (existing) { skipped++; continue; }
    await prisma.chartOfAccount.create({
      data: { ledgerEntityCode, accountCode: acct.accountCode, accountName: acct.accountName, accountType: acct.accountType, aaoifiRef: PENDING_REF, ifrsRef: PENDING_REF },
    });
    created++;
  }
  console.log(`OK: ${ledgerEntityCode}: ${created} chart_of_account rows created, ${skipped} already present.`);
}

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const hfEntity = await prisma.ledgerEntity.findUnique({ where: { code: HF_CODE } });
  if (hfEntity) await provision(prisma, HF_CODE, HF_ACCOUNTS);
  else console.log(`SKIP: ${HF_CODE} not found on this database.`);
  const poolEntity = await prisma.ledgerEntity.findUnique({ where: { code: POOL_CODE } });
  if (poolEntity) await provision(prisma, POOL_CODE, POOL_ACCOUNTS);
  else console.log(`SKIP: ${POOL_CODE} not found on this database.`);
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
