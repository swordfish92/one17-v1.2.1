import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { LedgerService } from '../ledger/ledger.service';
import { ParameterService } from '../parameters/parameters.service';
import { CreateJournalEntryDto, RequestJournalPostingDto, CreateLedgerEntityDto, LoadChartOfAccountsDto, CreateTxnDto } from './ops-api.types';

// Invariant 39(a), Tier 1: the manual JOURNAL_ENTRIES maker screen —
// LedgerService.createJournalEntry/requestJournalPosting have existed
// since Phase 2 (called internally by WM's advisory-fee charge, payroll
// postings, and event-journal auto-postings) but no route ever let a
// FIN_ADMIN draft an ARBITRARY Dr/Cr entry from scratch. Approval is NOT a
// route here — approveJournalPosting already dispatches through the
// standing Workflow Inbox (JOURNAL_POSTING type), same precedent as every
// other workflow-backed approval in this codebase; duplicating it here
// would be a second posting path, which invariant 39(b)'s own "never
// duplicate a posting path" rule forbids.
@Controller('ledger')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class LedgerController {
  constructor(
    private readonly ledger: LedgerService,
    private readonly parameters: ParameterService,
  ) {}

  @Get('entities')
  @RequiresCapability('JOURNAL_ENTRIES', 'INITIATE')
  async listEntities() {
    return this.ledger.listAllLedgerEntities();
  }

  // Invariant 49(b) (CHECK11): the Create Ledger Entity form's product
  // picker, needed now that createLedgerEntity refuses a FUND/POOL/MANDATE
  // entity with no productCode -- same JOURNAL_ENTRIES INITIATE gate as
  // this controller's other routes (both held by FIN_ADMIN) rather than
  // reusing FINANCIAL_STATEMENTS VIEW from fund-accounting.controller.ts's
  // own products list, which this screen's caller isn't guaranteed to hold.
  @Get('products')
  @RequiresCapability('JOURNAL_ENTRIES', 'INITIATE')
  async listProducts() {
    return this.parameters.listProducts();
  }

  @Get('chart-of-accounts')
  @RequiresCapability('JOURNAL_ENTRIES', 'INITIATE')
  async listChartOfAccounts(@Query('ledgerEntityCode') ledgerEntityCode: string) {
    return this.ledger.listChartOfAccounts(ledgerEntityCode);
  }

  @Get('journal-entries')
  @RequiresCapability('JOURNAL_ENTRIES', 'INITIATE')
  async listJournalEntries(@Query('ledgerEntityCode') ledgerEntityCode?: string) {
    return this.ledger.listJournalEntries({ ledgerEntityCode });
  }

  @Post('journal-entries')
  @RequiresCapability('JOURNAL_ENTRIES', 'INITIATE')
  async createJournalEntry(@Body() dto: CreateJournalEntryDto, @CurrentUser() user: AuthenticatedUser) {
    return this.ledger.createJournalEntry({
      ledgerEntityCode: dto.ledgerEntityCode,
      journalReference: dto.journalReference,
      entryDate: new Date(dto.entryDate),
      description: dto.description,
      lines: dto.lines.map((l) => ({
        accountCode: l.accountCode,
        debitKobo: l.debitKobo !== undefined ? BigInt(l.debitKobo) : undefined,
        creditKobo: l.creditKobo !== undefined ? BigInt(l.creditKobo) : undefined,
        description: l.description,
      })),
      journalClass: dto.journalClass,
      divergenceType: dto.divergenceType,
      adjustmentForBasis: dto.adjustmentForBasis,
      createdByUserId: user.userId,
    });
  }

  @Post('journal-entries/request-posting')
  @RequiresCapability('JOURNAL_ENTRIES', 'INITIATE')
  async requestPosting(@Body() dto: RequestJournalPostingDto, @CurrentUser() user: AuthenticatedUser) {
    return this.ledger.requestJournalPosting({ journalEntryId: dto.journalEntryId, initiatedByUserId: user.userId });
  }

  // Invariant 39(c), Tier 3: LEDGER_ENTITY_SETUP's own capability —
  // createLedgerEntity/loadChartOfAccountsTemplate have existed since
  // Build Plan step 8 (task #8) but every current ledger entity was seeded
  // directly; this is the first live route to create one at runtime.
  @Post('entities')
  @RequiresCapability('LEDGER_ENTITY_SETUP', 'INITIATE')
  async createEntity(@Body() dto: CreateLedgerEntityDto, @CurrentUser() user: AuthenticatedUser) {
    return this.ledger.createLedgerEntity({
      code: dto.code,
      name: dto.name,
      entityType: dto.entityType,
      primaryBasis: dto.primaryBasis,
      productCode: dto.productCode,
      createdByUserId: user.userId,
    });
  }

  @Post('chart-of-accounts')
  @RequiresCapability('LEDGER_ENTITY_SETUP', 'INITIATE')
  async loadChartOfAccounts(@Body() dto: LoadChartOfAccountsDto, @CurrentUser() user: AuthenticatedUser) {
    return this.ledger.loadChartOfAccountsTemplate({
      ledgerEntityCode: dto.ledgerEntityCode,
      accounts: dto.accounts,
      createdByUserId: user.userId,
    });
  }

  // Invariant 39(c), Tier 3: TXN_ENTRY confirmed (not retired) — createTxn
  // is the transaction-spine maker action HalalFundEngineService already
  // depends on reading (NAV/unit aggregation); nothing else ever writes a
  // Txn row outside the one-time TPL_05 migration loader. Maker-only by
  // design (see LedgerService.createTxn's own header comment) — no
  // approval route here, since checkerUserId/postedJournalEntryId wiring
  // is explicitly future scope (Phase 2/3's job "once the product engines
  // exist," which they now do, but reconciling txn-level checker approval
  // against the engines' own NAV-run posting is a separate design question
  // from this task's confirm-or-retire scope).
  @Get('txns')
  @RequiresCapability('TXN_ENTRY', 'INITIATE')
  async listTxns(@Query('investorId') investorId?: string, @Query('productAccountId') productAccountId?: string) {
    return this.ledger.listTxns({ investorId, productAccountId });
  }

  @Post('txns')
  @RequiresCapability('TXN_ENTRY', 'INITIATE')
  async createTxn(@Body() dto: CreateTxnDto, @CurrentUser() user: AuthenticatedUser) {
    return this.ledger.createTxn({
      txnType: dto.txnType,
      ledgerEntityCode: dto.ledgerEntityCode,
      productAccountId: dto.productAccountId,
      valueDate: new Date(dto.valueDate),
      amountKobo: BigInt(dto.amountKobo),
      payerBankAccountId: dto.payerBankAccountId,
      thirdPartyPayer: dto.thirdPartyPayer,
      makerUserId: user.userId,
    });
  }
}
