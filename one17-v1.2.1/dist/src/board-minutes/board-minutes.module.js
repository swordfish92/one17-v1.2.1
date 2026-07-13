"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardMinutesModule = void 0;
const common_1 = require("@nestjs/common");
const audit_module_1 = require("../audit/audit.module");
const delegation_module_1 = require("../delegation/delegation.module");
const notification_module_1 = require("../notification/notification.module");
const board_minutes_service_1 = require("./board-minutes.service");
let BoardMinutesModule = class BoardMinutesModule {
};
exports.BoardMinutesModule = BoardMinutesModule;
exports.BoardMinutesModule = BoardMinutesModule = __decorate([
    (0, common_1.Module)({
        imports: [audit_module_1.AuditModule, delegation_module_1.DelegationModule, notification_module_1.NotificationModule],
        providers: [board_minutes_service_1.BoardMinutesService],
        exports: [board_minutes_service_1.BoardMinutesService],
    })
], BoardMinutesModule);
//# sourceMappingURL=board-minutes.module.js.map