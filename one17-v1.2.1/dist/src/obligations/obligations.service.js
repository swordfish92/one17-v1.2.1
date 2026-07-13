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
exports.ObligationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const letter_service_1 = require("../letter/letter.service");
const tax_service_1 = require("../tax/tax.service");
const obligations_types_1 = require("./obligations.types");
const MONTHS_PER_PERIOD = {
    MONTHLY: 1,
    QUARTERLY: 3,
    SEMI_ANNUAL: 6,
    ANNUAL: 12,
    AT_MATURITY: null,
};
let ObligationsService = class ObligationsService {
    prisma;
    audit;
    delegation;
    workflow;
    letter;
    tax;
    constructor(prisma, audit, delegation, workflow, letter, tax) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
        this.workflow = workflow;
        this.letter = letter;
        this.tax = tax;
    }
    async getSchedule(actorUserId, periodStart, periodEnd) {
        await this.assertCapability(actorUserId, 'FUND_OBLIGATIONS_SCHEDULE', 'VIEW', 'view the Fund Obligations Schedule');
        const items = [];
        const productAccounts = await this.prisma.productAccount.findMany({
            where: { status: 'ACTIVE', profitPaymentInterval: { not: null }, targetReturnPctBenchmark: { not: null } },
            include: { investor: { select: { fullLegalName: true } } },
        });
        for (const acc of productAccounts) {
            for (const date of this.projectPayoutDates(acc.startDate, acc.maturityDate, acc.profitPaymentInterval, periodStart, periodEnd)) {
                items.push({
                    kind: 'PROJECTED_PROFIT_PAYOUT', investorId: acc.investorId, investorName: acc.investor.fullLegalName,
                    productAccountId: acc.id, ndMandateAccountId: null, projectedDate: date.toISOString().slice(0, 10),
                    projectedAmountKobo: this.projectedPayoutAmount(acc.principalOrCommittedKobo, acc.targetReturnPctBenchmark, acc.profitPaymentInterval).toString(),
                    interval: acc.profitPaymentInterval,
                });
            }
            if (acc.maturityDate && acc.maturityDate >= periodStart && acc.maturityDate <= periodEnd) {
                items.push({ kind: 'PRINCIPAL_MATURITY', investorId: acc.investorId, investorName: acc.investor.fullLegalName, productAccountId: acc.id, ndMandateAccountId: null, maturityDate: acc.maturityDate.toISOString().slice(0, 10), principalKobo: acc.principalOrCommittedKobo.toString() });
            }
        }
        const mandateAccounts = await this.prisma.ndMandateAccount.findMany({
            where: { status: 'ACTIVE', profitPaymentInterval: { not: null }, targetReturnPct: { not: null }, investorId: { not: null } },
            include: { investor: { select: { fullLegalName: true } } },
        });
        for (const acc of mandateAccounts) {
            if (!acc.investor || !acc.committedCapitalKobo)
                continue;
            for (const date of this.projectPayoutDates(acc.startDate, acc.maturityDate, acc.profitPaymentInterval, periodStart, periodEnd)) {
                items.push({
                    kind: 'PROJECTED_PROFIT_PAYOUT', investorId: acc.investorId, investorName: acc.investor.fullLegalName,
                    productAccountId: null, ndMandateAccountId: acc.id, projectedDate: date.toISOString().slice(0, 10),
                    projectedAmountKobo: this.projectedPayoutAmount(acc.committedCapitalKobo, acc.targetReturnPct, acc.profitPaymentInterval).toString(),
                    interval: acc.profitPaymentInterval,
                });
            }
            if (acc.maturityDate && acc.maturityDate >= periodStart && acc.maturityDate <= periodEnd) {
                items.push({ kind: 'PRINCIPAL_MATURITY', investorId: acc.investorId, investorName: acc.investor.fullLegalName, productAccountId: null, ndMandateAccountId: acc.id, maturityDate: acc.maturityDate.toISOString().slice(0, 10), principalKobo: acc.committedCapitalKobo.toString() });
            }
        }
        const obligations = await this.prisma.counterpartyRepaymentObligation.findMany({
            where: { status: 'PENDING', dueDate: { gte: periodStart, lte: periodEnd } },
            include: { counterparty: { select: { legalName: true } } },
        });
        for (const o of obligations) {
            items.push({ kind: 'COUNTERPARTY_INFLOW', counterpartyId: o.counterpartyId, counterpartyName: o.counterparty.legalName, dueDate: o.dueDate.toISOString().slice(0, 10), amountKobo: o.amountKobo.toString() });
        }
        return items;
    }
    async getPaidVsProjectedVariance(actorUserId, periodStart, periodEnd) {
        await this.assertCapability(actorUserId, 'FUND_OBLIGATIONS_SCHEDULE', 'VIEW', 'view the paid-vs-projected variance KRI');
        const schedule = await this.getSchedule(actorUserId, periodStart, periodEnd);
        const projectedKobo = schedule.filter((i) => i.kind === 'PROJECTED_PROFIT_PAYOUT').reduce((sum, i) => sum + BigInt(i.projectedAmountKobo), 0n);
        const paidBatches = await this.prisma.payoutCompilationBatch.findMany({ where: { status: 'PAID', createdAt: { gte: periodStart, lte: periodEnd } } });
        const paidKobo = paidBatches.reduce((sum, b) => sum + b.totalGrossKobo, 0n);
        return { projectedKobo: projectedKobo.toString(), paidKobo: paidKobo.toString(), varianceKobo: (paidKobo - projectedKobo).toString() };
    }
    projectedPayoutAmount(principalKobo, targetPct, interval) {
        const periods = MONTHS_PER_PERIOD[interval];
        if (periods === null)
            return BigInt(Math.round((Number(principalKobo) * Number(targetPct)) / 100));
        const annualAmount = (Number(principalKobo) * Number(targetPct)) / 100;
        return BigInt(Math.round((annualAmount * periods) / 12));
    }
    projectPayoutDates(startDate, maturityDate, interval, windowStart, windowEnd) {
        const periods = MONTHS_PER_PERIOD[interval];
        if (periods === null)
            return [];
        const dates = [];
        let cursor = new Date(startDate);
        let iterations = 0;
        while (cursor <= windowEnd && iterations < 400) {
            cursor = new Date(cursor.getFullYear(), cursor.getMonth() + periods, cursor.getDate());
            iterations++;
            if (maturityDate && cursor > maturityDate)
                break;
            if (cursor >= windowStart && cursor <= windowEnd)
                dates.push(cursor);
        }
        return dates;
    }
    async compilePayoutBatch(input) {
        await this.assertCapability(input.compiledByUserId, 'PAYOUT_COMPILATION', 'INITIATE', 'compile a payout batch');
        const schedule = await this.getSchedule(input.compiledByUserId, input.periodStart, input.periodEnd);
        const payoutItems = schedule.filter((i) => i.kind === 'PROJECTED_PROFIT_PAYOUT');
        if (payoutItems.length === 0) {
            throw new obligations_types_1.ObligationsError(`No projected payouts fall in period ${input.periodLabel} -- nothing to compile.`);
        }
        const batchNumber = `PAYOUT-${input.periodLabel}-${Date.now()}`;
        let totalGrossKobo = 0n;
        let totalWhtKobo = 0n;
        const lineData = [];
        for (const item of payoutItems) {
            const grossKobo = BigInt(item.projectedAmountKobo);
            const wht = await this.tax.computeWht({ investorId: item.investorId, incomeType: 'INVESTMENT_PROFIT', grossKobo, transactionDate: input.periodEnd });
            totalGrossKobo += grossKobo;
            totalWhtKobo += wht.whtKobo;
            lineData.push({
                investorId: item.investorId, productAccountId: item.productAccountId, ndMandateAccountId: item.ndMandateAccountId,
                grossKobo, whtKobo: wht.whtKobo, netKobo: wht.netKobo, whtExempt: wht.exempt, whtRateVersionId: wht.rateVersionId,
            });
        }
        const totalNetKobo = totalGrossKobo - totalWhtKobo;
        const batch = await this.prisma.payoutCompilationBatch.create({
            data: {
                batchNumber, periodLabel: input.periodLabel, status: 'DRAFT', totalGrossKobo, totalWhtKobo, totalNetKobo,
                compiledByUserId: input.compiledByUserId, lines: { create: lineData },
            },
            include: { lines: true },
        });
        await this.audit.record({ actorUserId: input.compiledByUserId, action: 'CREATE', entityType: 'payout_compilation_batch', entityId: batch.id, after: { periodLabel: input.periodLabel, totalGrossKobo: totalGrossKobo.toString(), lineCount: lineData.length } });
        return batch;
    }
    async listPayoutBatches() {
        return this.prisma.payoutCompilationBatch.findMany({ orderBy: { createdAt: 'desc' }, include: { lines: true } });
    }
    async getPayoutBatch(id) {
        return this.prisma.payoutCompilationBatch.findUniqueOrThrow({ where: { id }, include: { lines: { include: { investor: { select: { fullLegalName: true } } } } } });
    }
    async submitForApproval(batchId, actorUserId) {
        const batch = await this.prisma.payoutCompilationBatch.findUniqueOrThrow({ where: { id: batchId } });
        if (batch.status !== 'DRAFT')
            throw new obligations_types_1.ObligationsError(`Payout batch ${batchId} is ${batch.status}, not DRAFT.`);
        const instance = await this.workflow.initiate({
            workflowTypeCode: 'PAYOUT_BATCH_APPROVAL', entityType: 'payout_compilation_batch', entityId: batch.id,
            initiatedByUserId: actorUserId, scenario: 'STANDARD', amountKobo: batch.totalNetKobo,
        });
        return this.prisma.payoutCompilationBatch.update({ where: { id: batch.id }, data: { status: 'PENDING_APPROVAL', workflowInstanceId: instance.id } });
    }
    async approveBatch(workflowInstanceId, approverUserId) {
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        if (updated.status !== 'APPROVED')
            return null;
        const batch = await this.prisma.payoutCompilationBatch.findFirstOrThrow({ where: { workflowInstanceId }, include: { lines: true } });
        await this.audit.record({ actorUserId: approverUserId, action: 'APPROVE', entityType: 'payout_compilation_batch', entityId: batch.id, after: { status: 'APPROVED', totalNetKobo: batch.totalNetKobo.toString() } });
        const approved = await this.prisma.payoutCompilationBatch.update({ where: { id: batch.id }, data: { status: 'APPROVED' } });
        try {
            const beneficiarySchedule = batch.lines.map((l) => `${l.investorId}: gross ${l.grossKobo}, wht ${l.whtKobo}, net ${l.netKobo}`).join('\n');
            const letter = await this.letter.generateLetter({
                letterType: 'BANK_INSTRUCTION', generatedByUserId: approverUserId,
                extraMergeFields: { batchNumber: batch.batchNumber, periodLabel: batch.periodLabel, totalGrossKobo: batch.totalGrossKobo.toString(), totalWhtKobo: batch.totalWhtKobo.toString(), totalNetKobo: batch.totalNetKobo.toString(), beneficiarySchedule },
            });
            await this.prisma.payoutCompilationBatch.update({ where: { id: batch.id }, data: { bankInstructionLetterInstanceId: letter.id } });
        }
        catch {
        }
        return approved;
    }
    async retryBankInstructionLetter(batchId, actorUserId) {
        const batch = await this.prisma.payoutCompilationBatch.findUniqueOrThrow({ where: { id: batchId }, include: { lines: true } });
        if (batch.status !== 'APPROVED')
            throw new obligations_types_1.ObligationsError(`Payout batch ${batchId} is ${batch.status}, not APPROVED.`);
        if (batch.bankInstructionLetterInstanceId)
            throw new obligations_types_1.ObligationsError(`Payout batch ${batchId} already has a bank instruction letter.`);
        const beneficiarySchedule = batch.lines.map((l) => `${l.investorId}: gross ${l.grossKobo}, wht ${l.whtKobo}, net ${l.netKobo}`).join('\n');
        const letter = await this.letter.generateLetter({
            letterType: 'BANK_INSTRUCTION', generatedByUserId: actorUserId,
            extraMergeFields: { batchNumber: batch.batchNumber, periodLabel: batch.periodLabel, totalGrossKobo: batch.totalGrossKobo.toString(), totalWhtKobo: batch.totalWhtKobo.toString(), totalNetKobo: batch.totalNetKobo.toString(), beneficiarySchedule },
        });
        return this.prisma.payoutCompilationBatch.update({ where: { id: batchId }, data: { bankInstructionLetterInstanceId: letter.id } });
    }
    async markLetterIssued(batchId) {
        return this.prisma.payoutCompilationBatch.update({ where: { id: batchId }, data: { status: 'INSTRUCTION_ISSUED' } });
    }
    async markPaid(batchId, actorUserId) {
        await this.assertCapability(actorUserId, 'PAYOUT_COMPILATION', 'INITIATE', 'mark a payout batch as paid');
        const batch = await this.prisma.payoutCompilationBatch.findUniqueOrThrow({ where: { id: batchId } });
        if (batch.status !== 'INSTRUCTION_ISSUED')
            throw new obligations_types_1.ObligationsError(`Payout batch ${batchId} is ${batch.status}, not INSTRUCTION_ISSUED -- the bank instruction letter must be issued first.`);
        const updated = await this.prisma.payoutCompilationBatch.update({ where: { id: batchId }, data: { status: 'PAID', paidAt: new Date(), paidByUserId: actorUserId } });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'payout_compilation_batch', entityId: batchId, after: { status: 'PAID' } });
        return updated;
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'obligations_activity', entityId: activity, after: { functionCode, level } });
            throw new obligations_types_1.ObligationsError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.ObligationsService = ObligationsService;
exports.ObligationsService = ObligationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService,
        letter_service_1.LetterService,
        tax_service_1.TaxService])
], ObligationsService);
//# sourceMappingURL=obligations.service.js.map