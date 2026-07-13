// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/public-intake/public-intake.smoke.ts
// Proves CHECK5 item 5d (invariant 28(d)) against the real live DB: an
// unauthenticated submission writes ONLY a staging row (no Investor/
// Counterparty created), a staff member without the right capability
// cannot promote it, and promotion hands the staged payload to the SAME
// InvestorService.onboardExpress()/CounterpartyService.onboard() Flow A/B
// already use.
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { DocumentService } from '../document/document.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { NotificationService } from '../notification/notification.service';
import { ScreeningGatewayService } from '../screening-gateway/screening-gateway.service';
import { InvestorService } from '../investor/investor.service';
import { PortalAuthService } from '../portal-auth/portal-auth.service';
import { CounterpartyService } from '../counterparty/counterparty.service';
import { PrivacyNoticeService } from '../data-protection/privacy-notice.service';
import { PublicIntakeService } from './public-intake.service';

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
  const documents = new DocumentService(prisma, delegation, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));
  const investors = new InvestorService(prisma, audit, workflow, delegation, new PortalAuthService(prisma, audit), new ScreeningGatewayService(prisma, audit, delegation, workflow, new NotificationService(prisma), new DocumentService(prisma, delegation, audit)));
  const counterparties = new CounterpartyService(prisma, audit, workflow, delegation, documents, new ScreeningGatewayService(prisma, audit, delegation, workflow, new NotificationService(prisma), new DocumentService(prisma, delegation, audit)));
  const privacyNotice = new PrivacyNoticeService(prisma, audit);
  const publicIntake = new PublicIntakeService(prisma, audit, delegation, investors, counterparties, privacyNotice);

  const users = new Map<string, { id: string }>();
  const makeUser = async (label: string, roleCode: string) => {
    const email = `pub-intake-${label}-${RUN}@one17.test`;
    const user = await prisma.appUser.create({ data: { email, displayName: email } });
    await rbac.assignRole({ userId: user.id, roleCode });
    users.set(label, user);
    return user;
  };
  const id = (label: string) => users.get(label)!.id;

  await makeUser('bd', 'BD');
  await makeUser('portmgr', 'PORT_MGR');
  // SHARIAH_REV holds neither INVESTOR_ONBOARDING nor COUNTERPARTY_ONBOARDING
  // at any level — a genuine outsider for this check (the INVESTOR client
  // role itself holds INVESTOR_ONBOARDING VIEW "own records only", which
  // isn't a useful outsider fixture here since the condition text isn't
  // enforced at the generic RBAC layer).
  await makeUser('outsider', 'SHARIAH_REV');

  const investorIds: string[] = [];
  const counterpartyIds: string[] = [];
  const submissionIds: string[] = [];

  // --- Public submission writes ONLY a staging row ---
  const beforeInvestorCount = await prisma.investor.count();
  const submitted = await publicIntake.submitInvestorExpress({
    fullLegalName: `Public Applicant ${RUN}`, entityType: 'HNWI_INDIVIDUAL', nationality: 'NG',
    bvn: `BVN-PUB-${RUN}`, contactEmail: `pub-applicant-${RUN}@example.com`, contactPhone: '+2340000000099',
    privacyNoticeAcknowledged: true,
  }, '203.0.113.1');
  submissionIds.push(submitted.id);
  const afterInvestorCount = await prisma.investor.count();
  if (afterInvestorCount === beforeInvestorCount && submitted.status === 'PENDING') {
    ok('an unauthenticated submission creates ONLY a public_intake_submission row — zero Investor rows created (invariant 28d)');
  } else {
    fail('public submission unexpectedly touched Investor rows', { beforeInvestorCount, afterInvestorCount });
  }

  // --- Staff without the right capability cannot list/promote ---
  await expectReject('an outsider without INVESTOR_ONBOARDING/COUNTERPARTY_ONBOARDING VIEW cannot list the intake queue', () =>
    publicIntake.listPending(id('outsider')));

  const pending = await publicIntake.listPending(id('bd'));
  if (pending.some((p) => p.id === submitted.id)) ok('BD (holding INVESTOR_ONBOARDING VIEW) sees the pending submission in the queue');
  else fail('BD could not see the pending submission', pending);

  await expectReject('a PORT_MGR (no INVESTOR_ONBOARDING INITIATE) cannot promote an investor-express submission', () =>
    publicIntake.promoteInvestorSubmission(submitted.id, id('portmgr'), 'CLEAR'));

  // --- Promotion hands the SAME payload to the SAME onboarding service ---
  const promotedInvestor = await publicIntake.promoteInvestorSubmission(submitted.id, id('bd'), 'CLEAR');
  investorIds.push(promotedInvestor.investorId);
  if (promotedInvestor.onboardingStage === 'STAGE_1_EXPRESS' && promotedInvestor.stage1IssuedAt) {
    ok('promotion calls the REAL InvestorService.onboardExpress() — customer number issued exactly as Flow A would');
  } else {
    fail('promoted investor did not go through the real onboarding path as expected', promotedInvestor);
  }
  const submissionAfter = await prisma.publicIntakeSubmission.findUniqueOrThrow({ where: { id: submitted.id } });
  if (submissionAfter.status === 'PROMOTED' && submissionAfter.resultingInvestorId === promotedInvestor.investorId) {
    ok('submission row flips to PROMOTED with resultingInvestorId linked');
  } else {
    fail('submission row not correctly updated after promotion', submissionAfter);
  }

  await expectReject('promoting an already-PROMOTED submission a second time is refused', () =>
    publicIntake.promoteInvestorSubmission(submitted.id, id('bd'), 'CLEAR'));

  // --- Sanctions-hit at promotion still blocks customer-number issuance ---
  const flaggedSubmission = await publicIntake.submitInvestorExpress({
    fullLegalName: `Public Applicant Flagged ${RUN}`, entityType: 'HNWI_INDIVIDUAL', nationality: 'NG',
    bvn: `BVN-PUBFLAG-${RUN}`, contactEmail: `pub-applicant-flagged-${RUN}@example.com`, contactPhone: '+2340000000098',
    privacyNoticeAcknowledged: true,
  });
  submissionIds.push(flaggedSubmission.id);
  await expectReject('promoting with a FLAGGED sanctions result still blocks customer-number issuance (same rule as direct onboardExpress)', () =>
    publicIntake.promoteInvestorSubmission(flaggedSubmission.id, id('bd'), 'FLAGGED'));

  // --- Counterparty intake: same staging discipline ---
  const beforeCounterpartyCount = await prisma.counterparty.count();
  const cpSubmission = await publicIntake.submitCounterparty({
    legalName: `Public Investee ${RUN}`, counterpartyType: 'CORPORATE', purposeOfFinancing: 'Working capital',
    amountSoughtKobo: '50000000', expectedSourceOfRepayment: 'Trade receivables', creditBureauConsent: true,
    privacyNoticeAcknowledged: true,
  }, '203.0.113.2');
  submissionIds.push(cpSubmission.id);
  const afterCounterpartyCount = await prisma.counterparty.count();
  if (afterCounterpartyCount === beforeCounterpartyCount) ok('public counterparty submission also creates zero Counterparty rows until promoted');
  else fail('public counterparty submission unexpectedly created a Counterparty row', { beforeCounterpartyCount, afterCounterpartyCount });

  const promotedCounterparty = await publicIntake.promoteCounterpartySubmission(cpSubmission.id, id('portmgr'));
  counterpartyIds.push(promotedCounterparty.id);
  if (promotedCounterparty.onboardingStatus === 'DRAFT' && promotedCounterparty.creditBureauConsentAt) {
    ok('promotion calls the REAL CounterpartyService.onboard() — DRAFT status + credit-bureau consent captured exactly as Flow B would');
  } else {
    fail('promoted counterparty did not go through the real onboarding path as expected', promotedCounterparty);
  }

  // --- Reject path ---
  const rejectSubmission = await publicIntake.submitInvestorExpress({
    fullLegalName: `Spam Applicant ${RUN}`, entityType: 'HNWI_INDIVIDUAL', nationality: 'NG',
    contactEmail: `spam-${RUN}@example.com`, contactPhone: '+2340000000097',
    privacyNoticeAcknowledged: true,
  });
  submissionIds.push(rejectSubmission.id);
  const rejected = await publicIntake.reject(rejectSubmission.id, id('bd'), 'Spam / duplicate submission.');
  if (rejected.status === 'REJECTED') ok('staff can reject a submission without ever creating an Investor/Counterparty row');
  else fail('reject did not flip status to REJECTED', rejected);

  // Cleanup.
  await prisma.publicIntakeSubmission.deleteMany({ where: { id: { in: submissionIds } } });
  await prisma.investorOnboardingCase.deleteMany({ where: { investorId: { in: investorIds } } });
  await prisma.investor.deleteMany({ where: { investorId: { in: investorIds } } });
  await prisma.counterpartyOnboardingCase.deleteMany({ where: { counterpartyId: { in: counterpartyIds } } });
  await prisma.counterparty.deleteMany({ where: { id: { in: counterpartyIds } } });
  const userIds = [...users.values()].map((u) => u.id);
  await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
  await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });

  await prisma.$disconnect();
  console.log('\nSMOKE OK — Public self-registration intake staging (CHECK5 item 5d) against the real live DB.');
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
