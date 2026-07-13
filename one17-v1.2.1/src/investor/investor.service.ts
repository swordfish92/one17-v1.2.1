import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { DelegationService } from '../delegation/delegation.service';
import { PortalAuthService } from '../portal-auth/portal-auth.service';
import { ScreeningGatewayService } from '../screening-gateway/screening-gateway.service';
import { Prisma } from '../../generated/prisma/client';
import {
  OnboardInvestorInput,
  OnboardExpressInvestorInput,
  Stage2FieldsInput,
  RecordComplianceRiskAssessmentInput,
  RecordIc1ReviewInput,
  RecordRiskReviewInput,
  RecordMdDecisionInput,
  RecordIc2ReviewInput,
  RecordScreeningInput,
  SetupMandateInput,
  InvestorLifecycleError,
} from './investor.types';

// Build Plan steps 6-7 / SOW D6-D7: investor master + Onboarding Flow A.
// SRS §6.1's stages map onto this service as: enter details (onboard) →
// AML screening (recordScreening) → submit for KYC approval, gated on a
// screening record existing (submitForKycApproval) → COMPLIANCE approves
// via the workflow engine (approveKyc) → mandate setup (setupMandate) →
// Shariah review for restricted mandates only (requestMandateShariahReview
// / approveMandateShariahReview) → system activation (activate). The two
// approval gates reuse WorkflowEngineService rather than hand-rolling
// maker≠checker again — that's the entire point of having built it once.
@Injectable()
export class InvestorService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly workflow: WorkflowEngineService,
    private readonly delegation: DelegationService,
    private readonly portalAuth: PortalAuthService,
    private readonly screeningGateway: ScreeningGatewayService,
  ) {}

  async onboard(input: OnboardInvestorInput) {
    await this.assertCapability(
      input.onboardedByUserId,
      'INVESTOR_ONBOARDING',
      'INITIATE',
      'onboard an investor',
    );
    const investorId = await this.generateInvestorId();
    const investor = await this.prisma.investor.create({
      data: {
        investorId,
        fullLegalName: input.fullLegalName,
        entityType: input.entityType,
        nationality: input.nationality,
        taxIdentificationNumber: input.taxIdentificationNumber,
        dateOfBirthOrIncorporation: input.dateOfBirthOrIncorporation,
        contactEmail: input.contactEmail,
        contactPhone: input.contactPhone,
        registeredAddress: input.registeredAddress,
        sourceOfFunds: input.sourceOfFunds,
        authorisedSignatories: input.authorisedSignatories as
          Prisma.InputJsonValue | undefined,
        onboardedByUserId: input.onboardedByUserId,
      },
    });

    await this.audit.record({
      actorUserId: input.onboardedByUserId,
      action: 'CREATE',
      entityType: 'investor',
      entityId: investor.investorId,
      after: {
        fullLegalName: input.fullLegalName,
        entityType: input.entityType,
        contactEmail: input.contactEmail,
      },
    });

    return investor;
  }

  async addKycDocument(input: {
    investorId: string;
    documentType: string;
    fileReference: string;
    issuedDate?: Date;
    expiryDate?: Date;
    uploadedByUserId: string;
  }) {
    await this.assertCapability(
      input.uploadedByUserId,
      'INVESTOR_ONBOARDING',
      'INITIATE',
      'add a KYC document',
    );
    const created = await this.prisma.investorKycDocument.create({
      data: input,
    });
    await this.audit.record({
      actorUserId: input.uploadedByUserId,
      action: 'CREATE',
      entityType: 'investor_kyc_document',
      entityId: created.id,
      after: { investorId: input.investorId, documentType: input.documentType },
    });
    return created;
  }

  async addBankAccount(input: {
    investorId: string;
    bankName: string;
    accountNumber: string;
    accountName: string;
    addedByUserId: string;
  }) {
    await this.assertCapability(
      input.addedByUserId,
      'INVESTOR_ONBOARDING',
      'INITIATE',
      'add a bank account',
    );
    const created = await this.prisma.investorBankAccount.create({
      data: {
        investorId: input.investorId,
        bankName: input.bankName,
        accountNumber: input.accountNumber,
        accountName: input.accountName,
      },
    });
    await this.audit.record({
      actorUserId: input.addedByUserId,
      action: 'CREATE',
      entityType: 'investor_bank_account',
      entityId: created.id,
      after: { investorId: input.investorId, bankName: input.bankName },
    });
    return created;
  }

  // Manual Screening Procedure §2: "Where the initiating officer (BD/OPS)
  // and Compliance are the same person for any case, the result must be
  // countersigned by the CEO. The person who introduced the client may
  // never be the sole screener." "Introduced the client" = who onboarded
  // them (Investor.onboardedByUserId) — the only record of that available.
  //
  // CEO instruction 2026-07-04: this must be delegable to Compliance or a
  // senior officer as the institution grows, not hard-coded to CEO — the
  // check is a SCREENING_COUNTERSIGN capability (standing RolePermission,
  // seeded to MD_CEO today, OR an active Delegation of Authority grant),
  // via the same DelegationService.hasCapability WorkflowEngineService
  // uses. Widening who can countersign is a data row or a delegation
  // request, never a code change.
  async recordScreening(input: RecordScreeningInput) {
    await this.assertCapability(
      input.screenerUserId,
      'SCREENING_PERFORM',
      'INITIATE',
      'perform AML/sanctions screening',
    );

    // Manual Screening Procedure §3's checklist, digitized (schema.prisma's
    // ScreeningChecklistItem) rather than hardcoded here — every ACTIVE item
    // must be covered by this specific screening event, or it's not the
    // documented procedure, it's a partial check wearing the procedure's
    // name. Retiring/adding an item is a data change (§7's "move to a
    // commercial provider" transition), not a code change to this method.
    const activeItems = await this.prisma.screeningChecklistItem.findMany({
      where: { isActive: true },
    });
    const checkedCodes = new Set(input.listsChecked.map((c) => c.itemCode));
    const missing = activeItems.filter((i) => !checkedCodes.has(i.itemCode));
    if (missing.length > 0) {
      throw new InvestorLifecycleError(
        `Screening checklist incomplete — missing: ${missing.map((i) => i.itemCode).join(', ')} (Manual Screening Procedure §3).`,
      );
    }

    const investor = await this.prisma.investor.findUniqueOrThrow({
      where: { investorId: input.investorId },
    });

    let viaDelegationId: string | undefined;
    if (input.screenerUserId === investor.onboardedByUserId) {
      if (!input.countersignerUserId) {
        throw new InvestorLifecycleError(
          'Screener is the same person who onboarded this investor; a countersignature is required (Manual Screening Procedure §2).',
        );
      }
      const { eligible, viaDelegationId: grantId } =
        await this.delegation.hasCapability(
          input.countersignerUserId,
          'SCREENING_COUNTERSIGN',
          'APPROVE',
        );
      if (!eligible) {
        throw new InvestorLifecycleError(
          'Countersigner lacks SCREENING_COUNTERSIGN authority, standing or delegated (Manual Screening Procedure §2).',
        );
      }
      viaDelegationId = grantId;
    }

    const created = await this.prisma.investorScreeningRecord.create({
      data: {
        investorId: input.investorId,
        listsChecked: input.listsChecked as unknown as Prisma.InputJsonValue,
        searchTermsUsed: input.searchTermsUsed,
        result: input.result,
        screenerUserId: input.screenerUserId,
        countersignerUserId: input.countersignerUserId,
        notes: input.notes,
      },
    });

    await this.audit.record({
      actorUserId: input.screenerUserId,
      action: 'CREATE',
      entityType: 'investor_screening_record',
      entityId: created.id,
      after: {
        investorId: input.investorId,
        result: input.result,
        countersignerUserId: input.countersignerUserId,
        viaDelegationId,
      },
    });

    return created;
  }

  // Invariant 51(b-vii) (CHECK13): closes the loop InvestorComplianceSweepService
  // opens -- the sweep raises a Task when a case's periodicReviewFrequency
  // window has elapsed; this is the method Compliance calls to actually
  // clear the due state after performing the real review. Same capability
  // as recordScreening (a periodic review IS a re-screening, procedurally),
  // deliberately NOT gated through the workflow engine -- there is no
  // maker/checker step in the source procedure for a routine periodic
  // review, only for the ORIGINAL onboarding decision.
  async recordPeriodicReview(investorId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'SCREENING_PERFORM', 'INITIATE', 'record a KYC periodic review');
    const onboardingCase = await this.prisma.investorOnboardingCase.findFirstOrThrow({ where: { investorId } });
    const updated = await this.prisma.investorOnboardingCase.update({
      where: { id: onboardingCase.id },
      data: { lastPeriodicReviewAt: new Date() },
    });
    await this.audit.record({
      actorUserId,
      action: 'UPDATE',
      entityType: 'investor_onboarding_case',
      entityId: onboardingCase.id,
      after: { lastPeriodicReviewAt: updated.lastPeriodicReviewAt },
    });
    return updated;
  }

  // Onboarding Design Stage 5: "AML risk rating ... drives KYC tier, review
  // frequency (e.g., 3y/2y/1y), and approval level." Required before KYC
  // submission (below) — mirrors the existing screening-record gate — so
  // approveKyc() can always compute the correct tiered expiry.
  async setAmlRiskRating(
    investorId: string,
    amlRiskRating: 'LOW' | 'MEDIUM' | 'HIGH',
    actorUserId: string,
  ) {
    await this.assertCapability(
      actorUserId,
      'INVESTOR_ONBOARDING',
      'INITIATE',
      'set an investor AML risk rating',
    );
    const investor = await this.prisma.investor.update({
      where: { investorId },
      data: { amlRiskRating },
    });
    await this.audit.record({
      actorUserId,
      action: 'UPDATE',
      entityType: 'investor',
      entityId: investorId,
      after: { amlRiskRating },
    });
    return investor;
  }

  // Invariant 39(d)/35(a): the RM-assignment mechanism for non-WM investors
  // (WM investors already have wm_client_profile.advisorUserId) — needed to
  // route two-way client<->RM portal messaging. Same capability gate as the
  // rest of this admin surface (INVESTOR_ONBOARDING INITIATE); a data-row
  // reassignment, not a governance decision, so it doesn't need its own
  // capability.
  async assignRelationshipManager(investorId: string, relationshipManagerUserId: string, actorUserId: string) {
    await this.assertCapability(
      actorUserId,
      'INVESTOR_ONBOARDING',
      'INITIATE',
      'assign an investor\'s relationship manager',
    );
    const investor = await this.prisma.investor.update({
      where: { investorId },
      data: { relationshipManagerUserId },
    });
    await this.audit.record({
      actorUserId,
      action: 'UPDATE',
      entityType: 'investor',
      entityId: investorId,
      after: { relationshipManagerUserId },
    });
    return investor;
  }

  // Manual Screening Procedure §4: "No screening record = onboarding ...
  // is incomplete. The platform's workflow gate enforces this once live."
  // §5: a MATCH result blocks onboarding outright pending escalation.
  async submitForKycApproval(investorId: string, initiatedByUserId: string) {
    const investor = await this.prisma.investor.findUniqueOrThrow({
      where: { investorId },
    });
    if (!investor.amlRiskRating) {
      throw new InvestorLifecycleError(
        'No AML risk rating on file — onboarding cannot proceed (Onboarding Design Stage 5).',
      );
    }

    const latestScreening = await this.prisma.investorScreeningRecord.findFirst(
      {
        where: { investorId },
        orderBy: { screenedAt: 'desc' },
      },
    );
    if (!latestScreening) {
      throw new InvestorLifecycleError(
        'No screening record on file — onboarding cannot proceed (Manual Screening Procedure §4).',
      );
    }
    if (latestScreening.result === 'MATCH') {
      throw new InvestorLifecycleError(
        'Latest screening result is MATCH — onboarding is blocked pending escalation (Manual Screening Procedure §5).',
      );
    }

    // Invariant 72(b): the automated Screening Gateway upgrades what feeds
    // this gate -- it never replaces the Manual Screening Procedure check
    // directly above. An unadjudicated (OPEN) or TRUE_MATCH-adjudicated
    // sanctions hit blocks onboarding here too, independently of whatever
    // InvestorScreeningRecord.result says. ensureScreened runs the actual
    // fuzzy screen first (if none exists yet and LOCAL_LISTS is active) so
    // the block-check below is never evaluating a subject nobody ever
    // screened.
    await this.screeningGateway.ensureScreened('INVESTOR', investorId, investor.fullLegalName, initiatedByUserId);
    const screeningBlock = await this.screeningGateway.hasBlockingScreeningResult('INVESTOR', investorId);
    if (screeningBlock.blocked) {
      throw new InvestorLifecycleError(
        `Screening Gateway: ${screeningBlock.reason} (invariant 72(b) — onboarding cannot proceed until every hit is adjudicated).`,
      );
    }

    return this.workflow.initiate({
      workflowTypeCode: 'INVESTOR_ONBOARDING',
      entityType: 'investor',
      entityId: investorId,
      initiatedByUserId,
      scenario: 'STANDARD',
    });
  }

  // SRS §6.1 step 4: "Set kyc_status = KYC_COMPLETE." kycExpiryDate is now
  // tiered by the AML risk rating set before submission (Onboarding Design
  // Stage 5: "review frequency e.g., 3y/2y/1y") rather than a flat +1 year.
  private static readonly KYC_EXPIRY_YEARS_BY_RISK_RATING: Record<
    'LOW' | 'MEDIUM' | 'HIGH',
    number
  > = { LOW: 3, MEDIUM: 2, HIGH: 1 };

  async approveKyc(workflowInstanceId: string, approverUserId: string) {
    const updated = await this.workflow.approveNextStep(
      workflowInstanceId,
      approverUserId,
    );
    if (updated.status !== 'APPROVED') return null;
    return this.finalizeKycApproval(updated.entityId, approverUserId);
  }

  // Shared tail for BOTH onboarding paths: Flow A's single-step approveKyc
  // above, and the graduated path's IC2-SATISFACTORY completion below. Kept
  // as one method so kycExpiryDate tiering (Onboarding Design Stage 5) has
  // exactly one implementation regardless of which workflow got there.
  // Invariant 39(d): also the auto-provisioning hook for portal access —
  // EVERY investor gets a portal login at Stage-2 KYC completion, not just
  // WM admits. Idempotent (PortalAuthService.provisionForInvestor no-ops if
  // a WM onboarding already provisioned this investor via wm.controller.ts).
  private async finalizeKycApproval(investorId: string, approverUserId: string) {
    const investorBefore = await this.prisma.investor.findUniqueOrThrow({
      where: { investorId },
    });
    // submitForKycApproval/recordComplianceRiskAssessment already guarantee
    // this is set — defensive fallback to the most conservative tier only
    // if it somehow isn't.
    const years =
      InvestorService.KYC_EXPIRY_YEARS_BY_RISK_RATING[
        investorBefore.amlRiskRating ?? 'HIGH'
      ];
    const kycExpiryDate = new Date();
    kycExpiryDate.setFullYear(kycExpiryDate.getFullYear() + years);

    const investor = await this.prisma.investor.update({
      where: { investorId },
      data: {
        kycStatus: 'KYC_COMPLETE',
        onboardingStage: 'STAGE_2_COMPLETE',
        complianceApprovedByUserId: approverUserId,
        kycExpiryDate,
      },
    });

    await this.audit.record({
      actorUserId: approverUserId,
      action: 'UPDATE',
      entityType: 'investor',
      entityId: investor.investorId,
      after: {
        kycStatus: 'KYC_COMPLETE',
        kycExpiryDate,
        amlRiskRating: investorBefore.amlRiskRating,
        tierYears: years,
      },
    });

    // Surfaced on the return value (not just provisioned silently) so
    // whichever staff action completes KYC can relay the bootstrap password
    // out of band — same convention as Flow-C's onboardClient/counterparty's
    // recordIc2Review, just moved to the point where provisioning now
    // actually happens.
    const portal = await this.portalAuth.provisionForInvestor(investor.investorId);

    return { ...investor, portal };
  }

  // ==========================================================================
  // Invariant 27(a)/28(a): graduated dual-path onboarding. Stage-1 Express
  // (onboardExpress) issues the customer number (investorId) immediately
  // after a CLEAR automated sanctions screen; Stage-2 (submitStage2Fields ->
  // recordComplianceRiskAssessment -> submitOnboardingCaseForReview -> the
  // IC1 -> Risk -> [MD] -> IC2 chain) is the digitized 7-step Investor
  // Onboarding Template. "Automated sanctions screen" here takes its result
  // as an input contract (sanctionsScreenResult) rather than calling a real
  // OFAC/UN/EU/NFIU list API — no such integration exists in this codebase
  // yet; wiring an actual provider is a future, separate piece of work, not
  // invented here. This is an honest gap, not a faked pass.
  // ==========================================================================

  async onboardExpress(
    input: OnboardExpressInvestorInput & {
      sanctionsScreenResult: 'CLEAR' | 'FLAGGED';
    },
  ) {
    await this.assertCapability(
      input.onboardedByUserId,
      'INVESTOR_ONBOARDING',
      'INITIATE',
      'onboard an investor (Stage-1 Express)',
    );

    if (input.sanctionsScreenResult === 'FLAGGED') {
      await this.audit.record({
        actorUserId: input.onboardedByUserId,
        action: 'PERMISSION_DENIED',
        entityType: 'investor_onboarding_express_attempt',
        entityId: input.contactEmail,
        after: {
          fullLegalName: input.fullLegalName,
          sanctionsScreenResult: 'FLAGGED',
        },
      });
      throw new InvestorLifecycleError(
        'Automated sanctions screen returned FLAGGED — no customer number is issued (invariant 27a). Escalate to Compliance before any further onboarding action.',
      );
    }

    const config = await this.prisma.investorOnboardingConfig.findFirst({
      where: { status: 'ACTIVE' },
      orderBy: { version: 'desc' },
    });
    if (!config) {
      throw new InvestorLifecycleError(
        'No ACTIVE investor_onboarding_config — cannot issue a Stage-1 Express customer number without a governed deposit cap/deadline (AMD-12).',
      );
    }

    const investorId = await this.generateInvestorId();
    const now = new Date();
    const stage2DeadlineAt = new Date(now);
    stage2DeadlineAt.setDate(
      stage2DeadlineAt.getDate() + config.stage2CompletionDeadlineDays,
    );

    const investor = await this.prisma.investor.create({
      data: {
        investorId,
        fullLegalName: input.fullLegalName,
        entityType: input.entityType,
        nationality: input.nationality,
        bvn: input.bvn,
        rcNumber: input.rcNumber,
        contactEmail: input.contactEmail,
        contactPhone: input.contactPhone,
        onboardingStage: 'STAGE_1_EXPRESS',
        stage1IssuedAt: now,
        stage2DeadlineAt,
        onboardedByUserId: input.onboardedByUserId,
      },
    });

    await this.prisma.investorOnboardingCase.create({
      data: {
        investorId,
        sanctionsScreenResult: 'CLEAR',
        sanctionsScreenedAt: now,
      },
    });

    if (input.leadId) {
      await this.prisma.lead.update({
        where: { id: input.leadId },
        data: { status: 'CONVERTED', convertedInvestorId: investorId },
      });
    }

    await this.audit.record({
      actorUserId: input.onboardedByUserId,
      action: 'CREATE',
      entityType: 'investor',
      entityId: investor.investorId,
      after: {
        fullLegalName: input.fullLegalName,
        onboardingStage: 'STAGE_1_EXPRESS',
        stage2DeadlineAt,
      },
    });

    return investor;
  }

  async submitStage2Fields(input: Stage2FieldsInput) {
    await this.assertCapability(
      input.actorUserId,
      'INVESTOR_ONBOARDING',
      'INITIATE',
      'submit Stage-2 onboarding fields',
    );
    const investor = await this.prisma.investor.update({
      where: { investorId: input.investorId },
      data: {
        taxIdentificationNumber: input.taxIdentificationNumber,
        registeredAddress: input.registeredAddress,
        sourceOfFunds: input.sourceOfFunds,
        dateOfBirthOrIncorporation: input.dateOfBirthOrIncorporation,
        authorisedSignatories: input.authorisedSignatories as
          Prisma.InputJsonValue | undefined,
      },
    });
    await this.audit.record({
      actorUserId: input.actorUserId,
      action: 'UPDATE',
      entityType: 'investor',
      entityId: input.investorId,
      after: { stage2FieldsSubmitted: true },
    });
    return investor;
  }

  // Step 2b's exact aggregation rule (Investor Onboarding Template §2b),
  // implemented verbatim — this is the Board-approved AML/CFT Policy's own
  // formula (invariant 1: implement specifications), not a business
  // threshold invariant 10 would require as governed config.
  private static computeAccumulativeRiskProfile(
    grades: { grade: 'LOW' | 'MEDIUM' | 'HIGH' }[],
  ): 'LOW' | 'MEDIUM_LOW' | 'HIGH' {
    const highCount = grades.filter((g) => g.grade === 'HIGH').length;
    const mediumCount = grades.filter((g) => g.grade === 'MEDIUM').length;
    if (highCount >= 1 || mediumCount >= 6) return 'HIGH';
    if (mediumCount >= 3) return 'MEDIUM_LOW';
    return 'LOW';
  }

  async recordComplianceRiskAssessment(
    input: RecordComplianceRiskAssessmentInput,
  ) {
    await this.assertCapability(
      input.assessedByUserId,
      'SCREENING_PERFORM',
      'INITIATE',
      'record a compliance risk assessment',
    );
    if (input.riskMetricGrades.length !== 9) {
      throw new InvestorLifecycleError(
        `Risk assessment requires all 9 metrics graded — received ${input.riskMetricGrades.length} (Investor Onboarding Template §2b).`,
      );
    }

    const profile = InvestorService.computeAccumulativeRiskProfile(
      input.riskMetricGrades,
    );
    const eddRequired = profile === 'HIGH';

    const onboardingCase = await this.prisma.investorOnboardingCase.upsert({
      where: { investorId: input.investorId },
      create: {
        investorId: input.investorId,
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

    // Unifies this template's risk instrument with the existing Onboarding
    // Design Stage 5 amlRiskRating field (MEDIUM_LOW maps to MEDIUM) so the
    // one existing kycExpiryDate tiering mechanism (finalizeKycApproval)
    // continues to serve both onboarding paths rather than a second,
    // parallel expiry scheme — a flagged judgment call (two source docs,
    // one existing field), not a silent merge.
    await this.prisma.investor.update({
      where: { investorId: input.investorId },
      data: {
        amlRiskRating: profile === 'MEDIUM_LOW' ? 'MEDIUM' : profile,
      },
    });

    await this.audit.record({
      actorUserId: input.assessedByUserId,
      action: 'CREATE',
      entityType: 'investor_onboarding_case',
      entityId: onboardingCase.id,
      after: { investorId: input.investorId, accumulativeRiskProfile: profile, eddRequired },
    });

    return onboardingCase;
  }

  // Step 4 (branching): the accumulative risk profile computed in Step 2b
  // selects the scenario — LOW/MEDIUM_LOW route through IC1 -> Risk (periodic
  // review) -> IC2; HIGH routes through IC1 -> Risk (EDD) -> MD -> IC2.
  async submitOnboardingCaseForReview(investorId: string, initiatedByUserId: string) {
    const onboardingCase = await this.prisma.investorOnboardingCase.findUniqueOrThrow({
      where: { investorId },
    });
    if (!onboardingCase.accumulativeRiskProfile) {
      throw new InvestorLifecycleError(
        'No accumulative risk profile on file — recordComplianceRiskAssessment must run before the case can be submitted for review (Step 2b/4).',
      );
    }

    const scenario =
      onboardingCase.accumulativeRiskProfile === 'HIGH'
        ? 'HIGH_RISK'
        : 'LOW_MEDIUM_RISK';

    const instance = await this.workflow.initiate({
      workflowTypeCode: 'INVESTOR_ONBOARDING_CASE_REVIEW',
      entityType: 'investor_onboarding_case',
      entityId: onboardingCase.id,
      initiatedByUserId,
      scenario,
    });

    await this.prisma.investorOnboardingCase.update({
      where: { investorId },
      data: { workflowInstanceId: instance.id },
    });

    return instance;
  }

  // Step 3: Internal Control point 1.
  async recordIc1Review(input: RecordIc1ReviewInput) {
    await this.prisma.investorOnboardingCase.update({
      where: { workflowInstanceId: input.workflowInstanceId },
      data: {
        ic1Checklist: input.checklist as unknown as Prisma.InputJsonValue,
        ic1Notes: input.notes,
      },
    });
    return input.pass
      ? this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId)
      : this.workflow.reject(input.workflowInstanceId, input.approverUserId, input.notes);
  }

  // Step 5: Risk Department. HIGH_RISK's EDD recommendation is data for
  // the MD's decision, never a gate itself — this step always advances
  // (Risk cannot unilaterally decline a High-Risk file, only recommend);
  // for LOW/MEDIUM_LOW it is a periodic-review recommendation, likewise
  // always advancing straight to IC2.
  async recordRiskReview(input: RecordRiskReviewInput) {
    await this.prisma.investorOnboardingCase.update({
      where: { workflowInstanceId: input.workflowInstanceId },
      data: {
        eddChecklist: input.eddChecklist as unknown as Prisma.InputJsonValue,
        eddRecommendation: input.eddRecommendation,
        eddConditionsOrBasis: input.eddConditionsOrBasis,
        periodicReviewFrequency: input.periodicReviewFrequency,
        riskNotes: input.riskNotes,
      },
    });
    return this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
  }

  // Step 6: MD approval/declination — HIGH_RISK scenario only (the
  // ApprovalRule simply has no such step for LOW/MEDIUM_LOW, so this is
  // never reachable there — WorkflowEngineService.currentPendingStep would
  // already be pointing at IC2).
  async recordMdDecision(input: RecordMdDecisionInput) {
    await this.prisma.investorOnboardingCase.update({
      where: { workflowInstanceId: input.workflowInstanceId },
      data: {
        mdDecision: input.decision,
        mdConditionsOrReason: input.conditionsOrReason,
      },
    });
    return input.decision === 'APPROVED'
      ? this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId)
      : this.workflow.reject(input.workflowInstanceId, input.approverUserId, input.conditionsOrReason);
  }

  // Step 7: Internal Control point 2 (consolidated). SATISFACTORY is the
  // workflow's final step — reaching APPROVED here is what unlocks full
  // rights (finalizeKycApproval), exactly mirroring approveKyc's tail for
  // Flow A.
  async recordIc2Review(input: RecordIc2ReviewInput) {
    const onboardingCase = await this.prisma.investorOnboardingCase.update({
      where: { workflowInstanceId: input.workflowInstanceId },
      data: {
        ic2Checklist: input.checklist as unknown as Prisma.InputJsonValue,
        ic2Notes: input.notes,
        ic2Outcome: input.outcome,
      },
    });

    if (input.outcome === 'UNSATISFACTORY') {
      return this.workflow.reject(input.workflowInstanceId, input.approverUserId, input.notes);
    }

    const updated = await this.workflow.approveNextStep(
      input.workflowInstanceId,
      input.approverUserId,
    );
    if (updated.status === 'APPROVED') {
      const finalized = await this.finalizeKycApproval(onboardingCase.investorId, input.approverUserId);
      return { ...updated, portal: finalized.portal };
    }
    return updated;
  }

  // AMD-01 defense-in-depth: the DB CHECK (mandate_ratios_only_for_direct_
  // deal) is the backstop; this fails fast with a clear message.
  async setupMandate(input: SetupMandateInput) {
    await this.assertCapability(
      input.approvedByUserId,
      'MANDATE_SETUP',
      'APPROVE',
      'approve a mandate setup',
    );

    const isDirectDeal =
      input.mandateType === 'DIRECT_DEAL' ||
      input.mandateType === 'RESTRICTED_PLUS_DIRECT';
    if (
      !isDirectDeal &&
      (input.investorBaseRatio !== undefined ||
        input.mudaribBaseRatio !== undefined)
    ) {
      throw new InvestorLifecycleError(
        'investorBaseRatio/mudaribBaseRatio are valid only for DIRECT_DEAL or RESTRICTED_PLUS_DIRECT mandates (AMD-01).',
      );
    }
    if (input.earlyExitWaiver && !input.ssbWaiverResolutionRef) {
      throw new InvestorLifecycleError(
        'earlyExitWaiver requires ssbWaiverResolutionRef.',
      );
    }

    const created = await this.prisma.investorMandate.create({
      data: {
        investorId: input.investorId,
        mandateType: input.mandateType,
        targetReturnRate: input.targetReturnRate,
        investorBaseRatio: input.investorBaseRatio,
        mudaribBaseRatio: input.mudaribBaseRatio,
        restrictedSectors: input.restrictedSectors ?? [],
        restrictedContracts: input.restrictedContracts ?? [],
        directDealInvestmentId: input.directDealInvestmentId,
        rolloverDefault: input.rolloverDefault ?? 'AUTO',
        earlyExitWaiver: input.earlyExitWaiver ?? false,
        ssbWaiverResolutionRef: input.ssbWaiverResolutionRef,
        effectiveDate: input.effectiveDate,
        approvedByUserId: input.approvedByUserId,
      },
    });

    await this.audit.record({
      actorUserId: input.approvedByUserId,
      action: 'CREATE',
      entityType: 'investor_mandate',
      entityId: created.id,
      after: { investorId: input.investorId, mandateType: input.mandateType },
    });

    return created;
  }

  // SRS §6.1 step 6: only restricted mandates need Shariah review.
  async requestMandateShariahReview(
    investorId: string,
    initiatedByUserId: string,
  ) {
    const mandate = await this.prisma.investorMandate.findUniqueOrThrow({
      where: { investorId },
    });
    if (
      mandate.mandateType !== 'RESTRICTED' &&
      mandate.mandateType !== 'RESTRICTED_PLUS_DIRECT'
    ) {
      throw new InvestorLifecycleError(
        'Only RESTRICTED or RESTRICTED_PLUS_DIRECT mandates require Shariah review (SRS §6.1 step 6).',
      );
    }

    return this.workflow.initiate({
      workflowTypeCode: 'INVESTOR_MANDATE_SHARIAH_REVIEW',
      entityType: 'investor_mandate',
      entityId: mandate.id,
      initiatedByUserId,
      scenario: 'STANDARD',
    });
  }

  async approveMandateShariahReview(
    workflowInstanceId: string,
    approverUserId: string,
  ) {
    const updated = await this.workflow.approveNextStep(
      workflowInstanceId,
      approverUserId,
    );
    if (updated.status !== 'APPROVED') return null;

    const mandate = await this.prisma.investorMandate.update({
      where: { id: updated.entityId },
      data: { shariahReviewedByUserId: approverUserId },
    });

    await this.audit.record({
      actorUserId: approverUserId,
      action: 'UPDATE',
      entityType: 'investor_mandate',
      entityId: mandate.id,
      after: { shariahReviewedByUserId: approverUserId },
    });

    return mandate;
  }

  // SRS §6.1 step 7: "System" transitions fund_status to ACTIVE once every
  // gate has cleared — no human approval at this step, it's a consequence
  // of the prior gates, not a new one.
  async activate(investorId: string, actorUserId?: string) {
    const investor = await this.prisma.investor.findUniqueOrThrow({
      where: { investorId },
      include: { mandate: true },
    });
    if (investor.kycStatus !== 'KYC_COMPLETE') {
      throw new InvestorLifecycleError('Cannot activate: KYC is not complete.');
    }
    // SRS §4.1.4: "Pending_KYC -> KYC_Complete -> Active -> Matured ->
    // Exited. Forward-only transitions." activate() is the only method that
    // moves fundStatus, and always toward ACTIVE — so the only valid
    // starting point is PENDING_KYC; anything else (already ACTIVE, or past
    // it at MATURED/EXITED, or a side-state SUSPENDED/WATCH_LIST) is not a
    // forward move and must be rejected here, not silently re-applied.
    if (investor.fundStatus !== 'PENDING_KYC') {
      throw new InvestorLifecycleError(
        `Cannot activate: fundStatus is ${investor.fundStatus}, not PENDING_KYC — transitions are forward-only (SRS §4.1.4).`,
      );
    }
    const mandateRestricted =
      investor.mandate?.mandateType === 'RESTRICTED' ||
      investor.mandate?.mandateType === 'RESTRICTED_PLUS_DIRECT';
    if (mandateRestricted && !investor.mandate?.shariahReviewedByUserId) {
      throw new InvestorLifecycleError(
        'Cannot activate: restricted mandate is awaiting Shariah review.',
      );
    }

    const updated = await this.prisma.investor.update({
      where: { investorId },
      data: { fundStatus: 'ACTIVE' },
    });
    await this.audit.record({
      actorUserId,
      action: 'UPDATE',
      entityType: 'investor',
      entityId: investorId,
      after: { fundStatus: 'ACTIVE' },
    });
    return updated;
  }

  // Build Plan step 6: "kyc_expiry alerts 90/60/30 [days]" — callers are
  // expected to use those three values, but the window itself is a plain
  // number so tests can probe edge behavior. Query-based — there's no
  // scheduler/notification infrastructure yet to run this on a cadence;
  // that's a later integration, not this method's job.
  async kycExpiryAlerts(windowDays: number) {
    const now = new Date();
    const windowEnd = new Date(
      now.getTime() + windowDays * 24 * 60 * 60 * 1000,
    );
    return this.prisma.investor.findMany({
      where: {
        kycStatus: 'KYC_COMPLETE',
        kycExpiryDate: { gte: now, lte: windowEnd },
        isDeleted: false,
      },
    });
  }

  // CEO instruction 2026-07-04: "the mapping of activities to roles is
  // always structured under [the] delegation service ... supports
  // institutional growth as we cascade responsibilities." Every
  // actor-driven activity in this service goes through this one check —
  // standing permission OR an active delegation, same as the workflow
  // engine — so a small team (one or two people covering multiple roles)
  // and a grown one (responsibilities cascaded via DELEGATION_GRANT
  // requests) run on identical code, never a hard-coded name.
  private async assertCapability(
    userId: string,
    functionCode: string,
    level: 'INITIATE' | 'APPROVE' | 'VIEW',
    activity: string,
  ) {
    const { eligible } = await this.delegation.hasCapability(
      userId,
      functionCode,
      level,
    );
    if (!eligible) {
      await this.audit.record({
        actorUserId: userId,
        action: 'PERMISSION_DENIED',
        entityType: 'investor_activity',
        entityId: activity,
        after: { functionCode, level },
      });
      throw new InvestorLifecycleError(
        `User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`,
      );
    }
  }

  // M1 condition: investor_id format INV-YYYYMMDD-NNN (SRS §5.2), NNN now
  // drawn from a real Postgres sequence (`investor_id_seq`) instead of a
  // row-count computation — that count-then-insert had a genuine TOCTOU
  // race under concurrent onboarding (documented and flagged since Build
  // Plan step 6); `nextval()` is atomic by construction, no race possible.
  // Behavior change, flagged (not a silent guess): NNN is now the global,
  // monotonically increasing sequence value — it no longer resets to 001
  // each calendar day, which is a strictly stronger uniqueness guarantee
  // than what it replaces. See CHECK2_EVIDENCE.md's deviations register.
  private async generateInvestorId(): Promise<string> {
    const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const [{ nextval }] = await this.prisma.$queryRaw<{ nextval: bigint }[]>`
      SELECT nextval('investor_id_seq')
    `;
    return `INV-${datePart}-${nextval.toString().padStart(3, '0')}`;
  }
}
