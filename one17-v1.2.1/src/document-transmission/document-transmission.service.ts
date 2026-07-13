import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { NotificationService } from '../notification/notification.service';
import { TaskService } from '../task/task.service';
import { TransmitDocumentInput, DocumentTransmissionError } from './document-transmission.types';

// Invariant 55(b) (CHECK12, CEO directive 8-Jul-2026): "MD DOCUMENT
// TRANSMISSION -- MD uploads/transmits documents into the platform routed
// to named officers with acknowledgment tracking (document register +
// notification + task)." Same two-table widen-and-acknowledge shape as
// BoardMinutes/BoardMinutesTransmission (invariant 37c-v) but generic --
// any MD-originated document, not Board-Minutes-specific -- plus the
// additional "+ task" requirement this invariant names explicitly: each
// recipient gets a REAL Task via TaskService.systemAssignTask, so the
// deliverable shows up in their ordinary task list, not just a
// notification they might miss.
@Injectable()
export class DocumentTransmissionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly notification: NotificationService,
    private readonly task: TaskService,
  ) {}

  async transmitDocument(input: TransmitDocumentInput, actorUserId: string) {
    await this.assertCapability(actorUserId, 'MD_DOCUMENT_TRANSMISSION', 'INITIATE', 'transmit a document to named officers');
    if (input.recipientUserIds.length === 0) {
      throw new DocumentTransmissionError('At least one recipient is required.');
    }
    const document = await this.prisma.transmittedDocument.create({
      data: { title: input.title, fileReference: input.fileReference, docType: input.docType, transmittedByUserId: actorUserId },
    });

    for (const recipientUserId of input.recipientUserIds) {
      // A real Task requires a real Employee record -- system-assigned,
      // same documented exception BoardDirectiveService's MD task and
      // every payment-reminder call task already use. A recipient with no
      // Employee record still gets the transmission row + notification
      // (an external/role-only account), just no Task -- never a hard
      // failure for the whole batch over one recipient's missing record.
      const recipientEmployee = await this.prisma.employee.findFirst({ where: { appUserId: recipientUserId } });
      let taskId: string | undefined;
      if (recipientEmployee) {
        const task = await this.task.systemAssignTask({
          assigneeEmployeeId: recipientEmployee.id,
          assignedByUserId: actorUserId,
          title: `Acknowledge transmitted document: ${input.title}`,
          linkPath: '/governance/board-directives',
        });
        taskId = task.id;
      }
      await this.prisma.transmittedDocumentRecipient.upsert({
        where: { documentId_recipientUserId: { documentId: document.id, recipientUserId } },
        create: { documentId: document.id, recipientUserId, taskId },
        update: {},
      });
      await this.notification.create({
        recipientUserId,
        type: 'GENERIC',
        title: 'Document transmitted to you',
        body: `"${input.title}" has been transmitted to you for acknowledgment.`,
        linkPath: '/governance/board-directives',
      });
    }

    await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'transmitted_document', entityId: document.id, after: { title: input.title, recipientCount: input.recipientUserIds.length } });
    return document;
  }

  // Ownership-gated (the recipient acknowledging THEIR OWN transmission),
  // not a capability check -- same pattern as BoardMinutes/BoardDirective.
  async acknowledgeTransmission(documentId: string, actorUserId: string) {
    const recipient = await this.prisma.transmittedDocumentRecipient.findUnique({
      where: { documentId_recipientUserId: { documentId, recipientUserId: actorUserId } },
    });
    if (!recipient) {
      throw new DocumentTransmissionError(`Document ${documentId} was never transmitted to this user -- nothing to acknowledge.`);
    }
    if (recipient.acknowledgedAt) {
      throw new DocumentTransmissionError(`This transmission was already acknowledged at ${recipient.acknowledgedAt.toISOString()}.`);
    }
    const updated = await this.prisma.transmittedDocumentRecipient.update({ where: { id: recipient.id }, data: { acknowledgedAt: new Date() } });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'transmitted_document_recipient', entityId: recipient.id, after: { acknowledgedAt: updated.acknowledgedAt } });
    return updated;
  }

  // Restricted view: capability holders (MD_CEO/CS) see everything with
  // full recipient/acknowledgment status; anyone else sees only documents
  // actually transmitted to them.
  async listDocumentsForViewer(actorUserId: string) {
    const { eligible } = await this.delegation.hasCapability(actorUserId, 'MD_DOCUMENT_TRANSMISSION', 'VIEW');
    if (eligible) {
      return this.prisma.transmittedDocument.findMany({
        orderBy: { createdAt: 'desc' },
        include: { transmittedBy: { select: { displayName: true } }, recipients: { select: { recipientUserId: true, acknowledgedAt: true, createdAt: true } } },
      });
    }
    return this.prisma.transmittedDocument.findMany({
      where: { recipients: { some: { recipientUserId: actorUserId } } },
      orderBy: { createdAt: 'desc' },
      include: { transmittedBy: { select: { displayName: true } }, recipients: { where: { recipientUserId: actorUserId } } },
    });
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'document_transmission_activity', entityId: activity, after: { functionCode, level } });
      throw new DocumentTransmissionError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}
