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
exports.BudgetExtractionService = void 0;
exports.parseWorkbookNumber = parseWorkbookNumber;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const csv_parser_1 = require("../migration/csv-parser");
const budget_types_1 = require("./budget.types");
const MONTHS = 12;
const TOLERANCE_NAIRA = 1.0;
let BudgetExtractionService = class BudgetExtractionService {
    prisma;
    audit;
    delegation;
    constructor(prisma, audit, delegation) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
    }
    parseGroupedSheet(csvContent, opts) {
        const rows = (0, csv_parser_1.parseCsvRows)(csvContent);
        const lines = [];
        let currentGroup = null;
        const endRow = opts.endRow ?? rows.length;
        for (let i = opts.startRow; i < endRow && i < rows.length; i++) {
            const row = rows[i];
            const label = (row[opts.labelCol] ?? '').trim();
            if (!label)
                continue;
            if (/,\s*Total$/i.test(label) || /^total$/i.test(label))
                continue;
            const monthly = [];
            for (let m = 0; m < MONTHS; m++)
                monthly.push(parseWorkbookNumber(row[opts.firstMonthCol + m]));
            const allBlank = monthly.every((v) => v === null);
            if (allBlank) {
                currentGroup = label;
                continue;
            }
            const total = opts.totalCol !== null ? parseWorkbookNumber(row[opts.totalCol]) : null;
            lines.push({
                label,
                groupLabel: currentGroup ?? label,
                monthlyValues: monthly.map((v) => v ?? 0),
                exportedTotal: total,
                sourceRowRef: `row${i + 1}`,
            });
        }
        return lines;
    }
    buildFormulaLookup(csvContent, opts) {
        const rows = (0, csv_parser_1.parseCsvRows)(csvContent);
        const map = new Map();
        for (let i = opts.startRow; i < rows.length; i++) {
            const row = rows[i];
            const label = (row[opts.labelCol] ?? '').trim();
            if (!label)
                continue;
            const formulas = [];
            for (let m = 0; m < MONTHS; m++)
                formulas.push(row[opts.firstMonthCol + m] ?? '');
            map.set(label, formulas);
        }
        return map;
    }
    classifyLine(line, formulas) {
        let phasingMethod = 'ACTUAL_PHASED';
        let driverBasis = null;
        let driverRateOrFactor = null;
        let escalatorFactors = null;
        let isActive = true;
        let flaggedReason = null;
        let valuesAsGiven = false;
        const formulaText = (formulas ?? []).join(' | ');
        if (/Existing Investors 2025/i.test(formulaText)) {
            valuesAsGiven = true;
            flaggedReason = "BQ-9: driver formula references the unexported 'Existing Investors 2025' sheet — values resolve from the VALUES export, but the driver source itself is unverifiable.";
        }
        const fumMatch = formulaText.match(/Private Portfolio[^|]*!\s*[A-Z]+25[^|]*?(\d+(?:\.\d+)?)\s*%/i);
        const mobMatch = formulaText.match(/Private Portfolio[^|]*!\s*[A-Z]+23[^|]*?(\d+(?:\.\d+)?)\s*%/i);
        if (fumMatch) {
            phasingMethod = 'DRIVER_PCT_OF_FUM';
            driverBasis = 'FUM_MONTHLY (sheet 02 row 25 — Total Funds available)';
            driverRateOrFactor = Number(fumMatch[1]) / 100;
        }
        else if (mobMatch) {
            phasingMethod = 'DRIVER_PCT_OF_MOBILIZATION';
            driverBasis = 'MOBILIZATION_MONTHLY (sheet 02 row 23 — Total Funds Mobilization)';
            driverRateOrFactor = Number(mobMatch[1]) / 100;
        }
        else if (/2025 Data Actual/i.test(formulaText)) {
            phasingMethod = 'PRIOR_YEAR_UPLIFT';
            driverBasis = "PRIOR_YEAR_ACTUAL ('13_2025 Data Actual')";
        }
        else {
            const vals = line.monthlyValues;
            const allEqual = vals.every((v) => Math.abs(v - vals[0]) < 0.01);
            if (allEqual && vals[0] !== 0) {
                phasingMethod = 'EVEN_12';
            }
            else if (allEqual && vals[0] === 0) {
                phasingMethod = 'FIXED_MONTHLY';
            }
            else {
                const ratios = [];
                let escalating = true;
                for (let m = 1; m < MONTHS; m++) {
                    if (vals[m - 1] === 0) {
                        escalating = false;
                        break;
                    }
                    ratios.push(round4(vals[m] / vals[m - 1]));
                }
                const ratioSpread = escalating ? Math.max(...ratios) - Math.min(...ratios) : Infinity;
                if (escalating && ratioSpread < 0.02 && Math.abs(ratios[0] - 1) > 0.0005) {
                    phasingMethod = 'ESCALATING_MONTHLY';
                    escalatorFactors = ratios;
                }
                else {
                    phasingMethod = 'ACTUAL_PHASED';
                }
            }
        }
        if (/^commission$/i.test(line.label.trim())) {
            isActive = false;
            flaggedReason = 'BQ-8: sheet-01 narrative states "45% of new funds mobilization" vs the actual formula (0.2% of monthly mobilization) — a 225x discrepancy. FinCon must state which governs before this line activates.';
        }
        return { ...line, phasingMethod, driverBasis, driverRateOrFactor, escalatorFactors, isActive, flaggedReason, valuesAsGiven };
    }
    gateMonthlyEqualsFy(line) {
        if (line.exportedTotal === null) {
            return { gate: 'monthly-sum-equals-fy', description: 'Sigma monthly = FY total +-N1', passed: true, detail: `${line.label}: no FY total column exported to check against` };
        }
        const sum = line.monthlyValues.reduce((s, v) => s + v, 0);
        const diff = Math.abs(sum - line.exportedTotal);
        return {
            gate: 'monthly-sum-equals-fy',
            description: 'Sigma monthly = FY total +-N1',
            passed: diff <= TOLERANCE_NAIRA,
            detail: `${line.label}: Sigma monthly=${sum.toFixed(2)} vs FY total=${line.exportedTotal.toFixed(2)}, diff=${diff.toFixed(2)}`,
        };
    }
    gateDetailEqualsControlTotal(groupLabel, month, detailSum, controlTotal) {
        if (controlTotal === null) {
            return { gate: 'detail-equals-control-total', description: 'Sigma detail = sheet-05 control total per category +-N1', passed: true, detail: `${groupLabel} month ${month}: no sheet-05 control row matched (see extraction report notes)` };
        }
        const diff = Math.abs(detailSum - controlTotal);
        return {
            gate: 'detail-equals-control-total',
            description: 'Sigma detail = sheet-05 control total per category +-N1',
            passed: diff <= TOLERANCE_NAIRA,
            detail: `${groupLabel} month ${month}: detail Sigma=${detailSum.toFixed(2)} vs sheet-05 control=${controlTotal.toFixed(2)}, diff=${diff.toFixed(2)}`,
        };
    }
    gateDriverRecomputation(line, driverSeries) {
        if (line.phasingMethod !== 'DRIVER_PCT_OF_FUM' && line.phasingMethod !== 'DRIVER_PCT_OF_MOBILIZATION') {
            return [{ gate: 'driver-recomputation', description: 'Driver recomputation reproduces exported VALUES +-N1', passed: true, detail: `${line.label}: not a driver-phased line, n/a` }];
        }
        const results = [];
        for (let m = 0; m < MONTHS; m++) {
            const recomputed = driverSeries[m] * (line.driverRateOrFactor ?? 0) * (line.phasingMethod === 'DRIVER_PCT_OF_FUM' ? 1 / 12 : 1);
            const exported = line.monthlyValues[m];
            const diff = Math.abs(recomputed - exported);
            results.push({
                gate: 'driver-recomputation',
                description: 'Driver recomputation reproduces exported VALUES +-N1',
                passed: diff <= TOLERANCE_NAIRA,
                detail: `${line.label} month ${m + 1}: recomputed=${recomputed.toFixed(2)} vs exported=${exported.toFixed(2)}, diff=${diff.toFixed(2)}`,
            });
        }
        return results;
    }
    async createBudgetVersion(fiscalYear, scenarioLabel, status, proposedByUserId) {
        await this.assertCapability(proposedByUserId, 'BUDGET_MANAGEMENT', 'INITIATE', 'create a budget version');
        const version = await this.prisma.budgetVersion.upsert({
            where: { fiscalYear_scenarioLabel: { fiscalYear, scenarioLabel } },
            create: { fiscalYear, scenarioLabel, status, proposedByUserId },
            update: { status },
        });
        await this.audit.record({
            actorUserId: proposedByUserId,
            action: 'CREATE',
            entityType: 'budget_version',
            entityId: version.id,
            after: { fiscalYear, scenarioLabel, status },
        });
        return version;
    }
    async listBudgetVersions() {
        return this.prisma.budgetVersion.findMany({
            orderBy: [{ fiscalYear: 'desc' }, { scenarioLabel: 'asc' }],
            include: { _count: { select: { lines: true } } },
        });
    }
    async listBudgetLines(budgetVersionId) {
        return this.prisma.budgetLine.findMany({
            where: { budgetVersionId },
            orderBy: [{ budgetLineGroup: 'asc' }, { lineDescription: 'asc' }],
        });
    }
    async saveBudgetLine(budgetVersionId, ledgerEntityCode, line, cls, sourceSheet) {
        const existing = await this.prisma.budgetLine.findFirst({
            where: { budgetVersionId, lineDescription: line.label, sourceSheetRef: `${sourceSheet}:${line.sourceRowRef}` },
        });
        const budgetLine = existing
            ? await this.prisma.budgetLine.update({
                where: { id: existing.id },
                data: {
                    budgetLineGroup: normalizeGroupLabel(line.groupLabel),
                    class: cls,
                    phasingMethod: line.phasingMethod,
                    driverBasis: line.driverBasis,
                    driverRateOrFactor: line.driverRateOrFactor,
                    escalatorFactorsJson: line.escalatorFactors ?? undefined,
                    isActive: line.isActive,
                    flaggedReason: line.flaggedReason,
                    valuesAsGiven: line.valuesAsGiven,
                },
            })
            : await this.prisma.budgetLine.create({
                data: {
                    budgetVersionId,
                    ledgerEntityCode,
                    budgetLineGroup: normalizeGroupLabel(line.groupLabel),
                    lineDescription: line.label,
                    class: cls,
                    phasingMethod: line.phasingMethod,
                    driverBasis: line.driverBasis,
                    driverRateOrFactor: line.driverRateOrFactor,
                    escalatorFactorsJson: line.escalatorFactors ?? undefined,
                    sourceSheetRef: `${sourceSheet}:${line.sourceRowRef}`,
                    isActive: line.isActive,
                    flaggedReason: line.flaggedReason,
                    valuesAsGiven: line.valuesAsGiven,
                },
            });
        for (let m = 0; m < MONTHS; m++) {
            const amountKobo = BigInt(Math.round(line.monthlyValues[m] * 100));
            await this.prisma.budgetLineMonthlyAmount.upsert({
                where: { budgetLineId_month: { budgetLineId: budgetLine.id, month: m + 1 } },
                create: { budgetLineId: budgetLine.id, month: m + 1, amountKobo },
                update: { amountKobo },
            });
        }
        return budgetLine;
    }
    async saveBudgetTarget(budgetVersionId, targetType, month, value, unit, sourceSheetRef) {
        return this.prisma.budgetTarget.create({
            data: { budgetVersionId, targetType, month, value, unit, sourceSheetRef },
        });
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'budget_activity', entityId: activity, after: { functionCode, level } });
            throw new budget_types_1.BudgetExtractionError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.BudgetExtractionService = BudgetExtractionService;
exports.BudgetExtractionService = BudgetExtractionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService])
], BudgetExtractionService);
function normalizeGroupLabel(label) {
    if (/\bNPF\b|\bNPT\b/i.test(label))
        return 'NPT_NPF_INCOME';
    return label.trim();
}
function round4(n) {
    return Math.round(n * 10000) / 10000;
}
function parseWorkbookNumber(value) {
    if (!value)
        return null;
    const cleaned = value.replace(/₦/g, '').replace(/,/g, '').replace(/^"|"$/g, '').trim();
    if (cleaned === '' || cleaned === '-')
        return null;
    const n = Number(cleaned);
    return Number.isFinite(n) ? n : null;
}
//# sourceMappingURL=budget-extraction.service.js.map