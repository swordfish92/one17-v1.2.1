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
exports.DocumentTransmissionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const notification_service_1 = require("../notification/notification.service");
const task_service_1 = require("../task/task.service");
const document_transmission_types_1 = require("./document-transmission.types");
let DocumentTransmissionService = class DocumentTransmissionService {
    prisma;
    audit;
    delegation;
    notification;
    task;
    constructor(prisma, audit, delegation, notification, task) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
        this.notification = notification;
        this.task = task;
    }
    async transmitDocument(input, actorUserId) {
        await this.assertCapability(actorUserId, 'MD_DOCUMENT_TRANSMISSION', 'INITIATE', 'transmit a document to named officers');
        if (input.recipientUserIds.length === 0) {
            throw new document_transmission_types_1.DocumentTransmissionError('At least one recipient is required.');
        }
        const document = await this.prisma.transmittedDocument.create({
            data: { title: input.title, fileReference: input.fileReference, docType: input.docType, transmittedByUserId: actorUserId },
        });
        for (const recipientUserId of input.recipientUserIds) {
            const recipientEmployee = await this.prisma.employee.findFirst({ where: { appUserId: recipientUserId } });
            let taskId;
            if (recipientEmployee) {
                const task = await this.task.systemAssignTask({
                    assigneeEmployeeId: recipientEmployee.id,
                    assignedByUserId: actorUserId,
                    title: `Acknowledge transmitted document: ${input.title}`,
                    linkPath: '/governance/board-directives',
                });
                taskId = task.id;
            }
            await this.prisma.transmittedDocumentRecipient.upsert({
                where: { documentId_recipientUserId: { documentId: document.id, recipientUserId } },
                create: { documentId: document.id, recipientUserId, taskId },
                update: {},
            });
            await this.notification.create({
                recipientUserId,
                type: 'GENERIC',
                title: 'Document transmitted to you',
                body: `"${input.title}" has been transmitted to you for acknowledgment.`,
                linkPath: '/governance/board-directives',
            });
        }
        await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'transmitted_document', entityId: document.id, after: { title: input.title, recipientCount: input.recipientUserIds.length } });
        return document;
    }
    async acknowledgeTransmission(documentId, actorUserId) {
        const recipient = await this.prisma.transmittedDocumentRecipient.findUnique({
            where: { documentId_recipientUserId: { documentId, recipientUserId: actorUserId } },
        });
        if (!recipient) {
            throw new document_transmission_types_1.DocumentTransmissionError(`Document ${documentId} was never transmitted to this user -- nothing to acknowledge.`);
        }
        if (recipient.acknowledgedAt) {
            throw new document_transmission_types_1.DocumentTransmissionError(`This transmission was already acknowledged at ${recipient.acknowledgedAt.toISOString()}.`);
        }
        const updated = await this.prisma.transmittedDocumentRecipient.update({ where: { id: recipient.id }, data: { acknowledgedAt: new Date() } });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'transmitted_document_recipient', entityId: recipient.id, after: { acknowledgedAt: updated.acknowledgedAt } });
        return updated;
    }
    async listDocumentsForViewer(actorUserId) {
        const { eligible } = await this.delegation.hasCapability(actorUserId, 'MD_DOCUMENT_TRANSMISSION', 'VIEW');
        if (eligible) {
            return this.prisma.transmittedDocument.findMany({
                orderBy: { createdAt: 'desc' },
                include: { transmittedBy: { select: { displayName: true } }, recipients: { select: { recipientUserId: true, acknowledgedAt: true, createdAt: true } } },
            });
        }
        return this.prisma.transmittedDocument.findMany({
            where: { recipients: { some: { recipientUserId: actorUserId } } },
            orderBy: { createdAt: 'desc' },
            include: { transmittedBy: { select: { displayName: true } }, recipients: { where: { recipientUserId: actorUserId } } },
        });
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'document_transmission_activity', entityId: activity, after: { functionCode, level } });
            throw new document_transmission_types_1.DocumentTransmissionError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.DocumentTransmissionService = DocumentTransmissionService;
exports.DocumentTransmissionService = DocumentTransmissionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        notification_service_1.NotificationService,
        task_service_1.TaskService])
], DocumentTransmissionService);
//# sourceMappingURL=document-transmission.service.js.map