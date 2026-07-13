"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const audit_module_1 = require("../audit/audit.module");
const delegation_module_1 = require("../delegation/delegation.module");
const workflow_module_1 = require("../workflow/workflow.module");
const parameters_module_1 = require("../parameters/parameters.module");
const ledger_module_1 = require("../ledger/ledger.module");
const product_service_1 = require("./product.service");
const product_factory_service_1 = require("./product-factory.service");
const offers_service_1 = require("./offers.service");
let ProductModule = class ProductModule {
};
exports.ProductModule = ProductModule;
exports.ProductModule = ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [audit_module_1.AuditModule, delegation_module_1.DelegationModule, workflow_module_1.WorkflowModule, parameters_module_1.ParametersModule, ledger_module_1.LedgerModule],
        providers: [product_service_1.ProductService, product_factory_service_1.ProductFactoryService, offers_service_1.OffersService],
        exports: [product_service_1.ProductService, product_factory_service_1.ProductFactoryService, offers_service_1.OffersService],
    })
], ProductModule);
//# sourceMappingURL=product.module.js.map