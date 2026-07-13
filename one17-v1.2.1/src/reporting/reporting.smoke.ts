// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/reporting/reporting.smoke.ts
// Exercises AMD-11 / One17_Reporting_Standards_Spec_v1.md: dual-ref CoA,
// ledger-entity basis, basis_adjustment tagging (service AND DB-CHECK
// layers), a minimal post -> per-basis trial balance path, framework-map
// version approval + remapping without touching posted journals, report_run
// immutability, and the empty-but-wired regulator template registry.
//
// NOTE ON RESIDUE: report_run is INSERT-only (same pattern as audit_trail)
// and FK-referenced by the ledger entity/framework map/statement template
// this test creates — so, exactly like audit_trail, none of this test's
// rows can or should be cleaned up afterward. Every entity/user created
// here uses a Date.now() suffix so repeated runs never collide.
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { LedgerService } from '../ledger/ledger.service';
import { ReportingService } from './reporting.service';
import { LedgerLifecycleError } from '../ledger/ledger.types';
import { ReportingLifecycleError } from './reporting.types';
import { WorkflowAuthorizationError } from '../workflow/workflow.types';

const kobo = (naira: number) => BigInt(naira) * 100n;
const RUN = Date.now();

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

const bigintSafe = (_key: string, value: unknown) =>
  typeof value === 'bigint' ? value.toString() : value;

function assertEqual(label: string, actual: unknown, expected: unknown) {
  const a = JSON.stringify(actual, bigintSafe);
  const e = JSON.stringify(expected, bigintSafe);
  if (a === e) {
    console.log(`OK (assertion): ${label}`);
  } else {
    console.error(`FAIL (assertion): ${label} — actual=${a} expected=${e}`);
    process.exitCode = 1;
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
  const reporting = new ReportingService(
    prisma,
    audit,
    delegation,
    workflow,
    ledger,
  );

  const users = new Map<string, { id: string }>();
  const makeUser = async (label: string, roleCode: string) => {
    const email = `reporting-${label}-${RUN}@one17.test`;
    const user = await prisma.appUser.create({
      data: { email, displayName: email },
    });
    await rbac.assignRole({ userId: user.id, roleCode });
    users.set(label, user);
    return user;
  };
  const id = (label: string) => users.get(label)!.id;

  await makeUser('finadmin', 'FIN_ADMIN');
  await makeUser('finadmin-checker', 'FIN_ADMIN');
  await makeUser('ceo', 'MD_CEO');
  await makeUser('ceo2', 'MD_CEO');
  await makeUser('compliance', 'COMPLIANCE');
  await makeUser('investor', 'INVESTOR');
  await makeUser('admin', 'SUPER_ADMIN');

  const fundCode = `SMOKE-AMD11-FUND-${RUN}`;

  // Invariant 49(b) (CHECK11): createLedgerEntity now refuses a FUND/POOL/
  // MANDATE entity with no productCode -- this fixture's own purpose is
  // AMD-11 dual-ref CoA/trial-balance mechanics, nothing to do with the
  // product-factory chain, so a throwaway Product row (raw Prisma, same
  // style as this file's own makeUser()) is all that's needed to satisfy
  // the FK, not a full create->approve->Shariah-gate walk.
  const smokeProduct = await prisma.product.create({
    data: { code: `SMOKE-AMD11-PRODUCT-${RUN}`, name: 'Smoke AMD-11 Product', engineType: 'UNIT_NAV' },
  });

  await expectSucceed(
    'SUPER_ADMIN creates a FUND ledger entity (AAOIFI primary)',
    () =>
      ledger.createLedgerEntity({
        code: fundCode,
        name: 'Smoke AMD-11 Fund',
        entityType: 'FUND',
        primaryBasis: 'AAOIFI',
        productCode: smokeProduct.code,
        createdByUserId: id('admin'),
      }),
  );

  await expectSucceed('load dual-ref chart-of-accounts template', () =>
    ledger.loadChartOfAccountsTemplate({
      ledgerEntityCode: fundCode,
      createdByUserId: id('admin'),
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
          accountName: 'Placement Income',
          accountType: 'INCOME',
          aaoifiRef: 'FAS4-MUDARABAH-INCOME',
          ifrsRef: 'IFRS9-INTEREST-EQUIV',
        },
        {
          accountCode: '5000',
          accountName: 'ECL Allowance (IFRS-only view)',
          accountType: 'EXPENSE',
          aaoifiRef: 'FAS30-NA',
          ifrsRef: 'IFRS9-ECL-ALLOWANCE',
        },
      ],
    }),
  );

  // --- basis_adjustment tagging: service-layer validation ---
  await expectReject(
    'BASE journal cannot carry divergenceType/adjustmentForBasis (service layer)',
    () =>
      ledger.createJournalEntry({
        ledgerEntityCode: fundCode,
        journalReference: `JE-AMD11-BAD-BASE-${RUN}`,
        entryDate: new Date(),
        description: 'invalid: BASE with adjustment tags',
        createdByUserId: id('finadmin'),
        journalClass: 'BASE',
        divergenceType: 'IFRS9_ECL_VS_FAS30',
        adjustmentForBasis: 'IFRS',
        lines: [
          { accountCode: '1000', debitKobo: kobo(1) },
          { accountCode: '4000', creditKobo: kobo(1) },
        ],
      }),
  );
  await expectReject(
    'BASIS_ADJUSTMENT journal requires divergenceType + adjustmentForBasis (service layer)',
    () =>
      ledger.createJournalEntry({
        ledgerEntityCode: fundCode,
        journalReference: `JE-AMD11-BAD-ADJ-${RUN}`,
        entryDate: new Date(),
        description: 'invalid: BASIS_ADJUSTMENT missing tags',
        createdByUserId: id('finadmin'),
        journalClass: 'BASIS_ADJUSTMENT',
        lines: [
          { accountCode: '5000', debitKobo: kobo(1) },
          { accountCode: '1000', creditKobo: kobo(1) },
        ],
      }),
  );

  // --- one posted (BASE) journal ---
  const baseJournal = await expectSucceed(
    'FIN_ADMIN creates one BASE journal (placement income received)',
    () =>
      ledger.createJournalEntry({
        ledgerEntityCode: fundCode,
        journalReference: `JE-AMD11-BASE-${RUN}`,
        entryDate: new Date(),
        description: 'Placement income received',
        createdByUserId: id('finadmin'),
        lines: [
          { accountCode: '1000', debitKobo: kobo(100_000) },
          { accountCode: '4000', creditKobo: kobo(100_000) },
        ],
      }),
  );

  const unbalancedJournal = await expectSucceed(
    'FIN_ADMIN creates an unbalanced DRAFT journal (for the posting-rejection case)',
    () =>
      ledger.createJournalEntry({
        ledgerEntityCode: fundCode,
        journalReference: `JE-AMD11-UNBALANCED-${RUN}`,
        entryDate: new Date(),
        description: 'deliberately unbalanced',
        createdByUserId: id('finadmin'),
        lines: [
          { accountCode: '1000', debitKobo: kobo(50) },
          { accountCode: '4000', creditKobo: kobo(40) },
        ],
      }),
  );
  if (unbalancedJournal) {
    await expectReject('cannot request posting for an unbalanced journal', () =>
      ledger.requestJournalPosting({
        journalEntryId: unbalancedJournal.id,
        initiatedByUserId: id('finadmin'),
      }),
    );
  }

  let postedBaseJournalSnapshot: unknown;
  if (baseJournal) {
    const postingRequest = await expectSucceed(
      'FIN_ADMIN (maker) requests posting of the balanced BASE journal',
      () =>
        ledger.requestJournalPosting({
          journalEntryId: baseJournal.id,
          initiatedByUserId: id('finadmin'),
        }),
    );
    if (postingRequest) {
      await expectReject(
        'maker cannot approve their own posting request (maker≠checker)',
        () =>
          ledger.approveJournalPosting({
            workflowInstanceId: postingRequest.id,
            approverUserId: id('finadmin'),
          }),
      );
      await expectSucceed(
        'a different FIN_ADMIN (checker) approves the posting',
        () =>
          ledger.approveJournalPosting({
            workflowInstanceId: postingRequest.id,
            approverUserId: id('finadmin-checker'),
          }),
      );
    }
    await expectReject(
      'cannot request posting for an already-POSTED journal again',
      () =>
        ledger.requestJournalPosting({
          journalEntryId: baseJournal.id,
          initiatedByUserId: id('finadmin'),
        }),
    );
    postedBaseJournalSnapshot = await prisma.journalEntry.findUniqueOrThrow({
      where: { id: baseJournal.id },
      include: { lines: true },
    });
  }

  // --- a BASIS_ADJUSTMENT journal tagged for the IFRS view, posted ---
  const adjustmentJournal = await expectSucceed(
    'FIN_ADMIN creates a BASIS_ADJUSTMENT journal (IFRS 9 ECL vs FAS 30 divergence)',
    () =>
      ledger.createJournalEntry({
        ledgerEntityCode: fundCode,
        journalReference: `JE-AMD11-ADJ-${RUN}`,
        entryDate: new Date(),
        description: 'ECL allowance — IFRS view only',
        createdByUserId: id('finadmin'),
        journalClass: 'BASIS_ADJUSTMENT',
        divergenceType: 'IFRS9_ECL_VS_FAS30',
        adjustmentForBasis: 'IFRS',
        lines: [
          { accountCode: '5000', debitKobo: kobo(5_000) },
          { accountCode: '1000', creditKobo: kobo(5_000) },
        ],
      }),
  );
  if (adjustmentJournal) {
    const adjPostingRequest = await expectSucceed(
      'FIN_ADMIN (maker) requests posting of the BASIS_ADJUSTMENT journal',
      () =>
        ledger.requestJournalPosting({
          journalEntryId: adjustmentJournal.id,
          initiatedByUserId: id('finadmin'),
        }),
    );
    if (adjPostingRequest) {
      await expectSucceed(
        'a different FIN_ADMIN (checker) approves the BASIS_ADJUSTMENT posting',
        () =>
          ledger.approveJournalPosting({
            workflowInstanceId: adjPostingRequest.id,
            approverUserId: id('finadmin-checker'),
          }),
      );
    }
  }

  // Bypass the service to prove the DB CHECK independently, same standard
  // as every other structural invariant in this codebase.
  await expectReject(
    'DB CHECK rejects a BASIS_ADJUSTMENT journal with no divergenceType (service bypassed)',
    () =>
      prisma.journalEntry.create({
        data: {
          ledgerEntityCode: fundCode,
          journalReference: `JE-AMD11-DBCHECK-${RUN}`,
          entryDate: new Date(),
          description: 'bypass attempt',
          createdByUserId: id('finadmin'),
          journalClass: 'BASIS_ADJUSTMENT',
          adjustmentForBasis: 'IFRS',
        },
      }),
  );

  // --- trial balance per basis ---
  const aaoifiTb = await expectSucceed(
    "trial balance producible on the FUND entity's native (AAOIFI) basis",
    () => ledger.getTrialBalance(fundCode, 'AAOIFI'),
  );
  const ifrsTb = await expectSucceed(
    "trial balance producible on the FUND entity's non-native (IFRS) basis",
    () => ledger.getTrialBalance(fundCode, 'IFRS'),
  );
  if (aaoifiTb && ifrsTb) {
    const aaoifiHasEcl = aaoifiTb.some((l) => l.accountCode === '5000');
    const ifrsHasEcl = ifrsTb.some((l) => l.accountCode === '5000');
    assertEqual(
      'AAOIFI (native) trial balance excludes the IFRS-only basis_adjustment line',
      aaoifiHasEcl,
      false,
    );
    assertEqual(
      'IFRS (non-native) trial balance includes the basis_adjustment line',
      ifrsHasEcl,
      true,
    );
  }

  // --- CHECK5 item 5h: Balance Sheet / Income Statement / GL presentation
  // over the SAME fund/journals just posted above ---
  await expectReject(
    'INVESTOR (no FINANCIAL_STATEMENTS VIEW) cannot view the balance sheet',
    () => reporting.getBalanceSheet(fundCode, 'AAOIFI', id('investor')),
  );
  const balanceSheet = await expectSucceed(
    'SUPER_ADMIN views the Balance Sheet (AAOIFI) — Cash grouped under ASSET',
    () => reporting.getBalanceSheet(fundCode, 'AAOIFI', id('admin')),
  );
  if (balanceSheet) {
    const cashLine = balanceSheet.assets.find((a) => a.accountCode === '1000');
    assertEqual('Balance Sheet: Cash (1000) appears under assets with balance 100,000 Naira (kobo)', cashLine?.balanceKobo, kobo(100_000).toString());
    const incomeLeakedIntoBs = [...balanceSheet.assets, ...balanceSheet.liabilities, ...balanceSheet.equity].some((l) => l.accountCode === '4000');
    assertEqual('Balance Sheet excludes INCOME-type accounts (they belong to the Income Statement, not the BS)', incomeLeakedIntoBs, false);
  }

  const periodStart = new Date(RUN - 24 * 60 * 60 * 1000);
  const periodEnd = new Date(RUN + 24 * 60 * 60 * 1000);
  const incomeStatementAaoifi = await expectSucceed(
    "MD_CEO views the Income Statement (YTD, fund's native AAOIFI basis) — Placement Income grouped under income",
    () => reporting.getIncomeStatement(fundCode, periodStart, periodEnd, 'AAOIFI', id('ceo')),
  );
  if (incomeStatementAaoifi) {
    const incomeLine = incomeStatementAaoifi.income.find((l) => l.accountCode === '4000');
    assertEqual('Income Statement: Placement Income (4000) = 100,000 Naira (kobo)', incomeLine?.balanceKobo, kobo(100_000).toString());
    const eclLeakedIntoAaoifi = incomeStatementAaoifi.expenses.some((l) => l.accountCode === '5000');
    assertEqual('Income Statement (native AAOIFI basis) excludes the IFRS-only basis_adjustment ECL expense line — same basis-scoping rule as getTrialBalance', eclLeakedIntoAaoifi, false);
    assertEqual('Income Statement (AAOIFI): net income = income (no ECL expense on this basis)', incomeStatementAaoifi.netIncomeKobo, kobo(100_000).toString());
  }
  const incomeStatementIfrs = await expectSucceed(
    'MD_CEO views the Income Statement (YTD, non-native IFRS basis) — includes the basis_adjustment ECL expense',
    () => reporting.getIncomeStatement(fundCode, periodStart, periodEnd, 'IFRS', id('ceo')),
  );
  if (incomeStatementIfrs) {
    const eclLine = incomeStatementIfrs.expenses.find((l) => l.accountCode === '5000');
    assertEqual('Income Statement (IFRS basis): ECL expense (5000) = 5,000 Naira (kobo), from the posted BASIS_ADJUSTMENT journal', eclLine?.balanceKobo, kobo(5_000).toString());
    assertEqual('Income Statement (IFRS): net income = income - ECL expense = 95,000 Naira (kobo)', incomeStatementIfrs.netIncomeKobo, kobo(95_000).toString());
  }

  const recentJournals = await expectSucceed(
    'views recent General Ledger journals for the fund entity',
    () => reporting.getRecentJournals(fundCode, id('admin')),
  );
  if (recentJournals && baseJournal) {
    const hasBaseJournal = recentJournals.some((j) => j.id === baseJournal.id);
    assertEqual('General Ledger listing includes the posted BASE journal (journal_reference + lines)', hasBaseJournal, true);
  }

  // --- accounting_framework_map: propose -> approve, maker != checker ---
  const proposal = await expectSucceed(
    'FIN_ADMIN proposes accounting_framework_map v1',
    () =>
      reporting.proposeFrameworkMapVersion({
        description: `Smoke test framework map v1 (${RUN})`,
        effectiveFrom: new Date(),
        createdByUserId: id('finadmin'),
      }),
  );
  await expectReject(
    'non-FIN_ADMIN (INVESTOR) cannot propose a framework map version',
    () =>
      reporting.proposeFrameworkMapVersion({
        description: 'should be rejected',
        effectiveFrom: new Date(),
        createdByUserId: id('investor'),
      }),
  );

  if (proposal) {
    await expectReject(
      'FIN_ADMIN (the proposer) cannot approve their own framework map proposal (maker != checker)',
      () =>
        reporting.approveFrameworkMapVersion(
          proposal.workflowInstance.id,
          id('finadmin'),
        ),
    );
    await expectSucceed('MD_CEO approves the framework map proposal', () =>
      reporting.approveFrameworkMapVersion(
        proposal.workflowInstance.id,
        id('ceo'),
      ),
    );
  }

  // --- statement template/line + mapping (Phase 4 shape, empty content) ---
  const template = await expectSucceed(
    'FIN_ADMIN creates an (empty-content) AAOIFI statement template',
    () =>
      reporting.createStatementTemplate({
        basis: 'AAOIFI',
        statementCode: `SOFP-${RUN}`,
        name: 'Statement of Financial Position (smoke)',
        createdByUserId: id('finadmin'),
      }),
  );
  const cashLine = await expectSucceed('add a CASH statement line', () =>
    reporting.addStatementLine({
      statementTemplateId: template!.id,
      lineCode: 'CASH',
      label: 'Cash and cash equivalents',
      sortOrder: 1,
      computationType: 'SUM_OF_ACCOUNTS',
      createdByUserId: id('finadmin'),
    }),
  );
  const eclLine = await expectSucceed('add an ECL statement line', () =>
    reporting.addStatementLine({
      statementTemplateId: template!.id,
      lineCode: 'ECL',
      label: 'Expected credit loss allowance (IFRS view)',
      sortOrder: 2,
      computationType: 'SUM_OF_ACCOUNTS',
      createdByUserId: id('finadmin'),
    }),
  );
  void cashLine;
  void eclLine;

  let mappingV1: unknown;
  if (proposal && template) {
    mappingV1 = await expectSucceed(
      'map Cash account -> CASH line under framework map v1',
      () =>
        reporting.addStatementLineMapping({
          frameworkMapId: proposal.frameworkMap.id,
          ledgerEntityCode: fundCode,
          accountCode: '1000',
          statementTemplateId: template.id,
          lineCode: 'CASH',
          mappedByUserId: id('finadmin'),
        }),
    );
  }

  // --- UAT-AMD-11: remapping via a NEW framework-map version changes
  // presentation without touching posted journals ---
  const proposalV2 = await expectSucceed(
    'FIN_ADMIN proposes accounting_framework_map v2',
    () =>
      reporting.proposeFrameworkMapVersion({
        description: `Smoke test framework map v2 (${RUN}) — remaps Cash to ECL line`,
        effectiveFrom: new Date(),
        createdByUserId: id('finadmin'),
      }),
  );
  if (proposalV2) {
    await expectSucceed('MD_CEO (a different approver) approves v2', () =>
      reporting.approveFrameworkMapVersion(
        proposalV2.workflowInstance.id,
        id('ceo2'),
      ),
    );
  }
  if (proposalV2 && template) {
    await expectSucceed(
      'remap the SAME Cash account to a DIFFERENT line under v2',
      () =>
        reporting.addStatementLineMapping({
          frameworkMapId: proposalV2.frameworkMap.id,
          ledgerEntityCode: fundCode,
          accountCode: '1000',
          statementTemplateId: template.id,
          lineCode: 'ECL',
          mappedByUserId: id('finadmin'),
        }),
    );
  }
  if (mappingV1) {
    const v1Reloaded = await prisma.statementLineMapping.findUniqueOrThrow({
      where: { id: (mappingV1 as { id: string }).id },
    });
    assertEqual(
      "v1's original mapping (Cash -> CASH) is untouched by the v2 remap",
      v1Reloaded.statementLineId,
      (mappingV1 as { statementLineId: string }).statementLineId,
    );
  }
  if (baseJournal && postedBaseJournalSnapshot) {
    const reloaded = await prisma.journalEntry.findUniqueOrThrow({
      where: { id: baseJournal.id },
      include: { lines: true },
    });
    assertEqual(
      'the posted BASE journal is byte-identical after the v2 remap (remapping never touches posted journals)',
      reloaded,
      postedBaseJournalSnapshot,
    );
  }

  // --- report_run: generate per basis, prove immutability ---
  let reportRunId: string | undefined;
  if (proposalV2) {
    const run = await expectSucceed(
      'FIN_ADMIN generates a report_run snapshot on the IFRS basis',
      () =>
        reporting.generateReportRun({
          ledgerEntityCode: fundCode,
          basis: 'IFRS',
          periodStart: new Date(RUN - 24 * 60 * 60 * 1000),
          periodEnd: new Date(),
          frameworkMapId: proposalV2.frameworkMap.id,
          statementTemplateId: template?.id,
          generatedByUserId: id('finadmin'),
        }),
    );
    reportRunId = run?.id;
  }
  if (reportRunId) {
    await expectReject(
      'DB trigger rejects an UPDATE on report_run (service bypassed) — immutable snapshot',
      () =>
        prisma.reportRun.update({
          where: { id: reportRunId },
          data: { figures: [] },
        }),
    );
    await expectReject(
      'DB trigger rejects a DELETE on report_run (service bypassed) — immutable snapshot',
      () => prisma.reportRun.delete({ where: { id: reportRunId } }),
    );
  }

  // --- regulator_template registry: empty but wired ---
  await expectReject(
    'non-COMPLIANCE/SUPER_ADMIN (INVESTOR) cannot register a regulator template',
    () =>
      reporting.registerRegulatorTemplate({
        regulatorCode: 'SEC_NG',
        templateCode: `SMOKE-DUMMY-${RUN}`,
        name: 'should be rejected',
        createdByUserId: id('investor'),
      }),
  );
  await expectSucceed(
    'COMPLIANCE registers a dummy SEC template purely via configuration (Reporting Spec §6)',
    () =>
      reporting.registerRegulatorTemplate({
        regulatorCode: 'SEC_NG',
        templateCode: `SMOKE-DUMMY-${RUN}`,
        name: 'Smoke dummy SEC return',
        filingFrequency: 'QUARTERLY',
        createdByUserId: id('compliance'),
      }),
  );

  console.log(
    '\nNote: report_run, its referenced framework-map versions/statement template, and the ledger entity/CoA are intentionally NOT cleaned up (report_run is insert-only and FK-restricts deletion of what it references) — same permanent-residue pattern as audit_trail. All test rows are namespaced with the run timestamp ' +
      RUN +
      '.',
  );

  await prisma.$disconnect();
}

main().catch((err) => {
  if (
    err instanceof LedgerLifecycleError ||
    err instanceof ReportingLifecycleError ||
    err instanceof WorkflowAuthorizationError
  ) {
    console.error('Unhandled lifecycle error:', err.message);
  } else {
    console.error(err);
  }
  process.exitCode = 1;
});
