import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import {
  CreateLedgerEntityInput,
  LoadChartOfAccountsInput,
  CreateJournalEntryInput,
  RecordCashbookEntryInput,
  CreateTxnInput,
  RequestJournalPostingInput,
  ApproveJournalPostingInput,
  CreateInterEntityMirroredJournalsInput,
  TrialBalanceLine,
  LedgerLifecycleError,
} from './ledger.types';

// Build Plan step 8 / SOW D8-D9 built the ledger skeleton (creation only).
// Phase 2 core (CHECK2 pass, 2026-07-04) adds the posting rules that step
// deliberately deferred: approval-before-posting (requestJournalPosting/
// approveJournalPosting, maker != checker via WorkflowEngineService) and
// inter-entity mirroring. Every activity still gates its actor through
// DelegationService.hasCapability(), never a trust of the caller's ID (CEO
// instruction 2026-07-04).
@Injectable()
export class LedgerService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
  ) {}

  // AMD-11.2 defense-in-depth: the DB CHECK (ledger_entity_primary_basis_by_
  // type) is the backstop; this fails fast with a clear message for the two
  // entity types the spec actually rules on (COMPANY, FUND/POOL). MANDATE/
  // CLIENT_MONEY are intentionally unconstrained here — see ledger.types.ts.
  async createLedgerEntity(input: CreateLedgerEntityInput) {
    await this.assertCapability(
      input.createdByUserId,
      'LEDGER_ENTITY_SETUP',
      'INITIATE',
      'create a ledger entity',
    );

    if (input.entityType === 'COMPANY' && input.primaryBasis !== 'IFRS') {
      throw new LedgerLifecycleError(
        'COMPANY ledger entities must have primaryBasis IFRS (AMD-11.2).',
      );
    }
    if (
      (input.entityType === 'FUND' || input.entityType === 'POOL') &&
      input.primaryBasis !== 'AAOIFI'
    ) {
      throw new LedgerLifecycleError(
        'FUND/POOL ledger entities must have primaryBasis AAOIFI (AMD-11.2).',
      );
    }

    // Invariant 49(b) (CHECK11, CEO ruling): the ledger_entity->product link
    // is mandatory at creation for the three entity types that ARE products
    // (FUND/POOL/MANDATE map 1:1 onto a Halal Fund/PSR-Waterfall/ND-Mandate
    // product) -- fail fast here, the same "defense-in-depth, clear message"
    // shape as the AMD-11.2 basis check just above, rather than letting a
    // dangling entity get created and discovered later. COMPANY/CLIENT_MONEY
    // are deliberately excluded: neither is itself a product, so requiring
    // a productCode on them would be inventing a link that doesn't exist.
    // No governed linkLedgerEntityToProduct method exists anywhere in this
    // codebase (verified by grep) and none is being added here -- per the
    // CEO ruling, re-pointing an entity's books at a different product is
    // not a repair tool; any future legacy repair is a one-time migration.
    if (
      (input.entityType === 'FUND' || input.entityType === 'POOL' || input.entityType === 'MANDATE') &&
      !input.productCode
    ) {
      throw new LedgerLifecycleError(
        `${input.entityType} ledger entities must be created with a productCode (invariant 49b) -- a FUND/POOL/MANDATE ledger entity IS a product's book, never a placeholder to be re-pointed later.`,
      );
    }

    const entity = await this.prisma.ledgerEntity.create({
      data: {
        code: input.code,
        name: input.name,
        entityType: input.entityType,
        primaryBasis: input.primaryBasis,
        productCode: input.productCode,
      },
    });

    await this.audit.record({
      actorUserId: input.createdByUserId,
      action: 'CREATE',
      entityType: 'ledger_entity',
      entityId: entity.code,
      after: {
        name: input.name,
        entityType: input.entityType,
        primaryBasis: input.primaryBasis,
        productCode: input.productCode,
      },
    });

    return entity;
  }

  // "Template CoA instantiated per ledger entity" (Core Schema Skeleton
  // §3.5) — one audit entry summarizes the bulk load rather than one per
  // account row, since this is a single configuration action, not N
  // separate ones.
  async loadChartOfAccountsTemplate(input: LoadChartOfAccountsInput) {
    await this.assertCapability(
      input.createdByUserId,
      'LEDGER_ENTITY_SETUP',
      'INITIATE',
      'load a chart-of-accounts template',
    );

    const created = await this.prisma.$transaction(
      input.accounts.map((a) =>
        this.prisma.chartOfAccount.create({
          data: {
            ledgerEntityCode: input.ledgerEntityCode,
            accountCode: a.accountCode,
            accountName: a.accountName,
            accountType: a.accountType,
            aaoifiRef: a.aaoifiRef,
            ifrsRef: a.ifrsRef,
          },
        }),
      ),
    );

    await this.audit.record({
      actorUserId: input.createdByUserId,
      action: 'CREATE',
      entityType: 'chart_of_accounts_template',
      entityId: input.ledgerEntityCode,
      after: { accountCodes: input.accounts.map((a) => a.accountCode) },
    });

    return created;
  }

  // Entity-separation (CLAUDE.md invariant #5) is validated HERE first —
  // fast, clear message — and again by the DB trigger on insert (the
  // backstop for any caller that bypasses this service). Balance
  // validation (Σdebits = Σcredits) is deliberately NOT checked: that's a
  // posting rule, and this step only creates DRAFT journals — there is no
  // postJournalEntry() method here on purpose.
  async createJournalEntry(input: CreateJournalEntryInput) {
    await this.assertCapability(
      input.createdByUserId,
      'JOURNAL_ENTRIES',
      'INITIATE',
      'create a journal entry',
    );

    const journalClass = input.journalClass ?? 'BASE';
    // AMD-11.3 defense-in-depth: the DB CHECK (journal_entry_basis_
    // adjustment_tags) is the backstop for this exact rule.
    if (journalClass === 'BASE') {
      if (input.divergenceType || input.adjustmentForBasis) {
        throw new LedgerLifecycleError(
          'A BASE journal cannot carry divergenceType/adjustmentForBasis — those are BASIS_ADJUSTMENT-only fields (AMD-11.3).',
        );
      }
    } else {
      if (!input.divergenceType || !input.adjustmentForBasis) {
        throw new LedgerLifecycleError(
          'A BASIS_ADJUSTMENT journal requires both divergenceType and adjustmentForBasis (AMD-11.3).',
        );
      }
    }

    const accounts = await this.prisma.chartOfAccount.findMany({
      where: {
        ledgerEntityCode: input.ledgerEntityCode,
        accountCode: { in: input.lines.map((l) => l.accountCode) },
      },
    });
    const accountByCode = new Map(accounts.map((a) => [a.accountCode, a]));
    for (const line of input.lines) {
      if (!accountByCode.has(line.accountCode)) {
        throw new LedgerLifecycleError(
          `Account ${line.accountCode} does not belong to ledger entity ${input.ledgerEntityCode} — no journal can span ledger entities (CLAUDE.md invariant #5).`,
        );
      }
    }

    const created = await this.prisma.journalEntry.create({
      data: {
        ledgerEntityCode: input.ledgerEntityCode,
        journalReference: input.journalReference,
        entryDate: input.entryDate,
        description: input.description,
        createdByUserId: input.createdByUserId,
        journalClass,
        divergenceType: input.divergenceType,
        adjustmentForBasis: input.adjustmentForBasis,
        lines: {
          create: input.lines.map((l) => ({
            accountId: accountByCode.get(l.accountCode)!.id,
            debitKobo: l.debitKobo ?? 0n,
            creditKobo: l.creditKobo ?? 0n,
            description: l.description,
          })),
        },
      },
      include: { lines: true },
    });

    await this.audit.record({
      actorUserId: input.createdByUserId,
      action: 'CREATE',
      entityType: 'journal_entry',
      entityId: created.id,
      after: {
        journalReference: input.journalReference,
        ledgerEntityCode: input.ledgerEntityCode,
        lineCount: input.lines.length,
        journalClass,
        divergenceType: input.divergenceType,
        adjustmentForBasis: input.adjustmentForBasis,
      },
    });

    return created;
  }

  // Phase 2 core: maker drafts (createJournalEntry, above), then REQUESTS
  // posting — this is the "maker" side of maker-drafts/checker-approves.
  // Balance validation moves here (from the old single-actor
  // postJournalEntry): a checker should never even see an unbalanced
  // request. Company Accounting Design §1: "Maker-checker on every
  // journal."
  async requestJournalPosting(input: RequestJournalPostingInput) {
    await this.assertCapability(
      input.initiatedByUserId,
      'JOURNAL_ENTRIES',
      'INITIATE',
      'request posting of a journal entry',
    );

    const journal = await this.prisma.journalEntry.findUniqueOrThrow({
      where: { id: input.journalEntryId },
      include: { lines: true },
    });
    if (journal.status !== 'DRAFT') {
      throw new LedgerLifecycleError(
        `Cannot request posting for journal entry ${journal.id}: status is ${journal.status}, not DRAFT.`,
      );
    }
    const totalDebit = journal.lines.reduce((s, l) => s + l.debitKobo, 0n);
    const totalCredit = journal.lines.reduce((s, l) => s + l.creditKobo, 0n);
    if (totalDebit !== totalCredit) {
      throw new LedgerLifecycleError(
        `Cannot request posting for journal entry ${journal.id}: debits (${totalDebit}) do not equal credits (${totalCredit}).`,
      );
    }

    const instance = await this.workflow.initiate({
      workflowTypeCode: 'JOURNAL_POSTING',
      entityType: 'journal_entry',
      entityId: journal.id,
      initiatedByUserId: input.initiatedByUserId,
      scenario: input.scenario ?? 'STANDARD',
    });

    await this.prisma.journalEntry.update({
      where: { id: journal.id },
      data: { postingWorkflowInstanceId: instance.id },
    });

    await this.audit.record({
      actorUserId: input.initiatedByUserId,
      action: 'CREATE',
      entityType: 'journal_posting_request',
      entityId: journal.id,
      after: {
        totalDebitKobo: totalDebit.toString(),
        workflowInstanceId: instance.id,
      },
    });

    return instance;
  }

  // Checker side: a different user (maker != checker, enforced generically
  // by WorkflowEngineService) approves; only then does the journal actually
  // flip to POSTED. The journal_entry_no_posting_into_closed_period DB
  // trigger fires on this exact UPDATE — the period-close gate is enforced
  // there, not here (defense-in-depth check below is the fast, clear path).
  async approveJournalPosting(input: ApproveJournalPostingInput) {
    // Validated BEFORE workflow.approveNextStep() runs, deliberately: that
    // call consumes the approval step and marks the WorkflowInstance
    // APPROVED — if the period-closed check failed AFTER that (as it did in
    // an earlier version of this method), the instance would be stuck
    // APPROVED forever with its journal never actually POSTED. Checking
    // first means a rejected attempt leaves the instance untouched
    // (PENDING_APPROVAL), so the checker can act again if the situation
    // changes — same principle as requestJournalPosting's balance check
    // running before workflow.initiate().
    const journal = await this.prisma.journalEntry.findFirstOrThrow({
      where: { postingWorkflowInstanceId: input.workflowInstanceId },
    });

    const openPeriodViolation = await this.prisma.accountingPeriod.findFirst({
      where: {
        ledgerEntityCode: journal.ledgerEntityCode,
        status: 'CLOSED',
        periodStart: { lte: journal.entryDate },
        periodEnd: { gte: journal.entryDate },
      },
    });
    if (openPeriodViolation) {
      throw new LedgerLifecycleError(
        `Cannot post journal entry ${journal.id}: entry_date ${journal.entryDate.toISOString()} falls within a CLOSED accounting period for ${journal.ledgerEntityCode} — post-lock entries only in the next open period.`,
      );
    }

    const updated = await this.workflow.approveNextStep(
      input.workflowInstanceId,
      input.approverUserId,
    );
    if (updated.status !== 'APPROVED') return null;

    const posted = await this.prisma.journalEntry.update({
      where: { id: journal.id },
      data: { status: 'POSTED', postedAt: new Date() },
    });

    await this.audit.record({
      actorUserId: input.approverUserId,
      action: 'APPROVE',
      entityType: 'journal_entry',
      entityId: posted.id,
      after: { status: 'POSTED' },
    });

    return posted;
  }

  // Company Accounting Design §1/§3: "no journal spans ledger entities ...
  // two mirrored journals ... linked by a common inter_entity_ref." Each
  // leg goes through the SAME createJournalEntry validation (entity
  // separation, basis-adjustment tagging) independently — this method does
  // not bypass any of that, it just creates two of them atomically and
  // stamps both with the shared reference.
  async createInterEntityMirroredJournals(
    input: CreateInterEntityMirroredJournalsInput,
  ) {
    const legA = await this.createJournalEntry({
      ledgerEntityCode: input.legA.ledgerEntityCode,
      journalReference: input.legA.journalReference,
      entryDate: input.entryDate,
      description: input.description,
      createdByUserId: input.createdByUserId,
      lines: input.legA.lines,
    });
    await this.prisma.journalEntry.update({
      where: { id: legA.id },
      data: { interEntityRef: input.interEntityRef },
    });

    const legB = await this.createJournalEntry({
      ledgerEntityCode: input.legB.ledgerEntityCode,
      journalReference: input.legB.journalReference,
      entryDate: input.entryDate,
      description: input.description,
      createdByUserId: input.createdByUserId,
      lines: input.legB.lines,
    });
    await this.prisma.journalEntry.update({
      where: { id: legB.id },
      data: { interEntityRef: input.interEntityRef },
    });

    await this.audit.record({
      actorUserId: input.createdByUserId,
      action: 'CREATE',
      entityType: 'inter_entity_mirrored_journal',
      entityId: input.interEntityRef,
      after: {
        legAJournalId: legA.id,
        legALedgerEntity: input.legA.ledgerEntityCode,
        legBJournalId: legB.id,
        legBLedgerEntity: input.legB.ledgerEntityCode,
      },
    });

    return { interEntityRef: input.interEntityRef, legA, legB };
  }

  // Company Accounting Design §3 step 5: "any inter_entity_ref with one leg
  // missing or amounts unequal is a hard exception — surfaces on the
  // Finance dashboard and blocks period close." Amount-equal is checked as
  // total debits (equivalently credits, since each leg is independently
  // balanced) — the two legs describe the same economic event from two
  // ledger entities' perspectives, so their totals must match even though
  // their account codes/entities differ.
  async reconcileInterEntityRef(interEntityRef: string): Promise<{
    ok: boolean;
    legCount: number;
    reason?: string;
  }> {
    const legs = await this.prisma.journalEntry.findMany({
      where: { interEntityRef },
      include: { lines: true },
    });
    if (legs.length !== 2) {
      return {
        ok: false,
        legCount: legs.length,
        reason: `expected exactly 2 legs, found ${legs.length}`,
      };
    }
    const totals = legs.map((leg) =>
      leg.lines.reduce((s, l) => s + l.debitKobo, 0n),
    );
    if (totals[0] !== totals[1]) {
      return {
        ok: false,
        legCount: 2,
        reason: `leg amounts unequal: ${totals[0]} vs ${totals[1]}`,
      };
    }
    return { ok: true, legCount: 2 };
  }

  // CHECK5 item 5i (Company Accounting screen): "any inter_entity_ref with
  // one leg missing or amounts unequal ... surfaces on the Finance
  // dashboard." This is that surface — one row per distinct
  // inter_entity_ref touching the given entity, reusing
  // reconcileInterEntityRef's exact matched/unsettled rule rather than a
  // second copy of it.
  async listInterEntityReconciliations(ledgerEntityCode?: string) {
    const journals = await this.prisma.journalEntry.findMany({
      where: { interEntityRef: { not: null }, ...(ledgerEntityCode ? { ledgerEntityCode } : {}) },
      include: { lines: true },
      orderBy: { entryDate: 'desc' },
    });
    const refs = [...new Set(journals.map((j) => j.interEntityRef!))];

    const rows = await Promise.all(
      refs.map(async (ref) => {
        const legs = await this.prisma.journalEntry.findMany({ where: { interEntityRef: ref }, include: { lines: true } });
        const status = await this.reconcileInterEntityRef(ref);
        const amountKobo = legs[0]?.lines.reduce((s, l) => s + l.debitKobo, 0n) ?? 0n;
        return {
          interEntityRef: ref,
          description: legs[0]?.description ?? '',
          entryDate: legs[0]?.entryDate ?? null,
          legs: legs.map((l) => ({ ledgerEntityCode: l.ledgerEntityCode, journalReference: l.journalReference })),
          amountKobo: amountKobo.toString(),
          ...status,
        };
      }),
    );
    return rows.sort((a, b) => (b.entryDate?.getTime() ?? 0) - (a.entryDate?.getTime() ?? 0));
  }

  // CHECK5 item 5h: the Fund Accounting screen's entity toggle — every
  // fund/pool/mandate ledger entity, live from the same table the
  // AMD-11 entity-separation trigger enforces against (no separate
  // "fund registry" to keep in sync).
  async listFundEntities() {
    return this.prisma.ledgerEntity.findMany({
      where: { entityType: { in: ['FUND', 'POOL', 'MANDATE'] } },
      orderBy: { code: 'asc' },
    });
  }

  // Invariant 39(a), Tier 1: the manual JOURNAL_ENTRIES maker screen needs
  // every ledger entity (including COMPANY), not just the fund-toggle's
  // FUND/POOL/MANDATE subset above.
  async listAllLedgerEntities() {
    return this.prisma.ledgerEntity.findMany({ orderBy: { code: 'asc' } });
  }

  async listChartOfAccounts(ledgerEntityCode: string) {
    return this.prisma.chartOfAccount.findMany({
      where: { ledgerEntityCode, isActive: true },
      orderBy: { accountCode: 'asc' },
    });
  }

  // The maker screen's own browse: DRAFT journals awaiting a posting
  // request or awaiting the checker, plus recently POSTED ones for
  // confirmation. postingWorkflowInstanceId != null on a DRAFT row means
  // "posting requested, awaiting a different approver" — the journal
  // itself has no PENDING_APPROVAL status (see JournalEntryStatus), so
  // that combination is how the UI tells the two DRAFT sub-states apart.
  async listJournalEntries(filter: { ledgerEntityCode?: string } = {}) {
    return this.prisma.journalEntry.findMany({
      where: filter.ledgerEntityCode ? { ledgerEntityCode: filter.ledgerEntityCode } : undefined,
      include: { lines: { include: { account: { select: { accountCode: true, accountName: true } } } } },
      orderBy: { entryDate: 'desc' },
      take: 200,
    });
  }

  // AMD-11.3/.d: "Trial balance and statements are producible PER BASIS:
  // base + relevant adjustments." An entity's own primary basis is just its
  // BASE posted journals; the non-primary basis additionally folds in
  // BASIS_ADJUSTMENT journals tagged for that basis. Account-level only —
  // presentation (statement lines/templates) is Phase 4; this is the ledger
  // arithmetic Phase 4 will read from.
  async getTrialBalance(
    ledgerEntityCode: string,
    basis: 'IFRS' | 'AAOIFI',
  ): Promise<TrialBalanceLine[]> {
    const entity = await this.prisma.ledgerEntity.findUniqueOrThrow({
      where: { code: ledgerEntityCode },
    });

    const journalWhere =
      basis === entity.primaryBasis
        ? { journalClass: 'BASE' as const }
        : {
            OR: [
              { journalClass: 'BASE' as const },
              {
                journalClass: 'BASIS_ADJUSTMENT' as const,
                adjustmentForBasis: basis,
              },
            ],
          };

    const lines = await this.prisma.journalEntryLine.findMany({
      where: {
        account: { ledgerEntityCode },
        journalEntry: { status: 'POSTED', ...journalWhere },
      },
      include: { account: true },
    });

    const byAccount = new Map<string, TrialBalanceLine>();
    for (const line of lines) {
      const existing = byAccount.get(line.accountId);
      if (existing) {
        existing.debitKobo += line.debitKobo;
        existing.creditKobo += line.creditKobo;
      } else {
        byAccount.set(line.accountId, {
          accountId: line.accountId,
          accountCode: line.account.accountCode,
          accountName: line.account.accountName,
          debitKobo: line.debitKobo,
          creditKobo: line.creditKobo,
        });
      }
    }
    return [...byAccount.values()].sort((a, b) =>
      a.accountCode.localeCompare(b.accountCode),
    );
  }

  async recordCashbookEntry(input: RecordCashbookEntryInput) {
    await this.assertCapability(
      input.createdByUserId,
      'JOURNAL_ENTRIES',
      'INITIATE',
      'record a cashbook entry',
    );

    const created = await this.prisma.cashbookEntry.create({
      data: {
        ledgerEntityCode: input.ledgerEntityCode,
        entryDate: input.entryDate,
        description: input.description,
        amountKobo: input.amountKobo,
        bankReference: input.bankReference,
      },
    });

    await this.audit.record({
      actorUserId: input.createdByUserId,
      action: 'CREATE',
      entityType: 'cashbook_entry',
      entityId: created.id,
      after: {
        ledgerEntityCode: input.ledgerEntityCode,
        amountKobo: input.amountKobo.toString(),
      },
    });

    return created;
  }

  // Maker side only — checkerUserId/postedJournalEntryId stay unset here.
  // Wiring an actual checker step (and what "posted" means for a given
  // txn_type) is Phase 2/3's job once the product engines that produce
  // these rows exist.
  // Invariant 39(c), Tier 3: TXN_ENTRY's own maker screen. Reconciliation
  // (not a guess): createTxn is NOT superseded by JOURNAL_ENTRIES — Txn is
  // the transaction-spine table (subscription/redemption/placement events
  // per investor per product account), structurally distinct from
  // JournalEntry (Dr/Cr chart-of-accounts postings). Confirmed load-bearing:
  // HalalFundEngineService already READS Txn rows (NAV/unit aggregation)
  // but nothing besides createTxn (and the one-time TPL_05 migration
  // loader) ever WRITES one — without this screen, no NEW subscription or
  // redemption could ever be recorded post-migration. CONFIRMED, not
  // retired.
  async listTxns(filter: { investorId?: string; productAccountId?: string } = {}) {
    return this.prisma.txn.findMany({
      where: {
        productAccountId: filter.productAccountId,
        productAccount: filter.investorId ? { investorId: filter.investorId } : undefined,
      },
      include: { productAccount: { select: { productCode: true, investorId: true } } },
      orderBy: { valueDate: 'desc' },
      take: 200,
    });
  }

  async createTxn(input: CreateTxnInput) {
    await this.assertCapability(
      input.makerUserId,
      'TXN_ENTRY',
      'INITIATE',
      'create a transaction',
    );

    const productAccount = input.productAccountId
      ? await this.prisma.productAccount.findUnique({
          where: { id: input.productAccountId },
          include: { investor: true },
        })
      : null;
    const investor = productAccount?.investor;

    // Invariant 27(a): "NO redemption/outward transfer (DB-enforced) until
    // full KYC" — service-level half of the "refused at service AND DB"
    // adversarial requirement; the DB trigger
    // (enforce_no_express_stage_redemption) is the structural backstop.
    if (
      input.txnType === 'REDEMPTION' &&
      investor?.onboardingStage === 'STAGE_1_EXPRESS'
    ) {
      throw new LedgerLifecycleError(
        `Investor ${investor.investorId} is still STAGE_1_EXPRESS — no redemption/outward transfer is permitted until full KYC completes (invariant 27a).`,
      );
    }

    let thirdPartyDeclaration: {
      payerName: string;
      payerBankName?: string;
      payerAccountNumber?: string;
      declaredRelationship: string;
    } | null = null;

    if (input.txnType === 'SUBSCRIPTION' && investor) {
      if (input.thirdPartyPayer) {
        thirdPartyDeclaration = input.thirdPartyPayer;
      } else if (input.payerBankAccountId) {
        const ownAccount = await this.prisma.investorBankAccount.findFirst({
          where: { id: input.payerBankAccountId, investorId: investor.investorId },
        });
        if (!ownAccount) {
          throw new LedgerLifecycleError(
            `payerBankAccountId ${input.payerBankAccountId} is not a registered bank account of investor ${investor.investorId} — third-party deposits require a declaration (payerName/declaredRelationship), invariant 28(a).`,
          );
        }
      } else if (investor.onboardingStage === 'STAGE_1_EXPRESS') {
        // Stage-2-complete investors keep pre-existing behaviour (own
        // account assumed, no declaration required) for backward
        // compatibility with callers predating invariant 27/28 — Stage-1
        // Express accounts are new, so the stricter rule applies from day
        // one: every deposit must be attributable, own-account or declared.
        throw new LedgerLifecycleError(
          `SUBSCRIPTION for STAGE_1_EXPRESS investor ${investor.investorId} must specify either payerBankAccountId (investor's own registered account) or thirdPartyPayer (mandatory declaration, invariant 28a).`,
        );
      }

      // Invariant 27(a): cumulative Stage-1 Express deposit cap, governed
      // config (never hardcoded — invariant 10).
      if (investor.onboardingStage === 'STAGE_1_EXPRESS') {
        const config = await this.prisma.investorOnboardingConfig.findFirst({
          where: { status: 'ACTIVE' },
          orderBy: { version: 'desc' },
        });
        if (!config) {
          throw new LedgerLifecycleError(
            'No ACTIVE investor_onboarding_config — cannot evaluate the Stage-1 Express deposit cap (AMD-12: activation-gated, never a silent bypass).',
          );
        }
        const priorDeposits = await this.prisma.txn.aggregate({
          _sum: { amountKobo: true },
          where: {
            txnType: 'SUBSCRIPTION',
            productAccount: { investorId: investor.investorId },
          },
        });
        const priorTotal = priorDeposits._sum.amountKobo ?? 0n;
        if (priorTotal + input.amountKobo > config.expressDepositCapKobo) {
          throw new LedgerLifecycleError(
            `Deposit would bring investor ${investor.investorId}'s cumulative Stage-1 Express deposits to ${(priorTotal + input.amountKobo).toString()} kobo, exceeding the ${config.expressDepositCapKobo.toString()} kobo cap (invariant 27a) — full KYC (Stage-2) is required before further deposits.`,
          );
        }
      }
    }

    // Invariant 51(a-i) (CHECK12, advisor BA lifecycle-gap register, Tier
    // 1 -- "THE fraud-critical item"): a REDEMPTION may only pay to an
    // ACTIVE bank account that has cleared any post-change cooling-off
    // window. settleDueBankAccountChangeSwaps is the same read-time-guard
    // precedent as the Stage-1 Express cap above (no scheduled flip) --
    // lazily promotes a change's resulting account to primary once its
    // window has elapsed, before resolving today's payout target.
    if (input.txnType === 'REDEMPTION' && investor) {
      await this.settleDueBankAccountChangeSwaps(investor.investorId);
      const targetId = input.payoutBankAccountId;
      const payoutAccount = targetId
        ? await this.prisma.investorBankAccount.findFirst({ where: { id: targetId, investorId: investor.investorId } })
        : await this.prisma.investorBankAccount.findFirst({ where: { investorId: investor.investorId, isPrimary: true, status: 'ACTIVE' } });
      if (!payoutAccount) {
        throw new LedgerLifecycleError(
          `No usable bank account found for investor ${investor.investorId}'s redemption payout${targetId ? ` (account ${targetId} not found or not theirs)` : ' -- none is registered'} (invariant 51a-i).`,
        );
      }
      if (payoutAccount.status !== 'ACTIVE') {
        throw new LedgerLifecycleError(
          `Bank account ${payoutAccount.id} is ${payoutAccount.status}, not ACTIVE -- cannot pay a redemption to a superseded account (invariant 51a-i).`,
        );
      }
      if (payoutAccount.coolingOffEndsAt && payoutAccount.coolingOffEndsAt > new Date()) {
        throw new LedgerLifecycleError(
          `Bank account ${payoutAccount.id} is still inside its post-change cooling-off window (until ${payoutAccount.coolingOffEndsAt.toISOString()}) -- invariant 51(a-i) blocks payout to a recently-changed account until the window elapses.`,
        );
      }
    }

    const created = await this.prisma.txn.create({
      data: {
        txnType: input.txnType,
        ledgerEntityCode: input.ledgerEntityCode,
        productAccountId: input.productAccountId,
        valueDate: input.valueDate,
        amountKobo: input.amountKobo,
        makerUserId: input.makerUserId,
      },
    });

    if (thirdPartyDeclaration) {
      await this.prisma.paymentInflowLog.create({
        data: {
          txnId: created.id,
          payerName: thirdPartyDeclaration.payerName,
          payerBankName: thirdPartyDeclaration.payerBankName,
          payerAccountNumber: thirdPartyDeclaration.payerAccountNumber,
          declaredRelationship: thirdPartyDeclaration.declaredRelationship,
          beneficiaryInvestorId: investor?.investorId,
          status: 'DECLARED_MATCHED',
          complianceFlagged: true,
          declaredByUserId: input.makerUserId,
        },
      });
    }

    await this.audit.record({
      actorUserId: input.makerUserId,
      action: 'CREATE',
      entityType: 'txn',
      entityId: created.id,
      after: {
        txnType: input.txnType,
        ledgerEntityCode: input.ledgerEntityCode,
        amountKobo: input.amountKobo.toString(),
        thirdPartyDeclared: !!thirdPartyDeclaration,
      },
    });

    return created;
  }

  // Invariant 51(a-i): mirrors InvestorBankAccountChangeService.
  // settleDueChanges exactly (same transaction, same idempotency) -- kept
  // as its own private copy here rather than a cross-service DI dependency
  // because LedgerService already resolves investor bank-account state
  // directly via prisma elsewhere in this file (see the SUBSCRIPTION
  // branch above), matching this codebase's convention of direct-prisma
  // cross-domain reads over service-to-service injection.
  private async settleDueBankAccountChangeSwaps(investorId: string) {
    const due = await this.prisma.investorBankAccountChangeRequest.findMany({
      where: { investorId, status: 'COOLING_OFF', coolingOffEndsAt: { lte: new Date() } },
    });
    for (const req of due) {
      if (!req.resultingBankAccountId) continue;
      await this.prisma.$transaction([
        this.prisma.investorBankAccount.updateMany({ where: { investorId, isPrimary: true, status: 'ACTIVE' }, data: { isPrimary: false, status: 'SUPERSEDED' } }),
        this.prisma.investorBankAccount.update({ where: { id: req.resultingBankAccountId }, data: { isPrimary: true } }),
        this.prisma.investorBankAccountChangeRequest.update({ where: { id: req.id }, data: { status: 'COMPLETED' } }),
      ]);
      await this.audit.record({
        actorUserId: req.reVerifiedByUserId ?? req.requestedByUserId,
        action: 'UPDATE',
        entityType: 'investor_bank_account_change_request',
        entityId: req.id,
        after: { status: 'COMPLETED', supersededOldPrimary: true },
      });
    }
  }

  private async assertCapability(
    userId: string,
    functionCode: string,
    level: 'INITIATE' | 'APPROVE' | 'VIEW',
    activity: string,
  ) {
    const { eligible } = await this.delegation.hasCapability(
      userId,
      functionCode,
      level,
    );
    if (!eligible) {
      await this.audit.record({
        actorUserId: userId,
        action: 'PERMISSION_DENIED',
        entityType: 'ledger_activity',
        entityId: activity,
        after: { functionCode, level },
      });
      throw new LedgerLifecycleError(
        `User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`,
      );
    }
  }
}
