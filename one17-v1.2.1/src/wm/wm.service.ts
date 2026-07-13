import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { EventJournalService } from '../event-journal/event-journal.service';
import { ASSET_CLASSES, TIER_BANDS, STRESS_SCENARIOS, DEFAULT_NAIRA_PER_USD, NwcsTier, WmError } from './wm.types';

// CHECK5 item 3 (invariant 23, spec One17_Wealth_Management_Spec_v1.md).
// §1 PRIME BOUNDARY (absolute): nothing in this service ever writes a
// journal_entry_line, chart_of_account row, or ledger_entity reference for
// an external asset — chargeAdvisoryFee() is the ONE method here that talks
// to the ledger at all, and it only ever posts to the ledgerEntityCode the
// caller explicitly supplies (COMPANY), via the standing EventJournalService
// maker-drafts/checker-approves machinery, never directly.
@Injectable()
export class WmService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
    private readonly eventJournal: EventJournalService,
  ) {}

  // ==========================================================================
  // Reference config (asset classes, tier bands, stress scenarios) — rows,
  // never code (invariant 10/16), mirrors StressEngineService.seedScenarios.
  // ==========================================================================
  async seedReferenceData(): Promise<{ assetClasses: number; tierBands: number; scenarios: number }> {
    for (const c of ASSET_CLASSES) {
      await this.prisma.assetClassRegistry.upsert({
        where: { code: c.code },
        create: { code: c.code, label: c.label, custodyDefault: 'EXTERNAL', shariahScreeningRule: c.shariahScreeningRule },
        update: { label: c.label, shariahScreeningRule: c.shariahScreeningRule },
      });
    }
    for (const b of TIER_BANDS) {
      const existing = await this.prisma.wmClientTierConfig.findFirst({ where: { tier: b.tier, isActive: true } });
      if (!existing) {
        await this.prisma.wmClientTierConfig.create({ data: { tier: b.tier, minTotalWealthUsd: b.minTotalWealthUsd, sortOrder: b.sortOrder } });
      }
    }
    await this.prisma.wmFxConfig.upsert({ where: { id: 1 }, create: { id: 1, nairaPerUsd: DEFAULT_NAIRA_PER_USD }, update: {} });
    for (const s of STRESS_SCENARIOS) {
      await this.prisma.wmStressScenarioConfig.upsert({
        where: { scenarioCode_version: { scenarioCode: s.scenarioCode, version: 1 } },
        create: { scenarioCode: s.scenarioCode, label: s.label, shockPctByAssetClass: s.shockPctByAssetClass as any, version: 1, status: 'ACTIVE' },
        update: { label: s.label, shockPctByAssetClass: s.shockPctByAssetClass as any },
      });
    }
    return { assetClasses: ASSET_CLASSES.length, tierBands: TIER_BANDS.length, scenarios: STRESS_SCENARIOS.length };
  }

  // ==========================================================================
  // Read models — the wealth dashboard (§3) and the advisor workspace list.
  // ==========================================================================
  async listClients() {
    return this.prisma.wmClientProfile.findMany({
      include: { investor: { select: { fullLegalName: true, contactEmail: true } } },
      orderBy: { onboardedAt: 'desc' },
    });
  }

  // Single read model reused by BOTH surfaces: the ops advisor workspace
  // (any client, capability-gated) and the portal client dashboard (own
  // record only, ownership-checked by the caller passing their own
  // investorId — see PortalWmController). Nothing here writes anything.
  async getClientDashboard(investorId: string) {
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

  // Invariant 39(d): the portal dashboard's single entry point, now that
  // PortalClientUser (and therefore portal login) is issued to EVERY
  // KYC-complete investor, not just WM admits. Branches on WmClientProfile
  // existence rather than exposing two routes — WM clients get the full
  // getClientDashboard(); everyone else gets a lean One17-holdings summary
  // plus the truncated pre-WM pyramid (invariant 36g), which "unlocks" into
  // the full dashboard automatically the moment Flow-C admits them, with no
  // portal-side code change. `complaints` is embedded for BOTH branches —
  // same read CounterpartyService.getPortalDashboard() already does for its
  // persona, just against investorId instead of counterpartyId.
  async getPortalDashboard(investorId: string) {
    const [profile, complaints] = await Promise.all([
      this.prisma.wmClientProfile.findUnique({ where: { investorId } }),
      this.prisma.complaint.findMany({ where: { investorId }, orderBy: { createdAt: 'desc' } }),
    ]);
    if (profile) {
      return { isWmClient: true as const, ...(await this.getClientDashboard(investorId)), complaints };
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
      isWmClient: false as const,
      investor,
      holdings: {
        // CHECK16 62(b): productAccountId added so the portal can target a
        // SPECIFIC holding for a redemption request -- productCode alone
        // is not a stable target if an investor ever holds two accounts
        // under the same product.
        byProduct: productAccounts.map((a) => ({ productAccountId: a.id, productCode: a.productCode, valueKobo: a.principalOrCommittedKobo.toString() })),
        totalKobo: totalKobo.toString(),
      },
      pyramid,
      complaints,
    };
  }

  // ==========================================================================
  // Flow C onboarding — "existing client upgrades to WM, or WM-first client".
  // ==========================================================================
  async onboardWmClient(input: { investorId: string; advisorUserId?: string; onboardedByUserId: string }) {
    await this.assertCapability(input.onboardedByUserId, 'WM_ADVISORY', 'INITIATE', 'onboard a WM client');
    const investor = await this.prisma.investor.findUniqueOrThrow({ where: { investorId: input.investorId } });
    if (investor.kycStatus !== 'KYC_COMPLETE') {
      throw new WmError(`Flow C requires the same KYC gate as Flow A: investor ${input.investorId} kycStatus is ${investor.kycStatus}, not KYC_COMPLETE.`);
    }
    const existing = await this.prisma.wmClientProfile.findUnique({ where: { investorId: input.investorId } });
    if (existing) return existing;

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

  // ==========================================================================
  // Combined book + tier (v1.1 refinement #2). Total wealth per spec §7.2 =
  // One17-custodied + declared external — VERIFICATION status does not gate
  // inclusion (a DECLARED-but-unverified holding is still part of the
  // client's declared wealth), only the dashboard TAG communicates trust.
  // ==========================================================================
  async computeTotalWealthKobo(investorId: string): Promise<bigint> {
    const [oneSeventeen, external] = await Promise.all([
      this.prisma.productAccount.aggregate({ where: { investorId }, _sum: { principalOrCommittedKobo: true } }),
      this.prisma.wmClientAsset.aggregate({ where: { wmClientProfileId: investorId, custodyFlag: 'EXTERNAL' }, _sum: { declaredValueKobo: true } }),
    ]);
    return (oneSeventeen._sum.principalOrCommittedKobo ?? 0n) + (external._sum.declaredValueKobo ?? 0n);
  }

  async combinedBookSnapshot(investorId: string) {
    const [productAccounts, externalAssets] = await Promise.all([
      this.prisma.productAccount.findMany({ where: { investorId }, select: { id: true, productCode: true, principalOrCommittedKobo: true } }),
      this.prisma.wmClientAsset.findMany({ where: { wmClientProfileId: investorId, custodyFlag: 'EXTERNAL' } }),
    ]);
    const oneSeventeenKobo = productAccounts.reduce((s, a) => s + a.principalOrCommittedKobo, 0n);
    const byAssetClass: Record<string, bigint> = { ONE17_CUSTODY: oneSeventeenKobo };
    for (const a of externalAssets) {
      byAssetClass[a.assetClassCode] = (byAssetClass[a.assetClassCode] ?? 0n) + a.declaredValueKobo;
    }
    const totalKobo = Object.values(byAssetClass).reduce((s, v) => s + v, 0n);
    return {
      // CHECK16 62(b): productAccountId added — same reasoning as
      // getPortalDashboard's non-WM branch above.
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

  // CHECK16 62(b): principal-vs-profit split for the portal's own pie
  // chart — UNIT_NAV computes current value from the latest LOCKED
  // NavRecord (StatementService's own "Estimated holding value" formula,
  // reused rather than re-derived) and profitKobo is null, not zero, when
  // no NAV has been published for this entity yet ("detection, not
  // determination" — never invents a value). PSR_WATERFALL/MANDATE sum
  // realized DistributionLineItem.totalPayoutKobo, the same "profit"
  // concept the statement PDF already uses. Both are the investor's OWN
  // realized/mark-to-market gain, never a projection.
  async getPrincipalProfitBreakdown(investorId: string) {
    const accounts = await this.prisma.productAccount.findMany({
      where: { investorId, status: 'ACTIVE' },
      include: { product: true },
    });
    const breakdown = await Promise.all(
      accounts.map(async (account) => {
        let profitKobo: bigint | null = null;
        if (account.product.engineType === 'UNIT_NAV') {
          const entity = await this.prisma.ledgerEntity.findFirst({ where: { productCode: account.productCode } });
          const latestNav = entity
            ? await this.prisma.navRecord.findFirst({ where: { ledgerEntityCode: entity.code, isLocked: true }, orderBy: { valuationDate: 'desc' } })
            : null;
          if (latestNav && account.unitsHeld != null) {
            const currentValueKobo = BigInt(Math.round(Number(account.unitsHeld) * Number(latestNav.navPerUnit) * 100));
            profitKobo = currentValueKobo - account.principalOrCommittedKobo;
          }
        } else {
          const agg = await this.prisma.distributionLineItem.aggregate({ where: { productAccountId: account.id }, _sum: { totalPayoutKobo: true } });
          profitKobo = agg._sum.totalPayoutKobo ?? 0n;
        }
        return {
          productAccountId: account.id,
          productCode: account.productCode,
          principalKobo: account.principalOrCommittedKobo.toString(),
          profitKobo: profitKobo === null ? null : profitKobo.toString(),
        };
      }),
    );
    const totalPrincipalKobo = accounts.reduce((s, a) => s + a.principalOrCommittedKobo, 0n);
    const totalProfitKobo = breakdown.reduce((s, r) => s + (r.profitKobo ? BigInt(r.profitKobo) : 0n), 0n);
    return { accounts: breakdown, totalPrincipalKobo: totalPrincipalKobo.toString(), totalProfitKobo: totalProfitKobo.toString() };
  }

  // Invariant 26(b): naira cutoffs are DERIVED from the governed FX rate at
  // read time — never stored — so a rate change alone re-tiers every client
  // the next time recomputeTier() runs, with no wm_client_tier_config edit.
  private async activeTierBands(): Promise<{ tier: string; minTotalWealthKobo: bigint }[]> {
    const [bands, fx] = await Promise.all([
      this.prisma.wmClientTierConfig.findMany({ where: { isActive: true }, orderBy: { sortOrder: 'desc' } }),
      this.getFxConfig(),
    ]);
    return bands.map((b) => ({ tier: b.tier, minTotalWealthKobo: BigInt(Math.round(Number(b.minTotalWealthUsd) * Number(fx.nairaPerUsd) * 100)) }));
  }

  async getFxConfig() {
    return this.prisma.wmFxConfig.upsert({ where: { id: 1 }, create: { id: 1, nairaPerUsd: DEFAULT_NAIRA_PER_USD }, update: {} });
  }

  // Invariant 26(b): "rate change = approval workflow, re-tiering
  // audit-logged." A single-authority governed update (WM_ADVISORY
  // APPROVE — reusing the existing capability rather than inventing a new
  // one for a single config field) with a full audit row; re-tiering
  // itself happens the next time recomputeTier() runs per client (already
  // callable any time per its own doc comment).
  async updateFxRate(nairaPerUsd: number, actorUserId: string) {
    await this.assertCapability(actorUserId, 'WM_ADVISORY', 'APPROVE', 'update the governed WM FX rate');
    const updated = await this.prisma.wmFxConfig.update({ where: { id: 1 }, data: { nairaPerUsd, updatedByUserId: actorUserId } });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'wm_fx_config', entityId: '1', after: { nairaPerUsd } });
    return updated;
  }

  private resolveTier(totalWealthKobo: bigint, bands: { tier: string; minTotalWealthKobo: bigint }[]): NwcsTier {
    const band = bands.find((b) => totalWealthKobo >= b.minTotalWealthKobo);
    return (band?.tier as NwcsTier) ?? 'BASE_MASS';
  }

  // Config-driven re-tiering (v1.1 refinement #2 adversarial: "tier band
  // change via config re-tiers clients with audit rows, no code change") —
  // callable any time (advisor action, or a scheduled job elsewhere); always
  // audit-logs the migration even when the tier does not change (idempotent
  // no-op is fine, but the log row only gets written on an actual change).
  async recomputeTier(investorId: string): Promise<{ tier: string; changed: boolean }> {
    const profile = await this.prisma.wmClientProfile.findUniqueOrThrow({ where: { investorId } });
    const totalWealthKobo = await this.computeTotalWealthKobo(investorId);
    const tier = this.resolveTier(totalWealthKobo, await this.activeTierBands());
    if (tier === profile.currentTier) return { tier, changed: false };
    await this.prisma.wmClientProfile.update({ where: { investorId }, data: { currentTier: tier, tierUpdatedAt: new Date() } });
    await this.prisma.wmTierMigrationLog.create({
      data: { wmClientProfileId: investorId, fromTier: profile.currentTier, toTier: tier, totalWealthKobo },
    });
    return { tier, changed: true };
  }

  // ==========================================================================
  // Claim-validation (v1.1 refinement #3, tight maker≠checker).
  // ==========================================================================
  async declareClientAsset(input: {
    investorId: string; assetClassCode: string; description: string; quantity?: number; declaredValueKobo: bigint;
    valuationDate: Date; custodyFlag: 'ONE17' | 'EXTERNAL'; evidenceDocumentId?: string; declaredByUserId: string;
    // Invariant 29(b) holding drill-down fields — optional (not every asset
    // class has a tenor/maturity), staff-supplied at declaration.
    maturityDate?: Date; tenorMonths?: number; scheduledProfitTakingDates?: string[]; targetReturnPct?: number;
  }) {
    await this.assertCapability(input.declaredByUserId, 'WM_ADVISORY', 'INITIATE', 'declare a client asset');
    const assetClass = await this.prisma.assetClassRegistry.findUnique({ where: { code: input.assetClassCode } });
    if (!assetClass || !assetClass.isActive) {
      throw new WmError(`Asset class "${input.assetClassCode}" is not an active asset_class_registry row.`);
    }
    const asset = await this.prisma.wmClientAsset.create({
      data: {
        wmClientProfileId: input.investorId,
        assetClassCode: input.assetClassCode,
        description: input.description,
        quantity: input.quantity as any,
        declaredValueKobo: input.declaredValueKobo,
        valuationDate: input.valuationDate,
        custodyFlag: input.custodyFlag,
        evidenceDocumentId: input.evidenceDocumentId,
        declaredByUserId: input.declaredByUserId,
        maturityDate: input.maturityDate,
        tenorMonths: input.tenorMonths,
        scheduledProfitTakingDates: input.scheduledProfitTakingDates as any,
        targetReturnPct: input.targetReturnPct as any,
      },
    });
    await this.prisma.wmClientAssetValuation.create({
      data: { wmClientAssetId: asset.id, valuationDate: input.valuationDate, valueKobo: input.declaredValueKobo, recordedByUserId: input.declaredByUserId },
    });
    // Invariant 49(a) (CHECK11, atomicity sweep): compensating cleanup, not
    // a $transaction -- see PmsService.submitSelfScore's comment for why
    // one can't span into workflow.initiate() across service boundaries
    // here. Valuation has no cascade off WmClientAsset (schema), so it must
    // be deleted first or the asset delete below hits an FK violation.
    let workflowInstance;
    try {
      workflowInstance = await this.workflow.initiate({
        workflowTypeCode: 'WM_CLAIM_VALIDATION',
        entityType: 'wm_client_asset',
        entityId: asset.id,
        initiatedByUserId: input.declaredByUserId,
        scenario: 'STANDARD',
      });
    } catch (err) {
      // Invariant 49(b2) (CHECK11 advisor ruling): see PmsService.
      // submitSelfScore's matching comment -- capability failures already
      // audit-log inside WorkflowEngineService itself; this covers every
      // other failure cause so the attempt+compensation isn't invisible.
      await this.audit.record({
        actorUserId: input.declaredByUserId,
        action: 'INITIATE_FAILED_COMPENSATED',
        entityType: 'wm_client_asset',
        entityId: asset.id,
        after: { workflowTypeCode: 'WM_CLAIM_VALIDATION', reason: (err as Error).message },
      });
      await this.prisma.wmClientAssetValuation.deleteMany({ where: { wmClientAssetId: asset.id } });
      await this.prisma.wmClientAsset.delete({ where: { id: asset.id } });
      throw err;
    }
    const updated = await this.prisma.wmClientAsset.update({ where: { id: asset.id }, data: { workflowInstanceId: workflowInstance.id } });
    await this.audit.record({ actorUserId: input.declaredByUserId, action: 'CREATE', entityType: 'wm_client_asset', entityId: asset.id, after: { assetClassCode: input.assetClassCode, custodyFlag: input.custodyFlag } });
    return { asset: this.serializeAsset(updated), workflowInstance };
  }

  // Nest's default JSON serializer throws on BigInt (no global patch exists
  // in this codebase — every controller/service stringifies at the
  // boundary instead, same as regulatory-reporting.service.ts's figures
  // map); these two helpers are that boundary for the two Prisma models
  // here that carry BigInt kobo columns straight through to HTTP responses.
  private serializeAsset<T extends { declaredValueKobo: bigint }>(asset: T) {
    return { ...asset, declaredValueKobo: asset.declaredValueKobo.toString() };
  }

  private serializeAssessmentRun<T extends { preShockValueKobo: bigint; postShockValueKobo: bigint }>(run: T) {
    return { ...run, preShockValueKobo: run.preShockValueKobo.toString(), postShockValueKobo: run.postShockValueKobo.toString() };
  }

  // Called only via the generic Workflow Inbox dispatch (verifier ≠
  // declarer enforced by WorkflowEngineService.approveNextStep) — the
  // approval record IS the verification, same pattern as regulatory filing
  // certification.
  async verifyClientAsset(workflowInstanceId: string, verifierUserId: string) {
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

  async setShariahScreen(assetId: string, tag: 'SCREENED_COMPLIANT' | 'SCREENED_NON_COMPLIANT' | 'UNSCREENED', actorUserId: string) {
    await this.assertCapability(actorUserId, 'WM_ADVISORY', 'INITIATE', 'set a Shariah screen tag');
    const updated = await this.prisma.wmClientAsset.update({ where: { id: assetId }, data: { shariahScreenTag: tag } });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'wm_client_asset', entityId: assetId, after: { shariahScreenTag: tag } });
    return updated;
  }

  // ==========================================================================
  // Invariant 29(b)/(c) holding drill-down + NWCS pyramid. TOP_UP/REDEMPTION
  // requests reuse the SAME v1 READ+RESPOND boundary as advisory records
  // above: a plain ticket routed to staff who action it manually through the
  // EXISTING standing ledger machinery — deliberately NOT a new
  // WorkflowEngineService chain, since the spec says these must never
  // self-execute and a formal approval chain would be over-engineering
  // relative to that stated limit.
  // ==========================================================================
  async getHoldingDetail(assetId: string, investorId: string) {
    const asset = await this.prisma.wmClientAsset.findUniqueOrThrow({ where: { id: assetId } });
    if (asset.wmClientProfileId !== investorId) {
      throw new WmError(`Cross-client access denied: holding ${assetId} does not belong to investor ${investorId}.`);
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

  // Portal-side client action (own investorId, ownership-checked) — no
  // audit.record call, same as respondToAdvisory/ackVersioned above: an
  // investorId is not an app_user UUID, so it can never be an audit_trail
  // actor; the request row's own createdAt is the trail here.
  private async submitHoldingActionRequest(assetId: string, investorId: string, requestType: 'TOP_UP' | 'REDEMPTION', requestedAmountKobo: bigint, notes?: string) {
    const asset = await this.prisma.wmClientAsset.findUniqueOrThrow({ where: { id: assetId } });
    if (asset.wmClientProfileId !== investorId) {
      throw new WmError(`Cross-client access denied: holding ${assetId} does not belong to investor ${investorId}.`);
    }
    const request = await this.prisma.wmHoldingActionRequest.create({ data: { wmClientAssetId: assetId, requestType, requestedAmountKobo, notes } });
    return { ...request, requestedAmountKobo: request.requestedAmountKobo.toString() };
  }

  async requestTopUp(assetId: string, investorId: string, requestedAmountKobo: bigint, notes?: string) {
    return this.submitHoldingActionRequest(assetId, investorId, 'TOP_UP', requestedAmountKobo, notes);
  }

  async requestRedemption(assetId: string, investorId: string, requestedAmountKobo: bigint, notes?: string) {
    return this.submitHoldingActionRequest(assetId, investorId, 'REDEMPTION', requestedAmountKobo, notes);
  }

  async listPendingHoldingActionRequests(actorUserId: string) {
    await this.assertCapability(actorUserId, 'WM_ADVISORY', 'VIEW', 'list pending holding action requests');
    const requests = await this.prisma.wmHoldingActionRequest.findMany({
      where: { status: 'PENDING' },
      orderBy: { createdAt: 'asc' },
      include: { wmClientAsset: { include: { wmClientProfile: { include: { investor: { select: { fullLegalName: true } } } } } } },
    });
    return requests.map((r) => ({ ...r, requestedAmountKobo: r.requestedAmountKobo.toString() }));
  }

  // Marks the ticket handled AFTER staff have actually moved money/units
  // through the existing standing ledger machinery elsewhere — this call
  // itself posts nothing to the ledger (prime boundary, same as
  // declareClientAsset never touching the ledger directly).
  async actionHoldingRequest(requestId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'WM_ADVISORY', 'INITIATE', 'action a holding request');
    const request = await this.prisma.wmHoldingActionRequest.findUniqueOrThrow({ where: { id: requestId } });
    if (request.status !== 'PENDING') {
      throw new WmError(`Holding action request ${requestId} is already ${request.status}.`);
    }
    const updated = await this.prisma.wmHoldingActionRequest.update({
      where: { id: requestId },
      data: { status: 'ACTIONED', actionedByUserId: actorUserId, actionedAt: new Date() },
    });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'wm_holding_action_request', entityId: requestId, after: { status: 'ACTIONED' } });
    return { ...updated, requestedAmountKobo: updated.requestedAmountKobo.toString() };
  }

  // Invariant 26(b) / Visualization Standard item 2: the pyramid's client
  // position marker reads the SAME derived bands (activeTierBands) that
  // resolveTier() itself uses — the marker cannot drift from what actually
  // determines the client's tier, because it IS that computation.
  async getNwcsPyramidData(investorId: string) {
    const [profile, bands, totalWealthKobo] = await Promise.all([
      this.prisma.wmClientProfile.findUniqueOrThrow({ where: { investorId } }),
      this.activeTierBands(),
      this.computeTotalWealthKobo(investorId),
    ]);
    const tiers = TIER_BANDS.map((t) => {
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

  // Invariant 36(g): "clients OUTSIDE the WM module see a truncated NWCS
  // pyramid (BASE/CORE/UPPER MASS -> MASS AFFLUENT) with their position...
  // the full 10-tier pyramid unlocks upon WM admission." Was staff-facing
  // only (advisor workspace) pending a security-scope decision on widening
  // portal credential issuance beyond WM clients — invariant 39(d) makes
  // that decision explicitly, so this now also feeds getPortalDashboard()
  // for every non-WM investor directly.
  // Truncation ceiling = MASS_AFFLUENT (sortOrder 4) — the CEO's own named
  // boundary; anyone whose actual wealth would resolve ABOVE it is pinned
  // AT the ceiling tier here, never shown a tier beyond it, so the
  // "unlocks upon WM admission" promise stays true regardless of how
  // wealthy a pre-WM investor already is.
  private static readonly PRE_WM_CEILING_SORT_ORDER = 4;

  async getPreWmPyramidData(investorId: string) {
    const existingProfile = await this.prisma.wmClientProfile.findUnique({ where: { investorId } });
    if (existingProfile) {
      throw new WmError(`Investor ${investorId} is already a WM client — use the full 10-tier pyramid, not the pre-WM truncated view.`);
    }
    const [bands, totalWealthKobo] = await Promise.all([this.activeTierBands(), this.computeTotalWealthKobo(investorId)]);
    const truncatedBandDefs = TIER_BANDS.filter((t) => t.sortOrder <= WmService.PRE_WM_CEILING_SORT_ORDER);
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

  // The WM advisor workspace's prospecting list (invariant 36g): every
  // KYC-complete investor who is NOT yet a WM client — the pool Flow-C
  // admission draws from.
  async listPreWmProspects() {
    return this.prisma.investor.findMany({
      where: { kycStatus: 'KYC_COMPLETE', wmClientProfile: null },
      select: { investorId: true, fullLegalName: true, contactEmail: true },
      orderBy: { fullLegalName: 'asc' },
    });
  }

  // ==========================================================================
  // Allocation policy / risk profile / growth plan — versioned, staff sets,
  // CLIENT acknowledges (portal-side action, no workflow instance: this is
  // the client accepting their own record, not a staff maker≠checker step).
  // ==========================================================================
  async setAllocationPolicy(input: { investorId: string; targetAllocations: Record<string, number>; riskBand: string; createdByUserId: string }) {
    await this.assertCapability(input.createdByUserId, 'WM_ADVISORY', 'INITIATE', 'set an allocation policy');
    return this.createVersioned('wmAllocationPolicy', input.investorId, input.createdByUserId, {
      targetAllocations: input.targetAllocations as any,
      riskBand: input.riskBand as any,
    });
  }

  async acknowledgeAllocationPolicy(id: string, investorId: string) {
    return this.ackVersioned('wmAllocationPolicy', id, investorId);
  }

  async setRiskProfile(input: { investorId: string; questionnaireResponses: Record<string, unknown>; riskBand: string; createdByUserId: string }) {
    await this.assertCapability(input.createdByUserId, 'WM_ADVISORY', 'INITIATE', 'set a risk profile');
    return this.createVersioned('wmRiskProfile', input.investorId, input.createdByUserId, {
      questionnaireResponses: input.questionnaireResponses as any,
      riskBand: input.riskBand as any,
    });
  }

  async acknowledgeRiskProfile(id: string, investorId: string) {
    return this.ackVersioned('wmRiskProfile', id, investorId);
  }

  async setGrowthPlan(input: { investorId: string; horizon: string; milestones: unknown; targetGlidePath: unknown; reviewSchedule: string; createdByUserId: string }) {
    await this.assertCapability(input.createdByUserId, 'WM_ADVISORY', 'INITIATE', 'set a growth plan');
    return this.createVersioned('wmGrowthPlan', input.investorId, input.createdByUserId, {
      horizon: input.horizon,
      milestones: input.milestones as any,
      targetGlidePath: input.targetGlidePath as any,
      reviewSchedule: input.reviewSchedule,
    });
  }

  async acknowledgeGrowthPlan(id: string, investorId: string) {
    return this.ackVersioned('wmGrowthPlan', id, investorId);
  }

  private async createVersioned(model: 'wmAllocationPolicy' | 'wmRiskProfile' | 'wmGrowthPlan', investorId: string, createdByUserId: string, data: Record<string, unknown>) {
    const delegate = (this.prisma as any)[model];
    const latest = await delegate.findFirst({ where: { wmClientProfileId: investorId }, orderBy: { version: 'desc' } });
    const version = (latest?.version ?? 0) + 1;
    if (latest) await delegate.updateMany({ where: { wmClientProfileId: investorId, isActive: true }, data: { isActive: false } });
    const created = await delegate.create({ data: { wmClientProfileId: investorId, version, createdByUserId, ...data } });
    await this.audit.record({ actorUserId: createdByUserId, action: 'CREATE', entityType: model, entityId: created.id, after: { version } });
    return created;
  }

  private async ackVersioned(model: 'wmAllocationPolicy' | 'wmRiskProfile' | 'wmGrowthPlan', id: string, investorId: string) {
    const delegate = (this.prisma as any)[model];
    const row = await delegate.findUniqueOrThrow({ where: { id } });
    if (row.wmClientProfileId !== investorId) {
      throw new WmError(`Cross-client access denied: record ${id} does not belong to investor ${investorId}.`);
    }
    return delegate.update({ where: { id }, data: { clientAcknowledgedAt: new Date() } });
  }

  // ==========================================================================
  // Advisory records — the trust product (§2). Immutable once responded.
  // ==========================================================================
  async createAdvisoryRecord(input: { investorId: string; recommendation: string; rationale: string; riskNotes?: string; shariahNote?: string; advisorUserId: string }) {
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

  // Portal-side only — ownership-checked against the calling client's own
  // investorId (cross-client leak test). Writes ONLY this record; nothing
  // else on the platform changes (adversarial: "client ACCEPT/DECLINE writes
  // the immutable advisory record and nothing else").
  async respondToAdvisory(recordId: string, investorId: string, response: 'ACCEPTED' | 'DECLINED' | 'DEFERRED') {
    const record = await this.prisma.wmAdvisoryRecord.findUniqueOrThrow({ where: { id: recordId } });
    if (record.wmClientProfileId !== investorId) {
      throw new WmError(`Cross-client access denied: advisory record ${recordId} does not belong to investor ${investorId}.`);
    }
    if (record.clientResponse !== 'PENDING') {
      throw new WmError(`Advisory record ${recordId} already has a response (${record.clientResponse}) — immutable once responded.`);
    }
    return this.prisma.wmAdvisoryRecord.update({ where: { id: recordId }, data: { clientResponse: response, respondedAt: new Date() } });
  }

  // ==========================================================================
  // Sandbox risk assessment (v1.1 refinement #4, amendment 27's SANDBOX
  // discipline reused) — status DRAFT/PUBLISHED only, NEVER touches
  // stress_test_run / isApprovedBaseline (enterprise baseline table).
  // ==========================================================================
  async runSandboxRiskAssessment(input: { investorId: string; scenarioCode: string; ranByUserId: string }) {
    await this.assertCapability(input.ranByUserId, 'WM_ADVISORY', 'INITIATE', 'run a WM sandbox risk assessment');
    const scenario = await this.prisma.wmStressScenarioConfig.findFirst({ where: { scenarioCode: input.scenarioCode, status: 'ACTIVE' }, orderBy: { version: 'desc' } });
    if (!scenario) throw new WmError(`No ACTIVE wm_stress_scenario_config row for "${input.scenarioCode}" — cannot run without governed parameters (invariant 10).`);

    const snapshot = await this.combinedBookSnapshot(input.investorId);
    const shocks = scenario.shockPctByAssetClass as Record<string, number>;
    let postShockKobo = 0n;
    for (const [assetClass, valueStr] of Object.entries(snapshot.byAssetClassKobo)) {
      const value = BigInt(valueStr);
      const shockPct = shocks[assetClass] ?? 0;
      postShockKobo += value + (value * BigInt(Math.round(shockPct * 100))) / 10_000n;
    }

    const run = await this.prisma.wmRiskAssessmentRun.create({
      data: {
        wmClientProfileId: input.investorId,
        scenarioConfigId: scenario.id,
        combinedBookSnapshot: snapshot as any,
        preShockValueKobo: BigInt(snapshot.totalKobo),
        postShockValueKobo: postShockKobo,
        status: 'DRAFT',
        ranByUserId: input.ranByUserId,
      },
    });
    await this.audit.record({ actorUserId: input.ranByUserId, action: 'CREATE', entityType: 'wm_risk_assessment_run', entityId: run.id, after: { scenarioCode: input.scenarioCode, runMode: 'SANDBOX' } });
    return this.serializeAssessmentRun(run);
  }

  async publishRiskAssessment(runId: string, reviewedByUserId: string) {
    await this.assertCapability(reviewedByUserId, 'WM_ADVISORY', 'INITIATE', 'publish a WM risk assessment to the client dashboard');
    const run = await this.prisma.wmRiskAssessmentRun.update({
      where: { id: runId },
      data: { status: 'PUBLISHED', reviewedByUserId, publishedAt: new Date() },
    });
    await this.audit.record({ actorUserId: reviewedByUserId, action: 'UPDATE', entityType: 'wm_risk_assessment_run', entityId: runId, after: { status: 'PUBLISHED' } });
    return this.serializeAssessmentRun(run);
  }

  // ==========================================================================
  // Advisory fee — COMPANY revenue only (§2/§6 adversarial). The one method
  // in this file that touches the ledger, via the standing event->journal
  // machinery (maker drafts, checker approves — never posted directly).
  // Gated on JOURNAL_ENTRIES, not WM_ADVISORY: every other event_journal_
  // config-driven posting in this codebase (event-journal.smoke.ts's
  // CAPITAL_PLACEMENT_RECEIVED/FEE_ACCRUAL/etc.) is initiated by a
  // JOURNAL_ENTRIES-capable actor regardless of which domain event
  // triggered it — "who may touch the ledger" is a single, consistent gate,
  // separate from "who may decide to charge a fee."
  // ==========================================================================
  async chargeAdvisoryFee(input: {
    investorId: string; ledgerEntityCode: string; amountKobo: bigint;
    drAccountCodeOverride: string; crAccountCodeOverride: string; entryDate: Date; actorUserId: string;
  }) {
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

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'wm_activity', entityId: activity, after: { functionCode, level } });
      throw new WmError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}
