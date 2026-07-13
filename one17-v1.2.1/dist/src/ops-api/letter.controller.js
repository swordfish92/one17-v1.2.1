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
exports.LetterController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const letter_service_1 = require("../letter/letter.service");
const ops_api_types_1 = require("./ops-api.types");
let LetterController = class LetterController {
    letters;
    constructor(letters) {
        this.letters = letters;
    }
    async listTemplates(letterType) {
        return this.letters.listTemplates(letterType);
    }
    async listPendingTemplates() {
        return this.letters.listPendingTemplates();
    }
    async proposeTemplate(dto, user) {
        return this.letters.proposeTemplate({ ...dto, proposedByUserId: user.userId });
    }
    async approveTemplate(workflowInstanceId, _dto, user) {
        return this.letters.approveTemplate({ workflowInstanceId, approverUserId: user.userId });
    }
    async listInstances(investorId, counterpartyId) {
        return this.letters.listLetterInstances({ investorId, counterpartyId });
    }
    async listPendingInstances() {
        return this.letters.listPendingLetterInstances();
    }
    async getInstance(id) {
        return this.letters.getLetterInstance(id);
    }
    async downloadInstance(id) {
        const pdf = await this.letters.getLetterInstancePdf(id);
        return new common_1.StreamableFile(pdf, { disposition: `attachment; filename="letter-${id}.pdf"` });
    }
    async generateLetter(dto, user) {
        return this.letters.generateLetter({ ...dto, generatedByUserId: user.userId });
    }
    async approveInstance(workflowInstanceId, user) {
        return this.letters.approveLetterInstance({ workflowInstanceId, approverUserId: user.userId });
    }
    async rejectInstance(workflowInstanceId, dto, user) {
        return this.letters.rejectLetterInstance({ workflowInstanceId, actorUserId: user.userId, notes: dto.notes });
    }
};
exports.LetterController = LetterController;
__decorate([
    (0, common_1.Get)('templates'),
    (0, requires_capability_decorator_1.RequiresCapability)('LETTER_TEMPLATE_MANAGEMENT', 'VIEW'),
    __param(0, (0, common_1.Query)('letterType')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LetterController.prototype, "listTemplates", null);
__decorate([
    (0, common_1.Get)('templates/pending'),
    (0, requires_capability_decorator_1.RequiresCapability)('LETTER_TEMPLATE_MANAGEMENT', 'APPROVE'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LetterController.prototype, "listPendingTemplates", null);
__decorate([
    (0, common_1.Post)('templates'),
    (0, requires_capability_decorator_1.RequiresCapability)('LETTER_TEMPLATE_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.ProposeLetterTemplateDto, Object]),
    __metadata("design:returntype", Promise)
], LetterController.prototype, "proposeTemplate", null);
__decorate([
    (0, common_1.Post)('templates/:workflowInstanceId/approve'),
    (0, requires_capability_decorator_1.RequiresCapability)('LETTER_TEMPLATE_MANAGEMENT', 'APPROVE'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.ApproveLetterTemplateDto, Object]),
    __metadata("design:returntype", Promise)
], LetterController.prototype, "approveTemplate", null);
__decorate([
    (0, common_1.Get)('instances'),
    (0, requires_capability_decorator_1.RequiresCapability)('LETTER_ISSUANCE', 'VIEW'),
    __param(0, (0, common_1.Query)('investorId')),
    __param(1, (0, common_1.Query)('counterpartyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], LetterController.prototype, "listInstances", null);
__decorate([
    (0, common_1.Get)('instances/pending'),
    (0, requires_capability_decorator_1.RequiresCapability)('LETTER_ISSUANCE', 'APPROVE'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LetterController.prototype, "listPendingInstances", null);
__decorate([
    (0, common_1.Get)('instances/:id'),
    (0, requires_capability_decorator_1.RequiresCapability)('LETTER_ISSUANCE', 'VIEW'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LetterController.prototype, "getInstance", null);
__decorate([
    (0, common_1.Get)('instances/:id/pdf'),
    (0, requires_capability_decorator_1.RequiresCapability)('LETTER_ISSUANCE', 'VIEW'),
    (0, common_1.Header)('Content-Type', 'application/pdf'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LetterController.prototype, "downloadInstance", null);
__decorate([
    (0, common_1.Post)('instances'),
    (0, requires_capability_decorator_1.RequiresCapability)('LETTER_ISSUANCE', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.GenerateLetterDto, Object]),
    __metadata("design:returntype", Promise)
], LetterController.prototype, "generateLetter", null);
__decorate([
    (0, common_1.Post)('instances/:workflowInstanceId/approve'),
    (0, requires_capability_decorator_1.RequiresCapability)('LETTER_ISSUANCE', 'APPROVE'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], LetterController.prototype, "approveInstance", null);
__decorate([
    (0, common_1.Post)('instances/:workflowInstanceId/reject'),
    (0, requires_capability_decorator_1.RequiresCapability)('LETTER_ISSUANCE', 'APPROVE'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.RejectLetterInstanceDto, Object]),
    __metadata("design:returntype", Promise)
], LetterController.prototype, "rejectInstance", null);
exports.LetterController = LetterController = __decorate([
    (0, common_1.Controller)('letters'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [letter_service_1.LetterService])
], LetterController);
//# sourceMappingURL=letter.controller.js.map