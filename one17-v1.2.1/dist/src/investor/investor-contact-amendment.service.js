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
exports.InvestorContactAmendmentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const investor_types_1 = require("./investor.types");
const ENTITY_TYPE = 'investor_contact_amendment_request';
let InvestorContactAmendmentService = class InvestorContactAmendmentService {
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
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: ENTITY_TYPE, entityId: activity, after: { functionCode, level } });
            throw new investor_types_1.InvestorLifecycleError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
    async assertEmailAvailable(email, excludingInvestorId) {
        const existing = await this.prisma.investor.findUnique({ where: { contactEmail: email } });
        if (existing && existing.investorId !== excludingInvestorId) {
            throw new investor_types_1.InvestorLifecycleError(`contactEmail ${email} is already in use by investor ${existing.investorId} -- cannot propose it for ${excludingInvestorId}.`);
        }
    }
    async requestAmendment(input) {
        await this.assertCapability(input.requestedByUserId, 'INVESTOR_CONTACT_KYC_AMENDMENT_INITIATION', 'INITIATE', 'propose an investor contact/KYC amendment');
        if (!input.proposedContactEmail && !input.proposedContactPhone && !input.proposedRegisteredAddress &&
            !input.proposedTaxIdentificationNumber && !input.proposedSourceOfFunds && !input.proposedOccupationOrBusinessNature) {
            throw new investor_types_1.InvestorLifecycleError('At least one of contactEmail, contactPhone, registeredAddress, taxIdentificationNumber, sourceOfFunds, or occupationOrBusinessNature must be proposed.');
        }
        if (input.proposedContactEmail) {
            await this.assertEmailAvailable(input.proposedContactEmail, input.investorId);
        }
        const request = await this.prisma.investorContactAmendmentRequest.create({
            data: {
                investorId: input.investorId,
                proposedContactEmail: input.proposedContactEmail,
                proposedContactPhone: input.proposedContactPhone,
                proposedRegisteredAddress: input.proposedRegisteredAddress,
                proposedTaxIdentificationNumber: input.proposedTaxIdentificationNumber,
                proposedSourceOfFunds: input.proposedSourceOfFunds,
                proposedOccupationOrBusinessNature: input.proposedOccupationOrBusinessNature,
                requestedByUserId: input.requestedByUserId,
            },
        });
        let instance;
        try {
            instance = await this.workflow.initiate({
                workflowTypeCode: 'INVESTOR_CONTACT_KYC_AMENDMENT',
                entityType: ENTITY_TYPE,
                entityId: request.id,
                initiatedByUserId: input.requestedByUserId,
                scenario: 'STANDARD',
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId: input.requestedByUserId,
                action: 'INITIATE_FAILED_COMPENSATED',
                entityType: ENTITY_TYPE,
                entityId: request.id,
                after: { workflowTypeCode: 'INVESTOR_CONTACT_KYC_AMENDMENT', reason: err.message },
            });
            await this.prisma.investorContactAmendmentRequest.delete({ where: { id: request.id } });
            throw err;
        }
        return this.prisma.investorContactAmendmentRequest.update({ where: { id: request.id }, data: { workflowInstanceId: instance.id } });
    }
    async decideAmendment(workflowInstanceId, approverUserId, decision, notes) {
        const request = await this.prisma.investorContactAmendmentRequest.findFirstOrThrow({ where: { workflowInstanceId } });
        if (decision === 'REJECT') {
            await this.workflow.reject(workflowInstanceId, approverUserId, notes);
            return this.prisma.investorContactAmendmentRequest.update({ where: { id: request.id }, data: { status: 'REJECTED', rejectionNotes: notes } });
        }
        if (request.proposedContactEmail) {
            await this.assertEmailAvailable(request.proposedContactEmail, request.investorId);
        }
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId, notes);
        if (updated.status !== 'APPROVED')
            return this.prisma.investorContactAmendmentRequest.findUniqueOrThrow({ where: { id: request.id } });
        const patch = {};
        if (request.proposedContactEmail)
            patch.contactEmail = request.proposedContactEmail;
        if (request.proposedContactPhone)
            patch.contactPhone = request.proposedContactPhone;
        if (request.proposedRegisteredAddress)
            patch.registeredAddress = request.proposedRegisteredAddress;
        if (request.proposedTaxIdentificationNumber)
            patch.taxIdentificationNumber = request.proposedTaxIdentificationNumber;
        if (request.proposedSourceOfFunds)
            patch.sourceOfFunds = request.proposedSourceOfFunds;
        if (request.proposedOccupationOrBusinessNature)
            patch.occupationOrBusinessNature = request.proposedOccupationOrBusinessNature;
        await this.prisma.investor.update({ where: { investorId: request.investorId }, data: patch });
        const finalRequest = await this.prisma.investorContactAmendmentRequest.update({ where: { id: request.id }, data: { status: 'APPROVED' } });
        await this.audit.record({ actorUserId: approverUserId, action: 'UPDATE', entityType: 'investor', entityId: request.investorId, after: patch });
        return finalRequest;
    }
    async listForInvestor(investorId) {
        return this.prisma.investorContactAmendmentRequest.findMany({ where: { investorId }, orderBy: { createdAt: 'desc' } });
    }
    async getTrail(requestId) {
        const request = await this.prisma.investorContactAmendmentRequest.findUniqueOrThrow({ where: { id: requestId } });
        const workflowTrail = request.workflowInstanceId ? await this.workflow.getTrail(request.workflowInstanceId) : null;
        return { request, workflowTrail };
    }
};
exports.InvestorContactAmendmentService = InvestorContactAmendmentService;
exports.InvestorContactAmendmentService = InvestorContactAmendmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService])
], InvestorContactAmendmentService);
//# sourceMappingURL=investor-contact-amendment.service.js.map