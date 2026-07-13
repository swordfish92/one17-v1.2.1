import { Injectable } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { DelegationService } from '../delegation/delegation.service';
import {
  UploadResourceInput,
  SubscribeInput,
  UnsubscribeInput,
  InitiateSendInput,
  MarketingError,
} from './marketing.types';

// Invariant 28(b): BD marketing suite. Resource upload/approval and send
// initiate/approve both go through the standing WorkflowEngineService —
// maker != checker on everything client-facing, exactly like every other
// approval chain in this codebase. subscribe()/unsubscribe() are the two
// PUBLIC (unauthenticated) methods here, mirroring PublicIntakeService's
// "write nothing beyond a safe, narrow surface" discipline.
@Injectable()
export class MarketingService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly workflow: WorkflowEngineService,
    private readonly delegation: DelegationService,
  ) {}

  async uploadResource(input: UploadResourceInput) {
    await this.assertCapability(input.proposedByUserId, 'MARKETING_RESOURCE', 'INITIATE', 'upload a marketing resource');

    const created = await this.prisma.marketingResource.create({
      data: {
        title: input.title,
        resourceType: input.resourceType,
        fileReference: input.fileReference,
        version: input.version ?? 1,
        status: 'DRAFT',
        proposedByUserId: input.proposedByUserId,
      },
    });

    // Invariant 49(a) (CHECK11, atomicity sweep): compensating cleanup, not
    // a $transaction -- see PmsService.submitSelfScore's comment for why
    // one can't span into workflow.initiate() across service boundaries.
    let instance;
    try {
      instance = await this.workflow.initiate({
        workflowTypeCode: 'MARKETING_RESOURCE_APPROVAL',
        entityType: 'marketing_resource',
        entityId: created.id,
        initiatedByUserId: input.proposedByUserId,
        scenario: 'STANDARD',
      });
    } catch (err) {
      // Invariant 49(b2) (CHECK11 advisor ruling): see PmsService.
      // submitSelfScore's matching comment -- capability failures already
      // audit-log inside WorkflowEngineService itself; this covers every
      // other failure cause so the attempt+compensation isn't invisible.
      await this.audit.record({
        actorUserId: input.proposedByUserId,
        action: 'INITIATE_FAILED_COMPENSATED',
        entityType: 'marketing_resource',
        entityId: created.id,
        after: { workflowTypeCode: 'MARKETING_RESOURCE_APPROVAL', reason: (err as Error).message },
      });
      await this.prisma.marketingResource.delete({ where: { id: created.id } });
      throw err;
    }

    return this.prisma.marketingResource.update({ where: { id: created.id }, data: { workflowInstanceId: instance.id } });
  }

  async approveResource(workflowInstanceId: string, approverUserId: string) {
    const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
    if (updated.status !== 'APPROVED') return null;
    const resource = await this.prisma.marketingResource.update({
      where: { workflowInstanceId },
      data: { status: 'ACTIVE', approvedByUserId: approverUserId },
    });
    await this.audit.record({
      actorUserId: approverUserId,
      action: 'UPDATE',
      entityType: 'marketing_resource',
      entityId: resource.id,
      after: { status: 'ACTIVE' },
    });
    return resource;
  }

  async rejectResource(workflowInstanceId: string, approverUserId: string, notes?: string) {
    const rejected = await this.workflow.reject(workflowInstanceId, approverUserId, notes);
    await this.prisma.marketingResource.update({ where: { workflowInstanceId }, data: { status: 'SUPERSEDED' } });
    return rejected;
  }

  async listResources() {
    return this.prisma.marketingResource.findMany({ orderBy: { createdAt: 'desc' } });
  }

  // Invariant 70(c): "general publications on the [Offers & Opportunities]
  // tab = Compliance-approved marketing resources via the existing
  // BD->Compliance chain." status ACTIVE (set exclusively by
  // approveResource() above) IS "Compliance-approved" -- no second
  // approval concept invented here, just a status-filtered read of the
  // SAME table listResources() already exposes to staff.
  async listActiveResources() {
    return this.prisma.marketingResource.findMany({ where: { status: 'ACTIVE' }, orderBy: { createdAt: 'desc' } });
  }

  // PUBLIC — no capability gate. Idempotent: re-subscribing an existing,
  // unsubscribed address re-activates it with the same token rather than
  // erroring, and updates the requested segment list.
  async subscribe(input: SubscribeInput) {
    const existing = await this.prisma.marketingSubscriber.findUnique({ where: { email: input.email } });
    if (existing) {
      return this.prisma.marketingSubscriber.update({
        where: { email: input.email },
        data: { subscribed: true, unsubscribedAt: null, segments: input.segments, fullName: input.fullName ?? existing.fullName },
      });
    }
    return this.prisma.marketingSubscriber.create({
      data: {
        email: input.email,
        fullName: input.fullName,
        segments: input.segments,
        unsubscribeToken: randomBytes(24).toString('hex'),
      },
    });
  }

  // PUBLIC — token proves ownership of the emailed unsubscribe link; a
  // bare email string is never sufficient to unsubscribe someone else.
  async unsubscribe(input: UnsubscribeInput) {
    const subscriber = await this.prisma.marketingSubscriber.findUnique({ where: { email: input.email } });
    if (!subscriber || subscriber.unsubscribeToken !== input.token) {
      throw new MarketingError('Invalid unsubscribe link.');
    }
    return this.prisma.marketingSubscriber.update({
      where: { email: input.email },
      data: { subscribed: false, unsubscribedAt: new Date() },
    });
  }

  async initiateSend(input: InitiateSendInput) {
    await this.assertCapability(input.initiatedByUserId, 'MARKETING_SEND', 'INITIATE', 'initiate a mass-mail send');

    if (input.resourceId) {
      const resource = await this.prisma.marketingResource.findUniqueOrThrow({ where: { id: input.resourceId } });
      if (resource.status !== 'ACTIVE') {
        throw new MarketingError(
          `Resource "${resource.title}" is ${resource.status}, not ACTIVE — a resource must be approved before it can be used in a distribution (invariant 28b).`,
        );
      }
    }

    const created = await this.prisma.marketingSend.create({
      data: {
        subject: input.subject,
        body: input.body,
        targetSegments: input.targetSegments,
        resourceId: input.resourceId,
        status: 'PENDING_APPROVAL',
        initiatedByUserId: input.initiatedByUserId,
      },
    });

    // Invariant 49(a) (CHECK11, atomicity sweep): compensating cleanup, not
    // a $transaction -- see PmsService.submitSelfScore's comment for why
    // one can't span into workflow.initiate() across service boundaries.
    let instance;
    try {
      instance = await this.workflow.initiate({
        workflowTypeCode: 'MARKETING_SEND_APPROVAL',
        entityType: 'marketing_send',
        entityId: created.id,
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
        entityType: 'marketing_send',
        entityId: created.id,
        after: { workflowTypeCode: 'MARKETING_SEND_APPROVAL', reason: (err as Error).message },
      });
      await this.prisma.marketingSend.delete({ where: { id: created.id } });
      throw err;
    }

    return this.prisma.marketingSend.update({ where: { id: created.id }, data: { workflowInstanceId: instance.id } });
  }

  // The approval record IS the dispatch trigger — every recipient gets a
  // client_communication row in the SAME transaction the send is marked
  // SENT, so there is no window where status says SENT but no log exists
  // (or vice versa). Actual email transport (SMTP/provider call) is an
  // honest "not yet instrumented" gap — no notification-engine integration
  // exists anywhere in this codebase today; this is where it would plug in.
  async approveSend(workflowInstanceId: string, approverUserId: string) {
    const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
    if (updated.status !== 'APPROVED') return null;

    const send = await this.prisma.marketingSend.findUniqueOrThrow({ where: { workflowInstanceId } });
    const recipients = await this.prisma.marketingSubscriber.findMany({
      where: { subscribed: true, segments: { hasSome: send.targetSegments } },
    });

    const now = new Date();
    await this.prisma.$transaction([
      this.prisma.clientCommunication.createMany({
        data: recipients.map((r) => ({
          channel: 'EMAIL',
          direction: 'OUTBOUND' as const,
          subject: send.subject,
          summary: send.body,
          loggedByUserId: approverUserId,
          occurredAt: now,
        })),
      }),
      this.prisma.marketingSend.update({
        where: { id: send.id },
        data: { status: 'SENT', approvedByUserId: approverUserId, sentAt: now, recipientCount: recipients.length },
      }),
    ]);

    await this.audit.record({
      actorUserId: approverUserId,
      action: 'UPDATE',
      entityType: 'marketing_send',
      entityId: send.id,
      after: { status: 'SENT', recipientCount: recipients.length },
    });

    return this.prisma.marketingSend.findUniqueOrThrow({ where: { id: send.id } });
  }

  async rejectSend(workflowInstanceId: string, approverUserId: string, notes?: string) {
    const rejected = await this.workflow.reject(workflowInstanceId, approverUserId, notes);
    await this.prisma.marketingSend.update({ where: { workflowInstanceId }, data: { status: 'REJECTED' } });
    return rejected;
  }

  async listSends() {
    return this.prisma.marketingSend.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async getSubscriberStats() {
    const [total, subscribed] = await Promise.all([
      this.prisma.marketingSubscriber.count(),
      this.prisma.marketingSubscriber.count({ where: { subscribed: true } }),
    ]);
    return { total, subscribed, unsubscribed: total - subscribed };
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({
        actorUserId: userId,
        action: 'PERMISSION_DENIED',
        entityType: 'marketing_activity',
        entityId: activity,
        after: { functionCode, level },
      });
      throw new MarketingError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}
