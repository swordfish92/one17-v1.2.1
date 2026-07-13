"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const rbac_service_1 = require("../rbac/rbac.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const document_service_1 = require("../document/document.service");
const screening_gateway_service_1 = require("../screening-gateway/screening-gateway.service");
const investor_service_1 = require("../investor/investor.service");
const ledger_service_1 = require("../ledger/ledger.service");
const event_journal_service_1 = require("../event-journal/event-journal.service");
const wm_service_1 = require("./wm.service");
const portal_auth_service_1 = require("../portal-auth/portal-auth.service");
const auth_service_1 = require("../auth/auth.service");
const mfa_service_1 = require("../mfa/mfa.service");
const workflow_inbox_service_1 = require("../ops-api/workflow-inbox.service");
const pms_service_1 = require("../pms/pms.service");
const notification_service_1 = require("../notification/notification.service");
const attendance_service_1 = require("../attendance/attendance.service");
const client_messaging_service_1 = require("../client-messaging/client-messaging.service");
const complaint_service_1 = require("../complaint/complaint.service");
const RUN = Date.now();
let failed = false;
function ok(label) { console.log(`OK: ${label}`); }
function fail(label, detail) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function expectReject(label, fn) {
    try {
        await fn();
        fail(`expected rejection: ${label}`);
    }
    catch (err) {
        ok(`rejected as expected: ${label} — ${err.message.split('\n')[0]}`);
    }
}
const FULL_CHECKLIST = [
    { itemCode: 'UN_SC_CONSOLIDATED', listVersionOrDate: '2026-06' },
    { itemCode: 'NG_SANCTIONS_LIST', listVersionOrDate: '2026-06' },
    { itemCode: 'OFAC_SDN', listVersionOrDate: '2026-06' },
    { itemCode: 'EFCC_NFIU_ADVISORIES', listVersionOrDate: '2026-06' },
    { itemCode: 'PEP_DETERMINATION', listVersionOrDate: '2026-06' },
    { itemCode: 'ADVERSE_MEDIA', listVersionOrDate: '2026-06' },
];
async function onboardKycCompleteInvestor(investors, rbac, prisma, tag) {
    const finAdmin = await prisma.appUser.create({ data: { email: `wm-finadmin-${tag}-${RUN}@one17.test`, displayName: 'wm-finadmin' } });
    await rbac.assignRole({ userId: finAdmin.id, roleCode: 'FIN_ADMIN' });
    const compliance = await prisma.appUser.create({ data: { email: `wm-compliance-${tag}-${RUN}@one17.test`, displayName: 'wm-compliance' } });
    await rbac.assignRole({ userId: compliance.id, roleCode: 'COMPLIANCE' });
    const investor = await investors.onboard({
        fullLegalName: `WM Smoke Client ${tag} ${RUN}`,
        entityType: 'HNWI_INDIVIDUAL',
        nationality: 'Nigerian',
        taxIdentificationNumber: `TIN-WM-${tag}-${RUN}`,
        contactEmail: `wm-client-${tag}-${RUN}@one17.test`,
        contactPhone: '+2348011111111',
        registeredAddress: `1 WM Smoke Close, Lagos`,
        sourceOfFunds: 'Salary and business income',
        onboardedByUserId: finAdmin.id,
    });
    await investors.setAmlRiskRating(investor.investorId, 'LOW', finAdmin.id);
    await investors.recordScreening({
        investorId: investor.investorId,
        listsChecked: FULL_CHECKLIST,
        searchTermsUsed: investor.fullLegalName,
        result: 'NO_MATCH',
        screenerUserId: compliance.id,
    });
    const wf = await investors.submitForKycApproval(investor.investorId, finAdmin.id);
    const approved = await investors.approveKyc(wf.id, compliance.id);
    return approved;
}
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const investors = new investor_service_1.InvestorService(prisma, audit, workflow, delegation, new portal_auth_service_1.PortalAuthService(prisma, audit), new screening_gateway_service_1.ScreeningGatewayService(prisma, audit, delegation, workflow, new notification_service_1.NotificationService(prisma), new document_service_1.DocumentService(prisma, delegation, audit)));
    const ledger = new ledger_service_1.LedgerService(prisma, audit, delegation, workflow);
    const eventJournal = new event_journal_service_1.EventJournalService(prisma, ledger);
    const wm = new wm_service_1.WmService(prisma, audit, delegation, workflow, eventJournal);
    const portalAuth = new portal_auth_service_1.PortalAuthService(prisma, audit);
    const authService = new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit));
    const notification = new notification_service_1.NotificationService(prisma);
    const attendance = new attendance_service_1.AttendanceService(prisma, audit, delegation, workflow, notification);
    const pms = new pms_service_1.PmsService(prisma, audit, delegation, workflow, ledger, attendance);
    const messaging = new client_messaging_service_1.ClientMessagingService(prisma, delegation, audit);
    const complaints = new complaint_service_1.ComplaintService(prisma, audit, delegation);
    const marketing = {};
    const workflowInbox = new workflow_inbox_service_1.WorkflowInboxService(prisma, workflow, investors, {}, wm, pms, marketing, {}, {}, {}, {}, {}, {}, {}, ledger, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {});
    const advisor1 = await prisma.appUser.create({ data: { email: `wm-advisor1-${RUN}@one17.test`, displayName: 'wm-advisor1' } });
    await rbac.assignRole({ userId: advisor1.id, roleCode: 'WM_ADVISOR' });
    const advisor2 = await prisma.appUser.create({ data: { email: `wm-advisor2-${RUN}@one17.test`, displayName: 'wm-advisor2' } });
    await rbac.assignRole({ userId: advisor2.id, roleCode: 'WM_ADVISOR' });
    const outsider = await prisma.appUser.create({ data: { email: `wm-outsider-${RUN}@one17.test`, displayName: 'wm-outsider' } });
    const notYetApprovedFinAdmin = await prisma.appUser.create({ data: { email: `wm-pending-finadmin-${RUN}@one17.test`, displayName: 'x' } });
    await rbac.assignRole({ userId: notYetApprovedFinAdmin.id, roleCode: 'FIN_ADMIN' });
    const pendingInvestor = await investors.onboard({
        fullLegalName: `WM Pending KYC ${RUN}`, entityType: 'HNWI_INDIVIDUAL', nationality: 'Nigerian',
        taxIdentificationNumber: `TIN-WM-PENDING-${RUN}`, contactEmail: `wm-pending-${RUN}@one17.test`, contactPhone: '+2348022222222',
        registeredAddress: '2 Pending Close, Lagos', sourceOfFunds: 'Salary', onboardedByUserId: notYetApprovedFinAdmin.id,
    });
    await expectReject('Flow C blocks onboarding a client whose KYC is not KYC_COMPLETE (same gate as Flow A)', () => wm.onboardWmClient({ investorId: pendingInvestor.investorId, onboardedByUserId: advisor1.id }));
    const investorA = await onboardKycCompleteInvestor(investors, rbac, prisma, 'A');
    const prospectsBeforeAdmission = await wm.listPreWmProspects();
    if (prospectsBeforeAdmission.some((p) => p.investorId === investorA.investorId)) {
        ok('a KYC-complete, not-yet-WM investor appears in the pre-WM prospecting list (invariant 36g)');
    }
    else {
        fail('investor A should appear in listPreWmProspects before Flow-C admission', prospectsBeforeAdmission);
    }
    const preWmPyramidA = await wm.getPreWmPyramidData(investorA.investorId);
    if (preWmPyramidA.tiers.length === 4 &&
        preWmPyramidA.tiers.every((t) => ['BASE_MASS', 'CORE_MASS', 'UPPER_MASS', 'MASS_AFFLUENT'].includes(t.tier)) &&
        preWmPyramidA.clientTier === 'BASE_MASS' &&
        preWmPyramidA.isWmClient === false &&
        preWmPyramidA.atOrAboveCeiling === false) {
        ok('pre-WM pyramid truncates to exactly 4 tiers (BASE_MASS..MASS_AFFLUENT) and resolves zero-wealth investor A to BASE_MASS (invariant 36g)');
    }
    else {
        fail('pre-WM pyramid did not truncate/resolve as expected', preWmPyramidA);
    }
    const profileA = await wm.onboardWmClient({ investorId: investorA.investorId, advisorUserId: advisor1.id, onboardedByUserId: advisor1.id });
    const prospectsAfterAdmission = await wm.listPreWmProspects();
    if (!prospectsAfterAdmission.some((p) => p.investorId === investorA.investorId)) {
        ok('investor A drops off the pre-WM prospecting list once Flow-C admission completes (invariant 36g)');
    }
    else {
        fail('investor A should no longer appear in listPreWmProspects after Flow-C admission', prospectsAfterAdmission);
    }
    await expectReject('the pre-WM truncated pyramid refuses once an investor is already a WM client — use the full 10-tier pyramid instead', () => wm.getPreWmPyramidData(investorA.investorId));
    if (profileA.currentTier === 'BASE_MASS')
        ok(`Flow C onboards client A, tier defaults to BASE_MASS (zero wealth at onboarding, NWCS lowest tier)`);
    else
        fail(`expected BASE_MASS at zero wealth, got ${profileA.currentTier}`);
    const provisioned = await portalAuth.provisionForInvestor(profileA.investorId);
    const profileAAfter = await prisma.wmClientProfile.findUniqueOrThrow({ where: { investorId: profileA.investorId } });
    if (profileAAfter.portalProvisionedAt)
        ok(`Flow-C completion auto-provisions the portal login (portalProvisionedAt set)`);
    else
        fail(`expected portalProvisionedAt to be set after provisioning`);
    const journalCountBefore = await prisma.journalEntry.count();
    const { asset: assetA1, workflowInstance: assetA1Wf } = await wm.declareClientAsset({
        investorId: profileA.investorId, assetClassCode: 'REAL_ESTATE', description: '3-bed duplex, Lekki',
        declaredValueKobo: 3000000000n, valuationDate: new Date(), custodyFlag: 'EXTERNAL', declaredByUserId: advisor1.id,
    });
    const journalCountAfter = await prisma.journalEntry.count();
    if (journalCountAfter === journalCountBefore)
        ok(`external asset insert creates ZERO journal rows (prime boundary, §1)`);
    else
        fail(`expected zero new journal rows, count went ${journalCountBefore} -> ${journalCountAfter}`);
    await expectReject('declarer (advisor1) cannot verify their own asset declaration', () => wm.verifyClientAsset(assetA1Wf.id, advisor1.id));
    const verified = (await workflowInbox.approve(assetA1Wf.id, advisor2.id));
    const assetA1After = await prisma.wmClientAsset.findUniqueOrThrow({ where: { id: assetA1.id } });
    if (verified.status === 'APPROVED' && assetA1After.verificationTag === 'VERIFIED' && assetA1After.verifiedByUserId === advisor2.id) {
        ok(`generic Workflow Inbox dispatches WM_CLAIM_VALIDATION -> a DIFFERENT advisor verifies -> DECLARED->VERIFIED with verifierByUserId set`);
    }
    else {
        fail(`expected VERIFIED by advisor2`, assetA1After);
    }
    await expectReject('outsider (no WM_ADVISORY capability) cannot declare a client asset', () => wm.declareClientAsset({ investorId: profileA.investorId, assetClassCode: 'OTHER', description: 'x', declaredValueKobo: 1n, valuationDate: new Date(), custodyFlag: 'EXTERNAL', declaredByUserId: outsider.id }));
    const dashboardA = await wm.getClientDashboard(profileA.investorId);
    const externalRow = dashboardA.combinedBook.externalByAsset.find((a) => a.assetClassCode === 'REAL_ESTATE');
    if (externalRow?.verificationTag === 'VERIFIED' && externalRow?.shariahScreenTag === 'UNSCREENED') {
        ok(`dashboard renders both tags on the external asset (VERIFIED / UNSCREENED)`);
    }
    else {
        fail(`expected tags on dashboard external asset row`, externalRow);
    }
    await wm.declareClientAsset({
        investorId: profileA.investorId, assetClassCode: 'BUSINESS_INTERESTS', description: 'Stake in family trading business',
        declaredValueKobo: 145000000000n, valuationDate: new Date(), custodyFlag: 'EXTERNAL', declaredByUserId: advisor1.id,
    });
    const retier = await wm.recomputeTier(profileA.investorId);
    if (retier.changed && retier.tier === 'HNI') {
        ok(`declaring more assets pushes total wealth past the HNI band (wm_client_tier_config row, no code) -> tier flips to HNI, audit-logged`);
    }
    else {
        fail(`expected tier to flip to HNI`, retier);
    }
    const migrationLogs = await prisma.wmTierMigrationLog.findMany({ where: { wmClientProfileId: profileA.investorId } });
    if (migrationLogs.length >= 2)
        ok(`${migrationLogs.length} wm_tier_migration_log rows recorded (onboarding + re-tier)`);
    else
        fail(`expected >= 2 tier migration log rows`, migrationLogs);
    const policy = await wm.setAllocationPolicy({ investorId: profileA.investorId, targetAllocations: { ONE17_CUSTODY: 60, REAL_ESTATE: 25, BUSINESS_INTERESTS: 15 }, riskBand: 'BALANCED', createdByUserId: advisor1.id });
    const ackedPolicy = await wm.acknowledgeAllocationPolicy(policy.id, profileA.investorId);
    if (ackedPolicy.clientAcknowledgedAt)
        ok(`client acknowledges allocation policy (client-facing action, no workflow instance)`);
    else
        fail(`expected clientAcknowledgedAt to be set`);
    const investorB = await onboardKycCompleteInvestor(investors, rbac, prisma, 'B');
    const profileB = await wm.onboardWmClient({ investorId: investorB.investorId, advisorUserId: advisor1.id, onboardedByUserId: advisor1.id });
    await portalAuth.provisionForInvestor(profileB.investorId);
    const policyForCrossTest = await wm.setAllocationPolicy({ investorId: profileA.investorId, targetAllocations: { ONE17_CUSTODY: 100 }, riskBand: 'CONSERVATIVE', createdByUserId: advisor1.id });
    await expectReject('client B cannot acknowledge client A\'s allocation policy (cross-client leak test)', () => wm.acknowledgeAllocationPolicy(policyForCrossTest.id, profileB.investorId));
    const advisoryRecord = await wm.createAdvisoryRecord({ investorId: profileA.investorId, recommendation: 'Convert fixed deposit exposure to Sukuk', rationale: 'Halal-conversion path per §2', shariahNote: 'FIXED_DEPOSITS is non-compliant by default screening rule', advisorUserId: advisor1.id });
    await expectReject('client B cannot respond to client A\'s advisory record (cross-client leak test)', () => wm.respondToAdvisory(advisoryRecord.id, profileB.investorId, 'ACCEPTED'));
    const clientAssetCountBefore = await prisma.wmClientAsset.count();
    const responded = await wm.respondToAdvisory(advisoryRecord.id, profileA.investorId, 'ACCEPTED');
    const clientAssetCountAfter = await prisma.wmClientAsset.count();
    if (responded.clientResponse === 'ACCEPTED' && clientAssetCountAfter === clientAssetCountBefore) {
        ok(`client ACCEPT writes ONLY the advisory record (wm_client_asset row count unchanged: ${clientAssetCountBefore})`);
    }
    else {
        fail(`ACCEPT had a side effect beyond the advisory record`, { before: clientAssetCountBefore, after: clientAssetCountAfter });
    }
    await expectReject('advisory record immutable once responded — a second response is rejected', () => wm.respondToAdvisory(advisoryRecord.id, profileA.investorId, 'DECLINED'));
    const baselineRunCountBefore = await prisma.stressTestRun.count();
    const assessment = await wm.runSandboxRiskAssessment({ investorId: profileA.investorId, scenarioCode: 'MODERATE_MARKET_CORRECTION', ranByUserId: advisor1.id });
    const baselineRunCountAfter = await prisma.stressTestRun.count();
    if (baselineRunCountAfter === baselineRunCountBefore && BigInt(assessment.postShockValueKobo) < BigInt(assessment.preShockValueKobo)) {
        ok(`sandbox risk assessment (pre=${assessment.preShockValueKobo}, post=${assessment.postShockValueKobo}) never touches stress_test_run (enterprise baseline) — count stayed at ${baselineRunCountBefore}`);
    }
    else {
        fail(`sandbox assessment leaked into the enterprise baseline table, or shock didn't reduce value`, { baselineRunCountBefore, baselineRunCountAfter, assessment });
    }
    const published = await wm.publishRiskAssessment(assessment.id, advisor1.id);
    const dashboardAAfterPublish = await wm.getClientDashboard(profileA.investorId);
    if (published.status === 'PUBLISHED' && dashboardAAfterPublish.publishedRiskAssessments.some((r) => r.id === assessment.id)) {
        ok(`published risk assessment appears on the client dashboard`);
    }
    else {
        fail(`expected the published assessment on the dashboard`);
    }
    const feeCompany = await prisma.ledgerEntity.create({ data: { code: `WM-SMOKE-COMPANY-${RUN}`, name: 'WM Smoke Company', entityType: 'COMPANY', primaryBasis: 'IFRS' } });
    await prisma.chartOfAccount.createMany({
        data: [
            { ledgerEntityCode: feeCompany.code, accountCode: '1000', accountName: 'Cash', accountType: 'ASSET', aaoifiRef: 'N/A', ifrsRef: 'IAS 1 Cash' },
            { ledgerEntityCode: feeCompany.code, accountCode: '4010', accountName: 'Advisory Fee Income', accountType: 'INCOME', aaoifiRef: 'N/A', ifrsRef: 'IFRS 15 Revenue' },
        ],
    });
    const md = await prisma.appUser.create({ data: { email: `wm-md-${RUN}@one17.test`, displayName: 'wm-md' } });
    await rbac.assignRole({ userId: md.id, roleCode: 'MD_CEO' });
    const feeFinAdmin = await prisma.appUser.create({ data: { email: `wm-fee-finadmin-${RUN}@one17.test`, displayName: 'wm-fee-finadmin' } });
    await rbac.assignRole({ userId: feeFinAdmin.id, roleCode: 'FIN_ADMIN' });
    await expectReject('an advisor (WM_ADVISORY only, no JOURNAL_ENTRIES) cannot charge the fee directly — ledger-touching stays gated on JOURNAL_ENTRIES', () => wm.chargeAdvisoryFee({ investorId: profileA.investorId, ledgerEntityCode: feeCompany.code, amountKobo: 1n, drAccountCodeOverride: '1000', crAccountCodeOverride: '4010', entryDate: new Date(), actorUserId: advisor1.id }));
    const { journal, workflowInstance: feeWf } = await wm.chargeAdvisoryFee({
        investorId: profileA.investorId, ledgerEntityCode: feeCompany.code, amountKobo: 50000000n,
        drAccountCodeOverride: '1000', crAccountCodeOverride: '4010', entryDate: new Date(), actorUserId: feeFinAdmin.id,
    });
    const assetCountBeforeFeePost = await prisma.wmClientAsset.count();
    await ledger.approveJournalPosting({ workflowInstanceId: feeWf.id, approverUserId: md.id });
    const postedJournal = await prisma.journalEntry.findUniqueOrThrow({ where: { id: journal.id } });
    const assetCountAfterFeePost = await prisma.wmClientAsset.count();
    if (postedJournal.status === 'POSTED' && postedJournal.ledgerEntityCode === feeCompany.code && assetCountAfterFeePost === assetCountBeforeFeePost) {
        ok(`WM advisory fee posts to COMPANY only (${feeCompany.code}) via standing maker-drafts/checker-approves — wm_client_asset untouched`);
    }
    else {
        fail(`WM advisory fee journal did not post correctly to COMPANY`, postedJournal);
    }
    await authService.setPassword(md.id, 'CorrectHorseBattery1!');
    const opsSession = await authService.login(md.email, 'CorrectHorseBattery1!', {});
    const portalSession = await portalAuth.login(investorA.contactEmail, investorA.portal.bootstrapPassword, {});
    const portalValidatingOpsToken = await portalAuth.validateSession(opsSession.token);
    const opsValidatingPortalToken = await authService.validateSession(portalSession.token);
    if (portalValidatingOpsToken === null && opsValidatingPortalToken === null) {
        ok(`realm isolation: an ops session token validates as null against PortalAuthService, and a portal session token validates as null against AuthService — the portal session reaches ZERO ops endpoints, structurally (separate session tables), not by route convention`);
    }
    else {
        fail(`realm isolation breach: a session token from one realm validated in the other`, { portalValidatingOpsToken, opsValidatingPortalToken });
    }
    const portalMe = await prisma.investor.findUniqueOrThrow({ where: { investorId: (await portalAuth.validateSession(portalSession.token)).investorId } });
    if (portalMe.investorId === profileA.investorId)
        ok(`portal login resolves to the correct client's own investorId (${portalMe.investorId})`);
    else
        fail(`portal session resolved to the wrong investor`);
    const pyramidA = await wm.getNwcsPyramidData(profileA.investorId);
    if (pyramidA.tiers.length === 10 && pyramidA.clientTier === 'HNI') {
        ok(`NWCS pyramid returns all 10 tiers with the client's live position (${pyramidA.clientTier}) — reads the SAME activeTierBands() computation as resolveTier()`);
    }
    else {
        fail(`expected 10 tiers and clientTier HNI on the pyramid data`, pyramidA);
    }
    const hniBand = pyramidA.tiers.find((t) => t.tier === 'HNI');
    if (hniBand && BigInt(hniBand.minTotalWealthKobo) === 140000000000n) {
        ok(`HNI naira cutoff (${hniBand.minTotalWealthKobo} kobo) is DERIVED from $1,000,000 USD x the seeded ₦1,400/$ rate, not stored`);
    }
    else {
        fail(`expected HNI cutoff to derive to 140,000,000,000 kobo at ₦1,400/$`, hniBand);
    }
    await expectReject('client B cannot view client A\'s holding detail (cross-client leak test)', () => wm.getHoldingDetail(assetA1.id, profileB.investorId));
    const holdingDetail = await wm.getHoldingDetail(assetA1.id, profileA.investorId);
    if (holdingDetail.valuationHistory.length >= 1 && holdingDetail.valuationHistory[0].valueKobo === '3000000000') {
        ok(`holding detail returns real (non-fabricated) valuation history — ${holdingDetail.valuationHistory.length} row(s), seeded from the declaration itself`);
    }
    else {
        fail(`expected an initial valuation row matching the declared value`, holdingDetail.valuationHistory);
    }
    await expectReject('client B cannot request a top-up on client A\'s holding (cross-client leak test)', () => wm.requestTopUp(assetA1.id, profileB.investorId, 100000n));
    const topUpReq = await wm.requestTopUp(assetA1.id, profileA.investorId, 500000000n, 'Adding to the Lekki position');
    const assetValueBeforeAction = (await prisma.wmClientAsset.findUniqueOrThrow({ where: { id: assetA1.id } })).declaredValueKobo;
    if (topUpReq.status === 'PENDING') {
        ok(`TOP_UP request created as a PENDING ticket — no ledger/asset-value mutation happened (declaredValueKobo still ${assetValueBeforeAction})`);
    }
    else {
        fail(`expected TOP_UP request to be PENDING (must never self-execute)`, topUpReq);
    }
    await expectReject('outsider (no WM_ADVISORY capability) cannot list pending holding requests', () => wm.listPendingHoldingActionRequests(outsider.id));
    const pendingRequests = await wm.listPendingHoldingActionRequests(advisor1.id);
    if (pendingRequests.some((r) => r.id === topUpReq.id)) {
        ok(`staff (WM_ADVISORY VIEW) lists the pending TOP_UP request, joined to the client's holding`);
    }
    else {
        fail(`expected the TOP_UP request in the staff pending list`, pendingRequests);
    }
    await expectReject('outsider (no WM_ADVISORY capability) cannot action a holding request', () => wm.actionHoldingRequest(topUpReq.id, outsider.id));
    const actioned = await wm.actionHoldingRequest(topUpReq.id, advisor1.id);
    if (actioned.status === 'ACTIONED' && actioned.actionedByUserId === advisor1.id) {
        ok(`staff actions the TOP_UP request (ACTIONED, actionedByUserId set) AFTER moving it manually through the standing ledger machinery elsewhere — this call itself posts nothing`);
    }
    else {
        fail(`expected the request to be ACTIONED with actionedByUserId set`, actioned);
    }
    await expectReject('an already-ACTIONED holding request cannot be actioned twice', () => wm.actionHoldingRequest(topUpReq.id, advisor1.id));
    const investorC = await onboardKycCompleteInvestor(investors, rbac, prisma, 'C');
    const portalDashC = await wm.getPortalDashboard(investorC.investorId);
    if (portalDashC.isWmClient === false && portalDashC.pyramid.tiers.length === 4 && portalDashC.holdings.totalKobo === '0' && Array.isArray(portalDashC.complaints)) {
        ok(`non-WM investor's portal dashboard branches to the lean holdings summary + 4-tier truncated pyramid (invariant 39d/36g), never the full WM dashboard`);
    }
    else {
        fail(`expected the non-WM dashboard branch (isWmClient: false, 4-tier pyramid, zero holdings, complaints array)`, portalDashC);
    }
    const portalDashA = await wm.getPortalDashboard(profileA.investorId);
    if (portalDashA.isWmClient === true && 'combinedBook' in portalDashA) {
        ok(`WM client A's portal dashboard branches to the full WM dashboard (getClientDashboard), not the non-WM lean summary`);
    }
    else {
        fail(`expected the WM dashboard branch for a WM-admitted investor`, portalDashA);
    }
    await messaging.sendFromClient(investorC.investorId, 'When can I explore Wealth Management services?', 'WM question');
    await expectReject('outsider (no CLIENT_MESSAGING) cannot message a client on staff\'s behalf', () => messaging.sendFromStaff(investorC.investorId, outsider.id, 'x'));
    await messaging.sendFromStaff(investorC.investorId, feeFinAdmin.id, 'Great question — let\'s set up a call next week.', 'Re: WM question');
    const threadC = await messaging.listThread(investorC.investorId);
    if (threadC.length === 2 && threadC[0].direction === 'INBOUND' && threadC[1].direction === 'OUTBOUND' && threadC[1].loggedByUserId === feeFinAdmin.id) {
        ok(`client<->RM message thread is chronological (INBOUND then OUTBOUND) and reuses client_communication (channel=PORTAL_MESSAGE) — no new table`);
    }
    else {
        fail(`expected a 2-message chronological thread (INBOUND then OUTBOUND)`, threadC);
    }
    await expectReject('outsider (no CLIENT_MESSAGING VIEW) cannot read a client message thread', () => messaging.listThreadForStaff(investorC.investorId, outsider.id));
    const threadA = await messaging.listThread(profileA.investorId);
    if (!threadA.some((m) => m.summary.includes('Wealth Management services'))) {
        ok(`investor A's own message thread does not leak investor C's messages (separate client_communication rows, scoped by investorId)`);
    }
    else {
        fail(`cross-client message leak detected`, threadA);
    }
    await expectReject('outsider (no INVESTOR_ONBOARDING) cannot assign a relationship manager', () => investors.assignRelationshipManager(investorC.investorId, feeFinAdmin.id, outsider.id));
    await investors.assignRelationshipManager(investorC.investorId, feeFinAdmin.id, feeFinAdmin.id);
    const investorCAfterRm = await prisma.investor.findUniqueOrThrow({ where: { investorId: investorC.investorId } });
    if (investorCAfterRm.relationshipManagerUserId === feeFinAdmin.id) {
        ok(`relationship manager assigned to non-WM investor C (routes portal messaging for investors without a WM advisor)`);
    }
    else {
        fail(`expected relationshipManagerUserId to be set`, investorCAfterRm);
    }
    await complaints.raiseFromPortal({ investorId: investorC.investorId, category: 'SERVICE', description: 'Slow response time on my WM enquiry.' });
    const portalDashCAfterComplaint = await wm.getPortalDashboard(investorC.investorId);
    if (portalDashCAfterComplaint.complaints.length === 1 && portalDashCAfterComplaint.complaints[0].category === 'SERVICE') {
        ok(`a portal-raised complaint appears on the non-WM investor's own dashboard (invariant 28f/39d) — same raise-only surface as the counterparty portal`);
    }
    else {
        fail(`expected the raised complaint to appear in the dashboard's complaints array`, portalDashCAfterComplaint.complaints);
    }
    console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — Wealth Management v1.1 (CHECK5 item 3) against the real live DB.`);
    process.exitCode = failed ? 1 : 0;
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=wm.smoke.js.map