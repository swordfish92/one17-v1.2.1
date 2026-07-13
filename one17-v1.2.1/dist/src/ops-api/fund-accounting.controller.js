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
exports.FundAccountingController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const ledger_service_1 = require("../ledger/ledger.service");
const reporting_service_1 = require("../reporting/reporting.service");
const parameters_service_1 = require("../parameters/parameters.service");
const counterparty_service_1 = require("../counterparty/counterparty.service");
const product_factory_service_1 = require("../product/product-factory.service");
const halal_fund_engine_service_1 = require("../engine-halal-fund/halal-fund-engine.service");
const halal_fund_engine_types_1 = require("../engine-halal-fund/halal-fund-engine.types");
const ops_api_types_1 = require("./ops-api.types");
let FundAccountingController = class FundAccountingController {
    ledger;
    reporting;
    parameters;
    counterparty;
    productFactory;
    halalFundEngine;
    constructor(ledger, reporting, parameters, counterparty, productFactory, halalFundEngine) {
        this.ledger = ledger;
        this.reporting = reporting;
        this.parameters = parameters;
        this.counterparty = counterparty;
        this.productFactory = productFactory;
        this.halalFundEngine = halalFundEngine;
    }
    async listMarketValueEntries(ledgerEntityCode) {
        return this.halalFundEngine.listMarketValueEntries(ledgerEntityCode);
    }
    async proposeMarketValueEntry(ledgerEntityCode, dto, user) {
        try {
            return await this.halalFundEngine.proposeMarketValueEntry({
                ledgerEntityCode,
                valuationDate: new Date(dto.valuationDate),
                marketValueKobo: BigInt(dto.marketValueKobo),
                proposedByUserId: user.userId,
            });
        }
        catch (err) {
            if (err instanceof halal_fund_engine_types_1.HalalFundEngineError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async approveMarketValueEntry(entryId, user) {
        try {
            return await this.halalFundEngine.approveMarketValueEntry({ entryId, approvedByUserId: user.userId });
        }
        catch (err) {
            if (err instanceof halal_fund_engine_types_1.HalalFundEngineError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async listReceivables(user) {
        return this.counterparty.listFundAccountingReceivables(user.userId);
    }
    async listDisbursedFacilities(user) {
        return this.counterparty.listDisbursedFacilityApplications(user.userId);
    }
    async recordFacilityTerms(id, dto, user) {
        return this.counterparty.recordFundAccountingTerms(id, dto.targetedReturnPct, user.userId);
    }
    async listEntities() {
        return this.ledger.listFundEntities();
    }
    async getBalanceSheet(ledgerEntityCode, basis = 'AAOIFI', user) {
        return this.reporting.getBalanceSheet(ledgerEntityCode, basis, user.userId);
    }
    async getIncomeStatement(ledgerEntityCode, periodStart, periodEnd, basis = 'AAOIFI', user) {
        const start = periodStart ? new Date(periodStart) : new Date(new Date().getFullYear(), 0, 1);
        const end = periodEnd ? new Date(periodEnd) : new Date();
        return this.reporting.getIncomeStatement(ledgerEntityCode, start, end, basis, user.userId);
    }
    async getRecentJournals(ledgerEntityCode, user) {
        return this.reporting.getRecentJournals(ledgerEntityCode, user.userId);
    }
    async listProducts() {
        return this.parameters.listProducts();
    }
    async createProduct(dto, user) {
        const { product } = await this.productFactory.initiateProductSetup({ ...dto, initiatedByUserId: user.userId });
        return product;
    }
    async approveProductSetup(code, user) {
        return this.productFactory.approveProductSetupByCode(code, user.userId);
    }
    async activateProduct(code, user) {
        return this.parameters.activateProduct(code, user.userId);
    }
};
exports.FundAccountingController = FundAccountingController;
__decorate([
    (0, common_1.Get)('market-value-entries/:ledgerEntityCode'),
    (0, requires_capability_decorator_1.RequiresCapability)('NAV_MARKET_VALUE_ENTRY', 'VIEW'),
    __param(0, (0, common_1.Param)('ledgerEntityCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FundAccountingController.prototype, "listMarketValueEntries", null);
__decorate([
    (0, common_1.Post)('market-value-entries/:ledgerEntityCode'),
    (0, requires_capability_decorator_1.RequiresCapability)('NAV_MARKET_VALUE_ENTRY', 'INITIATE'),
    __param(0, (0, common_1.Param)('ledgerEntityCode')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.ProposeMarketValueEntryDto, Object]),
    __metadata("design:returntype", Promise)
], FundAccountingController.prototype, "proposeMarketValueEntry", null);
__decorate([
    (0, common_1.Post)('market-value-entries/:entryId/approve'),
    (0, requires_capability_decorator_1.RequiresCapability)('NAV_MARKET_VALUE_ENTRY', 'APPROVE'),
    __param(0, (0, common_1.Param)('entryId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FundAccountingController.prototype, "approveMarketValueEntry", null);
__decorate([
    (0, common_1.Get)('receivables'),
    (0, requires_capability_decorator_1.RequiresCapability)('FUND_ACCOUNTING_RECEIVABLES', 'VIEW'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FundAccountingController.prototype, "listReceivables", null);
__decorate([
    (0, common_1.Get)('disbursed-facilities'),
    (0, requires_capability_decorator_1.RequiresCapability)('FUND_ACCOUNTING_RECEIVABLES', 'VIEW'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FundAccountingController.prototype, "listDisbursedFacilities", null);
__decorate([
    (0, common_1.Post)('facility-terms/:id'),
    (0, requires_capability_decorator_1.RequiresCapability)('FUND_ACCOUNTING_RECEIVABLES', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.RecordFacilityFundAccountingTermsDto, Object]),
    __metadata("design:returntype", Promise)
], FundAccountingController.prototype, "recordFacilityTerms", null);
__decorate([
    (0, common_1.Get)('entities'),
    (0, requires_capability_decorator_1.RequiresCapability)('FINANCIAL_STATEMENTS', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FundAccountingController.prototype, "listEntities", null);
__decorate([
    (0, common_1.Get)(':ledgerEntityCode/balance-sheet'),
    (0, requires_capability_decorator_1.RequiresCapability)('FINANCIAL_STATEMENTS', 'VIEW'),
    __param(0, (0, common_1.Param)('ledgerEntityCode')),
    __param(1, (0, common_1.Query)('basis')),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], FundAccountingController.prototype, "getBalanceSheet", null);
__decorate([
    (0, common_1.Get)(':ledgerEntityCode/income-statement'),
    (0, requires_capability_decorator_1.RequiresCapability)('FINANCIAL_STATEMENTS', 'VIEW'),
    __param(0, (0, common_1.Param)('ledgerEntityCode')),
    __param(1, (0, common_1.Query)('periodStart')),
    __param(2, (0, common_1.Query)('periodEnd')),
    __param(3, (0, common_1.Query)('basis')),
    __param(4, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Object]),
    __metadata("design:returntype", Promise)
], FundAccountingController.prototype, "getIncomeStatement", null);
__decorate([
    (0, common_1.Get)(':ledgerEntityCode/journals'),
    (0, requires_capability_decorator_1.RequiresCapability)('FINANCIAL_STATEMENTS', 'VIEW'),
    __param(0, (0, common_1.Param)('ledgerEntityCode')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FundAccountingController.prototype, "getRecentJournals", null);
__decorate([
    (0, common_1.Get)('products'),
    (0, requires_capability_decorator_1.RequiresCapability)('FINANCIAL_STATEMENTS', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FundAccountingController.prototype, "listProducts", null);
__decorate([
    (0, common_1.Post)('products'),
    (0, requires_capability_decorator_1.RequiresCapability)('PRODUCT_SETUP_INITIATION', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.CreateFundProductDto, Object]),
    __metadata("design:returntype", Promise)
], FundAccountingController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Post)('products/:code/approve-setup'),
    (0, requires_capability_decorator_1.RequiresCapability)('PRODUCT_SETUP_REVIEW', 'APPROVE'),
    (0, requires_capability_decorator_1.RequiresCapability)('PRODUCT_SETUP_APPROVAL', 'APPROVE'),
    __param(0, (0, common_1.Param)('code')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FundAccountingController.prototype, "approveProductSetup", null);
__decorate([
    (0, common_1.Post)('products/:code/activate'),
    (0, requires_capability_decorator_1.RequiresCapability)('PARAMETERS', 'APPROVE'),
    __param(0, (0, common_1.Param)('code')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FundAccountingController.prototype, "activateProduct", null);
exports.FundAccountingController = FundAccountingController = __decorate([
    (0, common_1.Controller)('fund-accounting'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [ledger_service_1.LedgerService,
        reporting_service_1.ReportingService,
        parameters_service_1.ParameterService,
        counterparty_service_1.CounterpartyService,
        product_factory_service_1.ProductFactoryService,
        halal_fund_engine_service_1.HalalFundEngineService])
], FundAccountingController);
//# sourceMappingURL=fund-accounting.controller.js.map