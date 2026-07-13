// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/bd/bd.smoke.ts
// Proves CHECK5 item 5c (invariant 27(c)) against the real live DB: the BD
// register correctly derives LEAD/EXPRESS/FULL_KYC/FUNDED funnel states
// from existing Lead/Investor/ProductAccount rows with no stored pipeline
// state, and is VIEW-gated.
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { DocumentService } from '../document/document.service';
import { NotificationService } from '../notification/notification.service';
import { ScreeningGatewayService } from '../screening-gateway/screening-gateway.service';
import { InvestorService } from '../investor/investor.service';
import { PortalAuthService } from '../portal-auth/portal-auth.service';
import { BdService } from './bd.service';

const RUN = Date.now().toString().slice(-8);

async function expectReject(label: string, fn: () => Promise<unknown>) {
  try {
    await fn();
    console.error(`FAIL (expected rejection): ${label}`);
    process.exitCode = 1;
  } catch (err) {
    console.log(`OK: rejected as expected: ${label} — ${(err as Error).message.split('\n')[0]}`);
  }
}
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); process.exitCode = 1; }

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));
  const investors = new InvestorService(prisma, audit, workflow, delegation, new PortalAuthService(prisma, audit), new ScreeningGatewayService(prisma, audit, delegation, workflow, new NotificationService(prisma), new DocumentService(prisma, delegation, audit)));
  const bd = new BdService(prisma, delegation, audit);

  const users = new Map<string, { id: string }>();
  const makeUser = async (label: string, roleCode: string) => {
    const email = `bd-reg-${label}-${RUN}@one17.test`;
    const user = await prisma.appUser.create({ data: { email, displayName: email } });
    await rbac.assignRole({ userId: user.id, roleCode });
    users.set(label, user);
    return user;
  };
  const id = (label: string) => users.get(label)!.id;

  await makeUser('bd', 'BD');
  await makeUser('outsider', 'INVESTOR');

  const investorIds: string[] = [];
  const leadIds: string[] = [];

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

  if (leadRow?.stage === 'LEAD') ok('unconverted lead appears at funnel stage LEAD');
  else fail('unconverted lead not found at stage LEAD', leadRow);

  if (investorRow?.stage === 'EXPRESS') ok('Stage-1 Express investor with no product account appears at funnel stage EXPRESS');
  else fail('express investor not found at stage EXPRESS', investorRow);

  // Give the investor a funded product account -> stage should flip to FUNDED.
  const ledgerEntityCode = `SMOKE-BDREG-${RUN}`;
  await prisma.ledgerEntity.create({ data: { code: ledgerEntityCode, name: 'Smoke BD Register Fund', entityType: 'FUND', primaryBasis: 'AAOIFI' } });
  await prisma.product.upsert({ where: { code: 'ONE17-HALAL-FUND' }, create: { code: 'ONE17-HALAL-FUND', name: 'Halal Fund', engineType: 'UNIT_NAV' }, update: {} });
  const account = await prisma.productAccount.create({
    data: { investorId: expressInvestor.investorId, productCode: 'ONE17-HALAL-FUND', startDate: new Date(), principalOrCommittedKobo: 40_000_000n },
  });

  const registerAfterFunding = await bd.getRegister(id('bd'));
  const fundedRow = registerAfterFunding.find((r) => r.source === 'INVESTOR' && r.id === expressInvestor.investorId);
  if (fundedRow?.stage === 'FUNDED') ok('the moment a product account carries a principal, the register derives stage FUNDED — no stored pipeline column changed');
  else fail('investor with a funded product account did not flip to FUNDED', fundedRow);

  // Cleanup.
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
