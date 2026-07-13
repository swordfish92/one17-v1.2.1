// Invariant 70(c) (CEO directive 12-Jul-2026): "Offers & Opportunities"
// portal channel. Card-shaped read DTOs only -- OffersService never writes
// anything; Invest/Top Up itself terminates in the EXISTING governed
// SubscriptionService door (see SubscriptionService.initiatePortalSubscription),
// never a parallel money-movement path.

// Same exact phrasing already established platform-wide for a benchmark-only
// rate (grep hits: certificate.service.ts, statement.service.ts,
// ObligationsSchedulePage.tsx, SubscriptionRequestDetailPage.tsx) --
// invariant 44(a) "no promised/guaranteed rate, ANYWHERE" extended to this
// tab per 70(c)'s own text ("44(a) extended to the platform's most tempting
// surface"). Reused verbatim, never re-worded, so a screen-reader/API
// consumer sees the identical disclaimer no matter which screen rendered it.
export const BENCHMARK_ONLY_DISCLAIMER = 'Target return — benchmark only, not guaranteed';

export interface OfferBenchmarkRate {
  valuePct: number;
  isBenchmarkOnly: true;
  disclaimer: typeof BENCHMARK_ONLY_DISCLAIMER;
}

export interface OfferNavPoint {
  valuationDate: string;
  navPerUnit: string;
  totalNavKobo: string;
}

// Card-shaped read model rendered on the Offers & Opportunities tab. Every
// narrative field is copied VERBATIM off the product's currently-in-force,
// LOCKED ProductParameters sheet (ProspectusSheetService.getSheetInForceAt)
// -- OffersService never generates or edits narrative copy itself.
export interface OfferCard {
  productCode: string;
  name: string;
  engineType: 'UNIT_NAV' | 'PSR_WATERFALL' | 'MANDATE';
  sheetVersion: number;
  narrative: {
    brief: string | null;
    opportunity: string | null;
    dynamics: string | null;
    riskSummary: string | null;
    modelDescription: string | null;
  };
  // Invariant 44(a)/70(c): POOL/MANDATE only, ALWAYS benchmark-only-labeled
  // in this same payload (never a frontend-only label). Structurally null
  // for UNIT_NAV (Halal Fund) -- see navHistory below instead; invariant
  // 44(a) forbids a unit fund from carrying a target-return concept at all.
  targetedReturn: OfferBenchmarkRate | null;
  // Invariant 70(c): "HF shows historical NAV performance, never promised
  // rates." Populated ONLY for engineType UNIT_NAV, sourced from the same
  // NavRecord rows PerformanceController.listNavHistory already reads --
  // never recomputed here.
  navHistory: OfferNavPoint[] | null;
  minimumSubscriptionKobo: string | null;
  minimumInvestmentKobo: string | null;
  minimumParticipationKobo: string | null;
  poolTenorMonths: number | null;
  tenorLockInMonths: number | null;
  distributionFrequency: string | null;
  mandateRoleModel: string | null;
  fundingStructure: string | null;
}

// Compliance-approved (status ACTIVE) marketing resource, surfaced
// read-only on the same tab per 70(c)'s "general publications ... via the
// existing BD->Compliance chain" -- MarketingService.listActiveResources()
// is the only write-adjacent thing this touches, and it is a plain read.
export interface OfferPublication {
  id: string;
  title: string;
  resourceType: string;
  fileReference: string;
  version: number;
}
