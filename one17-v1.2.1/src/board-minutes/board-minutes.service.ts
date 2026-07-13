import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { NotificationService } from '../notification/notification.service';
import { UploadBoardMinutesInput, BoardMinutesError } from './board-minutes.types';

// Invariant 37(c)(v): "Board Minutes: CS uploads/delivers through the
// platform -> onward transmission with an acknowledgment/access TRAIL;
// Board-class documents carry a restricted ACL tier (Board/CS/MD only
// unless widened)." ONE mechanism serves both halves of that sentence:
// BoardMinutesTransmission is simultaneously the "widen the ACL to this
// recipient" act and the "acknowledgment/access trail" record — CS
// transmitting to someone IS what grants them view access, and their own
// acknowledgedAt IS the trail entry proving they received and read it.
@Injectable()
export class BoardMinutesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly notification: NotificationService,
  ) {}

  async uploadMinutes(input: UploadBoardMinutesInput, actorUserId: string) {
    await this.assertCapability(actorUserId, 'BOARD_MINUTES_MANAGEMENT', 'INITIATE', 'upload Board Minutes');
    const minutes = await this.prisma.boardMinutes.create({
      data: { title: input.title, fileReference: input.fileReference, committeeTag: input.committeeTag, uploadedByUserId: actorUserId },
    });
    await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'board_minutes', entityId: minutes.id, after: { title: input.title, committeeTag: input.committeeTag } });
    return minutes;
  }

  // The widening act + the start of the access/acknowledgment trail.
  async transmitMinutes(minutesId: string, recipientUserId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'BOARD_MINUTES_MANAGEMENT', 'INITIATE', 'transmit Board Minutes');
    await this.prisma.boardMinutes.findUniqueOrThrow({ where: { id: minutesId } });
    const transmission = await this.prisma.boardMinutesTransmission.upsert({
      where: { minutesId_recipientUserId: { minutesId, recipientUserId } },
      create: { minutesId, recipientUserId, transmittedByUserId: actorUserId },
      update: {},
    });
    await this.notification.create({
      recipientUserId,
      type: 'GENERIC',
      title: 'Board Minutes transmitted to you',
      body: 'Board Minutes have been transmitted to you for acknowledgment.',
      linkPath: '/governance/board-minutes',
    });
    await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'board_minutes_transmission', entityId: transmission.id, after: { minutesId, recipientUserId } });
    return transmission;
  }

  // Ownership-gated (the recipient acknowledging THEIR OWN transmission),
  // not a capability check — same pattern as BoardDirective's own
  // acknowledgeDirective / TaskService.assertOwnTask.
  async acknowledgeTransmission(minutesId: string, actorUserId: string) {
    const transmission = await this.prisma.boardMinutesTransmission.findUnique({
      where: { minutesId_recipientUserId: { minutesId, recipientUserId: actorUserId } },
    });
    if (!transmission) {
      throw new BoardMinutesError(`Board Minutes ${minutesId} were never transmitted to this user — nothing to acknowledge.`);
    }
    if (transmission.acknowledgedAt) {
      throw new BoardMinutesError(`This transmission was already acknowledged at ${transmission.acknowledgedAt.toISOString()}.`);
    }
    const updated = await this.prisma.boardMinutesTransmission.update({ where: { id: transmission.id }, data: { acknowledgedAt: new Date() } });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'board_minutes_transmission', entityId: transmission.id, after: { acknowledgedAt: updated.acknowledgedAt } });
    return updated;
  }

  // The restricted ACL: base capability holders (CS/MD_CEO, per the
  // governed roster) see everything; anyone else sees ONLY minutes
  // actually transmitted to them ("unless widened").
  async listMinutesForViewer(actorUserId: string) {
    const { eligible } = await this.delegation.hasCapability(actorUserId, 'BOARD_MINUTES_MANAGEMENT', 'VIEW');
    if (eligible) {
      return this.prisma.boardMinutes.findMany({
        orderBy: { createdAt: 'desc' },
        include: { uploadedBy: { select: { displayName: true } }, transmissions: { select: { recipientUserId: true, transmittedAt: true, acknowledgedAt: true } } },
      });
    }
    return this.prisma.boardMinutes.findMany({
      where: { transmissions: { some: { recipientUserId: actorUserId } } },
      orderBy: { createdAt: 'desc' },
      include: { uploadedBy: { select: { displayName: true } }, transmissions: { where: { recipientUserId: actorUserId } } },
    });
  }

  async getMinutes(minutesId: string, actorUserId: string) {
    const { eligible } = await this.delegation.hasCapability(actorUserId, 'BOARD_MINUTES_MANAGEMENT', 'VIEW');
    if (!eligible) {
      const transmission = await this.prisma.boardMinutesTransmission.findUnique({
        where: { minutesId_recipientUserId: { minutesId, recipientUserId: actorUserId } },
      });
      if (!transmission) {
        await this.audit.record({ actorUserId, action: 'PERMISSION_DENIED', entityType: 'board_minutes', entityId: minutesId, after: {} });
        throw new BoardMinutesError(`User lacks access to Board Minutes ${minutesId} — restricted ACL tier (Board/CS/MD only unless widened, invariant 37c-v).`);
      }
    }
    return this.prisma.boardMinutes.findUniqueOrThrow({
      where: { id: minutesId },
      include: { uploadedBy: { select: { displayName: true } }, transmissions: true },
    });
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'board_minutes_activity', entityId: activity, after: { functionCode, level } });
      throw new BoardMinutesError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}
