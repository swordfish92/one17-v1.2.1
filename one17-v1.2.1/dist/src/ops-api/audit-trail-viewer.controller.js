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
exports.AuditTrailViewerController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const audit_trail_viewer_service_1 = require("../audit/audit-trail-viewer.service");
const audit_trail_viewer_types_1 = require("../audit/audit-trail-viewer.types");
let AuditTrailViewerController = class AuditTrailViewerController {
    viewer;
    constructor(viewer) {
        this.viewer = viewer;
    }
    async listEvents(actorUserId, entityType, entityId, action, dateFrom, dateTo, page, pageSize) {
        const filter = {
            actorUserId: actorUserId || undefined,
            entityType: entityType || undefined,
            entityId: entityId || undefined,
            action: action || undefined,
            dateFrom: dateFrom ? new Date(dateFrom) : undefined,
            dateTo: dateTo ? new Date(dateTo) : undefined,
        };
        return this.viewer.listEvents(filter, page ? parseInt(page, 10) : 1, pageSize ? Math.min(parseInt(pageSize, 10), 200) : 50);
    }
    async entityHistory(entityType, entityId) {
        return this.viewer.getEntityHistory(entityType, entityId);
    }
    async integrity() {
        return this.viewer.getLatestIntegrityCheck();
    }
    async export(user, actorUserId, entityType, entityId, action, dateFrom, dateTo) {
        const filter = {
            actorUserId: actorUserId || undefined,
            entityType: entityType || undefined,
            entityId: entityId || undefined,
            action: action || undefined,
            dateFrom: dateFrom ? new Date(dateFrom) : undefined,
            dateTo: dateTo ? new Date(dateTo) : undefined,
        };
        try {
            return await this.viewer.exportAsReportRun(filter, user.userId);
        }
        catch (err) {
            if (err instanceof audit_trail_viewer_types_1.AuditTrailViewerError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
};
exports.AuditTrailViewerController = AuditTrailViewerController;
__decorate([
    (0, common_1.Get)('events'),
    (0, requires_capability_decorator_1.RequiresCapability)('AUDIT_TRAIL_VIEW', 'VIEW'),
    __param(0, (0, common_1.Query)('actorUserId')),
    __param(1, (0, common_1.Query)('entityType')),
    __param(2, (0, common_1.Query)('entityId')),
    __param(3, (0, common_1.Query)('action')),
    __param(4, (0, common_1.Query)('dateFrom')),
    __param(5, (0, common_1.Query)('dateTo')),
    __param(6, (0, common_1.Query)('page')),
    __param(7, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], AuditTrailViewerController.prototype, "listEvents", null);
__decorate([
    (0, common_1.Get)('entity-history/:entityType/:entityId'),
    (0, requires_capability_decorator_1.RequiresCapability)('AUDIT_TRAIL_VIEW', 'VIEW'),
    __param(0, (0, common_1.Param)('entityType')),
    __param(1, (0, common_1.Param)('entityId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AuditTrailViewerController.prototype, "entityHistory", null);
__decorate([
    (0, common_1.Get)('integrity'),
    (0, requires_capability_decorator_1.RequiresCapability)('AUDIT_TRAIL_VIEW', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuditTrailViewerController.prototype, "integrity", null);
__decorate([
    (0, common_1.Post)('export'),
    (0, requires_capability_decorator_1.RequiresCapability)('AUDIT_TRAIL_VIEW', 'VIEW'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)('actorUserId')),
    __param(2, (0, common_1.Query)('entityType')),
    __param(3, (0, common_1.Query)('entityId')),
    __param(4, (0, common_1.Query)('action')),
    __param(5, (0, common_1.Query)('dateFrom')),
    __param(6, (0, common_1.Query)('dateTo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], AuditTrailViewerController.prototype, "export", null);
exports.AuditTrailViewerController = AuditTrailViewerController = __decorate([
    (0, common_1.Controller)('audit-trail'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [audit_trail_viewer_service_1.AuditTrailViewerService])
], AuditTrailViewerController);
//# sourceMappingURL=audit-trail-viewer.controller.js.map