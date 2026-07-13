import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { DelegationService } from '../delegation/delegation.service';
import { DocumentService } from '../document/document.service';
import { ScreeningGatewayService } from '../screening-gateway/screening-gateway.service';
import { Prisma } from '../../generated/prisma/client';
import {
  OnboardCounterpartyInput,
  RecordCounterpartyRiskAssessmentInput,
  RecordCounterpartyIc1ReviewInput,
  RecordCounterpartyRiskReviewInput,
  RecordCounterpartyMdDecisionInput,
  RecordCounterpartyIc2ReviewInput,
  RequestCounterpartyRestructureInput,
  DecideCounterpartyRestructureInput,
  SubmitCounterpartyEnquiryInput,
  SubmitFacilityApplicationInput,
  FacilityApplicationProgress,
  DraftInvestmentMemoInput,
  CounterpartyLifecycleError,
} from './counterparty.types';

// Invariant 27(b): digitizes the Investee Onboarding Template as the
// counterparty onboarding workflow — Portfolio Management captures Step 1
// -> Compliance's 8-metric risk assessment (Step 2) -> IC1 -> Risk ->
// [MD] -> IC2 (Steps 3/5/6/7), mirroring InvestorService's graduated
// case-review chain (same template family, same shared ONBOARDING_*
// capabilities) but as a single continuous flow — investees have no
// Stage-1/Stage-2 split, since there is no "deposit before full KYC"
// concept for a counterparty the way there is for an investor.
@Injectable()
export class CounterpartyService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly workflow: WorkflowEngineService,
    private readonly delegation: DelegationService,
    private readonly documents: DocumentService,
    private readonly screeningGateway: ScreeningGatewayService,
  ) {}

  // Invariant 44(e) (CHECK10): the config-defined applicationType key this
  // module's own checklist rows and DocumentRegisterEntry.entityType both
  // use for facility applications -- one constant, not a string repeated
  // at every call site.
  static readonly FACILITY_APPLICATION_TYPE = 'FACILITY_APPLICATION';
  static readonly FACILITY_APPLICATION_ENTITY_TYPE = 'counterparty_facility_application';

  async onboard(input: OnboardCounterpartyInput) {
    await this.assertCapability(
      input.onboardedByUserId,
      'COUNTERPARTY_ONBOARDING',
      'INITIATE',
      'onboard a counterparty (investee)',
    );
    if (!input.creditBureauConsent) {
      throw new CounterpartyLifecycleError(
        'Credit-bureau consent is required at Step 1 (invariant 27b addition, per the payment-reminders process doc).',
      );
    }

    const counterparty = await this.prisma.counterparty.create({
      data: {
        legalName: input.legalName,
        counterpartyType: input.counterpartyType,
        rcNumber: input.rcNumber,
        country: input.country,
        purposeOfFinancing: input.purposeOfFinancing,
        amountSoughtKobo: input.amountSoughtKobo,
        expectedSourceOfRepayment: input.expectedSourceOfRepayment,
        creditBureauConsentAt: new Date(),
        shariahCertRef: input.shariahCertRef,
        shariahCertExpiry: input.shariahCertExpiry,
        contactEmail: input.contactEmail,
        onboardingStatus: 'DRAFT',
        onboardedByUserId: input.onboardedByUserId,
      },
    });

    await this.audit.record({
      actorUserId: input.onboardedByUserId,
      action: 'CREATE',
      entityType: 'counterparty',
      entityId: counterparty.id,
      after: { legalName: input.legalName, purposeOfFinancing: input.purposeOfFinancing, amountSoughtKobo: input.amountSoughtKobo.toString() },
    });

    return this.serializeCounterparty(counterparty);
  }

  // Step 2b's exact aggregation rule (Investee Onboarding Template §2b) —
  // identical formula to the Investor template's, just over 8 metrics
  // instead of 9 (implementing the spec verbatim, invariant 1).
  private static computeAccumulativeRiskProfile(
    grades: { grade: 'LOW' | 'MEDIUM' | 'HIGH' }[],
  ): 'LOW' | 'MEDIUM_LOW' | 'HIGH' {
    const highCount = grades.filter((g) => g.grade === 'HIGH').length;
    const mediumCount = grades.filter((g) => g.grade === 'MEDIUM').length;
    if (highCount >= 1 || mediumCount >= 6) return 'HIGH';
    if (mediumCount >= 3) return 'MEDIUM_LOW';
    return 'LOW';
  }

  async recordComplianceRiskAssessment(input: RecordCounterpartyRiskAssessmentInput) {
    await this.assertCapability(
      input.assessedByUserId,
      'SCREENING_PERFORM',
      'INITIATE',
      'record a counterparty compliance risk assessment',
    );
    if (input.riskMetricGrades.length !== 8) {
      throw new CounterpartyLifecycleError(
        `Risk assessment requires all 8 metrics graded — received ${input.riskMetricGrades.length} (Investee Onboarding Template §2b).`,
      );
    }

    const profile = CounterpartyService.computeAccumulativeRiskProfile(input.riskMetricGrades);
    const eddRequired = profile === 'HIGH';

    const onboardingCase = await this.prisma.counterpartyOnboardingCase.upsert({
      where: { counterpartyId: input.counterpartyId },
      create: {
        counterpartyId: input.counterpartyId,
        riskMetricGrades: input.riskMetricGrades as unknown as Prisma.InputJsonValue,
        pepSanctionsGrid: input.pepSanctionsGrid as unknown as Prisma.InputJsonValue,
        accumulativeRiskProfile: profile,
        eddRequired,
        complianceObservations: input.complianceObservations,
        complianceAssessedByUserId: input.assessedByUserId,
        complianceAssessedAt: new Date(),
      },
      update: {
        riskMetricGrades: input.riskMetricGrades as unknown as Prisma.InputJsonValue,
        pepSanctionsGrid: input.pepSanctionsGrid as unknown as Prisma.InputJsonValue,
        accumulativeRiskProfile: profile,
        eddRequired,
        complianceObservations: input.complianceObservations,
        complianceAssessedByUserId: input.assessedByUserId,
        complianceAssessedAt: new Date(),
      },
    });

    await this.prisma.counterparty.update({
      where: { id: input.counterpartyId },
      data: { onboardingStatus: 'IN_REVIEW' },
    });

    await this.audit.record({
      actorUserId: input.assessedByUserId,
      action: 'CREATE',
      entityType: 'counterparty_onboarding_case',
      entityId: onboardingCase.id,
      after: { counterpartyId: input.counterpartyId, accumulativeRiskProfile: profile, eddRequired },
    });

    return onboardingCase;
  }

  // Invariant 51(b-vii) (CHECK13): counterparty-side mirror of
  // InvestorService.recordPeriodicReview -- clears the due state
  // InvestorComplianceSweepService's runKycPeriodicReviewSweep detects.
  async recordPeriodicReview(counterpartyId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'SCREENING_PERFORM', 'INITIATE', 'record a KYC periodic review');
    const onboardingCase = await this.prisma.counterpartyOnboardingCase.findUniqueOrThrow({ where: { counterpartyId } });
    const updated = await this.prisma.counterpartyOnboardingCase.update({
      where: { counterpartyId },
      data: { lastPeriodicReviewAt: new Date() },
    });
    await this.audit.record({
      actorUserId,
      action: 'UPDATE',
      entityType: 'counterparty_onboarding_case',
      entityId: onboardingCase.id,
      after: { lastPeriodicReviewAt: updated.lastPeriodicReviewAt },
    });
    return updated;
  }

  async submitOnboardingCaseForReview(counterpartyId: string, initiatedByUserId: string) {
    const onboardingCase = await this.prisma.counterpartyOnboardingCase.findUniqueOrThrow({
      where: { counterpartyId },
    });
    if (!onboardingCase.accumulativeRiskProfile) {
      throw new CounterpartyLifecycleError(
        'No accumulative risk profile on file — recordComplianceRiskAssessment must run before the case can be submitted for review (Step 2b/4).',
      );
    }

    const scenario = onboardingCase.accumulativeRiskProfile === 'HIGH' ? 'HIGH_RISK' : 'LOW_MEDIUM_RISK';

    const instance = await this.workflow.initiate({
      workflowTypeCode: 'COUNTERPARTY_ONBOARDING_CASE_REVIEW',
      entityType: 'counterparty_onboarding_case',
      entityId: onboardingCase.id,
      initiatedByUserId,
      scenario,
    });

    await this.prisma.counterpartyOnboardingCase.update({
      where: { counterpartyId },
      data: { workflowInstanceId: instance.id },
    });

    return instance;
  }

  async recordIc1Review(input: RecordCounterpartyIc1ReviewInput) {
    await this.prisma.counterpartyOnboardingCase.update({
      where: { workflowInstanceId: input.workflowInstanceId },
      data: { ic1Checklist: input.checklist as unknown as Prisma.InputJsonValue, ic1Notes: input.notes },
    });
    return input.pass
      ? this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId)
      : this.rejectAndDecline(input.workflowInstanceId, input.approverUserId, input.notes);
  }

  // Same non-gating shape as InvestorService.recordRiskReview: the Risk
  // Department's recommendation is data for MD's decision on High-Risk
  // files (never a unilateral decline here), and always advances. The
  // approved exposure limit (invariant 27b, feeds control C20) is written
  // onto Counterparty.enterpriseLimitKobo when supplied.
  async recordRiskReview(input: RecordCounterpartyRiskReviewInput) {
    const onboardingCase = await this.prisma.counterpartyOnboardingCase.update({
      where: { workflowInstanceId: input.workflowInstanceId },
      data: {
        eddChecklist: input.eddChecklist as unknown as Prisma.InputJsonValue,
        eddRecommendation: input.eddRecommendation,
        eddConditionsOrBasis: input.eddConditionsOrBasis,
        periodicReviewFrequency: input.periodicReviewFrequency,
        riskNotes: input.riskNotes,
      },
    });
    if (input.approvedExposureLimitKobo !== undefined) {
      await this.prisma.counterparty.update({
        where: { id: onboardingCase.counterpartyId },
        data: { enterpriseLimitKobo: input.approvedExposureLimitKobo, limitCurrency: 'NGN' },
      });
    }
    return this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
  }

  async recordMdDecision(input: RecordCounterpartyMdDecisionInput) {
    await this.prisma.counterpartyOnboardingCase.update({
      where: { workflowInstanceId: input.workflowInstanceId },
      data: { mdDecision: input.decision, mdConditionsOrReason: input.conditionsOrReason },
    });
    return input.decision === 'APPROVED'
      ? this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId)
      : this.rejectAndDecline(input.workflowInstanceId, input.approverUserId, input.conditionsOrReason);
  }

  // Step 7 (IC2 consolidated): SATISFACTORY is the workflow's final step —
  // reaching APPROVED here is what flips onboardingStatus to
  // COMPLETE_APPROVED, unlocking deployment (the DB trigger checks exactly
  // this field).
  async recordIc2Review(input: RecordCounterpartyIc2ReviewInput) {
    const onboardingCase = await this.prisma.counterpartyOnboardingCase.update({
      where: { workflowInstanceId: input.workflowInstanceId },
      data: {
        ic2Checklist: input.checklist as unknown as Prisma.InputJsonValue,
        ic2Notes: input.notes,
        ic2Outcome: input.outcome,
      },
    });

    if (input.outcome === 'UNSATISFACTORY') {
      return this.rejectAndDecline(input.workflowInstanceId, input.approverUserId, input.notes);
    }

    // Invariant 72(b): "onboarding screening (investor AND counterparty)."
    // Closes the gap CHECK26's own research confirmed -- pepSanctionsGrid
    // was previously inert JSON, never gating anything. An unadjudicated
    // (OPEN) or TRUE_MATCH-adjudicated sanctions hit refuses IC2 approval
    // here, the counterparty-side equivalent of InvestorService.
    // submitForKycApproval's own screening block. ensureScreened runs the
    // actual fuzzy screen first (if none exists yet and LOCAL_LISTS is
    // active), mirroring the investor-side wiring.
    const counterparty = await this.prisma.counterparty.findUniqueOrThrow({ where: { id: onboardingCase.counterpartyId }, select: { legalName: true } });
    await this.screeningGateway.ensureScreened('COUNTERPARTY', onboardingCase.counterpartyId, counterparty.legalName, input.approverUserId);
    const screeningBlock = await this.screeningGateway.hasBlockingScreeningResult('COUNTERPARTY', onboardingCase.counterpartyId);
    if (screeningBlock.blocked) {
      throw new CounterpartyLifecycleError(
        `Screening Gateway: ${screeningBlock.reason} (invariant 72(b) — IC2 cannot approve until every hit is adjudicated).`,
      );
    }

    const updated = await this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
    if (updated.status === 'APPROVED') {
      await this.prisma.counterparty.update({
        where: { id: onboardingCase.counterpartyId },
        data: { onboardingStatus: 'COMPLETE_APPROVED' },
      });
      await this.audit.record({
        actorUserId: input.approverUserId,
        action: 'UPDATE',
        entityType: 'counterparty',
        entityId: onboardingCase.counterpartyId,
        after: { onboardingStatus: 'COMPLETE_APPROVED' },
      });
    }
    return updated;
  }

  private async rejectAndDecline(workflowInstanceId: string, approverUserId: string, notes?: string) {
    const rejected = await this.workflow.reject(workflowInstanceId, approverUserId, notes);
    const onboardingCase = await this.prisma.counterpartyOnboardingCase.findUnique({ where: { workflowInstanceId } });
    if (onboardingCase) {
      await this.prisma.counterparty.update({
        where: { id: onboardingCase.counterpartyId },
        data: { onboardingStatus: 'DECLINED' },
      });
    }
    return rejected;
  }

  // BigInt fields (amountSoughtKobo/enterpriseLimitKobo/forcedSaleValueKobo)
  // never cross the HTTP boundary raw — Nest's JSON serializer throws on
  // BigInt (same reason every other service in this codebase calls
  // .toString() before returning kobo values, e.g. WmService).
  private serializeCounterparty<T extends { amountSoughtKobo: bigint | null; enterpriseLimitKobo: bigint | null; forcedSaleValueKobo: bigint | null }>(cp: T) {
    return {
      ...cp,
      amountSoughtKobo: cp.amountSoughtKobo?.toString() ?? null,
      enterpriseLimitKobo: cp.enterpriseLimitKobo?.toString() ?? null,
      forcedSaleValueKobo: cp.forcedSaleValueKobo?.toString() ?? null,
    };
  }

  async getCounterparty(id: string) {
    const cp = await this.prisma.counterparty.findUniqueOrThrow({ where: { id }, include: { onboardingCase: true } });
    return this.serializeCounterparty(cp);
  }

  async getCounterpartyByWorkflowInstance(workflowInstanceId: string) {
    return this.prisma.counterpartyOnboardingCase.findUnique({ where: { workflowInstanceId } });
  }

  async listCounterparties() {
    const rows = await this.prisma.counterparty.findMany({ orderBy: { createdAt: 'desc' }, include: { onboardingCase: true } });
    return rows.map((cp) => this.serializeCounterparty(cp));
  }

  // ==========================================================================
  // Invariant 28(e): investee/counterparty portal persona. Every method here
  // is scoped by the counterpartyId taken from the portal session — never a
  // path/body parameter — mirroring PortalWmController's cross-client-leak
  // discipline. "Repayment schedules + timelines" renders as actual
  // transaction HISTORY (Txn rows tagged to this counterparty), not a
  // fabricated projected schedule — that's invariant 25(4)'s own,
  // not-yet-built obligations-calendar engine (Check-6); faking one here
  // would conflict with that future design.
  // ==========================================================================
  async getPortalDashboard(counterpartyId: string) {
    const counterparty = await this.prisma.counterparty.findUniqueOrThrow({ where: { id: counterpartyId } });
    const [transactions, documents, communications, restructureRequests, complaints, facilityApplications, repaymentObligations] = await Promise.all([
      this.prisma.txn.findMany({ where: { counterpartyId }, orderBy: { valueDate: 'desc' }, take: 100 }),
      this.prisma.documentRegisterEntry.findMany({ where: { entityType: 'counterparty', entityId: counterpartyId }, orderBy: { uploadedAt: 'desc' } }),
      this.prisma.clientCommunication.findMany({ where: { counterpartyId }, orderBy: { occurredAt: 'desc' } }),
      this.prisma.counterpartyRestructureRequest.findMany({ where: { counterpartyId }, orderBy: { createdAt: 'desc' } }),
      this.prisma.complaint.findMany({ where: { counterpartyId }, orderBy: { createdAt: 'desc' } }),
      this.listFacilityApplicationsForPortal(counterpartyId),
      // Invariant 25(4)'s obligations-calendar engine (Check-6, now built) —
      // the due-date-bearing installments the payment-reminder ladder keys
      // off, surfaced so the client can see what's outstanding and
      // reference the right obligationId on a restructure request.
      this.prisma.counterpartyRepaymentObligation.findMany({ where: { counterpartyId }, orderBy: { dueDate: 'desc' } }),
    ]);
    const transactionSummary = {
      count: transactions.length,
      totalAmountKobo: transactions.reduce((s, t) => s + t.amountKobo, 0n).toString(),
    };
    return {
      profile: { counterpartyId: counterparty.id, legalName: counterparty.legalName, contactEmail: counterparty.contactEmail },
      transactionSummary,
      transactions: transactions.map((t) => ({ ...t, amountKobo: t.amountKobo.toString(), unitPriceKobo: t.unitPriceKobo?.toString() ?? null })),
      documents,
      communications,
      restructureRequests,
      complaints,
      facilityApplications,
      repaymentObligations: repaymentObligations.map((o) => ({ ...o, amountKobo: o.amountKobo.toString() })),
      restructuringRequestsEnabled: counterparty.restructuringRequestsEnabled,
    };
  }

  // PUBLIC (portal-safe) — no capability gate; the requester is a portal
  // principal, not an AppUser, so there is no capability row to check.
  async submitEnquiry(input: SubmitCounterpartyEnquiryInput) {
    return this.prisma.clientCommunication.create({
      data: {
        counterpartyId: input.counterpartyId,
        channel: 'PORTAL_MESSAGE',
        direction: 'INBOUND',
        subject: input.subject,
        summary: input.message,
        routedToFunctionCode: input.routedToFunctionCode ?? 'PORTFOLIO_MGMT',
        occurredAt: new Date(),
      },
    });
  }

  // PUBLIC (portal-safe). Scoped defense-in-depth checks mirror the DB-
  // enforced limits (invariant 25(4)): a partial unique index on
  // counterparty_restructure_request(obligation_id) WHERE status='APPROVED'
  // AND workflow_instance_id IS NULL, plus a CHECK on extension_months — so
  // the portal gets a clear message rather than a raw constraint-violation.
  // The pre-existing counterparty-WIDE check below (obligationId absent)
  // predates the per-obligation concept and is left in place unmodified for
  // requests that still don't reference one.
  async requestRestructure(input: RequestCounterpartyRestructureInput) {
    const counterparty = await this.prisma.counterparty.findUniqueOrThrow({ where: { id: input.counterpartyId } });
    if (!counterparty.restructuringRequestsEnabled) {
      throw new CounterpartyLifecycleError('Extension/restructuring requests are disabled for this account — contact your Portfolio Management officer.');
    }
    if (input.requestType === 'EXTENSION' && (input.extensionMonths === undefined || input.extensionMonths > 1)) {
      throw new CounterpartyLifecycleError('An extension request cannot exceed 1 month (invariant 28e).');
    }
    if (input.obligationId) {
      const priorApproved = await this.prisma.counterpartyRestructureRequest.findFirst({
        where: { obligationId: input.obligationId, status: 'APPROVED', workflowInstanceId: null },
      });
      if (priorApproved) {
        throw new CounterpartyLifecycleError('This transaction has already used its one restructure (invariant 25(4) — max 1 restructure per transaction). A further restructure requires the exception workflow.');
      }
    } else if (input.requestType === 'RESTRUCTURE') {
      const priorApproved = await this.prisma.counterpartyRestructureRequest.findFirst({
        where: { counterpartyId: input.counterpartyId, requestType: 'RESTRUCTURE', status: 'APPROVED' },
      });
      if (priorApproved) {
        throw new CounterpartyLifecycleError('This account has already used its one restructure (invariant 28e — max 1 restructure).');
      }
    }
    return this.prisma.counterpartyRestructureRequest.create({
      data: {
        counterpartyId: input.counterpartyId,
        obligationId: input.obligationId,
        requestType: input.requestType,
        extensionMonths: input.requestType === 'EXTENSION' ? input.extensionMonths : null,
        reason: input.reason,
        status: 'PENDING',
      },
    });
  }

  // Staff decision — direct capability check, not WorkflowEngineService:
  // the requester (a portal principal) has no AppUser/capability row, so
  // the generic engine's initiator-must-hold-INITIATE check cannot apply
  // here (see the schema comment on CounterpartyRestructureRequest).
  async decideRestructureRequest(input: DecideCounterpartyRestructureInput) {
    await this.assertCapability(input.actorUserId, 'COUNTERPARTY_RESTRUCTURE_REQUEST', 'APPROVE', 'decide a counterparty extension/restructuring request');
    const request = await this.prisma.counterpartyRestructureRequest.findUniqueOrThrow({ where: { id: input.requestId } });
    if (request.status !== 'PENDING') {
      throw new CounterpartyLifecycleError(`Request ${input.requestId} is already ${request.status} — cannot decide it again.`);
    }
    if (input.decision === 'APPROVED' && request.obligationId) {
      const priorApproved = await this.prisma.counterpartyRestructureRequest.findFirst({
        where: { obligationId: request.obligationId, status: 'APPROVED', workflowInstanceId: null },
      });
      if (priorApproved) {
        throw new CounterpartyLifecycleError(
          `Transaction ${request.obligationId} already has an APPROVED restructure — invariant 25(4)'s 1-per-transaction limit is DB-enforced. Use initiateRestructureException() to route this through the COUNTERPARTY_RESTRUCTURE_EXCEPTION workflow instead.`,
        );
      }
    }
    const updated = await this.prisma.counterpartyRestructureRequest.update({
      where: { id: input.requestId },
      data: { status: input.decision, decidedByUserId: input.actorUserId, decisionNotes: input.notes, decidedAt: new Date() },
    });
    await this.audit.record({
      actorUserId: input.actorUserId,
      action: 'UPDATE',
      entityType: 'counterparty_restructure_request',
      entityId: request.id,
      after: { status: input.decision },
    });
    return updated;
  }

  // Invariant 25(4): "exceeding requires the exception workflow, not an
  // override." Only callable once the DB-enforced limit has actually been
  // hit (same check decideRestructureRequest itself just performed) —
  // routing a request through here when it isn't actually over the limit
  // would defeat the point of a limit that's supposed to be the normal path.
  async initiateRestructureException(requestId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'COUNTERPARTY_RESTRUCTURE_REQUEST', 'INITIATE', 'initiate a counterparty restructure exception');
    const request = await this.prisma.counterpartyRestructureRequest.findUniqueOrThrow({ where: { id: requestId } });
    if (request.status !== 'PENDING') throw new CounterpartyLifecycleError(`Request ${requestId} is already ${request.status}.`);
    if (!request.obligationId) throw new CounterpartyLifecycleError(`Request ${requestId} has no obligationId — the exception workflow only applies to obligation-scoped requests.`);
    const priorApproved = await this.prisma.counterpartyRestructureRequest.findFirst({
      where: { obligationId: request.obligationId, status: 'APPROVED', workflowInstanceId: null },
    });
    if (!priorApproved) {
      throw new CounterpartyLifecycleError(`Transaction ${request.obligationId} has not yet used its one restructure — decide this request normally via decideRestructureRequest(), the exception workflow is for requests that exceed the limit.`);
    }
    const workflowInstance = await this.workflow.initiate({
      workflowTypeCode: 'COUNTERPARTY_RESTRUCTURE_EXCEPTION',
      entityType: 'counterparty_restructure_request',
      entityId: request.id,
      initiatedByUserId: actorUserId,
      scenario: 'STANDARD',
    });
    const updated = await this.prisma.counterpartyRestructureRequest.update({ where: { id: requestId }, data: { workflowInstanceId: workflowInstance.id } });
    await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'counterparty_restructure_request', entityId: requestId, after: { workflowInstanceId: workflowInstance.id } });
    return { request: updated, workflowInstance };
  }

  // Dispatched only via the generic Workflow Inbox — the approval record IS
  // the exception grant. workflowInstanceId is already set on this row (set
  // by initiateRestructureException above), so the partial unique index's
  // own "AND workflow_instance_id IS NULL" clause structurally excludes it
  // from the 1-per-obligation constraint — a genuine second APPROVED row
  // for the same obligation, by construction, never a code-level bypass.
  async approveRestructureException(workflowInstanceId: string, approverUserId: string) {
    const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
    if (updated.status === 'APPROVED') {
      const request = await this.prisma.counterpartyRestructureRequest.update({
        where: { workflowInstanceId },
        data: { status: 'APPROVED', decidedByUserId: approverUserId, decidedAt: new Date() },
      });
      await this.audit.record({ actorUserId: approverUserId, action: 'APPROVE', entityType: 'counterparty_restructure_request', entityId: request.id, after: { status: 'APPROVED', exception: true } });
    }
    return updated;
  }

  async listPendingRestructureRequests() {
    return this.prisma.counterpartyRestructureRequest.findMany({ where: { status: 'PENDING' }, orderBy: { createdAt: 'asc' } });
  }

  async toggleRestructuringFeature(counterpartyId: string, enabled: boolean, actorUserId: string) {
    await this.assertCapability(actorUserId, 'COUNTERPARTY_RESTRUCTURE_REQUEST', 'INITIATE', 'toggle the extension/restructuring feature for a counterparty');
    const updated = await this.prisma.counterparty.update({ where: { id: counterpartyId }, data: { restructuringRequestsEnabled: enabled } });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'counterparty', entityId: counterpartyId, after: { restructuringRequestsEnabled: enabled } });
    return updated;
  }

  // Invariant 36(a): "file-ownership as data" — the officer who processed/
  // manages this investee's application, so system-generated deliverables
  // (payment-reminder call tasks, credit-bureau sync tasks) route to the
  // real owner. Same capability as onboarding itself (PM's own tool).
  async assignFileManagingOfficer(counterpartyId: string, officerUserId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'COUNTERPARTY_ONBOARDING', 'INITIATE', 'assign a file-managing officer to a counterparty');
    const updated = await this.prisma.counterparty.update({ where: { id: counterpartyId }, data: { fileManagingOfficerUserId: officerUserId } });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'counterparty', entityId: counterpartyId, after: { fileManagingOfficerUserId: officerUserId } });
    return updated;
  }

  // Candidate roster for the file-managing-officer picker — PORT_OFF/
  // PORT_MGR role holders who also have a linked Employee record (Task.
  // assigneeEmployeeId requires one; see PaymentReminderService.assignCallTask).
  async listPortfolioOfficers(actorUserId: string) {
    await this.assertCapability(actorUserId, 'COUNTERPARTY_ONBOARDING', 'INITIATE', 'view the file-managing-officer roster');
    const holders = await this.prisma.userRole.findMany({
      where: { roleCode: { in: ['PORT_OFF', 'PORT_MGR'] } },
      select: { userId: true },
    });
    const userIds = [...new Set(holders.map((h) => h.userId))];
    const users = await this.prisma.appUser.findMany({
      where: { id: { in: userIds }, employeeRecord: { isNot: null } },
      select: { id: true, displayName: true, email: true },
      orderBy: { displayName: 'asc' },
    });
    return users;
  }

  // ==========================================================================
  // Invariant 28(e)(ii)/(iii): NEW facility applications initiated from the
  // portal, feeding the SAME governance chain as onboarding — never a
  // parallel path. Two-phase, mirroring the onboarding pattern: the portal
  // creates a DRAFT (public, portal-safe, no capability row to check —
  // same reasoning as requestRestructure), then a staff member with
  // COUNTERPARTY_ONBOARDING actually pushes it into the real workflow.
  // ==========================================================================
  async submitFacilityApplication(input: SubmitFacilityApplicationInput) {
    const counterparty = await this.prisma.counterparty.findUniqueOrThrow({ where: { id: input.counterpartyId } });
    if (counterparty.onboardingStatus !== 'COMPLETE_APPROVED') {
      throw new CounterpartyLifecycleError('A facility application can only be submitted once onboarding has reached COMPLETE_APPROVED.');
    }
    return this.prisma.counterpartyFacilityApplication.create({
      data: { counterpartyId: input.counterpartyId, requestedAmountKobo: input.requestedAmountKobo, purpose: input.purpose, status: 'DRAFT' },
    });
  }

  async reviewAndSubmitFacilityApplication(applicationId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'COUNTERPARTY_ONBOARDING', 'INITIATE', 'push a facility application into the governance review chain');
    const application = await this.prisma.counterpartyFacilityApplication.findUniqueOrThrow({ where: { id: applicationId } });
    if (application.status !== 'DRAFT') {
      throw new CounterpartyLifecycleError(`Facility application ${applicationId} is ${application.status}, not DRAFT — cannot resubmit.`);
    }
    // Invariant 36(f): "routes PO -> CIO approval -> subsequent
    // stakeholders" — the concrete gate: the application's latest
    // investment memo must have cleared its full approval chain before it
    // can enter the Risk/BD/Finance/Compliance chain below. Invariant
    // 49(g)(iii) (CHECK11): that terminal status is CIO_APPROVED for the
    // BELOW_THRESHOLD chain or MD_APPROVED for AT_OR_ABOVE_THRESHOLD (see
    // terminalMemoStatus) — both mean "fully approved," so both pass here.
    const latestMemo = await this.prisma.investmentMemo.findFirst({
      where: { facilityApplicationId: applicationId },
      orderBy: { version: 'desc' },
    });
    if (!latestMemo || (latestMemo.status !== 'CIO_APPROVED' && latestMemo.status !== 'MD_APPROVED')) {
      throw new CounterpartyLifecycleError(
        `Facility application ${applicationId} has no fully-approved investment memo — invariant 36(f) requires CIO (or, at/above the DoA threshold, IC + MD/CEO) approval before the multi-officer review chain.`,
      );
    }
    // Invariant 44(e) (CHECK10): "checklist-gated ... incomplete = cannot
    // submit for review" -- every ACTIVE required-document row for this
    // application type must have a matching DocumentRegisterEntry before
    // DRAFT can become SUBMITTED.
    const checklist = await this.documents.getChecklistStatus(
      CounterpartyService.FACILITY_APPLICATION_TYPE,
      CounterpartyService.FACILITY_APPLICATION_ENTITY_TYPE,
      applicationId,
    );
    if (!checklist.complete) {
      throw new CounterpartyLifecycleError(
        `Facility application ${applicationId} is missing required documents: ${checklist.missing.join(', ')} — invariant 44(e) requires the full checklist before submission for review.`,
      );
    }
    const instance = await this.workflow.initiate({
      workflowTypeCode: 'COUNTERPARTY_FACILITY_APPLICATION_REVIEW',
      entityType: 'counterparty_facility_application',
      entityId: applicationId,
      initiatedByUserId: actorUserId,
      scenario: 'STANDARD',
    });
    return this.prisma.counterpartyFacilityApplication.update({ where: { id: applicationId }, data: { status: 'SUBMITTED', workflowInstanceId: instance.id } });
  }

  // ==========================================================================
  // Invariant 44(e) (CHECK10): "the application processing flow must accept
  // DOCUMENT UPLOADS at application time ... stored in the document
  // register, linked to the application, visible to the reviewing
  // officers." Portal-facing -- ownership is verified HERE (application
  // belongs to this counterparty, still DRAFT) before delegating to
  // DocumentService.attachFromPortal, the same layering
  // PortalWmController/PortalCounterpartyController use everywhere else:
  // the controller resolves the session's own counterpartyId, this method
  // is the one place that checks it against the application before any
  // write happens.
  // ==========================================================================
  private async assertOwnDraftFacilityApplication(applicationId: string, counterpartyId: string) {
    const application = await this.prisma.counterpartyFacilityApplication.findUniqueOrThrow({ where: { id: applicationId } });
    if (application.counterpartyId !== counterpartyId) {
      throw new CounterpartyLifecycleError('This facility application does not belong to the requesting counterparty.');
    }
    return application;
  }

  async uploadFacilityApplicationDocument(input: { applicationId: string; documentType: string; fileReference: string }, counterpartyId: string) {
    const application = await this.assertOwnDraftFacilityApplication(input.applicationId, counterpartyId);
    if (application.status !== 'DRAFT') {
      throw new CounterpartyLifecycleError(`Facility application ${input.applicationId} is ${application.status} — documents are only accepted while the application is in DRAFT, at application time.`);
    }
    return this.documents.attachFromPortal(
      { entityType: CounterpartyService.FACILITY_APPLICATION_ENTITY_TYPE, entityId: input.applicationId, documentType: input.documentType, fileReference: input.fileReference },
      counterpartyId,
    );
  }

  async getFacilityApplicationChecklist(applicationId: string, counterpartyId: string) {
    await this.assertOwnDraftFacilityApplication(applicationId, counterpartyId);
    return this.documents.getChecklistStatus(CounterpartyService.FACILITY_APPLICATION_TYPE, CounterpartyService.FACILITY_APPLICATION_ENTITY_TYPE, applicationId);
  }

  async listFacilityApplicationDocumentsForPortal(applicationId: string, counterpartyId: string) {
    await this.assertOwnDraftFacilityApplication(applicationId, counterpartyId);
    return this.documents.listFor(CounterpartyService.FACILITY_APPLICATION_ENTITY_TYPE, applicationId);
  }

  // Staff-side equivalent for reviewing officers -- capability-gated
  // (unlike DocumentController's own deliberately-open listByEntity) since
  // there is no surrounding screen here to inherit a gate from.
  async getFacilityApplicationChecklistForStaff(applicationId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'COUNTERPARTY_ONBOARDING', 'VIEW', 'view a facility application document checklist');
    return this.documents.getChecklistStatus(CounterpartyService.FACILITY_APPLICATION_TYPE, CounterpartyService.FACILITY_APPLICATION_ENTITY_TYPE, applicationId);
  }

  // Dispatched from WorkflowInboxService.approve()/.reject() — no
  // structured per-step checklist data is needed here (unlike onboarding's
  // ic1Checklist/eddChecklist/ic2Checklist), so this rides the generic
  // Workflow Inbox rather than needing a dedicated review screen.
  // Invariant 36(e): "per-step COMMENTS" — notes flow straight through to
  // WorkflowStepApproval.notes (the generic engine's own field), one per
  // officer per step, same as every other generic-Inbox workflow type.
  async approveFacilityApplicationStep(workflowInstanceId: string, approverUserId: string, notes?: string) {
    const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId, notes);
    if (updated.status === 'APPROVED') {
      await this.prisma.counterpartyFacilityApplication.update({ where: { workflowInstanceId }, data: { status: 'APPROVED' } });
    }
    return updated;
  }

  async rejectFacilityApplication(workflowInstanceId: string, approverUserId: string, notes?: string) {
    const rejected = await this.workflow.reject(workflowInstanceId, approverUserId, notes);
    await this.prisma.counterpartyFacilityApplication.update({ where: { workflowInstanceId }, data: { status: 'DECLINED' } });
    return rejected;
  }

  // ==========================================================================
  // Invariant 36(f): investment memo — PO's point of request, versioned,
  // CIO-approval-gated before the facility application can enter the
  // Risk/BD/Finance/Compliance chain (reviewAndSubmitFacilityApplication's
  // gate above). "memo becomes part of the facility's permanent file" is
  // satisfied by the DocumentRegisterEntry written on every draft — the
  // SAME polymorphic register every other document in this codebase uses.
  // ==========================================================================
  async draftInvestmentMemo(input: DraftInvestmentMemoInput, actorUserId: string) {
    await this.assertCapability(actorUserId, 'COUNTERPARTY_ONBOARDING', 'INITIATE', 'draft an investment memo');
    const application = await this.prisma.counterpartyFacilityApplication.findUniqueOrThrow({ where: { id: input.facilityApplicationId } });
    if (application.status !== 'DRAFT') {
      throw new CounterpartyLifecycleError(`Facility application ${input.facilityApplicationId} is ${application.status}, not DRAFT — an investment memo is the PO's point of REQUEST, before submission.`);
    }
    const priorVersion = await this.prisma.investmentMemo.findFirst({
      where: { facilityApplicationId: input.facilityApplicationId },
      orderBy: { version: 'desc' },
    });
    const version = (priorVersion?.version ?? 0) + 1;
    const memo = await this.prisma.investmentMemo.create({
      data: {
        facilityApplicationId: input.facilityApplicationId,
        version,
        dealSummary: input.dealSummary,
        structureType: input.structureType,
        amountKobo: input.amountKobo,
        tenorMonths: input.tenorMonths,
        targetReturnPct: input.targetReturnPct,
        riskNotes: input.riskNotes,
        shariahNotes: input.shariahNotes,
        collateralNotes: input.collateralNotes,
        createdByUserId: actorUserId,
      },
    });
    await this.prisma.documentRegisterEntry.create({
      data: {
        entityType: 'counterparty_facility_application',
        entityId: input.facilityApplicationId,
        documentType: 'INVESTMENT_MEMO',
        fileReference: `investment-memo:${memo.id}:v${version}`,
        uploadedByUserId: actorUserId,
      },
    });
    return memo;
  }

  // Invariant 46(c)/46(g)(i): the chain shape (PM validation -> CIO ->
  // [IC -> MD/CEO]) is fixed seed data (two ApprovalRule scenarios), but
  // WHICH scenario applies is read live here, never baked into a static
  // amount-range rule row -- "thresholds are governed config, adjustable
  // through the standing approval workflow," not a seed/code change. No
  // ACTIVE threshold on file defaults to the SAFER path (full IC+MD
  // scrutiny), the same "never fake a green/lenient default" discipline
  // RiskAppetiteMatrix's own "AWAITING APPROVED MATRIX" state uses.
  async submitInvestmentMemoForCioApproval(memoId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'COUNTERPARTY_ONBOARDING', 'INITIATE', 'submit an investment memo for CIO approval');
    const memo = await this.prisma.investmentMemo.findUniqueOrThrow({ where: { id: memoId } });
    if (memo.status !== 'DRAFT') {
      throw new CounterpartyLifecycleError(`Investment memo ${memoId} is ${memo.status}, not DRAFT — cannot resubmit.`);
    }
    const activeThreshold = await this.prisma.investmentMemoThresholdConfig.findFirst({ where: { status: 'ACTIVE' }, orderBy: { version: 'desc' } });
    const scenario = !activeThreshold || memo.amountKobo >= activeThreshold.thresholdKobo ? 'AT_OR_ABOVE_THRESHOLD' : 'BELOW_THRESHOLD';
    const instance = await this.workflow.initiate({
      workflowTypeCode: 'INVESTMENT_MEMO_CIO_APPROVAL',
      entityType: 'investment_memo',
      entityId: memoId,
      amountKobo: memo.amountKobo,
      initiatedByUserId: actorUserId,
      scenario,
    });
    return this.prisma.investmentMemo.update({ where: { id: memoId }, data: { status: 'SUBMITTED', workflowInstanceId: instance.id } });
  }

  // Dispatched from WorkflowInboxService.approve() for the PM validation,
  // CIO, and MD/CEO steps (whichever is currently pending) — the IC step
  // is EXCLUDED (guard below): it requires a structured icResolutionRef
  // the generic approve(notes?) shape can't carry, same reasoning
  // STRATEGY_LAYER_APPROVAL/RISK_APPETITE_MATRIX_APPROVAL are excluded from
  // the generic Workflow Inbox dispatch for. Approval comments bind to
  // this memo version via WorkflowStepApproval.notes (invariant 36(f)'s
  // own phrase) at every step, not just CIO's.
  async approveInvestmentMemo(workflowInstanceId: string, approverUserId: string, notes?: string) {
    const pending = await this.pendingInvestmentMemoStep(workflowInstanceId);
    if (pending?.requiredFunctionCode === 'INVESTMENT_COMMITTEE_APPROVAL') {
      throw new CounterpartyLifecycleError('This step requires Investment Committee approval with a mandatory icResolutionRef — use approveInvestmentMemoAsCommittee, not the generic approval path.');
    }
    const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId, notes);
    if (updated.status === 'APPROVED') {
      const status = await this.terminalMemoStatus(workflowInstanceId);
      await this.prisma.investmentMemo.update({ where: { workflowInstanceId }, data: { status } });
    }
    return updated;
  }

  // Invariant 46(c): "committee approval records an icResolutionRef, same
  // pattern as strategy-layer's boardResolutionRef" -- a real structured
  // field, not free text buried in the generic notes column. Deliberately
  // NOT reachable through the generic Workflow Inbox dispatch (see the
  // guard in approveInvestmentMemo above).
  async approveInvestmentMemoAsCommittee(workflowInstanceId: string, approverUserId: string, icResolutionRef: string) {
    if (!icResolutionRef?.trim()) {
      throw new CounterpartyLifecycleError('An icResolutionRef is required to record Investment Committee approval (invariant 46c).');
    }
    const pending = await this.pendingInvestmentMemoStep(workflowInstanceId);
    if (pending?.requiredFunctionCode !== 'INVESTMENT_COMMITTEE_APPROVAL') {
      throw new CounterpartyLifecycleError('This workflow instance is not currently awaiting Investment Committee approval.');
    }
    const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId, icResolutionRef);
    await this.prisma.investmentMemo.updateMany({ where: { workflowInstanceId }, data: { icResolutionRef } });
    if (updated.status === 'APPROVED') {
      const status = await this.terminalMemoStatus(workflowInstanceId);
      await this.prisma.investmentMemo.update({ where: { workflowInstanceId }, data: { status } });
    }
    return updated;
  }

  // Replicates WorkflowEngineService's own private currentPendingStep()
  // logic (approved-step-id-set minus the ordered step list) rather than
  // exposing a new public method on the shared engine for one caller's
  // guard -- read-only, no mutation, safe to duplicate this narrowly.
  private async pendingInvestmentMemoStep(workflowInstanceId: string) {
    const instance = await this.prisma.workflowInstance.findUnique({
      where: { id: workflowInstanceId },
      include: { approvalRule: { include: { steps: { orderBy: { stepOrder: 'asc' } } } }, stepApprovals: true },
    });
    if (!instance) return null;
    const approvedStepIds = new Set(instance.stepApprovals.filter((a) => a.decision === 'APPROVE').map((a) => a.approvalRuleStepId));
    return instance.approvalRule.steps.find((s) => !approvedStepIds.has(s.id)) ?? null;
  }

  // Invariant 49(g)(iii) (CHECK11): "investment memo status must reflect
  // the full IC/MD chain, not cap at CIO_APPROVED." A fully-APPROVED
  // instance's real terminal approver is whichever function closed the
  // LAST step of the scenario that actually applied (BELOW_THRESHOLD ends
  // at INVESTMENT_MEMO_CIO_APPROVAL; AT_OR_ABOVE_THRESHOLD ends at
  // INVESTMENT_MEMO_MD_APPROVAL, two steps further, per seed.ts's
  // INVESTMENT_MEMO_CIO_APPROVAL_AT_OR_ABOVE_THRESHOLD rule) -- reading the
  // rule's own last step, rather than hard-coding "CIO_APPROVED" as the one
  // terminal label, is what makes this correct regardless of which
  // scenario governed this particular instance.
  private async terminalMemoStatus(workflowInstanceId: string): Promise<'CIO_APPROVED' | 'MD_APPROVED'> {
    const instance = await this.prisma.workflowInstance.findUniqueOrThrow({
      where: { id: workflowInstanceId },
      include: { approvalRule: { include: { steps: { orderBy: { stepOrder: 'asc' } } } } },
    });
    const lastStep = instance.approvalRule.steps[instance.approvalRule.steps.length - 1];
    return lastStep?.requiredFunctionCode === 'INVESTMENT_MEMO_MD_APPROVAL' ? 'MD_APPROVED' : 'CIO_APPROVED';
  }

  async rejectInvestmentMemo(workflowInstanceId: string, approverUserId: string, notes?: string) {
    const rejected = await this.workflow.reject(workflowInstanceId, approverUserId, notes);
    await this.prisma.investmentMemo.update({ where: { workflowInstanceId }, data: { status: 'CIO_REJECTED' } });
    return rejected;
  }

  // ==========================================================================
  // Invariant 46(g)(i): "thresholds are governed config, adjustable by
  // authorized level through the standing approval workflow." Same
  // propose-then-a-different-approver-activates shape as
  // ReportingService.proposeFrameworkMapVersion/approveFrameworkMapVersion.
  // ==========================================================================
  async proposeInvestmentMemoThreshold(thresholdKobo: bigint, actorUserId: string) {
    await this.assertCapability(actorUserId, 'INVESTMENT_MEMO_THRESHOLD_MANAGEMENT', 'INITIATE', 'propose a new investment memo DoA threshold');
    const latest = await this.prisma.investmentMemoThresholdConfig.findFirst({ orderBy: { version: 'desc' } });
    const version = (latest?.version ?? 0) + 1;
    const created = await this.prisma.investmentMemoThresholdConfig.create({
      data: { version, thresholdKobo, status: 'DRAFT', createdByUserId: actorUserId },
    });
    const instance = await this.workflow.initiate({
      workflowTypeCode: 'INVESTMENT_MEMO_THRESHOLD_APPROVAL',
      entityType: 'investment_memo_threshold_config',
      entityId: created.id,
      initiatedByUserId: actorUserId,
      scenario: 'STANDARD',
    });
    await this.prisma.investmentMemoThresholdConfig.update({ where: { id: created.id }, data: { workflowInstanceId: instance.id } });
    await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'investment_memo_threshold_config', entityId: created.id, after: { version, thresholdKobo: thresholdKobo.toString() } });
    return { config: created, workflowInstance: instance };
  }

  async approveInvestmentMemoThreshold(workflowInstanceId: string, approverUserId: string) {
    const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
    if (updated.status !== 'APPROVED') return updated;
    const config = await this.prisma.investmentMemoThresholdConfig.findFirstOrThrow({ where: { workflowInstanceId } });
    const [, activated] = await this.prisma.$transaction([
      this.prisma.investmentMemoThresholdConfig.updateMany({ where: { status: 'ACTIVE' }, data: { status: 'SUPERSEDED' } }),
      this.prisma.investmentMemoThresholdConfig.update({ where: { id: config.id }, data: { status: 'ACTIVE', approvedByUserId: approverUserId } }),
    ]);
    await this.audit.record({ actorUserId: approverUserId, action: 'UPDATE', entityType: 'investment_memo_threshold_config', entityId: config.id, after: { status: 'ACTIVE', version: config.version } });
    return activated;
  }

  async getActiveInvestmentMemoThreshold(actorUserId: string) {
    await this.assertCapability(actorUserId, 'INVESTMENT_MEMO_THRESHOLD_MANAGEMENT', 'VIEW', 'view the investment memo DoA threshold');
    const active = await this.prisma.investmentMemoThresholdConfig.findFirst({ where: { status: 'ACTIVE' }, orderBy: { version: 'desc' } });
    return active ? { ...active, thresholdKobo: active.thresholdKobo.toString() } : null;
  }

  async listInvestmentMemos(facilityApplicationId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'COUNTERPARTY_ONBOARDING', 'VIEW', 'view a facility application\'s investment memos');
    const memos = await this.prisma.investmentMemo.findMany({
      where: { facilityApplicationId },
      orderBy: { version: 'desc' },
    });
    // Invariant 49(g)(iii) (CHECK11): the coarse status label alone can't
    // show the PM/CIO/IC/MD chain a memo actually went through -- attaching
    // getTrail() (built for the Subscription Register screen, task #216)
    // gives the register the full step-by-step history, so an at/above-
    // threshold memo's IC and MD/CEO decisions are visible even though the
    // status column only ever holds one terminal word.
    return Promise.all(
      memos.map(async (m) => ({
        ...m,
        amountKobo: m.amountKobo.toString(),
        targetReturnPct: m.targetReturnPct.toString(),
        trail: m.workflowInstanceId ? await this.workflow.getTrail(m.workflowInstanceId) : null,
      })),
    );
  }

  async markFacilityApplicationDisbursed(applicationId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'COUNTERPARTY_ONBOARDING', 'INITIATE', 'mark a facility application disbursed');
    const application = await this.prisma.counterpartyFacilityApplication.findUniqueOrThrow({ where: { id: applicationId } });
    if (application.status !== 'APPROVED') {
      throw new CounterpartyLifecycleError(`Facility application ${applicationId} is ${application.status}, not APPROVED — cannot disburse.`);
    }
    return this.prisma.counterpartyFacilityApplication.update({
      where: { id: applicationId },
      data: { status: 'DISBURSED', disbursedByUserId: actorUserId, disbursedAt: new Date() },
    });
  }

  // Invariant 36(d): "facility amount, targeted return, profit/principal
  // repayment dates flow FROM fund-accounting postings (single source) ->
  // counterparty dashboard AND the associated fund-account receivables
  // dashboards — no dual entry, no drift." This is Fund Accounting's OWN
  // action (FUND_ACCOUNTING_RECEIVABLES), distinct from the Portfolio
  // Officer's disbursement confirmation above — it records the facility's
  // servicing terms exactly ONCE; both dashboards read targetedReturnPct
  // and repaymentObligations off this SAME row, never a duplicate copy.
  async recordFundAccountingTerms(applicationId: string, targetedReturnPct: number, actorUserId: string) {
    await this.assertCapability(actorUserId, 'FUND_ACCOUNTING_RECEIVABLES', 'INITIATE', "record a disbursed facility's targeted return");
    const application = await this.prisma.counterpartyFacilityApplication.findUniqueOrThrow({ where: { id: applicationId } });
    if (application.status !== 'DISBURSED') {
      throw new CounterpartyLifecycleError(`Facility application ${applicationId} is ${application.status}, not DISBURSED — Fund Accounting records terms only after disbursement.`);
    }
    const updated = await this.prisma.counterpartyFacilityApplication.update({
      where: { id: applicationId },
      data: { targetedReturnPct, termsRecordedByUserId: actorUserId, termsRecordedAt: new Date() },
    });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'counterparty_facility_application', entityId: applicationId, after: { targetedReturnPct } });
    return updated;
  }

  // The fund-account receivables dashboard: PENDING repayment obligations
  // across ALL counterparties, joined to the facility's targetedReturnPct
  // — the same rows the counterparty's own dashboard shows, aggregated for
  // Fund Accounting's receivables view (no second table, no drift).
  async listFundAccountingReceivables(actorUserId: string) {
    await this.assertCapability(actorUserId, 'FUND_ACCOUNTING_RECEIVABLES', 'VIEW', 'view the fund-account receivables dashboard');
    const rows = await this.prisma.counterpartyRepaymentObligation.findMany({
      where: { status: 'PENDING' },
      orderBy: { dueDate: 'asc' },
      include: {
        counterparty: { select: { legalName: true } },
        facilityApplication: { select: { id: true, purpose: true, targetedReturnPct: true, requestedAmountKobo: true } },
      },
    });
    return rows.map((r) => ({
      ...r,
      amountKobo: r.amountKobo.toString(),
      facilityApplication: r.facilityApplication
        ? { ...r.facilityApplication, requestedAmountKobo: r.facilityApplication.requestedAmountKobo.toString(), targetedReturnPct: r.facilityApplication.targetedReturnPct?.toString() ?? null }
        : null,
    }));
  }

  // Invariant 28(e)(iii): the progress bar — stage NEVER hand-set, always
  // read live off WorkflowInstance + the pending step's requiredFunctionCode.
  async listFacilityApplicationsForPortal(counterpartyId: string): Promise<FacilityApplicationProgress[]> {
    const applications = await this.prisma.counterpartyFacilityApplication.findMany({ where: { counterpartyId }, orderBy: { createdAt: 'desc' } });
    return Promise.all(applications.map(async (app) => {
      const { stageLabel, pendingFromCounterparty } = await this.deriveApplicationStage(app);
      return {
        id: app.id,
        requestedAmountKobo: app.requestedAmountKobo.toString(),
        purpose: app.purpose,
        status: app.status,
        stageLabel,
        pendingFromCounterparty,
        createdAt: app.createdAt,
        targetedReturnPct: app.targetedReturnPct?.toString() ?? null,
      };
    }));
  }

  private async deriveApplicationStage(app: { status: string; workflowInstanceId: string | null }): Promise<{ stageLabel: string; pendingFromCounterparty: boolean }> {
    if (app.status === 'DRAFT') return { stageLabel: 'Submitted — awaiting Portfolio Management review', pendingFromCounterparty: true };
    if (app.status === 'DISBURSED') return { stageLabel: 'Disbursed', pendingFromCounterparty: false };
    if (app.status === 'DECLINED') return { stageLabel: 'Declined', pendingFromCounterparty: false };
    if (app.status === 'APPROVED') return { stageLabel: 'Approved — pending disbursement', pendingFromCounterparty: false };

    // SUBMITTED: the only state where we read the live workflow to find the
    // pending step — never stored, always derived.
    const instance = await this.prisma.workflowInstance.findUniqueOrThrow({
      where: { id: app.workflowInstanceId! },
      include: { approvalRule: { include: { steps: { orderBy: { stepOrder: 'asc' } } } }, stepApprovals: true },
    });
    const nextStepOrder = instance.stepApprovals.length + 1;
    const pendingStep = instance.approvalRule.steps.find((s) => s.stepOrder === nextStepOrder);
    // Invariant 36(e): "multi-officer approval access (Risk, BD, Finance +
    // PM/Compliance/Legal)" — each step now has its OWN distinct function
    // code (no repeated ONBOARDING_IC_REVIEW across two steps), so the
    // label needs no isFinalStep disambiguation.
    const STAGE_LABELS: Record<string, string> = {
      FACILITY_APPLICATION_RISK_REVIEW: 'Risk Review',
      FACILITY_APPLICATION_BD_REVIEW: 'Business Development Review',
      FACILITY_APPLICATION_FINANCE_REVIEW: 'Finance Review',
      FACILITY_APPLICATION_COMPLIANCE_APPROVAL: 'Compliance Approval',
    };
    return { stageLabel: pendingStep ? (STAGE_LABELS[pendingStep.requiredFunctionCode] ?? pendingStep.requiredFunctionCode) : 'Finalizing', pendingFromCounterparty: false };
  }

  // Real defect found during the invariant 36(f) build: this filtered
  // status: 'SUBMITTED', but the ops-UI panel it feeds is captioned
  // "Portal-submitted DRAFT requests" and its only action is
  // reviewAndSubmitFacilityApplication — which REQUIRES status DRAFT and
  // throws otherwise. A portal-created application sits at DRAFT and would
  // never have appeared here; the "Review & submit" button was
  // structurally unreachable. Fixed to list DRAFT (the actual pending-PM-
  // review queue), which is also the queue the new invariant 36(f) memo
  // panel needs — the memo attaches at DRAFT, before submission.
  async listFacilityApplicationsForStaff() {
    const applications = await this.prisma.counterpartyFacilityApplication.findMany({
      where: { status: 'DRAFT' },
      include: { counterparty: { select: { legalName: true } } },
      orderBy: { createdAt: 'asc' },
    });
    return applications.map((a) => ({ ...a, requestedAmountKobo: a.requestedAmountKobo.toString() }));
  }

  // Invariant 27(b)/36(e): "LEGAL: VIEW + agreement/document access" — every
  // facility application regardless of status (Legal needs the executed
  // agreement's context even after disbursement, not just the pending
  // review queue PM/Compliance work from).
  async listFacilityApplicationsForLegalView(actorUserId: string) {
    await this.assertCapability(actorUserId, 'FACILITY_APPLICATION_LEGAL_VIEW', 'VIEW', 'view counterparty facility applications');
    const applications = await this.prisma.counterpartyFacilityApplication.findMany({
      include: { counterparty: { select: { legalName: true } } },
      orderBy: { createdAt: 'desc' },
    });
    return applications.map((a) => ({ ...a, requestedAmountKobo: a.requestedAmountKobo.toString(), targetedReturnPct: a.targetedReturnPct?.toString() ?? null }));
  }

  // Invariant 36(d): DISBURSED facilities awaiting (or already carrying)
  // Fund Accounting's targeted-return posting.
  async listDisbursedFacilityApplications(actorUserId: string) {
    await this.assertCapability(actorUserId, 'FUND_ACCOUNTING_RECEIVABLES', 'VIEW', 'view disbursed facility applications');
    const applications = await this.prisma.counterpartyFacilityApplication.findMany({
      where: { status: 'DISBURSED' },
      include: { counterparty: { select: { legalName: true } } },
      orderBy: { disbursedAt: 'desc' },
    });
    return applications.map((a) => ({ ...a, requestedAmountKobo: a.requestedAmountKobo.toString(), targetedReturnPct: a.targetedReturnPct?.toString() ?? null }));
  }

  private async assertCapability(
    userId: string,
    functionCode: string,
    level: 'INITIATE' | 'APPROVE' | 'VIEW',
    activity: string,
  ) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({
        actorUserId: userId,
        action: 'PERMISSION_DENIED',
        entityType: 'counterparty_activity',
        entityId: activity,
        after: { functionCode, level },
      });
      throw new CounterpartyLifecycleError(
        `User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`,
      );
    }
  }
}
