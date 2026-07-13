// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/period/period.smoke.ts
// Exercises Phase 2 core (CHECK2 pass, 2026-07-04): journal approval-before-
// posting, accounting periods + close workflow (DB-trigger enforced, not
// service code), and inter-entity mirroring (linked, never spanning,
// invariant #5 intact). This is the file the three named CHECK2 adversarial
// cases live in: post into a closed period, post an unapproved journal,
// attempt a cross-entity mirror as a single spanning journal.
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { LedgerService } from '../ledger/ledger.service';
import { PeriodService } from './period.service';
import { BankReconciliationService } from './bank-reconciliation.service';
import { LedgerLifecycleError } from '../ledger/ledger.types';
import { PeriodLifecycleError } from './period.types';
import { WorkflowInboxService } from '../ops-api/workflow-inbox.service';

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

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));
  const ledger = new LedgerService(prisma, audit, delegation, workflow);
  const bankReconciliation = new BankReconciliationService(prisma, audit, delegation);
  const period = new PeriodService(prisma, audit, delegation, workflow, bankReconciliation);

  const users = new Map<string, { id: string }>();
  const makeUser = async (label: string, roleCode: string) => {
    const email = `period-${label}-${RUN}@one17.test`;
    const user = await prisma.appUser.create({
      data: { email, displayName: email },
    });
    await rbac.assignRole({ userId: user.id, roleCode });
    users.set(label, user);
    return user;
  };
  const id = (label: string) => users.get(label)!.id;

  await makeUser('finadmin', 'FIN_ADMIN');
  await makeUser('finadmin2', 'FIN_ADMIN');
  await makeUser('ceo', 'MD_CEO');
  await makeUser('admin', 'SUPER_ADMIN');
  await makeUser('investor', 'INVESTOR');

  const companyCode = `SMOKE-P2-COMPANY-${RUN}`;
  const fundCode = `SMOKE-P2-FUND-${RUN}`;

  // Invariant 49(b) (CHECK11): createLedgerEntity now refuses a FUND/POOL/
  // MANDATE entity with no productCode -- this fixture's purpose is journal
  // approval/period-close/inter-entity-mirroring mechanics, nothing to do
  // with the product-factory chain, so a throwaway Product row is all
  // that's needed to satisfy the FK.
  const smokeProduct = await prisma.product.create({
    data: { code: `SMOKE-P2-PRODUCT-${RUN}`, name: 'Phase 2 smoke product', engineType: 'UNIT_NAV' },
  });

  await ledger.createLedgerEntity({
    code: companyCode,
    name: 'Phase 2 smoke company',
    entityType: 'COMPANY',
    primaryBasis: 'IFRS',
    createdByUserId: id('admin'),
  });
  await ledger.createLedgerEntity({
    code: fundCode,
    name: 'Phase 2 smoke fund',
    entityType: 'FUND',
    primaryBasis: 'AAOIFI',
    productCode: smokeProduct.code,
    createdByUserId: id('admin'),
  });
  await ledger.loadChartOfAccountsTemplate({
    ledgerEntityCode: companyCode,
    createdByUserId: id('admin'),
    accounts: [
      {
        accountCode: '1000',
        accountName: 'Cash',
        accountType: 'ASSET',
        aaoifiRef: 'FAS-CASH',
        ifrsRef: 'IAS1-CASH',
      },
      {
        accountCode: '1100',
        accountName: 'Management fee receivable',
        accountType: 'ASSET',
        aaoifiRef: 'FAS-RECV',
        ifrsRef: 'IAS1-RECV',
      },
      {
        accountCode: '4010',
        accountName: 'Management fees',
        accountType: 'INCOME',
        aaoifiRef: 'FAS-FEEINC',
        ifrsRef: 'IAS1-FEEINC',
      },
    ],
  });
  await ledger.loadChartOfAccountsTemplate({
    ledgerEntityCode: fundCode,
    createdByUserId: id('admin'),
    accounts: [
      {
        accountCode: '1000',
        accountName: 'Fund cash',
        accountType: 'ASSET',
        aaoifiRef: 'FAS-CASH',
        ifrsRef: 'IAS1-CASH',
      },
      {
        accountCode: '5010',
        accountName: 'Management fee expense',
        accountType: 'EXPENSE',
        aaoifiRef: 'FAS-FEEEXP',
        ifrsRef: 'IAS1-FEEEXP',
      },
      {
        accountCode: '2010',
        accountName: 'Fee payable to manager',
        accountType: 'LIABILITY',
        aaoifiRef: 'FAS-PAYABLE',
        ifrsRef: 'IAS1-PAYABLE',
      },
    ],
  });

  // Small helper: draft -> request -> approve, the full maker-checker path.
  async function postJournal(
    ledgerEntityCode: string,
    journalReference: string,
    entryDate: Date,
    lines: { accountCode: string; debitKobo?: bigint; creditKobo?: bigint }[],
    makerId: string,
    checkerId: string,
  ) {
    const draft = await ledger.createJournalEntry({
      ledgerEntityCode,
      journalReference,
      entryDate,
      description: journalReference,
      createdByUserId: makerId,
      lines,
    });
    const request = await ledger.requestJournalPosting({
      journalEntryId: draft.id,
      initiatedByUserId: makerId,
    });
    return ledger.approveJournalPosting({
      workflowInstanceId: request.id,
      approverUserId: checkerId,
    });
  }

  // ==========================================================================
  // 1. Accounting periods: open, post within an OPEN period, close (maker≠
  //    checker), then CHECK2 adversarial case #1 — post into a CLOSED period.
  // ==========================================================================
  const periodStart = new Date('2026-06-01T00:00:00Z');
  const periodEnd = new Date('2026-06-30T23:59:59Z');

  await expectReject(
    'non-FIN_ADMIN (INVESTOR) cannot open an accounting period',
    () =>
      period.openPeriod({
        ledgerEntityCode: companyCode,
        periodStart,
        periodEnd,
        openedByUserId: id('investor'),
      }),
  );

  const juneCompanyPeriod = await expectSucceed(
    'FIN_ADMIN opens June 2026 accounting period for the COMPANY entity',
    () =>
      period.openPeriod({
        ledgerEntityCode: companyCode,
        periodStart,
        periodEnd,
        openedByUserId: id('finadmin'),
      }),
  );

  const withinPeriodDate = new Date('2026-06-15T12:00:00Z');
  const juneJournal = await expectSucceed(
    'post a journal dated inside the OPEN June period — succeeds',
    () =>
      postJournal(
        companyCode,
        `JE-P2-JUNE-${RUN}`,
        withinPeriodDate,
        [
          { accountCode: '1000', debitKobo: kobo(1_000) },
          { accountCode: '4010', creditKobo: kobo(1_000) },
        ],
        id('finadmin'),
        id('finadmin2'),
      ),
  );
  console.log(
    juneJournal?.status === 'POSTED'
      ? 'OK: journal posted successfully while its period is OPEN'
      : 'FAIL: expected the June journal to post successfully',
  );

  if (juneCompanyPeriod) {
    const closeRequest = await expectSucceed(
      'FIN_ADMIN (maker) requests closing the June period',
      () =>
        period.requestPeriodClose({
          periodId: juneCompanyPeriod.id,
          initiatedByUserId: id('finadmin'),
        }),
    );
    if (closeRequest) {
      await expectReject(
        'maker cannot approve their own period-close request (maker≠checker)',
        () =>
          period.approvePeriodClose({
            workflowInstanceId: closeRequest.id,
            approverUserId: id('finadmin'),
          }),
      );
      const closed = await expectSucceed(
        'MD_CEO (a different authority) approves the period close',
        () =>
          period.approvePeriodClose({
            workflowInstanceId: closeRequest.id,
            approverUserId: id('ceo'),
          }),
      );
      console.log(
        closed?.status === 'CLOSED'
          ? 'OK: accounting period is now CLOSED'
          : 'FAIL: expected period status CLOSED',
      );
    }
  }

  // --- CHECK2 adversarial case #1: post into a closed period ---
  const anotherJuneJournal = await expectSucceed(
    'create ANOTHER journal dated inside the now-CLOSED June period (DRAFT succeeds — only posting is gated)',
    () =>
      ledger.createJournalEntry({
        ledgerEntityCode: companyCode,
        journalReference: `JE-P2-JUNE-LATE-${RUN}`,
        entryDate: withinPeriodDate,
        description: 'attempted post-lock entry',
        createdByUserId: id('finadmin'),
        lines: [
          { accountCode: '1000', debitKobo: kobo(500) },
          { accountCode: '4010', creditKobo: kobo(500) },
        ],
      }),
  );
  if (anotherJuneJournal) {
    const lateRequest = await expectSucceed(
      'request posting for the late journal — the request itself succeeds (balance check only)',
      () =>
        ledger.requestJournalPosting({
          journalEntryId: anotherJuneJournal.id,
          initiatedByUserId: id('finadmin'),
        }),
    );
    if (lateRequest) {
      await expectReject(
        'CHECK2 #1: approving posting into a CLOSED period is rejected (service layer)',
        () =>
          ledger.approveJournalPosting({
            workflowInstanceId: lateRequest.id,
            approverUserId: id('finadmin2'),
          }),
      );
    }
  }
  // Bypass the service entirely: prove the DB TRIGGER, not just
  // LedgerService, rejects posting into a closed period. First get the
  // workflow instance to APPROVED via the engine (a legitimate step), then
  // attempt the actual status flip directly.
  if (anotherJuneJournal) {
    const reloaded = await prisma.journalEntry.findUniqueOrThrow({
      where: { id: anotherJuneJournal.id },
    });
    if (reloaded.postingWorkflowInstanceId) {
      await workflow.approveNextStep(
        reloaded.postingWorkflowInstanceId,
        id('finadmin2'),
      );
      await expectReject(
        'CHECK2 #1: DB trigger rejects posting into a CLOSED period (service bypassed)',
        () =>
          prisma.journalEntry.update({
            where: { id: anotherJuneJournal.id },
            data: { status: 'POSTED', postedAt: new Date() },
          }),
      );
    }
  }

  // ==========================================================================
  // 2. CHECK2 adversarial case #2: post an unapproved journal.
  // ==========================================================================
  const unapprovedJournal = await expectSucceed(
    'create a fresh DRAFT journal, never submitted for posting',
    () =>
      ledger.createJournalEntry({
        ledgerEntityCode: companyCode,
        journalReference: `JE-P2-UNAPPROVED-${RUN}`,
        entryDate: new Date(),
        description: 'never went through the posting workflow',
        createdByUserId: id('finadmin'),
        lines: [
          { accountCode: '1000', debitKobo: kobo(200) },
          { accountCode: '4010', creditKobo: kobo(200) },
        ],
      }),
  );
  if (unapprovedJournal) {
    await expectReject(
      'CHECK2 #2: DB trigger rejects POSTED with no posting_workflow_instance_id at all (service bypassed)',
      () =>
        prisma.journalEntry.update({
          where: { id: unapprovedJournal.id },
          data: { status: 'POSTED', postedAt: new Date() },
        }),
    );

    const pendingRequest = await ledger.requestJournalPosting({
      journalEntryId: unapprovedJournal.id,
      initiatedByUserId: id('finadmin'),
    });
    await expectReject(
      'CHECK2 #2: DB trigger rejects POSTED while the linked workflow is still PENDING_APPROVAL, not APPROVED (service bypassed)',
      () =>
        prisma.journalEntry.update({
          where: { id: unapprovedJournal.id },
          data: { status: 'POSTED', postedAt: new Date() },
        }),
    );
    // Cleanup: reject the still-pending request so it doesn't linger as a
    // dangling PENDING_APPROVAL instance.
    await workflow.reject(
      pendingRequest.id,
      id('finadmin2'),
      'smoke test cleanup',
    );
  }

  // ==========================================================================
  // 3. Inter-entity mirroring: linked, never spanning — invariant #5 intact.
  //    CHECK2 adversarial case #3: attempt a cross-entity mirror as a SINGLE
  //    spanning journal is rejected the same way any cross-entity journal is
  //    (the entity-separation trigger from Build Plan step 8 — proving the
  //    NEW mirroring mechanism doesn't create a backdoor around it).
  // ==========================================================================
  await expectReject(
    'CHECK2 #3: a single journal cannot reference accounts from two different ledger entities (service layer) — mirroring must be two separate journals',
    () =>
      ledger.createJournalEntry({
        ledgerEntityCode: companyCode,
        journalReference: `JE-P2-BADMIRROR-${RUN}`,
        entryDate: new Date(),
        description:
          'illegally attempting to span company + fund in one journal',
        createdByUserId: id('finadmin'),
        lines: [
          { accountCode: '1100', debitKobo: kobo(300) }, // COMPANY's own account — fine
          { accountCode: '5010', creditKobo: kobo(300) }, // exists only in FUND — invariant #5 violation
        ],
      }),
  );

  const interEntityRef = `IER-P2-${RUN}`;
  const mirrorResult = await expectSucceed(
    'create the CORRECT inter-entity mirror: two separate journals, one per entity, shared inter_entity_ref',
    () =>
      ledger.createInterEntityMirroredJournals({
        interEntityRef,
        entryDate: new Date(),
        description: 'Monthly management fee — fund to company',
        createdByUserId: id('finadmin'),
        legA: {
          ledgerEntityCode: fundCode,
          journalReference: `JE-FEE-FUND-${RUN}`,
          lines: [
            { accountCode: '5010', debitKobo: kobo(10_000) },
            { accountCode: '2010', creditKobo: kobo(10_000) },
          ],
        },
        legB: {
          ledgerEntityCode: companyCode,
          journalReference: `JE-FEE-COMPANY-${RUN}`,
          lines: [
            { accountCode: '1100', debitKobo: kobo(10_000) },
            { accountCode: '4010', creditKobo: kobo(10_000) },
          ],
        },
      }),
  );
  if (mirrorResult) {
    console.log(
      mirrorResult.legA.ledgerEntityCode === fundCode &&
        mirrorResult.legB.ledgerEntityCode === companyCode
        ? 'OK: each leg stayed within its own ledger entity — no single journal spans entities'
        : 'FAIL: leg entity assignment unexpected',
    );
  }

  const reconciled = await expectSucceed(
    'reconcile the inter_entity_ref — both legs present, amounts equal',
    () => ledger.reconcileInterEntityRef(interEntityRef),
  );
  console.log(
    reconciled?.ok === true
      ? 'OK: inter-entity reconciliation clean (Company Accounting Design §3 step 5)'
      : `FAIL: expected a clean reconciliation, got ${JSON.stringify(reconciled)}`,
  );

  // Hard exception case: one leg missing.
  const orphanRef = `IER-P2-ORPHAN-${RUN}`;
  await ledger
    .createJournalEntry({
      ledgerEntityCode: fundCode,
      journalReference: `JE-FEE-ORPHAN-${RUN}`,
      entryDate: new Date(),
      description: 'orphaned leg — the company mirror was never created',
      createdByUserId: id('finadmin'),
      lines: [
        { accountCode: '5010', debitKobo: kobo(1_000) },
        { accountCode: '2010', creditKobo: kobo(1_000) },
      ],
    })
    .then((j) =>
      prisma.journalEntry.update({
        where: { id: j.id },
        data: { interEntityRef: orphanRef },
      }),
    );
  const orphanReconciled = await expectSucceed(
    'reconcile a deliberately orphaned inter_entity_ref (one leg missing)',
    () => ledger.reconcileInterEntityRef(orphanRef),
  );
  console.log(
    orphanReconciled?.ok === false && orphanReconciled.legCount === 1
      ? 'OK: a missing leg is a hard exception, per Company Accounting Design §3 step 5'
      : `FAIL: expected ok=false, legCount=1, got ${JSON.stringify(orphanReconciled)}`,
  );

  // --- CHECK5 item 5i: Company Accounting screen's Inter-Entity
  // Reconciliation list surfaces BOTH the clean and the broken ref, status
  // computed from the SAME reconcileInterEntityRef rule, not a second copy ---
  const reconciliationList = await expectSucceed(
    "list inter-entity reconciliations touching the COMPANY entity — includes both this run's clean and orphaned refs",
    () => ledger.listInterEntityReconciliations(companyCode),
  );
  if (reconciliationList) {
    const cleanRow = reconciliationList.find((r) => r.interEntityRef === interEntityRef);
    console.log(
      cleanRow?.ok === true && cleanRow.legs.length === 2
        ? 'OK: listInterEntityReconciliations reports the clean ref as Matched with both legs'
        : `FAIL: expected the clean ref Matched with 2 legs, got ${JSON.stringify(cleanRow)}`,
    );
    // The orphan ref touches fundCode only, not companyCode, so a
    // COMPANY-scoped list correctly excludes it — proving the method scopes
    // by "journal ON this entity", not "any ref anywhere".
    const orphanRow = reconciliationList.find((r) => r.interEntityRef === orphanRef);
    console.log(
      orphanRow === undefined
        ? 'OK: the fund-only orphan ref is correctly excluded from a COMPANY-scoped reconciliation list'
        : `FAIL: expected the fund-only orphan ref to be absent from the COMPANY-scoped list, got ${JSON.stringify(orphanRow)}`,
    );
  }

  // ==========================================================================
  // 4. Invariant 39(a): WorkflowInboxService's own 'ACCOUNTING_PERIOD_CLOSE'
  //    dispatch entry — proves the generic Workflow Inbox actually reaches
  //    approvePeriodClose (flipping the period OPEN->CLOSED), not just
  //    period.approvePeriodClose() called directly, above.
  // ==========================================================================
  const julyPeriod = await expectSucceed(
    'FIN_ADMIN opens a second (July) accounting period for the COMPANY entity',
    () =>
      period.openPeriod({
        ledgerEntityCode: companyCode,
        periodStart: new Date('2026-07-01T00:00:00Z'),
        periodEnd: new Date('2026-07-31T23:59:59Z'),
        openedByUserId: id('finadmin'),
      }),
  );
  if (julyPeriod) {
    const julyCloseRequest = await expectSucceed(
      'FIN_ADMIN requests closing the July period',
      () => period.requestPeriodClose({ periodId: julyPeriod.id, initiatedByUserId: id('finadmin') }),
    );
    if (julyCloseRequest) {
      const workflowInbox = new WorkflowInboxService(
        prisma, workflow, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any,
        {} as any, {} as any, {} as any, {} as any, {} as any, ledger, {} as any, {} as any, {} as any, period, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any,
      );
      const declaredViaInbox = await workflowInbox.approve(julyCloseRequest.id, id('ceo'));
      const julyAfter = await prisma.accountingPeriod.findUniqueOrThrow({ where: { id: julyPeriod.id } });
      if ((declaredViaInbox as any)?.status === 'CLOSED' && julyAfter.status === 'CLOSED') {
        console.log("OK: WorkflowInboxService.approve() dispatches 'ACCOUNTING_PERIOD_CLOSE' to approvePeriodClose -> accounting_period.status OPEN->CLOSED via the standing Workflow Inbox, not just the service method called directly");
      } else {
        console.error('FAIL: WorkflowInboxService ACCOUNTING_PERIOD_CLOSE dispatch did not close the period', { declaredViaInbox, julyAfter });
        process.exitCode = 1;
      }
    }
  }

  await prisma.$disconnect();
}

main().catch((err) => {
  if (
    err instanceof LedgerLifecycleError ||
    err instanceof PeriodLifecycleError
  ) {
    console.error('Unhandled lifecycle error:', err.message);
  } else {
    console.error(err);
  }
  process.exitCode = 1;
});
