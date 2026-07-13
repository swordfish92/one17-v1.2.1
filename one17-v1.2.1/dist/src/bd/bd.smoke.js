"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const rbac_service_1 = require("../rbac/rbac.service");
const auth_service_1 = require("../auth/auth.service");
const mfa_service_1 = require("../mfa/mfa.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const document_service_1 = require("../document/document.service");
const notification_service_1 = require("../notification/notification.service");
const screening_gateway_service_1 = require("../screening-gateway/screening-gateway.service");
const investor_service_1 = require("../investor/investor.service");
const portal_auth_service_1 = require("../portal-auth/portal-auth.service");
const bd_service_1 = require("./bd.service");
const RUN = Date.now().toString().slice(-8);
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
function ok(label) { console.log(`OK: ${label}`); }
function fail(label, detail) { console.error(`FAIL: ${label}`, detail ?? ''); process.exitCode = 1; }
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const investors = new investor_service_1.InvestorService(prisma, audit, workflow, delegation, new portal_auth_service_1.PortalAuthService(prisma, audit), new screening_gateway_service_1.ScreeningGatewayService(prisma, audit, delegation, workflow, new notification_service_1.NotificationService(prisma), new document_service_1.DocumentService(prisma, delegation, audit)));
    const bd = new bd_service_1.BdService(prisma, delegation, audit);
    const users = new Map();
    const makeUser = async (label, roleCode) => {
        const email = `bd-reg-${label}-${RUN}@one17.test`;
        const user = await prisma.appUser.create({ data: { email, displayName: email } });
        await rbac.assignRole({ userId: user.id, roleCode });
        users.set(label, user);
        return user;
    };
    const id = (label) => users.get(label).id;
    await makeUser('bd', 'BD');
    await makeUser('outsider', 'INVESTOR');
    const investorIds = [];
    const leadIds = [];
    await expectReject('an outsider without BD_REGISTER cannot view the register', () => bd.getRegister(id('outsider')));
    const unconvertedLead = await prisma.lead.create({
        data: { fullNameOrCompany: `Unconverted Prospect ${RUN}`, source: 'referral', createdByUserId: id('bd') },
    });
    leadIds.push(unconvertedLead.id);
    const expressInvestor = await investors.onboardExpress({
        fullLegalName: `BD Register Express Investor ${RUN}`, entityType: 'HNWI_INDIVIDUAL', nationality: 'NG',
        bvn: `BVN-BDREG-${RUN}`, contactEmail: `bdreg-express-${RUN}@one17.test`, contactPhone: '+2340000000009',
        onboardedByUserId: id('bd'), sanctionsScreenResult: 'CLEAR',
    });
    investorIds.push(expressInvestor.investorId);
    const register = await bd.getRegister(id('bd'));
    const leadRow = register.find((r) => r.source === 'LEAD' && r.id === unconvertedLead.id);
    const investorRow = register.find((r) => r.source === 'INVESTOR' && r.id === expressInvestor.investorId);
    if (leadRow?.stage === 'LEAD')
        ok('unconverted lead appears at funnel stage LEAD');
    else
        fail('unconverted lead not found at stage LEAD', leadRow);
    if (investorRow?.stage === 'EXPRESS')
        ok('Stage-1 Express investor with no product account appears at funnel stage EXPRESS');
    else
        fail('express investor not found at stage EXPRESS', investorRow);
    const ledgerEntityCode = `SMOKE-BDREG-${RUN}`;
    await prisma.ledgerEntity.create({ data: { code: ledgerEntityCode, name: 'Smoke BD Register Fund', entityType: 'FUND', primaryBasis: 'AAOIFI' } });
    await prisma.product.upsert({ where: { code: 'ONE17-HALAL-FUND' }, create: { code: 'ONE17-HALAL-FUND', name: 'Halal Fund', engineType: 'UNIT_NAV' }, update: {} });
    const account = await prisma.productAccount.create({
        data: { investorId: expressInvestor.investorId, productCode: 'ONE17-HALAL-FUND', startDate: new Date(), principalOrCommittedKobo: 40000000n },
    });
    const registerAfterFunding = await bd.getRegister(id('bd'));
    const fundedRow = registerAfterFunding.find((r) => r.source === 'INVESTOR' && r.id === expressInvestor.investorId);
    if (fundedRow?.stage === 'FUNDED')
        ok('the moment a product account carries a principal, the register derives stage FUNDED — no stored pipeline column changed');
    else
        fail('investor with a funded product account did not flip to FUNDED', fundedRow);
    await prisma.productAccount.deleteMany({ where: { id: account.id } });
    await prisma.ledgerEntity.deleteMany({ where: { code: ledgerEntityCode } });
    await prisma.investorOnboardingCase.deleteMany({ where: { investorId: { in: investorIds } } });
    await prisma.investor.deleteMany({ where: { investorId: { in: investorIds } } });
    await prisma.lead.deleteMany({ where: { id: { in: leadIds } } });
    const userIds = [...users.values()].map((u) => u.id);
    await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
    await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });
    await prisma.$disconnect();
    console.log('\nSMOKE OK — BD register (CHECK5 item 5c) against the real live DB.');
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=bd.smoke.js.map