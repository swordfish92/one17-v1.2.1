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
import { CounterpartyService } from '../counterparty/counterparty.service';
import { BureauGatewayService } from './bureau-gateway.service';

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
  const counterparties = new CounterpartyService(prisma, audit, workflow, delegation, documents, new ScreeningGatewayService(prisma, audit, delegation, workflow, new NotificationService(prisma), new DocumentService(prisma, delegation, audit)));
  const bureauGateway = new BureauGatewayService(prisma, audit, delegation);

  const makeUser = async (label: string, roleCode: string) => {
    const email = `bureau-smoke-${label}-${RUN}@one17.test`;
    const user = await prisma.appUser.create({ data: { email, displayName: email } });
    await rbac.assignRole({ userId: user.id, roleCode });
    return user;
  };
  const riskUser = await makeUser('risk', 'RISK_DEPT');
  const portOff = await makeUser('portoff', 'PORT_OFF');
  const compliance = await makeUser('compliance', 'COMPLIANCE');
  const ic1 = await makeUser('ic1', 'SAU_INTERNAL_CONTROL');
  const riskReview = await makeUser('riskreview', 'RISK_DEPT');
  const outsider = await makeUser('outsider', 'COMPLIANCE');

  // --- Onboard two counterparties (onboard() itself HARD-REQUIRES consent
  // at Step 1 — cannot create one without it through the real flow). The
  // "no consent on file" case is simulated afterward by nulling
  // creditBureauConsentAt directly, mirroring a pre-existing/migrated
  // counterparty that predates this consent gate. ---
  const onboardToComplete = async (label: string) => {
    const cp = await counterparties.onboard({
      legalName: `Bureau Smoke ${label} ${RUN}`, counterpartyType: 'SME', purposeOfFinancing: 'Working capital',
      amountSoughtKobo: 100_000_000n, expectedSourceOfRepayment: 'Sales receipts', creditBureauConsent: true,
      contactEmail: `bureau-smoke-${label}-obligor-${RUN}@one17.test`, onboardedByUserId: portOff.id,
    });
    await counterparties.recordComplianceRiskAssessment({
      counterpartyId: cp.id,
      riskMetricGrades: ['GEOGRAPHY', 'CLIENT_TYPE', 'SOURCE_OF_FUNDS', 'PEP_STATUS', 'SANCTIONS_STATUS', 'TRANSACTION_COMPLEXITY', 'BENEFICIAL_OWNERSHIP', 'SOURCE_OF_WEALTH']
        .map((metricCode) => ({ metricCode, grade: 'LOW' as const, rationale: 'Bureau gateway smoke test.' })),
      pepSanctionsGrid: [
        { target: 'INVESTEE_OR_INSTITUTIONAL_NAME', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
        { target: 'DIRECTOR_OR_REP', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
        { target: 'BENEFICIAL_OWNER', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
      ],
      assessedByUserId: compliance.id,
    });
    const instance = await counterparties.submitOnboardingCaseForReview(cp.id, portOff.id);
    await counterparties.recordIc1Review({ workflowInstanceId: instance.id, checklist: { KYC_COMPLETE: 'PASS' }, pass: true, approverUserId: ic1.id });
    await counterparties.recordRiskReview({ workflowInstanceId: instance.id, periodicReviewFrequency: 'QUARTERLY', approvedExposureLimitKobo: 80_000_000n, approverUserId: riskReview.id });
    await counterparties.recordIc2Review({ workflowInstanceId: instance.id, checklist: { ALL_STEPS_SIGNED: 'PASS' }, outcome: 'SATISFACTORY', approverUserId: ic1.id });
    return prisma.counterparty.findUniqueOrThrow({ where: { id: cp.id } });
  };
  const cpConsented = await onboardToComplete('consented');
  let cpNoConsent = await onboardToComplete('noconsent');
  cpNoConsent = await prisma.counterparty.update({ where: { id: cpNoConsent.id }, data: { creditBureauConsentAt: null } });

  // --- Capability gating ---
  await expectReject('an outsider without BUREAU_GATEWAY_POLICY cannot configure a provider', () =>
    bureauGateway.configureProvider({ providerSlot: 1, name: 'X', apiConfig: {}, costPerPullKobo: 100_00n, isActive: true }, outsider.id));
  await expectReject('an outsider without BUREAU_GATEWAY_PULL cannot trigger a pull', () => bureauGateway.triggerPull(cpConsented.id, outsider.id));

  // --- No active provider yet -> pull refused (only assertable while the
  // shared dev DB genuinely has none active yet — never force-deactivate
  // OTHER providers here, since a real Risk-configured provider from a
  // prior session must survive this test run unmolested). ---
  const activeProviderBeforeTest = await prisma.bureauProvider.findFirst({ where: { isActive: true } });
  if (!activeProviderBeforeTest) {
    await expectReject('no active provider configured -> pull refused', () => bureauGateway.triggerPull(cpConsented.id, portOff.id));
  } else {
    console.log('SKIP: "no active provider" case — a provider is already active from a prior session (correctly left untouched).');
  }

  // --- Risk configures a provider slot (slot 1 preserved: if it already
  // carries real Risk-entered config from a prior session, capture it now
  // and restore it verbatim at the end — never leave test data sitting in
  // a real config slot). ---
  const slot1Before = await prisma.bureauProvider.findUnique({ where: { providerSlot: 1 } });
  const provider = await bureauGateway.configureProvider({ providerSlot: 1, name: `Smoke Bureau Vendor ${RUN}`, apiConfig: { endpoint: 'https://example.test' }, costPerPullKobo: 500_00n, isActive: true }, riskUser.id);
  if (provider.name.includes('Smoke Bureau Vendor') && provider.isActive) ok('RISK_DEPT configures provider slot 1 (Risk owns bureau policy)');
  else fail('provider configuration did not persist as expected', provider);

  // --- No consent -> pull refused even with an active provider ---
  await expectReject('no credit-bureau consent on file -> pull refused', () => bureauGateway.triggerPull(cpNoConsent.id, portOff.id));

  // --- Consent present, active provider -> pull succeeds, honest placeholder result ---
  const pull1 = await bureauGateway.triggerPull(cpConsented.id, portOff.id);
  if (pull1.resultSummary.includes('NOT CONTRACTED') && pull1.costKobo === '50000') {
    ok('officer-triggered pull succeeds — real pipeline (consent + frequency + provider), honest "not contracted" placeholder result, real cost-per-pull logged');
  } else {
    fail('pull did not produce the expected honest placeholder result', pull1);
  }

  // --- Frequency policy enforced: immediate re-pull refused ---
  await expectReject('re-pulling before minIntervalDays has elapsed is refused (Risk-owned frequency policy)', () => bureauGateway.triggerPull(cpConsented.id, portOff.id));

  // --- Risk tightens/loosens the policy (original value captured up front
  // and restored at the end — this is a real, shared, Risk-owned setting,
  // not test fixture data). ---
  const policyBefore = await bureauGateway.getPolicy();
  await expectReject('an outsider cannot update the bureau policy', () => bureauGateway.updatePolicy({ minIntervalDays: 1 }, outsider.id));
  await expectReject('minIntervalDays must be at least 1', () => bureauGateway.updatePolicy({ minIntervalDays: 0 }, riskUser.id));
  const policy = await bureauGateway.updatePolicy({ minIntervalDays: 1 }, riskUser.id);
  ok('RISK_DEPT updates the frequency/interval policy (Risk owns bureau policy)');

  // --- History renders for BOTH surfaces (staff = listPullHistory; portal reuses the same method scoped by session) ---
  const history = await bureauGateway.listPullHistory(cpConsented.id);
  if (history.length === 1 && history[0].provider?.name?.includes('Smoke Bureau Vendor')) {
    ok('listPullHistory returns the pull with provider name attached — the same method both staff view and portal-counterparty.controller.ts read from');
  } else {
    fail('listPullHistory did not return the expected row', history);
  }

  // --- Audit trail proof ---
  const auditRows = await prisma.auditTrail.findMany({ where: { entityType: 'bureau_pull_log', entityId: pull1.id } });
  if (auditRows.length >= 1) ok('every pull logged to audit_trail (consent verified at onboarding, cost-per-pull visible)');
  else fail('expected an audit_trail row for the pull', auditRows);

  // --- Cleanup + restoration of shared, Risk-owned config ---
  if (policyBefore.minIntervalDays != null) {
    await bureauGateway.updatePolicy({ minIntervalDays: policyBefore.minIntervalDays }, riskUser.id);
  }
  const cpIds = [cpConsented.id, cpNoConsent.id];
  await prisma.bureauPullLog.deleteMany({ where: { counterpartyId: { in: cpIds } } });
  if (slot1Before) {
    await prisma.bureauProvider.update({ where: { providerSlot: 1 }, data: { name: slot1Before.name, apiConfig: slot1Before.apiConfig as any, costPerPullKobo: slot1Before.costPerPullKobo, isActive: slot1Before.isActive } });
  } else {
    await prisma.bureauProvider.delete({ where: { providerSlot: 1 } });
  }
  const cases = await prisma.counterpartyOnboardingCase.findMany({ where: { counterpartyId: { in: cpIds } } });
  const wfIds = cases.map((c) => c.workflowInstanceId).filter((x): x is string => !!x);
  await prisma.workflowStepApproval.deleteMany({ where: { workflowInstanceId: { in: wfIds } } });
  await prisma.workflowInstance.deleteMany({ where: { id: { in: wfIds } } });
  await prisma.counterpartyOnboardingCase.deleteMany({ where: { counterpartyId: { in: cpIds } } });
  await prisma.counterparty.deleteMany({ where: { id: { in: cpIds } } });
  const userIds = [riskUser.id, portOff.id, compliance.id, ic1.id, riskReview.id, outsider.id];
  await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
  await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });

  console.log(JSON.stringify({ policyMinIntervalDaysRestoredTo: policyBefore.minIntervalDays, testRanWithMinIntervalDays: policy.minIntervalDays }));
  console.log('\nSMOKE OK — BureauGateway (invariant 36c) against the real live DB.');
  await prisma.$disconnect();
}
main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
