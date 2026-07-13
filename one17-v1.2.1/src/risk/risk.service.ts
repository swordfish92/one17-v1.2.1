import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import {
  ProposeRiskAppetiteMatrixVersionInput,
  UpdateCategoryThresholdsInput,
  ApproveRiskAppetiteMatrixVersionInput,
  ActiveRiskAppetiteMatrixResult,
  ApproveRiskRegisterEntryInput,
  RiskLifecycleError,
} from './risk.types';

// AMD-12 / CLAUDE.md invariant #16: "Board and SSB matters must not delay
// the build ... governed parameters are runtime configuration entered
// through approval workflows at ACTIVATION." Version 1 of the appetite
// matrix and every risk_register_entry row ship DRAFT, seeded from the ERM
// Engine + Corporate Strategy Top Risk Review workbook (see seed.ts) — this
// service is what moves them from DRAFT to ACTIVE, and is the thing that
// refuses to pretend a live RAG status exists before that happens.
@Injectable()
export class RiskService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
  ) {}

  async proposeMatrixVersion(input: ProposeRiskAppetiteMatrixVersionInput) {
    await this.assertCapability(
      input.proposedByUserId,
      'RISK_APPETITE_MATRIX',
      'INITIATE',
      'propose a new risk appetite matrix version',
    );

    const latest = await this.prisma.riskAppetiteMatrixVersion.findFirst({
      orderBy: { version: 'desc' },
    });
    const version = (latest?.version ?? 0) + 1;

    const created = await this.prisma.riskAppetiteMatrixVersion.create({
      data: {
        version,
        status: 'DRAFT',
        proposedByUserId: input.proposedByUserId,
      },
    });

    if (input.cloneFromVersionId) {
      const sourceCategories = await this.prisma.riskAppetiteCategory.findMany({
        where: { matrixVersionId: input.cloneFromVersionId },
      });
      for (const c of sourceCategories) {
        await this.prisma.riskAppetiteCategory.create({
          data: {
            matrixVersionId: created.id,
            sortOrder: c.sortOrder,
            riskCategory: c.riskCategory,
            appetiteStatement: c.appetiteStatement,
            appetiteLevel: c.appetiteLevel,
            direction: c.direction,
            isZeroTolerance: c.isZeroTolerance,
            escalationOwner: c.escalationOwner,
            greenThreshold: c.greenThreshold,
            amberThreshold: c.amberThreshold,
            redThreshold: c.redThreshold,
          },
        });
      }
    }

    // Invariant 49(a) (CHECK11, atomicity sweep): compensating cleanup, not
    // a $transaction -- see PmsService.submitSelfScore's comment for why
    // one can't span into workflow.initiate() across service boundaries.
    // riskAppetiteCategory has no cascade off the matrix version (schema),
    // so any cloned rows from the loop above must be deleted first or the
    // version delete below hits an FK violation.
    let instance;
    try {
      instance = await this.workflow.initiate({
        workflowTypeCode: 'RISK_APPETITE_MATRIX_APPROVAL',
        entityType: 'risk_appetite_matrix_version',
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
        entityType: 'risk_appetite_matrix_version',
        entityId: created.id,
        after: { workflowTypeCode: 'RISK_APPETITE_MATRIX_APPROVAL', reason: (err as Error).message },
      });
      await this.prisma.riskAppetiteCategory.deleteMany({ where: { matrixVersionId: created.id } });
      await this.prisma.riskAppetiteMatrixVersion.delete({ where: { id: created.id } });
      throw err;
    }

    await this.prisma.riskAppetiteMatrixVersion.update({
      where: { id: created.id },
      data: { workflowInstanceId: instance.id },
    });

    await this.audit.record({
      actorUserId: input.proposedByUserId,
      action: 'CREATE',
      entityType: 'risk_appetite_matrix_version',
      entityId: created.id,
      after: { version, clonedFrom: input.cloneFromVersionId },
    });

    return { matrixVersion: created, workflowInstance: instance };
  }

  // Board/RAC populates numeric bands on a DRAFT version before (or as part
  // of) approval — AMD-06's monotonic-threshold CHECK is the backstop once
  // all three are set; this fails fast with a clearer message first.
  async updateCategoryThresholds(input: UpdateCategoryThresholdsInput) {
    await this.assertCapability(
      input.actorUserId,
      'RISK_APPETITE_MATRIX',
      'INITIATE',
      'set risk appetite category thresholds',
    );

    const version =
      await this.prisma.riskAppetiteMatrixVersion.findUniqueOrThrow({
        where: { id: input.matrixVersionId },
      });
    if (version.status !== 'DRAFT') {
      throw new RiskLifecycleError(
        `Cannot edit thresholds on version ${version.version}: status is ${version.status}, not DRAFT.`,
      );
    }

    const category = await this.prisma.riskAppetiteCategory.findFirstOrThrow({
      where: {
        matrixVersionId: input.matrixVersionId,
        sortOrder: input.sortOrder,
      },
    });

    if (
      !category.isZeroTolerance &&
      input.greenThreshold !== undefined &&
      input.amberThreshold !== undefined &&
      input.redThreshold !== undefined
    ) {
      const monotonic =
        category.direction === 'HIGHER_BETTER'
          ? input.greenThreshold > input.amberThreshold &&
            input.amberThreshold > input.redThreshold
          : input.greenThreshold < input.amberThreshold &&
            input.amberThreshold < input.redThreshold;
      if (!monotonic) {
        throw new RiskLifecycleError(
          `Thresholds for "${category.riskCategory}" are not monotonic per Direction ${category.direction} (AMD-06).`,
        );
      }
    }

    const updated = await this.prisma.riskAppetiteCategory.update({
      where: { id: category.id },
      data: {
        greenThreshold: input.greenThreshold,
        amberThreshold: input.amberThreshold,
        redThreshold: input.redThreshold,
      },
    });

    await this.audit.record({
      actorUserId: input.actorUserId,
      action: 'UPDATE',
      entityType: 'risk_appetite_category',
      entityId: updated.id,
      after: {
        greenThreshold: input.greenThreshold,
        amberThreshold: input.amberThreshold,
        redThreshold: input.redThreshold,
      },
    });

    return updated;
  }

  // AMD-12 rule 3: "every approval record ... accepts attached evidence
  // documents (Board/SSB resolutions) ... Where ... resolution REFS are
  // required, the ref may carry an attached document" — boardResolutionRef
  // is mandatory here (unlike accounting_framework_map's optional ref) since
  // this is explicitly Board-governed content, not FINCON-proposed mapping.
  async approveMatrixVersion(input: ApproveRiskAppetiteMatrixVersionInput) {
    if (!input.boardResolutionRef) {
      throw new RiskLifecycleError(
        'A boardResolutionRef is required to approve a risk appetite matrix version (AMD-12 rule 3).',
      );
    }

    const updated = await this.workflow.approveNextStep(
      input.workflowInstanceId,
      input.approverUserId,
    );
    if (updated.status !== 'APPROVED') return null;

    const version =
      await this.prisma.riskAppetiteMatrixVersion.findFirstOrThrow({
        where: { workflowInstanceId: input.workflowInstanceId },
      });

    const [, activated] = await this.prisma.$transaction([
      this.prisma.riskAppetiteMatrixVersion.updateMany({
        where: { status: 'ACTIVE' },
        data: { status: 'SUPERSEDED' },
      }),
      this.prisma.riskAppetiteMatrixVersion.update({
        where: { id: version.id },
        data: {
          status: 'ACTIVE',
          approvedByUserId: input.approverUserId,
          boardResolutionRef: input.boardResolutionRef,
          effectiveFrom: new Date(),
        },
      }),
    ]);

    await this.audit.record({
      actorUserId: input.approverUserId,
      action: 'UPDATE',
      entityType: 'risk_appetite_matrix_version',
      entityId: version.id,
      after: {
        status: 'ACTIVE',
        version: version.version,
        boardResolutionRef: input.boardResolutionRef,
      },
    });

    return activated;
  }

  // The activation gate itself — never derives a "live" RAG status from a
  // DRAFT version. This is the concrete embodiment of AMD-12 rule 2's "ERM
  // module cannot arm live RAG statuses without an approved appetite matrix
  // version" and UAT-AMD-12's "AWAITING APPROVED MATRIX, not fake green."
  async getActiveMatrix(): Promise<ActiveRiskAppetiteMatrixResult> {
    const active = await this.prisma.riskAppetiteMatrixVersion.findFirst({
      where: { status: 'ACTIVE' },
      include: { categories: { orderBy: { sortOrder: 'asc' } } },
    });
    if (!active) return { status: 'AWAITING_APPROVED_MATRIX' };

    return {
      status: 'ACTIVE',
      version: active.version,
      effectiveFrom: active.effectiveFrom,
      categories: active.categories.map((c) => ({
        riskCategory: c.riskCategory,
        appetiteStatement: c.appetiteStatement,
        direction: c.direction,
        isZeroTolerance: c.isZeroTolerance,
        greenThreshold: c.greenThreshold?.toString() ?? null,
        amberThreshold: c.amberThreshold?.toString() ?? null,
        redThreshold: c.redThreshold?.toString() ?? null,
      })),
    };
  }

  async getRiskRegister(status?: 'DRAFT' | 'ACTIVE') {
    return this.prisma.riskRegisterEntry.findMany({
      where: status ? { status } : undefined,
      orderBy: { sortOrder: 'asc' },
    });
  }

  async approveRiskRegisterEntry(input: ApproveRiskRegisterEntryInput) {
    await this.assertCapability(
      input.approverUserId,
      'RISK_REGISTER',
      'APPROVE',
      'approve a risk register entry',
    );

    const entry = await this.prisma.riskRegisterEntry.findUniqueOrThrow({
      where: { id: input.id },
    });
    if (entry.status !== 'DRAFT') {
      throw new RiskLifecycleError(
        `Cannot approve risk_register_entry ${entry.id}: status is ${entry.status}, not DRAFT.`,
      );
    }

    const updated = await this.prisma.riskRegisterEntry.update({
      where: { id: entry.id },
      data: {
        status: 'ACTIVE',
        approvedByUserId: input.approverUserId,
        boardResolutionRef: input.boardResolutionRef,
      },
    });

    await this.audit.record({
      actorUserId: input.approverUserId,
      action: 'UPDATE',
      entityType: 'risk_register_entry',
      entityId: updated.id,
      after: { status: 'ACTIVE', boardResolutionRef: input.boardResolutionRef },
    });

    return updated;
  }

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
        entityType: 'risk_activity',
        entityId: activity,
        after: { functionCode, level },
      });
      throw new RiskLifecycleError(
        `User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`,
      );
    }
  }
}
