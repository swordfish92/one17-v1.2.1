// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/letter/letter.smoke.ts
// Invariant 52(c) (CHECK12): letter/correspondence engine. Proves: outsider
// rejection on propose/approve/generate/approve-issuance, engine-level
// maker!=checker on BOTH the template-version approval AND the per-letter
// issuance approval (a genuinely different gate from certificates), refusal
// (not queueing) when no ACTIVE template exists for a letter type, the
// merge-field engine actually substituting real DB values (and flagging a
// missing one visibly), reject-path leaves the letter REJECTED with no PDF,
// portal ownership isolation, and that the rendered PDF carries the
// merge-filled body text.
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
import { LetterService } from './letter.service';

const RUN = Date.now();
let failed = false;
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function expectReject(label: string, fn: () => unknown | Promise<unknown>) {
  try { await fn(); fail(`expected rejection: ${label}`); }
  catch (err) { ok(`rejected as expected: ${label} — ${(err as Error).message.split('\n')[0]}`); }
}

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
  const letters = new LetterService(prisma, audit, delegation, workflow, letterhead);

  const cs = await prisma.appUser.create({ data: { email: `let-cs-${RUN}@one17.test`, displayName: 'let-cs' } });
  await rbac.assignRole({ userId: cs.id, roleCode: 'CS' });
  const compliance = await prisma.appUser.create({ data: { email: `let-compliance-${RUN}@one17.test`, displayName: 'let-compliance' } });
  await rbac.assignRole({ userId: compliance.id, roleCode: 'COMPLIANCE' });
  const mdCeo = await prisma.appUser.create({ data: { email: `let-mdceo-${RUN}@one17.test`, displayName: 'let-mdceo' } });
  await rbac.assignRole({ userId: mdCeo.id, roleCode: 'MD_CEO' });
  const outsider = await prisma.appUser.create({ data: { email: `let-outsider-${RUN}@one17.test`, displayName: 'let-outsider' } });

  const investorA = await prisma.investor.create({
    data: {
      investorId: `SMOKE-LET-INV-A-${RUN}`, fullLegalName: 'Smoke Letter Investor A', entityType: 'HNWI_INDIVIDUAL',
      nationality: 'NG', taxIdentificationNumber: `TIN-LET-A-${RUN}`, contactEmail: `let-inv-a-${RUN}@one17.test`,
      contactPhone: '+2340000000040', registeredAddress: 'Test address', sourceOfFunds: 'Business income',
      onboardedByUserId: cs.id, kycStatus: 'KYC_COMPLETE', amlStatus: 'CLEARED', fundStatus: 'ACTIVE',
    },
  });
  const investorB = await prisma.investor.create({
    data: {
      investorId: `SMOKE-LET-INV-B-${RUN}`, fullLegalName: 'Smoke Letter Investor B', entityType: 'HNWI_INDIVIDUAL',
      nationality: 'NG', taxIdentificationNumber: `TIN-LET-B-${RUN}`, contactEmail: `let-inv-b-${RUN}@one17.test`,
      contactPhone: '+2340000000041', registeredAddress: 'Test address', sourceOfFunds: 'Business income',
      onboardedByUserId: cs.id, kycStatus: 'KYC_COMPLETE', amlStatus: 'CLEARED', fundStatus: 'ACTIVE',
    },
  });

  // ---- Generation refuses (never queues) with no ACTIVE template ----
  await expectReject('generateLetter refuses when no ACTIVE template exists for the letter type (no queue -- unlike certificates, a letter has no later auto-fire moment)', () =>
    letters.generateLetter({ letterType: 'AD_HOC', investorId: investorA.investorId, generatedByUserId: cs.id }));

  // ---- Template propose/approve ----
  await expectReject('an outsider cannot propose a letter template', () =>
    letters.proposeTemplate({ letterType: 'AD_HOC', bodyTemplate: 'x', proposedByUserId: outsider.id }));

  const proposed = await letters.proposeTemplate({
    letterType: 'AD_HOC',
    bodyTemplate: 'Dear {{investor.fullLegalName}},\n\nSMOKE-BODY-MARKER regarding {{product.name}}.\n\nThis unresolved token stays visible: {{investor.missingField}}.',
    proposedByUserId: compliance.id,
  });
  if (proposed.status === 'DRAFT' && proposed.templateKey === 'AD_HOC') ok('proposeTemplate creates a DRAFT letter template row, opens the single-step workflow');
  else fail('proposeTemplate did not create the expected row', proposed);

  await expectReject('an outsider cannot approve a letter template', () =>
    letters.approveTemplate({ workflowInstanceId: proposed.workflowInstanceId!, approverUserId: outsider.id }));
  await expectReject('the proposer (Compliance) cannot approve their own template proposal (maker != checker)', () =>
    letters.approveTemplate({ workflowInstanceId: proposed.workflowInstanceId!, approverUserId: compliance.id }));

  const activated = await letters.approveTemplate({ workflowInstanceId: proposed.workflowInstanceId!, approverUserId: mdCeo.id });
  if ((activated as any)?.status === 'ACTIVE') ok('MD_CEO approves the letter template -> ACTIVE');
  else fail('approveTemplate did not activate as expected', activated);

  // ---- Generation + merge fields ----
  await expectReject('an outsider cannot generate a letter', () =>
    letters.generateLetter({ letterType: 'AD_HOC', investorId: investorA.investorId, generatedByUserId: outsider.id }));

  const generated = await letters.generateLetter({ letterType: 'AD_HOC', investorId: investorA.investorId, generatedByUserId: cs.id });
  const mergeOk = generated.mergedBody.includes('Smoke Letter Investor A')
    && generated.mergedBody.includes('SMOKE-BODY-MARKER')
    && generated.mergedBody.includes('[missing: investor.missingField]')
    && !generated.mergedBody.includes('{{');
  if (generated.status === 'PENDING_APPROVAL' && mergeOk) {
    ok('generateLetter merge-fills the template from real investor data, and a token with no matching context value renders a visible [missing: ...] marker rather than silently vanishing');
  } else {
    fail('generateLetter did not merge-fill as expected', { status: generated.status, mergedBody: generated.mergedBody });
  }

  // ---- Issuance approval: engine-level maker != checker (a DIFFERENT gate from the template approval above) ----
  await expectReject('an outsider cannot approve letter issuance', () =>
    letters.approveLetterInstance({ workflowInstanceId: generated.workflowInstanceId!, approverUserId: outsider.id }));
  await expectReject('the generator (CS) cannot approve their own letter for issuance (maker != checker)', () =>
    letters.approveLetterInstance({ workflowInstanceId: generated.workflowInstanceId!, approverUserId: cs.id }));

  const issued = await letters.approveLetterInstance({ workflowInstanceId: generated.workflowInstanceId!, approverUserId: compliance.id });
  if ((issued as any)?.status === 'ISSUED' && (issued as any)?.pdfBytes) {
    ok('a DIFFERENT user (Compliance) approves -> ISSUED, PDF rendered -- generation alone never sent anything');
  } else {
    fail('approveLetterInstance did not issue as expected', issued);
  }

  const pdfText = extractPdfHexText(new Uint8Array((issued as any).pdfBytes));
  if (pdfContainsText(pdfText, 'SMOKE-BODY-MARKER') && pdfContainsText(pdfText, 'Smoke Letter Investor A')) {
    ok('the rendered letter PDF actually carries the merge-filled body text, not just an opaque byte stream');
  } else {
    fail('rendered letter PDF is missing the expected merge-filled content', {});
  }

  // ---- Portal ownership isolation ----
  await expectReject('investor B cannot download investor A\'s letter by guessing the id', () =>
    letters.getLetterInstancePdfForInvestor((issued as any).id, investorB.investorId));
  const ownPdf = await letters.getLetterInstancePdfForInvestor((issued as any).id, investorA.investorId);
  if (ownPdf.length > 0) ok('investor A can download their own issued letter');
  else fail('investor A could not download their own letter', ownPdf);

  // ---- Invariant 52(d): counterparty portal ownership isolation ----
  const counterpartyA = await prisma.counterparty.create({ data: { legalName: `Smoke Counterparty A ${RUN}`, counterpartyType: 'SME' } });
  const counterpartyB = await prisma.counterparty.create({ data: { legalName: `Smoke Counterparty B ${RUN}`, counterpartyType: 'SME' } });
  const cpGenerated = await letters.generateLetter({ letterType: 'AD_HOC', counterpartyId: counterpartyA.id, generatedByUserId: cs.id });
  const cpIssued = await letters.approveLetterInstance({ workflowInstanceId: cpGenerated.workflowInstanceId!, approverUserId: compliance.id });
  await expectReject('counterparty B cannot download counterparty A\'s letter by guessing the id', () =>
    letters.getLetterInstancePdfForCounterparty((cpIssued as any).id, counterpartyB.id));
  const ownCpPdf = await letters.getLetterInstancePdfForCounterparty((cpIssued as any).id, counterpartyA.id);
  if (ownCpPdf.length > 0) ok('counterparty A can download their own issued letter -- the counterparty portal has its own ownership-isolated "My Documents" gate, structurally separate from the investor one');
  else fail('counterparty A could not download their own letter', ownCpPdf);

  // ---- Reject path ----
  const secondGenerated = await letters.generateLetter({ letterType: 'AD_HOC', investorId: investorA.investorId, generatedByUserId: cs.id });
  const rejected = await letters.rejectLetterInstance({ workflowInstanceId: secondGenerated.workflowInstanceId!, actorUserId: compliance.id, notes: 'Wording needs revision.' });
  if (rejected.status === 'REJECTED' && rejected.rejectionNotes === 'Wording needs revision.' && !rejected.pdfBytes) {
    ok('a rejected letter instance stays REJECTED with the rejection notes recorded and no PDF ever rendered');
  } else {
    fail('rejectLetterInstance did not behave as expected', rejected);
  }
  await expectReject('a REJECTED letter has nothing to download', () => letters.getLetterInstancePdfForInvestor(rejected.id, investorA.investorId));

  // ---- Version supersession ----
  const secondTemplateProposal = await letters.proposeTemplate({ letterType: 'AD_HOC', bodyTemplate: 'Dear {{investor.fullLegalName}}, SMOKE-BODY-V2.', proposedByUserId: compliance.id });
  const secondTemplateActivated = await letters.approveTemplate({ workflowInstanceId: secondTemplateProposal.workflowInstanceId!, approverUserId: mdCeo.id });
  const firstTemplateAfterSupersede = await prisma.documentTemplate.findUniqueOrThrow({ where: { id: proposed.id } });
  if ((secondTemplateActivated as any)?.status === 'ACTIVE' && firstTemplateAfterSupersede.status === 'SUPERSEDED') {
    ok('activating a new letter template version supersedes the prior ACTIVE version for that SAME letter type');
  } else {
    fail('letter template version supersession did not behave as expected', { secondTemplateActivated, firstTemplateAfterSupersede });
  }

  // Cleanup.
  const letterIds = [(generated as any).id, (secondGenerated as any).id, (cpGenerated as any).id];
  const templateWorkflowIds = [proposed.workflowInstanceId!, secondTemplateProposal.workflowInstanceId!];
  const letterWorkflowIds = [generated.workflowInstanceId!, secondGenerated.workflowInstanceId!, cpGenerated.workflowInstanceId!];
  await prisma.documentRegisterEntry.deleteMany({ where: { entityType: 'letter_instance', entityId: { in: letterIds } } });
  await prisma.clientCommunication.deleteMany({ where: { investorId: { in: [investorA.investorId, investorB.investorId] } } });
  await prisma.letterInstance.deleteMany({ where: { id: { in: letterIds } } });
  await prisma.workflowStepApproval.deleteMany({ where: { workflowInstanceId: { in: [...templateWorkflowIds, ...letterWorkflowIds] } } });
  await prisma.workflowInstance.deleteMany({ where: { id: { in: [...templateWorkflowIds, ...letterWorkflowIds] } } });
  await prisma.documentTemplate.deleteMany({ where: { id: { in: [proposed.id, secondTemplateProposal.id] } } });
  await prisma.investor.deleteMany({ where: { investorId: { in: [investorA.investorId, investorB.investorId] } } });
  await prisma.counterparty.deleteMany({ where: { id: { in: [counterpartyA.id, counterpartyB.id] } } });
  const userIds = [cs.id, compliance.id, mdCeo.id, outsider.id];
  await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
  await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });

  await prisma.$disconnect();

  if (failed) {
    console.error('\nSMOKE FAILED — see FAIL lines above.');
    process.exitCode = 1;
  } else {
    console.log('\nSMOKE OK — letter/correspondence engine (invariant 52c) against the real live DB.');
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
