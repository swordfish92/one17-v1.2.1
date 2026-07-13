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
exports.DistributionController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const prisma_service_1 = require("../prisma/prisma.service");
const halal_fund_engine_service_1 = require("../engine-halal-fund/halal-fund-engine.service");
const ops_api_types_1 = require("./ops-api.types");
let DistributionController = class DistributionController {
    prisma;
    halalFund;
    constructor(prisma, halalFund) {
        this.prisma = prisma;
        this.halalFund = halalFund;
    }
    async listFundEntities() {
        return this.prisma.ledgerEntity.findMany({ where: { entityType: 'FUND' }, orderBy: { code: 'asc' } });
    }
    async listProductAccounts(productCode) {
        const accounts = await this.prisma.productAccount.findMany({
            where: { productCode, status: 'ACTIVE' },
            include: { investor: { select: { fullLegalName: true } } },
            orderBy: { startDate: 'desc' },
        });
        return accounts.map((a) => ({
            id: a.id,
            investorName: a.investor?.fullLegalName ?? a.investorId,
            unitsHeld: a.unitsHeld?.toString() ?? '0',
            dripElection: a.dripElection,
        }));
    }
    async list(ledgerEntityCode) {
        const rows = await this.prisma.distribution.findMany({
            where: ledgerEntityCode ? { ledgerEntityCode } : undefined,
            orderBy: { recordDate: 'desc' },
            take: 100,
            include: { lineItems: true },
        });
        return rows;
    }
    async runHalalFundDistribution(dto, user) {
        return this.halalFund.runDistribution({
            ledgerEntityCode: dto.ledgerEntityCode,
            productCode: dto.productCode,
            periodStart: new Date(dto.periodStart),
            periodEnd: new Date(dto.periodEnd),
            recordDate: new Date(dto.recordDate),
            method: dto.method ?? null,
            incomeBasisKobo: BigInt(dto.incomeBasisKobo),
            closingNavKobo: BigInt(dto.closingNavKobo),
            openingNavKobo: BigInt(dto.openingNavKobo),
            netSubscriptionsKobo: BigInt(dto.netSubscriptionsKobo),
            navHistoryComplete: dto.navHistoryComplete,
            priorDeclaredKobo: BigInt(dto.priorDeclaredKobo),
            distributablePct: dto.distributablePct,
            priorTotalDistributedKobo: BigInt(dto.priorTotalDistributedKobo),
            exDivPricePerUnit: dto.exDivPricePerUnit ?? null,
            participants: dto.participants.map((p) => ({
                productAccountId: p.productAccountId,
                unitsAtRecord: p.unitsAtRecord,
                isDrip: p.isDrip,
                cashPaidKobo: BigInt(p.cashPaidKobo),
            })),
            createdByUserId: user.userId,
        });
    }
    async pay(id, user) {
        return this.halalFund.payDistribution(id, user.userId);
    }
};
exports.DistributionController = DistributionController;
__decorate([
    (0, common_1.Get)('fund-entities'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DistributionController.prototype, "listFundEntities", null);
__decorate([
    (0, common_1.Get)('product-accounts'),
    __param(0, (0, common_1.Query)('productCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DistributionController.prototype, "listProductAccounts", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('ledgerEntityCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DistributionController.prototype, "list", null);
__decorate([
    (0, common_1.Post)('halal-fund/run'),
    (0, requires_capability_decorator_1.RequiresCapability)('DISTRIBUTION_INITIATION', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.RunHalalFundDistributionDto, Object]),
    __metadata("design:returntype", Promise)
], DistributionController.prototype, "runHalalFundDistribution", null);
__decorate([
    (0, common_1.Post)(':id/pay'),
    (0, requires_capability_decorator_1.RequiresCapability)('DISTRIBUTION_APPROVAL', 'APPROVE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DistributionController.prototype, "pay", null);
exports.DistributionController = DistributionController = __decorate([
    (0, common_1.Controller)('distributions'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        halal_fund_engine_service_1.HalalFundEngineService])
], DistributionController);
//# sourceMappingURL=distribution.controller.js.map