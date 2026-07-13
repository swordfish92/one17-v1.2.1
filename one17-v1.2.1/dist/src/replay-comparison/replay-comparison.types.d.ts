export interface NavComparisonRow {
    date: string;
    status: 'EXCLUDED_ARTIFACT' | 'PRICING_MATCH' | 'PRICING_VARIANCE';
    publishedTotalNav?: number;
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
