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
exports.RbacController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const prisma_service_1 = require("../prisma/prisma.service");
const rbac_service_1 = require("../rbac/rbac.service");
const user_deactivation_service_1 = require("../rbac/user-deactivation.service");
const ops_api_types_1 = require("./ops-api.types");
let RbacController = class RbacController {
    prisma;
    rbac;
    userDeactivation;
    constructor(prisma, rbac, userDeactivation) {
        this.prisma = prisma;
        this.rbac = rbac;
        this.userDeactivation = userDeactivation;
    }
    async listRoles() {
        return this.prisma.role.findMany({ orderBy: { code: 'asc' } });
    }
    async listUsers() {
        return this.prisma.appUser.findMany({
            select: { id: true, displayName: true, email: true, status: true },
            orderBy: { displayName: 'asc' },
        });
    }
    async deactivateUser(id, dto, user) {
        return this.userDeactivation.deactivateUser(id, user.userId, dto.reason);
    }
    async reactivateUser(id, user) {
        return this.userDeactivation.reactivateUser(id, user.userId);
    }
    async listUserRoles(userId) {
        return this.prisma.userRole.findMany({ where: { userId }, orderBy: { roleCode: 'asc' } });
    }
    async listProposals() {
        return this.prisma.workflowInstance.findMany({
            where: { workflowTypeCode: 'USER_ROLE_ASSIGNMENT' },
            orderBy: { createdAt: 'desc' },
            take: 100,
        });
    }
    async proposeAssignment(dto, user) {
        return this.rbac.proposeAssignRole({ userId: dto.userId, roleCode: dto.roleCode, assignedById: user.userId });
    }
    async createStaffUser(dto, user) {
        return this.rbac.createStaffUser({
            email: dto.email,
            displayName: dto.displayName,
            initialPassword: dto.initialPassword,
            createdByUserId: user.userId,
        });
    }
    async listApprovalRules() {
        return this.prisma.workflowType.findMany({
            orderBy: { code: 'asc' },
            include: {
                approvalRules: {
                    where: { chainVersion: { status: 'ACTIVE' } },
                    orderBy: { workflowTypeCode: 'asc' },
                    include: { steps: { orderBy: { stepOrder: 'asc' } } },
                },
            },
        });
    }
    async getCapabilityMatrix() {
        const [grants, roles, functions] = await Promise.all([
            this.prisma.rolePermission.findMany({
                select: { roleCode: true, functionCode: true, level: true, approvalLimitKobo: true },
            }),
            this.prisma.role.findMany({ orderBy: { code: 'asc' }, select: { code: true, name: true, isReadOnly: true } }),
            this.prisma.platformFunction.findMany({ orderBy: { code: 'asc' }, select: { code: true, description: true } }),
        ]);
        return { roles, functions, grants };
    }
};
exports.RbacController = RbacController;
__decorate([
    (0, common_1.Get)('roles'),
    (0, requires_capability_decorator_1.RequiresCapability)('RBAC_CONFIG', 'INITIATE'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RbacController.prototype, "listRoles", null);
__decorate([
    (0, common_1.Get)('users'),
    (0, requires_capability_decorator_1.RequiresCapability)('RBAC_CONFIG', 'INITIATE'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RbacController.prototype, "listUsers", null);
__decorate([
    (0, common_1.Post)('users/:id/deactivate'),
    (0, requires_capability_decorator_1.RequiresCapability)('RBAC_CONFIG', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.DeactivateUserDto, Object]),
    __metadata("design:returntype", Promise)
], RbacController.prototype, "deactivateUser", null);
__decorate([
    (0, common_1.Post)('users/:id/reactivate'),
    (0, requires_capability_decorator_1.RequiresCapability)('RBAC_CONFIG', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], RbacController.prototype, "reactivateUser", null);
__decorate([
    (0, common_1.Get)('user-roles'),
    (0, requires_capability_decorator_1.RequiresCapability)('RBAC_CONFIG', 'INITIATE'),
    __param(0, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RbacController.prototype, "listUserRoles", null);
__decorate([
    (0, common_1.Get)('proposals'),
    (0, requires_capability_decorator_1.RequiresCapability)('RBAC_CONFIG', 'INITIATE'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RbacController.prototype, "listProposals", null);
__decorate([
    (0, common_1.Post)('propose-assignment'),
    (0, requires_capability_decorator_1.RequiresCapability)('RBAC_CONFIG', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.ProposeAssignRoleDto, Object]),
    __metadata("design:returntype", Promise)
], RbacController.prototype, "proposeAssignment", null);
__decorate([
    (0, common_1.Post)('users'),
    (0, requires_capability_decorator_1.RequiresCapability)('RBAC_CONFIG', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.CreateStaffUserDto, Object]),
    __metadata("design:returntype", Promise)
], RbacController.prototype, "createStaffUser", null);
__decorate([
    (0, common_1.Get)('approval-rules'),
    (0, requires_capability_decorator_1.RequiresCapability)('RBAC_CONFIG', 'INITIATE'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RbacController.prototype, "listApprovalRules", null);
__decorate([
    (0, common_1.Get)('capability-matrix'),
    (0, requires_capability_decorator_1.RequiresCapability)('RBAC_CONFIG', 'INITIATE'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RbacController.prototype, "getCapabilityMatrix", null);
exports.RbacController = RbacController = __decorate([
    (0, common_1.Controller)('rbac'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        rbac_service_1.RbacService,
        user_deactivation_service_1.UserDeactivationService])
], RbacController);
//# sourceMappingURL=rbac.controller.js.map