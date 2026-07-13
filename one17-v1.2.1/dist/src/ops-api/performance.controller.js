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
exports.PerformanceController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const prisma_service_1 = require("../prisma/prisma.service");
let PerformanceController = class PerformanceController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async listEntities() {
        return this.prisma.ledgerEntity.findMany({ where: { entityType: { in: ['FUND', 'POOL'] } }, orderBy: { code: 'asc' } });
    }
    async listNavHistory(ledgerEntityCode) {
        const records = await this.prisma.navRecord.findMany({
            where: { ledgerEntityCode },
            orderBy: { valuationDate: 'asc' },
            take: 365,
        });
        return records.map((r) => ({
            valuationDate: r.valuationDate,
            navPerUnit: r.navPerUnit.toString(),
            totalNavKobo: r.totalNavKobo.toString(),
            unitsOutstanding: r.unitsOutstanding.toString(),
            isLocked: r.isLocked,
        }));
    }
    async listDistributions(ledgerEntityCode) {
        const rows = await this.prisma.distribution.findMany({
            where: { ledgerEntityCode },
            orderBy: { recordDate: 'desc' },
            take: 100,
        });
        return rows.map((d) => ({
            ...d,
            netAvailableKobo: d.netAvailableKobo.toString(),
            toParticipantsKobo: d.toParticipantsKobo.toString(),
            retainedOrMudaribBaseKobo: d.retainedOrMudaribBaseKobo.toString(),
        }));
    }
    async listAccounts(ledgerEntityCode) {
        const entity = await this.prisma.ledgerEntity.findUniqueOrThrow({ where: { code: ledgerEntityCode } });
        const accounts = entity.productCode
            ? await this.prisma.productAccount.findMany({
                where: { productCode: entity.productCode },
                orderBy: { startDate: 'desc' },
                take: 200,
                include: { investor: { select: { fullLegalName: true } } },
            })
            : [];
        return accounts.map((a) => ({
            investorId: a.investorId,
            investorName: a.investor?.fullLegalName ?? null,
            principalOrCommittedKobo: a.principalOrCommittedKobo.toString(),
            unitsHeld: a.unitsHeld?.toString() ?? null,
            targetReturnPctBenchmark: a.targetReturnPctBenchmark?.toString() ?? null,
            psrInvestorPct: a.psrInvestorPct?.toString() ?? null,
            liquidityClass: a.liquidityClass,
            status: a.status,
        }));
    }
};
exports.PerformanceController = PerformanceController;
__decorate([
    (0, common_1.Get)('entities'),
    (0, requires_capability_decorator_1.RequiresCapability)('FINANCIAL_STATEMENTS', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PerformanceController.prototype, "listEntities", null);
__decorate([
    (0, common_1.Get)(':ledgerEntityCode/nav-history'),
    (0, requires_capability_decorator_1.RequiresCapability)('FINANCIAL_STATEMENTS', 'VIEW'),
    __param(0, (0, common_1.Param)('ledgerEntityCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PerformanceController.prototype, "listNavHistory", null);
__decorate([
    (0, common_1.Get)(':ledgerEntityCode/distributions'),
    (0, requires_capability_decorator_1.RequiresCapability)('FINANCIAL_STATEMENTS', 'VIEW'),
    __param(0, (0, common_1.Param)('ledgerEntityCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PerformanceController.prototype, "listDistributions", null);
__decorate([
    (0, common_1.Get)(':ledgerEntityCode/accounts'),
    (0, requires_capability_decorator_1.RequiresCapability)('FINANCIAL_STATEMENTS', 'VIEW'),
    __param(0, (0, common_1.Param)('ledgerEntityCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PerformanceController.prototype, "listAccounts", null);
exports.PerformanceController = PerformanceController = __decorate([
    (0, common_1.Controller)('performance'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PerformanceController);
//# sourceMappingURL=performance.controller.js.map