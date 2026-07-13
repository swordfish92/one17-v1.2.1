// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/ledger/ledger.smoke.ts
// Exercises the Build Plan step 8 ledger skeletons: entity-separation
// enforced at both the service layer AND the DB trigger independently
// (same standard as every other structural invariant in this codebase),
// the debit/credit shape CHECK, and capability gating on every activity.
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { LedgerService } from './ledger.service';
import { LedgerLifecycleError } from './ledger.types';
import { DocumentService } from '../document/document.service';

const kobo = (naira: number) => BigInt(naira) * 100n;

async function expectReject(label: string, fn: () => Promise<unknown>) {
  try {
    await fn();
    console.error(`FAIL (expected rejection): ${label}`);
    process.exitCode = 1;
  } catch (err) {
    console.log(
      `OK (rejected as expected): ${label} — ${(err as Error).message.split('\n')[0]}`,
    );
  }
}

async function expectSucceed<T>(
  label: string,
  fn: () => Promise<T>,
): Promise<T | undefined> {
  try {
    const result = await fn();
    console.log(`OK (succeeded as expected): ${label}`);
    return result;
  } catch (err) {
    console.error(`FAIL (expected success): ${label}`, err);
    process.exitCode = 1;
    return undefined;
  }
}

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));
  const ledger = new LedgerService(prisma, audit, delegation, workflow);
  const documents = new DocumentService(prisma, delegation, audit);

  const RUN = Date.now();
  const emailFor = (name: string) => `ledger-${name}-${RUN}@one17.test`;

  const users = new Map<string, { id: string }>();
  const makeUser = async (email: string, roleCode: string) => {
    const user = await prisma.appUser.create({
      data: { email, displayName: email },
    });
    await rbac.assignRole({ userId: user.id, roleCode });
    users.set(email, user);
    return user;
  };
  const id = (email: string) => users.get(email)!.id;

  await makeUser(emailFor('admin'), 'SUPER_ADMIN');
  await makeUser(emailFor('finadmin'), 'FIN_ADMIN');
  await makeUser(emailFor('portoff'), 'PORT_OFF');
  await makeUser(emailFor('investor'), 'INVESTOR');

  const companyCode = `SMOKE-COMPANY-${RUN}`;
  const fundCode = `SMOKE-FUND-${RUN}`;
  // Invariant 49(b) (CHECK11): createLedgerEntity now refuses a FUND/POOL/
  // MANDATE entity with no productCode -- this fixture's purpose is entity-
  // separation/debit-credit/capability mechanics, nothing to do with the
  // product-factory chain, so a throwaway Product row (deleted in cleanup
  // below alongside the rest of this fixture's rows) is all that's needed.
  const smokeProductCode = `SMOKE-FUND-PRODUCT-${RUN}`;
  await prisma.product.deleteMany({ where: { code: smokeProductCode } });
  await prisma.product.create({
    data: { code: smokeProductCode, name: 'Smoke Fund Product', engineType: 'UNIT_NAV' },
  });

  await expectReject(
    'non-SUPER_ADMIN (INVESTOR) cannot create a ledger entity',
    () =>
      ledger.createLedgerEntity({
        code: companyCode,
        name: 'Smoke Company',
        entityType: 'COMPANY',
        primaryBasis: 'IFRS',
        createdByUserId: id(emailFor('investor')),
      }),
  );

  await expectSucceed('SUPER_ADMIN creates COMPANY ledger entity', () =>
    ledger.createLedgerEntity({
      code: companyCode,
      name: 'Smoke Company',
      entityType: 'COMPANY',
      primaryBasis: 'IFRS',
      createdByUserId: id(emailFor('admin')),
    }),
  );
  await expectSucceed('SUPER_ADMIN creates FUND ledger entity', () =>
    ledger.createLedgerEntity({
      code: fundCode,
      name: 'Smoke Fund',
      entityType: 'FUND',
      primaryBasis: 'AAOIFI',
      productCode: smokeProductCode,
      createdByUserId: id(emailFor('admin')),
    }),
  );
  await expectReject(
    'AMD-11.2: a COMPANY ledger entity cannot be created with primaryBasis AAOIFI',
    () =>
      ledger.createLedgerEntity({
        code: `SMOKE-COMPANY-WRONG-BASIS-${RUN}`,
        name: 'Smoke Company Wrong Basis',
        entityType: 'COMPANY',
        primaryBasis: 'AAOIFI',
        createdByUserId: id(emailFor('admin')),
      }),
  );

  await expectSucceed('load COMPANY chart-of-accounts template', () =>
    ledger.loadChartOfAccountsTemplate({
      ledgerEntityCode: companyCode,
      createdByUserId: id(emailFor('admin')),
      accounts: [
        {
          accountCode: '1000',
          accountName: 'Cash',
          accountType: 'ASSET',
          aaoifiRef: 'FAS-CASH',
          ifrsRef: 'IAS1-CASH',
        },
        {
          accountCode: '3010',
          accountName: 'Investor Capital',
          accountType: 'EQUITY',
          aaoifiRef: 'FAS-EQUITY',
          ifrsRef: 'IAS1-EQUITY',
        },
        {
          accountCode: '2000',
          accountName: 'Redemption Payable',
          accountType: 'LIABILITY',
          aaoifiRef: 'FAS-LIAB',
          ifrsRef: 'IAS1-LIAB',
        },
      ],
    }),
  );
  await expectSucceed('load FUND chart-of-accounts template', () =>
    ledger.loadChartOfAccountsTemplate({
      ledgerEntityCode: fundCode,
      createdByUserId: id(emailFor('admin')),
      accounts: [
        {
          accountCode: '1000',
          accountName: 'Fund Cash',
          accountType: 'ASSET',
          aaoifiRef: 'FAS-CASH',
          ifrsRef: 'IAS1-CASH',
        },
        {
          accountCode: '4000',
          accountName: 'Fund Income',
          accountType: 'INCOME',
          aaoifiRef: 'FAS-INCOME',
          ifrsRef: 'IAS1-INCOME',
        }, // FUND-only code, used below to prove cross-entity rejection
      ],
    }),
  );

  await expectReject(
    'non-FIN_ADMIN/PORT_OFF (INVESTOR) cannot create a journal entry',
    () =>
      ledger.createJournalEntry({
        ledgerEntityCode: companyCode,
        journalReference: 'JE-SMOKE-000',
        entryDate: new Date(),
        description: 'rejected attempt',
        createdByUserId: id(emailFor('investor')),
        lines: [
          { accountCode: '1000', debitKobo: kobo(1000) },
          { accountCode: '3010', creditKobo: kobo(1000) },
        ],
      }),
  );

  const journal = await expectSucceed(
    'FIN_ADMIN creates a valid within-entity journal entry',
    () =>
      ledger.createJournalEntry({
        ledgerEntityCode: companyCode,
        journalReference: 'JE-SMOKE-001',
        entryDate: new Date(),
        description: 'Capital placement received',
        createdByUserId: id(emailFor('finadmin')),
        lines: [
          { accountCode: '1000', debitKobo: kobo(1000) },
          { accountCode: '3010', creditKobo: kobo(1000) },
        ],
      }),
  );

  await expectReject(
    'service rejects a journal line naming an account that only exists in a DIFFERENT ledger entity',
    () =>
      ledger.createJournalEntry({
        ledgerEntityCode: companyCode,
        journalReference: 'JE-SMOKE-002',
        entryDate: new Date(),
        description: 'entity-mixing attempt',
        createdByUserId: id(emailFor('finadmin')),
        lines: [
          { accountCode: '1000', debitKobo: kobo(500) }, // COMPANY's own 1000 — fine
          { accountCode: '4000', creditKobo: kobo(500) }, // exists only in FUND, not COMPANY
        ],
      }),
  );

  // Bypass the service entirely: prove the DATABASE TRIGGER, not just
  // LedgerService, rejects a line mixing ledger entities.
  if (journal) {
    const fundAccount = await prisma.chartOfAccount.findFirstOrThrow({
      where: { ledgerEntityCode: fundCode, accountCode: '1000' },
    });
    await expectReject(
      "DB trigger rejects a line referencing another entity's account (service bypassed)",
      () =>
        prisma.journalEntryLine.create({
          data: {
            journalEntryId: journal.id,
            accountId: fundAccount.id,
            debitKobo: kobo(1),
          },
        }),
    );
  }

  // Bypass the service to prove the debit/credit shape CHECK independently.
  const companyCashAccount = await prisma.chartOfAccount.findFirstOrThrow({
    where: { ledgerEntityCode: companyCode, accountCode: '1000' },
  });
  if (journal) {
    await expectReject(
      'DB CHECK rejects a line that is both a debit AND a credit (service bypassed)',
      () =>
        prisma.journalEntryLine.create({
          data: {
            journalEntryId: journal.id,
            accountId: companyCashAccount.id,
            debitKobo: kobo(1),
            creditKobo: kobo(1),
          },
        }),
    );
  }

  await expectSucceed('FIN_ADMIN records a cashbook entry', () =>
    ledger.recordCashbookEntry({
      ledgerEntityCode: companyCode,
      entryDate: new Date(),
      description: 'Bank statement credit',
      amountKobo: kobo(1000),
      bankReference: 'STMT-2026-07-04-001',
      createdByUserId: id(emailFor('finadmin')),
    }),
  );

  await expectReject('INVESTOR cannot create a transaction-spine row', () =>
    ledger.createTxn({
      txnType: 'PLACEMENT',
      ledgerEntityCode: fundCode,
      valueDate: new Date(),
      amountKobo: kobo(1000),
      makerUserId: id(emailFor('investor')),
    }),
  );
  const txn = await expectSucceed(
    'PORT_OFF creates a PLACEMENT transaction-spine row',
    () =>
      ledger.createTxn({
        txnType: 'PLACEMENT',
        ledgerEntityCode: fundCode,
        valueDate: new Date(),
        amountKobo: kobo(1000),
        makerUserId: id(emailFor('portoff')),
      }),
  );
  if (txn && (txn.checkerUserId !== null || txn.status !== 'PENDING')) {
    console.error(
      'FAIL: a freshly-created txn should be PENDING with no checker (posting rules are Phase 2)',
    );
    process.exitCode = 1;
  } else {
    console.log(
      'OK: txn created as PENDING, no checker — maker-only, as designed for this skeleton',
    );
  }

  // Invariant 39(c), Tier 3: TXN_ENTRY confirmed (not retired) — the new
  // listTxns() read backing the live screen.
  const allTxns = await ledger.listTxns({});
  if (txn && allTxns.some((t) => t.id === txn.id)) {
    console.log(`OK: listTxns() surfaces the just-created txn (${allTxns.length} total) — the new TransactionEntryPage's read backing, not a fabricated summary`);
  } else {
    console.error('FAIL: expected listTxns() to include the just-created txn');
    process.exitCode = 1;
  }

  // Document attachment now lives on the shared DocumentService (invariant
  // 39a) — the ledger-local attachDocument() this used to call was an
  // unreached duplicate of the exact same DocumentRegisterEntry write,
  // removed once DocumentService got a real controller/screen.
  await expectReject('INVESTOR cannot attach a document', () =>
    documents.attach(
      {
        entityType: 'journal_entry',
        entityId: journal?.id ?? 'n/a',
        documentType: 'BANK_STATEMENT',
        fileReference: 'file://smoke/statement.pdf',
      },
      id(emailFor('investor')),
    ),
  );
  await expectSucceed(
    'FIN_ADMIN attaches a supporting document to the journal entry',
    () =>
      documents.attach(
        {
          entityType: 'journal_entry',
          entityId: journal?.id ?? 'n/a',
          documentType: 'BANK_STATEMENT',
          fileReference: 'file://smoke/statement.pdf',
        },
        id(emailFor('finadmin')),
      ),
  );

  // Invariant 39(a), Tier 1: the manual JOURNAL_ENTRIES maker screen's own
  // list methods.
  const allEntities = await ledger.listAllLedgerEntities();
  if (allEntities.some((e) => e.code === companyCode) && allEntities.some((e) => e.code === fundCode)) {
    console.log('OK: listAllLedgerEntities() includes both the COMPANY and FUND smoke entities (unlike listFundEntities, which excludes COMPANY)');
  } else {
    console.error('FAIL: listAllLedgerEntities() missing an expected entity', allEntities.map((e) => e.code));
    process.exitCode = 1;
  }

  const companyAccounts = await ledger.listChartOfAccounts(companyCode);
  if (companyAccounts.length > 0 && companyAccounts.every((a) => a.isActive)) {
    console.log(`OK: listChartOfAccounts('${companyCode}') returns ${companyAccounts.length} active account(s)`);
  } else {
    console.error('FAIL: listChartOfAccounts() did not return the expected active accounts', companyAccounts);
    process.exitCode = 1;
  }

  const companyJournals = await ledger.listJournalEntries({ ledgerEntityCode: companyCode });
  if (journal && companyJournals.some((j) => j.id === journal.id && j.lines.length > 0)) {
    console.log("OK: listJournalEntries({ledgerEntityCode}) finds the smoke journal with its lines' account codes joined in");
  } else {
    console.error('FAIL: listJournalEntries() did not surface the expected journal', companyJournals);
    process.exitCode = 1;
  }

  // Cleanup.
  await prisma.documentRegisterEntry.deleteMany({
    where: { entityId: journal?.id ?? 'n/a' },
  });
  if (txn) await prisma.txn.delete({ where: { id: txn.id } });
  await prisma.cashbookEntry.deleteMany({
    where: { ledgerEntityCode: { in: [companyCode, fundCode] } },
  });
  if (journal) {
    await prisma.journalEntryLine.deleteMany({
      where: { journalEntryId: journal.id },
    });
    await prisma.journalEntry.delete({ where: { id: journal.id } });
  }
  await prisma.chartOfAccount.deleteMany({
    where: { ledgerEntityCode: { in: [companyCode, fundCode] } },
  });
  await prisma.ledgerEntity.deleteMany({
    where: { code: { in: [companyCode, fundCode] } },
  });
  await prisma.product.deleteMany({ where: { code: smokeProductCode } });
  const userIds = [...users.values()].map((u) => u.id);
  await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
  await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });

  await prisma.$disconnect();
}

main().catch((err) => {
  if (err instanceof LedgerLifecycleError) {
    console.error('Unhandled LedgerLifecycleError:', err.message);
  } else {
    console.error(err);
  }
  process.exitCode = 1;
});
