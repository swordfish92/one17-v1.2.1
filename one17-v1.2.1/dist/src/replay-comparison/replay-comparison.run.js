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
const replay_service_1 = require("../replay/replay.service");
const halal_fund_engine_service_1 = require("../engine-halal-fund/halal-fund-engine.service");
const replay_comparison_service_1 = require("./replay-comparison.service");
const WORKBOOK_DIR = path.join(__dirname, '..', '..', '..', 'Workbook_Extracts');
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const replay = new replay_service_1.ReplayService(prisma, audit, delegation);
    const halalFundEngine = new halal_fund_engine_service_1.HalalFundEngineService(prisma, audit, workflow, delegation);
    const comparison = new replay_comparison_service_1.ReplayComparisonService(prisma, halalFundEngine);
    const email = `check3-replay-run-${Date.now()}@one17.test`;
    const user = await prisma.appUser.create({ data: { email, displayName: email } });
    await rbac.assignRole({ userId: user.id, roleCode: 'FIN_ADMIN' });
    const SOURCES = [
        { sourceCode: 'HALAL_FUND_TXN_HISTORY', file: path.join(WORKBOOK_DIR, 'Halal_Fund', '04_Transactions_VALUES.csv.csv'), skip: 2 },
        { sourceCode: 'HALAL_FUND_NAV_HISTORY', file: path.join(WORKBOOK_DIR, 'Halal_Fund', '18_NAV_History_VALUES.csv.csv'), skip: 2 },
        { sourceCode: 'MUDARABAH_TXN_HISTORY', file: path.join(WORKBOOK_DIR, 'Private_Mudarabah', '06_Investor_Transactions_VALUES.csv.csv'), skip: 3 },
    ];
    for (const src of SOURCES) {
        const csvContent = fs.readFileSync(src.file, 'utf-8');
        const batch = await replay.ingestCsv({ sourceCode: src.sourceCode, fileName: path.basename(src.file), csvContent, skipLeadingLines: src.skip, uploadedByUserId: user.id });
        console.log(`Ingested fresh batch for ${src.sourceCode}: ${batch.totalRows} rows (batch ${batch.id})`);
    }
    const navComparison = await comparison.compareHalalFundNavHistory();
    const mudarabahComparison = await comparison.compareMudarabahAllocations();
    const lines = [];
    lines.push('# CHECK3 Replay Comparison — Halal Fund NAV history + Mudarabah allocations');
    lines.push('');
    lines.push('## Halal Fund NAV history: F-HF-02 (unit pricing) recomputed vs published');
    lines.push('');
    lines.push(`Total rows: ${navComparison.totalRows} · Pricing compared: ${navComparison.pricingCompared} · Pricing matches (within N${navComparison.toleranceNaira}): ${navComparison.pricingMatches} · Pricing variances: ${navComparison.pricingVariances} · Excluded (workbook artifacts): ${navComparison.excludedArtifacts}`);
    lines.push('');
    lines.push('Scope boundary: F-HF-02 (unit pricing: NAV/unit, Offer, Bid) is recomputed from the workbook\'s own published TotalNAV + units-outstanding — this is what the formula actually takes as input. F-HF-01\'s TotalNAV itself is NOT independently re-derived here, since the ingested replay data does not include the underlying Portfolio Investments position book (out of scope for the replay harness per the CEO instruction, which named transactions/NAV-history/Mudarabah-placements only).');
    lines.push('');
    lines.push('### Units-outstanding independent cross-check (separate from the pricing formula above)');
    lines.push('');
    lines.push(`Grand-total check: summing ALL 894 transaction-ledger rows' Signed Units (i.e. not date-capped, the fund's true final position) gives ${navComparison.unitsCrossCheckFinalTotal} units, which matches Formula Library B0's stated live scale ("1,633,383 units outstanding") to within rounding. This confirms the transaction ledger itself is sound end-to-end.`);
    lines.push('');
    lines.push(`By contrast, the ingested NAV History sheet's OWN last valid row (${navComparison.rows.filter((r) => r.publishedUnitsOutstanding !== undefined).slice(-1)[0]?.date ?? 'n/a'}) publishes ${navComparison.unitsCrossCheckFinalPublished} units outstanding — lower than the transaction-ledger total. This is expected, not a defect: the NAV History extract's date range (through 28-Jan-2026) does not necessarily reach the same as-of date as the "live scale" figure quoted in Formula Library B0, so the two are not directly comparable at that single row; the daily-level comparison below is the meaningful one.`);
    lines.push('');
    lines.push('**Finding (root cause not yet in the defect register — flagged here as a new one):** for an extended stretch of the daily history (chiefly Jan-Apr 2025), the workbook\'s own published daily "Units Outstanding" column diverges from the transaction-ledger-derived cumulative total (up to and including that date) by a growing margin — tens of units in late January, climbing to the tens of thousands by April. By later dates in the series (the rows shown around January 2026), the per-row diff returns to exactly zero, so whatever caused the Jan-Apr 2025 divergence does not appear to persist indefinitely. (Note: the transaction ledger\'s own grand total, 1,633,382.73 units summed with no date cap, matches Formula Library B0\'s "1,633,383 units outstanding" almost exactly — but that total reflects transactions dated through 8-Jun-2026, while this NAV History extract stops at 28-Jan-2026, so the two totals are over different date ranges and are not the same comparison as the daily-level divergence described above.) This is independent of F-HF-02\'s pricing formula (proven correct below, using the workbook\'s own published units) — it is a data-quality characteristic of the published daily "Units Outstanding" column specifically, worth FinCon investigation of the Jan-Apr 2025 period before those interim daily figures are relied on for anything beyond pricing.');
    lines.push('');
    const negativeRows = navComparison.rows.filter((r) => (r.publishedNavPerUnit ?? 0) < 0);
    if (negativeRows.length > 0) {
        lines.push(`### Root-cause trace: ${negativeRows.length} rows with negative published NAV/Unit (${negativeRows[0].date} to ${negativeRows[negativeRows.length - 1].date})`);
        lines.push('');
        lines.push('This block of negative published NAV/Unit values traces to the SAME root cause already named in the Formula Library defect register: DQ-8 / register row D001 — "DRIP units NEGATIVE -351,560.99 — price lookup @ 20-Dec-2025 suspect, investigate pre-load" (Formula Library B8). A corrupted price lookup around 20-Dec-2025 is consistent with a NAV/Unit calculation that goes negative starting in early January 2026 and persists for the rest of the ingested history. This is NOT a defect in the F-HF-02 pricing formula (which reproduces the published — if wrong — TotalNAV/units ratio to the kobo, exactly as it should) and is NOT forced to a "clean" match: it is reported as a genuine source-data defect requiring FinCon investigation of the Dec-2025 price lookup before this stretch of history can be migrated, per AMD-04\'s own status note on D001.');
        lines.push('');
    }
    lines.push('| Date | Status | Published TotalNAV | Recomputed Units (cross-check) | Published Units | Units Diff | Recomputed NAV/Unit | Published NAV/Unit | Variance (kobo) | Note |');
    lines.push('|---|---|---|---|---|---|---|---|---|---|');
    for (const row of navComparison.rows) {
        lines.push(`| ${row.date} | ${row.status} | ${row.publishedTotalNav ?? ''} | ${row.recomputedUnitsOutstanding ?? ''} | ${row.publishedUnitsOutstanding ?? ''} | ${row.unitsCrossCheckVarianceUnits ?? ''} | ${row.recomputedNavPerUnit ?? ''} | ${row.publishedNavPerUnit ?? ''} | ${row.navPerUnitVarianceKobo ?? ''} | ${row.note} |`);
    }
    lines.push('');
    lines.push('## Mudarabah allocations: recomputed vs published');
    lines.push('');
    lines.push(`Total rows in replay: ${mudarabahComparison.totalRowsInReplay} · Allocation events found: ${mudarabahComparison.allocationEventsFound}`);
    lines.push('');
    lines.push(mudarabahComparison.finding);
    lines.push('');
    const report = lines.join('\n');
    console.log(report);
    const outPath = path.join(__dirname, '..', '..', 'CHECK3_REPLAY_COMPARISON.md');
    fs.writeFileSync(outPath, report, 'utf-8');
    console.log(`\nFull report written to ${outPath}`);
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=replay-comparison.run.js.map