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
exports.BoardCalendarController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const board_calendar_service_1 = require("../board-calendar/board-calendar.service");
const ops_api_types_1 = require("./ops-api.types");
let BoardCalendarController = class BoardCalendarController {
    boardCalendar;
    constructor(boardCalendar) {
        this.boardCalendar = boardCalendar;
    }
    async listEvents(user) {
        return this.boardCalendar.listEvents(user.userId);
    }
    async createEvent(dto, user) {
        return this.boardCalendar.createEvent({ title: dto.title, description: dto.description, committeeTag: dto.committeeTag, startsAt: new Date(dto.startsAt), endsAt: dto.endsAt ? new Date(dto.endsAt) : undefined }, user.userId);
    }
    async getReminderConfig() {
        return this.boardCalendar.getReminderConfig();
    }
    async updateReminderConfig(dto, user) {
        return this.boardCalendar.updateReminderConfig(dto.daysBefore, user.userId);
    }
    async submitReportPack(dto, user) {
        return this.boardCalendar.submitReportPack(dto, user.userId);
    }
    async markSubmissionReceived(id, dto, user) {
        return this.boardCalendar.markSubmissionReceived(id, dto.status, dto.completenessNote, user.userId);
    }
    async listSubmissionsForEvent(id, user) {
        return this.boardCalendar.listSubmissionsForEvent(id, user.userId);
    }
};
exports.BoardCalendarController = BoardCalendarController;
__decorate([
    (0, common_1.Get)('events'),
    (0, requires_capability_decorator_1.RequiresCapability)('BOARD_CALENDAR_MANAGEMENT', 'VIEW'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BoardCalendarController.prototype, "listEvents", null);
__decorate([
    (0, common_1.Post)('events'),
    (0, requires_capability_decorator_1.RequiresCapability)('BOARD_CALENDAR_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.CreateBoardCalendarEventDto, Object]),
    __metadata("design:returntype", Promise)
], BoardCalendarController.prototype, "createEvent", null);
__decorate([
    (0, common_1.Get)('reminder-config'),
    (0, requires_capability_decorator_1.RequiresCapability)('BOARD_CALENDAR_MANAGEMENT', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BoardCalendarController.prototype, "getReminderConfig", null);
__decorate([
    (0, common_1.Post)('reminder-config'),
    (0, requires_capability_decorator_1.RequiresCapability)('BOARD_CALENDAR_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.UpdateBoardCalendarReminderConfigDto, Object]),
    __metadata("design:returntype", Promise)
], BoardCalendarController.prototype, "updateReminderConfig", null);
__decorate([
    (0, common_1.Post)('submissions'),
    (0, requires_capability_decorator_1.RequiresCapability)('BOARD_CALENDAR_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.SubmitReportPackDto, Object]),
    __metadata("design:returntype", Promise)
], BoardCalendarController.prototype, "submitReportPack", null);
__decorate([
    (0, common_1.Post)('submissions/:id/receive'),
    (0, requires_capability_decorator_1.RequiresCapability)('BOARD_CALENDAR_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.MarkSubmissionReceivedDto, Object]),
    __metadata("design:returntype", Promise)
], BoardCalendarController.prototype, "markSubmissionReceived", null);
__decorate([
    (0, common_1.Get)('events/:id/submissions'),
    (0, requires_capability_decorator_1.RequiresCapability)('BOARD_CALENDAR_MANAGEMENT', 'VIEW'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BoardCalendarController.prototype, "listSubmissionsForEvent", null);
exports.BoardCalendarController = BoardCalendarController = __decorate([
    (0, common_1.Controller)('board-calendar'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [board_calendar_service_1.BoardCalendarService])
], BoardCalendarController);
//# sourceMappingURL=board-calendar.controller.js.map