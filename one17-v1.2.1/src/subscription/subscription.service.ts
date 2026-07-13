import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { LedgerService } from '../ledger/ledger.service';
import { NdMandateEngineService } from '../engine-nd-mandate/nd-mandate-engine.service';
import { EventJournalService } from '../event-journal/event-journal.service';
import { CertificateService } from '../certificate/certificate.service';
import { DelegationService } from '../delegation/delegation.service';
import { CertificateProductClassKey, PoolNdPsrSnapshot, NdWakalahSnapshot, HfUnitNavSnapshot } from '../certificate/certificate.types';
import {
  ApproveRedemptionInput,
  ApproveSubscriptionInput,
  ConfirmDepositAndSetTargetInput,
  InitiateRedemptionInput,
  InitiateSubscriptionInput,
  SubscriptionServiceError,
} from './subscription.types';

// Invariant 42(a) (CHECK9, CEO directive 7-Jul-2026): the ONE governed
// front door for "an investor's money becomes a live product holding" --
// closing the gap QUESTIONS_FOR_REVIEW.md's task #168 entry documented
// ("the entire investor capital becomes a live holding action has never
// been built ... arguably one of the most fundamental actions on the
// whole platform"). Mirrors LedgerService.requestJournalPosting/
// approveJournalPosting's shape exactly: business-rule validation BEFORE
// workflow.initiate()/approveNextStep() (so a rejected attempt never
// half-commits), and the actual state-changing write happens ONLY after
// the workflow step resolves to APPROVED -- never at initiation. Reuses
// the pre-existing CAPITAL_PLACEMENT capability (PORT_OFF initiates,
// PORT_MGR approves) rather than inventing a new one.
@Injectable()
export class SubscriptionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly workflow: WorkflowEngineService,
    private readonly ledger: LedgerService,
    private readonly ndMandate: NdMandateEngineService,
    private readonly eventJournal: EventJournalService,
    private readonly certificate: CertificateService,
    private readonly delegation: DelegationService,
  ) {}

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'subscription_request', entityId: activity, after: { functionCode, level } });
      throw new SubscriptionServiceError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }

  private async assertInvestorAndProductEligible(investorId: string, productCode: string) {
    const investor = await this.prisma.investor.findUniqueOrThrow({ where: { investorId } });
    if (investor.kycStatus !== 'KYC_COMPLETE' && investor.onboardingStage !== 'STAGE_1_EXPRESS') {
      throw new SubscriptionServiceError(
        `Investor ${investorId} is not eligible for subscription: kycStatus=${investor.kycStatus}, onboardingStage=${investor.onboardingStage} -- must be KYC_COMPLETE, or STAGE_1_EXPRESS within its deposit cap (invariant 27a; the cap itself is enforced downstream in LedgerService.createTxn at approval time).`,
      );
    }
    const product = await this.prisma.product.findUniqueOrThrow({ where: { code: productCode } });
    if (product.status !== 'ACTIVE') {
      throw new SubscriptionServiceError(`Product ${productCode} is not ACTIVE (status=${product.status}) -- cannot subscribe.`);
    }
    if (!product.shariahApprovedAt) {
      throw new SubscriptionServiceError(
        `Product ${productCode} has no recorded Shariah approval (invariant 42a/44b) -- SubscriptionService refuses to originate a new holding against an unapproved product. This is a hard governance gate, not a bug: no transaction requiring Shariah approval deploys unapproved (invariant 12).`,
      );
    }
    return { investor, product };
  }

  // Invariant 70(b) (CHECK24): "minimum subscription/redemption refused
  // below thresholds; issuance beyond authorized units refused; lock-in
  // enforced at redemption." Reads the product's currently LOCKED
  // prospectus sheet -- same in-force query ProspectusSheetService.
  // getSheetInForceAt and PsrWaterfallEngineService.runWaterfallDistribution
  // both use (duplicated here rather than imported, same cross-module-
  // dependency reasoning systemPaymentGatewayUserId's own comment above
  // gives for its duplication). A product with no locked sheet yet has no
  // thresholds to enforce -- returns null, every caller below is a no-op
  // in that case, never a fabricated default.
  private async getInForceSheet(productCode: string, asOf: Date) {
    return this.prisma.productParameters.findFirst({
      where: { productCode, approvedByUserId: { not: null }, effectiveFrom: { lte: asOf } },
      orderBy: { effectiveFrom: 'desc' },
    });
  }

  // Invariant 42(a): units are computed INSIDE this service from the
  // latest publishAndLockNav price -- NEVER caller-supplied. Only the HF
  // (UNIT_NAV) engine type has a unit concept at all; invariant 44(a)
  // forbids one on POOL/PSR_WATERFALL entirely (never even asked for
  // here). Forward-pricing rule: refuses if no NAV was published for the
  // EXACT effectiveDate -- never silently falls back to a stale NAV.
  async initiateSubscription(input: InitiateSubscriptionInput) {
    if (input.amountKobo <= 0n) throw new SubscriptionServiceError('amountKobo must be positive.');
    await this.assertInvestorAndProductEligible(input.investorId, input.productCode);

    // Invariant 70(b): minimum subscription refused below the LOCKED
    // sheet's threshold. Existing-holder top-ups use minimumAdditionalInvestmentKobo
    // instead of minimumSubscriptionKobo where the sheet sets both --
    // a first-time subscriber has no prior ProductAccount to distinguish
    // "first placement" from "top-up," matching the mechanics language
    // invariant 70(a) itself uses ("minimum additional investment").
    const sheet = await this.getInForceSheet(input.productCode, input.effectiveDate);
    if (sheet) {
      const hasExistingHolding = await this.prisma.productAccount.findFirst({ where: { investorId: input.investorId, productCode: input.productCode, status: 'ACTIVE' } });
      const floorKobo = hasExistingHolding ? (sheet.minimumAdditionalInvestmentKobo ?? sheet.minimumSubscriptionKobo) : sheet.minimumSubscriptionKobo;
      if (floorKobo != null && input.amountKobo < floorKobo) {
        throw new SubscriptionServiceError(
          `Subscription amount ${input.amountKobo} kobo is below the governed minimum (${floorKobo} kobo) on ${input.productCode}'s approved prospectus sheet (invariant 70b).`,
        );
      }
    }

    const request = await this.prisma.subscriptionRequest.create({
      data: {
        requestType: 'SUBSCRIPTION',
        investorId: input.investorId,
        productCode: input.productCode,
        amountKobo: input.amountKobo,
        effectiveDate: input.effectiveDate,
        initiatedByUserId: input.initiatedByUserId,
        status: 'PENDING',
      },
    });
    // Invariant 49(a) (CHECK11, atomicity sweep): same class as the
    // PmsService.submitSelfScore fix -- if initiate() throws (e.g. the
    // caller lacks CAPITAL_PLACEMENT INITIATE), this request row would
    // otherwise be left permanently dangling with workflowInstanceId NULL
    // and no governed path to resume it. Compensating delete, not a DB
    // transaction (see submitSelfScore's comment for why one can't span
    // into workflow.initiate() across service boundaries here).
    let instance;
    try {
      instance = await this.workflow.initiate({
        workflowTypeCode: 'SUBSCRIPTION_APPROVAL',
        entityType: 'subscription_request',
        entityId: request.id,
        initiatedByUserId: input.initiatedByUserId,
        scenario: 'STANDARD',
        amountKobo: input.amountKobo,
      });
    } catch (err) {
      // Invariant 49(b2) (CHECK11 advisor ruling): see PmsService.
      // submitSelfScore's matching comment -- capability failures already
      // audit-log inside WorkflowEngineService itself; this covers every
      // other failure cause so the attempt+compensation isn't invisible.
      await this.audit.record({
        actorUserId: input.initiatedByUserId,
        action: 'INITIATE_FAILED_COMPENSATED',
        entityType: 'subscription_request',
        entityId: request.id,
        after: { workflowTypeCode: 'SUBSCRIPTION_APPROVAL', reason: (err as Error).message },
      });
      await this.prisma.subscriptionRequest.delete({ where: { id: request.id } });
      throw err;
    }
    return this.prisma.subscriptionRequest.update({
      where: { id: request.id },
      data: { workflowInstanceId: instance.id },
    });
  }

  async initiateRedemption(input: InitiateRedemptionInput) {
    if (input.amountKobo <= 0n) throw new SubscriptionServiceError('amountKobo must be positive.');
    // Stage-1 no-redemption gate is authoritative in LedgerService.createTxn
    // (invariant 27a) -- checked again, hard, at approval time. Refusing it
    // AGAIN here would just be a second, driftable copy of the same rule.
    await this.prisma.investor.findUniqueOrThrow({ where: { investorId: input.investorId } });
    const product = await this.prisma.product.findUniqueOrThrow({ where: { code: input.productCode } });
    if (product.status !== 'ACTIVE') {
      throw new SubscriptionServiceError(`Product ${input.productCode} is not ACTIVE (status=${product.status}) -- cannot redeem.`);
    }

    // Invariant 70(b): minimum redemption + lock-in, read off the LOCKED
    // sheet. Lock-in is enforced for PSR_WATERFALL pools only
    // (poolTenorMonths) -- MANDATE's own lock-in concept (tenorLockInMonths)
    // isn't reachable through this SubscriptionRequest/ProductAccount path
    // today (MANDATE holdings live on NdMandateAccount, which
    // approveRedemption below never queries -- a pre-existing gap, not
    // introduced here), and UNIT_NAV carries no lock-in field at all
    // (open-end funds). "Early exit routes through the existing early-exit/
    // penalty-to-charity machinery, never a silent bypass" (invariant 70b):
    // that machinery's actual computation does NOT exist anywhere in this
    // codebase yet -- DistributionController's own header comment already
    // documents this as PARKED ("no business logic exists for early-exit-
    // penalty computation anywhere in the codebase yet," QUESTIONS_FOR_
    // REVIEW.md). Never a silent bypass means: refuse the normal redemption
    // path outright during lock-in rather than inventing a penalty rate.
    const sheet = await this.getInForceSheet(input.productCode, input.effectiveDate);
    if (sheet) {
      if (sheet.minimumRedemptionKobo != null && input.amountKobo < sheet.minimumRedemptionKobo) {
        throw new SubscriptionServiceError(
          `Redemption amount ${input.amountKobo} kobo is below the governed minimum (${sheet.minimumRedemptionKobo} kobo) on ${input.productCode}'s approved prospectus sheet (invariant 70b).`,
        );
      }
      if (product.engineType === 'PSR_WATERFALL' && sheet.poolTenorMonths != null) {
        const account = await this.prisma.productAccount.findFirst({ where: { investorId: input.investorId, productCode: input.productCode, status: 'ACTIVE' } });
        if (account) {
          const elapsedMonths = (input.effectiveDate.getTime() - account.startDate.getTime()) / (30.4375 * 24 * 60 * 60 * 1000);
          if (elapsedMonths < sheet.poolTenorMonths) {
            throw new SubscriptionServiceError(
              `Redemption refused: this holding is within its ${sheet.poolTenorMonths}-month lock-in (started ${account.startDate.toISOString().slice(0, 10)}, ${elapsedMonths.toFixed(1)} months elapsed). Early exit requires the early-exit/penalty-to-charity process -- PARKED pending a specified penalty rate (see QUESTIONS_FOR_REVIEW.md), never a silent bypass through the standard redemption path (invariant 70b).`,
            );
          }
        }
      }
    }

    const request = await this.prisma.subscriptionRequest.create({
      data: {
        requestType: 'REDEMPTION',
        investorId: input.investorId,
        productCode: input.productCode,
        amountKobo: input.amountKobo,
        effectiveDate: input.effectiveDate,
        initiatedByUserId: input.initiatedByUserId,
        status: 'PENDING',
      },
    });
    // Invariant 49(a) (CHECK11, atomicity sweep) -- see initiateSubscription's
    // matching comment above.
    let instance;
    try {
      instance = await this.workflow.initiate({
        workflowTypeCode: 'REDEMPTION_APPROVAL',
        entityType: 'subscription_request',
        entityId: request.id,
        initiatedByUserId: input.initiatedByUserId,
        scenario: 'STANDARD',
        amountKobo: input.amountKobo,
      });
    } catch (err) {
      // Invariant 49(b2) (CHECK11 advisor ruling): see PmsService.
      // submitSelfScore's matching comment -- capability failures already
      // audit-log inside WorkflowEngineService itself; this covers every
      // other failure cause so the attempt+compensation isn't invisible.
      await this.audit.record({
        actorUserId: input.initiatedByUserId,
        action: 'INITIATE_FAILED_COMPENSATED',
        entityType: 'subscription_request',
        entityId: request.id,
        after: { workflowTypeCode: 'REDEMPTION_APPROVAL', reason: (err as Error).message },
      });
      await this.prisma.subscriptionRequest.delete({ where: { id: request.id } });
      throw err;
    }
    return this.prisma.subscriptionRequest.update({
      where: { id: request.id },
      data: { workflowInstanceId: instance.id },
    });
  }

  // ONLY this method writes a live ProductAccount + cash-leg Txn (or
  // NdMandateAccount for MANDATE products) -- never initiateSubscription.
  async approveSubscription(input: ApproveSubscriptionInput) {
    const request = await this.prisma.subscriptionRequest.findFirstOrThrow({
      where: { workflowInstanceId: input.workflowInstanceId },
    });
    if (request.status !== 'PENDING') {
      throw new SubscriptionServiceError(`subscription_request ${request.id} is ${request.status}, not PENDING -- already decided.`);
    }
    const { product } = await this.assertInvestorAndProductEligible(request.investorId, request.productCode);
    if (product.engineType === 'PSR_WATERFALL' && request.computedUnits != null) {
      // Structurally unreachable via the DTO (no unit field is ever
      // accepted for a PSR product), kept as a named, explicit refusal
      // rather than a silent assumption -- invariant 44(a)/AMD-01.
      throw new SubscriptionServiceError('PSR_WATERFALL (pool) products never carry a unit computation -- AMD-01.');
    }

    let computedUnits: number | null = null;
    let navPerUnitUsed: number | null = null;
    let ledgerEntityCode: string;
    if (product.engineType === 'UNIT_NAV') {
      const entity = await this.prisma.ledgerEntity.findFirstOrThrow({ where: { productCode: product.code } });
      ledgerEntityCode = entity.code;
      const navRecord = await this.prisma.navRecord.findUnique({
        where: { ledgerEntityCode_valuationDate: { ledgerEntityCode, valuationDate: request.effectiveDate } },
      });
      if (!navRecord) {
        throw new SubscriptionServiceError(
          `No published NAV for ${ledgerEntityCode} on ${request.effectiveDate.toISOString().slice(0, 10)} -- forward-pricing rule (invariant 42a): publish NAV for that date first, then approve. Never falls back to a stale NAV.`,
        );
      }
      navPerUnitUsed = Number(navRecord.navPerUnit);
      computedUnits = (Number(request.amountKobo) / 100) / navPerUnitUsed;

      // Invariant 70(b): "issuance beyond authorized units refused."
      // Business-rule validation before workflow.approveNextStep(), same
      // placement discipline this method's own header comment establishes
      // (a rejected attempt never half-commits, never partially advances
      // the workflow step either).
      const sheet = await this.getInForceSheet(product.code, request.effectiveDate);
      if (sheet?.authorizedUnits != null) {
        const issued = await this.prisma.productAccount.aggregate({
          where: { productCode: product.code, status: 'ACTIVE' },
          _sum: { unitsHeld: true },
        });
        const issuedSoFar = Number(issued._sum.unitsHeld ?? 0);
        const authorized = Number(sheet.authorizedUnits);
        if (issuedSoFar + computedUnits > authorized) {
          throw new SubscriptionServiceError(
            `Subscription refused: issuing ${computedUnits.toFixed(6)} units would bring total units in issue to ${(issuedSoFar + computedUnits).toFixed(6)}, exceeding ${product.code}'s authorized units cap (${authorized}) on its approved prospectus sheet (invariant 70b).`,
          );
        }
      }
    } else if (product.engineType === 'PSR_WATERFALL') {
      const entity = await this.prisma.ledgerEntity.findFirstOrThrow({ where: { productCode: product.code } });
      ledgerEntityCode = entity.code;
    } else {
      const entity = await this.prisma.ledgerEntity.findFirstOrThrow({ where: { productCode: product.code } });
      ledgerEntityCode = entity.code;
    }

    const updated = await this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
    if (updated.status !== 'APPROVED') {
      return this.prisma.subscriptionRequest.findUniqueOrThrow({ where: { id: request.id } });
    }

    if (product.engineType === 'MANDATE') {
      const mandate = await this.ndMandate.createMandate({
        mandateRef: `SUB-${request.id}`,
        ledgerEntityCode: ledgerEntityCode!,
        participantType: 'INVESTOR',
        investorId: request.investorId,
        sharingMode: 'MUDARABAH_PSR',
        investorRatio: 0.7,
        mudaribRatio: 0.3,
        startDate: request.effectiveDate,
        // createMandate itself requires ND_MANDATE_INITIATION (PORT_OFF) --
        // the original subscription-request initiator, who already holds
        // it, not the checker approving THIS step (invariant 42c).
        createdByUserId: request.initiatedByUserId,
        // Invariant 43(a): persisted for AUM aggregation -- see the schema
        // field's own comment on why this didn't exist before CHECK10.
        committedCapitalKobo: request.amountKobo,
      });
      // "ND = wraps createMandate+activateMandate" (invariant 42a): the
      // checker approving this subscription also activates the mandate
      // createMandate just opened its own ND_MANDATE_ACTIVATION workflow
      // for -- maker!=checker holds because the mandate's creator
      // (request.initiatedByUserId, PORT_OFF) differs from its activator
      // (input.approverUserId, PORT_MGR).
      await this.ndMandate.activateMandate({ ndMandateAccountId: mandate.id, activatedByUserId: input.approverUserId });
      const finalRequest = await this.prisma.subscriptionRequest.update({
        where: { id: request.id },
        data: { status: 'APPROVED', resultNdMandateAccountId: mandate.id, decidedAt: new Date() },
      });
      await this.audit.record({ actorUserId: input.approverUserId, action: 'CREATE', entityType: 'subscription_request', entityId: request.id, after: { resultNdMandateAccountId: mandate.id } });

      // Invariant 52(b) (CHECK12): "Issuance is IMMEDIATE and AUTOMATIC at
      // subscription approval ... for HF, Pool, and ND Mandate." Class
      // determined off the mandate's own sharingMode (createMandate above
      // always passes MUDARABAH_PSR today, but reading it back rather than
      // assuming keeps this correct if a future caller ever creates a
      // WAKALAH mandate through this same path).
      const productClass: CertificateProductClassKey = mandate.sharingMode === 'WAKALAH' ? 'ND_WAKALAH' : 'POOL_ND_PSR';
      const tenorLabel = mandate.maturityDate ? `${mandate.startDate.toISOString().slice(0, 10)} – ${mandate.maturityDate.toISOString().slice(0, 10)}` : 'Open-ended (per mandate terms)';
      const snapshot: PoolNdPsrSnapshot | NdWakalahSnapshot =
        productClass === 'ND_WAKALAH'
          ? { principalKobo: mandate.committedCapitalKobo!.toString(), tenorLabel, wakalahFeeRatePa: mandate.wakalahFeeRatePa ? Number(mandate.wakalahFeeRatePa) : null, expectedProfitPct: mandate.targetReturnPct ? Number(mandate.targetReturnPct) : null }
          : { principalKobo: mandate.committedCapitalKobo!.toString(), tenorLabel, investorRatioPct: mandate.investorRatio ? Number(mandate.investorRatio) : null, mudaribRatioPct: mandate.mudaribRatio ? Number(mandate.mudaribRatio) : null, targetReturnPct: mandate.targetReturnPct ? Number(mandate.targetReturnPct) : null };
      await this.certificate.issueOrQueueCertificate({
        investorId: request.investorId, productClass, ndMandateAccountId: mandate.id, dataSnapshot: snapshot, triggeredByUserId: input.approverUserId,
      });

      return finalRequest;
    }

    const account = await this.prisma.productAccount.create({
      data: {
        investorId: request.investorId,
        productCode: request.productCode,
        startDate: request.effectiveDate,
        principalOrCommittedKobo: request.amountKobo,
        unitsHeld: computedUnits,
      },
    });
    await this.ledger.createTxn({
      txnType: 'SUBSCRIPTION',
      ledgerEntityCode: ledgerEntityCode!,
      productAccountId: account.id,
      valueDate: request.effectiveDate,
      amountKobo: request.amountKobo,
      // The Txn's maker is the ORIGINAL request initiator (who holds
      // TXN_ENTRY via CAPITAL_PLACEMENT's PORT_OFF grant), not the
      // approver -- PORT_MGR holds CAPITAL_PLACEMENT APPROVE but not
      // TXN_ENTRY, and conceptually the initiator is who "entered" this
      // transaction's data; the approval decision is already tracked
      // separately in WorkflowStepApproval.
      makerUserId: request.initiatedByUserId,
      payerBankAccountId: input.payerBankAccountId,
      thirdPartyPayer: input.thirdPartyPayer,
    });

    // Invariant 42(b): every money-moving event auto-generates its journal
    // via generateAndRequestPosting -- never a direct post. CAPITAL_
    // PLACEMENT_RECEIVED is the exact event_journal_config row this closes
    // (Check-2 origin, previously dangling -- see QUESTIONS_FOR_REVIEW.md
    // task #168). journalInitiatorUserId (NOT the CAPITAL_PLACEMENT maker)
    // per WmService.chargeAdvisoryFee's established JOURNAL_ENTRIES-is-a-
    // separate-gate precedent. The resulting journal stays DRAFT (posting
    // requested, not posted) until a JOURNAL_ENTRIES-APPROVE checker posts
    // it -- this call never posts anything itself.
    await this.eventJournal.generateAndRequestPosting({
      eventType: 'CAPITAL_PLACEMENT_RECEIVED',
      ledgerEntityCode: ledgerEntityCode!,
      entryDate: request.effectiveDate,
      amountKobo: request.amountKobo,
      referenceTokens: { investor_id: request.investorId, date: request.effectiveDate.toISOString().slice(0, 10) },
      createdByUserId: input.journalInitiatorUserId,
    });

    const finalRequest = await this.prisma.subscriptionRequest.update({
      where: { id: request.id },
      data: {
        status: 'APPROVED',
        resultProductAccountId: account.id,
        computedUnits,
        navPerUnitUsed,
        decidedAt: new Date(),
      },
    });
    await this.audit.record({ actorUserId: input.approverUserId, action: 'CREATE', entityType: 'subscription_request', entityId: request.id, after: { resultProductAccountId: account.id } });

    // Invariant 52(b) (CHECK12): "Issuance is IMMEDIATE and AUTOMATIC at
    // subscription approval ... for HF, Pool." Two structurally separate
    // snapshots, same reasoning as StatementService's
    // buildUnitNavStatement/buildPsrStatement split (invariant 44a) -- the
    // HF path can never reach a code route that omits units/NAV, and vice
    // versa. account.psrInvestorPct/psrMudaribPct/targetReturnPctBenchmark/
    // maturityDate are genuinely not populated by THIS create() call today
    // (a pre-existing gap, not invented here -- see
    // QUESTIONS_FOR_REVIEW.md) so a plain-pool certificate's PSR/target-
    // return/tenor fields render "—" until that's wired.
    if (product.engineType === 'UNIT_NAV') {
      const hfSnapshot: HfUnitNavSnapshot = { unitsAllotted: computedUnits!, navPerUnitAtAllotment: navPerUnitUsed!, allotmentDate: request.effectiveDate.toISOString().slice(0, 10) };
      await this.certificate.issueOrQueueCertificate({
        investorId: request.investorId, productClass: 'HF_UNIT_NAV', productAccountId: account.id, dataSnapshot: hfSnapshot, triggeredByUserId: input.approverUserId,
      });
    } else {
      const tenorLabel = account.maturityDate ? `${account.startDate.toISOString().slice(0, 10)} – ${account.maturityDate.toISOString().slice(0, 10)}` : 'Open-ended (per product terms)';
      const poolSnapshot: PoolNdPsrSnapshot = {
        principalKobo: account.principalOrCommittedKobo.toString(), tenorLabel,
        investorRatioPct: account.psrInvestorPct ? Number(account.psrInvestorPct) : null,
        mudaribRatioPct: account.psrMudaribPct ? Number(account.psrMudaribPct) : null,
        targetReturnPct: account.targetReturnPctBenchmark ? Number(account.targetReturnPctBenchmark) : null,
      };
      await this.certificate.issueOrQueueCertificate({
        investorId: request.investorId, productClass: 'POOL_ND_PSR', productAccountId: account.id, dataSnapshot: poolSnapshot, triggeredByUserId: input.approverUserId,
      });
    }

    return finalRequest;
  }

  async approveRedemption(input: ApproveRedemptionInput) {
    const request = await this.prisma.subscriptionRequest.findFirstOrThrow({
      where: { workflowInstanceId: input.workflowInstanceId },
    });
    if (request.status !== 'PENDING') {
      throw new SubscriptionServiceError(`subscription_request ${request.id} is ${request.status}, not PENDING -- already decided.`);
    }
    const account = await this.prisma.productAccount.findFirstOrThrow({
      where: { investorId: request.investorId, productCode: request.productCode, status: 'ACTIVE' },
    });
    const entity = await this.prisma.ledgerEntity.findFirstOrThrow({ where: { productCode: request.productCode } });

    const updated = await this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
    if (updated.status !== 'APPROVED') {
      return this.prisma.subscriptionRequest.findUniqueOrThrow({ where: { id: request.id } });
    }

    // Stage-1 no-redemption gate (invariant 27a) fires here, hard, inside
    // createTxn -- this call is genuinely allowed to throw and leave the
    // workflow instance APPROVED-but-unexecuted; see LedgerService's own
    // documented false-failure class (invariant 30d) for why that's a
    // known, accepted shape rather than a new defect.
    await this.ledger.createTxn({
      txnType: 'REDEMPTION',
      ledgerEntityCode: entity.code,
      productAccountId: account.id,
      valueDate: request.effectiveDate,
      amountKobo: request.amountKobo,
      makerUserId: request.initiatedByUserId,
      payoutBankAccountId: input.payoutBankAccountId,
    });

    const finalRequest = await this.prisma.subscriptionRequest.update({
      where: { id: request.id },
      data: { status: 'APPROVED', resultProductAccountId: account.id, decidedAt: new Date() },
    });
    await this.audit.record({ actorUserId: input.approverUserId, action: 'UPDATE', entityType: 'subscription_request', entityId: request.id, after: { redeemedKobo: request.amountKobo.toString() } });
    return finalRequest;
  }

  // CHECK16 62(h) (CEO workflow ruling): for POOL and MANDATE classes ONLY
  // (never UNIT_NAV — invariant 44a forbids a unit-fund from carrying a
  // target-return concept at all) — the Fund Accountant's own governed step,
  // separate from the CAPITAL_PLACEMENT approval that created the account
  // (PORT_MGR's approveSubscription call above never touches these two
  // fields, a documented pre-existing gap — see the comment at that call
  // site). maker≠checker here means: the FA confirming must be a DIFFERENT
  // actor than whoever INITIATED the subscription request (request.
  // initiatedByUserId) — the same "maker vs checker" shape this method's own
  // sibling already uses for the Txn maker and the mandate's createdByUserId.
  // Certificates are immutable once issued (never retro-edited — same
  // discipline as the CHECK15 Investment Mandate rename), so this
  // deliberately RE-ISSUES a fresh certificate carrying the now-real values
  // rather than mutating the one issued at subscription approval; statements
  // need no equivalent fix — they already read targetReturnPct/maturityDate
  // live off the account at generation time, not off a cached snapshot.
  async confirmDepositAndSetTarget(input: ConfirmDepositAndSetTargetInput) {
    if (input.targetReturnPct <= 0 || input.targetReturnPct > 100) {
      throw new SubscriptionServiceError('targetReturnPct must be a percentage between 0 and 100 (exclusive of 0).');
    }
    const request = await this.prisma.subscriptionRequest.findUniqueOrThrow({ where: { id: input.subscriptionRequestId } });
    if (request.status !== 'APPROVED') {
      throw new SubscriptionServiceError(`subscription_request ${request.id} is ${request.status}, not APPROVED — the account must exist before deposit/target confirmation.`);
    }
    if (request.requestType !== 'SUBSCRIPTION') {
      throw new SubscriptionServiceError('Deposit/target confirmation only applies to SUBSCRIPTION requests, never REDEMPTION.');
    }
    const product = await this.prisma.product.findUniqueOrThrow({ where: { code: request.productCode } });
    if (product.engineType !== 'PSR_WATERFALL' && product.engineType !== 'MANDATE') {
      throw new SubscriptionServiceError(`${product.code} is engineType ${product.engineType} — targeted return at subscription applies only to POOL (PSR_WATERFALL) and MANDATE classes, never UNIT_NAV (invariant 44a).`);
    }

    await this.assertCapability(input.confirmedByUserId, 'SUBSCRIPTION_TARGET_CONFIRMATION', 'INITIATE', 'confirm deposit and set target return / maturity');
    if (input.confirmedByUserId === request.initiatedByUserId) {
      throw new SubscriptionServiceError('The Fund Accountant confirming deposit/target cannot be the same user who initiated this subscription request (maker≠checker).');
    }

    if (product.engineType === 'MANDATE') {
      if (!request.resultNdMandateAccountId) throw new SubscriptionServiceError(`subscription_request ${request.id} has no resultNdMandateAccountId — cannot confirm.`);
      const existing = await this.prisma.ndMandateAccount.findUniqueOrThrow({ where: { id: request.resultNdMandateAccountId } });
      if (existing.targetReturnPct != null) {
        throw new SubscriptionServiceError(`Target return is already confirmed for mandate ${existing.id} (${existing.targetReturnPct}%) — this step is one-time, not an amendment (use the Mandate Amendment flow for a later change).`);
      }
      const mandate = await this.prisma.ndMandateAccount.update({
        where: { id: request.resultNdMandateAccountId },
        data: { targetReturnPct: input.targetReturnPct, maturityDate: input.maturityDate, profitPaymentInterval: input.profitPaymentInterval },
      });
      await this.audit.record({
        actorUserId: input.confirmedByUserId, action: 'UPDATE', entityType: 'nd_mandate_account', entityId: mandate.id,
        after: { targetReturnPct: input.targetReturnPct, maturityDate: input.maturityDate.toISOString(), profitPaymentInterval: input.profitPaymentInterval ?? null, confirmedDeposit: true },
      });
      const tenorLabel = `${mandate.startDate.toISOString().slice(0, 10)} – ${input.maturityDate.toISOString().slice(0, 10)}`;
      const productClass: CertificateProductClassKey = mandate.sharingMode === 'WAKALAH' ? 'ND_WAKALAH' : 'POOL_ND_PSR';
      const snapshot: PoolNdPsrSnapshot | NdWakalahSnapshot =
        productClass === 'ND_WAKALAH'
          ? { principalKobo: mandate.committedCapitalKobo!.toString(), tenorLabel, wakalahFeeRatePa: mandate.wakalahFeeRatePa ? Number(mandate.wakalahFeeRatePa) : null, expectedProfitPct: input.targetReturnPct }
          : { principalKobo: mandate.committedCapitalKobo!.toString(), tenorLabel, investorRatioPct: mandate.investorRatio ? Number(mandate.investorRatio) : null, mudaribRatioPct: mandate.mudaribRatio ? Number(mandate.mudaribRatio) : null, targetReturnPct: input.targetReturnPct };
      await this.certificate.issueOrQueueCertificate({
        investorId: request.investorId, productClass, ndMandateAccountId: mandate.id, dataSnapshot: snapshot, triggeredByUserId: input.confirmedByUserId,
      });
      return mandate;
    }

    if (!request.resultProductAccountId) throw new SubscriptionServiceError(`subscription_request ${request.id} has no resultProductAccountId — cannot confirm.`);
    const existingAccount = await this.prisma.productAccount.findUniqueOrThrow({ where: { id: request.resultProductAccountId } });
    if (existingAccount.targetReturnPctBenchmark != null) {
      throw new SubscriptionServiceError(`Target return is already confirmed for account ${existingAccount.id} (${existingAccount.targetReturnPctBenchmark}%) — this step is one-time, not an amendment.`);
    }
    const account = await this.prisma.productAccount.update({
      where: { id: request.resultProductAccountId },
      data: { targetReturnPctBenchmark: input.targetReturnPct, maturityDate: input.maturityDate, profitPaymentInterval: input.profitPaymentInterval },
    });
    await this.audit.record({
      actorUserId: input.confirmedByUserId, action: 'UPDATE', entityType: 'product_account', entityId: account.id,
      after: { targetReturnPctBenchmark: input.targetReturnPct, maturityDate: input.maturityDate.toISOString(), profitPaymentInterval: input.profitPaymentInterval ?? null, confirmedDeposit: true },
    });
    const tenorLabel = `${account.startDate.toISOString().slice(0, 10)} – ${input.maturityDate.toISOString().slice(0, 10)}`;
    const poolSnapshot: PoolNdPsrSnapshot = {
      principalKobo: account.principalOrCommittedKobo.toString(), tenorLabel,
      investorRatioPct: account.psrInvestorPct ? Number(account.psrInvestorPct) : null,
      mudaribRatioPct: account.psrMudaribPct ? Number(account.psrMudaribPct) : null,
      targetReturnPct: input.targetReturnPct,
    };
    await this.certificate.issueOrQueueCertificate({
      investorId: request.investorId, productClass: 'POOL_ND_PSR', productAccountId: account.id, dataSnapshot: poolSnapshot, triggeredByUserId: input.confirmedByUserId,
    });
    return account;
  }

  async rejectRequest(workflowInstanceId: string, approverUserId: string, notes?: string) {
    const request = await this.prisma.subscriptionRequest.findFirstOrThrow({ where: { workflowInstanceId } });
    await this.workflow.reject(workflowInstanceId, approverUserId, notes);
    return this.prisma.subscriptionRequest.update({
      where: { id: request.id },
      data: { status: 'REJECTED', rejectionReason: notes, decidedAt: new Date() },
    });
  }

  // Invariant 49(g)(i) (CHECK11): the register read side -- requests must
  // stay findable after they leave the inbox (once APPROVED/REJECTED, the
  // generic Workflow Inbox never shows them again). Read-only, no state
  // change, no capability check here -- the controller gates VIEW access.
  async listRequests(filter: { productCode?: string; investorId?: string; requestType?: 'SUBSCRIPTION' | 'REDEMPTION'; status?: 'PENDING' | 'APPROVED' | 'REJECTED' } = {}) {
    return this.prisma.subscriptionRequest.findMany({
      where: {
        productCode: filter.productCode,
        investorId: filter.investorId,
        requestType: filter.requestType,
        status: filter.status,
      },
      include: {
        investor: { select: { investorId: true, fullLegalName: true } },
        product: { select: { code: true, name: true, engineType: true } },
        initiator: { select: { id: true, displayName: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getRequest(id: string) {
    const request = await this.prisma.subscriptionRequest.findUniqueOrThrow({
      where: { id },
      include: {
        investor: { select: { investorId: true, fullLegalName: true, contactEmail: true } },
        product: { select: { code: true, name: true, engineType: true } },
        initiator: { select: { id: true, displayName: true, email: true } },
      },
    });
    // CHECK16 62(h): surface the current target-return/maturity confirmation
    // state (or its absence) so the ops-ui detail screen can render the FA
    // confirmation form for an unconfirmed POOL/MANDATE account, or a
    // read-only display once confirmed -- a plain lookup, not a governed
    // action, so no capability gate belongs here (the controller/service
    // methods that WRITE these fields carry their own).
    let targetConfirmation: { targetReturnPct: number | null; maturityDate: string | null } | null = null;
    if (request.resultProductAccountId) {
      const account = await this.prisma.productAccount.findUnique({ where: { id: request.resultProductAccountId } });
      if (account) targetConfirmation = { targetReturnPct: account.targetReturnPctBenchmark ? Number(account.targetReturnPctBenchmark) : null, maturityDate: account.maturityDate?.toISOString() ?? null };
    } else if (request.resultNdMandateAccountId) {
      const mandate = await this.prisma.ndMandateAccount.findUnique({ where: { id: request.resultNdMandateAccountId } });
      if (mandate) targetConfirmation = { targetReturnPct: mandate.targetReturnPct ? Number(mandate.targetReturnPct) : null, maturityDate: mandate.maturityDate?.toISOString() ?? null };
    }
    return { ...request, targetConfirmation };
  }

  // CHECK16 62(b): the portal's own front door into initiateRedemption —
  // reuses it verbatim (same REDEMPTION_APPROVAL workflow, same PORT_OFF/
  // PORT_MGR/REL_OFF/BD approval chain, governance completely unchanged).
  // ownership is checked here (never trusted from the caller) so a portal
  // session can only ever redeem its OWN holding, same structural-isolation
  // discipline PortalWmController's assertInvestor() already applies one
  // layer up. Uses the SAME find-or-create system-AppUser shape payment-
  // gateway.service.ts's systemPaymentGatewayUserId() established — see
  // SYSTEM_PORTAL_CLIENT's seed.ts role-definition comment for why this is
  // a separate system identity rather than a reuse of that one. No notes
  // field — SubscriptionRequest has nowhere to persist free text, so one
  // is deliberately not accepted here rather than silently discarded.
  async initiatePortalRedemption(investorId: string, productAccountId: string, amountKobo: bigint) {
    const account = await this.prisma.productAccount.findUniqueOrThrow({ where: { id: productAccountId } });
    if (account.investorId !== investorId) {
      throw new SubscriptionServiceError('This holding does not belong to the requesting investor.');
    }
    const systemUserId = await this.systemPortalClientUserId();
    return this.initiateRedemption({
      investorId,
      productCode: account.productCode,
      amountKobo,
      effectiveDate: new Date(),
      initiatedByUserId: systemUserId,
    });
  }

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

  // Invariant 70(c) (CHECK24): the portal's own front door into
  // initiateSubscription -- mirrors initiatePortalRedemption's shape
  // immediately above (delegates straight to the governed method, so
  // EVERY check initiateSubscription/assertInvestorAndProductEligible
  // already performs -- KYC tier, product ACTIVE, Shariah-approved -- is
  // exercised unchanged; nothing here duplicates or skips any of it).
  // investorId comes from the caller's OWN portal session (the controller
  // derives it via assertInvestor(), never a body param), so there is no
  // separate ownership check to perform the way initiatePortalRedemption
  // checks account.investorId against an EXISTING holding -- a brand-new
  // subscription has no prior account to check ownership against.
  //
  // Identity used as initiatedByUserId: NOT systemPortalClientUserId()
  // above. SYSTEM_PORTAL_CLIENT is seeded with REDEMPTION_PROCESSING +
  // TXN_ENTRY only (prisma/seed.ts) -- deliberately NOT CAPITAL_PLACEMENT,
  // because subscription-initiation's only caller today is
  // PaymentGatewayService.promoteInflow (the webhook path), which uses the
  // SYSTEM_PAYMENT_GATEWAY identity (seed.ts: {function:
  // 'CAPITAL_PLACEMENT', role: 'SYSTEM_PAYMENT_GATEWAY', level:
  // 'INITIATE'}) -- workflow.initiate() checks the initiator's OWN
  // capability against SUBSCRIPTION_APPROVAL's initiatorFunctionCode
  // (CAPITAL_PLACEMENT), so a portal-direct call needs an identity that
  // already holds it. Granting SYSTEM_PORTAL_CLIENT that capability (or
  // minting a third system role) would mean a new seed.ts RBAC row, out of
  // scope for this pass (see this build's own constraints) -- reusing the
  // ALREADY-seeded SYSTEM_PAYMENT_GATEWAY identity instead adds zero new
  // grants. Both identities represent the exact same thing structurally: "a
  // SubscriptionRequest that did not originate from a staff member's own
  // manual entry," pending the SAME PORT_MGR checker either way -- no
  // governance is bypassed by this reuse, and no money moves until that
  // checker approves (approveSubscription is untouched by this method).
  // systemPaymentGatewayUserId() below is a deliberate DUPLICATE of
  // PaymentGatewayService's own private helper of the same name/shape
  // (same idempotent find-or-create), not a shared import -- matching this
  // codebase's own established per-service convention for these system
  // identities (see that method's comment, and SchedulerService/
  // ProcurementService's own copies) and avoiding a circular module
  // dependency (PaymentGatewayModule already imports SubscriptionModule).
  async initiatePortalSubscription(investorId: string, productCode: string, amountKobo: bigint) {
    const systemUserId = await this.systemPaymentGatewayUserId();
    return this.initiateSubscription({
      investorId,
      productCode,
      amountKobo,
      effectiveDate: new Date(),
      initiatedByUserId: systemUserId,
    });
  }

  private async systemPaymentGatewayUserId(): Promise<string> {
    const email = 'system-payment-gateway@one17.test';
    let user = await this.prisma.appUser.findUnique({ where: { email } });
    if (!user) {
      user = await this.prisma.appUser.create({ data: { email, displayName: 'System Payment Gateway' } });
    }
    const hasRole = await this.prisma.userRole.findFirst({ where: { userId: user.id, roleCode: 'SYSTEM_PAYMENT_GATEWAY' } });
    if (!hasRole) {
      await this.prisma.userRole.create({ data: { userId: user.id, roleCode: 'SYSTEM_PAYMENT_GATEWAY' } });
    }
    return user.id;
  }
}
