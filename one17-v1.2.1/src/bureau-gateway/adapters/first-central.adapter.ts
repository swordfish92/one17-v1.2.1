import { BureauPullRequest, BureauPullResult, CreditBureauAdapter } from './bureau-adapter.types';

// Invariant 73(b) (CHECK27, CONNECTOR PACK -- CREDIT BUREAU): FirstCentral
// Credit Bureau (Nigeria, CBN-licensed) publishes its own integration
// contract on its public site (firstcentralcreditbureau.com/api/, UAT base
// https://uat.firstcentralcreditbureau.com/firstcentralrestv2) -- confirmed:
//
//   1. POST {baseUrl}/login  { "username": "...", "password": "..." }
//        -> { "DataTicket": "<JWT, expires ~5h>" }  (validate via
//        /ValidateTicket)
//   2. POST {baseUrl}/ConnectCommercialMatch
//        { DataTicket, EnquiryReason, BusinessName,
//          BusinessRegistrationNumber, AccountNumber, ProductID }
//        -> array of match candidates, fields confirmed on the docs page:
//        MatchingEngineID, SubscriberEnquiryID, CommercialID, BusinessName,
//        TradingName, RegistrationNo, TaxIDNo, AccountNo.
//   3. POST {baseUrl}/GetCommercialBasicCreditReport (or
//        /GetCommercialFullCreditReport / generic /commercialreports,
//        selected by ProductID -- Basic Credit=46, Full Credit=47, Mini
//        Report=72) with { DataTicket, commercialID, EnquiryID,
//        commercialMergeList, SubscriberEnquiryEngineID } -> the report body.
//
// This maps cleanly onto Counterparty's already-carried fields: legalName ->
// BusinessName, rcNumber -> BusinessRegistrationNumber (Counterparty is an
// SME/corporate investee -- the COMMERCIAL match/report path, not the
// consumer/BVN path, which has no matching field on Counterparty today).
//
// PARKED, narrowly: FirstCentral's docs page shows the REQUEST body for the
// report-retrieval step verbatim but does NOT show the literal field names
// inside the report RESPONSE body (only that it "returns structured JSON
// with consumer/commercial details, matching rates, and report data
// depending on product type"). summarizeCommercialReportResponse() below is
// therefore intentionally defensive -- it never invents a specific
// score/grade field name; see QUESTIONS_FOR_REVIEW.md.
export interface FirstCentralApiConfig {
  baseUrl: string;
  username: string;
  password: string;
  enquiryReason: string;
  productId: string;
  reportEndpoint: string;
}

const DEFAULT_ENQUIRY_REASON = 'Credit assessment pull (One17 Risk)';
// ConnectCommercialMatch's own published sample request uses ProductID
// "47" (Full Credit) verbatim -- kept as the default; Risk can override to
// "46" (Basic Credit) or "72" (Mini Report) via apiConfig.productId per
// whatever product is actually contracted.
const DEFAULT_PRODUCT_ID = '47';

function defaultReportEndpointForProductId(productId: string): string {
  if (productId === '47') return '/GetCommercialFullCreditReport';
  if (productId === '46') return '/GetCommercialBasicCreditReport';
  // Mini Report (72) and any other product ID: fall back to the documented
  // generic endpoint rather than guessing a report-specific path name.
  return '/commercialreports';
}

export function readFirstCentralApiConfig(apiConfig: Record<string, unknown>): FirstCentralApiConfig | null {
  const baseUrlRaw = apiConfig?.baseUrl;
  const usernameRaw = apiConfig?.username;
  const passwordRaw = apiConfig?.password;
  if (typeof baseUrlRaw !== 'string' || !baseUrlRaw || typeof usernameRaw !== 'string' || !usernameRaw || typeof passwordRaw !== 'string' || !passwordRaw) {
    return null;
  }
  const productId = typeof apiConfig.productId === 'string' && apiConfig.productId ? apiConfig.productId : DEFAULT_PRODUCT_ID;
  return {
    baseUrl: baseUrlRaw.replace(/\/$/, ''),
    username: usernameRaw,
    password: passwordRaw,
    enquiryReason: typeof apiConfig.enquiryReason === 'string' && apiConfig.enquiryReason ? apiConfig.enquiryReason : DEFAULT_ENQUIRY_REASON,
    productId,
    reportEndpoint: typeof apiConfig.reportEndpoint === 'string' && apiConfig.reportEndpoint ? apiConfig.reportEndpoint : defaultReportEndpointForProductId(productId),
  };
}

// --- Pure parsing logic (no I/O) -- exported so the smoke test proves the
// mapping directly against realistic sample payloads without a live vendor
// call, and so a malformed/unexpected payload is provably handled without a
// crash. ---

export function parseLoginResponse(raw: unknown): string | null {
  if (raw && typeof raw === 'object' && typeof (raw as Record<string, unknown>).DataTicket === 'string') {
    const ticket = (raw as Record<string, unknown>).DataTicket as string;
    return ticket.length > 0 ? ticket : null;
  }
  return null;
}

export interface CommercialMatchCandidate {
  matchingEngineId: string;
  subscriberEnquiryId: string;
  commercialId: string;
  businessName: string;
  tradingName?: string;
  registrationNo?: string;
  taxIdNo?: string;
  accountNo?: string;
}

// Defensive: the docs page's own sample shows a bare array of candidates,
// but some FirstCentral deployments are known to wrap list responses in an
// envelope -- unwrap the first array found under a few common envelope keys
// rather than assuming one specific shape. Any candidate missing BOTH of
// its two required identifiers (MatchingEngineID, CommercialID) is skipped,
// never allowed to produce a half-populated downstream report request.
export function parseCommercialMatchResponse(raw: unknown): CommercialMatchCandidate[] {
  let arr: unknown;
  if (Array.isArray(raw)) {
    arr = raw;
  } else if (raw && typeof raw === 'object') {
    const o = raw as Record<string, unknown>;
    arr = Array.isArray(o.Result) ? o.Result : Array.isArray(o.Data) ? o.Data : Array.isArray(o.data) ? o.data : null;
  }
  if (!Array.isArray(arr)) return [];

  const candidates: CommercialMatchCandidate[] = [];
  for (const item of arr) {
    if (!item || typeof item !== 'object') continue;
    const o = item as Record<string, unknown>;
    const matchingEngineId = o.MatchingEngineID;
    const commercialId = o.CommercialID;
    const hasEngineId = typeof matchingEngineId === 'string' || typeof matchingEngineId === 'number';
    const hasCommercialId = typeof commercialId === 'string' || typeof commercialId === 'number';
    if (!hasEngineId || !hasCommercialId) continue;
    candidates.push({
      matchingEngineId: String(matchingEngineId),
      subscriberEnquiryId: o.SubscriberEnquiryID != null ? String(o.SubscriberEnquiryID) : '',
      commercialId: String(commercialId),
      businessName: typeof o.BusinessName === 'string' ? o.BusinessName : '',
      tradingName: typeof o.TradingName === 'string' ? o.TradingName : undefined,
      registrationNo: typeof o.RegistrationNo === 'string' ? o.RegistrationNo : undefined,
      taxIdNo: typeof o.TaxIDNo === 'string' ? o.TaxIDNo : undefined,
      accountNo: typeof o.AccountNo === 'string' ? o.AccountNo : undefined,
    });
  }
  return candidates;
}

// PARKED (see file header): never invents a specific score/grade field
// name for the report body -- looks for a small set of commonly-published
// summary-style keys and otherwise falls back to an honest field count.
export function summarizeCommercialReportResponse(raw: unknown): string {
  if (raw === null || raw === undefined) return 'report endpoint returned no content';
  if (typeof raw !== 'object') return `report endpoint returned a non-object payload (typeof ${typeof raw})`;
  if (Array.isArray(raw)) return `report endpoint returned an array payload (${raw.length} item(s))`;
  const o = raw as Record<string, unknown>;
  const knownSummaryKeys = ['Score', 'CreditScore', 'RiskGrade', 'Grade', 'Summary', 'ReportSummary'];
  const found = knownSummaryKeys.filter((k) => o[k] !== undefined);
  if (found.length > 0) {
    return `report retrieved -- ${found.map((k) => `${k}=${JSON.stringify(o[k])}`).join(', ')}`;
  }
  const fieldCount = Object.keys(o).length;
  return `report retrieved (${fieldCount} top-level field(s); exact score/grade field names are not publicly confirmed for this endpoint -- see QUESTIONS_FOR_REVIEW.md)`;
}

// --- Orchestration (the only I/O in this file) ---

export class FirstCentralAdapter implements CreditBureauAdapter {
  readonly automationLevel = 'AUTOMATED' as const;

  async pull(request: BureauPullRequest, apiConfig: Record<string, unknown>): Promise<BureauPullResult> {
    const config = readFirstCentralApiConfig(apiConfig ?? {});
    if (!config) {
      return {
        status: 'NOT_CONFIGURED',
        summary: `FIRST CENTRAL CREDIT BUREAU -- provider slot "${request.providerName}" is active but apiConfig is missing required credentials (baseUrl/username/password). Risk/ICT must complete configuration in Vendor Gateways before a live pull can run.`,
      };
    }
    if (!request.rcNumber) {
      return {
        status: 'ERROR',
        summary: `FIRST CENTRAL CREDIT BUREAU -- counterparty "${request.legalName}" has no RC number on file; a commercial bureau match requires one.`,
      };
    }

    try {
      const loginRes = await fetch(`${config.baseUrl}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: config.username, password: config.password }),
      });
      if (!loginRes.ok) {
        return { status: 'ERROR', summary: `FIRST CENTRAL CREDIT BUREAU -- login failed: HTTP ${loginRes.status} ${loginRes.statusText}.` };
      }
      const dataTicket = parseLoginResponse(await loginRes.json().catch(() => null));
      if (!dataTicket) {
        return { status: 'ERROR', summary: 'FIRST CENTRAL CREDIT BUREAU -- login response did not contain a usable DataTicket.' };
      }

      const matchRes = await fetch(`${config.baseUrl}/ConnectCommercialMatch`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          DataTicket: dataTicket,
          EnquiryReason: config.enquiryReason,
          BusinessName: request.legalName,
          BusinessRegistrationNumber: request.rcNumber,
          AccountNumber: '',
          ProductID: config.productId,
        }),
      });
      if (!matchRes.ok) {
        return { status: 'ERROR', summary: `FIRST CENTRAL CREDIT BUREAU -- commercial match request failed: HTTP ${matchRes.status} ${matchRes.statusText}.` };
      }
      const candidates = parseCommercialMatchResponse(await matchRes.json().catch(() => null));
      if (candidates.length === 0) {
        return {
          status: 'NO_MATCH',
          summary: `FIRST CENTRAL CREDIT BUREAU -- no matching business record found for "${request.legalName}" (RC ${request.rcNumber}).`,
        };
      }
      const best = candidates[0];

      const reportRes = await fetch(`${config.baseUrl}${config.reportEndpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          DataTicket: dataTicket,
          commercialID: best.commercialId,
          EnquiryID: best.subscriberEnquiryId,
          commercialMergeList: best.commercialId,
          SubscriberEnquiryEngineID: best.matchingEngineId,
        }),
      });
      if (!reportRes.ok) {
        return { status: 'ERROR', summary: `FIRST CENTRAL CREDIT BUREAU -- report request failed for matched CommercialID ${best.commercialId}: HTTP ${reportRes.status} ${reportRes.statusText}.` };
      }
      const reportSummary = summarizeCommercialReportResponse(await reportRes.json().catch(() => null));

      return {
        status: 'MATCHED',
        summary: `FIRST CENTRAL CREDIT BUREAU -- matched CommercialID ${best.commercialId} for "${best.businessName || request.legalName}" (RC ${best.registrationNo || request.rcNumber}), Enquiry ${best.subscriberEnquiryId || 'n/a'}. ${reportSummary}.`,
      };
    } catch (err) {
      return {
        status: 'ERROR',
        summary: `FIRST CENTRAL CREDIT BUREAU -- pull failed: ${err instanceof Error ? err.message : String(err)}. No live vendor data was recorded.`,
      };
    }
  }
}
