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
exports.DocumentTransmissionController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const document_transmission_service_1 = require("../document-transmission/document-transmission.service");
const ops_api_types_1 = require("./ops-api.types");
let DocumentTransmissionController = class DocumentTransmissionController {
    documentTransmission;
    constructor(documentTransmission) {
        this.documentTransmission = documentTransmission;
    }
    async transmitDocument(dto, user) {
        return this.documentTransmission.transmitDocument(dto, user.userId);
    }
    async listDocuments(user) {
        return this.documentTransmission.listDocumentsForViewer(user.userId);
    }
    async acknowledgeTransmission(id, user) {
        return this.documentTransmission.acknowledgeTransmission(id, user.userId);
    }
};
exports.DocumentTransmissionController = DocumentTransmissionController;
__decorate([
    (0, common_1.Post)('documents'),
    (0, common_1.UseGuards)(capability_guard_1.CapabilityGuard),
    (0, requires_capability_decorator_1.RequiresCapability)('MD_DOCUMENT_TRANSMISSION', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.TransmitDocumentDto, Object]),
    __metadata("design:returntype", Promise)
], DocumentTransmissionController.prototype, "transmitDocument", null);
__decorate([
    (0, common_1.Get)('documents'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DocumentTransmissionController.prototype, "listDocuments", null);
__decorate([
    (0, common_1.Post)('documents/:id/acknowledge'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DocumentTransmissionController.prototype, "acknowledgeTransmission", null);
exports.DocumentTransmissionController = DocumentTransmissionController = __decorate([
    (0, common_1.Controller)('document-transmission'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard),
    __metadata("design:paramtypes", [document_transmission_service_1.DocumentTransmissionService])
], DocumentTransmissionController);
//# sourceMappingURL=document-transmission.controller.js.map