"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortalCounterpartyModule = void 0;
const common_1 = require("@nestjs/common");
const audit_module_1 = require("../audit/audit.module");
const portal_auth_module_1 = require("../portal-auth/portal-auth.module");
const counterparty_module_1 = require("../counterparty/counterparty.module");
const complaint_module_1 = require("../complaint/complaint.module");
const bureau_gateway_module_1 = require("../bureau-gateway/bureau-gateway.module");
const letter_module_1 = require("../letter/letter.module");
const portal_counterparty_controller_1 = require("./portal-counterparty.controller");
let PortalCounterpartyModule = class PortalCounterpartyModule {
};
exports.PortalCounterpartyModule = PortalCounterpartyModule;
exports.PortalCounterpartyModule = PortalCounterpartyModule = __decorate([
    (0, common_1.Module)({
        imports: [audit_module_1.AuditModule, portal_auth_module_1.PortalAuthModule, counterparty_module_1.CounterpartyModule, complaint_module_1.ComplaintModule, bureau_gateway_module_1.BureauGatewayModule, letter_module_1.LetterModule],
        controllers: [portal_counterparty_controller_1.PortalCounterpartyController],
    })
], PortalCounterpartyModule);
//# sourceMappingURL=portal-counterparty.module.js.map