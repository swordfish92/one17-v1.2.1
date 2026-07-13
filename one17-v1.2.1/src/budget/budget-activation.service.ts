import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { BudgetExtractionError } from './budget.types';

// Phase4 Directive §3 (invariant 20): "budget core ACTIVATES with Phase 4."
// BOARD_APPROVED already represents Board sign-off (task 47's extraction);
// this is the separate, deliberate "go live" step — AMD-12's deployment !=
// activation gate, made real: F-BZ-01/04/05 and the expenditure-encumbrance
// budget check both read status==='ACTIVE' exclusively, never
// BOARD_APPROVED, so nothing live-reports off a version that hasn't been
// through this workflow.
@Injectable()
export class BudgetActivationService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
  ) {}

  async requestActivation(budgetVersionId: string, boardResolutionRef: string, requestedByUserId: string) {
    await this.assertCapability(requestedByUserId, 'BUDGET_MANAGEMENT', 'INITIATE', 'request budget activation');
    if (!boardResolutionRef?.trim()) {
      throw new BudgetExtractionError('boardResolutionRef is required to request activation (AMD-12 named-missing-parameter refusal) — Budget Spec §5a: "Board resolution ref + attachment mandatory."');
    }
    const version = await this.prisma.budgetVersion.findUniqueOrThrow({ where: { id: budgetVersionId } });
    if (version.status !== 'BOARD_APPROVED') {
      throw new BudgetExtractionError(`Budget version ${budgetVersionId} is ${version.status}, not BOARD_APPROVED — cannot request activation.`);
    }
    const alreadyActive = await this.prisma.budgetVersion.findFirst({ where: { fiscalYear: version.fiscalYear, status: 'ACTIVE' } });
    if (alreadyActive) {
      throw new BudgetExtractionError(`Fiscal year ${version.fiscalYear} already has an ACTIVE budget version (${alreadyActive.id}) — no second concurrent ACTIVE version.`);
    }

    await this.prisma.budgetVersion.update({ where: { id: budgetVersionId }, data: { boardResolutionRef } });
    const workflowInstance = await this.workflow.initiate({
      workflowTypeCode: 'BUDGET_ACTIVATION',
      entityType: 'budget_version',
      entityId: budgetVersionId,
      initiatedByUserId: requestedByUserId,
      scenario: 'STANDARD',
    });
    await this.prisma.budgetVersion.update({ where: { id: budgetVersionId }, data: { workflowInstanceId: workflowInstance.id } });
    return workflowInstance;
  }

  async approveActivation(workflowInstanceId: string, approverUserId: string) {
    const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
    if (updated.status === 'APPROVED') {
      const activated = await this.prisma.budgetVersion.update({
        where: { id: updated.entityId },
        data: { status: 'ACTIVE', approvedByUserId: approverUserId },
      });
      await this.audit.record({
        actorUserId: approverUserId,
        action: 'UPDATE',
        entityType: 'budget_version',
        entityId: activated.id,
        after: { status: 'ACTIVE' },
      });
    }
    return updated;
  }

  // Budget Spec §3: "encumber at requisition; system budget check -> SAU
  // Internal Control review -> CEO approval per DoA." The BUDGET CHECK
  // itself is a service-level gate (not a workflow step) — it must block
  // BEFORE any human review even starts, matching "system budget check"
  // being the FIRST word in the sequence.
  async requestEncumbrance(budgetLineId: string, amountKobo: bigint, description: string, requestedByUserId: string) {
    await this.assertCapability(requestedByUserId, 'BUDGET_MANAGEMENT', 'INITIATE', 'request an expenditure encumbrance');
    const line = await this.prisma.budgetLine.findUniqueOrThrow({
      where: { id: budgetLineId },
      include: { budgetVersion: true, monthlyAmounts: true, encumbrances: { where: { status: 'OPEN' } } },
    });
    if (line.budgetVersion.status !== 'ACTIVE') {
      throw new BudgetExtractionError('NO APPROVED BUDGET — expenditure control suspended (budget version is not ACTIVE).');
    }
    const fyBudgetKobo = line.monthlyAmounts.reduce((s, m) => s + m.amountKobo, 0n);
    const alreadyEncumberedKobo = line.encumbrances.reduce((s, e) => s + e.amountKobo, 0n);
    const availableKobo = fyBudgetKobo - alreadyEncumberedKobo;
    if (amountKobo > availableKobo) {
      throw new BudgetExtractionError(`System budget check failed: requesting ${amountKobo} kobo against ${availableKobo} kobo available on line "${line.lineDescription}" (FY budget ${fyBudgetKobo}, already encumbered ${alreadyEncumberedKobo}).`);
    }

    const encumbrance = await this.prisma.encumbrance.create({
      data: { budgetLineId, amountKobo, description, requestedByUserId, status: 'OPEN' },
    });
    // Invariant 49(a) (CHECK11, atomicity sweep): the highest-severity
    // instance found in this sweep, not just workflow housekeeping --
    // Encumbrance has no workflowInstanceId field at all (approval is
    // found purely via WorkflowInstance{entityType:'encumbrance',
    // entityId} lookup), so a dangling OPEN row from a failed initiate()
    // would permanently eat real budget headroom: requestEncumbrance's own
    // system-budget-check above sums ALL status:'OPEN' encumbrances
    // against availableKobo, with no way to find and release an orphan
    // through the normal flow. Compensating delete, not a $transaction --
    // see PmsService.submitSelfScore's comment for why one can't span
    // into workflow.initiate() across service boundaries here.
    let workflowInstance;
    try {
      workflowInstance = await this.workflow.initiate({
        workflowTypeCode: 'EXPENDITURE_REQUISITION',
        entityType: 'encumbrance',
        entityId: encumbrance.id,
        initiatedByUserId: requestedByUserId,
        amountKobo,
      });
    } catch (err) {
      // Invariant 49(b2) (CHECK11 advisor ruling): see PmsService.
      // submitSelfScore's matching comment -- capability failures already
      // audit-log inside WorkflowEngineService itself; this covers every
      // other failure cause so the attempt+compensation isn't invisible.
      await this.audit.record({
        actorUserId: requestedByUserId,
        action: 'INITIATE_FAILED_COMPENSATED',
        entityType: 'encumbrance',
        entityId: encumbrance.id,
        after: { workflowTypeCode: 'EXPENDITURE_REQUISITION', reason: (err as Error).message },
      });
      await this.prisma.encumbrance.delete({ where: { id: encumbrance.id } });
      throw err;
    }
    await this.audit.record({
      actorUserId: requestedByUserId,
      action: 'CREATE',
      entityType: 'encumbrance',
      entityId: encumbrance.id,
      after: { budgetLineId, amountKobo: amountKobo.toString(), workflowInstanceId: workflowInstance.id },
    });
    return { encumbrance, workflowInstance };
  }

  async releaseEncumbrance(encumbranceId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'BUDGET_MANAGEMENT', 'INITIATE', 'release an encumbrance');
    const current = await this.prisma.encumbrance.findUniqueOrThrow({ where: { id: encumbranceId } });
    if (current.status !== 'OPEN') {
      throw new BudgetExtractionError(`Encumbrance ${encumbranceId} is ${current.status}, not OPEN — cannot release.`);
    }
    const encumbrance = await this.prisma.encumbrance.update({ where: { id: encumbranceId }, data: { status: 'RELEASED' } });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'encumbrance', entityId: encumbranceId, after: { status: 'RELEASED' } });
    return encumbrance;
  }

  // Invariant 49(c)/(g)(ii) (CHECK11): requestEncumbrance/releaseEncumbrance
  // have existed since Phase 4 (F-BZ-01/04/05) with zero controller/ops-ui
  // wiring -- ProcurementPage.tsx's own comment already flagged the gap
  // ("the encumbrance ID is pasted in here rather than picked from a new
  // list widget ... building the requisition-picker UI is Budget Spec §3's
  // own screen, not this module's scope"). This is that screen's read side.
  // Encumbrance has no workflowInstanceId column (see requestEncumbrance's
  // own comment on why -- approval is found purely via WorkflowInstance
  // {entityType:'encumbrance', entityId} lookup), so the workflow status
  // per row is resolved with a second query rather than a Prisma include.
  async listEncumbrances(actorUserId: string, filter?: { budgetLineId?: string; status?: 'OPEN' | 'RELEASED' | 'CONVERTED' }) {
    await this.assertCapability(actorUserId, 'BUDGET_MANAGEMENT', 'VIEW', 'view the encumbrance/requisition register');
    const encumbrances = await this.prisma.encumbrance.findMany({
      where: { budgetLineId: filter?.budgetLineId, status: filter?.status },
      include: {
        budgetLine: { select: { lineDescription: true, budgetLineGroup: true, ledgerEntityCode: true } },
        requestedBy: { select: { displayName: true, email: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
    const workflowInstances = await this.prisma.workflowInstance.findMany({
      where: { entityType: 'encumbrance', entityId: { in: encumbrances.map((e) => e.id) } },
      select: { id: true, entityId: true, status: true },
    });
    const workflowByEncumbranceId = new Map(workflowInstances.map((w) => [w.entityId, w]));
    return encumbrances.map((e) => ({ ...e, workflowInstance: workflowByEncumbranceId.get(e.id) ?? null }));
  }

  // The picker's data source: budget lines on the currently-ACTIVE version
  // only, matching requestEncumbrance's own ACTIVE-version gate above --
  // never lets staff pick a line that would immediately fail the request.
  async listActiveBudgetLinesForEncumbrance(actorUserId: string) {
    await this.assertCapability(actorUserId, 'BUDGET_MANAGEMENT', 'VIEW', 'view budget lines eligible for an expenditure requisition');
    return this.prisma.budgetLine.findMany({
      where: { budgetVersion: { status: 'ACTIVE' }, isActive: true },
      select: { id: true, lineDescription: true, budgetLineGroup: true, ledgerEntityCode: true },
      orderBy: { lineDescription: 'asc' },
    });
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'budget_activation_activity', entityId: activity, after: { functionCode, level } });
      throw new BudgetExtractionError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}
