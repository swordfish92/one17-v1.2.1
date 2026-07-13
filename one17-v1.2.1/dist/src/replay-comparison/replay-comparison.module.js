"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplayComparisonModule = void 0;
const common_1 = require("@nestjs/common");
const halal_fund_engine_module_1 = require("../engine-halal-fund/halal-fund-engine.module");
const replay_comparison_service_1 = require("./replay-comparison.service");
let ReplayComparisonModule = class ReplayComparisonModule {
};
exports.ReplayComparisonModule = ReplayComparisonModule;
exports.ReplayComparisonModule = ReplayComparisonModule = __decorate([
    (0, common_1.Module)({
        imports: [halal_fund_engine_module_1.HalalFundEngineModule],
        providers: [replay_comparison_service_1.ReplayComparisonService],
        exports: [replay_comparison_service_1.ReplayComparisonService],
    })
], ReplayComparisonModule);
//# sourceMappingURL=replay-comparison.module.js.map