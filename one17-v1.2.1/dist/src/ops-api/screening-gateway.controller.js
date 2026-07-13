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
exports.ScreeningGatewayController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const screening_gateway_service_1 = require("../screening-gateway/screening-gateway.service");
const ops_api_types_1 = require("./ops-api.types");
let ScreeningGatewayController = class ScreeningGatewayController {
    screening;
    constructor(screening) {
        this.screening = screening;
    }
    async listSources() {
        return this.screening.listSources();
    }
    async proposeSourceConfig(dto, user) {
        return this.screening.proposeSourceConfig(dto, user.userId);
    }
    async approveSourceConfig(workflowInstanceId, user) {
        return this.screening.approveSourceConfig(workflowInstanceId, user.userId);
    }
    async listFreshness() {
        return this.screening.listFreshnessDaysSinceDownload();
    }
    async getConfig() {
        return this.screening.getConfig();
    }
    async updateConfig(dto, user) {
        return this.screening.updateConfig(dto, user.userId);
    }
    async listCommercialProviders() {
        return this.screening.listCommercialProviders();
    }
    async proposeCommercialProviderConfig(dto, user) {
        return this.screening.proposeCommercialProviderConfig(dto, user.userId);
    }
    async approveCommercialProviderConfig(workflowInstanceId, user) {
        return this.screening.approveCommercialProviderConfig(workflowInstanceId, user.userId);
    }
    async screenSubject(dto, user) {
        return this.screening.screenSubject({ ...dto, initiatedByUserId: user.userId });
    }
    async recordManualAttestation(dto, user) {
        return this.screening.recordManualAttestation({ ...dto, sourcesSearched: dto.sourcesSearched, actorUserId: user.userId });
    }
    async listOpenHits() {
        return this.screening.listOpenHits();
    }
    async proposeHitAdjudication(hitId, dto, user) {
        return this.screening.proposeHitAdjudication({ hitId, outcome: dto.outcome, rationale: dto.rationale, actorUserId: user.userId });
    }
    async approveHitAdjudication(workflowInstanceId, user) {
        return this.screening.approveHitAdjudication(workflowInstanceId, user.userId);
    }
};
exports.ScreeningGatewayController = ScreeningGatewayController;
__decorate([
    (0, common_1.Get)('sources'),
    (0, requires_capability_decorator_1.RequiresCapability)('SCREENING_GATEWAY_POLICY', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ScreeningGatewayController.prototype, "listSources", null);
__decorate([
    (0, common_1.Post)('sources'),
    (0, requires_capability_decorator_1.RequiresCapability)('SCREENING_GATEWAY_POLICY', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.ConfigureScreeningListSourceDto, Object]),
    __metadata("design:returntype", Promise)
], ScreeningGatewayController.prototype, "proposeSourceConfig", null);
__decorate([
    (0, common_1.Post)('sources/:workflowInstanceId/approve'),
    (0, requires_capability_decorator_1.RequiresCapability)('SCREENING_GATEWAY_POLICY', 'APPROVE'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ScreeningGatewayController.prototype, "approveSourceConfig", null);
__decorate([
    (0, common_1.Get)('freshness'),
    (0, requires_capability_decorator_1.RequiresCapability)('SCREENING_GATEWAY_POLICY', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ScreeningGatewayController.prototype, "listFreshness", null);
__decorate([
    (0, common_1.Get)('config'),
    (0, requires_capability_decorator_1.RequiresCapability)('SCREENING_GATEWAY_POLICY', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ScreeningGatewayController.prototype, "getConfig", null);
__decorate([
    (0, common_1.Post)('config'),
    (0, requires_capability_decorator_1.RequiresCapability)('SCREENING_GATEWAY_POLICY', 'APPROVE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.UpdateScreeningGatewayConfigDto, Object]),
    __metadata("design:returntype", Promise)
], ScreeningGatewayController.prototype, "updateConfig", null);
__decorate([
    (0, common_1.Get)('commercial-providers'),
    (0, requires_capability_decorator_1.RequiresCapability)('SCREENING_GATEWAY_POLICY', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ScreeningGatewayController.prototype, "listCommercialProviders", null);
__decorate([
    (0, common_1.Post)('commercial-providers'),
    (0, requires_capability_decorator_1.RequiresCapability)('SCREENING_GATEWAY_POLICY', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.ConfigureScreeningCommercialProviderDto, Object]),
    __metadata("design:returntype", Promise)
], ScreeningGatewayController.prototype, "proposeCommercialProviderConfig", null);
__decorate([
    (0, common_1.Post)('commercial-providers/:workflowInstanceId/approve'),
    (0, requires_capability_decorator_1.RequiresCapability)('SCREENING_GATEWAY_POLICY', 'APPROVE'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ScreeningGatewayController.prototype, "approveCommercialProviderConfig", null);
__decorate([
    (0, common_1.Post)('screen'),
    (0, requires_capability_decorator_1.RequiresCapability)('SCREENING_PERFORM', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.RunScreeningDto, Object]),
    __metadata("design:returntype", Promise)
], ScreeningGatewayController.prototype, "screenSubject", null);
__decorate([
    (0, common_1.Post)('manual-attestation'),
    (0, requires_capability_decorator_1.RequiresCapability)('SCREENING_PERFORM', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.ManualScreeningAttestationDto, Object]),
    __metadata("design:returntype", Promise)
], ScreeningGatewayController.prototype, "recordManualAttestation", null);
__decorate([
    (0, common_1.Get)('hits/open'),
    (0, requires_capability_decorator_1.RequiresCapability)('SCREENING_PERFORM', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ScreeningGatewayController.prototype, "listOpenHits", null);
__decorate([
    (0, common_1.Post)('hits/:hitId/propose-adjudication'),
    (0, requires_capability_decorator_1.RequiresCapability)('SCREENING_PERFORM', 'INITIATE'),
    __param(0, (0, common_1.Param)('hitId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.ProposeHitAdjudicationDto, Object]),
    __metadata("design:returntype", Promise)
], ScreeningGatewayController.prototype, "proposeHitAdjudication", null);
__decorate([
    (0, common_1.Post)('hits/:workflowInstanceId/approve-adjudication'),
    (0, requires_capability_decorator_1.RequiresCapability)('SCREENING_PERFORM', 'APPROVE'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ScreeningGatewayController.prototype, "approveHitAdjudication", null);
exports.ScreeningGatewayController = ScreeningGatewayController = __decorate([
    (0, common_1.Controller)('screening-gateway'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [screening_gateway_service_1.ScreeningGatewayService])
], ScreeningGatewayController);
//# sourceMappingURL=screening-gateway.controller.js.map