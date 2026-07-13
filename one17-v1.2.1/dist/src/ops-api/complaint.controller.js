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
exports.ComplaintController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const complaint_service_1 = require("../complaint/complaint.service");
const ops_api_types_1 = require("./ops-api.types");
let ComplaintController = class ComplaintController {
    complaints;
    constructor(complaints) {
        this.complaints = complaints;
    }
    async listAll(user) {
        return this.complaints.listAll(user.userId);
    }
    async listDsrQueue(user) {
        return this.complaints.listDsrQueue(user.userId);
    }
    async raiseByStaff(dto, user) {
        return this.complaints.raiseByStaff({ ...dto, loggedByUserId: user.userId });
    }
    async assignOwner(id, dto, user) {
        return this.complaints.assignOwner({ complaintId: id, ...dto, actorUserId: user.userId });
    }
    async escalate(id, dto, user) {
        return this.complaints.escalate({ complaintId: id, ...dto, actorUserId: user.userId });
    }
    async resolve(id, dto, user) {
        return this.complaints.resolve({ complaintId: id, ...dto, actorUserId: user.userId });
    }
    async close(id, user) {
        return this.complaints.close(id, user.userId);
    }
};
exports.ComplaintController = ComplaintController;
__decorate([
    (0, common_1.Get)(),
    (0, requires_capability_decorator_1.RequiresCapability)('COMPLAINT_MANAGEMENT', 'VIEW'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ComplaintController.prototype, "listAll", null);
__decorate([
    (0, common_1.Get)('dsr-queue'),
    (0, requires_capability_decorator_1.RequiresCapability)('COMPLAINT_MANAGEMENT', 'VIEW'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ComplaintController.prototype, "listDsrQueue", null);
__decorate([
    (0, common_1.Post)(),
    (0, requires_capability_decorator_1.RequiresCapability)('COMPLAINT_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.RaiseComplaintDto, Object]),
    __metadata("design:returntype", Promise)
], ComplaintController.prototype, "raiseByStaff", null);
__decorate([
    (0, common_1.Post)(':id/assign'),
    (0, requires_capability_decorator_1.RequiresCapability)('COMPLAINT_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.AssignComplaintOwnerDto, Object]),
    __metadata("design:returntype", Promise)
], ComplaintController.prototype, "assignOwner", null);
__decorate([
    (0, common_1.Post)(':id/escalate'),
    (0, requires_capability_decorator_1.RequiresCapability)('COMPLAINT_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.EscalateComplaintDto, Object]),
    __metadata("design:returntype", Promise)
], ComplaintController.prototype, "escalate", null);
__decorate([
    (0, common_1.Post)(':id/resolve'),
    (0, requires_capability_decorator_1.RequiresCapability)('COMPLAINT_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.ResolveComplaintDto, Object]),
    __metadata("design:returntype", Promise)
], ComplaintController.prototype, "resolve", null);
__decorate([
    (0, common_1.Post)(':id/close'),
    (0, requires_capability_decorator_1.RequiresCapability)('COMPLAINT_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ComplaintController.prototype, "close", null);
exports.ComplaintController = ComplaintController = __decorate([
    (0, common_1.Controller)('complaints'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [complaint_service_1.ComplaintService])
], ComplaintController);
//# sourceMappingURL=complaint.controller.js.map