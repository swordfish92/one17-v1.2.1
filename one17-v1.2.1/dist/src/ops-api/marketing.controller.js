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
exports.MarketingController = void 0;
const common_1 = require("@nestjs/common");
const throttler_1 = require("@nestjs/throttler");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const marketing_service_1 = require("../marketing/marketing.service");
const ops_api_types_1 = require("./ops-api.types");
let MarketingController = class MarketingController {
    marketing;
    constructor(marketing) {
        this.marketing = marketing;
    }
    async uploadResource(dto, user) {
        return this.marketing.uploadResource({ ...dto, proposedByUserId: user.userId });
    }
    async listResources() {
        return this.marketing.listResources();
    }
    async subscribe(dto) {
        return this.marketing.subscribe(dto);
    }
    async unsubscribe(dto) {
        return this.marketing.unsubscribe(dto);
    }
    async getSubscriberStats() {
        return this.marketing.getSubscriberStats();
    }
    async initiateSend(dto, user) {
        return this.marketing.initiateSend({ ...dto, initiatedByUserId: user.userId });
    }
    async listSends() {
        return this.marketing.listSends();
    }
};
exports.MarketingController = MarketingController;
__decorate([
    (0, common_1.Post)('resources'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    (0, requires_capability_decorator_1.RequiresCapability)('MARKETING_RESOURCE', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.UploadMarketingResourceDto, Object]),
    __metadata("design:returntype", Promise)
], MarketingController.prototype, "uploadResource", null);
__decorate([
    (0, common_1.Get)('resources'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    (0, requires_capability_decorator_1.RequiresCapability)('MARKETING_RESOURCE', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MarketingController.prototype, "listResources", null);
__decorate([
    (0, common_1.Post)('subscribe'),
    (0, throttler_1.Throttle)({ default: { limit: 5, ttl: 60_000 } }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.SubscribeMarketingDto]),
    __metadata("design:returntype", Promise)
], MarketingController.prototype, "subscribe", null);
__decorate([
    (0, common_1.Post)('unsubscribe'),
    (0, throttler_1.Throttle)({ default: { limit: 5, ttl: 60_000 } }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.UnsubscribeMarketingDto]),
    __metadata("design:returntype", Promise)
], MarketingController.prototype, "unsubscribe", null);
__decorate([
    (0, common_1.Get)('subscriber-stats'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    (0, requires_capability_decorator_1.RequiresCapability)('MARKETING_SEND', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MarketingController.prototype, "getSubscriberStats", null);
__decorate([
    (0, common_1.Post)('sends'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    (0, requires_capability_decorator_1.RequiresCapability)('MARKETING_SEND', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.InitiateMarketingSendDto, Object]),
    __metadata("design:returntype", Promise)
], MarketingController.prototype, "initiateSend", null);
__decorate([
    (0, common_1.Get)('sends'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    (0, requires_capability_decorator_1.RequiresCapability)('MARKETING_SEND', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MarketingController.prototype, "listSends", null);
exports.MarketingController = MarketingController = __decorate([
    (0, common_1.Controller)('marketing'),
    __metadata("design:paramtypes", [marketing_service_1.MarketingService])
], MarketingController);
//# sourceMappingURL=marketing.controller.js.map