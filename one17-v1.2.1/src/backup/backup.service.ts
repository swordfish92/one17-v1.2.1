import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DelegationService } from '../delegation/delegation.service';
import { ReportBackupRunDto } from './backup.types';

// RES-001 F-02 (CHECK23, v1.0.2): "make backup.ps1 failures visible to the
// app" — the CEO's own words: "a silently failing backup is the worst
// kind." Read access reuses SCHEDULER_OPERATIONS/SCHEDULER_OVERSIGHT (the
// same ICT/SAU/CEO population already granted standing visibility into
// automated-infrastructure health under invariant 32) rather than a new
// capability invented for one read endpoint.
@Injectable()
export class BackupService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly delegation: DelegationService,
  ) {}

  async recordRun(dto: ReportBackupRunDto) {
    return this.prisma.backupRun.create({
      data: {
        dbName: dto.dbName,
        startedAt: new Date(dto.startedAt),
        completedAt: new Date(dto.completedAt),
        status: dto.status,
        dumpSizeBytes: dto.dumpSizeBytes !== undefined ? BigInt(dto.dumpSizeBytes) : undefined,
        offMachineCopyOk: dto.offMachineCopyOk,
        errorMessage: dto.errorMessage,
      },
    });
  }

  async listRecentForUser(userId: string, limit = 20) {
    const [opsEligible, oversightEligible] = await Promise.all([
      this.delegation.hasCapability(userId, 'SCHEDULER_OPERATIONS', 'VIEW'),
      this.delegation.hasCapability(userId, 'SCHEDULER_OVERSIGHT', 'VIEW'),
    ]);
    if (!opsEligible.eligible && !oversightEligible.eligible) {
      throw new Error('User lacks VIEW authority on SCHEDULER_OPERATIONS or SCHEDULER_OVERSIGHT (standing or delegated), required to view backup run history.');
    }
    // dumpSizeBytes is a BigInt -- invariant 30's global BigInt.prototype.toJSON
    // patch (installBigIntJsonSupport, called at bootstrap) already makes it
    // serialize safely through res.json() with no per-field handling here.
    return this.prisma.backupRun.findMany({ orderBy: { startedAt: 'desc' }, take: limit });
  }
}
