import { BadRequestException, Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { LedgerService } from '../ledger/ledger.service';
import { ReportingService } from '../reporting/reporting.service';
import { ParameterService } from '../parameters/parameters.service';
import { CounterpartyService } from '../counterparty/counterparty.service';
import { ProductFactoryService } from '../product/product-factory.service';
import { ProductFactoryError } from '../product/product-factory.types';
import { HalalFundEngineService } from '../engine-halal-fund/halal-fund-engine.service';
import { HalalFundEngineError } from '../engine-halal-fund/halal-fund-engine.types';
import { CreateFundProductDto, RecordFacilityFundAccountingTermsDto, ProposeMarketValueEntryDto } from './ops-api.types';

// CHECK5 item 5h: "Fund Accounting (BS/IS/GL + product provisioning)" per
// CLAUDE.md's screen inventory. The BS/IS/GL presentation methods this
// controller calls (ReportingService.getBalanceSheet/getIncomeStatement/
// getRecentJournals) were built alongside this controller — the reporting
// module's own comments had flagged "turning trial balance into statement
// lines is Phase 4's job, not modeled here"; this screen is that job,
// scoped to grouping by the account's own accountType (data, not a
// hardcoded line item — invariant 15).
@Controller('fund-accounting')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class FundAccountingController {
  constructor(
    private readonly ledger: LedgerService,
    private readonly reporting: ReportingService,
    private readonly parameters: ParameterService,
    private readonly counterparty: CounterpartyService,
    private readonly productFactory: ProductFactoryService,
    private readonly halalFundEngine: HalalFundEngineService,
  ) {}

  // CHECK16 62(c): NAV market-value entry — governed, maker≠checker.
  @Get('market-value-entries/:ledgerEntityCode')
  @RequiresCapability('NAV_MARKET_VALUE_ENTRY', 'VIEW')
  async listMarketValueEntries(@Param('ledgerEntityCode') ledgerEntityCode: string) {
    return this.halalFundEngine.listMarketValueEntries(ledgerEntityCode);
  }

  @Post('market-value-entries/:ledgerEntityCode')
  @RequiresCapability('NAV_MARKET_VALUE_ENTRY', 'INITIATE')
  async proposeMarketValueEntry(@Param('ledgerEntityCode') ledgerEntityCode: string, @Body() dto: ProposeMarketValueEntryDto, @CurrentUser() user: AuthenticatedUser) {
    try {
      return await this.halalFundEngine.proposeMarketValueEntry({
        ledgerEntityCode,
        valuationDate: new Date(dto.valuationDate),
        marketValueKobo: BigInt(dto.marketValueKobo),
        proposedByUserId: user.userId,
      });
    } catch (err) {
      if (err instanceof HalalFundEngineError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  @Post('market-value-entries/:entryId/approve')
  @RequiresCapability('NAV_MARKET_VALUE_ENTRY', 'APPROVE')
  async approveMarketValueEntry(@Param('entryId') entryId: string, @CurrentUser() user: AuthenticatedUser) {
    try {
      return await this.halalFundEngine.approveMarketValueEntry({ entryId, approvedByUserId: user.userId });
    } catch (err) {
      if (err instanceof HalalFundEngineError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  // Invariant 36(d): the fund-account receivables dashboard — reads the
  // SAME CounterpartyRepaymentObligation rows the counterparty's own
  // dashboard shows (no second table, no dual entry).
  @Get('receivables')
  @RequiresCapability('FUND_ACCOUNTING_RECEIVABLES', 'VIEW')
  async listReceivables(@CurrentUser() user: AuthenticatedUser) {
    return this.counterparty.listFundAccountingReceivables(user.userId);
  }

  @Get('disbursed-facilities')
  @RequiresCapability('FUND_ACCOUNTING_RECEIVABLES', 'VIEW')
  async listDisbursedFacilities(@CurrentUser() user: AuthenticatedUser) {
    return this.counterparty.listDisbursedFacilityApplications(user.userId);
  }

  @Post('facility-terms/:id')
  @RequiresCapability('FUND_ACCOUNTING_RECEIVABLES', 'INITIATE')
  async recordFacilityTerms(@Param('id') id: string, @Body() dto: RecordFacilityFundAccountingTermsDto, @CurrentUser() user: AuthenticatedUser) {
    return this.counterparty.recordFundAccountingTerms(id, dto.targetedReturnPct, user.userId);
  }

  @Get('entities')
  @RequiresCapability('FINANCIAL_STATEMENTS', 'VIEW')
  async listEntities() {
    return this.ledger.listFundEntities();
  }

  @Get(':ledgerEntityCode/balance-sheet')
  @RequiresCapability('FINANCIAL_STATEMENTS', 'VIEW')
  async getBalanceSheet(
    @Param('ledgerEntityCode') ledgerEntityCode: string,
    @Query('basis') basis: 'IFRS' | 'AAOIFI' = 'AAOIFI',
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.reporting.getBalanceSheet(ledgerEntityCode, basis, user.userId);
  }

  @Get(':ledgerEntityCode/income-statement')
  @RequiresCapability('FINANCIAL_STATEMENTS', 'VIEW')
  async getIncomeStatement(
    @Param('ledgerEntityCode') ledgerEntityCode: string,
    @Query('periodStart') periodStart: string,
    @Query('periodEnd') periodEnd: string,
    @Query('basis') basis: 'IFRS' | 'AAOIFI' = 'AAOIFI',
    @CurrentUser() user: AuthenticatedUser,
  ) {
    const start = periodStart ? new Date(periodStart) : new Date(new Date().getFullYear(), 0, 1);
    const end = periodEnd ? new Date(periodEnd) : new Date();
    return this.reporting.getIncomeStatement(ledgerEntityCode, start, end, basis, user.userId);
  }

  @Get(':ledgerEntityCode/journals')
  @RequiresCapability('FINANCIAL_STATEMENTS', 'VIEW')
  async getRecentJournals(@Param('ledgerEntityCode') ledgerEntityCode: string, @CurrentUser() user: AuthenticatedUser) {
    return this.reporting.getRecentJournals(ledgerEntityCode, user.userId);
  }

  @Get('products')
  @RequiresCapability('FINANCIAL_STATEMENTS', 'VIEW')
  async listProducts() {
    return this.parameters.listProducts();
  }

  // Invariant 44(b) (CHECK10) / 60(b)-(c) (CHECK15): the governed product-
  // factory create step -- ParameterService.createProduct does the actual
  // row insert; this opens the PRODUCT_SETUP workflow instance a CIO review
  // then a separate MD_CEO approval later close. Factory coverage now
  // extends to all three classes including MANDATE (invariant 60c) -- no
  // engineType rejection here anymore.
  @Post('products')
  @RequiresCapability('PRODUCT_SETUP_INITIATION', 'INITIATE')
  async createProduct(@Body() dto: CreateFundProductDto, @CurrentUser() user: AuthenticatedUser) {
    const { product } = await this.productFactory.initiateProductSetup({ ...dto, initiatedByUserId: user.userId });
    return product;
  }

  // Invariant 60(b): the SAME "approve next step" endpoint serves both the
  // CIO review step and the MD_CEO final-approval step -- WorkflowEngineService.
  // approveNextStep() resolves whichever step is actually pending and checks
  // ITS OWN requiredFunctionCode (PRODUCT_SETUP_REVIEW then PRODUCT_SETUP_
  // APPROVAL), so the controller doesn't need to know which step it is. Only
  // once BOTH steps are APPROVED does the ledger entity + CoA template get
  // auto-provisioned. Gated on the union of the two step capabilities so
  // either a CIO or an MD_CEO can reach the route -- WorkflowEngineService
  // itself is what actually enforces which step-specific capability applies.
  @Post('products/:code/approve-setup')
  @RequiresCapability('PRODUCT_SETUP_REVIEW', 'APPROVE')
  @RequiresCapability('PRODUCT_SETUP_APPROVAL', 'APPROVE')
  async approveProductSetup(@Param('code') code: string, @CurrentUser() user: AuthenticatedUser) {
    return this.productFactory.approveProductSetupByCode(code, user.userId);
  }

  // Invariant 44(b): the final DRAFT->ACTIVE flip -- ParameterService.
  // activateProduct existed since Build Plan step 5 with zero controller
  // wiring at all (confirmed by grep: only ever called from
  // parameters.smoke.ts). Refuses unless BOTH governed parameters AND
  // Shariah approval are on file (the mandatory gate this invariant adds).
  @Post('products/:code/activate')
  @RequiresCapability('PARAMETERS', 'APPROVE')
  async activateProduct(@Param('code') code: string, @CurrentUser() user: AuthenticatedUser) {
    return this.parameters.activateProduct(code, user.userId);
  }
}
