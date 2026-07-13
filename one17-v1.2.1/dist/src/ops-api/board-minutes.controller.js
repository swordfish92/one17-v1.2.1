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
exports.BoardMinutesController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const board_minutes_service_1 = require("../board-minutes/board-minutes.service");
const ops_api_types_1 = require("./ops-api.types");
let BoardMinutesController = class BoardMinutesController {
    boardMinutes;
    constructor(boardMinutes) {
        this.boardMinutes = boardMinutes;
    }
    async list(user) {
        return this.boardMinutes.listMinutesForViewer(user.userId);
    }
    async get(id, user) {
        return this.boardMinutes.getMinutes(id, user.userId);
    }
    async upload(dto, user) {
        return this.boardMinutes.uploadMinutes({ title: dto.title, fileReference: dto.fileReference, committeeTag: dto.committeeTag }, user.userId);
    }
    async transmit(id, dto, user) {
        return this.boardMinutes.transmitMinutes(id, dto.recipientUserId, user.userId);
    }
    async acknowledge(id, user) {
        return this.boardMinutes.acknowledgeTransmission(id, user.userId);
    }
};
exports.BoardMinutesController = BoardMinutesController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BoardMinutesController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BoardMinutesController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.UploadBoardMinutesDto, Object]),
    __metadata("design:returntype", Promise)
], BoardMinutesController.prototype, "upload", null);
__decorate([
    (0, common_1.Post)(':id/transmit'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.TransmitBoardMinutesDto, Object]),
    __metadata("design:returntype", Promise)
], BoardMinutesController.prototype, "transmit", null);
__decorate([
    (0, common_1.Post)(':id/acknowledge'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BoardMinutesController.prototype, "acknowledge", null);
exports.BoardMinutesController = BoardMinutesController = __decorate([
    (0, common_1.Controller)('board-minutes'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard),
    __metadata("design:paramtypes", [board_minutes_service_1.BoardMinutesService])
], BoardMinutesController);
//# sourceMappingURL=board-minutes.controller.js.map