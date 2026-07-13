import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { NotificationService } from '../notification/notification.service';
import { TaskService } from '../task/task.service';
import { CreateRepaymentObligationInput, CounterpartyLifecycleError } from './counterparty.types';

// Invariant 25(4) + invariant 36 (Check-6F/6G): "Counterparty payment
// reminders (Portfolio Officers). Implements .../Process Flow for Payment
// Reminders on Investee Transactions.md as workflow + notification config."
// Superseded scope decision from the original Check-6F pass: invariant
// 36(a) now names REAL Task rows assigned to the FILE-MANAGING OFFICER
// (Counterparty.fileManagingOfficerUserId — "file-ownership as data") for
// the PHONE-CALL rungs (T-3, T+3), via TaskService.systemAssignTask() — the
// one deliberate, documented exception to assignTask()'s reports_to rule,
// since the "assigner" here is a scheduled job, not a person, so there is
// no managerial relationship to violate. Falls back to a PORT_MGR
// role-broadcast notification ONLY when a counterparty has no
// fileManagingOfficerUserId on file yet (documented, not silent).
@Injectable()
export class PaymentReminderService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly notification: NotificationService,
    private readonly task: TaskService,
  ) {}

  async createObligation(input: CreateRepaymentObligationInput) {
    await this.assertCapability(input.createdByUserId, 'COUNTERPARTY_ONBOARDING', 'INITIATE', 'record a counterparty repayment obligation');
    const obligation = await this.prisma.counterpartyRepaymentObligation.create({
      data: {
        counterpartyId: input.counterpartyId,
        facilityApplicationId: input.facilityApplicationId,
        dueDate: input.dueDate,
        amountKobo: input.amountKobo,
        createdByUserId: input.createdByUserId,
      },
    });
    await this.audit.record({ actorUserId: input.createdByUserId, action: 'CREATE', entityType: 'counterparty_repayment_obligation', entityId: obligation.id, after: { dueDate: input.dueDate.toISOString(), amountKobo: input.amountKobo.toString() } });
    return this.serializeObligation(obligation);
  }

  async markPaid(obligationId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'COUNTERPARTY_ONBOARDING', 'INITIATE', 'mark a counterparty repayment obligation paid');
    const obligation = await this.prisma.counterpartyRepaymentObligation.findUniqueOrThrow({ where: { id: obligationId } });
    if (obligation.status === 'PAID') throw new CounterpartyLifecycleError(`Obligation ${obligationId} is already PAID.`);
    const updated = await this.prisma.counterpartyRepaymentObligation.update({ where: { id: obligationId }, data: { status: 'PAID', paidAt: new Date(), paidByUserId: actorUserId } });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'counterparty_repayment_obligation', entityId: obligationId, after: { status: 'PAID' } });
    return this.serializeObligation(updated);
  }

  async listObligations(counterpartyId: string) {
    const rows = await this.prisma.counterpartyRepaymentObligation.findMany({ where: { counterpartyId }, orderBy: { dueDate: 'desc' } });
    return rows.map((r) => this.serializeObligation(r));
  }

  async listPendingObligations() {
    const rows = await this.prisma.counterpartyRepaymentObligation.findMany({
      where: { status: 'PENDING' },
      orderBy: { dueDate: 'asc' },
      include: { counterparty: { select: { legalName: true } } },
    });
    return rows.map((r) => this.serializeObligation(r));
  }

  private serializeObligation<T extends { amountKobo: bigint }>(o: T) {
    return { ...o, amountKobo: o.amountKobo.toString() };
  }

  // ==========================================================================
  // The ladder sweep (invariant 25(4)/36, Check-6F/6G). For every PENDING
  // obligation, checks whether TODAY matches a config row relative to its
  // dueDate; GENERATES (never sends) the client-facing message channels
  // into the officer-validation dispatch queue (invariant 36(a)); fires
  // PHONE-CALL tasks, internal management notices, and the post-grace
  // default transition immediately (none of those carry client-facing
  // dispatch risk, so none need officer gatekeeping). The dispatch
  // queue's unique (obligation, dayOffset) guards the message-channel
  // side against a double-generate; call-tasks/notices are similarly
  // guarded per rung via a dedicated marker (see generateOrFireRung).
  // ==========================================================================
  async runReminderSweep(now: Date, systemUserId: string): Promise<{ obligationsChecked: number; noticesGenerated: number; defaulted: number }> {
    const ladder = await this.prisma.paymentReminderLadderConfig.findMany({ where: { isActive: true } });
    const obligations = await this.prisma.counterpartyRepaymentObligation.findMany({
      where: { status: { in: ['PENDING'] } },
      include: { counterparty: { select: { legalName: true, fileManagingOfficerUserId: true } } },
    });

    let noticesGenerated = 0;
    let defaulted = 0;
    const todayUtc = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
    for (const obligation of obligations) {
      const dueUtc = new Date(Date.UTC(obligation.dueDate.getUTCFullYear(), obligation.dueDate.getUTCMonth(), obligation.dueDate.getUTCDate()));
      const dayOffset = Math.round((todayUtc.getTime() - dueUtc.getTime()) / (24 * 60 * 60 * 1000));
      const rung = ladder.find((r) => r.dayOffset === dayOffset);
      if (!rung) continue;

      const fired = await this.generateOrFireRung(obligation, rung, systemUserId);
      if (fired) noticesGenerated++;
      if (rung.isPostGraceDefault && fired) defaulted++;
    }
    return { obligationsChecked: obligations.length, noticesGenerated, defaulted };
  }

  private async generateOrFireRung(
    obligation: { id: string; counterpartyId: string; amountKobo: bigint; dueDate: Date; counterparty: { legalName: string; fileManagingOfficerUserId: string | null } },
    rung: { dayOffset: number; channels: unknown; notifyManagement: boolean; createsFollowUpCallTask: boolean; isPostGraceDefault: boolean },
    systemUserId: string,
  ): Promise<boolean> {
    const channels = (rung.channels as string[]) ?? [];
    const summary = `Payment reminder (day ${rung.dayOffset >= 0 ? `+${rung.dayOffset}` : rung.dayOffset} relative to due date ${obligation.dueDate.toISOString().slice(0, 10)}) via ${channels.join('/')} for ₦${(Number(obligation.amountKobo) / 100).toLocaleString()}.`;

    // Idempotency across the whole rung (message-channel generation, call
    // task, management notice, post-grace default) is keyed off the SAME
    // dispatch-queue row when channels exist; when a rung has NO client-
    // facing channels at all (none configured in this ladder today, but
    // schema-legal), fall back to the notice-log table as the guard so a
    // channel-less rung can still fire its call-task/notify exactly once.
    let alreadyProcessed = false;
    if (channels.length > 0) {
      const existing = await this.prisma.paymentReminderDispatchQueue.findUnique({
        where: { obligationId_dayOffset: { obligationId: obligation.id, dayOffset: rung.dayOffset } },
      });
      alreadyProcessed = !!existing;
      if (!alreadyProcessed) {
        await this.prisma.paymentReminderDispatchQueue.create({
          data: { obligationId: obligation.id, dayOffset: rung.dayOffset, channels },
        });
      }
    } else {
      const existing = await this.prisma.paymentReminderNoticeLog.findUnique({
        where: { obligationId_dayOffset: { obligationId: obligation.id, dayOffset: rung.dayOffset } },
      });
      alreadyProcessed = !!existing;
    }
    if (alreadyProcessed) return false;

    if (rung.createsFollowUpCallTask) {
      await this.assignCallTask(obligation, rung, summary, systemUserId);
    }
    if (rung.notifyManagement) {
      for (const recipientUserId of await this.roleHolderUserIds('PORT_MGR')) {
        await this.notification.create({ recipientUserId, type: 'GENERIC', title: 'Payment default — Management notice', body: `${obligation.counterparty.legalName} — ${summary}`, linkPath: '/counterparty-onboarding' });
      }
    }
    if (rung.isPostGraceDefault) {
      await this.prisma.counterpartyRepaymentObligation.update({ where: { id: obligation.id }, data: { status: 'DEFAULTED' } });
      const hrAndCompliance = new Set([...(await this.roleHolderUserIds('HR_ADMIN')), ...(await this.roleHolderUserIds('COMPLIANCE'))]);
      for (const recipientUserId of hrAndCompliance) {
        await this.notification.create({ recipientUserId, type: 'GENERIC', title: 'Counterparty payment DEFAULTED', body: `${obligation.counterparty.legalName} — obligation of ₦${(Number(obligation.amountKobo) / 100).toLocaleString()} passed the grace period without payment.`, linkPath: '/counterparty-onboarding' });
      }
      await this.audit.record({ action: 'UPDATE', entityType: 'counterparty_repayment_obligation', entityId: obligation.id, after: { status: 'DEFAULTED' } });
      // Bureau task generator #2 (invariant 36(c)): "post-grace default-
      // update tasks... generate as officer tasks" — updating the credit
      // rating platform with the default status is the file-managing
      // officer's deliverable, not an automatic bureau API call (the
      // BureauGateway itself is officer-BUTTON-triggered only, invariant
      // 36(c) — no auto-pull/auto-push anywhere in this pipeline).
      await this.assignBureauTask(
        obligation.counterparty.fileManagingOfficerUserId,
        `Update credit rating platform: ${obligation.counterparty.legalName} DEFAULTED`,
        `Obligation of ₦${(Number(obligation.amountKobo) / 100).toLocaleString()} (due ${obligation.dueDate.toISOString().slice(0, 10)}) passed the grace period without payment. Update the credit rating platform with the default status per the payment-reminders process doc §9.`,
        systemUserId,
      );
    }
    return true;
  }

  // Invariant 36(a): PHONE-CALL rungs (T-3, T+3) are REAL tasks assigned to
  // the file-managing officer — "the officer who processed/manages that
  // investee's application — file-ownership as data" — appearing in their
  // profile hub "with a HYPERLINK to the investee file/obligation."
  private async assignCallTask(
    obligation: { id: string; counterpartyId: string; dueDate: Date; counterparty: { legalName: string; fileManagingOfficerUserId: string | null } },
    rung: { dayOffset: number },
    summary: string,
    systemUserId: string,
  ) {
    const title = `Payment reminder call to ${obligation.counterparty.legalName}`;
    const description = `${summary} Obligation: ${obligation.id}.`;
    if (obligation.counterparty.fileManagingOfficerUserId) {
      const officerEmployee = await this.prisma.employee.findFirst({ where: { appUserId: obligation.counterparty.fileManagingOfficerUserId } });
      if (officerEmployee) {
        await this.task.systemAssignTask({
          title,
          description,
          assigneeEmployeeId: officerEmployee.id,
          assignedByUserId: systemUserId,
          linkPath: '/counterparty-onboarding',
        });
        return;
      }
    }
    // Documented fallback (not silent): no file-managing officer on file
    // for this counterparty yet — role-broadcast, same as the original
    // Check-6F scope decision, rather than fabricating an assignee.
    for (const recipientUserId of await this.roleHolderUserIds('PORT_MGR')) {
      await this.notification.create({ recipientUserId, type: 'GENERIC', title: 'Follow-up call required (no file-managing officer on file)', body: `${obligation.counterparty.legalName} — ${summary}`, linkPath: '/counterparty-onboarding' });
    }
  }

  private async assignBureauTask(fileManagingOfficerUserId: string | null, title: string, description: string, systemUserId: string) {
    if (fileManagingOfficerUserId) {
      const officerEmployee = await this.prisma.employee.findFirst({ where: { appUserId: fileManagingOfficerUserId } });
      if (officerEmployee) {
        await this.task.systemAssignTask({ title, description, assigneeEmployeeId: officerEmployee.id, assignedByUserId: systemUserId, linkPath: '/counterparty-onboarding' });
        return;
      }
    }
    for (const recipientUserId of await this.roleHolderUserIds('PORT_MGR')) {
      await this.notification.create({ recipientUserId, type: 'GENERIC', title: `${title} (no file-managing officer on file)`, body: description, linkPath: '/counterparty-onboarding' });
    }
  }

  // Bureau task generator #1 (invariant 36(c)): "monthly data-sync... tasks
  // per inv 25/6F still generate as officer tasks" — the process doc's own
  // Step 4 ("update any change in the Data... at least on a monthly
  // basis"). One task per COMPLETE_APPROVED counterparty per calendar
  // month, deduplicated by title+month (idempotent re-run within the
  // same month).
  async runCreditBureauMonthlySync(now: Date, systemUserId: string): Promise<{ counterpartiesChecked: number; tasksCreated: number }> {
    const counterparties = await this.prisma.counterparty.findMany({
      where: { onboardingStatus: 'COMPLETE_APPROVED' },
      select: { id: true, legalName: true, fileManagingOfficerUserId: true },
    });
    const monthLabel = `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, '0')}`;
    let tasksCreated = 0;
    for (const cp of counterparties) {
      const title = `Monthly credit-bureau data sync: ${cp.legalName} (${monthLabel})`;
      if (cp.fileManagingOfficerUserId) {
        const officerEmployee = await this.prisma.employee.findFirst({ where: { appUserId: cp.fileManagingOfficerUserId } });
        if (officerEmployee) {
          const existing = await this.prisma.task.findFirst({ where: { title, assigneeEmployeeId: officerEmployee.id } });
          if (existing) continue;
          await this.task.systemAssignTask({
            title,
            description: `Update all changed loan/facility data for ${cp.legalName} on the credit bureau platform this month, per the payment-reminders process doc §3-4.`,
            assigneeEmployeeId: officerEmployee.id,
            assignedByUserId: systemUserId,
            linkPath: '/counterparty-onboarding',
          });
          tasksCreated++;
          continue;
        }
      }
      // No file-managing officer on file — same documented fallback as
      // the call-task/bureau-default-update paths above.
      const alreadyNotified = await this.prisma.notification.findFirst({ where: { title: `${title} (no file-managing officer on file)` } });
      if (!alreadyNotified) {
        for (const recipientUserId of await this.roleHolderUserIds('PORT_MGR')) {
          await this.notification.create({ recipientUserId, type: 'GENERIC', title: `${title} (no file-managing officer on file)`, body: `Assign a file-managing officer to ${cp.legalName} so monthly bureau sync tasks route correctly.`, linkPath: '/counterparty-onboarding' });
        }
        tasksCreated++;
      }
    }
    return { counterpartiesChecked: counterparties.length, tasksCreated };
  }

  // ==========================================================================
  // Officer-validation dispatch queue (invariant 36(a)). The sweep only
  // GENERATES what it would send; nothing client-facing goes out — no
  // ClientCommunication row, no PaymentReminderNoticeLog row — until an
  // officer approves it here.
  // ==========================================================================
  async listPendingDispatchQueue() {
    const rows = await this.prisma.paymentReminderDispatchQueue.findMany({
      where: { status: 'PENDING_VALIDATION' },
      orderBy: { generatedAt: 'asc' },
      include: { obligation: { include: { counterparty: { select: { legalName: true } } } } },
    });
    return rows.map((r) => ({ ...r, obligation: { ...r.obligation, amountKobo: r.obligation.amountKobo.toString() } }));
  }

  async approveDispatch(queueItemId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'PAYMENT_REMINDER_DISPATCH', 'APPROVE', 'approve a payment-reminder message for dispatch');
    const item = await this.prisma.paymentReminderDispatchQueue.findUniqueOrThrow({
      where: { id: queueItemId },
      include: { obligation: { include: { counterparty: { select: { legalName: true } } } } },
    });
    if (item.status !== 'PENDING_VALIDATION') {
      throw new CounterpartyLifecycleError(`Dispatch queue item ${queueItemId} is already ${item.status} — cannot decide it again.`);
    }
    const channels = (item.channels as string[]) ?? [];
    const summary = `Payment reminder (day ${item.dayOffset >= 0 ? `+${item.dayOffset}` : item.dayOffset} relative to due date ${item.obligation.dueDate.toISOString().slice(0, 10)}) via ${channels.join('/')} for ₦${(Number(item.obligation.amountKobo) / 100).toLocaleString()}.`;
    // "Every notice auto-logged to client_communication" — invariant
    // 25(4)'s own explicit requirement — now written at DISPATCH time,
    // not generation time.
    const communication = await this.prisma.clientCommunication.create({
      data: {
        counterpartyId: item.obligation.counterpartyId,
        channel: channels.join('/') || 'SYSTEM',
        direction: 'OUTBOUND',
        subject: 'Payment reminder',
        summary,
        routedToFunctionCode: 'PORTFOLIO_MGMT',
        occurredAt: new Date(),
      },
    });
    await this.prisma.paymentReminderNoticeLog.create({
      data: { obligationId: item.obligationId, dayOffset: item.dayOffset, clientCommunicationId: communication.id },
    });
    const updated = await this.prisma.paymentReminderDispatchQueue.update({
      where: { id: queueItemId },
      data: { status: 'DISPATCHED', decidedByUserId: actorUserId, decidedAt: new Date() },
    });
    await this.audit.record({ actorUserId, action: 'APPROVE', entityType: 'payment_reminder_dispatch_queue', entityId: queueItemId, after: { status: 'DISPATCHED' } });
    return updated;
  }

  async rejectDispatch(queueItemId: string, actorUserId: string, reason?: string) {
    await this.assertCapability(actorUserId, 'PAYMENT_REMINDER_DISPATCH', 'APPROVE', 'reject a payment-reminder message from dispatch');
    const item = await this.prisma.paymentReminderDispatchQueue.findUniqueOrThrow({ where: { id: queueItemId } });
    if (item.status !== 'PENDING_VALIDATION') {
      throw new CounterpartyLifecycleError(`Dispatch queue item ${queueItemId} is already ${item.status} — cannot decide it again.`);
    }
    const updated = await this.prisma.paymentReminderDispatchQueue.update({
      where: { id: queueItemId },
      data: { status: 'REJECTED', decidedByUserId: actorUserId, decidedAt: new Date() },
    });
    await this.audit.record({ actorUserId, action: 'REJECT', entityType: 'payment_reminder_dispatch_queue', entityId: queueItemId, after: { status: 'REJECTED', reason } });
    return updated;
  }

  // ==========================================================================
  // Ladder settings (invariant 36(b)): "all rung offsets, channels, and
  // templates editable... AUTHORIZED LEVEL ONLY (capability + DoA; changes
  // versioned + audit-logged; effective next sweep)." The CURRENT row IS
  // the version (effective next sweep, per the requirement's own wording);
  // audit_trail (insert-only) carries the change HISTORY — see the schema
  // comment on PaymentReminderLadderConfig.updatedAt for why a bespoke
  // version table isn't warranted for a non-Board-gated settings screen.
  // ==========================================================================
  async listLadderConfig() {
    return this.prisma.paymentReminderLadderConfig.findMany({ orderBy: { dayOffset: 'asc' } });
  }

  async updateLadderRung(dayOffset: number, updates: { channels?: string[]; notifyManagement?: boolean; createsFollowUpCallTask?: boolean; isActive?: boolean }, actorUserId: string) {
    await this.assertCapability(actorUserId, 'PAYMENT_REMINDER_LADDER_SETTINGS', 'INITIATE', 'edit the payment-reminder ladder settings');
    const before = await this.prisma.paymentReminderLadderConfig.findUniqueOrThrow({ where: { dayOffset } });
    const updated = await this.prisma.paymentReminderLadderConfig.update({
      where: { dayOffset },
      data: updates,
    });
    await this.audit.record({
      actorUserId,
      action: 'UPDATE',
      entityType: 'payment_reminder_ladder_config',
      entityId: updated.id,
      before: { channels: before.channels, notifyManagement: before.notifyManagement, createsFollowUpCallTask: before.createsFollowUpCallTask, isActive: before.isActive },
      after: { channels: updated.channels, notifyManagement: updated.notifyManagement, createsFollowUpCallTask: updated.createsFollowUpCallTask, isActive: updated.isActive },
    });
    return updated;
  }

  private async roleHolderUserIds(roleCode: string): Promise<string[]> {
    const holders = await this.prisma.userRole.findMany({ where: { roleCode }, select: { userId: true } });
    return holders.map((h) => h.userId);
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'payment_reminder_activity', entityId: activity, after: { functionCode, level } });
      throw new CounterpartyLifecycleError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}
