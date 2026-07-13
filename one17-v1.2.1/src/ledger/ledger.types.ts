// AMD-11.2: "basis is a ledger-entity attribute, not global." COMPANY/FUND/
// POOL are ruled by the spec and enforced by a DB CHECK (see the AMD-11
// migration); MANDATE/CLIENT_MONEY are not addressed by the spec, so this
// is a required, explicit caller input for every entity type rather than a
// silent default — see LedgerService.createLedgerEntity.
export type AccountingBasis = 'IFRS' | 'AAOIFI';

export interface CreateLedgerEntityInput {
  code: string;
  name: string;
  entityType: 'COMPANY' | 'FUND' | 'POOL' | 'MANDATE' | 'CLIENT_MONEY';
  primaryBasis: AccountingBasis;
  productCode?: string;
  createdByUserId: string;
}

export interface ChartOfAccountTemplateRow {
  accountCode: string;
  accountName: string;
  accountType: 'ASSET' | 'LIABILITY' | 'EQUITY' | 'INCOME' | 'EXPENSE';
  // AMD-11.1: every row carries BOTH — not optional, see schema.prisma's
  // ChartOfAccount comment.
  aaoifiRef: string;
  ifrsRef: string;
}

export interface LoadChartOfAccountsInput {
  ledgerEntityCode: string;
  accounts: ChartOfAccountTemplateRow[];
  createdByUserId: string;
}

export interface JournalEntryLineInput {
  accountCode: string;
  debitKobo?: bigint;
  creditKobo?: bigint;
  description?: string;
}

// AMD-11.3: journalClass BASE (default) is an ordinary journal. A
// BASIS_ADJUSTMENT journal additionally requires divergenceType (free text,
// e.g. "IFRS9_ECL_VS_FAS30") and adjustmentForBasis (which basis this
// adjustment reconciles TO) — validated together in LedgerService and
// backstopped by a DB CHECK.
export interface CreateJournalEntryInput {
  ledgerEntityCode: string;
  journalReference: string;
  entryDate: Date;
  description: string;
  lines: JournalEntryLineInput[];
  createdByUserId: string;
  journalClass?: 'BASE' | 'BASIS_ADJUSTMENT';
  divergenceType?: string;
  adjustmentForBasis?: AccountingBasis;
}

// Phase 2: journal posting is maker-drafts/checker-approves through
// WorkflowEngineService — requestJournalPosting (maker, validates DRAFT +
// balanced, initiates the JOURNAL_POSTING workflow) and
// approveJournalPosting (checker, a different user, actually flips the
// journal to POSTED once APPROVED) replace the old single-actor
// postJournalEntry().
export interface RequestJournalPostingInput {
  journalEntryId: string;
  initiatedByUserId: string;
  // Invariant 46(f): payroll's own three-hand chain (PAYROLL_THREE_HAND —
  // Finance reviews -> MD/CEO approves) selects a different ApprovalRule
  // under the SAME JOURNAL_POSTING workflow type, since the DB trigger
  // enforcing posting requires an APPROVED JOURNAL_POSTING instance
  // specifically. Defaults to 'STANDARD' (the plain single-step maker-
  // checker every other journal uses) when omitted.
  scenario?: string;
}

export interface ApproveJournalPostingInput {
  workflowInstanceId: string;
  approverUserId: string;
}

// Company Accounting Design §1/§3: "no journal spans ledger entities ...
// two mirrored journals ... linked by a common inter_entity_ref." One call
// creates BOTH legs, each independently balanced and entity-scoped, never a
// single journal touching two entities.
export interface MirroredJournalLegInput {
  ledgerEntityCode: string;
  journalReference: string;
  lines: JournalEntryLineInput[];
}

export interface CreateInterEntityMirroredJournalsInput {
  interEntityRef: string;
  entryDate: Date;
  description: string;
  createdByUserId: string;
  legA: MirroredJournalLegInput;
  legB: MirroredJournalLegInput;
}

export interface TrialBalanceLine {
  accountId: string;
  accountCode: string;
  accountName: string;
  debitKobo: bigint;
  creditKobo: bigint;
}

export interface RecordCashbookEntryInput {
  ledgerEntityCode: string;
  entryDate: Date;
  description: string;
  amountKobo: bigint;
  bankReference?: string;
  createdByUserId: string;
}

export interface CreateTxnInput {
  txnType:
    | 'SUBSCRIPTION'
    | 'REDEMPTION'
    | 'PLACEMENT'
    | 'PROFIT_ALLOCATION'
    | 'DISTRIBUTION'
    | 'ROLLOVER'
    | 'EARLY_EXIT'
    | 'FEE'
    | 'PURIFICATION'
    | 'ADJUSTMENT';
  ledgerEntityCode: string;
  productAccountId?: string;
  valueDate: Date;
  amountKobo: bigint;
  makerUserId: string;
  // Invariant 27(a)/28(a): a SUBSCRIPTION against a productAccount whose
  // investor is registered defaults to "own account" — pass payerBankAccountId
  // when the payer IS one of the investor's own registered bank accounts, or
  // thirdPartyPayer when it is not (mandatory declaration, invariant 28a).
  // Omitting both for a STAGE_1_EXPRESS investor's SUBSCRIPTION is refused —
  // own-account default cannot be assumed once third-party inflows exist.
  payerBankAccountId?: string;
  thirdPartyPayer?: {
    payerName: string;
    payerBankName?: string;
    payerAccountNumber?: string;
    declaredRelationship: string;
  };
  // Invariant 51(a-i): a REDEMPTION's payout destination. Omit to default
  // to the investor's current ACTIVE primary bank account; pass explicitly
  // to target a SPECIFIC account (e.g. one still inside its post-change
  // cooling-off window, for adversarial testing) -- either way, createTxn
  // refuses to pay to an account that is not ACTIVE or is still cooling
  // off.
  payoutBankAccountId?: string;
}

// Thrown for ledger-skeleton business rules that fail before hitting the
// database (e.g. a journal line naming an account outside its own ledger
// entity) — the DB trigger is the backstop, this is the fast, clear path.
export class LedgerLifecycleError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'LedgerLifecycleError';
  }
}
