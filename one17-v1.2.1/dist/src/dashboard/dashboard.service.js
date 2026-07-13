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
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const board_directive_service_1 = require("../board-directive/board-directive.service");
const reconciliation_service_1 = require("../reconciliation/reconciliation.service");
const aum_util_1 = require("../common/aum.util");
const RAG_SEVERITY = { RED: 4, AMBER: 3, AWAITING_MATRIX: 2, NOT_INSTRUMENTED: 1, INFORMATIONAL: 1, GREEN: 0 };
let DashboardService = class DashboardService {
    prisma;
    boardDirective;
    reconciliation;
    constructor(prisma, boardDirective, reconciliation) {
        this.prisma = prisma;
        this.boardDirective = boardDirective;
        this.reconciliation = reconciliation;
    }
    async moneyMetric(label, metricCode, operationalKobo) {
        const result = await this.reconciliation.reconcile(metricCode, operationalKobo);
        if (!result.configured) {
            return { label, value: operationalKobo.toString(), note: 'UNRECONCILED TO LEDGER — operational sum, not journal-verified (see invariant 43b; full recon lands with CHECK11)' };
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
    async manualStatus() {
        return ((await this.prisma.dashboardManualStatus.findUnique({ where: { id: 1 } })) ??
            (await this.prisma.dashboardManualStatus.create({ data: { id: 1 } })));
    }
    async latestKri(code) {
        return this.prisma.kriReading.findFirst({ where: { kriCode: code, isAggregate: true }, orderBy: { readingDate: 'desc' } });
    }
    async latestStress(modelType, scenarioCode) {
        const scenario = scenarioCode ? await this.prisma.stressScenarioConfig.findFirst({ where: { modelType: modelType, scenarioCode } }) : null;
        const baseline = await this.prisma.stressTestRun.findFirst({
            where: { modelType: modelType, isApprovedBaseline: true, ...(scenario ? { scenarioConfigId: scenario.id } : {}) },
            orderBy: { ranAt: 'desc' },
        });
        if (baseline)
            return { run: baseline, isOfficialBaseline: true };
        const latestAny = await this.prisma.stressTestRun.findFirst({
            where: { modelType: modelType, ...(scenario ? { scenarioConfigId: scenario.id } : {}) },
            orderBy: { ranAt: 'desc' },
        });
        return { run: latestAny, isOfficialBaseline: false };
    }
    async totalAumKobo() {
        return (0, aum_util_1.computeTotalAumKobo)(this.prisma);
    }
    async totalInvestorsCount(activeAccounts) {
        const mandateInvestors = await this.prisma.ndMandateAccount.findMany({
            where: { status: 'ACTIVE', investorId: { not: null } },
            select: { investorId: true },
        });
        const ids = new Set(activeAccounts.map((a) => a.investorId));
        for (const m of mandateInvestors)
            if (m.investorId)
                ids.add(m.investorId);
        return ids.size;
    }
    async aumByProductClass() {
        const accounts = await this.prisma.productAccount.findMany({
            where: { status: 'ACTIVE' },
            select: { principalOrCommittedKobo: true, product: { select: { engineType: true } } },
        });
        const byClass = new Map();
        for (const a of accounts) {
            const key = a.product.engineType;
            byClass.set(key, (byClass.get(key) ?? 0n) + a.principalOrCommittedKobo);
        }
        const mandates = await this.prisma.ndMandateAccount.aggregate({ where: { status: 'ACTIVE' }, _sum: { committedCapitalKobo: true } });
        const mandateKobo = mandates._sum.committedCapitalKobo ?? 0n;
        if (mandateKobo > 0n)
            byClass.set('MANDATE', (byClass.get('MANDATE') ?? 0n) + mandateKobo);
        return Array.from(byClass.entries()).map(([engineType, aumKobo]) => ({ engineType, aumKobo: aumKobo.toString() }));
    }
    async incomeMixYtd() {
        const company = await this.prisma.ledgerEntity.findFirst({ where: { entityType: 'COMPANY' } });
        if (!company)
            return [];
        const yearStart = new Date(new Date().getFullYear(), 0, 1);
        const incomeAccounts = await this.prisma.chartOfAccount.findMany({ where: { ledgerEntityCode: company.code, accountType: 'INCOME' } });
        const rows = [];
        for (const account of incomeAccounts) {
            const lines = await this.prisma.journalEntryLine.findMany({
                where: { accountId: account.id, journalEntry: { ledgerEntityCode: company.code, entryDate: { gte: yearStart } } },
            });
            const amountKobo = lines.reduce((s, l) => s + (l.creditKobo - l.debitKobo), 0n);
            if (amountKobo !== 0n)
                rows.push({ accountName: account.accountName, amountKobo: amountKobo.toString() });
        }
        return rows;
    }
    async incomeExpenseTrend() {
        const company = await this.prisma.ledgerEntity.findFirst({ where: { entityType: 'COMPANY' } });
        if (!company)
            return [];
        const rows = [];
        const now = new Date();
        for (let i = 5; i >= 0; i--) {
            const from = new Date(now.getFullYear(), now.getMonth() - i, 1);
            const to = new Date(now.getFullYear(), now.getMonth() - i + 1, 0, 23, 59, 59);
            const [incomeLines, expenseLines] = await Promise.all([
                this.prisma.journalEntryLine.findMany({ where: { account: { ledgerEntityCode: company.code, accountType: 'INCOME' }, journalEntry: { ledgerEntityCode: company.code, entryDate: { gte: from, lte: to } } } }),
                this.prisma.journalEntryLine.findMany({ where: { account: { ledgerEntityCode: company.code, accountType: 'EXPENSE' }, journalEntry: { ledgerEntityCode: company.code, entryDate: { gte: from, lte: to } } } }),
            ]);
            const incomeKobo = incomeLines.reduce((s, l) => s + (l.creditKobo - l.debitKobo), 0n);
            const expenseKobo = expenseLines.reduce((s, l) => s + (l.debitKobo - l.creditKobo), 0n);
            rows.push({ month: from.toISOString().slice(0, 7), incomeKobo: incomeKobo.toString(), expenseKobo: expenseKobo.toString() });
        }
        return rows;
    }
    async mobilizationByMonth() {
        const rows = [];
        const now = new Date();
        for (let i = 5; i >= 0; i--) {
            const from = new Date(now.getFullYear(), now.getMonth() - i, 1);
            const to = new Date(now.getFullYear(), now.getMonth() - i + 1, 0, 23, 59, 59);
            const agg = await this.prisma.txn.aggregate({ where: { txnType: 'SUBSCRIPTION', valueDate: { gte: from, lte: to } }, _sum: { amountKobo: true } });
            rows.push({ month: from.toISOString().slice(0, 7), mobilizedKobo: (agg._sum.amountKobo ?? 0n).toString() });
        }
        return rows;
    }
    async worstRagForCategories(categoryRefs) {
        const defs = await this.prisma.kriDefinition.findMany({ where: { riskAppetiteCategoryRef: { in: categoryRefs } }, select: { code: true } });
        if (defs.length === 0)
            return 'AWAITING_MATRIX';
        const readings = await Promise.all(defs.map((d) => this.latestKri(d.code)));
        let worst = 'GREEN';
        for (const r of readings) {
            if (!r)
                continue;
            if ((RAG_SEVERITY[r.ragStatus] ?? 0) > (RAG_SEVERITY[worst] ?? 0))
                worst = r.ragStatus;
        }
        return worst;
    }
    trend(residual, inherent) {
        if (residual < inherent)
            return '↓';
        if (residual > inherent)
            return '↑';
        return '→';
    }
    residualFromRag(rag) {
        if (rag === 'RED')
            return 5;
        if (rag === 'AMBER')
            return 3;
        return 1;
    }
    async getCeoDashboard() {
        const manual = await this.manualStatus();
        const [liq, cap, cpd] = await Promise.all([
            this.latestStress('LIQUIDITY', 'LIQ-08'),
            this.latestStress('CAPITAL_ADEQUACY', 'CAP-01'),
            this.latestStress('COUNTERPARTY_DEFAULT'),
        ]);
        const liqOut = liq.run?.outputs ?? {};
        const capOut = cap.run?.outputs ?? {};
        const cpdOut = cpd.run?.outputs ?? {};
        const [bz01, bz04, cpl02] = await Promise.all([this.latestKri('BZ-01'), this.latestKri('BZ-04'), this.latestKri('CPL-02')]);
        const monthStart = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
        const company = await this.prisma.ledgerEntity.findFirst({ where: { entityType: 'COMPANY' } });
        const monthlyIncomeKobo = company ? bz04?.detail?.incomeKobo : null;
        const monthlyExpenseKobo = company ? bz04?.detail?.expenseKobo : null;
        const activeAccounts = await this.prisma.productAccount.findMany({ where: { status: 'ACTIVE' }, select: { productCode: true, investorId: true } });
        const totalAum = await this.totalAumKobo();
        const activePortfolios = new Set(activeAccounts.map((a) => a.productCode)).size;
        const totalInvestors = await this.totalInvestorsCount(activeAccounts);
        const largestEadKobo = (cpdOut.perCounterparty ?? []).reduce((m, c) => Math.max(m, Number(c.eadKobo)), 0);
        const growthNeededKobo = Math.max(0, Number(manual.growthTargetAumKobo) - Number(totalAum));
        const groups = [
            {
                groupCode: 'CASH_LIQUIDITY',
                title: '💧 Cash & Liquidity',
                metrics: [
                    { label: 'Cash Position (₦)', value: liqOut.cashKobo ?? null, note: liq.run ? undefined : 'No liquidity stress run yet' },
                    { label: 'LCR Ratio', value: liqOut.lcr ?? null },
                    { label: 'Liquidity Runway (days)', value: liqOut.survivalDays ?? null },
                    { label: '30d Stressed Gap (₦)', value: liqOut.fundingGapKobo ?? null },
                    { label: 'Liquidity RAG', value: await this.worstRagForCategories(['Treasury — LCR', 'Treasury — Liquidity Runway']), ragStatus: await this.worstRagForCategories(['Treasury — LCR', 'Treasury — Liquidity Runway']) },
                ],
            },
            {
                groupCode: 'CAPITAL_ADEQUACY',
                title: '🏦 Capital Adequacy',
                metrics: [
                    { label: 'Regulatory Capital (₦)', value: capOut.equityKobo ?? null },
                    { label: 'CAR (Current)', value: capOut.carPreStress ?? null, note: 'DQ-1 corrected — never the workbook ×100 display defect' },
                    { label: 'CAR (Post-Stress)', value: capOut.carPostStress ?? null },
                    { label: 'Capital Surplus (₦)', value: capOut.equityKobo != null && capOut.requirementKobo != null ? (BigInt(capOut.equityKobo) - BigInt(capOut.requirementKobo)).toString() : null },
                    { label: 'Capital RAG', value: await this.worstRagForCategories(['Treasury — Capital Adequacy']), ragStatus: await this.worstRagForCategories(['Treasury — Capital Adequacy']) },
                ],
            },
            {
                groupCode: 'REVENUE_INCOME',
                title: '💰 Revenue & Income',
                metrics: [
                    { label: 'Monthly Income (₦)', value: monthlyIncomeKobo },
                    { label: 'Monthly Expenses (₦)', value: monthlyExpenseKobo },
                    { label: 'Cost Coverage', value: bz04?.value != null ? Number(bz04.value) : null, ragStatus: bz04?.ragStatus },
                    { label: 'Revenue vs Budget', value: bz01?.value != null ? Number(bz01.value) : null, ragStatus: bz01?.ragStatus, note: bz01?.ragStatus === 'NOT_INSTRUMENTED' ? 'NO APPROVED BUDGET — variance suspended' : undefined },
                    { label: 'Revenue RAG', value: bz01?.ragStatus ?? 'NOT_INSTRUMENTED', ragStatus: bz01?.ragStatus },
                ],
            },
            {
                groupCode: 'AUM_MOVEMENT',
                title: '📈 AUM Movement',
                metrics: [
                    await this.moneyMetric('Total AUM (₦)', 'CEO_DASHBOARD.TOTAL_AUM', totalAum),
                    { label: 'Active Portfolios', value: activePortfolios },
                    { label: 'Active Notes', value: activeAccounts.length },
                    { label: 'Total Investors', value: totalInvestors },
                ],
            },
            {
                groupCode: 'COUNTERPARTY_RISK',
                title: '⚠️ Counterparty Risk',
                metrics: [
                    cpd.run
                        ? await this.moneyMetric('Largest Exposure (₦)', 'CEO_DASHBOARD.LARGEST_EXPOSURE', BigInt(Math.round(largestEadKobo)))
                        : { label: 'Largest Exposure (₦)', value: null, note: 'No counterparty default run yet' },
                    cpd.run
                        ? await this.moneyMetric('Total EL (₦)', 'CEO_DASHBOARD.TOTAL_EL', BigInt(Math.round(cpdOut.totalElKobo ?? 0)))
                        : { label: 'Total EL (₦)', value: null },
                    { label: 'Overdue Count (30+ DPD)', value: null, note: 'NOT_YET_INSTRUMENTED — no per-counterparty due-date/DPD tracking in schema yet (source sheet 20_TD_Counterparties column K has no equivalent field here)' },
                    { label: 'Counterparty RAG', value: await this.worstRagForCategories(['Credit — Single Counterparty']), ragStatus: await this.worstRagForCategories(['Credit — Single Counterparty']) },
                ],
            },
            {
                groupCode: 'RECEIVABLES_AGEING',
                title: '📋 Receivables Ageing',
                note: 'NOT_YET_INSTRUMENTED — source sheet 23_TD_Receivables has no equivalent table in this build (no receivables-ageing model exists yet)',
                metrics: [
                    { label: 'Current (0-30d) (₦)', value: null },
                    { label: '31-60 days (₦)', value: null },
                    { label: '61-90 days (₦)', value: null },
                    { label: '90+ days (₦)', value: null },
                ],
            },
            {
                groupCode: 'TOP_URGENT_RISKS',
                title: '🎯 Top 5 Urgent Risks',
                note: 'Top-4 rows NOT_YET_INSTRUMENTED (DPD ranking needs sheet 20_TD_Counterparties equivalent, not built). Row 5 (AUM growth needed) is live.',
                metrics: [
                    { label: 'Revenue Sensitivity — AUM Growth Needed', value: `${growthNeededKobo.toLocaleString()} kobo needed to reach growth target` },
                ],
            },
            {
                groupCode: 'COMPLIANCE_STATUS',
                title: '✅ Compliance Status',
                metrics: [
                    { label: 'Regulatory Filings', value: manual.regulatoryFilingsStatus, ragStatus: manual.regulatoryFilingsStatus, note: 'Manual input in source (Assumptions!C47) — same here pending the Regulatory Reporting module' },
                    { label: 'Shariah Compliance', value: cpl02?.ragStatus ?? 'NOT_INSTRUMENTED', ragStatus: cpl02?.ragStatus, note: 'Upgraded from the source\'s manual input to live TPL_13 compliance_check data (CPL-02)' },
                    { label: 'Operational Risk', value: manual.operationalRiskStatus, ragStatus: manual.operationalRiskStatus, note: 'Manual input in source — same here (OR-01..03 KRIs not yet instrumented)' },
                    { label: 'KYC Compliance', value: await this.kycComplianceRag(), ragStatus: await this.kycComplianceRag(), note: 'Upgraded from the source\'s static value to a live Investor.kycStatus query' },
                    { label: 'AML Status', value: await this.amlStatusRag(), ragStatus: await this.amlStatusRag(), note: 'Upgraded from the source\'s static value to a live Investor.amlStatus query' },
                ],
            },
            {
                groupCode: 'ACTION_TRACKER',
                title: '📌 Action Tracker',
                note: 'Source confirmed as manually-typed content (not a formula) — this is a content register, not a derived feed',
                tableColumns: ['title', 'owner'],
                tableRows: await this.actionItems('CEO'),
            },
            {
                groupCode: 'BOARD_DIRECTIVE_EXCEPTIONS',
                title: '⚠️ Board Directive Exceptions',
                note: 'Live — Board/Committee directives (Section F) past their due date and not yet REPORTED_BACK',
                tableColumns: ['title', 'dueAt', 'status'],
                tableRows: await this.boardDirective.listOverdueDirectives(),
            },
            {
                groupCode: 'AUM_BY_PRODUCT_CLASS',
                title: '🥧 AUM by Product Class',
                tableColumns: ['engineType', 'aumKobo'],
                tableRows: await this.aumByProductClass(),
            },
            {
                groupCode: 'INCOME_MIX',
                title: '🥧 Income Mix (YTD)',
                tableColumns: ['accountName', 'amountKobo'],
                tableRows: await this.incomeMixYtd(),
            },
            {
                groupCode: 'INCOME_EXPENSE_TREND',
                title: '📊 Income vs Expense (last 6 months)',
                tableColumns: ['month', 'incomeKobo', 'expenseKobo'],
                tableRows: await this.incomeExpenseTrend(),
            },
            {
                groupCode: 'MOBILIZATION_BY_MONTH',
                title: '📊 Mobilization by Month (last 6 months)',
                tableColumns: ['month', 'mobilizedKobo'],
                tableRows: await this.mobilizationByMonth(),
            },
        ];
        return { groups, generatedAt: new Date().toISOString() };
    }
    async getBoardDashboard() {
        const manual = await this.manualStatus();
        const [liqBase, liqSevere, cap, cpd] = await Promise.all([
            this.latestStress('LIQUIDITY', 'LIQ-01'),
            this.latestStress('LIQUIDITY', 'LIQ-08'),
            this.latestStress('CAPITAL_ADEQUACY', 'CAP-01'),
            this.latestStress('COUNTERPARTY_DEFAULT'),
        ]);
        const liqBaseOut = liqBase.run?.outputs ?? {};
        const liqSevereOut = liqSevere.run?.outputs ?? {};
        const capOut = cap.run?.outputs ?? {};
        const cpdOut = cpd.run?.outputs ?? {};
        const entries = await this.prisma.enterpriseRiskProfileEntry.findMany({ orderBy: { sortOrder: 'asc' } });
        const CATEGORY_MAP = {
            Strategic: ['Strategic Risk'],
            Credit: ['Credit — Single Counterparty', 'Credit — Overdue', 'Credit — DPD Escalation'],
            Treasury: ['Treasury — Capital Adequacy', 'Treasury — Liquidity Runway', 'Treasury — LCR'],
            Compliance: ['Compliance — Regulatory', 'Compliance — Shariah'],
            Operational: ['Operational Risk'],
            'Investment Mgmt': ['Investment — Concentration', 'Investment — Severe Stress Loss'],
        };
        const riskProfileRows = [];
        for (const e of entries) {
            const rag = e.riskCategory === 'Reputational' ? manual.reputationalRagStatus : await this.worstRagForCategories(CATEGORY_MAP[e.riskCategory] ?? []);
            const residual = e.riskCategory === 'Reputational' ? manual.reputationalRiskScore : this.residualFromRag(rag);
            riskProfileRows.push({
                riskCategory: e.riskCategory,
                inherentScore: e.inherentScore,
                residualScore: residual,
                rag,
                trend: this.trend(residual, e.inherentScore),
                note: e.riskCategory === 'Reputational' ? 'Manual input — no live model yet (matches source)' : undefined,
            });
        }
        const cpl02 = await this.latestKri('CPL-02');
        const activeMatrix = await this.prisma.riskAppetiteMatrixVersion.findFirst({ where: { status: 'ACTIVE' } });
        const nextReviewDue = new Date();
        nextReviewDue.setMonth(nextReviewDue.getMonth() + 1);
        nextReviewDue.setDate(5);
        const perCounterparty = (cpdOut.perCounterparty ?? []);
        const top5 = [...perCounterparty].sort((a, b) => Number(b.eadKobo) - Number(a.eadKobo)).slice(0, 5);
        const groups = [
            {
                groupCode: 'ENTERPRISE_RISK_PROFILE',
                title: 'Panel 1 — Enterprise Risk Profile',
                note: activeMatrix ? undefined : 'AWAITING APPROVED MATRIX — no ACTIVE risk_appetite_matrix_version (invariant 16)',
                tableColumns: ['riskCategory', 'inherentScore', 'residualScore', 'rag', 'trend'],
                tableRows: riskProfileRows,
            },
            {
                groupCode: 'LIQUIDITY_STRESS_RESULT',
                title: 'Panel 2 — Liquidity Stress Result',
                note: this.baselineNote(liqSevere.run, liqSevere.isOfficialBaseline),
                metrics: [
                    { label: 'Survival Period (Base)', value: liqBaseOut.survivalDays ?? null },
                    { label: 'Survival Period (Severe)', value: liqSevereOut.survivalDays ?? null },
                    { label: 'LCR (Base)', value: liqBaseOut.lcr ?? null },
                    { label: 'LCR (Combined Stress)', value: liqSevereOut.lcr ?? null },
                    { label: 'RAG Status', value: await this.worstRagForCategories(['Treasury — LCR']), ragStatus: await this.worstRagForCategories(['Treasury — LCR']) },
                ],
            },
            {
                groupCode: 'CAPITAL_STRESS_RESULT',
                title: 'Panel 3 — Capital Stress Result',
                note: this.baselineNote(cap.run, cap.isOfficialBaseline),
                metrics: [
                    { label: 'Current CAR', value: capOut.carPreStress ?? null },
                    { label: 'Capital Surplus (₦)', value: capOut.equityKobo != null && capOut.requirementKobo != null ? (BigInt(capOut.equityKobo) - BigInt(capOut.requirementKobo)).toString() : null },
                    { label: 'Total Stress Losses (₦)', value: this.totalStressLossesKobo(cap.run) },
                ],
            },
            {
                groupCode: 'COUNTERPARTY_EXPOSURES_TOP5',
                title: 'Panel 4 — Counterparty Exposures (Top 5)',
                note: cpd.run ? 'DPD/status columns NOT_YET_INSTRUMENTED (no due-date tracking) — exposure ranking is live' : 'No counterparty default run yet',
                tableColumns: ['legalName', 'eadKobo'],
                tableRows: top5,
            },
            {
                groupCode: 'REGULATORY_SHARIAH_STATUS',
                title: 'Panel 5 — Regulatory & Shariah Status',
                metrics: [
                    { label: 'Regulatory Filings', value: manual.regulatoryFilingsStatus, ragStatus: manual.regulatoryFilingsStatus, note: 'Manual input in source — same here pending the Regulatory Reporting module' },
                    { label: 'Shariah SSB Compliance', value: cpl02?.ragStatus ?? 'NOT_INSTRUMENTED', ragStatus: cpl02?.ragStatus, note: 'Upgraded from manual input to live TPL_13 data' },
                    { label: 'Open Shariah Observations', value: cpl02?.value != null ? Number(cpl02.value) : null, note: 'Upgraded from a hardcoded 0 to a live compliance_check count' },
                    { label: 'SEC Inspection Readiness', value: manual.secInspectionReadinessStatus, ragStatus: manual.secInspectionReadinessStatus, note: 'Manual input in source — no live model exists (Regulatory Reporting module territory)' },
                    { label: 'Next Board Review Due', value: nextReviewDue.toISOString().slice(0, 10), note: '5th of next month — governance cadence, not a financial magnitude' },
                ],
            },
            {
                groupCode: 'BOARD_MATTERS',
                title: 'Panel 6 — Matters Requiring Board Approval',
                note: 'Source confirmed as manually-typed content (not a formula) — this is a content register, not a derived feed',
                tableColumns: ['title', 'detail', 'owner', 'dueLabel'],
                tableRows: await this.actionItems('BOARD'),
            },
        ];
        return { groups, generatedAt: new Date().toISOString() };
    }
    baselineNote(run, isOfficialBaseline) {
        if (!run)
            return 'No stress run performed yet';
        return isOfficialBaseline ? 'Official Board-approved BASELINE' : `No published BASELINE yet — showing latest ${run.runMode} run for reference, NOT an approved figure`;
    }
    totalStressLossesKobo(run) {
        if (!run)
            return null;
        const parameters = run.inputs?.parameters;
        if (!parameters)
            return 0;
        return Object.entries(parameters)
            .filter(([k]) => k.endsWith('Kobo'))
            .reduce((s, [, v]) => s + Number(v), 0);
    }
    async kycComplianceRag() {
        const pending = await this.prisma.investor.count({ where: { kycStatus: { not: 'KYC_COMPLETE' } } });
        return pending === 0 ? 'GREEN' : pending <= 2 ? 'AMBER' : 'RED';
    }
    async amlStatusRag() {
        const pending = await this.prisma.investor.count({ where: { amlStatus: { not: 'CLEARED' } } });
        return pending === 0 ? 'GREEN' : pending <= 2 ? 'AMBER' : 'RED';
    }
    async actionItems(audience) {
        const rows = await this.prisma.dashboardActionItem.findMany({ where: { audience, isActive: true }, orderBy: { createdAt: 'asc' } });
        return rows.map((r) => ({ title: r.title, detail: r.detail, owner: r.owner, dueLabel: r.dueLabel }));
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        board_directive_service_1.BoardDirectiveService,
        reconciliation_service_1.ReconciliationService])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map