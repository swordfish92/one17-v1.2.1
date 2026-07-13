"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataProtectionModule = void 0;
const common_1 = require("@nestjs/common");
const audit_module_1 = require("../audit/audit.module");
const privacy_notice_service_1 = require("./privacy-notice.service");
const retention_schedule_service_1 = require("./retention-schedule.service");
const data_breach_register_service_1 = require("./data-breach-register.service");
let DataProtectionModule = class DataProtectionModule {
};
exports.DataProtectionModule = DataProtectionModule;
exports.DataProtectionModule = DataProtectionModule = __decorate([
    (0, common_1.Module)({
        imports: [audit_module_1.AuditModule],
        providers: [privacy_notice_service_1.PrivacyNoticeService, retention_schedule_service_1.RetentionScheduleService, data_breach_register_service_1.DataBreachRegisterService],
        exports: [privacy_notice_service_1.PrivacyNoticeService, retention_schedule_service_1.RetentionScheduleService, data_breach_register_service_1.DataBreachRegisterService],
    })
], DataProtectionModule);
//# sourceMappingURL=data-protection.module.js.map