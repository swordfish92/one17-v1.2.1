import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

// Check-5B item 2 (5l): the Shariah Governance approval register — SSB
// members, resolutions, purification records, and the SC-001..010
// compliance-check tracker, all migration-loaded (TPL_13, invariant 21a-ii)
// and, until this pass, entirely invisible to any HTTP/ops-UI surface —
// read-only queries only, no write path here (SHARIAH_RECORDS INITIATE/
// APPROVE already exist server-side via the migration promotion path; this
// screen is the register view CLAUDE.md's ops-UI screen inventory calls
// for, nothing more).
@Injectable()
export class ShariahGovernanceService {
  constructor(private readonly prisma: PrismaService) {}

  async listMembers() {
    return this.prisma.ssbMember.findMany({ orderBy: { name: 'asc' } });
  }

  async listResolutions() {
    return this.prisma.ssbResolution.findMany({
      orderBy: { resolutionDate: 'desc' },
      include: { proposedByMember: { select: { name: true, memberRef: true } } },
    });
  }

  async listPurificationRecords() {
    const records = await this.prisma.purificationRecord.findMany({ orderBy: { identifiedDate: 'desc' } });
    return records.map((r) => ({ ...r, amountKobo: r.amountKobo.toString() }));
  }

  async listComplianceChecks() {
    return this.prisma.complianceCheck.findMany({
      orderBy: { checkCode: 'asc' },
      include: { reviewedByMember: { select: { name: true, memberRef: true } } },
    });
  }
}
