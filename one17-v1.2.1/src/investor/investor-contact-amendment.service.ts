import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { InvestorLifecycleError } from './investor.types';

const ENTITY_TYPE = 'investor_contact_amendment_request';

export interface RequestContactAmendmentInput {
  investorId: string;
  proposedContactEmail?: string;
  proposedContactPhone?: string;
  proposedRegisteredAddress?: string;
  proposedTaxIdentificationNumber?: string;
  proposedSourceOfFunds?: string;
  proposedOccupationOrBusinessNature?: string;
  requestedByUserId: string;
}

// Invariant 51(a-ii) (CHECK12, advisor BA lifecycle-gap register, Tier 1):
// "governed post-onboarding updates (address, phone, email), Compliance
// acknowledgment, same shape as EMPLOYEE_PERSONAL_RECORD_CHANGE" -- CLAUDE.
// md's own text, verbatim. Deliberately the LIGHT-weight shape: no
// document evidence, no reverification, no cooling-off (that machinery
// belongs to 51(a-i)'s fraud-critical bank-account change, not this one).
@Injectable()
export class InvestorContactAmendmentService {
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

  private async assertEmailAvailable(email: string, excludingInvestorId: string) {
    const existing = await this.prisma.investor.findUnique({ where: { contactEmail: email } });
    if (existing && existing.investorId !== excludingInvestorId) {
      throw new InvestorLifecycleError(`contactEmail ${email} is already in use by investor ${existing.investorId} -- cannot propose it for ${excludingInvestorId}.`);
    }
  }

  async requestAmendment(input: RequestContactAmendmentInput) {
    await this.assertCapability(input.requestedByUserId, 'INVESTOR_CONTACT_KYC_AMENDMENT_INITIATION', 'INITIATE', 'propose an investor contact/KYC amendment');
    if (
      !input.proposedContactEmail && !input.proposedContactPhone && !input.proposedRegisteredAddress &&
      !input.proposedTaxIdentificationNumber && !input.proposedSourceOfFunds && !input.proposedOccupationOrBusinessNature
    ) {
      throw new InvestorLifecycleError('At least one of contactEmail, contactPhone, registeredAddress, taxIdentificationNumber, sourceOfFunds, or occupationOrBusinessNature must be proposed.');
    }
    if (input.proposedContactEmail) {
      await this.assertEmailAvailable(input.proposedContactEmail, input.investorId);
    }

    const request = await this.prisma.investorContactAmendmentRequest.create({
      data: {
        investorId: input.investorId,
        proposedContactEmail: input.proposedContactEmail,
        proposedContactPhone: input.proposedContactPhone,
        proposedRegisteredAddress: input.proposedRegisteredAddress,
        proposedTaxIdentificationNumber: input.proposedTaxIdentificationNumber,
        proposedSourceOfFunds: input.proposedSourceOfFunds,
        proposedOccupationOrBusinessNature: input.proposedOccupationOrBusinessNature,
        requestedByUserId: input.requestedByUserId,
      },
    });
    let instance;
    try {
      instance = await this.workflow.initiate({
        workflowTypeCode: 'INVESTOR_CONTACT_KYC_AMENDMENT',
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
        after: { workflowTypeCode: 'INVESTOR_CONTACT_KYC_AMENDMENT', reason: (err as Error).message },
      });
      await this.prisma.investorContactAmendmentRequest.delete({ where: { id: request.id } });
      throw err;
    }
    return this.prisma.investorContactAmendmentRequest.update({ where: { id: request.id }, data: { workflowInstanceId: instance.id } });
  }

  async decideAmendment(workflowInstanceId: string, approverUserId: string, decision: 'APPROVE' | 'REJECT', notes?: string) {
    const request = await this.prisma.investorContactAmendmentRequest.findFirstOrThrow({ where: { workflowInstanceId } });
    if (decision === 'REJECT') {
      await this.workflow.reject(workflowInstanceId, approverUserId, notes);
      return this.prisma.investorContactAmendmentRequest.update({ where: { id: request.id }, data: { status: 'REJECTED', rejectionNotes: notes } });
    }

    // Close the TOCTOU gap: another amendment (or a fresh onboarding) could
    // have taken the proposed email between request time and now.
    if (request.proposedContactEmail) {
      await this.assertEmailAvailable(request.proposedContactEmail, request.investorId);
    }

    const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId, notes);
    if (updated.status !== 'APPROVED') return this.prisma.investorContactAmendmentRequest.findUniqueOrThrow({ where: { id: request.id } });

    // Truthy-only partial patch -- same shape as ProfileService.
    // acknowledgeChange -- applies only the fields the maker actually
    // proposed. There is no way to null out a field via this flow.
    const patch: Record<string, unknown> = {};
    if (request.proposedContactEmail) patch.contactEmail = request.proposedContactEmail;
    if (request.proposedContactPhone) patch.contactPhone = request.proposedContactPhone;
    if (request.proposedRegisteredAddress) patch.registeredAddress = request.proposedRegisteredAddress;
    if (request.proposedTaxIdentificationNumber) patch.taxIdentificationNumber = request.proposedTaxIdentificationNumber;
    if (request.proposedSourceOfFunds) patch.sourceOfFunds = request.proposedSourceOfFunds;
    if (request.proposedOccupationOrBusinessNature) patch.occupationOrBusinessNature = request.proposedOccupationOrBusinessNature;

    await this.prisma.investor.update({ where: { investorId: request.investorId }, data: patch });
    const finalRequest = await this.prisma.investorContactAmendmentRequest.update({ where: { id: request.id }, data: { status: 'APPROVED' } });
    await this.audit.record({ actorUserId: approverUserId, action: 'UPDATE', entityType: 'investor', entityId: request.investorId, after: patch });
    return finalRequest;
  }

  async listForInvestor(investorId: string) {
    return this.prisma.investorContactAmendmentRequest.findMany({ where: { investorId }, orderBy: { createdAt: 'desc' } });
  }

  async getTrail(requestId: string) {
    const request = await this.prisma.investorContactAmendmentRequest.findUniqueOrThrow({ where: { id: requestId } });
    const workflowTrail = request.workflowInstanceId ? await this.workflow.getTrail(request.workflowInstanceId) : null;
    return { request, workflowTrail };
  }
}
