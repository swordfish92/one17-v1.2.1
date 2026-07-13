"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const zlib = __importStar(require("zlib"));
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const rbac_service_1 = require("../rbac/rbac.service");
const auth_service_1 = require("../auth/auth.service");
const mfa_service_1 = require("../mfa/mfa.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const letterhead_service_1 = require("../letterhead/letterhead.service");
const letter_service_1 = require("./letter.service");
const RUN = Date.now();
let failed = false;
function ok(label) { console.log(`OK: ${label}`); }
function fail(label, detail) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function expectReject(label, fn) {
    try {
        await fn();
        fail(`expected rejection: ${label}`);
    }
    catch (err) {
        ok(`rejected as expected: ${label} — ${err.message.split('\n')[0]}`);
    }
}
function extractPdfHexText(bytes) {
    const buf = Buffer.from(bytes);
    const raw = buf.toString('latin1');
    const chunks = [];
    const streamRe = /stream\r?\n/g;
    let match;
    while ((match = streamRe.exec(raw))) {
        const start = match.index + match[0].length;
        const end = raw.indexOf('endstream', start);
        if (end === -1)
            continue;
        let streamBytes = buf.subarray(start, end);
        while (streamBytes.length > 0 && (streamBytes[streamBytes.length - 1] === 0x0a || streamBytes[streamBytes.length - 1] === 0x0d)) {
            streamBytes = streamBytes.subarray(0, streamBytes.length - 1);
        }
        try {
            chunks.push(zlib.inflateSync(streamBytes).toString('latin1'));
        }
        catch { }
    }
    return chunks.join('\n');
}
function pdfContainsText(pdfHexText, needle) {
    return pdfHexText.toUpperCase().includes(Buffer.from(needle, 'latin1').toString('hex').toUpperCase());
}
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const authService = new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit));
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, authService);
    const letterhead = new letterhead_service_1.LetterheadService(prisma, audit, delegation, workflow);
    const letters = new letter_service_1.LetterService(prisma, audit, delegation, workflow, letterhead);
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
    await expectReject('generateLetter refuses when no ACTIVE template exists for the letter type (no queue -- unlike certificates, a letter has no later auto-fire moment)', () => letters.generateLetter({ letterType: 'AD_HOC', investorId: investorA.investorId, generatedByUserId: cs.id }));
    await expectReject('an outsider cannot propose a letter template', () => letters.proposeTemplate({ letterType: 'AD_HOC', bodyTemplate: 'x', proposedByUserId: outsider.id }));
    const proposed = await letters.proposeTemplate({
        letterType: 'AD_HOC',
        bodyTemplate: 'Dear {{investor.fullLegalName}},\n\nSMOKE-BODY-MARKER regarding {{product.name}}.\n\nThis unresolved token stays visible: {{investor.missingField}}.',
        proposedByUserId: compliance.id,
    });
    if (proposed.status === 'DRAFT' && proposed.templateKey === 'AD_HOC')
        ok('proposeTemplate creates a DRAFT letter template row, opens the single-step workflow');
    else
        fail('proposeTemplate did not create the expected row', proposed);
    await expectReject('an outsider cannot approve a letter template', () => letters.approveTemplate({ workflowInstanceId: proposed.workflowInstanceId, approverUserId: outsider.id }));
    await expectReject('the proposer (Compliance) cannot approve their own template proposal (maker != checker)', () => letters.approveTemplate({ workflowInstanceId: proposed.workflowInstanceId, approverUserId: compliance.id }));
    const activated = await letters.approveTemplate({ workflowInstanceId: proposed.workflowInstanceId, approverUserId: mdCeo.id });
    if (activated?.status === 'ACTIVE')
        ok('MD_CEO approves the letter template -> ACTIVE');
    else
        fail('approveTemplate did not activate as expected', activated);
    await expectReject('an outsider cannot generate a letter', () => letters.generateLetter({ letterType: 'AD_HOC', investorId: investorA.investorId, generatedByUserId: outsider.id }));
    const generated = await letters.generateLetter({ letterType: 'AD_HOC', investorId: investorA.investorId, generatedByUserId: cs.id });
    const mergeOk = generated.mergedBody.includes('Smoke Letter Investor A')
        && generated.mergedBody.includes('SMOKE-BODY-MARKER')
        && generated.mergedBody.includes('[missing: investor.missingField]')
        && !generated.mergedBody.includes('{{');
    if (generated.status === 'PENDING_APPROVAL' && mergeOk) {
        ok('generateLetter merge-fills the template from real investor data, and a token with no matching context value renders a visible [missing: ...] marker rather than silently vanishing');
    }
    else {
        fail('generateLetter did not merge-fill as expected', { status: generated.status, mergedBody: generated.mergedBody });
    }
    await expectReject('an outsider cannot approve letter issuance', () => letters.approveLetterInstance({ workflowInstanceId: generated.workflowInstanceId, approverUserId: outsider.id }));
    await expectReject('the generator (CS) cannot approve their own letter for issuance (maker != checker)', () => letters.approveLetterInstance({ workflowInstanceId: generated.workflowInstanceId, approverUserId: cs.id }));
    const issued = await letters.approveLetterInstance({ workflowInstanceId: generated.workflowInstanceId, approverUserId: compliance.id });
    if (issued?.status === 'ISSUED' && issued?.pdfBytes) {
        ok('a DIFFERENT user (Compliance) approves -> ISSUED, PDF rendered -- generation alone never sent anything');
    }
    else {
        fail('approveLetterInstance did not issue as expected', issued);
    }
    const pdfText = extractPdfHexText(new Uint8Array(issued.pdfBytes));
    if (pdfContainsText(pdfText, 'SMOKE-BODY-MARKER') && pdfContainsText(pdfText, 'Smoke Letter Investor A')) {
        ok('the rendered letter PDF actually carries the merge-filled body text, not just an opaque byte stream');
    }
    else {
        fail('rendered letter PDF is missing the expected merge-filled content', {});
    }
    await expectReject('investor B cannot download investor A\'s letter by guessing the id', () => letters.getLetterInstancePdfForInvestor(issued.id, investorB.investorId));
    const ownPdf = await letters.getLetterInstancePdfForInvestor(issued.id, investorA.investorId);
    if (ownPdf.length > 0)
        ok('investor A can download their own issued letter');
    else
        fail('investor A could not download their own letter', ownPdf);
    const counterpartyA = await prisma.counterparty.create({ data: { legalName: `Smoke Counterparty A ${RUN}`, counterpartyType: 'SME' } });
    const counterpartyB = await prisma.counterparty.create({ data: { legalName: `Smoke Counterparty B ${RUN}`, counterpartyType: 'SME' } });
    const cpGenerated = await letters.generateLetter({ letterType: 'AD_HOC', counterpartyId: counterpartyA.id, generatedByUserId: cs.id });
    const cpIssued = await letters.approveLetterInstance({ workflowInstanceId: cpGenerated.workflowInstanceId, approverUserId: compliance.id });
    await expectReject('counterparty B cannot download counterparty A\'s letter by guessing the id', () => letters.getLetterInstancePdfForCounterparty(cpIssued.id, counterpartyB.id));
    const ownCpPdf = await letters.getLetterInstancePdfForCounterparty(cpIssued.id, counterpartyA.id);
    if (ownCpPdf.length > 0)
        ok('counterparty A can download their own issued letter -- the counterparty portal has its own ownership-isolated "My Documents" gate, structurally separate from the investor one');
    else
        fail('counterparty A could not download their own letter', ownCpPdf);
    const secondGenerated = await letters.generateLetter({ letterType: 'AD_HOC', investorId: investorA.investorId, generatedByUserId: cs.id });
    const rejected = await letters.rejectLetterInstance({ workflowInstanceId: secondGenerated.workflowInstanceId, actorUserId: compliance.id, notes: 'Wording needs revision.' });
    if (rejected.status === 'REJECTED' && rejected.rejectionNotes === 'Wording needs revision.' && !rejected.pdfBytes) {
        ok('a rejected letter instance stays REJECTED with the rejection notes recorded and no PDF ever rendered');
    }
    else {
        fail('rejectLetterInstance did not behave as expected', rejected);
    }
    await expectReject('a REJECTED letter has nothing to download', () => letters.getLetterInstancePdfForInvestor(rejected.id, investorA.investorId));
    const secondTemplateProposal = await letters.proposeTemplate({ letterType: 'AD_HOC', bodyTemplate: 'Dear {{investor.fullLegalName}}, SMOKE-BODY-V2.', proposedByUserId: compliance.id });
    const secondTemplateActivated = await letters.approveTemplate({ workflowInstanceId: secondTemplateProposal.workflowInstanceId, approverUserId: mdCeo.id });
    const firstTemplateAfterSupersede = await prisma.documentTemplate.findUniqueOrThrow({ where: { id: proposed.id } });
    if (secondTemplateActivated?.status === 'ACTIVE' && firstTemplateAfterSupersede.status === 'SUPERSEDED') {
        ok('activating a new letter template version supersedes the prior ACTIVE version for that SAME letter type');
    }
    else {
        fail('letter template version supersession did not behave as expected', { secondTemplateActivated, firstTemplateAfterSupersede });
    }
    const letterIds = [generated.id, secondGenerated.id, cpGenerated.id];
    const templateWorkflowIds = [proposed.workflowInstanceId, secondTemplateProposal.workflowInstanceId];
    const letterWorkflowIds = [generated.workflowInstanceId, secondGenerated.workflowInstanceId, cpGenerated.workflowInstanceId];
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
    }
    else {
        console.log('\nSMOKE OK — letter/correspondence engine (invariant 52c) against the real live DB.');
    }
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=letter.smoke.js.map