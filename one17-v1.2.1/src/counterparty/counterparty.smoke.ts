// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/counterparty/counterparty.smoke.ts
// Proves CHECK5 item 5b (invariant 27(b)) against the real live DB: the
// digitized 7-step Investee Onboarding Template (credit-bureau consent,
// Shariah cert capture, 8-metric risk grid, IC1 -> Risk -> [MD] -> IC2
// chain, approved exposure limit set at the Risk step) and the DB-enforced
// deployment gate (no Txn against a counterparty that isn't
// COMPLETE_APPROVED).
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
import { CounterpartyService } from './counterparty.service';

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

const EIGHT_LOW_GRADES = [
  'GEOGRAPHY', 'CLIENT_TYPE', 'SOURCE_OF_FUNDS', 'PEP_STATUS', 'SANCTIONS_STATUS',
  'TRANSACTION_COMPLEXITY', 'BENEFICIAL_OWNERSHIP', 'SOURCE_OF_WEALTH',
].map((metricCode) => ({ metricCode, grade: 'LOW' as const, rationale: 'Smoke test: routine profile.' }));

const PEP_SANCTIONS_GRID = [
  { target: 'INVESTEE_OR_INSTITUTIONAL_NAME' as const, pepResult: 'CLEAR' as const, sanctionsResult: 'CLEAR' as const },
  { target: 'DIRECTOR_OR_REP' as const, pepResult: 'CLEAR' as const, sanctionsResult: 'CLEAR' as const },
  { target: 'BENEFICIAL_OWNER' as const, pepResult: 'CLEAR' as const, sanctionsResult: 'CLEAR' as const },
];

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const documents = new DocumentService(prisma, delegation, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));
  const counterparties = new CounterpartyService(prisma, audit, workflow, delegation, documents, new ScreeningGatewayService(prisma, audit, delegation, workflow, new NotificationService(prisma), new DocumentService(prisma, delegation, audit)));

  const users = new Map<string, { id: string }>();
  const makeUser = async (label: string, roleCode: string) => {
    const email = `cp-onb-${label}-${RUN}@one17.test`;
    const user = await prisma.appUser.create({ data: { email, displayName: email } });
    await rbac.assignRole({ userId: user.id, roleCode });
    users.set(label, user);
    return user;
  };
  const id = (label: string) => users.get(label)!.id;

  await makeUser('portmgr', 'PORT_MGR');
  await makeUser('compliance', 'COMPLIANCE');
  await makeUser('ic1', 'SAU_INTERNAL_CONTROL');
  await makeUser('risk', 'RISK_DEPT');
  await makeUser('md', 'MD_CEO');
  await makeUser('outsider', 'INVESTOR');
  await makeUser('finadmin', 'FIN_ADMIN');
  await makeUser('bd', 'BD');
  await makeUser('legal', 'LEGAL');
  await makeUser('cio', 'CIO');
  await makeUser('portmgr2', 'PORT_MGR');
  await makeUser('invcommittee', 'INV_COMMITTEE');

  const counterpartyIds: string[] = [];
  const workflowInstanceIds: string[] = [];

  await expectReject('onboarding without credit-bureau consent is refused (invariant 27b addition)', () =>
    counterparties.onboard({
      legalName: 'No Consent Ltd', counterpartyType: 'CORPORATE', purposeOfFinancing: 'Working capital',
      amountSoughtKobo: 500_000_000n, expectedSourceOfRepayment: 'Trade receivables', creditBureauConsent: false,
      onboardedByUserId: id('portmgr'),
    }));

  const lowInvestee = await counterparties.onboard({
    legalName: 'Routine Investee Ltd', counterpartyType: 'CORPORATE', purposeOfFinancing: 'Working capital',
    amountSoughtKobo: 500_000_000n, expectedSourceOfRepayment: 'Trade receivables', creditBureauConsent: true,
    shariahCertRef: `SC-${RUN}`, shariahCertExpiry: new Date('2028-01-01'), onboardedByUserId: id('portmgr'),
  });
  counterpartyIds.push(lowInvestee.id);
  if (lowInvestee.onboardingStatus === 'DRAFT' && lowInvestee.creditBureauConsentAt && lowInvestee.shariahCertRef) {
    ok('counterparty onboarded DRAFT with credit-bureau consent + Shariah cert captured at Step 1');
  } else {
    fail('onboard did not set expected fields', lowInvestee);
  }

  // --- Deployment gate: blocked before approval ---
  const ledgerEntityCode = `SMOKE-CP-ONB-${RUN}`;
  await prisma.ledgerEntity.create({ data: { code: ledgerEntityCode, name: 'Smoke Counterparty Onboarding', entityType: 'POOL', primaryBasis: 'AAOIFI' } });
  await expectReject('the DB trigger blocks a Txn against a counterparty that is not COMPLETE_APPROVED', () =>
    prisma.txn.create({
      data: { txnType: 'PLACEMENT', ledgerEntityCode, counterpartyId: lowInvestee.id, valueDate: new Date(), amountKobo: 1_000_000n, makerUserId: id('finadmin') },
    }));

  // --- LOW/MEDIUM_LOW chain: risk assessment -> IC1 -> Risk -> IC2 ---
  const lowCase = await counterparties.recordComplianceRiskAssessment({
    counterpartyId: lowInvestee.id, riskMetricGrades: EIGHT_LOW_GRADES, pepSanctionsGrid: PEP_SANCTIONS_GRID,
    complianceObservations: 'Routine.', assessedByUserId: id('compliance'),
  });
  if (lowCase.accumulativeRiskProfile === 'LOW' && !lowCase.eddRequired) ok('8-metric aggregation: all LOW -> accumulativeRiskProfile LOW');
  else fail('LOW-path aggregation mismatch', lowCase);

  const lowInstance = await counterparties.submitOnboardingCaseForReview(lowInvestee.id, id('portmgr'));
  workflowInstanceIds.push(lowInstance.id);
  await expectReject('an outsider without ONBOARDING_IC_REVIEW cannot approve IC1', () =>
    counterparties.recordIc1Review({ workflowInstanceId: lowInstance.id, checklist: { KYC_COMPLETE: 'PASS' }, pass: true, approverUserId: id('outsider') }));
  await counterparties.recordIc1Review({ workflowInstanceId: lowInstance.id, checklist: { KYC_COMPLETE: 'PASS' }, pass: true, approverUserId: id('ic1') });
  await counterparties.recordRiskReview({ workflowInstanceId: lowInstance.id, periodicReviewFrequency: 'QUARTERLY', riskNotes: 'Standard monitoring.', approvedExposureLimitKobo: 300_000_000n, approverUserId: id('risk') });
  const lowFinal = await counterparties.recordIc2Review({ workflowInstanceId: lowInstance.id, checklist: { ALL_STEPS_SIGNED: 'PASS' }, outcome: 'SATISFACTORY', approverUserId: id('ic1') });
  if (lowFinal.status === 'APPROVED') ok('LOW/MEDIUM_LOW chain (IC1 -> Risk -> IC2) reaches APPROVED, no MD step');
  else fail('LOW/MEDIUM_LOW chain did not reach APPROVED', lowFinal);

  const approvedCp = await prisma.counterparty.findUniqueOrThrow({ where: { id: lowInvestee.id } });
  if (approvedCp.onboardingStatus === 'COMPLETE_APPROVED' && approvedCp.enterpriseLimitKobo === 300_000_000n) {
    ok('IC2 SATISFACTORY finalizes onboardingStatus COMPLETE_APPROVED; Risk step\'s approved exposure limit written to enterpriseLimitKobo (control C20)');
  } else {
    fail('IC2 completion did not finalize the counterparty as expected', approvedCp);
  }

  // Deployment now succeeds.
  await prisma.txn.create({
    data: { txnType: 'PLACEMENT', ledgerEntityCode, counterpartyId: lowInvestee.id, valueDate: new Date(), amountKobo: 1_000_000n, makerUserId: id('finadmin') },
  });
  ok('deployment (Txn referencing the counterparty) now succeeds once onboardingStatus is COMPLETE_APPROVED');

  // ==========================================================================
  // Invariant 46(c)/46(g)(i): investment memo DoA threshold is LIVE governed
  // config (CIO proposes -> MD_CEO approves -> DRAFT->ACTIVE), read by
  // submitInvestmentMemoForCioApproval at submission time — never a static
  // seeded amount range. Set it here, ABOVE every memo amount used below
  // (200M/50M/40M kobo), so the three pre-existing memo fixtures exercise
  // the BELOW_THRESHOLD (PM validation -> CIO) chain; a dedicated large
  // memo further down exercises AT_OR_ABOVE_THRESHOLD (+ IC + MD).
  // ==========================================================================
  await expectReject('an outsider without INVESTMENT_MEMO_THRESHOLD_MANAGEMENT cannot propose a threshold', () =>
    counterparties.proposeInvestmentMemoThreshold(1_000_000_000n, id('outsider')));
  const thresholdProposal = await counterparties.proposeInvestmentMemoThreshold(1_000_000_000n, id('cio'));
  workflowInstanceIds.push(thresholdProposal.workflowInstance.id);
  if (thresholdProposal.config.status === 'DRAFT' && Number.isInteger(thresholdProposal.config.version) && thresholdProposal.config.version >= 1) {
    ok(`CIO proposes investment memo DoA threshold v${thresholdProposal.config.version} as DRAFT (invariant 46g/i)`);
  } else {
    fail('threshold proposal did not draft correctly', thresholdProposal.config);
  }
  await expectReject('an outsider without INVESTMENT_MEMO_THRESHOLD_MANAGEMENT cannot approve a threshold', () =>
    counterparties.approveInvestmentMemoThreshold(thresholdProposal.workflowInstance.id, id('outsider')));
  const thresholdActivated = await counterparties.approveInvestmentMemoThreshold(thresholdProposal.workflowInstance.id, id('md'));
  if (thresholdActivated.status === 'ACTIVE') ok('MD_CEO approves the threshold — DRAFT flips to ACTIVE (maker CIO != checker MD_CEO)');
  else fail('threshold approval did not activate the config', thresholdActivated);
  const activeThreshold = await counterparties.getActiveInvestmentMemoThreshold(id('cio'));
  if (activeThreshold?.thresholdKobo === '1000000000') ok('getActiveInvestmentMemoThreshold reads the newly-ACTIVE row live');
  else fail('active threshold did not read back correctly', activeThreshold);

  // ==========================================================================
  // Invariant 28(e)(ii)/(iii): NEW facility applications initiated from the
  // portal, feeding the SAME governance chain, with a progress bar DERIVED
  // live from workflow state — never hand-set.
  // ==========================================================================
  const facilityAppIds: string[] = [];
  const notYetApprovedCp = await counterparties.onboard({
    legalName: 'Facility Gate Test Ltd', counterpartyType: 'CORPORATE', purposeOfFinancing: 'Working capital',
    amountSoughtKobo: 100_000_000n, expectedSourceOfRepayment: 'Sales', creditBureauConsent: true, onboardedByUserId: id('portmgr'),
  });
  counterpartyIds.push(notYetApprovedCp.id);
  await expectReject('a facility application before onboarding is COMPLETE_APPROVED is refused', () =>
    counterparties.submitFacilityApplication({ counterpartyId: notYetApprovedCp.id, requestedAmountKobo: 1_000_000n, purpose: 'Working capital top-up' }));

  const facilityApp = await counterparties.submitFacilityApplication({ counterpartyId: lowInvestee.id, requestedAmountKobo: 200_000_000n, purpose: 'Equipment finance' });
  facilityAppIds.push(facilityApp.id);
  const [draftProgress] = await counterparties.listFacilityApplicationsForPortal(lowInvestee.id);
  if (draftProgress.status === 'DRAFT' && draftProgress.pendingFromCounterparty) {
    ok(`DRAFT facility application shows stage "${draftProgress.stageLabel}" with pendingFromCounterparty=true`);
  } else {
    fail('DRAFT facility application progress did not derive correctly', draftProgress);
  }

  await expectReject('an outsider without COUNTERPARTY_ONBOARDING cannot push a facility application into the governance chain', () =>
    counterparties.reviewAndSubmitFacilityApplication(facilityApp.id, id('outsider')));

  // Invariant 36(f): "routes PO -> CIO approval -> subsequent stakeholders"
  // — reviewAndSubmitFacilityApplication now REFUSES without a CIO-approved
  // investment memo; proven here BEFORE any memo exists.
  await expectReject('a facility application with no investment memo cannot enter the review chain (invariant 36f)', () =>
    counterparties.reviewAndSubmitFacilityApplication(facilityApp.id, id('portmgr')));
  await expectReject('an outsider without COUNTERPARTY_ONBOARDING cannot draft an investment memo', () =>
    counterparties.draftInvestmentMemo(
      { facilityApplicationId: facilityApp.id, dealSummary: 'x', structureType: 'x', amountKobo: 1n, tenorMonths: 1, targetReturnPct: 1, riskNotes: 'x', shariahNotes: 'x', collateralNotes: 'x' },
      id('outsider'),
    ));
  const memo = await counterparties.draftInvestmentMemo(
    {
      facilityApplicationId: facilityApp.id,
      dealSummary: 'Equipment finance for cold-chain logistics expansion.',
      structureType: 'Murabaha',
      amountKobo: 200_000_000n,
      tenorMonths: 24,
      targetReturnPct: 14.5,
      riskNotes: 'Sector concentration acceptable; sponsor track record strong.',
      shariahNotes: 'Underlying asset is tangible equipment; no interest-bearing leg.',
      collateralNotes: 'Chattel mortgage over the financed equipment, 120% coverage.',
    },
    id('portmgr'),
  );
  if (memo.version === 1 && memo.status === 'DRAFT') ok('investment memo drafted as version 1, DRAFT (invariant 36f)');
  else fail('investment memo did not draft correctly', memo);
  await expectReject('reviewAndSubmitFacilityApplication still refuses with a DRAFT (not yet CIO-approved) memo', () =>
    counterparties.reviewAndSubmitFacilityApplication(facilityApp.id, id('portmgr')));
  const memoInstance = await counterparties.submitInvestmentMemoForCioApproval(memo.id, id('portmgr'));
  workflowInstanceIds.push(memoInstance.workflowInstanceId!);
  // Invariant 46(c): BELOW_THRESHOLD chain — PM validation (a different
  // PORT_MGR officer than the initiator) then CIO.
  await expectReject('an outsider without INVESTMENT_MEMO_PM_VALIDATION cannot validate the memo', () =>
    counterparties.approveInvestmentMemo(memoInstance.workflowInstanceId!, id('outsider')));
  await counterparties.approveInvestmentMemo(memoInstance.workflowInstanceId!, id('portmgr2'), 'PM validation: structure and terms reviewed.');
  await expectReject('an outsider without INVESTMENT_MEMO_CIO_APPROVAL cannot approve the memo', () =>
    counterparties.approveInvestmentMemo(memoInstance.workflowInstanceId!, id('outsider')));
  const memoApproved = await counterparties.approveInvestmentMemo(memoInstance.workflowInstanceId!, id('cio'), 'Sound structure, collateral coverage adequate.');
  if (memoApproved.status === 'APPROVED') ok('CIO approves the investment memo with a comment, below the governed DoA threshold — invariant 46(c)\'s BELOW_THRESHOLD chain (PM validation then CIO) completes here');
  else fail('CIO approval did not reach APPROVED', memoApproved);
  const [memoListed] = await counterparties.listInvestmentMemos(facilityApp.id, id('portmgr'));
  if (memoListed.status === 'CIO_APPROVED') ok('the memo now reads CIO_APPROVED off the same row the workflow updated');
  else fail('memo status did not flip to CIO_APPROVED', memoListed);

  // Invariant 44(e): satisfy whatever required-document checklist is
  // currently configured on this DB before the happy-path submit below —
  // real seed rows (scripts/check10-seed-required-documents.ts) if present,
  // nothing otherwise.
  const facilityAppChecklist = await counterparties.getFacilityApplicationChecklistForStaff(facilityApp.id, id('portmgr'));
  for (const docType of facilityAppChecklist.required) {
    await counterparties.uploadFacilityApplicationDocument({ applicationId: facilityApp.id, documentType: docType, fileReference: `smoke://${docType.toLowerCase()}` }, lowInvestee.id);
  }

  const submitted = await counterparties.reviewAndSubmitFacilityApplication(facilityApp.id, id('portmgr'));
  workflowInstanceIds.push(submitted.workflowInstanceId!);
  const [submittedProgress] = await counterparties.listFacilityApplicationsForPortal(lowInvestee.id);
  if (submittedProgress.status === 'SUBMITTED' && submittedProgress.stageLabel === 'Risk Review' && !submittedProgress.pendingFromCounterparty) {
    ok(`facility application pushed into the real multi-officer chain (invariant 36e) — progress bar DERIVES "Risk Review" live off the pending workflow step (never hand-set)`);
  } else {
    fail('SUBMITTED facility application progress did not derive the Risk stage correctly', submittedProgress);
  }

  await expectReject('disbursing an application that is not yet APPROVED is refused', () =>
    counterparties.markFacilityApplicationDisbursed(facilityApp.id, id('portmgr')));

  // Invariant 36(e): multi-officer chain — Risk -> BD -> Finance -> Compliance,
  // each a distinct officer, each step optionally carrying a comment.
  await expectReject('an outsider without FACILITY_APPLICATION_RISK_REVIEW cannot approve the Risk step', () =>
    counterparties.approveFacilityApplicationStep(submitted.workflowInstanceId!, id('outsider')));
  await expectReject('LEGAL cannot approve a facility-application step (VIEW-only, no approval authority, invariant 27b/36e)', () =>
    counterparties.approveFacilityApplicationStep(submitted.workflowInstanceId!, id('legal')));
  await counterparties.approveFacilityApplicationStep(submitted.workflowInstanceId!, id('risk'), 'Exposure within approved limit.');
  const [bdStageProgress] = await counterparties.listFacilityApplicationsForPortal(lowInvestee.id);
  if (bdStageProgress.stageLabel === 'Business Development Review') {
    ok('after Risk approves (with a comment), the SAME derivation function now reports "Business Development Review" — the label moved because the workflow moved');
  } else {
    fail('progress bar did not advance to BD review after Risk approval', bdStageProgress);
  }

  await counterparties.approveFacilityApplicationStep(submitted.workflowInstanceId!, id('bd'), 'Aligned with the client relationship plan.');
  const [financeStageProgress] = await counterparties.listFacilityApplicationsForPortal(lowInvestee.id);
  if (financeStageProgress.stageLabel === 'Finance Review') ok('after BD approves, the label advances to "Finance Review"');
  else fail('progress bar did not advance to Finance review after BD approval', financeStageProgress);

  await counterparties.approveFacilityApplicationStep(submitted.workflowInstanceId!, id('finadmin'), 'Facility terms bookable, no funding constraint.');
  const finalStep = await counterparties.approveFacilityApplicationStep(submitted.workflowInstanceId!, id('compliance'), 'KYC current, no sanctions hit — approved.');
  if (finalStep.status === 'APPROVED') ok('Risk->BD->Finance->Compliance reaches APPROVED — the multi-officer chain invariant 36(e) asks for, each with its own capability and comment');
  else fail('facility application multi-officer review chain did not reach APPROVED', finalStep);

  const stepApprovals = await prisma.workflowStepApproval.findMany({ where: { workflowInstanceId: submitted.workflowInstanceId! }, orderBy: { decidedAt: 'asc' } });
  if (stepApprovals.length === 4 && stepApprovals.every((s) => !!s.notes)) {
    ok('all 4 steps carry a per-step COMMENT in WorkflowStepApproval.notes — full audit trail, invariant 36(e)');
  } else {
    fail('expected 4 step approvals each with notes', stepApprovals);
  }

  // Invariant 27(b)/36(e): Legal is VIEW-only — can see every facility
  // application regardless of status (the no-approval-authority case was
  // already proven above, while the workflow was still pending).
  await expectReject('an outsider without FACILITY_APPLICATION_LEGAL_VIEW cannot list facility applications for Legal', () =>
    counterparties.listFacilityApplicationsForLegalView(id('outsider')));
  const legalView = await counterparties.listFacilityApplicationsForLegalView(id('legal'));
  if (legalView.some((a) => a.id === facilityApp.id)) {
    ok('LEGAL views the facility application (VIEW-only access, invariant 27b/36e) without ever holding approval authority');
  } else {
    fail('Legal view did not include the expected facility application', legalView);
  }

  const [approvedProgress] = await counterparties.listFacilityApplicationsForPortal(lowInvestee.id);
  if (approvedProgress.status === 'APPROVED' && approvedProgress.stageLabel === 'Approved — pending disbursement') {
    ok('APPROVED facility application shows "Approved — pending disbursement"');
  } else {
    fail('APPROVED progress label incorrect', approvedProgress);
  }

  const disbursed = await counterparties.markFacilityApplicationDisbursed(facilityApp.id, id('portmgr'));
  if (disbursed.status === 'DISBURSED' && disbursed.disbursedByUserId === id('portmgr')) {
    ok('a separate staff action (markFacilityApplicationDisbursed) flips APPROVED -> DISBURSED — the terminal stage the progress bar shows');
  } else {
    fail('disbursement did not record correctly', disbursed);
  }

  // Invariant 36(d): Fund Accounting's own posting of the targeted return —
  // single source both the counterparty dashboard and the fund-account
  // receivables dashboard read.
  await expectReject('an outsider without FUND_ACCOUNTING_RECEIVABLES cannot record facility terms', () =>
    counterparties.recordFundAccountingTerms(facilityApp.id, 18.5, id('portmgr')));
  const terms = await counterparties.recordFundAccountingTerms(facilityApp.id, 18.5, id('finadmin'));
  if (Number(terms.targetedReturnPct) === 18.5 && terms.termsRecordedByUserId === id('finadmin')) {
    ok('Fund Accounting (FIN_ADMIN) records the targeted return once — single source, invariant 36(d)');
  } else {
    fail('recordFundAccountingTerms did not persist as expected', terms);
  }
  const [progressWithTerms] = await counterparties.listFacilityApplicationsForPortal(lowInvestee.id).then((rows) => rows.filter((r) => r.id === facilityApp.id));
  if (Number(progressWithTerms?.targetedReturnPct) === 18.5) {
    ok('the counterparty dashboard (listFacilityApplicationsForPortal) reads the SAME targetedReturnPct Fund Accounting posted — no dual entry');
  } else {
    fail('counterparty-side progress did not surface targetedReturnPct', progressWithTerms);
  }
  const disbursedFacilities = await counterparties.listDisbursedFacilityApplications(id('finadmin'));
  if (disbursedFacilities.some((f) => f.id === facilityApp.id && Number(f.targetedReturnPct) === 18.5)) {
    ok('listDisbursedFacilityApplications (Fund Accounting posting screen) shows the same row');
  } else {
    fail('listDisbursedFacilityApplications did not include the expected facility', disbursedFacilities);
  }

  // The fund-account receivables dashboard reads the SAME
  // CounterpartyRepaymentObligation rows the counterparty's own dashboard
  // shows — created directly here (createObligation itself is smoke-tested
  // in counterparty-portal.smoke.ts) purely to prove the receivables JOIN.
  const receivableObligation = await prisma.counterpartyRepaymentObligation.create({
    data: { counterpartyId: lowInvestee.id, facilityApplicationId: facilityApp.id, dueDate: new Date('2026-09-01'), amountKobo: 5_000_000n, createdByUserId: id('finadmin') },
  });
  const receivables = await counterparties.listFundAccountingReceivables(id('finadmin'));
  const matchingReceivable = receivables.find((r) => r.id === receivableObligation.id);
  if (Number(matchingReceivable?.facilityApplication?.targetedReturnPct) === 18.5) {
    ok('the fund-account receivables dashboard joins the SAME facility row (targetedReturnPct) — no second table, no drift');
  } else {
    fail('receivables dashboard did not join the expected facility terms', matchingReceivable);
  }
  await prisma.counterpartyRepaymentObligation.delete({ where: { id: receivableObligation.id } });

  // A second application, this time DECLINED at the Risk step (invariant 36e's first step).
  const facilityApp2 = await counterparties.submitFacilityApplication({ counterpartyId: lowInvestee.id, requestedAmountKobo: 50_000_000n, purpose: 'Inventory financing' });
  facilityAppIds.push(facilityApp2.id);
  const memo2 = await counterparties.draftInvestmentMemo(
    {
      facilityApplicationId: facilityApp2.id,
      dealSummary: 'Inventory financing for seasonal stock build.',
      structureType: 'Murabaha',
      amountKobo: 50_000_000n,
      tenorMonths: 6,
      targetReturnPct: 13,
      riskNotes: 'Seasonal exposure, standard for the sector.',
      shariahNotes: 'Tangible inventory as the underlying asset.',
      collateralNotes: 'Inventory hypothecation.',
    },
    id('portmgr'),
  );
  const memo2Instance = await counterparties.submitInvestmentMemoForCioApproval(memo2.id, id('portmgr'));
  workflowInstanceIds.push(memo2Instance.workflowInstanceId!);
  await counterparties.approveInvestmentMemo(memo2Instance.workflowInstanceId!, id('portmgr2'), 'PM validation: seasonal exposure standard.');
  await counterparties.approveInvestmentMemo(memo2Instance.workflowInstanceId!, id('cio'), 'Approved, standard seasonal facility.');
  const facilityApp2Checklist = await counterparties.getFacilityApplicationChecklistForStaff(facilityApp2.id, id('portmgr'));
  for (const docType of facilityApp2Checklist.required) {
    await counterparties.uploadFacilityApplicationDocument({ applicationId: facilityApp2.id, documentType: docType, fileReference: `smoke://${docType.toLowerCase()}` }, lowInvestee.id);
  }
  const submitted2 = await counterparties.reviewAndSubmitFacilityApplication(facilityApp2.id, id('portmgr'));
  workflowInstanceIds.push(submitted2.workflowInstanceId!);
  await counterparties.rejectFacilityApplication(submitted2.workflowInstanceId!, id('risk'), 'Incomplete collateral documentation.');
  const [declinedProgress] = (await counterparties.listFacilityApplicationsForPortal(lowInvestee.id)).filter((a) => a.id === facilityApp2.id);
  if (declinedProgress.status === 'DECLINED' && declinedProgress.stageLabel === 'Declined') {
    ok('a rejected facility application flips to DECLINED and the portal-facing stage reads "Declined"');
  } else {
    fail('declined facility application progress did not derive correctly', declinedProgress);
  }

  // --- HIGH_RISK: single HIGH metric, MD DECLINED stops the chain ---
  const highDeclined = await counterparties.onboard({
    legalName: 'High Risk Investee Declined Ltd', counterpartyType: 'CORPORATE', purposeOfFinancing: 'Trade finance',
    amountSoughtKobo: 900_000_000n, expectedSourceOfRepayment: 'Export proceeds', creditBureauConsent: true,
    onboardedByUserId: id('portmgr'),
  });
  counterpartyIds.push(highDeclined.id);
  const highGrades = [...EIGHT_LOW_GRADES.slice(0, 7), { metricCode: 'SOURCE_OF_WEALTH', grade: 'HIGH' as const, rationale: 'Opaque ownership.' }];
  const highCase = await counterparties.recordComplianceRiskAssessment({
    counterpartyId: highDeclined.id, riskMetricGrades: highGrades, pepSanctionsGrid: PEP_SANCTIONS_GRID, assessedByUserId: id('compliance'),
  });
  if (highCase.accumulativeRiskProfile === 'HIGH') ok('a single HIGH metric forces accumulativeRiskProfile HIGH (counterparty template, same rule)');
  else fail('single-HIGH-metric rule failed', highCase);

  const highInstance = await counterparties.submitOnboardingCaseForReview(highDeclined.id, id('portmgr'));
  workflowInstanceIds.push(highInstance.id);
  await counterparties.recordIc1Review({ workflowInstanceId: highInstance.id, checklist: { KYC_COMPLETE: 'PASS' }, pass: true, approverUserId: id('ic1') });
  await counterparties.recordRiskReview({ workflowInstanceId: highInstance.id, eddChecklist: { SENIOR_MGMT_NOTIFIED: 'DONE' }, eddRecommendation: 'DECLINE', eddConditionsOrBasis: 'Unresolved ownership.', approverUserId: id('risk') });
  const mdDeclined = await counterparties.recordMdDecision({ workflowInstanceId: highInstance.id, decision: 'DECLINED', conditionsOrReason: 'Insufficient evidence.', approverUserId: id('md') });
  if (mdDeclined.status === 'REJECTED') ok('MD DECLINED stops the HIGH_RISK chain before IC2');
  else fail('MD DECLINED did not reject the workflow', mdDeclined);
  const declinedCp = await prisma.counterparty.findUniqueOrThrow({ where: { id: highDeclined.id } });
  if (declinedCp.onboardingStatus === 'DECLINED') ok('onboardingStatus correctly flips to DECLINED on rejection');
  else fail('onboardingStatus did not flip to DECLINED', declinedCp);
  await expectReject('deployment remains blocked for a DECLINED counterparty', () =>
    prisma.txn.create({ data: { txnType: 'PLACEMENT', ledgerEntityCode, counterpartyId: highDeclined.id, valueDate: new Date(), amountKobo: 1_000n, makerUserId: id('finadmin') } }));

  // --- IC1 FAIL stops the chain immediately ---
  const ic1FailCp = await counterparties.onboard({
    legalName: 'IC1 Fail Investee Ltd', counterpartyType: 'CORPORATE', purposeOfFinancing: 'Bridge loan',
    amountSoughtKobo: 100_000_000n, expectedSourceOfRepayment: 'Refinancing', creditBureauConsent: true, onboardedByUserId: id('portmgr'),
  });
  counterpartyIds.push(ic1FailCp.id);
  await counterparties.recordComplianceRiskAssessment({ counterpartyId: ic1FailCp.id, riskMetricGrades: EIGHT_LOW_GRADES, pepSanctionsGrid: PEP_SANCTIONS_GRID, assessedByUserId: id('compliance') });
  const ic1FailInstance = await counterparties.submitOnboardingCaseForReview(ic1FailCp.id, id('portmgr'));
  workflowInstanceIds.push(ic1FailInstance.id);
  const ic1FailResult = await counterparties.recordIc1Review({ workflowInstanceId: ic1FailInstance.id, checklist: { KYC_COMPLETE: 'FAIL' }, notes: 'Missing CAC status report.', pass: false, approverUserId: id('ic1') });
  if (ic1FailResult.status === 'REJECTED') ok('IC1 FAIL rejects the counterparty chain immediately — Risk/IC2 never reached');
  else fail('IC1 FAIL did not reject the workflow', ic1FailResult);

  // --- Invariant 44(e) (CHECK10): document-upload checklist gate ---
  const SMOKE_DOC_TYPE = `SMOKE-CHECKLIST-DOC-${RUN}`;
  const requiredDocConfig = await documents.addRequiredDocumentType({ applicationType: 'FACILITY_APPLICATION', documentType: SMOKE_DOC_TYPE }, id('compliance'));

  const facilityApp3 = await counterparties.submitFacilityApplication({ counterpartyId: lowInvestee.id, requestedAmountKobo: 40_000_000n, purpose: 'Working capital' });
  facilityAppIds.push(facilityApp3.id);
  const memo3 = await counterparties.draftInvestmentMemo(
    {
      facilityApplicationId: facilityApp3.id,
      dealSummary: 'Working capital facility.',
      structureType: 'Murabaha',
      amountKobo: 40_000_000n,
      tenorMonths: 9,
      targetReturnPct: 14,
      riskNotes: 'Standard working-capital exposure.',
      shariahNotes: 'Tangible goods as underlying.',
      collateralNotes: 'Receivables assignment.',
    },
    id('portmgr'),
  );
  const memo3Instance = await counterparties.submitInvestmentMemoForCioApproval(memo3.id, id('portmgr'));
  workflowInstanceIds.push(memo3Instance.workflowInstanceId!);
  await counterparties.approveInvestmentMemo(memo3Instance.workflowInstanceId!, id('portmgr2'), 'PM validation: standard working-capital exposure.');
  await counterparties.approveInvestmentMemo(memo3Instance.workflowInstanceId!, id('cio'), 'Approved.');

  await expectReject('reviewAndSubmitFacilityApplication refuses with a CIO-approved memo but an incomplete document checklist (invariant 44e)', () =>
    counterparties.reviewAndSubmitFacilityApplication(facilityApp3.id, id('portmgr')));

  await expectReject('a DIFFERENT counterparty cannot upload a document onto this application (ownership check)', () =>
    counterparties.uploadFacilityApplicationDocument({ applicationId: facilityApp3.id, documentType: SMOKE_DOC_TYPE, fileReference: 'smoke://intruder' }, highDeclined.id));

  // Upload EVERY currently-required document type (whatever is configured
  // on this DB, real seed rows included) so this assertion is correct
  // regardless of whether scripts/check10-seed-required-documents.ts has
  // been run here yet.
  const checklistBefore = await counterparties.getFacilityApplicationChecklistForStaff(facilityApp3.id, id('portmgr'));
  for (const docType of checklistBefore.required) {
    await counterparties.uploadFacilityApplicationDocument({ applicationId: facilityApp3.id, documentType: docType, fileReference: `smoke://${docType.toLowerCase()}` }, lowInvestee.id);
  }
  const checklistAfter = await counterparties.getFacilityApplicationChecklist(facilityApp3.id, lowInvestee.id);
  if (checklistAfter.complete) {
    ok(`document checklist complete after uploading all ${checklistBefore.required.length} required type(s) via the portal-facing method`);
  } else {
    fail('checklist still incomplete after uploading every required type', checklistAfter);
  }

  const submitted3 = await counterparties.reviewAndSubmitFacilityApplication(facilityApp3.id, id('portmgr'));
  workflowInstanceIds.push(submitted3.workflowInstanceId!);
  if (submitted3.status === 'SUBMITTED') ok('reviewAndSubmitFacilityApplication now succeeds once the required-document checklist is complete');
  else fail('facility application did not reach SUBMITTED after checklist completion', submitted3);

  await expectReject('documents are only accepted while the application is DRAFT — SUBMITTED refuses further uploads', () =>
    counterparties.uploadFacilityApplicationDocument({ applicationId: facilityApp3.id, documentType: SMOKE_DOC_TYPE, fileReference: 'smoke://too-late' }, lowInvestee.id));

  // Includes the checklist uploads PLUS the INVESTMENT_MEMO entry
  // draftInvestmentMemo itself writes to the same entity/entityId — the
  // portal listing is deliberately unfiltered (every document on the
  // application's permanent file), so it's a superset of the checklist.
  const portalDocs = await counterparties.listFacilityApplicationDocumentsForPortal(facilityApp3.id, lowInvestee.id);
  const portalDocTypes = new Set(portalDocs.map((d) => d.documentType));
  if (checklistBefore.required.every((t) => portalDocTypes.has(t))) {
    ok(`portal-facing listFacilityApplicationDocumentsForPortal returns all ${checklistBefore.required.length} checklist document(s) (plus the investment memo entry, ${portalDocs.length} total)`);
  } else {
    fail('portal document listing missing an uploaded checklist type', portalDocs);
  }

  await counterparties.rejectFacilityApplication(submitted3.workflowInstanceId!, id('risk'), 'Smoke test cleanup — declining to close out the fixture.');
  await prisma.requiredDocumentConfig.deleteMany({ where: { id: requiredDocConfig.id } });

  // ==========================================================================
  // Invariant 46(c): AT_OR_ABOVE_THRESHOLD chain — PM validation -> CIO ->
  // Investment Committee (icResolutionRef required) -> MD/CEO.
  // ==========================================================================
  const facilityApp4 = await counterparties.submitFacilityApplication({ counterpartyId: lowInvestee.id, requestedAmountKobo: 2_000_000_000n, purpose: 'Large syndicated facility' });
  facilityAppIds.push(facilityApp4.id);
  const memo4 = await counterparties.draftInvestmentMemo(
    {
      facilityApplicationId: facilityApp4.id,
      dealSummary: 'Large syndicated facility, at/above the governed DoA threshold.',
      structureType: 'Murabaha',
      amountKobo: 2_000_000_000n,
      tenorMonths: 36,
      targetReturnPct: 15,
      riskNotes: 'Sizeable exposure, warrants full IC+MD scrutiny.',
      shariahNotes: 'Tangible underlying asset pool.',
      collateralNotes: 'First-ranking charge over syndicated collateral pool, 130% coverage.',
    },
    id('portmgr'),
  );
  const memo4Instance = await counterparties.submitInvestmentMemoForCioApproval(memo4.id, id('portmgr'));
  workflowInstanceIds.push(memo4Instance.workflowInstanceId!);
  await counterparties.approveInvestmentMemo(memo4Instance.workflowInstanceId!, id('portmgr2'), 'PM validation: large exposure reviewed.');
  await counterparties.approveInvestmentMemo(memo4Instance.workflowInstanceId!, id('cio'), 'CIO approves, referring to Investment Committee given size.');
  const [memo4Listed] = await counterparties.listInvestmentMemos(facilityApp4.id, id('portmgr'));
  if (memo4Listed.status === 'SUBMITTED') ok('a memo at/above the governed DoA threshold stays SUBMITTED after CIO approval — IC and MD still pending (invariant 46c)');
  else fail('memo status flipped to CIO_APPROVED before IC/MD steps ran', memo4Listed);

  await expectReject('the generic approveInvestmentMemo refuses to process the Investment Committee step (icResolutionRef required)', () =>
    counterparties.approveInvestmentMemo(memo4Instance.workflowInstanceId!, id('invcommittee')));
  await expectReject('approveInvestmentMemoAsCommittee refuses a blank icResolutionRef', () =>
    counterparties.approveInvestmentMemoAsCommittee(memo4Instance.workflowInstanceId!, id('invcommittee'), ''));
  await expectReject('an outsider without INVESTMENT_COMMITTEE_APPROVAL cannot record the IC resolution', () =>
    counterparties.approveInvestmentMemoAsCommittee(memo4Instance.workflowInstanceId!, id('outsider'), 'IC-RES-0001'));
  await counterparties.approveInvestmentMemoAsCommittee(memo4Instance.workflowInstanceId!, id('invcommittee'), `IC-RES-${RUN}`);
  const [memo4AfterIc] = await counterparties.listInvestmentMemos(facilityApp4.id, id('portmgr'));
  if (memo4AfterIc.icResolutionRef === `IC-RES-${RUN}` && memo4AfterIc.status === 'SUBMITTED') {
    ok('Investment Committee approval records icResolutionRef on the memo; still SUBMITTED pending MD (invariant 46c)');
  } else {
    fail('IC approval did not record icResolutionRef or moved status prematurely', memo4AfterIc);
  }

  await expectReject('approveInvestmentMemoAsCommittee refuses to process the MD step (not the IC step)', () =>
    counterparties.approveInvestmentMemoAsCommittee(memo4Instance.workflowInstanceId!, id('md'), 'IC-RES-WRONG-STEP'));
  const memo4MdApproved = await counterparties.approveInvestmentMemo(memo4Instance.workflowInstanceId!, id('md'), 'MD/CEO final approval.');
  if (memo4MdApproved.status === 'APPROVED') ok('MD/CEO closes the AT_OR_ABOVE_THRESHOLD chain — invariant 46(c)');
  else fail('MD approval did not reach APPROVED', memo4MdApproved);
  // Invariant 49(g)(iii) (CHECK11): the terminal status for an
  // AT_OR_ABOVE_THRESHOLD memo is MD_APPROVED, not CIO_APPROVED -- the old
  // assertion here (a single shared terminal marker regardless of which
  // tier closed the chain) encoded the exact truth-in-registers defect
  // that invariant fixed: CIO_APPROVED named a specific approver identity
  // that was wrong once the chain went further through IC and MD/CEO.
  const [memo4Final] = await counterparties.listInvestmentMemos(facilityApp4.id, id('portmgr'));
  if (memo4Final.status === 'MD_APPROVED') {
    ok('memo reaches its real terminal status, MD_APPROVED, for the AT_OR_ABOVE_THRESHOLD chain (invariant 49g-iii)');
  } else {
    fail('memo did not reach terminal MD_APPROVED status', memo4Final);
  }

  // Cleanup.
  // investment_memo_threshold_config.created_by_user_id/approved_by_user_id
  // are RESTRICT FKs (unlike workflowInstanceId, a plain scalar) — must
  // clear before the ephemeral smoke users below are deleted.
  await prisma.investmentMemoThresholdConfig.deleteMany({ where: { id: thresholdProposal.config.id } });
  // Invariant 36(f): investment_memo FK-restricts facility_application_id —
  // must clear before the facility applications themselves; the
  // document_register_entry rows the memos wrote are polymorphic (no FK)
  // but are cleaned up too, so no SMOKE_ residue lingers in the register.
  await prisma.investmentMemo.deleteMany({ where: { facilityApplicationId: { in: facilityAppIds } } });
  await prisma.documentRegisterEntry.deleteMany({ where: { entityType: 'counterparty_facility_application', entityId: { in: facilityAppIds } } });
  await prisma.counterpartyFacilityApplication.deleteMany({ where: { id: { in: facilityAppIds } } });
  await prisma.workflowStepApproval.deleteMany({ where: { workflowInstanceId: { in: workflowInstanceIds } } });
  await prisma.workflowInstance.deleteMany({ where: { id: { in: workflowInstanceIds } } });
  await prisma.txn.deleteMany({ where: { counterpartyId: { in: counterpartyIds } } });
  await prisma.counterpartyOnboardingCase.deleteMany({ where: { counterpartyId: { in: counterpartyIds } } });
  await prisma.counterparty.deleteMany({ where: { id: { in: counterpartyIds } } });
  await prisma.ledgerEntity.deleteMany({ where: { code: ledgerEntityCode } });
  const userIds = [...users.values()].map((u) => u.id);
  await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
  await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });

  await prisma.$disconnect();
  console.log('\nSMOKE OK — Counterparty (investee) onboarding (CHECK5 item 5b) against the real live DB.');
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
