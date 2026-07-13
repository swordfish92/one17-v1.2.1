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
exports.StrategyLayerController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const strategy_layer_service_1 = require("../strategy-layer/strategy-layer.service");
const ops_api_types_1 = require("./ops-api.types");
let StrategyLayerController = class StrategyLayerController {
    strategyLayer;
    constructor(strategyLayer) {
        this.strategyLayer = strategyLayer;
    }
    async getActive() {
        return this.strategyLayer.getActiveStrategy();
    }
    async listStatementTypeConfigs() {
        return this.strategyLayer.listStatementTypeConfigs();
    }
    async addStatementTypeConfig(dto, user) {
        return this.strategyLayer.addStatementTypeConfig({ ...dto, actorUserId: user.userId });
    }
    async proposeStatement(dto, user) {
        return this.strategyLayer.proposeStatement({ ...dto, proposedByUserId: user.userId });
    }
    async listPendingStatements() {
        return this.strategyLayer.listPendingStatements();
    }
    async approveStatement(workflowInstanceId, dto, user) {
        return this.strategyLayer.approveStatement({ workflowInstanceId, approverUserId: user.userId, boardResolutionRef: dto.boardResolutionRef });
    }
    async updatePillarGovernance(code, dto, user) {
        return this.strategyLayer.updatePillarGovernance({ pillarCode: code, ...dto, actorUserId: user.userId });
    }
    async updateObjectiveGovernance(code, dto, user) {
        return this.strategyLayer.updateObjectiveGovernance({ objectiveCode: code, ...dto, actorUserId: user.userId });
    }
    async proposePillar(dto, user) {
        return this.strategyLayer.proposePillar({ ...dto, proposedByUserId: user.userId });
    }
    async listPendingPillars() {
        return this.strategyLayer.listPendingPillars();
    }
    async approvePillar(workflowInstanceId, dto, user) {
        return this.strategyLayer.approvePillar({ workflowInstanceId, approverUserId: user.userId, boardResolutionRef: dto.boardResolutionRef });
    }
    async proposeObjective(dto, user) {
        return this.strategyLayer.proposeObjective({ ...dto, proposedByUserId: user.userId });
    }
    async listPendingObjectives() {
        return this.strategyLayer.listPendingObjectives();
    }
    async approveObjective(workflowInstanceId, dto, user) {
        return this.strategyLayer.approveObjective({ workflowInstanceId, approverUserId: user.userId, boardResolutionRef: dto.boardResolutionRef });
    }
    async listKraObjectiveMap() {
        return this.strategyLayer.listKraObjectiveMap();
    }
    async mapKraToObjective(dto, user) {
        return this.strategyLayer.mapKraToObjective({ ...dto, actorUserId: user.userId });
    }
    async unmapKraFromObjective(kraCode, objectiveCode, user) {
        return this.strategyLayer.unmapKraFromObjective(kraCode, objectiveCode, user.userId);
    }
    async publish(dto, user) {
        return this.strategyLayer.publish({ summary: dto.summary, publishedByUserId: user.userId });
    }
    async acknowledge(publicationId, user) {
        return this.strategyLayer.acknowledge(publicationId, user.userId);
    }
    async getAcknowledgmentStatus() {
        return this.strategyLayer.getAcknowledgmentStatus();
    }
};
exports.StrategyLayerController = StrategyLayerController;
__decorate([
    (0, common_1.Get)('active'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StrategyLayerController.prototype, "getActive", null);
__decorate([
    (0, common_1.Get)('statement-types'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StrategyLayerController.prototype, "listStatementTypeConfigs", null);
__decorate([
    (0, common_1.Post)('statement-types'),
    (0, requires_capability_decorator_1.RequiresCapability)('STRATEGY_LAYER', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.AddStatementTypeConfigDto, Object]),
    __metadata("design:returntype", Promise)
], StrategyLayerController.prototype, "addStatementTypeConfig", null);
__decorate([
    (0, common_1.Post)('statements'),
    (0, requires_capability_decorator_1.RequiresCapability)('STRATEGY_LAYER', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.ProposeStrategyStatementDto, Object]),
    __metadata("design:returntype", Promise)
], StrategyLayerController.prototype, "proposeStatement", null);
__decorate([
    (0, common_1.Get)('statements/pending'),
    (0, requires_capability_decorator_1.RequiresCapability)('STRATEGY_LAYER', 'APPROVE'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StrategyLayerController.prototype, "listPendingStatements", null);
__decorate([
    (0, common_1.Post)('statements/:workflowInstanceId/approve'),
    (0, requires_capability_decorator_1.RequiresCapability)('STRATEGY_LAYER', 'APPROVE'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.ApproveStrategyStatementDto, Object]),
    __metadata("design:returntype", Promise)
], StrategyLayerController.prototype, "approveStatement", null);
__decorate([
    (0, common_1.Post)('pillars/:code/governance'),
    (0, requires_capability_decorator_1.RequiresCapability)('STRATEGY_LAYER', 'INITIATE'),
    __param(0, (0, common_1.Param)('code')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.UpdatePillarGovernanceDto, Object]),
    __metadata("design:returntype", Promise)
], StrategyLayerController.prototype, "updatePillarGovernance", null);
__decorate([
    (0, common_1.Post)('objectives/:code/governance'),
    (0, requires_capability_decorator_1.RequiresCapability)('STRATEGY_LAYER', 'INITIATE'),
    __param(0, (0, common_1.Param)('code')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.UpdateObjectiveGovernanceDto, Object]),
    __metadata("design:returntype", Promise)
], StrategyLayerController.prototype, "updateObjectiveGovernance", null);
__decorate([
    (0, common_1.Post)('pillars'),
    (0, requires_capability_decorator_1.RequiresCapability)('STRATEGY_LAYER', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.ProposePillarDto, Object]),
    __metadata("design:returntype", Promise)
], StrategyLayerController.prototype, "proposePillar", null);
__decorate([
    (0, common_1.Get)('pillars/pending'),
    (0, requires_capability_decorator_1.RequiresCapability)('STRATEGY_LAYER', 'APPROVE'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StrategyLayerController.prototype, "listPendingPillars", null);
__decorate([
    (0, common_1.Post)('pillars/:workflowInstanceId/approve'),
    (0, requires_capability_decorator_1.RequiresCapability)('STRATEGY_LAYER', 'APPROVE'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.ApprovePillarDto, Object]),
    __metadata("design:returntype", Promise)
], StrategyLayerController.prototype, "approvePillar", null);
__decorate([
    (0, common_1.Post)('objectives'),
    (0, requires_capability_decorator_1.RequiresCapability)('STRATEGY_LAYER', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.ProposeObjectiveDto, Object]),
    __metadata("design:returntype", Promise)
], StrategyLayerController.prototype, "proposeObjective", null);
__decorate([
    (0, common_1.Get)('objectives/pending'),
    (0, requires_capability_decorator_1.RequiresCapability)('STRATEGY_LAYER', 'APPROVE'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StrategyLayerController.prototype, "listPendingObjectives", null);
__decorate([
    (0, common_1.Post)('objectives/:workflowInstanceId/approve'),
    (0, requires_capability_decorator_1.RequiresCapability)('STRATEGY_LAYER', 'APPROVE'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.ApproveObjectiveDto, Object]),
    __metadata("design:returntype", Promise)
], StrategyLayerController.prototype, "approveObjective", null);
__decorate([
    (0, common_1.Get)('kra-objective-map'),
    (0, requires_capability_decorator_1.RequiresCapability)('STRATEGY_LAYER', 'INITIATE'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StrategyLayerController.prototype, "listKraObjectiveMap", null);
__decorate([
    (0, common_1.Post)('kra-objective-map'),
    (0, requires_capability_decorator_1.RequiresCapability)('STRATEGY_LAYER', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.MapKraToObjectiveDto, Object]),
    __metadata("design:returntype", Promise)
], StrategyLayerController.prototype, "mapKraToObjective", null);
__decorate([
    (0, common_1.Post)('kra-objective-map/:kraCode/:objectiveCode/remove'),
    (0, requires_capability_decorator_1.RequiresCapability)('STRATEGY_LAYER', 'INITIATE'),
    __param(0, (0, common_1.Param)('kraCode')),
    __param(1, (0, common_1.Param)('objectiveCode')),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], StrategyLayerController.prototype, "unmapKraFromObjective", null);
__decorate([
    (0, common_1.Post)('publish'),
    (0, requires_capability_decorator_1.RequiresCapability)('STRATEGY_LAYER', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.PublishStrategyDto, Object]),
    __metadata("design:returntype", Promise)
], StrategyLayerController.prototype, "publish", null);
__decorate([
    (0, common_1.Post)('acknowledge/:publicationId'),
    __param(0, (0, common_1.Param)('publicationId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], StrategyLayerController.prototype, "acknowledge", null);
__decorate([
    (0, common_1.Get)('acknowledgment-status'),
    (0, requires_capability_decorator_1.RequiresCapability)('STRATEGY_LAYER', 'INITIATE'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StrategyLayerController.prototype, "getAcknowledgmentStatus", null);
exports.StrategyLayerController = StrategyLayerController = __decorate([
    (0, common_1.Controller)('strategy'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [strategy_layer_service_1.StrategyLayerService])
], StrategyLayerController);
//# sourceMappingURL=strategy-layer.controller.js.map