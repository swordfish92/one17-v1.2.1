import { Injectable } from '@nestjs/common';
import { PDFDocument } from 'pdf-lib';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { LetterheadService } from '../letterhead/letterhead.service';
import { PdfWriter } from '../pdf/pdf-writer';
import {
  LetterError,
  LetterType,
  ProposeLetterTemplateInput,
  ApproveLetterTemplateInput,
  GenerateLetterInput,
  ApproveLetterInstanceInput,
  RejectLetterInstanceInput,
} from './letter.types';

const LETTER_TYPE_LABELS: Record<LetterType, string> = {
  WELCOME: 'Welcome Letter',
  MATURITY_NOTICE: 'Maturity Notice',
  ROLLOVER_CONFIRMATION: 'Rollover Confirmation',
  AD_HOC: 'Official Letter',
  BANK_INSTRUCTION: 'Bank Instruction Letter',
  TAX_REMITTANCE_INSTRUCTION: 'Tax Remittance Instruction Letter',
};

// Invariant 52(c) (CHECK12): "governed letter-template registry (merge
// fields from investor/counterparty/product/account data), generation ->
// maker!=checker approval for client-facing issuance -> dispatch via email
// w/ communication-log entry -> stored in document register." Own
// standalone service, no construction blast radius (brand new, nothing
// else constructs it yet).
@Injectable()
export class LetterService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
    private readonly letterhead: LetterheadService,
  ) {}

  // ==========================================================================
  // Governed template registry (shared DocumentTemplate table, templateType
  // LETTER, templateKey = letter type).
  // ==========================================================================
  async proposeTemplate(input: ProposeLetterTemplateInput) {
    await this.assertCapability(input.proposedByUserId, 'LETTER_TEMPLATE_MANAGEMENT', 'INITIATE', 'propose a letter template version');

    const latest = await this.prisma.documentTemplate.findFirst({ where: { templateType: 'LETTER', templateKey: input.letterType }, orderBy: { version: 'desc' } });
    const version = (latest?.version ?? 0) + 1;

    const created = await this.prisma.documentTemplate.create({
      data: { templateType: 'LETTER', templateKey: input.letterType, version, status: 'DRAFT', bodyTemplate: input.bodyTemplate, proposedByUserId: input.proposedByUserId },
    });

    let instance;
    try {
      instance = await this.workflow.initiate({
        workflowTypeCode: 'LETTER_TEMPLATE_APPROVAL',
        entityType: 'document_template',
        entityId: created.id,
        initiatedByUserId: input.proposedByUserId,
        scenario: 'STANDARD',
      });
    } catch (err) {
      await this.audit.record({
        actorUserId: input.proposedByUserId, action: 'INITIATE_FAILED_COMPENSATED', entityType: 'document_template', entityId: created.id,
        after: { workflowTypeCode: 'LETTER_TEMPLATE_APPROVAL', reason: (err as Error).message },
      });
      await this.prisma.documentTemplate.delete({ where: { id: created.id } });
      throw err;
    }

    return this.prisma.documentTemplate.update({ where: { id: created.id }, data: { workflowInstanceId: instance.id } });
  }

  async approveTemplate(input: ApproveLetterTemplateInput) {
    const updated = await this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
    if (updated.status !== 'APPROVED') return null;

    const version = await this.prisma.documentTemplate.findFirstOrThrow({ where: { workflowInstanceId: input.workflowInstanceId } });
    const [, activated] = await this.prisma.$transaction([
      this.prisma.documentTemplate.updateMany({ where: { templateType: version.templateType, templateKey: version.templateKey, status: 'ACTIVE' }, data: { status: 'SUPERSEDED' } }),
      this.prisma.documentTemplate.update({ where: { id: version.id }, data: { status: 'ACTIVE', approvedByUserId: input.approverUserId } }),
    ]);

    await this.audit.record({
      actorUserId: input.approverUserId, action: 'UPDATE', entityType: 'document_template', entityId: version.id,
      after: { status: 'ACTIVE', templateKey: version.templateKey, version: version.version },
    });
    return activated;
  }

  async listTemplates(letterType?: LetterType) {
    return this.prisma.documentTemplate.findMany({ where: { templateType: 'LETTER', templateKey: letterType }, orderBy: [{ templateKey: 'asc' }, { version: 'desc' }] });
  }

  async listPendingTemplates() {
    return this.prisma.documentTemplate.findMany({ where: { templateType: 'LETTER', status: 'DRAFT', workflowInstanceId: { not: null } }, orderBy: { createdAt: 'asc' } });
  }

  // ==========================================================================
  // Generation + per-instance maker!=checker issuance approval. Unlike
  // certificates (system-triggered, auto-issue), a letter is a discrete
  // STAFF action every time -- no QUEUED state: refuses outright if no
  // ACTIVE template exists for the type, rather than queuing for a later
  // moment that (unlike a subscription approval) has no natural trigger.
  // ==========================================================================
  async generateLetter(input: GenerateLetterInput) {
    await this.assertCapability(input.generatedByUserId, 'LETTER_ISSUANCE', 'INITIATE', 'generate a letter');

    const template = await this.prisma.documentTemplate.findFirst({ where: { templateType: 'LETTER', templateKey: input.letterType, status: 'ACTIVE' } });
    if (!template || !template.bodyTemplate) {
      throw new LetterError(`No ACTIVE letter template exists for type ${input.letterType} yet -- Compliance must propose and MD_CEO approve one before letters of this type can be generated.`);
    }

    const mergeContext = await this.buildMergeContext(input);
    const mergedBody = renderMergeFields(template.bodyTemplate, mergeContext);

    const created = await this.prisma.letterInstance.create({
      data: {
        letterType: input.letterType,
        templateId: template.id,
        investorId: input.investorId,
        counterpartyId: input.counterpartyId,
        productAccountId: input.productAccountId,
        ndMandateAccountId: input.ndMandateAccountId,
        mergedBody,
        generatedByUserId: input.generatedByUserId,
      },
    });

    let instance;
    try {
      instance = await this.workflow.initiate({
        workflowTypeCode: 'LETTER_ISSUANCE_APPROVAL',
        entityType: 'letter_instance',
        entityId: created.id,
        initiatedByUserId: input.generatedByUserId,
        scenario: 'STANDARD',
      });
    } catch (err) {
      await this.audit.record({
        actorUserId: input.generatedByUserId, action: 'INITIATE_FAILED_COMPENSATED', entityType: 'letter_instance', entityId: created.id,
        after: { workflowTypeCode: 'LETTER_ISSUANCE_APPROVAL', reason: (err as Error).message },
      });
      await this.prisma.letterInstance.delete({ where: { id: created.id } });
      throw err;
    }

    return this.prisma.letterInstance.update({ where: { id: created.id }, data: { workflowInstanceId: instance.id } });
  }

  async approveLetterInstance(input: ApproveLetterInstanceInput) {
    const updated = await this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
    if (updated.status !== 'APPROVED') return null;

    const letter = await this.prisma.letterInstance.findFirstOrThrow({ where: { workflowInstanceId: input.workflowInstanceId } });
    const letterheadTemplate = await this.letterhead.getActiveContent();

    const w = new PdfWriter(await PDFDocument.create());
    await w.init();
    w.letterheadHeader(letterheadTemplate, LETTER_TYPE_LABELS[letter.letterType as LetterType] ?? letter.letterType);
    w.kv('Date', new Date().toISOString().slice(0, 10));
    w.gap();
    w.paragraph(letter.mergedBody);
    if (letterheadTemplate) w.footer(letterheadTemplate.footerDisclaimer);
    const pdfBytes = await w.save();

    const issued = await this.prisma.letterInstance.update({
      where: { id: letter.id },
      data: { status: 'ISSUED', issuedAt: new Date(), approvedByUserId: input.approverUserId, pdfBytes: Buffer.from(pdfBytes) },
    });

    // Same design deviation as CertificateService.renderAndIssue: written
    // directly, not via DocumentService.attach(), since this is a SYSTEM
    // consequence of the approval action, not a discretionary staff
    // upload -- the approver has no reason to also hold DOCUMENT_REGISTER
    // INITIATE. uploadedByUserId still records the triggering actor.
    const registerEntry = await this.prisma.documentRegisterEntry.create({
      data: { entityType: 'letter_instance', entityId: letter.id, documentType: `LETTER_${letter.letterType}`, fileReference: `/letters/${letter.id}/pdf`, uploadedByUserId: input.approverUserId },
    });
    await this.prisma.letterInstance.update({ where: { id: letter.id }, data: { documentRegisterEntryId: registerEntry.id } });

    await this.audit.record({ actorUserId: input.approverUserId, action: 'UPDATE', entityType: 'letter_instance', entityId: letter.id, after: { status: 'ISSUED', letterType: letter.letterType } });

    if (letter.investorId || letter.counterpartyId) {
      await this.prisma.clientCommunication.create({
        data: {
          investorId: letter.investorId, counterpartyId: letter.counterpartyId,
          channel: 'EMAIL', direction: 'OUTBOUND',
          subject: LETTER_TYPE_LABELS[letter.letterType as LetterType] ?? letter.letterType,
          summary: `Issued ${letter.letterType} letter -- email transport not yet instrumented (logged-only, matches marketing-send/certificate convention).`,
          loggedByUserId: input.approverUserId, occurredAt: new Date(),
        },
      });
    }

    return issued;
  }

  async rejectLetterInstance(input: RejectLetterInstanceInput) {
    await this.workflow.reject(input.workflowInstanceId, input.actorUserId, input.notes);
    const letter = await this.prisma.letterInstance.findFirstOrThrow({ where: { workflowInstanceId: input.workflowInstanceId } });
    return this.prisma.letterInstance.update({ where: { id: letter.id }, data: { status: 'REJECTED', rejectionNotes: input.notes } });
  }

  async listLetterInstances(filter: { investorId?: string; counterpartyId?: string } = {}) {
    return this.prisma.letterInstance.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
  }

  async listPendingLetterInstances() {
    return this.prisma.letterInstance.findMany({ where: { status: 'PENDING_APPROVAL' }, orderBy: { createdAt: 'asc' } });
  }

  async getLetterInstance(id: string) {
    return this.prisma.letterInstance.findUniqueOrThrow({ where: { id } });
  }

  async getLetterInstancePdf(id: string): Promise<Uint8Array> {
    const letter = await this.prisma.letterInstance.findUniqueOrThrow({ where: { id } });
    if (letter.status !== 'ISSUED' || !letter.pdfBytes) {
      throw new LetterError(`Letter instance ${id} is ${letter.status} -- not yet issued.`);
    }
    return letter.pdfBytes;
  }

  // Invariant 52(d) (portal My Documents) will call this with the
  // session's own investorId, the same ownership-check shape as
  // CertificateService.getCertificatePdfForInvestor/StatementService.
  async getLetterInstancePdfForInvestor(id: string, investorId: string): Promise<Uint8Array> {
    const letter = await this.prisma.letterInstance.findUniqueOrThrow({ where: { id } });
    if (letter.investorId !== investorId) {
      throw new LetterError('This letter does not belong to the requesting investor.');
    }
    if (letter.status !== 'ISSUED' || !letter.pdfBytes) {
      throw new LetterError(`Letter instance ${id} is ${letter.status} -- not yet issued.`);
    }
    return letter.pdfBytes;
  }

  // Invariant 52(d): the counterparty portal's equivalent of
  // getLetterInstancePdfForInvestor -- counterparties never have
  // certificates/statements (both structurally investor-only, no
  // counterpartyId column exists on either), so letters are the only
  // document type their "My Documents" section ever shows.
  async getLetterInstancePdfForCounterparty(id: string, counterpartyId: string): Promise<Uint8Array> {
    const letter = await this.prisma.letterInstance.findUniqueOrThrow({ where: { id } });
    if (letter.counterpartyId !== counterpartyId) {
      throw new LetterError('This letter does not belong to the requesting counterparty.');
    }
    if (letter.status !== 'ISSUED' || !letter.pdfBytes) {
      throw new LetterError(`Letter instance ${id} is ${letter.status} -- not yet issued.`);
    }
    return letter.pdfBytes;
  }

  private async buildMergeContext(input: GenerateLetterInput): Promise<Record<string, string>> {
    const context: Record<string, string> = { date: new Date().toISOString().slice(0, 10), ...(input.extraMergeFields ?? {}) };

    if (input.investorId) {
      const investor = await this.prisma.investor.findUniqueOrThrow({ where: { investorId: input.investorId } });
      context['investor.fullLegalName'] = investor.fullLegalName;
      context['investor.investorId'] = investor.investorId;
    }
    if (input.counterpartyId) {
      const counterparty = await this.prisma.counterparty.findUniqueOrThrow({ where: { id: input.counterpartyId } });
      context['counterparty.legalName'] = counterparty.legalName;
    }
    if (input.productAccountId) {
      const account = await this.prisma.productAccount.findUniqueOrThrow({ where: { id: input.productAccountId }, include: { product: true } });
      context['product.name'] = account.product.name;
      context['account.reference'] = account.id;
    }
    if (input.ndMandateAccountId) {
      const mandate = await this.prisma.ndMandateAccount.findUniqueOrThrow({ where: { id: input.ndMandateAccountId }, include: { ledgerEntity: { include: { product: true } } } });
      context['product.name'] = mandate.ledgerEntity.product?.name ?? mandate.ledgerEntity.name;
      context['account.reference'] = mandate.mandateRef;
    }

    return context;
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'letter_activity', entityId: activity, after: { functionCode, level } });
      throw new LetterError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}

// Invariant 52(c): "merge fields from investor/counterparty/product/
// account data." Simple {{path.to.field}} token replacement, no logic/
// loops/conditionals -- a deliberately dumb templating engine (this is
// governed correspondence text, not a place for hidden control flow). A
// missing merge field renders as a visible [missing: token] marker rather
// than silently blank, so a template/context mismatch is impossible to
// miss on the generated letter.
function renderMergeFields(template: string, context: Record<string, string>): string {
  return template.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (_match, token: string) => context[token] ?? `[missing: ${token}]`);
}
