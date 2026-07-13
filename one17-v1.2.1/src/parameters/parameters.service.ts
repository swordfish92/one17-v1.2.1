import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { Prisma } from '../../generated/prisma/client';
import { CreateProductInput, SetPoolParametersInput } from './parameters.types';

const EPSILON = 1e-9;

// Build Plan step 5 / SOW D5: per-product parameter sets. Deliberately
// minimal on the product-catalogue side (see Product's schema comment) —
// this service's job is the parameter values themselves: PSR pool
// constants (AMD-01/02) and the pool fee policy (AMD-03, as amended). Every
// change inserts a new version rather than updating in place, so the
// table's own rows are the change history; AuditService.record() is called
// too for consistency with the rest of the platform's audit trail.
@Injectable()
export class ParameterService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
  ) {}

  async createProduct(input: CreateProductInput) {
    // Invariant 60(b) (CHECK15): this gate moved from PARAMETERS to
    // PRODUCT_SETUP_INITIATION (PORT_MGR) -- setPoolParameters/
    // activateProduct below stay on PARAMETERS (SUPER_ADMIN/MD_CEO), the
    // genuinely separate governed-parameters gate, untouched by this
    // re-chain.
    await this.assertCapability(
      input.createdByUserId,
      'PRODUCT_SETUP_INITIATION',
      'INITIATE',
      'create a product',
    );
    const product = await this.prisma.product.create({
      data: {
        code: input.code,
        name: input.name,
        engineType: input.engineType,
      },
    });
    await this.audit.record({
      actorUserId: input.createdByUserId,
      action: 'CREATE',
      entityType: 'product',
      entityId: product.code,
      after: { name: input.name, engineType: input.engineType },
    });
    return product;
  }

  async setPoolParameters(input: SetPoolParametersInput) {
    await this.assertCapability(
      input.createdByUserId,
      'PARAMETERS',
      'INITIATE',
      'set product parameters',
    );
    if (input.approvedByUserId) {
      await this.assertCapability(
        input.approvedByUserId,
        'PARAMETERS',
        'APPROVE',
        'approve product parameters',
      );
    }
    this.validate(input);

    const previous = await this.getCurrentParameters(input.productCode);
    const product = await this.prisma.product.findUniqueOrThrow({
      where: { code: input.productCode },
    });
    this.checkGovernanceGate(input, previous, product.status);

    const nextVersion = (previous?.version ?? 0) + 1;

    const created = await this.prisma.productParameters.create({
      data: {
        productCode: input.productCode,
        version: nextVersion,
        psrPoolMudaribShare: input.psrPoolMudaribShare,
        surplusInvestorShare: input.surplusInvestorShare,
        surplusMudaribShare: input.surplusMudaribShare,
        feesAllowedOnPool: input.feesAllowedOnPool ?? false,
        dripDefault: input.dripDefault ?? 'NONE',
        boardResolutionRef: input.boardResolutionRef,
        ssbResolutionRef: input.ssbResolutionRef,
        createdByUserId: input.createdByUserId,
        approvedByUserId: input.approvedByUserId,
      },
    });

    await this.audit.record({
      actorUserId: input.createdByUserId,
      action: 'CREATE',
      entityType: 'product_parameters',
      entityId: `${input.productCode}:v${nextVersion}`,
      before: previous ? this.snapshot(previous) : null,
      after: this.snapshot(created),
    });

    return created;
  }

  // CLAUDE.md invariant #7 governance gate: on an ACTIVE product, changing
  // feesAllowedOnPool or a PSR constant requires both boardResolutionRef and
  // ssbResolutionRef on the NEW version (AMD-01's Board + SSB approval
  // workflow). A product's first parameter version never triggers this —
  // there is nothing to "change" from yet.
  private checkGovernanceGate(
    input: SetPoolParametersInput,
    previous: Awaited<ReturnType<ParameterService['getCurrentParameters']>>,
    productStatus: string,
  ) {
    if (!previous || productStatus !== 'ACTIVE') return;

    const feesChanged =
      input.feesAllowedOnPool !== undefined &&
      input.feesAllowedOnPool !== previous.feesAllowedOnPool;
    const psrChanged =
      this.decimalChanged(
        input.psrPoolMudaribShare,
        previous.psrPoolMudaribShare,
      ) ||
      this.decimalChanged(
        input.surplusInvestorShare,
        previous.surplusInvestorShare,
      ) ||
      this.decimalChanged(
        input.surplusMudaribShare,
        previous.surplusMudaribShare,
      );

    if (
      (feesChanged || psrChanged) &&
      (!input.boardResolutionRef || !input.ssbResolutionRef)
    ) {
      throw new Error(
        'Changing fee policy or a PSR constant on an ACTIVE product requires both boardResolutionRef and ssbResolutionRef (AMD-01 Board + SSB approval workflow).',
      );
    }
  }

  private decimalChanged(
    next: number | undefined,
    prev: Prisma.Decimal | null,
  ): boolean {
    if (next === undefined) return false; // not part of this update
    if (prev === null) return true; // was unset, now being set — a change
    return Math.abs(next - prev.toNumber()) > EPSILON;
  }

  async listProducts() {
    return this.prisma.product.findMany({ orderBy: { code: 'asc' } });
  }

  async getCurrentParameters(productCode: string) {
    return this.prisma.productParameters.findFirst({
      where: { productCode },
      orderBy: { version: 'desc' },
    });
  }

  // AMD-12 rule 2's activation gate: "the system refuses to ACTIVATE a
  // product/module whose governed parameters are unpopulated (a fund
  // cannot go ACTIVE without approved parameters)." Deployment/build never
  // required these values (governed slots ship EMPTY, per AMD-12 rule 1);
  // this is the one place they're required, and the refusal names exactly
  // what's missing rather than a generic failure.
  async activateProduct(productCode: string, actorUserId: string) {
    await this.assertCapability(
      actorUserId,
      'PARAMETERS',
      'APPROVE',
      'activate a product',
    );

    const product = await this.prisma.product.findUniqueOrThrow({
      where: { code: productCode },
    });
    if (product.status === 'ACTIVE') {
      throw new Error(`Product ${productCode} is already ACTIVE.`);
    }

    // Invariant 44(b): "mandatory Shariah-approval gate before ACTIVE ...
    // no deployment without SSB approval" -- a blanket rule, not PSR-
    // specific, so checked here alongside the governed-parameters gate
    // rather than only downstream in SubscriptionService (invariant 42a).
    const missing: string[] = [];
    if (!product.shariahApprovedAt) {
      missing.push('shariahApprovedAt (no Shariah/SSB approval on file -- see Shariah Governance > Approve Product / ProductService.approveProductShariah)');
    }

    const current = await this.getCurrentParameters(productCode);
    if (!current) {
      missing.push('productParameters (no version exists)');
    } else {
      if (!current.approvedByUserId) {
        missing.push(
          'productParameters.approvedByUserId (current version is unapproved)',
        );
      }
      if (product.engineType === 'PSR_WATERFALL') {
        if (current.psrPoolMudaribShare === null)
          missing.push('psrPoolMudaribShare');
        if (current.surplusInvestorShare === null)
          missing.push('surplusInvestorShare');
        if (current.surplusMudaribShare === null)
          missing.push('surplusMudaribShare');
      }
    }

    if (missing.length > 0) {
      await this.audit.record({
        actorUserId,
        action: 'PERMISSION_DENIED',
        entityType: 'product_activation',
        entityId: productCode,
        after: { missing },
      });
      throw new Error(
        `Cannot activate product ${productCode}: missing governed parameters — ${missing.join(', ')} (AMD-12 rule 2).`,
      );
    }

    const updated = await this.prisma.product.update({
      where: { code: productCode },
      data: { status: 'ACTIVE' },
    });

    await this.audit.record({
      actorUserId,
      action: 'UPDATE',
      entityType: 'product',
      entityId: productCode,
      before: { status: product.status },
      after: { status: 'ACTIVE' },
    });

    return updated;
  }

  // Defense-in-depth alongside the DB CHECK constraints (see
  // prisma/migrations/20260704084900_product_parameters_check_constraints):
  // fail fast with a clear message here; the DB is the backstop against any
  // caller that bypasses this service.
  private validate(input: SetPoolParametersInput) {
    if (input.psrPoolMudaribShare !== undefined) {
      if (input.psrPoolMudaribShare <= 0 || input.psrPoolMudaribShare >= 1) {
        throw new Error(
          `psrPoolMudaribShare must be strictly between 0 and 1 (AMD-01); got ${input.psrPoolMudaribShare}`,
        );
      }
    }
    if (
      input.surplusInvestorShare !== undefined &&
      input.surplusMudaribShare !== undefined
    ) {
      const sum = input.surplusInvestorShare + input.surplusMudaribShare;
      if (Math.abs(sum - 1) > EPSILON) {
        throw new Error(
          `surplusInvestorShare + surplusMudaribShare must equal 1.0 (AMD-02); got ${sum}`,
        );
      }
    }
  }

  // CEO instruction 2026-07-04: activity-to-role mapping is always
  // structured through DelegationService, never a hard-coded check — same
  // helper pattern as InvestorService.
  private async assertCapability(
    userId: string,
    functionCode: string,
    level: 'INITIATE' | 'APPROVE' | 'VIEW',
    activity: string,
  ) {
    const { eligible } = await this.delegation.hasCapability(
      userId,
      functionCode,
      level,
    );
    if (!eligible) {
      await this.audit.record({
        actorUserId: userId,
        action: 'PERMISSION_DENIED',
        entityType: 'parameter_activity',
        entityId: activity,
        after: { functionCode, level },
      });
      throw new Error(
        `User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`,
      );
    }
  }

  private snapshot(row: {
    version: number;
    psrPoolMudaribShare: unknown;
    surplusInvestorShare: unknown;
    surplusMudaribShare: unknown;
    feesAllowedOnPool: boolean;
    dripDefault: string;
    boardResolutionRef: string | null;
    ssbResolutionRef: string | null;
  }) {
    return {
      version: row.version,
      psrPoolMudaribShare: row.psrPoolMudaribShare?.toString(),
      surplusInvestorShare: row.surplusInvestorShare?.toString(),
      surplusMudaribShare: row.surplusMudaribShare?.toString(),
      feesAllowedOnPool: row.feesAllowedOnPool,
      dripDefault: row.dripDefault,
      boardResolutionRef: row.boardResolutionRef,
      ssbResolutionRef: row.ssbResolutionRef,
    };
  }
}
