import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProspectusSheetService } from '../parameters/prospectus-sheet.service';
import { BENCHMARK_ONLY_DISCLAIMER, OfferCard } from './offers.types';

// Invariant 70(c) (CEO directive 12-Jul-2026, CHECK24): "Offers &
// Opportunities" portal channel -- products visible to investors
// AUTOMATICALLY upon full internal approval, never a separate publish
// step. This service is READ-ONLY: it never writes a Product/
// ProductParameters row, and Invest/Top Up itself is wired straight into
// the EXISTING governed SubscriptionService (see
// SubscriptionService.initiatePortalSubscription) from the controller
// layer, never through here.
//
// Three-gate eligibility (ALL must hold, or the product is invisible on
// the tab -- this is itself an adversarial requirement in
// CHECK24_EVIDENCE.md, "unapproved product invisible on the tab"):
//   1. Product.status === 'ACTIVE'                       (ParameterService.activateProduct)
//   2. Product.shariahApprovedAt is non-null              (the SAME gate SubscriptionService.
//                                                           assertInvestorAndProductEligible checks)
//   3. A LOCKED prospectus sheet is in force RIGHT NOW    (ProspectusSheetService.getSheetInForceAt,
//                                                           never a raw findFirst -- that's the whole
//                                                           point of reusing it: forward-only
//                                                           effective-dating handled for free)
// Deliberately queries Product/ProductParameters directly rather than
// duplicating ParameterService.activateProduct's or
// SubscriptionService.assertInvestorAndProductEligible's own gate logic --
// this is a THIRD, independent read of the same two Product columns
// (status/shariahApprovedAt) those methods already check at their own
// write time; re-reading them here is the only way a read-only listing can
// exist without depending on a write path.
@Injectable()
export class OffersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prospectusSheet: ProspectusSheetService,
  ) {}

  async listActiveOffers(): Promise<OfferCard[]> {
    const products = await this.prisma.product.findMany({
      where: { status: 'ACTIVE', shariahApprovedAt: { not: null } },
      orderBy: { code: 'asc' },
    });

    const cards: OfferCard[] = [];
    for (const product of products) {
      const sheet = await this.prospectusSheet.getSheetInForceAt(product.code, new Date());
      if (!sheet) continue; // gate 3: no LOCKED sheet in force right now -- invisible on the tab
      cards.push(await this.buildCard(product, sheet));
    }
    return cards;
  }

  // Detail view (card click -> full narrative). Refuses with the SAME
  // three-gate reasoning as the list -- never lets a caller reach a
  // not-yet-eligible product's narrative by guessing its productCode.
  async getOfferDetail(productCode: string): Promise<OfferCard> {
    const product = await this.prisma.product.findUniqueOrThrow({ where: { code: productCode } });
    if (product.status !== 'ACTIVE' || !product.shariahApprovedAt) {
      throw new Error(`Product ${productCode} is not eligible for the Offers & Opportunities tab (status=${product.status}, shariahApprovedAt=${product.shariahApprovedAt ? 'set' : 'null'}).`);
    }
    const sheet = await this.prospectusSheet.getSheetInForceAt(productCode, new Date());
    if (!sheet) {
      throw new Error(`Product ${productCode} has no LOCKED prospectus sheet in force -- not eligible for the Offers & Opportunities tab.`);
    }
    return this.buildCard(product, sheet);
  }

  private async buildCard(product: { code: string; name: string; engineType: string }, sheet: NonNullable<Awaited<ReturnType<ProspectusSheetService['getSheetInForceAt']>>>): Promise<OfferCard> {
    const narrative = {
      brief: sheet.offerNarrativeBrief ?? null,
      opportunity: sheet.offerNarrativeOpportunity ?? null,
      dynamics: sheet.offerNarrativeDynamics ?? null,
      riskSummary: sheet.offerNarrativeRiskSummary ?? null,
      modelDescription: sheet.offerNarrativeModelDescription ?? null,
    };

    // Invariant 44(a)/70(c): UNIT_NAV (Halal Fund) NEVER carries a
    // targetedReturn on this tab, even if the sheet happens to have a
    // non-null targetedReturnBenchmarkPct value on file -- omitted
    // entirely for this engineType, not merely hidden client-side, so an
    // API consumer bypassing the frontend can never see a promised-looking
    // rate next to a unit fund either. Same "no NAV/unit price in pool
    // context, ANYWHERE" discipline statement.service.ts documents,
    // applied in the opposite direction (no TARGET RATE in fund context).
    let navHistory: OfferCard['navHistory'] = null;
    let targetedReturn: OfferCard['targetedReturn'] = null;
    if (product.engineType === 'UNIT_NAV') {
      const entity = await this.prisma.ledgerEntity.findFirst({ where: { productCode: product.code } });
      if (entity) {
        // Reuses the exact same query PerformanceController.listNavHistory
        // already runs (never recomputed here) -- see that controller for
        // the precedent this mirrors field-for-field.
        const records = await this.prisma.navRecord.findMany({
          where: { ledgerEntityCode: entity.code },
          orderBy: { valuationDate: 'asc' },
          take: 365,
        });
        navHistory = records.map((r) => ({
          valuationDate: r.valuationDate.toISOString().slice(0, 10),
          navPerUnit: r.navPerUnit.toString(),
          totalNavKobo: r.totalNavKobo.toString(),
        }));
      } else {
        navHistory = [];
      }
    } else if (sheet.targetedReturnBenchmarkPct !== null) {
      // POOL (PSR_WATERFALL) / MANDATE only. The disclaimer travels in the
      // SAME payload as the number, always -- never a frontend-only label
      // a screen-reader or raw API consumer could miss (70c: "44(a)
      // extended to the platform's most tempting surface").
      targetedReturn = {
        valuePct: Number(sheet.targetedReturnBenchmarkPct),
        isBenchmarkOnly: true,
        disclaimer: BENCHMARK_ONLY_DISCLAIMER,
      };
    }

    return {
      productCode: product.code,
      name: product.name,
      engineType: product.engineType as OfferCard['engineType'],
      sheetVersion: sheet.version,
      narrative,
      targetedReturn,
      navHistory,
      minimumSubscriptionKobo: sheet.minimumSubscriptionKobo?.toString() ?? null,
      minimumInvestmentKobo: sheet.minimumInvestmentKobo?.toString() ?? null,
      minimumParticipationKobo: sheet.minimumParticipationKobo?.toString() ?? null,
      poolTenorMonths: sheet.poolTenorMonths ?? null,
      tenorLockInMonths: sheet.tenorLockInMonths ?? null,
      distributionFrequency: sheet.distributionFrequency ?? null,
      mandateRoleModel: sheet.mandateRoleModel ?? null,
      fundingStructure: sheet.fundingStructure ?? null,
    };
  }
}
