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
exports.CalendarFeedController = void 0;
const common_1 = require("@nestjs/common");
const throttler_1 = require("@nestjs/throttler");
const calendar_service_1 = require("../calendar/calendar.service");
let CalendarFeedController = class CalendarFeedController {
    calendar;
    constructor(calendar) {
        this.calendar = calendar;
    }
    async getFeed(token) {
        const { ics } = await this.calendar.getIcsFeedByToken(token);
        return ics;
    }
};
exports.CalendarFeedController = CalendarFeedController;
__decorate([
    (0, common_1.Get)(':token.ics'),
    (0, common_1.Header)('Content-Type', 'text/calendar; charset=utf-8'),
    (0, throttler_1.Throttle)({ default: { limit: 30, ttl: 60_000 } }),
    __param(0, (0, common_1.Param)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CalendarFeedController.prototype, "getFeed", null);
exports.CalendarFeedController = CalendarFeedController = __decorate([
    (0, common_1.Controller)('calendar-feed'),
    __metadata("design:paramtypes", [calendar_service_1.CalendarService])
], CalendarFeedController);
//# sourceMappingURL=calendar-feed.controller.js.map