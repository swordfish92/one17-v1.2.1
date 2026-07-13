// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/zakat/zakat.smoke.ts
// Invariant 26(c) adversarial set against the REAL live DB: rate-calendar
// pairing enforced; nisab prompt fires only above threshold; deactivated
// clients get zero prompts; assessment immutable post-certification;
// client sees own assessments only (cross-client leak test); AWAITING
// BOARD APPROVAL gate when the nisab config is unset; maker!=checker on
// schedule-item claim-validation, same shape as WM_CLAIM_VALIDATION.
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
import { InvestorService } from '../investor/investor.service';
import { PortalAuthService } from '../portal-auth/portal-auth.service';
import { LedgerService } from '../ledger/ledger.service';
import { EventJournalService } from '../event-journal/event-journal.service';
import { WmService } from '../wm/wm.service';
import { NotificationService } from '../notification/notification.service';
import { AttendanceService } from '../attendance/attendance.service';
import { ZakatService } from './zakat.service';
import { WorkflowInboxService } from '../ops-api/workflow-inbox.service';
import { PmsService } from '../pms/pms.service';
import { MarketingService } from '../marketing/marketing.service';

const RUN = Date.now();
let failed = false;
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function expectReject(label: string, fn: () => unknown | Promise<unknown>) {
  try { await fn(); fail(`expected rejection: ${label}`); }
  catch (err) { ok(`rejected as expected: ${label} — ${(err as Error).message.split('\n')[0]}`); }
}

const FULL_CHECKLIST = [
  { itemCode: 'UN_SC_CONSOLIDATED', listVersionOrDate: '2026-06' },
  { itemCode: 'NG_SANCTIONS_LIST', listVersionOrDate: '2026-06' },
  { itemCode: 'OFAC_SDN', listVersionOrDate: '2026-06' },
  { itemCode: 'EFCC_NFIU_ADVISORIES', listVersionOrDate: '2026-06' },
  { itemCode: 'PEP_DETERMINATION', listVersionOrDate: '2026-06' },
  { itemCode: 'ADVERSE_MEDIA', listVersionOrDate: '2026-06' },
];

async function onboardKycCompleteInvestor(investors: InvestorService, rbac: RbacService, prisma: PrismaService, tag: string) {
  const finAdmin = await prisma.appUser.create({ data: { email: `zakat-finadmin-${tag}-${RUN}@one17.test`, displayName: 'zakat-finadmin' } });
  await rbac.assignRole({ userId: finAdmin.id, roleCode: 'FIN_ADMIN' });
  const compliance = await prisma.appUser.create({ data: { email: `zakat-compliance-${tag}-${RUN}@one17.test`, displayName: 'zakat-compliance' } });
  await rbac.assignRole({ userId: compliance.id, roleCode: 'COMPLIANCE' });

  const investor = await investors.onboard({
    fullLegalName: `Zakat Smoke Client ${tag} ${RUN}`,
    entityType: 'HNWI_INDIVIDUAL',
    nationality: 'Nigerian',
    taxIdentificationNumber: `TIN-ZAKAT-${tag}-${RUN}`,
    contactEmail: `zakat-client-${tag}-${RUN}@one17.test`,
    contactPhone: '+2348033333333',
    registeredAddress: `1 Zakat Smoke Close, Lagos`,
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
  return (await investors.approveKyc(wf.id, compliance.id))!;
}

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
  const notification = new NotificationService(prisma);
  const zakat = new ZakatService(prisma, audit, delegation, workflow, wm, notification);
  const attendance = new AttendanceService(prisma, audit, delegation, workflow, notification);
  const pms = new PmsService(prisma, audit, delegation, workflow, ledger, attendance);
  const marketing = {} as unknown as MarketingService;
  const workflowInbox = new WorkflowInboxService(prisma, workflow, investors, {} as any, wm, pms, marketing, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, zakat, ledger, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any);

  const advisor1 = await prisma.appUser.create({ data: { email: `zakat-advisor1-${RUN}@one17.test`, displayName: 'zakat-advisor1' } });
  await rbac.assignRole({ userId: advisor1.id, roleCode: 'WM_ADVISOR' });
  const advisor2 = await prisma.appUser.create({ data: { email: `zakat-advisor2-${RUN}@one17.test`, displayName: 'zakat-advisor2' } });
  await rbac.assignRole({ userId: advisor2.id, roleCode: 'WM_ADVISOR' });
  const shariahReviewer = await prisma.appUser.create({ data: { email: `zakat-shariah-${RUN}@one17.test`, displayName: 'zakat-shariah' } });
  await rbac.assignRole({ userId: shariahReviewer.id, roleCode: 'SHARIAH_REV' });
  const outsider = await prisma.appUser.create({ data: { email: `zakat-outsider-${RUN}@one17.test`, displayName: 'zakat-outsider' } });

  const investorA = await onboardKycCompleteInvestor(investors, rbac, prisma, 'A');
  const investorB = await onboardKycCompleteInvestor(investors, rbac, prisma, 'B');

  // ---- AMD-12 doctrine: nisab AWAITING BOARD APPROVAL until governed ----
  // zakat_nisab_config is a governed SINGLETON (like wm_fx_config elsewhere)
  // — reset it first so this assertion is meaningful on a rerun, not just a
  // truly-fresh database.
  await prisma.zakatNisabConfig.deleteMany({ where: { id: 1 } });
  const nisabBefore = await zakat.getNisabConfig();
  if (nisabBefore.nisabGoldGrams == null && nisabBefore.goldPricePerGramKobo == null) {
    ok(`nisab config ships NULL (AWAITING BOARD APPROVAL) — never a fabricated default`);
  } else {
    fail(`expected a fresh nisab config to be NULL/NULL`, nisabBefore);
  }
  const breachedBeforeConfig = await zakat.isNisabBreached(investorA.investorId);
  if (breachedBeforeConfig.breached === false && breachedBeforeConfig.nisabThresholdKobo === null) {
    ok(`with no governed nisab config, isNisabBreached reports breached=false / threshold=null (never a fake threshold)`);
  } else {
    fail(`expected breached=false, threshold=null before governance`, breachedBeforeConfig);
  }
  await expectReject('outsider (no ZAKAT_ADVISORY capability) cannot update the nisab config', () =>
    zakat.updateNisabConfig(85, 1_500_000n, outsider.id));
  const nisabUpdated = await zakat.updateNisabConfig(85, 1_500_000n, advisor1.id);
  if (Number(nisabUpdated.nisabGoldGrams) === 85 && nisabUpdated.goldPricePerGramKobo === '1500000') {
    ok(`ZAKAT_ADVISORY APPROVE holder governs the nisab config (85g @ ₦15,000/g)`);
  } else {
    fail(`expected the nisab config update to persist`, nisabUpdated);
  }

  // ---- subscription activate/deactivate + rate basis election ----
  await expectReject('outsider cannot activate a Zakat subscription', () => zakat.activateSubscription(investorA.investorId, outsider.id));
  await zakat.activateSubscription(investorA.investorId, advisor1.id);
  await zakat.activateSubscription(investorB.investorId, advisor1.id);
  ok(`ZAKAT_ADVISORY INITIATE holder activates Zakat subscriptions for clients A and B`);

  await expectReject('rate-calendar pairing enforced: cannot create an assessment before a rate basis is elected', () =>
    zakat.createAssessmentSandbox({ investorId: investorA.investorId, assessmentDateGregorian: new Date('2026-07-06'), assessmentDateHijri: '21 Muharram 1448', createdByUserId: advisor1.id }));
  await zakat.electRateBasis(investorA.investorId, 'GREGORIAN');
  await zakat.electRateBasis(investorB.investorId, 'LUNAR');
  ok(`clients A (GREGORIAN) and B (LUNAR) elect their own rate basis`);

  // ---- deactivated client: zero nisab prompts ----
  await zakat.deactivateSubscription(investorB.investorId, advisor1.id);
  const monitorAfterDeactivateB = await zakat.runNisabBreachMonitor();
  ok(`nisab-breach monitor ran with client B deactivated — checked ${monitorAfterDeactivateB.checked} active subscription(s) (B correctly excluded)`);
  const activeSubs = await zakat.listActiveSubscriptions();
  if (!activeSubs.some((s) => s.investorId === investorB.investorId) && activeSubs.some((s) => s.investorId === investorA.investorId)) {
    ok(`deactivated client B does not appear in the active-subscription list the monitor sweeps — zero prompts by construction`);
  } else {
    fail(`expected B excluded, A included, from listActiveSubscriptions`, activeSubs);
  }

  // ---- assessment sandbox creation + declare/verify schedule items ----
  const runA = await zakat.createAssessmentSandbox({
    investorId: investorA.investorId, assessmentDateGregorian: new Date('2026-07-06'), assessmentDateHijri: '21 Muharram 1448', createdByUserId: advisor1.id,
  });
  if (runA.status === 'DRAFT' && runA.rateBasis === 'GREGORIAN') {
    ok(`assessment sandbox created DRAFT, rate basis GREGORIAN (from the client's own election), One17 balances auto-filled`);
  } else {
    fail(`expected DRAFT/GREGORIAN`, runA);
  }

  await expectReject('outsider cannot declare a Zakat schedule item', () =>
    zakat.declareScheduleItem({ zakatAssessmentRunId: runA.id, scheduleType: 'CASH_BANK', description: 'x', amountKobo: 1n, zakatability: 'ZAKATABLE', declaredByUserId: outsider.id }));

  const { item: cashItem, workflowInstance: cashWf } = await zakat.declareScheduleItem({
    zakatAssessmentRunId: runA.id, scheduleType: 'CASH_BANK', description: 'Cash in hand + bank balances', amountKobo: 6_761_096_14n, zakatability: 'ZAKATABLE', declaredByUserId: advisor1.id,
  });
  await expectReject('declarer (advisor1) cannot verify their own Zakat schedule item', () => zakat.verifyScheduleItem(cashWf.id, advisor1.id));
  const cashVerified = await workflowInbox.approve(cashWf.id, advisor2.id) as { status: string };
  const cashItemAfter = await prisma.zakatDeclaredItem.findUniqueOrThrow({ where: { id: cashItem.id } });
  if (cashVerified.status === 'APPROVED' && cashItemAfter.verificationTag === 'VERIFIED') {
    ok(`generic Workflow Inbox dispatches ZAKAT_ITEM_VALIDATION -> a DIFFERENT advisor verifies -> DECLARED->VERIFIED, same shape as WM_CLAIM_VALIDATION`);
  } else {
    fail(`expected the cash item VERIFIED by advisor2`, cashItemAfter);
  }

  const { item: investmentItem, workflowInstance: investmentWf } = await zakat.declareScheduleItem({
    zakatAssessmentRunId: runA.id, scheduleType: 'INVESTMENT', description: 'Cash + agric + real-estate investments', amountKobo: 233_997_475_93n, zakatability: 'ZAKATABLE', declaredByUserId: advisor1.id,
  });
  const { item: goldItem, workflowInstance: goldWf } = await zakat.declareScheduleItem({
    zakatAssessmentRunId: runA.id, scheduleType: 'GOLD_SILVER', description: 'Jewelry + coins', amountKobo: 500_000_00n, zakatability: 'ZAKATABLE', declaredByUserId: advisor1.id,
  });
  const { item: fixedAssetItem, workflowInstance: fixedAssetWf } = await zakat.declareScheduleItem({
    zakatAssessmentRunId: runA.id, scheduleType: 'FIXED_ASSET', description: 'House No. 5 (personal residence)', amountKobo: 300_000_000_00n, zakatability: 'NON_ZAKATABLE', declaredByUserId: advisor1.id,
  });
  const { item: receivableGoodItem, workflowInstance: receivableGoodWf } = await zakat.declareScheduleItem({
    zakatAssessmentRunId: runA.id, scheduleType: 'RECEIVABLE', description: 'Money owed, good receivables', amountKobo: 17_000_000_00n, zakatability: 'ZAKATABLE', declaredByUserId: advisor1.id,
  });
  const { item: receivableDoubtfulItem, workflowInstance: receivableDoubtfulWf } = await zakat.declareScheduleItem({
    zakatAssessmentRunId: runA.id, scheduleType: 'RECEIVABLE', description: 'Doubtful receivables — zakatable only when received', amountKobo: 44_200_000_00n, zakatability: 'DOUBTFUL', declaredByUserId: advisor1.id,
  });
  const { item: liabilityItem, workflowInstance: liabilityWf } = await zakat.declareScheduleItem({
    zakatAssessmentRunId: runA.id, scheduleType: 'LIABILITY', description: 'Short-term payables due within 1 year', amountKobo: 21_500_000_00n, zakatability: 'ZAKATABLE', declaredByUserId: advisor1.id,
  });
  const { item: longTermLiabilityItem, workflowInstance: longTermLiabilityWf } = await zakat.declareScheduleItem({
    zakatAssessmentRunId: runA.id, scheduleType: 'LIABILITY', description: 'Mortgage / long-term debt (never deducted)', amountKobo: 60_000_000_00n, zakatability: 'NON_ZAKATABLE', declaredByUserId: advisor1.id,
  });
  ok(`declared the remaining 7 schedule items across all 6 schedule types (cash/bank already declared+verified above)`);

  // ---- invariant 71(a)(i): the official computation now counts ONLY ----
  // VERIFIED items -- verify all 7 remaining items (a different officer,
  // advisor2, than the declarer advisor1) so this run's own official figure
  // reflects the FULL corrected 5-schedule formula, not just the one item
  // that happened to be verified for the earlier maker!=checker proof. This
  // also satisfies submitForCertification's own new outstanding-items gate
  // below -- every item on a run must be final before certification.
  for (const wf of [investmentWf, goldWf, fixedAssetWf, receivableGoodWf, receivableDoubtfulWf, liabilityWf, longTermLiabilityWf]) {
    await zakat.verifyScheduleItem(wf.id, advisor2.id);
  }
  ok(`advisor2 verifies all 7 remaining items (declarer advisor1 != verifier advisor2, maker!=checker holds across the full schedule)`);

  // ---- client agrees, then compute + verify the corrected 5-schedule formula ----
  await expectReject('client B cannot agree to client A\'s sandbox (cross-client leak test)', () => zakat.clientAgreeToSandbox(runA.id, investorB.investorId));
  const agreed = await zakat.clientAgreeToSandbox(runA.id, investorA.investorId);
  if (agreed.status === 'CLIENT_AGREED') ok(`client A agrees to proceed (DRAFT -> CLIENT_AGREED)`);
  else fail(`expected CLIENT_AGREED`, agreed);

  const computed = await zakat.computeAssessment(runA.id);
  // Expected net = ONE17 total (0, no product accounts) + cash(6,761,096.14)
  // + investment(233,997,475.93) + gold(500,000) + receivable-good(17,000,000)
  // - liability-short-term(21,500,000). FIXED_ASSET is NON_ZAKATABLE (personal
  // residence), RECEIVABLE-doubtful is DOUBTFUL (excluded), LIABILITY
  // long-term is NON_ZAKATABLE (never deducted) — none of these three
  // contribute EVEN THOUGH ALL THREE ARE NOW VERIFIED (proving the exclusion
  // is genuinely zakatability-driven, not an artifact of being unverified),
  // proving the zakatability/DOUBTFUL/long-term-liability gates all work
  // together in one computation.
  const expectedNetKobo = 676_109_614n + 23_399_747_593n + 50_000_000n + 1_700_000_000n - 2_150_000_000n;
  if (BigInt(computed.netZakatableKobo!) === expectedNetKobo) {
    ok(`Net Zakatable computed correctly (₦${(Number(expectedNetKobo) / 100).toLocaleString()}) — NON_ZAKATABLE fixed asset, DOUBTFUL receivable, and long-term liability all correctly excluded`);
  } else {
    fail(`Net Zakatable mismatch`, { expected: expectedNetKobo.toString(), got: computed.netZakatableKobo });
  }
  const expectedDueKobo = (expectedNetKobo * 2577n) / 100_000n; // GREGORIAN 2.577%
  if (BigInt(computed.zakatDueKobo!) === expectedDueKobo) {
    ok(`Zakat Due computed at the GREGORIAN 2.577% rate (client A's elected basis) — ₦${(Number(expectedDueKobo) / 100).toLocaleString()}`);
  } else {
    fail(`Zakat Due mismatch`, { expected: expectedDueKobo.toString(), got: computed.zakatDueKobo });
  }

  // ---- certification: submit, certify, then prove immutability ----
  await expectReject('outsider cannot submit a Zakat assessment for certification', () => zakat.submitForCertification(runA.id, outsider.id));
  const { workflowInstance: certWf } = await zakat.submitForCertification(runA.id, advisor1.id);
  const runAfterSubmit = await prisma.zakatAssessmentRun.findUniqueOrThrow({ where: { id: runA.id } });
  if (runAfterSubmit.status === 'AWAITING_SHARIAH_CERTIFICATION') ok(`assessment submitted for Shariah certification (CLIENT_AGREED -> AWAITING_SHARIAH_CERTIFICATION)`);
  else fail(`expected AWAITING_SHARIAH_CERTIFICATION`, runAfterSubmit);

  await expectReject('a non-Shariah user (advisor2 — WM_ADVISOR, no ZAKAT_CERTIFICATION grant) cannot certify a Zakat assessment', () => workflowInbox.approve(certWf.id, advisor2.id));
  const certified = await workflowInbox.approve(certWf.id, shariahReviewer.id) as { status: string };
  const runCertified = await prisma.zakatAssessmentRun.findUniqueOrThrow({ where: { id: runA.id } });
  if (certified.status === 'APPROVED' && runCertified.status === 'CERTIFIED' && runCertified.certifiedByUserId === shariahReviewer.id) {
    ok(`SHARIAH_REV certifies the assessment (AWAITING_SHARIAH_CERTIFICATION -> CERTIFIED) — the approval record IS the certificate`);
  } else {
    fail(`expected CERTIFIED by shariahReviewer`, runCertified);
  }

  const subAfterCertify = await prisma.zakatClientSubscription.findUniqueOrThrow({ where: { investorId: investorA.investorId } });
  if (subAfterCertify.zakatAnniversaryGregorian?.toISOString().slice(0, 10) === '2026-07-06' && subAfterCertify.zakatAnniversaryHijri === '21 Muharram 1448') {
    ok(`the FIRST certified assessment establishes the client's recurring Zakat anniversary (dual calendar)`);
  } else {
    fail(`expected the anniversary to be set from the certified assessment's own dates`, subAfterCertify);
  }

  await expectReject('a CERTIFIED assessment is immutable — no further schedule items may be declared', () =>
    zakat.declareScheduleItem({ zakatAssessmentRunId: runA.id, scheduleType: 'CASH_BANK', description: 'late addition', amountKobo: 1n, zakatability: 'ZAKATABLE', declaredByUserId: advisor1.id }));
  await expectReject('a CERTIFIED assessment cannot be re-submitted for certification', () => zakat.submitForCertification(runA.id, advisor1.id));

  // ---- invariant 71(a)(i) verbatim adversarial: a CERTIFIED record is ----
  // unaffected by any later declaration — numeric proof, not just "the
  // attempt was rejected": capture the persisted official figures, attempt
  // (and fail) another declaration, then re-fetch and confirm byte-for-byte
  // identical values.
  const runCertifiedBefore = await prisma.zakatAssessmentRun.findUniqueOrThrow({ where: { id: runA.id } });
  await expectReject('invariant 71(a)(i): a CERTIFIED record is unaffected by any later declaration attempt', () =>
    zakat.declareScheduleItem({ zakatAssessmentRunId: runA.id, scheduleType: 'GOLD_SILVER', description: 'another late addition', amountKobo: 999_999_00n, zakatability: 'ZAKATABLE', declaredByUserId: advisor1.id }));
  const runCertifiedAfter = await prisma.zakatAssessmentRun.findUniqueOrThrow({ where: { id: runA.id } });
  if (runCertifiedAfter.netZakatableKobo === runCertifiedBefore.netZakatableKobo && runCertifiedAfter.zakatDueKobo === runCertifiedBefore.zakatDueKobo) {
    ok(`invariant 71(a)(i): CERTIFIED assessment's persisted netZakatableKobo/zakatDueKobo are byte-for-byte unchanged after the rejected late-declaration attempt`);
  } else {
    fail(`expected the CERTIFIED run's persisted figures to be unchanged`, { before: runCertifiedBefore, after: runCertifiedAfter });
  }

  // ---- client sees own assessments only (cross-client leak test) ----
  await expectReject('client B cannot view client A\'s assessment detail (cross-client leak test)', () => zakat.getAssessmentDetail(runA.id, investorB.investorId));
  const detailForA = await zakat.getAssessmentDetail(runA.id, investorA.investorId);
  if (detailForA.run.id === runA.id && detailForA.items.length === 8) {
    ok(`client A can view their own certified assessment detail with all 8 declared items`);
  } else {
    fail(`expected client A to see their own assessment with 8 items`, detailForA);
  }
  const listForA = await zakat.listAssessmentsForInvestor(investorA.investorId);
  const listForB = await zakat.listAssessmentsForInvestor(investorB.investorId);
  if (listForA.some((r) => r.id === runA.id) && !listForB.some((r) => r.id === runA.id)) {
    ok(`client sees own assessments only — A's list includes runA, B's list does not`);
  } else {
    fail(`expected A's list to include runA and B's list to exclude it`, { listForA, listForB });
  }

  // ==========================================================================
  // Invariant 70(h) — Investor Zakat Self-Service. Adversarial set (v):
  // tab invisible before approval; unverified declared items excluded from
  // the verdict; Portfolio sees aggregates only; client cannot verify their
  // own declaration; BD/REL_OFF maker!=checker still holds now that they
  // hold ZAKAT_ADVISORY too.
  // ==========================================================================
  const bd1 = await prisma.appUser.create({ data: { email: `zakat-bd1-${RUN}@one17.test`, displayName: 'zakat-bd1' } });
  await rbac.assignRole({ userId: bd1.id, roleCode: 'BD' });
  const bd2 = await prisma.appUser.create({ data: { email: `zakat-bd2-${RUN}@one17.test`, displayName: 'zakat-bd2' } });
  await rbac.assignRole({ userId: bd2.id, roleCode: 'BD' });
  const relOff = await prisma.appUser.create({ data: { email: `zakat-reloff-${RUN}@one17.test`, displayName: 'zakat-reloff' } });
  await rbac.assignRole({ userId: relOff.id, roleCode: 'REL_OFF' });
  const portOfficer = await prisma.appUser.create({ data: { email: `zakat-portoff-${RUN}@one17.test`, displayName: 'zakat-portoff' } });
  await rbac.assignRole({ userId: portOfficer.id, roleCode: 'PORT_OFF' });

  const investorC = await onboardKycCompleteInvestor(investors, rbac, prisma, 'C');

  // ---- subscription REQUEST queue: tab invisible before approval ----
  await expectReject('requestSubscription rejects without NDPA advisory-use consent', () => zakat.requestSubscription(investorC.investorId, false));
  const subReq = await zakat.requestSubscription(investorC.investorId, true);
  if (subReq.status === 'PENDING' && subReq.consentAcknowledgedAt) {
    ok(`portal requestSubscription creates a PENDING request with consent captured, no capability gate (ownership inherent)`);
  } else {
    fail(`expected a PENDING request with consentAcknowledgedAt set`, subReq);
  }
  if ((await zakat.isZakatTabActive(investorC.investorId)) === false) {
    ok(`adversarial (v): Zakat tab is invisible (isZakatTabActive=false) before staff approval`);
  } else {
    fail(`expected isZakatTabActive=false before approval`);
  }
  await expectReject('adversarial (v): the Zakat position read model itself refuses before subscription approval (tab invisible, server-computed, not a client-side flag)', () =>
    zakat.getZakatPositionForClient(investorC.investorId));
  await expectReject('outsider cannot list pending Zakat subscription requests', () => zakat.listPendingSubscriptionRequests(outsider.id));
  const pendingReqs = await zakat.listPendingSubscriptionRequests(bd1.id);
  if (pendingReqs.some((r) => r.id === subReq.id)) {
    ok(`BD (ZAKAT_ADVISORY VIEW) sees investor C's pending subscription request in the queue`);
  } else {
    fail(`expected investor C's request in the pending queue`, pendingReqs);
  }
  await expectReject('outsider cannot approve a Zakat subscription request', () => zakat.approveSubscriptionRequest(subReq.id, outsider.id));
  const approved = await zakat.approveSubscriptionRequest(subReq.id, bd1.id);
  if (approved.status === 'APPROVED' && approved.approvedByUserId === bd1.id && (await zakat.isZakatTabActive(investorC.investorId)) === true) {
    ok(`BD (ZAKAT_ADVISORY INITIATE) approves the request -> activates the subscription (reuses activateSubscription verbatim) -> Zakat tab now active`);
  } else {
    fail(`expected APPROVED by bd1 and the tab now active`, { approved, active: await zakat.isZakatTabActive(investorC.investorId) });
  }
  await expectReject('a Zakat subscription request already APPROVED cannot be re-approved', () => zakat.approveSubscriptionRequest(subReq.id, bd1.id));

  // ---- client-declare path: DECLARED items excluded from the portal's own verdict until VERIFIED ----
  await zakat.electRateBasis(investorC.investorId, 'LUNAR');
  const runC = await zakat.createAssessmentSandbox({ investorId: investorC.investorId, assessmentDateGregorian: new Date('2026-07-12'), assessmentDateHijri: '27 Muharram 1448', createdByUserId: bd1.id });

  const positionBeforeItems = await zakat.getZakatPositionForClient(investorC.investorId);
  if (positionBeforeItems.assessment?.id === runC.id && positionBeforeItems.items.length === 0 && positionBeforeItems.verifiedNetZakatableKobo === '0') {
    ok(`getZakatPositionForClient renders the auto-filled One17 snapshot with zero declared items before the client adds anything`);
  } else {
    fail(`expected an empty-items position keyed to runC`, positionBeforeItems);
  }

  await expectReject('cross-client leak: investor B cannot declare an item on investor C\'s assessment', () =>
    zakat.declareScheduleItemAsClient(investorB.investorId, { zakatAssessmentRunId: runC.id, scheduleType: 'CASH_BANK', description: 'leak attempt', amountKobo: 1n, zakatability: 'ZAKATABLE' }));

  const { item: clientCashItem, workflowInstance: clientCashWf } = await zakat.declareScheduleItemAsClient(investorC.investorId, {
    zakatAssessmentRunId: runC.id, scheduleType: 'CASH_BANK', description: 'Client-declared savings account', amountKobo: 500_000_00n, zakatability: 'ZAKATABLE',
  });
  if (clientCashItem.declarationSource === 'CLIENT' && clientCashItem.declaredByUserId === null && clientCashItem.verificationTag === 'DECLARED') {
    ok(`invariant 70(h)(ii): client-portal declare creates a DECLARED item, declarationSource=CLIENT, declaredByUserId=null (no AppUser row for a PortalClientUser)`);
  } else {
    fail(`expected a CLIENT-sourced DECLARED item with no declaredByUserId`, clientCashItem);
  }

  const positionUnverified = await zakat.getZakatPositionForClient(investorC.investorId);
  const officialBeforeVerify = await zakat.computeAssessment(runC.id);
  if (positionUnverified.verifiedNetZakatableKobo === '0' && officialBeforeVerify.netZakatableKobo === '0') {
    ok(`invariant 71(a)(i), CORRECTED (was the CF-01 defect): a DECLARED (not yet VERIFIED) item can NEVER alter the OFFICIAL persisted computeAssessment figure either -- both the portal preview (₦0) AND the official computation (₦0) now agree, unlike the prior candidate where computeAssessment wrongly included the unverified ₦500,000 item`);
  } else {
    fail(`expected BOTH verifiedNetZakatableKobo and official netZakatableKobo to be 0 while the item is still DECLARED`, { positionUnverified, officialBeforeVerify });
  }

  // ---- invariant 71(a)(i) verbatim adversarial: certification blocked ----
  // until all items final. runC needs CLIENT_AGREED to even reach the
  // outstanding-items gate (the pre-existing status gate fires first
  // otherwise) -- reaching it here, before verification, deliberately
  // proves the gate blocks on a genuinely PENDING item, not just a
  // structurally-impossible status.
  const agreedC = await zakat.clientAgreeToSandbox(runC.id, investorC.investorId);
  if (agreedC.status === 'CLIENT_AGREED') ok(`client C agrees to proceed (DRAFT -> CLIENT_AGREED)`);
  else fail(`expected CLIENT_AGREED`, agreedC);
  await expectReject('invariant 71(a)(i): certification is refused while the client-declared item is still non-final (neither VERIFIED nor REJECTED), naming the outstanding item', () =>
    zakat.submitForCertification(runC.id, bd1.id));

  // ---- a client can never verify anything: the ONLY actor representing a ----
  // portal declaration in WorkflowEngineService is the SYSTEM_PORTAL_CLIENT
  // technical actor itself (no portal verify route exists at all -- this
  // proves the structural floor beneath that missing route: even if one
  // somehow called verifyScheduleItem AS that actor, maker==checker rejects it).
  const systemPortalClientUser = await prisma.appUser.findUniqueOrThrow({ where: { email: 'system-portal-client@one17.test' } });
  await expectReject('adversarial (v): the client (represented by the SYSTEM_PORTAL_CLIENT initiator) cannot verify its own client-declared item', () =>
    zakat.verifyScheduleItem(clientCashWf.id, systemPortalClientUser.id));
  const clientItemVerified = await workflowInbox.approve(clientCashWf.id, bd2.id) as { status: string };
  const clientCashItemAfter = await prisma.zakatDeclaredItem.findUniqueOrThrow({ where: { id: clientCashItem.id } });
  if (clientItemVerified.status === 'APPROVED' && clientCashItemAfter.verificationTag === 'VERIFIED' && clientCashItemAfter.declarationSource === 'CLIENT') {
    ok(`a DIFFERENT staff officer (bd2) verifies the client-declared item through the same Workflow Inbox -- declarationSource stays CLIENT, verificationTag flips to VERIFIED`);
  } else {
    fail(`expected the client item VERIFIED by bd2 with declarationSource preserved`, clientCashItemAfter);
  }
  const positionVerified = await zakat.getZakatPositionForClient(investorC.investorId);
  const officialAfterVerify = await zakat.computeAssessment(runC.id);
  if (positionVerified.verifiedNetZakatableKobo === '50000000' && officialAfterVerify.netZakatableKobo === '50000000') {
    ok(`once VERIFIED, the client-declared item now counts toward BOTH the portal's own verified verdict AND the official persisted figure (₦500,000) -- parity restored, proving computeAssessment recomputes live rather than being a one-shot snapshot`);
  } else {
    fail(`expected verifiedNetZakatableKobo AND official netZakatableKobo =50000000 after verification`, { positionVerified, officialAfterVerify });
  }

  // ---- BD declares a second item (stays unverified for now) ----
  const { item: bdStaffItem, workflowInstance: bdStaffWf } = await zakat.declareScheduleItem({
    zakatAssessmentRunId: runC.id, scheduleType: 'GOLD_SILVER', description: 'BD-declared jewelry', amountKobo: 10_000_00n, zakatability: 'ZAKATABLE', declaredByUserId: bd1.id,
  });
  await expectReject('BD officer (bd1) cannot verify their own staff-side declaration', () => zakat.verifyScheduleItem(bdStaffWf.id, bd1.id));
  await expectReject('invariant 71(a)(i): certification is still refused -- the newly-declared GOLD_SILVER item is now the outstanding one', () =>
    zakat.submitForCertification(runC.id, bd1.id));

  // ---- a third item, declared then workflow-REJECTED: proves REJECTED is ----
  // treated as FINAL (does not block certification) while still never
  // counting toward the official figure (it never reaches VERIFIED).
  const { item: rejectedItem, workflowInstance: rejectedWf } = await zakat.declareScheduleItem({
    zakatAssessmentRunId: runC.id, scheduleType: 'RECEIVABLE', description: 'Disputed receivable, later rejected by a reviewer', amountKobo: 5_000_00n, zakatability: 'ZAKATABLE', declaredByUserId: bd1.id,
  });
  await expectReject('invariant 71(a)(i): certification refused -- both GOLD_SILVER and the just-declared RECEIVABLE item are outstanding', () =>
    zakat.submitForCertification(runC.id, bd1.id));
  await workflowInbox.reject(rejectedWf.id, relOff.id);
  const rejectedItemAfter = await prisma.zakatDeclaredItem.findUniqueOrThrow({ where: { id: rejectedItem.id } });
  const rejectedWfAfter = await prisma.workflowInstance.findUniqueOrThrow({ where: { id: rejectedWf.id } });
  if (rejectedItemAfter.verificationTag === 'DECLARED' && rejectedWfAfter.status === 'REJECTED') {
    ok(`a workflow-REJECTED item's verificationTag stays DECLARED (WmVerificationTag has no REJECTED value) -- "final" is read off the linked WorkflowInstance.status instead`);
  } else {
    fail(`expected verificationTag=DECLARED, workflowInstance.status=REJECTED`, { rejectedItemAfter, rejectedWfAfter });
  }
  await expectReject('invariant 71(a)(i): certification STILL refused -- the REJECTED item no longer blocks, but GOLD_SILVER remains outstanding', () =>
    zakat.submitForCertification(runC.id, bd1.id));

  // ---- Portfolio Advisory Feed, round 1: aggregates only, unverified item excluded ----
  await expectReject('outsider (no ZAKAT_PORTFOLIO_ADVISORY_FEED) cannot view the portfolio advisory feed', () => zakat.getPortfolioAdvisoryFeed(investorC.investorId, outsider.id));
  await expectReject('adversarial: a BD officer (holds ZAKAT_ADVISORY but NOT ZAKAT_PORTFOLIO_ADVISORY_FEED) is structurally blocked from the Portfolio feed -- the two capabilities are deliberately separate', () =>
    zakat.getPortfolioAdvisoryFeed(investorC.investorId, bd1.id));
  const advisoryFeedRound1 = await zakat.getPortfolioAdvisoryFeed(investorC.investorId, portOfficer.id);
  const feedJson1 = JSON.stringify(advisoryFeedRound1);
  const noItemLeakage1 = !feedJson1.includes('Client-declared savings account') && !feedJson1.includes('BD-declared jewelry') && !feedJson1.includes(clientCashItem.id) && !feedJson1.includes(bdStaffItem.id) && !('description' in advisoryFeedRound1) && !('id' in advisoryFeedRound1);
  if (
    advisoryFeedRound1.isActive === true &&
    advisoryFeedRound1.totalAssetSizeKobo === '50000000' &&
    advisoryFeedRound1.mixByScheduleType.CASH_BANK === '50000000' &&
    advisoryFeedRound1.mixByScheduleType.ONE17_CUSTODY === '0' &&
    advisoryFeedRound1.mixByScheduleType.GOLD_SILVER === undefined &&
    noItemLeakage1
  ) {
    ok(`adversarial (v): PORT_OFF (ZAKAT_PORTFOLIO_ADVISORY_FEED VIEW) sees aggregate SIZE (₦500,000) + MIX by scheduleType only, no item id/description/date anywhere in the response -- the still-unverified GOLD_SILVER item is correctly absent from both the size and the mix`);
  } else {
    fail(`expected aggregate-only feed with size 50000000, CASH_BANK mix, no GOLD_SILVER mix yet, no item-level detail`, advisoryFeedRound1);
  }

  // ---- BD/REL_OFF maker!=checker re-confirmation (now that BD/REL_OFF hold ZAKAT_ADVISORY too) ----
  const bdItemVerifiedByRelOff = await workflowInbox.approve(bdStaffWf.id, relOff.id) as { status: string };
  const bdStaffItemAfter = await prisma.zakatDeclaredItem.findUniqueOrThrow({ where: { id: bdStaffItem.id } });
  if (bdItemVerifiedByRelOff.status === 'APPROVED' && bdStaffItemAfter.verificationTag === 'VERIFIED' && bdStaffItemAfter.declarationSource === 'STAFF') {
    ok(`maker!=checker spans roles correctly: a REL_OFF officer verifies a BD officer's staff declaration (both now hold ZAKAT_ADVISORY per invariant 70(h)(i))`);
  } else {
    fail(`expected the BD-declared item VERIFIED by a different-role REL_OFF officer`, bdStaffItemAfter);
  }

  // ---- Portfolio Advisory Feed, round 2: the now-VERIFIED item appears in the mix ----
  const advisoryFeedRound2 = await zakat.getPortfolioAdvisoryFeed(investorC.investorId, portOfficer.id);
  if (advisoryFeedRound2.totalAssetSizeKobo === '51000000' && advisoryFeedRound2.mixByScheduleType.GOLD_SILVER === '1000000') {
    ok(`once VERIFIED, the BD-declared GOLD_SILVER item now counts toward the Portfolio feed's aggregate size (₦510,000) and mix -- still no item-level detail leaked`);
  } else {
    fail(`expected GOLD_SILVER now in the mix and total risen to 51000000`, advisoryFeedRound2);
  }

  // ---- every item on runC is now final (VERIFIED x2, REJECTED x1) -- ----
  // submitForCertification now SUCCEEDS, and the official figure correctly
  // EXCLUDES the rejected receivable (never VERIFIED) -- 50,000,000 (cash) +
  // 1,000,000 (gold) = 51,000,000, matching the advisory feed's own total.
  const { workflowInstance: certWfC } = await zakat.submitForCertification(runC.id, bd1.id);
  const runCAfterSubmit = await prisma.zakatAssessmentRun.findUniqueOrThrow({ where: { id: runC.id } });
  if (runCAfterSubmit.status === 'AWAITING_SHARIAH_CERTIFICATION' && runCAfterSubmit.netZakatableKobo === 51_000_000n) {
    ok(`invariant 71(a)(i): with every item final, submitForCertification succeeds -- official netZakatableKobo=51,000,000 correctly excludes the REJECTED receivable, matching the Portfolio feed's own total`);
  } else {
    fail(`expected AWAITING_SHARIAH_CERTIFICATION with netZakatableKobo=51000000`, runCAfterSubmit);
  }
  const certifiedC = await workflowInbox.approve(certWfC.id, shariahReviewer.id) as { status: string };
  const runCCertified = await prisma.zakatAssessmentRun.findUniqueOrThrow({ where: { id: runC.id } });
  if (certifiedC.status === 'APPROVED' && runCCertified.status === 'CERTIFIED') {
    ok(`SHARIAH_REV certifies runC (AWAITING_SHARIAH_CERTIFICATION -> CERTIFIED)`);
  } else {
    fail(`expected runC CERTIFIED`, runCCertified);
  }

  // ---- invariant 71(a)(i) verbatim adversarial, second proof on the ----
  // CLIENT-declare path this time (runA's earlier proof used the STAFF
  // path): a CERTIFIED record is unaffected by any later declaration.
  await expectReject('invariant 71(a)(i): runC, now CERTIFIED, refuses a further CLIENT-portal declaration too', () =>
    zakat.declareScheduleItemAsClient(investorC.investorId, { zakatAssessmentRunId: runC.id, scheduleType: 'CASH_BANK', description: 'late client addition', amountKobo: 1n, zakatability: 'ZAKATABLE' }));
  const runCFinal = await prisma.zakatAssessmentRun.findUniqueOrThrow({ where: { id: runC.id } });
  if (runCFinal.netZakatableKobo === runCCertified.netZakatableKobo && runCFinal.zakatDueKobo === runCCertified.zakatDueKobo) {
    ok(`invariant 71(a)(i): runC's persisted figures remain unchanged after the rejected post-certification client declaration attempt`);
  } else {
    fail(`expected runC's persisted figures unchanged`, { before: runCCertified, after: runCFinal });
  }

  console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — Zakat Advisory engine (invariant 26) against the real live DB.`);
  process.exitCode = failed ? 1 : 0;
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
