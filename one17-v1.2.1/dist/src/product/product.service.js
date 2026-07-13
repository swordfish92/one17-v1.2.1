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
exports.ProductService = exports.ProductServiceError = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
class ProductServiceError extends Error {
}
exports.ProductServiceError = ProductServiceError;
let ProductService = class ProductService {
    prisma;
    audit;
    delegation;
    constructor(prisma, audit, delegation) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
    }
    async approveProductShariah(input) {
        if (!input.ssbResolutionRef || input.ssbResolutionRef.trim().length === 0) {
            throw new ProductServiceError('ssbResolutionRef is required -- this action records an existing SSB decision, it does not create one.');
        }
        const { eligible } = await this.delegation.hasCapability(input.approvedByUserId, 'SHARIAH_RECORDS', 'APPROVE');
        if (!eligible) {
            await this.audit.record({
                actorUserId: input.approvedByUserId,
                action: 'PERMISSION_DENIED',
                entityType: 'product',
                entityId: input.productCode,
                after: { functionCode: 'SHARIAH_RECORDS', level: 'APPROVE' },
            });
            throw new ProductServiceError('User lacks APPROVE authority on SHARIAH_RECORDS (standing or delegated), required to record a product Shariah approval.');
        }
        const product = await this.prisma.product.update({
            where: { code: input.productCode },
            data: { shariahApprovedAt: new Date(), shariahApprovalRef: input.ssbResolutionRef },
        });
        await this.audit.record({
            actorUserId: input.approvedByUserId,
            action: 'UPDATE',
            entityType: 'product',
            entityId: input.productCode,
            after: { shariahApprovedAt: product.shariahApprovedAt, shariahApprovalRef: product.shariahApprovalRef },
        });
        return product;
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService])
], ProductService);
//# sourceMappingURL=product.service.js.map