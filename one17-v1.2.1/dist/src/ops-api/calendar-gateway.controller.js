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
exports.CalendarGatewayController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const calendar_gateway_service_1 = require("../calendar/calendar-gateway.service");
const ops_api_types_1 = require("./ops-api.types");
let CalendarGatewayController = class CalendarGatewayController {
    calendarGateway;
    constructor(calendarGateway) {
        this.calendarGateway = calendarGateway;
    }
    async listProviders() {
        return this.calendarGateway.listProviders();
    }
    async proposeProviderConfig(dto, user) {
        return this.calendarGateway.proposeProviderConfig(dto, user.userId);
    }
    async approveProviderConfig(workflowInstanceId, user) {
        return this.calendarGateway.approveProviderConfig(workflowInstanceId, user.userId);
    }
    async listMyConnections(user) {
        return this.calendarGateway.listMyConnections(user.userId);
    }
    async getAuthorizationUrl(providerId, user, req) {
        const redirectUri = this.callbackUrl(req, providerId);
        return this.calendarGateway.getAuthorizationUrl(providerId, user.userId, redirectUri);
    }
    async handleCallback(providerId, code, state, user, req) {
        const redirectUri = this.callbackUrl(req, providerId);
        return this.calendarGateway.handleCallback(providerId, code, state, redirectUri, user.userId);
    }
    async revokeConnection(id, user) {
        return this.calendarGateway.revokeConnection(id, user.userId);
    }
    callbackUrl(req, providerId) {
        return `${req.protocol}://${req.get('host')}/calendar-gateway/connect/${providerId}/callback`;
    }
};
exports.CalendarGatewayController = CalendarGatewayController;
__decorate([
    (0, common_1.Get)('providers'),
    (0, requires_capability_decorator_1.RequiresCapability)('CALENDAR_GATEWAY_POLICY', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CalendarGatewayController.prototype, "listProviders", null);
__decorate([
    (0, common_1.Post)('providers'),
    (0, requires_capability_decorator_1.RequiresCapability)('CALENDAR_GATEWAY_POLICY', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.ConfigureCalendarProviderDto, Object]),
    __metadata("design:returntype", Promise)
], CalendarGatewayController.prototype, "proposeProviderConfig", null);
__decorate([
    (0, common_1.Post)('providers/:workflowInstanceId/approve'),
    (0, requires_capability_decorator_1.RequiresCapability)('CALENDAR_GATEWAY_POLICY', 'APPROVE'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CalendarGatewayController.prototype, "approveProviderConfig", null);
__decorate([
    (0, common_1.Get)('connections/mine'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CalendarGatewayController.prototype, "listMyConnections", null);
__decorate([
    (0, common_1.Get)('connect/:providerId/authorize-url'),
    __param(0, (0, common_1.Param)('providerId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], CalendarGatewayController.prototype, "getAuthorizationUrl", null);
__decorate([
    (0, common_1.Get)('connect/:providerId/callback'),
    __param(0, (0, common_1.Param)('providerId')),
    __param(1, (0, common_1.Query)('code')),
    __param(2, (0, common_1.Query)('state')),
    __param(3, (0, current_user_decorator_1.CurrentUser)()),
    __param(4, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], CalendarGatewayController.prototype, "handleCallback", null);
__decorate([
    (0, common_1.Post)('connections/:id/revoke'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CalendarGatewayController.prototype, "revokeConnection", null);
exports.CalendarGatewayController = CalendarGatewayController = __decorate([
    (0, common_1.Controller)('calendar-gateway'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [calendar_gateway_service_1.CalendarGatewayService])
], CalendarGatewayController);
//# sourceMappingURL=calendar-gateway.controller.js.map