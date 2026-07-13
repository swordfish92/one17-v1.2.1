export class WmError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'WmError';
  }
}

// Amendment 21's extensible registry (spec §2) — the finite set THIS pass
// ships; adding a class later is a config row (asset_class_registry insert),
// never a code change.
export const ASSET_CLASSES: { code: string; label: string; shariahScreeningRule?: string }[] = [
  { code: 'EQUITIES_EXTERNAL', label: 'Equities (external)', shariahScreeningRule: 'AAOIFI screen: debt/market-cap < 33%, non-compliant income < 5%' },
  { code: 'REAL_ESTATE', label: 'Real estate' },
  { code: 'FIXED_DEPOSITS', label: 'Fixed deposits (other banks)', shariahScreeningRule: 'Conventional interest-bearing — non-compliant by default' },
  { code: 'BUSINESS_INTERESTS', label: 'Business interests' },
  { code: 'COMMODITIES', label: 'Commodities' },
  { code: 'FOREIGN_HOLDINGS', label: 'Foreign holdings' },
  { code: 'CASH_AT_OTHER_BANKS', label: 'Cash at other banks' },
  { code: 'SUKUK_EXTERNAL', label: 'Sukuk (external)' },
  { code: 'OTHER', label: 'Other' },
];

export type NwcsTier = 'BASE_MASS' | 'CORE_MASS' | 'UPPER_MASS' | 'MASS_AFFLUENT' | 'AFFLUENT' | 'HNI' | 'VHNI' | 'UHNI' | 'CENTIMILLIONAIRE' | 'BILLIONAIRE';

// Visualization Standard item 2 / invariant 26(b): the 10-tier Nigerian
// Wealth Classification Standard (NWCS) — USD-anchored, naira-operationalized.
// Bands are stored in USD (never kobo — invariant 10/16: a cutoff changing
// is a config-row edit) — the naira cutoff is DERIVED at read time from
// WmFxConfig's governed rate, so a rate change alone re-tiers every client.
export const TIER_BANDS: { tier: NwcsTier; minTotalWealthUsd: number; sortOrder: number; serviceDescriptor: string }[] = [
  { tier: 'BASE_MASS', minTotalWealthUsd: 0, sortOrder: 1, serviceDescriptor: 'Financial Inclusion' },
  { tier: 'CORE_MASS', minTotalWealthUsd: 5_000, sortOrder: 2, serviceDescriptor: 'Financial Stability' },
  { tier: 'UPPER_MASS', minTotalWealthUsd: 25_000, sortOrder: 3, serviceDescriptor: 'Asset Accumulation' },
  { tier: 'MASS_AFFLUENT', minTotalWealthUsd: 100_000, sortOrder: 4, serviceDescriptor: 'Structured Planning' },
  { tier: 'AFFLUENT', minTotalWealthUsd: 250_000, sortOrder: 5, serviceDescriptor: 'Preservation & Expansion' },
  { tier: 'HNI', minTotalWealthUsd: 1_000_000, sortOrder: 6, serviceDescriptor: 'Private Banking' },
  { tier: 'VHNI', minTotalWealthUsd: 5_000_000, sortOrder: 7, serviceDescriptor: 'Family Office' },
  { tier: 'UHNI', minTotalWealthUsd: 30_000_000, sortOrder: 8, serviceDescriptor: 'Institutional Structuring' },
  { tier: 'CENTIMILLIONAIRE', minTotalWealthUsd: 100_000_000, sortOrder: 9, serviceDescriptor: 'Strategic Ownership' },
  { tier: 'BILLIONAIRE', minTotalWealthUsd: 1_000_000_000, sortOrder: 10, serviceDescriptor: 'Global Capital' },
];

// Invariant 26(b): "current actual ₦1,400/$ (seed with THIS, not 1,500)".
export const DEFAULT_NAIRA_PER_USD = 1_400;

// v1.1 refinement #4 — governed shock config (invariant 10): never a
// hardcoded haircut % in WmService.
// ONE17_CUSTODY is the synthetic key for the client's One17-held book
// (aggregated across whatever product accounts they hold — this avoids
// hardcoding specific product codes into the shock config; the per-product
// mix already exists in combinedBookSnapshot's breakdown, only the shock %
// itself is applied at the aggregate level).
export const STRESS_SCENARIOS: { scenarioCode: string; label: string; shockPctByAssetClass: Record<string, number> }[] = [
  {
    scenarioCode: 'MODERATE_MARKET_CORRECTION',
    label: 'Moderate market correction',
    shockPctByAssetClass: {
      ONE17_CUSTODY: -8,
      EQUITIES_EXTERNAL: -20,
      REAL_ESTATE: -5,
      FIXED_DEPOSITS: 0,
      BUSINESS_INTERESTS: -15,
      COMMODITIES: -15,
      FOREIGN_HOLDINGS: -10,
      CASH_AT_OTHER_BANKS: 0,
      SUKUK_EXTERNAL: -3,
      OTHER: -10,
    },
  },
  {
    scenarioCode: 'SEVERE_DOWNTURN',
    label: 'Severe downturn',
    shockPctByAssetClass: {
      ONE17_CUSTODY: -20,
      EQUITIES_EXTERNAL: -45,
      REAL_ESTATE: -15,
      FIXED_DEPOSITS: 0,
      BUSINESS_INTERESTS: -35,
      COMMODITIES: -30,
      FOREIGN_HOLDINGS: -25,
      CASH_AT_OTHER_BANKS: 0,
      SUKUK_EXTERNAL: -8,
      OTHER: -25,
    },
  },
];
