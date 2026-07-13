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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcurementController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const procurement_service_1 = require("../procurement/procurement.service");
let ProcurementController = class ProcurementController {
    procurement;
    constructor(procurement) {
        this.procurement = procurement;
    }
    async listVendors() {
        return this.procurement.listVendors();
    }
    async createVendor(dto, user) {
        return this.procurement.createVendor({ ...dto, createdByUserId: user.userId });
    }
    async listPurchaseOrders() {
        return this.procurement.listPurchaseOrders();
    }
    async createPurchaseOrder(dto, user) {
        return this.procurement.createPurchaseOrder({
            ...dto,
            lines: dto.lines.map((l) => ({ description: l.description, quantity: l.quantity, unitPriceKobo: BigInt(l.unitPriceKobo) })),
            createdByUserId: user.userId,
        });
    }
    async issuePurchaseOrder(id, user) {
        return this.procurement.issuePurchaseOrder(id, user.userId);
    }
    async recordGoodsReceipt(id, dto, user) {
        return this.procurement.recordGoodsReceipt(id, BigInt(dto.receivedAmountKobo), dto.notes, user.userId);
    }
    async recordVendorInvoice(id, dto, user) {
        return this.procurement.recordVendorInvoice(id, dto.vendorId, dto.invoiceNumber, BigInt(dto.invoiceAmountKobo), new Date(dto.invoiceDate), user.userId);
    }
    async matchInvoice(id, dto, user) {
        return this.procurement.matchInvoice({ invoiceId: id, actorUserId: user.userId, assetUsefulLifeMonths: dto.assetUsefulLifeMonths });
    }
    async createPaymentBatch(dto, user) {
        return this.procurement.createPaymentBatch(dto.batchNumber, dto.ledgerEntityCode, dto.vendorInvoiceIds, user.userId);
    }
    async listAssetRegister() {
        return this.procurement.listAssetRegister();
    }
    async disposeAsset(id, dto, user) {
        return this.procurement.disposeAsset({
            assetRegisterEntryId: id,
            disposalDate: new Date(dto.disposalDate),
            proceedsKobo: BigInt(dto.proceedsKobo),
            gainLossAccountCode: dto.gainLossAccountCode,
            disposedByUserId: user.userId,
        });
    }
};
exports.ProcurementController = ProcurementController;
__decorate([
    (0, common_1.Get)('vendors'),
    (0, requires_capability_decorator_1.RequiresCapability)('PROCUREMENT_OPERATIONS', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProcurementController.prototype, "listVendors", null);
__decorate([
    (0, common_1.Post)('vendors'),
    (0, requires_capability_decorator_1.RequiresCapability)('PROCUREMENT_OPERATIONS', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProcurementController.prototype, "createVendor", null);
__decorate([
    (0, common_1.Get)('purchase-orders'),
    (0, requires_capability_decorator_1.RequiresCapability)('PROCUREMENT_OPERATIONS', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProcurementController.prototype, "listPurchaseOrders", null);
__decorate([
    (0, common_1.Post)('purchase-orders'),
    (0, requires_capability_decorator_1.RequiresCapability)('PROCUREMENT_OPERATIONS', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProcurementController.prototype, "createPurchaseOrder", null);
__decorate([
    (0, common_1.Post)('purchase-orders/:id/issue'),
    (0, requires_capability_decorator_1.RequiresCapability)('PROCUREMENT_OPERATIONS', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProcurementController.prototype, "issuePurchaseOrder", null);
__decorate([
    (0, common_1.Post)('purchase-orders/:id/goods-receipt'),
    (0, requires_capability_decorator_1.RequiresCapability)('PROCUREMENT_OPERATIONS', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], ProcurementController.prototype, "recordGoodsReceipt", null);
__decorate([
    (0, common_1.Post)('purchase-orders/:id/invoices'),
    (0, requires_capability_decorator_1.RequiresCapability)('PROCUREMENT_OPERATIONS', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], ProcurementController.prototype, "recordVendorInvoice", null);
__decorate([
    (0, common_1.Post)('invoices/:id/match'),
    (0, requires_capability_decorator_1.RequiresCapability)('PROCUREMENT_OPERATIONS', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], ProcurementController.prototype, "matchInvoice", null);
__decorate([
    (0, common_1.Post)('payment-batches'),
    (0, requires_capability_decorator_1.RequiresCapability)('PROCUREMENT_OPERATIONS', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProcurementController.prototype, "createPaymentBatch", null);
__decorate([
    (0, common_1.Get)('asset-register'),
    (0, requires_capability_decorator_1.RequiresCapability)('PROCUREMENT_OPERATIONS', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProcurementController.prototype, "listAssetRegister", null);
__decorate([
    (0, common_1.Post)('asset-register/:id/dispose'),
    (0, requires_capability_decorator_1.RequiresCapability)('ASSET_DISPOSAL', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], ProcurementController.prototype, "disposeAsset", null);
exports.ProcurementController = ProcurementController = __decorate([
    (0, common_1.Controller)('procurement'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [procurement_service_1.ProcurementService])
], ProcurementController);
//# sourceMappingURL=procurement.controller.js.map