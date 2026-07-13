// Run with: npx tsx src/talent/talent.smoke.ts
// Invariant 37(e), task #153: Talent Management + Reward & Welfare
// spec-lite. Welfare schemes and reward types are plain governed-config
// catalogs (INITIATE-gated CRUD); a TalentRecommendation linking an
// employee to one of them is the actual governance action — HR recommends,
// MD_CEO (a DIFFERENT role, not just a different user) approves via the
// standing Workflow Inbox.
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
import { LedgerService } from '../ledger/ledger.service';
import { PmsService } from '../pms/pms.service';
import { NotificationService } from '../notification/notification.service';
import { AttendanceService } from '../attendance/attendance.service';
import { InvestorService } from '../investor/investor.service';
import { PortalAuthService } from '../portal-auth/portal-auth.service';
import { WmService } from '../wm/wm.service';
import { EventJournalService } from '../event-journal/event-journal.service';
import { RegulatoryReportingService } from '../regulatory-reporting/regulatory-reporting.service';
import { MarketingService } from '../marketing/marketing.service';
import { TalentService } from './talent.service';
import { WorkflowInboxService } from '../ops-api/workflow-inbox.service';

const RUN = Date.now();
let failed = false;
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function expectReject(label: string, fn: () => unknown | Promise<unknown>) {
  try { await fn(); fail(`expected rejection: ${label}`); }
  catch (err) { ok(`rejected as expected: ${label} — ${(err as Error).message.split('\n')[0]}`); }
}

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));
  const ledger = new LedgerService(prisma, audit, delegation, workflow);
  const notification = new NotificationService(prisma);
  const attendance = new AttendanceService(prisma, audit, delegation, workflow, notification);
  const pms = new PmsService(prisma, audit, delegation, workflow, ledger, attendance);
  const investors = new InvestorService(prisma, audit, workflow, delegation, new PortalAuthService(prisma, audit), new ScreeningGatewayService(prisma, audit, delegation, workflow, new NotificationService(prisma), new DocumentService(prisma, delegation, audit)));
  const eventJournal = new EventJournalService(prisma, ledger);
  const wm = new WmService(prisma, audit, delegation, workflow, eventJournal);
  const regReporting = {} as unknown as RegulatoryReportingService;
  const marketing = {} as unknown as MarketingService;
  const talent = new TalentService(prisma, audit, delegation, workflow);
  const workflowInbox = new WorkflowInboxService(prisma, workflow, investors, regReporting, wm, pms, marketing, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, ledger, talent, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any);

  const orgUnitCode = `TALENT_SMOKE_${RUN}`;
  await prisma.orgUnit.create({ data: { code: orgUnitCode, name: 'Talent Smoke Dept' } });
  const position = await prisma.position.create({ data: { title: `Talent Smoke Officer ${RUN}`, orgUnitCode, cadre: 'Snr Associate 1', notch: 1 } });
  const employee = await prisma.employee.create({ data: { surname: `Smoke${RUN}`, firstName: 'Talent', positionId: position.id, orgUnitCode, hireDate: new Date() } });

  const hrAdmin = await prisma.appUser.create({ data: { email: `talent-hr-${RUN}@one17.test`, displayName: 'x' } });
  await rbac.assignRole({ userId: hrAdmin.id, roleCode: 'HR_ADMIN' });
  const md = await prisma.appUser.create({ data: { email: `talent-md-${RUN}@one17.test`, displayName: 'x' } });
  await rbac.assignRole({ userId: md.id, roleCode: 'MD_CEO' });
  const outsider = await prisma.appUser.create({ data: { email: `talent-outsider-${RUN}@one17.test`, displayName: 'x' } });

  await expectReject('outsider (no TALENT_MANAGEMENT) cannot create a welfare scheme', () =>
    talent.createWelfareScheme({ name: `Bereavement Support ${RUN}`, createdByUserId: outsider.id }));

  const scheme = await talent.createWelfareScheme({ name: `Bereavement Support ${RUN}`, description: 'Financial support on employee bereavement', createdByUserId: hrAdmin.id });
  if (scheme.isActive) ok('HR creates a welfare scheme — governed config catalog row, ACTIVE by default');
  else fail('welfare scheme did not persist correctly', scheme);

  const rewardType = await talent.createRewardType({ name: `Spot Award ${RUN}`, createdByUserId: hrAdmin.id });
  ok(`HR creates a reward type: ${rewardType.name}`);

  await expectReject('a WELFARE recommendation without a welfareSchemeId is refused', () =>
    talent.recommendTalent({ employeeId: employee.id, recommendationType: 'WELFARE', justification: 'x', recommendedByUserId: hrAdmin.id }));

  await expectReject('outsider (no TALENT_MANAGEMENT) cannot recommend', () =>
    talent.recommendTalent({ employeeId: employee.id, recommendationType: 'WELFARE', welfareSchemeId: scheme.id, justification: 'x', recommendedByUserId: outsider.id }));

  const recommendation = await talent.recommendTalent({
    employeeId: employee.id, recommendationType: 'WELFARE', welfareSchemeId: scheme.id,
    justification: 'Recent bereavement in immediate family', recommendedByUserId: hrAdmin.id,
  });
  if (recommendation.recommendation.status === 'PENDING') {
    ok('HR recommends a welfare action for the employee -> talent_recommendation PENDING');
  } else {
    fail('recommendation did not persist correctly', recommendation.recommendation);
  }

  await expectReject('HR (initiator, holds only INITIATE) cannot also approve — HR_ADMIN has no TALENT_MANAGEMENT APPROVE grant at all', () =>
    workflowInbox.approve(recommendation.workflowInstance.id, hrAdmin.id));

  const approved = await workflowInbox.approve(recommendation.workflowInstance.id, md.id);
  const recAfter = await prisma.talentRecommendation.findUniqueOrThrow({ where: { id: recommendation.recommendation.id } });
  if ((approved as any).status === 'APPROVED' && recAfter.status === 'APPROVED' && recAfter.approvedByUserId === md.id) {
    ok('MD_CEO approves via the standing Workflow Inbox (TALENT_RECOMMENDATION_APPROVAL dispatch) -> talent_recommendation APPROVED');
  } else {
    fail('recommendation did not activate correctly via the Workflow Inbox dispatch', { approved, recAfter });
  }

  // ---- A second recommendation, rejected instead of approved. ----
  const recommendation2 = await talent.recommendTalent({
    employeeId: employee.id, recommendationType: 'REWARD', rewardTypeId: rewardType.id,
    justification: 'Exceptional Q2 contribution', recommendedByUserId: hrAdmin.id,
  });
  await workflowInbox.reject(recommendation2.workflowInstance.id, md.id, 'Not this cycle');
  const rec2After = await prisma.talentRecommendation.findUniqueOrThrow({ where: { id: recommendation2.recommendation.id } });
  if (rec2After.status === 'REJECTED') {
    ok('MD_CEO rejects a second recommendation via the standing Workflow Inbox -> talent_recommendation REJECTED');
  } else {
    fail('rejected recommendation did not flip to REJECTED', rec2After);
  }

  const list = await talent.listRecommendations();
  const ourRecs = list.filter((r) => r.employeeId === employee.id);
  if (ourRecs.length === 2 && ourRecs.some((r) => r.status === 'APPROVED') && ourRecs.some((r) => r.status === 'REJECTED')) {
    ok('listRecommendations returns both recommendations with correct joined employee/scheme/reward-type names');
  } else {
    fail('listRecommendations did not return the expected rows', ourRecs);
  }

  console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — Talent Management + Reward/Welfare (invariant 37e, task #153) against the real live DB.`);
  process.exitCode = failed ? 1 : 0;
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
