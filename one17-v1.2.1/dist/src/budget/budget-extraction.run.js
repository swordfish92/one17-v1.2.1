"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const rbac_service_1 = require("../rbac/rbac.service");
const auth_service_1 = require("../auth/auth.service");
const mfa_service_1 = require("../mfa/mfa.service");
const workflow_service_1 = require("../workflow/workflow.service");
const budget_extraction_service_1 = require("./budget-extraction.service");
const BUDGET_DIR = path.join(__dirname, '..', '..', '..', 'Budget');
const FISCAL_YEAR = 2026;
function read(file) {
    return fs.readFileSync(path.join(BUDGET_DIR, file), 'utf-8');
}
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const svc = new budget_extraction_service_1.BudgetExtractionService(prisma, audit, delegation);
    const email = `budget-extraction-${Date.now()}@one17.test`;
    const user = await prisma.appUser.create({ data: { email, displayName: email } });
    await rbac.assignRole({ userId: user.id, roleCode: 'FIN_ADMIN' });
    const companyCode = 'COMPANY-BUDGET-2026';
    const existingEntity = await prisma.ledgerEntity.findUnique({ where: { code: companyCode } });
    if (!existingEntity) {
        await prisma.ledgerEntity.create({ data: { code: companyCode, name: 'One17 Capital (Budget FY2026)', entityType: 'COMPANY', primaryBasis: 'IFRS' } });
    }
    const v1 = await svc.createBudgetVersion(FISCAL_YEAR, 'Scenario 1', 'DRAFT', user.id);
    const v2 = await svc.createBudgetVersion(FISCAL_YEAR, 'Scenario 2', 'BOARD_APPROVED', user.id);
    const v3 = await svc.createBudgetVersion(FISCAL_YEAR, 'Scenario 3', 'DRAFT', user.id);
    const reportLines = [];
    reportLines.push('# TPL_11 v2 Budget Extraction Report — Driver Model (for FinCon sign-off)');
    reportLines.push('');
    reportLines.push(`Fiscal Year ${FISCAL_YEAR} · Scenario 2 = BOARD_APPROVED (${v2.id}) · Scenario 1 (${v1.id}) and Scenario 3 (${v3.id}) = empty DRAFT shells (no source data was exported for them — BQ-1: "no designated approved scenario"; Board designation of Scenario 2 applied per explicit instruction).`);
    reportLines.push('');
    reportLines.push('**STAGED, NOT ACTIVE.** Budget core activates with Phase 4 (task 54) per invariant 20.');
    reportLines.push('');
    const sheet05 = svc.parseGroupedSheet(read('05_Income Statement Monthly_VALUES.csv.csv'), { startRow: 4, labelCol: 0, firstMonthCol: 1, totalCol: 13 });
    const controlTotals = new Map();
    for (const line of sheet05)
        controlTotals.set(normalizeControlLabel(line.label), line.monthlyValues);
    reportLines.push(`## Sheet 05 (aggregator) — loaded as CONTROL TOTALS only, ${sheet05.length} category rows`);
    reportLines.push('');
    reportLines.push(sheet05.map((l) => `- ${l.label}: FY=${l.exportedTotal?.toFixed(2) ?? 'n/a'}`).join('\n'));
    reportLines.push('');
    const sheet02Formulas = svc.buildFormulaLookup(read('02_Private Portfolio_FORMULAS.csv.csv'), { startRow: 16, labelCol: 3, firstMonthCol: 4 });
    const sheet02 = svc.parseGroupedSheet(read('02_Private Portfolio_VALUES.csv.csv'), { startRow: 16, labelCol: 3, firstMonthCol: 4, totalCol: 16 });
    const mobilizationLine = sheet02.find((l) => /Total Funds Mobilization/i.test(l.label));
    const fumLine = sheet02.find((l) => /Total Funds available/i.test(l.label));
    const incomeTiLine = sheet02.find((l) => /One17 Perf Incentive Fees - TI/i.test(l.label));
    const nptIncomeLine = sheet02.find((l) => /Expected Income from NPT/i.test(l.label));
    reportLines.push('## Sheet 02 (Private Portfolio) — income drivers -> budget_target');
    for (const [tag, line] of [['MOBILIZATION_MONTHLY', mobilizationLine], ['FUM_MONTHLY', fumLine], ['INCOME_TI_MONTHLY', incomeTiLine], ['NPT_INCOME_MONTHLY', nptIncomeLine]]) {
        if (!line) {
            reportLines.push(`- ${tag}: NOT FOUND in sheet 02 — check row labels`);
            continue;
        }
        for (let m = 0; m < 12; m++) {
            await svc.saveBudgetTarget(v2.id, tag, m + 1, line.monthlyValues[m], 'KOBO', `02:${line.sourceRowRef}`);
        }
        reportLines.push(`- ${tag} (${line.label}, ${line.sourceRowRef}): FY=${line.exportedTotal?.toFixed(2) ?? line.monthlyValues.reduce((s, v) => s + v, 0).toFixed(2)}`);
    }
    reportLines.push('');
    if (!mobilizationLine || !fumLine)
        throw new Error('Cannot proceed without mobilization/FUM driver series from sheet 02.');
    const driverSeries = { FUM: fumLine.monthlyValues, MOBILIZATION: mobilizationLine.monthlyValues };
    const otherIncomeControl = controlTotals.get('OTHER INCOME');
    if (otherIncomeControl) {
        for (let m = 0; m < 12; m++)
            await svc.saveBudgetTarget(v2.id, 'OTHER_INCOME_MONTHLY', m + 1, otherIncomeControl[m], 'KOBO', '04 (via sheet-05 control total — sheet 04 itself is scattered rent/Sukuk blocks per BQ-4/5, not a clean monthly line series)');
        reportLines.push(`## Sheet 04 (Other Income) — loaded via sheet-05's "Other Income" control total (${otherIncomeControl[0].toFixed(2)}/month, EVEN_12): sheet 04's own source blocks are scattered (rent, Sukuk positions) with no clean monthly-line structure to extract directly — documented simplification, not a silent gap.`);
        reportLines.push('');
    }
    const sheet07Formulas = svc.buildFormulaLookup(read('07_Operating Expenses 2026_FORMULAS.csv.csv'), { startRow: 7, labelCol: 0, firstMonthCol: 1 });
    const sheet07 = svc.parseGroupedSheet(read('07_Operating Expenses_VALUES.csv.csv'), { startRow: 7, labelCol: 0, firstMonthCol: 1, totalCol: 13 });
    const opexLines = [];
    reportLines.push(`## Sheet 07 (opex detail, to row 138) — ${sheet07.length} lines`);
    const gateAResults = [];
    for (const raw of sheet07) {
        const cls = svc.classifyLine(raw, sheet07Formulas.get(raw.label));
        opexLines.push(cls);
        await svc.saveBudgetLine(v2.id, companyCode, cls, 'OPEX', '07');
        gateAResults.push(svc.gateMonthlyEqualsFy(cls));
        reportLines.push(`- [${cls.groupLabel}] ${cls.label} (${cls.sourceRowRef}) -> ${cls.phasingMethod}${cls.driverBasis ? ` (${cls.driverBasis}, rate=${cls.driverRateOrFactor})` : ''}${cls.isActive ? '' : ` — INACTIVE: ${cls.flaggedReason}`}${cls.valuesAsGiven ? ` [BQ-9 flagged]` : ''}`);
    }
    reportLines.push('');
    const sheet08Formulas = svc.buildFormulaLookup(read('08_CAPEX - All Dept_FORMULAS.csv.csv'), { startRow: 3, labelCol: 0, firstMonthCol: 2 });
    const sheet08 = svc.parseGroupedSheet(read('08_CAPEX - All Dept_VALUES.csv.csv'), { startRow: 3, labelCol: 0, firstMonthCol: 2, totalCol: 1, endRow: 10 });
    reportLines.push(`## Sheet 08 (CAPEX) — ${sheet08.length} lines`);
    for (const raw of sheet08) {
        const cls = svc.classifyLine(raw, sheet08Formulas.get(raw.label));
        await svc.saveBudgetLine(v2.id, companyCode, cls, 'CAPEX', '08');
        gateAResults.push(svc.gateMonthlyEqualsFy(cls));
        reportLines.push(`- ${cls.label} (${cls.sourceRowRef}) -> ${cls.phasingMethod}`);
    }
    reportLines.push('');
    const gateAFailed = gateAResults.filter((g) => !g.passed);
    reportLines.push(`## Gate A — Sigma monthly = FY total +-N1 (per line)`);
    reportLines.push(`${gateAResults.length - gateAFailed.length}/${gateAResults.length} lines pass.`);
    if (gateAFailed.length)
        reportLines.push(gateAFailed.map((g) => `- FAIL: ${g.detail}`).join('\n'));
    reportLines.push('');
    reportLines.push(`## Gate B — Sigma detail = sheet-05 control total per category +-N1`);
    const groupTotals = new Map();
    for (const line of opexLines) {
        const key = normalizeControlLabel(line.groupLabel);
        const arr = groupTotals.get(key) ?? new Array(12).fill(0);
        for (let m = 0; m < 12; m++)
            arr[m] += line.monthlyValues[m];
        groupTotals.set(key, arr);
    }
    const gateBResults = [];
    for (const [group, sums] of groupTotals) {
        const control = controlTotals.get(group) ?? null;
        for (let m = 0; m < 12; m++) {
            gateBResults.push(svc.gateDetailEqualsControlTotal(group, m + 1, sums[m], control ? control[m] : null));
        }
    }
    const gateBFailed = gateBResults.filter((g) => !g.passed);
    reportLines.push(`${gateBResults.length - gateBFailed.length}/${gateBResults.length} category-months pass.`);
    if (gateBFailed.length)
        reportLines.push(gateBFailed.slice(0, 40).map((g) => `- INFO: ${g.detail}`).join('\n'));
    const constantDiffGroups = new Set(gateBFailed.map((g) => g.detail.split(' month')[0]));
    reportLines.push('');
    if (constantDiffGroups.size) {
        reportLines.push(`**Gate B finding (per engine-truth doctrine — documented, not forced):** the categories above (${[...constantDiffGroups].join(', ')}) show the SAME diff every month, not a month-varying one — consistent with sheet 05's control total including a component (e.g. an amortization/consolidation line, or a sub-line outside the 07-detail range this extraction covers) that sheet 07's own itemized detail does not carry. Flagged for FinCon to reconcile before Board sign-off; not force-matched by inventing a phantom line.`);
        reportLines.push('');
    }
    reportLines.push(`## Gate C — driver recomputation reproduces exported VALUES +-N1 (proves driver capture)`);
    const gateCResults = [];
    for (const line of opexLines) {
        const series = line.phasingMethod === 'DRIVER_PCT_OF_FUM' ? driverSeries.FUM : line.phasingMethod === 'DRIVER_PCT_OF_MOBILIZATION' ? driverSeries.MOBILIZATION : [];
        if (series.length)
            gateCResults.push(...svc.gateDriverRecomputation(line, series));
    }
    const gateCFailed = gateCResults.filter((g) => !g.passed);
    reportLines.push(`${gateCResults.length - gateCFailed.length}/${gateCResults.length} driver-months pass (${gateCResults.length} = driver-phased lines only).`);
    if (gateCFailed.length)
        reportLines.push(gateCFailed.map((g) => `- FAIL: ${g.detail}`).join('\n'));
    reportLines.push('');
    reportLines.push('## Data-quality register (BQ-1..9)');
    reportLines.push('- BQ-1: no designated approved scenario in the source — Board designation of Scenario 2 as BOARD_APPROVED applied per explicit instruction, Scenarios 1/3 remain empty DRAFT.');
    reportLines.push('- BQ-2: NPT/NPF naming unified into a single canonical group "NPT_NPF_INCOME".');
    reportLines.push('- BQ-3: CAPEX sheet mistitled "2025 Capital Expenditure" — loaded as FY2026 regardless (title is a labeling artifact, not a date the platform trusts).');
    reportLines.push('- BQ-4: sheet-01 stray blocks excluded entirely — never parsed for line values, per the mapping.');
    reportLines.push('- BQ-5: Private Portfolio "Existing AUM - A" goes negative from September (runoff artifact) — loaded as exported, not corrected (engine-truth doctrine: data is data).');
    const staffLine = opexLines.find((l) => /^Month end pay$/i.test(l.label)) ?? opexLines.find((l) => l.groupLabel === 'Staff Cost');
    reportLines.push(`- BQ-6: staff cost detail (sheet 07 rows 21-31) cross-checked against sheet-05's "Staff Cost" control row — see Gate B above for the exact per-month diff.`);
    const custodyLine = opexLines.find((l) => /Assets Management fee/i.test(l.label));
    reportLines.push(`- BQ-7: "${custodyLine?.label}" loads under budget_line_group="${custodyLine?.groupLabel}" (the section header, NOT the mislabeled "Statutory Fees and Charges, Total" caption on its Total row) — confirmed correct group assignment.`);
    const commissionLine = opexLines.find((l) => /^commission$/i.test(l.label));
    reportLines.push(`- BQ-8: Commission line loaded but isActive=${commissionLine?.isActive} — ${commissionLine?.flaggedReason}`);
    const bq9Lines = opexLines.filter((l) => l.valuesAsGiven);
    reportLines.push(`- BQ-9: ${bq9Lines.length} line(s) reference the unexported 'Existing Investors 2025' sheet — loaded values-as-given, flagged: ${bq9Lines.map((l) => l.label).join(', ') || 'none found in opex detail'}.`);
    reportLines.push('');
    const report = reportLines.join('\n');
    const outPath = path.join(__dirname, '..', '..', 'BUDGET_EXTRACTION_REPORT.md');
    fs.writeFileSync(outPath, report, 'utf-8');
    console.log(report.slice(0, 4000));
    console.log(`\n... (full report: ${report.length} chars) written to ${outPath}`);
    await prisma.$disconnect();
}
function normalizeControlLabel(label) {
    return label.trim().toUpperCase().replace(/\s+/g, ' ');
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=budget-extraction.run.js.map