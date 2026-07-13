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
exports.ReportingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const ledger_service_1 = require("../ledger/ledger.service");
const reporting_types_1 = require("./reporting.types");
let ReportingService = class ReportingService {
    prisma;
    audit;
    delegation;
    workflow;
    ledger;
    constructor(prisma, audit, delegation, workflow, ledger) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
        this.workflow = workflow;
        this.ledger = ledger;
    }
    async proposeFrameworkMapVersion(input) {
        await this.assertCapability(input.createdByUserId, 'ACCOUNTING_FRAMEWORK_MAP', 'INITIATE', 'propose a new accounting framework map version');
        const latest = await this.prisma.accountingFrameworkMap.findFirst({
            orderBy: { version: 'desc' },
        });
        const version = (latest?.version ?? 0) + 1;
        const created = await this.prisma.accountingFrameworkMap.create({
            data: {
                version,
                description: input.description,
                effectiveFrom: input.effectiveFrom,
                effectiveTo: input.effectiveTo,
                createdByUserId: input.createdByUserId,
                status: 'DRAFT',
            },
        });
        let instance;
        try {
            instance = await this.workflow.initiate({
                workflowTypeCode: 'ACCOUNTING_FRAMEWORK_MAP_APPROVAL',
                entityType: 'accounting_framework_map',
                entityId: created.id,
                initiatedByUserId: input.createdByUserId,
                scenario: 'STANDARD',
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId: input.createdByUserId,
                action: 'INITIATE_FAILED_COMPENSATED',
                entityType: 'accounting_framework_map',
                entityId: created.id,
                after: { workflowTypeCode: 'ACCOUNTING_FRAMEWORK_MAP_APPROVAL', reason: err.message },
            });
            await this.prisma.accountingFrameworkMap.delete({ where: { id: created.id } });
            throw err;
        }
        await this.prisma.accountingFrameworkMap.update({
            where: { id: created.id },
            data: { workflowInstanceId: instance.id },
        });
        await this.audit.record({
            actorUserId: input.createdByUserId,
            action: 'CREATE',
            entityType: 'accounting_framework_map',
            entityId: created.id,
            after: { version, description: input.description },
        });
        return { frameworkMap: created, workflowInstance: instance };
    }
    async approveFrameworkMapVersion(workflowInstanceId, approverUserId) {
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        if (updated.status !== 'APPROVED')
            return null;
        const map = await this.prisma.accountingFrameworkMap.findFirstOrThrow({
            where: { workflowInstanceId },
        });
        const [, activated] = await this.prisma.$transaction([
            this.prisma.accountingFrameworkMap.updateMany({
                where: { status: 'ACTIVE' },
                data: { status: 'SUPERSEDED' },
            }),
            this.prisma.accountingFrameworkMap.update({
                where: { id: map.id },
                data: { status: 'ACTIVE', approvedByUserId: approverUserId },
            }),
        ]);
        await this.audit.record({
            actorUserId: approverUserId,
            action: 'UPDATE',
            entityType: 'accounting_framework_map',
            entityId: map.id,
            after: { status: 'ACTIVE', version: map.version },
        });
        return activated;
    }
    async createStatementTemplate(input) {
        await this.assertCapability(input.createdByUserId, 'FINANCIAL_STATEMENTS', 'INITIATE', 'create a statement template');
        const created = await this.prisma.statementTemplate.create({
            data: {
                basis: input.basis,
                statementCode: input.statementCode,
                name: input.name,
                createdByUserId: input.createdByUserId,
            },
        });
        await this.audit.record({
            actorUserId: input.createdByUserId,
            action: 'CREATE',
            entityType: 'statement_template',
            entityId: created.id,
            after: { basis: input.basis, statementCode: input.statementCode },
        });
        return created;
    }
    async addStatementLine(input) {
        await this.assertCapability(input.createdByUserId, 'FINANCIAL_STATEMENTS', 'INITIATE', 'add a statement line');
        const created = await this.prisma.statementLine.create({
            data: {
                statementTemplateId: input.statementTemplateId,
                lineCode: input.lineCode,
                label: input.label,
                sortOrder: input.sortOrder,
                computationType: input.computationType,
                parentLineId: input.parentLineId,
                signConvention: input.signConvention,
                formulaExpression: input.formulaExpression,
            },
        });
        await this.audit.record({
            actorUserId: input.createdByUserId,
            action: 'CREATE',
            entityType: 'statement_line',
            entityId: created.id,
            after: {
                statementTemplateId: input.statementTemplateId,
                lineCode: input.lineCode,
            },
        });
        return created;
    }
    async addStatementLineMapping(input) {
        await this.assertCapability(input.mappedByUserId, 'ACCOUNTING_FRAMEWORK_MAP', 'INITIATE', 'map a chart-of-accounts line to a statement line');
        const account = await this.prisma.chartOfAccount.findFirst({
            where: {
                ledgerEntityCode: input.ledgerEntityCode,
                accountCode: input.accountCode,
            },
        });
        if (!account) {
            throw new reporting_types_1.ReportingLifecycleError(`Account ${input.accountCode} does not exist on ledger entity ${input.ledgerEntityCode}.`);
        }
        const line = await this.prisma.statementLine.findFirst({
            where: {
                statementTemplateId: input.statementTemplateId,
                lineCode: input.lineCode,
            },
        });
        if (!line) {
            throw new reporting_types_1.ReportingLifecycleError(`Statement line ${input.lineCode} does not exist on template ${input.statementTemplateId}.`);
        }
        const created = await this.prisma.statementLineMapping.create({
            data: {
                frameworkMapId: input.frameworkMapId,
                chartOfAccountId: account.id,
                statementLineId: line.id,
            },
        });
        await this.audit.record({
            actorUserId: input.mappedByUserId,
            action: 'CREATE',
            entityType: 'statement_line_mapping',
            entityId: created.id,
            after: {
                frameworkMapId: input.frameworkMapId,
                accountCode: input.accountCode,
                lineCode: input.lineCode,
            },
        });
        return created;
    }
    async registerRegulatorTemplate(input) {
        await this.assertCapability(input.createdByUserId, 'REGULATOR_TEMPLATE_REGISTRY', 'INITIATE', 'register a regulator template');
        const created = await this.prisma.regulatorTemplate.create({
            data: {
                regulatorCode: input.regulatorCode,
                templateCode: input.templateCode,
                name: input.name,
                filingFrequency: input.filingFrequency,
                createdByUserId: input.createdByUserId,
            },
        });
        await this.audit.record({
            actorUserId: input.createdByUserId,
            action: 'CREATE',
            entityType: 'regulator_template',
            entityId: created.id,
            after: {
                regulatorCode: input.regulatorCode,
                templateCode: input.templateCode,
            },
        });
        return created;
    }
    async addRegulatorTemplateLine(input, actorUserId) {
        await this.assertCapability(actorUserId, 'REGULATOR_TEMPLATE_REGISTRY', 'INITIATE', 'add a regulator template line');
        const created = await this.prisma.regulatorTemplateLine.create({
            data: {
                regulatorTemplateId: input.regulatorTemplateId,
                lineCode: input.lineCode,
                label: input.label,
                sortOrder: input.sortOrder,
                mapsToStatementLineId: input.mapsToStatementLineId,
                mapsToChartOfAccountId: input.mapsToChartOfAccountId,
            },
        });
        await this.audit.record({
            actorUserId,
            action: 'CREATE',
            entityType: 'regulator_template_line',
            entityId: created.id,
            after: {
                regulatorTemplateId: input.regulatorTemplateId,
                lineCode: input.lineCode,
            },
        });
        return created;
    }
    async generateReportRun(input) {
        await this.assertCapability(input.generatedByUserId, 'FINANCIAL_STATEMENTS', 'INITIATE', 'generate a report run');
        const trialBalance = await this.ledger.getTrialBalance(input.ledgerEntityCode, input.basis);
        const figures = trialBalance.map((l) => ({
            accountCode: l.accountCode,
            accountName: l.accountName,
            debitKobo: l.debitKobo.toString(),
            creditKobo: l.creditKobo.toString(),
        }));
        const created = await this.prisma.reportRun.create({
            data: {
                ledgerEntityCode: input.ledgerEntityCode,
                basis: input.basis,
                periodStart: input.periodStart,
                periodEnd: input.periodEnd,
                frameworkMapId: input.frameworkMapId,
                statementTemplateId: input.statementTemplateId,
                figures: figures,
                generatedByUserId: input.generatedByUserId,
            },
        });
        await this.audit.record({
            actorUserId: input.generatedByUserId,
            action: 'CREATE',
            entityType: 'report_run',
            entityId: created.id,
            after: {
                ledgerEntityCode: input.ledgerEntityCode,
                basis: input.basis,
                frameworkMapId: input.frameworkMapId,
                lineCount: figures.length,
            },
        });
        return created;
    }
    async getBalanceSheet(ledgerEntityCode, basis, actorUserId) {
        await this.assertCapability(actorUserId, 'FINANCIAL_STATEMENTS', 'VIEW', 'view a balance sheet');
        const trialBalance = await this.ledger.getTrialBalance(ledgerEntityCode, basis);
        const accounts = await this.prisma.chartOfAccount.findMany({ where: { ledgerEntityCode } });
        const typeByAccountId = new Map(accounts.map((a) => [a.id, a.accountType]));
        const bucket = { ASSET: [], LIABILITY: [], EQUITY: [] };
        for (const line of trialBalance) {
            const accountType = typeByAccountId.get(line.accountId);
            if (accountType === 'ASSET') {
                bucket.ASSET.push({ accountCode: line.accountCode, accountName: line.accountName, balanceKobo: (line.debitKobo - line.creditKobo).toString() });
            }
            else if (accountType === 'LIABILITY') {
                bucket.LIABILITY.push({ accountCode: line.accountCode, accountName: line.accountName, balanceKobo: (line.creditKobo - line.debitKobo).toString() });
            }
            else if (accountType === 'EQUITY') {
                bucket.EQUITY.push({ accountCode: line.accountCode, accountName: line.accountName, balanceKobo: (line.creditKobo - line.debitKobo).toString() });
            }
        }
        const sum = (rows) => rows.reduce((s, r) => s + BigInt(r.balanceKobo), 0n).toString();
        return {
            ledgerEntityCode,
            basis,
            assets: bucket.ASSET,
            liabilities: bucket.LIABILITY,
            equity: bucket.EQUITY,
            totalAssetsKobo: sum(bucket.ASSET),
            totalLiabilitiesKobo: sum(bucket.LIABILITY),
            totalEquityKobo: sum(bucket.EQUITY),
        };
    }
    async getIncomeStatement(ledgerEntityCode, periodStart, periodEnd, basis, actorUserId) {
        await this.assertCapability(actorUserId, 'FINANCIAL_STATEMENTS', 'VIEW', 'view an income statement');
        const entity = await this.prisma.ledgerEntity.findUniqueOrThrow({ where: { code: ledgerEntityCode } });
        const journalWhere = basis === entity.primaryBasis
            ? { journalClass: 'BASE' }
            : { OR: [{ journalClass: 'BASE' }, { journalClass: 'BASIS_ADJUSTMENT', adjustmentForBasis: basis }] };
        const accounts = await this.prisma.chartOfAccount.findMany({
            where: { ledgerEntityCode, accountType: { in: ['INCOME', 'EXPENSE'] } },
        });
        const lines = accounts.length
            ? await this.prisma.journalEntryLine.findMany({
                where: { accountId: { in: accounts.map((a) => a.id) }, journalEntry: { status: 'POSTED', entryDate: { gte: periodStart, lte: periodEnd }, ...journalWhere } },
                include: { account: true },
            })
            : [];
        const byAccount = new Map();
        for (const line of lines) {
            const existing = byAccount.get(line.accountId);
            if (existing) {
                existing.debitKobo += line.debitKobo;
                existing.creditKobo += line.creditKobo;
            }
            else {
                byAccount.set(line.accountId, { accountCode: line.account.accountCode, accountName: line.account.accountName, accountType: line.account.accountType, debitKobo: line.debitKobo, creditKobo: line.creditKobo });
            }
        }
        const income = [];
        const expenses = [];
        let totalIncome = 0n;
        let totalExpense = 0n;
        for (const a of byAccount.values()) {
            if (a.accountType === 'INCOME') {
                const balance = a.creditKobo - a.debitKobo;
                income.push({ accountCode: a.accountCode, accountName: a.accountName, balanceKobo: balance.toString() });
                totalIncome += balance;
            }
            else {
                const balance = a.debitKobo - a.creditKobo;
                expenses.push({ accountCode: a.accountCode, accountName: a.accountName, balanceKobo: balance.toString() });
                totalExpense += balance;
            }
        }
        return {
            ledgerEntityCode,
            basis,
            periodStart,
            periodEnd,
            income,
            expenses,
            totalIncomeKobo: totalIncome.toString(),
            totalExpenseKobo: totalExpense.toString(),
            netIncomeKobo: (totalIncome - totalExpense).toString(),
        };
    }
    async getRecentJournals(ledgerEntityCode, actorUserId, limit = 20) {
        await this.assertCapability(actorUserId, 'FINANCIAL_STATEMENTS', 'VIEW', 'view the general ledger');
        const journals = await this.prisma.journalEntry.findMany({
            where: { ledgerEntityCode, status: 'POSTED' },
            orderBy: { entryDate: 'desc' },
            take: limit,
            include: { lines: { include: { account: true } } },
        });
        return journals.map((j) => ({
            id: j.id,
            journalReference: j.journalReference,
            entryDate: j.entryDate,
            description: j.description,
            lines: j.lines.map((l) => ({ accountCode: l.account.accountCode, accountName: l.account.accountName, debitKobo: l.debitKobo.toString(), creditKobo: l.creditKobo.toString(), description: l.description })),
        }));
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({
                actorUserId: userId,
                action: 'PERMISSION_DENIED',
                entityType: 'reporting_activity',
                entityId: activity,
                after: { functionCode, level },
            });
            throw new reporting_types_1.ReportingLifecycleError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.ReportingService = ReportingService;
exports.ReportingService = ReportingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService,
        ledger_service_1.LedgerService])
], ReportingService);
//# sourceMappingURL=reporting.service.js.map