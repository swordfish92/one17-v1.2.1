"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgStructureModule = void 0;
const common_1 = require("@nestjs/common");
const audit_module_1 = require("../audit/audit.module");
const delegation_module_1 = require("../delegation/delegation.module");
const workflow_module_1 = require("../workflow/workflow.module");
const org_structure_service_1 = require("./org-structure.service");
const department_head_service_1 = require("./department-head.service");
let OrgStructureModule = class OrgStructureModule {
};
exports.OrgStructureModule = OrgStructureModule;
exports.OrgStructureModule = OrgStructureModule = __decorate([
    (0, common_1.Module)({
        imports: [audit_module_1.AuditModule, delegation_module_1.DelegationModule, workflow_module_1.WorkflowModule],
        providers: [org_structure_service_1.OrgStructureService, department_head_service_1.DepartmentHeadService],
        exports: [org_structure_service_1.OrgStructureService, department_head_service_1.DepartmentHeadService],
    })
], OrgStructureModule);
//# sourceMappingURL=org-structure.module.js.map