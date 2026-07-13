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
exports.ErmController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const prisma_service_1 = require("../prisma/prisma.service");
const risk_service_1 = require("../risk/risk.service");
const stress_engine_service_1 = require("../stress-engine/stress-engine.service");
const bureau_gateway_service_1 = require("../bureau-gateway/bureau-gateway.service");
const ops_api_types_1 = require("./ops-api.types");
let ErmController = class ErmController {
    prisma;
    risk;
    stressEngine;
    bureauGateway;
    constructor(prisma, risk, stressEngine, bureauGateway) {
        this.prisma = prisma;
        this.risk = risk;
        this.stressEngine = stressEngine;
        this.bureauGateway = bureauGateway;
    }
    async listKriReadings(kriCode) {
        return this.prisma.kriReading.findMany({
            where: kriCode ? { kriCode } : undefined,
            orderBy: { readingDate: 'desc' },
            take: 200,
            include: { definition: { select: { name: true, category: true, direction: true, computeStatus: true } } },
        });
    }
    async listKriEscalations() {
        return this.prisma.kriEscalation.findMany({ orderBy: { escalatedAt: 'desc' }, take: 100 });
    }
    async listStressRuns(modelType) {
        return this.prisma.stressTestRun.findMany({
            where: modelType ? { modelType: modelType } : undefined,
            orderBy: { ranAt: 'desc' },
            take: 100,
        });
    }
    async getRiskMatrix() {
        return this.risk.getActiveMatrix();
    }
    async getRiskRegister(status) {
        return this.risk.getRiskRegister(status);
    }
    async listPendingRiskMatrixVersions() {
        return this.prisma.riskAppetiteMatrixVersion.findMany({
            where: { status: 'DRAFT' },
            include: { categories: { orderBy: { sortOrder: 'asc' } } },
            orderBy: { version: 'desc' },
        });
    }
    async proposeRiskMatrixVersion(dto, user) {
        return this.risk.proposeMatrixVersion({ proposedByUserId: user.userId, cloneFromVersionId: dto.cloneFromVersionId });
    }
    async updateRiskCategoryThresholds(categoryId, dto, user) {
        const category = await this.prisma.riskAppetiteCategory.findUniqueOrThrow({ where: { id: categoryId } });
        return this.risk.updateCategoryThresholds({
            matrixVersionId: category.matrixVersionId,
            sortOrder: category.sortOrder,
            greenThreshold: dto.greenThreshold,
            amberThreshold: dto.amberThreshold,
            redThreshold: dto.redThreshold,
            actorUserId: user.userId,
        });
    }
    async approveRiskMatrixVersion(workflowInstanceId, dto, user) {
        return this.risk.approveMatrixVersion({ workflowInstanceId, approverUserId: user.userId, boardResolutionRef: dto.boardResolutionRef });
    }
    async approveRiskRegisterEntry(id, dto, user) {
        return this.risk.approveRiskRegisterEntry({ id, approverUserId: user.userId, boardResolutionRef: dto.boardResolutionRef });
    }
    async listStressScenarios(modelType) {
        return this.prisma.stressScenarioConfig.findMany({
            where: { status: 'ACTIVE', modelType: modelType ? modelType : undefined },
            orderBy: [{ modelType: 'asc' }, { scenarioCode: 'asc' }],
        });
    }
    async runStressTest(dto, user) {
        const input = { ledgerEntityCode: dto.ledgerEntityCode, runMode: dto.runMode, ranByUserId: user.userId };
        switch (dto.modelType) {
            case 'LIQUIDITY':
                return this.stressEngine.runLiquidityStress(dto.scenarioCode, input);
            case 'CAPITAL_ADEQUACY':
                return this.stressEngine.runCapitalAdequacyStress(dto.scenarioCode, input);
            case 'REVENUE_SENSITIVITY':
                return this.stressEngine.runRevenueSensitivityStress(dto.scenarioCode, input);
            case 'COUNTERPARTY_DEFAULT':
                return this.stressEngine.runCounterpartyDefaultStress(input);
            case 'PORTFOLIO_SHOCK':
                return this.stressEngine.runPortfolioShockStress(input);
            case 'REVERSE_STRESS':
                return this.stressEngine.runReverseStress(input);
        }
    }
    async requestStressBaselinePublication(runId, user) {
        return this.stressEngine.requestBaselinePublication(runId, user.userId);
    }
    async listBureauProviders() {
        return this.bureauGateway.listProviders();
    }
    async configureBureauProvider(dto, user) {
        return this.bureauGateway.configureProvider({ ...dto, costPerPullKobo: BigInt(dto.costPerPullKobo) }, user.userId);
    }
    async getBureauPolicy() {
        return this.bureauGateway.getPolicy();
    }
    async updateBureauPolicy(dto, user) {
        return this.bureauGateway.updatePolicy(dto, user.userId);
    }
    async listBureauPullRegister(user) {
        return this.bureauGateway.listAllPullHistory(user.userId);
    }
};
exports.ErmController = ErmController;
__decorate([
    (0, common_1.Get)('kri-readings'),
    (0, requires_capability_decorator_1.RequiresCapability)('RISK_APPETITE_MATRIX', 'VIEW'),
    __param(0, (0, common_1.Query)('kriCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ErmController.prototype, "listKriReadings", null);
__decorate([
    (0, common_1.Get)('kri-escalations'),
    (0, requires_capability_decorator_1.RequiresCapability)('RISK_APPETITE_MATRIX', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ErmController.prototype, "listKriEscalations", null);
__decorate([
    (0, common_1.Get)('stress-runs'),
    (0, requires_capability_decorator_1.RequiresCapability)('STRESS_TESTING', 'VIEW'),
    __param(0, (0, common_1.Query)('modelType')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ErmController.prototype, "listStressRuns", null);
__decorate([
    (0, common_1.Get)('risk-matrix'),
    (0, requires_capability_decorator_1.RequiresCapability)('RISK_APPETITE_MATRIX', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ErmController.prototype, "getRiskMatrix", null);
__decorate([
    (0, common_1.Get)('risk-register'),
    (0, requires_capability_decorator_1.RequiresCapability)('RISK_REGISTER', 'VIEW'),
    __param(0, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ErmController.prototype, "getRiskRegister", null);
__decorate([
    (0, common_1.Get)('risk-matrix/pending'),
    (0, requires_capability_decorator_1.RequiresCapability)('RISK_APPETITE_MATRIX', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ErmController.prototype, "listPendingRiskMatrixVersions", null);
__decorate([
    (0, common_1.Post)('risk-matrix/propose'),
    (0, requires_capability_decorator_1.RequiresCapability)('RISK_APPETITE_MATRIX', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.ProposeRiskMatrixVersionDto, Object]),
    __metadata("design:returntype", Promise)
], ErmController.prototype, "proposeRiskMatrixVersion", null);
__decorate([
    (0, common_1.Post)('risk-matrix/categories/:categoryId/thresholds'),
    (0, requires_capability_decorator_1.RequiresCapability)('RISK_APPETITE_MATRIX', 'INITIATE'),
    __param(0, (0, common_1.Param)('categoryId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.UpdateRiskCategoryThresholdsDto, Object]),
    __metadata("design:returntype", Promise)
], ErmController.prototype, "updateRiskCategoryThresholds", null);
__decorate([
    (0, common_1.Post)('risk-matrix/:workflowInstanceId/approve'),
    (0, requires_capability_decorator_1.RequiresCapability)('RISK_APPETITE_MATRIX', 'APPROVE'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.ApproveRiskMatrixVersionDto, Object]),
    __metadata("design:returntype", Promise)
], ErmController.prototype, "approveRiskMatrixVersion", null);
__decorate([
    (0, common_1.Post)('risk-register/:id/approve'),
    (0, requires_capability_decorator_1.RequiresCapability)('RISK_REGISTER', 'APPROVE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.ApproveRiskRegisterEntryDto, Object]),
    __metadata("design:returntype", Promise)
], ErmController.prototype, "approveRiskRegisterEntry", null);
__decorate([
    (0, common_1.Get)('stress-scenarios'),
    (0, requires_capability_decorator_1.RequiresCapability)('STRESS_TESTING', 'VIEW'),
    __param(0, (0, common_1.Query)('modelType')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ErmController.prototype, "listStressScenarios", null);
__decorate([
    (0, common_1.Post)('stress/run'),
    (0, requires_capability_decorator_1.RequiresCapability)('STRESS_TESTING', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.RunStressTestDto, Object]),
    __metadata("design:returntype", Promise)
], ErmController.prototype, "runStressTest", null);
__decorate([
    (0, common_1.Post)('stress/:runId/request-baseline'),
    (0, requires_capability_decorator_1.RequiresCapability)('STRESS_TESTING', 'INITIATE'),
    __param(0, (0, common_1.Param)('runId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ErmController.prototype, "requestStressBaselinePublication", null);
__decorate([
    (0, common_1.Get)('bureau-providers'),
    (0, requires_capability_decorator_1.RequiresCapability)('BUREAU_GATEWAY_POLICY', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ErmController.prototype, "listBureauProviders", null);
__decorate([
    (0, common_1.Post)('bureau-providers'),
    (0, requires_capability_decorator_1.RequiresCapability)('BUREAU_GATEWAY_POLICY', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.ConfigureBureauProviderDto, Object]),
    __metadata("design:returntype", Promise)
], ErmController.prototype, "configureBureauProvider", null);
__decorate([
    (0, common_1.Get)('bureau-policy'),
    (0, requires_capability_decorator_1.RequiresCapability)('BUREAU_GATEWAY_POLICY', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ErmController.prototype, "getBureauPolicy", null);
__decorate([
    (0, common_1.Post)('bureau-policy'),
    (0, requires_capability_decorator_1.RequiresCapability)('BUREAU_GATEWAY_POLICY', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.UpdateBureauPolicyDto, Object]),
    __metadata("design:returntype", Promise)
], ErmController.prototype, "updateBureauPolicy", null);
__decorate([
    (0, common_1.Get)('bureau-pull-register'),
    (0, requires_capability_decorator_1.RequiresCapability)('BUREAU_GATEWAY_POLICY', 'VIEW'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ErmController.prototype, "listBureauPullRegister", null);
exports.ErmController = ErmController = __decorate([
    (0, common_1.Controller)('erm'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        risk_service_1.RiskService,
        stress_engine_service_1.StressEngineService,
        bureau_gateway_service_1.BureauGatewayService])
], ErmController);
//# sourceMappingURL=erm.controller.js.map