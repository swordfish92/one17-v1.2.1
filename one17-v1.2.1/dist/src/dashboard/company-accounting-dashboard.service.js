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
exports.CompanyAccountingDashboardService = exports.CompanyAccountingDashboardError = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const reconciliation_service_1 = require("../reconciliation/reconciliation.service");
const reporting_service_1 = require("../reporting/reporting.service");
const dashboard_aging_util_1 = require("./dashboard-aging.util");
class CompanyAccountingDashboardError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CompanyAccountingDashboardError';
    }
}
exports.CompanyAccountingDashboardError = CompanyAccountingDashboardError;
let CompanyAccountingDashboardService = class CompanyAccountingDashboardService {
    prisma;
    reconciliation;
    reporting;
    constructor(prisma, reconciliation, reporting) {
        this.prisma = prisma;
        this.reconciliation = reconciliation;
        this.reporting = reporting;
    }
    async moneyMetric(label, metricCode, operationalKobo) {
        const result = await this.reconciliation.reconcile(metricCode, operationalKobo);
        if (!result.configured) {
            return { label, value: operationalKobo.toString(), note: 'UNRECONCILED TO LEDGER — operational sum, not journal-verified (invariant 43b)' };
        }
        return {
            label,
            value: result.operationalKobo.toString(),
            ragStatus: result.breached ? 'RED' : 'GREEN',
            note: result.breached ? `LEDGER VARIANCE BREACH — ₦${result.varianceKobo} kobo outside ₦${result.toleranceKobo} kobo tolerance` : undefined,
            reconTile: {
                operationalKobo: result.operationalKobo.toString(),
                ledgerKobo: result.ledgerKobo.toString(),
                varianceKobo: result.varianceKobo.toString(),
                toleranceKobo: result.toleranceKobo.toString(),
                breached: result.breached,
            },
        };
    }
    async companyEntity() {
        return this.prisma.ledgerEntity.findFirst({ where: { entityType: 'COMPANY' } });
    }
    async glActuals(ledgerEntityCode, accountType, from, to) {
        const lines = await this.prisma.journalEntryLine.findMany({
            where: { account: { ledgerEntityCode, accountType }, journalEntry: { ledgerEntityCode, entryDate: { gte: from, lte: to } } },
        });
        return lines.reduce((sum, l) => sum + (accountType === 'INCOME' ? l.creditKobo - l.debitKobo : l.debitKobo - l.creditKobo), 0n);
    }
    async getActiveBudget(fiscalYear) {
        return this.prisma.budgetVersion.findFirst({
            where: { fiscalYear, status: 'ACTIVE' },
            include: { lines: { where: { isActive: true }, include: { monthlyAmounts: true } } },
        });
    }
    async getDashboard() {
        const company = await this.companyEntity();
        const now = new Date();
        const fy = now.getFullYear();
        const monthStart = new Date(fy, now.getMonth(), 1);
        const yearStart = new Date(fy, 0, 1);
        const currentMonth = now.getMonth() + 1;
        if (!company) {
            return {
                groups: [{ groupCode: 'NO_COMPANY_ENTITY', title: '⚠️ No COMPANY Ledger Entity', note: 'No ledger_entity with entityType=COMPANY exists yet — every tile below is suspended until one is created (Ledger Entity Setup).', metrics: [] }],
                generatedAt: now.toISOString(),
            };
        }
        const [monthIncome, monthExpense, ytdIncome, ytdExpense] = await Promise.all([
            this.glActuals(company.code, 'INCOME', monthStart, now),
            this.glActuals(company.code, 'EXPENSE', monthStart, now),
            this.glActuals(company.code, 'INCOME', yearStart, now),
            this.glActuals(company.code, 'EXPENSE', yearStart, now),
        ]);
        const budget = await this.getActiveBudget(fy);
        let varianceGroup;
        if (!budget) {
            varianceGroup = {
                groupCode: 'VARIANCE_BY_COST_CENTRE',
                title: '📊 Variance vs Budget by Cost Centre',
                note: 'NO ACTIVE BUDGET — variance suspended (invariant 16 AWAITING pattern). Budget line group stands in for "cost centre" — no dedicated CostCentre model exists yet (see QUESTIONS_FOR_REVIEW.md).',
                tableColumns: ['costCentre', 'budgetedKobo', 'actualKobo', 'varianceKobo'],
                tableRows: [],
            };
        }
        else {
            const groups = new Map();
            for (const line of budget.lines) {
                const key = line.budgetLineGroup;
                const budgetedToDate = line.monthlyAmounts.filter((m) => m.month <= currentMonth).reduce((s, m) => s + m.amountKobo, 0n);
                const existing = groups.get(key);
                const actualAccountType = line.class === 'REVENUE' ? 'INCOME' : 'EXPENSE';
                if (existing)
                    existing.budgeted += budgetedToDate;
                else
                    groups.set(key, { budgeted: budgetedToDate, actualAccountType });
            }
            const rows = [];
            for (const [costCentre, { budgeted, actualAccountType }] of groups) {
                const actual = await this.glActuals(company.code, actualAccountType, yearStart, now);
                rows.push({
                    costCentre,
                    budgetedKobo: budgeted.toString(),
                    actualKobo: actual.toString(),
                    varianceKobo: (actual - budgeted).toString(),
                    drillDown: 'Budget Management → this line group; Journal Entries → filter by account type and date range for the underlying postings',
                });
            }
            varianceGroup = {
                groupCode: 'VARIANCE_BY_COST_CENTRE',
                title: '📊 Variance vs Budget by Cost Centre',
                note: `Active budget ${budget.fiscalYear} (${budget.scenarioLabel}). "Cost centre" = budget_line_group (no dedicated CostCentre model exists — see QUESTIONS_FOR_REVIEW.md). Drill path: this row → Budget Management (line group) → Journal Entries (account type + date range).`,
                tableColumns: ['costCentre', 'budgetedKobo', 'actualKobo', 'varianceKobo'],
                tableRows: rows,
            };
        }
        const [obligations, invoices] = await Promise.all([
            this.prisma.counterpartyRepaymentObligation.findMany({ where: { status: 'PENDING' }, select: { dueDate: true, amountKobo: true } }),
            this.prisma.vendorInvoice.findMany({
                where: { status: { in: ['MATCHED', 'DISPUTED'] }, purchaseOrder: { ledgerEntityCode: company.code } },
                select: { invoiceDate: true, invoiceAmountKobo: true },
            }),
        ]);
        const receivablesAging = (0, dashboard_aging_util_1.bucketByAge)(obligations.map((o) => ({ ageDays: (0, dashboard_aging_util_1.daysBetween)(o.dueDate, now), amountKobo: o.amountKobo })));
        const payablesAging = (0, dashboard_aging_util_1.bucketByAge)(invoices.map((i) => ({ ageDays: (0, dashboard_aging_util_1.daysBetween)(i.invoiceDate, now), amountKobo: i.invoiceAmountKobo })));
        const pendingJournals = await this.prisma.journalEntry.findMany({
            where: { ledgerEntityCode: company.code, status: 'DRAFT' },
            select: { id: true, entryDate: true, description: true, postingWorkflowInstanceId: true },
            orderBy: { entryDate: 'desc' },
            take: 50,
        });
        const periods = await this.prisma.accountingPeriod.findMany({
            where: { ledgerEntityCode: company.code },
            orderBy: { periodStart: 'desc' },
            take: 12,
            select: { id: true, periodStart: true, periodEnd: true, status: true, closeWorkflowInstanceId: true },
        });
        const groups = [
            {
                groupCode: 'INCOME_EXPENSE_VS_BUDGET',
                title: '💰 Income vs Expenses vs Budget',
                metrics: [
                    await this.moneyMetric('Income — Current Period (₦)', 'COMPANY_ACCT_DASHBOARD.INCOME_CURRENT', monthIncome),
                    await this.moneyMetric('Expenses — Current Period (₦)', 'COMPANY_ACCT_DASHBOARD.EXPENSE_CURRENT', monthExpense),
                    await this.moneyMetric('Income — YTD (₦)', 'COMPANY_ACCT_DASHBOARD.INCOME_YTD', ytdIncome),
                    await this.moneyMetric('Expenses — YTD (₦)', 'COMPANY_ACCT_DASHBOARD.EXPENSE_YTD', ytdExpense),
                    { label: 'Active Budget', value: budget ? `${budget.fiscalYear} — ${budget.scenarioLabel}` : null, note: budget ? undefined : 'NO ACTIVE BUDGET' },
                ],
            },
            varianceGroup,
            {
                groupCode: 'RECEIVABLES_PAYABLES_AGEING',
                title: '📋 Receivables & Payables Ageing',
                note: 'Receivables = enterprise-wide counterparty repayment obligations (PENDING, overdue only). Payables = vendor invoices MATCHED/DISPUTED (unpaid), COMPANY entity. See QUESTIONS_FOR_REVIEW.md for the model-choice rationale.',
                tableColumns: ['bucket', 'amountKobo', 'count'],
                tableRows: receivablesAging.map((r, i) => ({ bucket: r.bucket, receivablesKobo: r.amountKobo, receivablesCount: r.count, payablesKobo: payablesAging[i].amountKobo, payablesCount: payablesAging[i].count })),
            },
            {
                groupCode: 'PENDING_POSTINGS',
                title: '⏳ Pending Journal Postings',
                note: pendingJournals.length === 0 ? 'No DRAFT journals awaiting posting' : undefined,
                tableColumns: ['id', 'entryDate', 'description', 'status'],
                tableRows: pendingJournals.map((j) => ({ id: j.id, entryDate: j.entryDate.toISOString().slice(0, 10), description: j.description, status: j.postingWorkflowInstanceId ? 'AWAITING CHECKER APPROVAL' : 'AWAITING POSTING REQUEST' })),
            },
            {
                groupCode: 'PERIOD_CLOSE_STATUS',
                title: '📅 Period Close Status',
                tableColumns: ['periodStart', 'periodEnd', 'status'],
                tableRows: periods.map((p) => ({ periodStart: p.periodStart.toISOString().slice(0, 10), periodEnd: p.periodEnd.toISOString().slice(0, 10), status: p.closeWorkflowInstanceId && p.status === 'OPEN' ? 'CLOSE REQUESTED' : p.status })),
            },
        ];
        return { groups, generatedAt: now.toISOString() };
    }
    async exportAsReportRun(actorUserId) {
        const company = await this.companyEntity();
        if (!company)
            throw new CompanyAccountingDashboardError('No COMPANY ledger entity exists — cannot export.');
        const frameworkMap = await this.prisma.accountingFrameworkMap.findFirst({ where: { status: 'ACTIVE' }, orderBy: { version: 'desc' } });
        if (!frameworkMap)
            throw new CompanyAccountingDashboardError('No ACTIVE accounting framework map exists yet — export is blocked until FinCon activates one (invariant 15b).');
        const openPeriod = await this.prisma.accountingPeriod.findFirst({ where: { ledgerEntityCode: company.code, status: 'OPEN' }, orderBy: { periodStart: 'desc' } });
        const lastClosedPeriod = openPeriod ? null : await this.prisma.accountingPeriod.findFirst({ where: { ledgerEntityCode: company.code, status: 'CLOSED' }, orderBy: { periodEnd: 'desc' } });
        const period = openPeriod ?? lastClosedPeriod;
        if (!period)
            throw new CompanyAccountingDashboardError('No accounting period exists for the COMPANY entity yet — export is blocked.');
        const created = await this.reporting.generateReportRun({
            ledgerEntityCode: company.code,
            basis: 'IFRS',
            periodStart: period.periodStart,
            periodEnd: period.periodEnd,
            frameworkMapId: frameworkMap.id,
            generatedByUserId: actorUserId,
        });
        return { reportRunId: created.id };
    }
};
exports.CompanyAccountingDashboardService = CompanyAccountingDashboardService;
exports.CompanyAccountingDashboardService = CompanyAccountingDashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        reconciliation_service_1.ReconciliationService,
        reporting_service_1.ReportingService])
], CompanyAccountingDashboardService);
//# sourceMappingURL=company-accounting-dashboard.service.js.map