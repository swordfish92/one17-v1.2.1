"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardModule = void 0;
const common_1 = require("@nestjs/common");
const board_directive_module_1 = require("../board-directive/board-directive.module");
const reconciliation_module_1 = require("../reconciliation/reconciliation.module");
const reporting_module_1 = require("../reporting/reporting.module");
const dashboard_service_1 = require("./dashboard.service");
const company_accounting_dashboard_service_1 = require("./company-accounting-dashboard.service");
const fund_accounting_dashboard_service_1 = require("./fund-accounting-dashboard.service");
const bd_dashboard_service_1 = require("./bd-dashboard.service");
let DashboardModule = class DashboardModule {
};
exports.DashboardModule = DashboardModule;
exports.DashboardModule = DashboardModule = __decorate([
    (0, common_1.Module)({
        imports: [board_directive_module_1.BoardDirectiveModule, reconciliation_module_1.ReconciliationModule, reporting_module_1.ReportingModule],
        providers: [dashboard_service_1.DashboardService, company_accounting_dashboard_service_1.CompanyAccountingDashboardService, fund_accounting_dashboard_service_1.FundAccountingDashboardService, bd_dashboard_service_1.BdDashboardService],
        exports: [dashboard_service_1.DashboardService, company_accounting_dashboard_service_1.CompanyAccountingDashboardService, fund_accounting_dashboard_service_1.FundAccountingDashboardService, bd_dashboard_service_1.BdDashboardService],
    })
], DashboardModule);
//# sourceMappingURL=dashboard.module.js.map