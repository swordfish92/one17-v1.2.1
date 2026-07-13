import { Injectable } from '@nestjs/common';
import { PDFDocument } from 'pdf-lib';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { LetterheadService } from '../letterhead/letterhead.service';
import { PdfWriter, kobo } from '../pdf/pdf-writer';
import {
  CertificateError,
  ProposeCertificateTemplateInput,
  ApproveCertificateTemplateInput,
  IssueOrQueueCertificateInput,
  CertificateProductClassKey,
  HfUnitNavSnapshot,
  PoolNdPsrSnapshot,
  NdWakalahSnapshot,
} from './certificate.types';

// Invariant 60(d) (CHECK15): display-layer rename "ND Mandate" -> "Investment
// Mandate" -- affects only NEW certificates generated after this change; an
// already-issued certificate's stored dataSnapshot/rendered PDF is never
// retro-edited (immutable by the standing certificate-issuance discipline).
const CLASS_LABELS: Record<CertificateProductClassKey, string> = {
  HF_UNIT_NAV: 'Halal Fund Investment Certificate',
  POOL_ND_PSR: 'Pool / Investment Mandate Investment Certificate',
  ND_WAKALAH: 'Investment Mandate (Wakalah) Investment Certificate',
};

// Invariant 52(b) (CHECK12): "TEMPLATE MANAGEMENT FUNCTION ... governed
// template registry ... Issuance is IMMEDIATE and AUTOMATIC at subscription
// approval ... If no ACTIVE template exists for a product class, the
// booking itself NEVER fails -- the certificate queues ... and auto-issues
// the moment a template activates." Own standalone service, no
// construction blast radius (brand new, only SubscriptionService and
// ops-api/portal controllers will construct it).
@Injectable()
export class CertificateService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
    private readonly letterhead: LetterheadService,
  ) {}

  // ==========================================================================
  // Governed template registry (shared DocumentTemplate table, templateType
  // CERTIFICATE, templateKey = product class).
  // ==========================================================================
  async proposeTemplate(input: ProposeCertificateTemplateInput) {
    await this.assertCapability(input.proposedByUserId, 'CERTIFICATE_TEMPLATE_MANAGEMENT', 'INITIATE', 'propose a certificate template version');

    const latest = await this.prisma.documentTemplate.findFirst({ where: { templateType: 'CERTIFICATE', templateKey: input.productClass }, orderBy: { version: 'desc' } });
    const version = (latest?.version ?? 0) + 1;

    const created = await this.prisma.documentTemplate.create({
      data: {
        templateType: 'CERTIFICATE',
        templateKey: input.productClass,
        version,
        status: 'DRAFT',
        disclaimerText: input.disclaimerText,
        secRuleDisclaimer: input.secRuleDisclaimer,
        proposedByUserId: input.proposedByUserId,
      },
    });

    let instance;
    try {
      instance = await this.workflow.initiate({
        workflowTypeCode: 'CERTIFICATE_TEMPLATE_APPROVAL',
        entityType: 'document_template',
        entityId: created.id,
        initiatedByUserId: input.proposedByUserId,
        scenario: 'STANDARD',
      });
    } catch (err) {
      await this.audit.record({
        actorUserId: input.proposedByUserId, action: 'INITIATE_FAILED_COMPENSATED', entityType: 'document_template', entityId: created.id,
        after: { workflowTypeCode: 'CERTIFICATE_TEMPLATE_APPROVAL', reason: (err as Error).message },
      });
      await this.prisma.documentTemplate.delete({ where: { id: created.id } });
      throw err;
    }

    return this.prisma.documentTemplate.update({ where: { id: created.id }, data: { workflowInstanceId: instance.id } });
  }

  async approveTemplate(input: ApproveCertificateTemplateInput) {
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

    // "auto-issues the moment a template activates" -- every certificate
    // still QUEUED for this exact product class gets rendered now.
    if (version.templateType === 'CERTIFICATE') {
      const queued = await this.prisma.certificate.findMany({ where: { productClass: version.templateKey as CertificateProductClassKey, status: 'QUEUED' } });
      for (const cert of queued) {
        await this.renderAndIssue(cert.id, activated, input.approverUserId);
      }
    }

    return activated;
  }

  async listTemplates(productClass?: CertificateProductClassKey) {
    return this.prisma.documentTemplate.findMany({ where: { templateType: 'CERTIFICATE', templateKey: productClass }, orderBy: [{ templateKey: 'asc' }, { version: 'desc' }] });
  }

  async listPendingTemplates() {
    return this.prisma.documentTemplate.findMany({ where: { templateType: 'CERTIFICATE', status: 'DRAFT', workflowInstanceId: { not: null } }, orderBy: { createdAt: 'asc' } });
  }

  // ==========================================================================
  // Issuance -- system-triggered (SubscriptionService), no capability gate
  // of its own; see IssueOrQueueCertificateInput's own comment.
  // ==========================================================================
  async issueOrQueueCertificate(input: IssueOrQueueCertificateInput) {
    const certificate = await this.prisma.certificate.create({
      data: {
        investorId: input.investorId,
        productAccountId: input.productAccountId,
        ndMandateAccountId: input.ndMandateAccountId,
        productClass: input.productClass,
        status: 'QUEUED',
        dataSnapshot: input.dataSnapshot as object,
      },
    });

    const activeTemplate = await this.prisma.documentTemplate.findFirst({ where: { templateType: 'CERTIFICATE', templateKey: input.productClass, status: 'ACTIVE' } });
    if (!activeTemplate) {
      await this.audit.record({
        actorUserId: input.triggeredByUserId, action: 'CREATE', entityType: 'certificate', entityId: certificate.id,
        after: { status: 'QUEUED', productClass: input.productClass, reason: 'no ACTIVE certificate template for this product class yet -- booking proceeds, certificate queues' },
      });
      return certificate;
    }
    return this.renderAndIssue(certificate.id, activeTemplate, input.triggeredByUserId);
  }

  // Invariant 52(b): "on-demand reissue from the investor record." Issued
  // certificates are immutable (standing law) -- reissue NEVER regenerates
  // content against a newer template/account state, it re-delivers the
  // EXACT original bytes already stored on the row and re-logs the
  // communication touch. A QUEUED certificate has nothing to reissue yet.
  async reissueCertificate(certificateId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'CERTIFICATE_TEMPLATE_MANAGEMENT', 'INITIATE', 'reissue an investment certificate');
    const cert = await this.prisma.certificate.findUniqueOrThrow({ where: { id: certificateId } });
    if (cert.status !== 'ISSUED' || !cert.pdfBytes) {
      throw new CertificateError(`Certificate ${certificateId} is ${cert.status}, not ISSUED -- nothing to reissue yet (it will auto-issue once a template activates).`);
    }
    await this.logCommunication(cert.investorId, cert.certificateNumber!, actorUserId, 'Reissued');
    return cert;
  }

  async listCertificates(investorId?: string) {
    return this.prisma.certificate.findMany({ where: { investorId }, orderBy: { createdAt: 'desc' } });
  }

  async getCertificate(id: string) {
    return this.prisma.certificate.findUniqueOrThrow({ where: { id } });
  }

  // Invariant 52(b): "downloadable on the portal." Ownership re-checked
  // against the session's own investorId, never trusted from :id -- same
  // structural-isolation pattern as PortalWmController's statement download.
  async getCertificatePdfForInvestor(certificateId: string, investorId: string): Promise<Uint8Array> {
    const cert = await this.prisma.certificate.findUniqueOrThrow({ where: { id: certificateId } });
    if (cert.investorId !== investorId) {
      throw new CertificateError('This certificate does not belong to the requesting investor.');
    }
    if (cert.status !== 'ISSUED' || !cert.pdfBytes) {
      throw new CertificateError(`Certificate ${certificateId} is ${cert.status} -- not yet issued (it queues until a template activates for this product class).`);
    }
    return cert.pdfBytes;
  }

  async getCertificatePdf(certificateId: string): Promise<Uint8Array> {
    const cert = await this.prisma.certificate.findUniqueOrThrow({ where: { id: certificateId } });
    if (cert.status !== 'ISSUED' || !cert.pdfBytes) {
      throw new CertificateError(`Certificate ${certificateId} is ${cert.status} -- not yet issued.`);
    }
    return cert.pdfBytes;
  }

  // disclaimerText/secRuleDisclaimer are nullable at the schema level
  // (shared with LETTER templates, which don't use them) but ALWAYS
  // populated for CERTIFICATE templates -- proposeTemplate above requires
  // both non-empty strings at the app layer, so this method can only ever
  // be called with a fully-populated certificate template.
  private async renderAndIssue(certificateId: string, template: { id: string; disclaimerText: string | null; secRuleDisclaimer: string | null }, actorUserId: string) {
    const cert = await this.prisma.certificate.findUniqueOrThrow({ where: { id: certificateId } });
    const investor = await this.prisma.investor.findUniqueOrThrow({ where: { investorId: cert.investorId } });
    const letterheadTemplate = await this.letterhead.getActiveContent();

    const [{ nextval }] = await this.prisma.$queryRaw<{ nextval: bigint }[]>`SELECT nextval('certificate_number_seq')`;
    const certificateNumber = `CERT-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${nextval.toString().padStart(4, '0')}`;

    const w = new PdfWriter(await PDFDocument.create());
    await w.init();
    w.letterheadHeader(letterheadTemplate, CLASS_LABELS[cert.productClass as CertificateProductClassKey]);
    w.gap();
    w.centeredLine(`Certificate No: ${certificateNumber}`, { size: 12 });
    w.gap();
    w.kv('Investor', investor.fullLegalName);
    w.kv('Investor ID', investor.investorId);
    w.kv('Issue date', new Date().toISOString().slice(0, 10));
    w.gap();

    const snapshot = cert.dataSnapshot as unknown;
    if (cert.productClass === 'HF_UNIT_NAV') {
      const s = snapshot as HfUnitNavSnapshot;
      w.heading('Units Allotted');
      w.kv('Units allotted', s.unitsAllotted.toLocaleString(undefined, { maximumFractionDigits: 4 }));
      w.kv('NAV per unit at allotment', `NGN ${s.navPerUnitAtAllotment.toLocaleString(undefined, { maximumFractionDigits: 4 })}`);
      w.kv('Allotment date', s.allotmentDate);
    } else if (cert.productClass === 'POOL_ND_PSR') {
      const s = snapshot as PoolNdPsrSnapshot;
      w.heading('Capital / Profit-Sharing Terms');
      w.kv('Principal', kobo(BigInt(s.principalKobo)));
      w.kv('Tenor', s.tenorLabel);
      w.kv('Profit-Sharing Ratio (PSR)', s.investorRatioPct !== null && s.mudaribRatioPct !== null ? `${(s.investorRatioPct * 100).toFixed(1)}% investor / ${(s.mudaribRatioPct * 100).toFixed(1)}% mudarib` : '—');
      w.kv('Target return — benchmark only, not guaranteed', s.targetReturnPct !== null ? `${(s.targetReturnPct * 100).toFixed(2)}% p.a.` : '—');
    } else {
      const s = snapshot as NdWakalahSnapshot;
      w.heading('Wakalah Fee & Expected-Profit Terms');
      w.kv('Principal', kobo(BigInt(s.principalKobo)));
      w.kv('Tenor', s.tenorLabel);
      w.kv('Wakalah fee rate (p.a.)', s.wakalahFeeRatePa !== null ? `${(s.wakalahFeeRatePa * 100).toFixed(2)}%` : '—');
      w.kv('Expected profit — benchmark only, not guaranteed', s.expectedProfitPct !== null ? `${(s.expectedProfitPct * 100).toFixed(2)}% p.a.` : '—');
    }
    w.gap();

    // Invariant 44(a): every product class carries a capital-at-risk
    // statement -- STRUCTURE (always present) is standing law, the exact
    // WORDING is Compliance's governed template content, never invented
    // here.
    w.heading('Important Disclosures');
    w.footer(template.disclaimerText!);
    w.footer(template.secRuleDisclaimer!);
    if (letterheadTemplate) w.footer(letterheadTemplate.footerDisclaimer);
    const pdfBytes = await w.save();

    const updated = await this.prisma.certificate.update({
      where: { id: cert.id },
      data: { certificateNumber, status: 'ISSUED', issuedAt: new Date(), pdfBytes: Buffer.from(pdfBytes), templateId: template.id },
    });

    // Invariant 52(b): "issued PDF immutable in the document register
    // linked to investor + product account." Written directly (not via
    // DocumentService.attach()) -- that method hard-gates on the CALLER
    // holding DOCUMENT_REGISTER INITIATE, which is right for a discretionary
    // staff upload but wrong here: this write is a SYSTEM consequence of an
    // already-gated action (subscription approval / template activation),
    // and the triggering actor (e.g. a PORT_MGR approving a subscription)
    // has no reason to also hold document-upload rights. uploadedByUserId
    // still records who caused it, preserving DocumentRegisterEntry's
    // "exactly one of two nullable actor FKs" invariant.
    const registerEntry = await this.prisma.documentRegisterEntry.create({
      data: {
        entityType: 'certificate',
        entityId: cert.id,
        documentType: 'INVESTMENT_CERTIFICATE',
        fileReference: `/certificates/${cert.id}/pdf`,
        uploadedByUserId: actorUserId,
      },
    });
    await this.prisma.certificate.update({ where: { id: cert.id }, data: { documentRegisterEntryId: registerEntry.id } });

    await this.audit.record({
      actorUserId, action: 'CREATE', entityType: 'certificate', entityId: cert.id,
      after: { certificateNumber, status: 'ISSUED', productClass: cert.productClass },
    });

    await this.logCommunication(cert.investorId, certificateNumber, actorUserId, 'Issued');

    return updated;
  }

  // Invariant 52(b): "emailed via the communication log." No SMTP/email
  // transport exists anywhere in this codebase yet (confirmed: marketing
  // sends log the same way) -- logged-only stub, consistent platform
  // convention, not a gap specific to this feature.
  private async logCommunication(investorId: string, certificateNumber: string, actorUserId: string, verb: 'Issued' | 'Reissued') {
    await this.prisma.clientCommunication.create({
      data: {
        investorId,
        channel: 'EMAIL',
        direction: 'OUTBOUND',
        subject: `Investment Certificate ${certificateNumber}`,
        summary: `${verb} certificate ${certificateNumber} -- email transport not yet instrumented (logged-only, matches marketing-send convention).`,
        loggedByUserId: actorUserId,
        occurredAt: new Date(),
      },
    });
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'certificate_activity', entityId: activity, after: { functionCode, level } });
      throw new CertificateError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}
