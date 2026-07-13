"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const prospectus_sheet_service_1 = require("../parameters/prospectus-sheet.service");
const offers_service_1 = require("./offers.service");
const offers_types_1 = require("./offers.types");
const RUN = Date.now();
let failed = false;
function ok(label) { console.log(`OK: ${label}`); }
function fail(label, detail) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const prospectusSheet = new prospectus_sheet_service_1.ProspectusSheetService(prisma, audit, delegation, workflow);
    const offers = new offers_service_1.OffersService(prisma, prospectusSheet);
    const creator = await prisma.appUser.create({ data: { email: `offers-creator-${RUN}@one17.test`, displayName: 'offers-creator' } });
    const approver = await prisma.appUser.create({ data: { email: `offers-approver-${RUN}@one17.test`, displayName: 'offers-approver' } });
    const poolCode = `SMOKE-OFFERS-POOL-${RUN}`;
    await prisma.product.create({
        data: { code: poolCode, name: 'Smoke Offers Pool', engineType: 'PSR_WATERFALL', status: 'ACTIVE', shariahApprovedAt: new Date(), shariahApprovalRef: 'SMOKE-FIXTURE-NOT-REAL' },
    });
    await prisma.productParameters.create({
        data: {
            productCode: poolCode, version: 1, createdByUserId: creator.id, approvedByUserId: approver.id,
            effectiveFrom: new Date(Date.now() - 86_400_000),
            targetedReturnBenchmarkPct: 12.5,
            minimumParticipationKobo: 50000000n,
            poolTenorMonths: 12,
            offerNarrativeBrief: 'Smoke pool brief.',
            offerNarrativeOpportunity: 'Smoke pool opportunity.',
            offerNarrativeDynamics: 'Smoke pool dynamics.',
            offerNarrativeRiskSummary: 'Smoke pool risk summary.',
            offerNarrativeModelDescription: 'Smoke pool model description.',
        },
    });
    const hfCode = `SMOKE-OFFERS-HF-${RUN}`;
    await prisma.product.create({
        data: { code: hfCode, name: 'Smoke Offers HF', engineType: 'UNIT_NAV', status: 'ACTIVE', shariahApprovedAt: new Date(), shariahApprovalRef: 'SMOKE-FIXTURE-NOT-REAL' },
    });
    await prisma.productParameters.create({
        data: {
            productCode: hfCode, version: 1, createdByUserId: creator.id, approvedByUserId: approver.id,
            effectiveFrom: new Date(Date.now() - 86_400_000),
            targetedReturnBenchmarkPct: 99.9,
            offerNarrativeBrief: 'Smoke HF brief.',
        },
    });
    const hfLedgerEntity = `${hfCode}-01`;
    await prisma.ledgerEntity.create({ data: { code: hfLedgerEntity, name: 'Smoke Offers HF Ledger', entityType: 'FUND', primaryBasis: 'AAOIFI', productCode: hfCode } });
    await prisma.navRecord.create({
        data: {
            ledgerEntityCode: hfLedgerEntity, valuationDate: new Date('2026-07-01T00:00:00Z'),
            portfolioMktValKobo: 100000000n, uninvestedCashKobo: 0n, accruedUnpaidFeesKobo: 0n, totalNavKobo: 100000000n,
            unitsOutstanding: 10000, navPerUnit: 100, offerPrice: 101.5, bidPrice: 99, isLocked: true,
        },
    });
    const noSheetCode = `SMOKE-OFFERS-NOSHEET-${RUN}`;
    await prisma.product.create({
        data: { code: noSheetCode, name: 'Smoke Offers No Sheet', engineType: 'PSR_WATERFALL', status: 'ACTIVE', shariahApprovedAt: new Date(), shariahApprovalRef: 'SMOKE-FIXTURE-NOT-REAL' },
    });
    const noShariahCode = `SMOKE-OFFERS-NOSHARIAH-${RUN}`;
    await prisma.product.create({
        data: { code: noShariahCode, name: 'Smoke Offers No Shariah', engineType: 'PSR_WATERFALL', status: 'ACTIVE' },
    });
    await prisma.productParameters.create({
        data: { productCode: noShariahCode, version: 1, createdByUserId: creator.id, approvedByUserId: approver.id, effectiveFrom: new Date(Date.now() - 86_400_000), targetedReturnBenchmarkPct: 10 },
    });
    const draftSheetCode = `SMOKE-OFFERS-DRAFTSHEET-${RUN}`;
    await prisma.product.create({
        data: { code: draftSheetCode, name: 'Smoke Offers Draft Sheet', engineType: 'PSR_WATERFALL', status: 'ACTIVE', shariahApprovedAt: new Date(), shariahApprovalRef: 'SMOKE-FIXTURE-NOT-REAL' },
    });
    await prisma.productParameters.create({
        data: { productCode: draftSheetCode, version: 1, createdByUserId: creator.id, targetedReturnBenchmarkPct: 10 },
    });
    const draftProductCode = `SMOKE-OFFERS-DRAFTPRODUCT-${RUN}`;
    await prisma.product.create({
        data: { code: draftProductCode, name: 'Smoke Offers Draft Product', engineType: 'PSR_WATERFALL', status: 'DRAFT', shariahApprovedAt: new Date(), shariahApprovalRef: 'SMOKE-FIXTURE-NOT-REAL' },
    });
    await prisma.productParameters.create({
        data: { productCode: draftProductCode, version: 1, createdByUserId: creator.id, approvedByUserId: approver.id, effectiveFrom: new Date(Date.now() - 86_400_000), targetedReturnBenchmarkPct: 10 },
    });
    const cards = await offers.listActiveOffers();
    const byCode = new Map(cards.map((c) => [c.productCode, c]));
    if (byCode.has(poolCode) && byCode.has(hfCode)) {
        ok('listActiveOffers: both fully-eligible products (POOL + HF) are visible on the tab');
    }
    else {
        fail('listActiveOffers: a fully-eligible product is missing from the tab', { hasPool: byCode.has(poolCode), hasHf: byCode.has(hfCode) });
    }
    if (!byCode.has(noShariahCode))
        ok('adversarial: product with no shariahApprovedAt is invisible on the Offers tab');
    else
        fail('adversarial FAILED: a non-Shariah-approved product appeared on the Offers tab', byCode.get(noShariahCode));
    if (!byCode.has(noSheetCode))
        ok('adversarial: product with no prospectus sheet at all is invisible on the Offers tab');
    else
        fail('adversarial FAILED: a product with no prospectus sheet appeared on the Offers tab', byCode.get(noSheetCode));
    if (!byCode.has(draftSheetCode))
        ok('adversarial: product whose only sheet is still DRAFT (unlocked) is invisible on the Offers tab');
    else
        fail('adversarial FAILED: a product with only a DRAFT sheet appeared on the Offers tab', byCode.get(draftSheetCode));
    if (!byCode.has(draftProductCode))
        ok('adversarial: DRAFT (not yet ACTIVE) product is invisible on the Offers tab even with a LOCKED sheet + Shariah approval');
    else
        fail('adversarial FAILED: a DRAFT product appeared on the Offers tab', byCode.get(draftProductCode));
    const hfCard = byCode.get(hfCode);
    if (hfCard && hfCard.targetedReturn === null) {
        ok('adversarial: UNIT_NAV (Halal Fund) card omits targetedReturn entirely, even with a non-null targetedReturnBenchmarkPct on its sheet (invariant 44a)');
    }
    else {
        fail('adversarial FAILED: a UNIT_NAV card rendered a targetedReturn', hfCard);
    }
    if (hfCard && hfCard.navHistory && hfCard.navHistory.length === 1 && hfCard.navHistory[0].navPerUnit === '100') {
        ok('UNIT_NAV card carries historical NAV performance instead (reused off NavRecord, not recomputed)');
    }
    else {
        fail('UNIT_NAV card did not carry the expected NAV history', hfCard);
    }
    const poolCard = byCode.get(poolCode);
    if (poolCard &&
        poolCard.targetedReturn &&
        poolCard.targetedReturn.isBenchmarkOnly === true &&
        poolCard.targetedReturn.disclaimer === offers_types_1.BENCHMARK_ONLY_DISCLAIMER &&
        poolCard.targetedReturn.valuePct === 12.5) {
        ok(`POOL card's targetedReturn (${poolCard.targetedReturn.valuePct}%) carries isBenchmarkOnly + the exact disclaimer string "${offers_types_1.BENCHMARK_ONLY_DISCLAIMER}" in the same API payload`);
    }
    else {
        fail('POOL card targetedReturn missing the benchmark-only disclaimer in-payload', poolCard);
    }
    if (poolCard && poolCard.narrative.brief === 'Smoke pool brief.' && poolCard.narrative.riskSummary === 'Smoke pool risk summary.') {
        ok('POOL card narrative fields render verbatim off the prospectus sheet');
    }
    else {
        fail('POOL card narrative fields did not render as expected', poolCard?.narrative);
    }
    try {
        await offers.getOfferDetail(noShariahCode);
        fail('getOfferDetail: expected rejection for a non-Shariah-approved product, none thrown');
    }
    catch (err) {
        ok(`getOfferDetail rejected as expected for a non-Shariah-approved product — ${err.message.split('\n')[0]}`);
    }
    const poolDetail = await offers.getOfferDetail(poolCode);
    if (poolDetail.narrative.opportunity === 'Smoke pool opportunity.' && poolDetail.narrative.dynamics === 'Smoke pool dynamics.' && poolDetail.narrative.modelDescription === 'Smoke pool model description.') {
        ok('getOfferDetail returns the full narrative (opportunity/dynamics/model description) for an eligible product');
    }
    else {
        fail('getOfferDetail did not return the full narrative as expected', poolDetail.narrative);
    }
    console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — OffersService proven: three-gate eligibility, UNIT_NAV/POOL rendering split, in-payload benchmark disclaimer (invariant 70c).`);
    process.exitCode = failed ? 1 : 0;
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=offers.smoke.js.map