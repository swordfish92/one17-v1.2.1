// Invariant 73(b) (CHECK27, CONNECTOR PACK -- CREDIT BUREAU): shared
// interface for real credit-bureau vendor adapters. Mirrors the
// "config carries vocabulary, code resolves" pattern named in the spec
// (One17AIService.LIVE_QUERY_RESOLVERS is the cited precedent) --
// BureauGatewayService.triggerPull() looks up the adapter for the active
// provider's NAME (free-text config, not an enum) and delegates the actual
// vendor call to it. The adapter never touches capability checks, consent,
// frequency policy, cost logging, or audit -- ALL of that governance stays
// in BureauGatewayService.triggerPull(), completely unchanged. An adapter's
// only job: turn (counterparty identifying fields, this provider slot's
// apiConfig) into an honest resultSummary string (BureauPullLog.resultSummary
// is a plain String column -- no schema change here, per the hard
// constraint) -- either a real vendor-derived summary, or an honest
// "not configured" / "no match" / "error" / "not contracted" message. Never
// a fabricated score, never an uncaught throw.
export interface BureauPullRequest {
  counterpartyId: string;
  legalName: string;
  rcNumber: string | null;
  // The BureauProvider.name Risk entered for the active slot -- adapters
  // that stay PARKED reuse this to reproduce the exact pre-existing
  // placeholder string (regression-proof), and a real adapter can fold it
  // into its own summary for legibility.
  providerName: string;
}

export type BureauPullStatus = 'MATCHED' | 'NO_MATCH' | 'ERROR' | 'PARKED' | 'NOT_CONFIGURED';

export interface BureauPullResult {
  status: BureauPullStatus;
  // Human-readable text stored verbatim into BureauPullLog.resultSummary.
  summary: string;
}

// Invariant 74 (CHECK27, v1.2): "the CRC manual-fallback should be visible
// to Compliance, not just parked in a code comment." AUTOMATED = the
// adapter makes real HTTP calls to the vendor; MANUAL_PENDING_API = the
// adapter is a real, ready CreditBureauAdapter implementation but performs
// no HTTP call yet (integration kit not obtained) -- Compliance/Risk must
// still pull that bureau's report by hand outside this system today.
export type BureauAutomationLevel = 'AUTOMATED' | 'MANUAL_PENDING_API';

export interface CreditBureauAdapter {
  readonly automationLevel: BureauAutomationLevel;
  pull(request: BureauPullRequest, apiConfig: Record<string, unknown>): Promise<BureauPullResult>;
}
