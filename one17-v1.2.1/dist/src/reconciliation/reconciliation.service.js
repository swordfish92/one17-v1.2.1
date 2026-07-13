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
exports.ReconciliationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ReconciliationService = class ReconciliationService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async reconcile(metricCode, operationalKobo) {
        const metricDef = await this.prisma.metricDefinition.findFirst({
            where: { metricCode, status: 'ACTIVE', ledgerReconcilable: true },
            orderBy: { version: 'desc' },
        });
        if (!metricDef)
            return { configured: false };
        const config = await this.prisma.ledgerReconciliationConfig.findFirst({
            where: { metricCode, status: 'ACTIVE' },
            orderBy: { version: 'desc' },
        });
        if (!config)
            return { configured: false };
        const accounts = await this.prisma.chartOfAccount.findMany({
            where: {
                accountCode: { in: config.glAccountCodes },
                ...(config.ledgerEntityCode ? { ledgerEntityCode: config.ledgerEntityCode } : {}),
            },
        });
        if (accounts.length === 0)
            return { configured: false };
        const lines = await this.prisma.journalEntryLine.findMany({
            where: { accountId: { in: accounts.map((a) => a.id) } },
        });
        const accountTypeById = new Map(accounts.map((a) => [a.id, a.accountType]));
        const ledgerKobo = lines.reduce((sum, line) => {
            const type = accountTypeById.get(line.accountId);
            const natural = type === 'INCOME' || type === 'EQUITY' || type === 'LIABILITY' ? 1 : -1;
            return sum + BigInt(natural) * (line.creditKobo - line.debitKobo);
        }, 0n);
        const varianceKobo = operationalKobo - ledgerKobo;
        const absVarianceKobo = varianceKobo < 0n ? -varianceKobo : varianceKobo;
        return {
            configured: true,
            operationalKobo,
            ledgerKobo,
            varianceKobo,
            toleranceKobo: config.toleranceKobo,
            breached: absVarianceKobo > config.toleranceKobo,
        };
    }
};
exports.ReconciliationService = ReconciliationService;
exports.ReconciliationService = ReconciliationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReconciliationService);
//# sourceMappingURL=reconciliation.service.js.map