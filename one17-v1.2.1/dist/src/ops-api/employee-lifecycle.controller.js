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
exports.EmployeeLifecycleController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const prisma_service_1 = require("../prisma/prisma.service");
const employee_lifecycle_service_1 = require("../profile/employee-lifecycle.service");
const ops_api_types_1 = require("./ops-api.types");
let EmployeeLifecycleController = class EmployeeLifecycleController {
    prisma;
    employeeLifecycle;
    constructor(prisma, employeeLifecycle) {
        this.prisma = prisma;
        this.employeeLifecycle = employeeLifecycle;
    }
    async list() {
        return this.prisma.employee.findMany({
            orderBy: { createdAt: 'desc' },
            take: 300,
            include: {
                position: true,
                appUser: { select: { email: true, status: true } },
                reportsTo: { select: { id: true, surname: true, firstName: true, middleName: true } },
            },
        });
    }
    async listPositions() {
        return this.prisma.position.findMany({ orderBy: { title: 'asc' }, include: { orgUnit: true } });
    }
    async listOrgUnits() {
        return this.prisma.orgUnit.findMany({ orderBy: { name: 'asc' } });
    }
    async listOnboardingRequests() {
        return this.employeeLifecycle.listOnboardingRequests();
    }
    async requestOnboarding(dto, user) {
        return this.employeeLifecycle.requestOnboarding({
            surname: dto.surname,
            firstName: dto.firstName,
            middleName: dto.middleName,
            positionId: dto.positionId,
            orgUnitCode: dto.orgUnitCode,
            reportsToId: dto.reportsToId,
            hireDate: new Date(dto.hireDate),
            proposedPerformanceIncentivePct: dto.proposedPerformanceIncentivePct,
            linkedUserEmail: dto.linkedUserEmail,
            requestedByUserId: user.userId,
        });
    }
    async decideOnboarding(workflowInstanceId, dto, user) {
        return this.employeeLifecycle.decideOnboarding(workflowInstanceId, user.userId, dto.decision, dto.notes);
    }
    async listOffboardingRequests() {
        return this.employeeLifecycle.listOffboardingRequests();
    }
    async requestOffboarding(dto, user) {
        return this.employeeLifecycle.requestOffboarding(dto.employeeId, dto.reason, user.userId);
    }
    async decideOffboarding(workflowInstanceId, dto, user) {
        return this.employeeLifecycle.decideOffboarding(workflowInstanceId, user.userId, dto.decision, dto.notes);
    }
    async listIncentivePctRequests() {
        return this.employeeLifecycle.listIncentivePctChangeRequests();
    }
    async requestIncentivePctChange(dto, user) {
        return this.employeeLifecycle.requestIncentivePctChange(dto.employeeId, dto.proposedPct, user.userId);
    }
    async decideIncentivePctChange(workflowInstanceId, dto, user) {
        return this.employeeLifecycle.decideIncentivePctChange(workflowInstanceId, user.userId, dto.decision, dto.notes);
    }
};
exports.EmployeeLifecycleController = EmployeeLifecycleController;
__decorate([
    (0, common_1.Get)(),
    (0, requires_capability_decorator_1.RequiresCapability)('EMPLOYEE_LIFECYCLE_INITIATION', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmployeeLifecycleController.prototype, "list", null);
__decorate([
    (0, common_1.Get)('positions'),
    (0, requires_capability_decorator_1.RequiresCapability)('EMPLOYEE_LIFECYCLE_INITIATION', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmployeeLifecycleController.prototype, "listPositions", null);
__decorate([
    (0, common_1.Get)('org-units'),
    (0, requires_capability_decorator_1.RequiresCapability)('EMPLOYEE_LIFECYCLE_INITIATION', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmployeeLifecycleController.prototype, "listOrgUnits", null);
__decorate([
    (0, common_1.Get)('onboarding-requests'),
    (0, requires_capability_decorator_1.RequiresCapability)('EMPLOYEE_LIFECYCLE_INITIATION', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmployeeLifecycleController.prototype, "listOnboardingRequests", null);
__decorate([
    (0, common_1.Post)('onboarding-requests'),
    (0, requires_capability_decorator_1.RequiresCapability)('EMPLOYEE_LIFECYCLE_INITIATION', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.RequestOnboardingDto, Object]),
    __metadata("design:returntype", Promise)
], EmployeeLifecycleController.prototype, "requestOnboarding", null);
__decorate([
    (0, common_1.Post)('onboarding-requests/:workflowInstanceId/decide'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.DecideEmployeeLifecycleDto, Object]),
    __metadata("design:returntype", Promise)
], EmployeeLifecycleController.prototype, "decideOnboarding", null);
__decorate([
    (0, common_1.Get)('offboarding-requests'),
    (0, requires_capability_decorator_1.RequiresCapability)('EMPLOYEE_LIFECYCLE_INITIATION', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmployeeLifecycleController.prototype, "listOffboardingRequests", null);
__decorate([
    (0, common_1.Post)('offboarding-requests'),
    (0, requires_capability_decorator_1.RequiresCapability)('EMPLOYEE_LIFECYCLE_INITIATION', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.RequestOffboardingDto, Object]),
    __metadata("design:returntype", Promise)
], EmployeeLifecycleController.prototype, "requestOffboarding", null);
__decorate([
    (0, common_1.Post)('offboarding-requests/:workflowInstanceId/decide'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.DecideEmployeeLifecycleDto, Object]),
    __metadata("design:returntype", Promise)
], EmployeeLifecycleController.prototype, "decideOffboarding", null);
__decorate([
    (0, common_1.Get)('incentive-pct-requests'),
    (0, requires_capability_decorator_1.RequiresCapability)('EMPLOYEE_LIFECYCLE_INITIATION', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmployeeLifecycleController.prototype, "listIncentivePctRequests", null);
__decorate([
    (0, common_1.Post)('incentive-pct-requests'),
    (0, requires_capability_decorator_1.RequiresCapability)('EMPLOYEE_LIFECYCLE_INITIATION', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.RequestIncentivePctChangeDto, Object]),
    __metadata("design:returntype", Promise)
], EmployeeLifecycleController.prototype, "requestIncentivePctChange", null);
__decorate([
    (0, common_1.Post)('incentive-pct-requests/:workflowInstanceId/decide'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.DecideEmployeeLifecycleDto, Object]),
    __metadata("design:returntype", Promise)
], EmployeeLifecycleController.prototype, "decideIncentivePctChange", null);
exports.EmployeeLifecycleController = EmployeeLifecycleController = __decorate([
    (0, common_1.Controller)('employees'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        employee_lifecycle_service_1.EmployeeLifecycleService])
], EmployeeLifecycleController);
//# sourceMappingURL=employee-lifecycle.controller.js.map