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
exports.KriEngineService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const kri_roster_1 = require("./kri-roster");
const kri_engine_types_1 = require("./kri-engine.types");
const aum_util_1 = require("../common/aum.util");
const kyc_periodic_review_util_1 = require("../investor/kyc-periodic-review.util");
let KriEngineService = class KriEngineService {
    prisma;
    audit;
    constructor(prisma, audit) {
        this.prisma = prisma;
        this.audit = audit;
    }
    async seedDefinitions() {
        let count = 0;
        for (const entry of kri_roster_1.KRI_ROSTER) {
            await this.prisma.kriDefinition.upsert({
                where: { code: entry.code },
                create: {
                    code: entry.code,
                    name: entry.name,
                    category: entry.category,
                    direction: entry.direction,
                    isZeroTolerance: entry.isZeroTolerance ?? false,
                    riskAppetiteCategoryRef: entry.riskAppetiteCategoryRef ?? null,
                    computeStatus: entry.computeStatus,
                    notes: entry.notes ?? null,
                },
                update: {
                    name: entry.name,
                    computeStatus: entry.computeStatus,
                    notes: entry.notes ?? null,
                },
            });
            count++;
        }
        return count;
    }
    async runDailyBatch(readingDate) {
        const definitions = await this.prisma.kriDefinition.findMany();
        const matrix = await this.getActiveMatrix();
        let computed = 0;
        let skipped = 0;
        let escalations = 0;
        for (const def of definitions) {
            if (def.computeStatus !== 'INSTRUMENTED') {
                await this.upsertReading({
                    kriCode: def.code,
                    ledgerEntityCode: null,
                    isAggregate: true,
                    readingDate,
                    value: null,
                    ragStatus: 'NOT_INSTRUMENTED',
                    matrixVersionId: null,
                    detail: { reason: def.notes ?? `${def.computeStatus} — not computed this pass` },
                });
                skipped++;
                continue;
            }
            const readings = await this.computeKri(def.code, readingDate);
            for (const r of readings) {
                const informational = def.riskAppetiteCategoryRef == null;
                const rag = informational
                    ? { status: 'INFORMATIONAL', matrixVersionId: null }
                    : this.classifyRag(def.riskAppetiteCategoryRef, def.direction, def.isZeroTolerance, r.value, matrix);
                const reading = await this.upsertReading({
                    kriCode: def.code,
                    ledgerEntityCode: r.ledgerEntityCode,
                    isAggregate: r.isAggregate,
                    readingDate,
                    value: r.value,
                    ragStatus: rag.status,
                    matrixVersionId: rag.matrixVersionId,
                    detail: r.detail ?? null,
                });
                computed++;
                if (rag.status === 'RED') {
                    await this.escalate(reading.id, def.code, r.ledgerEntityCode, matrix, def.riskAppetiteCategoryRef);
                    escalations++;
                }
            }
        }
        await this.audit.record({
            action: 'CREATE',
            entityType: 'kri_batch',
            entityId: readingDate.toISOString().slice(0, 10),
            after: { computed, skipped, escalations },
        });
        return { computed, skipped, escalations };
    }
    async getActiveMatrix() {
        return this.prisma.riskAppetiteMatrixVersion.findFirst({
            where: { status: 'ACTIVE' },
            include: { categories: true },
        });
    }
    classifyRag(categoryRef, direction, isZeroTolerance, value, matrix) {
        if (value === null)
            return { status: 'NOT_INSTRUMENTED', matrixVersionId: null };
        if (!matrix)
            return { status: 'AWAITING_MATRIX', matrixVersionId: null };
        const category = matrix.categories.find((c) => c.riskCategory === categoryRef);
        if (!category)
            return { status: 'AWAITING_MATRIX', matrixVersionId: matrix.id };
        if (isZeroTolerance || category.isZeroTolerance) {
            return { status: value === 0 ? 'GREEN' : 'RED', matrixVersionId: matrix.id };
        }
        const green = category.greenThreshold !== null ? Number(category.greenThreshold) : null;
        const red = category.redThreshold !== null ? Number(category.redThreshold) : null;
        if (green === null || red === null)
            return { status: 'AWAITING_MATRIX', matrixVersionId: matrix.id };
        if (direction === 'HIGHER_BETTER') {
            if (value >= green)
                return { status: 'GREEN', matrixVersionId: matrix.id };
            if (value >= red)
                return { status: 'AMBER', matrixVersionId: matrix.id };
            return { status: 'RED', matrixVersionId: matrix.id };
        }
        if (value <= green)
            return { status: 'GREEN', matrixVersionId: matrix.id };
        if (value <= red)
            return { status: 'AMBER', matrixVersionId: matrix.id };
        return { status: 'RED', matrixVersionId: matrix.id };
    }
    async upsertReading(input) {
        await this.prisma.kriReading.deleteMany({
            where: {
                kriCode: input.kriCode,
                ledgerEntityCode: input.ledgerEntityCode,
                isAggregate: input.isAggregate,
                readingDate: input.readingDate,
            },
        });
        return this.prisma.kriReading.create({
            data: {
                kriCode: input.kriCode,
                ledgerEntityCode: input.ledgerEntityCode,
                isAggregate: input.isAggregate,
                readingDate: input.readingDate,
                value: input.value,
                ragStatus: input.ragStatus,
                matrixVersionId: input.matrixVersionId,
                detail: (input.detail ?? undefined),
            },
        });
    }
    async escalate(kriReadingId, kriCode, ledgerEntityCode, matrix, categoryRef) {
        const category = matrix?.categories.find((c) => c.riskCategory === categoryRef);
        await this.prisma.kriEscalation.create({
            data: {
                kriReadingId,
                kriCode,
                ledgerEntityCode,
                ragStatus: 'RED',
                ownerLabel: category?.escalationOwner ?? null,
            },
        });
        await this.audit.record({
            action: 'CREATE',
            entityType: 'kri_escalation',
            entityId: kriReadingId,
            after: { kriCode, ledgerEntityCode, ownerLabel: category?.escalationOwner ?? null },
        });
    }
    async computeKri(code, readingDate) {
        switch (code) {
            case 'BZ-01': return this.computeRevenueVsBudget(readingDate);
            case 'BZ-04': return this.computeCostCoverageRatio(readingDate);
            case 'BZ-05': return this.computeBreakevenAum(readingDate);
            case 'BZ-06': return this.computeInvestorConcentration();
            case 'CR-01': return this.computeCounterpartyConcentration();
            case 'TR-03': return this.computeCar(readingDate);
            case 'TR-04': return this.computeCapitalSurplus(readingDate);
            case 'TR-06': return this.computeCashPctOfAssets(readingDate);
            case 'TR-02': return this.computeLiquidityRunwayDays(readingDate);
            case 'TR-05': return this.computeRedemptionPressure();
            case 'CPL-01': return this.computeOpenRegulatoryBreaches(readingDate);
            case 'CPL-02': return this.computeShariahNonCompliance();
            case 'CPL-03': return this.computeComplaintAgingBreaches(readingDate);
            case 'CPL-05': return this.computeOverdueKycPeriodicReviews(readingDate);
            case 'CPL-06': return this.computeOpenDataBreachRegisterEntries();
            case 'CPL-07': return this.computeScreeningListFreshness(readingDate);
            case 'POOL-SVC-RATIO': return this.computePoolServicingCostRatio(readingDate);
            case 'HIBAH-FREQ': return this.computeHibahFrequency(readingDate);
            case 'HIBAH-CUML': return this.computeHibahCumulative();
            case 'ND-PROV-AGE': return this.computeProvisionalAccrualAging(readingDate);
            default:
                throw new kri_engine_types_1.KriEngineError(`KRI ${code} is marked INSTRUMENTED but has no compute function wired.`);
        }
    }
    async getActiveBoardApprovedBudget(fiscalYear) {
        return this.prisma.budgetVersion.findFirst({
            where: { fiscalYear, status: 'ACTIVE' },
            include: { lines: { where: { isActive: true }, include: { monthlyAmounts: true } } },
        });
    }
    async companyEntity() {
        return this.prisma.ledgerEntity.findFirstOrThrow({ where: { entityType: 'COMPANY' } });
    }
    async glActuals(ledgerEntityCode, accountType, from, to) {
        const lines = await this.prisma.journalEntryLine.findMany({
            where: {
                account: { ledgerEntityCode, accountType },
                journalEntry: { ledgerEntityCode, entryDate: { gte: from, lte: to } },
            },
        });
        return lines.reduce((sum, l) => sum + (accountType === 'INCOME' ? l.creditKobo - l.debitKobo : l.debitKobo - l.creditKobo), 0n);
    }
    async computeRevenueVsBudget(readingDate) {
        const fy = readingDate.getFullYear();
        const budget = await this.getActiveBoardApprovedBudget(fy);
        const company = await this.companyEntity();
        if (!budget) {
            return [{ ledgerEntityCode: company.code, isAggregate: false, value: null, detail: { reason: 'NO APPROVED BUDGET — variance suspended' } },
                { ledgerEntityCode: null, isAggregate: true, value: null, detail: { reason: 'NO APPROVED BUDGET — variance suspended' } }];
        }
        const month = readingDate.getMonth() + 1;
        const budgetedRevenueKobo = budget.lines
            .filter((l) => l.class === 'REVENUE')
            .flatMap((l) => l.monthlyAmounts.filter((m) => m.month <= month))
            .reduce((s, m) => s + m.amountKobo, 0n);
        const yearStart = new Date(fy, 0, 1);
        const actualRevenueKobo = await this.glActuals(company.code, 'INCOME', yearStart, readingDate);
        const pct = budgetedRevenueKobo > 0n ? Number(actualRevenueKobo) / Number(budgetedRevenueKobo) : null;
        const detail = { actualRevenueKobo: actualRevenueKobo.toString(), budgetedRevenueKobo: budgetedRevenueKobo.toString() };
        return [
            { ledgerEntityCode: company.code, isAggregate: false, value: pct, detail },
            { ledgerEntityCode: null, isAggregate: true, value: pct, detail },
        ];
    }
    async computeCostCoverageRatio(readingDate) {
        const company = await this.companyEntity();
        const monthStart = new Date(readingDate.getFullYear(), readingDate.getMonth(), 1);
        const income = await this.glActuals(company.code, 'INCOME', monthStart, readingDate);
        const expense = await this.glActuals(company.code, 'EXPENSE', monthStart, readingDate);
        const ratio = expense > 0n ? Number(income) / Number(expense) : null;
        const detail = { incomeKobo: income.toString(), expenseKobo: expense.toString() };
        return [
            { ledgerEntityCode: company.code, isAggregate: false, value: ratio, detail },
            { ledgerEntityCode: null, isAggregate: true, value: ratio, detail },
        ];
    }
    async computeBreakevenAum(readingDate) {
        const fy = readingDate.getFullYear();
        const budget = await this.getActiveBoardApprovedBudget(fy);
        const company = await this.companyEntity();
        if (!budget) {
            return [{ ledgerEntityCode: company.code, isAggregate: false, value: null, detail: { reason: 'NO APPROVED BUDGET — variance suspended' } },
                { ledgerEntityCode: null, isAggregate: true, value: null, detail: { reason: 'NO APPROVED BUDGET — variance suspended' } }];
        }
        const fixedCostsKobo = budget.lines
            .filter((l) => l.class !== 'REVENUE' && (l.phasingMethod === 'EVEN_12' || l.phasingMethod === 'FIXED_MONTHLY'))
            .flatMap((l) => l.monthlyAmounts)
            .reduce((s, m) => s + m.amountKobo, 0n);
        const yearStart = new Date(fy, 0, 1);
        const actualRevenueKobo = await this.glActuals(company.code, 'INCOME', yearStart, readingDate);
        const aumKobo = await this.totalAumKobo();
        const feeRate = aumKobo > 0n ? Number(actualRevenueKobo) / Number(aumKobo) : null;
        const breakevenAumKobo = feeRate && feeRate > 0 ? Number(fixedCostsKobo) / feeRate : null;
        const detail = { fixedCostsKobo: fixedCostsKobo.toString(), impliedFeeRate: feeRate, aumKobo: aumKobo.toString() };
        return [
            { ledgerEntityCode: company.code, isAggregate: false, value: breakevenAumKobo, detail },
            { ledgerEntityCode: null, isAggregate: true, value: breakevenAumKobo, detail },
        ];
    }
    async totalAumKobo() {
        return (0, aum_util_1.computeTotalAumKobo)(this.prisma);
    }
    async computeInvestorConcentration() {
        const accounts = await this.prisma.productAccount.findMany({
            where: { status: 'ACTIVE' },
            select: { investorId: true, principalOrCommittedKobo: true },
        });
        const byInvestor = new Map();
        for (const a of accounts)
            byInvestor.set(a.investorId, (byInvestor.get(a.investorId) ?? 0n) + a.principalOrCommittedKobo);
        const mandates = await this.prisma.ndMandateAccount.findMany({
            where: { status: 'ACTIVE', investorId: { not: null }, committedCapitalKobo: { not: null } },
            select: { investorId: true, committedCapitalKobo: true },
        });
        for (const m of mandates) {
            if (!m.investorId)
                continue;
            byInvestor.set(m.investorId, (byInvestor.get(m.investorId) ?? 0n) + (m.committedCapitalKobo ?? 0n));
        }
        const totalKobo = [...byInvestor.values()].reduce((s, v) => s + v, 0n);
        const largest = [...byInvestor.values()].reduce((m, v) => (v > m ? v : m), 0n);
        const pct = totalKobo > 0n ? Number(largest) / Number(totalKobo) : null;
        const detail = { largestInvestorKobo: largest.toString(), totalAumKobo: totalKobo.toString() };
        return [
            { ledgerEntityCode: null, isAggregate: false, value: pct, detail },
            { ledgerEntityCode: null, isAggregate: true, value: pct, detail },
        ];
    }
    async computeCounterpartyConcentration() {
        const placements = await this.prisma.txn.findMany({
            where: { txnType: 'PLACEMENT', status: 'POSTED', counterpartyId: { not: null } },
            select: { counterpartyId: true, amountKobo: true, ledgerEntityCode: true },
        });
        const totalKobo = placements.reduce((s, t) => s + (t.amountKobo < 0n ? -t.amountKobo : t.amountKobo), 0n);
        const byCounterparty = new Map();
        for (const t of placements) {
            const key = t.counterpartyId;
            const abs = t.amountKobo < 0n ? -t.amountKobo : t.amountKobo;
            byCounterparty.set(key, (byCounterparty.get(key) ?? 0n) + abs);
        }
        const largest = [...byCounterparty.values()].reduce((m, v) => (v > m ? v : m), 0n);
        const pct = totalKobo > 0n ? Number(largest) / Number(totalKobo) : null;
        const detail = { largestCounterpartyExposureKobo: largest.toString(), totalExposureKobo: totalKobo.toString(), basis: 'PLACEMENT txns only' };
        return [
            { ledgerEntityCode: null, isAggregate: false, value: pct, detail },
            { ledgerEntityCode: null, isAggregate: true, value: pct, detail },
        ];
    }
    async activeCapitalRequirementKobo(asOf) {
        const row = await this.prisma.regulatoryCapitalRequirement.findFirst({
            where: { effectiveFrom: { lte: asOf } },
            orderBy: { effectiveFrom: 'desc' },
        });
        return row?.requirementKobo ?? null;
    }
    async companyEquityKobo(asOf) {
        const company = await this.companyEntity();
        const lines = await this.prisma.journalEntryLine.findMany({
            where: { account: { ledgerEntityCode: company.code, accountType: 'EQUITY' }, journalEntry: { ledgerEntityCode: company.code, entryDate: { lte: asOf } } },
        });
        return lines.reduce((s, l) => s + (l.creditKobo - l.debitKobo), 0n);
    }
    async computeCar(readingDate) {
        const company = await this.companyEntity();
        const requirementKobo = await this.activeCapitalRequirementKobo(readingDate);
        const equityKobo = await this.companyEquityKobo(readingDate);
        const car = requirementKobo && requirementKobo > 0n ? (Number(equityKobo) / Number(requirementKobo)) * 100 : null;
        const detail = { equityKobo: equityKobo.toString(), requirementKobo: requirementKobo?.toString() ?? null };
        return [
            { ledgerEntityCode: company.code, isAggregate: false, value: car, detail },
            { ledgerEntityCode: null, isAggregate: true, value: car, detail },
        ];
    }
    async computeCapitalSurplus(readingDate) {
        const company = await this.companyEntity();
        const requirementKobo = await this.activeCapitalRequirementKobo(readingDate);
        const equityKobo = await this.companyEquityKobo(readingDate);
        const surplusKobo = requirementKobo !== null ? equityKobo - requirementKobo : null;
        const detail = { equityKobo: equityKobo.toString(), requirementKobo: requirementKobo?.toString() ?? null };
        return [
            { ledgerEntityCode: company.code, isAggregate: false, value: surplusKobo !== null ? Number(surplusKobo) : null, detail },
            { ledgerEntityCode: null, isAggregate: true, value: surplusKobo !== null ? Number(surplusKobo) : null, detail },
        ];
    }
    async computeCashPctOfAssets(readingDate) {
        const company = await this.companyEntity();
        const assetAccounts = await this.prisma.chartOfAccount.findMany({ where: { ledgerEntityCode: company.code, accountType: 'ASSET' } });
        const cashAccounts = assetAccounts.filter((a) => /cash/i.test(a.accountName));
        const balanceOf = async (accountIds) => {
            if (accountIds.length === 0)
                return 0n;
            const lines = await this.prisma.journalEntryLine.findMany({
                where: { accountId: { in: accountIds }, journalEntry: { entryDate: { lte: readingDate } } },
            });
            return lines.reduce((s, l) => s + (l.debitKobo - l.creditKobo), 0n);
        };
        const totalAssetsKobo = await balanceOf(assetAccounts.map((a) => a.id));
        const cashKobo = await balanceOf(cashAccounts.map((a) => a.id));
        const pct = totalAssetsKobo > 0n ? Number(cashKobo) / Number(totalAssetsKobo) : null;
        const detail = { cashKobo: cashKobo.toString(), totalAssetsKobo: totalAssetsKobo.toString() };
        return [
            { ledgerEntityCode: company.code, isAggregate: false, value: pct, detail },
            { ledgerEntityCode: null, isAggregate: true, value: pct, detail },
        ];
    }
    async computeLiquidityRunwayDays(readingDate) {
        const company = await this.companyEntity();
        const assetAccounts = await this.prisma.chartOfAccount.findMany({ where: { ledgerEntityCode: company.code, accountType: 'ASSET' } });
        const cashAccounts = assetAccounts.filter((a) => /cash/i.test(a.accountName));
        const cashAccountIds = cashAccounts.map((a) => a.id);
        const cashLines = cashAccountIds.length
            ? await this.prisma.journalEntryLine.findMany({ where: { accountId: { in: cashAccountIds }, journalEntry: { entryDate: { lte: readingDate } } } })
            : [];
        const cashKobo = cashLines.reduce((s, l) => s + (l.debitKobo - l.creditKobo), 0n);
        const windowDays = 90;
        const windowStart = new Date(readingDate.getTime() - windowDays * 24 * 60 * 60 * 1000);
        const [reds, subs] = await Promise.all([
            this.prisma.txn.aggregate({ where: { txnType: 'REDEMPTION', valueDate: { gte: windowStart, lte: readingDate } }, _sum: { amountKobo: true } }),
            this.prisma.txn.aggregate({ where: { txnType: 'SUBSCRIPTION', valueDate: { gte: windowStart, lte: readingDate } }, _sum: { amountKobo: true } }),
        ]);
        const redemptionsKobo = reds._sum.amountKobo ? (reds._sum.amountKobo < 0n ? -reds._sum.amountKobo : reds._sum.amountKobo) : 0n;
        const subscriptionsKobo = subs._sum.amountKobo ?? 0n;
        const netOutflowKobo = Number(redemptionsKobo) - Number(subscriptionsKobo);
        const dailyBurnKobo = netOutflowKobo / windowDays;
        const runwayDays = dailyBurnKobo > 0 ? Number(cashKobo) / dailyBurnKobo : null;
        const detail = { cashKobo: cashKobo.toString(), redemptionsKobo: redemptionsKobo.toString(), subscriptionsKobo: subscriptionsKobo.toString(), windowDays };
        return [
            { ledgerEntityCode: company.code, isAggregate: false, value: runwayDays, detail },
            { ledgerEntityCode: null, isAggregate: true, value: runwayDays, detail },
        ];
    }
    async computeRedemptionPressure() {
        const company = await this.companyEntity();
        const pending = await this.prisma.subscriptionRequest.aggregate({
            where: { requestType: 'REDEMPTION', status: 'PENDING' },
            _sum: { amountKobo: true },
        });
        const pendingKobo = pending._sum.amountKobo ?? 0n;
        const totalAumKobo = await (0, aum_util_1.computeTotalAumKobo)(this.prisma);
        const pct = totalAumKobo > 0n ? (Number(pendingKobo) / Number(totalAumKobo)) * 100 : null;
        const detail = { pendingRedemptionKobo: pendingKobo.toString(), totalAumKobo: totalAumKobo.toString() };
        return [
            { ledgerEntityCode: company.code, isAggregate: false, value: pct, detail },
            { ledgerEntityCode: null, isAggregate: true, value: pct, detail },
        ];
    }
    async computeOpenRegulatoryBreaches(readingDate) {
        const calendars = await this.prisma.regulatoryFilingCalendar.findMany({ where: { isActive: true } });
        let overdue = 0;
        const overdueTemplateCodes = [];
        for (const cal of calendars) {
            if (cal.deadlineDayOfMonth == null)
                continue;
            const deadline = new Date(readingDate.getFullYear(), readingDate.getMonth(), cal.deadlineDayOfMonth);
            if (readingDate <= deadline)
                continue;
            const periodStart = new Date(deadline.getFullYear(), deadline.getMonth() - 1, 1);
            const filed = await this.prisma.regulatoryFilingRun.findFirst({
                where: { regulatorTemplateId: cal.regulatorTemplateId, ledgerEntityCode: cal.ledgerEntityCode, periodStart: { gte: periodStart }, status: { in: ['CERTIFIED', 'FILED'] } },
            });
            if (!filed) {
                overdue++;
                const tpl = await this.prisma.regulatorTemplate.findUnique({ where: { id: cal.regulatorTemplateId } });
                if (tpl)
                    overdueTemplateCodes.push(tpl.templateCode);
            }
        }
        const detail = { source: 'regulatory_filing_calendar vs regulatory_filing_run', overdueTemplateCodes };
        return [
            { ledgerEntityCode: null, isAggregate: false, value: overdue, detail },
            { ledgerEntityCode: null, isAggregate: true, value: overdue, detail },
        ];
    }
    async computeOverdueKycPeriodicReviews(readingDate) {
        const [counterpartyCases, investorCases] = await Promise.all([
            this.prisma.counterpartyOnboardingCase.findMany({
                where: { periodicReviewFrequency: { not: null }, counterparty: { onboardingStatus: 'COMPLETE_APPROVED' } },
                select: { lastPeriodicReviewAt: true, periodicReviewFrequency: true, updatedAt: true },
            }),
            this.prisma.investorOnboardingCase.findMany({
                where: { periodicReviewFrequency: { not: null } },
                select: { lastPeriodicReviewAt: true, periodicReviewFrequency: true, updatedAt: true },
            }),
        ]);
        const count = [...counterpartyCases, ...investorCases].filter((c) => (0, kyc_periodic_review_util_1.isPeriodicReviewOverdue)(c.lastPeriodicReviewAt, c.updatedAt, c.periodicReviewFrequency, readingDate)).length;
        return [
            { ledgerEntityCode: null, isAggregate: false, value: count, detail: { source: 'counterparty_onboarding_case + investor_onboarding_case' } },
            { ledgerEntityCode: null, isAggregate: true, value: count },
        ];
    }
    async computeShariahNonCompliance() {
        const count = await this.prisma.complianceCheck.count({ where: { NOT: { result: 'COMPLIANT' } } });
        return [
            { ledgerEntityCode: null, isAggregate: false, value: count, detail: { source: 'TPL_13 compliance_check' } },
            { ledgerEntityCode: null, isAggregate: true, value: count },
        ];
    }
    async computeComplaintAgingBreaches(readingDate) {
        const config = await this.prisma.complaintSlaConfig.findFirst({ where: { status: 'ACTIVE' }, orderBy: { version: 'desc' } });
        let count = 0;
        if (config) {
            const open = await this.prisma.complaint.findMany({ where: { status: { in: ['OPEN', 'IN_PROGRESS'] } } });
            count = open.filter((c) => {
                if (readingDate.getTime() > c.slaDueAt.getTime())
                    return true;
                const totalMs = c.slaDueAt.getTime() - c.receivedAt.getTime();
                const elapsedMs = readingDate.getTime() - c.receivedAt.getTime();
                return totalMs > 0 && (elapsedMs / totalMs) * 100 >= config.amberThresholdPct;
            }).length;
        }
        const detail = { source: 'complaint vs complaint_sla_config', hasActiveConfig: !!config };
        return [
            { ledgerEntityCode: null, isAggregate: false, value: count, detail },
            { ledgerEntityCode: null, isAggregate: true, value: count, detail },
        ];
    }
    async computeOpenDataBreachRegisterEntries() {
        const count = await this.prisma.dataBreachRegisterEntry.count({ where: { status: { not: 'CLOSED' } } });
        const detail = { source: 'data_breach_register_entry where status != CLOSED' };
        return [
            { ledgerEntityCode: null, isAggregate: false, value: count, detail },
            { ledgerEntityCode: null, isAggregate: true, value: count, detail },
        ];
    }
    async computeScreeningListFreshness(readingDate) {
        const activeSources = await this.prisma.screeningListSource.findMany({ where: { isActive: true, isParked: false } });
        if (activeSources.length === 0) {
            return [{ ledgerEntityCode: null, isAggregate: true, value: null, detail: { reason: 'No ScreeningListSource is both ACTIVE and non-parked yet.' } }];
        }
        const perSource = activeSources.map((s) => ({
            sourceCode: s.sourceCode,
            daysSince: s.lastSuccessfulDownloadAt
                ? Math.floor((readingDate.getTime() - s.lastSuccessfulDownloadAt.getTime()) / (1000 * 60 * 60 * 24))
                : null,
        }));
        const neverDownloaded = perSource.filter((p) => p.daysSince === null).map((p) => p.sourceCode);
        const knownDays = perSource.map((p) => p.daysSince).filter((d) => d !== null);
        const worstDays = knownDays.length > 0 ? Math.max(...knownDays) : null;
        return [{
                ledgerEntityCode: null,
                isAggregate: true,
                value: worstDays,
                detail: { perSource, neverDownloaded },
            }];
    }
    async computePoolServicingCostRatio(readingDate) {
        const company = await this.companyEntity();
        const monthStart = new Date(readingDate.getFullYear(), readingDate.getMonth(), 1);
        const servicingAccounts = await this.prisma.chartOfAccount.findMany({
            where: { ledgerEntityCode: company.code, accountType: 'EXPENSE', accountName: { contains: 'Pool Servicing', mode: 'insensitive' } },
        });
        const servicingLines = servicingAccounts.length
            ? await this.prisma.journalEntryLine.findMany({ where: { accountId: { in: servicingAccounts.map((a) => a.id) }, journalEntry: { entryDate: { gte: monthStart, lte: readingDate } } } })
            : [];
        const servicingOpexKobo = servicingLines.reduce((s, l) => s + (l.debitKobo - l.creditKobo), 0n);
        const pool = await this.prisma.ledgerEntity.findFirst({ where: { entityType: 'POOL' } });
        let mudaribPsrIncomeKobo = 0n;
        if (pool) {
            const distributions = await this.prisma.distribution.findMany({ where: { ledgerEntityCode: pool.code, status: { in: ['DECLARED', 'PAID'] } } });
            mudaribPsrIncomeKobo = distributions.reduce((s, d) => s + d.retainedOrMudaribBaseKobo, 0n);
        }
        const ratio = mudaribPsrIncomeKobo > 0n ? Number(servicingOpexKobo) / Number(mudaribPsrIncomeKobo) : null;
        const detail = { servicingOpexKobo: servicingOpexKobo.toString(), mudaribPsrIncomeKobo: mudaribPsrIncomeKobo.toString() };
        return [
            { ledgerEntityCode: pool?.code ?? null, isAggregate: false, value: ratio, detail },
            { ledgerEntityCode: null, isAggregate: true, value: ratio, detail },
        ];
    }
    async computeHibahFrequency(readingDate) {
        const yearStart = new Date(readingDate.getFullYear(), 0, 1);
        const rows = await this.prisma.hibahRecord.findMany({ where: { createdAt: { gte: yearStart, lte: readingDate } } });
        const byEntity = new Map();
        for (const r of rows)
            byEntity.set(r.ledgerEntityCode, (byEntity.get(r.ledgerEntityCode) ?? 0) + 1);
        const out = [...byEntity.entries()].map(([ledgerEntityCode, count]) => ({ ledgerEntityCode, isAggregate: false, value: count }));
        out.push({ ledgerEntityCode: null, isAggregate: true, value: rows.length, detail: { lossPeriodCount: rows.filter((r) => r.isLossPeriod).length } });
        return out;
    }
    async computeHibahCumulative() {
        const rows = await this.prisma.hibahRecord.findMany();
        const byEntity = new Map();
        for (const r of rows)
            byEntity.set(r.ledgerEntityCode, (byEntity.get(r.ledgerEntityCode) ?? 0n) + r.amountKobo);
        const totalKobo = [...byEntity.values()].reduce((s, v) => s + v, 0n);
        const out = [...byEntity.entries()].map(([ledgerEntityCode, kobo]) => ({ ledgerEntityCode, isAggregate: false, value: Number(kobo) }));
        out.push({ ledgerEntityCode: null, isAggregate: true, value: Number(totalKobo) });
        return out;
    }
    async computeProvisionalAccrualAging(readingDate) {
        const config = await this.prisma.kriEngineConfig.findUnique({ where: { id: 1 } }) ?? await this.prisma.kriEngineConfig.create({ data: { id: 1 } });
        const cutoff = new Date(readingDate);
        cutoff.setDate(cutoff.getDate() - config.provisionalAccrualAgingDays);
        const stale = await this.prisma.ndMandateProvisionalAccrual.findMany({
            where: { status: 'PROVISIONAL', accrualDate: { lt: cutoff } },
        });
        const detail = { agingThresholdDays: config.provisionalAccrualAgingDays, sampleAccrualIds: stale.slice(0, 5).map((s) => s.id) };
        return [
            { ledgerEntityCode: null, isAggregate: false, value: stale.length, detail },
            { ledgerEntityCode: null, isAggregate: true, value: stale.length, detail },
        ];
    }
};
exports.KriEngineService = KriEngineService;
exports.KriEngineService = KriEngineService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService])
], KriEngineService);
//# sourceMappingURL=kri-engine.service.js.map