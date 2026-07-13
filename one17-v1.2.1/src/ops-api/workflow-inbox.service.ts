import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { InvestorService } from '../investor/investor.service';
import { InvestorBankAccountChangeService } from '../investor/investor-bank-account-change.service';
import { EmployeeLifecycleService } from '../profile/employee-lifecycle.service';
import { InvestorContactAmendmentService } from '../investor/investor-contact-amendment.service';
import { RegulatoryReportingService } from '../regulatory-reporting/regulatory-reporting.service';
import { WmService } from '../wm/wm.service';
import { PmsService } from '../pms/pms.service';
import { MarketingService } from '../marketing/marketing.service';
import { SchedulerService } from '../scheduler/scheduler.service';
import { ProcurementService } from '../procurement/procurement.service';
import { One17AIService } from '../ai/one17-ai.service';
import { StakeholderReportingService } from '../stakeholder-reporting/stakeholder-reporting.service';
import { ProfileService } from '../profile/profile.service';
import { CounterpartyService } from '../counterparty/counterparty.service';
import { ZakatService } from '../zakat/zakat.service';
import { LedgerService } from '../ledger/ledger.service';
import { TalentService } from '../talent/talent.service';
import { StressEngineService } from '../stress-engine/stress-engine.service';
import { HalalFundEngineService } from '../engine-halal-fund/halal-fund-engine.service';
import { PeriodService } from '../period/period.service';
import { RbacService } from '../rbac/rbac.service';
import { PettyCashService } from '../petty-cash/petty-cash.service';
import { SubscriptionService } from '../subscription/subscription.service';
import { NotificationService } from '../notification/notification.service';
import { TaxService } from '../tax/tax.service';
import { ObligationsService } from '../obligations/obligations.service';

// Composition only — routes an approval to whichever service actually owns
// the business rule for that workflow_type_code. INVESTOR_ONBOARDING,
// REGULATORY_FILING_CERTIFICATION, WM_CLAIM_VALIDATION, PMS_SCORE_
// VALIDATION, PMS_CYCLE_APPROVAL, and PMS_SCORECARD_OVERRIDE all have a
// side effect beyond the generic state transition (kyc_status/kyc_expiry_
// date; filing_run.status -> CERTIFIED; wm_client_asset.verificationTag ->
// VERIFIED; employee_score_submission.status -> VALIDATED; appraisal_
// cycle.status -> APPROVED; role_scorecard_override.status -> ACTIVE —
// "the approval record IS the verification/signature"), so they go through
// their own service method rather than WorkflowEngineService.
// approveNextStep directly; every other workflow type has no such side
// effect (yet) and uses the generic path. This dispatch is routing, not a
// rule — the rule stays exactly once, in whichever service already
// implements it.
@Injectable()
export class WorkflowInboxService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly workflow: WorkflowEngineService,
    private readonly investorService: InvestorService,
    private readonly regulatoryReporting: RegulatoryReportingService,
    private readonly wm: WmService,
    private readonly pms: PmsService,
    private readonly marketing: MarketingService,
    private readonly scheduler: SchedulerService,
    private readonly procurement: ProcurementService,
    private readonly one17AI: One17AIService,
    private readonly stakeholderReporting: StakeholderReportingService,
    private readonly profile: ProfileService,
    private readonly counterparty: CounterpartyService,
    private readonly zakat: ZakatService,
    private readonly ledger: LedgerService,
    private readonly talent: TalentService,
    private readonly stressEngine: StressEngineService,
    private readonly halalFundEngine: HalalFundEngineService,
    private readonly period: PeriodService,
    private readonly rbac: RbacService,
    private readonly bankAccountChange: InvestorBankAccountChangeService,
    private readonly employeeLifecycle: EmployeeLifecycleService,
    private readonly contactAmendment: InvestorContactAmendmentService,
    private readonly pettyCash: PettyCashService,
    private readonly subscriptions: SubscriptionService,
    private readonly notifications: NotificationService,
    private readonly tax: TaxService,
    private readonly obligations: ObligationsService,
  ) {}

  async inbox(userId: string) {
    return this.workflow.getInboxForUser(userId);
  }

  async approve(workflowInstanceId: string, approverUserId: string, notes?: string) {
    const instance = await this.prisma.workflowInstance.findUniqueOrThrow({
      where: { id: workflowInstanceId },
    });
    if (instance.workflowTypeCode === 'INVESTOR_ONBOARDING') {
      return this.investorService.approveKyc(workflowInstanceId, approverUserId);
    }
    // Invariant 51(a-i) (CHECK12): falling through to the generic
    // approveNextStep() below would mark the WORKFLOW instance APPROVED on
    // the final (REVERIFICATION) step without ever creating the resulting
    // InvestorBankAccount / starting its cooling-off window --
    // decideChangeRequest handles BOTH steps (reads which one is actually
    // pending off the trail itself) and requires notes on the
    // reverification step, same as the dedicated screen would.
    if (instance.workflowTypeCode === 'INVESTOR_BANK_ACCOUNT_CHANGE') {
      const request = await this.prisma.investorBankAccountChangeRequest.findFirstOrThrow({ where: { workflowInstanceId } });
      return this.bankAccountChange.decideChangeRequest(request.id, approverUserId, 'APPROVE', notes);
    }
    // Invariant 50(b) (CHECK12): all three employee-lifecycle workflow
    // types have a side effect beyond the generic transition (Employee row
    // creation; status TERMINATED + login deactivation; performanceIncentivePct
    // apply, itself guarded against an in-flight PMS cycle) -- falling
    // through to approveNextStep() would silently skip every one of them.
    if (instance.workflowTypeCode === 'EMPLOYEE_ONBOARDING') {
      return this.employeeLifecycle.decideOnboarding(workflowInstanceId, approverUserId, 'APPROVE', notes);
    }
    if (instance.workflowTypeCode === 'EMPLOYEE_OFFBOARDING') {
      return this.employeeLifecycle.decideOffboarding(workflowInstanceId, approverUserId, 'APPROVE', notes);
    }
    if (instance.workflowTypeCode === 'EMPLOYEE_INCENTIVE_PCT_CHANGE') {
      return this.employeeLifecycle.decideIncentivePctChange(workflowInstanceId, approverUserId, 'APPROVE', notes);
    }
    // Invariant 51(a-ii): falling through to the generic approveNextStep()
    // would mark the WORKFLOW instance APPROVED without ever applying the
    // proposed fields onto the Investor row.
    if (instance.workflowTypeCode === 'INVESTOR_CONTACT_KYC_AMENDMENT') {
      return this.contactAmendment.decideAmendment(workflowInstanceId, approverUserId, 'APPROVE', notes);
    }
    // Invariant 50(a) (CHECK12): only the FINAL step (PETTY_CASH_
    // DISBURSEMENT) has a side effect (vouchers -> REIMBURSED, claim ->
    // DISBURSED) -- decideReplenishmentClaim itself checks
    // approveNextStep's returned status and no-ops on intermediate steps,
    // same pattern as every other multi-step dispatch here.
    if (instance.workflowTypeCode === 'PETTY_CASH_REPLENISHMENT_APPROVAL') {
      return this.pettyCash.decideReplenishmentClaim(workflowInstanceId, approverUserId, 'APPROVE', notes);
    }
    if (instance.workflowTypeCode === 'REGULATORY_FILING_CERTIFICATION') {
      return this.regulatoryReporting.certify(workflowInstanceId, approverUserId);
    }
    if (instance.workflowTypeCode === 'WM_CLAIM_VALIDATION') {
      return this.wm.verifyClientAsset(workflowInstanceId, approverUserId);
    }
    if (instance.workflowTypeCode === 'PMS_SCORE_VALIDATION') {
      return this.pms.validateScoreStep(workflowInstanceId, approverUserId);
    }
    if (instance.workflowTypeCode === 'PMS_CYCLE_APPROVAL') {
      return this.pms.approveCycle(workflowInstanceId, approverUserId);
    }
    if (instance.workflowTypeCode === 'PMS_SCORECARD_OVERRIDE') {
      return this.pms.approveScorecardOverride(workflowInstanceId, approverUserId);
    }
    if (instance.workflowTypeCode === 'EMOLUMENT_STRUCTURE_APPROVAL') {
      return this.pms.approveEmolumentComponent(workflowInstanceId, approverUserId);
    }
    if (instance.workflowTypeCode === 'TALENT_RECOMMENDATION_APPROVAL') {
      return this.talent.approveRecommendation(workflowInstanceId, approverUserId);
    }
    if (instance.workflowTypeCode === 'MARKETING_RESOURCE_APPROVAL') {
      return this.marketing.approveResource(workflowInstanceId, approverUserId);
    }
    if (instance.workflowTypeCode === 'MARKETING_SEND_APPROVAL') {
      return this.marketing.approveSend(workflowInstanceId, approverUserId);
    }
    if (instance.workflowTypeCode === 'SCHEDULER_JOB_PAUSE') {
      return this.scheduler.approvePauseRequest(workflowInstanceId, approverUserId);
    }
    if (instance.workflowTypeCode === 'SCHEDULER_JOB_RETIREMENT') {
      return this.scheduler.approveRetirement(workflowInstanceId, approverUserId);
    }
    if (instance.workflowTypeCode === 'PROCUREMENT_PAYMENT_BATCH') {
      return this.procurement.approvePaymentBatch(workflowInstanceId, approverUserId);
    }
    if (instance.workflowTypeCode === 'AI_CAPABILITY_FLAG_TOGGLE') {
      return this.one17AI.approveFlagToggle(workflowInstanceId, approverUserId);
    }
    if (instance.workflowTypeCode === 'STAKEHOLDER_REPORT_APPROVAL') {
      return this.stakeholderReporting.approveReport(workflowInstanceId, approverUserId);
    }
    if (instance.workflowTypeCode === 'EMPLOYEE_PERSONAL_RECORD_CHANGE') {
      return this.profile.acknowledgeChange(workflowInstanceId, approverUserId);
    }
    if (instance.workflowTypeCode === 'COUNTERPARTY_FACILITY_APPLICATION_REVIEW') {
      return this.counterparty.approveFacilityApplicationStep(workflowInstanceId, approverUserId, notes);
    }
    if (instance.workflowTypeCode === 'INVESTMENT_MEMO_CIO_APPROVAL') {
      return this.counterparty.approveInvestmentMemo(workflowInstanceId, approverUserId, notes);
    }
    // Invariant 46(g)(i): DRAFT->ACTIVE flip + supersede-the-prior-ACTIVE-
    // row side effect the generic approveNextStep() alone can't do.
    if (instance.workflowTypeCode === 'INVESTMENT_MEMO_THRESHOLD_APPROVAL') {
      return this.counterparty.approveInvestmentMemoThreshold(workflowInstanceId, approverUserId);
    }
    if (instance.workflowTypeCode === 'ZAKAT_ITEM_VALIDATION') {
      return this.zakat.verifyScheduleItem(workflowInstanceId, approverUserId);
    }
    if (instance.workflowTypeCode === 'ZAKAT_ASSESSMENT_CERTIFICATION') {
      return this.zakat.certifyAssessment(workflowInstanceId, approverUserId);
    }
    if (instance.workflowTypeCode === 'COUNTERPARTY_RESTRUCTURE_EXCEPTION') {
      return this.counterparty.approveRestructureException(workflowInstanceId, approverUserId);
    }
    // Invariant 65(c): approving a tax rate version is what supersedes the
    // prior ACTIVE version of the same taxType (a plain approveNextStep()
    // would flip the WorkflowInstance but never touch TaxRateVersion.status).
    if (instance.workflowTypeCode === 'TAX_RATE_VERSION_APPROVAL') {
      return this.tax.approveRateVersion({ workflowInstanceId, approverUserId });
    }
    // Invariant 65(c)(iii): approving a remittance batch is what auto-
    // generates the TAX_REMITTANCE_INSTRUCTION letter (honest park if the
    // template isn't ACTIVE yet).
    if (instance.workflowTypeCode === 'TAX_REMITTANCE_BATCH_APPROVAL') {
      return this.tax.approveRemittanceBatch(workflowInstanceId, approverUserId);
    }
    // Invariant 65(b): approving a payout batch is what flips it to
    // APPROVED and auto-generates the BANK_INSTRUCTION letter.
    if (instance.workflowTypeCode === 'PAYOUT_BATCH_APPROVAL') {
      return this.obligations.approveBatch(workflowInstanceId, approverUserId);
    }
    // JOURNAL_POSTING has never had a dispatch entry (it predates this
    // service's own routing pattern) — falling through to the generic
    // workflow.approveNextStep() below would mark the WORKFLOW instance
    // APPROVED without ever calling LedgerService.approveJournalPosting(),
    // so the journal itself would never flip DRAFT->POSTED and the
    // period-closed guard in approveJournalPosting would be skipped
    // entirely. Invariant 46(f): a payroll run's journal rides the
    // PAYROLL_THREE_HAND scenario of this SAME workflow type (a payroll-
    // specific journal_entry.posting_workflow_instance_id is still required
    // by the DB posting-gate trigger) — approveJournalPosting() already
    // returns null for every intermediate step (Finance's review, step 1)
    // and only actually posts on the LAST step of whichever scenario
    // applies, so payroll_run.status only flips to POSTED once MD/CEO's
    // step (stepOrder 2, the chain's last — "only MD/CEO approval releases
    // posting/payment") closes it.
    if (instance.workflowTypeCode === 'JOURNAL_POSTING') {
      const posted = await this.ledger.approveJournalPosting({ workflowInstanceId, approverUserId });
      if (posted) {
        const payrollRun = await this.prisma.payrollRun.findFirst({ where: { journalEntryId: posted.id } });
        if (payrollRun) return this.pms.markPayrollRunPosted(payrollRun.id, approverUserId);
      }
      return posted;
    }
    if (instance.workflowTypeCode === 'STRESS_BASELINE_PUBLICATION') {
      return this.stressEngine.approveBaselinePublication(workflowInstanceId, approverUserId);
    }
    // Invariant 39(a): DISTRIBUTION had never had a dispatch entry either —
    // falling through to the generic approveNextStep() would mark the
    // WORKFLOW instance APPROVED without ever flipping distribution.status
    // DRAFT->DECLARED (or setting declaredAt), leaving the payout Board/SSB
    // (or wherever it's headed) with no record the declaration actually
    // completed. approveDistributionDeclaration is a plain lookup by
    // workflowInstanceId with no Halal-Fund-specific logic in its body, so
    // it is reused as-is for PSR-waterfall/ND-mandate distributions too
    // (those share the same Distribution table and DISTRIBUTION workflow
    // type) rather than duplicating an identical method under a different
    // service name.
    if (instance.workflowTypeCode === 'DISTRIBUTION') {
      return this.halalFundEngine.approveDistributionDeclaration(workflowInstanceId, approverUserId);
    }
    // Invariant 39(a): ACCOUNTING_PERIOD_CLOSE had never had a dispatch
    // entry — falling through to the generic approveNextStep() would mark
    // the WORKFLOW instance APPROVED without ever flipping accounting_
    // period.status OPEN->CLOSED, leaving the period silently open forever
    // despite an "approved" close request.
    if (instance.workflowTypeCode === 'ACCOUNTING_PERIOD_CLOSE') {
      return this.period.approvePeriodClose({ workflowInstanceId, approverUserId });
    }
    // Invariant 39(a): USER_ROLE_ASSIGNMENT (AMD-09 §4b) — approveAssignRole
    // needs the target {userId, roleCode}, which RbacService.
    // proposeAssignRole already encodes into entityId as "userId:roleCode"
    // (never a separate structured-data table), so it is parsed back out
    // here rather than needing a dedicated route the way the boardResolution-
    // Ref-requiring approvals do.
    if (instance.workflowTypeCode === 'USER_ROLE_ASSIGNMENT') {
      const [targetUserId, roleCode] = instance.entityId.split(':');
      return this.rbac.approveAssignRole(workflowInstanceId, approverUserId, { userId: targetUserId, roleCode });
    }
    // Invariant 39(a): INVESTOR_MANDATE_SHARIAH_REVIEW (SRS §6.1 step 6)
    // had never had a dispatch entry either — falling through to the
    // generic approveNextStep() would mark the WORKFLOW instance APPROVED
    // without ever setting investor_mandate.shariahReviewedByUserId.
    if (instance.workflowTypeCode === 'INVESTOR_MANDATE_SHARIAH_REVIEW') {
      return this.investorService.approveMandateShariahReview(workflowInstanceId, approverUserId);
    }
    // CHECK16 62(b): REDEMPTION_APPROVAL had never had a dispatch entry —
    // discovered while wiring the portal's investor-initiated redemption
    // request into this exact chain. Falling through to the generic
    // approveNextStep() below would mark the WORKFLOW instance APPROVED
    // without ever booking the payout Txn or updating the SubscriptionRequest
    // — a silent no-op that would have made every redemption (portal- or
    // staff-initiated) look approved while never actually paying out.
    // approveRedemption's only optional field (payoutBankAccountId) is
    // genuinely optional — it defaults to the investor's current ACTIVE
    // primary bank account per its own documented behavior — so, unlike
    // SUBSCRIPTION_APPROVAL below, this needs no new DTO field to dispatch
    // safely through the generic inbox.
    if (instance.workflowTypeCode === 'REDEMPTION_APPROVAL') {
      const decided = await this.subscriptions.approveRedemption({ workflowInstanceId, approverUserId });
      if (decided.status === 'APPROVED') await this.notifyInvestorOfRedemptionDecision(decided, 'APPROVED');
      return decided;
    }
    // INVESTOR_ONBOARDING_CASE_REVIEW / COUNTERPARTY_ONBOARDING_CASE_REVIEW
    // steps (IC1/Risk/MD/IC2) require a structured checklist/decision the
    // generic approve(notes?) shape can't carry; STRATEGY_LAYER_APPROVAL and
    // RISK_APPETITE_MATRIX_APPROVAL both require a mandatory
    // boardResolutionRef. Falling through to the generic approveNextStep()
    // for these would silently skip that required data capture — blocked
    // outright rather than defaulted, so the gap fails loud (a 400 pointing
    // at the real screen) instead of quietly under-recording the approval.
    // SUBSCRIPTION_APPROVAL has the SAME class of gap (discovered alongside
    // REDEMPTION_APPROVAL's above): approveSubscription requires
    // journalInitiatorUserId (and, for a third-party payer,
    // payerBankAccountId/thirdPartyPayer) — real required data the generic
    // inbox's {notes?} shape cannot carry. CHECK16 62(m) built the dedicated
    // screen (SubscriptionRequestDetailPage's approve/reject section, POST
    // subscription-requests/:id/approve) this array's shared message
    // already points callers at, so SUBSCRIPTION_APPROVAL now joins
    // STRUCTURED_DATA_WORKFLOW_TYPES below instead of carrying its own
    // (now-stale) error.
    const STRUCTURED_DATA_WORKFLOW_TYPES = [
      'INVESTOR_ONBOARDING_CASE_REVIEW',
      'COUNTERPARTY_ONBOARDING_CASE_REVIEW',
      'STRATEGY_LAYER_APPROVAL',
      'RISK_APPETITE_MATRIX_APPROVAL',
      'SUBSCRIPTION_APPROVAL',
    ];
    if (STRUCTURED_DATA_WORKFLOW_TYPES.includes(instance.workflowTypeCode)) {
      throw new Error(
        `${instance.workflowTypeCode} steps require structured data the generic Workflow Inbox can't capture — use the dedicated review screen for this workflow instead.`,
      );
    }
    return this.workflow.approveNextStep(workflowInstanceId, approverUserId, notes);
  }

  async reject(workflowInstanceId: string, approverUserId: string, notes?: string) {
    const instance = await this.prisma.workflowInstance.findUniqueOrThrow({
      where: { id: workflowInstanceId },
    });
    if (instance.workflowTypeCode === 'INVESTOR_BANK_ACCOUNT_CHANGE') {
      const request = await this.prisma.investorBankAccountChangeRequest.findFirstOrThrow({ where: { workflowInstanceId } });
      return this.bankAccountChange.decideChangeRequest(request.id, approverUserId, 'REJECT', notes);
    }
    if (instance.workflowTypeCode === 'EMPLOYEE_ONBOARDING') {
      return this.employeeLifecycle.decideOnboarding(workflowInstanceId, approverUserId, 'REJECT', notes);
    }
    if (instance.workflowTypeCode === 'EMPLOYEE_OFFBOARDING') {
      return this.employeeLifecycle.decideOffboarding(workflowInstanceId, approverUserId, 'REJECT', notes);
    }
    if (instance.workflowTypeCode === 'EMPLOYEE_INCENTIVE_PCT_CHANGE') {
      return this.employeeLifecycle.decideIncentivePctChange(workflowInstanceId, approverUserId, 'REJECT', notes);
    }
    if (instance.workflowTypeCode === 'INVESTOR_CONTACT_KYC_AMENDMENT') {
      return this.contactAmendment.decideAmendment(workflowInstanceId, approverUserId, 'REJECT', notes);
    }
    if (instance.workflowTypeCode === 'PETTY_CASH_REPLENISHMENT_APPROVAL') {
      return this.pettyCash.decideReplenishmentClaim(workflowInstanceId, approverUserId, 'REJECT', notes);
    }
    if (instance.workflowTypeCode === 'MARKETING_RESOURCE_APPROVAL') {
      return this.marketing.rejectResource(workflowInstanceId, approverUserId, notes);
    }
    if (instance.workflowTypeCode === 'MARKETING_SEND_APPROVAL') {
      return this.marketing.rejectSend(workflowInstanceId, approverUserId, notes);
    }
    if (instance.workflowTypeCode === 'EMPLOYEE_PERSONAL_RECORD_CHANGE') {
      return this.profile.rejectChange(workflowInstanceId, approverUserId, notes);
    }
    if (instance.workflowTypeCode === 'COUNTERPARTY_FACILITY_APPLICATION_REVIEW') {
      return this.counterparty.rejectFacilityApplication(workflowInstanceId, approverUserId, notes);
    }
    if (instance.workflowTypeCode === 'INVESTMENT_MEMO_CIO_APPROVAL') {
      return this.counterparty.rejectInvestmentMemo(workflowInstanceId, approverUserId, notes);
    }
    if (instance.workflowTypeCode === 'TALENT_RECOMMENDATION_APPROVAL') {
      return this.talent.rejectRecommendation(workflowInstanceId, approverUserId, notes);
    }
    // CHECK16 62(b): rejectRequest(workflowInstanceId, approverUserId,
    // notes?) needs no extra structured data beyond what the generic inbox
    // already collects — unlike approveSubscription, it applies identically
    // to SUBSCRIPTION_APPROVAL and REDEMPTION_APPROVAL, so both dispatch
    // here (REDEMPTION_APPROVAL's approve-side gap is above; this closes
    // the matching reject-side gap for BOTH types — falling through to the
    // generic workflow.reject() would flip the WORKFLOW instance to
    // REJECTED while leaving subscription_request.status stuck at PENDING
    // forever, invisible as rejected anywhere the register reads it).
    if (instance.workflowTypeCode === 'SUBSCRIPTION_APPROVAL' || instance.workflowTypeCode === 'REDEMPTION_APPROVAL') {
      const rejected = await this.subscriptions.rejectRequest(workflowInstanceId, approverUserId, notes);
      if (instance.workflowTypeCode === 'REDEMPTION_APPROVAL') await this.notifyInvestorOfRedemptionDecision(rejected, 'REJECTED');
      return rejected;
    }
    // Same reasoning as approve() above — COUNTERPARTY_ONBOARDING_CASE_
    // REVIEW's dedicated reject path also flips onboardingStatus to
    // DECLINED; a generic reject here would leave it stuck at IN_REVIEW
    // forever with no way to reach COMPLETE_APPROVED or a clean DECLINED
    // state.
    const STRUCTURED_DATA_WORKFLOW_TYPES = [
      'INVESTOR_ONBOARDING_CASE_REVIEW',
      'COUNTERPARTY_ONBOARDING_CASE_REVIEW',
      'STRATEGY_LAYER_APPROVAL',
    ];
    if (STRUCTURED_DATA_WORKFLOW_TYPES.includes(instance.workflowTypeCode)) {
      throw new Error(
        `${instance.workflowTypeCode} steps require structured data the generic Workflow Inbox can't capture — use the dedicated review screen for this workflow instead.`,
      );
    }
    return this.workflow.reject(workflowInstanceId, approverUserId, notes);
  }

  // CHECK16 62(b): fires for a redemption request regardless of channel
  // (portal-initiated via SYSTEM_PORTAL_CLIENT, or staff-initiated) —
  // the investor is the SAME recipient either way, off request.investorId,
  // never off initiatedByUserId (which is a technical AppUser for the
  // portal channel, not the investor).
  private async notifyInvestorOfRedemptionDecision(
    request: { investorId: string; productCode: string; amountKobo: bigint; id: string },
    decision: 'APPROVED' | 'REJECTED',
  ) {
    const nairaAmount = (Number(request.amountKobo) / 100).toLocaleString();
    await this.notifications.create({
      recipientInvestorId: request.investorId,
      type: 'GENERIC',
      title: decision === 'APPROVED' ? 'Redemption approved' : 'Redemption declined',
      body:
        decision === 'APPROVED'
          ? `Your redemption request of ₦${nairaAmount} from ${request.productCode} has been approved and will be paid out to your registered bank account.`
          : `Your redemption request of ₦${nairaAmount} from ${request.productCode} was declined.`,
      linkPath: '/notifications',
    });
  }
}
