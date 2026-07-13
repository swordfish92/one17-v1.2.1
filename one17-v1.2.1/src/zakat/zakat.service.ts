import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { WmService } from '../wm/wm.service';
import { NotificationService } from '../notification/notification.service';
import { ZAKAT_RATE_THOUSANDTHS_OF_PERCENT, DeclareZakatItemInput, DeclareZakatItemClientInput, ZakatError } from './zakat.types';

// Invariant 26 (spec: ../Portfolio Management/Zakat Assessment/, 7-schedule
// model). Per-client service, applies to ALL company clients (not only
// WM). Reuses the WM claim-validation PATTERN and the same declare/verify
// discipline as WmService.declareClientAsset()/verifyClientAsset(): every
// schedule item enters DECLARED and only counts toward the OFFICIAL zakat
// figures once a DIFFERENT authorized officer VERIFIES it (maker != checker,
// enforced by WorkflowEngineService). CORRECTED per invariant 71 (12-Jul-2026,
// v1.1.0 candidate correction, CF-01): staff declare on the client's behalf
// via declareScheduleItem, AND the client portal declares directly via
// declareScheduleItemAsClient (invariant 70(h)(ii)) — this is a live,
// data-bearing portal write path, not merely VIEW+AGREE+ELECT as an earlier
// revision of this comment claimed. Both paths feed the SAME declared->
// verified sequence and the SAME official computation below.
@Injectable()
export class ZakatService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
    private readonly wm: WmService,
    private readonly notification: NotificationService,
  ) {}

  // ==========================================================================
  // Nisab config — AMD-12 doctrine (invariant 16): ships NULL, activation-
  // gated, never a platform default. The nisab gram anchor is a Shariah
  // determination, not something this build invents from general fiqh
  // knowledge (invariant "when the spec is silent, do not invent financial
  // logic — raise the question and stop").
  // ==========================================================================
  async getNisabConfig() {
    return this.prisma.zakatNisabConfig.upsert({ where: { id: 1 }, create: { id: 1 }, update: {} });
  }

  async updateNisabConfig(nisabGoldGrams: number, goldPricePerGramKobo: bigint, actorUserId: string) {
    await this.assertCapability(actorUserId, 'ZAKAT_ADVISORY', 'APPROVE', 'update the governed Zakat nisab config');
    const updated = await this.prisma.zakatNisabConfig.upsert({
      where: { id: 1 },
      create: { id: 1, nisabGoldGrams, goldPricePerGramKobo, approvedByUserId: actorUserId, approvedAt: new Date() },
      update: { nisabGoldGrams, goldPricePerGramKobo, approvedByUserId: actorUserId, approvedAt: new Date() },
    });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'zakat_nisab_config', entityId: '1', after: { nisabGoldGrams, goldPricePerGramKobo: goldPricePerGramKobo.toString() } });
    return this.serializeNisabConfig(updated);
  }

  private serializeNisabConfig<T extends { goldPricePerGramKobo: bigint | null }>(c: T) {
    return { ...c, goldPricePerGramKobo: c.goldPricePerGramKobo?.toString() ?? null };
  }

  // Nisab threshold in kobo, or null if the config is not yet Board/SSB
  // approved (AWAITING BOARD APPROVAL — never a fake threshold).
  private async getNisabThresholdKobo(): Promise<bigint | null> {
    const config = await this.getNisabConfig();
    if (config.nisabGoldGrams == null || config.goldPricePerGramKobo == null) return null;
    return BigInt(Math.round(Number(config.nisabGoldGrams) * 1000)) * config.goldPricePerGramKobo / 1000n;
  }

  // ==========================================================================
  // Subscription — staff-side ACTIVATE/DEACTIVATE switch (invariant 26c).
  // A deactivated client must get ZERO nisab-breach prompts; enforced by
  // the monitor job checking isActive, not by capability alone.
  //
  // GOVERNANCE RULING (invariant 71(b), 12-Jul-2026, resolving an open
  // question the audit raised): this stays SINGLE-OFFICER, deliberately,
  // not maker!=checker. Activation is service acceptance — clerical
  // enablement of a data-intake channel — not a financial act; it moves
  // no money and asserts no zakat figure. Every downstream number (every
  // declared item, the official computeAssessment result, the final
  // certification) remains two-officer VERIFIED and SSB-CERTIFIED
  // regardless of who activated the subscription. The audit.record() call
  // below is the audit-visibility half of this ruling; this comment is
  // the "deliberate, not an oversight" half. Recorded here rather than
  // only in an evidence pack, so the next reader of the code finds the
  // ruling where the code lives. (CEO may overrule to maker-checker;
  // absent that instruction, this stands.)
  // ==========================================================================
  async activateSubscription(investorId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'ZAKAT_ADVISORY', 'INITIATE', 'activate a Zakat subscription');
    const sub = await this.prisma.zakatClientSubscription.upsert({
      where: { investorId },
      create: { investorId, isActive: true, activatedByUserId: actorUserId },
      update: { isActive: true, activatedByUserId: actorUserId, activatedAt: new Date(), deactivatedByUserId: null, deactivatedAt: null },
    });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'zakat_client_subscription', entityId: investorId, after: { isActive: true } });
    return sub;
  }

  async deactivateSubscription(investorId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'ZAKAT_ADVISORY', 'INITIATE', 'deactivate a Zakat subscription');
    const sub = await this.prisma.zakatClientSubscription.update({
      where: { investorId },
      data: { isActive: false, deactivatedByUserId: actorUserId, deactivatedAt: new Date() },
    });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'zakat_client_subscription', entityId: investorId, after: { isActive: false } });
    return sub;
  }

  // Client-side action (own investorId, ownership-checked) — "client elects
  // basis at subscription", no capability gate, same READ+RESPOND shape as
  // WM's acknowledgeAllocationPolicy etc.
  async electRateBasis(investorId: string, rateBasis: 'LUNAR' | 'GREGORIAN') {
    const sub = await this.prisma.zakatClientSubscription.findUniqueOrThrow({ where: { investorId } });
    if (!sub.isActive) throw new ZakatError(`Zakat subscription for investor ${investorId} is not active.`);
    return this.prisma.zakatClientSubscription.update({ where: { investorId }, data: { rateBasisElection: rateBasis } });
  }

  // Nisab-breach monitor's per-client check (called by the scheduled job,
  // §2.10). Wealth proxy = the SAME combined book the WM dashboard/pyramid
  // reads (One17-custodied + any WM-declared external) — the monitor
  // cannot know about assets that only become visible THROUGH a Zakat
  // assessment itself (a deliberate, honest scope limit, not an oversight).
  async isNisabBreached(investorId: string): Promise<{ breached: boolean; totalWealthKobo: string; nisabThresholdKobo: string | null }> {
    const threshold = await this.getNisabThresholdKobo();
    const snapshot = await this.wm.combinedBookSnapshot(investorId);
    const totalWealthKobo = BigInt(snapshot.totalKobo);
    return {
      breached: threshold != null && totalWealthKobo >= threshold,
      totalWealthKobo: totalWealthKobo.toString(),
      nisabThresholdKobo: threshold?.toString() ?? null,
    };
  }

  async listActiveSubscriptions() {
    return this.prisma.zakatClientSubscription.findMany({ where: { isActive: true }, include: { investor: { select: { fullLegalName: true, contactEmail: true } } } });
  }

  // Server-computed truth the portal reads to decide Zakat tab visibility
  // (adversarial 70(h)(v): "tab invisible before approval") -- reuses the
  // EXISTING isActive flag rather than inventing a second one. In practice
  // the portal already gets this from GET /portal/zakat/subscription's own
  // isActive field (the same dedicated-GET pattern usePortalAuth's
  // requiresPrivacyNoticeAcknowledgment uses), so this method exists mainly
  // as the one place other server-side code (getZakatPositionForClient
  // below) gates on the same truth without re-deriving it.
  async isZakatTabActive(investorId: string): Promise<boolean> {
    const sub = await this.prisma.zakatClientSubscription.findUnique({ where: { investorId } });
    return sub?.isActive ?? false;
  }

  // ==========================================================================
  // Subscription REQUEST queue (invariant 70(h)(i)) — the portal-request/
  // staff-approve front door onto the pre-existing activateSubscription
  // staff toggle above. Mirrors WmService's submitHoldingActionRequest/
  // listPendingHoldingActionRequests/actionHoldingRequest trio exactly:
  // portal creates the row with NO capability gate (investorId ownership is
  // inherent, not delegated authority), staff list/action it under the SAME
  // ZAKAT_ADVISORY capability activateSubscription already enforces —
  // service ownership stays with BD/Wealth Officer/REL_OFF per the charter,
  // with no new function code.
  // ==========================================================================
  async requestSubscription(investorId: string, consentAcknowledged: boolean) {
    // NDPA purpose-limitation discipline (70(h)(ii) last sentence): no
    // request is ever persisted without consent -- never implied, never
    // defaulted true.
    if (!consentAcknowledged) {
      throw new ZakatError('The Zakat Computation service advisory-use consent must be acknowledged before requesting this service.');
    }
    const existingSub = await this.prisma.zakatClientSubscription.findUnique({ where: { investorId } });
    if (existingSub?.isActive) {
      throw new ZakatError(`Investor ${investorId} already has an active Zakat subscription.`);
    }
    const existingPending = await this.prisma.zakatSubscriptionRequest.findFirst({ where: { investorId, status: 'PENDING' } });
    if (existingPending) return existingPending;
    return this.prisma.zakatSubscriptionRequest.create({ data: { investorId, consentAcknowledgedAt: new Date() } });
  }

  async listPendingSubscriptionRequests(actorUserId: string) {
    await this.assertCapability(actorUserId, 'ZAKAT_ADVISORY', 'VIEW', 'list pending Zakat subscription requests');
    return this.prisma.zakatSubscriptionRequest.findMany({
      where: { status: 'PENDING' },
      orderBy: { requestedAt: 'asc' },
      include: { investor: { select: { fullLegalName: true, contactEmail: true } } },
    });
  }

  async approveSubscriptionRequest(requestId: string, actorUserId: string) {
    const request = await this.prisma.zakatSubscriptionRequest.findUniqueOrThrow({ where: { id: requestId } });
    if (request.status !== 'PENDING') {
      throw new ZakatError(`Zakat subscription request ${requestId} is already ${request.status}.`);
    }
    // Reuses activateSubscription's own capability gate + audit shape
    // verbatim (70(h)(i): "staff APPROVE the subscription -> the Zakat
    // Computation tab activates") rather than duplicating its two lines --
    // it already asserts ZAKAT_ADVISORY INITIATE and writes its own audit
    // record, so this call needs nothing further for that half.
    await this.activateSubscription(request.investorId, actorUserId);
    const updated = await this.prisma.zakatSubscriptionRequest.update({
      where: { id: requestId },
      data: { status: 'APPROVED', approvedByUserId: actorUserId, approvedAt: new Date() },
    });
    await this.audit.record({ actorUserId, action: 'APPROVE', entityType: 'zakat_subscription_request', entityId: requestId, after: { status: 'APPROVED', investorId: request.investorId } });
    return updated;
  }

  // ==========================================================================
  // Assessment sandbox (invariant 26c: "advisor presents via the Zakat
  // Assessment Sandbox (report_run, DRAFT-labeled, One17 balances
  // AUTO-filled)"). Dual calendar mandatory on every assessment date.
  // ==========================================================================
  async createAssessmentSandbox(input: { investorId: string; assessmentDateGregorian: Date; assessmentDateHijri: string; createdByUserId: string }) {
    await this.assertCapability(input.createdByUserId, 'ZAKAT_ADVISORY', 'INITIATE', 'create a Zakat assessment sandbox');
    const sub = await this.prisma.zakatClientSubscription.findUniqueOrThrow({ where: { investorId: input.investorId } });
    if (!sub.isActive) throw new ZakatError(`Zakat subscription for investor ${input.investorId} is not active — activate it first.`);
    // Adversarial requirement (invariant 26c adversarial set): "rate-calendar
    // pairing enforced" — an assessment cannot be created before the client
    // has elected a rate basis, since the rate the whole run computes under
    // is fixed to that election.
    if (!sub.rateBasisElection) {
      throw new ZakatError(`Investor ${input.investorId} has not yet elected a Zakat rate basis (LUNAR/GREGORIAN) — required before creating an assessment.`);
    }
    const snapshot = await this.wm.combinedBookSnapshot(input.investorId);
    const run = await this.prisma.zakatAssessmentRun.create({
      data: {
        investorId: input.investorId,
        assessmentDateGregorian: input.assessmentDateGregorian,
        assessmentDateHijri: input.assessmentDateHijri,
        rateBasis: sub.rateBasisElection,
        oneSeventeenBalancesSnapshot: snapshot as any,
        createdByUserId: input.createdByUserId,
      },
    });
    await this.audit.record({ actorUserId: input.createdByUserId, action: 'CREATE', entityType: 'zakat_assessment_run', entityId: run.id, after: { investorId: input.investorId, rateBasis: sub.rateBasisElection } });
    return this.serializeRun(run);
  }

  // Client-side action (own investorId, ownership-checked) — "client
  // AGREES" to proceed. No workflow instance: the client accepting the
  // sandbox presentation, not a staff maker!=checker step.
  async clientAgreeToSandbox(runId: string, investorId: string) {
    const run = await this.prisma.zakatAssessmentRun.findUniqueOrThrow({ where: { id: runId } });
    if (run.investorId !== investorId) throw new ZakatError(`Cross-client access denied: assessment ${runId} does not belong to investor ${investorId}.`);
    if (run.status !== 'DRAFT') throw new ZakatError(`Assessment ${runId} is not in DRAFT (currently ${run.status}) — cannot re-agree.`);
    return this.prisma.zakatAssessmentRun.update({ where: { id: runId }, data: { status: 'CLIENT_AGREED' } });
  }

  // ==========================================================================
  // Schedule items — same claim-validation shape as WmService's
  // declareClientAsset/verifyClientAsset, on the Zakat-scoped item table.
  // ==========================================================================
  async declareScheduleItem(input: DeclareZakatItemInput) {
    await this.assertCapability(input.declaredByUserId, 'ZAKAT_ADVISORY', 'INITIATE', 'declare a Zakat schedule item');
    return this.declareScheduleItemCore({
      zakatAssessmentRunId: input.zakatAssessmentRunId,
      scheduleType: input.scheduleType,
      description: input.description,
      amountKobo: input.amountKobo,
      zakatability: input.zakatability,
      declarationSource: 'STAFF',
      declaredByUserId: input.declaredByUserId,
      initiatedByUserId: input.declaredByUserId,
    });
  }

  // Invariant 70(h)(ii): "client ADDS external assets/liabilities/items
  // through the portal — every client-entered item enters as DECLARED and
  // follows the standing declared->VERIFIED sequence." Ownership-checked
  // (own investorId, own open assessment run) like electRateBasis/
  // clientAgreeToSandbox — no assertCapability, since a PortalClientUser
  // investorId is not an AppUser and can't hold RBAC capabilities. The
  // workflow still needs a real AppUser initiator (WorkflowEngineService.
  // initiate() capability-checks initiatedByUserId), so this reuses the
  // SAME synthetic SYSTEM_PORTAL_CLIENT technical actor
  // SubscriptionService.initiatePortalRedemption established for exactly
  // this situation — never the investor (who has no AppUser row), and
  // structurally never a valid "verifier" either (see systemPortalClientUserId's
  // comment), so maker!=checker holds automatically for client declarations.
  async declareScheduleItemAsClient(investorId: string, input: DeclareZakatItemClientInput) {
    const run = await this.prisma.zakatAssessmentRun.findUniqueOrThrow({ where: { id: input.zakatAssessmentRunId } });
    if (run.investorId !== investorId) {
      throw new ZakatError(`Cross-client access denied: assessment ${input.zakatAssessmentRunId} does not belong to investor ${investorId}.`);
    }
    const systemUserId = await this.systemPortalClientUserId();
    return this.declareScheduleItemCore({
      zakatAssessmentRunId: input.zakatAssessmentRunId,
      scheduleType: input.scheduleType,
      description: input.description,
      amountKobo: input.amountKobo,
      zakatability: input.zakatability,
      declarationSource: 'CLIENT',
      declaredByUserId: null,
      initiatedByUserId: systemUserId,
    });
  }

  // Shared body both declare paths call — refactored out rather than
  // duplicated (invariant 49(a)/(b2), CHECK11 atomicity-sweep discipline:
  // compensating cleanup on workflow.initiate() failure, not a
  // $transaction, since it can't span across the WorkflowEngineService
  // boundary). initiatedByUserId is the AppUser identity WorkflowEngineService
  // capability-checks and records as the workflow's maker: the declaring
  // staff member for a STAFF declaration, or the SYSTEM_PORTAL_CLIENT
  // technical actor for a CLIENT one.
  private async declareScheduleItemCore(input: {
    zakatAssessmentRunId: string;
    scheduleType: DeclareZakatItemInput['scheduleType'];
    description: string;
    amountKobo: bigint;
    zakatability: DeclareZakatItemInput['zakatability'];
    declarationSource: 'STAFF' | 'CLIENT';
    declaredByUserId: string | null;
    initiatedByUserId: string;
  }) {
    const run = await this.prisma.zakatAssessmentRun.findUniqueOrThrow({ where: { id: input.zakatAssessmentRunId } });
    if (run.status === 'CERTIFIED') throw new ZakatError(`Assessment ${input.zakatAssessmentRunId} is CERTIFIED — immutable, no further items may be declared.`);
    const item = await this.prisma.zakatDeclaredItem.create({
      data: {
        zakatAssessmentRunId: input.zakatAssessmentRunId,
        scheduleType: input.scheduleType,
        description: input.description,
        amountKobo: input.amountKobo,
        zakatability: input.zakatability,
        custodyFlag: 'EXTERNAL',
        declarationSource: input.declarationSource,
        declaredByUserId: input.declaredByUserId ?? undefined,
      },
    });
    // Invariant 49(a) (CHECK11, atomicity sweep): compensating cleanup, not
    // a $transaction -- see PmsService.submitSelfScore's comment for why
    // one can't span into workflow.initiate() across service boundaries.
    let workflowInstance;
    try {
      workflowInstance = await this.workflow.initiate({
        workflowTypeCode: 'ZAKAT_ITEM_VALIDATION',
        entityType: 'zakat_declared_item',
        entityId: item.id,
        initiatedByUserId: input.initiatedByUserId,
        scenario: 'STANDARD',
      });
    } catch (err) {
      // Invariant 49(b2) (CHECK11 advisor ruling): see PmsService.
      // submitSelfScore's matching comment -- capability failures already
      // audit-log inside WorkflowEngineService itself; this covers every
      // other failure cause so the attempt+compensation isn't invisible.
      await this.audit.record({
        actorUserId: input.initiatedByUserId,
        action: 'INITIATE_FAILED_COMPENSATED',
        entityType: 'zakat_declared_item',
        entityId: item.id,
        after: { workflowTypeCode: 'ZAKAT_ITEM_VALIDATION', reason: (err as Error).message },
      });
      await this.prisma.zakatDeclaredItem.delete({ where: { id: item.id } });
      throw err;
    }
    const updated = await this.prisma.zakatDeclaredItem.update({ where: { id: item.id }, data: { workflowInstanceId: workflowInstance.id } });
    await this.audit.record({ actorUserId: input.initiatedByUserId, action: 'CREATE', entityType: 'zakat_declared_item', entityId: item.id, after: { scheduleType: input.scheduleType, zakatability: input.zakatability, declarationSource: input.declarationSource } });
    return { item: this.serializeItem(updated), workflowInstance };
  }

  // Same find-or-create system-AppUser shape SubscriptionService.
  // systemPortalClientUserId()/PaymentGatewayService established (invariant
  // CHECK16 62(b)) -- duplicated per-service rather than shared, matching
  // this codebase's own cross-service-boundary discipline. Deliberately a
  // SEPARATE role assignment from that service's use (both point at the
  // SAME 'system-portal-client@one17.test' AppUser row, find-or-created
  // idempotently) -- this actor is granted ZAKAT_ADVISORY INITIATE only
  // (prisma/seed.ts), never APPROVE, so it can structurally never verify
  // its own client-declared items even if someone tried.
  private async systemPortalClientUserId(): Promise<string> {
    const email = 'system-portal-client@one17.test';
    let user = await this.prisma.appUser.findUnique({ where: { email } });
    if (!user) {
      user = await this.prisma.appUser.create({ data: { email, displayName: 'System Portal Client' } });
    }
    const hasRole = await this.prisma.userRole.findFirst({ where: { userId: user.id, roleCode: 'SYSTEM_PORTAL_CLIENT' } });
    if (!hasRole) {
      await this.prisma.userRole.create({ data: { userId: user.id, roleCode: 'SYSTEM_PORTAL_CLIENT' } });
    }
    return user.id;
  }

  // Dispatched only via the generic Workflow Inbox (verifier != declarer
  // enforced by WorkflowEngineService.approveNextStep), same pattern as
  // WmService.verifyClientAsset.
  async verifyScheduleItem(workflowInstanceId: string, verifierUserId: string) {
    const updated = await this.workflow.approveNextStep(workflowInstanceId, verifierUserId);
    if (updated.status === 'APPROVED') {
      const item = await this.prisma.zakatDeclaredItem.update({
        where: { workflowInstanceId },
        data: { verificationTag: 'VERIFIED', verifiedByUserId: verifierUserId, verifiedAt: new Date() },
      });
      await this.audit.record({ actorUserId: verifierUserId, action: 'APPROVE', entityType: 'zakat_declared_item', entityId: item.id, after: { verificationTag: 'VERIFIED' } });
    }
    return updated;
  }

  private serializeItem<T extends { amountKobo: bigint }>(item: T) {
    return { ...item, amountKobo: item.amountKobo.toString() };
  }

  // ==========================================================================
  // Compute Net Zakatable + Zakat Due (Formula Library truth, not the
  // buggy Excel formula — see the evidence pack §defect note: the
  // Summary_FORMULAS sheet's own SUM omits GOLD & SILVER and FIXED ASSETS
  // even though the blank Summary_VALUES template lists both as line
  // items, and CLAUDE.md's own invariant 26(c) narrative already states
  // the corrected 5-schedule formula. Per invariant 1 ("implement
  // specifications, never Excel display cells"), this engine follows the
  // corrected formula, not the sheet's own broken cell reference.
  //
  // Net Zakatable = (ONE17 investment holdings + declared CASH_BANK +
  // GOLD_SILVER + INVESTMENT + FIXED_ASSET, each ZAKATABLE-flagged only,
  // DOUBTFUL receivables excluded per §06's own "zakatable at received"
  // deferral) + declared RECEIVABLE (ZAKATABLE only) − declared LIABILITY
  // (ZAKATABLE-flagged = the workbook's "Deductible" short-term debts;
  // long-term/mortgage debts are NEVER deducted, matching §07's own Nil
  // long-term-debt convention).
  // ==========================================================================
  async computeAssessment(runId: string) {
    const run = await this.prisma.zakatAssessmentRun.findUniqueOrThrow({ where: { id: runId }, include: { items: true } });
    const snapshot = run.oneSeventeenBalancesSnapshot as any as { totalKobo: string };
    // One17-custodied holdings are investment-type assets by nature
    // (mutual fund/pool/mandate units) — auto-zakatable, no per-row flag
    // needed since they are system-sourced, same as WM's ONE17_CUSTODY
    // aggregate never going through claim-validation. Declared items only
    // count once VERIFIED — see computeVerifiedNetZakatableKobo, invariant
    // 71(a)(i).
    const netKobo = this.computeVerifiedNetZakatableKobo(snapshot.totalKobo, run.items);
    const rateThousandths = BigInt(ZAKAT_RATE_THOUSANDTHS_OF_PERCENT[run.rateBasis]);
    const dueKobo = (netKobo * rateThousandths) / 100_000n;
    const updated = await this.prisma.zakatAssessmentRun.update({
      where: { id: runId },
      data: { netZakatableKobo: netKobo, zakatDueKobo: dueKobo },
    });
    return this.serializeRun(updated);
  }

  // ==========================================================================
  // Certification (invariant 26c: "transmission to Shariah review +
  // certification (SSB workflow, certificate on the assessment
  // report_run)"). Immutable post-certification (adversarial set).
  // ==========================================================================
  async submitForCertification(runId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'ZAKAT_ADVISORY', 'INITIATE', 'submit a Zakat assessment for Shariah certification');
    const run = await this.prisma.zakatAssessmentRun.findUniqueOrThrow({ where: { id: runId }, include: { items: true } });
    if (run.status !== 'CLIENT_AGREED') {
      throw new ZakatError(`Assessment ${runId} must be CLIENT_AGREED before certification submission (currently ${run.status}).`);
    }
    // Invariant 71(a)(i): certification is refused while any declared item
    // remains non-final. VERIFIED (counted) and workflow-REJECTED (excluded)
    // are the only final states -- ZakatDeclaredItem has no verificationTag
    // value of its own for "rejected" (WmVerificationTag is DECLARED/VERIFIED
    // only), so a rejection is read off the item's own linked
    // WorkflowInstance.status, which the generic Workflow Inbox reject()
    // path already sets for ZAKAT_ITEM_VALIDATION (no dedicated reject
    // handler needed -- see workflow-inbox.service.ts's reject() fallthrough).
    // A still-pending item's outcome could otherwise flip AFTER
    // certification, which must never happen to a CERTIFIED record.
    const workflowInstanceIds = run.items.map((i) => i.workflowInstanceId).filter((id): id is string => id != null);
    const instances = workflowInstanceIds.length
      ? await this.prisma.workflowInstance.findMany({ where: { id: { in: workflowInstanceIds } } })
      : [];
    const statusByInstanceId = new Map(instances.map((wi) => [wi.id, wi.status]));
    const outstanding = run.items.filter((item) => {
      if (item.verificationTag === 'VERIFIED') return false;
      const wfStatus = item.workflowInstanceId ? statusByInstanceId.get(item.workflowInstanceId) : undefined;
      return wfStatus !== 'REJECTED';
    });
    if (outstanding.length > 0) {
      throw new ZakatError(
        `Assessment ${runId} cannot be submitted for certification -- ${outstanding.length} declared item(s) are not yet final (neither VERIFIED nor REJECTED): ${outstanding.map((i) => `${i.description} (${i.id})`).join('; ')}. Verify or reject each item first.`,
      );
    }
    await this.computeAssessment(runId);
    const workflowInstance = await this.workflow.initiate({
      workflowTypeCode: 'ZAKAT_ASSESSMENT_CERTIFICATION',
      entityType: 'zakat_assessment_run',
      entityId: run.id,
      initiatedByUserId: actorUserId,
      scenario: 'STANDARD',
    });
    const updated = await this.prisma.zakatAssessmentRun.update({
      where: { id: runId },
      data: { status: 'AWAITING_SHARIAH_CERTIFICATION', workflowInstanceId: workflowInstance.id },
    });
    return { run: this.serializeRun(updated), workflowInstance };
  }

  // Dispatched only via the generic Workflow Inbox — the approval record
  // IS the certificate (same reference pattern as regulatory filing
  // certification / WM claim verification elsewhere in this codebase).
  async certifyAssessment(workflowInstanceId: string, certifierUserId: string) {
    const updated = await this.workflow.approveNextStep(workflowInstanceId, certifierUserId);
    if (updated.status === 'APPROVED') {
      const run = await this.prisma.zakatAssessmentRun.update({
        where: { workflowInstanceId },
        data: { status: 'CERTIFIED', certifiedByUserId: certifierUserId, certifiedAt: new Date() },
      });
      await this.audit.record({ actorUserId: certifierUserId, action: 'APPROVE', entityType: 'zakat_assessment_run', entityId: run.id, after: { status: 'CERTIFIED' } });
      // The FIRST certified assessment establishes the client's recurring
      // zakat anniversary (dual calendar) — invariant 26(c): "annual
      // reminder notifications at the client's zakat anniversary." A later
      // certified assessment never overwrites an anniversary already set.
      const sub = await this.prisma.zakatClientSubscription.findUniqueOrThrow({ where: { investorId: run.investorId } });
      if (!sub.zakatAnniversaryGregorian) {
        await this.prisma.zakatClientSubscription.update({
          where: { investorId: run.investorId },
          data: { zakatAnniversaryGregorian: run.assessmentDateGregorian, zakatAnniversaryHijri: run.assessmentDateHijri },
        });
      }
    }
    return updated;
  }

  private serializeRun<T extends { netZakatableKobo: bigint | null; zakatDueKobo: bigint | null }>(run: T) {
    return { ...run, netZakatableKobo: run.netZakatableKobo?.toString() ?? null, zakatDueKobo: run.zakatDueKobo?.toString() ?? null };
  }

  // ==========================================================================
  // Scheduled jobs (invoked by SchedulerService — invariant 26c: "nisab-
  // breach monitor prompts STAFF"; "annual reminder notifications at the
  // client's zakat anniversary"). Both are staff-directed: Notification's
  // recipientUserId FKs to AppUser only (no portal-persona recipient exists
  // in this codebase), consistent with this module's staff-mediated design
  // (advisors act on the client's behalf, per the READ+RESPOND boundary
  // documented at the top of this file).
  // ==========================================================================
  private async resolveAdvisorRecipients(investorId: string): Promise<string[]> {
    const wmProfile = await this.prisma.wmClientProfile.findUnique({ where: { investorId } });
    if (wmProfile?.advisorUserId) return [wmProfile.advisorUserId];
    // No assigned WM advisor (a Zakat-only, non-WM client) — broadcast to
    // every WM_ADVISOR-role holder, the only staff population this codebase
    // grants ZAKAT_ADVISORY to (see prisma/seed.ts).
    const holders = await this.prisma.userRole.findMany({ where: { roleCode: 'WM_ADVISOR' }, select: { userId: true } });
    return holders.map((h) => h.userId);
  }

  // De-duplication: skip a client that already has an OPEN assessment in
  // progress (DRAFT/CLIENT_AGREED/AWAITING_SHARIAH_CERTIFICATION) — the
  // monitor's job is to START an engagement, not to nag daily once one is
  // already underway.
  async runNisabBreachMonitor(): Promise<{ checked: number; prompted: number }> {
    const subs = await this.listActiveSubscriptions();
    let prompted = 0;
    for (const sub of subs) {
      const { breached } = await this.isNisabBreached(sub.investorId);
      if (!breached) continue;
      const openRun = await this.prisma.zakatAssessmentRun.findFirst({
        where: { investorId: sub.investorId, status: { in: ['DRAFT', 'CLIENT_AGREED', 'AWAITING_SHARIAH_CERTIFICATION'] } },
      });
      if (openRun) continue;
      const recipients = await this.resolveAdvisorRecipients(sub.investorId);
      for (const recipientUserId of recipients) {
        await this.notification.create({
          recipientUserId,
          type: 'GENERIC',
          title: 'Zakat nisab threshold breached',
          body: `Investor ${sub.investorId} now exceeds the governed Zakat nisab threshold — present the Zakat Assessment Sandbox.`,
          linkPath: '/zakat',
        });
      }
      prompted++;
    }
    return { checked: subs.length, prompted };
  }

  private isAnniversaryToday(anniversary: Date, now: Date): boolean {
    return anniversary.getUTCMonth() === now.getUTCMonth() && anniversary.getUTCDate() === now.getUTCDate();
  }

  async runAnnualReminderSweep(scheduledFor: Date): Promise<{ checked: number; reminded: number }> {
    const subs = await this.prisma.zakatClientSubscription.findMany({
      where: { isActive: true, zakatAnniversaryGregorian: { not: null } },
    });
    let reminded = 0;
    for (const sub of subs) {
      if (!this.isAnniversaryToday(sub.zakatAnniversaryGregorian!, scheduledFor)) continue;
      const recipients = await this.resolveAdvisorRecipients(sub.investorId);
      for (const recipientUserId of recipients) {
        await this.notification.create({
          recipientUserId,
          type: 'GENERIC',
          title: 'Zakat annual anniversary due',
          body: `Investor ${sub.investorId}'s Zakat anniversary is today (${sub.zakatAnniversaryHijri ?? 'Hijri date not recorded'}) — schedule the annual reassessment.`,
          linkPath: '/zakat',
        });
      }
      reminded++;
    }
    return { checked: subs.length, reminded };
  }

  // ==========================================================================
  // Read models
  // ==========================================================================
  async listAssessmentsForInvestor(investorId: string) {
    const runs = await this.prisma.zakatAssessmentRun.findMany({ where: { investorId }, orderBy: { createdAt: 'desc' } });
    return runs.map((r) => this.serializeRun(r));
  }

  async getAssessmentDetail(runId: string, investorId: string) {
    const run = await this.prisma.zakatAssessmentRun.findUniqueOrThrow({ where: { id: runId }, include: { items: true } });
    if (run.investorId !== investorId) {
      throw new ZakatError(`Cross-client access denied: assessment ${runId} does not belong to investor ${investorId}.`);
    }
    return { run: this.serializeRun(run), items: run.items.map((i) => this.serializeItem(i)) };
  }

  async getAssessmentDetailStaff(runId: string) {
    const run = await this.prisma.zakatAssessmentRun.findUniqueOrThrow({ where: { id: runId }, include: { items: true } });
    return { run: this.serializeRun(run), items: run.items.map((i) => this.serializeItem(i)) };
  }

  async listPendingCertifications(actorUserId: string) {
    await this.assertCapability(actorUserId, 'ZAKAT_CERTIFICATION', 'VIEW', 'list assessments awaiting Shariah certification');
    const runs = await this.prisma.zakatAssessmentRun.findMany({
      where: { status: 'AWAITING_SHARIAH_CERTIFICATION' },
      orderBy: { createdAt: 'asc' },
      include: { subscription: { include: { investor: { select: { fullLegalName: true } } } } },
    });
    return runs.map((r) => this.serializeRun(r));
  }

  // Canonical Net Zakatable formula (invariant 71(a)(i), CORRECTING the v1.1.0
  // candidate's CF-01 defect): this is the ONE formula both the OFFICIAL
  // persisted computeAssessment() above AND the portal/advisory preview
  // below use -- there is no longer a second, looser "official" formula
  // that counted unverified items. A DECLARED (not yet VERIFIED) item can
  // NEVER alter netZakatableKobo, zakatDueKobo, or any other persisted
  // assessment figure; only verificationTag === 'VERIFIED' items count.
  // (A workflow-REJECTED item also never counts -- it simply never reaches
  // VERIFIED -- no special case needed in this formula itself; the
  // REJECTED-vs-still-pending distinction only matters to
  // submitForCertification's outstanding-items gate above.) The PRIOR
  // revision of this comment described a deliberate two-formula split
  // (official = every declared item, preview = verified-only) as a
  // documented judgment call -- that was the encoded defect the audit's
  // CF-01 finding named: invariant 70(h)(v)'s own adversarial line
  // ("unverified declared items excluded from the verdict") was being
  // honored only for the preview, never for the persisted/certified figure.
  private computeVerifiedNetZakatableKobo(oneSeventeenTotalKobo: string, items: { scheduleType: string; zakatability: string; verificationTag: string; amountKobo: bigint }[]): bigint {
    let netKobo = BigInt(oneSeventeenTotalKobo);
    for (const item of items) {
      if (item.zakatability !== 'ZAKATABLE') continue;
      if (item.verificationTag !== 'VERIFIED') continue; // adversarial (v): unverified declared items excluded from the verdict
      if (item.scheduleType === 'LIABILITY') netKobo -= item.amountKobo;
      else netKobo += item.amountKobo;
    }
    return netKobo < 0n ? 0n : netKobo;
  }

  // ==========================================================================
  // Portal Zakat tab read model (invariant 70(h)(ii)): charts+tables over
  // the SAME engine data getAssessmentDetail/computeAssessment already
  // expose, shaped for the portal's asset-composition/nisab/zakat-due
  // display. Ownership is inherent (own investorId from the session) --
  // gated on isZakatTabActive, never a client-side flag (adversarial (v):
  // "tab invisible before approval").
  // ==========================================================================
  async getZakatPositionForClient(investorId: string) {
    const sub = await this.prisma.zakatClientSubscription.findUnique({ where: { investorId } });
    if (!sub?.isActive) {
      throw new ZakatError(`Zakat Computation is not active for investor ${investorId} — request the service and wait for staff approval first.`);
    }
    const nisab = await this.isNisabBreached(investorId);
    const latestRun = await this.prisma.zakatAssessmentRun.findFirst({
      where: { investorId },
      orderBy: { createdAt: 'desc' },
      include: { items: true },
    });

    if (!latestRun) {
      // No assessment sandbox exists yet (the advisor hasn't opened one) --
      // the portal still renders a live One17-holdings-only snapshot
      // (invariant 70(h)(ii): "platform holdings auto-included per engine
      // provisions") rather than an empty page, reusing
      // combinedBookSnapshot's own read-only total with zero declared
      // items and no persisted run — no computation is invented here.
      const snapshot = await this.wm.combinedBookSnapshot(investorId);
      return {
        subscription: { isActive: sub.isActive, rateBasisElection: sub.rateBasisElection },
        assessment: null,
        oneSeventeenTotalKobo: snapshot.totalKobo,
        composition: [{ scheduleType: 'ONE17_CUSTODY', zakatability: 'ZAKATABLE' as const, amountKobo: snapshot.totalKobo, verificationTag: 'VERIFIED' as const, declarationSource: null }],
        nisab,
        verifiedNetZakatableKobo: snapshot.totalKobo,
        officialNetZakatableKobo: null,
        officialZakatDueKobo: null,
        items: [],
      };
    }

    const oneSeventeenTotalKobo = (latestRun.oneSeventeenBalancesSnapshot as any as { totalKobo: string }).totalKobo;
    const verifiedNetZakatableKobo = this.computeVerifiedNetZakatableKobo(oneSeventeenTotalKobo, latestRun.items);
    const composition = [
      { scheduleType: 'ONE17_CUSTODY', zakatability: 'ZAKATABLE' as const, amountKobo: oneSeventeenTotalKobo, verificationTag: 'VERIFIED' as const, declarationSource: null },
      ...latestRun.items.map((it) => ({ scheduleType: it.scheduleType as string, zakatability: it.zakatability as string, amountKobo: it.amountKobo.toString(), verificationTag: it.verificationTag as string, declarationSource: it.declarationSource as string })),
    ];

    return {
      subscription: { isActive: sub.isActive, rateBasisElection: sub.rateBasisElection },
      assessment: this.serializeRun(latestRun),
      oneSeventeenTotalKobo,
      composition,
      nisab,
      verifiedNetZakatableKobo: verifiedNetZakatableKobo.toString(),
      officialNetZakatableKobo: latestRun.netZakatableKobo?.toString() ?? null,
      officialZakatDueKobo: latestRun.zakatDueKobo?.toString() ?? null,
      items: latestRun.items.map((i) => this.serializeItem(i)),
    };
  }

  // ==========================================================================
  // Portfolio Advisory Feed (invariant 70(h)(iv)) — gated on the SEPARATE
  // ZAKAT_PORTFOLIO_ADVISORY_FEED capability (never ZAKAT_ADVISORY itself),
  // so Portfolio seats structurally cannot reach the raw declared-item
  // endpoints. Returns aggregate SIZE + MIX only — no item id/description/
  // date ever leaves this method (adversarial (v): "Portfolio sees
  // aggregates only"). Filters to verificationTag: 'VERIFIED', non-LIABILITY
  // items only, per the charter's own definition of "asset size" here —
  // this is an advisory-targeting signal (how big, in what), not a zakat
  // liability computation, so it deliberately does NOT apply the
  // zakatability/DOUBTFUL/liability-netting rules computeAssessment uses.
  // ==========================================================================
  async getPortfolioAdvisoryFeed(investorId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'ZAKAT_PORTFOLIO_ADVISORY_FEED', 'VIEW', "view a client's Zakat portfolio advisory feed");
    const sub = await this.prisma.zakatClientSubscription.findUnique({ where: { investorId } });
    if (!sub?.isActive) {
      return { isActive: false, totalAssetSizeKobo: '0', mixByScheduleType: {} as Record<string, string> };
    }
    const snapshot = await this.wm.combinedBookSnapshot(investorId);
    const oneSeventeenTotalKobo = BigInt(snapshot.totalKobo);
    const latestRun = await this.prisma.zakatAssessmentRun.findFirst({ where: { investorId }, orderBy: { createdAt: 'desc' } });

    const mix: Record<string, bigint> = { ONE17_CUSTODY: oneSeventeenTotalKobo };
    if (latestRun) {
      const verifiedItems = await this.prisma.zakatDeclaredItem.findMany({
        where: { zakatAssessmentRunId: latestRun.id, verificationTag: 'VERIFIED', scheduleType: { not: 'LIABILITY' } },
      });
      for (const item of verifiedItems) {
        mix[item.scheduleType] = (mix[item.scheduleType] ?? 0n) + item.amountKobo;
      }
    }
    const totalAssetSizeKobo = Object.values(mix).reduce((s, v) => s + v, 0n);
    return {
      isActive: true,
      totalAssetSizeKobo: totalAssetSizeKobo.toString(),
      mixByScheduleType: Object.fromEntries(Object.entries(mix).map(([k, v]) => [k, v.toString()])),
    };
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'zakat_activity', entityId: activity, after: { functionCode, level } });
      throw new ZakatError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}
