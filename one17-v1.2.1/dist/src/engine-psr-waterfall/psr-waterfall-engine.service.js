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
exports.PsrWaterfallEngineService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const workflow_service_1 = require("../workflow/workflow.service");
const psr_waterfall_engine_types_1 = require("./psr-waterfall-engine.types");
let PsrWaterfallEngineService = class PsrWaterfallEngineService {
    prisma;
    audit;
    workflow;
    constructor(prisma, audit, workflow) {
        this.prisma = prisma;
        this.audit = audit;
        this.workflow = workflow;
    }
    computeWaterfall(input) {
        if (Math.round(input.gammaPoolPct + input.deltaPoolPct) !== 100) {
            throw new psr_waterfall_engine_types_1.PsrWaterfallEngineError(`AMD-02: gamma_pool (${input.gammaPoolPct}) + delta_pool (${input.deltaPoolPct}) must equal 100.`);
        }
        if (!(input.betaPoolPct > 0 && input.betaPoolPct < 100)) {
            throw new psr_waterfall_engine_types_1.PsrWaterfallEngineError(`AMD-01: beta_pool (${input.betaPoolPct}) must satisfy 0 < beta_pool < 100.`);
        }
        if (!input.shariahFlagsClear) {
            throw new psr_waterfall_engine_types_1.PsrWaterfallEngineError('DC-06: active Shariah non-compliance flag on this pool — distribution HALTed until cleared.');
        }
        const mudaribBaseKobo = roundKobo(Number(input.poolProfitKobo) * (input.betaPoolPct / 100));
        const investorPoolKobo = input.poolProfitKobo - mudaribBaseKobo;
        const entitlements = new Map();
        let totalEntitlementsKobo = 0n;
        for (const p of input.participants) {
            const entitlementKobo = roundKobo(Number(p.capitalKobo) * (p.targetRatePct / 100) * (p.activeDays / 365));
            entitlements.set(p.productAccountId, entitlementKobo);
            totalEntitlementsKobo += entitlementKobo;
        }
        let surplusKobo = 0n;
        let shortfallKobo = 0n;
        let hibahAppliedKobo = 0n;
        const priorityPayouts = new Map();
        const hibahPerParticipant = new Map();
        if (investorPoolKobo >= totalEntitlementsKobo) {
            for (const p of input.participants)
                priorityPayouts.set(p.productAccountId, entitlements.get(p.productAccountId));
            surplusKobo = investorPoolKobo - totalEntitlementsKobo;
        }
        else {
            shortfallKobo = totalEntitlementsKobo - investorPoolKobo;
            hibahAppliedKobo = minBig(minBig(input.hibahOfferedKobo, shortfallKobo), mudaribBaseKobo);
            const potKobo = investorPoolKobo + hibahAppliedKobo;
            const totalCapitalKobo = input.participants.reduce((s, p) => s + p.capitalKobo, 0n);
            if (totalCapitalKobo === 0n)
                throw new psr_waterfall_engine_types_1.PsrWaterfallEngineError('computeWaterfall: total participant capital is zero.');
            for (const p of input.participants) {
                const share = roundKobo(Number(potKobo) * (Number(p.capitalKobo) / Number(totalCapitalKobo)));
                priorityPayouts.set(p.productAccountId, share);
                if (hibahAppliedKobo > 0n) {
                    hibahPerParticipant.set(p.productAccountId, roundKobo(Number(hibahAppliedKobo) * (Number(p.capitalKobo) / Number(totalCapitalKobo))));
                }
            }
        }
        const surplusPayouts = new Map();
        const tweByParticipant = new Map();
        let mudaribSurplusKobo = 0n;
        if (surplusKobo > 0n && input.surplusSharingEnabled) {
            const weightBase = input.participants.map((p) => Number(p.capitalKobo) * p.activeDays);
            const totalWeightBase = weightBase.reduce((s, w) => s + w, 0);
            if (totalWeightBase <= 0)
                throw new psr_waterfall_engine_types_1.PsrWaterfallEngineError('computeWaterfall: Sigma(capital x days) is zero — cannot compute TWE.');
            let tweSum = 0;
            input.participants.forEach((p, i) => {
                const twe = weightBase[i] / totalWeightBase;
                tweByParticipant.set(p.productAccountId, twe);
                tweSum += twe;
            });
            if (Math.abs(tweSum - 1) > 0.0001) {
                throw new psr_waterfall_engine_types_1.PsrWaterfallEngineError(`DC-03/AMD-02 hard assert: Sigma(TWE) = ${tweSum} deviates from 1.0 by more than +-0.0001 — HALT.`);
            }
            for (const p of input.participants) {
                const twe = tweByParticipant.get(p.productAccountId);
                surplusPayouts.set(p.productAccountId, roundKobo(Number(surplusKobo) * twe * (input.gammaPoolPct / 100)));
            }
            mudaribSurplusKobo = roundKobo(Number(surplusKobo) * (input.deltaPoolPct / 100));
        }
        else if (surplusKobo > 0n) {
            mudaribSurplusKobo = surplusKobo;
        }
        const validParticipants = input.participants.filter((p) => p.kycValid);
        const invalidParticipants = input.participants.filter((p) => !p.kycValid);
        let withheldKobo = 0n;
        for (const p of invalidParticipants) {
            withheldKobo += (priorityPayouts.get(p.productAccountId) ?? 0n) + (surplusPayouts.get(p.productAccountId) ?? 0n);
            priorityPayouts.set(p.productAccountId, 0n);
            surplusPayouts.set(p.productAccountId, 0n);
        }
        if (withheldKobo > 0n && validParticipants.length > 0) {
            const validCapitalTotal = validParticipants.reduce((s, p) => s + p.capitalKobo, 0n);
            for (const p of validParticipants) {
                const extra = roundKobo(Number(withheldKobo) * (Number(p.capitalKobo) / Number(validCapitalTotal)));
                priorityPayouts.set(p.productAccountId, (priorityPayouts.get(p.productAccountId) ?? 0n) + extra);
            }
        }
        const mudaribRetainedKobo = mudaribBaseKobo - hibahAppliedKobo;
        const participants = input.participants.map((p) => {
            const priority = priorityPayouts.get(p.productAccountId) ?? 0n;
            const surplus = surplusPayouts.get(p.productAccountId) ?? 0n;
            const hibah = hibahPerParticipant.get(p.productAccountId) ?? 0n;
            return {
                productAccountId: p.productAccountId,
                entitlementKobo: entitlements.get(p.productAccountId),
                twe: tweByParticipant.get(p.productAccountId) ?? 0,
                priorityPayoutKobo: priority,
                surplusPayoutKobo: surplus,
                hibahKobo: hibah,
                withheldForKyc: !p.kycValid,
                totalPayoutKobo: priority + surplus,
            };
        });
        const dcGateResults = this.runDcGates(input, {
            mudaribBaseKobo, investorPoolKobo, totalEntitlementsKobo, surplusKobo, shortfallKobo,
            mudaribRetainedKobo, mudaribSurplusKobo, participants, dcGateResults: [],
        });
        return {
            mudaribBaseKobo, investorPoolKobo, totalEntitlementsKobo, surplusKobo, shortfallKobo,
            mudaribRetainedKobo, mudaribSurplusKobo, participants, dcGateResults,
        };
    }
    runDcGates(input, result) {
        const gates = [];
        const totalFlowsKobo = result.mudaribRetainedKobo + result.mudaribSurplusKobo
            + result.participants.reduce((s, p) => s + p.totalPayoutKobo, 0n);
        const diffKobo = absBig(input.poolProfitKobo - totalFlowsKobo);
        gates.push({
            gate: 'DC-01', description: 'Reconciliation < N1 (100 kobo)',
            passed: diffKobo < 100n,
            detail: `pool_profit=${input.poolProfitKobo} vs mudarib_retained+mudarib_surplus+Sigma(payouts)=${totalFlowsKobo}, diff=${diffKobo} kobo`,
        });
        const anyNegative = result.participants.some((p) => p.totalPayoutKobo < 0n);
        gates.push({ gate: 'DC-02', description: 'No negative payouts', passed: !anyNegative, detail: anyNegative ? 'a participant payout went negative' : 'all payouts >= 0' });
        const tweApplicable = result.surplusKobo > 0n && input.surplusSharingEnabled;
        const tweValid = !tweApplicable || (() => {
            const sum = result.participants.reduce((s, p) => s + p.twe, 0);
            return Math.abs(sum - 1) <= 0.0001;
        })();
        gates.push({ gate: 'DC-03', description: 'Sigma(TWE) = 1 +-0.0001 when a surplus exists and surplus-sharing is elected', passed: tweValid, detail: !tweApplicable ? (result.surplusKobo === 0n ? 'no surplus this period — TWE not applicable' : 'surplus-sharing not elected on the approved prospectus sheet — surplus routed wholesale to Mudarib, TWE not applicable') : `Sigma(TWE)=${result.participants.reduce((s, p) => s + p.twe, 0)}` });
        const mutuallyExclusive = !(result.surplusKobo > 0n && result.shortfallKobo > 0n);
        gates.push({ gate: 'DC-04', description: 'Surplus and shortfall are mutually exclusive', passed: mutuallyExclusive, detail: `surplus=${result.surplusKobo}, shortfall=${result.shortfallKobo}` });
        const kycOk = result.participants.filter((p) => p.withheldForKyc).every((p) => p.totalPayoutKobo === 0n);
        gates.push({ gate: 'DC-05', description: 'KYC-invalid participants withheld and redistributed to others', passed: kycOk, detail: `${result.participants.filter((p) => p.withheldForKyc).length} participant(s) withheld` });
        gates.push({ gate: 'DC-06', description: 'Shariah flag clearance', passed: input.shariahFlagsClear, detail: input.shariahFlagsClear ? 'no active Shariah flag' : 'HALTED before computation' });
        const requiresBoard = result.investorPoolKobo > 1000000000n;
        gates.push({ gate: 'DC-07', description: 'Board approval required above threshold', passed: !requiresBoard || !!input.boardResolutionRef, detail: requiresBoard ? `investor_pool=${result.investorPoolKobo} kobo exceeds NGN10M tier — board_resolution_ref ${input.boardResolutionRef ? 'present' : 'MISSING'}` : 'below board-approval threshold' });
        gates.push({ gate: 'DC-08', description: 'Loss scenario requires SSB sign-off (n/a — profit period)', passed: true, detail: 'not a loss scenario' });
        return gates;
    }
    async runWaterfallDistribution(input) {
        const sheet = await this.prisma.productParameters.findFirst({
            where: { productCode: input.productCode, approvedByUserId: { not: null }, effectiveFrom: { lte: input.recordDate } },
            orderBy: { effectiveFrom: 'desc' },
        });
        const governedInput = { ...input, surplusSharingEnabled: sheet?.surplusSharingEnabled ?? false };
        const result = this.computeWaterfall(governedInput);
        const failedGate = result.dcGateResults.find((g) => !g.passed);
        if (failedGate) {
            throw new psr_waterfall_engine_types_1.PsrWaterfallEngineError(`${failedGate.gate} failed: ${failedGate.description} — ${failedGate.detail}`);
        }
        const distribution = await this.prisma.distribution.create({
            data: {
                ledgerEntityCode: input.ledgerEntityCode,
                productCode: input.productCode,
                periodStart: input.periodStart,
                periodEnd: input.periodEnd,
                recordDate: input.recordDate,
                netAvailableKobo: result.investorPoolKobo,
                toParticipantsKobo: result.participants.reduce((s, p) => s + p.totalPayoutKobo, 0n),
                retainedOrMudaribBaseKobo: result.mudaribRetainedKobo,
                boardResolutionRef: input.boardResolutionRef ?? undefined,
                status: 'DRAFT',
                createdByUserId: input.createdByUserId,
                lineItems: {
                    create: result.participants.map((p) => {
                        const src = input.participants.find((x) => x.productAccountId === p.productAccountId);
                        return {
                            productAccountId: p.productAccountId,
                            capitalKobo: src.capitalKobo,
                            targetRatePct: src.targetRatePct,
                            activeDays: src.activeDays,
                            entitlementKobo: p.entitlementKobo,
                            twe: p.twe,
                            priorityPayoutKobo: p.priorityPayoutKobo,
                            surplusPayoutKobo: p.surplusPayoutKobo,
                            hibahKobo: p.hibahKobo,
                            totalPayoutKobo: p.totalPayoutKobo,
                        };
                    }),
                },
            },
        });
        let workflowInstance;
        try {
            workflowInstance = await this.workflow.initiate({
                workflowTypeCode: 'DISTRIBUTION',
                entityType: 'distribution',
                entityId: distribution.id,
                amountKobo: result.investorPoolKobo,
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
        await this.prisma.distribution.update({ where: { id: distribution.id }, data: { workflowInstanceId: workflowInstance.id } });
        return { result, distributionId: distribution.id, workflowInstanceId: workflowInstance.id };
    }
    allocateLoss(input) {
        if (!input.ssbResolutionRef) {
            throw new psr_waterfall_engine_types_1.PsrWaterfallEngineError('DC-08: loss scenario requires SSB sign-off (ssbResolutionRef) — none provided.');
        }
        const totalCapitalKobo = input.participants.reduce((s, p) => s + p.capitalKobo, 0n);
        if (totalCapitalKobo === 0n)
            throw new psr_waterfall_engine_types_1.PsrWaterfallEngineError('allocateLoss: total participant capital is zero.');
        const participantLossKobo = input.participants.map((p) => {
            const lossKobo = roundKobo(Number(input.poolLossKobo) * (Number(p.capitalKobo) / Number(totalCapitalKobo)));
            const hibahOffsetKobo = totalCapitalKobo > 0n
                ? roundKobo(Number(input.companyFundedHibahKobo) * (Number(p.capitalKobo) / Number(totalCapitalKobo)))
                : 0n;
            const netLossKobo = maxBig(0n, lossKobo - hibahOffsetKobo);
            return { productAccountId: p.productAccountId, lossKobo, hibahOffsetKobo, netLossKobo };
        });
        return { participantLossKobo };
    }
    purifyIncome(nonPermissibleIncomeKobo) {
        if (nonPermissibleIncomeKobo < 0n) {
            throw new psr_waterfall_engine_types_1.PsrWaterfallEngineError('purifyIncome: amount must not be negative.');
        }
        return { toCharityKobo: nonPermissibleIncomeKobo };
    }
};
exports.PsrWaterfallEngineService = PsrWaterfallEngineService;
exports.PsrWaterfallEngineService = PsrWaterfallEngineService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        workflow_service_1.WorkflowEngineService])
], PsrWaterfallEngineService);
function roundKobo(amountKobo) {
    return BigInt(Math.round(amountKobo));
}
function absBig(n) {
    return n < 0n ? -n : n;
}
function minBig(a, b) {
    return a < b ? a : b;
}
function maxBig(a, b) {
    return a > b ? a : b;
}
//# sourceMappingURL=psr-waterfall-engine.service.js.map