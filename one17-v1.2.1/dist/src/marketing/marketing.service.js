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
exports.MarketingService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const workflow_service_1 = require("../workflow/workflow.service");
const delegation_service_1 = require("../delegation/delegation.service");
const marketing_types_1 = require("./marketing.types");
let MarketingService = class MarketingService {
    prisma;
    audit;
    workflow;
    delegation;
    constructor(prisma, audit, workflow, delegation) {
        this.prisma = prisma;
        this.audit = audit;
        this.workflow = workflow;
        this.delegation = delegation;
    }
    async uploadResource(input) {
        await this.assertCapability(input.proposedByUserId, 'MARKETING_RESOURCE', 'INITIATE', 'upload a marketing resource');
        const created = await this.prisma.marketingResource.create({
            data: {
                title: input.title,
                resourceType: input.resourceType,
                fileReference: input.fileReference,
                version: input.version ?? 1,
                status: 'DRAFT',
                proposedByUserId: input.proposedByUserId,
            },
        });
        let instance;
        try {
            instance = await this.workflow.initiate({
                workflowTypeCode: 'MARKETING_RESOURCE_APPROVAL',
                entityType: 'marketing_resource',
                entityId: created.id,
                initiatedByUserId: input.proposedByUserId,
                scenario: 'STANDARD',
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId: input.proposedByUserId,
                action: 'INITIATE_FAILED_COMPENSATED',
                entityType: 'marketing_resource',
                entityId: created.id,
                after: { workflowTypeCode: 'MARKETING_RESOURCE_APPROVAL', reason: err.message },
            });
            await this.prisma.marketingResource.delete({ where: { id: created.id } });
            throw err;
        }
        return this.prisma.marketingResource.update({ where: { id: created.id }, data: { workflowInstanceId: instance.id } });
    }
    async approveResource(workflowInstanceId, approverUserId) {
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        if (updated.status !== 'APPROVED')
            return null;
        const resource = await this.prisma.marketingResource.update({
            where: { workflowInstanceId },
            data: { status: 'ACTIVE', approvedByUserId: approverUserId },
        });
        await this.audit.record({
            actorUserId: approverUserId,
            action: 'UPDATE',
            entityType: 'marketing_resource',
            entityId: resource.id,
            after: { status: 'ACTIVE' },
        });
        return resource;
    }
    async rejectResource(workflowInstanceId, approverUserId, notes) {
        const rejected = await this.workflow.reject(workflowInstanceId, approverUserId, notes);
        await this.prisma.marketingResource.update({ where: { workflowInstanceId }, data: { status: 'SUPERSEDED' } });
        return rejected;
    }
    async listResources() {
        return this.prisma.marketingResource.findMany({ orderBy: { createdAt: 'desc' } });
    }
    async listActiveResources() {
        return this.prisma.marketingResource.findMany({ where: { status: 'ACTIVE' }, orderBy: { createdAt: 'desc' } });
    }
    async subscribe(input) {
        const existing = await this.prisma.marketingSubscriber.findUnique({ where: { email: input.email } });
        if (existing) {
            return this.prisma.marketingSubscriber.update({
                where: { email: input.email },
                data: { subscribed: true, unsubscribedAt: null, segments: input.segments, fullName: input.fullName ?? existing.fullName },
            });
        }
        return this.prisma.marketingSubscriber.create({
            data: {
                email: input.email,
                fullName: input.fullName,
                segments: input.segments,
                unsubscribeToken: (0, crypto_1.randomBytes)(24).toString('hex'),
            },
        });
    }
    async unsubscribe(input) {
        const subscriber = await this.prisma.marketingSubscriber.findUnique({ where: { email: input.email } });
        if (!subscriber || subscriber.unsubscribeToken !== input.token) {
            throw new marketing_types_1.MarketingError('Invalid unsubscribe link.');
        }
        return this.prisma.marketingSubscriber.update({
            where: { email: input.email },
            data: { subscribed: false, unsubscribedAt: new Date() },
        });
    }
    async initiateSend(input) {
        await this.assertCapability(input.initiatedByUserId, 'MARKETING_SEND', 'INITIATE', 'initiate a mass-mail send');
        if (input.resourceId) {
            const resource = await this.prisma.marketingResource.findUniqueOrThrow({ where: { id: input.resourceId } });
            if (resource.status !== 'ACTIVE') {
                throw new marketing_types_1.MarketingError(`Resource "${resource.title}" is ${resource.status}, not ACTIVE — a resource must be approved before it can be used in a distribution (invariant 28b).`);
            }
        }
        const created = await this.prisma.marketingSend.create({
            data: {
                subject: input.subject,
                body: input.body,
                targetSegments: input.targetSegments,
                resourceId: input.resourceId,
                status: 'PENDING_APPROVAL',
                initiatedByUserId: input.initiatedByUserId,
            },
        });
        let instance;
        try {
            instance = await this.workflow.initiate({
                workflowTypeCode: 'MARKETING_SEND_APPROVAL',
                entityType: 'marketing_send',
                entityId: created.id,
                initiatedByUserId: input.initiatedByUserId,
                scenario: 'STANDARD',
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId: input.initiatedByUserId,
                action: 'INITIATE_FAILED_COMPENSATED',
                entityType: 'marketing_send',
                entityId: created.id,
                after: { workflowTypeCode: 'MARKETING_SEND_APPROVAL', reason: err.message },
            });
            await this.prisma.marketingSend.delete({ where: { id: created.id } });
            throw err;
        }
        return this.prisma.marketingSend.update({ where: { id: created.id }, data: { workflowInstanceId: instance.id } });
    }
    async approveSend(workflowInstanceId, approverUserId) {
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        if (updated.status !== 'APPROVED')
            return null;
        const send = await this.prisma.marketingSend.findUniqueOrThrow({ where: { workflowInstanceId } });
        const recipients = await this.prisma.marketingSubscriber.findMany({
            where: { subscribed: true, segments: { hasSome: send.targetSegments } },
        });
        const now = new Date();
        await this.prisma.$transaction([
            this.prisma.clientCommunication.createMany({
                data: recipients.map((r) => ({
                    channel: 'EMAIL',
                    direction: 'OUTBOUND',
                    subject: send.subject,
                    summary: send.body,
                    loggedByUserId: approverUserId,
                    occurredAt: now,
                })),
            }),
            this.prisma.marketingSend.update({
                where: { id: send.id },
                data: { status: 'SENT', approvedByUserId: approverUserId, sentAt: now, recipientCount: recipients.length },
            }),
        ]);
        await this.audit.record({
            actorUserId: approverUserId,
            action: 'UPDATE',
            entityType: 'marketing_send',
            entityId: send.id,
            after: { status: 'SENT', recipientCount: recipients.length },
        });
        return this.prisma.marketingSend.findUniqueOrThrow({ where: { id: send.id } });
    }
    async rejectSend(workflowInstanceId, approverUserId, notes) {
        const rejected = await this.workflow.reject(workflowInstanceId, approverUserId, notes);
        await this.prisma.marketingSend.update({ where: { workflowInstanceId }, data: { status: 'REJECTED' } });
        return rejected;
    }
    async listSends() {
        return this.prisma.marketingSend.findMany({ orderBy: { createdAt: 'desc' } });
    }
    async getSubscriberStats() {
        const [total, subscribed] = await Promise.all([
            this.prisma.marketingSubscriber.count(),
            this.prisma.marketingSubscriber.count({ where: { subscribed: true } }),
        ]);
        return { total, subscribed, unsubscribed: total - subscribed };
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({
                actorUserId: userId,
                action: 'PERMISSION_DENIED',
                entityType: 'marketing_activity',
                entityId: activity,
                after: { functionCode, level },
            });
            throw new marketing_types_1.MarketingError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.MarketingService = MarketingService;
exports.MarketingService = MarketingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        workflow_service_1.WorkflowEngineService,
        delegation_service_1.DelegationService])
], MarketingService);
//# sourceMappingURL=marketing.service.js.map