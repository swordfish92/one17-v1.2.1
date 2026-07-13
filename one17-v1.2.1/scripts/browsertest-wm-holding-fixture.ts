// One-off fixture for visual verification of the invariant 29(b)/(c) NWCS
// pyramid + holding drill-down (task #105). Not part of the smoke suite —
// leaves persistent browsertest- data behind on purpose so the CEO/builder
// can log into the portal and ops UIs and see it rendered.
// Run with: npx tsx scripts/browsertest-wm-holding-fixture.ts
import 'dotenv/config';
import { PrismaService } from '../src/prisma/prisma.service';
import { AuditService } from '../src/audit/audit.service';
import { RbacService } from '../src/rbac/rbac.service';
import { DelegationService } from '../src/delegation/delegation.service';
import { WorkflowEngineService } from '../src/workflow/workflow.service';
import { DocumentService } from '../src/document/document.service';
import { NotificationService } from '../src/notification/notification.service';
import { ScreeningGatewayService } from '../src/screening-gateway/screening-gateway.service';
import { InvestorService } from '../src/investor/investor.service';
import { WmService } from '../src/wm/wm.service';
import { PortalAuthService } from '../src/portal-auth/portal-auth.service';
import { AuthService } from '../src/auth/auth.service';
import { MfaService } from '../src/mfa/mfa.service';
import { EventJournalService } from '../src/event-journal/event-journal.service';
import { LedgerService } from '../src/ledger/ledger.service';

const FULL_CHECKLIST = [
  { itemCode: 'UN_SC_CONSOLIDATED', listVersionOrDate: '2026-06' },
  { itemCode: 'NG_SANCTIONS_LIST', listVersionOrDate: '2026-06' },
  { itemCode: 'OFAC_SDN', listVersionOrDate: '2026-06' },
  { itemCode: 'EFCC_NFIU_ADVISORIES', listVersionOrDate: '2026-06' },
  { itemCode: 'PEP_DETERMINATION', listVersionOrDate: '2026-06' },
  { itemCode: 'ADVERSE_MEDIA', listVersionOrDate: '2026-06' },
];

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));
  const investors = new InvestorService(prisma, audit, workflow, delegation, new PortalAuthService(prisma, audit), new ScreeningGatewayService(prisma, audit, delegation, workflow, new NotificationService(prisma), new DocumentService(prisma, delegation, audit)));
  const ledger = new LedgerService(prisma, audit, delegation, workflow);
  const eventJournal = new EventJournalService(prisma, ledger);
  const wm = new WmService(prisma, audit, delegation, workflow, eventJournal);
  const portalAuth = new PortalAuthService(prisma, audit);
  const authService = new AuthService(prisma, audit, new MfaService(prisma, audit));

  const email = 'browsertest-wm-holding-investor@one17.test';
  const existing = await prisma.investor.findFirst({ where: { contactEmail: email } });
  if (existing) {
    console.log(`Fixture already exists — investorId ${existing.investorId}. Re-run scripts/cleanup-browsertest-wm-fixture.ts first if you need a fresh one.`);
    await prisma.$disconnect();
    return;
  }

  async function getOrCreateUser(userEmail: string, displayName: string, roleCode: string) {
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

  // Declare a real-estate holding with tenor/maturity/target-return fields
  // so the drill-down has something to show, plus enough value (with the
  // second declaration below) to push the client to HNI for the pyramid.
  const { asset } = await wm.declareClientAsset({
    investorId: profile.investorId,
    assetClassCode: 'REAL_ESTATE',
    description: 'Ikoyi waterfront apartment',
    declaredValueKobo: 80_000_000_00n,
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
    declaredValueKobo: 1_400_000_000_00n,
    valuationDate: new Date('2026-03-01'),
    custodyFlag: 'EXTERNAL',
    declaredByUserId: advisor.id,
  });
  await wm.recomputeTier(profile.investorId);

  // A second, later valuation on the real-estate holding so the drill-down
  // shows real (non-fabricated) history with more than one point.
  await prisma.wmClientAssetValuation.create({
    data: { wmClientAssetId: asset.id, valuationDate: new Date('2026-06-01'), valueKobo: 85_000_000_00n, recordedByUserId: advisor.id },
  });
  await prisma.wmClientAsset.update({ where: { id: asset.id }, data: { declaredValueKobo: 85_000_000_00n, valuationDate: new Date('2026-06-01') } });

  // A pending TOP_UP ticket, visible in the ops-ui pending-requests panel.
  await wm.requestTopUp(asset.id, profile.investorId, 5_000_000_00n, 'Adding to the position');

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
