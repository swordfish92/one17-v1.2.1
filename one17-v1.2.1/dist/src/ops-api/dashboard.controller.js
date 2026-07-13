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
exports.DashboardController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const dashboard_service_1 = require("../dashboard/dashboard.service");
const company_accounting_dashboard_service_1 = require("../dashboard/company-accounting-dashboard.service");
const fund_accounting_dashboard_service_1 = require("../dashboard/fund-accounting-dashboard.service");
const bd_dashboard_service_1 = require("../dashboard/bd-dashboard.service");
let DashboardController = class DashboardController {
    dashboardService;
    companyAccounting;
    fundAccounting;
    bd;
    constructor(dashboardService, companyAccounting, fundAccounting, bd) {
        this.dashboardService = dashboardService;
        this.companyAccounting = companyAccounting;
        this.fundAccounting = fundAccounting;
        this.bd = bd;
    }
    async ceo() {
        return this.dashboardService.getCeoDashboard();
    }
    async board() {
        return this.dashboardService.getBoardDashboard();
    }
    async companyAccountingDashboard() {
        return this.companyAccounting.getDashboard();
    }
    async exportCompanyAccountingReportRun(user) {
        try {
            return await this.companyAccounting.exportAsReportRun(user.userId);
        }
        catch (err) {
            if (err instanceof company_accounting_dashboard_service_1.CompanyAccountingDashboardError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async fundAccountingDashboard() {
        return this.fundAccounting.getDashboard();
    }
    async bdDashboard(user, scope) {
        return this.bd.getDashboard(user.userId, scope === 'enterprise' ? 'enterprise' : 'own');
    }
};
exports.DashboardController = DashboardController;
__decorate([
    (0, common_1.Get)('ceo'),
    (0, requires_capability_decorator_1.RequiresCapability)('CONTROLS_DASHBOARD', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "ceo", null);
__decorate([
    (0, common_1.Get)('board'),
    (0, requires_capability_decorator_1.RequiresCapability)('CONTROLS_DASHBOARD', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "board", null);
__decorate([
    (0, common_1.Get)('company-accounting'),
    (0, requires_capability_decorator_1.RequiresCapability)('COMPANY_ACCOUNTING_DASHBOARD', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "companyAccountingDashboard", null);
__decorate([
    (0, common_1.Post)('company-accounting/export'),
    (0, requires_capability_decorator_1.RequiresCapability)('COMPANY_ACCOUNTING_DASHBOARD', 'VIEW'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "exportCompanyAccountingReportRun", null);
__decorate([
    (0, common_1.Get)('fund-accounting'),
    (0, requires_capability_decorator_1.RequiresCapability)('FUND_ACCOUNTING_DASHBOARD', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "fundAccountingDashboard", null);
__decorate([
    (0, common_1.Get)('bd'),
    (0, requires_capability_decorator_1.RequiresCapability)('BD_DASHBOARD', 'VIEW'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)('scope')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "bdDashboard", null);
exports.DashboardController = DashboardController = __decorate([
    (0, common_1.Controller)('dashboards'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [dashboard_service_1.DashboardService,
        company_accounting_dashboard_service_1.CompanyAccountingDashboardService,
        fund_accounting_dashboard_service_1.FundAccountingDashboardService,
        bd_dashboard_service_1.BdDashboardService])
], DashboardController);
//# sourceMappingURL=dashboard.controller.js.map