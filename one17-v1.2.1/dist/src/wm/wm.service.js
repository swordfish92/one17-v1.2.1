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
var WmService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WmService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const event_journal_service_1 = require("../event-journal/event-journal.service");
const wm_types_1 = require("./wm.types");
let WmService = class WmService {
    static { WmService_1 = this; }
    prisma;
    audit;
    delegation;
    workflow;
    eventJournal;
    constructor(prisma, audit, delegation, workflow, eventJournal) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
        this.workflow = workflow;
        this.eventJournal = eventJournal;
    }
    async seedReferenceData() {
        for (const c of wm_types_1.ASSET_CLASSES) {
            await this.prisma.assetClassRegistry.upsert({
                where: { code: c.code },
                create: { code: c.code, label: c.label, custodyDefault: 'EXTERNAL', shariahScreeningRule: c.shariahScreeningRule },
                update: { label: c.label, shariahScreeningRule: c.shariahScreeningRule },
            });
        }
        for (const b of wm_types_1.TIER_BANDS) {
            const existing = await this.prisma.wmClientTierConfig.findFirst({ where: { tier: b.tier, isActive: true } });
            if (!existing) {
                await this.prisma.wmClientTierConfig.create({ data: { tier: b.tier, minTotalWealthUsd: b.minTotalWealthUsd, sortOrder: b.sortOrder } });
            }
        }
        await this.prisma.wmFxConfig.upsert({ where: { id: 1 }, create: { id: 1, nairaPerUsd: wm_types_1.DEFAULT_NAIRA_PER_USD }, update: {} });
        for (const s of wm_types_1.STRESS_SCENARIOS) {
            await this.prisma.wmStressScenarioConfig.upsert({
                where: { scenarioCode_version: { scenarioCode: s.scenarioCode, version: 1 } },
                create: { scenarioCode: s.scenarioCode, label: s.label, shockPctByAssetClass: s.shockPctByAssetClass, version: 1, status: 'ACTIVE' },
                update: { label: s.label, shockPctByAssetClass: s.shockPctByAssetClass },
            });
        }
        return { assetClasses: wm_types_1.ASSET_CLASSES.length, tierBands: wm_types_1.TIER_BANDS.length, scenarios: wm_types_1.STRESS_SCENARIOS.length };
    }
    async listClients() {
        return this.prisma.wmClientProfile.findMany({
            include: { investor: { select: { fullLegalName: true, contactEmail: true } } },
            orderBy: { onboardedAt: 'desc' },
        });
    }
    async getClientDashboard(investorId) {
        const [profile, snapshot, allocationPolicy, riskProfile, growthPlan, advisoryRecords, publishedAssessments] = await Promise.all([
            this.prisma.wmClientProfile.findUniqueOrThrow({ where: { investorId }, include: { investor: { select: { fullLegalName: true, contactEmail: true } } } }),
            this.combinedBookSnapshot(investorId),
            this.prisma.wmAllocationPolicy.findFirst({ where: { wmClientProfileId: investorId, isActive: true } }),
            this.prisma.wmRiskProfile.findFirst({ where: { wmClientProfileId: investorId, isActive: true } }),
            this.prisma.wmGrowthPlan.findFirst({ where: { wmClientProfileId: investorId, isActive: true } }),
            this.prisma.wmAdvisoryRecord.findMany({ where: { wmClientProfileId: investorId }, orderBy: { createdAt: 'desc' } }),
            this.prisma.wmRiskAssessmentRun.findMany({ where: { wmClientProfileId: investorId, status: 'PUBLISHED' }, orderBy: { publishedAt: 'desc' } }),
        ]);
        return {
            profile,
            combinedBook: snapshot,
            allocationPolicy,
            riskProfile,
            growthPlan,
            advisoryRecords,
            publishedRiskAssessments: publishedAssessments.map((r) => this.serializeAssessmentRun(r)),
            disclaimers: [
                'One17 holds SEC approval for NON-DISCRETIONARY, NON-CUSTODIAL ADVISORY only — this is advice, not a mandate to trade on your behalf.',
                'Valuations for externally-held (non-custody) assets are client-declared; VERIFIED means a second authorized reviewer confirmed supporting evidence, not an independent market valuation.',
                'External assets are held OUTSIDE One17 custody and are not part of any One17 fund, pool, or regulatory return.',
            ],
        };
    }
    async getPortalDashboard(investorId) {
        const [profile, complaints] = await Promise.all([
            this.prisma.wmClientProfile.findUnique({ where: { investorId } }),
            this.prisma.complaint.findMany({ where: { investorId }, orderBy: { createdAt: 'desc' } }),
        ]);
        if (profile) {
            return { isWmClient: true, ...(await this.getClientDashboard(investorId)), complaints };
        }
        const [investor, productAccounts, pyramid] = await Promise.all([
            this.prisma.investor.findUniqueOrThrow({
                where: { investorId },
                select: { fullLegalName: true, contactEmail: true, relationshipManagerUserId: true },
            }),
            this.prisma.productAccount.findMany({ where: { investorId }, select: { id: true, productCode: true, principalOrCommittedKobo: true } }),
            this.getPreWmPyramidData(investorId),
        ]);
        const totalKobo = productAccounts.reduce((s, a) => s + a.principalOrCommittedKobo, 0n);
        return {
            isWmClient: false,
            investor,
            holdings: {
                byProduct: productAccounts.map((a) => ({ productAccountId: a.id, productCode: a.productCode, valueKobo: a.principalOrCommittedKobo.toString() })),
                totalKobo: totalKobo.toString(),
            },
            pyramid,
            complaints,
        };
    }
    async onboardWmClient(input) {
        await this.assertCapability(input.onboardedByUserId, 'WM_ADVISORY', 'INITIATE', 'onboard a WM client');
        const investor = await this.prisma.investor.findUniqueOrThrow({ where: { investorId: input.investorId } });
        if (investor.kycStatus !== 'KYC_COMPLETE') {
            throw new wm_types_1.WmError(`Flow C requires the same KYC gate as Flow A: investor ${input.investorId} kycStatus is ${investor.kycStatus}, not KYC_COMPLETE.`);
        }
        const existing = await this.prisma.wmClientProfile.findUnique({ where: { investorId: input.investorId } });
        if (existing)
            return existing;
        const totalWealthKobo = await this.computeTotalWealthKobo(input.investorId);
        const tier = this.resolveTier(totalWealthKobo, await this.activeTierBands());
        const profile = await this.prisma.wmClientProfile.create({
            data: {
                investorId: input.investorId,
                currentTier: tier,
                advisorUserId: input.advisorUserId,
                onboardedByUserId: input.onboardedByUserId,
            },
        });
        await this.prisma.wmTierMigrationLog.create({
            data: { wmClientProfileId: profile.investorId, fromTier: null, toTier: tier, totalWealthKobo },
        });
        await this.audit.record({ actorUserId: input.onboardedByUserId, action: 'CREATE', entityType: 'wm_client_profile', entityId: profile.investorId, after: { tier } });
        return profile;
    }
    async computeTotalWealthKobo(investorId) {
        const [oneSeventeen, external] = await Promise.all([
            this.prisma.productAccount.aggregate({ where: { investorId }, _sum: { principalOrCommittedKobo: true } }),
            this.prisma.wmClientAsset.aggregate({ where: { wmClientProfileId: investorId, custodyFlag: 'EXTERNAL' }, _sum: { declaredValueKobo: true } }),
        ]);
        return (oneSeventeen._sum.principalOrCommittedKobo ?? 0n) + (external._sum.declaredValueKobo ?? 0n);
    }
    async combinedBookSnapshot(investorId) {
        const [productAccounts, externalAssets] = await Promise.all([
            this.prisma.productAccount.findMany({ where: { investorId }, select: { id: true, productCode: true, principalOrCommittedKobo: true } }),
            this.prisma.wmClientAsset.findMany({ where: { wmClientProfileId: investorId, custodyFlag: 'EXTERNAL' } }),
        ]);
        const oneSeventeenKobo = productAccounts.reduce((s, a) => s + a.principalOrCommittedKobo, 0n);
        const byAssetClass = { ONE17_CUSTODY: oneSeventeenKobo };
        for (const a of externalAssets) {
            byAssetClass[a.assetClassCode] = (byAssetClass[a.assetClassCode] ?? 0n) + a.declaredValueKobo;
        }
        const totalKobo = Object.values(byAssetClass).reduce((s, v) => s + v, 0n);
        return {
            oneSeventeenByProduct: productAccounts.map((a) => ({ productAccountId: a.id, productCode: a.productCode, valueKobo: a.principalOrCommittedKobo.toString() })),
            externalByAsset: externalAssets.map((a) => ({
                id: a.id,
                assetClassCode: a.assetClassCode,
                valueKobo: a.declaredValueKobo.toString(),
                verificationTag: a.verificationTag,
                shariahScreenTag: a.shariahScreenTag,
            })),
            byAssetClassKobo: Object.fromEntries(Object.entries(byAssetClass).map(([k, v]) => [k, v.toString()])),
            totalKobo: totalKobo.toString(),
        };
    }
    async getPrincipalProfitBreakdown(investorId) {
        const accounts = await this.prisma.productAccount.findMany({
            where: { investorId, status: 'ACTIVE' },
            include: { product: true },
        });
        const breakdown = await Promise.all(accounts.map(async (account) => {
            let profitKobo = null;
            if (account.product.engineType === 'UNIT_NAV') {
                const entity = await this.prisma.ledgerEntity.findFirst({ where: { productCode: account.productCode } });
                const latestNav = entity
                    ? await this.prisma.navRecord.findFirst({ where: { ledgerEntityCode: entity.code, isLocked: true }, orderBy: { valuationDate: 'desc' } })
                    : null;
                if (latestNav && account.unitsHeld != null) {
                    const currentValueKobo = BigInt(Math.round(Number(account.unitsHeld) * Number(latestNav.navPerUnit) * 100));
                    profitKobo = currentValueKobo - account.principalOrCommittedKobo;
                }
            }
            else {
                const agg = await this.prisma.distributionLineItem.aggregate({ where: { productAccountId: account.id }, _sum: { totalPayoutKobo: true } });
                profitKobo = agg._sum.totalPayoutKobo ?? 0n;
            }
            return {
                productAccountId: account.id,
                productCode: account.productCode,
                principalKobo: account.principalOrCommittedKobo.toString(),
                profitKobo: profitKobo === null ? null : profitKobo.toString(),
            };
        }));
        const totalPrincipalKobo = accounts.reduce((s, a) => s + a.principalOrCommittedKobo, 0n);
        const totalProfitKobo = breakdown.reduce((s, r) => s + (r.profitKobo ? BigInt(r.profitKobo) : 0n), 0n);
        return { accounts: breakdown, totalPrincipalKobo: totalPrincipalKobo.toString(), totalProfitKobo: totalProfitKobo.toString() };
    }
    async activeTierBands() {
        const [bands, fx] = await Promise.all([
            this.prisma.wmClientTierConfig.findMany({ where: { isActive: true }, orderBy: { sortOrder: 'desc' } }),
            this.getFxConfig(),
        ]);
        return bands.map((b) => ({ tier: b.tier, minTotalWealthKobo: BigInt(Math.round(Number(b.minTotalWealthUsd) * Number(fx.nairaPerUsd) * 100)) }));
    }
    async getFxConfig() {
        return this.prisma.wmFxConfig.upsert({ where: { id: 1 }, create: { id: 1, nairaPerUsd: wm_types_1.DEFAULT_NAIRA_PER_USD }, update: {} });
    }
    async updateFxRate(nairaPerUsd, actorUserId) {
        await this.assertCapability(actorUserId, 'WM_ADVISORY', 'APPROVE', 'update the governed WM FX rate');
        const updated = await this.prisma.wmFxConfig.update({ where: { id: 1 }, data: { nairaPerUsd, updatedByUserId: actorUserId } });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'wm_fx_config', entityId: '1', after: { nairaPerUsd } });
        return updated;
    }
    resolveTier(totalWealthKobo, bands) {
        const band = bands.find((b) => totalWealthKobo >= b.minTotalWealthKobo);
        return band?.tier ?? 'BASE_MASS';
    }
    async recomputeTier(investorId) {
        const profile = await this.prisma.wmClientProfile.findUniqueOrThrow({ where: { investorId } });
        const totalWealthKobo = await this.computeTotalWealthKobo(investorId);
        const tier = this.resolveTier(totalWealthKobo, await this.activeTierBands());
        if (tier === profile.currentTier)
            return { tier, changed: false };
        await this.prisma.wmClientProfile.update({ where: { investorId }, data: { currentTier: tier, tierUpdatedAt: new Date() } });
        await this.prisma.wmTierMigrationLog.create({
            data: { wmClientProfileId: investorId, fromTier: profile.currentTier, toTier: tier, totalWealthKobo },
        });
        return { tier, changed: true };
    }
    async declareClientAsset(input) {
        await this.assertCapability(input.declaredByUserId, 'WM_ADVISORY', 'INITIATE', 'declare a client asset');
        const assetClass = await this.prisma.assetClassRegistry.findUnique({ where: { code: input.assetClassCode } });
        if (!assetClass || !assetClass.isActive) {
            throw new wm_types_1.WmError(`Asset class "${input.assetClassCode}" is not an active asset_class_registry row.`);
        }
        const asset = await this.prisma.wmClientAsset.create({
            data: {
                wmClientProfileId: input.investorId,
                assetClassCode: input.assetClassCode,
                description: input.description,
                quantity: input.quantity,
                declaredValueKobo: input.declaredValueKobo,
                valuationDate: input.valuationDate,
                custodyFlag: input.custodyFlag,
                evidenceDocumentId: input.evidenceDocumentId,
                declaredByUserId: input.declaredByUserId,
                maturityDate: input.maturityDate,
                tenorMonths: input.tenorMonths,
                scheduledProfitTakingDates: input.scheduledProfitTakingDates,
                targetReturnPct: input.targetReturnPct,
            },
        });
        await this.prisma.wmClientAssetValuation.create({
            data: { wmClientAssetId: asset.id, valuationDate: input.valuationDate, valueKobo: input.declaredValueKobo, recordedByUserId: input.declaredByUserId },
        });
        let workflowInstance;
        try {
            workflowInstance = await this.workflow.initiate({
                workflowTypeCode: 'WM_CLAIM_VALIDATION',
                entityType: 'wm_client_asset',
                entityId: asset.id,
                initiatedByUserId: input.declaredByUserId,
                scenario: 'STANDARD',
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId: input.declaredByUserId,
                action: 'INITIATE_FAILED_COMPENSATED',
                entityType: 'wm_client_asset',
                entityId: asset.id,
                after: { workflowTypeCode: 'WM_CLAIM_VALIDATION', reason: err.message },
            });
            await this.prisma.wmClientAssetValuation.deleteMany({ where: { wmClientAssetId: asset.id } });
            await this.prisma.wmClientAsset.delete({ where: { id: asset.id } });
            throw err;
        }
        const updated = await this.prisma.wmClientAsset.update({ where: { id: asset.id }, data: { workflowInstanceId: workflowInstance.id } });
        await this.audit.record({ actorUserId: input.declaredByUserId, action: 'CREATE', entityType: 'wm_client_asset', entityId: asset.id, after: { assetClassCode: input.assetClassCode, custodyFlag: input.custodyFlag } });
        return { asset: this.serializeAsset(updated), workflowInstance };
    }
    serializeAsset(asset) {
        return { ...asset, declaredValueKobo: asset.declaredValueKobo.toString() };
    }
    serializeAssessmentRun(run) {
        return { ...run, preShockValueKobo: run.preShockValueKobo.toString(), postShockValueKobo: run.postShockValueKobo.toString() };
    }
    async verifyClientAsset(workflowInstanceId, verifierUserId) {
        const updated = await this.workflow.approveNextStep(workflowInstanceId, verifierUserId);
        if (updated.status === 'APPROVED') {
            const asset = await this.prisma.wmClientAsset.update({
                where: { workflowInstanceId },
                data: { verificationTag: 'VERIFIED', verifiedByUserId: verifierUserId, verifiedAt: new Date() },
            });
            await this.audit.record({ actorUserId: verifierUserId, action: 'APPROVE', entityType: 'wm_client_asset', entityId: asset.id, after: { verificationTag: 'VERIFIED' } });
        }
        return updated;
    }
    async setShariahScreen(assetId, tag, actorUserId) {
        await this.assertCapability(actorUserId, 'WM_ADVISORY', 'INITIATE', 'set a Shariah screen tag');
        const updated = await this.prisma.wmClientAsset.update({ where: { id: assetId }, data: { shariahScreenTag: tag } });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'wm_client_asset', entityId: assetId, after: { shariahScreenTag: tag } });
        return updated;
    }
    async getHoldingDetail(assetId, investorId) {
        const asset = await this.prisma.wmClientAsset.findUniqueOrThrow({ where: { id: assetId } });
        if (asset.wmClientProfileId !== investorId) {
            throw new wm_types_1.WmError(`Cross-client access denied: holding ${assetId} does not belong to investor ${investorId}.`);
        }
        const [valuationHistory, actionRequests] = await Promise.all([
            this.prisma.wmClientAssetValuation.findMany({ where: { wmClientAssetId: assetId }, orderBy: { valuationDate: 'asc' } }),
            this.prisma.wmHoldingActionRequest.findMany({ where: { wmClientAssetId: assetId }, orderBy: { createdAt: 'desc' } }),
        ]);
        return {
            asset: this.serializeAsset(asset),
            valuationHistory: valuationHistory.map((v) => ({ ...v, valueKobo: v.valueKobo.toString() })),
            actionRequests: actionRequests.map((r) => ({ ...r, requestedAmountKobo: r.requestedAmountKobo.toString() })),
        };
    }
    async submitHoldingActionRequest(assetId, investorId, requestType, requestedAmountKobo, notes) {
        const asset = await this.prisma.wmClientAsset.findUniqueOrThrow({ where: { id: assetId } });
        if (asset.wmClientProfileId !== investorId) {
            throw new wm_types_1.WmError(`Cross-client access denied: holding ${assetId} does not belong to investor ${investorId}.`);
        }
        const request = await this.prisma.wmHoldingActionRequest.create({ data: { wmClientAssetId: assetId, requestType, requestedAmountKobo, notes } });
        return { ...request, requestedAmountKobo: request.requestedAmountKobo.toString() };
    }
    async requestTopUp(assetId, investorId, requestedAmountKobo, notes) {
        return this.submitHoldingActionRequest(assetId, investorId, 'TOP_UP', requestedAmountKobo, notes);
    }
    async requestRedemption(assetId, investorId, requestedAmountKobo, notes) {
        return this.submitHoldingActionRequest(assetId, investorId, 'REDEMPTION', requestedAmountKobo, notes);
    }
    async listPendingHoldingActionRequests(actorUserId) {
        await this.assertCapability(actorUserId, 'WM_ADVISORY', 'VIEW', 'list pending holding action requests');
        const requests = await this.prisma.wmHoldingActionRequest.findMany({
            where: { status: 'PENDING' },
            orderBy: { createdAt: 'asc' },
            include: { wmClientAsset: { include: { wmClientProfile: { include: { investor: { select: { fullLegalName: true } } } } } } },
        });
        return requests.map((r) => ({ ...r, requestedAmountKobo: r.requestedAmountKobo.toString() }));
    }
    async actionHoldingRequest(requestId, actorUserId) {
        await this.assertCapability(actorUserId, 'WM_ADVISORY', 'INITIATE', 'action a holding request');
        const request = await this.prisma.wmHoldingActionRequest.findUniqueOrThrow({ where: { id: requestId } });
        if (request.status !== 'PENDING') {
            throw new wm_types_1.WmError(`Holding action request ${requestId} is already ${request.status}.`);
        }
        const updated = await this.prisma.wmHoldingActionRequest.update({
            where: { id: requestId },
            data: { status: 'ACTIONED', actionedByUserId: actorUserId, actionedAt: new Date() },
        });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'wm_holding_action_request', entityId: requestId, after: { status: 'ACTIONED' } });
        return { ...updated, requestedAmountKobo: updated.requestedAmountKobo.toString() };
    }
    async getNwcsPyramidData(investorId) {
        const [profile, bands, totalWealthKobo] = await Promise.all([
            this.prisma.wmClientProfile.findUniqueOrThrow({ where: { investorId } }),
            this.activeTierBands(),
            this.computeTotalWealthKobo(investorId),
        ]);
        const tiers = wm_types_1.TIER_BANDS.map((t) => {
            const derived = bands.find((b) => b.tier === t.tier);
            return {
                tier: t.tier,
                sortOrder: t.sortOrder,
                serviceDescriptor: t.serviceDescriptor,
                minTotalWealthUsd: t.minTotalWealthUsd,
                minTotalWealthKobo: (derived?.minTotalWealthKobo ?? 0n).toString(),
            };
        });
        return { tiers, clientTier: profile.currentTier, clientTotalWealthKobo: totalWealthKobo.toString() };
    }
    static PRE_WM_CEILING_SORT_ORDER = 4;
    async getPreWmPyramidData(investorId) {
        const existingProfile = await this.prisma.wmClientProfile.findUnique({ where: { investorId } });
        if (existingProfile) {
            throw new wm_types_1.WmError(`Investor ${investorId} is already a WM client — use the full 10-tier pyramid, not the pre-WM truncated view.`);
        }
        const [bands, totalWealthKobo] = await Promise.all([this.activeTierBands(), this.computeTotalWealthKobo(investorId)]);
        const truncatedBandDefs = wm_types_1.TIER_BANDS.filter((t) => t.sortOrder <= WmService_1.PRE_WM_CEILING_SORT_ORDER);
        const tiers = truncatedBandDefs.map((t) => {
            const derived = bands.find((b) => b.tier === t.tier);
            return {
                tier: t.tier,
                sortOrder: t.sortOrder,
                serviceDescriptor: t.serviceDescriptor,
                minTotalWealthUsd: t.minTotalWealthUsd,
                minTotalWealthKobo: (derived?.minTotalWealthKobo ?? 0n).toString(),
            };
        });
        const resolvedTier = this.resolveTier(totalWealthKobo, bands);
        const withinCeiling = truncatedBandDefs.some((t) => t.tier === resolvedTier);
        const ceilingTier = truncatedBandDefs[truncatedBandDefs.length - 1].tier;
        return {
            tiers,
            clientTier: withinCeiling ? resolvedTier : ceilingTier,
            clientTotalWealthKobo: totalWealthKobo.toString(),
            atOrAboveCeiling: !withinCeiling,
            isWmClient: false,
        };
    }
    async listPreWmProspects() {
        return this.prisma.investor.findMany({
            where: { kycStatus: 'KYC_COMPLETE', wmClientProfile: null },
            select: { investorId: true, fullLegalName: true, contactEmail: true },
            orderBy: { fullLegalName: 'asc' },
        });
    }
    async setAllocationPolicy(input) {
        await this.assertCapability(input.createdByUserId, 'WM_ADVISORY', 'INITIATE', 'set an allocation policy');
        return this.createVersioned('wmAllocationPolicy', input.investorId, input.createdByUserId, {
            targetAllocations: input.targetAllocations,
            riskBand: input.riskBand,
        });
    }
    async acknowledgeAllocationPolicy(id, investorId) {
        return this.ackVersioned('wmAllocationPolicy', id, investorId);
    }
    async setRiskProfile(input) {
        await this.assertCapability(input.createdByUserId, 'WM_ADVISORY', 'INITIATE', 'set a risk profile');
        return this.createVersioned('wmRiskProfile', input.investorId, input.createdByUserId, {
            questionnaireResponses: input.questionnaireResponses,
            riskBand: input.riskBand,
        });
    }
    async acknowledgeRiskProfile(id, investorId) {
        return this.ackVersioned('wmRiskProfile', id, investorId);
    }
    async setGrowthPlan(input) {
        await this.assertCapability(input.createdByUserId, 'WM_ADVISORY', 'INITIATE', 'set a growth plan');
        return this.createVersioned('wmGrowthPlan', input.investorId, input.createdByUserId, {
            horizon: input.horizon,
            milestones: input.milestones,
            targetGlidePath: input.targetGlidePath,
            reviewSchedule: input.reviewSchedule,
        });
    }
    async acknowledgeGrowthPlan(id, investorId) {
        return this.ackVersioned('wmGrowthPlan', id, investorId);
    }
    async createVersioned(model, investorId, createdByUserId, data) {
        const delegate = this.prisma[model];
        const latest = await delegate.findFirst({ where: { wmClientProfileId: investorId }, orderBy: { version: 'desc' } });
        const version = (latest?.version ?? 0) + 1;
        if (latest)
            await delegate.updateMany({ where: { wmClientProfileId: investorId, isActive: true }, data: { isActive: false } });
        const created = await delegate.create({ data: { wmClientProfileId: investorId, version, createdByUserId, ...data } });
        await this.audit.record({ actorUserId: createdByUserId, action: 'CREATE', entityType: model, entityId: created.id, after: { version } });
        return created;
    }
    async ackVersioned(model, id, investorId) {
        const delegate = this.prisma[model];
        const row = await delegate.findUniqueOrThrow({ where: { id } });
        if (row.wmClientProfileId !== investorId) {
            throw new wm_types_1.WmError(`Cross-client access denied: record ${id} does not belong to investor ${investorId}.`);
        }
        return delegate.update({ where: { id }, data: { clientAcknowledgedAt: new Date() } });
    }
    async createAdvisoryRecord(input) {
        await this.assertCapability(input.advisorUserId, 'WM_ADVISORY', 'INITIATE', 'create an advisory record');
        const record = await this.prisma.wmAdvisoryRecord.create({
            data: {
                wmClientProfileId: input.investorId,
                recommendation: input.recommendation,
                rationale: input.rationale,
                riskNotes: input.riskNotes,
                shariahNote: input.shariahNote,
                advisorUserId: input.advisorUserId,
            },
        });
        await this.audit.record({ actorUserId: input.advisorUserId, action: 'CREATE', entityType: 'wm_advisory_record', entityId: record.id });
        return record;
    }
    async respondToAdvisory(recordId, investorId, response) {
        const record = await this.prisma.wmAdvisoryRecord.findUniqueOrThrow({ where: { id: recordId } });
        if (record.wmClientProfileId !== investorId) {
            throw new wm_types_1.WmError(`Cross-client access denied: advisory record ${recordId} does not belong to investor ${investorId}.`);
        }
        if (record.clientResponse !== 'PENDING') {
            throw new wm_types_1.WmError(`Advisory record ${recordId} already has a response (${record.clientResponse}) — immutable once responded.`);
        }
        return this.prisma.wmAdvisoryRecord.update({ where: { id: recordId }, data: { clientResponse: response, respondedAt: new Date() } });
    }
    async runSandboxRiskAssessment(input) {
        await this.assertCapability(input.ranByUserId, 'WM_ADVISORY', 'INITIATE', 'run a WM sandbox risk assessment');
        const scenario = await this.prisma.wmStressScenarioConfig.findFirst({ where: { scenarioCode: input.scenarioCode, status: 'ACTIVE' }, orderBy: { version: 'desc' } });
        if (!scenario)
            throw new wm_types_1.WmError(`No ACTIVE wm_stress_scenario_config row for "${input.scenarioCode}" — cannot run without governed parameters (invariant 10).`);
        const snapshot = await this.combinedBookSnapshot(input.investorId);
        const shocks = scenario.shockPctByAssetClass;
        let postShockKobo = 0n;
        for (const [assetClass, valueStr] of Object.entries(snapshot.byAssetClassKobo)) {
            const value = BigInt(valueStr);
            const shockPct = shocks[assetClass] ?? 0;
            postShockKobo += value + (value * BigInt(Math.round(shockPct * 100))) / 10000n;
        }
        const run = await this.prisma.wmRiskAssessmentRun.create({
            data: {
                wmClientProfileId: input.investorId,
                scenarioConfigId: scenario.id,
                combinedBookSnapshot: snapshot,
                preShockValueKobo: BigInt(snapshot.totalKobo),
                postShockValueKobo: postShockKobo,
                status: 'DRAFT',
                ranByUserId: input.ranByUserId,
            },
        });
        await this.audit.record({ actorUserId: input.ranByUserId, action: 'CREATE', entityType: 'wm_risk_assessment_run', entityId: run.id, after: { scenarioCode: input.scenarioCode, runMode: 'SANDBOX' } });
        return this.serializeAssessmentRun(run);
    }
    async publishRiskAssessment(runId, reviewedByUserId) {
        await this.assertCapability(reviewedByUserId, 'WM_ADVISORY', 'INITIATE', 'publish a WM risk assessment to the client dashboard');
        const run = await this.prisma.wmRiskAssessmentRun.update({
            where: { id: runId },
            data: { status: 'PUBLISHED', reviewedByUserId, publishedAt: new Date() },
        });
        await this.audit.record({ actorUserId: reviewedByUserId, action: 'UPDATE', entityType: 'wm_risk_assessment_run', entityId: runId, after: { status: 'PUBLISHED' } });
        return this.serializeAssessmentRun(run);
    }
    async chargeAdvisoryFee(input) {
        await this.assertCapability(input.actorUserId, 'JOURNAL_ENTRIES', 'INITIATE', 'charge a WM advisory fee');
        const { journal, workflowInstance } = await this.eventJournal.generateAndRequestPosting({
            eventType: 'WM_ADVISORY_FEE',
            ledgerEntityCode: input.ledgerEntityCode,
            amountKobo: input.amountKobo,
            drAccountCodeOverride: input.drAccountCodeOverride,
            crAccountCodeOverride: input.crAccountCodeOverride,
            entryDate: input.entryDate,
            referenceTokens: { investor_id: input.investorId, date: input.entryDate.toISOString().slice(0, 10) },
            createdByUserId: input.actorUserId,
        });
        return { journal, workflowInstance };
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'wm_activity', entityId: activity, after: { functionCode, level } });
            throw new wm_types_1.WmError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.WmService = WmService;
exports.WmService = WmService = WmService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService,
        event_journal_service_1.EventJournalService])
], WmService);
//# sourceMappingURL=wm.service.js.map