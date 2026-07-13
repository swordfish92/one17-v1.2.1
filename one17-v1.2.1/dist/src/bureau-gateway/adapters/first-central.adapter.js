"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstCentralAdapter = void 0;
exports.readFirstCentralApiConfig = readFirstCentralApiConfig;
exports.parseLoginResponse = parseLoginResponse;
exports.parseCommercialMatchResponse = parseCommercialMatchResponse;
exports.summarizeCommercialReportResponse = summarizeCommercialReportResponse;
const DEFAULT_ENQUIRY_REASON = 'Credit assessment pull (One17 Risk)';
const DEFAULT_PRODUCT_ID = '47';
function defaultReportEndpointForProductId(productId) {
    if (productId === '47')
        return '/GetCommercialFullCreditReport';
    if (productId === '46')
        return '/GetCommercialBasicCreditReport';
    return '/commercialreports';
}
function readFirstCentralApiConfig(apiConfig) {
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
function parseLoginResponse(raw) {
    if (raw && typeof raw === 'object' && typeof raw.DataTicket === 'string') {
        const ticket = raw.DataTicket;
        return ticket.length > 0 ? ticket : null;
    }
    return null;
}
function parseCommercialMatchResponse(raw) {
    let arr;
    if (Array.isArray(raw)) {
        arr = raw;
    }
    else if (raw && typeof raw === 'object') {
        const o = raw;
        arr = Array.isArray(o.Result) ? o.Result : Array.isArray(o.Data) ? o.Data : Array.isArray(o.data) ? o.data : null;
    }
    if (!Array.isArray(arr))
        return [];
    const candidates = [];
    for (const item of arr) {
        if (!item || typeof item !== 'object')
            continue;
        const o = item;
        const matchingEngineId = o.MatchingEngineID;
        const commercialId = o.CommercialID;
        const hasEngineId = typeof matchingEngineId === 'string' || typeof matchingEngineId === 'number';
        const hasCommercialId = typeof commercialId === 'string' || typeof commercialId === 'number';
        if (!hasEngineId || !hasCommercialId)
            continue;
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
function summarizeCommercialReportResponse(raw) {
    if (raw === null || raw === undefined)
        return 'report endpoint returned no content';
    if (typeof raw !== 'object')
        return `report endpoint returned a non-object payload (typeof ${typeof raw})`;
    if (Array.isArray(raw))
        return `report endpoint returned an array payload (${raw.length} item(s))`;
    const o = raw;
    const knownSummaryKeys = ['Score', 'CreditScore', 'RiskGrade', 'Grade', 'Summary', 'ReportSummary'];
    const found = knownSummaryKeys.filter((k) => o[k] !== undefined);
    if (found.length > 0) {
        return `report retrieved -- ${found.map((k) => `${k}=${JSON.stringify(o[k])}`).join(', ')}`;
    }
    const fieldCount = Object.keys(o).length;
    return `report retrieved (${fieldCount} top-level field(s); exact score/grade field names are not publicly confirmed for this endpoint -- see QUESTIONS_FOR_REVIEW.md)`;
}
class FirstCentralAdapter {
    automationLevel = 'AUTOMATED';
    async pull(request, apiConfig) {
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
        }
        catch (err) {
            return {
                status: 'ERROR',
                summary: `FIRST CENTRAL CREDIT BUREAU -- pull failed: ${err instanceof Error ? err.message : String(err)}. No live vendor data was recorded.`,
            };
        }
    }
}
exports.FirstCentralAdapter = FirstCentralAdapter;
//# sourceMappingURL=first-central.adapter.js.map