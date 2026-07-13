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
exports.ShariahGovernanceController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const shariah_governance_service_1 = require("../shariah-governance/shariah-governance.service");
const product_service_1 = require("../product/product.service");
const prisma_service_1 = require("../prisma/prisma.service");
const ops_api_types_1 = require("./ops-api.types");
let ShariahGovernanceController = class ShariahGovernanceController {
    shariah;
    product;
    prisma;
    constructor(shariah, product, prisma) {
        this.shariah = shariah;
        this.product = product;
        this.prisma = prisma;
    }
    async listMembers() {
        return this.shariah.listMembers();
    }
    async listResolutions() {
        return this.shariah.listResolutions();
    }
    async listPurificationRecords() {
        return this.shariah.listPurificationRecords();
    }
    async listComplianceChecks() {
        return this.shariah.listComplianceChecks();
    }
    async listProductsPendingShariah() {
        return this.prisma.product.findMany({ where: { shariahApprovedAt: null }, orderBy: { code: 'asc' } });
    }
    async approveProductShariah(code, dto, user) {
        return this.product.approveProductShariah({
            productCode: code,
            ssbResolutionRef: dto.ssbResolutionRef,
            approvedByUserId: user.userId,
        });
    }
};
exports.ShariahGovernanceController = ShariahGovernanceController;
__decorate([
    (0, common_1.Get)('members'),
    (0, requires_capability_decorator_1.RequiresCapability)('SHARIAH_RECORDS', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ShariahGovernanceController.prototype, "listMembers", null);
__decorate([
    (0, common_1.Get)('resolutions'),
    (0, requires_capability_decorator_1.RequiresCapability)('SHARIAH_RECORDS', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ShariahGovernanceController.prototype, "listResolutions", null);
__decorate([
    (0, common_1.Get)('purification-records'),
    (0, requires_capability_decorator_1.RequiresCapability)('SHARIAH_RECORDS', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ShariahGovernanceController.prototype, "listPurificationRecords", null);
__decorate([
    (0, common_1.Get)('compliance-checks'),
    (0, requires_capability_decorator_1.RequiresCapability)('SHARIAH_RECORDS', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ShariahGovernanceController.prototype, "listComplianceChecks", null);
__decorate([
    (0, common_1.Get)('products-pending-shariah'),
    (0, requires_capability_decorator_1.RequiresCapability)('SHARIAH_RECORDS', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ShariahGovernanceController.prototype, "listProductsPendingShariah", null);
__decorate([
    (0, common_1.Post)('products/:code/approve-shariah'),
    (0, requires_capability_decorator_1.RequiresCapability)('SHARIAH_RECORDS', 'APPROVE'),
    __param(0, (0, common_1.Param)('code')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.ApproveProductShariahDto, Object]),
    __metadata("design:returntype", Promise)
], ShariahGovernanceController.prototype, "approveProductShariah", null);
exports.ShariahGovernanceController = ShariahGovernanceController = __decorate([
    (0, common_1.Controller)('shariah-governance'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [shariah_governance_service_1.ShariahGovernanceService,
        product_service_1.ProductService,
        prisma_service_1.PrismaService])
], ShariahGovernanceController);
//# sourceMappingURL=shariah-governance.controller.js.map