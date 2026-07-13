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
exports.ParameterService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const EPSILON = 1e-9;
let ParameterService = class ParameterService {
    prisma;
    audit;
    delegation;
    constructor(prisma, audit, delegation) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
    }
    async createProduct(input) {
        await this.assertCapability(input.createdByUserId, 'PRODUCT_SETUP_INITIATION', 'INITIATE', 'create a product');
        const product = await this.prisma.product.create({
            data: {
                code: input.code,
                name: input.name,
                engineType: input.engineType,
            },
        });
        await this.audit.record({
            actorUserId: input.createdByUserId,
            action: 'CREATE',
            entityType: 'product',
            entityId: product.code,
            after: { name: input.name, engineType: input.engineType },
        });
        return product;
    }
    async setPoolParameters(input) {
        await this.assertCapability(input.createdByUserId, 'PARAMETERS', 'INITIATE', 'set product parameters');
        if (input.approvedByUserId) {
            await this.assertCapability(input.approvedByUserId, 'PARAMETERS', 'APPROVE', 'approve product parameters');
        }
        this.validate(input);
        const previous = await this.getCurrentParameters(input.productCode);
        const product = await this.prisma.product.findUniqueOrThrow({
            where: { code: input.productCode },
        });
        this.checkGovernanceGate(input, previous, product.status);
        const nextVersion = (previous?.version ?? 0) + 1;
        const created = await this.prisma.productParameters.create({
            data: {
                productCode: input.productCode,
                version: nextVersion,
                psrPoolMudaribShare: input.psrPoolMudaribShare,
                surplusInvestorShare: input.surplusInvestorShare,
                surplusMudaribShare: input.surplusMudaribShare,
                feesAllowedOnPool: input.feesAllowedOnPool ?? false,
                dripDefault: input.dripDefault ?? 'NONE',
                boardResolutionRef: input.boardResolutionRef,
                ssbResolutionRef: input.ssbResolutionRef,
                createdByUserId: input.createdByUserId,
                approvedByUserId: input.approvedByUserId,
            },
        });
        await this.audit.record({
            actorUserId: input.createdByUserId,
            action: 'CREATE',
            entityType: 'product_parameters',
            entityId: `${input.productCode}:v${nextVersion}`,
            before: previous ? this.snapshot(previous) : null,
            after: this.snapshot(created),
        });
        return created;
    }
    checkGovernanceGate(input, previous, productStatus) {
        if (!previous || productStatus !== 'ACTIVE')
            return;
        const feesChanged = input.feesAllowedOnPool !== undefined &&
            input.feesAllowedOnPool !== previous.feesAllowedOnPool;
        const psrChanged = this.decimalChanged(input.psrPoolMudaribShare, previous.psrPoolMudaribShare) ||
            this.decimalChanged(input.surplusInvestorShare, previous.surplusInvestorShare) ||
            this.decimalChanged(input.surplusMudaribShare, previous.surplusMudaribShare);
        if ((feesChanged || psrChanged) &&
            (!input.boardResolutionRef || !input.ssbResolutionRef)) {
            throw new Error('Changing fee policy or a PSR constant on an ACTIVE product requires both boardResolutionRef and ssbResolutionRef (AMD-01 Board + SSB approval workflow).');
        }
    }
    decimalChanged(next, prev) {
        if (next === undefined)
            return false;
        if (prev === null)
            return true;
        return Math.abs(next - prev.toNumber()) > EPSILON;
    }
    async listProducts() {
        return this.prisma.product.findMany({ orderBy: { code: 'asc' } });
    }
    async getCurrentParameters(productCode) {
        return this.prisma.productParameters.findFirst({
            where: { productCode },
            orderBy: { version: 'desc' },
        });
    }
    async activateProduct(productCode, actorUserId) {
        await this.assertCapability(actorUserId, 'PARAMETERS', 'APPROVE', 'activate a product');
        const product = await this.prisma.product.findUniqueOrThrow({
            where: { code: productCode },
        });
        if (product.status === 'ACTIVE') {
            throw new Error(`Product ${productCode} is already ACTIVE.`);
        }
        const missing = [];
        if (!product.shariahApprovedAt) {
            missing.push('shariahApprovedAt (no Shariah/SSB approval on file -- see Shariah Governance > Approve Product / ProductService.approveProductShariah)');
        }
        const current = await this.getCurrentParameters(productCode);
        if (!current) {
            missing.push('productParameters (no version exists)');
        }
        else {
            if (!current.approvedByUserId) {
                missing.push('productParameters.approvedByUserId (current version is unapproved)');
            }
            if (product.engineType === 'PSR_WATERFALL') {
                if (current.psrPoolMudaribShare === null)
                    missing.push('psrPoolMudaribShare');
                if (current.surplusInvestorShare === null)
                    missing.push('surplusInvestorShare');
                if (current.surplusMudaribShare === null)
                    missing.push('surplusMudaribShare');
            }
        }
        if (missing.length > 0) {
            await this.audit.record({
                actorUserId,
                action: 'PERMISSION_DENIED',
                entityType: 'product_activation',
                entityId: productCode,
                after: { missing },
            });
            throw new Error(`Cannot activate product ${productCode}: missing governed parameters — ${missing.join(', ')} (AMD-12 rule 2).`);
        }
        const updated = await this.prisma.product.update({
            where: { code: productCode },
            data: { status: 'ACTIVE' },
        });
        await this.audit.record({
            actorUserId,
            action: 'UPDATE',
            entityType: 'product',
            entityId: productCode,
            before: { status: product.status },
            after: { status: 'ACTIVE' },
        });
        return updated;
    }
    validate(input) {
        if (input.psrPoolMudaribShare !== undefined) {
            if (input.psrPoolMudaribShare <= 0 || input.psrPoolMudaribShare >= 1) {
                throw new Error(`psrPoolMudaribShare must be strictly between 0 and 1 (AMD-01); got ${input.psrPoolMudaribShare}`);
            }
        }
        if (input.surplusInvestorShare !== undefined &&
            input.surplusMudaribShare !== undefined) {
            const sum = input.surplusInvestorShare + input.surplusMudaribShare;
            if (Math.abs(sum - 1) > EPSILON) {
                throw new Error(`surplusInvestorShare + surplusMudaribShare must equal 1.0 (AMD-02); got ${sum}`);
            }
        }
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({
                actorUserId: userId,
                action: 'PERMISSION_DENIED',
                entityType: 'parameter_activity',
                entityId: activity,
                after: { functionCode, level },
            });
            throw new Error(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
    snapshot(row) {
        return {
            version: row.version,
            psrPoolMudaribShare: row.psrPoolMudaribShare?.toString(),
            surplusInvestorShare: row.surplusInvestorShare?.toString(),
            surplusMudaribShare: row.surplusMudaribShare?.toString(),
            feesAllowedOnPool: row.feesAllowedOnPool,
            dripDefault: row.dripDefault,
            boardResolutionRef: row.boardResolutionRef,
            ssbResolutionRef: row.ssbResolutionRef,
        };
    }
};
exports.ParameterService = ParameterService;
exports.ParameterService = ParameterService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService])
], ParameterService);
//# sourceMappingURL=parameters.service.js.map