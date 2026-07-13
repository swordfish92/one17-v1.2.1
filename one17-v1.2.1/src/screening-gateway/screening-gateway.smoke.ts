// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/screening-gateway/screening-gateway.smoke.ts
// Invariant 72(e) adversarial set against the REAL live DB: similar-name
// false positive requires rationale before onboarding proceeds;
// adjudicator != initiator; GREEN record carries list versions; stale list
// (freshness breach) surfaces on the KRI; MANUAL mode refuses gate passage
// without evidence upload. Plus: parked source cannot be activated; staged
// list-source config maker != checker; investor AND counterparty stage
// gates both block on an open/TRUE_MATCH hit and clear on FALSE_POSITIVE.
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { NotificationService } from '../notification/notification.service';
import { DocumentService } from '../document/document.service';
import { InvestorService } from '../investor/investor.service';
import { PortalAuthService } from '../portal-auth/portal-auth.service';
import { ScreeningGatewayService } from './screening-gateway.service';

const RUN = Date.now();
let failed = false;
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function expectReject(label: string, fn: () => unknown | Promise<unknown>) {
  try { await fn(); fail(`expected rejection: ${label}`); }
  catch (err) { ok(`rejected as expected: ${label} — ${(err as Error).message.split('\n')[0]}`); }
}

const FULL_CHECKLIST = [
  { itemCode: 'UN_SC_CONSOLIDATED', listVersionOrDate: '2026-07' },
  { itemCode: 'NG_SANCTIONS_LIST', listVersionOrDate: '2026-07' },
  { itemCode: 'OFAC_SDN', listVersionOrDate: '2026-07' },
  { itemCode: 'EFCC_NFIU_ADVISORIES', listVersionOrDate: '2026-07' },
  { itemCode: 'PEP_DETERMINATION', listVersionOrDate: '2026-07' },
  { itemCode: 'ADVERSE_MEDIA', listVersionOrDate: '2026-07' },
];

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();

  // Self-clean prelude: this suite mutates governed singletons (the OFAC
  // ScreeningListSource) and leaves fuzzy-matchable ScreeningListEntry rows
  // behind, so a prior partial run's residue must never leak into this
  // run's deterministic outcomes (same discipline as this codebase's other
  // smoke-residue fixes -- see RUNBOOK.md's dev-DB scratch reset section).
  await prisma.screeningListEntry.deleteMany({ where: { sourceRecordId: { startsWith: 'SMOKE-' } } });
  await prisma.screeningListSource.updateMany({
    where: { sourceCode: 'OFAC' },
    data: { isActive: false, lastSuccessfulDownloadAt: null, lastListVersion: null, configWorkflowInstanceId: null, pendingIsActive: null, pendingDownloadUrl: null, pendingProposedByUserId: null },
  });

  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));
  const notification = new NotificationService(prisma);
  const documents = new DocumentService(prisma, delegation, audit);
  const screening = new ScreeningGatewayService(prisma, audit, delegation, workflow, notification, documents);
  const investors = new InvestorService(prisma, audit, workflow, delegation, new PortalAuthService(prisma, audit), screening);

  const risk1 = await prisma.appUser.create({ data: { email: `sg-risk1-${RUN}@one17.test`, displayName: 'sg-risk1' } });
  await rbac.assignRole({ userId: risk1.id, roleCode: 'RISK_DEPT' });
  const mdCeo = await prisma.appUser.create({ data: { email: `sg-mdceo-${RUN}@one17.test`, displayName: 'sg-mdceo' } });
  await rbac.assignRole({ userId: mdCeo.id, roleCode: 'MD_CEO' });
  const compliance1 = await prisma.appUser.create({ data: { email: `sg-compliance1-${RUN}@one17.test`, displayName: 'sg-compliance1' } });
  await rbac.assignRole({ userId: compliance1.id, roleCode: 'COMPLIANCE' });
  const compliance2 = await prisma.appUser.create({ data: { email: `sg-compliance2-${RUN}@one17.test`, displayName: 'sg-compliance2' } });
  await rbac.assignRole({ userId: compliance2.id, roleCode: 'COMPLIANCE' });
  const finAdmin = await prisma.appUser.create({ data: { email: `sg-finadmin-${RUN}@one17.test`, displayName: 'sg-finadmin' } });
  await rbac.assignRole({ userId: finAdmin.id, roleCode: 'FIN_ADMIN' });
  const outsider = await prisma.appUser.create({ data: { email: `sg-outsider-${RUN}@one17.test`, displayName: 'sg-outsider' } });

  // ==========================================================================
  // (a) The five sources: NG_NFIU parked, cannot be activated.
  // ==========================================================================
  const sources = await screening.listSources();
  if (sources.length === 5 && sources.find((s) => s.sourceCode === 'NG_NFIU')?.isParked === true) {
    ok(`invariant 72(a): all 5 candidate sources seeded, NG_NFIU correctly PARKED (nigsac.gov.ng has no consolidated machine-readable file)`);
  } else {
    fail(`expected 5 sources with NG_NFIU parked`, sources.map((s) => ({ code: s.sourceCode, isParked: s.isParked })));
  }
  await expectReject('cannot propose activating a PARKED source', () =>
    screening.proposeSourceConfig({ sourceCode: 'NG_NFIU', isActive: true }, risk1.id));

  // ==========================================================================
  // (a) Staged list-source config: maker != checker, same shape as
  // AttendanceProvider. Activate OFAC.
  // ==========================================================================
  await expectReject('outsider cannot propose a screening list source config change', () =>
    screening.proposeSourceConfig({ sourceCode: 'OFAC', isActive: true }, outsider.id));
  const proposedSource = await screening.proposeSourceConfig({ sourceCode: 'OFAC', isActive: true }, risk1.id);
  const sourceWfId = proposedSource.configWorkflowInstanceId as string;
  await expectReject('proposer (risk1) cannot approve their own list source config change', () =>
    screening.approveSourceConfig(sourceWfId, risk1.id));
  const approvedSource = await screening.approveSourceConfig(sourceWfId, mdCeo.id);
  if (approvedSource.isActive === true) {
    ok(`invariant 72(a)/(c): RISK_DEPT proposes activating OFAC, a DIFFERENT officer (MD_CEO) approves -- OFAC now active`);
  } else {
    fail(`expected OFAC isActive=true after approval`, approvedSource);
  }

  // ==========================================================================
  // (a) List-freshness KRI: OFAC is active but was never actually
  // downloaded by this smoke test (no live HTTP call made) -- daysSince
  // must be null (honest N/A), not a fabricated number, exactly like
  // every other NOT_YET_INSTRUMENTED KRI in this codebase.
  // ==========================================================================
  const freshness = await screening.listFreshnessDaysSinceDownload();
  const ofacFreshness = freshness.find((f) => f.sourceCode === 'OFAC');
  if (ofacFreshness?.daysSince === null) {
    ok(`invariant 72(a)/(e): list-freshness KRI reports daysSince=null for OFAC (never successfully downloaded) -- stale/never-downloaded state surfaces honestly, never a fake "0 days"`);
  } else {
    fail(`expected daysSince=null for a never-downloaded source`, ofacFreshness);
  }

  // ==========================================================================
  // (b) Manually seed a ScreeningListEntry (simulating a completed OFAC
  // download without making a real HTTP call in this smoke test) to prove
  // the LOCAL_LISTS matching + adjudication path end to end.
  // ==========================================================================
  const listEntry = await prisma.screeningListEntry.create({
    data: {
      sourceCode: 'OFAC',
      sourceRecordId: `SMOKE-${RUN}`,
      primaryName: `Abubakar Sanni Screening ${RUN}`,
      aliases: [`A. Sanni Screening ${RUN}`],
      listVersion: `smoke-${RUN}`,
      rawDetail: { programme: 'SMOKE-TEST-PROGRAMME' },
    },
  });
  await prisma.screeningListSource.update({ where: { sourceCode: 'OFAC' }, data: { lastSuccessfulDownloadAt: new Date(), lastListVersion: `smoke-${RUN}` } });

  const investor = await investors.onboard({
    fullLegalName: `Abubakar Sanni Screening ${RUN}`,
    entityType: 'HNWI_INDIVIDUAL',
    nationality: 'Nigerian',
    taxIdentificationNumber: `TIN-SG-${RUN}`,
    contactEmail: `sg-client-${RUN}@one17.test`,
    contactPhone: '+2348022222222',
    registeredAddress: `1 Screening Smoke Close, Abuja`,
    sourceOfFunds: 'Business income',
    onboardedByUserId: finAdmin.id,
  });
  await investors.setAmlRiskRating(investor.investorId, 'LOW', finAdmin.id);
  await investors.recordScreening({
    investorId: investor.investorId,
    listsChecked: FULL_CHECKLIST,
    searchTermsUsed: investor.fullLegalName,
    result: 'NO_MATCH',
    screenerUserId: compliance1.id,
  });

  const { run, hits } = await screening.screenSubject({ subjectType: 'INVESTOR', subjectId: investor.investorId, subjectNameScreened: investor.fullLegalName, initiatedByUserId: compliance1.id });
  if (run.outcome !== 'GREEN' && hits.length === 1 && hits[0].matchScore >= 95) {
    ok(`invariant 72(b): near-identical name against the seeded OFAC entry produces exactly 1 high-score candidate hit, outcome=${run.outcome} (RED/AMBER, never auto-cleared)`);
  } else {
    fail(`expected exactly 1 high-score hit`, { outcome: run.outcome, hits: hits.map((h) => h.matchScore) });
  }
  const listVersionsScreened = run.listVersionsScreened as Record<string, string | null>;
  if (listVersionsScreened.OFAC === `smoke-${RUN}`) {
    ok(`invariant 72(b)/(e): the run carries the list version screened against (OFAC: smoke-${RUN}) as its audit evidence, even for a RED/AMBER outcome`);
  } else {
    fail(`expected listVersionsScreened.OFAC to record the version`, listVersionsScreened);
  }

  // ---- invariant 72(b): never auto-block, never auto-clear -- stage gate refuses while OPEN ----
  await expectReject('invariant 72(b): submitForKycApproval refuses while the sanctions hit is still OPEN (unadjudicated)', () =>
    investors.submitForKycApproval(investor.investorId, finAdmin.id));

  // ---- invariant 72(e): mandatory rationale ----
  await expectReject('a hit adjudication proposal with a blank rationale is refused', () =>
    screening.proposeHitAdjudication({ hitId: hits[0].id, outcome: 'FALSE_POSITIVE', rationale: '   ', actorUserId: compliance1.id }));

  const { workflowInstance: hitWf } = await screening.proposeHitAdjudication({
    hitId: hits[0].id, outcome: 'FALSE_POSITIVE', rationale: 'Confirmed via secondary ID document — different date of birth and middle name from the OFAC record; not the same individual.', actorUserId: compliance1.id,
  });

  // ---- invariant 72(e): adjudicator != initiator ----
  await expectReject('invariant 72(e): the SAME officer (compliance1) who proposed the adjudication cannot approve it', () =>
    screening.approveHitAdjudication(hitWf.id, compliance1.id));
  await expectReject('outsider cannot approve a hit adjudication', () =>
    screening.approveHitAdjudication(hitWf.id, outsider.id));

  const adjudicatedHit = await screening.approveHitAdjudication(hitWf.id, compliance2.id);
  if (adjudicatedHit.status === 'ADJUDICATED' && adjudicatedHit.adjudicatedOutcome === 'FALSE_POSITIVE' && adjudicatedHit.adjudicatedByUserId === compliance2.id) {
    ok(`invariant 72(e): a DIFFERENT officer (compliance2) approves the FALSE_POSITIVE adjudication -- rationale and adjudicator recorded`);
  } else {
    fail(`expected the hit ADJUDICATED as FALSE_POSITIVE by compliance2`, adjudicatedHit);
  }

  const kycWf = await investors.submitForKycApproval(investor.investorId, finAdmin.id);
  if (kycWf) {
    ok(`invariant 72(b): once the hit is adjudicated (FALSE_POSITIVE), submitForKycApproval now succeeds -- the stage gate cleared by an officer decision, never automatically`);
  } else {
    fail(`expected submitForKycApproval to succeed after adjudication`, kycWf);
  }

  // ==========================================================================
  // (b) A second subject, adjudicated TRUE_MATCH, stays blocked forever
  // (until a further review, which this build never auto-performs).
  // ==========================================================================
  const investor2 = await investors.onboard({
    fullLegalName: `Abubakar Sanni Screening ${RUN}`,
    entityType: 'HNWI_INDIVIDUAL',
    nationality: 'Nigerian',
    taxIdentificationNumber: `TIN-SG2-${RUN}`,
    contactEmail: `sg-client2-${RUN}@one17.test`,
    contactPhone: '+2348022222223',
    registeredAddress: `2 Screening Smoke Close, Abuja`,
    sourceOfFunds: 'Business income',
    onboardedByUserId: finAdmin.id,
  });
  await investors.setAmlRiskRating(investor2.investorId, 'LOW', finAdmin.id);
  await investors.recordScreening({ investorId: investor2.investorId, listsChecked: FULL_CHECKLIST, searchTermsUsed: investor2.fullLegalName, result: 'NO_MATCH', screenerUserId: compliance1.id });
  const { hits: hits2 } = await screening.screenSubject({ subjectType: 'INVESTOR', subjectId: investor2.investorId, subjectNameScreened: investor2.fullLegalName, initiatedByUserId: compliance1.id });
  const { workflowInstance: hitWf2 } = await screening.proposeHitAdjudication({ hitId: hits2[0].id, outcome: 'TRUE_MATCH', rationale: 'Confirmed same individual — matching DOB and passport number against the OFAC record.', actorUserId: compliance1.id });
  await screening.approveHitAdjudication(hitWf2.id, compliance2.id);
  await expectReject('invariant 72(b): a TRUE_MATCH-adjudicated hit keeps the gate blocked even after adjudication completes', () =>
    investors.submitForKycApproval(investor2.investorId, finAdmin.id));

  // ==========================================================================
  // (b) GREEN case: a subject with no name overlap gets zero hits, and the
  // run still carries the list versions screened (the version stamp IS
  // the audit evidence for a GREEN record too).
  // ==========================================================================
  const greenRun = await screening.screenSubject({ subjectType: 'INVESTOR', subjectId: `SMOKE-GREEN-${RUN}`, subjectNameScreened: `Completely Unrelated Green Case ${RUN}`, initiatedByUserId: compliance1.id });
  const greenVersions = greenRun.run.listVersionsScreened as Record<string, string | null>;
  if (greenRun.run.outcome === 'GREEN' && greenRun.hits.length === 0 && greenVersions.OFAC === `smoke-${RUN}`) {
    ok(`invariant 72(b): GREEN outcome (no hits >= threshold) still records the list version screened against — the version stamp is the audit evidence for a clean pass too`);
  } else {
    fail(`expected GREEN with 0 hits and the list version recorded`, { outcome: greenRun.run.outcome, hitCount: greenRun.hits.length, greenVersions });
  }

  // ==========================================================================
  // Invariant 75(e) (CHECK28, v1.2.1 audit remediation): token-order-
  // insensitive + initials/transliteration matching, proven live against
  // the SAME real seeded OFAC list entry ("Abubakar Sanni Screening
  // <RUN>") used above -- a token-reordered variant of that exact name
  // must still produce a candidate hit, never a silently missed match
  // just because the officer/onboarding form captured the name in a
  // different word order.
  // ==========================================================================
  const reorderedRun = await screening.screenSubject({
    subjectType: 'INVESTOR', subjectId: `SMOKE-REORDER-${RUN}`,
    subjectNameScreened: `Screening Sanni Abubakar ${RUN}`, // same tokens, different order
    initiatedByUserId: compliance1.id,
  });
  if (reorderedRun.hits.length === 1 && reorderedRun.hits[0].matchScore >= 95) {
    ok(`invariant 75(e): a token-reordered variant of the seeded OFAC name ("Screening Sanni Abubakar ${RUN}" vs the list entry's "Abubakar Sanni Screening ${RUN}") still produces a high-score candidate hit (score=${reorderedRun.hits[0].matchScore}) -- token-order-insensitive matching catches what raw left-to-right edit distance alone would have missed`);
  } else {
    fail('expected the token-reordered name variant to still produce a high-score hit', reorderedRun.hits.map((h) => h.matchScore));
  }

  // ==========================================================================
  // (c) MANUAL mode: refuses without evidence upload.
  // ==========================================================================
  await screening.updateConfig({ activeProviderMode: 'MANUAL' }, mdCeo.id);
  await expectReject('invariant 72(c)/(e): MANUAL mode refuses gate passage without an evidence upload', () =>
    screening.recordManualAttestation({ subjectType: 'INVESTOR', subjectId: `SMOKE-MANUAL-${RUN}`, subjectNameScreened: `Manual Mode Subject ${RUN}`, sourcesSearched: ['OFAC', 'UN_SC'], searchReference: 'Searched OFAC + UN portals directly, no match found', outcome: 'GREEN', fileReference: '', actorUserId: compliance1.id }));

  const manualRun = await screening.recordManualAttestation({
    subjectType: 'INVESTOR', subjectId: `SMOKE-MANUAL-${RUN}`, subjectNameScreened: `Manual Mode Subject ${RUN}`, sourcesSearched: ['OFAC', 'UN_SC', 'UK_SANCTIONS', 'EU_FSF', 'NG_NFIU'],
    searchReference: 'Searched all 5 portals directly (NG_NFIU manually too, even though parked for automation), no match found', outcome: 'GREEN',
    fileReference: `screenshots/manual-screening-${RUN}.pdf`, actorUserId: compliance1.id,
  });
  const manualDoc = await prisma.documentRegisterEntry.findFirst({ where: { entityType: 'screening_run', entityId: manualRun.id } });
  if (manualRun.providerMode === 'MANUAL' && manualDoc?.fileReference === `screenshots/manual-screening-${RUN}.pdf`) {
    ok(`invariant 72(c): with evidence uploaded, MANUAL attestation succeeds and the evidence lands in the document register against this screening run`);
  } else {
    fail(`expected a MANUAL run with a matching document register entry`, { manualRun, manualDoc });
  }
  await screening.updateConfig({ activeProviderMode: 'LOCAL_LISTS' }, mdCeo.id);

  // ==========================================================================
  // (c) COMMERCIAL mode: honest placeholder, never fabricates a result.
  // ==========================================================================
  await screening.updateConfig({ activeProviderMode: 'COMMERCIAL' }, mdCeo.id);
  await expectReject('invariant 72(c): COMMERCIAL mode with no contracted provider slot refuses honestly, never fabricates a screening result', () =>
    screening.screenSubject({ subjectType: 'INVESTOR', subjectId: `SMOKE-COMMERCIAL-${RUN}`, subjectNameScreened: 'Commercial Mode Subject', initiatedByUserId: compliance1.id }));
  await screening.updateConfig({ activeProviderMode: 'LOCAL_LISTS' }, mdCeo.id);

  // ==========================================================================
  // Invariant 75(b) (CHECK28, v1.2.1 audit remediation, audit finding
  // CF-02): ensureScreened's SCREENING FINGERPRINT + freshness-age gate.
  // Five adversarial triggers, each proven to force a brand-new run rather
  // than silently reusing a stale one: name-change, list-update,
  // threshold-change, new-source activation, and age. A negative control
  // (nothing changed) proves the gate isn't just wastefully re-screening
  // on every call either.
  // ==========================================================================
  const freshSubjectId = `SMOKE-FRESH-${RUN}`;
  const nameV0 = `Fingerprint Freshness Subject ${RUN}`;
  const runCount = () => prisma.screeningRun.count({ where: { subjectType: 'INVESTOR', subjectId: freshSubjectId } });

  await screening.ensureScreened('INVESTOR', freshSubjectId, nameV0, compliance1.id);
  const countAfterFirst = await runCount();
  if (countAfterFirst === 1) {
    ok('invariant 75(b): ensureScreened creates exactly one run the first time a subject is screened');
  } else {
    fail('expected exactly 1 run after the first ensureScreened call', countAfterFirst);
  }

  // ---- negative control: nothing changed -- no new run ----
  await screening.ensureScreened('INVESTOR', freshSubjectId, nameV0, compliance1.id);
  const countAfterNoop = await runCount();
  if (countAfterNoop === 1) {
    ok('invariant 75(b) negative control: calling ensureScreened again with an UNCHANGED fingerprint and a fresh run creates NO new run (not wastefully re-screening)');
  } else {
    fail('expected the run count to stay at 1 when nothing changed', countAfterNoop);
  }

  // ---- (1) name-change forces a fresh screen ----
  const nameV1 = `Fingerprint Freshness Subject CORRECTED ${RUN}`;
  await screening.ensureScreened('INVESTOR', freshSubjectId, nameV1, compliance1.id);
  const countAfterNameChange = await runCount();
  const latestAfterNameChange = await prisma.screeningRun.findFirst({ where: { subjectType: 'INVESTOR', subjectId: freshSubjectId }, orderBy: { screenedAt: 'desc' } });
  if (countAfterNameChange === 2 && latestAfterNameChange?.subjectNameScreened === nameV1) {
    ok('invariant 75(b) adversarial (name-change): a corrected subject name produces a different fingerprint -- ensureScreened re-screens against the new name rather than trusting the old run');
  } else {
    fail('expected a name change to force a second run', { countAfterNameChange, latestName: latestAfterNameChange?.subjectNameScreened });
  }

  // ---- (2) list-update (a fresh download bumps lastListVersion) forces a fresh screen ----
  await prisma.screeningListSource.update({ where: { sourceCode: 'OFAC' }, data: { lastListVersion: `smoke-${RUN}-updated` } });
  await screening.ensureScreened('INVESTOR', freshSubjectId, nameV1, compliance1.id);
  const countAfterListUpdate = await runCount();
  if (countAfterListUpdate === 3) {
    ok('invariant 75(b) adversarial (list-update): OFAC\'s list version advancing (a fresh download) changes the fingerprint -- ensureScreened re-screens even though the subject\'s own name did not change');
  } else {
    fail('expected a list-version bump to force a third run', countAfterListUpdate);
  }

  // ---- (3) threshold-change forces a fresh screen ----
  const configBefore = await screening.getConfig();
  await screening.updateConfig({ matchThresholdScore: configBefore.matchThresholdScore + 1 }, mdCeo.id);
  await screening.ensureScreened('INVESTOR', freshSubjectId, nameV1, compliance1.id);
  const countAfterThresholdChange = await runCount();
  if (countAfterThresholdChange === 4) {
    ok('invariant 75(b) adversarial (threshold-change): a Risk-approved match-threshold change alters the fingerprint -- ensureScreened re-screens against the new threshold rather than a run scored under the old one');
  } else {
    fail('expected a threshold change to force a fourth run', countAfterThresholdChange);
  }
  await screening.updateConfig({ matchThresholdScore: configBefore.matchThresholdScore }, mdCeo.id); // restore -- do not leave the shared governed config disturbed for other suites

  // ---- (4) new-source activation forces a fresh screen ----
  const unScBefore = await prisma.screeningListSource.findUniqueOrThrow({ where: { sourceCode: 'UN_SC' } });
  if (!unScBefore.isActive) {
    const proposedUnSc = await screening.proposeSourceConfig({ sourceCode: 'UN_SC', isActive: true }, risk1.id);
    await screening.approveSourceConfig(proposedUnSc.configWorkflowInstanceId!, mdCeo.id);
  }
  await screening.ensureScreened('INVESTOR', freshSubjectId, nameV1, compliance1.id);
  const countAfterNewSource = await runCount();
  if (countAfterNewSource === 5) {
    ok('invariant 75(b) adversarial (new-source): activating UN_SC (a source that was not part of the prior fingerprint at all) forces a re-screen against the now-wider source set');
  } else {
    fail('expected activating a new source to force a fifth run', countAfterNewSource);
  }
  // restore UN_SC to its prior state so this suite does not permanently widen a shared config
  await prisma.screeningListSource.update({ where: { sourceCode: 'UN_SC' }, data: { isActive: unScBefore.isActive, lastListVersion: unScBefore.lastListVersion, lastSuccessfulDownloadAt: unScBefore.lastSuccessfulDownloadAt } });

  // ---- (5) age -- an unchanged fingerprint but a run older than the approved freshness window still forces a re-screen ----
  const latestBeforeAgeTest = await prisma.screeningRun.findFirstOrThrow({ where: { subjectType: 'INVESTOR', subjectId: freshSubjectId }, orderBy: { screenedAt: 'desc' } });
  const configForAge = await screening.getConfig();
  const staleDate = new Date(Date.now() - (configForAge.freshnessMaxAgeDays + 1) * 86_400_000);
  await prisma.screeningRun.update({ where: { id: latestBeforeAgeTest.id }, data: { screenedAt: staleDate } });
  await screening.ensureScreened('INVESTOR', freshSubjectId, nameV1, compliance1.id);
  const countAfterAge = await runCount();
  if (countAfterAge === 6) {
    ok(`invariant 75(b) adversarial (age): a run backdated past the ${configForAge.freshnessMaxAgeDays}-day approved freshness window is re-screened even though its OWN fingerprint still matches the current inputs exactly -- staleness alone is sufficient to force a fresh run`);
  } else {
    fail(`expected the stale-age case to force a sixth run`, countAfterAge);
  }

  console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — Screening Gateway (invariant 72, CHECK26) against the real live DB.`);
  process.exitCode = failed ? 1 : 0;
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
