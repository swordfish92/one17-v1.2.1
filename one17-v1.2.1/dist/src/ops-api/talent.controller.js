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
exports.TalentController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const talent_service_1 = require("../talent/talent.service");
const ops_api_types_1 = require("./ops-api.types");
let TalentController = class TalentController {
    talent;
    constructor(talent) {
        this.talent = talent;
    }
    async listWelfareSchemes() {
        return this.talent.listWelfareSchemes();
    }
    async createWelfareScheme(dto, user) {
        return this.talent.createWelfareScheme({ ...dto, createdByUserId: user.userId });
    }
    async listRewardTypes() {
        return this.talent.listRewardTypes();
    }
    async createRewardType(dto, user) {
        return this.talent.createRewardType({ ...dto, createdByUserId: user.userId });
    }
    async listRecommendations() {
        return this.talent.listRecommendations();
    }
    async recommendTalent(dto, user) {
        return this.talent.recommendTalent({ ...dto, recommendedByUserId: user.userId });
    }
};
exports.TalentController = TalentController;
__decorate([
    (0, common_1.Get)('welfare-schemes'),
    (0, requires_capability_decorator_1.RequiresCapability)('TALENT_MANAGEMENT', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TalentController.prototype, "listWelfareSchemes", null);
__decorate([
    (0, common_1.Post)('welfare-schemes'),
    (0, requires_capability_decorator_1.RequiresCapability)('TALENT_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.CreateWelfareSchemeDto, Object]),
    __metadata("design:returntype", Promise)
], TalentController.prototype, "createWelfareScheme", null);
__decorate([
    (0, common_1.Get)('reward-types'),
    (0, requires_capability_decorator_1.RequiresCapability)('TALENT_MANAGEMENT', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TalentController.prototype, "listRewardTypes", null);
__decorate([
    (0, common_1.Post)('reward-types'),
    (0, requires_capability_decorator_1.RequiresCapability)('TALENT_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.CreateRewardTypeDto, Object]),
    __metadata("design:returntype", Promise)
], TalentController.prototype, "createRewardType", null);
__decorate([
    (0, common_1.Get)('recommendations'),
    (0, requires_capability_decorator_1.RequiresCapability)('TALENT_MANAGEMENT', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TalentController.prototype, "listRecommendations", null);
__decorate([
    (0, common_1.Post)('recommendations'),
    (0, requires_capability_decorator_1.RequiresCapability)('TALENT_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.RecommendTalentDto, Object]),
    __metadata("design:returntype", Promise)
], TalentController.prototype, "recommendTalent", null);
exports.TalentController = TalentController = __decorate([
    (0, common_1.Controller)('talent'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [talent_service_1.TalentService])
], TalentController);
//# sourceMappingURL=talent.controller.js.map