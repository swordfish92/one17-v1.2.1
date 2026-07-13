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
exports.BudgetReviewPackController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const budget_review_pack_service_1 = require("../budget-review-pack/budget-review-pack.service");
const budget_review_pack_types_1 = require("../budget-review-pack/budget-review-pack.types");
const ops_api_types_1 = require("./ops-api.types");
let BudgetReviewPackController = class BudgetReviewPackController {
    pack;
    constructor(pack) {
        this.pack = pack;
    }
    async variancePreview(budgetVersionId, month) {
        try {
            return await this.pack.computeVarianceView({
                templateCode: 'MONTHLY_MGMT_BUDGET_PACK',
                budgetVersionId,
                month: parseInt(month, 10),
                actualsByLineIdKobo: {},
                generatedByUserId: '',
            });
        }
        catch (err) {
            if (err instanceof budget_review_pack_types_1.BudgetReviewPackError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async generate(dto, user) {
        try {
            const actualsByLineIdKobo = {};
            for (const [lineId, kobo] of Object.entries(dto.actualsByLineIdKobo))
                actualsByLineIdKobo[lineId] = BigInt(kobo);
            return await this.pack.generatePack({
                templateCode: dto.templateCode,
                budgetVersionId: dto.budgetVersionId,
                month: dto.month,
                actualsByLineIdKobo,
                actualDriverOverrides: dto.actualDriverOverrides,
                generatedByUserId: user.userId,
            });
        }
        catch (err) {
            if (err instanceof budget_review_pack_types_1.BudgetReviewPackError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async approve(workflowInstanceId, user) {
        return this.pack.approveForCirculation(workflowInstanceId, user.userId);
    }
    async history() {
        return this.pack.listPacks();
    }
};
exports.BudgetReviewPackController = BudgetReviewPackController;
__decorate([
    (0, common_1.Get)('variance-preview'),
    (0, requires_capability_decorator_1.RequiresCapability)('BUDGET_REVIEW_PACK', 'INITIATE'),
    __param(0, (0, common_1.Query)('budgetVersionId')),
    __param(1, (0, common_1.Query)('month')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], BudgetReviewPackController.prototype, "variancePreview", null);
__decorate([
    (0, common_1.Post)('generate'),
    (0, requires_capability_decorator_1.RequiresCapability)('BUDGET_REVIEW_PACK', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.GenerateBudgetReviewPackDto, Object]),
    __metadata("design:returntype", Promise)
], BudgetReviewPackController.prototype, "generate", null);
__decorate([
    (0, common_1.Post)(':workflowInstanceId/approve'),
    (0, requires_capability_decorator_1.RequiresCapability)('BUDGET_REVIEW_PACK', 'APPROVE'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BudgetReviewPackController.prototype, "approve", null);
__decorate([
    (0, common_1.Get)('history'),
    (0, requires_capability_decorator_1.RequiresCapability)('BUDGET_REVIEW_PACK', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BudgetReviewPackController.prototype, "history", null);
exports.BudgetReviewPackController = BudgetReviewPackController = __decorate([
    (0, common_1.Controller)('budget-review-pack'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [budget_review_pack_service_1.BudgetReviewPackService])
], BudgetReviewPackController);
//# sourceMappingURL=budget-review-pack.controller.js.map