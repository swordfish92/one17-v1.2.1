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
exports.StakeholderReportingController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const stakeholder_reporting_service_1 = require("../stakeholder-reporting/stakeholder-reporting.service");
const one17_ai_service_1 = require("../ai/one17-ai.service");
let StakeholderReportingController = class StakeholderReportingController {
    stakeholderReporting;
    ai;
    constructor(stakeholderReporting, ai) {
        this.stakeholderReporting = stakeholderReporting;
        this.ai = ai;
    }
    async listReports() {
        return this.stakeholderReporting.listReports();
    }
    async generateReport(dto, user) {
        return this.stakeholderReporting.generateReport({
            department: dto.department,
            reportType: dto.reportType,
            periodStart: new Date(dto.periodStart),
            periodEnd: new Date(dto.periodEnd),
            figures: dto.figures,
            audienceClass: dto.audienceClass,
            generatedByUserId: user.userId,
        });
    }
    async submitForApproval(id, user) {
        return this.stakeholderReporting.submitForApproval(id, user.userId);
    }
    async aiDraftNarrative(id, promptText, user) {
        const report = await this.stakeholderReporting.getReport(id);
        const result = await this.ai.invoke({
            askingUserId: user.userId,
            capabilityCode: 'AI_REPORT_DRAFT',
            promptText,
            requestedDataPointCodes: [],
            context: { stakeholderReportRunId: id },
            orgUnitCode: report.department,
        });
        if (result.outcome !== 'ALLOWED')
            return result;
        const updated = await this.stakeholderReporting.attachAiDraftedNarrative(id, result.responseText, result.interactionLogId, user.userId);
        return { ...result, report: updated };
    }
    async distribute(id, dto, user) {
        return this.stakeholderReporting.distribute({
            stakeholderReportRunId: id,
            audienceClass: dto.audienceClass,
            recipientDescription: dto.recipientDescription,
            distributedByUserId: user.userId,
            signOffByUserId: dto.signOffByUserId,
        });
    }
};
exports.StakeholderReportingController = StakeholderReportingController;
__decorate([
    (0, common_1.Get)('reports'),
    (0, requires_capability_decorator_1.RequiresCapability)('STAKEHOLDER_REPORT_MANAGEMENT', 'INITIATE'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StakeholderReportingController.prototype, "listReports", null);
__decorate([
    (0, common_1.Post)('reports'),
    (0, requires_capability_decorator_1.RequiresCapability)('STAKEHOLDER_REPORT_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], StakeholderReportingController.prototype, "generateReport", null);
__decorate([
    (0, common_1.Post)('reports/:id/submit-for-approval'),
    (0, requires_capability_decorator_1.RequiresCapability)('STAKEHOLDER_REPORT_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], StakeholderReportingController.prototype, "submitForApproval", null);
__decorate([
    (0, common_1.Post)('reports/:id/ai-draft-narrative'),
    (0, requires_capability_decorator_1.RequiresCapability)('STAKEHOLDER_REPORT_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('promptText')),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], StakeholderReportingController.prototype, "aiDraftNarrative", null);
__decorate([
    (0, common_1.Post)('reports/:id/distribute'),
    (0, requires_capability_decorator_1.RequiresCapability)('STAKEHOLDER_REPORT_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], StakeholderReportingController.prototype, "distribute", null);
exports.StakeholderReportingController = StakeholderReportingController = __decorate([
    (0, common_1.Controller)('stakeholder-reporting'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [stakeholder_reporting_service_1.StakeholderReportingService,
        one17_ai_service_1.One17AIService])
], StakeholderReportingController);
//# sourceMappingURL=stakeholder-reporting.controller.js.map