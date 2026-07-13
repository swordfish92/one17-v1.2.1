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
exports.ReplayController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const replay_service_1 = require("../replay/replay.service");
const ops_api_types_1 = require("./ops-api.types");
let ReplayController = class ReplayController {
    replay;
    constructor(replay) {
        this.replay = replay;
    }
    async listBatches() {
        return this.replay.listBatches();
    }
    async ingestCsv(dto, user) {
        return this.replay.ingestCsv({ ...dto, uploadedByUserId: user.userId });
    }
    async reconciliationCounts(sourceCode) {
        return this.replay.reconciliationCounts(sourceCode);
    }
};
exports.ReplayController = ReplayController;
__decorate([
    (0, common_1.Get)('batches'),
    (0, requires_capability_decorator_1.RequiresCapability)('REPLAY_HARNESS', 'INITIATE'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReplayController.prototype, "listBatches", null);
__decorate([
    (0, common_1.Post)('batches'),
    (0, requires_capability_decorator_1.RequiresCapability)('REPLAY_HARNESS', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.IngestReplayCsvDto, Object]),
    __metadata("design:returntype", Promise)
], ReplayController.prototype, "ingestCsv", null);
__decorate([
    (0, common_1.Get)('reconciliation-counts/:sourceCode'),
    (0, requires_capability_decorator_1.RequiresCapability)('REPLAY_HARNESS', 'INITIATE'),
    __param(0, (0, common_1.Param)('sourceCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReplayController.prototype, "reconciliationCounts", null);
exports.ReplayController = ReplayController = __decorate([
    (0, common_1.Controller)('replay'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [replay_service_1.ReplayService])
], ReplayController);
//# sourceMappingURL=replay.controller.js.map