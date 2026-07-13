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
exports.NdMandateEngineService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const workflow_service_1 = require("../workflow/workflow.service");
const nd_mandate_engine_types_1 = require("./nd-mandate-engine.types");
let NdMandateEngineService = class NdMandateEngineService {
    prisma;
    audit;
    workflow;
    constructor(prisma, audit, workflow) {
        this.prisma = prisma;
        this.audit = audit;
        this.workflow = workflow;
    }
    async createMandate(input) {
        if (input.participantType === 'INVESTOR' && !input.investorId) {
            throw new nd_mandate_engine_types_1.NdMandateEngineError('participantType=INVESTOR requires investorId.');
        }
        if ((input.participantType === 'FUND' || input.participantType === 'POOL') && !input.participantLedgerEntityCode) {
            throw new nd_mandate_engine_types_1.NdMandateEngineError(`participantType=${input.participantType} requires participantLedgerEntityCode (§E6: books as an inter-entity linked position).`);
        }
        if (input.sharingMode === 'MUDARABAH_PSR') {
            if (input.investorRatio == null || input.mudaribRatio == null) {
                throw new nd_mandate_engine_types_1.NdMandateEngineError('MUDARABAH_PSR mode requires investorRatio and mudaribRatio.');
            }
            if (Math.abs(input.investorRatio + input.mudaribRatio - 1) > 0.0001) {
                throw new nd_mandate_engine_types_1.NdMandateEngineError(`investorRatio + mudaribRatio must equal 1 (got ${input.investorRatio + input.mudaribRatio}).`);
            }
        }
        if (input.sharingMode === 'WAKALAH' && input.wakalahFeeRatePa == null) {
            throw new nd_mandate_engine_types_1.NdMandateEngineError('WAKALAH mode requires wakalahFeeRatePa.');
        }
        const mandate = await this.prisma.ndMandateAccount.create({
            data: {
                mandateRef: input.mandateRef,
                ledgerEntityCode: input.ledgerEntityCode,
                participantType: input.participantType,
                investorId: input.investorId,
                participantLedgerEntityCode: input.participantLedgerEntityCode,
                sharingMode: input.sharingMode,
                investorRatio: input.investorRatio,
                mudaribRatio: input.mudaribRatio,
                wakalahFeeRatePa: input.wakalahFeeRatePa,
                targetReturnPct: input.targetReturnPct,
                startDate: input.startDate,
                maturityDate: input.maturityDate,
                committedCapitalKobo: input.committedCapitalKobo,
                createdByUserId: input.createdByUserId,
                status: 'DRAFT',
            },
        });
        let instance;
        try {
            instance = await this.workflow.initiate({
                workflowTypeCode: 'ND_MANDATE_ACTIVATION',
                entityType: 'nd_mandate_account',
                entityId: mandate.id,
                initiatedByUserId: input.createdByUserId,
                scenario: 'STANDARD',
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId: input.createdByUserId,
                action: 'INITIATE_FAILED_COMPENSATED',
                entityType: 'nd_mandate_account',
                entityId: mandate.id,
                after: { workflowTypeCode: 'ND_MANDATE_ACTIVATION', reason: err.message },
            });
            await this.prisma.ndMandateAccount.delete({ where: { id: mandate.id } });
            throw err;
        }
        return this.prisma.ndMandateAccount.update({
            where: { id: mandate.id },
            data: { activationWorkflowInstanceId: instance.id },
        });
    }
    async activateMandate(input) {
        const mandate = await this.prisma.ndMandateAccount.findUniqueOrThrow({ where: { id: input.ndMandateAccountId } });
        if (mandate.sharingMode === 'WAKALAH') {
            if (!input.surplusTreatment) {
                throw new nd_mandate_engine_types_1.NdMandateEngineError('AMD-12/§E4: WAKALAH mandate cannot activate without a surplus_treatment election (CLIENT_ALL | AGENT_RETAINS | SHARED) — no default exists.');
            }
            if (input.surplusTreatment === 'SHARED' && input.sharedRatio == null) {
                throw new nd_mandate_engine_types_1.NdMandateEngineError('surplus_treatment=SHARED requires a sharedRatio.');
            }
        }
        if (!mandate.activationWorkflowInstanceId) {
            throw new nd_mandate_engine_types_1.NdMandateEngineError(`Mandate ${mandate.id} has no activation workflow instance — a mandate created before invariant 42(c) landed; retro-check required before it can activate (see CHECK9_EVIDENCE.md).`);
        }
        await this.workflow.approveNextStep(mandate.activationWorkflowInstanceId, input.activatedByUserId);
        return this.prisma.ndMandateAccount.update({
            where: { id: input.ndMandateAccountId },
            data: { status: 'ACTIVE', surplusTreatment: input.surplusTreatment, sharedRatio: input.sharedRatio },
        });
    }
    async computeMudarabahPsr(input) {
        const mandate = await this.prisma.ndMandateAccount.findUniqueOrThrow({ where: { id: input.ndMandateAccountId } });
        if (mandate.sharingMode !== 'MUDARABAH_PSR')
            throw new nd_mandate_engine_types_1.NdMandateEngineError(`mandate ${input.ndMandateAccountId} is not in MUDARABAH_PSR mode.`);
        if (!input.shariahFlagsClear)
            throw new nd_mandate_engine_types_1.NdMandateEngineError('active Shariah non-compliance flag — HALT before computation.');
        const investorRatio = Number(mandate.investorRatio ?? 0);
        const mudaribRatio = Number(mandate.mudaribRatio ?? 0);
        const isLoss = input.realizedProfitKobo < 0n;
        let clientShareKobo;
        let one17ShareKobo;
        if (isLoss) {
            clientShareKobo = input.realizedProfitKobo;
            one17ShareKobo = 0n;
        }
        else {
            clientShareKobo = BigInt(Math.round(Number(input.realizedProfitKobo) * investorRatio));
            one17ShareKobo = BigInt(Math.round(Number(input.realizedProfitKobo) * mudaribRatio));
        }
        const withheldForKyc = !input.kycValid && !isLoss;
        if (withheldForKyc)
            clientShareKobo = 0n;
        const gateResults = [
            { gate: 'confirmed-income-only', passed: true, detail: 'realizedProfitKobo is the only input — no projection/provisional path exists in this engine (BR-PAE-01 by construction)' },
            { gate: 'kyc-withhold', passed: true, detail: withheldForKyc ? 'payout withheld pending KYC, not redistributed' : 'KYC valid or loss scenario' },
            { gate: 'shariah-flag-clearance', passed: input.shariahFlagsClear, detail: 'no active Shariah flag' },
            { gate: 'no-negative-payout', passed: withheldForKyc ? true : (isLoss ? true : clientShareKobo >= 0n && one17ShareKobo >= 0n), detail: `client=${clientShareKobo}, one17=${one17ShareKobo}` },
            { gate: 'reconciliation-lt-1', passed: isLoss || absBig(input.realizedProfitKobo - (clientShareKobo + one17ShareKobo) - (withheldForKyc ? BigInt(Math.round(Number(input.realizedProfitKobo) * investorRatio)) : 0n)) < 100n, detail: 'profit = client + one17 (+withheld) within N1' },
        ];
        return { clientShareKobo, one17ShareKobo, isLoss, withheldForKyc, gateResults };
    }
    async computeWakalah(input) {
        const mandate = await this.prisma.ndMandateAccount.findUniqueOrThrow({ where: { id: input.ndMandateAccountId } });
        if (mandate.sharingMode !== 'WAKALAH')
            throw new nd_mandate_engine_types_1.NdMandateEngineError(`mandate ${input.ndMandateAccountId} is not in WAKALAH mode.`);
        if (mandate.status !== 'ACTIVE')
            throw new nd_mandate_engine_types_1.NdMandateEngineError(`mandate ${input.ndMandateAccountId} is not ACTIVE — cannot compute Wakalah sharing before activation (surplus_treatment must be elected).`);
        if (!input.shariahFlagsClear)
            throw new nd_mandate_engine_types_1.NdMandateEngineError('active Shariah non-compliance flag — HALT before computation.');
        const rate = Number(mandate.wakalahFeeRatePa ?? 0) / 100;
        const wakalahFeeKobo = BigInt(Math.round(Number(input.mandateAumKobo) * rate * (input.days / 365)));
        const clientReturnKobo = input.realizedProfitKobo - wakalahFeeKobo - input.incentivePortionKobo;
        const expectedReturnKobo = BigInt(Math.round(Number(input.mandateAumKobo) * (Number(mandate.targetReturnPct ?? 0) / 100) * (input.days / 365)));
        const excessKobo = maxBig(0n, clientReturnKobo - expectedReturnKobo);
        let excessToClientKobo = 0n;
        let excessToAgentKobo = 0n;
        if (excessKobo > 0n) {
            if (mandate.surplusTreatment === 'CLIENT_ALL')
                excessToClientKobo = excessKobo;
            else if (mandate.surplusTreatment === 'AGENT_RETAINS')
                excessToAgentKobo = excessKobo;
            else if (mandate.surplusTreatment === 'SHARED') {
                const ratio = Number(mandate.sharedRatio ?? 0);
                excessToClientKobo = BigInt(Math.round(Number(excessKobo) * ratio));
                excessToAgentKobo = excessKobo - excessToClientKobo;
            }
        }
        const withheldForKyc = !input.kycValid;
        const finalClientReturnKobo = withheldForKyc ? 0n : maxBig(0n, clientReturnKobo);
        const gateResults = [
            { gate: 'confirmed-income-only', passed: true, detail: 'realizedProfitKobo is the only input' },
            { gate: 'kyc-withhold', passed: true, detail: withheldForKyc ? 'payout withheld pending KYC' : 'KYC valid' },
            { gate: 'shariah-flag-clearance', passed: input.shariahFlagsClear, detail: 'no active Shariah flag' },
            { gate: 'no-negative-payout', passed: finalClientReturnKobo >= 0n, detail: `client return=${finalClientReturnKobo}` },
        ];
        return { wakalahFeeKobo, clientReturnKobo: finalClientReturnKobo, excessKobo, excessToClientKobo, excessToAgentKobo, withheldForKyc, gateResults };
    }
    async accrueProvisional(input) {
        const provisionalAmountKobo = BigInt(Math.round(Number(input.capitalKobo) * (input.expectedRatePct / 100) * (1 / 365)));
        return this.prisma.ndMandateProvisionalAccrual.upsert({
            where: { ndMandateAccountId_accrualDate: { ndMandateAccountId: input.ndMandateAccountId, accrualDate: input.accrualDate } },
            create: { ndMandateAccountId: input.ndMandateAccountId, accrualDate: input.accrualDate, capitalKobo: input.capitalKobo, expectedRatePct: input.expectedRatePct, provisionalAmountKobo, status: 'PROVISIONAL' },
            update: { capitalKobo: input.capitalKobo, expectedRatePct: input.expectedRatePct, provisionalAmountKobo },
        });
    }
    async reverseAndTrueUp(accrualId, trueUpJournalRef) {
        const accrual = await this.prisma.ndMandateProvisionalAccrual.findUniqueOrThrow({ where: { id: accrualId } });
        if (accrual.status !== 'PROVISIONAL') {
            throw new nd_mandate_engine_types_1.NdMandateEngineError(`accrual ${accrualId} is already ${accrual.status} — cannot true-up twice.`);
        }
        return this.prisma.ndMandateProvisionalAccrual.update({
            where: { id: accrualId },
            data: { status: 'TRUED_UP', trueUpJournalRef, reversedAt: new Date() },
        });
    }
    async findAgingProvisionals(thresholdDays, asOfDate) {
        const cutoff = new Date(asOfDate.getTime() - thresholdDays * 24 * 60 * 60 * 1000);
        return this.prisma.ndMandateProvisionalAccrual.findMany({
            where: { status: 'PROVISIONAL', accrualDate: { lte: cutoff } },
        });
    }
    async runNdMandateDistribution(ndMandateAccountId, method, totalPayoutKobo, createdByUserId) {
        const mandate = await this.prisma.ndMandateAccount.findUniqueOrThrow({ where: { id: ndMandateAccountId } });
        const today = new Date();
        const distribution = await this.prisma.distribution.create({
            data: {
                ledgerEntityCode: mandate.ledgerEntityCode,
                productCode: 'ONE17-ND-MANDATE',
                method,
                periodStart: mandate.startDate,
                periodEnd: mandate.maturityDate ?? today,
                recordDate: today,
                netAvailableKobo: totalPayoutKobo,
                toParticipantsKobo: totalPayoutKobo,
                retainedOrMudaribBaseKobo: 0n,
                status: 'DRAFT',
                createdByUserId,
                lineItems: {
                    create: [{
                            ndMandateAccountId,
                            capitalKobo: 0n,
                            totalPayoutKobo,
                        }],
                },
            },
        });
        let workflowInstance;
        try {
            workflowInstance = await this.workflow.initiate({
                workflowTypeCode: 'DISTRIBUTION',
                entityType: 'distribution',
                entityId: distribution.id,
                amountKobo: totalPayoutKobo,
                initiatedByUserId: createdByUserId,
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId: createdByUserId,
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
        return { distribution, workflowInstanceId: workflowInstance.id };
    }
    async listAccounts(ledgerEntityCode) {
        return this.prisma.ndMandateAccount.findMany({
            where: ledgerEntityCode ? { ledgerEntityCode } : undefined,
            orderBy: { createdAt: 'desc' },
            take: 200,
        });
    }
    async listAgingProvisionals(thresholdDays) {
        const rows = await this.findAgingProvisionals(thresholdDays, new Date());
        return rows.map((r) => ({
            ...r,
            capitalKobo: r.capitalKobo.toString(),
            provisionalAmountKobo: r.provisionalAmountKobo.toString(),
            daysOld: Math.floor((Date.now() - r.accrualDate.getTime()) / (24 * 60 * 60 * 1000)),
        }));
    }
};
exports.NdMandateEngineService = NdMandateEngineService;
exports.NdMandateEngineService = NdMandateEngineService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        workflow_service_1.WorkflowEngineService])
], NdMandateEngineService);
function absBig(n) {
    return n < 0n ? -n : n;
}
function maxBig(a, b) {
    return a > b ? a : b;
}
//# sourceMappingURL=nd-mandate-engine.service.js.map