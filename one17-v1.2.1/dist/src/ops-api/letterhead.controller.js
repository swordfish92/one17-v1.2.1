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
exports.LetterheadController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const letterhead_service_1 = require("../letterhead/letterhead.service");
const ops_api_types_1 = require("./ops-api.types");
let LetterheadController = class LetterheadController {
    letterhead;
    constructor(letterhead) {
        this.letterhead = letterhead;
    }
    async getActive() {
        return this.letterhead.getActiveContent();
    }
    async listVersions() {
        return this.letterhead.listVersions();
    }
    async listPending() {
        return this.letterhead.listPending();
    }
    async proposeVersion(dto, user) {
        return this.letterhead.proposeVersion({ ...dto, proposedByUserId: user.userId });
    }
    async approveVersion(workflowInstanceId, _dto, user) {
        return this.letterhead.approveVersion({ workflowInstanceId, approverUserId: user.userId });
    }
};
exports.LetterheadController = LetterheadController;
__decorate([
    (0, common_1.Get)('active'),
    (0, requires_capability_decorator_1.RequiresCapability)('LETTERHEAD_TEMPLATE_MANAGEMENT', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LetterheadController.prototype, "getActive", null);
__decorate([
    (0, common_1.Get)('versions'),
    (0, requires_capability_decorator_1.RequiresCapability)('LETTERHEAD_TEMPLATE_MANAGEMENT', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LetterheadController.prototype, "listVersions", null);
__decorate([
    (0, common_1.Get)('versions/pending'),
    (0, requires_capability_decorator_1.RequiresCapability)('LETTERHEAD_TEMPLATE_MANAGEMENT', 'APPROVE'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LetterheadController.prototype, "listPending", null);
__decorate([
    (0, common_1.Post)('versions'),
    (0, requires_capability_decorator_1.RequiresCapability)('LETTERHEAD_TEMPLATE_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.ProposeLetterheadVersionDto, Object]),
    __metadata("design:returntype", Promise)
], LetterheadController.prototype, "proposeVersion", null);
__decorate([
    (0, common_1.Post)('versions/:workflowInstanceId/approve'),
    (0, requires_capability_decorator_1.RequiresCapability)('LETTERHEAD_TEMPLATE_MANAGEMENT', 'APPROVE'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.ApproveLetterheadVersionDto, Object]),
    __metadata("design:returntype", Promise)
], LetterheadController.prototype, "approveVersion", null);
exports.LetterheadController = LetterheadController = __decorate([
    (0, common_1.Controller)('letterhead'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [letterhead_service_1.LetterheadService])
], LetterheadController);
//# sourceMappingURL=letterhead.controller.js.map