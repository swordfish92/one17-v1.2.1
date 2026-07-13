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
exports.BoardDirectiveController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const board_directive_service_1 = require("../board-directive/board-directive.service");
const ops_api_types_1 = require("./ops-api.types");
let BoardDirectiveController = class BoardDirectiveController {
    boardDirective;
    constructor(boardDirective) {
        this.boardDirective = boardDirective;
    }
    async list(user) {
        return this.boardDirective.listDirectives(user.userId);
    }
    async issue(dto, user) {
        return this.boardDirective.issueDirective({ title: dto.title, description: dto.description, committeeTag: dto.committeeTag, resolutionRef: dto.resolutionRef, dueAt: new Date(dto.dueAt) }, user.userId);
    }
    async acknowledge(id, user) {
        return this.boardDirective.acknowledgeDirective(id, user.userId);
    }
    async reportBack(id, user) {
        return this.boardDirective.reportDirectiveBack(id, user.userId);
    }
};
exports.BoardDirectiveController = BoardDirectiveController;
__decorate([
    (0, common_1.Get)(),
    (0, requires_capability_decorator_1.RequiresCapability)('BOARD_DIRECTIVE_MANAGEMENT', 'VIEW'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BoardDirectiveController.prototype, "list", null);
__decorate([
    (0, common_1.Post)(),
    (0, requires_capability_decorator_1.RequiresCapability)('BOARD_DIRECTIVE_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.IssueBoardDirectiveDto, Object]),
    __metadata("design:returntype", Promise)
], BoardDirectiveController.prototype, "issue", null);
__decorate([
    (0, common_1.Post)(':id/acknowledge'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BoardDirectiveController.prototype, "acknowledge", null);
__decorate([
    (0, common_1.Post)(':id/report-back'),
    (0, requires_capability_decorator_1.RequiresCapability)('BOARD_DIRECTIVE_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BoardDirectiveController.prototype, "reportBack", null);
exports.BoardDirectiveController = BoardDirectiveController = __decorate([
    (0, common_1.Controller)('board-directives'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [board_directive_service_1.BoardDirectiveService])
], BoardDirectiveController);
//# sourceMappingURL=board-directive.controller.js.map