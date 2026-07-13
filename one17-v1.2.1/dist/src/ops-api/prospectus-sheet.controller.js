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
exports.ProspectusSheetController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const prospectus_sheet_service_1 = require("../parameters/prospectus-sheet.service");
const prospectus_sheet_types_1 = require("../parameters/prospectus-sheet.types");
const ops_api_types_1 = require("./ops-api.types");
let ProspectusSheetController = class ProspectusSheetController {
    prospectusSheets;
    constructor(prospectusSheets) {
        this.prospectusSheets = prospectusSheets;
    }
    toBigIntFields(dto) {
        return {
            ...dto,
            fundSizeCapKobo: dto.fundSizeCapKobo !== undefined ? BigInt(dto.fundSizeCapKobo) : undefined,
            minimumSubscriptionKobo: dto.minimumSubscriptionKobo !== undefined ? BigInt(dto.minimumSubscriptionKobo) : undefined,
            minimumAdditionalInvestmentKobo: dto.minimumAdditionalInvestmentKobo !== undefined ? BigInt(dto.minimumAdditionalInvestmentKobo) : undefined,
            minimumRedemptionKobo: dto.minimumRedemptionKobo !== undefined ? BigInt(dto.minimumRedemptionKobo) : undefined,
            minimumHoldingKobo: dto.minimumHoldingKobo !== undefined ? BigInt(dto.minimumHoldingKobo) : undefined,
            minimumParticipationKobo: dto.minimumParticipationKobo !== undefined ? BigInt(dto.minimumParticipationKobo) : undefined,
            minimumInvestmentKobo: dto.minimumInvestmentKobo !== undefined ? BigInt(dto.minimumInvestmentKobo) : undefined,
        };
    }
    async listVersions(productCode) {
        return this.prospectusSheets.listSheetVersions(productCode);
    }
    async getDetail(sheetId) {
        return this.prospectusSheets.getSheetDetail(sheetId);
    }
    async propose(dto, user) {
        try {
            const { sheet } = await this.prospectusSheets.proposeSheet({ ...this.toBigIntFields(dto), productCode: dto.productCode, initiatedByUserId: user.userId });
            return sheet;
        }
        catch (err) {
            if (err instanceof prospectus_sheet_types_1.ProspectusSheetError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async editDraft(sheetId, dto, user) {
        try {
            return await this.prospectusSheets.editDraftSheet({ ...this.toBigIntFields(dto), sheetId, actorUserId: user.userId });
        }
        catch (err) {
            if (err instanceof prospectus_sheet_types_1.ProspectusSheetError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async approveStep(workflowInstanceId, user) {
        try {
            return await this.prospectusSheets.approveSheetStep(workflowInstanceId, user.userId);
        }
        catch (err) {
            if (err instanceof prospectus_sheet_types_1.ProspectusSheetError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async proposeAmendment(productCode, dto, user) {
        try {
            const { sheet } = await this.prospectusSheets.proposeAmendment({ ...this.toBigIntFields(dto), productCode, proposedByUserId: user.userId });
            return sheet;
        }
        catch (err) {
            if (err instanceof prospectus_sheet_types_1.ProspectusSheetError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async approveAmendmentStep(workflowInstanceId, user) {
        try {
            return await this.prospectusSheets.approveAmendmentStep(workflowInstanceId, user.userId);
        }
        catch (err) {
            if (err instanceof prospectus_sheet_types_1.ProspectusSheetError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
};
exports.ProspectusSheetController = ProspectusSheetController;
__decorate([
    (0, common_1.Get)('products/:productCode/versions'),
    (0, requires_capability_decorator_1.RequiresCapability)('PROSPECTUS_SHEET_INITIATION', 'VIEW'),
    __param(0, (0, common_1.Param)('productCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProspectusSheetController.prototype, "listVersions", null);
__decorate([
    (0, common_1.Get)(':sheetId'),
    (0, requires_capability_decorator_1.RequiresCapability)('PROSPECTUS_SHEET_INITIATION', 'VIEW'),
    __param(0, (0, common_1.Param)('sheetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProspectusSheetController.prototype, "getDetail", null);
__decorate([
    (0, common_1.Post)(),
    (0, requires_capability_decorator_1.RequiresCapability)('PROSPECTUS_SHEET_INITIATION', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.ProposeProspectusSheetDto, Object]),
    __metadata("design:returntype", Promise)
], ProspectusSheetController.prototype, "propose", null);
__decorate([
    (0, common_1.Post)(':sheetId/edit'),
    (0, requires_capability_decorator_1.RequiresCapability)('PROSPECTUS_SHEET_INITIATION', 'INITIATE'),
    __param(0, (0, common_1.Param)('sheetId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.ProspectusSheetFieldsDto, Object]),
    __metadata("design:returntype", Promise)
], ProspectusSheetController.prototype, "editDraft", null);
__decorate([
    (0, common_1.Post)('workflow/:workflowInstanceId/approve'),
    (0, requires_capability_decorator_1.RequiresCapability)('PROSPECTUS_SHEET_REVIEW', 'APPROVE'),
    (0, requires_capability_decorator_1.RequiresCapability)('PROSPECTUS_SHEET_APPROVAL', 'APPROVE'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProspectusSheetController.prototype, "approveStep", null);
__decorate([
    (0, common_1.Post)('products/:productCode/amendments'),
    (0, requires_capability_decorator_1.RequiresCapability)('PROSPECTUS_AMENDMENT_PROPOSAL', 'INITIATE'),
    __param(0, (0, common_1.Param)('productCode')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.ProspectusSheetFieldsDto, Object]),
    __metadata("design:returntype", Promise)
], ProspectusSheetController.prototype, "proposeAmendment", null);
__decorate([
    (0, common_1.Post)('amendments/:workflowInstanceId/approve'),
    (0, requires_capability_decorator_1.RequiresCapability)('PROSPECTUS_AMENDMENT_SSB_SIGNOFF', 'APPROVE'),
    (0, requires_capability_decorator_1.RequiresCapability)('PROSPECTUS_AMENDMENT_COMPLIANCE_SIGNOFF', 'APPROVE'),
    (0, requires_capability_decorator_1.RequiresCapability)('PROSPECTUS_AMENDMENT_APPROVAL', 'APPROVE'),
    __param(0, (0, common_1.Param)('workflowInstanceId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProspectusSheetController.prototype, "approveAmendmentStep", null);
exports.ProspectusSheetController = ProspectusSheetController = __decorate([
    (0, common_1.Controller)('prospectus-sheets'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [prospectus_sheet_service_1.ProspectusSheetService])
], ProspectusSheetController);
//# sourceMappingURL=prospectus-sheet.controller.js.map