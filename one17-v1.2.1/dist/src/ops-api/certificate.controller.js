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
exports.CertificateController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const certificate_service_1 = require("../certificate/certificate.service");
const ops_api_types_1 = require("./ops-api.types");
let CertificateController = class CertificateController {
    certificates;
    constructor(certificates) {
        this.certificates = certificates;
    }
    async listTemplates(productClass) {
        return this.certificates.listTemplates(productClass);
    }
    async listPendingTemplates() {
        return this.certificates.listPendingTemplates();
    }
    async proposeTemplate(dto, user) {
        return this.certificates.proposeTemplate({ ...dto, proposedByUserId: user.userId });
    }
    async approveTemplate(workflowInstanceId, _dto, user) {
        return this.certificates.approveTemplate({ workflowInstanceId, approverUserId: user.userId });
    }
    async listCertificates(investorId) {
        return this.certificates.listCertificates(investorId);
    }
    async getCertificate(id) {
        return this.certificates.getCertificate(id);
    }
    async downloadCertificate(id) {
        const pdf = await this.certificates.getCertificatePdf(id);
        return new common_1.StreamableFile(pdf, { disposition: `attachment; filename="certificate-${id}.pdf"` });
    }
    async reissueCertificate(id, user) {
        return this.certificates.reissueCertificate(id, user.userId);
    }
};
exports.CertificateController = CertificateController;
__decorate([
    (0, common_1.Get)('templates'),
    (0, requires_capability_decorator_1.RequiresCapability)('CERTIFICATE_TEMPLATE_MANAGEMENT', 'VIEW'),
    __param(0, (0, common_1.Query)('productClass')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CertificateController.prototype, "listTemplates", null);
__decorate([
    (0, common_1.Get)('templates/pending'),
    (0, requires_capability_decorator_1.RequiresCapability)('CERTIFICATE_TEMPLATE_MANAGEMENT', 'APPROVE'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CertificateController.prototype, "listPendingTemplates", null);
__decorate([
    (0, common_1.Post)('templates'),
    (0, requires_capability_decorator_1.RequiresCapability)('CERTIFICATE_TEMPLATE_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.ProposeCertificateTemplateDto, Object]),
    __metadata("design:returntype", Promise)
], CertificateController.prototype, "proposeTemplate", null);
__decorate([
    (0, common_1.Post)('templates/:workflowInstanceId/approve'),
    (0, requires_capability_decorator_1.RequiresCapability)('CERTIFICATE_TEMPLATE_MANAGEMENT', 'APPROVE'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.ApproveCertificateTemplateDto, Object]),
    __metadata("design:returntype", Promise)
], CertificateController.prototype, "approveTemplate", null);
__decorate([
    (0, common_1.Get)(),
    (0, requires_capability_decorator_1.RequiresCapability)('CERTIFICATE_TEMPLATE_MANAGEMENT', 'VIEW'),
    __param(0, (0, common_1.Query)('investorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CertificateController.prototype, "listCertificates", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, requires_capability_decorator_1.RequiresCapability)('CERTIFICATE_TEMPLATE_MANAGEMENT', 'VIEW'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CertificateController.prototype, "getCertificate", null);
__decorate([
    (0, common_1.Get)(':id/pdf'),
    (0, requires_capability_decorator_1.RequiresCapability)('CERTIFICATE_TEMPLATE_MANAGEMENT', 'VIEW'),
    (0, common_1.Header)('Content-Type', 'application/pdf'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CertificateController.prototype, "downloadCertificate", null);
__decorate([
    (0, common_1.Post)(':id/reissue'),
    (0, requires_capability_decorator_1.RequiresCapability)('CERTIFICATE_TEMPLATE_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CertificateController.prototype, "reissueCertificate", null);
exports.CertificateController = CertificateController = __decorate([
    (0, common_1.Controller)('certificates'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [certificate_service_1.CertificateService])
], CertificateController);
//# sourceMappingURL=certificate.controller.js.map