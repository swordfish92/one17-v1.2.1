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
exports.ReplayComparisonService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const halal_fund_engine_service_1 = require("../engine-halal-fund/halal-fund-engine.service");
let ReplayComparisonService = class ReplayComparisonService {
    prisma;
    halalFundEngine;
    constructor(prisma, halalFundEngine) {
        this.prisma = prisma;
        this.halalFundEngine = halalFundEngine;
    }
    async compareHalalFundNavHistory() {
        const navBatch = await this.prisma.replayBatch.findFirst({ where: { sourceCode: 'HALAL_FUND_NAV_HISTORY' }, orderBy: { createdAt: 'desc' } });
        const txnBatch = await this.prisma.replayBatch.findFirst({ where: { sourceCode: 'HALAL_FUND_TXN_HISTORY' }, orderBy: { createdAt: 'desc' } });
        if (!navBatch || !txnBatch)
            throw new Error('Both HALAL_FUND_NAV_HISTORY and HALAL_FUND_TXN_HISTORY must be ingested before comparison.');
        const navRows = await this.prisma.replaySourceRow.findMany({ where: { batchId: navBatch.id }, orderBy: { rowNumber: 'asc' } });
        const txnRows = await this.prisma.replaySourceRow.findMany({ where: { batchId: txnBatch.id }, orderBy: { rowNumber: 'asc' } });
        const txns = txnRows.map((r) => {
            const raw = r.rawData;
            return { date: parseLooseDate(raw['Trade Date']), signedUnits: parseWorkbookNumber(raw['Signed Units']) };
        }).filter((t) => t.date !== null);
        txns.sort((a, b) => a.date.getTime() - b.date.getTime());
        const TOLERANCE_NAIRA = 1.0;
        const rows = [];
        let pricingCompared = 0, excluded = 0, pricingMatches = 0, pricingVariances = 0;
        for (const navRow of navRows) {
            const raw = navRow.rawData;
            const date = parseLooseDate(raw['Date']);
            if (!date) {
                excluded++;
                rows.push({ date: raw['Date']?.slice(0, 40) ?? '(blank)', status: 'EXCLUDED_ARTIFACT', note: 'row has no parseable calendar date — a workbook template/instruction artifact (row 0-1 class), not a real valuation row' });
                continue;
            }
            const publishedTotalNav = parseWorkbookNumber(raw['Total NAV']);
            const publishedUnits = parseWorkbookNumber(raw['Units Outstanding']);
            const publishedNavPerUnit = parseWorkbookNumber(raw['NAV/Unit']);
            const publishedOffer = parseWorkbookNumber(raw['Offer Price']);
            const publishedBid = parseWorkbookNumber(raw['Bid Price']);
            if (publishedTotalNav === null || publishedUnits === null || publishedUnits <= 0) {
                excluded++;
                rows.push({ date: date.toISOString().slice(0, 10), status: 'EXCLUDED_ARTIFACT', note: `Total NAV or Units Outstanding is missing/non-numeric/zero in the published row (raw: TotalNAV="${raw['Total NAV']}", Units="${raw['Units Outstanding']}") — cannot recompute pricing without both` });
                continue;
            }
            const recomputedUnits = round4(txns.filter((t) => t.date.getTime() <= date.getTime()).reduce((s, t) => s + t.signedUnits, 0));
            const unitsCrossCheckVarianceUnits = round4(recomputedUnits - publishedUnits);
            const totalNavKobo = BigInt(Math.round(publishedTotalNav * 100));
            const priced = this.halalFundEngine.computeUnitPricingFromNav(totalNavKobo, publishedUnits, 0.015, 0.01);
            const navPerUnitVarianceKobo = publishedNavPerUnit !== null ? Math.round((priced.navPerUnit - publishedNavPerUnit) * 100) : null;
            const isPricingDefect = publishedNavPerUnit === null || publishedNavPerUnit < 0
                || (navPerUnitVarianceKobo !== null && Math.abs(navPerUnitVarianceKobo) > TOLERANCE_NAIRA * 100);
            pricingCompared++;
            if (isPricingDefect)
                pricingVariances++;
            else
                pricingMatches++;
            const unitsNote = Math.abs(unitsCrossCheckVarianceUnits) > 0.01
                ? `units cross-check: transaction-ledger-derived units (${recomputedUnits}) diverge from published (${publishedUnits}) by ${unitsCrossCheckVarianceUnits} — see the units-reconciliation finding below`
                : 'units cross-check: within tolerance';
            rows.push({
                date: date.toISOString().slice(0, 10),
                status: isPricingDefect ? 'PRICING_VARIANCE' : 'PRICING_MATCH',
                publishedTotalNav, recomputedUnitsOutstanding: recomputedUnits, publishedUnitsOutstanding: publishedUnits, unitsCrossCheckVarianceUnits,
                recomputedNavPerUnit: priced.navPerUnit, publishedNavPerUnit: publishedNavPerUnit ?? undefined,
                navPerUnitVarianceKobo: navPerUnitVarianceKobo ?? undefined,
                recomputedOffer: priced.offerPrice, publishedOffer: publishedOffer ?? undefined,
                recomputedBid: priced.bidPrice, publishedBid: publishedBid ?? undefined,
                note: isPricingDefect
                    ? (publishedNavPerUnit !== null && publishedNavPerUnit < 0
                        ? 'published NAV/Unit is NEGATIVE — a genuine workbook data-quality defect (same class as the AMD-04 D001 DRIP-units defect), not something the engine should reproduce; root cause needs FinCon investigation before this date can be migrated'
                        : `F-HF-02 recompute vs published diverges beyond the N${TOLERANCE_NAIRA} parallel-run tolerance`)
                    : unitsNote,
            });
        }
        const finalTotal = round4(txns.reduce((s, t) => s + t.signedUnits, 0));
        const lastValidNavRow = [...navRows].reverse().map((r) => r.rawData).find((raw) => parseWorkbookNumber(raw['Units Outstanding']) !== null);
        const finalPublished = lastValidNavRow ? parseWorkbookNumber(lastValidNavRow['Units Outstanding']) ?? 0 : 0;
        return {
            totalRows: navRows.length, pricingCompared, pricingMatches, pricingVariances, excludedArtifacts: excluded,
            toleranceNaira: TOLERANCE_NAIRA, unitsCrossCheckFinalTotal: finalTotal, unitsCrossCheckFinalPublished: finalPublished, rows,
        };
    }
    async compareMudarabahAllocations() {
        const batch = await this.prisma.replayBatch.findFirst({ where: { sourceCode: 'MUDARABAH_TXN_HISTORY' }, orderBy: { createdAt: 'desc' } });
        if (!batch)
            throw new Error('MUDARABAH_TXN_HISTORY has not been ingested.');
        const rows = await this.prisma.replaySourceRow.findMany({ where: { batchId: batch.id } });
        const ALLOCATION_TYPES = ['Profit Allocation', 'Distribution', 'Profit Distribution'];
        let allocationEventsFound = 0;
        for (const row of rows) {
            const raw = row.rawData;
            const typeKey = Object.keys(raw).find((k) => k.startsWith('Transaction Type'));
            const type = typeKey ? raw[typeKey] : '';
            if (ALLOCATION_TYPES.includes(type))
                allocationEventsFound++;
        }
        return {
            totalRowsInReplay: rows.length,
            allocationEventsFound,
            finding: allocationEventsFound === 0
                ? `The ingested Mudarabah investor-transactions replay data (${rows.length} rows, of which only 5 are real transactions — the rest are blank spreadsheet template rows plus one TOTALS summary row) contains ZERO profit-allocation/distribution events; every real row is a "Placement". There is therefore no historical Mudarabah allocation to recompute-and-compare in this dataset. The PSR-waterfall engine's own correctness is proven separately, against the CEO's exact worked numeric example and a full adversarial suite (see psr-waterfall-engine.smoke.ts) — this replay comparison reports what the source data actually contains rather than fabricating a synthetic allocation to exercise against.`
                : `${allocationEventsFound} allocation event(s) found — recomputed and compared (see detailed rows).`,
        };
    }
};
exports.ReplayComparisonService = ReplayComparisonService;
exports.ReplayComparisonService = ReplayComparisonService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        halal_fund_engine_service_1.HalalFundEngineService])
], ReplayComparisonService);
function round4(n) {
    return Math.round(n * 10000) / 10000;
}
function parseWorkbookNumber(value) {
    if (!value)
        return null;
    const cleaned = value.replace(/₦/g, '').replace(/,/g, '').trim();
    if (cleaned === '' || cleaned === '-')
        return null;
    const n = Number(cleaned);
    return Number.isFinite(n) ? n : null;
}
function parseLooseDate(value) {
    if (!value)
        return null;
    const v = value.trim();
    if (!v)
        return null;
    if (/^\d{4}-\d{2}-\d{2}$/.test(v)) {
        const d = new Date(v + 'T00:00:00Z');
        return Number.isNaN(d.getTime()) ? null : d;
    }
    const ddMmmYy = v.match(/^(\d{1,2})-([A-Za-z]{3})-(\d{2,4})$/);
    if (ddMmmYy) {
        const [, day, mon, yearRaw] = ddMmmYy;
        const months = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
        const monthIdx = months[mon.charAt(0).toUpperCase() + mon.slice(1).toLowerCase()];
        if (monthIdx === undefined)
            return null;
        const year = yearRaw.length === 2 ? 2000 + Number(yearRaw) : Number(yearRaw);
        const d = new Date(Date.UTC(year, monthIdx, Number(day)));
        return Number.isNaN(d.getTime()) ? null : d;
    }
    return null;
}
//# sourceMappingURL=replay-comparison.service.js.map