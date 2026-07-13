// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/product/offers.smoke.ts
// Invariant 70(c) (CHECK24, CEO directive 12-Jul-2026): "Offers &
// Opportunities" portal channel. Proves the adversarial requirements
// CHECK24_EVIDENCE.md calls out by name:
//   - a product NOT yet Shariah-approved never appears on the tab
//   - a product with no LOCKED prospectus sheet never appears on the tab
//   - a UNIT_NAV card never renders targetedReturnBenchmarkPct
//   - every rendered POOL/MANDATE rate carries the benchmark-only
//     disclaimer IN THE SAME response payload (not a frontend-only label)
//
// Fixtures create ProductParameters rows DIRECTLY via prisma (approvedByUserId
// set + effectiveFrom in the past = LOCKED, per ProspectusSheetService.
// getSheetInForceAt's own query) rather than running the full PORT_MGR->
// CIO->MD_CEO sheet-approval workflow chain — ProspectusSheetService's own
// governed lifecycle is proven elsewhere (it is explicitly out of scope for
// this pass to modify or re-test); this file only proves OffersService's
// read-side eligibility gates and rendering discipline.
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { ProspectusSheetService } from '../parameters/prospectus-sheet.service';
import { OffersService } from './offers.service';
import { BENCHMARK_ONLY_DISCLAIMER } from './offers.types';

const RUN = Date.now();
let failed = false;
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const prospectusSheet = new ProspectusSheetService(prisma, audit, delegation, workflow);
  const offers = new OffersService(prisma, prospectusSheet);

  const creator = await prisma.appUser.create({ data: { email: `offers-creator-${RUN}@one17.test`, displayName: 'offers-creator' } });
  const approver = await prisma.appUser.create({ data: { email: `offers-approver-${RUN}@one17.test`, displayName: 'offers-approver' } });

  // === Fixture 1: fully-eligible POOL (PSR_WATERFALL) product ===
  const poolCode = `SMOKE-OFFERS-POOL-${RUN}`;
  await prisma.product.create({
    data: { code: poolCode, name: 'Smoke Offers Pool', engineType: 'PSR_WATERFALL', status: 'ACTIVE', shariahApprovedAt: new Date(), shariahApprovalRef: 'SMOKE-FIXTURE-NOT-REAL' },
  });
  await prisma.productParameters.create({
    data: {
      productCode: poolCode, version: 1, createdByUserId: creator.id, approvedByUserId: approver.id,
      effectiveFrom: new Date(Date.now() - 86_400_000),
      targetedReturnBenchmarkPct: 12.5,
      minimumParticipationKobo: 500_000_00n,
      poolTenorMonths: 12,
      offerNarrativeBrief: 'Smoke pool brief.',
      offerNarrativeOpportunity: 'Smoke pool opportunity.',
      offerNarrativeDynamics: 'Smoke pool dynamics.',
      offerNarrativeRiskSummary: 'Smoke pool risk summary.',
      offerNarrativeModelDescription: 'Smoke pool model description.',
    },
  });

  // === Fixture 2: fully-eligible UNIT_NAV (Halal Fund) product, WITH a
  // (deliberately, adversarially) non-null targetedReturnBenchmarkPct on
  // its sheet -- proves OffersService omits it anyway, invariant 44(a). ===
  const hfCode = `SMOKE-OFFERS-HF-${RUN}`;
  await prisma.product.create({
    data: { code: hfCode, name: 'Smoke Offers HF', engineType: 'UNIT_NAV', status: 'ACTIVE', shariahApprovedAt: new Date(), shariahApprovalRef: 'SMOKE-FIXTURE-NOT-REAL' },
  });
  await prisma.productParameters.create({
    data: {
      productCode: hfCode, version: 1, createdByUserId: creator.id, approvedByUserId: approver.id,
      effectiveFrom: new Date(Date.now() - 86_400_000),
      targetedReturnBenchmarkPct: 99.9, // adversarial: must NEVER surface for UNIT_NAV
      offerNarrativeBrief: 'Smoke HF brief.',
    },
  });
  const hfLedgerEntity = `${hfCode}-01`;
  await prisma.ledgerEntity.create({ data: { code: hfLedgerEntity, name: 'Smoke Offers HF Ledger', entityType: 'FUND', primaryBasis: 'AAOIFI', productCode: hfCode } });
  await prisma.navRecord.create({
    data: {
      ledgerEntityCode: hfLedgerEntity, valuationDate: new Date('2026-07-01T00:00:00Z'),
      portfolioMktValKobo: 1_000_000_00n, uninvestedCashKobo: 0n, accruedUnpaidFeesKobo: 0n, totalNavKobo: 1_000_000_00n,
      unitsOutstanding: 10000, navPerUnit: 100, offerPrice: 101.5, bidPrice: 99, isLocked: true,
    },
  });

  // === Fixture 3: ACTIVE + Shariah-approved, but NO LOCKED sheet at all ===
  const noSheetCode = `SMOKE-OFFERS-NOSHEET-${RUN}`;
  await prisma.product.create({
    data: { code: noSheetCode, name: 'Smoke Offers No Sheet', engineType: 'PSR_WATERFALL', status: 'ACTIVE', shariahApprovedAt: new Date(), shariahApprovalRef: 'SMOKE-FIXTURE-NOT-REAL' },
  });

  // === Fixture 4: ACTIVE + a LOCKED sheet, but NOT Shariah-approved ===
  const noShariahCode = `SMOKE-OFFERS-NOSHARIAH-${RUN}`;
  await prisma.product.create({
    data: { code: noShariahCode, name: 'Smoke Offers No Shariah', engineType: 'PSR_WATERFALL', status: 'ACTIVE' },
  });
  await prisma.productParameters.create({
    data: { productCode: noShariahCode, version: 1, createdByUserId: creator.id, approvedByUserId: approver.id, effectiveFrom: new Date(Date.now() - 86_400_000), targetedReturnBenchmarkPct: 10 },
  });

  // === Fixture 5: ACTIVE + Shariah-approved + a sheet that exists but is
  // still DRAFT (approvedByUserId null -- never LOCKED) ===
  const draftSheetCode = `SMOKE-OFFERS-DRAFTSHEET-${RUN}`;
  await prisma.product.create({
    data: { code: draftSheetCode, name: 'Smoke Offers Draft Sheet', engineType: 'PSR_WATERFALL', status: 'ACTIVE', shariahApprovedAt: new Date(), shariahApprovalRef: 'SMOKE-FIXTURE-NOT-REAL' },
  });
  await prisma.productParameters.create({
    data: { productCode: draftSheetCode, version: 1, createdByUserId: creator.id, targetedReturnBenchmarkPct: 10 },
  });

  // === Fixture 6: DRAFT product (not ACTIVE) with an otherwise-eligible
  // LOCKED sheet + Shariah approval ===
  const draftProductCode = `SMOKE-OFFERS-DRAFTPRODUCT-${RUN}`;
  await prisma.product.create({
    data: { code: draftProductCode, name: 'Smoke Offers Draft Product', engineType: 'PSR_WATERFALL', status: 'DRAFT', shariahApprovedAt: new Date(), shariahApprovalRef: 'SMOKE-FIXTURE-NOT-REAL' },
  });
  await prisma.productParameters.create({
    data: { productCode: draftProductCode, version: 1, createdByUserId: creator.id, approvedByUserId: approver.id, effectiveFrom: new Date(Date.now() - 86_400_000), targetedReturnBenchmarkPct: 10 },
  });

  const cards = await offers.listActiveOffers();
  const byCode = new Map(cards.map((c) => [c.productCode, c]));

  // === Assertion: fully-eligible products ARE visible ===
  if (byCode.has(poolCode) && byCode.has(hfCode)) {
    ok('listActiveOffers: both fully-eligible products (POOL + HF) are visible on the tab');
  } else {
    fail('listActiveOffers: a fully-eligible product is missing from the tab', { hasPool: byCode.has(poolCode), hasHf: byCode.has(hfCode) });
  }

  // === Adversarial: not-Shariah-approved product invisible ===
  if (!byCode.has(noShariahCode)) ok('adversarial: product with no shariahApprovedAt is invisible on the Offers tab');
  else fail('adversarial FAILED: a non-Shariah-approved product appeared on the Offers tab', byCode.get(noShariahCode));

  // === Adversarial: no LOCKED sheet at all -> invisible ===
  if (!byCode.has(noSheetCode)) ok('adversarial: product with no prospectus sheet at all is invisible on the Offers tab');
  else fail('adversarial FAILED: a product with no prospectus sheet appeared on the Offers tab', byCode.get(noSheetCode));

  // === Adversarial: sheet exists but still DRAFT (unlocked) -> invisible ===
  if (!byCode.has(draftSheetCode)) ok('adversarial: product whose only sheet is still DRAFT (unlocked) is invisible on the Offers tab');
  else fail('adversarial FAILED: a product with only a DRAFT sheet appeared on the Offers tab', byCode.get(draftSheetCode));

  // === Adversarial: product not yet ACTIVE -> invisible, even with an
  // otherwise-eligible LOCKED sheet + Shariah approval ===
  if (!byCode.has(draftProductCode)) ok('adversarial: DRAFT (not yet ACTIVE) product is invisible on the Offers tab even with a LOCKED sheet + Shariah approval');
  else fail('adversarial FAILED: a DRAFT product appeared on the Offers tab', byCode.get(draftProductCode));

  // === Adversarial: UNIT_NAV card never renders targetedReturnBenchmarkPct,
  // even though this fixture's sheet has one on file ===
  const hfCard = byCode.get(hfCode);
  if (hfCard && hfCard.targetedReturn === null) {
    ok('adversarial: UNIT_NAV (Halal Fund) card omits targetedReturn entirely, even with a non-null targetedReturnBenchmarkPct on its sheet (invariant 44a)');
  } else {
    fail('adversarial FAILED: a UNIT_NAV card rendered a targetedReturn', hfCard);
  }
  if (hfCard && hfCard.navHistory && hfCard.navHistory.length === 1 && hfCard.navHistory[0].navPerUnit === '100') {
    ok('UNIT_NAV card carries historical NAV performance instead (reused off NavRecord, not recomputed)');
  } else {
    fail('UNIT_NAV card did not carry the expected NAV history', hfCard);
  }

  // === Assertion: POOL card's targetedReturn ALWAYS carries the
  // benchmark-only disclaimer in the SAME payload, not just a frontend
  // label -- a screen-reader/raw API consumer sees it too. ===
  const poolCard = byCode.get(poolCode);
  if (
    poolCard &&
    poolCard.targetedReturn &&
    poolCard.targetedReturn.isBenchmarkOnly === true &&
    poolCard.targetedReturn.disclaimer === BENCHMARK_ONLY_DISCLAIMER &&
    poolCard.targetedReturn.valuePct === 12.5
  ) {
    ok(`POOL card's targetedReturn (${poolCard.targetedReturn.valuePct}%) carries isBenchmarkOnly + the exact disclaimer string "${BENCHMARK_ONLY_DISCLAIMER}" in the same API payload`);
  } else {
    fail('POOL card targetedReturn missing the benchmark-only disclaimer in-payload', poolCard);
  }

  // === Assertion: narrative fields render verbatim off the sheet ===
  if (poolCard && poolCard.narrative.brief === 'Smoke pool brief.' && poolCard.narrative.riskSummary === 'Smoke pool risk summary.') {
    ok('POOL card narrative fields render verbatim off the prospectus sheet');
  } else {
    fail('POOL card narrative fields did not render as expected', poolCard?.narrative);
  }

  // === Detail view: same eligibility gate applies ===
  try {
    await offers.getOfferDetail(noShariahCode);
    fail('getOfferDetail: expected rejection for a non-Shariah-approved product, none thrown');
  } catch (err) {
    ok(`getOfferDetail rejected as expected for a non-Shariah-approved product — ${(err as Error).message.split('\n')[0]}`);
  }
  const poolDetail = await offers.getOfferDetail(poolCode);
  if (poolDetail.narrative.opportunity === 'Smoke pool opportunity.' && poolDetail.narrative.dynamics === 'Smoke pool dynamics.' && poolDetail.narrative.modelDescription === 'Smoke pool model description.') {
    ok('getOfferDetail returns the full narrative (opportunity/dynamics/model description) for an eligible product');
  } else {
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
