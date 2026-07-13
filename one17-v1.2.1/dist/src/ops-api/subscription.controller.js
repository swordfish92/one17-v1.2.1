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
exports.SubscriptionController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const subscription_service_1 = require("../subscription/subscription.service");
const subscription_types_1 = require("../subscription/subscription.types");
const workflow_service_1 = require("../workflow/workflow.service");
const ops_api_types_1 = require("./ops-api.types");
let SubscriptionController = class SubscriptionController {
    subscriptions;
    workflow;
    constructor(subscriptions, workflow) {
        this.subscriptions = subscriptions;
        this.workflow = workflow;
    }
    async list(productCode, investorId, requestType, status) {
        return this.subscriptions.listRequests({ productCode, investorId, requestType, status });
    }
    async get(id) {
        const request = await this.subscriptions.getRequest(id);
        const trail = request.workflowInstanceId ? await this.workflow.getTrail(request.workflowInstanceId) : null;
        return { request, trail };
    }
    async initiate(dto, user) {
        try {
            return await this.subscriptions.initiateSubscription({
                investorId: dto.investorId,
                productCode: dto.productCode,
                amountKobo: BigInt(dto.amountKobo),
                effectiveDate: dto.effectiveDate ? new Date(dto.effectiveDate) : new Date(),
                initiatedByUserId: user.userId,
            });
        }
        catch (err) {
            if (err instanceof subscription_types_1.SubscriptionServiceError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async confirmTarget(id, dto, user) {
        try {
            return await this.subscriptions.confirmDepositAndSetTarget({
                subscriptionRequestId: id,
                targetReturnPct: dto.targetReturnPct,
                maturityDate: new Date(dto.maturityDate),
                profitPaymentInterval: dto.profitPaymentInterval,
                confirmedByUserId: user.userId,
            });
        }
        catch (err) {
            if (err instanceof subscription_types_1.SubscriptionServiceError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async approve(id, dto, user) {
        const request = await this.subscriptions.getRequest(id);
        if (request.requestType !== 'SUBSCRIPTION') {
            throw new common_1.BadRequestException(`subscription_request ${id} is a ${request.requestType} request -- this route only approves SUBSCRIPTION requests; REDEMPTION_APPROVAL is dispatched via the Workflow Inbox.`);
        }
        if (!request.workflowInstanceId) {
            throw new common_1.BadRequestException(`subscription_request ${id} has no workflow instance to approve.`);
        }
        try {
            return await this.subscriptions.approveSubscription({
                workflowInstanceId: request.workflowInstanceId,
                approverUserId: user.userId,
                journalInitiatorUserId: dto.journalInitiatorUserId,
                payerBankAccountId: dto.payerBankAccountId,
                thirdPartyPayer: dto.thirdPartyPayer,
            });
        }
        catch (err) {
            if (err instanceof subscription_types_1.SubscriptionServiceError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async reject(id, dto, user) {
        const request = await this.subscriptions.getRequest(id);
        if (request.requestType !== 'SUBSCRIPTION') {
            throw new common_1.BadRequestException(`subscription_request ${id} is a ${request.requestType} request -- this route only rejects SUBSCRIPTION requests; REDEMPTION_APPROVAL is dispatched via the Workflow Inbox.`);
        }
        if (!request.workflowInstanceId) {
            throw new common_1.BadRequestException(`subscription_request ${id} has no workflow instance to reject.`);
        }
        try {
            return await this.subscriptions.rejectRequest(request.workflowInstanceId, user.userId, dto.notes);
        }
        catch (err) {
            if (err instanceof subscription_types_1.SubscriptionServiceError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
};
exports.SubscriptionController = SubscriptionController;
__decorate([
    (0, common_1.Get)(),
    (0, requires_capability_decorator_1.RequiresCapability)('CAPITAL_PLACEMENT', 'VIEW'),
    __param(0, (0, common_1.Query)('productCode')),
    __param(1, (0, common_1.Query)('investorId')),
    __param(2, (0, common_1.Query)('requestType')),
    __param(3, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, requires_capability_decorator_1.RequiresCapability)('CAPITAL_PLACEMENT', 'VIEW'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(),
    (0, requires_capability_decorator_1.RequiresCapability)('CAPITAL_PLACEMENT', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.InitiateSubscriptionRequestDto, Object]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "initiate", null);
__decorate([
    (0, common_1.Post)(':id/confirm-target'),
    (0, requires_capability_decorator_1.RequiresCapability)('SUBSCRIPTION_TARGET_CONFIRMATION', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.ConfirmDepositAndSetTargetDto, Object]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "confirmTarget", null);
__decorate([
    (0, common_1.Post)(':id/approve'),
    (0, requires_capability_decorator_1.RequiresCapability)('CAPITAL_PLACEMENT', 'APPROVE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.ApproveSubscriptionRequestDto, Object]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "approve", null);
__decorate([
    (0, common_1.Post)(':id/reject'),
    (0, requires_capability_decorator_1.RequiresCapability)('CAPITAL_PLACEMENT', 'APPROVE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.WorkflowDecisionDto, Object]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "reject", null);
exports.SubscriptionController = SubscriptionController = __decorate([
    (0, common_1.Controller)('subscription-requests'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [subscription_service_1.SubscriptionService,
        workflow_service_1.WorkflowEngineService])
], SubscriptionController);
//# sourceMappingURL=subscription.controller.js.map