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
exports.DocumentController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const document_service_1 = require("../document/document.service");
const ops_api_types_1 = require("./ops-api.types");
let DocumentController = class DocumentController {
    documents;
    constructor(documents) {
        this.documents = documents;
    }
    async listByEntity(entityType, entityId) {
        return this.documents.listFor(entityType, entityId);
    }
    async attach(dto, user) {
        return this.documents.attach(dto, user.userId);
    }
    async browse(entityType, documentType) {
        return this.documents.browse({ entityType, documentType });
    }
    async listRequiredDocumentConfig(applicationType) {
        return this.documents.listRequiredDocumentConfig(applicationType);
    }
    async addRequiredDocumentConfig(dto, user) {
        return this.documents.addRequiredDocumentType(dto, user.userId);
    }
    async retireRequiredDocumentConfig(id, user) {
        return this.documents.retireRequiredDocumentType(id, user.userId);
    }
};
exports.DocumentController = DocumentController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('entityType')),
    __param(1, (0, common_1.Query)('entityId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "listByEntity", null);
__decorate([
    (0, common_1.Post)(),
    (0, requires_capability_decorator_1.RequiresCapability)('DOCUMENT_REGISTER', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.AttachDocumentDto, Object]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "attach", null);
__decorate([
    (0, common_1.Get)('browse'),
    (0, requires_capability_decorator_1.RequiresCapability)('DOCUMENT_REGISTER', 'VIEW'),
    __param(0, (0, common_1.Query)('entityType')),
    __param(1, (0, common_1.Query)('documentType')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "browse", null);
__decorate([
    (0, common_1.Get)('required-document-config'),
    (0, requires_capability_decorator_1.RequiresCapability)('DOCUMENT_REGISTER', 'VIEW'),
    __param(0, (0, common_1.Query)('applicationType')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "listRequiredDocumentConfig", null);
__decorate([
    (0, common_1.Post)('required-document-config'),
    (0, requires_capability_decorator_1.RequiresCapability)('DOCUMENT_REGISTER', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.RequiredDocumentConfigDto, Object]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "addRequiredDocumentConfig", null);
__decorate([
    (0, common_1.Post)('required-document-config/:id/retire'),
    (0, requires_capability_decorator_1.RequiresCapability)('DOCUMENT_REGISTER', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "retireRequiredDocumentConfig", null);
exports.DocumentController = DocumentController = __decorate([
    (0, common_1.Controller)('documents'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [document_service_1.DocumentService])
], DocumentController);
//# sourceMappingURL=document.controller.js.map