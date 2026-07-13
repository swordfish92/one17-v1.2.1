export interface NavComparisonRow {
  date: string;
  status: 'EXCLUDED_ARTIFACT' | 'PRICING_MATCH' | 'PRICING_VARIANCE';
  publishedTotalNav?: number;
  // Independent cross-check ONLY — derived from the transaction ledger,
  // never fed into the pricing recompute (which uses the workbook's own
  // published units, per F-HF-02's exact formula). Kept as its own field so
  // a units-reconciliation gap in the source data is never conflated with a
  // pricing-formula defect.
  recomputedUnitsOutstanding?: number;
  publishedUnitsOutstanding?: number;
  unitsCrossCheckVarianceUnits?: number;
  recomputedNavPerUnit?: number;
  publishedNavPerUnit?: number;
  navPerUnitVarianceKobo?: number;
  recomputedOffer?: number;
  publishedOffer?: number;
  recomputedBid?: number;
  publishedBid?: number;
  note: string;
}

export interface NavComparisonSummary {
  totalRows: number;
  pricingCompared: number;
  pricingMatches: number;
  pricingVariances: number;
  excludedArtifacts: number;
  toleranceNaira: number;
  unitsCrossCheckFinalTotal: number;
  unitsCrossCheckFinalPublished: number;
  rows: NavComparisonRow[];
}

export interface MudarabahAllocationComparisonSummary {
  totalRowsInReplay: number;
  allocationEventsFound: number;
  finding: string;
}
