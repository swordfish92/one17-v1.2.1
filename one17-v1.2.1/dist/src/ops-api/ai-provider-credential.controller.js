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
exports.AiProviderCredentialController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const ai_provider_credential_service_1 = require("../ai/ai-provider-credential.service");
const ops_api_types_1 = require("./ops-api.types");
let AiProviderCredentialController = class AiProviderCredentialController {
    credentials;
    constructor(credentials) {
        this.credentials = credentials;
    }
    async listCredentials(user) {
        return this.credentials.listCredentials(user.userId);
    }
    async proposeCredential(dto, user) {
        return this.credentials.proposeCredential(dto, user.userId);
    }
    async approveCredential(workflowInstanceId, user) {
        return this.credentials.approveCredential(workflowInstanceId, user.userId);
    }
};
exports.AiProviderCredentialController = AiProviderCredentialController;
__decorate([
    (0, common_1.Get)(),
    (0, requires_capability_decorator_1.RequiresCapability)('AI_CAPABILITY_FLAG_MANAGEMENT', 'VIEW'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AiProviderCredentialController.prototype, "listCredentials", null);
__decorate([
    (0, common_1.Post)(),
    (0, requires_capability_decorator_1.RequiresCapability)('AI_CAPABILITY_FLAG_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.ConfigureAiProviderCredentialDto, Object]),
    __metadata("design:returntype", Promise)
], AiProviderCredentialController.prototype, "proposeCredential", null);
__decorate([
    (0, common_1.Post)(':workflowInstanceId/approve'),
    (0, requires_capability_decorator_1.RequiresCapability)('AI_CAPABILITY_FLAG_MANAGEMENT', 'APPROVE'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AiProviderCredentialController.prototype, "approveCredential", null);
exports.AiProviderCredentialController = AiProviderCredentialController = __decorate([
    (0, common_1.Controller)('ai-provider-credentials'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [ai_provider_credential_service_1.AiProviderCredentialService])
], AiProviderCredentialController);
//# sourceMappingURL=ai-provider-credential.controller.js.map