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
exports.MigrationController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const migration_service_1 = require("../migration/migration.service");
const ops_api_types_1 = require("./ops-api.types");
let MigrationController = class MigrationController {
    migration;
    constructor(migration) {
        this.migration = migration;
    }
    async listBatches() {
        return this.migration.listBatches();
    }
    async stageCsv(dto, user) {
        return this.migration.stageCsv({ ...dto, uploadedByUserId: user.userId });
    }
    async validateBatch(id, user) {
        return this.migration.validateBatch(id, user.userId);
    }
    async promoteBatch(id, user) {
        return this.migration.promoteBatch(id, user.userId);
    }
    async validationReport(id) {
        return { report: await this.migration.generateValidationReport(id) };
    }
    async reconciliationGates() {
        return this.migration.runReconciliationGates();
    }
};
exports.MigrationController = MigrationController;
__decorate([
    (0, common_1.Get)('batches'),
    (0, requires_capability_decorator_1.RequiresCapability)('DATA_MIGRATION', 'INITIATE'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MigrationController.prototype, "listBatches", null);
__decorate([
    (0, common_1.Post)('batches'),
    (0, requires_capability_decorator_1.RequiresCapability)('DATA_MIGRATION', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.StageMigrationCsvDto, Object]),
    __metadata("design:returntype", Promise)
], MigrationController.prototype, "stageCsv", null);
__decorate([
    (0, common_1.Post)('batches/:id/validate'),
    (0, requires_capability_decorator_1.RequiresCapability)('DATA_MIGRATION', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MigrationController.prototype, "validateBatch", null);
__decorate([
    (0, common_1.Post)('batches/:id/promote'),
    (0, requires_capability_decorator_1.RequiresCapability)('DATA_MIGRATION', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MigrationController.prototype, "promoteBatch", null);
__decorate([
    (0, common_1.Get)('batches/:id/report'),
    (0, requires_capability_decorator_1.RequiresCapability)('DATA_MIGRATION', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MigrationController.prototype, "validationReport", null);
__decorate([
    (0, common_1.Get)('reconciliation-gates'),
    (0, requires_capability_decorator_1.RequiresCapability)('DATA_MIGRATION', 'INITIATE'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MigrationController.prototype, "reconciliationGates", null);
exports.MigrationController = MigrationController = __decorate([
    (0, common_1.Controller)('migration'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [migration_service_1.MigrationService])
], MigrationController);
//# sourceMappingURL=migration.controller.js.map