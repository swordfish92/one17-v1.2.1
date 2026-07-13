import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { SetHalalFundLaunchConfigInput, HalalFundLaunchConfigError } from './halal-fund-launch-config.types';

const EPSILON = 1e-9;

// Check-6A item 1: closes the gap CHECK5_EVIDENCE.md §7 / CHECK5B_EVIDENCE.md
// §1.1 reported rather than papered over — the Halal Fund daily-accrual job
// had no config table, only hardcoded smoke-test fixtures. Mirrors
// ParameterService.setPoolParameters/checkGovernanceGate exactly: versioned
// rows, first version needs no Board/SSB refs, a CHANGE to an already-ACTIVE
// fund's economically consequential fields (launch price, spreads, fee
// rates) requires both boardResolutionRef AND ssbResolutionRef. Reuses the
// existing PARAMETERS capability (same "product parameters" authority
// ParameterService gates on) rather than inventing a new function code.
@Injectable()
export class HalalFundLaunchConfigService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
  ) {}

  async setLaunchConfig(input: SetHalalFundLaunchConfigInput) {
    await this.assertCapability(input.createdByUserId, 'PARAMETERS', 'INITIATE', 'set Halal Fund launch config');
    if (input.approvedByUserId) {
      await this.assertCapability(input.approvedByUserId, 'PARAMETERS', 'APPROVE', 'approve Halal Fund launch config');
    }
    this.validate(input);

    const previous = await this.getActiveConfig(input.ledgerEntityCode);
    this.checkGovernanceGate(input, previous);

    const nextVersion = (previous?.version ?? 0) + 1;

    const [, created] = await this.prisma.$transaction([
      this.prisma.halalFundLaunchConfig.updateMany({
        where: { ledgerEntityCode: input.ledgerEntityCode, status: 'ACTIVE' },
        data: { status: 'SUPERSEDED' },
      }),
      this.prisma.halalFundLaunchConfig.create({
        data: {
          ledgerEntityCode: input.ledgerEntityCode,
          version: nextVersion,
          status: 'ACTIVE',
          launchDate: input.launchDate,
          launchPrice: input.launchPrice,
          offerSpreadPct: input.offerSpreadPct,
          bidSpreadPct: input.bidSpreadPct,
          feeRates: input.feeRates as any,
          boardResolutionRef: input.boardResolutionRef,
          ssbResolutionRef: input.ssbResolutionRef,
          createdByUserId: input.createdByUserId,
          approvedByUserId: input.approvedByUserId,
        },
      }),
    ]);

    await this.audit.record({
      actorUserId: input.createdByUserId,
      action: 'CREATE',
      entityType: 'halal_fund_launch_config',
      entityId: `${input.ledgerEntityCode}:v${nextVersion}`,
      before: previous ? this.snapshot(previous) : null,
      after: this.snapshot(created),
    });

    return created;
  }

  async getActiveConfig(ledgerEntityCode: string) {
    return this.prisma.halalFundLaunchConfig.findFirst({
      where: { ledgerEntityCode, status: 'ACTIVE' },
      orderBy: { version: 'desc' },
    });
  }

  async listActiveConfigs() {
    return this.prisma.halalFundLaunchConfig.findMany({ where: { status: 'ACTIVE' } });
  }

  // Mirrors ParameterService.checkGovernanceGate: only a CHANGE to an
  // already-ACTIVE config triggers the dual-ref requirement. A fund's first
  // launch config has nothing to change from — there is no prior investor
  // reliance on the numbers yet.
  private checkGovernanceGate(
    input: SetHalalFundLaunchConfigInput,
    previous: Awaited<ReturnType<HalalFundLaunchConfigService['getActiveConfig']>>,
  ) {
    if (!previous) return;

    const priceChanged = this.decimalChanged(input.launchPrice, previous.launchPrice);
    const offerChanged = this.decimalChanged(input.offerSpreadPct, previous.offerSpreadPct);
    const bidChanged = this.decimalChanged(input.bidSpreadPct, previous.bidSpreadPct);
    const feesChanged = JSON.stringify(input.feeRates) !== JSON.stringify(previous.feeRates);

    if (
      (priceChanged || offerChanged || bidChanged || feesChanged) &&
      (!input.boardResolutionRef || !input.ssbResolutionRef)
    ) {
      throw new HalalFundLaunchConfigError(
        'Changing launch price, spreads, or fee rates on an ACTIVE Halal Fund launch config requires both boardResolutionRef and ssbResolutionRef (mirrors AMD-01 Board + SSB approval workflow).',
      );
    }
  }

  private decimalChanged(next: number, prev: unknown): boolean {
    const prevNum = typeof prev === 'object' && prev !== null && 'toNumber' in (prev as any) ? (prev as any).toNumber() : Number(prev);
    return Math.abs(next - prevNum) > EPSILON;
  }

  private validate(input: SetHalalFundLaunchConfigInput) {
    if (input.launchPrice <= 0) {
      throw new HalalFundLaunchConfigError(`launchPrice must be > 0; got ${input.launchPrice}`);
    }
    if (input.offerSpreadPct < 0 || input.bidSpreadPct < 0) {
      throw new HalalFundLaunchConfigError('offerSpreadPct and bidSpreadPct must be >= 0.');
    }
    if (input.feeRates.length === 0) {
      throw new HalalFundLaunchConfigError('feeRates must have at least one fee type (F-HF-04).');
    }
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({
        actorUserId: userId,
        action: 'PERMISSION_DENIED',
        entityType: 'halal_fund_launch_config_activity',
        entityId: activity,
        after: { functionCode, level },
      });
      throw new HalalFundLaunchConfigError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }

  private snapshot(row: {
    version: number;
    status: string;
    launchDate: Date;
    launchPrice: unknown;
    offerSpreadPct: unknown;
    bidSpreadPct: unknown;
    feeRates: unknown;
    boardResolutionRef: string | null;
    ssbResolutionRef: string | null;
  }) {
    return {
      version: row.version,
      status: row.status,
      launchDate: row.launchDate.toISOString().slice(0, 10),
      launchPrice: row.launchPrice?.toString(),
      offerSpreadPct: row.offerSpreadPct?.toString(),
      bidSpreadPct: row.bidSpreadPct?.toString(),
      feeRates: row.feeRates,
      boardResolutionRef: row.boardResolutionRef,
      ssbResolutionRef: row.ssbResolutionRef,
    };
  }
}
