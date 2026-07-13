import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { DelegationService } from '../delegation/delegation.service';
import { Prisma } from '../../generated/prisma/client';
import {
  ProposeStrategyStatementInput,
  ApproveStrategyStatementInput,
  UpdatePillarGovernanceInput,
  UpdateObjectiveGovernanceInput,
  PublishStrategyInput,
  AddStatementTypeConfigInput,
  ProposePillarInput,
  ApprovePillarInput,
  ProposeObjectiveInput,
  ApproveObjectiveInput,
  MapKraToObjectiveInput,
  StrategyLayerError,
} from './strategy-layer.types';

// Invariant 28(c): the strategy layer lives in the CEO/Governance layer,
// not BD — it OWNS the existing PMS strategy-spine (StrategicPillar/
// StrategicObjective, built earlier for the KRA/KPI cascade) and adds the
// governance artifacts those tables never carried: vision/mission/core-
// values/3-yr-outlook (StrategyStatement, versioned exactly like
// RiskAppetiteMatrixVersion), explanation/boardResolutionRef on the
// existing pillar/objective rows, and publish-to-staff with
// read-acknowledgment tracking (SAU's KRA).
@Injectable()
export class StrategyLayerService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly workflow: WorkflowEngineService,
    private readonly delegation: DelegationService,
  ) {}

  async proposeStatement(input: ProposeStrategyStatementInput) {
    await this.assertCapability(input.proposedByUserId, 'STRATEGY_LAYER', 'INITIATE', 'propose a strategy statement');

    const typeConfig = await this.prisma.strategyStatementTypeConfig.findUnique({
      where: { code: input.statementTypeCode },
    });
    if (!typeConfig || !typeConfig.isActive) {
      throw new StrategyLayerError(
        `"${input.statementTypeCode}" is not an active strategy_statement_type_config row — add it via addStatementTypeConfig before proposing a statement of this type (invariant 19: vocabulary is config, not code).`,
      );
    }

    const created = await this.prisma.strategyStatement.create({
      data: {
        statementTypeCode: input.statementTypeCode,
        content: input.content,
        explanation: input.explanation,
        status: 'DRAFT',
        proposedByUserId: input.proposedByUserId,
      },
    });

    // Invariant 49(a) (CHECK11, atomicity sweep): compensating cleanup, not
    // a $transaction -- see PmsService.submitSelfScore's comment for why
    // one can't span into workflow.initiate() across service boundaries.
    let instance;
    try {
      instance = await this.workflow.initiate({
        workflowTypeCode: 'STRATEGY_LAYER_APPROVAL',
        entityType: 'strategy_statement',
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
        entityType: 'strategy_statement',
        entityId: created.id,
        after: { workflowTypeCode: 'STRATEGY_LAYER_APPROVAL', reason: (err as Error).message },
      });
      await this.prisma.strategyStatement.delete({ where: { id: created.id } });
      throw err;
    }

    return this.prisma.strategyStatement.update({
      where: { id: created.id },
      data: { workflowInstanceId: instance.id },
    });
  }

  // Mirrors RiskService.approveMatrixVersion: mandatory boardResolutionRef,
  // prior ACTIVE row(s) of the SAME statementTypeCode superseded — UNLESS
  // that type's config row sets allowsMultipleActive (e.g. CORE_VALUE: a
  // list of values, not a single statement a new version replaces). Which
  // types behave which way is data (StrategyStatementTypeConfig), never a
  // hardcoded type-name comparison here.
  async approveStatement(input: ApproveStrategyStatementInput) {
    if (!input.boardResolutionRef) {
      throw new StrategyLayerError(
        'A boardResolutionRef is required to approve a strategy statement (invariant 28c: Board-resolution-ref on changes).',
      );
    }

    const updated = await this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
    if (updated.status !== 'APPROVED') return null;

    const statement = await this.prisma.strategyStatement.findFirstOrThrow({
      where: { workflowInstanceId: input.workflowInstanceId },
      include: { statementType: true },
    });

    const ops: Prisma.PrismaPromise<unknown>[] = [];
    if (!statement.statementType.allowsMultipleActive) {
      ops.push(
        this.prisma.strategyStatement.updateMany({
          where: { statementTypeCode: statement.statementTypeCode, status: 'ACTIVE' },
          data: { status: 'SUPERSEDED' },
        }),
      );
    }
    ops.push(
      this.prisma.strategyStatement.update({
        where: { id: statement.id },
        data: {
          status: 'ACTIVE',
          boardResolutionRef: input.boardResolutionRef,
          approvedByUserId: input.approverUserId,
          effectiveFrom: new Date(),
        },
      }),
    );
    const [, activated] = await this.prisma.$transaction(ops);

    await this.audit.record({
      actorUserId: input.approverUserId,
      action: 'UPDATE',
      entityType: 'strategy_statement',
      entityId: statement.id,
      after: { status: 'ACTIVE', boardResolutionRef: input.boardResolutionRef },
    });

    return activated;
  }

  // Feeds the Strategy screen's own approve action — this is the ONE place
  // STRATEGY_LAYER_APPROVAL instances are approved from; the generic
  // Workflow Inbox refuses them outright (WorkflowInboxService).
  async listPendingStatements() {
    return this.prisma.strategyStatement.findMany({
      where: { status: 'DRAFT', workflowInstanceId: { not: null } },
      include: { statementType: true },
      orderBy: { createdAt: 'asc' },
    });
  }

  async getActiveStrategy() {
    const statements = await this.prisma.strategyStatement.findMany({
      where: { status: 'ACTIVE' },
      include: { statementType: true },
      orderBy: { effectiveFrom: 'desc' },
    });
    const pillars = await this.prisma.strategicPillar.findMany({
      include: { objectiveMap: { include: { objective: true } } },
    });
    return { statements, pillars };
  }

  // Invariant 19: the read every propose-form and display screen drives
  // its statement-type list from — never a hardcoded TS union.
  async listStatementTypeConfigs() {
    return this.prisma.strategyStatementTypeConfig.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: 'asc' },
    });
  }

  // Extends the vocabulary with zero code change — a new tenant (or a
  // future One17 governance decision) adds "TAGLINE" or "5_YEAR_PLAN" as a
  // data row here, not a schema migration.
  async addStatementTypeConfig(input: AddStatementTypeConfigInput) {
    await this.assertCapability(input.actorUserId, 'STRATEGY_LAYER', 'INITIATE', 'add a strategy statement type');
    const created = await this.prisma.strategyStatementTypeConfig.create({
      data: {
        code: input.code,
        label: input.label,
        description: input.description,
        allowsMultipleActive: input.allowsMultipleActive ?? false,
        sortOrder: input.sortOrder ?? 0,
      },
    });
    await this.audit.record({
      actorUserId: input.actorUserId,
      action: 'CREATE',
      entityType: 'strategy_statement_type_config',
      entityId: created.code,
      after: { label: input.label, allowsMultipleActive: created.allowsMultipleActive },
    });
    return created;
  }

  async updatePillarGovernance(input: UpdatePillarGovernanceInput) {
    await this.assertCapability(input.actorUserId, 'STRATEGY_LAYER', 'INITIATE', 'update pillar governance text');
    const updated = await this.prisma.strategicPillar.update({
      where: { code: input.pillarCode },
      data: { explanation: input.explanation, boardResolutionRef: input.boardResolutionRef },
    });
    await this.audit.record({
      actorUserId: input.actorUserId,
      action: 'UPDATE',
      entityType: 'strategic_pillar',
      entityId: input.pillarCode,
      after: { explanation: input.explanation, boardResolutionRef: input.boardResolutionRef },
    });
    return updated;
  }

  async updateObjectiveGovernance(input: UpdateObjectiveGovernanceInput) {
    await this.assertCapability(input.actorUserId, 'STRATEGY_LAYER', 'INITIATE', 'update objective governance text');
    const updated = await this.prisma.strategicObjective.update({
      where: { code: input.objectiveCode },
      data: { explanation: input.explanation, boardResolutionRef: input.boardResolutionRef },
    });
    await this.audit.record({
      actorUserId: input.actorUserId,
      action: 'UPDATE',
      entityType: 'strategic_objective',
      entityId: input.objectiveCode,
      after: { explanation: input.explanation, boardResolutionRef: input.boardResolutionRef },
    });
    return updated;
  }

  // Invariant 51(c2) (CHECK12): governed pillar CREATION -- was seed-only.
  // Same shape as proposeStatement (compensating cleanup, not $transaction,
  // for the same cross-service reason documented there).
  async proposePillar(input: ProposePillarInput) {
    await this.assertCapability(input.proposedByUserId, 'STRATEGY_LAYER', 'INITIATE', 'propose a new strategic pillar');

    const created = await this.prisma.strategicPillar.create({
      data: {
        code: input.code,
        name: input.name,
        description: input.description,
        status: 'DRAFT',
        proposedByUserId: input.proposedByUserId,
      },
    });

    let instance;
    try {
      instance = await this.workflow.initiate({
        workflowTypeCode: 'PMS_STRATEGY_SPINE_APPROVAL',
        entityType: 'strategic_pillar',
        entityId: created.code,
        initiatedByUserId: input.proposedByUserId,
        scenario: 'STANDARD',
      });
    } catch (err) {
      await this.audit.record({
        actorUserId: input.proposedByUserId,
        action: 'INITIATE_FAILED_COMPENSATED',
        entityType: 'strategic_pillar',
        entityId: created.code,
        after: { workflowTypeCode: 'PMS_STRATEGY_SPINE_APPROVAL', reason: (err as Error).message },
      });
      await this.prisma.strategicPillar.delete({ where: { code: created.code } });
      throw err;
    }

    return this.prisma.strategicPillar.update({ where: { code: created.code }, data: { workflowInstanceId: instance.id } });
  }

  // Mandatory boardResolutionRef, same gate as approveStatement/RiskService.
  // approveMatrixVersion. A pillar has no "prior ACTIVE row to supersede"
  // (code is the primary key, one row per pillar) -- approval is a pure
  // DRAFT -> ACTIVE transition.
  async approvePillar(input: ApprovePillarInput) {
    if (!input.boardResolutionRef) {
      throw new StrategyLayerError('A boardResolutionRef is required to approve a strategic pillar (invariant 51c2, mirrors 28c).');
    }
    const updated = await this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
    if (updated.status !== 'APPROVED') return null;

    const pillar = await this.prisma.strategicPillar.findFirstOrThrow({ where: { workflowInstanceId: input.workflowInstanceId } });
    const activated = await this.prisma.strategicPillar.update({
      where: { code: pillar.code },
      data: { status: 'ACTIVE', boardResolutionRef: input.boardResolutionRef, approvedByUserId: input.approverUserId },
    });

    await this.audit.record({
      actorUserId: input.approverUserId,
      action: 'UPDATE',
      entityType: 'strategic_pillar',
      entityId: pillar.code,
      after: { status: 'ACTIVE', boardResolutionRef: input.boardResolutionRef },
    });
    return activated;
  }

  async listPendingPillars() {
    return this.prisma.strategicPillar.findMany({ where: { status: 'DRAFT', workflowInstanceId: { not: null } }, orderBy: { createdAt: 'asc' } });
  }

  // Invariant 51(c2): governed objective CREATION, atomically joined to its
  // pillar via PillarObjectiveMap (an objective always belongs to at least
  // one pillar at definition time) -- see the type comment for why this
  // isn't a separate mapping screen the way KRA<->objective is.
  async proposeObjective(input: ProposeObjectiveInput) {
    await this.assertCapability(input.proposedByUserId, 'STRATEGY_LAYER', 'INITIATE', 'propose a new strategic objective');

    const pillar = await this.prisma.strategicPillar.findUnique({ where: { code: input.pillarCode } });
    if (!pillar) {
      throw new StrategyLayerError(`Pillar ${input.pillarCode} does not exist -- propose it first.`);
    }

    const created = await this.prisma.strategicObjective.create({
      data: {
        code: input.code,
        name: input.name,
        explanation: input.explanation,
        status: 'DRAFT',
        proposedByUserId: input.proposedByUserId,
      },
    });
    await this.prisma.pillarObjectiveMap.create({ data: { pillarCode: input.pillarCode, objectiveCode: created.code } });

    let instance;
    try {
      instance = await this.workflow.initiate({
        workflowTypeCode: 'PMS_STRATEGY_SPINE_APPROVAL',
        entityType: 'strategic_objective',
        entityId: created.code,
        initiatedByUserId: input.proposedByUserId,
        scenario: 'STANDARD',
      });
    } catch (err) {
      await this.audit.record({
        actorUserId: input.proposedByUserId,
        action: 'INITIATE_FAILED_COMPENSATED',
        entityType: 'strategic_objective',
        entityId: created.code,
        after: { workflowTypeCode: 'PMS_STRATEGY_SPINE_APPROVAL', reason: (err as Error).message },
      });
      await this.prisma.pillarObjectiveMap.delete({ where: { pillarCode_objectiveCode: { pillarCode: input.pillarCode, objectiveCode: created.code } } });
      await this.prisma.strategicObjective.delete({ where: { code: created.code } });
      throw err;
    }

    return this.prisma.strategicObjective.update({ where: { code: created.code }, data: { workflowInstanceId: instance.id } });
  }

  async approveObjective(input: ApproveObjectiveInput) {
    if (!input.boardResolutionRef) {
      throw new StrategyLayerError('A boardResolutionRef is required to approve a strategic objective (invariant 51c2, mirrors 28c).');
    }
    const updated = await this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
    if (updated.status !== 'APPROVED') return null;

    const objective = await this.prisma.strategicObjective.findFirstOrThrow({ where: { workflowInstanceId: input.workflowInstanceId } });
    const activated = await this.prisma.strategicObjective.update({
      where: { code: objective.code },
      data: { status: 'ACTIVE', boardResolutionRef: input.boardResolutionRef, approvedByUserId: input.approverUserId },
    });

    await this.audit.record({
      actorUserId: input.approverUserId,
      action: 'UPDATE',
      entityType: 'strategic_objective',
      entityId: objective.code,
      after: { status: 'ACTIVE', boardResolutionRef: input.boardResolutionRef },
    });
    return activated;
  }

  async listPendingObjectives() {
    return this.prisma.strategicObjective.findMany({ where: { status: 'DRAFT', workflowInstanceId: { not: null } }, orderBy: { createdAt: 'asc' } });
  }

  // Invariant 51(c2): KRA<->objective mapping -- a genuine many-to-many
  // exercise after both sides already exist (unlike pillar<->objective,
  // folded into proposeObjective above). Direct capability-gated write, no
  // workflow -- pure config linkage carries none of the maker!=checker
  // language pillars/objectives/statements get, same reasoning
  // OrgStructureService applied to org-unit/position creation.
  async mapKraToObjective(input: MapKraToObjectiveInput) {
    await this.assertCapability(input.actorUserId, 'STRATEGY_LAYER', 'INITIATE', 'map a KRA to a strategic objective');
    const [kra, objective] = await Promise.all([
      this.prisma.enterpriseKra.findUnique({ where: { code: input.kraCode } }),
      this.prisma.strategicObjective.findUnique({ where: { code: input.objectiveCode } }),
    ]);
    if (!kra) throw new StrategyLayerError(`KRA ${input.kraCode} does not exist.`);
    if (!objective) throw new StrategyLayerError(`Objective ${input.objectiveCode} does not exist.`);

    const created = await this.prisma.kraObjectiveMap.create({ data: { kraCode: input.kraCode, objectiveCode: input.objectiveCode } });
    await this.audit.record({
      actorUserId: input.actorUserId,
      action: 'CREATE',
      entityType: 'kra_objective_map',
      entityId: `${input.kraCode}:${input.objectiveCode}`,
      after: { kraCode: input.kraCode, objectiveCode: input.objectiveCode },
    });
    return created;
  }

  async unmapKraFromObjective(kraCode: string, objectiveCode: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'STRATEGY_LAYER', 'INITIATE', 'remove a KRA<->objective mapping');
    await this.prisma.kraObjectiveMap.delete({ where: { kraCode_objectiveCode: { kraCode, objectiveCode } } });
    await this.audit.record({
      actorUserId,
      action: 'DELETE',
      entityType: 'kra_objective_map',
      entityId: `${kraCode}:${objectiveCode}`,
      after: { removed: true },
    });
  }

  async listKraObjectiveMap() {
    return this.prisma.kraObjectiveMap.findMany({ include: { kra: true, objective: true } });
  }

  // "PUBLISH-to-staff with read-acknowledgment tracking."
  async publish(input: PublishStrategyInput) {
    await this.assertCapability(input.publishedByUserId, 'STRATEGY_LAYER', 'INITIATE', 'publish the strategy layer to staff');
    const created = await this.prisma.strategyPublication.create({
      data: { summary: input.summary, publishedByUserId: input.publishedByUserId },
    });
    await this.audit.record({
      actorUserId: input.publishedByUserId,
      action: 'CREATE',
      entityType: 'strategy_publication',
      entityId: created.id,
      after: { summary: input.summary },
    });
    return created;
  }

  // Any authenticated staff member acknowledges for themselves — no
  // capability gate beyond a valid session; this is a personal read
  // receipt, not a governance action.
  async acknowledge(publicationId: string, appUserId: string) {
    return this.prisma.strategyAcknowledgment.upsert({
      where: { publicationId_appUserId: { publicationId, appUserId } },
      create: { publicationId, appUserId },
      update: {},
    });
  }

  // SAU's KRA: tracking who has (not) acknowledged the latest publication.
  async getAcknowledgmentStatus() {
    const latest = await this.prisma.strategyPublication.findFirst({
      orderBy: { publishedAt: 'desc' },
      include: { acknowledgments: { include: { appUser: true } } },
    });
    if (!latest) return null;
    const allUsers = await this.prisma.appUser.findMany({ where: { status: 'ACTIVE' } });
    const acknowledgedIds = new Set(latest.acknowledgments.map((a) => a.appUserId));
    return {
      publicationId: latest.id,
      summary: latest.summary,
      publishedAt: latest.publishedAt,
      acknowledgedCount: latest.acknowledgments.length,
      totalStaff: allUsers.length,
      outstanding: allUsers.filter((u) => !acknowledgedIds.has(u.id)).map((u) => ({ id: u.id, displayName: u.displayName })),
    };
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({
        actorUserId: userId,
        action: 'PERMISSION_DENIED',
        entityType: 'strategy_layer_activity',
        entityId: activity,
        after: { functionCode, level },
      });
      throw new StrategyLayerError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}
