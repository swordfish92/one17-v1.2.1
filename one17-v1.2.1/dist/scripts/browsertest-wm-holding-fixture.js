"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../src/prisma/prisma.service");
const audit_service_1 = require("../src/audit/audit.service");
const rbac_service_1 = require("../src/rbac/rbac.service");
const delegation_service_1 = require("../src/delegation/delegation.service");
const workflow_service_1 = require("../src/workflow/workflow.service");
const document_service_1 = require("../src/document/document.service");
const notification_service_1 = require("../src/notification/notification.service");
const screening_gateway_service_1 = require("../src/screening-gateway/screening-gateway.service");
const investor_service_1 = require("../src/investor/investor.service");
const wm_service_1 = require("../src/wm/wm.service");
const portal_auth_service_1 = require("../src/portal-auth/portal-auth.service");
const auth_service_1 = require("../src/auth/auth.service");
const mfa_service_1 = require("../src/mfa/mfa.service");
const event_journal_service_1 = require("../src/event-journal/event-journal.service");
const ledger_service_1 = require("../src/ledger/ledger.service");
const FULL_CHECKLIST = [
    { itemCode: 'UN_SC_CONSOLIDATED', listVersionOrDate: '2026-06' },
    { itemCode: 'NG_SANCTIONS_LIST', listVersionOrDate: '2026-06' },
    { itemCode: 'OFAC_SDN', listVersionOrDate: '2026-06' },
    { itemCode: 'EFCC_NFIU_ADVISORIES', listVersionOrDate: '2026-06' },
    { itemCode: 'PEP_DETERMINATION', listVersionOrDate: '2026-06' },
    { itemCode: 'ADVERSE_MEDIA', listVersionOrDate: '2026-06' },
];
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
    const email = 'browsertest-wm-holding-investor@one17.test';
    const existing = await prisma.investor.findFirst({ where: { contactEmail: email } });
    if (existing) {
        console.log(`Fixture already exists — investorId ${existing.investorId}. Re-run scripts/cleanup-browsertest-wm-fixture.ts first if you need a fresh one.`);
        await prisma.$disconnect();
        return;
    }
    async function getOrCreateUser(userEmail, displayName, roleCode) {
        let user = await prisma.appUser.findFirst({ where: { email: userEmail } });
        if (!user) {
            user = await prisma.appUser.create({ data: { email: userEmail, displayName } });
            await rbac.assignRole({ userId: user.id, roleCode });
        }
        return user;
    }
    const finAdmin = await getOrCreateUser('browsertest-wm-finadmin@one17.test', 'browsertest-finadmin', 'FIN_ADMIN');
    const compliance = await getOrCreateUser('browsertest-wm-compliance@one17.test', 'browsertest-compliance', 'COMPLIANCE');
    const advisor = await getOrCreateUser('browsertest-wm-advisor@one17.test', 'browsertest-advisor', 'WM_ADVISOR');
    const investor = await investors.onboard({
        fullLegalName: 'Browsertest NWCS Holding Client',
        entityType: 'HNWI_INDIVIDUAL',
        nationality: 'Nigerian',
        taxIdentificationNumber: `TIN-BROWSERTEST-WM-${Date.now()}`,
        contactEmail: email,
        contactPhone: '+2348099998888',
        registeredAddress: '1 Browsertest Close, Lagos',
        sourceOfFunds: 'Business income',
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
    await investors.approveKyc(wf.id, compliance.id);
    const profile = await wm.onboardWmClient({ investorId: investor.investorId, advisorUserId: advisor.id, onboardedByUserId: advisor.id });
    const { asset } = await wm.declareClientAsset({
        investorId: profile.investorId,
        assetClassCode: 'REAL_ESTATE',
        description: 'Ikoyi waterfront apartment',
        declaredValueKobo: 8000000000n,
        valuationDate: new Date('2026-01-15'),
        custodyFlag: 'EXTERNAL',
        declaredByUserId: advisor.id,
        maturityDate: new Date('2031-01-15'),
        tenorMonths: 60,
        targetReturnPct: 8.5,
    });
    await wm.declareClientAsset({
        investorId: profile.investorId,
        assetClassCode: 'BUSINESS_INTERESTS',
        description: 'Stake in family logistics business',
        declaredValueKobo: 140000000000n,
        valuationDate: new Date('2026-03-01'),
        custodyFlag: 'EXTERNAL',
        declaredByUserId: advisor.id,
    });
    await wm.recomputeTier(profile.investorId);
    await prisma.wmClientAssetValuation.create({
        data: { wmClientAssetId: asset.id, valuationDate: new Date('2026-06-01'), valueKobo: 8500000000n, recordedByUserId: advisor.id },
    });
    await prisma.wmClientAsset.update({ where: { id: asset.id }, data: { declaredValueKobo: 8500000000n, valuationDate: new Date('2026-06-01') } });
    await wm.requestTopUp(asset.id, profile.investorId, 500000000n, 'Adding to the position');
    const provisioned = await portalAuth.provisionForInvestor(profile.investorId);
    await authService.setPassword(advisor.id, 'BrowserTest1!');
    console.log(`Fixture created.`);
    console.log(`Investor portal login: ${email} / ${provisioned.bootstrapPassword}`);
    console.log(`Advisor ops login: browsertest-wm-advisor@one17.test / BrowserTest1!`);
    console.log(`investorId: ${profile.investorId}, holding assetId: ${asset.id}`);
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=browsertest-wm-holding-fixture.js.map