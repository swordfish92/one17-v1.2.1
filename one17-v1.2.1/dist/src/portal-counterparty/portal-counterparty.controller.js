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
exports.PortalCounterpartyController = void 0;
const common_1 = require("@nestjs/common");
const portal_session_auth_guard_1 = require("../portal-auth/portal-session-auth.guard");
const current_portal_user_decorator_1 = require("../portal-auth/current-portal-user.decorator");
const counterparty_service_1 = require("../counterparty/counterparty.service");
const complaint_service_1 = require("../complaint/complaint.service");
const bureau_gateway_service_1 = require("../bureau-gateway/bureau-gateway.service");
const letter_service_1 = require("../letter/letter.service");
const portal_counterparty_types_1 = require("./portal-counterparty.types");
let PortalCounterpartyController = class PortalCounterpartyController {
    counterparty;
    complaints;
    bureauGateway;
    letters;
    constructor(counterparty, complaints, bureauGateway, letters) {
        this.counterparty = counterparty;
        this.complaints = complaints;
        this.bureauGateway = bureauGateway;
        this.letters = letters;
    }
    assertCounterparty(user) {
        if (user.principalType !== 'COUNTERPARTY' || !user.counterpartyId) {
            throw new common_1.ForbiddenException('This route is for the counterparty portal persona only.');
        }
        return user.counterpartyId;
    }
    async dashboard(user) {
        return this.counterparty.getPortalDashboard(this.assertCounterparty(user));
    }
    async submitEnquiry(dto, user) {
        return this.counterparty.submitEnquiry({ counterpartyId: this.assertCounterparty(user), ...dto });
    }
    async requestRestructure(dto, user) {
        return this.counterparty.requestRestructure({ counterpartyId: this.assertCounterparty(user), ...dto });
    }
    async raiseComplaint(dto, user) {
        return this.complaints.raiseFromPortal({ counterpartyId: this.assertCounterparty(user), ...dto });
    }
    async submitFacilityApplication(dto, user) {
        return this.counterparty.submitFacilityApplication({
            counterpartyId: this.assertCounterparty(user),
            requestedAmountKobo: BigInt(dto.requestedAmountKobo),
            purpose: dto.purpose,
        });
    }
    async uploadFacilityApplicationDocument(id, dto, user) {
        return this.counterparty.uploadFacilityApplicationDocument({ applicationId: id, ...dto }, this.assertCounterparty(user));
    }
    async listFacilityApplicationDocuments(id, user) {
        return this.counterparty.listFacilityApplicationDocumentsForPortal(id, this.assertCounterparty(user));
    }
    async getFacilityApplicationChecklist(id, user) {
        return this.counterparty.getFacilityApplicationChecklist(id, this.assertCounterparty(user));
    }
    async listBureauPulls(user) {
        return this.bureauGateway.listPullHistory(this.assertCounterparty(user));
    }
    async listLetters(user) {
        return this.letters.listLetterInstances({ counterpartyId: this.assertCounterparty(user) });
    }
    async downloadLetter(id, user) {
        const pdf = await this.letters.getLetterInstancePdfForCounterparty(id, this.assertCounterparty(user));
        return new common_1.StreamableFile(pdf, { disposition: `attachment; filename="letter-${id}.pdf"` });
    }
};
exports.PortalCounterpartyController = PortalCounterpartyController;
__decorate([
    (0, common_1.Get)('dashboard'),
    __param(0, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PortalCounterpartyController.prototype, "dashboard", null);
__decorate([
    (0, common_1.Post)('enquiries'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [portal_counterparty_types_1.PortalSubmitEnquiryDto, Object]),
    __metadata("design:returntype", Promise)
], PortalCounterpartyController.prototype, "submitEnquiry", null);
__decorate([
    (0, common_1.Post)('restructure-requests'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [portal_counterparty_types_1.PortalRequestRestructureDto, Object]),
    __metadata("design:returntype", Promise)
], PortalCounterpartyController.prototype, "requestRestructure", null);
__decorate([
    (0, common_1.Post)('complaints'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [portal_counterparty_types_1.PortalRaiseComplaintDto, Object]),
    __metadata("design:returntype", Promise)
], PortalCounterpartyController.prototype, "raiseComplaint", null);
__decorate([
    (0, common_1.Post)('facility-applications'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PortalCounterpartyController.prototype, "submitFacilityApplication", null);
__decorate([
    (0, common_1.Post)('facility-applications/:id/documents'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, portal_counterparty_types_1.PortalUploadFacilityDocumentDto, Object]),
    __metadata("design:returntype", Promise)
], PortalCounterpartyController.prototype, "uploadFacilityApplicationDocument", null);
__decorate([
    (0, common_1.Get)('facility-applications/:id/documents'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PortalCounterpartyController.prototype, "listFacilityApplicationDocuments", null);
__decorate([
    (0, common_1.Get)('facility-applications/:id/checklist'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PortalCounterpartyController.prototype, "getFacilityApplicationChecklist", null);
__decorate([
    (0, common_1.Get)('bureau-pulls'),
    __param(0, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PortalCounterpartyController.prototype, "listBureauPulls", null);
__decorate([
    (0, common_1.Get)('letters'),
    __param(0, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PortalCounterpartyController.prototype, "listLetters", null);
__decorate([
    (0, common_1.Get)('letters/:id/pdf'),
    (0, common_1.Header)('Content-Type', 'application/pdf'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PortalCounterpartyController.prototype, "downloadLetter", null);
exports.PortalCounterpartyController = PortalCounterpartyController = __decorate([
    (0, common_1.Controller)('portal/counterparty'),
    (0, common_1.UseGuards)(portal_session_auth_guard_1.PortalSessionAuthGuard),
    __metadata("design:paramtypes", [counterparty_service_1.CounterpartyService,
        complaint_service_1.ComplaintService,
        bureau_gateway_service_1.BureauGatewayService,
        letter_service_1.LetterService])
], PortalCounterpartyController);
//# sourceMappingURL=portal-counterparty.controller.js.map