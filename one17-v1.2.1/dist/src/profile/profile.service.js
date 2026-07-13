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
exports.ProfileService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const notification_service_1 = require("../notification/notification.service");
const profile_types_1 = require("./profile.types");
let ProfileService = class ProfileService {
    prisma;
    audit;
    delegation;
    workflow;
    notification;
    constructor(prisma, audit, delegation, workflow, notification) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
        this.workflow = workflow;
        this.notification = notification;
    }
    async getMyEmployee(appUserId) {
        const employee = await this.prisma.employee.findFirst({ where: { appUserId }, include: { position: { include: { orgUnit: true } } } });
        if (!employee)
            throw new profile_types_1.ProfileError('No employee record is linked to this login — the profile hub requires an employee.app_user_id link.');
        return employee;
    }
    async getPersonalRecord(employeeId, requestingUserId) {
        const employee = await this.prisma.employee.findUniqueOrThrow({ where: { id: employeeId } });
        if (employee.appUserId !== requestingUserId) {
            const { eligible } = await this.delegation.hasCapability(requestingUserId, 'EMPLOYEE_PERSONAL_RECORDS', 'VIEW');
            if (!eligible) {
                throw new profile_types_1.ProfileError(`User lacks EMPLOYEE_PERSONAL_RECORDS VIEW (standing or delegated) — personal records are not general-staff-visible (PII discipline, invariant 29a).`);
            }
        }
        return this.prisma.employeePersonalRecord.findUnique({ where: { employeeId } });
    }
    async updateFreeEditFields(employeeId, actorUserId, input) {
        const employee = await this.prisma.employee.findUniqueOrThrow({ where: { id: employeeId } });
        if (employee.appUserId !== actorUserId) {
            throw new profile_types_1.ProfileError(`Only the employee's own linked login may edit their free-edit personal-record fields.`);
        }
        const updated = await this.prisma.employeePersonalRecord.upsert({
            where: { employeeId },
            create: { employeeId, ...input },
            update: input,
        });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'employee_personal_record', entityId: employeeId, after: input });
        return updated;
    }
    async requestGatedChange(employeeId, actorUserId, input) {
        const employee = await this.prisma.employee.findUniqueOrThrow({ where: { id: employeeId } });
        if (employee.appUserId !== actorUserId) {
            throw new profile_types_1.ProfileError(`Only the employee's own linked login may request a change to their own personal record.`);
        }
        if (!input.maritalStatus && !input.residentialAddress && !input.nextOfKinName && !input.nextOfKinRelationship && !input.nextOfKinPhone && !input.nextOfKinAddress) {
            throw new profile_types_1.ProfileError('At least one of marital status, residential address, or next-of-kin fields must be supplied.');
        }
        const request = await this.prisma.employeePersonalRecordChangeRequest.create({
            data: {
                employeeId,
                proposedMaritalStatus: input.maritalStatus,
                proposedResidentialAddress: input.residentialAddress,
                proposedNextOfKinName: input.nextOfKinName,
                proposedNextOfKinRelationship: input.nextOfKinRelationship,
                proposedNextOfKinPhone: input.nextOfKinPhone,
                proposedNextOfKinAddress: input.nextOfKinAddress,
                requestedByUserId: actorUserId,
            },
        });
        let workflowInstance;
        try {
            workflowInstance = await this.workflow.initiate({
                workflowTypeCode: 'EMPLOYEE_PERSONAL_RECORD_CHANGE',
                entityType: 'employee_personal_record_change_request',
                entityId: request.id,
                initiatedByUserId: actorUserId,
                scenario: 'STANDARD',
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId: actorUserId,
                action: 'INITIATE_FAILED_COMPENSATED',
                entityType: 'employee_personal_record_change_request',
                entityId: request.id,
                after: { workflowTypeCode: 'EMPLOYEE_PERSONAL_RECORD_CHANGE', reason: err.message },
            });
            await this.prisma.employeePersonalRecordChangeRequest.delete({ where: { id: request.id } });
            throw err;
        }
        return this.prisma.employeePersonalRecordChangeRequest.update({ where: { id: request.id }, data: { workflowInstanceId: workflowInstance.id } });
    }
    async listMyChangeRequests(employeeId) {
        return this.prisma.employeePersonalRecordChangeRequest.findMany({ where: { employeeId }, orderBy: { createdAt: 'desc' } });
    }
    async acknowledgeChange(workflowInstanceId, approverUserId) {
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        if (updated.status !== 'APPROVED')
            return null;
        const request = await this.prisma.employeePersonalRecordChangeRequest.findFirstOrThrow({ where: { workflowInstanceId } });
        const patch = {};
        if (request.proposedMaritalStatus)
            patch.maritalStatus = request.proposedMaritalStatus;
        if (request.proposedResidentialAddress)
            patch.residentialAddress = request.proposedResidentialAddress;
        if (request.proposedNextOfKinName)
            patch.nextOfKinName = request.proposedNextOfKinName;
        if (request.proposedNextOfKinRelationship)
            patch.nextOfKinRelationship = request.proposedNextOfKinRelationship;
        if (request.proposedNextOfKinPhone)
            patch.nextOfKinPhone = request.proposedNextOfKinPhone;
        if (request.proposedNextOfKinAddress)
            patch.nextOfKinAddress = request.proposedNextOfKinAddress;
        await this.prisma.employeePersonalRecord.upsert({
            where: { employeeId: request.employeeId },
            create: { employeeId: request.employeeId, ...patch },
            update: patch,
        });
        const acknowledged = await this.prisma.employeePersonalRecordChangeRequest.update({ where: { id: request.id }, data: { status: 'ACKNOWLEDGED' } });
        const employee = await this.prisma.employee.findUniqueOrThrow({ where: { id: request.employeeId } });
        if (employee.appUserId) {
            await this.notification.create({
                recipientUserId: employee.appUserId,
                type: 'PERSONAL_RECORD_CHANGE_DECIDED',
                title: 'Personal record change acknowledged',
                body: 'HR has acknowledged your requested personal-record change.',
                linkPath: '/profile',
            });
        }
        return acknowledged;
    }
    async rejectChange(workflowInstanceId, approverUserId, notes) {
        await this.workflow.reject(workflowInstanceId, approverUserId, notes);
        const request = await this.prisma.employeePersonalRecordChangeRequest.findFirstOrThrow({ where: { workflowInstanceId } });
        const rejected = await this.prisma.employeePersonalRecordChangeRequest.update({ where: { id: request.id }, data: { status: 'REJECTED' } });
        const employee = await this.prisma.employee.findUniqueOrThrow({ where: { id: request.employeeId } });
        if (employee.appUserId) {
            await this.notification.create({
                recipientUserId: employee.appUserId,
                type: 'PERSONAL_RECORD_CHANGE_DECIDED',
                title: 'Personal record change rejected',
                body: notes ?? 'HR has rejected your requested personal-record change.',
                linkPath: '/profile',
            });
        }
        return rejected;
    }
    async listSopLibrary(actorUserId) {
        const employee = await this.getMyEmployee(actorUserId);
        return this.prisma.documentRegisterEntry.findMany({
            where: { entityType: 'DEPT_SOP', entityId: employee.orgUnitCode },
            orderBy: { uploadedAt: 'desc' },
        });
    }
    async uploadSop(actorUserId, documentType, fileReference) {
        await this.assertCapability(actorUserId, 'DOCUMENT_REGISTER', 'INITIATE', 'upload a departmental SOP');
        const employee = await this.getMyEmployee(actorUserId);
        return this.prisma.documentRegisterEntry.create({
            data: { entityType: 'DEPT_SOP', entityId: employee.orgUnitCode, documentType, fileReference, uploadedByUserId: actorUserId },
        });
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'profile_activity', entityId: activity, after: { functionCode, level } });
            throw new profile_types_1.ProfileError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.ProfileService = ProfileService;
exports.ProfileService = ProfileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService,
        notification_service_1.NotificationService])
], ProfileService);
//# sourceMappingURL=profile.service.js.map