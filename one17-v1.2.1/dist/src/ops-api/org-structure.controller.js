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
exports.OrgStructureController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const org_structure_service_1 = require("../org-structure/org-structure.service");
const department_head_service_1 = require("../org-structure/department-head.service");
const ops_api_types_1 = require("./ops-api.types");
let OrgStructureController = class OrgStructureController {
    orgStructure;
    departmentHead;
    constructor(orgStructure, departmentHead) {
        this.orgStructure = orgStructure;
        this.departmentHead = departmentHead;
    }
    async listDepartmentHeads(orgUnitCode) {
        return this.departmentHead.listDesignations(orgUnitCode);
    }
    async proposeDepartmentHead(dto, user) {
        return this.departmentHead.proposeDesignation({ orgUnitCode: dto.orgUnitCode, employeeId: dto.employeeId, effectiveFrom: dto.effectiveFrom ? new Date(dto.effectiveFrom) : undefined }, user.userId);
    }
    async approveDepartmentHead(workflowInstanceId, user) {
        return this.departmentHead.approveDesignation(workflowInstanceId, user.userId);
    }
    async listOrgUnits() {
        return this.orgStructure.listOrgUnits();
    }
    async createOrgUnit(dto, user) {
        return this.orgStructure.createOrgUnit({ code: dto.code, name: dto.name, secondaryReportingLine: dto.secondaryReportingLine, createdByUserId: user.userId });
    }
    async listPositions() {
        return this.orgStructure.listPositions();
    }
    async createPosition(dto, user) {
        return this.orgStructure.createPosition({ title: dto.title, orgUnitCode: dto.orgUnitCode, cadre: dto.cadre, notch: dto.notch, createdByUserId: user.userId });
    }
    async listCadres() {
        return this.orgStructure.listCadres();
    }
};
exports.OrgStructureController = OrgStructureController;
__decorate([
    (0, common_1.Get)('department-heads'),
    (0, requires_capability_decorator_1.RequiresCapability)('DEPARTMENT_HEAD_DESIGNATION', 'VIEW'),
    __param(0, (0, common_1.Query)('orgUnitCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrgStructureController.prototype, "listDepartmentHeads", null);
__decorate([
    (0, common_1.Post)('department-heads'),
    (0, requires_capability_decorator_1.RequiresCapability)('DEPARTMENT_HEAD_DESIGNATION', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.ProposeDepartmentHeadDto, Object]),
    __metadata("design:returntype", Promise)
], OrgStructureController.prototype, "proposeDepartmentHead", null);
__decorate([
    (0, common_1.Post)('department-heads/:workflowInstanceId/approve'),
    (0, requires_capability_decorator_1.RequiresCapability)('DEPARTMENT_HEAD_DESIGNATION', 'APPROVE'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OrgStructureController.prototype, "approveDepartmentHead", null);
__decorate([
    (0, common_1.Get)('org-units'),
    (0, requires_capability_decorator_1.RequiresCapability)('ORG_STRUCTURE_MANAGEMENT', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrgStructureController.prototype, "listOrgUnits", null);
__decorate([
    (0, common_1.Post)('org-units'),
    (0, requires_capability_decorator_1.RequiresCapability)('ORG_STRUCTURE_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.CreateOrgUnitDto, Object]),
    __metadata("design:returntype", Promise)
], OrgStructureController.prototype, "createOrgUnit", null);
__decorate([
    (0, common_1.Get)('positions'),
    (0, requires_capability_decorator_1.RequiresCapability)('ORG_STRUCTURE_MANAGEMENT', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrgStructureController.prototype, "listPositions", null);
__decorate([
    (0, common_1.Post)('positions'),
    (0, requires_capability_decorator_1.RequiresCapability)('ORG_STRUCTURE_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.CreatePositionDto, Object]),
    __metadata("design:returntype", Promise)
], OrgStructureController.prototype, "createPosition", null);
__decorate([
    (0, common_1.Get)('cadres'),
    (0, requires_capability_decorator_1.RequiresCapability)('ORG_STRUCTURE_MANAGEMENT', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrgStructureController.prototype, "listCadres", null);
exports.OrgStructureController = OrgStructureController = __decorate([
    (0, common_1.Controller)('org-structure'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [org_structure_service_1.OrgStructureService,
        department_head_service_1.DepartmentHeadService])
], OrgStructureController);
//# sourceMappingURL=org-structure.controller.js.map