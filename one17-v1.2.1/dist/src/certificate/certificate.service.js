"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificateService = void 0;
const common_1 = require("@nestjs/common");
const pdf_lib_1 = require("pdf-lib");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const letterhead_service_1 = require("../letterhead/letterhead.service");
const pdf_writer_1 = require("../pdf/pdf-writer");
const certificate_types_1 = require("./certificate.types");
const CLASS_LABELS = {
    HF_UNIT_NAV: 'Halal Fund Investment Certificate',
    POOL_ND_PSR: 'Pool / Investment Mandate Investment Certificate',
    ND_WAKALAH: 'Investment Mandate (Wakalah) Investment Certificate',
};
let CertificateService = class CertificateService {
    prisma;
    audit;
    delegation;
    workflow;
    letterhead;
    constructor(prisma, audit, delegation, workflow, letterhead) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
        this.workflow = workflow;
        this.letterhead = letterhead;
    }
    async proposeTemplate(input) {
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
        }
        catch (err) {
            await this.audit.record({
                actorUserId: input.proposedByUserId, action: 'INITIATE_FAILED_COMPENSATED', entityType: 'document_template', entityId: created.id,
                after: { workflowTypeCode: 'CERTIFICATE_TEMPLATE_APPROVAL', reason: err.message },
            });
            await this.prisma.documentTemplate.delete({ where: { id: created.id } });
            throw err;
        }
        return this.prisma.documentTemplate.update({ where: { id: created.id }, data: { workflowInstanceId: instance.id } });
    }
    async approveTemplate(input) {
        const updated = await this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
        if (updated.status !== 'APPROVED')
            return null;
        const version = await this.prisma.documentTemplate.findFirstOrThrow({ where: { workflowInstanceId: input.workflowInstanceId } });
        const [, activated] = await this.prisma.$transaction([
            this.prisma.documentTemplate.updateMany({ where: { templateType: version.templateType, templateKey: version.templateKey, status: 'ACTIVE' }, data: { status: 'SUPERSEDED' } }),
            this.prisma.documentTemplate.update({ where: { id: version.id }, data: { status: 'ACTIVE', approvedByUserId: input.approverUserId } }),
        ]);
        await this.audit.record({
            actorUserId: input.approverUserId, action: 'UPDATE', entityType: 'document_template', entityId: version.id,
            after: { status: 'ACTIVE', templateKey: version.templateKey, version: version.version },
        });
        if (version.templateType === 'CERTIFICATE') {
            const queued = await this.prisma.certificate.findMany({ where: { productClass: version.templateKey, status: 'QUEUED' } });
            for (const cert of queued) {
                await this.renderAndIssue(cert.id, activated, input.approverUserId);
            }
        }
        return activated;
    }
    async listTemplates(productClass) {
        return this.prisma.documentTemplate.findMany({ where: { templateType: 'CERTIFICATE', templateKey: productClass }, orderBy: [{ templateKey: 'asc' }, { version: 'desc' }] });
    }
    async listPendingTemplates() {
        return this.prisma.documentTemplate.findMany({ where: { templateType: 'CERTIFICATE', status: 'DRAFT', workflowInstanceId: { not: null } }, orderBy: { createdAt: 'asc' } });
    }
    async issueOrQueueCertificate(input) {
        const certificate = await this.prisma.certificate.create({
            data: {
                investorId: input.investorId,
                productAccountId: input.productAccountId,
                ndMandateAccountId: input.ndMandateAccountId,
                productClass: input.productClass,
                status: 'QUEUED',
                dataSnapshot: input.dataSnapshot,
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
    async reissueCertificate(certificateId, actorUserId) {
        await this.assertCapability(actorUserId, 'CERTIFICATE_TEMPLATE_MANAGEMENT', 'INITIATE', 'reissue an investment certificate');
        const cert = await this.prisma.certificate.findUniqueOrThrow({ where: { id: certificateId } });
        if (cert.status !== 'ISSUED' || !cert.pdfBytes) {
            throw new certificate_types_1.CertificateError(`Certificate ${certificateId} is ${cert.status}, not ISSUED -- nothing to reissue yet (it will auto-issue once a template activates).`);
        }
        await this.logCommunication(cert.investorId, cert.certificateNumber, actorUserId, 'Reissued');
        return cert;
    }
    async listCertificates(investorId) {
        return this.prisma.certificate.findMany({ where: { investorId }, orderBy: { createdAt: 'desc' } });
    }
    async getCertificate(id) {
        return this.prisma.certificate.findUniqueOrThrow({ where: { id } });
    }
    async getCertificatePdfForInvestor(certificateId, investorId) {
        const cert = await this.prisma.certificate.findUniqueOrThrow({ where: { id: certificateId } });
        if (cert.investorId !== investorId) {
            throw new certificate_types_1.CertificateError('This certificate does not belong to the requesting investor.');
        }
        if (cert.status !== 'ISSUED' || !cert.pdfBytes) {
            throw new certificate_types_1.CertificateError(`Certificate ${certificateId} is ${cert.status} -- not yet issued (it queues until a template activates for this product class).`);
        }
        return cert.pdfBytes;
    }
    async getCertificatePdf(certificateId) {
        const cert = await this.prisma.certificate.findUniqueOrThrow({ where: { id: certificateId } });
        if (cert.status !== 'ISSUED' || !cert.pdfBytes) {
            throw new certificate_types_1.CertificateError(`Certificate ${certificateId} is ${cert.status} -- not yet issued.`);
        }
        return cert.pdfBytes;
    }
    async renderAndIssue(certificateId, template, actorUserId) {
        const cert = await this.prisma.certificate.findUniqueOrThrow({ where: { id: certificateId } });
        const investor = await this.prisma.investor.findUniqueOrThrow({ where: { investorId: cert.investorId } });
        const letterheadTemplate = await this.letterhead.getActiveContent();
        const [{ nextval }] = await this.prisma.$queryRaw `SELECT nextval('certificate_number_seq')`;
        const certificateNumber = `CERT-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${nextval.toString().padStart(4, '0')}`;
        const w = new pdf_writer_1.PdfWriter(await pdf_lib_1.PDFDocument.create());
        await w.init();
        w.letterheadHeader(letterheadTemplate, CLASS_LABELS[cert.productClass]);
        w.gap();
        w.centeredLine(`Certificate No: ${certificateNumber}`, { size: 12 });
        w.gap();
        w.kv('Investor', investor.fullLegalName);
        w.kv('Investor ID', investor.investorId);
        w.kv('Issue date', new Date().toISOString().slice(0, 10));
        w.gap();
        const snapshot = cert.dataSnapshot;
        if (cert.productClass === 'HF_UNIT_NAV') {
            const s = snapshot;
            w.heading('Units Allotted');
            w.kv('Units allotted', s.unitsAllotted.toLocaleString(undefined, { maximumFractionDigits: 4 }));
            w.kv('NAV per unit at allotment', `NGN ${s.navPerUnitAtAllotment.toLocaleString(undefined, { maximumFractionDigits: 4 })}`);
            w.kv('Allotment date', s.allotmentDate);
        }
        else if (cert.productClass === 'POOL_ND_PSR') {
            const s = snapshot;
            w.heading('Capital / Profit-Sharing Terms');
            w.kv('Principal', (0, pdf_writer_1.kobo)(BigInt(s.principalKobo)));
            w.kv('Tenor', s.tenorLabel);
            w.kv('Profit-Sharing Ratio (PSR)', s.investorRatioPct !== null && s.mudaribRatioPct !== null ? `${(s.investorRatioPct * 100).toFixed(1)}% investor / ${(s.mudaribRatioPct * 100).toFixed(1)}% mudarib` : '—');
            w.kv('Target return — benchmark only, not guaranteed', s.targetReturnPct !== null ? `${(s.targetReturnPct * 100).toFixed(2)}% p.a.` : '—');
        }
        else {
            const s = snapshot;
            w.heading('Wakalah Fee & Expected-Profit Terms');
            w.kv('Principal', (0, pdf_writer_1.kobo)(BigInt(s.principalKobo)));
            w.kv('Tenor', s.tenorLabel);
            w.kv('Wakalah fee rate (p.a.)', s.wakalahFeeRatePa !== null ? `${(s.wakalahFeeRatePa * 100).toFixed(2)}%` : '—');
            w.kv('Expected profit — benchmark only, not guaranteed', s.expectedProfitPct !== null ? `${(s.expectedProfitPct * 100).toFixed(2)}% p.a.` : '—');
        }
        w.gap();
        w.heading('Important Disclosures');
        w.footer(template.disclaimerText);
        w.footer(template.secRuleDisclaimer);
        if (letterheadTemplate)
            w.footer(letterheadTemplate.footerDisclaimer);
        const pdfBytes = await w.save();
        const updated = await this.prisma.certificate.update({
            where: { id: cert.id },
            data: { certificateNumber, status: 'ISSUED', issuedAt: new Date(), pdfBytes: Buffer.from(pdfBytes), templateId: template.id },
        });
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
    async logCommunication(investorId, certificateNumber, actorUserId, verb) {
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
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'certificate_activity', entityId: activity, after: { functionCode, level } });
            throw new certificate_types_1.CertificateError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.CertificateService = CertificateService;
exports.CertificateService = CertificateService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService,
        letterhead_service_1.LetterheadService])
], CertificateService);
//# sourceMappingURL=certificate.service.js.map