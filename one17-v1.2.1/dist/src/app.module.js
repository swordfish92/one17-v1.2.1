"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const throttler_1 = require("@nestjs/throttler");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./prisma/prisma.module");
const audit_module_1 = require("./audit/audit.module");
const rbac_module_1 = require("./rbac/rbac.module");
const workflow_module_1 = require("./workflow/workflow.module");
const delegation_module_1 = require("./delegation/delegation.module");
const parameters_module_1 = require("./parameters/parameters.module");
const investor_module_1 = require("./investor/investor.module");
const counterparty_module_1 = require("./counterparty/counterparty.module");
const bd_module_1 = require("./bd/bd.module");
const ledger_module_1 = require("./ledger/ledger.module");
const reporting_module_1 = require("./reporting/reporting.module");
const risk_module_1 = require("./risk/risk.module");
const period_module_1 = require("./period/period.module");
const migration_module_1 = require("./migration/migration.module");
const replay_module_1 = require("./replay/replay.module");
const halal_fund_engine_module_1 = require("./engine-halal-fund/halal-fund-engine.module");
const psr_waterfall_engine_module_1 = require("./engine-psr-waterfall/psr-waterfall-engine.module");
const event_journal_module_1 = require("./event-journal/event-journal.module");
const replay_comparison_module_1 = require("./replay-comparison/replay-comparison.module");
const budget_module_1 = require("./budget/budget.module");
const budget_review_pack_module_1 = require("./budget-review-pack/budget-review-pack.module");
const nd_mandate_engine_module_1 = require("./engine-nd-mandate/nd-mandate-engine.module");
const throttler_2 = require("@nestjs/throttler");
const auth_module_1 = require("./auth/auth.module");
const mfa_module_1 = require("./mfa/mfa.module");
const ops_api_module_1 = require("./ops-api/ops-api.module");
const kri_engine_module_1 = require("./kri-engine/kri-engine.module");
const stress_engine_module_1 = require("./stress-engine/stress-engine.module");
const portal_wm_module_1 = require("./portal-wm/portal-wm.module");
const portal_counterparty_module_1 = require("./portal-counterparty/portal-counterparty.module");
const portal_zakat_module_1 = require("./portal-zakat/portal-zakat.module");
const scheduler_module_1 = require("./scheduler/scheduler.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            audit_module_1.AuditModule,
            rbac_module_1.RbacModule,
            workflow_module_1.WorkflowModule,
            delegation_module_1.DelegationModule,
            parameters_module_1.ParametersModule,
            investor_module_1.InvestorModule,
            counterparty_module_1.CounterpartyModule,
            bd_module_1.BdModule,
            ledger_module_1.LedgerModule,
            reporting_module_1.ReportingModule,
            risk_module_1.RiskModule,
            period_module_1.PeriodModule,
            migration_module_1.MigrationModule,
            replay_module_1.ReplayModule,
            halal_fund_engine_module_1.HalalFundEngineModule,
            psr_waterfall_engine_module_1.PsrWaterfallEngineModule,
            event_journal_module_1.EventJournalModule,
            replay_comparison_module_1.ReplayComparisonModule,
            budget_module_1.BudgetModule,
            budget_review_pack_module_1.BudgetReviewPackModule,
            nd_mandate_engine_module_1.NdMandateEngineModule,
            throttler_2.ThrottlerModule.forRoot([{ ttl: 60_000, limit: 120 }]),
            auth_module_1.AuthModule,
            mfa_module_1.MfaModule,
            ops_api_module_1.OpsApiModule,
            kri_engine_module_1.KriEngineModule,
            stress_engine_module_1.StressEngineModule,
            portal_wm_module_1.PortalWmModule,
            portal_counterparty_module_1.PortalCounterpartyModule,
            portal_zakat_module_1.PortalZakatModule,
            scheduler_module_1.SchedulerModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, { provide: core_1.APP_GUARD, useClass: throttler_1.ThrottlerGuard }],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map