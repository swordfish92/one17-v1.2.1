import { BadRequestException, Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { TaxService } from '../tax/tax.service';
import { TaxError, WhtRateRow, VatRateRow, StampDutyRateRow } from '../tax/tax.types';
import {
  ProposeTaxRateVersionDto,
  GrantTaxExemptionDto,
  CreateFeeInvoiceDto,
  RecognizeVendorInvoiceVatDto,
  AssessStampDutyDto,
  ConfigureTaxGlMappingDto,
  ConfigureRemittanceDueDateDto,
} from './ops-api.types';

// Invariant 65(c) (CHECK18, CEO ruling 9-Jul-2026): the unified Tax
// Configuration framework -- VAT, WHT, Stamp Duty as governed Settings
// siblings of the existing PAYE TaxRuleConfig. Thin adapter -- every rule
// (park-don't-invent, effective-dating, propose->approve) lives in
// TaxService.
@Controller('tax')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class TaxController {
  constructor(private readonly tax: TaxService) {}

  @Get('rate-versions')
  @RequiresCapability('TAX_CONFIGURATION_MANAGEMENT', 'VIEW')
  async listRateVersions(@Query('taxType') taxType?: 'WHT' | 'VAT' | 'STAMP_DUTY') {
    return this.tax.listRateVersions(taxType);
  }

  @Post('rate-versions')
  @RequiresCapability('TAX_CONFIGURATION_MANAGEMENT', 'INITIATE')
  async proposeRateVersion(@Body() dto: ProposeTaxRateVersionDto, @CurrentUser() user: AuthenticatedUser) {
    try {
      return await this.tax.proposeRateVersion({
        taxType: dto.taxType,
        rates: dto.rates as unknown as WhtRateRow[] | VatRateRow[] | StampDutyRateRow[],
        effectiveFrom: new Date(dto.effectiveFrom),
        proposedByUserId: user.userId,
      });
    } catch (err) {
      if (err instanceof TaxError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  // Approval itself happens through the generic Workflow Inbox (see
  // WorkflowInboxService's TAX_RATE_VERSION_APPROVAL dispatch entry) --
  // no duplicate approve route here, matching the PROCUREMENT_PAYMENT_
  // BATCH / ZAKAT_ASSESSMENT_CERTIFICATION precedent (once a workflow
  // type is dispatched, approval has exactly one path, not two).

  @Get('exemptions')
  @RequiresCapability('TAX_CONFIGURATION_MANAGEMENT', 'VIEW')
  async listExemptions(@Query('taxType') taxType?: 'WHT' | 'VAT' | 'STAMP_DUTY') {
    return this.tax.listExemptions(taxType);
  }

  @Post('exemptions')
  @RequiresCapability('TAX_CONFIGURATION_MANAGEMENT', 'INITIATE')
  async grantExemption(@Body() dto: GrantTaxExemptionDto, @CurrentUser() user: AuthenticatedUser) {
    return this.tax.grantExemption({ investorId: dto.investorId, taxType: dto.taxType, reason: dto.reason, grantedByUserId: user.userId });
  }

  @Post('exemptions/:investorId/:taxType/revoke')
  @RequiresCapability('TAX_CONFIGURATION_MANAGEMENT', 'INITIATE')
  async revokeExemption(@Param('investorId') investorId: string, @Param('taxType') taxType: 'WHT' | 'VAT' | 'STAMP_DUTY', @CurrentUser() user: AuthenticatedUser) {
    return this.tax.revokeExemption(investorId, taxType, user.userId);
  }

  @Get('fee-invoices')
  @RequiresCapability('FEE_INVOICE_MANAGEMENT', 'VIEW')
  async listFeeInvoices() {
    return this.tax.listFeeInvoices();
  }

  @Post('fee-invoices')
  @RequiresCapability('FEE_INVOICE_MANAGEMENT', 'INITIATE')
  async createFeeInvoice(@Body() dto: CreateFeeInvoiceDto, @CurrentUser() user: AuthenticatedUser) {
    try {
      return await this.tax.createFeeInvoice({
        counterpartyId: dto.counterpartyId,
        investorId: dto.investorId,
        description: dto.description,
        feeAmountKobo: BigInt(dto.feeAmountKobo),
        serviceOrFeeType: dto.serviceOrFeeType,
        invoiceDate: new Date(dto.invoiceDate),
        createdByUserId: user.userId,
      });
    } catch (err) {
      if (err instanceof TaxError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  @Post('vendor-invoices/:id/recognize-vat')
  @RequiresCapability('FEE_INVOICE_MANAGEMENT', 'INITIATE')
  async recognizeVendorInvoiceVat(@Param('id') id: string, @Body() dto: RecognizeVendorInvoiceVatDto, @CurrentUser() user: AuthenticatedUser) {
    try {
      return await this.tax.recognizeVendorInvoiceVat({ vendorInvoiceId: id, serviceOrFeeType: dto.serviceOrFeeType, actorUserId: user.userId });
    } catch (err) {
      if (err instanceof TaxError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  @Get('stamp-duty-assessments')
  @RequiresCapability('TAX_CONFIGURATION_MANAGEMENT', 'VIEW')
  async listStampDutyAssessments() {
    return this.tax.listStampDutyAssessments();
  }

  @Post('stamp-duty-assessments')
  @RequiresCapability('FEE_INVOICE_MANAGEMENT', 'INITIATE')
  async assessStampDuty(@Body() dto: AssessStampDutyDto, @CurrentUser() user: AuthenticatedUser) {
    return this.tax.assessStampDuty({
      instrumentType: dto.instrumentType,
      entityType: dto.entityType,
      entityId: dto.entityId,
      baseAmountKobo: dto.baseAmountKobo ? BigInt(dto.baseAmountKobo) : undefined,
      transactionDate: new Date(dto.transactionDate),
      assessedByUserId: user.userId,
    });
  }

  @Get('gl-mappings')
  @RequiresCapability('TAX_CONFIGURATION_MANAGEMENT', 'VIEW')
  async listGlMappings() {
    return this.tax.listGlMappings();
  }

  @Post('gl-mappings')
  @RequiresCapability('TAX_CONFIGURATION_MANAGEMENT', 'APPROVE')
  async configureGlMapping(@Body() dto: ConfigureTaxGlMappingDto, @CurrentUser() user: AuthenticatedUser) {
    return this.tax.configureGlMapping({ taxType: dto.taxType, payableAccountCode: dto.payableAccountCode, configuredByUserId: user.userId });
  }

  @Get('remittance-due-date-configs')
  @RequiresCapability('TAX_REMITTANCE_MANAGEMENT', 'VIEW')
  async listRemittanceDueDateConfigs() {
    return this.tax.listRemittanceDueDateConfigs();
  }

  @Post('remittance-due-date-configs')
  @RequiresCapability('TAX_CONFIGURATION_MANAGEMENT', 'APPROVE')
  async configureRemittanceDueDate(@Body() dto: ConfigureRemittanceDueDateDto, @CurrentUser() user: AuthenticatedUser) {
    return this.tax.configureRemittanceDueDate({ taxType: dto.taxType, authority: dto.authority, dayOfMonthDue: dto.dayOfMonthDue }, user.userId);
  }

  @Get('remittance-batches')
  @RequiresCapability('TAX_REMITTANCE_MANAGEMENT', 'VIEW')
  async listRemittanceBatches(@Query('taxType') taxType?: 'WHT' | 'VAT' | 'STAMP_DUTY') {
    return this.tax.listRemittanceBatches(taxType);
  }

  @Post('remittance-batches/:id/submit-for-approval')
  @RequiresCapability('TAX_REMITTANCE_MANAGEMENT', 'INITIATE')
  async submitRemittanceForApproval(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    try {
      return await this.tax.proposeRemittanceApproval(id, user.userId);
    } catch (err) {
      if (err instanceof TaxError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  // Approval routes through the generic Workflow Inbox (TAX_REMITTANCE_
  // BATCH_APPROVAL dispatch entry) -- same one-path-only reasoning as
  // rate-version approval above.

  @Post('remittance-batches/:id/retry-letter')
  @RequiresCapability('TAX_REMITTANCE_MANAGEMENT', 'INITIATE')
  async retryRemittanceLetter(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    try {
      return await this.tax.retryRemittanceLetter(id, user.userId);
    } catch (err) {
      if (err instanceof TaxError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  @Post('remittance-batches/:id/mark-remitted')
  @RequiresCapability('TAX_REMITTANCE_MANAGEMENT', 'INITIATE')
  async markRemitted(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    try {
      return await this.tax.markRemitted(id, user.userId);
    } catch (err) {
      if (err instanceof TaxError) throw new BadRequestException(err.message);
      throw err;
    }
  }
}
