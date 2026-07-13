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
exports.CalendarController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const calendar_service_1 = require("../calendar/calendar.service");
let CalendarController = class CalendarController {
    calendar;
    constructor(calendar) {
        this.calendar = calendar;
    }
    async getMine(rangeStart, rangeEnd, user) {
        return this.calendar.getMyCalendar(user.userId, rangeStart ? new Date(rangeStart) : undefined, rangeEnd ? new Date(rangeEnd) : undefined);
    }
    async getEntry(id, user) {
        return this.calendar.getEntry(id, user.userId);
    }
    async createPersonal(dto, user) {
        return this.calendar.createPersonalEntry(user.userId, {
            title: dto.title,
            description: dto.description,
            startsAt: new Date(dto.startsAt),
            endsAt: dto.endsAt ? new Date(dto.endsAt) : undefined,
            reminderLeadMinutes: dto.reminderLeadMinutes,
        });
    }
    async updatePersonal(id, dto, user) {
        return this.calendar.updatePersonalEntry(id, user.userId, {
            title: dto.title,
            description: dto.description,
            startsAt: dto.startsAt ? new Date(dto.startsAt) : undefined,
            endsAt: dto.endsAt ? new Date(dto.endsAt) : undefined,
            reminderLeadMinutes: dto.reminderLeadMinutes,
        });
    }
    async deleteEntry(id, user) {
        return this.calendar.deleteEntry(id, user.userId);
    }
    async createMeeting(dto, user) {
        return this.calendar.createMeeting(user.userId, {
            title: dto.title,
            description: dto.description,
            startsAt: new Date(dto.startsAt),
            endsAt: dto.endsAt ? new Date(dto.endsAt) : undefined,
            attendeeUserIds: dto.attendeeUserIds,
            reminderLeadMinutes: dto.reminderLeadMinutes,
        });
    }
    async respondToMeeting(id, dto, user) {
        return this.calendar.respondToMeeting(id, user.userId, dto.status);
    }
    async getBusyBlocks(dto) {
        return this.calendar.getBusyBlocks(dto.userIds, new Date(dto.rangeStart), new Date(dto.rangeEnd));
    }
    async getFeedToken(user) {
        return this.calendar.getOrCreateFeedToken(user.userId);
    }
    async revokeFeedToken(user) {
        return this.calendar.revokeFeedToken(user.userId);
    }
};
exports.CalendarController = CalendarController;
__decorate([
    (0, common_1.Get)('mine'),
    __param(0, (0, common_1.Query)('rangeStart')),
    __param(1, (0, common_1.Query)('rangeEnd')),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], CalendarController.prototype, "getMine", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CalendarController.prototype, "getEntry", null);
__decorate([
    (0, common_1.Post)('personal'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CalendarController.prototype, "createPersonal", null);
__decorate([
    (0, common_1.Post)('personal/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], CalendarController.prototype, "updatePersonal", null);
__decorate([
    (0, common_1.Post)(':id/delete'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CalendarController.prototype, "deleteEntry", null);
__decorate([
    (0, common_1.Post)('meetings'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CalendarController.prototype, "createMeeting", null);
__decorate([
    (0, common_1.Post)('meetings/:id/respond'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], CalendarController.prototype, "respondToMeeting", null);
__decorate([
    (0, common_1.Post)('busy'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CalendarController.prototype, "getBusyBlocks", null);
__decorate([
    (0, common_1.Get)('feed-token/mine'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CalendarController.prototype, "getFeedToken", null);
__decorate([
    (0, common_1.Post)('feed-token/revoke'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CalendarController.prototype, "revokeFeedToken", null);
exports.CalendarController = CalendarController = __decorate([
    (0, common_1.Controller)('calendar'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard),
    __metadata("design:paramtypes", [calendar_service_1.CalendarService])
], CalendarController);
//# sourceMappingURL=calendar.controller.js.map