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
exports.RbacService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const workflow_service_1 = require("../workflow/workflow.service");
const auth_service_1 = require("../auth/auth.service");
const rbac_types_1 = require("./rbac.types");
let RbacService = class RbacService {
    prisma;
    audit;
    workflow;
    authService;
    constructor(prisma, audit, workflow, authService) {
        this.prisma = prisma;
        this.audit = audit;
        this.workflow = workflow;
        this.authService = authService;
    }
    async createStaffUser({ email, displayName, initialPassword, createdByUserId }) {
        const existing = await this.prisma.appUser.findUnique({ where: { email } });
        if (existing) {
            throw new Error(`A user with email ${email} already exists.`);
        }
        const created = await this.prisma.appUser.create({ data: { email, displayName } });
        if (initialPassword) {
            await this.authService.setPassword(created.id, initialPassword);
        }
        await this.audit.record({
            actorUserId: createdByUserId,
            action: 'CREATE',
            entityType: 'app_user',
            entityId: created.id,
            after: { email, displayName },
        });
        return { id: created.id, email: created.email, displayName: created.displayName, status: created.status };
    }
    async proposeAssignRole(input) {
        return this.workflow.initiate({
            workflowTypeCode: 'USER_ROLE_ASSIGNMENT',
            entityType: 'user_role_proposal',
            entityId: `${input.userId}:${input.roleCode}`,
            initiatedByUserId: input.assignedById,
            scenario: 'STANDARD',
        });
    }
    async approveAssignRole(workflowInstanceId, approverUserId, target) {
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        if (updated.status !== 'APPROVED')
            return null;
        return this.assignRole({
            userId: target.userId,
            roleCode: target.roleCode,
            assignedById: approverUserId,
        });
    }
    async assignRole({ userId, roleCode, assignedById }) {
        const existing = await this.prisma.userRole.findMany({
            where: { userId },
            select: { roleCode: true },
        });
        const existingCodes = existing.map((r) => r.roleCode);
        if (existingCodes.includes(roleCode)) {
            throw new Error(`User already holds role ${roleCode}`);
        }
        const conflictReason = await this.findConflictReason(roleCode, existingCodes);
        if (conflictReason) {
            await this.audit.record({
                actorUserId: assignedById,
                action: 'PERMISSION_DENIED',
                entityType: 'user_role',
                entityId: userId,
                after: {
                    attemptedRoleCode: roleCode,
                    existingCodes,
                    reason: conflictReason,
                },
            });
            throw new rbac_types_1.SodConflictError(conflictReason, userId, roleCode);
        }
        const created = await this.prisma.$transaction(async (tx) => {
            return tx.userRole.create({
                data: { userId, roleCode, assignedById },
            });
        });
        await this.audit.record({
            actorUserId: assignedById,
            action: 'CREATE',
            entityType: 'user_role',
            entityId: created.id,
            after: { userId, roleCode },
        });
        return created;
    }
    async findConflictReason(roleCode, existingCodes) {
        if (existingCodes.length === 0)
            return null;
        const roles = await this.prisma.role.findMany({
            where: { code: { in: [roleCode, ...existingCodes] } },
        });
        const byCode = new Map(roles.map((r) => [r.code, r]));
        const incoming = byCode.get(roleCode);
        const existingRoles = existingCodes.map((c) => byCode.get(c));
        if (incoming?.isExclusive || existingRoles.some((r) => r.isExclusive)) {
            const exclusiveRole = incoming?.isExclusive
                ? incoming
                : existingRoles.find((r) => r.isExclusive);
            return `${exclusiveRole.code} cannot be combined with any other role (exclusive role).`;
        }
        const explicitConflict = await this.prisma.roleConflict.findFirst({
            where: {
                OR: [
                    { roleACode: roleCode, roleBCode: { in: existingCodes } },
                    { roleBCode: roleCode, roleACode: { in: existingCodes } },
                ],
            },
        });
        if (explicitConflict)
            return explicitConflict.reason;
        const incomingExcludesApprovers = incoming?.excludesAnyApprover ?? false;
        const existingHasExcluder = existingRoles.some((r) => r.excludesAnyApprover);
        if (incomingExcludesApprovers || existingHasExcluder) {
            const checkAgainst = incomingExcludesApprovers
                ? existingCodes
                : [roleCode];
            const approverAmong = await this.prisma.rolePermission.findFirst({
                where: { roleCode: { in: checkAgainst }, level: 'APPROVE' },
            });
            if (approverAmong) {
                const excluderRole = incomingExcludesApprovers
                    ? incoming
                    : existingRoles.find((r) => r.excludesAnyApprover);
                return `${excluderRole.code} cannot combine with a role holding approval rights on transactions.`;
            }
        }
        return null;
    }
};
exports.RbacService = RbacService;
exports.RbacService = RbacService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        workflow_service_1.WorkflowEngineService,
        auth_service_1.AuthService])
], RbacService);
//# sourceMappingURL=rbac.service.js.map