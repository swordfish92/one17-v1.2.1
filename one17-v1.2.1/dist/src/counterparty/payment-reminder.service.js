"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentReminderService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const notification_service_1 = require("../notification/notification.service");
const task_service_1 = require("../task/task.service");
const counterparty_types_1 = require("./counterparty.types");
let PaymentReminderService = class PaymentReminderService {
    prisma;
    audit;
    delegation;
    notification;
    task;
    constructor(prisma, audit, delegation, notification, task) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
        this.notification = notification;
        this.task = task;
    }
    async createObligation(input) {
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
    async markPaid(obligationId, actorUserId) {
        await this.assertCapability(actorUserId, 'COUNTERPARTY_ONBOARDING', 'INITIATE', 'mark a counterparty repayment obligation paid');
        const obligation = await this.prisma.counterpartyRepaymentObligation.findUniqueOrThrow({ where: { id: obligationId } });
        if (obligation.status === 'PAID')
            throw new counterparty_types_1.CounterpartyLifecycleError(`Obligation ${obligationId} is already PAID.`);
        const updated = await this.prisma.counterpartyRepaymentObligation.update({ where: { id: obligationId }, data: { status: 'PAID', paidAt: new Date(), paidByUserId: actorUserId } });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'counterparty_repayment_obligation', entityId: obligationId, after: { status: 'PAID' } });
        return this.serializeObligation(updated);
    }
    async listObligations(counterpartyId) {
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
    serializeObligation(o) {
        return { ...o, amountKobo: o.amountKobo.toString() };
    }
    async runReminderSweep(now, systemUserId) {
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
            if (!rung)
                continue;
            const fired = await this.generateOrFireRung(obligation, rung, systemUserId);
            if (fired)
                noticesGenerated++;
            if (rung.isPostGraceDefault && fired)
                defaulted++;
        }
        return { obligationsChecked: obligations.length, noticesGenerated, defaulted };
    }
    async generateOrFireRung(obligation, rung, systemUserId) {
        const channels = rung.channels ?? [];
        const summary = `Payment reminder (day ${rung.dayOffset >= 0 ? `+${rung.dayOffset}` : rung.dayOffset} relative to due date ${obligation.dueDate.toISOString().slice(0, 10)}) via ${channels.join('/')} for ₦${(Number(obligation.amountKobo) / 100).toLocaleString()}.`;
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
        }
        else {
            const existing = await this.prisma.paymentReminderNoticeLog.findUnique({
                where: { obligationId_dayOffset: { obligationId: obligation.id, dayOffset: rung.dayOffset } },
            });
            alreadyProcessed = !!existing;
        }
        if (alreadyProcessed)
            return false;
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
            await this.assignBureauTask(obligation.counterparty.fileManagingOfficerUserId, `Update credit rating platform: ${obligation.counterparty.legalName} DEFAULTED`, `Obligation of ₦${(Number(obligation.amountKobo) / 100).toLocaleString()} (due ${obligation.dueDate.toISOString().slice(0, 10)}) passed the grace period without payment. Update the credit rating platform with the default status per the payment-reminders process doc §9.`, systemUserId);
        }
        return true;
    }
    async assignCallTask(obligation, rung, summary, systemUserId) {
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
        for (const recipientUserId of await this.roleHolderUserIds('PORT_MGR')) {
            await this.notification.create({ recipientUserId, type: 'GENERIC', title: 'Follow-up call required (no file-managing officer on file)', body: `${obligation.counterparty.legalName} — ${summary}`, linkPath: '/counterparty-onboarding' });
        }
    }
    async assignBureauTask(fileManagingOfficerUserId, title, description, systemUserId) {
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
    async runCreditBureauMonthlySync(now, systemUserId) {
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
                    if (existing)
                        continue;
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
    async listPendingDispatchQueue() {
        const rows = await this.prisma.paymentReminderDispatchQueue.findMany({
            where: { status: 'PENDING_VALIDATION' },
            orderBy: { generatedAt: 'asc' },
            include: { obligation: { include: { counterparty: { select: { legalName: true } } } } },
        });
        return rows.map((r) => ({ ...r, obligation: { ...r.obligation, amountKobo: r.obligation.amountKobo.toString() } }));
    }
    async approveDispatch(queueItemId, actorUserId) {
        await this.assertCapability(actorUserId, 'PAYMENT_REMINDER_DISPATCH', 'APPROVE', 'approve a payment-reminder message for dispatch');
        const item = await this.prisma.paymentReminderDispatchQueue.findUniqueOrThrow({
            where: { id: queueItemId },
            include: { obligation: { include: { counterparty: { select: { legalName: true } } } } },
        });
        if (item.status !== 'PENDING_VALIDATION') {
            throw new counterparty_types_1.CounterpartyLifecycleError(`Dispatch queue item ${queueItemId} is already ${item.status} — cannot decide it again.`);
        }
        const channels = item.channels ?? [];
        const summary = `Payment reminder (day ${item.dayOffset >= 0 ? `+${item.dayOffset}` : item.dayOffset} relative to due date ${item.obligation.dueDate.toISOString().slice(0, 10)}) via ${channels.join('/')} for ₦${(Number(item.obligation.amountKobo) / 100).toLocaleString()}.`;
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
    async rejectDispatch(queueItemId, actorUserId, reason) {
        await this.assertCapability(actorUserId, 'PAYMENT_REMINDER_DISPATCH', 'APPROVE', 'reject a payment-reminder message from dispatch');
        const item = await this.prisma.paymentReminderDispatchQueue.findUniqueOrThrow({ where: { id: queueItemId } });
        if (item.status !== 'PENDING_VALIDATION') {
            throw new counterparty_types_1.CounterpartyLifecycleError(`Dispatch queue item ${queueItemId} is already ${item.status} — cannot decide it again.`);
        }
        const updated = await this.prisma.paymentReminderDispatchQueue.update({
            where: { id: queueItemId },
            data: { status: 'REJECTED', decidedByUserId: actorUserId, decidedAt: new Date() },
        });
        await this.audit.record({ actorUserId, action: 'REJECT', entityType: 'payment_reminder_dispatch_queue', entityId: queueItemId, after: { status: 'REJECTED', reason } });
        return updated;
    }
    async listLadderConfig() {
        return this.prisma.paymentReminderLadderConfig.findMany({ orderBy: { dayOffset: 'asc' } });
    }
    async updateLadderRung(dayOffset, updates, actorUserId) {
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
    async roleHolderUserIds(roleCode) {
        const holders = await this.prisma.userRole.findMany({ where: { roleCode }, select: { userId: true } });
        return holders.map((h) => h.userId);
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'payment_reminder_activity', entityId: activity, after: { functionCode, level } });
            throw new counterparty_types_1.CounterpartyLifecycleError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.PaymentReminderService = PaymentReminderService;
exports.PaymentReminderService = PaymentReminderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        notification_service_1.NotificationService,
        task_service_1.TaskService])
], PaymentReminderService);
//# sourceMappingURL=payment-reminder.service.js.map