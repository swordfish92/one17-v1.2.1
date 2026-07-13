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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DelegationController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const ops_api_types_1 = require("./ops-api.types");
let DelegationController = class DelegationController {
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
    async list() {
        return this.prisma.delegationOfAuthority.findMany({
            orderBy: { createdAt: 'desc' },
            take: 200,
            include: {
                delegate: { select: { displayName: true, email: true } },
                delegatedBy: { select: { displayName: true, email: true } },
            },
        });
    }
    async listFunctions() {
        return this.prisma.platformFunction.findMany({ orderBy: { code: 'asc' } });
    }
    async listUsers() {
        return this.prisma.appUser.findMany({
            where: { status: 'ACTIVE' },
            select: { id: true, displayName: true, email: true },
            orderBy: { displayName: 'asc' },
        });
    }
    async requestGrant(dto, user) {
        const grant = await this.delegation.requestGrant({
            functionCode: dto.functionCode,
            delegateUserId: dto.delegateUserId,
            delegatedByUserId: user.userId,
            limitKobo: dto.limitKobo !== undefined ? BigInt(dto.limitKobo) : undefined,
            effectiveFrom: dto.effectiveFrom ? new Date(dto.effectiveFrom) : undefined,
            effectiveTo: dto.effectiveTo ? new Date(dto.effectiveTo) : undefined,
            reason: dto.reason,
            boardInstrumentRef: dto.boardInstrumentRef,
        });
        let instance;
        try {
            instance = await this.workflow.initiate({
                workflowTypeCode: 'DELEGATION_GRANT',
                entityType: 'delegation_of_authority',
                entityId: grant.id,
                initiatedByUserId: user.userId,
                scenario: 'STANDARD',
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId: user.userId,
                action: 'INITIATE_FAILED_COMPENSATED',
                entityType: 'delegation_of_authority',
                entityId: grant.id,
                after: { workflowTypeCode: 'DELEGATION_GRANT', reason: err.message },
            });
            await this.delegation.discardPendingGrant(grant.id);
            throw err;
        }
        await this.delegation.attachWorkflowInstance(grant.id, instance.id);
        return { grant, workflowInstance: instance };
    }
    async revoke(id, dto, user) {
        return this.delegation.revoke(id, user.userId, dto.reason);
    }
};
exports.DelegationController = DelegationController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DelegationController.prototype, "list", null);
__decorate([
    (0, common_1.Get)('functions'),
    (0, requires_capability_decorator_1.RequiresCapability)('DELEGATION_GRANT_INITIATION', 'INITIATE'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DelegationController.prototype, "listFunctions", null);
__decorate([
    (0, common_1.Get)('users'),
    (0, requires_capability_decorator_1.RequiresCapability)('DELEGATION_GRANT_INITIATION', 'INITIATE'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DelegationController.prototype, "listUsers", null);
__decorate([
    (0, common_1.Post)(),
    (0, requires_capability_decorator_1.RequiresCapability)('DELEGATION_GRANT_INITIATION', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.RequestDelegationGrantDto, Object]),
    __metadata("design:returntype", Promise)
], DelegationController.prototype, "requestGrant", null);
__decorate([
    (0, common_1.Post)(':id/revoke'),
    (0, requires_capability_decorator_1.RequiresCapability)('DELEGATION_GRANT_INITIATION', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.RevokeDelegationGrantDto, Object]),
    __metadata("design:returntype", Promise)
], DelegationController.prototype, "revoke", null);
exports.DelegationController = DelegationController = __decorate([
    (0, common_1.Controller)('delegations'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService])
], DelegationController);
//# sourceMappingURL=delegation.controller.js.map