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
exports.LetterService = void 0;
const common_1 = require("@nestjs/common");
const pdf_lib_1 = require("pdf-lib");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const letterhead_service_1 = require("../letterhead/letterhead.service");
const pdf_writer_1 = require("../pdf/pdf-writer");
const letter_types_1 = require("./letter.types");
const LETTER_TYPE_LABELS = {
    WELCOME: 'Welcome Letter',
    MATURITY_NOTICE: 'Maturity Notice',
    ROLLOVER_CONFIRMATION: 'Rollover Confirmation',
    AD_HOC: 'Official Letter',
    BANK_INSTRUCTION: 'Bank Instruction Letter',
    TAX_REMITTANCE_INSTRUCTION: 'Tax Remittance Instruction Letter',
};
let LetterService = class LetterService {
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
        }
        catch (err) {
            await this.audit.record({
                actorUserId: input.proposedByUserId, action: 'INITIATE_FAILED_COMPENSATED', entityType: 'document_template', entityId: created.id,
                after: { workflowTypeCode: 'LETTER_TEMPLATE_APPROVAL', reason: err.message },
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
        return activated;
    }
    async listTemplates(letterType) {
        return this.prisma.documentTemplate.findMany({ where: { templateType: 'LETTER', templateKey: letterType }, orderBy: [{ templateKey: 'asc' }, { version: 'desc' }] });
    }
    async listPendingTemplates() {
        return this.prisma.documentTemplate.findMany({ where: { templateType: 'LETTER', status: 'DRAFT', workflowInstanceId: { not: null } }, orderBy: { createdAt: 'asc' } });
    }
    async generateLetter(input) {
        await this.assertCapability(input.generatedByUserId, 'LETTER_ISSUANCE', 'INITIATE', 'generate a letter');
        const template = await this.prisma.documentTemplate.findFirst({ where: { templateType: 'LETTER', templateKey: input.letterType, status: 'ACTIVE' } });
        if (!template || !template.bodyTemplate) {
            throw new letter_types_1.LetterError(`No ACTIVE letter template exists for type ${input.letterType} yet -- Compliance must propose and MD_CEO approve one before letters of this type can be generated.`);
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
        }
        catch (err) {
            await this.audit.record({
                actorUserId: input.generatedByUserId, action: 'INITIATE_FAILED_COMPENSATED', entityType: 'letter_instance', entityId: created.id,
                after: { workflowTypeCode: 'LETTER_ISSUANCE_APPROVAL', reason: err.message },
            });
            await this.prisma.letterInstance.delete({ where: { id: created.id } });
            throw err;
        }
        return this.prisma.letterInstance.update({ where: { id: created.id }, data: { workflowInstanceId: instance.id } });
    }
    async approveLetterInstance(input) {
        const updated = await this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
        if (updated.status !== 'APPROVED')
            return null;
        const letter = await this.prisma.letterInstance.findFirstOrThrow({ where: { workflowInstanceId: input.workflowInstanceId } });
        const letterheadTemplate = await this.letterhead.getActiveContent();
        const w = new pdf_writer_1.PdfWriter(await pdf_lib_1.PDFDocument.create());
        await w.init();
        w.letterheadHeader(letterheadTemplate, LETTER_TYPE_LABELS[letter.letterType] ?? letter.letterType);
        w.kv('Date', new Date().toISOString().slice(0, 10));
        w.gap();
        w.paragraph(letter.mergedBody);
        if (letterheadTemplate)
            w.footer(letterheadTemplate.footerDisclaimer);
        const pdfBytes = await w.save();
        const issued = await this.prisma.letterInstance.update({
            where: { id: letter.id },
            data: { status: 'ISSUED', issuedAt: new Date(), approvedByUserId: input.approverUserId, pdfBytes: Buffer.from(pdfBytes) },
        });
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
                    subject: LETTER_TYPE_LABELS[letter.letterType] ?? letter.letterType,
                    summary: `Issued ${letter.letterType} letter -- email transport not yet instrumented (logged-only, matches marketing-send/certificate convention).`,
                    loggedByUserId: input.approverUserId, occurredAt: new Date(),
                },
            });
        }
        return issued;
    }
    async rejectLetterInstance(input) {
        await this.workflow.reject(input.workflowInstanceId, input.actorUserId, input.notes);
        const letter = await this.prisma.letterInstance.findFirstOrThrow({ where: { workflowInstanceId: input.workflowInstanceId } });
        return this.prisma.letterInstance.update({ where: { id: letter.id }, data: { status: 'REJECTED', rejectionNotes: input.notes } });
    }
    async listLetterInstances(filter = {}) {
        return this.prisma.letterInstance.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
    }
    async listPendingLetterInstances() {
        return this.prisma.letterInstance.findMany({ where: { status: 'PENDING_APPROVAL' }, orderBy: { createdAt: 'asc' } });
    }
    async getLetterInstance(id) {
        return this.prisma.letterInstance.findUniqueOrThrow({ where: { id } });
    }
    async getLetterInstancePdf(id) {
        const letter = await this.prisma.letterInstance.findUniqueOrThrow({ where: { id } });
        if (letter.status !== 'ISSUED' || !letter.pdfBytes) {
            throw new letter_types_1.LetterError(`Letter instance ${id} is ${letter.status} -- not yet issued.`);
        }
        return letter.pdfBytes;
    }
    async getLetterInstancePdfForInvestor(id, investorId) {
        const letter = await this.prisma.letterInstance.findUniqueOrThrow({ where: { id } });
        if (letter.investorId !== investorId) {
            throw new letter_types_1.LetterError('This letter does not belong to the requesting investor.');
        }
        if (letter.status !== 'ISSUED' || !letter.pdfBytes) {
            throw new letter_types_1.LetterError(`Letter instance ${id} is ${letter.status} -- not yet issued.`);
        }
        return letter.pdfBytes;
    }
    async getLetterInstancePdfForCounterparty(id, counterpartyId) {
        const letter = await this.prisma.letterInstance.findUniqueOrThrow({ where: { id } });
        if (letter.counterpartyId !== counterpartyId) {
            throw new letter_types_1.LetterError('This letter does not belong to the requesting counterparty.');
        }
        if (letter.status !== 'ISSUED' || !letter.pdfBytes) {
            throw new letter_types_1.LetterError(`Letter instance ${id} is ${letter.status} -- not yet issued.`);
        }
        return letter.pdfBytes;
    }
    async buildMergeContext(input) {
        const context = { date: new Date().toISOString().slice(0, 10), ...(input.extraMergeFields ?? {}) };
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
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'letter_activity', entityId: activity, after: { functionCode, level } });
            throw new letter_types_1.LetterError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.LetterService = LetterService;
exports.LetterService = LetterService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService,
        letterhead_service_1.LetterheadService])
], LetterService);
function renderMergeFields(template, context) {
    return template.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (_match, token) => context[token] ?? `[missing: ${token}]`);
}
//# sourceMappingURL=letter.service.js.map