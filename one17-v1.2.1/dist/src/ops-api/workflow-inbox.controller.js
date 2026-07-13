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
exports.WorkflowInboxController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const workflow_inbox_service_1 = require("./workflow-inbox.service");
const ops_api_types_1 = require("./ops-api.types");
let WorkflowInboxController = class WorkflowInboxController {
    inboxService;
    constructor(inboxService) {
        this.inboxService = inboxService;
    }
    async inbox(user) {
        const items = await this.inboxService.inbox(user.userId);
        return items.map(({ instance, pendingStep, viaDelegationId }) => ({
            workflowInstanceId: instance.id,
            workflowTypeCode: instance.workflowTypeCode,
            entityType: instance.entityType,
            entityId: instance.entityId,
            amountKobo: instance.amountKobo?.toString() ?? null,
            initiatedByUserId: instance.initiatedByUserId,
            createdAt: instance.createdAt,
            pendingStep: { stepOrder: pendingStep.stepOrder, requiredFunctionCode: pendingStep.requiredFunctionCode },
            viaDelegationId: viaDelegationId ?? null,
        }));
    }
    async approve(workflowInstanceId, dto, user) {
        return this.inboxService.approve(workflowInstanceId, user.userId, dto.notes);
    }
    async reject(workflowInstanceId, dto, user) {
        return this.inboxService.reject(workflowInstanceId, user.userId, dto.notes);
    }
};
exports.WorkflowInboxController = WorkflowInboxController;
__decorate([
    (0, common_1.Get)('inbox'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WorkflowInboxController.prototype, "inbox", null);
__decorate([
    (0, common_1.Post)(':workflowInstanceId/approve'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.WorkflowDecisionDto, Object]),
    __metadata("design:returntype", Promise)
], WorkflowInboxController.prototype, "approve", null);
__decorate([
    (0, common_1.Post)(':workflowInstanceId/reject'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.WorkflowDecisionDto, Object]),
    __metadata("design:returntype", Promise)
], WorkflowInboxController.prototype, "reject", null);
exports.WorkflowInboxController = WorkflowInboxController = __decorate([
    (0, common_1.Controller)('workflow'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard),
    __metadata("design:paramtypes", [workflow_inbox_service_1.WorkflowInboxService])
], WorkflowInboxController);
//# sourceMappingURL=workflow-inbox.controller.js.map