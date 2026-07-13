"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const letter_service_1 = require("../letter/letter.service");
const tax_types_1 = require("./tax.types");
let TaxService = class TaxService {
    prisma;
    audit;
    delegation;
    workflow;
    letter;
    constructor(prisma, audit, delegation, workflow, letter) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
        this.workflow = workflow;
        this.letter = letter;
    }
    async listRateVersions(taxType) {
        return this.prisma.taxRateVersion.findMany({ where: taxType ? { taxType } : undefined, orderBy: [{ taxType: 'asc' }, { version: 'desc' }] });
    }
    async proposeRateVersion(input) {
        await this.assertCapability(input.proposedByUserId, 'TAX_CONFIGURATION_MANAGEMENT', 'INITIATE', 'propose a tax rate version');
        this.validateRateShape(input.taxType, input.rates);
        const latest = await this.prisma.taxRateVersion.findFirst({ where: { taxType: input.taxType }, orderBy: { version: 'desc' } });
        const version = (latest?.version ?? 0) + 1;
        const created = await this.prisma.taxRateVersion.create({
            data: { taxType: input.taxType, version, rates: input.rates, effectiveFrom: input.effectiveFrom, status: 'DRAFT', proposedByUserId: input.proposedByUserId },
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
        }
        catch (err) {
            await this.audit.record({ actorUserId: input.proposedByUserId, action: 'INITIATE_FAILED_COMPENSATED', entityType: 'tax_rate_version', entityId: created.id, after: { workflowTypeCode: 'TAX_RATE_VERSION_APPROVAL', reason: err.message } });
            await this.prisma.taxRateVersion.delete({ where: { id: created.id } });
            throw err;
        }
        return this.prisma.taxRateVersion.update({ where: { id: created.id }, data: { workflowInstanceId: instance.id } });
    }
    async approveRateVersion(input) {
        const updated = await this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
        if (updated.status !== 'APPROVED')
            return null;
        const version = await this.prisma.taxRateVersion.findFirstOrThrow({ where: { workflowInstanceId: input.workflowInstanceId } });
        await this.prisma.$transaction([
            this.prisma.taxRateVersion.updateMany({ where: { taxType: version.taxType, status: 'ACTIVE' }, data: { status: 'SUPERSEDED' } }),
            this.prisma.taxRateVersion.update({ where: { id: version.id }, data: { status: 'ACTIVE', approvedByUserId: input.approverUserId } }),
        ]);
        await this.audit.record({ actorUserId: input.approverUserId, action: 'APPROVE', entityType: 'tax_rate_version', entityId: version.id, after: { taxType: version.taxType, version: version.version, effectiveFrom: version.effectiveFrom.toISOString() } });
        return this.prisma.taxRateVersion.findUniqueOrThrow({ where: { id: version.id } });
    }
    validateRateShape(taxType, rates) {
        if (!Array.isArray(rates) || rates.length === 0) {
            throw new tax_types_1.TaxError(`${taxType} rates must be a non-empty array -- ships empty at the table level (no versions), never an empty-array version.`);
        }
    }
    async getEffectiveVersion(taxType, transactionDate) {
        return this.prisma.taxRateVersion.findFirst({
            where: { taxType, status: { in: ['ACTIVE', 'SUPERSEDED'] }, effectiveFrom: { lte: transactionDate } },
            orderBy: { effectiveFrom: 'desc' },
        });
    }
    async grantExemption(input) {
        await this.assertCapability(input.grantedByUserId, 'TAX_CONFIGURATION_MANAGEMENT', 'INITIATE', 'grant a tax exemption');
        const exemption = await this.prisma.investorTaxExemption.upsert({
            where: { investorId_taxType: { investorId: input.investorId, taxType: input.taxType } },
            create: { investorId: input.investorId, taxType: input.taxType, reason: input.reason, grantedByUserId: input.grantedByUserId },
            update: { reason: input.reason, grantedByUserId: input.grantedByUserId },
        });
        await this.audit.record({ actorUserId: input.grantedByUserId, action: 'CREATE', entityType: 'investor_tax_exemption', entityId: exemption.id, after: { investorId: input.investorId, taxType: input.taxType } });
        return exemption;
    }
    async revokeExemption(investorId, taxType, actorUserId) {
        await this.assertCapability(actorUserId, 'TAX_CONFIGURATION_MANAGEMENT', 'INITIATE', 'revoke a tax exemption');
        const existing = await this.prisma.investorTaxExemption.findUnique({ where: { investorId_taxType: { investorId, taxType } } });
        if (!existing)
            return null;
        await this.prisma.investorTaxExemption.delete({ where: { investorId_taxType: { investorId, taxType } } });
        await this.audit.record({ actorUserId, action: 'DELETE', entityType: 'investor_tax_exemption', entityId: existing.id, after: { investorId, taxType } });
        return existing;
    }
    async listExemptions(taxType) {
        return this.prisma.investorTaxExemption.findMany({ where: taxType ? { taxType } : undefined, include: { investor: { select: { fullLegalName: true } } } });
    }
    async computeWht(input) {
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
        const rates = version.rates;
        const rateRow = rates.find((r) => r.category === category && r.incomeType === input.incomeType);
        if (!rateRow) {
            return { whtKobo: 0n, netKobo: input.grossKobo, exempt: false, configured: false, rateVersionId: version.id };
        }
        const whtKobo = BigInt(Math.round((Number(input.grossKobo) * rateRow.ratePct) / 100));
        return { whtKobo, netKobo: input.grossKobo - whtKobo, exempt: false, configured: true, rateVersionId: version.id };
    }
    async computeVat(input) {
        const version = await this.getEffectiveVersion('VAT', input.transactionDate);
        if (!version) {
            throw new tax_types_1.TaxError(`No ACTIVE VAT rate version is configured effective on ${input.transactionDate.toISOString().slice(0, 10)} -- Finance must propose and MD approve one first (invariant 65c: never invent a rate).`);
        }
        const rates = version.rates;
        const rateRow = rates.find((r) => r.serviceOrFeeType === input.serviceOrFeeType);
        if (!rateRow) {
            throw new tax_types_1.TaxError(`No VAT rate is configured for service/fee type "${input.serviceOrFeeType}" in the ACTIVE version.`);
        }
        const vatKobo = BigInt(Math.round((Number(input.amountKobo) * rateRow.ratePct) / 100));
        return { vatKobo, configured: true, rateVersionId: version.id };
    }
    async createFeeInvoice(input) {
        await this.assertCapability(input.createdByUserId, 'FEE_INVOICE_MANAGEMENT', 'INITIATE', 'create a fee invoice');
        if (!input.counterpartyId && !input.investorId) {
            throw new tax_types_1.TaxError('A fee invoice requires exactly one recipient (counterpartyId or investorId).');
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
    async recognizeVendorInvoiceVat(input) {
        await this.assertCapability(input.actorUserId, 'FEE_INVOICE_MANAGEMENT', 'INITIATE', 'recognize input VAT on a vendor invoice');
        const invoice = await this.prisma.vendorInvoice.findUniqueOrThrow({ where: { id: input.vendorInvoiceId } });
        if (invoice.recognizedVatRateVersionId) {
            throw new tax_types_1.TaxError(`Vendor invoice ${invoice.id} already has input VAT recognized (${invoice.vatKobo} kobo) -- immutable once recorded.`);
        }
        const vat = await this.computeVat({ serviceOrFeeType: input.serviceOrFeeType, amountKobo: invoice.invoiceAmountKobo, transactionDate: invoice.invoiceDate });
        const updated = await this.prisma.vendorInvoice.update({ where: { id: invoice.id }, data: { vatKobo: vat.vatKobo, recognizedVatRateVersionId: vat.rateVersionId } });
        await this.audit.record({ actorUserId: input.actorUserId, action: 'UPDATE', entityType: 'vendor_invoice', entityId: invoice.id, after: { vatKobo: vat.vatKobo.toString(), inputVatRecognized: true } });
        return updated;
    }
    async assessStampDuty(input) {
        const version = await this.getEffectiveVersion('STAMP_DUTY', input.transactionDate);
        if (!version)
            return null;
        const rates = version.rates;
        const rateRow = rates.find((r) => r.instrumentType === input.instrumentType);
        if (!rateRow)
            return null;
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
    async listGlMappings() {
        return this.prisma.taxGlMapping.findMany();
    }
    async configureGlMapping(input) {
        await this.assertCapability(input.configuredByUserId, 'TAX_CONFIGURATION_MANAGEMENT', 'INITIATE', 'configure a tax GL account mapping');
        const mapping = await this.prisma.taxGlMapping.upsert({
            where: { taxType: input.taxType },
            create: { taxType: input.taxType, payableAccountCode: input.payableAccountCode, configuredByUserId: input.configuredByUserId, configuredAt: new Date() },
            update: { payableAccountCode: input.payableAccountCode, configuredByUserId: input.configuredByUserId, configuredAt: new Date() },
        });
        await this.audit.record({ actorUserId: input.configuredByUserId, action: 'UPDATE', entityType: 'tax_gl_mapping', entityId: mapping.id, after: { taxType: input.taxType, payableAccountCode: input.payableAccountCode } });
        return mapping;
    }
    async listRemittanceDueDateConfigs() {
        return this.prisma.taxRemittanceDueDateConfig.findMany();
    }
    async configureRemittanceDueDate(input, actorUserId) {
        await this.assertCapability(actorUserId, 'TAX_CONFIGURATION_MANAGEMENT', 'INITIATE', 'configure a tax remittance due-date rule');
        const config = await this.prisma.taxRemittanceDueDateConfig.upsert({
            where: { taxType_authority: { taxType: input.taxType, authority: input.authority } },
            create: { taxType: input.taxType, authority: input.authority, dayOfMonthDue: input.dayOfMonthDue },
            update: { dayOfMonthDue: input.dayOfMonthDue, isActive: true },
        });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'tax_remittance_due_date_config', entityId: config.id, after: { taxType: input.taxType, authority: input.authority, dayOfMonthDue: input.dayOfMonthDue } });
        return config;
    }
    async runRemittanceDueDateSweep(scheduledFor) {
        const configs = await this.prisma.taxRemittanceDueDateConfig.findMany({ where: { isActive: true } });
        let batchesCreated = 0;
        for (const config of configs) {
            const periodLabel = `${scheduledFor.getFullYear()}-${String(scheduledFor.getMonth() + 1).padStart(2, '0')}`;
            const existing = await this.prisma.taxRemittanceBatch.findFirst({ where: { taxType: config.taxType, authority: config.authority, periodLabel } });
            if (existing)
                continue;
            const dueDate = new Date(scheduledFor.getFullYear(), scheduledFor.getMonth(), config.dayOfMonthDue);
            const totalKobo = await this.computePeriodTaxTotal(config.taxType, scheduledFor);
            if (totalKobo === 0n)
                continue;
            await this.prisma.taxRemittanceBatch.create({ data: { taxType: config.taxType, authority: config.authority, periodLabel, totalKobo, dueDate, status: 'PENDING' } });
            batchesCreated++;
        }
        return { configsChecked: configs.length, batchesCreated };
    }
    async computePeriodTaxTotal(taxType, scheduledFor) {
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
    async listRemittanceBatches(taxType) {
        return this.prisma.taxRemittanceBatch.findMany({ where: taxType ? { taxType } : undefined, orderBy: { dueDate: 'asc' } });
    }
    async proposeRemittanceApproval(batchId, actorUserId) {
        await this.assertCapability(actorUserId, 'TAX_REMITTANCE_MANAGEMENT', 'INITIATE', 'propose a tax remittance batch for approval');
        const batch = await this.prisma.taxRemittanceBatch.findUniqueOrThrow({ where: { id: batchId } });
        if (batch.status !== 'PENDING')
            throw new tax_types_1.TaxError(`Remittance batch ${batchId} is ${batch.status}, not PENDING.`);
        const instance = await this.workflow.initiate({
            workflowTypeCode: 'TAX_REMITTANCE_BATCH_APPROVAL', entityType: 'tax_remittance_batch', entityId: batch.id,
            initiatedByUserId: actorUserId, scenario: 'STANDARD', amountKobo: batch.totalKobo,
        });
        return this.prisma.taxRemittanceBatch.update({ where: { id: batch.id }, data: { status: 'PENDING_APPROVAL', workflowInstanceId: instance.id } });
    }
    async approveRemittanceBatch(workflowInstanceId, approverUserId) {
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        if (updated.status !== 'APPROVED')
            return null;
        const batch = await this.prisma.taxRemittanceBatch.findFirstOrThrow({ where: { workflowInstanceId } });
        await this.audit.record({ actorUserId: approverUserId, action: 'APPROVE', entityType: 'tax_remittance_batch', entityId: batch.id, after: { status: 'APPROVED', totalKobo: batch.totalKobo.toString() } });
        const approved = await this.prisma.taxRemittanceBatch.update({ where: { id: batch.id }, data: { status: 'APPROVED' } });
        try {
            const letter = await this.letter.generateLetter({
                letterType: 'TAX_REMITTANCE_INSTRUCTION', generatedByUserId: approverUserId,
                extraMergeFields: { taxType: batch.taxType, authority: batch.authority, periodLabel: batch.periodLabel, totalKobo: batch.totalKobo.toString(), dueDate: batch.dueDate.toISOString().slice(0, 10) },
            });
            return this.prisma.taxRemittanceBatch.update({ where: { id: batch.id }, data: { status: 'INSTRUCTION_ISSUED', letterInstanceId: letter.id } });
        }
        catch {
            return approved;
        }
    }
    async retryRemittanceLetter(batchId, actorUserId) {
        const batch = await this.prisma.taxRemittanceBatch.findUniqueOrThrow({ where: { id: batchId } });
        if (batch.status !== 'APPROVED')
            throw new tax_types_1.TaxError(`Remittance batch ${batchId} is ${batch.status}, not APPROVED.`);
        if (batch.letterInstanceId)
            throw new tax_types_1.TaxError(`Remittance batch ${batchId} already has an instruction letter.`);
        const letter = await this.letter.generateLetter({
            letterType: 'TAX_REMITTANCE_INSTRUCTION', generatedByUserId: actorUserId,
            extraMergeFields: { taxType: batch.taxType, authority: batch.authority, periodLabel: batch.periodLabel, totalKobo: batch.totalKobo.toString(), dueDate: batch.dueDate.toISOString().slice(0, 10) },
        });
        return this.prisma.taxRemittanceBatch.update({ where: { id: batchId }, data: { status: 'INSTRUCTION_ISSUED', letterInstanceId: letter.id } });
    }
    async markRemitted(batchId, actorUserId) {
        await this.assertCapability(actorUserId, 'TAX_REMITTANCE_MANAGEMENT', 'INITIATE', 'mark a tax remittance as paid');
        const batch = await this.prisma.taxRemittanceBatch.findUniqueOrThrow({ where: { id: batchId } });
        if (batch.status !== 'INSTRUCTION_ISSUED')
            throw new tax_types_1.TaxError(`Remittance batch ${batchId} is ${batch.status}, not INSTRUCTION_ISSUED -- the bank instruction letter must be issued first.`);
        const updated = await this.prisma.taxRemittanceBatch.update({ where: { id: batchId }, data: { status: 'REMITTED', remittedAt: new Date(), remittedByUserId: actorUserId } });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'tax_remittance_batch', entityId: batchId, after: { status: 'REMITTED' } });
        return updated;
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'tax_activity', entityId: activity, after: { functionCode, level } });
            throw new tax_types_1.TaxError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.TaxService = TaxService;
exports.TaxService = TaxService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService,
        letter_service_1.LetterService])
], TaxService);
//# sourceMappingURL=tax.service.js.map