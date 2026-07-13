import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import {
  LogBreachInput,
  AssessBreachInput,
  RecordNdpcNotificationInput,
  RecordDataSubjectNotificationInput,
  CloseBreachInput,
  DataProtectionError,
} from './data-protection.types';

const NDPC_NOTIFICATION_WINDOW_HOURS = 72; // NDP Act Section 40(2) / GAID Article 33 -- transcribed, not invented.

// Invariant 57(b)(iv) (CHECK15): incident entry -> severity/eligibility
// assessment -> 72-hour NDPC notification tracking -> data-subject
// notification where required -> post-incident record. Feeds the risk
// module via KRI CPL-06 (a live count, same pattern as CPL-03/CPL-05) --
// no row is written into RiskRegisterEntry directly.
@Injectable()
export class DataBreachRegisterService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
  ) {}

  async logBreach(input: LogBreachInput) {
    const ndpcNotificationDeadline = new Date(input.discoveredAt.getTime() + NDPC_NOTIFICATION_WINDOW_HOURS * 60 * 60_000);
    const entry = await this.prisma.dataBreachRegisterEntry.create({
      data: {
        discoveredAt: input.discoveredAt,
        discoveredByUserId: input.discoveredByUserId,
        description: input.description,
        affectedDataClasses: input.affectedDataClasses,
        estimatedAffectedSubjects: input.estimatedAffectedSubjects,
        ndpcNotificationDeadline,
      },
    });
    await this.audit.record({
      actorUserId: input.discoveredByUserId,
      action: 'CREATE',
      entityType: 'data_breach_register_entry',
      entityId: entry.id,
      after: { description: input.description, affectedDataClasses: input.affectedDataClasses, ndpcNotificationDeadline },
    });
    return entry;
  }

  async assess(input: AssessBreachInput) {
    const entry = await this.prisma.dataBreachRegisterEntry.findUniqueOrThrow({ where: { id: input.breachId } });
    if (entry.status !== 'OPEN') {
      throw new DataProtectionError(`Breach ${input.breachId} is ${entry.status}, not OPEN -- already assessed.`);
    }
    const updated = await this.prisma.dataBreachRegisterEntry.update({
      where: { id: input.breachId },
      data: {
        severity: input.severity,
        likelyHighRisk: input.likelyHighRisk,
        assessmentNotes: input.assessmentNotes,
        dataSubjectsNotificationRequired: input.dataSubjectsNotificationRequired,
        assessedAt: new Date(),
        assessedByUserId: input.actorUserId,
        status: 'ASSESSED',
      },
    });
    await this.audit.record({
      actorUserId: input.actorUserId,
      action: 'UPDATE',
      entityType: 'data_breach_register_entry',
      entityId: updated.id,
      after: { severity: input.severity, likelyHighRisk: input.likelyHighRisk, dataSubjectsNotificationRequired: input.dataSubjectsNotificationRequired },
    });
    return updated;
  }

  async recordNdpcNotification(input: RecordNdpcNotificationInput) {
    const entry = await this.prisma.dataBreachRegisterEntry.findUniqueOrThrow({ where: { id: input.breachId } });
    if (entry.status !== 'ASSESSED') {
      throw new DataProtectionError(`Breach ${input.breachId} is ${entry.status}, not ASSESSED -- assess before notifying NDPC.`);
    }
    const notifiedAt = new Date();
    const updated = await this.prisma.dataBreachRegisterEntry.update({
      where: { id: input.breachId },
      data: { ndpcNotifiedAt: notifiedAt, ndpcNotifiedByUserId: input.actorUserId, status: 'NDPC_NOTIFIED' },
    });
    await this.audit.record({
      actorUserId: input.actorUserId,
      action: 'UPDATE',
      entityType: 'data_breach_register_entry',
      entityId: updated.id,
      // Honest, never a silent pass -- a late notification is recorded as
      // late, not reclassified. Enforcement/reporting on lateness is a
      // Compliance/DPO judgment, not this service's job.
      after: { ndpcNotifiedAt: notifiedAt, withinDeadline: notifiedAt.getTime() <= entry.ndpcNotificationDeadline.getTime() },
    });
    return updated;
  }

  async recordDataSubjectNotification(input: RecordDataSubjectNotificationInput) {
    const entry = await this.prisma.dataBreachRegisterEntry.findUniqueOrThrow({ where: { id: input.breachId } });
    if (!entry.dataSubjectsNotificationRequired) {
      throw new DataProtectionError(`Breach ${input.breachId} was assessed as not requiring data-subject notification.`);
    }
    const updated = await this.prisma.dataBreachRegisterEntry.update({
      where: { id: input.breachId },
      data: { dataSubjectsNotifiedAt: new Date(), status: 'DATA_SUBJECTS_NOTIFIED' },
    });
    await this.audit.record({ actorUserId: input.actorUserId, action: 'UPDATE', entityType: 'data_breach_register_entry', entityId: updated.id, after: { dataSubjectsNotifiedAt: updated.dataSubjectsNotifiedAt } });
    return updated;
  }

  async close(input: CloseBreachInput) {
    const entry = await this.prisma.dataBreachRegisterEntry.findUniqueOrThrow({ where: { id: input.breachId } });
    if (entry.status === 'OPEN' || entry.status === 'CLOSED') {
      throw new DataProtectionError(`Breach ${input.breachId} is ${entry.status} -- cannot close before assessment, and it is already closed if CLOSED.`);
    }
    if (entry.ndpcNotifiedAt === null) {
      throw new DataProtectionError('Cannot close a breach before recording NDPC notification.');
    }
    if (entry.dataSubjectsNotificationRequired && entry.dataSubjectsNotifiedAt === null) {
      throw new DataProtectionError('Cannot close a breach that requires data-subject notification before recording it.');
    }
    const updated = await this.prisma.dataBreachRegisterEntry.update({
      where: { id: input.breachId },
      data: { postIncidentNotes: input.postIncidentNotes, status: 'CLOSED', closedAt: new Date(), closedByUserId: input.actorUserId },
    });
    await this.audit.record({ actorUserId: input.actorUserId, action: 'UPDATE', entityType: 'data_breach_register_entry', entityId: updated.id, after: { status: 'CLOSED' } });
    return updated;
  }

  async listAll() {
    return this.prisma.dataBreachRegisterEntry.findMany({ orderBy: { discoveredAt: 'desc' } });
  }

  // Invariant 57(b)(iv): "feeds the risk module" -- CPL-06 calls this. Open
  // register entries not yet CLOSED are the live count; nothing is written
  // into RiskRegisterEntry.
  async getOpenCount(): Promise<number> {
    return this.prisma.dataBreachRegisterEntry.count({ where: { status: { not: 'CLOSED' } } });
  }
}
