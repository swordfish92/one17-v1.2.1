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
exports.PeriodService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const bank_reconciliation_service_1 = require("./bank-reconciliation.service");
const period_types_1 = require("./period.types");
let PeriodService = class PeriodService {
    prisma;
    audit;
    delegation;
    workflow;
    bankReconciliation;
    constructor(prisma, audit, delegation, workflow, bankReconciliation) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
        this.workflow = workflow;
        this.bankReconciliation = bankReconciliation;
    }
    async openPeriod(input) {
        await this.assertCapability(input.openedByUserId, 'ACCOUNTING_PERIOD_CLOSE', 'INITIATE', 'open an accounting period');
        const created = await this.prisma.accountingPeriod.create({
            data: {
                ledgerEntityCode: input.ledgerEntityCode,
                periodStart: input.periodStart,
                periodEnd: input.periodEnd,
                openedByUserId: input.openedByUserId,
                status: 'OPEN',
            },
        });
        await this.audit.record({
            actorUserId: input.openedByUserId,
            action: 'CREATE',
            entityType: 'accounting_period',
            entityId: created.id,
            after: {
                ledgerEntityCode: input.ledgerEntityCode,
                periodStart: input.periodStart,
                periodEnd: input.periodEnd,
            },
        });
        return created;
    }
    async requestPeriodClose(input) {
        await this.assertCapability(input.initiatedByUserId, 'ACCOUNTING_PERIOD_CLOSE', 'INITIATE', 'request closing an accounting period');
        const period = await this.prisma.accountingPeriod.findUniqueOrThrow({
            where: { id: input.periodId },
        });
        if (period.status !== 'OPEN') {
            throw new period_types_1.PeriodLifecycleError(`Cannot close accounting period ${period.id}: status is ${period.status}, not OPEN.`);
        }
        const unmatchedCount = await this.bankReconciliation.countUnmatchedInWindow(period.ledgerEntityCode, period.periodStart, period.periodEnd);
        if (unmatchedCount > 0) {
            throw new period_types_1.PeriodLifecycleError(`Cannot request closing accounting period ${period.id}: ${unmatchedCount} bank statement line(s) dated within ${period.periodStart.toISOString().slice(0, 10)}..${period.periodEnd.toISOString().slice(0, 10)} are still UNMATCHED (invariant 51(b-ix) bank reconciliation gate).`);
        }
        const instance = await this.workflow.initiate({
            workflowTypeCode: 'ACCOUNTING_PERIOD_CLOSE',
            entityType: 'accounting_period',
            entityId: period.id,
            initiatedByUserId: input.initiatedByUserId,
            scenario: 'STANDARD',
        });
        await this.prisma.accountingPeriod.update({
            where: { id: period.id },
            data: { closeWorkflowInstanceId: instance.id },
        });
        await this.audit.record({
            actorUserId: input.initiatedByUserId,
            action: 'CREATE',
            entityType: 'accounting_period_close_request',
            entityId: period.id,
            after: { workflowInstanceId: instance.id },
        });
        return instance;
    }
    async approvePeriodClose(input) {
        const updated = await this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
        if (updated.status !== 'APPROVED')
            return null;
        const period = await this.prisma.accountingPeriod.findFirstOrThrow({
            where: { closeWorkflowInstanceId: input.workflowInstanceId },
        });
        const closed = await this.prisma.accountingPeriod.update({
            where: { id: period.id },
            data: {
                status: 'CLOSED',
                closedByUserId: input.approverUserId,
                closedAt: new Date(),
            },
        });
        await this.audit.record({
            actorUserId: input.approverUserId,
            action: 'UPDATE',
            entityType: 'accounting_period',
            entityId: closed.id,
            after: { status: 'CLOSED' },
        });
        return closed;
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({
                actorUserId: userId,
                action: 'PERMISSION_DENIED',
                entityType: 'period_activity',
                entityId: activity,
                after: { functionCode, level },
            });
            throw new period_types_1.PeriodLifecycleError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.PeriodService = PeriodService;
exports.PeriodService = PeriodService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService,
        bank_reconciliation_service_1.BankReconciliationService])
], PeriodService);
//# sourceMappingURL=period.service.js.map