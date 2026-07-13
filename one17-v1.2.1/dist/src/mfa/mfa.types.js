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
exports.MfaError = exports.MfaGlobalEnforcementDto = exports.MfaFinancialCapabilityDto = exports.MfaCodeDto = void 0;
const class_validator_1 = require("class-validator");
class MfaCodeDto {
    code;
}
exports.MfaCodeDto = MfaCodeDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(6, 10),
    __metadata("design:type", String)
], MfaCodeDto.prototype, "code", void 0);
class MfaFinancialCapabilityDto {
    functionCode;
}
exports.MfaFinancialCapabilityDto = MfaFinancialCapabilityDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MfaFinancialCapabilityDto.prototype, "functionCode", void 0);
class MfaGlobalEnforcementDto {
    allStaffMandatory;
}
exports.MfaGlobalEnforcementDto = MfaGlobalEnforcementDto;
class MfaError extends Error {
    constructor(message) {
        super(message);
        this.name = 'MfaError';
    }
}
exports.MfaError = MfaError;
//# sourceMappingURL=mfa.types.js.map