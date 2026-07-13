"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardDirectiveModule = void 0;
const common_1 = require("@nestjs/common");
const audit_module_1 = require("../audit/audit.module");
const delegation_module_1 = require("../delegation/delegation.module");
const task_module_1 = require("../task/task.module");
const board_directive_service_1 = require("./board-directive.service");
let BoardDirectiveModule = class BoardDirectiveModule {
};
exports.BoardDirectiveModule = BoardDirectiveModule;
exports.BoardDirectiveModule = BoardDirectiveModule = __decorate([
    (0, common_1.Module)({
        imports: [audit_module_1.AuditModule, delegation_module_1.DelegationModule, task_module_1.TaskModule],
        providers: [board_directive_service_1.BoardDirectiveService],
        exports: [board_directive_service_1.BoardDirectiveService],
    })
], BoardDirectiveModule);
//# sourceMappingURL=board-directive.module.js.map