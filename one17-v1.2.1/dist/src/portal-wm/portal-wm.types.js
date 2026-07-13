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
exports.PortalSubscribeToOfferDto = exports.RequestProductRedemptionDto = exports.SubmitHoldingActionRequestDto = exports.RaiseComplaintDto = exports.AcknowledgeDto = exports.RespondToAdvisoryDto = void 0;
const class_validator_1 = require("class-validator");
class RespondToAdvisoryDto {
    response;
}
exports.RespondToAdvisoryDto = RespondToAdvisoryDto;
__decorate([
    (0, class_validator_1.IsIn)(['ACCEPTED', 'DECLINED', 'DEFERRED']),
    __metadata("design:type", String)
], RespondToAdvisoryDto.prototype, "response", void 0);
class AcknowledgeDto {
    id;
}
exports.AcknowledgeDto = AcknowledgeDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AcknowledgeDto.prototype, "id", void 0);
class RaiseComplaintDto {
    category;
    description;
}
exports.RaiseComplaintDto = RaiseComplaintDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], RaiseComplaintDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(2000),
    __metadata("design:type", String)
], RaiseComplaintDto.prototype, "description", void 0);
class SubmitHoldingActionRequestDto {
    requestedAmountKobo;
    notes;
}
exports.SubmitHoldingActionRequestDto = SubmitHoldingActionRequestDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SubmitHoldingActionRequestDto.prototype, "requestedAmountKobo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1000),
    __metadata("design:type", String)
], SubmitHoldingActionRequestDto.prototype, "notes", void 0);
class RequestProductRedemptionDto {
    amountKobo;
}
exports.RequestProductRedemptionDto = RequestProductRedemptionDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestProductRedemptionDto.prototype, "amountKobo", void 0);
class PortalSubscribeToOfferDto {
    amountKobo;
}
exports.PortalSubscribeToOfferDto = PortalSubscribeToOfferDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PortalSubscribeToOfferDto.prototype, "amountKobo", void 0);
//# sourceMappingURL=portal-wm.types.js.map