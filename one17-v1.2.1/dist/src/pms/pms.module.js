"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PmsModule = void 0;
const common_1 = require("@nestjs/common");
const audit_module_1 = require("../audit/audit.module");
const delegation_module_1 = require("../delegation/delegation.module");
const workflow_module_1 = require("../workflow/workflow.module");
const ledger_module_1 = require("../ledger/ledger.module");
const attendance_module_1 = require("../attendance/attendance.module");
const pms_service_1 = require("./pms.service");
let PmsModule = class PmsModule {
};
exports.PmsModule = PmsModule;
exports.PmsModule = PmsModule = __decorate([
    (0, common_1.Module)({
        imports: [audit_module_1.AuditModule, delegation_module_1.DelegationModule, workflow_module_1.WorkflowModule, ledger_module_1.LedgerModule, attendance_module_1.AttendanceModule],
        providers: [pms_service_1.PmsService],
        exports: [pms_service_1.PmsService],
    })
], PmsModule);
//# sourceMappingURL=pms.module.js.map