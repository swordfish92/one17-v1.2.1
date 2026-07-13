import { BureauPullRequest, BureauPullResult, CreditBureauAdapter } from './bureau-adapter.types';

// Invariant 73(b) (CHECK27, CONNECTOR PACK -- CREDIT BUREAU): CRC Credit
// Bureau (Nigeria) -- PARKED. Researched (WebSearch + WebFetch against
// crccreditbureau.com, crccreditscoreapi.creditreferencenigeria.net, and
// general search): CRC's own site confirms an API program exists ("Batch
// Processing & API Solutions", "CRC B2C SUITES API", a Data Submission API
// press-announced in 2020) but the actual request/response contract is
// gated behind "Request the API Integration Kit" from
// sales@crccreditbureau.com / support@crccreditbureau.com -- no publicly
// published field names, auth scheme, or endpoint paths were found (unlike
// FirstCentral, which publishes exactly this on firstcentralcreditbureau.com
// /api/ -- see first-central.adapter.ts). Full detail in
// QUESTIONS_FOR_REVIEW.md.
//
// Per CLAUDE.md "When the spec is silent": do not invent financial/data
// logic. Guessing CRC's field names would risk silently mis-mapping a real
// credit assessment -- exactly the class of risk that section warns
// against. This adapter therefore ships as a REAL, READY slot (implements
// the same CreditBureauAdapter interface as FirstCentral, takes the same
// generic HTTPS/JSON apiConfig shape every commercial bureau API in this
// space publishes -- base URL + API credential over TLS, confirmed as the
// *general* pattern across the space, not a CRC-specific claim) but
// PERFORMS NO HTTP CALL and reproduces the EXACT pre-existing honest
// placeholder text (invariant 36c) so behavior is provably unchanged until
// CRC's Developer's Guide is obtained under a signed integration
// relationship.
export class CrcAdapter implements CreditBureauAdapter {
  readonly automationLevel = 'MANUAL_PENDING_API' as const;

  async pull(request: BureauPullRequest, apiConfig: Record<string, unknown>): Promise<BureauPullResult> {
    // PARKED: exact request/response shape requires CRC Credit Bureau's
    // contracted Developer's Guide / API Integration Kit, not publicly
    // available -- see QUESTIONS_FOR_REVIEW.md. No HTTP call is attempted.
    void apiConfig;
    return {
      status: 'PARKED',
      summary: `[BUREAU PROVIDER "${request.providerName}" NOT CONTRACTED — placeholder pull, no live vendor call made]`,
    };
  }
}
