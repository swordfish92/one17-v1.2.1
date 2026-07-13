import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { InvestorLifecycleError } from './investor.types';

const ENTITY_TYPE = 'investor_mandate_amendment_request';

export interface RequestMandateAmendmentInput {
  investorId: string;
  proposedTargetReturnRate?: number;
  proposedRolloverDefault?: 'AUTO' | 'MANUAL' | 'NONE';
  proposedEarlyExitWaiver?: boolean;
  requestedByUserId: string;
}

// Invariant 51(c) Tier-3 (CHECK13): "investor mandate amendment" -- same
// truthy-patch/single-approval-step shape as InvestorContactAmendmentService
// (51(a-ii)), scoped to InvestorMandate's own three amendable-in-place
// fields (targetReturnRate, rolloverDefault, earlyExitWaiver). Deliberately
// EXCLUDES mandateType and the two restricted-sector/-contract arrays --
// SRS §5.3's own text ties those to the original mandate SETUP approval
// chain (invariant 42/MANDATE_SETUP), not a lightweight post-setup tweak;
// changing mandate TYPE or restrictions is a re-setup, not an amendment.
@Injectable()
export class InvestorMandateAmendmentService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
  ) {}

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: ENTITY_TYPE, entityId: activity, after: { functionCode, level } });
      throw new InvestorLifecycleError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }

  // DB CHECK constraint early_exit_waiver_requires_ssb_ref: earlyExitWaiver
  // can only be TRUE if InvestorMandate.ssbWaiverResolutionRef is already
  // on file. This lightweight amendment flow has no field to carry a fresh
  // SSB resolution reference (that documentation lives with the mandate's
  // own Shariah-review chain, invariant 42's requestMandateShariahReview/
  // approveMandateShariahReview) -- so turning the waiver ON here is only
  // ever possible if that reference was already recorded some other way.
  // Turning it OFF never needs one. "Detection, not determination": this
  // service refuses rather than inventing a resolution reference.
  private async assertEarlyExitWaiverAllowed(investorId: string, proposedEarlyExitWaiver: boolean | undefined) {
    if (proposedEarlyExitWaiver !== true) return;
    const mandate = await this.prisma.investorMandate.findUniqueOrThrow({ where: { investorId } });
    if (!mandate.ssbWaiverResolutionRef) {
      throw new InvestorLifecycleError(`Cannot enable earlyExitWaiver for investor ${investorId}: no ssbWaiverResolutionRef is on file on the mandate. Obtain a Shariah Supervisory Board waiver resolution through the mandate's own Shariah-review chain first (invariant 42) -- this lightweight amendment flow cannot invent one.`);
    }
  }

  async requestAmendment(input: RequestMandateAmendmentInput) {
    await this.assertCapability(input.requestedByUserId, 'INVESTOR_MANDATE_AMENDMENT_INITIATION', 'INITIATE', 'propose an investor mandate amendment');
    if (input.proposedTargetReturnRate === undefined && input.proposedRolloverDefault === undefined && input.proposedEarlyExitWaiver === undefined) {
      throw new InvestorLifecycleError('At least one of targetReturnRate, rolloverDefault, or earlyExitWaiver must be proposed.');
    }
    await this.prisma.investorMandate.findUniqueOrThrow({ where: { investorId: input.investorId } });
    await this.assertEarlyExitWaiverAllowed(input.investorId, input.proposedEarlyExitWaiver);

    const request = await this.prisma.investorMandateAmendmentRequest.create({
      data: {
        investorId: input.investorId,
        proposedTargetReturnRate: input.proposedTargetReturnRate,
        proposedRolloverDefault: input.proposedRolloverDefault,
        proposedEarlyExitWaiver: input.proposedEarlyExitWaiver,
        requestedByUserId: input.requestedByUserId,
      },
    });
    let instance;
    try {
      instance = await this.workflow.initiate({
        workflowTypeCode: 'INVESTOR_MANDATE_AMENDMENT',
        entityType: ENTITY_TYPE,
        entityId: request.id,
        initiatedByUserId: input.requestedByUserId,
        scenario: 'STANDARD',
      });
    } catch (err) {
      await this.audit.record({
        actorUserId: input.requestedByUserId,
        action: 'INITIATE_FAILED_COMPENSATED',
        entityType: ENTITY_TYPE,
        entityId: request.id,
        after: { workflowTypeCode: 'INVESTOR_MANDATE_AMENDMENT', reason: (err as Error).message },
      });
      await this.prisma.investorMandateAmendmentRequest.delete({ where: { id: request.id } });
      throw err;
    }
    return this.prisma.investorMandateAmendmentRequest.update({ where: { id: request.id }, data: { workflowInstanceId: instance.id } });
  }

  async decideAmendment(workflowInstanceId: string, approverUserId: string, decision: 'APPROVE' | 'REJECT', notes?: string) {
    const request = await this.prisma.investorMandateAmendmentRequest.findFirstOrThrow({ where: { workflowInstanceId } });
    if (decision === 'REJECT') {
      await this.workflow.reject(workflowInstanceId, approverUserId, notes);
      return this.prisma.investorMandateAmendmentRequest.update({ where: { id: request.id }, data: { status: 'REJECTED', rejectionNotes: notes } });
    }

    // TOCTOU close: re-check the SSB-waiver-reference gate at decide time too.
    await this.assertEarlyExitWaiverAllowed(request.investorId, request.proposedEarlyExitWaiver ?? undefined);

    const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId, notes);
    if (updated.status !== 'APPROVED') return this.prisma.investorMandateAmendmentRequest.findUniqueOrThrow({ where: { id: request.id } });

    // Truthy-patch (well, not-undefined-patch, since earlyExitWaiver=false
    // is a meaningful value, not an omission) -- same shape as
    // InvestorContactAmendmentService.decideAmendment.
    const patch: Record<string, unknown> = {};
    if (request.proposedTargetReturnRate !== null) patch.targetReturnRate = request.proposedTargetReturnRate;
    if (request.proposedRolloverDefault !== null) patch.rolloverDefault = request.proposedRolloverDefault;
    if (request.proposedEarlyExitWaiver !== null) patch.earlyExitWaiver = request.proposedEarlyExitWaiver;

    await this.prisma.investorMandate.update({ where: { investorId: request.investorId }, data: patch });
    const finalRequest = await this.prisma.investorMandateAmendmentRequest.update({ where: { id: request.id }, data: { status: 'APPROVED' } });
    await this.audit.record({ actorUserId: approverUserId, action: 'UPDATE', entityType: 'investor_mandate', entityId: request.investorId, after: patch });
    return finalRequest;
  }

  async listForInvestor(investorId: string) {
    return this.prisma.investorMandateAmendmentRequest.findMany({ where: { investorId }, orderBy: { createdAt: 'desc' } });
  }

  async getTrail(requestId: string) {
    const request = await this.prisma.investorMandateAmendmentRequest.findUniqueOrThrow({ where: { id: requestId } });
    const workflowTrail = request.workflowInstanceId ? await this.workflow.getTrail(request.workflowInstanceId) : null;
    return { request, workflowTrail };
  }
}
