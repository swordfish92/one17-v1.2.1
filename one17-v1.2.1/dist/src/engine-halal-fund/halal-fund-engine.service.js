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
exports.HalalFundEngineService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const workflow_service_1 = require("../workflow/workflow.service");
const delegation_service_1 = require("../delegation/delegation.service");
const halal_fund_engine_types_1 = require("./halal-fund-engine.types");
let HalalFundEngineService = class HalalFundEngineService {
    prisma;
    audit;
    workflow;
    delegation;
    constructor(prisma, audit, workflow, delegation) {
        this.prisma = prisma;
        this.audit = audit;
        this.workflow = workflow;
        this.delegation = delegation;
    }
    async assertCapability(userId, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, 'NAV_MARKET_VALUE_ENTRY', level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'portfolio_market_value_entry', entityId: activity, after: { functionCode: 'NAV_MARKET_VALUE_ENTRY', level } });
            throw new halal_fund_engine_types_1.HalalFundEngineError(`User lacks ${level} authority on NAV_MARKET_VALUE_ENTRY (standing or delegated), required to ${activity}.`);
        }
    }
    async proposeMarketValueEntry(input) {
        await this.assertCapability(input.proposedByUserId, 'INITIATE', `propose a portfolio market value for ${input.ledgerEntityCode} on ${input.valuationDate.toISOString().slice(0, 10)}`);
        if (input.marketValueKobo <= 0n)
            throw new halal_fund_engine_types_1.HalalFundEngineError('marketValueKobo must be positive.');
        const latest = await this.prisma.portfolioMarketValueEntry.findFirst({
            where: { ledgerEntityCode: input.ledgerEntityCode, valuationDate: input.valuationDate },
            orderBy: { version: 'desc' },
        });
        const entry = await this.prisma.portfolioMarketValueEntry.create({
            data: {
                ledgerEntityCode: input.ledgerEntityCode,
                valuationDate: input.valuationDate,
                version: (latest?.version ?? 0) + 1,
                marketValueKobo: input.marketValueKobo,
                status: 'DRAFT',
                proposedByUserId: input.proposedByUserId,
            },
        });
        await this.audit.record({ actorUserId: input.proposedByUserId, action: 'CREATE', entityType: 'portfolio_market_value_entry', entityId: entry.id, after: { ledgerEntityCode: entry.ledgerEntityCode, valuationDate: entry.valuationDate.toISOString(), marketValueKobo: entry.marketValueKobo.toString(), version: entry.version } });
        return entry;
    }
    async approveMarketValueEntry(input) {
        await this.assertCapability(input.approvedByUserId, 'APPROVE', 'approve a portfolio market value entry');
        const entry = await this.prisma.portfolioMarketValueEntry.findUniqueOrThrow({ where: { id: input.entryId } });
        if (entry.status !== 'DRAFT')
            throw new halal_fund_engine_types_1.HalalFundEngineError(`portfolio_market_value_entry ${entry.id} is ${entry.status}, not DRAFT.`);
        if (entry.proposedByUserId === input.approvedByUserId) {
            throw new halal_fund_engine_types_1.HalalFundEngineError('Approver cannot be the same user who proposed this market value entry (maker≠checker).');
        }
        const [, approved] = await this.prisma.$transaction([
            this.prisma.portfolioMarketValueEntry.updateMany({
                where: { ledgerEntityCode: entry.ledgerEntityCode, valuationDate: entry.valuationDate, status: 'ACTIVE' },
                data: { status: 'SUPERSEDED' },
            }),
            this.prisma.portfolioMarketValueEntry.update({
                where: { id: entry.id },
                data: { status: 'ACTIVE', approvedByUserId: input.approvedByUserId, approvedAt: new Date() },
            }),
        ]);
        await this.audit.record({ actorUserId: input.approvedByUserId, action: 'APPROVE', entityType: 'portfolio_market_value_entry', entityId: entry.id, after: { status: 'ACTIVE' } });
        return approved;
    }
    async listMarketValueEntries(ledgerEntityCode) {
        return this.prisma.portfolioMarketValueEntry.findMany({
            where: { ledgerEntityCode },
            include: {
                proposedByUser: { select: { displayName: true, email: true } },
                approvedByUser: { select: { displayName: true, email: true } },
            },
            orderBy: [{ valuationDate: 'desc' }, { version: 'desc' }],
        });
    }
    async computeDailyNav(input) {
        const { ledgerEntityCode, valuationDate } = input;
        const positions = await this.prisma.portfolioPosition.findMany({
            where: {
                ledgerEntityCode,
                entryDate: { lte: valuationDate },
                status: { not: 'EXITED' },
            },
        });
        const marketValueOverride = await this.prisma.portfolioMarketValueEntry.findFirst({
            where: { ledgerEntityCode, valuationDate, status: 'ACTIVE' },
            orderBy: { version: 'desc' },
        });
        let portfolioMktValKobo = 0n;
        let activeOutstandingPrincipalKobo = 0n;
        for (const pos of positions) {
            if (pos.status === 'MATURED' && pos.maturityDate && pos.maturityDate < valuationDate)
                continue;
            const outstandingKobo = pos.principalKobo - pos.repaidKobo;
            if (pos.isEquity) {
                const markPrice = pos.markPriceKobo != null ? Number(pos.markPriceKobo) : Number(pos.principalKobo);
                const qty = pos.markQty != null ? Number(pos.markQty) : 0;
                portfolioMktValKobo += BigInt(Math.round(markPrice * qty));
            }
            else {
                const capDate = pos.maturityDate && pos.maturityDate < valuationDate ? pos.maturityDate : valuationDate;
                const days = daysBetween(pos.entryDate, capDate);
                const rate = pos.ratePct != null ? Number(pos.ratePct) / 100 : 0;
                const accruedNaira = (Number(outstandingKobo) / 100) * rate * (days / 365);
                const mktValKobo = outstandingKobo + BigInt(Math.round(accruedNaira * 100));
                portfolioMktValKobo += mktValKobo;
            }
            activeOutstandingPrincipalKobo += outstandingKobo;
        }
        const marketValueSource = marketValueOverride ? 'MANUAL_ENTRY' : 'BOTTOM_UP';
        if (marketValueOverride)
            portfolioMktValKobo = marketValueOverride.marketValueKobo;
        const subs = await this.prisma.txn.aggregate({
            where: { ledgerEntityCode, txnType: 'SUBSCRIPTION', valueDate: { lte: valuationDate } },
            _sum: { amountKobo: true },
        });
        const reds = await this.prisma.txn.aggregate({
            where: { ledgerEntityCode, txnType: 'REDEMPTION', valueDate: { lte: valuationDate } },
            _sum: { amountKobo: true },
        });
        const paidDistributions = await this.prisma.distribution.aggregate({
            where: { ledgerEntityCode, status: 'PAID', paidAt: { lte: valuationDate } },
            _sum: { toParticipantsKobo: true },
        });
        const subsKobo = subs._sum.amountKobo ?? 0n;
        const redsKobo = absBigInt(reds._sum.amountKobo ?? 0n);
        const paidDistKobo = paidDistributions._sum.toParticipantsKobo ?? 0n;
        const uninvestedCashKobo = subsKobo - redsKobo - activeOutstandingPrincipalKobo - paidDistKobo;
        const feeRows = await this.prisma.feeAccrual.findMany({
            where: { ledgerEntityCode, accrualDate: { lte: valuationDate } },
            orderBy: { accrualDate: 'desc' },
        });
        const latestPerType = new Map();
        for (const row of feeRows) {
            if (!latestPerType.has(row.feeType))
                latestPerType.set(row.feeType, row);
        }
        let accruedUnpaidFeesKobo = 0n;
        for (const row of latestPerType.values()) {
            accruedUnpaidFeesKobo += row.cumulativeAmountKobo - row.paidAmountKobo;
        }
        const totalNavKobo = portfolioMktValKobo + uninvestedCashKobo - accruedUnpaidFeesKobo;
        const unitsAgg = await this.prisma.txn.aggregate({
            where: {
                ledgerEntityCode,
                txnType: { in: ['SUBSCRIPTION', 'REDEMPTION'] },
                valueDate: { lte: valuationDate },
            },
            _sum: { unitsQty: true },
        });
        const unitsOutstanding = Number(unitsAgg._sum.unitsQty ?? 0);
        let navPerUnit;
        if (sameDay(valuationDate, input.launchDate)) {
            navPerUnit = input.launchPrice;
        }
        else if (unitsOutstanding <= 0) {
            navPerUnit = input.launchPrice;
        }
        else {
            navPerUnit = Number(totalNavKobo) / 100 / unitsOutstanding;
        }
        const offerPrice = round4(navPerUnit * (1 + input.offerSpreadPct));
        const bidPrice = round4(navPerUnit * (1 - input.bidSpreadPct));
        return {
            valuationDate,
            portfolioMktValKobo,
            marketValueSource,
            uninvestedCashKobo,
            accruedUnpaidFeesKobo,
            totalNavKobo,
            unitsOutstanding,
            navPerUnit: round4(navPerUnit),
            offerPrice,
            bidPrice,
        };
    }
    async publishAndLockNav(input) {
        const existing = await this.prisma.navRecord.findUnique({
            where: { ledgerEntityCode_valuationDate: { ledgerEntityCode: input.ledgerEntityCode, valuationDate: input.valuationDate } },
        });
        if (existing) {
            throw new halal_fund_engine_types_1.HalalFundEngineError(`nav_record already exists for ${input.ledgerEntityCode} on ${input.valuationDate.toISOString().slice(0, 10)} (locked=${existing.isLocked}) — publication is one-shot per date.`);
        }
        const computed = await this.computeDailyNav(input);
        return this.prisma.navRecord.create({
            data: {
                ledgerEntityCode: input.ledgerEntityCode,
                valuationDate: computed.valuationDate,
                portfolioMktValKobo: computed.portfolioMktValKobo,
                uninvestedCashKobo: computed.uninvestedCashKobo,
                accruedUnpaidFeesKobo: computed.accruedUnpaidFeesKobo,
                totalNavKobo: computed.totalNavKobo,
                unitsOutstanding: computed.unitsOutstanding,
                navPerUnit: computed.navPerUnit,
                offerPrice: computed.offerPrice,
                bidPrice: computed.bidPrice,
                isLocked: true,
                lockedAt: new Date(),
            },
        });
    }
    allocateSubscriptionUnits(amountKobo, offerPrice) {
        if (offerPrice <= 0)
            throw new halal_fund_engine_types_1.HalalFundEngineError('offerPrice must be > 0 to allocate subscription units.');
        return round4(Number(amountKobo) / 100 / offerPrice);
    }
    computeRedemptionProceedsKobo(units, bidPrice) {
        if (bidPrice <= 0)
            throw new halal_fund_engine_types_1.HalalFundEngineError('bidPrice must be > 0 to compute redemption proceeds.');
        return BigInt(Math.round(units * bidPrice * 100));
    }
    computeUnitPricingFromNav(totalNavKobo, unitsOutstanding, offerSpreadPct, bidSpreadPct) {
        if (unitsOutstanding <= 0)
            throw new halal_fund_engine_types_1.HalalFundEngineError('unitsOutstanding must be > 0 to compute unit pricing.');
        const navPerUnit = round4(Number(totalNavKobo) / 100 / unitsOutstanding);
        return {
            navPerUnit,
            offerPrice: round4(navPerUnit * (1 + offerSpreadPct)),
            bidPrice: round4(navPerUnit * (1 - bidSpreadPct)),
        };
    }
    async accrueFees(input) {
        const ledgerEntity = await this.prisma.ledgerEntity.findUniqueOrThrow({ where: { code: input.ledgerEntityCode } });
        if (ledgerEntity.entityType === 'POOL') {
            throw new halal_fund_engine_types_1.HalalFundEngineError(`AMD-03: ledger entity ${input.ledgerEntityCode} is a POOL — no fee accrual of any type may be posted against a Mudarabah pool.`);
        }
        const results = [];
        for (const fee of input.feeRates) {
            const prior = await this.prisma.feeAccrual.findFirst({
                where: { ledgerEntityCode: input.ledgerEntityCode, feeType: fee.feeType, accrualDate: { lt: input.accrualDate } },
                orderBy: { accrualDate: 'desc' },
            });
            const priorCumulative = prior?.cumulativeAmountKobo ?? 0n;
            const dailyNaira = (Number(input.navBaseKobo) / 100) * (fee.annualRatePct / 100) / 365;
            const dailyKobo = BigInt(Math.round(dailyNaira * 100));
            const cumulativeKobo = priorCumulative + dailyKobo;
            const row = await this.prisma.feeAccrual.upsert({
                where: { ledgerEntityCode_feeType_accrualDate: { ledgerEntityCode: input.ledgerEntityCode, feeType: fee.feeType, accrualDate: input.accrualDate } },
                create: {
                    ledgerEntityCode: input.ledgerEntityCode,
                    feeType: fee.feeType,
                    accrualDate: input.accrualDate,
                    dailyAmountKobo: dailyKobo,
                    cumulativeAmountKobo: cumulativeKobo,
                },
                update: { dailyAmountKobo: dailyKobo, cumulativeAmountKobo: cumulativeKobo },
            });
            results.push(row);
        }
        return results;
    }
    async runDistribution(input) {
        if (input.distributablePct < 0.8) {
            throw new halal_fund_engine_types_1.HalalFundEngineError(`F-HF-05: distributable % (${input.distributablePct}) is below the SEC floor of 80% — never permitted below, per B0.`);
        }
        const methodUsed = input.method ?? (input.navHistoryComplete ? 'NAV' : 'INCOME');
        const rawAmountKobo = methodUsed === 'NAV'
            ? input.closingNavKobo - input.openingNavKobo - input.netSubscriptionsKobo
            : input.incomeBasisKobo;
        const netAvailableKobo = maxBig(0n, rawAmountKobo - input.priorDeclaredKobo);
        const toParticipantsKobo = maxBig(0n, BigInt(Math.round(Number(netAvailableKobo) * input.distributablePct)));
        const retainedKobo = netAvailableKobo - toParticipantsKobo;
        const rollingDistributableKobo = maxBig(0n, netAvailableKobo - input.priorTotalDistributedKobo);
        const totalUnits = input.participants.reduce((s, p) => s + p.unitsAtRecord, 0);
        if (totalUnits <= 0) {
            throw new halal_fund_engine_types_1.HalalFundEngineError('runDistribution: total units at record date is zero — cannot compute DPS.');
        }
        const dps = round4(Number(toParticipantsKobo) / 100 / totalUnits);
        const participantResults = [];
        for (const p of input.participants) {
            const totalPayoutKobo = BigInt(Math.round(dps * p.unitsAtRecord * 100));
            let dripAmountKobo = 0n;
            let dripUnits = 0;
            if (p.isDrip) {
                if (input.exDivPricePerUnit == null || input.exDivPricePerUnit <= 0) {
                    throw new halal_fund_engine_types_1.HalalFundEngineError(`AMD-04: DRIP election for product_account ${p.productAccountId} has no valid ex-dividend price (${input.exDivPricePerUnit}) — HALT.`);
                }
                dripAmountKobo = maxBig(0n, totalPayoutKobo - p.cashPaidKobo);
                dripUnits = round4(Number(dripAmountKobo) / 100 / input.exDivPricePerUnit);
                if (dripUnits < 0) {
                    throw new halal_fund_engine_types_1.HalalFundEngineError(`AMD-04: computed DRIP units (${dripUnits}) for product_account ${p.productAccountId} are negative — HALT (this is exactly the register row D001 defect the guard exists to prevent).`);
                }
            }
            participantResults.push({ productAccountId: p.productAccountId, dpsAmount: dps, totalPayoutKobo, dripAmountKobo, dripUnits });
        }
        const distribution = await this.prisma.distribution.create({
            data: {
                ledgerEntityCode: input.ledgerEntityCode,
                productCode: input.productCode,
                method: methodUsed,
                periodStart: input.periodStart,
                periodEnd: input.periodEnd,
                recordDate: input.recordDate,
                netAvailableKobo,
                toParticipantsKobo,
                retainedOrMudaribBaseKobo: retainedKobo,
                status: 'DRAFT',
                createdByUserId: input.createdByUserId,
                lineItems: {
                    create: participantResults.map((p) => ({
                        productAccountId: p.productAccountId,
                        capitalKobo: 0n,
                        unitsAtRecord: input.participants.find((x) => x.productAccountId === p.productAccountId).unitsAtRecord,
                        dpsAmount: p.dpsAmount,
                        dripUnits: p.dripUnits,
                        dripAmountKobo: p.dripAmountKobo,
                        totalPayoutKobo: p.totalPayoutKobo,
                    })),
                },
            },
        });
        let workflowInstance;
        try {
            workflowInstance = await this.workflow.initiate({
                workflowTypeCode: 'DISTRIBUTION',
                entityType: 'distribution',
                entityId: distribution.id,
                amountKobo: toParticipantsKobo,
                initiatedByUserId: input.createdByUserId,
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId: input.createdByUserId,
                action: 'INITIATE_FAILED_COMPENSATED',
                entityType: 'distribution',
                entityId: distribution.id,
                after: { workflowTypeCode: 'DISTRIBUTION', reason: err.message },
            });
            await this.prisma.distributionLineItem.deleteMany({ where: { distributionId: distribution.id } });
            await this.prisma.distribution.delete({ where: { id: distribution.id } });
            throw err;
        }
        await this.prisma.distribution.update({
            where: { id: distribution.id },
            data: { workflowInstanceId: workflowInstance.id },
        });
        return {
            result: { methodUsed, netAvailableKobo, toParticipantsKobo, retainedKobo, rollingDistributableKobo, dps, participants: participantResults },
            distributionId: distribution.id,
            workflowInstanceId: workflowInstance.id,
        };
    }
    async approveDistributionDeclaration(workflowInstanceId, approverUserId) {
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        if (updated.status !== 'APPROVED')
            return null;
        const distribution = await this.prisma.distribution.findFirstOrThrow({ where: { workflowInstanceId } });
        const declared = await this.prisma.distribution.update({
            where: { id: distribution.id },
            data: { status: 'DECLARED', declaredAt: new Date() },
        });
        await this.audit.record({
            actorUserId: approverUserId,
            action: 'APPROVE',
            entityType: 'distribution',
            entityId: declared.id,
            after: { status: 'DECLARED' },
        });
        return declared;
    }
    async payDistribution(distributionId, actorUserId) {
        const distribution = await this.prisma.distribution.findUniqueOrThrow({ where: { id: distributionId } });
        if (distribution.status !== 'DECLARED') {
            throw new halal_fund_engine_types_1.HalalFundEngineError(`Cannot pay distribution ${distributionId}: status is ${distribution.status}, not DECLARED.`);
        }
        const paid = await this.prisma.distribution.update({
            where: { id: distributionId },
            data: { status: 'PAID', paidAt: new Date() },
        });
        await this.audit.record({
            actorUserId,
            action: 'UPDATE',
            entityType: 'distribution',
            entityId: paid.id,
            after: { status: 'PAID' },
        });
        return paid;
    }
};
exports.HalalFundEngineService = HalalFundEngineService;
exports.HalalFundEngineService = HalalFundEngineService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        workflow_service_1.WorkflowEngineService,
        delegation_service_1.DelegationService])
], HalalFundEngineService);
function daysBetween(from, to) {
    const ms = to.getTime() - from.getTime();
    return Math.max(0, Math.floor(ms / (1000 * 60 * 60 * 24)));
}
function sameDay(a, b) {
    return a.toISOString().slice(0, 10) === b.toISOString().slice(0, 10);
}
function round4(n) {
    return Math.round(n * 10000) / 10000;
}
function absBigInt(n) {
    return n < 0n ? -n : n;
}
function maxBig(a, b) {
    return a > b ? a : b;
}
//# sourceMappingURL=halal-fund-engine.service.js.map