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
exports.DepartmentHeadService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const department_head_types_1 = require("./department-head.types");
let DepartmentHeadService = class DepartmentHeadService {
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
    async assertCapability(userId, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, 'DEPARTMENT_HEAD_DESIGNATION', level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'department_head_designation', entityId: activity, after: { functionCode: 'DEPARTMENT_HEAD_DESIGNATION', level } });
            throw new department_head_types_1.DepartmentHeadError(`User lacks ${level} authority on DEPARTMENT_HEAD_DESIGNATION (standing or delegated), required to ${activity}.`);
        }
    }
    async proposeDesignation(input, actorUserId) {
        await this.assertCapability(actorUserId, 'INITIATE', 'propose a Department Head designation');
        const orgUnit = await this.prisma.orgUnit.findUnique({ where: { code: input.orgUnitCode } });
        if (!orgUnit)
            throw new department_head_types_1.DepartmentHeadError(`Org unit "${input.orgUnitCode}" does not exist.`);
        const employee = await this.prisma.employee.findUnique({ where: { id: input.employeeId } });
        if (!employee)
            throw new department_head_types_1.DepartmentHeadError(`Employee ${input.employeeId} does not exist.`);
        if (!employee.appUserId) {
            throw new department_head_types_1.DepartmentHeadError('This employee has no linked staff login (AppUser) -- Department Head access follows the designation to a real login, which does not exist for this record yet.');
        }
        const draft = await this.prisma.departmentHeadDesignation.create({
            data: {
                orgUnitCode: input.orgUnitCode,
                employeeId: input.employeeId,
                status: 'DRAFT',
                effectiveFrom: input.effectiveFrom ?? null,
                proposedByUserId: actorUserId,
            },
        });
        const workflowInstance = await this.workflow.initiate({
            workflowTypeCode: 'DEPARTMENT_HEAD_DESIGNATION_APPROVAL',
            entityType: 'department_head_designation',
            entityId: draft.id,
            initiatedByUserId: actorUserId,
            scenario: 'STANDARD',
        });
        const updated = await this.prisma.departmentHeadDesignation.update({
            where: { id: draft.id },
            data: { workflowInstanceId: workflowInstance.id },
        });
        await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'department_head_designation', entityId: updated.id, after: { orgUnitCode: input.orgUnitCode, employeeId: input.employeeId } });
        return updated;
    }
    async approveDesignation(workflowInstanceId, approverUserId) {
        const updatedInstance = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        const draft = await this.prisma.departmentHeadDesignation.findFirstOrThrow({ where: { workflowInstanceId } });
        if (updatedInstance.status !== 'APPROVED')
            return draft;
        const activated = await this.prisma.$transaction(async (tx) => {
            await tx.departmentHeadDesignation.updateMany({
                where: { orgUnitCode: draft.orgUnitCode, status: 'ACTIVE', id: { not: draft.id } },
                data: { status: 'SUPERSEDED', effectiveTo: new Date() },
            });
            return tx.departmentHeadDesignation.update({
                where: { id: draft.id },
                data: { status: 'ACTIVE', approvedByUserId: approverUserId, effectiveFrom: draft.effectiveFrom ?? new Date() },
            });
        });
        await this.audit.record({ actorUserId: approverUserId, action: 'UPDATE', entityType: 'department_head_designation', entityId: activated.id, after: { status: 'ACTIVE', orgUnitCode: activated.orgUnitCode, employeeId: activated.employeeId } });
        return activated;
    }
    async listDesignations(orgUnitCode) {
        return this.prisma.departmentHeadDesignation.findMany({
            where: orgUnitCode ? { orgUnitCode } : undefined,
            orderBy: { createdAt: 'desc' },
            include: {
                employee: { select: { surname: true, firstName: true, middleName: true } },
                orgUnit: { select: { name: true } },
            },
        });
    }
    async isActiveDepartmentHead(userId) {
        const employee = await this.prisma.employee.findFirst({ where: { appUserId: userId }, select: { id: true } });
        if (!employee)
            return false;
        const active = await this.prisma.departmentHeadDesignation.findFirst({ where: { employeeId: employee.id, status: 'ACTIVE' } });
        return !!active;
    }
};
exports.DepartmentHeadService = DepartmentHeadService;
exports.DepartmentHeadService = DepartmentHeadService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService])
], DepartmentHeadService);
//# sourceMappingURL=department-head.service.js.map