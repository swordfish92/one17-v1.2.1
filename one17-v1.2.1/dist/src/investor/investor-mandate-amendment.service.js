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
exports.InvestorMandateAmendmentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const investor_types_1 = require("./investor.types");
const ENTITY_TYPE = 'investor_mandate_amendment_request';
let InvestorMandateAmendmentService = class InvestorMandateAmendmentService {
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
    async assertEarlyExitWaiverAllowed(investorId, proposedEarlyExitWaiver) {
        if (proposedEarlyExitWaiver !== true)
            return;
        const mandate = await this.prisma.investorMandate.findUniqueOrThrow({ where: { investorId } });
        if (!mandate.ssbWaiverResolutionRef) {
            throw new investor_types_1.InvestorLifecycleError(`Cannot enable earlyExitWaiver for investor ${investorId}: no ssbWaiverResolutionRef is on file on the mandate. Obtain a Shariah Supervisory Board waiver resolution through the mandate's own Shariah-review chain first (invariant 42) -- this lightweight amendment flow cannot invent one.`);
        }
    }
    async requestAmendment(input) {
        await this.assertCapability(input.requestedByUserId, 'INVESTOR_MANDATE_AMENDMENT_INITIATION', 'INITIATE', 'propose an investor mandate amendment');
        if (input.proposedTargetReturnRate === undefined && input.proposedRolloverDefault === undefined && input.proposedEarlyExitWaiver === undefined) {
            throw new investor_types_1.InvestorLifecycleError('At least one of targetReturnRate, rolloverDefault, or earlyExitWaiver must be proposed.');
        }
        await this.prisma.investorMandate.findUniqueOrThrow({ where: { investorId: input.investorId } });
        await this.assertEarlyExitWaiverAllowed(input.investorId, input.proposedEarlyExitWaiver);
        const request = await this.prisma.investorMandateAmendmentRequest.create({
            data: {
                investorId: input.investorId,
                proposedTargetReturnRate: input.proposedTargetReturnRate,
                proposedRolloverDefault: input.proposedRolloverDefault,
                proposedEarlyExitWaiver: input.proposedEarlyExitWaiver,
                requestedByUserId: input.requestedByUserId,
            },
        });
        let instance;
        try {
            instance = await this.workflow.initiate({
                workflowTypeCode: 'INVESTOR_MANDATE_AMENDMENT',
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
                after: { workflowTypeCode: 'INVESTOR_MANDATE_AMENDMENT', reason: err.message },
            });
            await this.prisma.investorMandateAmendmentRequest.delete({ where: { id: request.id } });
            throw err;
        }
        return this.prisma.investorMandateAmendmentRequest.update({ where: { id: request.id }, data: { workflowInstanceId: instance.id } });
    }
    async decideAmendment(workflowInstanceId, approverUserId, decision, notes) {
        const request = await this.prisma.investorMandateAmendmentRequest.findFirstOrThrow({ where: { workflowInstanceId } });
        if (decision === 'REJECT') {
            await this.workflow.reject(workflowInstanceId, approverUserId, notes);
            return this.prisma.investorMandateAmendmentRequest.update({ where: { id: request.id }, data: { status: 'REJECTED', rejectionNotes: notes } });
        }
        await this.assertEarlyExitWaiverAllowed(request.investorId, request.proposedEarlyExitWaiver ?? undefined);
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId, notes);
        if (updated.status !== 'APPROVED')
            return this.prisma.investorMandateAmendmentRequest.findUniqueOrThrow({ where: { id: request.id } });
        const patch = {};
        if (request.proposedTargetReturnRate !== null)
            patch.targetReturnRate = request.proposedTargetReturnRate;
        if (request.proposedRolloverDefault !== null)
            patch.rolloverDefault = request.proposedRolloverDefault;
        if (request.proposedEarlyExitWaiver !== null)
            patch.earlyExitWaiver = request.proposedEarlyExitWaiver;
        await this.prisma.investorMandate.update({ where: { investorId: request.investorId }, data: patch });
        const finalRequest = await this.prisma.investorMandateAmendmentRequest.update({ where: { id: request.id }, data: { status: 'APPROVED' } });
        await this.audit.record({ actorUserId: approverUserId, action: 'UPDATE', entityType: 'investor_mandate', entityId: request.investorId, after: patch });
        return finalRequest;
    }
    async listForInvestor(investorId) {
        return this.prisma.investorMandateAmendmentRequest.findMany({ where: { investorId }, orderBy: { createdAt: 'desc' } });
    }
    async getTrail(requestId) {
        const request = await this.prisma.investorMandateAmendmentRequest.findUniqueOrThrow({ where: { id: requestId } });
        const workflowTrail = request.workflowInstanceId ? await this.workflow.getTrail(request.workflowInstanceId) : null;
        return { request, workflowTrail };
    }
};
exports.InvestorMandateAmendmentService = InvestorMandateAmendmentService;
exports.InvestorMandateAmendmentService = InvestorMandateAmendmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService])
], InvestorMandateAmendmentService);
//# sourceMappingURL=investor-mandate-amendment.service.js.map