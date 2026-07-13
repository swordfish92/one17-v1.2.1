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
exports.ScreeningGatewayService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const notification_service_1 = require("../notification/notification.service");
const document_service_1 = require("../document/document.service");
const scheduler_types_1 = require("../scheduler/scheduler.types");
const screening_gateway_types_1 = require("./screening-gateway.types");
const list_parsers_1 = require("./list-parsers");
const name_similarity_1 = require("./name-similarity");
const gateway_secret_crypto_1 = require("../common/gateway-secret-crypto");
let ScreeningGatewayService = class ScreeningGatewayService {
    prisma;
    audit;
    delegation;
    workflow;
    notification;
    document;
    constructor(prisma, audit, delegation, workflow, notification, document) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
        this.workflow = workflow;
        this.notification = notification;
        this.document = document;
    }
    async listSources() {
        const rows = await this.prisma.screeningListSource.findMany({ orderBy: { sourceCode: 'asc' } });
        return rows.map((r) => this.serializeSource(r));
    }
    async proposeSourceConfig(input, actorUserId) {
        await this.assertCapability(actorUserId, 'SCREENING_GATEWAY_POLICY', 'INITIATE', 'propose a screening list source config change');
        const source = await this.prisma.screeningListSource.findUnique({ where: { sourceCode: input.sourceCode } });
        if (!source)
            throw new screening_gateway_types_1.ScreeningGatewayError(`No ScreeningListSource seeded for ${input.sourceCode} -- the five sources are seeded at build time, never created ad hoc.`);
        if (source.isParked && input.isActive) {
            throw new screening_gateway_types_1.ScreeningGatewayError(`${input.sourceCode} is PARKED (${source.parkedReason ?? 'no consolidated machine-readable file exists'}) -- it cannot be activated. Un-parking requires a schema/code change once a real machine-readable feed exists, not a config toggle.`);
        }
        if (source.configWorkflowInstanceId) {
            throw new screening_gateway_types_1.ScreeningGatewayError(`${input.sourceCode} already has a config change pending approval.`);
        }
        const workflowInstance = await this.workflow.initiate({
            workflowTypeCode: 'SCREENING_LIST_SOURCE_CONFIG',
            entityType: 'screening_list_source',
            entityId: source.id,
            initiatedByUserId: actorUserId,
            scenario: 'STANDARD',
        });
        const updated = await this.prisma.screeningListSource.update({
            where: { id: source.id },
            data: {
                pendingDownloadUrl: input.downloadUrl ?? undefined,
                pendingExtraConfig: input.extraConfig ? (0, gateway_secret_crypto_1.encryptJsonSecret)(input.extraConfig) : undefined,
                pendingIsActive: input.isActive ?? undefined,
                pendingProposedByUserId: actorUserId,
                configWorkflowInstanceId: workflowInstance.id,
            },
        });
        return this.serializeSource(updated);
    }
    async approveSourceConfig(workflowInstanceId, approverUserId) {
        const updatedInstance = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        const source = await this.prisma.screeningListSource.findFirstOrThrow({ where: { configWorkflowInstanceId: workflowInstanceId } });
        if (updatedInstance.status !== 'APPROVED')
            return this.serializeSource(source);
        const updated = await this.prisma.screeningListSource.update({
            where: { id: source.id },
            data: {
                downloadUrl: source.pendingDownloadUrl ?? source.downloadUrl,
                extraConfig: (source.pendingExtraConfig ?? source.extraConfig),
                isActive: source.pendingIsActive ?? source.isActive,
                configuredByUserId: source.pendingProposedByUserId ?? source.configuredByUserId,
                pendingDownloadUrl: null,
                pendingExtraConfig: undefined,
                pendingIsActive: null,
                pendingProposedByUserId: null,
                configWorkflowInstanceId: null,
            },
        });
        await this.audit.record({ actorUserId: approverUserId, action: 'APPROVE', entityType: 'screening_list_source', entityId: updated.id, after: { sourceCode: updated.sourceCode, isActive: updated.isActive } });
        return this.serializeSource(updated);
    }
    serializeSource(s) {
        const { extraConfig, pendingExtraConfig, ...rest } = s;
        return { ...rest, hasExtraConfig: !!extraConfig, hasPendingExtraConfig: !!pendingExtraConfig };
    }
    async getConfig() {
        return this.prisma.screeningGatewayConfig.upsert({ where: { id: 1 }, create: { id: 1 }, update: {} });
    }
    async updateConfig(input, actorUserId) {
        await this.assertCapability(actorUserId, 'SCREENING_GATEWAY_POLICY', 'APPROVE', 'change the active screening provider mode or thresholds');
        if (input.freshnessMaxAgeDays !== undefined && input.freshnessMaxAgeDays < 1) {
            throw new screening_gateway_types_1.ScreeningGatewayError('freshnessMaxAgeDays must be at least 1 -- invariant 75(b) (CHECK28): the freshness ceiling ensureScreened compares stale runs against.');
        }
        const updated = await this.prisma.screeningGatewayConfig.upsert({
            where: { id: 1 },
            create: { id: 1, ...input, updatedByUserId: actorUserId },
            update: { ...input, updatedByUserId: actorUserId },
        });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'screening_gateway_config', entityId: '1', after: input });
        return updated;
    }
    async listCommercialProviders() {
        const rows = await this.prisma.commercialScreeningProvider.findMany({ orderBy: { providerSlot: 'asc' } });
        return rows.map((p) => this.serializeCommercialProvider(p));
    }
    async proposeCommercialProviderConfig(input, actorUserId) {
        await this.assertCapability(actorUserId, 'SCREENING_GATEWAY_POLICY', 'INITIATE', 'propose a commercial screening provider config change');
        if (input.providerSlot < 1 || input.providerSlot > 3)
            throw new screening_gateway_types_1.ScreeningGatewayError('CommercialScreeningProvider supports at most 3 slots (1-3).');
        let provider = await this.prisma.commercialScreeningProvider.findUnique({ where: { providerSlot: input.providerSlot } });
        if (provider?.configWorkflowInstanceId)
            throw new screening_gateway_types_1.ScreeningGatewayError(`Provider slot ${input.providerSlot} already has a config change pending approval.`);
        if (!provider)
            provider = await this.prisma.commercialScreeningProvider.create({ data: { providerSlot: input.providerSlot, name: input.name, isActive: false, configuredByUserId: actorUserId } });
        const workflowInstance = await this.workflow.initiate({ workflowTypeCode: 'SCREENING_COMMERCIAL_PROVIDER_CONFIG', entityType: 'commercial_screening_provider', entityId: provider.id, initiatedByUserId: actorUserId, scenario: 'STANDARD' });
        const updated = await this.prisma.commercialScreeningProvider.update({
            where: { id: provider.id },
            data: { pendingName: input.name, pendingApiKey: input.apiKey ? (0, gateway_secret_crypto_1.encryptSecret)(input.apiKey) : input.apiKey, pendingIsActive: input.isActive, pendingProposedByUserId: actorUserId, configWorkflowInstanceId: workflowInstance.id },
        });
        return this.serializeCommercialProvider(updated);
    }
    async approveCommercialProviderConfig(workflowInstanceId, approverUserId) {
        const updatedInstance = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        const provider = await this.prisma.commercialScreeningProvider.findFirstOrThrow({ where: { configWorkflowInstanceId: workflowInstanceId } });
        if (updatedInstance.status !== 'APPROVED')
            return this.serializeCommercialProvider(provider);
        const updated = await this.prisma.commercialScreeningProvider.update({
            where: { id: provider.id },
            data: {
                name: provider.pendingName ?? provider.name,
                ...(provider.pendingApiKey ? { apiKey: provider.pendingApiKey } : {}),
                isActive: provider.pendingIsActive ?? provider.isActive,
                configuredByUserId: provider.pendingProposedByUserId ?? provider.configuredByUserId,
                pendingName: null, pendingApiKey: null, pendingIsActive: null, pendingProposedByUserId: null, configWorkflowInstanceId: null,
            },
        });
        await this.audit.record({ actorUserId: approverUserId, action: 'APPROVE', entityType: 'commercial_screening_provider', entityId: updated.id, after: { providerSlot: updated.providerSlot, isActive: updated.isActive } });
        return this.serializeCommercialProvider(updated);
    }
    serializeCommercialProvider(p) {
        const { apiKey, pendingApiKey, ...rest } = p;
        const decryptedApiKey = (0, gateway_secret_crypto_1.decryptSecretNullable)(apiKey);
        return { ...rest, hasApiKey: !!apiKey, apiKeyPreview: decryptedApiKey ? `••••${decryptedApiKey.slice(-4)}` : null, hasPendingApiKeyRotation: !!pendingApiKey };
    }
    async runListDownloadSweep(_scheduledFor) {
        const sources = await this.prisma.screeningListSource.findMany({ where: { isActive: true, isParked: false } });
        const succeeded = [];
        const failed = [];
        for (const source of sources) {
            try {
                const parsed = await this.downloadAndParse(source);
                await this.prisma.$transaction([
                    this.prisma.screeningListEntry.deleteMany({ where: { sourceCode: source.sourceCode } }),
                    this.prisma.screeningListEntry.createMany({
                        data: parsed.entries.map((e) => ({
                            sourceCode: source.sourceCode,
                            sourceRecordId: e.sourceRecordId,
                            primaryName: e.primaryName,
                            aliases: e.aliases,
                            dateOfBirth: e.dateOfBirth,
                            nationality: e.nationality,
                            entityType: e.entityType,
                            programme: e.programme,
                            listVersion: parsed.listVersion,
                            rawDetail: e.rawDetail,
                        })),
                    }),
                    this.prisma.screeningListSource.update({ where: { id: source.id }, data: { lastSuccessfulDownloadAt: new Date(), lastListVersion: parsed.listVersion, lastAttemptAt: new Date(), lastAttemptStatus: 'SUCCEEDED' } }),
                    this.prisma.screeningListDownloadLog.create({ data: { sourceCode: source.sourceCode, status: 'SUCCEEDED', recordCount: parsed.entries.length, listVersion: parsed.listVersion } }),
                ]);
                succeeded.push(source.sourceCode);
            }
            catch (err) {
                const message = err.message;
                failed.push({ sourceCode: source.sourceCode, error: message });
                await this.prisma.screeningListSource.update({ where: { id: source.id }, data: { lastAttemptAt: new Date(), lastAttemptStatus: 'FAILED' } });
                await this.prisma.screeningListDownloadLog.create({ data: { sourceCode: source.sourceCode, status: 'FAILED', errorMessage: message } });
                const recipients = await this.prisma.userRole.findMany({ where: { roleCode: { in: ['COMPLIANCE', 'ICT'] } }, select: { userId: true } });
                for (const r of recipients) {
                    await this.notification.create({ recipientUserId: r.userId, type: 'GENERIC', title: `Sanctions list download failed: ${source.sourceCode}`, body: `The nightly download for ${source.sourceCode} failed: ${message}`, linkPath: '/administration/vendor-gateways?tab=screening' });
                }
            }
        }
        const parked = (await this.prisma.screeningListSource.findMany({ where: { isParked: true }, select: { sourceCode: true } })).map((s) => s.sourceCode);
        if (failed.length > 0) {
            throw new scheduler_types_1.PartialJobFailure(`${failed.length} of ${sources.length} sanctions list source(s) failed to download`, { succeeded, failed, parked });
        }
        return { succeeded, failed: failed.map((f) => f.sourceCode), parked };
    }
    async downloadAndParse(source) {
        let url = source.downloadUrl;
        const extra = (0, gateway_secret_crypto_1.decryptJsonSecret)(source.extraConfig);
        if (extra?.tokenParam && extra?.token) {
            url += (url.includes('?') ? '&' : '?') + `${extra.tokenParam}=${encodeURIComponent(String(extra.token))}`;
        }
        const res = await fetch(url);
        if (!res.ok)
            throw new screening_gateway_types_1.ScreeningGatewayError(`${source.sourceCode} download failed: HTTP ${res.status} ${res.statusText}`);
        const raw = await res.text();
        const listVersion = res.headers.get('last-modified') ?? new Date().toISOString().slice(0, 10);
        switch (source.sourceCode) {
            case 'OFAC': return (0, list_parsers_1.parseOfacSdnCsv)(raw, listVersion);
            case 'UN_SC': return (0, list_parsers_1.parseUnConsolidatedXml)(raw, listVersion);
            case 'UK_SANCTIONS': return (0, list_parsers_1.parseUkSanctionsCsv)(raw, listVersion);
            case 'EU_FSF': return (0, list_parsers_1.parseEuFsfXml)(raw, listVersion);
            default: throw new screening_gateway_types_1.ScreeningGatewayError(`${source.sourceCode} has no parser wired -- either PARKED (see isParked) or a build gap.`);
        }
    }
    async screenSubject(input) {
        const config = await this.getConfig();
        if (config.activeProviderMode === 'MANUAL') {
            throw new screening_gateway_types_1.ScreeningGatewayError('Screening Gateway is in MANUAL mode -- call recordManualAttestation() with the officer\'s search evidence instead of screenSubject().');
        }
        if (config.activeProviderMode === 'COMMERCIAL') {
            return this.runCommercialScreen(input, config);
        }
        const activeSources = await this.prisma.screeningListSource.findMany({ where: { isActive: true, isParked: false } });
        const listVersionsScreened = {};
        for (const s of activeSources)
            listVersionsScreened[s.sourceCode] = s.lastListVersion;
        const entries = input.preloadedEntries ?? await this.prisma.screeningListEntry.findMany({ where: { sourceCode: { in: activeSources.map((s) => s.sourceCode) } } });
        const candidates = entries
            .map((e) => ({ entry: e, score: (0, name_similarity_1.bestMatchScore)(input.subjectNameScreened, e.primaryName, e.aliases ?? [], config.matchThresholdScore) }))
            .filter((c) => c.score >= config.matchThresholdScore)
            .sort((a, b) => b.score - a.score);
        const outcome = candidates.length === 0 ? 'GREEN' : candidates[0].score >= config.redThresholdScore ? 'RED' : 'AMBER';
        const run = await this.prisma.screeningRun.create({
            data: {
                subjectType: input.subjectType,
                subjectId: input.subjectId,
                subjectNameScreened: input.subjectNameScreened,
                providerMode: 'LOCAL_LISTS',
                thresholdUsed: config.matchThresholdScore,
                listVersionsScreened: listVersionsScreened,
                outcome,
                initiatedByUserId: input.initiatedByUserId,
                fingerprint: this.computeFingerprint(input.subjectNameScreened, activeSources, config),
            },
        });
        const hits = [];
        for (const c of candidates) {
            hits.push(await this.prisma.screeningHit.create({
                data: { screeningRunId: run.id, listEntryId: c.entry.id, matchedName: c.entry.primaryName, matchScore: c.score, status: 'OPEN' },
            }));
        }
        await this.audit.record({ actorUserId: input.initiatedByUserId ?? undefined, action: 'CREATE', entityType: 'screening_run', entityId: run.id, after: { subjectType: input.subjectType, subjectId: input.subjectId, outcome, hitCount: hits.length, listVersionsScreened } });
        return { run, hits };
    }
    async runCommercialScreen(input, config) {
        const active = await this.prisma.commercialScreeningProvider.findFirst({ where: { isActive: true, apiKey: { not: null } } });
        if (!active) {
            throw new screening_gateway_types_1.ScreeningGatewayError('[SCREENING GATEWAY: COMMERCIAL mode selected but NO commercial provider slot is both isActive and holds an apiKey — no live vendor call made, no result fabricated. Contract a provider or switch ScreeningGatewayConfig.activeProviderMode back to LOCAL_LISTS/MANUAL.]');
        }
        throw new screening_gateway_types_1.ScreeningGatewayError(`[SCREENING GATEWAY: commercial provider "${active.name}" is configured but the real vendor API integration is not yet implemented — a scoped follow-up once a provider is actually contracted, never invented data in its place.]`);
    }
    async recordManualAttestation(input) {
        await this.assertCapability(input.actorUserId, 'SCREENING_PERFORM', 'INITIATE', 'record a manual sanctions screening attestation');
        if (!input.fileReference?.trim()) {
            throw new screening_gateway_types_1.ScreeningGatewayError('MANUAL screening mode requires an evidence upload (fileReference) before the attestation can be recorded — the gate refuses to pass without it.');
        }
        if (input.sourcesSearched.length === 0) {
            throw new screening_gateway_types_1.ScreeningGatewayError('At least one source must be named as searched for a MANUAL attestation.');
        }
        const run = await this.prisma.screeningRun.create({
            data: {
                subjectType: input.subjectType,
                subjectId: input.subjectId,
                subjectNameScreened: input.subjectNameScreened,
                providerMode: 'MANUAL',
                thresholdUsed: 0,
                listVersionsScreened: { manualSourcesSearched: input.sourcesSearched, searchReference: input.searchReference },
                outcome: input.outcome,
                initiatedByUserId: input.actorUserId,
            },
        });
        if (input.outcome === 'RED') {
            await this.prisma.screeningHit.create({
                data: { screeningRunId: run.id, listEntryId: null, matchedName: input.subjectNameScreened, matchScore: 100, status: 'OPEN' },
            });
        }
        await this.document.attach({ entityType: 'screening_run', entityId: run.id, documentType: 'MANUAL_SCREENING_EVIDENCE', fileReference: input.fileReference }, input.actorUserId);
        await this.audit.record({ actorUserId: input.actorUserId, action: 'CREATE', entityType: 'screening_run', entityId: run.id, after: { providerMode: 'MANUAL', outcome: input.outcome, searchReference: input.searchReference } });
        return this.prisma.screeningRun.findUniqueOrThrow({ where: { id: run.id }, include: { hits: true } });
    }
    async proposeHitAdjudication(input) {
        await this.assertCapability(input.actorUserId, 'SCREENING_PERFORM', 'INITIATE', 'propose a screening hit adjudication');
        if (!input.rationale?.trim()) {
            throw new screening_gateway_types_1.ScreeningGatewayError('A written rationale is required for every hit adjudication (invariant 72(e)) -- mandatory for FALSE_POSITIVE outcomes, and recorded for TRUE_MATCH too so the decision trail is complete either way.');
        }
        const hit = await this.prisma.screeningHit.findUniqueOrThrow({ where: { id: input.hitId } });
        if (hit.status !== 'OPEN')
            throw new screening_gateway_types_1.ScreeningGatewayError(`Hit ${input.hitId} is already ${hit.status} -- cannot re-adjudicate.`);
        if (hit.decisionWorkflowInstanceId)
            throw new screening_gateway_types_1.ScreeningGatewayError(`Hit ${input.hitId} already has an adjudication pending approval.`);
        const workflowInstance = await this.workflow.initiate({ workflowTypeCode: 'SCREENING_HIT_ADJUDICATION', entityType: 'screening_hit', entityId: hit.id, initiatedByUserId: input.actorUserId, scenario: 'STANDARD' });
        const updated = await this.prisma.screeningHit.update({
            where: { id: hit.id },
            data: { pendingOutcome: input.outcome, pendingRationale: input.rationale, decisionProposedByUserId: input.actorUserId, decisionWorkflowInstanceId: workflowInstance.id },
        });
        return { hit: updated, workflowInstance };
    }
    async approveHitAdjudication(workflowInstanceId, approverUserId) {
        const updatedInstance = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        const hit = await this.prisma.screeningHit.findFirstOrThrow({ where: { decisionWorkflowInstanceId: workflowInstanceId } });
        if (updatedInstance.status !== 'APPROVED')
            return hit;
        const updated = await this.prisma.screeningHit.update({
            where: { id: hit.id },
            data: {
                status: 'ADJUDICATED',
                adjudicatedOutcome: hit.pendingOutcome,
                adjudicatedRationale: hit.pendingRationale,
                adjudicatedByUserId: approverUserId,
                adjudicatedAt: new Date(),
                pendingOutcome: null, pendingRationale: null, decisionProposedByUserId: null, decisionWorkflowInstanceId: null,
            },
        });
        await this.audit.record({ actorUserId: approverUserId, action: 'APPROVE', entityType: 'screening_hit', entityId: updated.id, after: { adjudicatedOutcome: updated.adjudicatedOutcome } });
        const run = await this.prisma.screeningRun.findUniqueOrThrow({ where: { id: hit.screeningRunId }, include: { hits: true } });
        if (run.subjectType === 'COUNTERPARTY' && run.hits.every((h) => h.status === 'ADJUDICATED')) {
            const anyTrueMatch = run.hits.some((h) => h.adjudicatedOutcome === 'TRUE_MATCH');
            const onboardingCase = await this.prisma.counterpartyOnboardingCase.findFirst({ where: { counterpartyId: run.subjectId }, orderBy: { createdAt: 'desc' } });
            if (onboardingCase) {
                const grid = Array.isArray(onboardingCase.pepSanctionsGrid) ? onboardingCase.pepSanctionsGrid : [];
                const withoutInstitutional = grid.filter((g) => g.target !== 'INVESTEE_OR_INSTITUTIONAL_NAME');
                await this.prisma.counterpartyOnboardingCase.update({
                    where: { id: onboardingCase.id },
                    data: { pepSanctionsGrid: [...withoutInstitutional, { target: 'INVESTEE_OR_INSTITUTIONAL_NAME', pepResult: 'CLEAR', sanctionsResult: anyTrueMatch ? 'FLAGGED' : 'CLEAR' }] },
                });
            }
        }
        return updated;
    }
    computeFingerprint(subjectNameScreened, activeSources, config) {
        const normalizedName = subjectNameScreened.trim().toLowerCase().replace(/\s+/g, ' ');
        const sourcesPart = [...activeSources]
            .sort((a, b) => a.sourceCode.localeCompare(b.sourceCode))
            .map((s) => `${s.sourceCode}:${s.lastListVersion ?? 'NEVER'}`)
            .join(',');
        return [normalizedName, sourcesPart, `match:${config.matchThresholdScore}`, `red:${config.redThresholdScore}`].join('|');
    }
    async ensureScreened(subjectType, subjectId, subjectNameScreened, actorUserId) {
        const config = await this.getConfig();
        if (config.activeProviderMode !== 'LOCAL_LISTS')
            return;
        const activeSources = await this.prisma.screeningListSource.findMany({ where: { isActive: true, isParked: false } });
        const currentFingerprint = this.computeFingerprint(subjectNameScreened, activeSources, config);
        const mostRecentRun = await this.prisma.screeningRun.findFirst({ where: { subjectType, subjectId }, orderBy: { screenedAt: 'desc' } });
        if (mostRecentRun) {
            const ageDays = (Date.now() - mostRecentRun.screenedAt.getTime()) / 86_400_000;
            const isFresh = mostRecentRun.fingerprint === currentFingerprint && ageDays <= config.freshnessMaxAgeDays;
            if (isFresh)
                return;
        }
        await this.screenSubject({ subjectType, subjectId, subjectNameScreened, initiatedByUserId: actorUserId });
    }
    async hasBlockingScreeningResult(subjectType, subjectId) {
        const runs = await this.prisma.screeningRun.findMany({ where: { subjectType, subjectId }, include: { hits: true }, orderBy: { screenedAt: 'desc' } });
        for (const run of runs) {
            const openHits = run.hits.filter((h) => h.status === 'OPEN');
            if (openHits.length > 0) {
                return { blocked: true, reason: `${openHits.length} sanctions screening hit(s) from ${run.screenedAt.toISOString().slice(0, 10)} are still awaiting Compliance/IC adjudication.` };
            }
            const trueMatches = run.hits.filter((h) => h.adjudicatedOutcome === 'TRUE_MATCH');
            if (trueMatches.length > 0) {
                return { blocked: true, reason: `A sanctions screening hit from ${run.screenedAt.toISOString().slice(0, 10)} was adjudicated TRUE_MATCH.` };
            }
        }
        return { blocked: false };
    }
    async runRescreeningSweep(_scheduledFor, systemUserId) {
        const investors = await this.prisma.investor.findMany({ where: { fundStatus: { in: ['ACTIVE', 'MATURED', 'DORMANT'] } }, select: { investorId: true, fullLegalName: true } });
        const counterparties = await this.prisma.counterparty.findMany({ where: { onboardingStatus: 'COMPLETE_APPROVED' }, select: { id: true, legalName: true } });
        const activeSources = await this.prisma.screeningListSource.findMany({ where: { isActive: true, isParked: false } });
        const preloadedEntries = await this.prisma.screeningListEntry.findMany({ where: { sourceCode: { in: activeSources.map((s) => s.sourceCode) } } });
        let newMatchAlerts = 0;
        for (const inv of investors) {
            const priorTrueMatchCount = await this.prisma.screeningHit.count({ where: { adjudicatedOutcome: 'TRUE_MATCH', run: { subjectType: 'INVESTOR', subjectId: inv.investorId } } });
            const { hits } = await this.screenSubject({ subjectType: 'INVESTOR', subjectId: inv.investorId, subjectNameScreened: inv.fullLegalName, initiatedByUserId: systemUserId, preloadedEntries });
            if (hits.length > 0 && priorTrueMatchCount === 0) {
                newMatchAlerts += await this.raiseRescreeningAlert('INVESTOR', inv.investorId, inv.fullLegalName, hits.length);
            }
        }
        for (const cp of counterparties) {
            const priorTrueMatchCount = await this.prisma.screeningHit.count({ where: { adjudicatedOutcome: 'TRUE_MATCH', run: { subjectType: 'COUNTERPARTY', subjectId: cp.id } } });
            const { hits } = await this.screenSubject({ subjectType: 'COUNTERPARTY', subjectId: cp.id, subjectNameScreened: cp.legalName, initiatedByUserId: systemUserId, preloadedEntries });
            if (hits.length > 0 && priorTrueMatchCount === 0) {
                newMatchAlerts += await this.raiseRescreeningAlert('COUNTERPARTY', cp.id, cp.legalName, hits.length);
            }
        }
        return { investorsChecked: investors.length, counterpartiesChecked: counterparties.length, newMatchAlerts };
    }
    async raiseRescreeningAlert(subjectType, subjectId, name, hitCount) {
        const recipients = await this.prisma.userRole.findMany({ where: { roleCode: 'COMPLIANCE' }, select: { userId: true } });
        for (const r of recipients) {
            await this.notification.create({
                recipientUserId: r.userId,
                type: 'GENERIC',
                title: `New sanctions list match: ${name}`,
                body: `Invariant 72(d) re-screening batch found ${hitCount} new candidate match(es) for ${subjectType.toLowerCase()} ${name} against updated sanctions lists — adjudication required.`,
                linkPath: '/compliance/queue',
            });
        }
        return 1;
    }
    async listFreshnessDaysSinceDownload() {
        const sources = await this.prisma.screeningListSource.findMany();
        const now = Date.now();
        return sources.map((s) => ({
            sourceCode: s.sourceCode,
            daysSince: s.lastSuccessfulDownloadAt ? Math.floor((now - s.lastSuccessfulDownloadAt.getTime()) / 86_400_000) : null,
            isParked: s.isParked,
        }));
    }
    async listOpenHits() {
        return this.prisma.screeningHit.findMany({
            where: { status: 'OPEN' },
            include: { run: true, listEntry: true },
            orderBy: { matchScore: 'desc' },
        });
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'screening_gateway_activity', entityId: activity, after: { functionCode, level } });
            throw new screening_gateway_types_1.ScreeningGatewayError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.ScreeningGatewayService = ScreeningGatewayService;
exports.ScreeningGatewayService = ScreeningGatewayService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService,
        notification_service_1.NotificationService,
        document_service_1.DocumentService])
], ScreeningGatewayService);
//# sourceMappingURL=screening-gateway.service.js.map