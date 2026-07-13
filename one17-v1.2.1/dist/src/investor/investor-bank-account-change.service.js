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
exports.InvestorBankAccountChangeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const document_service_1 = require("../document/document.service");
const investor_types_1 = require("./investor.types");
const APPLICATION_TYPE = 'INVESTOR_BANK_ACCOUNT_CHANGE';
const ENTITY_TYPE = 'investor_bank_account_change_request';
let InvestorBankAccountChangeService = class InvestorBankAccountChangeService {
    prisma;
    audit;
    delegation;
    workflow;
    documents;
    constructor(prisma, audit, delegation, workflow, documents) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
        this.workflow = workflow;
        this.documents = documents;
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: ENTITY_TYPE, entityId: activity, after: { functionCode, level } });
            throw new investor_types_1.InvestorLifecycleError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
    async requestChange(input) {
        await this.assertCapability(input.requestedByUserId, 'INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION', 'INITIATE', 'draft an investor bank-account change request');
        await this.prisma.investor.findUniqueOrThrow({ where: { investorId: input.investorId } });
        const created = await this.prisma.investorBankAccountChangeRequest.create({
            data: {
                investorId: input.investorId,
                proposedBankName: input.proposedBankName,
                proposedAccountNumber: input.proposedAccountNumber,
                proposedAccountName: input.proposedAccountName,
                proposedAccountType: input.proposedAccountType,
                proposedCurrency: input.proposedCurrency,
                requestedByUserId: input.requestedByUserId,
            },
        });
        await this.audit.record({
            actorUserId: input.requestedByUserId,
            action: 'CREATE',
            entityType: ENTITY_TYPE,
            entityId: created.id,
            after: { investorId: input.investorId, proposedBankName: input.proposedBankName },
        });
        return created;
    }
    async attachEvidence(requestId, actorUserId, input) {
        const request = await this.prisma.investorBankAccountChangeRequest.findUniqueOrThrow({ where: { id: requestId } });
        if (request.workflowInstanceId) {
            throw new investor_types_1.InvestorLifecycleError(`Change request ${requestId} has already been submitted -- evidence can no longer be added.`);
        }
        return this.documents.attach({ entityType: ENTITY_TYPE, entityId: requestId, documentType: input.documentType, fileReference: input.fileReference }, actorUserId);
    }
    async getEvidenceChecklist(requestId) {
        return this.documents.getChecklistStatus(APPLICATION_TYPE, ENTITY_TYPE, requestId);
    }
    async submitChange(requestId, actorUserId) {
        const request = await this.prisma.investorBankAccountChangeRequest.findUniqueOrThrow({ where: { id: requestId } });
        if (request.requestedByUserId !== actorUserId) {
            throw new investor_types_1.InvestorLifecycleError(`Only the original requester may submit change request ${requestId} for approval.`);
        }
        if (request.workflowInstanceId) {
            throw new investor_types_1.InvestorLifecycleError(`Change request ${requestId} has already been submitted.`);
        }
        const checklist = await this.documents.getChecklistStatus(APPLICATION_TYPE, ENTITY_TYPE, requestId);
        if (!checklist.complete) {
            throw new investor_types_1.InvestorLifecycleError(`Change request ${requestId} is missing required document evidence: ${checklist.missing.join(', ')} (invariant 51a-i).`);
        }
        let instance;
        try {
            instance = await this.workflow.initiate({
                workflowTypeCode: 'INVESTOR_BANK_ACCOUNT_CHANGE',
                entityType: ENTITY_TYPE,
                entityId: requestId,
                initiatedByUserId: actorUserId,
                scenario: 'STANDARD',
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId,
                action: 'INITIATE_FAILED_COMPENSATED',
                entityType: ENTITY_TYPE,
                entityId: requestId,
                after: { workflowTypeCode: 'INVESTOR_BANK_ACCOUNT_CHANGE', reason: err.message },
            });
            throw err;
        }
        return this.prisma.investorBankAccountChangeRequest.update({ where: { id: requestId }, data: { workflowInstanceId: instance.id } });
    }
    async decideChangeRequest(requestId, actorUserId, decision, notes) {
        const request = await this.prisma.investorBankAccountChangeRequest.findUniqueOrThrow({ where: { id: requestId } });
        if (!request.workflowInstanceId) {
            throw new investor_types_1.InvestorLifecycleError(`Change request ${requestId} has not been submitted for approval yet.`);
        }
        const trail = await this.workflow.getTrail(request.workflowInstanceId);
        const pendingStep = trail.steps.find((s) => s.decision === null);
        if (!pendingStep) {
            throw new investor_types_1.InvestorLifecycleError(`Change request ${requestId}'s workflow instance has no pending step (status ${trail.status}).`);
        }
        const isReverificationStep = pendingStep.requiredFunctionCode === 'BANK_ACCOUNT_CHANGE_REVERIFICATION';
        if (decision === 'REJECT') {
            await this.workflow.reject(request.workflowInstanceId, actorUserId, notes);
            return this.prisma.investorBankAccountChangeRequest.update({ where: { id: requestId }, data: { status: 'REJECTED', rejectionNotes: notes } });
        }
        const alreadyDecided = await this.prisma.workflowStepApproval.findFirst({
            where: { workflowInstanceId: request.workflowInstanceId, approverUserId: actorUserId },
        });
        if (alreadyDecided) {
            await this.audit.record({
                actorUserId,
                action: 'PERMISSION_DENIED',
                entityType: ENTITY_TYPE,
                entityId: requestId,
                after: { reason: 'Same user already decided an earlier step on this change request -- invariant 51(a-i) requires genuine 3-way separation, not just maker!=checker.' },
            });
            throw new investor_types_1.InvestorLifecycleError(`User already decided an earlier step on change request ${requestId} -- the same person may not both approve and re-verify a bank-account change (invariant 51a-i).`);
        }
        if (isReverificationStep && !notes) {
            throw new investor_types_1.InvestorLifecycleError(`Re-verification requires notes describing HOW the client's request was independently confirmed (e.g. outbound call to the number already on file, never one supplied with the request) -- invariant 51(a-i).`);
        }
        const updated = await this.workflow.approveNextStep(request.workflowInstanceId, actorUserId, notes);
        if (isReverificationStep && updated.status === 'APPROVED') {
            return this.activateChange(request, actorUserId, notes);
        }
        return this.prisma.investorBankAccountChangeRequest.findUniqueOrThrow({ where: { id: requestId } });
    }
    async activateChange(request, reVerifierUserId, reVerificationNotes) {
        const config = await this.prisma.investorBankAccountChangeConfig.findFirst({ where: { status: 'ACTIVE' }, orderBy: { version: 'desc' } });
        if (!config) {
            throw new investor_types_1.InvestorLifecycleError('No ACTIVE investor_bank_account_change_config -- cannot compute the cooling-off window (invariant 51a-i, never a silent bypass).');
        }
        const coolingOffEndsAt = new Date();
        coolingOffEndsAt.setDate(coolingOffEndsAt.getDate() + config.coolingOffDays);
        const newAccount = await this.prisma.investorBankAccount.create({
            data: {
                investorId: request.investorId,
                bankName: request.proposedBankName,
                accountNumber: request.proposedAccountNumber,
                accountName: request.proposedAccountName,
                accountType: request.proposedAccountType ?? undefined,
                currency: request.proposedCurrency ?? undefined,
                isPrimary: false,
                status: 'ACTIVE',
                verificationStatus: 'VERIFIED',
                verifiedByUserId: reVerifierUserId,
                coolingOffEndsAt,
            },
        });
        const updated = await this.prisma.investorBankAccountChangeRequest.update({
            where: { id: request.id },
            data: {
                status: 'COOLING_OFF',
                reVerifiedByUserId: reVerifierUserId,
                reVerifiedAt: new Date(),
                reVerificationNotes,
                coolingOffEndsAt,
                resultingBankAccountId: newAccount.id,
            },
        });
        await this.audit.record({
            actorUserId: reVerifierUserId,
            action: 'APPROVE',
            entityType: ENTITY_TYPE,
            entityId: request.id,
            after: { resultingBankAccountId: newAccount.id, coolingOffEndsAt: coolingOffEndsAt.toISOString() },
        });
        return updated;
    }
    async settleDueChanges(investorId) {
        const due = await this.prisma.investorBankAccountChangeRequest.findMany({
            where: { investorId, status: 'COOLING_OFF', coolingOffEndsAt: { lte: new Date() } },
        });
        for (const req of due) {
            if (!req.resultingBankAccountId)
                continue;
            await this.prisma.$transaction([
                this.prisma.investorBankAccount.updateMany({ where: { investorId, isPrimary: true, status: 'ACTIVE' }, data: { isPrimary: false, status: 'SUPERSEDED' } }),
                this.prisma.investorBankAccount.update({ where: { id: req.resultingBankAccountId }, data: { isPrimary: true } }),
                this.prisma.investorBankAccountChangeRequest.update({ where: { id: req.id }, data: { status: 'COMPLETED' } }),
            ]);
            await this.audit.record({
                actorUserId: req.reVerifiedByUserId ?? req.requestedByUserId,
                action: 'UPDATE',
                entityType: ENTITY_TYPE,
                entityId: req.id,
                after: { status: 'COMPLETED', supersededOldPrimary: true },
            });
        }
    }
    async listForInvestor(investorId) {
        return this.prisma.investorBankAccountChangeRequest.findMany({ where: { investorId }, orderBy: { createdAt: 'desc' } });
    }
    async getTrail(requestId) {
        const request = await this.prisma.investorBankAccountChangeRequest.findUniqueOrThrow({ where: { id: requestId } });
        const documents = await this.documents.listFor(ENTITY_TYPE, requestId);
        const workflowTrail = request.workflowInstanceId ? await this.workflow.getTrail(request.workflowInstanceId) : null;
        return { request, documents, workflowTrail };
    }
};
exports.InvestorBankAccountChangeService = InvestorBankAccountChangeService;
exports.InvestorBankAccountChangeService = InvestorBankAccountChangeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService,
        document_service_1.DocumentService])
], InvestorBankAccountChangeService);
//# sourceMappingURL=investor-bank-account-change.service.js.map