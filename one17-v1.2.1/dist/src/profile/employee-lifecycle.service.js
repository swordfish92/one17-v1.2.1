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
exports.EmployeeLifecycleService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const user_deactivation_service_1 = require("../rbac/user-deactivation.service");
const employee_lifecycle_types_1 = require("./employee-lifecycle.types");
let EmployeeLifecycleService = class EmployeeLifecycleService {
    prisma;
    audit;
    delegation;
    workflow;
    userDeactivation;
    constructor(prisma, audit, delegation, workflow, userDeactivation) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
        this.workflow = workflow;
        this.userDeactivation = userDeactivation;
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'employee_lifecycle', entityId: activity, after: { functionCode, level } });
            throw new employee_lifecycle_types_1.EmployeeLifecycleError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
    async requestOnboarding(input) {
        await this.assertCapability(input.requestedByUserId, 'EMPLOYEE_LIFECYCLE_INITIATION', 'INITIATE', 'propose a new hire');
        const request = await this.prisma.employeeOnboardingRequest.create({
            data: {
                surname: input.surname,
                firstName: input.firstName,
                middleName: input.middleName,
                positionId: input.positionId,
                orgUnitCode: input.orgUnitCode,
                reportsToId: input.reportsToId,
                hireDate: input.hireDate,
                proposedPerformanceIncentivePct: input.proposedPerformanceIncentivePct ?? 25.0,
                linkedUserEmail: input.linkedUserEmail,
                requestedByUserId: input.requestedByUserId,
            },
        });
        let instance;
        try {
            instance = await this.workflow.initiate({
                workflowTypeCode: 'EMPLOYEE_ONBOARDING',
                entityType: 'employee_onboarding_request',
                entityId: request.id,
                initiatedByUserId: input.requestedByUserId,
                scenario: 'STANDARD',
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId: input.requestedByUserId,
                action: 'INITIATE_FAILED_COMPENSATED',
                entityType: 'employee_onboarding_request',
                entityId: request.id,
                after: { workflowTypeCode: 'EMPLOYEE_ONBOARDING', reason: err.message },
            });
            await this.prisma.employeeOnboardingRequest.delete({ where: { id: request.id } });
            throw err;
        }
        return this.prisma.employeeOnboardingRequest.update({ where: { id: request.id }, data: { workflowInstanceId: instance.id } });
    }
    async decideOnboarding(workflowInstanceId, approverUserId, decision, notes) {
        const request = await this.prisma.employeeOnboardingRequest.findFirstOrThrow({ where: { workflowInstanceId } });
        if (decision === 'REJECT') {
            await this.workflow.reject(workflowInstanceId, approverUserId, notes);
            return this.prisma.employeeOnboardingRequest.update({ where: { id: request.id }, data: { status: 'REJECTED', rejectionNotes: notes } });
        }
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId, notes);
        if (updated.status !== 'APPROVED')
            return this.prisma.employeeOnboardingRequest.findUniqueOrThrow({ where: { id: request.id } });
        let appUserId;
        if (request.linkedUserEmail) {
            const appUser = await this.prisma.appUser.create({
                data: { email: request.linkedUserEmail, displayName: `${request.firstName} ${request.surname}` },
            });
            appUserId = appUser.id;
        }
        const employee = await this.prisma.employee.create({
            data: {
                surname: request.surname,
                firstName: request.firstName,
                middleName: request.middleName,
                positionId: request.positionId,
                orgUnitCode: request.orgUnitCode,
                reportsToId: request.reportsToId,
                hireDate: request.hireDate,
                performanceIncentivePct: request.proposedPerformanceIncentivePct,
                appUserId,
                status: 'ACTIVE',
            },
        });
        const finalRequest = await this.prisma.employeeOnboardingRequest.update({
            where: { id: request.id },
            data: { status: 'APPROVED', resultingEmployeeId: employee.id },
        });
        await this.audit.record({ actorUserId: approverUserId, action: 'CREATE', entityType: 'employee', entityId: employee.id, after: { onboardingRequestId: request.id } });
        return finalRequest;
    }
    async requestOffboarding(employeeId, reason, actorUserId) {
        await this.assertCapability(actorUserId, 'EMPLOYEE_LIFECYCLE_INITIATION', 'INITIATE', 'propose an offboarding');
        const employee = await this.prisma.employee.findUniqueOrThrow({ where: { id: employeeId } });
        if (employee.status !== 'ACTIVE') {
            throw new employee_lifecycle_types_1.EmployeeLifecycleError(`Employee ${employeeId} is ${employee.status}, not ACTIVE -- cannot offboard an employee who isn't currently active.`);
        }
        const request = await this.prisma.employeeOffboardingRequest.create({ data: { employeeId, reason, requestedByUserId: actorUserId } });
        let instance;
        try {
            instance = await this.workflow.initiate({
                workflowTypeCode: 'EMPLOYEE_OFFBOARDING',
                entityType: 'employee_offboarding_request',
                entityId: request.id,
                initiatedByUserId: actorUserId,
                scenario: 'STANDARD',
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId,
                action: 'INITIATE_FAILED_COMPENSATED',
                entityType: 'employee_offboarding_request',
                entityId: request.id,
                after: { workflowTypeCode: 'EMPLOYEE_OFFBOARDING', reason: err.message },
            });
            await this.prisma.employeeOffboardingRequest.delete({ where: { id: request.id } });
            throw err;
        }
        return this.prisma.employeeOffboardingRequest.update({ where: { id: request.id }, data: { workflowInstanceId: instance.id } });
    }
    async decideOffboarding(workflowInstanceId, approverUserId, decision, notes) {
        const request = await this.prisma.employeeOffboardingRequest.findFirstOrThrow({ where: { workflowInstanceId } });
        if (decision === 'REJECT') {
            await this.workflow.reject(workflowInstanceId, approverUserId, notes);
            return this.prisma.employeeOffboardingRequest.update({ where: { id: request.id }, data: { status: 'REJECTED', rejectionNotes: notes } });
        }
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId, notes);
        if (updated.status !== 'APPROVED')
            return this.prisma.employeeOffboardingRequest.findUniqueOrThrow({ where: { id: request.id } });
        const employee = await this.prisma.employee.update({ where: { id: request.employeeId }, data: { status: 'TERMINATED' } });
        if (employee.appUserId) {
            await this.userDeactivation.deactivateUser(employee.appUserId, approverUserId, `Employee ${employee.id} offboarding approved.`);
        }
        const finalRequest = await this.prisma.employeeOffboardingRequest.update({
            where: { id: request.id },
            data: { status: 'APPROVED', completedAt: new Date() },
        });
        await this.audit.record({ actorUserId: approverUserId, action: 'UPDATE', entityType: 'employee', entityId: employee.id, after: { status: 'TERMINATED', loginDeactivated: !!employee.appUserId } });
        return finalRequest;
    }
    async requestIncentivePctChange(employeeId, proposedPct, actorUserId) {
        await this.assertCapability(actorUserId, 'EMPLOYEE_LIFECYCLE_INITIATION', 'INITIATE', 'propose a performance-incentive percentage change');
        await this.prisma.employee.findUniqueOrThrow({ where: { id: employeeId } });
        const request = await this.prisma.employeeIncentivePctChangeRequest.create({ data: { employeeId, proposedPct, requestedByUserId: actorUserId } });
        let instance;
        try {
            instance = await this.workflow.initiate({
                workflowTypeCode: 'EMPLOYEE_INCENTIVE_PCT_CHANGE',
                entityType: 'employee_incentive_pct_change_request',
                entityId: request.id,
                initiatedByUserId: actorUserId,
                scenario: 'STANDARD',
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId,
                action: 'INITIATE_FAILED_COMPENSATED',
                entityType: 'employee_incentive_pct_change_request',
                entityId: request.id,
                after: { workflowTypeCode: 'EMPLOYEE_INCENTIVE_PCT_CHANGE', reason: err.message },
            });
            await this.prisma.employeeIncentivePctChangeRequest.delete({ where: { id: request.id } });
            throw err;
        }
        return this.prisma.employeeIncentivePctChangeRequest.update({ where: { id: request.id }, data: { workflowInstanceId: instance.id } });
    }
    async decideIncentivePctChange(workflowInstanceId, approverUserId, decision, notes) {
        const request = await this.prisma.employeeIncentivePctChangeRequest.findFirstOrThrow({ where: { workflowInstanceId } });
        if (decision === 'REJECT') {
            await this.workflow.reject(workflowInstanceId, approverUserId, notes);
            return this.prisma.employeeIncentivePctChangeRequest.update({ where: { id: request.id }, data: { status: 'REJECTED', rejectionNotes: notes } });
        }
        const inFlightSubmission = await this.prisma.employeeScoreSubmission.findFirst({
            where: {
                employeeId: request.employeeId,
                appraisalCycle: { status: { notIn: ['INCENTIVE_COMPUTED', 'PAID', 'CLOSED'] } },
            },
            include: { appraisalCycle: true },
        });
        if (inFlightSubmission) {
            throw new employee_lifecycle_types_1.EmployeeLifecycleError(`Employee ${request.employeeId} has an in-flight PMS cycle (${inFlightSubmission.appraisalCycle.id}, status ${inFlightSubmission.appraisalCycle.status}) -- a performanceIncentivePct change cannot be approved until that cycle reaches INCENTIVE_COMPUTED (invariant 50b addendum: never retroactive). Retry once the cycle closes.`);
        }
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId, notes);
        if (updated.status !== 'APPROVED')
            return this.prisma.employeeIncentivePctChangeRequest.findUniqueOrThrow({ where: { id: request.id } });
        await this.prisma.employee.update({ where: { id: request.employeeId }, data: { performanceIncentivePct: request.proposedPct } });
        const finalRequest = await this.prisma.employeeIncentivePctChangeRequest.update({
            where: { id: request.id },
            data: { status: 'APPROVED', appliedAt: new Date() },
        });
        await this.audit.record({ actorUserId: approverUserId, action: 'UPDATE', entityType: 'employee', entityId: request.employeeId, after: { performanceIncentivePct: request.proposedPct.toString() } });
        return finalRequest;
    }
    async listOnboardingRequests() {
        return this.prisma.employeeOnboardingRequest.findMany({ orderBy: { createdAt: 'desc' }, take: 200, include: { position: true } });
    }
    async listOffboardingRequests() {
        return this.prisma.employeeOffboardingRequest.findMany({ orderBy: { createdAt: 'desc' }, take: 200, include: { employee: { select: { firstName: true, surname: true } } } });
    }
    async listIncentivePctChangeRequests() {
        return this.prisma.employeeIncentivePctChangeRequest.findMany({ orderBy: { createdAt: 'desc' }, take: 200, include: { employee: { select: { firstName: true, surname: true, performanceIncentivePct: true } } } });
    }
};
exports.EmployeeLifecycleService = EmployeeLifecycleService;
exports.EmployeeLifecycleService = EmployeeLifecycleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService,
        user_deactivation_service_1.UserDeactivationService])
], EmployeeLifecycleService);
//# sourceMappingURL=employee-lifecycle.service.js.map