import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { NotificationService } from '../notification/notification.service';
import { DocumentService } from '../document/document.service';
import { PartialJobFailure } from '../scheduler/scheduler.types';
import {
  ScreeningGatewayError,
  ScreeningSourceCode,
  ConfigureScreeningListSourceInput,
  RunScreeningInput,
  ProposeHitAdjudicationInput,
  ManualScreeningAttestationInput,
} from './screening-gateway.types';
import { parseOfacSdnCsv, parseUnConsolidatedXml, parseUkSanctionsCsv, parseEuFsfXml } from './list-parsers';
import { bestMatchScore } from './name-similarity';
import { decryptJsonSecret, decryptSecretNullable, encryptJsonSecret, encryptSecret } from '../common/gateway-secret-crypto';

// Invariant 72: SCREENING GATEWAY, the 6th gateway on this codebase's
// standing adapter pattern (Bureau/Payment/Attendance precede it). See
// prisma/schema.prisma's own header comment above ScreeningListSource for
// the live-verified access-model research behind each source, and
// list-parsers.ts for per-source parser confidence notes.
@Injectable()
export class ScreeningGatewayService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
    private readonly notification: NotificationService,
    private readonly document: DocumentService,
  ) {}

  // ==========================================================================
  // List source config -- staged pending*/configWorkflowInstanceId, MD-
  // approved, same shape as AttendanceProvider (invariant 63b) since which
  // list source feeds a sanctions stage-gate is at least as consequential
  // as an attendance adapter choice.
  // ==========================================================================
  async listSources() {
    const rows = await this.prisma.screeningListSource.findMany({ orderBy: { sourceCode: 'asc' } });
    return rows.map((r) => this.serializeSource(r));
  }

  async proposeSourceConfig(input: ConfigureScreeningListSourceInput, actorUserId: string) {
    await this.assertCapability(actorUserId, 'SCREENING_GATEWAY_POLICY', 'INITIATE', 'propose a screening list source config change');
    const source = await this.prisma.screeningListSource.findUnique({ where: { sourceCode: input.sourceCode } });
    if (!source) throw new ScreeningGatewayError(`No ScreeningListSource seeded for ${input.sourceCode} -- the five sources are seeded at build time, never created ad hoc.`);
    if (source.isParked && input.isActive) {
      throw new ScreeningGatewayError(`${input.sourceCode} is PARKED (${source.parkedReason ?? 'no consolidated machine-readable file exists'}) -- it cannot be activated. Un-parking requires a schema/code change once a real machine-readable feed exists, not a config toggle.`);
    }
    if (source.configWorkflowInstanceId) {
      throw new ScreeningGatewayError(`${input.sourceCode} already has a config change pending approval.`);
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
        // Invariant 75(a) (CHECK28): extraConfig may carry a real download
        // token (EU FSF) -- encrypted at rest the same way every other
        // gateway's config JSON is, staged pending the moment it's proposed.
        pendingExtraConfig: input.extraConfig ? (encryptJsonSecret(input.extraConfig as Record<string, unknown>) as any) : undefined,
        pendingIsActive: input.isActive ?? undefined,
        pendingProposedByUserId: actorUserId,
        configWorkflowInstanceId: workflowInstance.id,
      },
    });
    return this.serializeSource(updated);
  }

  async approveSourceConfig(workflowInstanceId: string, approverUserId: string) {
    const updatedInstance = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
    const source = await this.prisma.screeningListSource.findFirstOrThrow({ where: { configWorkflowInstanceId: workflowInstanceId } });
    if (updatedInstance.status !== 'APPROVED') return this.serializeSource(source);
    const updated = await this.prisma.screeningListSource.update({
      where: { id: source.id },
      data: {
        downloadUrl: source.pendingDownloadUrl ?? source.downloadUrl,
        extraConfig: (source.pendingExtraConfig ?? source.extraConfig) as any,
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

  private serializeSource<T extends { extraConfig: unknown; pendingExtraConfig: unknown }>(s: T) {
    // extraConfig may carry a registered download token (EU FSF) -- never
    // exposed raw in an API response, same masking doctrine as
    // AttendanceProvider.clientSecret / PaymentGatewayProvider.webhookSecret.
    const { extraConfig, pendingExtraConfig, ...rest } = s;
    return { ...rest, hasExtraConfig: !!extraConfig, hasPendingExtraConfig: !!pendingExtraConfig };
  }

  // ==========================================================================
  // Gateway dial (invariant 72(c)): active provider mode + thresholds.
  // Single Risk/Compliance-owned governed singleton -- MD-approved via the
  // same SCREENING_GATEWAY_POLICY capability as list-source config,
  // single-actor upsert (mirrors BureauProvider's own simpler shape --
  // there is nothing to stage/propose here beyond "which mode is active",
  // no secret, no per-vendor credential).
  // ==========================================================================
  async getConfig() {
    return this.prisma.screeningGatewayConfig.upsert({ where: { id: 1 }, create: { id: 1 }, update: {} });
  }

  async updateConfig(input: { activeProviderMode?: 'LOCAL_LISTS' | 'COMMERCIAL' | 'MANUAL'; matchThresholdScore?: number; redThresholdScore?: number; freshnessMaxAgeDays?: number }, actorUserId: string) {
    await this.assertCapability(actorUserId, 'SCREENING_GATEWAY_POLICY', 'APPROVE', 'change the active screening provider mode or thresholds');
    if (input.freshnessMaxAgeDays !== undefined && input.freshnessMaxAgeDays < 1) {
      throw new ScreeningGatewayError('freshnessMaxAgeDays must be at least 1 -- invariant 75(b) (CHECK28): the freshness ceiling ensureScreened compares stale runs against.');
    }
    const updated = await this.prisma.screeningGatewayConfig.upsert({
      where: { id: 1 },
      create: { id: 1, ...input, updatedByUserId: actorUserId },
      update: { ...input, updatedByUserId: actorUserId },
    });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'screening_gateway_config', entityId: '1', after: input });
    return updated;
  }

  // ==========================================================================
  // Commercial provider slots -- built but unwired (invariant 72(c)).
  // Same staged shape as AttendanceProvider; runCommercialScreen below is
  // the honest-placeholder posture every other unwired gateway slot in
  // this codebase uses.
  // ==========================================================================
  async listCommercialProviders() {
    const rows = await this.prisma.commercialScreeningProvider.findMany({ orderBy: { providerSlot: 'asc' } });
    return rows.map((p) => this.serializeCommercialProvider(p));
  }

  async proposeCommercialProviderConfig(input: { providerSlot: number; name: string; apiKey?: string; isActive?: boolean }, actorUserId: string) {
    await this.assertCapability(actorUserId, 'SCREENING_GATEWAY_POLICY', 'INITIATE', 'propose a commercial screening provider config change');
    if (input.providerSlot < 1 || input.providerSlot > 3) throw new ScreeningGatewayError('CommercialScreeningProvider supports at most 3 slots (1-3).');
    let provider = await this.prisma.commercialScreeningProvider.findUnique({ where: { providerSlot: input.providerSlot } });
    if (provider?.configWorkflowInstanceId) throw new ScreeningGatewayError(`Provider slot ${input.providerSlot} already has a config change pending approval.`);
    if (!provider) provider = await this.prisma.commercialScreeningProvider.create({ data: { providerSlot: input.providerSlot, name: input.name, isActive: false, configuredByUserId: actorUserId } });
    const workflowInstance = await this.workflow.initiate({ workflowTypeCode: 'SCREENING_COMMERCIAL_PROVIDER_CONFIG', entityType: 'commercial_screening_provider', entityId: provider.id, initiatedByUserId: actorUserId, scenario: 'STANDARD' });
    const updated = await this.prisma.commercialScreeningProvider.update({
      where: { id: provider.id },
      // Invariant 75(a) (CHECK28): encrypted at rest the moment it's staged pending.
      data: { pendingName: input.name, pendingApiKey: input.apiKey ? encryptSecret(input.apiKey) : input.apiKey, pendingIsActive: input.isActive, pendingProposedByUserId: actorUserId, configWorkflowInstanceId: workflowInstance.id },
    });
    return this.serializeCommercialProvider(updated);
  }

  async approveCommercialProviderConfig(workflowInstanceId: string, approverUserId: string) {
    const updatedInstance = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
    const provider = await this.prisma.commercialScreeningProvider.findFirstOrThrow({ where: { configWorkflowInstanceId: workflowInstanceId } });
    if (updatedInstance.status !== 'APPROVED') return this.serializeCommercialProvider(provider);
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

  private serializeCommercialProvider<T extends { apiKey: string | null; pendingApiKey: string | null }>(p: T) {
    const { apiKey, pendingApiKey, ...rest } = p;
    // Invariant 75(a) (CHECK28): decrypt JUST for this in-memory preview
    // computation (never returned raw).
    const decryptedApiKey = decryptSecretNullable(apiKey);
    return { ...rest, hasApiKey: !!apiKey, apiKeyPreview: decryptedApiKey ? `••••${decryptedApiKey.slice(-4)}` : null, hasPendingApiKeyRotation: !!pendingApiKey };
  }

  // ==========================================================================
  // The nightly download sweep (invariant 72(a)) -- one attempt per
  // ACTIVE, non-parked source; failures alert but never abort the whole
  // sweep (PartialJobFailure summarizes at the end, matching every other
  // multi-source scheduled job in this codebase, e.g. bureau/payment
  // reconciliation sweeps).
  // ==========================================================================
  async runListDownloadSweep(_scheduledFor: Date): Promise<{ succeeded: string[]; failed: string[]; parked: string[] }> {
    const sources = await this.prisma.screeningListSource.findMany({ where: { isActive: true, isParked: false } });
    const succeeded: string[] = [];
    const failed: { sourceCode: string; error: string }[] = [];
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
              aliases: e.aliases as any,
              dateOfBirth: e.dateOfBirth,
              nationality: e.nationality,
              entityType: e.entityType,
              programme: e.programme,
              listVersion: parsed.listVersion,
              rawDetail: e.rawDetail as any,
            })),
          }),
          this.prisma.screeningListSource.update({ where: { id: source.id }, data: { lastSuccessfulDownloadAt: new Date(), lastListVersion: parsed.listVersion, lastAttemptAt: new Date(), lastAttemptStatus: 'SUCCEEDED' } }),
          this.prisma.screeningListDownloadLog.create({ data: { sourceCode: source.sourceCode, status: 'SUCCEEDED', recordCount: parsed.entries.length, listVersion: parsed.listVersion } }),
        ]);
        succeeded.push(source.sourceCode);
      } catch (err) {
        const message = (err as Error).message;
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
      throw new PartialJobFailure(`${failed.length} of ${sources.length} sanctions list source(s) failed to download`, { succeeded, failed, parked });
    }
    return { succeeded, failed: failed.map((f) => f.sourceCode), parked };
  }

  private async downloadAndParse(source: { sourceCode: ScreeningSourceCode; downloadUrl: string; fileFormat: string; extraConfig: unknown }) {
    let url = source.downloadUrl;
    const extra = decryptJsonSecret(source.extraConfig);
    if (extra?.tokenParam && extra?.token) {
      url += (url.includes('?') ? '&' : '?') + `${extra.tokenParam}=${encodeURIComponent(String(extra.token))}`;
    }
    const res = await fetch(url);
    if (!res.ok) throw new ScreeningGatewayError(`${source.sourceCode} download failed: HTTP ${res.status} ${res.statusText}`);
    const raw = await res.text();
    const listVersion = res.headers.get('last-modified') ?? new Date().toISOString().slice(0, 10);
    switch (source.sourceCode) {
      case 'OFAC': return parseOfacSdnCsv(raw, listVersion);
      case 'UN_SC': return parseUnConsolidatedXml(raw, listVersion);
      case 'UK_SANCTIONS': return parseUkSanctionsCsv(raw, listVersion);
      case 'EU_FSF': return parseEuFsfXml(raw, listVersion);
      default: throw new ScreeningGatewayError(`${source.sourceCode} has no parser wired -- either PARKED (see isParked) or a build gap.`);
    }
  }

  // ==========================================================================
  // Screening at the stage gate (invariant 72(b)). LOCAL_LISTS mode: fuzzy-
  // matches the subject's name against every ScreeningListEntry across
  // every non-parked source, records the list version screened FROM EACH
  // ACTIVE source (even a zero-hit source's version is audit evidence),
  // and NEVER decides GREEN/RED beyond raising OPEN hits for adjudication
  // -- see hasBlockingScreeningResult for what actually gates onboarding.
  // ==========================================================================
  async screenSubject(input: RunScreeningInput) {
    const config = await this.getConfig();
    if (config.activeProviderMode === 'MANUAL') {
      throw new ScreeningGatewayError('Screening Gateway is in MANUAL mode -- call recordManualAttestation() with the officer\'s search evidence instead of screenSubject().');
    }
    if (config.activeProviderMode === 'COMMERCIAL') {
      return this.runCommercialScreen(input, config);
    }

    const activeSources = await this.prisma.screeningListSource.findMany({ where: { isActive: true, isParked: false } });
    const listVersionsScreened: Record<string, string | null> = {};
    for (const s of activeSources) listVersionsScreened[s.sourceCode] = s.lastListVersion;

    const entries = input.preloadedEntries ?? await this.prisma.screeningListEntry.findMany({ where: { sourceCode: { in: activeSources.map((s) => s.sourceCode) } } });
    const candidates = entries
      .map((e) => ({ entry: e, score: bestMatchScore(input.subjectNameScreened, e.primaryName, (e.aliases as string[]) ?? [], config.matchThresholdScore) }))
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
        listVersionsScreened: listVersionsScreened as any,
        outcome,
        initiatedByUserId: input.initiatedByUserId,
        // Invariant 75(b) (CHECK28, CF-02 remediation): stamp the exact
        // fingerprint this run was produced against -- see
        // computeFingerprint's own header comment.
        fingerprint: this.computeFingerprint(input.subjectNameScreened, activeSources, config),
      },
    });
    const hits: Awaited<ReturnType<typeof this.prisma.screeningHit.create>>[] = [];
    for (const c of candidates) {
      hits.push(await this.prisma.screeningHit.create({
        data: { screeningRunId: run.id, listEntryId: c.entry.id, matchedName: c.entry.primaryName, matchScore: c.score, status: 'OPEN' },
      }));
    }
    await this.audit.record({ actorUserId: input.initiatedByUserId ?? undefined, action: 'CREATE', entityType: 'screening_run', entityId: run.id, after: { subjectType: input.subjectType, subjectId: input.subjectId, outcome, hitCount: hits.length, listVersionsScreened } });
    return { run, hits };
  }

  // Honest-placeholder posture (same doctrine as BureauGatewayService.
  // triggerPull / AttendanceService.runTTLockSync for an unconfigured
  // slot) -- never fabricates a screening result for a vendor that isn't
  // actually contracted.
  private async runCommercialScreen(input: RunScreeningInput, config: { matchThresholdScore: number }): Promise<never> {
    const active = await this.prisma.commercialScreeningProvider.findFirst({ where: { isActive: true, apiKey: { not: null } } });
    if (!active) {
      throw new ScreeningGatewayError('[SCREENING GATEWAY: COMMERCIAL mode selected but NO commercial provider slot is both isActive and holds an apiKey — no live vendor call made, no result fabricated. Contract a provider or switch ScreeningGatewayConfig.activeProviderMode back to LOCAL_LISTS/MANUAL.]');
    }
    throw new ScreeningGatewayError(`[SCREENING GATEWAY: commercial provider "${active.name}" is configured but the real vendor API integration is not yet implemented — a scoped follow-up once a provider is actually contracted, never invented data in its place.]`);
  }

  // ==========================================================================
  // MANUAL mode (invariant 72(c)): the officer performs the search
  // personally against the portal links, then attests + uploads evidence.
  // Refuses without evidence -- "MANUAL mode refuses gate passage without
  // evidence upload" (invariant 72(e)).
  // ==========================================================================
  async recordManualAttestation(input: ManualScreeningAttestationInput) {
    await this.assertCapability(input.actorUserId, 'SCREENING_PERFORM', 'INITIATE', 'record a manual sanctions screening attestation');
    if (!input.fileReference?.trim()) {
      throw new ScreeningGatewayError('MANUAL screening mode requires an evidence upload (fileReference) before the attestation can be recorded — the gate refuses to pass without it.');
    }
    if (input.sourcesSearched.length === 0) {
      throw new ScreeningGatewayError('At least one source must be named as searched for a MANUAL attestation.');
    }
    const run = await this.prisma.screeningRun.create({
      data: {
        subjectType: input.subjectType,
        subjectId: input.subjectId,
        subjectNameScreened: input.subjectNameScreened,
        providerMode: 'MANUAL',
        thresholdUsed: 0,
        listVersionsScreened: { manualSourcesSearched: input.sourcesSearched, searchReference: input.searchReference } as any,
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

  // ==========================================================================
  // Hit adjudication (invariant 72(b)/(e)): never auto-block, never auto-
  // clear. TRUE_MATCH -> the subject's onboarding gate stays blocked
  // (hasBlockingScreeningResult below). FALSE_POSITIVE -> a mandatory
  // written rationale is REQUIRED (non-empty string, enforced here, not
  // just at the DTO layer) before the hit is even proposed for closure.
  // Adjudicator != initiator is enforced by WorkflowEngineService.
  // approveNextStep itself, for free -- the initiator here is the
  // adjudication PROPOSER, not the original screening run's initiator
  // (deliberately: the same officer who ran the screen may propose an
  // outcome, but a DIFFERENT officer must approve it).
  // ==========================================================================
  async proposeHitAdjudication(input: ProposeHitAdjudicationInput) {
    await this.assertCapability(input.actorUserId, 'SCREENING_PERFORM', 'INITIATE', 'propose a screening hit adjudication');
    if (!input.rationale?.trim()) {
      throw new ScreeningGatewayError('A written rationale is required for every hit adjudication (invariant 72(e)) -- mandatory for FALSE_POSITIVE outcomes, and recorded for TRUE_MATCH too so the decision trail is complete either way.');
    }
    const hit = await this.prisma.screeningHit.findUniqueOrThrow({ where: { id: input.hitId } });
    if (hit.status !== 'OPEN') throw new ScreeningGatewayError(`Hit ${input.hitId} is already ${hit.status} -- cannot re-adjudicate.`);
    if (hit.decisionWorkflowInstanceId) throw new ScreeningGatewayError(`Hit ${input.hitId} already has an adjudication pending approval.`);
    const workflowInstance = await this.workflow.initiate({ workflowTypeCode: 'SCREENING_HIT_ADJUDICATION', entityType: 'screening_hit', entityId: hit.id, initiatedByUserId: input.actorUserId, scenario: 'STANDARD' });
    const updated = await this.prisma.screeningHit.update({
      where: { id: hit.id },
      data: { pendingOutcome: input.outcome, pendingRationale: input.rationale, decisionProposedByUserId: input.actorUserId, decisionWorkflowInstanceId: workflowInstance.id },
    });
    return { hit: updated, workflowInstance };
  }

  async approveHitAdjudication(workflowInstanceId: string, approverUserId: string) {
    const updatedInstance = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
    const hit = await this.prisma.screeningHit.findFirstOrThrow({ where: { decisionWorkflowInstanceId: workflowInstanceId } });
    if (updatedInstance.status !== 'APPROVED') return hit;
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

    // Once every hit on a run is final, keep the counterparty PEP/sanctions
    // grid truthful (invariant 72(b): investors AND counterparties) -- best-
    // effort sync, not the gate itself (see hasBlockingScreeningResult).
    const run = await this.prisma.screeningRun.findUniqueOrThrow({ where: { id: hit.screeningRunId }, include: { hits: true } });
    if (run.subjectType === 'COUNTERPARTY' && run.hits.every((h) => h.status === 'ADJUDICATED')) {
      const anyTrueMatch = run.hits.some((h) => h.adjudicatedOutcome === 'TRUE_MATCH');
      const onboardingCase = await this.prisma.counterpartyOnboardingCase.findFirst({ where: { counterpartyId: run.subjectId }, orderBy: { createdAt: 'desc' } });
      if (onboardingCase) {
        const grid = Array.isArray(onboardingCase.pepSanctionsGrid) ? (onboardingCase.pepSanctionsGrid as any[]) : [];
        const withoutInstitutional = grid.filter((g) => g.target !== 'INVESTEE_OR_INSTITUTIONAL_NAME');
        await this.prisma.counterpartyOnboardingCase.update({
          where: { id: onboardingCase.id },
          data: { pepSanctionsGrid: [...withoutInstitutional, { target: 'INVESTEE_OR_INSTITUTIONAL_NAME', pepResult: 'CLEAR', sanctionsResult: anyTrueMatch ? 'FLAGGED' : 'CLEAR' }] as any },
        });
      }
    }
    return updated;
  }

  // Invariant 75(b) (CHECK28, v1.2.1 audit remediation, audit finding
  // CF-02): the SCREENING FINGERPRINT this platform's stale-state-reuse
  // standing check requires -- normalized subject name + every active,
  // non-parked source's own code+list-version + the match/red threshold
  // currently governing outcomes, pipe-joined into one comparable string.
  // ANY of those four inputs drifting (a name correction, a fresh list
  // download, a threshold change, a newly-activated source) produces a
  // DIFFERENT fingerprint -- there is no partial-match/best-effort
  // comparison, deliberately: a prior run's fingerprint either matches
  // the CURRENT inputs exactly or it doesn't reflect them.
  private computeFingerprint(subjectNameScreened: string, activeSources: { sourceCode: string; lastListVersion: string | null }[], config: { matchThresholdScore: number; redThresholdScore: number }): string {
    const normalizedName = subjectNameScreened.trim().toLowerCase().replace(/\s+/g, ' ');
    const sourcesPart = [...activeSources]
      .sort((a, b) => a.sourceCode.localeCompare(b.sourceCode))
      .map((s) => `${s.sourceCode}:${s.lastListVersion ?? 'NEVER'}`)
      .join(',');
    return [normalizedName, sourcesPart, `match:${config.matchThresholdScore}`, `red:${config.redThresholdScore}`].join('|');
  }

  // Invariant 72(b): "fuzzy screening AT the onboarding stage gate" means
  // the screen actually RUNS, not just that a prior result (if any) is
  // checked. Called immediately before hasBlockingScreeningResult so the
  // gate below always has a fresh answer for a subject that has never been
  // screened, instead of silently passing an unscreened subject through.
  // Only auto-triggers in LOCAL_LISTS mode -- COMMERCIAL with no contracted
  // provider would throw (the honest placeholder in runCommercialScreen),
  // and MANUAL mode requires a human officer's search evidence, which this
  // system cannot fabricate; both of those fall back to the pre-existing
  // "no run yet" behavior in hasBlockingScreeningResult below, same as
  // before this method existed.
  //
  // Invariant 75(b) (CHECK28, CF-02 remediation -- the SECOND stale-state-
  // reuse gate defect after CF-01/zakat, per the invariant's own advisor-
  // accountability header, and now a STANDING ADVERSARIAL CHECK applied
  // throughout: "any gate/computation admitting on a prior result must
  // verify that result reflects current inputs or re-derive"). Before this
  // fix, ANY prior run of ANY age against ANY stale name/list/threshold
  // satisfied the gate forever -- a name correction, a list update, a
  // threshold change, or simply time passing could silently leave a
  // subject screened against inputs that no longer exist. Now: the most
  // recent run's own fingerprint is compared against the CURRENT inputs
  // (recomputed fresh, never cached), and its age is compared against the
  // Risk-owned freshness ceiling -- a fingerprint mismatch OR staleness
  // both force a brand-new run rather than reusing the old one.
  async ensureScreened(subjectType: 'INVESTOR' | 'COUNTERPARTY', subjectId: string, subjectNameScreened: string, actorUserId: string): Promise<void> {
    const config = await this.getConfig();
    if (config.activeProviderMode !== 'LOCAL_LISTS') return;
    const activeSources = await this.prisma.screeningListSource.findMany({ where: { isActive: true, isParked: false } });
    const currentFingerprint = this.computeFingerprint(subjectNameScreened, activeSources, config);
    const mostRecentRun = await this.prisma.screeningRun.findFirst({ where: { subjectType, subjectId }, orderBy: { screenedAt: 'desc' } });
    if (mostRecentRun) {
      const ageDays = (Date.now() - mostRecentRun.screenedAt.getTime()) / 86_400_000;
      const isFresh = mostRecentRun.fingerprint === currentFingerprint && ageDays <= config.freshnessMaxAgeDays;
      if (isFresh) return;
    }
    await this.screenSubject({ subjectType, subjectId, subjectNameScreened, initiatedByUserId: actorUserId });
  }

  // ==========================================================================
  // The gate itself (invariant 72(b)): "never auto-block, never auto-
  // clear." Called from InvestorService.submitForKycApproval AND
  // CounterpartyService.recordIc2Review, IN ADDITION to their existing
  // checks -- "upgrades what feeds it, not the gate itself."
  // ==========================================================================
  async hasBlockingScreeningResult(subjectType: 'INVESTOR' | 'COUNTERPARTY', subjectId: string): Promise<{ blocked: boolean; reason?: string }> {
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

  // ==========================================================================
  // Re-screening batch (invariant 72(d)) -- activates the parked 51(b)
  // Tier-2 item: InvestorComplianceSweepService.runSanctionsRescreeningSweep
  // only ever detected WHO was due (staleness-based) and routed a Task for
  // a MANUAL re-screen. This sweep performs the REAL list-based re-match
  // over the entire live book, raising a Compliance alert only on a NEW
  // match a prior screening never surfaced.
  // ==========================================================================
  async runRescreeningSweep(_scheduledFor: Date, systemUserId: string): Promise<{ investorsChecked: number; counterpartiesChecked: number; newMatchAlerts: number }> {
    const investors = await this.prisma.investor.findMany({ where: { fundStatus: { in: ['ACTIVE', 'MATURED', 'DORMANT'] } }, select: { investorId: true, fullLegalName: true } });
    const counterparties = await this.prisma.counterparty.findMany({ where: { onboardingStatus: 'COMPLETE_APPROVED' }, select: { id: true, legalName: true } });

    // Fetched ONCE for the whole sweep, not once per subject -- against a
    // real downloaded list (OFAC's SDN list alone runs into the tens of
    // thousands of entries with aliases), re-querying per subject for a
    // book of hundreds would multiply the same full-table read hundreds of
    // times over for no benefit (screenSubject's own per-call default path
    // still re-queries, correctly, for a single ad hoc screen).
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

  private async raiseRescreeningAlert(subjectType: string, subjectId: string, name: string, hitCount: number): Promise<number> {
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

  // ==========================================================================
  // KRI feed (invariant 72(a)): list-freshness, one reading per source +
  // an aggregate. Called from KriEngineService.computeKri.
  // ==========================================================================
  async listFreshnessDaysSinceDownload(): Promise<{ sourceCode: string; daysSince: number | null; isParked: boolean }[]> {
    const sources = await this.prisma.screeningListSource.findMany();
    const now = Date.now();
    return sources.map((s) => ({
      sourceCode: s.sourceCode,
      daysSince: s.lastSuccessfulDownloadAt ? Math.floor((now - s.lastSuccessfulDownloadAt.getTime()) / 86_400_000) : null,
      isParked: s.isParked,
    }));
  }

  // Compliance Queue-style feed for the ops-ui adjudication screen --
  // every OPEN hit, worst (highest matchScore) first, joined to its parent
  // run so the officer sees subject/list version/outcome context without
  // a second round trip.
  async listOpenHits() {
    return this.prisma.screeningHit.findMany({
      where: { status: 'OPEN' },
      include: { run: true, listEntry: true },
      orderBy: { matchScore: 'desc' },
    });
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'screening_gateway_activity', entityId: activity, after: { functionCode, level } });
      throw new ScreeningGatewayError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}
