import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { DocumentService } from '../document/document.service';
import { InvestorLifecycleError } from './investor.types';

const APPLICATION_TYPE = 'INVESTOR_BANK_ACCOUNT_CHANGE';
const ENTITY_TYPE = 'investor_bank_account_change_request';

// Invariant 51(a-i) (CHECK12, advisor BA lifecycle-gap register, Tier 1 --
// "THE fraud-critical item"): a governed change to WHERE an investor's
// redemption proceeds get paid. Deliberately staff-mediated (BD captures
// the client's signed instruction + evidence), never a portal self-service
// action -- self-service bank-detail change is the classic account-
// takeover vector this control exists to prevent.
//
// Lifecycle: requestChange (DRAFT row) -> attachEvidence (DocumentRegister,
// checklist-gated) -> submitChange (workflow.initiate, PENDING) ->
// decideChangeRequest step 1 (BANK_ACCOUNT_CHANGE_APPROVAL, paperwork
// checker) -> decideChangeRequest step 2 (BANK_ACCOUNT_CHANGE_
// REVERIFICATION, independent client confirmation) -> APPROVED creates the
// resulting InvestorBankAccount ACTIVE-but-not-primary with a cooling-off
// window -> settleDueChanges (read-time guard, no scheduled flip, same
// precedent as InvestorOnboardingConfig.stage2DeadlineAt) swaps primacy
// once the window elapses. Nothing pays to the new account before that
// swap -- see LedgerService.createTxn's REDEMPTION branch.
@Injectable()
export class InvestorBankAccountChangeService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
    private readonly documents: DocumentService,
  ) {}

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: ENTITY_TYPE, entityId: activity, after: { functionCode, level } });
      throw new InvestorLifecycleError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }

  async requestChange(input: {
    investorId: string;
    proposedBankName: string;
    proposedAccountNumber: string;
    proposedAccountName: string;
    proposedAccountType?: string;
    proposedCurrency?: string;
    requestedByUserId: string;
  }) {
    await this.assertCapability(input.requestedByUserId, 'INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION', 'INITIATE', 'draft an investor bank-account change request');
    await this.prisma.investor.findUniqueOrThrow({ where: { investorId: input.investorId } });
    const created = await this.prisma.investorBankAccountChangeRequest.create({
      data: {
        investorId: input.investorId,
        proposedBankName: input.proposedBankName,
        proposedAccountNumber: input.proposedAccountNumber,
        proposedAccountName: input.proposedAccountName,
        proposedAccountType: input.proposedAccountType,
        proposedCurrency: input.proposedCurrency,
        requestedByUserId: input.requestedByUserId,
      },
    });
    await this.audit.record({
      actorUserId: input.requestedByUserId,
      action: 'CREATE',
      entityType: ENTITY_TYPE,
      entityId: created.id,
      after: { investorId: input.investorId, proposedBankName: input.proposedBankName },
    });
    return created;
  }

  async attachEvidence(requestId: string, actorUserId: string, input: { documentType: string; fileReference: string }) {
    const request = await this.prisma.investorBankAccountChangeRequest.findUniqueOrThrow({ where: { id: requestId } });
    if (request.workflowInstanceId) {
      throw new InvestorLifecycleError(`Change request ${requestId} has already been submitted -- evidence can no longer be added.`);
    }
    return this.documents.attach({ entityType: ENTITY_TYPE, entityId: requestId, documentType: input.documentType, fileReference: input.fileReference }, actorUserId);
  }

  async getEvidenceChecklist(requestId: string) {
    return this.documents.getChecklistStatus(APPLICATION_TYPE, ENTITY_TYPE, requestId);
  }

  async submitChange(requestId: string, actorUserId: string) {
    const request = await this.prisma.investorBankAccountChangeRequest.findUniqueOrThrow({ where: { id: requestId } });
    if (request.requestedByUserId !== actorUserId) {
      throw new InvestorLifecycleError(`Only the original requester may submit change request ${requestId} for approval.`);
    }
    if (request.workflowInstanceId) {
      throw new InvestorLifecycleError(`Change request ${requestId} has already been submitted.`);
    }
    const checklist = await this.documents.getChecklistStatus(APPLICATION_TYPE, ENTITY_TYPE, requestId);
    if (!checklist.complete) {
      throw new InvestorLifecycleError(`Change request ${requestId} is missing required document evidence: ${checklist.missing.join(', ')} (invariant 51a-i).`);
    }

    // Invariant 49(a) (atomicity-sweep pattern): unlike other flows' draft
    // rows, this request row IS the durable record of the attempt -- there
    // is nothing to compensate-delete on a failed initiate(), so 49(b2)'s
    // audit trace is recorded and the row is simply left un-submitted
    // (workflowInstanceId still null) for the requester to retry once
    // whatever caused the failure (e.g. a misconfigured ApprovalRule) is
    // fixed.
    let instance;
    try {
      instance = await this.workflow.initiate({
        workflowTypeCode: 'INVESTOR_BANK_ACCOUNT_CHANGE',
        entityType: ENTITY_TYPE,
        entityId: requestId,
        initiatedByUserId: actorUserId,
        scenario: 'STANDARD',
      });
    } catch (err) {
      await this.audit.record({
        actorUserId,
        action: 'INITIATE_FAILED_COMPENSATED',
        entityType: ENTITY_TYPE,
        entityId: requestId,
        after: { workflowTypeCode: 'INVESTOR_BANK_ACCOUNT_CHANGE', reason: (err as Error).message },
      });
      throw err;
    }
    return this.prisma.investorBankAccountChangeRequest.update({ where: { id: requestId }, data: { workflowInstanceId: instance.id } });
  }

  // Handles BOTH steps of the chain -- which step is actually being
  // decided is read from the workflow's OWN state (getTrail), never from
  // which named action a caller invoked, so this stays correct even if a
  // single person somehow held both step capabilities and called things
  // out of order. FUNCTIONS/PERMISSIONS grant the two step capabilities to
  // disjoint roles (FIN_ADMIN, COMPLIANCE) as the primary control; the
  // alreadyDecidedThisInstance check below is defense-in-depth on top of
  // that, not a substitute for it.
  async decideChangeRequest(requestId: string, actorUserId: string, decision: 'APPROVE' | 'REJECT', notes?: string) {
    const request = await this.prisma.investorBankAccountChangeRequest.findUniqueOrThrow({ where: { id: requestId } });
    if (!request.workflowInstanceId) {
      throw new InvestorLifecycleError(`Change request ${requestId} has not been submitted for approval yet.`);
    }
    const trail = await this.workflow.getTrail(request.workflowInstanceId);
    const pendingStep = trail.steps.find((s) => s.decision === null);
    if (!pendingStep) {
      throw new InvestorLifecycleError(`Change request ${requestId}'s workflow instance has no pending step (status ${trail.status}).`);
    }
    const isReverificationStep = pendingStep.requiredFunctionCode === 'BANK_ACCOUNT_CHANGE_REVERIFICATION';

    if (decision === 'REJECT') {
      await this.workflow.reject(request.workflowInstanceId, actorUserId, notes);
      return this.prisma.investorBankAccountChangeRequest.update({ where: { id: requestId }, data: { status: 'REJECTED', rejectionNotes: notes } });
    }

    // Invariant 51(a-i): hardens beyond the generic engine's maker!=checker
    // -- on THIS fraud-critical flow, no single person may decide both
    // control steps, even one who happens to hold both capabilities.
    const alreadyDecided = await this.prisma.workflowStepApproval.findFirst({
      where: { workflowInstanceId: request.workflowInstanceId, approverUserId: actorUserId },
    });
    if (alreadyDecided) {
      await this.audit.record({
        actorUserId,
        action: 'PERMISSION_DENIED',
        entityType: ENTITY_TYPE,
        entityId: requestId,
        after: { reason: 'Same user already decided an earlier step on this change request -- invariant 51(a-i) requires genuine 3-way separation, not just maker!=checker.' },
      });
      throw new InvestorLifecycleError(`User already decided an earlier step on change request ${requestId} -- the same person may not both approve and re-verify a bank-account change (invariant 51a-i).`);
    }

    if (isReverificationStep && !notes) {
      throw new InvestorLifecycleError(`Re-verification requires notes describing HOW the client's request was independently confirmed (e.g. outbound call to the number already on file, never one supplied with the request) -- invariant 51(a-i).`);
    }

    const updated = await this.workflow.approveNextStep(request.workflowInstanceId, actorUserId, notes);

    if (isReverificationStep && updated.status === 'APPROVED') {
      return this.activateChange(request, actorUserId, notes as string);
    }
    return this.prisma.investorBankAccountChangeRequest.findUniqueOrThrow({ where: { id: requestId } });
  }

  private async activateChange(
    request: {
      id: string;
      investorId: string;
      proposedBankName: string;
      proposedAccountNumber: string;
      proposedAccountName: string;
      proposedAccountType: string | null;
      proposedCurrency: string | null;
    },
    reVerifierUserId: string,
    reVerificationNotes: string,
  ) {
    const config = await this.prisma.investorBankAccountChangeConfig.findFirst({ where: { status: 'ACTIVE' }, orderBy: { version: 'desc' } });
    if (!config) {
      throw new InvestorLifecycleError('No ACTIVE investor_bank_account_change_config -- cannot compute the cooling-off window (invariant 51a-i, never a silent bypass).');
    }
    const coolingOffEndsAt = new Date();
    coolingOffEndsAt.setDate(coolingOffEndsAt.getDate() + config.coolingOffDays);

    const newAccount = await this.prisma.investorBankAccount.create({
      data: {
        investorId: request.investorId,
        bankName: request.proposedBankName,
        accountNumber: request.proposedAccountNumber,
        accountName: request.proposedAccountName,
        accountType: request.proposedAccountType ?? undefined,
        currency: request.proposedCurrency ?? undefined,
        isPrimary: false,
        status: 'ACTIVE',
        verificationStatus: 'VERIFIED',
        verifiedByUserId: reVerifierUserId,
        coolingOffEndsAt,
      },
    });

    const updated = await this.prisma.investorBankAccountChangeRequest.update({
      where: { id: request.id },
      data: {
        status: 'COOLING_OFF',
        reVerifiedByUserId: reVerifierUserId,
        reVerifiedAt: new Date(),
        reVerificationNotes,
        coolingOffEndsAt,
        resultingBankAccountId: newAccount.id,
      },
    });

    await this.audit.record({
      actorUserId: reVerifierUserId,
      action: 'APPROVE',
      entityType: ENTITY_TYPE,
      entityId: request.id,
      after: { resultingBankAccountId: newAccount.id, coolingOffEndsAt: coolingOffEndsAt.toISOString() },
    });

    return updated;
  }

  // Read-time guard (no scheduled flip -- same precedent as
  // InvestorOnboardingConfig.stage2DeadlineAt): swaps primacy once a
  // change's cooling-off window has elapsed. Idempotent, safe to call from
  // here and from LedgerService.createTxn's REDEMPTION branch before
  // resolving today's payout target.
  async settleDueChanges(investorId: string) {
    const due = await this.prisma.investorBankAccountChangeRequest.findMany({
      where: { investorId, status: 'COOLING_OFF', coolingOffEndsAt: { lte: new Date() } },
    });
    for (const req of due) {
      if (!req.resultingBankAccountId) continue;
      await this.prisma.$transaction([
        this.prisma.investorBankAccount.updateMany({ where: { investorId, isPrimary: true, status: 'ACTIVE' }, data: { isPrimary: false, status: 'SUPERSEDED' } }),
        this.prisma.investorBankAccount.update({ where: { id: req.resultingBankAccountId }, data: { isPrimary: true } }),
        this.prisma.investorBankAccountChangeRequest.update({ where: { id: req.id }, data: { status: 'COMPLETED' } }),
      ]);
      await this.audit.record({
        actorUserId: req.reVerifiedByUserId ?? req.requestedByUserId,
        action: 'UPDATE',
        entityType: ENTITY_TYPE,
        entityId: req.id,
        after: { status: 'COMPLETED', supersededOldPrimary: true },
      });
    }
  }

  async listForInvestor(investorId: string) {
    return this.prisma.investorBankAccountChangeRequest.findMany({ where: { investorId }, orderBy: { createdAt: 'desc' } });
  }

  // Invariant 43(c) findability: the full trail for one change request --
  // documents attached + the workflow's per-step decision trail (reuses
  // WorkflowEngineService.getTrail, invariant 49g(i)/(iii)'s "what happened
  // to this instance" read).
  async getTrail(requestId: string) {
    const request = await this.prisma.investorBankAccountChangeRequest.findUniqueOrThrow({ where: { id: requestId } });
    const documents = await this.documents.listFor(ENTITY_TYPE, requestId);
    const workflowTrail = request.workflowInstanceId ? await this.workflow.getTrail(request.workflowInstanceId) : null;
    return { request, documents, workflowTrail };
  }
}
