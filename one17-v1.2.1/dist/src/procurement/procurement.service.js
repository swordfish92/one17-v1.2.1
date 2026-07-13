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
exports.ProcurementService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const event_journal_service_1 = require("../event-journal/event-journal.service");
const ledger_service_1 = require("../ledger/ledger.service");
const procurement_types_1 = require("./procurement.types");
const SYSTEM_SCHEDULER_EMAIL = 'system-scheduler@one17.test';
const CAPEX_ASSET_ACCOUNT_CODE = '1170';
const OPEX_EXPENSE_ACCOUNT_CODE = '5080';
const ACCOUNTS_PAYABLE_ACCOUNT_CODE = '2085';
const CASH_ACCOUNT_CODE = '1000';
const DEPRECIATION_EXPENSE_ACCOUNT_CODE = '6015';
const ACCUMULATED_DEPRECIATION_ACCOUNT_CODE = '1175';
let ProcurementService = class ProcurementService {
    prisma;
    audit;
    delegation;
    workflow;
    eventJournal;
    ledger;
    constructor(prisma, audit, delegation, workflow, eventJournal, ledger) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
        this.workflow = workflow;
        this.eventJournal = eventJournal;
        this.ledger = ledger;
    }
    async createVendor(input) {
        await this.assertCapability(input.createdByUserId, 'PROCUREMENT_OPERATIONS', 'INITIATE', 'create a vendor');
        const vendor = await this.prisma.vendor.create({
            data: {
                vendorCode: input.vendorCode,
                legalName: input.legalName,
                rcNumber: input.rcNumber,
                tin: input.tin,
                bankName: input.bankName,
                bankAccountNumber: input.bankAccountNumber,
                bankAccountName: input.bankAccountName,
                createdByUserId: input.createdByUserId,
            },
        });
        await this.audit.record({ actorUserId: input.createdByUserId, action: 'CREATE', entityType: 'vendor', entityId: vendor.id, after: { vendorCode: vendor.vendorCode, legalName: vendor.legalName } });
        return vendor;
    }
    async createPurchaseOrder(input) {
        await this.assertCapability(input.createdByUserId, 'PROCUREMENT_OPERATIONS', 'INITIATE', 'create a purchase order');
        const encumbrance = await this.prisma.encumbrance.findUniqueOrThrow({ where: { id: input.encumbranceId } });
        if (encumbrance.status !== 'OPEN') {
            throw new procurement_types_1.ProcurementError(`Encumbrance ${input.encumbranceId} is ${encumbrance.status}, not OPEN — cannot issue a PO against it.`);
        }
        const requisitionWorkflow = await this.prisma.workflowInstance.findFirst({
            where: { workflowTypeCode: 'EXPENDITURE_REQUISITION', entityType: 'encumbrance', entityId: input.encumbranceId },
        });
        if (!requisitionWorkflow || requisitionWorkflow.status !== 'APPROVED') {
            throw new procurement_types_1.ProcurementError(`Encumbrance ${input.encumbranceId}'s EXPENDITURE_REQUISITION workflow is ${requisitionWorkflow?.status ?? 'missing'}, not APPROVED — system budget check -> SAU review -> CEO approval must complete before procurement executes (Budget Spec §3).`);
        }
        const totalAmountKobo = input.lines.reduce((s, l) => s + l.unitPriceKobo * BigInt(Math.round(l.quantity)), 0n);
        if (totalAmountKobo > encumbrance.amountKobo) {
            throw new procurement_types_1.ProcurementError(`PO total (${totalAmountKobo} kobo) exceeds the encumbered amount (${encumbrance.amountKobo} kobo) for encumbrance ${input.encumbranceId}.`);
        }
        const po = await this.prisma.purchaseOrder.create({
            data: {
                poNumber: input.poNumber,
                vendorId: input.vendorId,
                encumbranceId: input.encumbranceId,
                ledgerEntityCode: input.ledgerEntityCode,
                description: input.description,
                totalAmountKobo,
                createdByUserId: input.createdByUserId,
                lines: {
                    create: input.lines.map((l) => ({
                        description: l.description,
                        quantity: l.quantity,
                        unitPriceKobo: l.unitPriceKobo,
                        lineAmountKobo: l.unitPriceKobo * BigInt(Math.round(l.quantity)),
                    })),
                },
            },
            include: { lines: true },
        });
        await this.audit.record({ actorUserId: input.createdByUserId, action: 'CREATE', entityType: 'purchase_order', entityId: po.id, after: { poNumber: po.poNumber, totalAmountKobo: totalAmountKobo.toString() } });
        return po;
    }
    async issuePurchaseOrder(poId, actorUserId) {
        await this.assertCapability(actorUserId, 'PROCUREMENT_OPERATIONS', 'INITIATE', 'issue a purchase order');
        const po = await this.prisma.purchaseOrder.findUniqueOrThrow({ where: { id: poId } });
        if (po.status !== 'DRAFT') {
            throw new procurement_types_1.ProcurementError(`PO ${poId} is ${po.status}, not DRAFT — cannot issue.`);
        }
        const updated = await this.prisma.purchaseOrder.update({ where: { id: poId }, data: { status: 'ISSUED', issuedAt: new Date() } });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'purchase_order', entityId: poId, after: { status: 'ISSUED' } });
        return updated;
    }
    async recordGoodsReceipt(poId, receivedAmountKobo, notes, actorUserId) {
        await this.assertCapability(actorUserId, 'PROCUREMENT_OPERATIONS', 'INITIATE', 'record a goods/service receipt');
        const po = await this.prisma.purchaseOrder.findUniqueOrThrow({ where: { id: poId } });
        if (po.status !== 'ISSUED' && po.status !== 'RECEIVED') {
            throw new procurement_types_1.ProcurementError(`PO ${poId} is ${po.status} — goods receipt can only be recorded against an ISSUED (or already partially RECEIVED) PO.`);
        }
        const receipt = await this.prisma.goodsReceipt.create({
            data: { purchaseOrderId: poId, receivedAmountKobo, receivedByUserId: actorUserId, notes },
        });
        if (po.status === 'ISSUED') {
            await this.prisma.purchaseOrder.update({ where: { id: poId }, data: { status: 'RECEIVED' } });
        }
        await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'goods_receipt', entityId: receipt.id, after: { poId, receivedAmountKobo: receivedAmountKobo.toString() } });
        return receipt;
    }
    async recordVendorInvoice(poId, vendorId, invoiceNumber, invoiceAmountKobo, invoiceDate, actorUserId) {
        await this.assertCapability(actorUserId, 'PROCUREMENT_OPERATIONS', 'INITIATE', 'record a vendor invoice');
        const invoice = await this.prisma.vendorInvoice.create({
            data: { purchaseOrderId: poId, vendorId, invoiceNumber, invoiceAmountKobo, invoiceDate, createdByUserId: actorUserId },
        });
        await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'vendor_invoice', entityId: invoice.id, after: { poId, invoiceNumber, invoiceAmountKobo: invoiceAmountKobo.toString() } });
        return invoice;
    }
    async matchInvoice(input) {
        await this.assertCapability(input.actorUserId, 'PROCUREMENT_OPERATIONS', 'INITIATE', 'run the 3-way match on a vendor invoice');
        const invoice = await this.prisma.vendorInvoice.findUniqueOrThrow({
            where: { id: input.invoiceId },
            include: { purchaseOrder: { include: { goodsReceipts: true, encumbrance: { include: { budgetLine: true } } } } },
        });
        if (invoice.status === 'MATCHED' || invoice.status === 'PAID') {
            throw new procurement_types_1.ProcurementError(`Vendor invoice ${input.invoiceId} is already ${invoice.status} — cannot re-match.`);
        }
        const toleranceConfig = await this.prisma.procurementMatchToleranceConfig.findFirstOrThrow({ where: { status: 'ACTIVE' }, orderBy: { version: 'desc' } });
        const tolerancePct = Number(toleranceConfig.tolerancePct);
        const po = invoice.purchaseOrder;
        const receivedTotalKobo = po.goodsReceipts.reduce((s, r) => s + r.receivedAmountKobo, 0n);
        const poVariancePct = variancePct(po.totalAmountKobo, invoice.invoiceAmountKobo);
        const receiptVariancePct = variancePct(receivedTotalKobo, invoice.invoiceAmountKobo);
        if (poVariancePct > tolerancePct || receiptVariancePct > tolerancePct) {
            const note = `PO variance ${poVariancePct.toFixed(2)}% (PO ${po.totalAmountKobo} vs invoice ${invoice.invoiceAmountKobo}), receipt variance ${receiptVariancePct.toFixed(2)}% (received ${receivedTotalKobo} vs invoice ${invoice.invoiceAmountKobo}) — exceeds ${tolerancePct}% tolerance.`;
            const disputed = await this.prisma.vendorInvoice.update({ where: { id: input.invoiceId }, data: { status: 'DISPUTED', matchVarianceNote: note } });
            await this.audit.record({ actorUserId: input.actorUserId, action: 'UPDATE', entityType: 'vendor_invoice', entityId: input.invoiceId, after: { status: 'DISPUTED', note } });
            return { invoice: disputed, matched: false, note };
        }
        const isCapex = po.encumbrance.budgetLine.class === 'CAPEX';
        if (isCapex && !input.assetUsefulLifeMonths) {
            throw new procurement_types_1.ProcurementError(`PO ${po.poNumber} is a CAPEX line — assetUsefulLifeMonths is required to match this invoice and create the asset register entry (Budget Spec §4).`);
        }
        const { journal, workflowInstance } = await this.eventJournal.generateAndRequestPosting({
            eventType: 'PROCUREMENT_INVOICE_MATCHED',
            ledgerEntityCode: po.ledgerEntityCode,
            entryDate: invoice.invoiceDate,
            amountKobo: invoice.invoiceAmountKobo,
            referenceTokens: { po_number: po.poNumber, date: invoice.invoiceDate.toISOString().slice(0, 10) },
            drAccountCodeOverride: isCapex ? CAPEX_ASSET_ACCOUNT_CODE : OPEX_EXPENSE_ACCOUNT_CODE,
            crAccountCodeOverride: ACCOUNTS_PAYABLE_ACCOUNT_CODE,
            createdByUserId: input.actorUserId,
        });
        const [matched] = await this.prisma.$transaction([
            this.prisma.vendorInvoice.update({ where: { id: input.invoiceId }, data: { status: 'MATCHED', matchedAt: new Date(), journalEntryId: journal.id } }),
            this.prisma.purchaseOrder.update({ where: { id: po.id }, data: { status: 'MATCHED' } }),
            this.prisma.encumbrance.update({ where: { id: po.encumbranceId }, data: { status: 'CONVERTED' } }),
        ]);
        await this.audit.record({ actorUserId: input.actorUserId, action: 'UPDATE', entityType: 'vendor_invoice', entityId: input.invoiceId, after: { status: 'MATCHED', journalEntryId: journal.id, workflowInstanceId: workflowInstance.id } });
        let assetRegisterEntry = null;
        if (isCapex) {
            assetRegisterEntry = await this.prisma.assetRegisterEntry.create({
                data: {
                    assetCode: `AST-${po.poNumber}`,
                    description: po.description,
                    purchaseOrderId: po.id,
                    ledgerEntityCode: po.ledgerEntityCode,
                    costKobo: invoice.invoiceAmountKobo,
                    acquisitionDate: invoice.invoiceDate,
                    usefulLifeMonths: input.assetUsefulLifeMonths,
                    createdByUserId: input.actorUserId,
                },
            });
            await this.audit.record({ actorUserId: input.actorUserId, action: 'CREATE', entityType: 'asset_register_entry', entityId: assetRegisterEntry.id, after: { assetCode: assetRegisterEntry.assetCode, costKobo: invoice.invoiceAmountKobo.toString() } });
        }
        return { invoice: matched, matched: true, journalEntryId: journal.id, assetRegisterEntry };
    }
    async createPaymentBatch(batchNumber, ledgerEntityCode, vendorInvoiceIds, actorUserId) {
        await this.assertCapability(actorUserId, 'PROCUREMENT_OPERATIONS', 'INITIATE', 'create a payment batch');
        const invoices = await this.prisma.vendorInvoice.findMany({ where: { id: { in: vendorInvoiceIds } } });
        if (invoices.length !== vendorInvoiceIds.length) {
            throw new procurement_types_1.ProcurementError('One or more vendor invoice IDs were not found.');
        }
        const nonMatched = invoices.filter((i) => i.status !== 'MATCHED');
        if (nonMatched.length > 0) {
            throw new procurement_types_1.ProcurementError(`Invoice(s) ${nonMatched.map((i) => i.invoiceNumber).join(', ')} are not MATCHED — only a MATCHED invoice (3-way match passed) may join a payment batch.`);
        }
        const totalAmountKobo = invoices.reduce((s, i) => s + i.invoiceAmountKobo, 0n);
        const batch = await this.prisma.paymentBatch.create({
            data: {
                batchNumber,
                ledgerEntityCode,
                totalAmountKobo,
                createdByUserId: actorUserId,
                lines: { create: invoices.map((i) => ({ vendorInvoiceId: i.id, amountKobo: i.invoiceAmountKobo })) },
            },
        });
        const workflowInstance = await this.workflow.initiate({
            workflowTypeCode: 'PROCUREMENT_PAYMENT_BATCH',
            entityType: 'payment_batch',
            entityId: batch.id,
            scenario: 'STANDARD',
            amountKobo: totalAmountKobo,
            initiatedByUserId: actorUserId,
        });
        const updated = await this.prisma.paymentBatch.update({ where: { id: batch.id }, data: { status: 'PENDING_APPROVAL', workflowInstanceId: workflowInstance.id } });
        await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'payment_batch', entityId: batch.id, after: { batchNumber, totalAmountKobo: totalAmountKobo.toString(), workflowInstanceId: workflowInstance.id } });
        return { batch: updated, workflowInstance };
    }
    async approvePaymentBatch(workflowInstanceId, approverUserId) {
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        if (updated.status !== 'APPROVED')
            return null;
        const batch = await this.prisma.paymentBatch.findFirstOrThrow({ where: { workflowInstanceId } });
        const { journal } = await this.eventJournal.generateAndRequestPosting({
            eventType: 'PROCUREMENT_PAYMENT_MADE',
            ledgerEntityCode: batch.ledgerEntityCode,
            entryDate: new Date(),
            amountKobo: batch.totalAmountKobo,
            referenceTokens: { batch_number: batch.batchNumber },
            drAccountCodeOverride: ACCOUNTS_PAYABLE_ACCOUNT_CODE,
            crAccountCodeOverride: CASH_ACCOUNT_CODE,
            createdByUserId: approverUserId,
        });
        const [paidBatch] = await this.prisma.$transaction([
            this.prisma.paymentBatch.update({ where: { id: batch.id }, data: { status: 'PAID', paidAt: new Date(), journalEntryId: journal.id } }),
            this.prisma.vendorInvoice.updateMany({ where: { paymentBatchLines: { some: { paymentBatchId: batch.id } } }, data: { status: 'PAID', paidJournalEntryId: journal.id } }),
        ]);
        await this.audit.record({ actorUserId: approverUserId, action: 'APPROVE', entityType: 'payment_batch', entityId: batch.id, after: { status: 'PAID', journalEntryId: journal.id } });
        return paidBatch;
    }
    async listVendors() {
        return this.prisma.vendor.findMany({ orderBy: { vendorCode: 'asc' } });
    }
    async listPurchaseOrders() {
        return this.prisma.purchaseOrder.findMany({ include: { vendor: true, lines: true, vendorInvoices: true }, orderBy: { createdAt: 'desc' } });
    }
    async listAssetRegister() {
        return this.prisma.assetRegisterEntry.findMany({ orderBy: { acquisitionDate: 'desc' } });
    }
    async runMonthlyDepreciationSweep(scheduledFor) {
        const periodMonth = scheduledFor.getUTCMonth() + 1;
        const periodYear = scheduledFor.getUTCFullYear();
        const assets = await this.prisma.assetRegisterEntry.findMany({ where: { status: 'ACTIVE' } });
        if (assets.length === 0) {
            return { assetsProcessed: 0, note: 'No ACTIVE asset_register_entry rows — no CAPEX invoice has been matched yet.' };
        }
        const systemUserId = await this.systemSchedulerUserId();
        const results = [];
        for (const asset of assets) {
            try {
                const existing = await this.prisma.assetDepreciationRun.findUnique({ where: { assetRegisterEntryId_periodMonth_periodYear: { assetRegisterEntryId: asset.id, periodMonth, periodYear } } });
                if (existing) {
                    results.push({ assetCode: asset.assetCode, ok: true, skipped: true });
                    continue;
                }
                const monthlyDepreciationKobo = asset.costKobo / BigInt(asset.usefulLifeMonths);
                const newAccumulated = asset.accumulatedDepreciationKobo + monthlyDepreciationKobo;
                const nowFullyDepreciated = newAccumulated >= asset.costKobo;
                const { journal } = await this.eventJournal.generateAndRequestPosting({
                    eventType: 'ASSET_DEPRECIATION_MONTHLY',
                    ledgerEntityCode: asset.ledgerEntityCode,
                    entryDate: scheduledFor,
                    amountKobo: monthlyDepreciationKobo,
                    referenceTokens: { asset_code: asset.assetCode, period: `${periodYear}-${String(periodMonth).padStart(2, '0')}` },
                    drAccountCodeOverride: DEPRECIATION_EXPENSE_ACCOUNT_CODE,
                    crAccountCodeOverride: ACCUMULATED_DEPRECIATION_ACCOUNT_CODE,
                    createdByUserId: systemUserId,
                });
                await this.prisma.$transaction([
                    this.prisma.assetDepreciationRun.create({ data: { assetRegisterEntryId: asset.id, periodMonth, periodYear, depreciationAmountKobo: monthlyDepreciationKobo, journalEntryId: journal.id } }),
                    this.prisma.assetRegisterEntry.update({ where: { id: asset.id }, data: { accumulatedDepreciationKobo: newAccumulated, status: nowFullyDepreciated ? 'FULLY_DEPRECIATED' : 'ACTIVE' } }),
                ]);
                results.push({ assetCode: asset.assetCode, ok: true });
            }
            catch (err) {
                results.push({ assetCode: asset.assetCode, ok: false, error: err.message });
            }
        }
        const failed = results.filter((r) => !r.ok);
        return { assetsProcessed: results.length, succeeded: results.length - failed.length, failed: failed.length, results };
    }
    async disposeAsset(input) {
        await this.assertCapability(input.disposedByUserId, 'ASSET_DISPOSAL', 'INITIATE', 'dispose a fixed asset');
        const asset = await this.prisma.assetRegisterEntry.findUniqueOrThrow({ where: { id: input.assetRegisterEntryId } });
        if (asset.status === 'DISPOSED') {
            throw new procurement_types_1.ProcurementError(`Asset ${asset.assetCode} is already DISPOSED.`);
        }
        const netBookValueKobo = asset.costKobo - asset.accumulatedDepreciationKobo;
        const gainLossKobo = input.proceedsKobo - netBookValueKobo;
        const lines = [];
        if (input.proceedsKobo > 0n)
            lines.push({ accountCode: CASH_ACCOUNT_CODE, debitKobo: input.proceedsKobo, description: `Disposal proceeds: ${asset.assetCode}` });
        if (asset.accumulatedDepreciationKobo > 0n)
            lines.push({ accountCode: ACCUMULATED_DEPRECIATION_ACCOUNT_CODE, debitKobo: asset.accumulatedDepreciationKobo, description: `Clear accumulated depreciation: ${asset.assetCode}` });
        lines.push({ accountCode: CAPEX_ASSET_ACCOUNT_CODE, creditKobo: asset.costKobo, description: `Derecognise asset at cost: ${asset.assetCode}` });
        if (gainLossKobo > 0n)
            lines.push({ accountCode: input.gainLossAccountCode, creditKobo: gainLossKobo, description: `Gain on disposal: ${asset.assetCode}` });
        else if (gainLossKobo < 0n)
            lines.push({ accountCode: input.gainLossAccountCode, debitKobo: -gainLossKobo, description: `Loss on disposal: ${asset.assetCode}` });
        const journal = await this.ledger.createJournalEntry({
            ledgerEntityCode: asset.ledgerEntityCode,
            journalReference: `JE-DISP-${asset.assetCode}-${input.disposalDate.toISOString().slice(0, 10)}`,
            entryDate: input.disposalDate,
            description: `Asset disposal: ${asset.assetCode} (${asset.description})`,
            lines,
            createdByUserId: input.disposedByUserId,
        });
        await this.ledger.requestJournalPosting({ journalEntryId: journal.id, initiatedByUserId: input.disposedByUserId });
        const updated = await this.prisma.assetRegisterEntry.update({
            where: { id: asset.id },
            data: { status: 'DISPOSED', disposedAt: input.disposalDate },
        });
        await this.audit.record({
            actorUserId: input.disposedByUserId,
            action: 'UPDATE',
            entityType: 'asset_register_entry',
            entityId: asset.id,
            after: { status: 'DISPOSED', disposedAt: input.disposalDate, proceedsKobo: input.proceedsKobo.toString(), gainLossKobo: gainLossKobo.toString(), journalEntryId: journal.id },
        });
        return { asset: updated, journal, gainLossKobo };
    }
    async systemSchedulerUserId() {
        let user = await this.prisma.appUser.findUnique({ where: { email: SYSTEM_SCHEDULER_EMAIL } });
        if (!user) {
            user = await this.prisma.appUser.create({ data: { email: SYSTEM_SCHEDULER_EMAIL, displayName: 'System Scheduler' } });
        }
        const hasRole = await this.prisma.userRole.findFirst({ where: { userId: user.id, roleCode: 'SYSTEM_SCHEDULER' } });
        if (!hasRole) {
            await this.prisma.userRole.create({ data: { userId: user.id, roleCode: 'SYSTEM_SCHEDULER' } });
        }
        return user.id;
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'procurement_activity', entityId: activity, after: { functionCode, level } });
            throw new procurement_types_1.ProcurementError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.ProcurementService = ProcurementService;
exports.ProcurementService = ProcurementService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService,
        event_journal_service_1.EventJournalService,
        ledger_service_1.LedgerService])
], ProcurementService);
function variancePct(a, b) {
    if (a === 0n && b === 0n)
        return 0;
    const diff = a > b ? a - b : b - a;
    const base = a > 0n ? a : b;
    if (base === 0n)
        return Infinity;
    return (Number(diff) / Number(base)) * 100;
}
//# sourceMappingURL=procurement.service.js.map