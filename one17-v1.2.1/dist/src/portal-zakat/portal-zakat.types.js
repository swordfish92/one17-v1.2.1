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
exports.DeclareZakatScheduleItemClientDto = exports.RequestZakatSubscriptionDto = exports.ElectZakatRateBasisDto = void 0;
const class_validator_1 = require("class-validator");
class ElectZakatRateBasisDto {
    rateBasis;
}
exports.ElectZakatRateBasisDto = ElectZakatRateBasisDto;
__decorate([
    (0, class_validator_1.IsIn)(['LUNAR', 'GREGORIAN']),
    __metadata("design:type", String)
], ElectZakatRateBasisDto.prototype, "rateBasis", void 0);
class RequestZakatSubscriptionDto {
    consentAcknowledged;
}
exports.RequestZakatSubscriptionDto = RequestZakatSubscriptionDto;
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], RequestZakatSubscriptionDto.prototype, "consentAcknowledged", void 0);
class DeclareZakatScheduleItemClientDto {
    scheduleType;
    description;
    amountKobo;
    zakatability;
}
exports.DeclareZakatScheduleItemClientDto = DeclareZakatScheduleItemClientDto;
__decorate([
    (0, class_validator_1.IsIn)(['CASH_BANK', 'GOLD_SILVER', 'INVESTMENT', 'FIXED_ASSET', 'RECEIVABLE', 'LIABILITY']),
    __metadata("design:type", String)
], DeclareZakatScheduleItemClientDto.prototype, "scheduleType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], DeclareZakatScheduleItemClientDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeclareZakatScheduleItemClientDto.prototype, "amountKobo", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['ZAKATABLE', 'NON_ZAKATABLE', 'DOUBTFUL']),
    __metadata("design:type", String)
], DeclareZakatScheduleItemClientDto.prototype, "zakatability", void 0);
//# sourceMappingURL=portal-zakat.types.js.map