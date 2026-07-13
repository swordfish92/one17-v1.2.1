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
exports.RegulatoryReportingController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const regulatory_reporting_service_1 = require("../regulatory-reporting/regulatory-reporting.service");
const ops_api_types_1 = require("./ops-api.types");
let RegulatoryReportingController = class RegulatoryReportingController {
    service;
    constructor(service) {
        this.service = service;
    }
    async listTemplates() {
        return this.service.listTemplates();
    }
    async templateFile(id) {
        const { bytes, fileName } = await this.service.getTemplateFileBytes(id);
        return new common_1.StreamableFile(bytes, { disposition: `inline; filename="${fileName}"` });
    }
    async calibrateField(id, dto, user) {
        return this.service.calibrateField({ regulatorTemplateId: id, ...dto, actorUserId: user.userId });
    }
    async calibrateCell(id, dto, user) {
        return this.service.calibrateCell({ regulatorTemplateId: id, ...dto, actorUserId: user.userId });
    }
    async filingCalendarStatus() {
        return this.service.filingCalendarStatus(new Date());
    }
    async listFilingRuns(regulatorTemplateId) {
        return this.service.listFilingRuns(regulatorTemplateId);
    }
    async getFilingRun(id) {
        return this.service.getFilingRun(id);
    }
    async prepareFilingRun(dto, user) {
        return this.service.prepareFilingRun({
            regulatorTemplateId: dto.regulatorTemplateId,
            ledgerEntityCode: dto.ledgerEntityCode,
            periodStart: new Date(dto.periodStart),
            periodEnd: new Date(dto.periodEnd),
            preparedByUserId: user.userId,
        });
    }
    async setEntryValue(id, mapId, dto, user) {
        return this.service.setEntryValue(id, mapId, dto.value, user.userId);
    }
    async submitForCertification(id, user) {
        return this.service.submitForCertification(id, user.userId);
    }
    async certify(dto, user) {
        return this.service.certify(dto.workflowInstanceId, user.userId);
    }
    async recordSecAck(id, dto, user) {
        return this.service.recordSecAcknowledgement(id, dto.ackRef, user.userId);
    }
    async exportXlsx(id, user) {
        const buffer = await this.service.exportXlsx(id, user.userId);
        return new common_1.StreamableFile(buffer, { disposition: `attachment; filename="filing-${id}.xlsx"` });
    }
    async exportPdf(id, user) {
        const buffer = await this.service.exportPdf(id, user.userId);
        return new common_1.StreamableFile(buffer, { disposition: `attachment; filename="filing-${id}.pdf"` });
    }
};
exports.RegulatoryReportingController = RegulatoryReportingController;
__decorate([
    (0, common_1.Get)('templates'),
    (0, requires_capability_decorator_1.RequiresCapability)('REGULATORY_REPORTING', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RegulatoryReportingController.prototype, "listTemplates", null);
__decorate([
    (0, common_1.Get)('templates/:id/file'),
    (0, requires_capability_decorator_1.RequiresCapability)('REGULATORY_REPORTING', 'VIEW'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RegulatoryReportingController.prototype, "templateFile", null);
__decorate([
    (0, common_1.Post)('templates/:id/calibrate-field'),
    (0, requires_capability_decorator_1.RequiresCapability)('REGULATORY_REPORTING', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.CalibrateFieldDto, Object]),
    __metadata("design:returntype", Promise)
], RegulatoryReportingController.prototype, "calibrateField", null);
__decorate([
    (0, common_1.Post)('templates/:id/calibrate-cell'),
    (0, requires_capability_decorator_1.RequiresCapability)('REGULATORY_REPORTING', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.CalibrateCellDto, Object]),
    __metadata("design:returntype", Promise)
], RegulatoryReportingController.prototype, "calibrateCell", null);
__decorate([
    (0, common_1.Get)('filing-calendar'),
    (0, requires_capability_decorator_1.RequiresCapability)('REGULATORY_REPORTING', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RegulatoryReportingController.prototype, "filingCalendarStatus", null);
__decorate([
    (0, common_1.Get)('filing-runs'),
    (0, requires_capability_decorator_1.RequiresCapability)('REGULATORY_REPORTING', 'VIEW'),
    __param(0, (0, common_1.Query)('regulatorTemplateId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RegulatoryReportingController.prototype, "listFilingRuns", null);
__decorate([
    (0, common_1.Get)('filing-runs/:id'),
    (0, requires_capability_decorator_1.RequiresCapability)('REGULATORY_REPORTING', 'VIEW'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RegulatoryReportingController.prototype, "getFilingRun", null);
__decorate([
    (0, common_1.Post)('filing-runs'),
    (0, requires_capability_decorator_1.RequiresCapability)('REGULATORY_REPORTING', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.PrepareFilingRunDto, Object]),
    __metadata("design:returntype", Promise)
], RegulatoryReportingController.prototype, "prepareFilingRun", null);
__decorate([
    (0, common_1.Post)('filing-runs/:id/entries/:mapId'),
    (0, requires_capability_decorator_1.RequiresCapability)('REGULATORY_REPORTING', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('mapId')),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, ops_api_types_1.SetEntryValueDto, Object]),
    __metadata("design:returntype", Promise)
], RegulatoryReportingController.prototype, "setEntryValue", null);
__decorate([
    (0, common_1.Post)('filing-runs/:id/submit'),
    (0, requires_capability_decorator_1.RequiresCapability)('REGULATORY_REPORTING', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], RegulatoryReportingController.prototype, "submitForCertification", null);
__decorate([
    (0, common_1.Post)('filing-runs/:id/certify'),
    (0, requires_capability_decorator_1.RequiresCapability)('REGULATORY_REPORTING', 'APPROVE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.CertifyFilingDto, Object]),
    __metadata("design:returntype", Promise)
], RegulatoryReportingController.prototype, "certify", null);
__decorate([
    (0, common_1.Post)('filing-runs/:id/sec-ack'),
    (0, requires_capability_decorator_1.RequiresCapability)('REGULATORY_REPORTING', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.RecordSecAckDto, Object]),
    __metadata("design:returntype", Promise)
], RegulatoryReportingController.prototype, "recordSecAck", null);
__decorate([
    (0, common_1.Get)('filing-runs/:id/export.xlsx'),
    (0, requires_capability_decorator_1.RequiresCapability)('REGULATORY_REPORTING', 'VIEW'),
    (0, common_1.Header)('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], RegulatoryReportingController.prototype, "exportXlsx", null);
__decorate([
    (0, common_1.Get)('filing-runs/:id/export.pdf'),
    (0, requires_capability_decorator_1.RequiresCapability)('REGULATORY_REPORTING', 'VIEW'),
    (0, common_1.Header)('Content-Type', 'application/pdf'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], RegulatoryReportingController.prototype, "exportPdf", null);
exports.RegulatoryReportingController = RegulatoryReportingController = __decorate([
    (0, common_1.Controller)('regulatory-reporting'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [regulatory_reporting_service_1.RegulatoryReportingService])
], RegulatoryReportingController);
//# sourceMappingURL=regulatory-reporting.controller.js.map