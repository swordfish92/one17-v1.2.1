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
exports.OffersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const prospectus_sheet_service_1 = require("../parameters/prospectus-sheet.service");
const offers_types_1 = require("./offers.types");
let OffersService = class OffersService {
    prisma;
    prospectusSheet;
    constructor(prisma, prospectusSheet) {
        this.prisma = prisma;
        this.prospectusSheet = prospectusSheet;
    }
    async listActiveOffers() {
        const products = await this.prisma.product.findMany({
            where: { status: 'ACTIVE', shariahApprovedAt: { not: null } },
            orderBy: { code: 'asc' },
        });
        const cards = [];
        for (const product of products) {
            const sheet = await this.prospectusSheet.getSheetInForceAt(product.code, new Date());
            if (!sheet)
                continue;
            cards.push(await this.buildCard(product, sheet));
        }
        return cards;
    }
    async getOfferDetail(productCode) {
        const product = await this.prisma.product.findUniqueOrThrow({ where: { code: productCode } });
        if (product.status !== 'ACTIVE' || !product.shariahApprovedAt) {
            throw new Error(`Product ${productCode} is not eligible for the Offers & Opportunities tab (status=${product.status}, shariahApprovedAt=${product.shariahApprovedAt ? 'set' : 'null'}).`);
        }
        const sheet = await this.prospectusSheet.getSheetInForceAt(productCode, new Date());
        if (!sheet) {
            throw new Error(`Product ${productCode} has no LOCKED prospectus sheet in force -- not eligible for the Offers & Opportunities tab.`);
        }
        return this.buildCard(product, sheet);
    }
    async buildCard(product, sheet) {
        const narrative = {
            brief: sheet.offerNarrativeBrief ?? null,
            opportunity: sheet.offerNarrativeOpportunity ?? null,
            dynamics: sheet.offerNarrativeDynamics ?? null,
            riskSummary: sheet.offerNarrativeRiskSummary ?? null,
            modelDescription: sheet.offerNarrativeModelDescription ?? null,
        };
        let navHistory = null;
        let targetedReturn = null;
        if (product.engineType === 'UNIT_NAV') {
            const entity = await this.prisma.ledgerEntity.findFirst({ where: { productCode: product.code } });
            if (entity) {
                const records = await this.prisma.navRecord.findMany({
                    where: { ledgerEntityCode: entity.code },
                    orderBy: { valuationDate: 'asc' },
                    take: 365,
                });
                navHistory = records.map((r) => ({
                    valuationDate: r.valuationDate.toISOString().slice(0, 10),
                    navPerUnit: r.navPerUnit.toString(),
                    totalNavKobo: r.totalNavKobo.toString(),
                }));
            }
            else {
                navHistory = [];
            }
        }
        else if (sheet.targetedReturnBenchmarkPct !== null) {
            targetedReturn = {
                valuePct: Number(sheet.targetedReturnBenchmarkPct),
                isBenchmarkOnly: true,
                disclaimer: offers_types_1.BENCHMARK_ONLY_DISCLAIMER,
            };
        }
        return {
            productCode: product.code,
            name: product.name,
            engineType: product.engineType,
            sheetVersion: sheet.version,
            narrative,
            targetedReturn,
            navHistory,
            minimumSubscriptionKobo: sheet.minimumSubscriptionKobo?.toString() ?? null,
            minimumInvestmentKobo: sheet.minimumInvestmentKobo?.toString() ?? null,
            minimumParticipationKobo: sheet.minimumParticipationKobo?.toString() ?? null,
            poolTenorMonths: sheet.poolTenorMonths ?? null,
            tenorLockInMonths: sheet.tenorLockInMonths ?? null,
            distributionFrequency: sheet.distributionFrequency ?? null,
            mandateRoleModel: sheet.mandateRoleModel ?? null,
            fundingStructure: sheet.fundingStructure ?? null,
        };
    }
};
exports.OffersService = OffersService;
exports.OffersService = OffersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        prospectus_sheet_service_1.ProspectusSheetService])
], OffersService);
//# sourceMappingURL=offers.service.js.map