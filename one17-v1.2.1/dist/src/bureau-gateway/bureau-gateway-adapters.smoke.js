"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const rbac_service_1 = require("../rbac/rbac.service");
const auth_service_1 = require("../auth/auth.service");
const mfa_service_1 = require("../mfa/mfa.service");
const delegation_service_1 = require("../delegation/delegation.service");
const document_service_1 = require("../document/document.service");
const workflow_service_1 = require("../workflow/workflow.service");
const notification_service_1 = require("../notification/notification.service");
const screening_gateway_service_1 = require("../screening-gateway/screening-gateway.service");
const counterparty_service_1 = require("../counterparty/counterparty.service");
const bureau_gateway_service_1 = require("./bureau-gateway.service");
const first_central_adapter_1 = require("./adapters/first-central.adapter");
const crc_adapter_1 = require("./adapters/crc.adapter");
const RUN = Date.now().toString().slice(-8);
function ok(label) { console.log(`OK: ${label}`); }
function fail(label, detail) { console.error(`FAIL: ${label}`, detail ?? ''); process.exitCode = 1; }
async function expectReject(label, fn) {
    try {
        await fn();
        console.error(`FAIL (expected rejection): ${label}`);
        process.exitCode = 1;
    }
    catch (err) {
        console.log(`OK: rejected as expected: ${label} — ${err.message.split('\n')[0]}`);
    }
}
function testFirstCentralParsingLogic() {
    const dataTicket = (0, first_central_adapter_1.parseLoginResponse)({ DataTicket: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.sample.signature' });
    if (dataTicket === 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.sample.signature') {
        ok('parseLoginResponse extracts DataTicket from a realistic login response');
    }
    else {
        fail('parseLoginResponse did not extract the expected DataTicket', dataTicket);
    }
    const malformedLogins = [null, undefined, {}, { DataTicket: 123 }, { DataTicket: '' }, 'not-an-object', []];
    let loginMalformedOk = true;
    for (const m of malformedLogins) {
        try {
            const result = (0, first_central_adapter_1.parseLoginResponse)(m);
            if (result !== null) {
                loginMalformedOk = false;
                fail(`parseLoginResponse should return null for malformed input`, m);
            }
        }
        catch (err) {
            loginMalformedOk = false;
            fail(`parseLoginResponse THREW on malformed input (must never crash)`, { input: m, err });
        }
    }
    if (loginMalformedOk)
        ok('parseLoginResponse handles every malformed/unexpected login payload gracefully (null, never a throw)');
    const realisticMatchResponse = [
        {
            MatchingEngineID: '178456248',
            SubscriberEnquiryID: '39059388',
            CommercialID: '13352613',
            BusinessName: 'BUREAU SMOKE VENDOR LTD',
            TradingName: 'BSV',
            RegistrationNo: 'RC1234567',
            TaxIDNo: 'TIN998877',
            AccountNo: '',
        },
    ];
    const candidates = (0, first_central_adapter_1.parseCommercialMatchResponse)(realisticMatchResponse);
    if (candidates.length === 1 &&
        candidates[0].matchingEngineId === '178456248' &&
        candidates[0].commercialId === '13352613' &&
        candidates[0].businessName === 'BUREAU SMOKE VENDOR LTD' &&
        candidates[0].registrationNo === 'RC1234567') {
        ok('parseCommercialMatchResponse maps a realistic ConnectCommercialMatch payload into the internal candidate shape');
    }
    else {
        fail('parseCommercialMatchResponse did not map the realistic payload as expected', candidates);
    }
    const enveloped = (0, first_central_adapter_1.parseCommercialMatchResponse)({ Result: realisticMatchResponse });
    if (enveloped.length === 1 && enveloped[0].commercialId === '13352613') {
        ok('parseCommercialMatchResponse unwraps a { Result: [...] } envelope variant');
    }
    else {
        fail('parseCommercialMatchResponse did not unwrap the Result-enveloped variant', enveloped);
    }
    const malformedMatches = [
        null,
        undefined,
        {},
        'not-an-object',
        42,
        [{ MatchingEngineID: '1' }],
        [{ CommercialID: '1' }],
        [null, undefined, 'garbage', 123],
        { Result: 'not-an-array' },
    ];
    let matchMalformedOk = true;
    for (const m of malformedMatches) {
        try {
            const result = (0, first_central_adapter_1.parseCommercialMatchResponse)(m);
            if (!Array.isArray(result) || result.length !== 0) {
                matchMalformedOk = false;
                fail('parseCommercialMatchResponse should return [] for malformed/incomplete input', { input: m, result });
            }
        }
        catch (err) {
            matchMalformedOk = false;
            fail('parseCommercialMatchResponse THREW on malformed input (must never crash)', { input: m, err });
        }
    }
    if (matchMalformedOk)
        ok('parseCommercialMatchResponse handles every malformed/incomplete/unexpected match payload gracefully ([], never a throw, never a half-populated candidate)');
    const summaryWithKnownKey = (0, first_central_adapter_1.summarizeCommercialReportResponse)({ RiskGrade: 'B2', SomeOtherField: 'x' });
    if (summaryWithKnownKey.includes('RiskGrade') && summaryWithKnownKey.includes('B2')) {
        ok('summarizeCommercialReportResponse surfaces a recognized summary field (RiskGrade) when present');
    }
    else {
        fail('summarizeCommercialReportResponse did not surface the known RiskGrade field', summaryWithKnownKey);
    }
    const summaryUnknownShape = (0, first_central_adapter_1.summarizeCommercialReportResponse)({ SomeVendorSpecificField1: 1, AnotherField: 2, AThirdField: 3 });
    if (summaryUnknownShape.includes('3 top-level field') && summaryUnknownShape.includes('QUESTIONS_FOR_REVIEW')) {
        ok('summarizeCommercialReportResponse falls back to an honest field-count summary for an unconfirmed report shape (never a fabricated score)');
    }
    else {
        fail('summarizeCommercialReportResponse fallback did not behave as expected', summaryUnknownShape);
    }
    const malformedReports = [null, undefined, 'a string', 42, true, [1, 2, 3]];
    let reportMalformedOk = true;
    for (const m of malformedReports) {
        try {
            const result = (0, first_central_adapter_1.summarizeCommercialReportResponse)(m);
            if (typeof result !== 'string' || result.length === 0) {
                reportMalformedOk = false;
                fail('summarizeCommercialReportResponse should always return a non-empty string', { input: m, result });
            }
        }
        catch (err) {
            reportMalformedOk = false;
            fail('summarizeCommercialReportResponse THREW on malformed input (must never crash)', { input: m, err });
        }
    }
    if (reportMalformedOk)
        ok('summarizeCommercialReportResponse handles every malformed/unexpected report payload gracefully (a string, never a throw)');
    const missingConfig = (0, first_central_adapter_1.readFirstCentralApiConfig)({});
    if (missingConfig === null)
        ok('readFirstCentralApiConfig returns null when required credentials are absent (adapter must not attempt a call)');
    else
        fail('readFirstCentralApiConfig should reject an empty apiConfig', missingConfig);
    const validConfig = (0, first_central_adapter_1.readFirstCentralApiConfig)({ baseUrl: 'https://uat.firstcentralcreditbureau.com/firstcentralrestv2/', username: 'demo', password: 'demo@123' });
    if (validConfig && validConfig.baseUrl === 'https://uat.firstcentralcreditbureau.com/firstcentralrestv2' && validConfig.productId === '47' && validConfig.reportEndpoint === '/GetCommercialFullCreditReport') {
        ok('readFirstCentralApiConfig parses a realistic apiConfig, trims trailing slash, and applies documented defaults (ProductID 47 -> Full Credit report endpoint)');
    }
    else {
        fail('readFirstCentralApiConfig did not parse the realistic apiConfig as expected', validConfig);
    }
}
async function testFirstCentralAdapterEndToEnd() {
    const http = await import('node:http');
    const server = http.createServer((req, res) => {
        let body = '';
        req.on('data', (chunk) => { body += chunk; });
        req.on('end', () => {
            res.setHeader('Content-Type', 'application/json');
            if (req.url === '/login') {
                res.end(JSON.stringify({ DataTicket: 'fixture-data-ticket' }));
            }
            else if (req.url === '/ConnectCommercialMatch') {
                const parsed = JSON.parse(body || '{}');
                if (parsed.BusinessName === 'NO MATCH LTD') {
                    res.end(JSON.stringify([]));
                }
                else {
                    res.end(JSON.stringify([
                        { MatchingEngineID: '178456248', SubscriberEnquiryID: '39059388', CommercialID: '13352613', BusinessName: parsed.BusinessName, TradingName: 'FIXTURE', RegistrationNo: parsed.BusinessRegistrationNumber, TaxIDNo: 'TIN000', AccountNo: '' },
                    ]));
                }
            }
            else if (req.url === '/GetCommercialFullCreditReport') {
                res.end(JSON.stringify({ RiskGrade: 'B1', Notes: 'fixture report' }));
            }
            else {
                res.statusCode = 404;
                res.end(JSON.stringify({ error: 'not found' }));
            }
        });
    });
    await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
    const address = server.address();
    const port = typeof address === 'object' && address ? address.port : 0;
    const baseUrl = `http://127.0.0.1:${port}`;
    const adapter = new first_central_adapter_1.FirstCentralAdapter();
    const apiConfig = { baseUrl, username: 'demo', password: 'demo@123' };
    const matched = await adapter.pull({ counterpartyId: 'cp-1', legalName: 'BUREAU SMOKE VENDOR LTD', rcNumber: 'RC1234567', providerName: 'First Central Credit Bureau' }, apiConfig);
    if (matched.status === 'MATCHED' && matched.summary.includes('13352613') && matched.summary.includes('BUREAU SMOKE VENDOR LTD') && matched.summary.includes('RiskGrade')) {
        ok('FirstCentralAdapter.pull() end-to-end (login -> match -> report) against a fixture server produces a MATCHED result carrying the real matched fields');
    }
    else {
        fail('FirstCentralAdapter.pull() end-to-end MATCHED case did not behave as expected', matched);
    }
    const noMatch = await adapter.pull({ counterpartyId: 'cp-2', legalName: 'NO MATCH LTD', rcNumber: 'RC0000000', providerName: 'First Central Credit Bureau' }, apiConfig);
    if (noMatch.status === 'NO_MATCH' && noMatch.summary.includes('NO MATCH LTD')) {
        ok('FirstCentralAdapter.pull() end-to-end produces an honest NO_MATCH result when the vendor returns zero candidates');
    }
    else {
        fail('FirstCentralAdapter.pull() end-to-end NO_MATCH case did not behave as expected', noMatch);
    }
    const notConfigured = await adapter.pull({ counterpartyId: 'cp-3', legalName: 'X', rcNumber: 'RC1', providerName: 'First Central Credit Bureau' }, {});
    if (notConfigured.status === 'NOT_CONFIGURED' && notConfigured.summary.includes('missing required credentials')) {
        ok('FirstCentralAdapter.pull() refuses gracefully (NOT_CONFIGURED, no HTTP attempt) when apiConfig lacks credentials');
    }
    else {
        fail('FirstCentralAdapter.pull() NOT_CONFIGURED case did not behave as expected', notConfigured);
    }
    const noRc = await adapter.pull({ counterpartyId: 'cp-4', legalName: 'NO RC LTD', rcNumber: null, providerName: 'First Central Credit Bureau' }, apiConfig);
    if (noRc.status === 'ERROR' && noRc.summary.includes('no RC number')) {
        ok('FirstCentralAdapter.pull() refuses gracefully when the counterparty has no RC number on file');
    }
    else {
        fail('FirstCentralAdapter.pull() missing-RC case did not behave as expected', noRc);
    }
    const gremlinServer = http.createServer((req, res) => {
        res.setHeader('Content-Type', 'application/json');
        if (req.url === '/login')
            res.end(JSON.stringify({ DataTicket: 'ticket' }));
        else if (req.url === '/ConnectCommercialMatch')
            res.end(JSON.stringify([{ MatchingEngineID: '1', SubscriberEnquiryID: '1', CommercialID: '1', BusinessName: 'X' }]));
        else if (req.url === '/GetCommercialFullCreditReport') {
            res.end('not valid json {{{');
        }
        else {
            res.statusCode = 404;
            res.end('{}');
        }
    });
    await new Promise((resolve) => gremlinServer.listen(0, '127.0.0.1', resolve));
    const gremlinAddress = gremlinServer.address();
    const gremlinPort = typeof gremlinAddress === 'object' && gremlinAddress ? gremlinAddress.port : 0;
    const gremlinResult = await adapter.pull({ counterpartyId: 'cp-5', legalName: 'GREMLIN LTD', rcNumber: 'RC999', providerName: 'First Central Credit Bureau' }, { baseUrl: `http://127.0.0.1:${gremlinPort}`, username: 'demo', password: 'demo@123' });
    if (gremlinResult.status === 'MATCHED' && gremlinResult.summary.includes('report endpoint returned no content')) {
        ok('FirstCentralAdapter.pull() degrades gracefully (never a crash) when the vendor returns non-JSON on the report step -- the malformed report body is caught by res.json().catch(() => null) and summarized honestly (never a fabricated score)');
    }
    else {
        fail('FirstCentralAdapter.pull() did not degrade gracefully on a malformed report response', gremlinResult);
    }
    await new Promise((resolve) => gremlinServer.close(() => resolve()));
    await new Promise((resolve) => server.close(() => resolve()));
}
async function testCrcAdapterStaysParked() {
    const originalFetch = global.fetch;
    let fetchWasCalled = false;
    global.fetch = (async (...args) => {
        fetchWasCalled = true;
        return originalFetch(...args);
    });
    try {
        const adapter = new crc_adapter_1.CrcAdapter();
        const result = await adapter.pull({ counterpartyId: 'cp-1', legalName: 'CRC SMOKE VENDOR LTD', rcNumber: 'RC7654321', providerName: 'CRC Credit Bureau' }, { baseUrl: 'https://example.test', apiKey: 'whatever' });
        const expected = '[BUREAU PROVIDER "CRC Credit Bureau" NOT CONTRACTED — placeholder pull, no live vendor call made]';
        if (result.status === 'PARKED' && result.summary === expected) {
            ok('CrcAdapter.pull() reproduces the EXACT pre-existing honest-placeholder string verbatim (regression-proof, not a new capability)');
        }
        else {
            fail('CrcAdapter.pull() did not reproduce the exact pre-existing placeholder', { result, expected });
        }
        if (!fetchWasCalled) {
            ok('CrcAdapter.pull() makes NO HTTP call whatsoever (no guessed vendor contract is ever invoked)');
        }
        else {
            fail('CrcAdapter.pull() unexpectedly attempted a network call — CRC has no confirmed public API contract');
        }
    }
    finally {
        global.fetch = originalFetch;
    }
}
async function testServiceResolvesAdaptersByProviderName() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const documents = new document_service_1.DocumentService(prisma, delegation, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const counterparties = new counterparty_service_1.CounterpartyService(prisma, audit, workflow, delegation, documents, new screening_gateway_service_1.ScreeningGatewayService(prisma, audit, delegation, workflow, new notification_service_1.NotificationService(prisma), new document_service_1.DocumentService(prisma, delegation, audit)));
    const bureauGateway = new bureau_gateway_service_1.BureauGatewayService(prisma, audit, delegation);
    const http = await import('node:http');
    const fixture = http.createServer((req, res) => {
        let body = '';
        req.on('data', (c) => { body += c; });
        req.on('end', () => {
            res.setHeader('Content-Type', 'application/json');
            if (req.url === '/login')
                res.end(JSON.stringify({ DataTicket: 'svc-ticket' }));
            else if (req.url === '/ConnectCommercialMatch') {
                const parsed = JSON.parse(body || '{}');
                res.end(JSON.stringify([{ MatchingEngineID: '1', SubscriberEnquiryID: '1', CommercialID: '999', BusinessName: parsed.BusinessName, RegistrationNo: parsed.BusinessRegistrationNumber }]));
            }
            else if (req.url === '/GetCommercialFullCreditReport')
                res.end(JSON.stringify({ RiskGrade: 'A3' }));
            else {
                res.statusCode = 404;
                res.end('{}');
            }
        });
    });
    await new Promise((resolve) => fixture.listen(0, '127.0.0.1', resolve));
    const fixtureAddress = fixture.address();
    const fixturePort = typeof fixtureAddress === 'object' && fixtureAddress ? fixtureAddress.port : 0;
    const makeUser = async (label, roleCode) => {
        const email = `bureau-adapters-smoke-${label}-${RUN}@one17.test`;
        const user = await prisma.appUser.create({ data: { email, displayName: email } });
        await rbac.assignRole({ userId: user.id, roleCode });
        return user;
    };
    const riskUser = await makeUser('risk', 'RISK_DEPT');
    const portOff = await makeUser('portoff', 'PORT_OFF');
    const compliance = await makeUser('compliance', 'COMPLIANCE');
    const ic1 = await makeUser('ic1', 'SAU_INTERNAL_CONTROL');
    const riskReview = await makeUser('riskreview', 'RISK_DEPT');
    const onboardToComplete = async (label, rcNumber) => {
        const cp = await counterparties.onboard({
            legalName: `Bureau Adapters Smoke ${label} ${RUN}`, counterpartyType: 'SME', purposeOfFinancing: 'Working capital',
            amountSoughtKobo: 100000000n, expectedSourceOfRepayment: 'Sales receipts', creditBureauConsent: true,
            contactEmail: `bureau-adapters-smoke-${label}-obligor-${RUN}@one17.test`, onboardedByUserId: portOff.id,
        });
        await prisma.counterparty.update({ where: { id: cp.id }, data: { rcNumber } });
        await counterparties.recordComplianceRiskAssessment({
            counterpartyId: cp.id,
            riskMetricGrades: ['GEOGRAPHY', 'CLIENT_TYPE', 'SOURCE_OF_FUNDS', 'PEP_STATUS', 'SANCTIONS_STATUS', 'TRANSACTION_COMPLEXITY', 'BENEFICIAL_OWNERSHIP', 'SOURCE_OF_WEALTH']
                .map((metricCode) => ({ metricCode, grade: 'LOW', rationale: 'Bureau adapters smoke test.' })),
            pepSanctionsGrid: [
                { target: 'INVESTEE_OR_INSTITUTIONAL_NAME', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
                { target: 'DIRECTOR_OR_REP', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
                { target: 'BENEFICIAL_OWNER', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
            ],
            assessedByUserId: compliance.id,
        });
        const instance = await counterparties.submitOnboardingCaseForReview(cp.id, portOff.id);
        await counterparties.recordIc1Review({ workflowInstanceId: instance.id, checklist: { KYC_COMPLETE: 'PASS' }, pass: true, approverUserId: ic1.id });
        await counterparties.recordRiskReview({ workflowInstanceId: instance.id, periodicReviewFrequency: 'QUARTERLY', approvedExposureLimitKobo: 80000000n, approverUserId: riskReview.id });
        await counterparties.recordIc2Review({ workflowInstanceId: instance.id, checklist: { ALL_STEPS_SIGNED: 'PASS' }, outcome: 'SATISFACTORY', approverUserId: ic1.id });
        return prisma.counterparty.findUniqueOrThrow({ where: { id: cp.id } });
    };
    const cpFirstCentral = await onboardToComplete('firstcentral', 'RC1112223');
    const cpCrc = await onboardToComplete('crc', 'RC4445556');
    const slot1Before = await prisma.bureauProvider.findUnique({ where: { providerSlot: 1 } });
    const slot2Before = await prisma.bureauProvider.findUnique({ where: { providerSlot: 2 } });
    const anyActiveBefore = await prisma.bureauProvider.findFirst({ where: { isActive: true } });
    if (anyActiveBefore) {
        console.log('SKIP: adapter-resolution-by-provider-name section — a provider is already active from a prior/real session (left untouched).');
    }
    else {
        await bureauGateway.configureProvider({ providerSlot: 1, name: `First Central Credit Bureau`, apiConfig: { baseUrl: `http://127.0.0.1:${fixturePort}`, username: 'demo', password: 'demo@123' }, costPerPullKobo: 30000n, isActive: true }, riskUser.id);
        const pullFc = await bureauGateway.triggerPull(cpFirstCentral.id, portOff.id);
        if (pullFc.resultSummary.includes('FIRST CENTRAL CREDIT BUREAU') && pullFc.resultSummary.includes('999') && !pullFc.resultSummary.includes('NOT CONTRACTED')) {
            ok('triggerPull() resolves "First Central Credit Bureau" to the real adapter and records a real matched-summary result (not the placeholder)');
        }
        else {
            fail('triggerPull() did not resolve to the FirstCentral adapter as expected', pullFc);
        }
        await prisma.bureauPullLog.deleteMany({ where: { counterpartyId: cpFirstCentral.id } });
        await bureauGateway.configureProvider({ providerSlot: 1, name: `CRC Credit Bureau`, apiConfig: { baseUrl: 'https://example.test' }, costPerPullKobo: 30000n, isActive: true }, riskUser.id);
        const pullCrc = await bureauGateway.triggerPull(cpCrc.id, portOff.id);
        if (pullCrc.resultSummary === `[BUREAU PROVIDER "CRC Credit Bureau" NOT CONTRACTED — placeholder pull, no live vendor call made]`) {
            ok('triggerPull() resolves "CRC Credit Bureau" to the parked adapter and records the exact unchanged honest placeholder (regression-proof)');
        }
        else {
            fail('triggerPull() did not resolve to the parked CRC adapter as expected', pullCrc);
        }
        await prisma.bureauPullLog.deleteMany({ where: { counterpartyId: cpCrc.id } });
        await bureauGateway.configureProvider({ providerSlot: 1, name: `Some Other Uncontracted Vendor`, apiConfig: {}, costPerPullKobo: 30000n, isActive: true }, riskUser.id);
        const pullOther = await bureauGateway.triggerPull(cpFirstCentral.id, portOff.id);
        if (pullOther.resultSummary === `[BUREAU PROVIDER "Some Other Uncontracted Vendor" NOT CONTRACTED — placeholder pull, no live vendor call made]`) {
            ok('triggerPull() falls through to the original untouched placeholder for any provider name that is neither First Central nor CRC');
        }
        else {
            fail('triggerPull() fallback for an unnamed provider did not behave as expected', pullOther);
        }
        await prisma.bureauPullLog.deleteMany({ where: { counterpartyId: cpFirstCentral.id } });
        if (slot1Before) {
            await prisma.bureauProvider.update({ where: { providerSlot: 1 }, data: { name: slot1Before.name, apiConfig: slot1Before.apiConfig, costPerPullKobo: slot1Before.costPerPullKobo, isActive: slot1Before.isActive } });
        }
        else {
            await prisma.bureauProvider.delete({ where: { providerSlot: 1 } });
        }
    }
    void slot2Before;
    await new Promise((resolve) => fixture.close(() => resolve()));
    const cpIds = [cpFirstCentral.id, cpCrc.id];
    await prisma.bureauPullLog.deleteMany({ where: { counterpartyId: { in: cpIds } } });
    const cases = await prisma.counterpartyOnboardingCase.findMany({ where: { counterpartyId: { in: cpIds } } });
    const wfIds = cases.map((c) => c.workflowInstanceId).filter((x) => !!x);
    await prisma.workflowStepApproval.deleteMany({ where: { workflowInstanceId: { in: wfIds } } });
    await prisma.workflowInstance.deleteMany({ where: { id: { in: wfIds } } });
    await prisma.counterpartyOnboardingCase.deleteMany({ where: { counterpartyId: { in: cpIds } } });
    await prisma.counterparty.deleteMany({ where: { id: { in: cpIds } } });
    const userIds = [riskUser.id, portOff.id, compliance.id, ic1.id, riskReview.id];
    await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
    await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });
    await prisma.$disconnect();
}
async function main() {
    testFirstCentralParsingLogic();
    await testFirstCentralAdapterEndToEnd();
    await testCrcAdapterStaysParked();
    await testServiceResolvesAdaptersByProviderName();
    console.log('\nSMOKE OK — BureauGateway real adapters (invariant 73b, CHECK27) — FirstCentral real mapping proven, CRC parked behavior proven unchanged.');
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=bureau-gateway-adapters.smoke.js.map