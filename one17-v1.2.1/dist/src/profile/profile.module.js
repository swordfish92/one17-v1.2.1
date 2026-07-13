"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileModule = void 0;
const common_1 = require("@nestjs/common");
const audit_module_1 = require("../audit/audit.module");
const delegation_module_1 = require("../delegation/delegation.module");
const workflow_module_1 = require("../workflow/workflow.module");
const notification_module_1 = require("../notification/notification.module");
const rbac_module_1 = require("../rbac/rbac.module");
const profile_service_1 = require("./profile.service");
const employee_lifecycle_service_1 = require("./employee-lifecycle.service");
let ProfileModule = class ProfileModule {
};
exports.ProfileModule = ProfileModule;
exports.ProfileModule = ProfileModule = __decorate([
    (0, common_1.Module)({
        imports: [audit_module_1.AuditModule, delegation_module_1.DelegationModule, workflow_module_1.WorkflowModule, notification_module_1.NotificationModule, rbac_module_1.RbacModule],
        providers: [profile_service_1.ProfileService, employee_lifecycle_service_1.EmployeeLifecycleService],
        exports: [profile_service_1.ProfileService, employee_lifecycle_service_1.EmployeeLifecycleService],
    })
], ProfileModule);
//# sourceMappingURL=profile.module.js.map