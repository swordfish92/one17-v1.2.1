import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { ConfirmRetentionScheduleEntryInput, DataProtectionError } from './data-protection.types';

// Invariant 57(b)(iii) (CHECK15): governed config mapping each data class to
// a retention period, statutory basis, and disposal treatment. Rows ship
// DRAFT with retentionPeriodMonths NULL until Compliance/DPO confirms a
// real figure (RiskAppetiteMatrixVersion's "never invent a value" pattern)
// -- exceptions are rows that already describe a structural platform fact
// (e.g. AuditTrail's DB-trigger-enforced insert-only behavior), seeded
// ACTIVE because there is nothing to confirm.
@Injectable()
export class RetentionScheduleService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
  ) {}

  async listAll() {
    return this.prisma.retentionScheduleEntry.findMany({ orderBy: { dataClass: 'asc' } });
  }

  async confirm(input: ConfirmRetentionScheduleEntryInput) {
    const entry = await this.prisma.retentionScheduleEntry.findUniqueOrThrow({ where: { id: input.entryId } });
    if (entry.status === 'ACTIVE') {
      throw new DataProtectionError(`Retention schedule entry "${entry.dataClass}" is already ACTIVE -- version a new entry to change a confirmed figure, don't overwrite it.`);
    }
    const updated = await this.prisma.retentionScheduleEntry.update({
      where: { id: input.entryId },
      data: {
        retentionPeriodMonths: input.retentionPeriodMonths,
        statutoryBasis: input.statutoryBasis,
        disposalTreatment: input.disposalTreatment,
        status: 'ACTIVE',
        confirmedByUserId: input.actorUserId,
        confirmedAt: new Date(),
      },
    });
    await this.audit.record({
      actorUserId: input.actorUserId,
      action: 'APPROVE',
      entityType: 'retention_schedule_entry',
      entityId: updated.id,
      after: { dataClass: entry.dataClass, retentionPeriodMonths: input.retentionPeriodMonths, statutoryBasis: input.statutoryBasis },
    });
    return updated;
  }
}
