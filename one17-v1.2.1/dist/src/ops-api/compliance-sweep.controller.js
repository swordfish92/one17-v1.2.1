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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplianceSweepController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const investor_compliance_sweep_service_1 = require("../investor/investor-compliance-sweep.service");
let ComplianceSweepController = class ComplianceSweepController {
    sweep;
    constructor(sweep) {
        this.sweep = sweep;
    }
    async getQueue() {
        return this.sweep.listComplianceQueue(new Date());
    }
};
exports.ComplianceSweepController = ComplianceSweepController;
__decorate([
    (0, common_1.Get)('queue'),
    (0, requires_capability_decorator_1.RequiresCapability)('SCREENING_PERFORM', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ComplianceSweepController.prototype, "getQueue", null);
exports.ComplianceSweepController = ComplianceSweepController = __decorate([
    (0, common_1.Controller)('compliance'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [investor_compliance_sweep_service_1.InvestorComplianceSweepService])
], ComplianceSweepController);
//# sourceMappingURL=compliance-sweep.controller.js.map