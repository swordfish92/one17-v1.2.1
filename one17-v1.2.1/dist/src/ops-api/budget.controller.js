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
exports.BudgetController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const budget_extraction_service_1 = require("../budget/budget-extraction.service");
const budget_activation_service_1 = require("../budget/budget-activation.service");
const ops_api_types_1 = require("./ops-api.types");
let BudgetController = class BudgetController {
    budget;
    activation;
    constructor(budget, activation) {
        this.budget = budget;
        this.activation = activation;
    }
    async listVersions() {
        return this.budget.listBudgetVersions();
    }
    async createVersion(dto, user) {
        return this.budget.createBudgetVersion(dto.fiscalYear, dto.scenarioLabel, dto.status, user.userId);
    }
    async listLines(id) {
        return this.budget.listBudgetLines(id);
    }
    async listEncumbrances(user) {
        const rows = await this.activation.listEncumbrances(user.userId);
        return rows.map((e) => ({ ...e, amountKobo: e.amountKobo.toString() }));
    }
    async listActiveLinesForEncumbrance(user) {
        return this.activation.listActiveBudgetLinesForEncumbrance(user.userId);
    }
    async requestEncumbrance(dto, user) {
        const { encumbrance, workflowInstance } = await this.activation.requestEncumbrance(dto.budgetLineId, BigInt(dto.amountKobo), dto.description, user.userId);
        return { encumbrance: { ...encumbrance, amountKobo: encumbrance.amountKobo.toString() }, workflowInstanceId: workflowInstance.id };
    }
    async releaseEncumbrance(id, user) {
        const encumbrance = await this.activation.releaseEncumbrance(id, user.userId);
        return { ...encumbrance, amountKobo: encumbrance.amountKobo.toString() };
    }
};
exports.BudgetController = BudgetController;
__decorate([
    (0, common_1.Get)('versions'),
    (0, requires_capability_decorator_1.RequiresCapability)('BUDGET_MANAGEMENT', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BudgetController.prototype, "listVersions", null);
__decorate([
    (0, common_1.Post)('versions'),
    (0, requires_capability_decorator_1.RequiresCapability)('BUDGET_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.CreateBudgetVersionDto, Object]),
    __metadata("design:returntype", Promise)
], BudgetController.prototype, "createVersion", null);
__decorate([
    (0, common_1.Get)('versions/:id/lines'),
    (0, requires_capability_decorator_1.RequiresCapability)('BUDGET_MANAGEMENT', 'VIEW'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BudgetController.prototype, "listLines", null);
__decorate([
    (0, common_1.Get)('encumbrances'),
    (0, requires_capability_decorator_1.RequiresCapability)('BUDGET_MANAGEMENT', 'VIEW'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BudgetController.prototype, "listEncumbrances", null);
__decorate([
    (0, common_1.Get)('encumbrances/active-lines'),
    (0, requires_capability_decorator_1.RequiresCapability)('BUDGET_MANAGEMENT', 'VIEW'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BudgetController.prototype, "listActiveLinesForEncumbrance", null);
__decorate([
    (0, common_1.Post)('encumbrances'),
    (0, requires_capability_decorator_1.RequiresCapability)('BUDGET_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.RequestEncumbranceDto, Object]),
    __metadata("design:returntype", Promise)
], BudgetController.prototype, "requestEncumbrance", null);
__decorate([
    (0, common_1.Post)('encumbrances/:id/release'),
    (0, requires_capability_decorator_1.RequiresCapability)('BUDGET_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BudgetController.prototype, "releaseEncumbrance", null);
exports.BudgetController = BudgetController = __decorate([
    (0, common_1.Controller)('budget'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [budget_extraction_service_1.BudgetExtractionService,
        budget_activation_service_1.BudgetActivationService])
], BudgetController);
//# sourceMappingURL=budget.controller.js.map