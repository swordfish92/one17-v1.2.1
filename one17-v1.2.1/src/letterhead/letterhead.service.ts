import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import {
  LetterheadError,
  ProposeLetterheadVersionInput,
  ApproveLetterheadVersionInput,
  ActiveLetterheadContent,
} from './letterhead.types';

// Invariant 52(a) (CHECK12): "single governed asset, versioned ... applied
// to EVERY client-facing PDF the platform emits." One global ACTIVE row at
// a time (versioned exactly like RiskAppetiteMatrixVersion) -- CS proposes
// a new version, MD_CEO approves activation, the prior global ACTIVE row
// is superseded. Own standalone service, no construction blast radius
// (brand new, nothing else constructs it).
@Injectable()
export class LetterheadService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
  ) {}

  async proposeVersion(input: ProposeLetterheadVersionInput) {
    await this.assertCapability(input.proposedByUserId, 'LETTERHEAD_TEMPLATE_MANAGEMENT', 'INITIATE', 'propose a new letterhead template version');

    const latest = await this.prisma.letterheadTemplate.findFirst({ orderBy: { version: 'desc' } });
    const version = (latest?.version ?? 0) + 1;

    const created = await this.prisma.letterheadTemplate.create({
      data: {
        version,
        status: 'DRAFT',
        companyName: input.companyName,
        addressLine1: input.addressLine1,
        addressLine2: input.addressLine2,
        rcNumber: input.rcNumber,
        secRegistrationLine: input.secRegistrationLine,
        brandPrimaryColorHex: input.brandPrimaryColorHex,
        brandAccentColorHex: input.brandAccentColorHex,
        brandDeepColorHex: input.brandDeepColorHex,
        footerDisclaimer: input.footerDisclaimer,
        proposedByUserId: input.proposedByUserId,
      },
    });

    // Invariant 49(a) (CHECK11, atomicity sweep): compensating cleanup, not
    // a $transaction -- see PmsService.submitSelfScore's comment for why
    // one can't span into workflow.initiate() across service boundaries.
    let instance;
    try {
      instance = await this.workflow.initiate({
        workflowTypeCode: 'LETTERHEAD_TEMPLATE_APPROVAL',
        entityType: 'letterhead_template',
        entityId: created.id,
        initiatedByUserId: input.proposedByUserId,
        scenario: 'STANDARD',
      });
    } catch (err) {
      await this.audit.record({
        actorUserId: input.proposedByUserId, action: 'INITIATE_FAILED_COMPENSATED', entityType: 'letterhead_template', entityId: created.id,
        after: { workflowTypeCode: 'LETTERHEAD_TEMPLATE_APPROVAL', reason: (err as Error).message },
      });
      await this.prisma.letterheadTemplate.delete({ where: { id: created.id } });
      throw err;
    }

    return this.prisma.letterheadTemplate.update({ where: { id: created.id }, data: { workflowInstanceId: instance.id } });
  }

  // No boardResolutionRef requirement (unlike StrategyLayerService/
  // RiskService) -- invariant 52(a)'s text names no such gate, just
  // maker!=checker via the standing CS-proposes/MD_CEO-approves capability
  // split.
  async approveVersion(input: ApproveLetterheadVersionInput) {
    const updated = await this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
    if (updated.status !== 'APPROVED') return null;

    const version = await this.prisma.letterheadTemplate.findFirstOrThrow({ where: { workflowInstanceId: input.workflowInstanceId } });
    const [, activated] = await this.prisma.$transaction([
      this.prisma.letterheadTemplate.updateMany({ where: { status: 'ACTIVE' }, data: { status: 'SUPERSEDED' } }),
      this.prisma.letterheadTemplate.update({ where: { id: version.id }, data: { status: 'ACTIVE', approvedByUserId: input.approverUserId } }),
    ]);

    await this.audit.record({
      actorUserId: input.approverUserId, action: 'UPDATE', entityType: 'letterhead_template', entityId: version.id,
      after: { status: 'ACTIVE', version: version.version },
    });
    return activated;
  }

  async listVersions() {
    return this.prisma.letterheadTemplate.findMany({ orderBy: { version: 'desc' } });
  }

  async listPending() {
    return this.prisma.letterheadTemplate.findMany({ where: { status: 'DRAFT', workflowInstanceId: { not: null } }, orderBy: { createdAt: 'asc' } });
  }

  // The read every client-facing PDF renderer (StatementService today;
  // future certificate/letter renderers per 52b/c) calls -- null, never a
  // thrown error, when no version has ever reached ACTIVE, so a missing/
  // not-yet-approved letterhead never blocks document generation (same
  // "never let missing config break the booking" principle as 52(b)'s own
  // "booking itself NEVER fails" text).
  async getActiveContent(): Promise<ActiveLetterheadContent | null> {
    const active = await this.prisma.letterheadTemplate.findFirst({ where: { status: 'ACTIVE' } });
    if (!active) return null;
    return {
      companyName: active.companyName,
      addressLine1: active.addressLine1,
      addressLine2: active.addressLine2,
      rcNumber: active.rcNumber,
      secRegistrationLine: active.secRegistrationLine,
      brandPrimaryColorHex: active.brandPrimaryColorHex,
      brandAccentColorHex: active.brandAccentColorHex,
      brandDeepColorHex: active.brandDeepColorHex,
      footerDisclaimer: active.footerDisclaimer,
    };
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'letterhead_activity', entityId: activity, after: { functionCode, level } });
      throw new LetterheadError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}

// Placeholder-content guard: LetterheadError is used by the DTO layer too
// where a proposal's content still carries an un-filled "[CoSec to
// provide" marker -- see the controller.
