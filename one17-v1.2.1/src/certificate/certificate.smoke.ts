// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/certificate/certificate.smoke.ts
// Invariant 52(b) (CHECK12): investment certificate generation. Proves:
// outsider rejection on propose/approve/reissue, engine-level maker!=checker,
// the QUEUED->ISSUED auto-issuance-on-template-activation path (the
// "booking itself NEVER fails" rule), certificate-number assignment only at
// issuance, portal ownership isolation, reissue re-delivering the SAME
// immutable bytes, and that the rendered PDF actually carries the governed
// disclaimer text (not just that a PDF byte stream exists).
import 'dotenv/config';
import * as zlib from 'zlib';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { LetterheadService } from '../letterhead/letterhead.service';
import { CertificateService } from './certificate.service';
import { HfUnitNavSnapshot, PoolNdPsrSnapshot } from './certificate.types';

const RUN = Date.now();
let failed = false;
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function expectReject(label: string, fn: () => unknown | Promise<unknown>) {
  try { await fn(); fail(`expected rejection: ${label}`); }
  catch (err) { ok(`rejected as expected: ${label} — ${(err as Error).message.split('\n')[0]}`); }
}

// Same hex-decode technique as statement.smoke.ts -- pdf-lib's drawText()
// writes hex-encoded string literals inside FlateDecode-compressed content
// streams, so a naive substring search never sees the actual words.
function extractPdfHexText(bytes: Uint8Array): string {
  const buf = Buffer.from(bytes);
  const raw = buf.toString('latin1');
  const chunks: string[] = [];
  const streamRe = /stream\r?\n/g;
  let match: RegExpExecArray | null;
  while ((match = streamRe.exec(raw))) {
    const start = match.index + match[0].length;
    const end = raw.indexOf('endstream', start);
    if (end === -1) continue;
    let streamBytes = buf.subarray(start, end);
    while (streamBytes.length > 0 && (streamBytes[streamBytes.length - 1] === 0x0a || streamBytes[streamBytes.length - 1] === 0x0d)) {
      streamBytes = streamBytes.subarray(0, streamBytes.length - 1);
    }
    try { chunks.push(zlib.inflateSync(streamBytes).toString('latin1')); } catch { /* not a flate stream -- skip */ }
  }
  return chunks.join('\n');
}
function pdfContainsText(pdfHexText: string, needle: string): boolean {
  return pdfHexText.toUpperCase().includes(Buffer.from(needle, 'latin1').toString('hex').toUpperCase());
}

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const authService = new AuthService(prisma, audit, new MfaService(prisma, audit));
  const rbac = new RbacService(prisma, audit, workflow, authService);
  const letterhead = new LetterheadService(prisma, audit, delegation, workflow);
  const certificates = new CertificateService(prisma, audit, delegation, workflow, letterhead);

  const compliance = await prisma.appUser.create({ data: { email: `cert-compliance-${RUN}@one17.test`, displayName: 'cert-compliance' } });
  await rbac.assignRole({ userId: compliance.id, roleCode: 'COMPLIANCE' });
  const mdCeo = await prisma.appUser.create({ data: { email: `cert-mdceo-${RUN}@one17.test`, displayName: 'cert-mdceo' } });
  await rbac.assignRole({ userId: mdCeo.id, roleCode: 'MD_CEO' });
  const outsider = await prisma.appUser.create({ data: { email: `cert-outsider-${RUN}@one17.test`, displayName: 'cert-outsider' } });

  const investorA = await prisma.investor.create({
    data: {
      investorId: `SMOKE-CERT-INV-A-${RUN}`, fullLegalName: 'Smoke Certificate Investor A', entityType: 'HNWI_INDIVIDUAL',
      nationality: 'NG', taxIdentificationNumber: `TIN-CERT-A-${RUN}`, contactEmail: `cert-inv-a-${RUN}@one17.test`,
      contactPhone: '+2340000000030', registeredAddress: 'Test address', sourceOfFunds: 'Business income',
      onboardedByUserId: compliance.id, kycStatus: 'KYC_COMPLETE', amlStatus: 'CLEARED', fundStatus: 'ACTIVE',
    },
  });
  const investorB = await prisma.investor.create({
    data: {
      investorId: `SMOKE-CERT-INV-B-${RUN}`, fullLegalName: 'Smoke Certificate Investor B', entityType: 'HNWI_INDIVIDUAL',
      nationality: 'NG', taxIdentificationNumber: `TIN-CERT-B-${RUN}`, contactEmail: `cert-inv-b-${RUN}@one17.test`,
      contactPhone: '+2340000000031', registeredAddress: 'Test address', sourceOfFunds: 'Business income',
      onboardedByUserId: compliance.id, kycStatus: 'KYC_COMPLETE', amlStatus: 'CLEARED', fundStatus: 'ACTIVE',
    },
  });

  // ---- Issuance queues when no ACTIVE template exists yet (the "booking
  // itself NEVER fails" rule) ----
  const hfSnapshot: HfUnitNavSnapshot = { unitsAllotted: 12345.6789, navPerUnitAtAllotment: 101.5, allotmentDate: '2026-07-01' };
  const queuedCert = await certificates.issueOrQueueCertificate({
    investorId: investorA.investorId, productClass: 'HF_UNIT_NAV', dataSnapshot: hfSnapshot, triggeredByUserId: compliance.id,
  });
  if (queuedCert.status === 'QUEUED' && queuedCert.certificateNumber === null && queuedCert.pdfBytes === null) {
    ok('issueOrQueueCertificate QUEUES (no certificate number, no PDF yet) when no ACTIVE template exists for the class — never blocks the triggering action');
  } else {
    fail('issueOrQueueCertificate did not queue as expected', queuedCert);
  }

  // ---- Template propose/approve ----
  await expectReject('an outsider cannot propose a certificate template', () =>
    certificates.proposeTemplate({ productClass: 'HF_UNIT_NAV', disclaimerText: 'x', secRuleDisclaimer: 'y', proposedByUserId: outsider.id }));

  const proposed = await certificates.proposeTemplate({
    productClass: 'HF_UNIT_NAV', disclaimerText: 'SMOKE-DISCLAIMER-TEXT', secRuleDisclaimer: 'SMOKE-SEC-RULE-TEXT', proposedByUserId: compliance.id,
  });
  if (proposed.status === 'DRAFT' && proposed.templateKey === 'HF_UNIT_NAV' && proposed.version >= 1) {
    ok(`proposeTemplate creates a DRAFT v${proposed.version} row keyed to the product class (auto-incrementing past the seeded v1 placeholder), opens the single-step workflow`);
  } else {
    fail('proposeTemplate did not create the expected row', proposed);
  }

  await expectReject('an outsider cannot approve a certificate template', () =>
    certificates.approveTemplate({ workflowInstanceId: proposed.workflowInstanceId!, approverUserId: outsider.id }));
  await expectReject('the proposer (Compliance) cannot approve their own template proposal (maker != checker)', () =>
    certificates.approveTemplate({ workflowInstanceId: proposed.workflowInstanceId!, approverUserId: compliance.id }));

  const activated = await certificates.approveTemplate({ workflowInstanceId: proposed.workflowInstanceId!, approverUserId: mdCeo.id });
  if ((activated as any)?.status === 'ACTIVE') ok('MD_CEO approves the certificate template -> ACTIVE');
  else fail('approveTemplate did not activate as expected', activated);

  // ---- Auto-issuance the moment the template activates ----
  const afterActivation = await prisma.certificate.findUniqueOrThrow({ where: { id: queuedCert.id } });
  if (afterActivation.status === 'ISSUED' && afterActivation.certificateNumber?.startsWith('CERT-') && afterActivation.pdfBytes) {
    ok('the previously-QUEUED certificate auto-issued the instant the matching template activated — certificate number assigned only now, not at queue time');
  } else {
    fail('queued certificate did not auto-issue on template activation', afterActivation);
  }

  const pdfText = extractPdfHexText(new Uint8Array(afterActivation.pdfBytes!));
  if (pdfContainsText(pdfText, 'SMOKE-DISCLAIMER-TEXT') && pdfContainsText(pdfText, 'SMOKE-SEC-RULE-TEXT') && pdfContainsText(pdfText, afterActivation.certificateNumber!)) {
    ok('the rendered certificate PDF actually carries the governed template disclaimer wording and its own certificate number, not just an opaque byte stream');
  } else {
    fail('rendered certificate PDF is missing expected governed content', { hasDisclaimer: pdfContainsText(pdfText, 'SMOKE-DISCLAIMER-TEXT') });
  }

  // ---- Immediate issuance once a template IS active ----
  const poolSnapshot: PoolNdPsrSnapshot = { principalKobo: '500000000', tenorLabel: 'Open-ended (per product terms)', investorRatioPct: null, mudaribRatioPct: null, targetReturnPct: null };
  const stillQueuedNoTemplate = await certificates.issueOrQueueCertificate({
    investorId: investorA.investorId, productClass: 'POOL_ND_PSR', dataSnapshot: poolSnapshot, triggeredByUserId: compliance.id,
  });
  if (stillQueuedNoTemplate.status === 'QUEUED') ok('a DIFFERENT product class (POOL_ND_PSR) with no ACTIVE template of its own still queues, even though HF_UNIT_NAV now has one — templates are per-class, not global');
  else fail('POOL_ND_PSR certificate should still be QUEUED (no ACTIVE template for that class)', stillQueuedNoTemplate);

  const secondHfCert = await certificates.issueOrQueueCertificate({
    investorId: investorA.investorId, productClass: 'HF_UNIT_NAV', dataSnapshot: { ...hfSnapshot, unitsAllotted: 500 }, triggeredByUserId: compliance.id,
  });
  if (secondHfCert.status === 'ISSUED' && secondHfCert.certificateNumber !== afterActivation.certificateNumber) {
    ok('a new HF_UNIT_NAV certificate issues IMMEDIATELY (no queueing) now that its template is ACTIVE, with its own distinct certificate number');
  } else {
    fail('second HF certificate did not issue immediately as expected', secondHfCert);
  }

  // ---- Portal ownership isolation ----
  await expectReject('investor B cannot download investor A\'s certificate by guessing the id', () =>
    certificates.getCertificatePdfForInvestor(afterActivation.id, investorB.investorId));
  const ownPdf = await certificates.getCertificatePdfForInvestor(afterActivation.id, investorA.investorId);
  if (ownPdf.length > 0) ok('investor A can download their own certificate');
  else fail('investor A could not download their own certificate', ownPdf);

  // ---- Reissue ----
  await expectReject('an outsider cannot reissue a certificate', () => certificates.reissueCertificate(afterActivation.id, outsider.id));
  await expectReject('a QUEUED certificate has nothing to reissue yet', () => certificates.reissueCertificate(stillQueuedNoTemplate.id, compliance.id));
  const reissued = await certificates.reissueCertificate(afterActivation.id, compliance.id);
  if (reissued.certificateNumber === afterActivation.certificateNumber && Buffer.from(reissued.pdfBytes!).equals(Buffer.from(afterActivation.pdfBytes!))) {
    ok('reissue re-delivers the EXACT original immutable bytes and certificate number — never regenerates content');
  } else {
    fail('reissue did not preserve immutability as expected', { reissuedNumber: reissued.certificateNumber, originalNumber: afterActivation.certificateNumber });
  }

  // ---- Version supersession ----
  const secondTemplateProposal = await certificates.proposeTemplate({
    productClass: 'HF_UNIT_NAV', disclaimerText: 'SMOKE-DISCLAIMER-V2', secRuleDisclaimer: 'SMOKE-SEC-RULE-V2', proposedByUserId: compliance.id,
  });
  const secondTemplateActivated = await certificates.approveTemplate({ workflowInstanceId: secondTemplateProposal.workflowInstanceId!, approverUserId: mdCeo.id });
  const firstTemplateAfterSupersede = await prisma.documentTemplate.findUniqueOrThrow({ where: { id: proposed.id } });
  if ((secondTemplateActivated as any)?.status === 'ACTIVE' && firstTemplateAfterSupersede.status === 'SUPERSEDED') {
    ok('activating a new certificate template version supersedes the prior ACTIVE version for that SAME product class');
  } else {
    fail('template version supersession did not behave as expected', { secondTemplateActivated, firstTemplateAfterSupersede });
  }
  if (afterActivation.templateId === proposed.id) {
    const reFetched = await prisma.certificate.findUniqueOrThrow({ where: { id: afterActivation.id } });
    if (reFetched.templateId === proposed.id) ok('an already-ISSUED certificate keeps pointing at the template version it was ACTUALLY issued under, even after a newer version supersedes it — issued documents are immutable, never retroactively re-templated');
    else fail('an issued certificate\'s templateId should never change after the fact', reFetched);
  }

  // Cleanup.
  const certIds = [queuedCert.id, stillQueuedNoTemplate.id, secondHfCert.id];
  await prisma.certificate.deleteMany({ where: { id: { in: certIds } } });
  const templateWorkflowIds = [proposed.workflowInstanceId!, secondTemplateProposal.workflowInstanceId!];
  await prisma.workflowStepApproval.deleteMany({ where: { workflowInstanceId: { in: templateWorkflowIds } } });
  await prisma.workflowInstance.deleteMany({ where: { id: { in: templateWorkflowIds } } });
  await prisma.documentTemplate.deleteMany({ where: { id: { in: [proposed.id, secondTemplateProposal.id] } } });
  await prisma.clientCommunication.deleteMany({ where: { investorId: { in: [investorA.investorId, investorB.investorId] } } });
  await prisma.documentRegisterEntry.deleteMany({ where: { entityType: 'certificate', entityId: { in: certIds } } });
  await prisma.investor.deleteMany({ where: { investorId: { in: [investorA.investorId, investorB.investorId] } } });
  const userIds = [compliance.id, mdCeo.id, outsider.id];
  await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
  await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });

  await prisma.$disconnect();

  if (failed) {
    console.error('\nSMOKE FAILED — see FAIL lines above.');
    process.exitCode = 1;
  } else {
    console.log('\nSMOKE OK — investment certificate generation (invariant 52b) against the real live DB.');
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
