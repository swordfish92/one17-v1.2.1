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
exports.WmController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const prisma_service_1 = require("../prisma/prisma.service");
const wm_service_1 = require("../wm/wm.service");
const portal_auth_service_1 = require("../portal-auth/portal-auth.service");
const ops_api_types_1 = require("./ops-api.types");
let WmController = class WmController {
    wm;
    portalAuth;
    prisma;
    constructor(wm, portalAuth, prisma) {
        this.wm = wm;
        this.portalAuth = portalAuth;
        this.prisma = prisma;
    }
    async listAssetClasses() {
        return this.prisma.assetClassRegistry.findMany({ where: { isActive: true }, orderBy: { code: 'asc' } });
    }
    async listStressScenarios() {
        return this.prisma.wmStressScenarioConfig.findMany({ where: { status: 'ACTIVE' }, orderBy: { scenarioCode: 'asc' } });
    }
    async listClients() {
        return this.wm.listClients();
    }
    async listPreWmProspects() {
        return this.wm.listPreWmProspects();
    }
    async preWmPyramid(investorId) {
        return this.wm.getPreWmPyramidData(investorId);
    }
    async clientDashboard(investorId) {
        return this.wm.getClientDashboard(investorId);
    }
    async onboardClient(investorId, dto, user) {
        const profile = await this.wm.onboardWmClient({ investorId, advisorUserId: dto.advisorUserId, onboardedByUserId: user.userId });
        const portal = await this.portalAuth.provisionForInvestor(profile.investorId);
        return { profile, portal };
    }
    async recomputeTier(investorId) {
        return this.wm.recomputeTier(investorId);
    }
    async declareAsset(investorId, dto, user) {
        return this.wm.declareClientAsset({
            investorId,
            assetClassCode: dto.assetClassCode,
            description: dto.description,
            quantity: dto.quantity,
            declaredValueKobo: BigInt(dto.declaredValueKobo),
            valuationDate: new Date(dto.valuationDate),
            custodyFlag: dto.custodyFlag,
            evidenceDocumentId: dto.evidenceDocumentId,
            declaredByUserId: user.userId,
            maturityDate: dto.maturityDate ? new Date(dto.maturityDate) : undefined,
            tenorMonths: dto.tenorMonths,
            scheduledProfitTakingDates: dto.scheduledProfitTakingDates,
            targetReturnPct: dto.targetReturnPct,
        });
    }
    async nwcsPyramid(investorId) {
        return this.wm.getNwcsPyramidData(investorId);
    }
    async holdingDetailStaff(assetId, investorId) {
        return this.wm.getHoldingDetail(assetId, investorId);
    }
    async getFxConfig() {
        return this.wm.getFxConfig();
    }
    async updateFxRate(dto, user) {
        return this.wm.updateFxRate(dto.nairaPerUsd, user.userId);
    }
    async listPendingHoldingActionRequests(user) {
        return this.wm.listPendingHoldingActionRequests(user.userId);
    }
    async actionHoldingRequest(id, user) {
        return this.wm.actionHoldingRequest(id, user.userId);
    }
    async setShariahScreen(assetId, dto, user) {
        return this.wm.setShariahScreen(assetId, dto.tag, user.userId);
    }
    async setAllocationPolicy(investorId, dto, user) {
        return this.wm.setAllocationPolicy({ investorId, targetAllocations: dto.targetAllocations, riskBand: dto.riskBand, createdByUserId: user.userId });
    }
    async setRiskProfile(investorId, dto, user) {
        return this.wm.setRiskProfile({ investorId, questionnaireResponses: dto.questionnaireResponses, riskBand: dto.riskBand, createdByUserId: user.userId });
    }
    async setGrowthPlan(investorId, dto, user) {
        return this.wm.setGrowthPlan({
            investorId,
            horizon: dto.horizon,
            milestones: dto.milestones,
            targetGlidePath: dto.targetGlidePath,
            reviewSchedule: dto.reviewSchedule,
            createdByUserId: user.userId,
        });
    }
    async createAdvisoryRecord(investorId, dto, user) {
        return this.wm.createAdvisoryRecord({ investorId, recommendation: dto.recommendation, rationale: dto.rationale, riskNotes: dto.riskNotes, shariahNote: dto.shariahNote, advisorUserId: user.userId });
    }
    async runSandboxRiskAssessment(investorId, dto, user) {
        return this.wm.runSandboxRiskAssessment({ investorId, scenarioCode: dto.scenarioCode, ranByUserId: user.userId });
    }
    async publishRiskAssessment(runId, user) {
        return this.wm.publishRiskAssessment(runId, user.userId);
    }
    async chargeAdvisoryFee(investorId, dto, user) {
        return this.wm.chargeAdvisoryFee({
            investorId,
            ledgerEntityCode: dto.ledgerEntityCode,
            amountKobo: BigInt(dto.amountKobo),
            drAccountCodeOverride: dto.drAccountCodeOverride,
            crAccountCodeOverride: dto.crAccountCodeOverride,
            entryDate: new Date(dto.entryDate),
            actorUserId: user.userId,
        });
    }
};
exports.WmController = WmController;
__decorate([
    (0, common_1.Get)('asset-classes'),
    (0, requires_capability_decorator_1.RequiresCapability)('WM_ADVISORY', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WmController.prototype, "listAssetClasses", null);
__decorate([
    (0, common_1.Get)('stress-scenarios'),
    (0, requires_capability_decorator_1.RequiresCapability)('WM_ADVISORY', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WmController.prototype, "listStressScenarios", null);
__decorate([
    (0, common_1.Get)('clients'),
    (0, requires_capability_decorator_1.RequiresCapability)('WM_ADVISORY', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WmController.prototype, "listClients", null);
__decorate([
    (0, common_1.Get)('prospects'),
    (0, requires_capability_decorator_1.RequiresCapability)('WM_ADVISORY', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WmController.prototype, "listPreWmProspects", null);
__decorate([
    (0, common_1.Get)('prospects/:investorId/pyramid'),
    (0, requires_capability_decorator_1.RequiresCapability)('WM_ADVISORY', 'VIEW'),
    __param(0, (0, common_1.Param)('investorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WmController.prototype, "preWmPyramid", null);
__decorate([
    (0, common_1.Get)('clients/:investorId/dashboard'),
    (0, requires_capability_decorator_1.RequiresCapability)('WM_ADVISORY', 'VIEW'),
    __param(0, (0, common_1.Param)('investorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WmController.prototype, "clientDashboard", null);
__decorate([
    (0, common_1.Post)('clients/:investorId/onboard'),
    (0, requires_capability_decorator_1.RequiresCapability)('WM_ADVISORY', 'INITIATE'),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.OnboardWmClientDto, Object]),
    __metadata("design:returntype", Promise)
], WmController.prototype, "onboardClient", null);
__decorate([
    (0, common_1.Post)('clients/:investorId/recompute-tier'),
    (0, requires_capability_decorator_1.RequiresCapability)('WM_ADVISORY', 'INITIATE'),
    __param(0, (0, common_1.Param)('investorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WmController.prototype, "recomputeTier", null);
__decorate([
    (0, common_1.Post)('clients/:investorId/assets'),
    (0, requires_capability_decorator_1.RequiresCapability)('WM_ADVISORY', 'INITIATE'),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.DeclareClientAssetDto, Object]),
    __metadata("design:returntype", Promise)
], WmController.prototype, "declareAsset", null);
__decorate([
    (0, common_1.Get)('clients/:investorId/nwcs-pyramid'),
    (0, requires_capability_decorator_1.RequiresCapability)('WM_ADVISORY', 'VIEW'),
    __param(0, (0, common_1.Param)('investorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WmController.prototype, "nwcsPyramid", null);
__decorate([
    (0, common_1.Get)('assets/:assetId/holding-detail/:investorId'),
    (0, requires_capability_decorator_1.RequiresCapability)('WM_ADVISORY', 'VIEW'),
    __param(0, (0, common_1.Param)('assetId')),
    __param(1, (0, common_1.Param)('investorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], WmController.prototype, "holdingDetailStaff", null);
__decorate([
    (0, common_1.Get)('fx-config'),
    (0, requires_capability_decorator_1.RequiresCapability)('WM_ADVISORY', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WmController.prototype, "getFxConfig", null);
__decorate([
    (0, common_1.Post)('fx-config'),
    (0, requires_capability_decorator_1.RequiresCapability)('WM_ADVISORY', 'APPROVE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.UpdateWmFxRateDto, Object]),
    __metadata("design:returntype", Promise)
], WmController.prototype, "updateFxRate", null);
__decorate([
    (0, common_1.Get)('holding-action-requests/pending'),
    (0, requires_capability_decorator_1.RequiresCapability)('WM_ADVISORY', 'VIEW'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WmController.prototype, "listPendingHoldingActionRequests", null);
__decorate([
    (0, common_1.Post)('holding-action-requests/:id/action'),
    (0, requires_capability_decorator_1.RequiresCapability)('WM_ADVISORY', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], WmController.prototype, "actionHoldingRequest", null);
__decorate([
    (0, common_1.Post)('assets/:assetId/shariah-screen'),
    (0, requires_capability_decorator_1.RequiresCapability)('WM_ADVISORY', 'INITIATE'),
    __param(0, (0, common_1.Param)('assetId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.SetShariahScreenDto, Object]),
    __metadata("design:returntype", Promise)
], WmController.prototype, "setShariahScreen", null);
__decorate([
    (0, common_1.Post)('clients/:investorId/allocation-policy'),
    (0, requires_capability_decorator_1.RequiresCapability)('WM_ADVISORY', 'INITIATE'),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.SetAllocationPolicyDto, Object]),
    __metadata("design:returntype", Promise)
], WmController.prototype, "setAllocationPolicy", null);
__decorate([
    (0, common_1.Post)('clients/:investorId/risk-profile'),
    (0, requires_capability_decorator_1.RequiresCapability)('WM_ADVISORY', 'INITIATE'),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.SetRiskProfileDto, Object]),
    __metadata("design:returntype", Promise)
], WmController.prototype, "setRiskProfile", null);
__decorate([
    (0, common_1.Post)('clients/:investorId/growth-plan'),
    (0, requires_capability_decorator_1.RequiresCapability)('WM_ADVISORY', 'INITIATE'),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.SetGrowthPlanDto, Object]),
    __metadata("design:returntype", Promise)
], WmController.prototype, "setGrowthPlan", null);
__decorate([
    (0, common_1.Post)('clients/:investorId/advisory-records'),
    (0, requires_capability_decorator_1.RequiresCapability)('WM_ADVISORY', 'INITIATE'),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.CreateAdvisoryRecordDto, Object]),
    __metadata("design:returntype", Promise)
], WmController.prototype, "createAdvisoryRecord", null);
__decorate([
    (0, common_1.Post)('clients/:investorId/risk-assessments'),
    (0, requires_capability_decorator_1.RequiresCapability)('WM_ADVISORY', 'INITIATE'),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.RunSandboxRiskAssessmentDto, Object]),
    __metadata("design:returntype", Promise)
], WmController.prototype, "runSandboxRiskAssessment", null);
__decorate([
    (0, common_1.Post)('risk-assessments/:runId/publish'),
    (0, requires_capability_decorator_1.RequiresCapability)('WM_ADVISORY', 'INITIATE'),
    __param(0, (0, common_1.Param)('runId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], WmController.prototype, "publishRiskAssessment", null);
__decorate([
    (0, common_1.Post)('clients/:investorId/advisory-fee'),
    (0, requires_capability_decorator_1.RequiresCapability)('JOURNAL_ENTRIES', 'INITIATE'),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.ChargeAdvisoryFeeDto, Object]),
    __metadata("design:returntype", Promise)
], WmController.prototype, "chargeAdvisoryFee", null);
exports.WmController = WmController = __decorate([
    (0, common_1.Controller)('wm'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [wm_service_1.WmService,
        portal_auth_service_1.PortalAuthService,
        prisma_service_1.PrismaService])
], WmController);
//# sourceMappingURL=wm.controller.js.map