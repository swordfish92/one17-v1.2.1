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
exports.PrivacyNoticeController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const privacy_notice_service_1 = require("../data-protection/privacy-notice.service");
const data_protection_types_1 = require("../data-protection/data-protection.types");
const ops_api_types_1 = require("./ops-api.types");
let PrivacyNoticeController = class PrivacyNoticeController {
    privacyNotice;
    constructor(privacyNotice) {
        this.privacyNotice = privacyNotice;
    }
    async getActive() {
        try {
            const notice = await this.privacyNotice.getActiveNotice();
            return { id: notice.id, version: notice.version, noticeText: notice.noticeText, effectiveFrom: notice.effectiveFrom };
        }
        catch (err) {
            if (err instanceof data_protection_types_1.DataProtectionError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async acknowledge(dto, ip) {
        try {
            return await this.privacyNotice.recordAcknowledgment({ ...dto, ipAddress: ip });
        }
        catch (err) {
            if (err instanceof data_protection_types_1.DataProtectionError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async listLog() {
        return this.privacyNotice.listAcknowledgments();
    }
};
exports.PrivacyNoticeController = PrivacyNoticeController;
__decorate([
    (0, common_1.Get)('active'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PrivacyNoticeController.prototype, "getActive", null);
__decorate([
    (0, common_1.Post)('acknowledge'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Ip)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.AcknowledgePrivacyNoticeDto, String]),
    __metadata("design:returntype", Promise)
], PrivacyNoticeController.prototype, "acknowledge", null);
__decorate([
    (0, common_1.Get)('log'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    (0, requires_capability_decorator_1.RequiresCapability)('DATA_PROTECTION_COMPLIANCE', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PrivacyNoticeController.prototype, "listLog", null);
exports.PrivacyNoticeController = PrivacyNoticeController = __decorate([
    (0, common_1.Controller)('privacy-notice'),
    __metadata("design:paramtypes", [privacy_notice_service_1.PrivacyNoticeService])
], PrivacyNoticeController);
//# sourceMappingURL=privacy-notice.controller.js.map