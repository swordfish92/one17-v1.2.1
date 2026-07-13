import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DelegationService } from '../delegation/delegation.service';
import { AuditService } from '../audit/audit.service';
import { BdLifecycleError, BdRegisterRow } from './bd.types';

// Invariant 27(c): "do NOT invent a pipeline schema. The BD register = a
// read-only register over (i) the Wave-0 lead skeleton and (ii) the
// graduated-onboarding funnel states derived from existing records: LEAD ->
// EXPRESS (stage-1 customer number) -> FULL_KYC -> FUNDED (first
// placement)." This service computes the register on every read — there is
// no bd_register table, no stored funnel-state column; every row is a live
// derivation over Lead + Investor + ProductAccount, exactly as instructed.
@Injectable()
export class BdService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly delegation: DelegationService,
    private readonly audit: AuditService,
  ) {}

  async getRegister(viewerUserId: string): Promise<BdRegisterRow[]> {
    const { eligible } = await this.delegation.hasCapability(viewerUserId, 'BD_REGISTER', 'VIEW');
    if (!eligible) {
      await this.audit.record({
        actorUserId: viewerUserId,
        action: 'PERMISSION_DENIED',
        entityType: 'bd_register',
        entityId: 'register',
        after: { functionCode: 'BD_REGISTER', level: 'VIEW' },
      });
      throw new BdLifecycleError('User lacks VIEW authority on BD_REGISTER (standing or delegated), required to view the BD register.');
    }

    const rows: BdRegisterRow[] = [];

    // Unconverted leads — the funnel's entry point, stage LEAD.
    const openLeads = await this.prisma.lead.findMany({
      where: { status: { not: 'CONVERTED' } },
      orderBy: { createdAt: 'desc' },
    });
    for (const lead of openLeads) {
      rows.push({
        source: 'LEAD',
        id: lead.id,
        name: lead.fullNameOrCompany,
        contactEmail: lead.contactEmail,
        contactPhone: lead.contactPhone,
        stage: 'LEAD',
        leadStatus: lead.status,
        createdAt: lead.createdAt,
      });
    }

    // Investors — EXPRESS / FULL_KYC / FUNDED, derived from existing
    // onboarding-stage + KYC-status + product-account records, never a
    // stored pipeline stage.
    const investors = await this.prisma.investor.findMany({
      where: { isDeleted: false },
      include: { productAccounts: true },
      orderBy: { createdAt: 'desc' },
    });
    for (const investor of investors) {
      const hasFunding = investor.productAccounts.some(
        (pa) => pa.principalOrCommittedKobo > 0n || Number(pa.unitsHeld ?? 0) > 0,
      );
      const stage = hasFunding
        ? 'FUNDED'
        : investor.onboardingStage === 'STAGE_2_COMPLETE' && investor.kycStatus === 'KYC_COMPLETE'
          ? 'FULL_KYC'
          : 'EXPRESS';
      rows.push({
        source: 'INVESTOR',
        id: investor.investorId,
        name: investor.fullLegalName,
        contactEmail: investor.contactEmail,
        contactPhone: investor.contactPhone,
        stage,
        createdAt: investor.createdAt,
      });
    }

    return rows.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
}
