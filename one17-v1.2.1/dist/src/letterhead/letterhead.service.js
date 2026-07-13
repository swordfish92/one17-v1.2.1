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
exports.LetterheadService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const letterhead_types_1 = require("./letterhead.types");
let LetterheadService = class LetterheadService {
    prisma;
    audit;
    delegation;
    workflow;
    constructor(prisma, audit, delegation, workflow) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
        this.workflow = workflow;
    }
    async proposeVersion(input) {
        await this.assertCapability(input.proposedByUserId, 'LETTERHEAD_TEMPLATE_MANAGEMENT', 'INITIATE', 'propose a new letterhead template version');
        const latest = await this.prisma.letterheadTemplate.findFirst({ orderBy: { version: 'desc' } });
        const version = (latest?.version ?? 0) + 1;
        const created = await this.prisma.letterheadTemplate.create({
            data: {
                version,
                status: 'DRAFT',
                companyName: input.companyName,
                addressLine1: input.addressLine1,
                addressLine2: input.addressLine2,
                rcNumber: input.rcNumber,
                secRegistrationLine: input.secRegistrationLine,
                brandPrimaryColorHex: input.brandPrimaryColorHex,
                brandAccentColorHex: input.brandAccentColorHex,
                brandDeepColorHex: input.brandDeepColorHex,
                footerDisclaimer: input.footerDisclaimer,
                proposedByUserId: input.proposedByUserId,
            },
        });
        let instance;
        try {
            instance = await this.workflow.initiate({
                workflowTypeCode: 'LETTERHEAD_TEMPLATE_APPROVAL',
                entityType: 'letterhead_template',
                entityId: created.id,
                initiatedByUserId: input.proposedByUserId,
                scenario: 'STANDARD',
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId: input.proposedByUserId, action: 'INITIATE_FAILED_COMPENSATED', entityType: 'letterhead_template', entityId: created.id,
                after: { workflowTypeCode: 'LETTERHEAD_TEMPLATE_APPROVAL', reason: err.message },
            });
            await this.prisma.letterheadTemplate.delete({ where: { id: created.id } });
            throw err;
        }
        return this.prisma.letterheadTemplate.update({ where: { id: created.id }, data: { workflowInstanceId: instance.id } });
    }
    async approveVersion(input) {
        const updated = await this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
        if (updated.status !== 'APPROVED')
            return null;
        const version = await this.prisma.letterheadTemplate.findFirstOrThrow({ where: { workflowInstanceId: input.workflowInstanceId } });
        const [, activated] = await this.prisma.$transaction([
            this.prisma.letterheadTemplate.updateMany({ where: { status: 'ACTIVE' }, data: { status: 'SUPERSEDED' } }),
            this.prisma.letterheadTemplate.update({ where: { id: version.id }, data: { status: 'ACTIVE', approvedByUserId: input.approverUserId } }),
        ]);
        await this.audit.record({
            actorUserId: input.approverUserId, action: 'UPDATE', entityType: 'letterhead_template', entityId: version.id,
            after: { status: 'ACTIVE', version: version.version },
        });
        return activated;
    }
    async listVersions() {
        return this.prisma.letterheadTemplate.findMany({ orderBy: { version: 'desc' } });
    }
    async listPending() {
        return this.prisma.letterheadTemplate.findMany({ where: { status: 'DRAFT', workflowInstanceId: { not: null } }, orderBy: { createdAt: 'asc' } });
    }
    async getActiveContent() {
        const active = await this.prisma.letterheadTemplate.findFirst({ where: { status: 'ACTIVE' } });
        if (!active)
            return null;
        return {
            companyName: active.companyName,
            addressLine1: active.addressLine1,
            addressLine2: active.addressLine2,
            rcNumber: active.rcNumber,
            secRegistrationLine: active.secRegistrationLine,
            brandPrimaryColorHex: active.brandPrimaryColorHex,
            brandAccentColorHex: active.brandAccentColorHex,
            brandDeepColorHex: active.brandDeepColorHex,
            footerDisclaimer: active.footerDisclaimer,
        };
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'letterhead_activity', entityId: activity, after: { functionCode, level } });
            throw new letterhead_types_1.LetterheadError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.LetterheadService = LetterheadService;
exports.LetterheadService = LetterheadService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService])
], LetterheadService);
//# sourceMappingURL=letterhead.service.js.map