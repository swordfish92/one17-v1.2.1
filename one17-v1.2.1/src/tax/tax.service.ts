import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { LetterService } from '../letter/letter.service';
import {
  ApproveTaxRateVersionInput,
  AssessStampDutyInput,
  ComputeVatInput,
  ComputeVatResult,
  ComputeWhtInput,
  ComputeWhtResult,
  ConfigureRemittanceDueDateInput,
  ConfigureTaxGlMappingInput,
  CreateFeeInvoiceInput,
  GrantExemptionInput,
  ProposeTaxRateVersionInput,
  RecognizeVendorInvoiceVatInput,
  StampDutyRateRow,
  TaxError,
  TaxTypeCode,
  VatRateRow,
  WhtRateRow,
} from './tax.types';

// Invariant 65(c) (CHECK18, CEO ruling 9-Jul-2026 SUPERSEDES the WHT-only
// scope): the unified Tax Configuration framework -- VAT, WHT, and Stamp
// Duty as SIBLINGS of the existing PAYE TaxRuleConfig, same versioned-
// config family. "Park, don't invent" throughout: every rate table ships
// with ZERO versions until Finance proposes real FinCon-sourced values
// (propose->approve, Finance initiates, MD approves); every computation
// method here refuses honestly (never fabricates a rate) when no ACTIVE
// version covers the transaction date -- except computeWht, which is the
// one exception: the Fund Obligations Schedule/payout pipeline (65a/65b)
// is a SEPARATE, unchanged feature that must keep working standalone
// before Finance ever configures WHT, so an unconfigured WHT table
// degrades to a visible zero rather than blocking payout compilation.
@Injectable()
export class TaxService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
    private readonly letter: LetterService,
  ) {}

  // ==========================================================================
  // Rate versions -- effective-dated, propose (Finance) -> approve (MD).
  // ==========================================================================
  async listRateVersions(taxType?: TaxTypeCode) {
    return this.prisma.taxRateVersion.findMany({ where: taxType ? { taxType } : undefined, orderBy: [{ taxType: 'asc' }, { version: 'desc' }] });
  }

  async proposeRateVersion(input: ProposeTaxRateVersionInput) {
    await this.assertCapability(input.proposedByUserId, 'TAX_CONFIGURATION_MANAGEMENT', 'INITIATE', 'propose a tax rate version');
    this.validateRateShape(input.taxType, input.rates);
    const latest = await this.prisma.taxRateVersion.findFirst({ where: { taxType: input.taxType }, orderBy: { version: 'desc' } });
    const version = (latest?.version ?? 0) + 1;

    const created = await this.prisma.taxRateVersion.create({
      data: { taxType: input.taxType, version, rates: input.rates as object, effectiveFrom: input.effectiveFrom, status: 'DRAFT', proposedByUserId: input.proposedByUserId },
    });

    let instance;
    try {
      instance = await this.workflow.initiate({
        workflowTypeCode: 'TAX_RATE_VERSION_APPROVAL',
        entityType: 'tax_rate_version',
        entityId: created.id,
        initiatedByUserId: input.proposedByUserId,
        scenario: 'STANDARD',
      });
    } catch (err) {
      await this.audit.record({ actorUserId: input.proposedByUserId, action: 'INITIATE_FAILED_COMPENSATED', entityType: 'tax_rate_version', entityId: created.id, after: { workflowTypeCode: 'TAX_RATE_VERSION_APPROVAL', reason: (err as Error).message } });
      await this.prisma.taxRateVersion.delete({ where: { id: created.id } });
      throw err;
    }
    return this.prisma.taxRateVersion.update({ where: { id: created.id }, data: { workflowInstanceId: instance.id } });
  }

  // Invariant 65(c)(i): "NEVER retroactive on already-approved batches/
  // invoices" -- approving a NEW version never touches any row that
  // already recorded a prior version's ID; a later effectiveFrom simply
  // becomes the version getActiveVersion resolves for FUTURE transaction
  // dates. Also supersedes the previously-ACTIVE version of the SAME
  // taxType (same governed-config pattern as every other versioned table
  // in this codebase), never leaving two ACTIVE rows for one tax type.
  async approveRateVersion(input: ApproveTaxRateVersionInput) {
    const updated = await this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
    if (updated.status !== 'APPROVED') return null;
    const version = await this.prisma.taxRateVersion.findFirstOrThrow({ where: { workflowInstanceId: input.workflowInstanceId } });

    await this.prisma.$transaction([
      this.prisma.taxRateVersion.updateMany({ where: { taxType: version.taxType, status: 'ACTIVE' }, data: { status: 'SUPERSEDED' } }),
      this.prisma.taxRateVersion.update({ where: { id: version.id }, data: { status: 'ACTIVE', approvedByUserId: input.approverUserId } }),
    ]);
    await this.audit.record({ actorUserId: input.approverUserId, action: 'APPROVE', entityType: 'tax_rate_version', entityId: version.id, after: { taxType: version.taxType, version: version.version, effectiveFrom: version.effectiveFrom.toISOString() } });
    return this.prisma.taxRateVersion.findUniqueOrThrow({ where: { id: version.id } });
  }

  private validateRateShape(taxType: TaxTypeCode, rates: unknown) {
    if (!Array.isArray(rates) || rates.length === 0) {
      throw new TaxError(`${taxType} rates must be a non-empty array -- ships empty at the table level (no versions), never an empty-array version.`);
    }
  }

  // The version whose effectiveFrom is the LATEST one on-or-before the
  // transaction date, among ACTIVE + SUPERSEDED versions of this taxType
  // -- effective-dating means an OLD transaction still resolves the
  // version that covered it even after a newer version supersedes the
  // "current" one for future dates (invariant 65c(iv) adversarial case).
  private async getEffectiveVersion(taxType: TaxTypeCode, transactionDate: Date) {
    return this.prisma.taxRateVersion.findFirst({
      where: { taxType, status: { in: ['ACTIVE', 'SUPERSEDED'] }, effectiveFrom: { lte: transactionDate } },
      orderBy: { effectiveFrom: 'desc' },
    });
  }

  // ==========================================================================
  // Exemptions -- invariant 65(c)(i): "exemptions per investor."
  // ==========================================================================
  async grantExemption(input: GrantExemptionInput) {
    await this.assertCapability(input.grantedByUserId, 'TAX_CONFIGURATION_MANAGEMENT', 'INITIATE', 'grant a tax exemption');
    const exemption = await this.prisma.investorTaxExemption.upsert({
      where: { investorId_taxType: { investorId: input.investorId, taxType: input.taxType } },
      create: { investorId: input.investorId, taxType: input.taxType, reason: input.reason, grantedByUserId: input.grantedByUserId },
      update: { reason: input.reason, grantedByUserId: input.grantedByUserId },
    });
    await this.audit.record({ actorUserId: input.grantedByUserId, action: 'CREATE', entityType: 'investor_tax_exemption', entityId: exemption.id, after: { investorId: input.investorId, taxType: input.taxType } });
    return exemption;
  }

  async revokeExemption(investorId: string, taxType: TaxTypeCode, actorUserId: string) {
    await this.assertCapability(actorUserId, 'TAX_CONFIGURATION_MANAGEMENT', 'INITIATE', 'revoke a tax exemption');
    const existing = await this.prisma.investorTaxExemption.findUnique({ where: { investorId_taxType: { investorId, taxType } } });
    if (!existing) return null;
    await this.prisma.investorTaxExemption.delete({ where: { investorId_taxType: { investorId, taxType } } });
    await this.audit.record({ actorUserId, action: 'DELETE', entityType: 'investor_tax_exemption', entityId: existing.id, after: { investorId, taxType } });
    return existing;
  }

  async listExemptions(taxType?: TaxTypeCode) {
    return this.prisma.investorTaxExemption.findMany({ where: taxType ? { taxType } : undefined, include: { investor: { select: { fullLegalName: true } } } });
  }

  // ==========================================================================
  // Computation -- invariant 65(c)(ii): "each application computes from
  // the version effective on the transaction date."
  // ==========================================================================
  // WHT: never blocks the payout pipeline if unconfigured (see class
  // docblock) -- degrades to an honest, visible zero (configured: false).
  async computeWht(input: ComputeWhtInput): Promise<ComputeWhtResult> {
    const exemption = await this.prisma.investorTaxExemption.findUnique({ where: { investorId_taxType: { investorId: input.investorId, taxType: 'WHT' } } });
    if (exemption) {
      return { whtKobo: 0n, netKobo: input.grossKobo, exempt: true, configured: true, rateVersionId: null };
    }
    const version = await this.getEffectiveVersion('WHT', input.transactionDate);
    if (!version) {
      return { whtKobo: 0n, netKobo: input.grossKobo, exempt: false, configured: false, rateVersionId: null };
    }
    const investor = await this.prisma.investor.findUniqueOrThrow({ where: { investorId: input.investorId } });
    const category = investor.entityType === 'HNWI_INDIVIDUAL' ? 'INDIVIDUAL' : 'CORPORATE';
    const rates = version.rates as unknown as WhtRateRow[];
    const rateRow = rates.find((r) => r.category === category && r.incomeType === input.incomeType);
    if (!rateRow) {
      return { whtKobo: 0n, netKobo: input.grossKobo, exempt: false, configured: false, rateVersionId: version.id };
    }
    const whtKobo = BigInt(Math.round((Number(input.grossKobo) * rateRow.ratePct) / 100));
    return { whtKobo, netKobo: input.grossKobo - whtKobo, exempt: false, configured: true, rateVersionId: version.id };
  }

  // VAT: shared by both output (FeeInvoice) and input (VendorInvoice)
  // recognition -- refuses (throws) when unconfigured, since VAT
  // invoicing is a genuinely new capability this tranche introduces (no
  // prior feature depends on it working standalone the way payouts do).
  async computeVat(input: ComputeVatInput): Promise<ComputeVatResult> {
    const version = await this.getEffectiveVersion('VAT', input.transactionDate);
    if (!version) {
      throw new TaxError(`No ACTIVE VAT rate version is configured effective on ${input.transactionDate.toISOString().slice(0, 10)} -- Finance must propose and MD approve one first (invariant 65c: never invent a rate).`);
    }
    const rates = version.rates as unknown as VatRateRow[];
    const rateRow = rates.find((r) => r.serviceOrFeeType === input.serviceOrFeeType);
    if (!rateRow) {
      throw new TaxError(`No VAT rate is configured for service/fee type "${input.serviceOrFeeType}" in the ACTIVE version.`);
    }
    const vatKobo = BigInt(Math.round((Number(input.amountKobo) * rateRow.ratePct) / 100));
    return { vatKobo, configured: true, rateVersionId: version.id };
  }

  async createFeeInvoice(input: CreateFeeInvoiceInput) {
    await this.assertCapability(input.createdByUserId, 'FEE_INVOICE_MANAGEMENT', 'INITIATE', 'create a fee invoice');
    if (!input.counterpartyId && !input.investorId) {
      throw new TaxError('A fee invoice requires exactly one recipient (counterpartyId or investorId).');
    }
    const vat = await this.computeVat({ serviceOrFeeType: input.serviceOrFeeType, amountKobo: input.feeAmountKobo, transactionDate: input.invoiceDate });
    const invoiceNumber = `FEE-${input.invoiceDate.getFullYear()}-${Date.now()}`;
    const invoice = await this.prisma.feeInvoice.create({
      data: {
        invoiceNumber, counterpartyId: input.counterpartyId, investorId: input.investorId, description: input.description,
        feeAmountKobo: input.feeAmountKobo, vatKobo: vat.vatKobo, vatRateVersionId: vat.rateVersionId,
        totalKobo: input.feeAmountKobo + vat.vatKobo, invoiceDate: input.invoiceDate, createdByUserId: input.createdByUserId,
      },
    });
    await this.audit.record({ actorUserId: input.createdByUserId, action: 'CREATE', entityType: 'fee_invoice', entityId: invoice.id, after: { feeAmountKobo: input.feeAmountKobo.toString(), vatKobo: vat.vatKobo.toString() } });
    return invoice;
  }

  async listFeeInvoices() {
    return this.prisma.feeInvoice.findMany({ orderBy: { invoiceDate: 'desc' }, include: { counterparty: { select: { legalName: true } }, investor: { select: { fullLegalName: true } } } });
  }

  // Input VAT recognition on an EXISTING procurement vendor invoice --
  // refuses if the invoice already carries a recognized rate version
  // (one-time, immutable, matches every other "one-time confirmation"
  // step in this codebase).
  async recognizeVendorInvoiceVat(input: RecognizeVendorInvoiceVatInput) {
    await this.assertCapability(input.actorUserId, 'FEE_INVOICE_MANAGEMENT', 'INITIATE', 'recognize input VAT on a vendor invoice');
    const invoice = await this.prisma.vendorInvoice.findUniqueOrThrow({ where: { id: input.vendorInvoiceId } });
    if (invoice.recognizedVatRateVersionId) {
      throw new TaxError(`Vendor invoice ${invoice.id} already has input VAT recognized (${invoice.vatKobo} kobo) -- immutable once recorded.`);
    }
    const vat = await this.computeVat({ serviceOrFeeType: input.serviceOrFeeType, amountKobo: invoice.invoiceAmountKobo, transactionDate: invoice.invoiceDate });
    const updated = await this.prisma.vendorInvoice.update({ where: { id: invoice.id }, data: { vatKobo: vat.vatKobo, recognizedVatRateVersionId: vat.rateVersionId } });
    await this.audit.record({ actorUserId: input.actorUserId, action: 'UPDATE', entityType: 'vendor_invoice', entityId: invoice.id, after: { vatKobo: vat.vatKobo.toString(), inputVatRecognized: true } });
    return updated;
  }

  // ==========================================================================
  // Stamp Duty -- invariant 65(c)(ii): "on configured instrument types at
  // their creation/execution events." Returns null (no assessment, never
  // an error) when the caller's instrumentType isn't a configured
  // trigger in the ACTIVE version -- "configured instrument types" lives
  // entirely in that Json, never a hardcoded list here.
  // ==========================================================================
  async assessStampDuty(input: AssessStampDutyInput) {
    const version = await this.getEffectiveVersion('STAMP_DUTY', input.transactionDate);
    if (!version) return null;
    const rates = version.rates as unknown as StampDutyRateRow[];
    const rateRow = rates.find((r) => r.instrumentType === input.instrumentType);
    if (!rateRow) return null;
    const dutyKobo = rateRow.mode === 'FLAT' ? BigInt(rateRow.flatKobo ?? '0') : BigInt(Math.round((Number(input.baseAmountKobo ?? 0n) * (rateRow.ratePct ?? 0)) / 100));
    const assessment = await this.prisma.stampDutyAssessment.create({
      data: { instrumentType: input.instrumentType, entityType: input.entityType, entityId: input.entityId, dutyKobo, taxRateVersionId: version.id, assessedByUserId: input.assessedByUserId },
    });
    await this.audit.record({ actorUserId: input.assessedByUserId, action: 'CREATE', entityType: 'stamp_duty_assessment', entityId: assessment.id, after: { instrumentType: input.instrumentType, entityType: input.entityType, entityId: input.entityId, dutyKobo: dutyKobo.toString() } });
    return assessment;
  }

  async listStampDutyAssessments() {
    return this.prisma.stampDutyAssessment.findMany({ orderBy: { assessedAt: 'desc' } });
  }

  // ==========================================================================
  // GL mapping -- invariant 65(c)(iii): "postings PARKED until the
  // mapping signs, computation/display live immediately."
  // ==========================================================================
  async listGlMappings() {
    return this.prisma.taxGlMapping.findMany();
  }

  async configureGlMapping(input: ConfigureTaxGlMappingInput) {
    await this.assertCapability(input.configuredByUserId, 'TAX_CONFIGURATION_MANAGEMENT', 'INITIATE', 'configure a tax GL account mapping');
    const mapping = await this.prisma.taxGlMapping.upsert({
      where: { taxType: input.taxType },
      create: { taxType: input.taxType, payableAccountCode: input.payableAccountCode, configuredByUserId: input.configuredByUserId, configuredAt: new Date() },
      update: { payableAccountCode: input.payableAccountCode, configuredByUserId: input.configuredByUserId, configuredAt: new Date() },
    });
    await this.audit.record({ actorUserId: input.configuredByUserId, action: 'UPDATE', entityType: 'tax_gl_mapping', entityId: mapping.id, after: { taxType: input.taxType, payableAccountCode: input.payableAccountCode } });
    return mapping;
  }

  // ==========================================================================
  // Remittance -- invariant 65(c)(iii): "due-date rules in config...
  // scheduled work items auto-created." Ships with zero due-date rows;
  // the sweep is an honest no-op until Compliance/Finance configures one.
  // ==========================================================================
  async listRemittanceDueDateConfigs() {
    return this.prisma.taxRemittanceDueDateConfig.findMany();
  }

  async configureRemittanceDueDate(input: ConfigureRemittanceDueDateInput, actorUserId: string) {
    await this.assertCapability(actorUserId, 'TAX_CONFIGURATION_MANAGEMENT', 'INITIATE', 'configure a tax remittance due-date rule');
    const config = await this.prisma.taxRemittanceDueDateConfig.upsert({
      where: { taxType_authority: { taxType: input.taxType, authority: input.authority } },
      create: { taxType: input.taxType, authority: input.authority, dayOfMonthDue: input.dayOfMonthDue },
      update: { dayOfMonthDue: input.dayOfMonthDue, isActive: true },
    });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'tax_remittance_due_date_config', entityId: config.id, after: { taxType: input.taxType, authority: input.authority, dayOfMonthDue: input.dayOfMonthDue } });
    return config;
  }

  // Scheduled job body -- for each ACTIVE due-date config whose due day
  // falls in the current month, creates ONE PENDING TaxRemittanceBatch
  // per (taxType, authority, month) if one doesn't already exist
  // (idempotent re-run safe). The batch's totalKobo is computed from the
  // real recognized/withheld amounts for that period -- never a guess.
  async runRemittanceDueDateSweep(scheduledFor: Date): Promise<{ configsChecked: number; batchesCreated: number }> {
    const configs = await this.prisma.taxRemittanceDueDateConfig.findMany({ where: { isActive: true } });
    let batchesCreated = 0;
    for (const config of configs) {
      const periodLabel = `${scheduledFor.getFullYear()}-${String(scheduledFor.getMonth() + 1).padStart(2, '0')}`;
      const existing = await this.prisma.taxRemittanceBatch.findFirst({ where: { taxType: config.taxType, authority: config.authority, periodLabel } });
      if (existing) continue;
      const dueDate = new Date(scheduledFor.getFullYear(), scheduledFor.getMonth(), config.dayOfMonthDue);
      const totalKobo = await this.computePeriodTaxTotal(config.taxType, scheduledFor);
      if (totalKobo === 0n) continue; // nothing to remit this period -- no empty work item
      await this.prisma.taxRemittanceBatch.create({ data: { taxType: config.taxType, authority: config.authority, periodLabel, totalKobo, dueDate, status: 'PENDING' } });
      batchesCreated++;
    }
    return { configsChecked: configs.length, batchesCreated };
  }

  private async computePeriodTaxTotal(taxType: TaxTypeCode, scheduledFor: Date): Promise<bigint> {
    const periodStart = new Date(scheduledFor.getFullYear(), scheduledFor.getMonth() - 1, 1);
    const periodEnd = new Date(scheduledFor.getFullYear(), scheduledFor.getMonth(), 0, 23, 59, 59);
    if (taxType === 'WHT') {
      const lines = await this.prisma.payoutCompilationLine.findMany({
        where: { batch: { status: { in: ['APPROVED', 'INSTRUCTION_ISSUED', 'PAID'] }, createdAt: { gte: periodStart, lte: periodEnd } } },
        select: { whtKobo: true },
      });
      return lines.reduce((sum, l) => sum + l.whtKobo, 0n);
    }
    if (taxType === 'VAT') {
      const invoices = await this.prisma.feeInvoice.findMany({ where: { invoiceDate: { gte: periodStart, lte: periodEnd } }, select: { vatKobo: true } });
      return invoices.reduce((sum, i) => sum + i.vatKobo, 0n);
    }
    const assessments = await this.prisma.stampDutyAssessment.findMany({ where: { assessedAt: { gte: periodStart, lte: periodEnd } }, select: { dutyKobo: true } });
    return assessments.reduce((sum, a) => sum + a.dutyKobo, 0n);
  }

  async listRemittanceBatches(taxType?: TaxTypeCode) {
    return this.prisma.taxRemittanceBatch.findMany({ where: taxType ? { taxType } : undefined, orderBy: { dueDate: 'asc' } });
  }

  async proposeRemittanceApproval(batchId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'TAX_REMITTANCE_MANAGEMENT', 'INITIATE', 'propose a tax remittance batch for approval');
    const batch = await this.prisma.taxRemittanceBatch.findUniqueOrThrow({ where: { id: batchId } });
    if (batch.status !== 'PENDING') throw new TaxError(`Remittance batch ${batchId} is ${batch.status}, not PENDING.`);
    const instance = await this.workflow.initiate({
      workflowTypeCode: 'TAX_REMITTANCE_BATCH_APPROVAL', entityType: 'tax_remittance_batch', entityId: batch.id,
      initiatedByUserId: actorUserId, scenario: 'STANDARD', amountKobo: batch.totalKobo,
    });
    return this.prisma.taxRemittanceBatch.update({ where: { id: batch.id }, data: { status: 'PENDING_APPROVAL', workflowInstanceId: instance.id } });
  }

  // Invariant 65(c)(iii): "remittance automation per tax type and authority
  // through the letter pipeline" -- on approval, auto-generates the tax
  // remittance instruction letter via the EXISTING LetterService (same
  // reuse-over-reinvention pattern as ObligationsService.approveBatch's
  // bank instruction letter). The [PENDING WORDING] template ships DRAFT
  // until CEO/Finance approve real wording, so generateLetter's own "no
  // ACTIVE template" refusal is the honest park -- the batch stays
  // APPROVED, un-instructed, until a real template exists.
  async approveRemittanceBatch(workflowInstanceId: string, approverUserId: string) {
    const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
    if (updated.status !== 'APPROVED') return null;
    const batch = await this.prisma.taxRemittanceBatch.findFirstOrThrow({ where: { workflowInstanceId } });
    await this.audit.record({ actorUserId: approverUserId, action: 'APPROVE', entityType: 'tax_remittance_batch', entityId: batch.id, after: { status: 'APPROVED', totalKobo: batch.totalKobo.toString() } });
    const approved = await this.prisma.taxRemittanceBatch.update({ where: { id: batch.id }, data: { status: 'APPROVED' } });

    try {
      const letter = await this.letter.generateLetter({
        letterType: 'TAX_REMITTANCE_INSTRUCTION', generatedByUserId: approverUserId,
        extraMergeFields: { taxType: batch.taxType, authority: batch.authority, periodLabel: batch.periodLabel, totalKobo: batch.totalKobo.toString(), dueDate: batch.dueDate.toISOString().slice(0, 10) },
      });
      return this.prisma.taxRemittanceBatch.update({ where: { id: batch.id }, data: { status: 'INSTRUCTION_ISSUED', letterInstanceId: letter.id } });
    } catch {
      // Honest park: no ACTIVE TAX_REMITTANCE_INSTRUCTION template exists
      // yet. The batch stays APPROVED -- Finance retries via
      // retryRemittanceLetter once CEO/Finance approve the real template.
      return approved;
    }
  }

  async retryRemittanceLetter(batchId: string, actorUserId: string) {
    const batch = await this.prisma.taxRemittanceBatch.findUniqueOrThrow({ where: { id: batchId } });
    if (batch.status !== 'APPROVED') throw new TaxError(`Remittance batch ${batchId} is ${batch.status}, not APPROVED.`);
    if (batch.letterInstanceId) throw new TaxError(`Remittance batch ${batchId} already has an instruction letter.`);
    const letter = await this.letter.generateLetter({
      letterType: 'TAX_REMITTANCE_INSTRUCTION', generatedByUserId: actorUserId,
      extraMergeFields: { taxType: batch.taxType, authority: batch.authority, periodLabel: batch.periodLabel, totalKobo: batch.totalKobo.toString(), dueDate: batch.dueDate.toISOString().slice(0, 10) },
    });
    return this.prisma.taxRemittanceBatch.update({ where: { id: batchId }, data: { status: 'INSTRUCTION_ISSUED', letterInstanceId: letter.id } });
  }

  async markRemitted(batchId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'TAX_REMITTANCE_MANAGEMENT', 'INITIATE', 'mark a tax remittance as paid');
    const batch = await this.prisma.taxRemittanceBatch.findUniqueOrThrow({ where: { id: batchId } });
    if (batch.status !== 'INSTRUCTION_ISSUED') throw new TaxError(`Remittance batch ${batchId} is ${batch.status}, not INSTRUCTION_ISSUED -- the bank instruction letter must be issued first.`);
    const updated = await this.prisma.taxRemittanceBatch.update({ where: { id: batchId }, data: { status: 'REMITTED', remittedAt: new Date(), remittedByUserId: actorUserId } });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'tax_remittance_batch', entityId: batchId, after: { status: 'REMITTED' } });
    return updated;
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'tax_activity', entityId: activity, after: { functionCode, level } });
      throw new TaxError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}
