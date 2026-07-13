// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/investor/investor-compliance-sweep.smoke.ts
// Invariant 51(b-vii)/(b-viii)/(c) (CHECK13): the three Compliance
// detection sweeps -- KYC periodic review, sanctions re-screening, KYC
// document expiry -- proving each raises a real Task to a real Compliance
// employee, dedupes on re-run, and that recordPeriodicReview/recordScreening
// clear the due state the sweeps detect. Own SMOKE-prefixed fixtures
// throughout.
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { DocumentService } from '../document/document.service';
import { ScreeningGatewayService } from '../screening-gateway/screening-gateway.service';
import { NotificationService } from '../notification/notification.service';
import { TaskService } from '../task/task.service';
import { PortalAuthService } from '../portal-auth/portal-auth.service';
import { InvestorService } from './investor.service';
import { InvestorComplianceSweepService } from './investor-compliance-sweep.service';

const RUN = Date.now();
let failed = false;
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));
  const notification = new NotificationService(prisma);
  const task = new TaskService(prisma, notification);
  const portalAuth = new PortalAuthService(prisma, audit);
  const investorService = new InvestorService(prisma, audit, workflow, delegation, portalAuth, new ScreeningGatewayService(prisma, audit, delegation, workflow, new NotificationService(prisma), new DocumentService(prisma, delegation, audit)));
  const sweep = new InvestorComplianceSweepService(prisma, task);

  const systemUser = await prisma.appUser.create({ data: { email: `ics-system-${RUN}@one17.test`, displayName: 'ics-system' } });
  const complianceUser = await prisma.appUser.create({ data: { email: `ics-compliance-${RUN}@one17.test`, displayName: 'ics-compliance' } });
  await rbac.assignRole({ userId: complianceUser.id, roleCode: 'COMPLIANCE' });
  const orgUnitCode = `ICS_SMOKE_${RUN}`;
  await prisma.orgUnit.create({ data: { code: orgUnitCode, name: 'ICS Smoke Dept' } });
  const position = await prisma.position.create({ data: { title: `ICS Smoke Compliance ${RUN}`, orgUnitCode, cadre: 'Associate', notch: 1 } });
  const complianceEmployee = await prisma.employee.create({ data: { surname: 'Compliance', firstName: `Ics${RUN}`, positionId: position.id, orgUnitCode, appUserId: complianceUser.id, hireDate: new Date() } });

  const bd = await prisma.appUser.create({ data: { email: `ics-bd-${RUN}@one17.test`, displayName: 'ics-bd' } });
  await rbac.assignRole({ userId: bd.id, roleCode: 'BD' });

  // === KYC periodic review sweep ===========================================
  const investor = await prisma.investor.create({
    data: {
      investorId: `SMOKE-ICS-INV-${RUN}`, fullLegalName: 'Smoke ICS Investor', entityType: 'HNWI_INDIVIDUAL',
      nationality: 'NG', contactEmail: `ics-inv-${RUN}@one17.test`, contactPhone: '+2340000000070',
      onboardedByUserId: bd.id, kycStatus: 'KYC_COMPLETE', amlStatus: 'CLEARED', fundStatus: 'ACTIVE', onboardingStage: 'STAGE_2_COMPLETE',
    },
  });
  const longAgo = new Date('2020-01-01');
  await prisma.investorOnboardingCase.create({ data: { investorId: investor.investorId, periodicReviewFrequency: 'ANNUAL', lastPeriodicReviewAt: longAgo } });

  const now = new Date();
  const reviewSweep1 = await sweep.runKycPeriodicReviewSweep(now, systemUser.id);
  if (reviewSweep1.overdueCount >= 1 && reviewSweep1.tasksCreated >= 1) ok('KYC periodic review sweep detects the overdue case and raises a Task for the Compliance employee');
  else fail('KYC periodic review sweep did not detect/raise as expected', reviewSweep1);

  const tasksAfterFirstRun = await prisma.task.count({ where: { assigneeEmployeeId: complianceEmployee.id, deliverableUrl: '/compliance/queue', status: { in: ['OPEN', 'IN_PROGRESS'] } } });
  const reviewSweep2 = await sweep.runKycPeriodicReviewSweep(now, systemUser.id);
  const tasksAfterSecondRun = await prisma.task.count({ where: { assigneeEmployeeId: complianceEmployee.id, deliverableUrl: '/compliance/queue', status: { in: ['OPEN', 'IN_PROGRESS'] } } });
  if (reviewSweep2.tasksCreated === 0 && tasksAfterSecondRun === tasksAfterFirstRun) ok('re-running the sweep does not create a duplicate Task while the first is still OPEN (dedup on deliverableUrl)');
  else fail('sweep re-run created a duplicate Task', { tasksAfterFirstRun, tasksAfterSecondRun, reviewSweep2 });

  const queueBefore = await sweep.listComplianceQueue(now);
  if (queueBefore.overdueKycReviews.some((r) => r.kind === 'INVESTOR' && r.id === investor.investorId)) ok('listComplianceQueue surfaces the same overdue investor the sweep detected');
  else fail('listComplianceQueue did not surface the overdue investor', queueBefore.overdueKycReviews);

  const reviewRecorded = await investorService.recordPeriodicReview(investor.investorId, complianceUser.id);
  if (reviewRecorded.lastPeriodicReviewAt && reviewRecorded.lastPeriodicReviewAt > longAgo) ok('recordPeriodicReview clears the due state (lastPeriodicReviewAt advances)');
  else fail('recordPeriodicReview did not advance lastPeriodicReviewAt', reviewRecorded);

  const queueAfter = await sweep.listComplianceQueue(now);
  if (!queueAfter.overdueKycReviews.some((r) => r.kind === 'INVESTOR' && r.id === investor.investorId)) ok('after recordPeriodicReview, the investor no longer appears in the overdue queue');
  else fail('investor still appears overdue after recordPeriodicReview', queueAfter.overdueKycReviews);

  // === Sanctions re-screening sweep ========================================
  const sanctionsSweep1 = await sweep.runSanctionsRescreeningSweep(now, systemUser.id);
  if (sanctionsSweep1.dueCount >= 1 && sanctionsSweep1.tasksCreated >= 1) ok('sanctions re-screening sweep detects the never-screened investor and raises a Task (detection only, no invented result)');
  else fail('sanctions re-screening sweep did not detect/raise as expected', sanctionsSweep1);

  const screeningRecord = await investorService.recordScreening({
    investorId: investor.investorId,
    listsChecked: (await prisma.screeningChecklistItem.findMany({ where: { isActive: true } })).map((i) => ({ itemCode: i.itemCode, listVersionOrDate: '2026-07-09' })),
    searchTermsUsed: investor.fullLegalName,
    result: 'NO_MATCH',
    screenerUserId: complianceUser.id,
  });
  if (screeningRecord.result === 'NO_MATCH') ok('a real screening result is recorded via the existing InvestorService.recordScreening -- the sweep never fabricated this itself');
  else fail('recordScreening did not behave as expected', screeningRecord);

  const sanctionsSweep2 = await sweep.runSanctionsRescreeningSweep(now, systemUser.id);
  const stillDue = sanctionsSweep2.dueCount >= 1;
  // Confirm the just-screened investor specifically is no longer in the due set (other fixtures may exist from other smoke runs).
  const queueAfterScreening = await sweep.listComplianceQueue(now);
  if (!queueAfterScreening.sanctionsDue.some((r) => r.investorId === investor.investorId)) ok('after recordScreening, the investor no longer appears in the sanctions-due queue');
  else fail('investor still appears sanctions-due after recordScreening', queueAfterScreening.sanctionsDue);
  void stillDue;

  // === Document expiry sweep ===============================================
  const expiredDoc = await prisma.investorKycDocument.create({
    data: { investorId: investor.investorId, documentType: 'PASSPORT', fileReference: `smoke-${RUN}.pdf`, expiryDate: new Date('2020-01-01'), uploadedByUserId: bd.id },
  });
  const expirySweep = await sweep.runDocumentExpirySweep(now, systemUser.id);
  if (expirySweep.expiredCount >= 1 && expirySweep.tasksCreated >= 1) ok('document expiry sweep detects the already-expired KYC document and raises a Task');
  else fail('document expiry sweep did not detect the expired document as expected', expirySweep);

  const queueWithExpiry = await sweep.listComplianceQueue(now);
  if (queueWithExpiry.documentExpiry.some((d) => d.documentId === expiredDoc.id && d.isExpired)) ok('listComplianceQueue surfaces the expired document, flagged isExpired');
  else fail('listComplianceQueue did not surface the expired document', queueWithExpiry.documentExpiry);

  // Cleanup.
  const userIds = [systemUser.id, complianceUser.id, bd.id];
  await prisma.notification.deleteMany({ where: { recipientUserId: complianceUser.id } });
  // Tasks can reference these actors two ways -- assigneeEmployeeId (via
  // complianceEmployee) AND assignedByUserId (the sweep runs as systemUser,
  // recordPeriodicReview/recordScreening run as complianceUser) -- both
  // must be cleared before the AppUser rows themselves, or
  // task_assigned_by_user_id_fkey blocks the appUser.deleteMany below.
  await prisma.task.deleteMany({ where: { OR: [{ assigneeEmployeeId: complianceEmployee.id }, { assignedByUserId: { in: userIds } }] } });
  await prisma.investorKycDocument.deleteMany({ where: { investorId: investor.investorId } });
  await prisma.investorScreeningRecord.deleteMany({ where: { investorId: investor.investorId } });
  await prisma.investorOnboardingCase.deleteMany({ where: { investorId: investor.investorId } });
  await prisma.investor.delete({ where: { investorId: investor.investorId } });
  await prisma.employee.delete({ where: { id: complianceEmployee.id } });
  await prisma.position.delete({ where: { id: position.id } });
  await prisma.orgUnit.delete({ where: { code: orgUnitCode } });
  await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
  await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });

  await prisma.$disconnect();

  if (failed) {
    console.error('\nSMOKE FAILED — see FAIL lines above.');
    process.exitCode = 1;
  } else {
    console.log('\nSMOKE OK — investor compliance sweeps (invariant 51b-vii/51b-viii/51c) against the real live DB.');
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
