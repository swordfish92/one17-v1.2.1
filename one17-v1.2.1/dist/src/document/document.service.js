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
exports.DocumentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const delegation_service_1 = require("../delegation/delegation.service");
const audit_service_1 = require("../audit/audit.service");
let DocumentService = class DocumentService {
    prisma;
    delegation;
    audit;
    constructor(prisma, delegation, audit) {
        this.prisma = prisma;
        this.delegation = delegation;
        this.audit = audit;
    }
    async assertCapability(userId, action) {
        const { eligible } = await this.delegation.hasCapability(userId, 'DOCUMENT_REGISTER', 'INITIATE');
        if (!eligible) {
            throw new Error(`Lacks INITIATE authority on DOCUMENT_REGISTER to ${action}.`);
        }
    }
    async attach(input, actorUserId) {
        await this.assertCapability(actorUserId, 'attach a document to the register');
        const created = await this.prisma.documentRegisterEntry.create({
            data: {
                entityType: input.entityType,
                entityId: input.entityId,
                documentType: input.documentType,
                fileReference: input.fileReference,
                uploadedByUserId: actorUserId,
            },
        });
        await this.audit.record({
            actorUserId,
            action: 'CREATE',
            entityType: 'document_register_entry',
            entityId: created.id,
            after: { entityType: input.entityType, entityId: input.entityId, documentType: input.documentType },
        });
        return created;
    }
    async attachFromPortal(input, counterpartyId) {
        const created = await this.prisma.documentRegisterEntry.create({
            data: {
                entityType: input.entityType,
                entityId: input.entityId,
                documentType: input.documentType,
                fileReference: input.fileReference,
                uploadedByCounterpartyId: counterpartyId,
            },
        });
        await this.audit.record({
            action: 'CREATE',
            entityType: 'document_register_entry',
            entityId: created.id,
            after: { entityType: input.entityType, entityId: input.entityId, documentType: input.documentType, uploadedByCounterpartyId: counterpartyId },
        });
        return created;
    }
    async listRequiredDocumentTypes(applicationType) {
        const rows = await this.prisma.requiredDocumentConfig.findMany({
            where: { applicationType, status: 'ACTIVE' },
            orderBy: { documentType: 'asc' },
        });
        return rows.map((r) => r.documentType);
    }
    async getChecklistStatus(applicationType, entityType, entityId) {
        const [required, uploaded] = await Promise.all([
            this.listRequiredDocumentTypes(applicationType),
            this.prisma.documentRegisterEntry.findMany({ where: { entityType, entityId }, select: { documentType: true } }),
        ]);
        const uploadedTypes = new Set(uploaded.map((u) => u.documentType));
        const missing = required.filter((t) => !uploadedTypes.has(t));
        return { required, uploadedTypes: [...uploadedTypes], missing, complete: missing.length === 0 };
    }
    async addRequiredDocumentType(input, actorUserId) {
        await this.assertCapability(actorUserId, 'define a required-document checklist entry');
        const existing = await this.prisma.requiredDocumentConfig.findUnique({
            where: { applicationType_documentType: { applicationType: input.applicationType, documentType: input.documentType } },
        });
        if (existing) {
            if (existing.status === 'ACTIVE')
                return existing;
            return this.prisma.requiredDocumentConfig.update({ where: { id: existing.id }, data: { status: 'ACTIVE' } });
        }
        const created = await this.prisma.requiredDocumentConfig.create({
            data: { applicationType: input.applicationType, documentType: input.documentType, status: 'ACTIVE', createdByUserId: actorUserId },
        });
        await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'required_document_config', entityId: created.id, after: input });
        return created;
    }
    async retireRequiredDocumentType(id, actorUserId) {
        await this.assertCapability(actorUserId, 'retire a required-document checklist entry');
        const updated = await this.prisma.requiredDocumentConfig.update({ where: { id }, data: { status: 'SUPERSEDED' } });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'required_document_config', entityId: id, after: { status: 'SUPERSEDED' } });
        return updated;
    }
    async listRequiredDocumentConfig(applicationType) {
        return this.prisma.requiredDocumentConfig.findMany({
            where: { applicationType, status: 'ACTIVE' },
            orderBy: [{ applicationType: 'asc' }, { documentType: 'asc' }],
        });
    }
    async listFor(entityType, entityId) {
        return this.prisma.documentRegisterEntry.findMany({
            where: { entityType, entityId },
            include: { uploadedBy: { select: { displayName: true } } },
            orderBy: { uploadedAt: 'desc' },
        });
    }
    async browse(filter) {
        return this.prisma.documentRegisterEntry.findMany({
            where: {
                entityType: filter.entityType || undefined,
                documentType: filter.documentType ? { contains: filter.documentType, mode: 'insensitive' } : undefined,
            },
            include: { uploadedBy: { select: { displayName: true } } },
            orderBy: { uploadedAt: 'desc' },
            take: 500,
        });
    }
};
exports.DocumentService = DocumentService;
exports.DocumentService = DocumentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        delegation_service_1.DelegationService,
        audit_service_1.AuditService])
], DocumentService);
//# sourceMappingURL=document.service.js.map