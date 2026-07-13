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
exports.ZakatController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const zakat_service_1 = require("../zakat/zakat.service");
const ops_api_types_1 = require("./ops-api.types");
let ZakatController = class ZakatController {
    zakat;
    constructor(zakat) {
        this.zakat = zakat;
    }
    async getNisabConfig() {
        return this.zakat.getNisabConfig();
    }
    async updateNisabConfig(dto, user) {
        return this.zakat.updateNisabConfig(dto.nisabGoldGrams, BigInt(dto.goldPricePerGramKobo), user.userId);
    }
    async listActiveSubscriptions() {
        return this.zakat.listActiveSubscriptions();
    }
    async activateSubscription(investorId, user) {
        return this.zakat.activateSubscription(investorId, user.userId);
    }
    async deactivateSubscription(investorId, user) {
        return this.zakat.deactivateSubscription(investorId, user.userId);
    }
    async getNisabStatus(investorId) {
        return this.zakat.isNisabBreached(investorId);
    }
    async createAssessment(investorId, dto, user) {
        return this.zakat.createAssessmentSandbox({
            investorId,
            assessmentDateGregorian: new Date(dto.assessmentDateGregorian),
            assessmentDateHijri: dto.assessmentDateHijri,
            createdByUserId: user.userId,
        });
    }
    async listAssessmentsForClient(investorId) {
        return this.zakat.listAssessmentsForInvestor(investorId);
    }
    async getAssessmentDetail(runId) {
        return this.zakat.getAssessmentDetailStaff(runId);
    }
    async declareScheduleItem(runId, dto, user) {
        return this.zakat.declareScheduleItem({
            zakatAssessmentRunId: runId,
            scheduleType: dto.scheduleType,
            description: dto.description,
            amountKobo: BigInt(dto.amountKobo),
            zakatability: dto.zakatability,
            declaredByUserId: user.userId,
        });
    }
    async computeAssessment(runId) {
        return this.zakat.computeAssessment(runId);
    }
    async submitForCertification(runId, user) {
        return this.zakat.submitForCertification(runId, user.userId);
    }
    async listPendingCertifications(user) {
        return this.zakat.listPendingCertifications(user.userId);
    }
    async listPendingSubscriptionRequests(user) {
        return this.zakat.listPendingSubscriptionRequests(user.userId);
    }
    async approveSubscriptionRequest(requestId, user) {
        return this.zakat.approveSubscriptionRequest(requestId, user.userId);
    }
    async getPortfolioAdvisoryFeed(investorId, user) {
        return this.zakat.getPortfolioAdvisoryFeed(investorId, user.userId);
    }
};
exports.ZakatController = ZakatController;
__decorate([
    (0, common_1.Get)('nisab-config'),
    (0, requires_capability_decorator_1.RequiresCapability)('ZAKAT_ADVISORY', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ZakatController.prototype, "getNisabConfig", null);
__decorate([
    (0, common_1.Post)('nisab-config'),
    (0, requires_capability_decorator_1.RequiresCapability)('ZAKAT_ADVISORY', 'APPROVE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.UpdateZakatNisabConfigDto, Object]),
    __metadata("design:returntype", Promise)
], ZakatController.prototype, "updateNisabConfig", null);
__decorate([
    (0, common_1.Get)('subscriptions'),
    (0, requires_capability_decorator_1.RequiresCapability)('ZAKAT_ADVISORY', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ZakatController.prototype, "listActiveSubscriptions", null);
__decorate([
    (0, common_1.Post)('clients/:investorId/activate'),
    (0, requires_capability_decorator_1.RequiresCapability)('ZAKAT_ADVISORY', 'INITIATE'),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ZakatController.prototype, "activateSubscription", null);
__decorate([
    (0, common_1.Post)('clients/:investorId/deactivate'),
    (0, requires_capability_decorator_1.RequiresCapability)('ZAKAT_ADVISORY', 'INITIATE'),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ZakatController.prototype, "deactivateSubscription", null);
__decorate([
    (0, common_1.Get)('clients/:investorId/nisab-status'),
    (0, requires_capability_decorator_1.RequiresCapability)('ZAKAT_ADVISORY', 'VIEW'),
    __param(0, (0, common_1.Param)('investorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ZakatController.prototype, "getNisabStatus", null);
__decorate([
    (0, common_1.Post)('clients/:investorId/assessments'),
    (0, requires_capability_decorator_1.RequiresCapability)('ZAKAT_ADVISORY', 'INITIATE'),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.CreateZakatAssessmentDto, Object]),
    __metadata("design:returntype", Promise)
], ZakatController.prototype, "createAssessment", null);
__decorate([
    (0, common_1.Get)('clients/:investorId/assessments'),
    (0, requires_capability_decorator_1.RequiresCapability)('ZAKAT_ADVISORY', 'VIEW'),
    __param(0, (0, common_1.Param)('investorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ZakatController.prototype, "listAssessmentsForClient", null);
__decorate([
    (0, common_1.Get)('assessments/:runId'),
    (0, requires_capability_decorator_1.RequiresCapability)('ZAKAT_ADVISORY', 'VIEW'),
    __param(0, (0, common_1.Param)('runId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ZakatController.prototype, "getAssessmentDetail", null);
__decorate([
    (0, common_1.Post)('assessments/:runId/items'),
    (0, requires_capability_decorator_1.RequiresCapability)('ZAKAT_ADVISORY', 'INITIATE'),
    __param(0, (0, common_1.Param)('runId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.DeclareZakatScheduleItemDto, Object]),
    __metadata("design:returntype", Promise)
], ZakatController.prototype, "declareScheduleItem", null);
__decorate([
    (0, common_1.Post)('assessments/:runId/compute'),
    (0, requires_capability_decorator_1.RequiresCapability)('ZAKAT_ADVISORY', 'INITIATE'),
    __param(0, (0, common_1.Param)('runId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ZakatController.prototype, "computeAssessment", null);
__decorate([
    (0, common_1.Post)('assessments/:runId/submit-for-certification'),
    (0, requires_capability_decorator_1.RequiresCapability)('ZAKAT_ADVISORY', 'INITIATE'),
    __param(0, (0, common_1.Param)('runId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ZakatController.prototype, "submitForCertification", null);
__decorate([
    (0, common_1.Get)('certifications/pending'),
    (0, requires_capability_decorator_1.RequiresCapability)('ZAKAT_CERTIFICATION', 'VIEW'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ZakatController.prototype, "listPendingCertifications", null);
__decorate([
    (0, common_1.Get)('subscription-requests/pending'),
    (0, requires_capability_decorator_1.RequiresCapability)('ZAKAT_ADVISORY', 'VIEW'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ZakatController.prototype, "listPendingSubscriptionRequests", null);
__decorate([
    (0, common_1.Post)('subscription-requests/:requestId/approve'),
    (0, requires_capability_decorator_1.RequiresCapability)('ZAKAT_ADVISORY', 'INITIATE'),
    __param(0, (0, common_1.Param)('requestId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ZakatController.prototype, "approveSubscriptionRequest", null);
__decorate([
    (0, common_1.Get)('clients/:investorId/portfolio-advisory-feed'),
    (0, requires_capability_decorator_1.RequiresCapability)('ZAKAT_PORTFOLIO_ADVISORY_FEED', 'VIEW'),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ZakatController.prototype, "getPortfolioAdvisoryFeed", null);
exports.ZakatController = ZakatController = __decorate([
    (0, common_1.Controller)('zakat'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [zakat_service_1.ZakatService])
], ZakatController);
//# sourceMappingURL=zakat.controller.js.map