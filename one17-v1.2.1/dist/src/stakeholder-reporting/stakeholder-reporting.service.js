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
exports.StakeholderReportingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const stakeholder_reporting_types_1 = require("./stakeholder-reporting.types");
let StakeholderReportingService = class StakeholderReportingService {
    prisma;
    audit;
    delegation;
    workflow;
    constructor(prisma, audit, delegation, workflow) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
        this.workflow = workflow;
    }
    async generateReport(input) {
        await this.assertCapability(input.generatedByUserId, 'STAKEHOLDER_REPORT_MANAGEMENT', 'INITIATE', 'generate a stakeholder report');
        const report = await this.prisma.stakeholderReportRun.create({
            data: {
                department: input.department,
                reportType: input.reportType,
                periodStart: input.periodStart,
                periodEnd: input.periodEnd,
                figures: input.figures,
                audienceClass: input.audienceClass,
                generatedByUserId: input.generatedByUserId,
            },
        });
        await this.audit.record({ actorUserId: input.generatedByUserId, action: 'CREATE', entityType: 'stakeholder_report_run', entityId: report.id, after: { department: report.department, reportType: report.reportType, audienceClass: report.audienceClass } });
        return report;
    }
    async attachAiDraftedNarrative(reportRunId, narrativeText, aiInteractionLogId, actorUserId) {
        const report = await this.prisma.stakeholderReportRun.findUniqueOrThrow({ where: { id: reportRunId } });
        if (report.status !== 'DRAFT') {
            throw new stakeholder_reporting_types_1.StakeholderReportingError(`Report ${reportRunId} is ${report.status}, not DRAFT — an AI-drafted narrative can only be attached before submission for approval.`);
        }
        const updated = await this.prisma.stakeholderReportRun.update({
            where: { id: reportRunId },
            data: { aiDraftedNarrative: narrativeText, aiInteractionLogId },
        });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'stakeholder_report_run', entityId: reportRunId, after: { aiDraftedNarrative: true, aiInteractionLogId } });
        return updated;
    }
    async submitForApproval(reportRunId, actorUserId) {
        const report = await this.prisma.stakeholderReportRun.findUniqueOrThrow({ where: { id: reportRunId } });
        if (report.status !== 'DRAFT') {
            throw new stakeholder_reporting_types_1.StakeholderReportingError(`Report ${reportRunId} is ${report.status}, not DRAFT — cannot resubmit.`);
        }
        const workflowInstance = await this.workflow.initiate({
            workflowTypeCode: 'STAKEHOLDER_REPORT_APPROVAL',
            entityType: 'stakeholder_report_run',
            entityId: reportRunId,
            scenario: 'STANDARD',
            initiatedByUserId: actorUserId,
        });
        await this.prisma.stakeholderReportRun.update({ where: { id: reportRunId }, data: { workflowInstanceId: workflowInstance.id } });
        return workflowInstance;
    }
    async approveReport(workflowInstanceId, approverUserId) {
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        if (updated.status !== 'APPROVED')
            return null;
        const report = await this.prisma.stakeholderReportRun.findFirstOrThrow({ where: { workflowInstanceId } });
        const approved = await this.prisma.stakeholderReportRun.update({ where: { id: report.id }, data: { status: 'APPROVED', approvedByUserId: approverUserId } });
        await this.audit.record({ actorUserId: approverUserId, action: 'APPROVE', entityType: 'stakeholder_report_run', entityId: report.id, after: { status: 'APPROVED' } });
        return approved;
    }
    async distribute(input) {
        const report = await this.prisma.stakeholderReportRun.findUniqueOrThrow({ where: { id: input.stakeholderReportRunId } });
        if (report.status === 'DRAFT') {
            throw new stakeholder_reporting_types_1.StakeholderReportingError(`Report ${input.stakeholderReportRunId} is DRAFT, not APPROVED — an unapproved report cannot be distributed (invariant 24).`);
        }
        if (input.audienceClass === 'CLIENT' || input.audienceClass === 'REGULATOR' || input.audienceClass === 'BOARD') {
            if (!input.signOffByUserId) {
                throw new stakeholder_reporting_types_1.StakeholderReportingError(`${input.audienceClass} audience distribution requires MD/delegated sign-off per DoA — no signOffByUserId supplied (invariant 24).`);
            }
            const { eligible } = await this.delegation.hasCapability(input.signOffByUserId, 'STAKEHOLDER_REPORT_DISTRIBUTION_SIGNOFF', 'APPROVE');
            if (!eligible) {
                throw new stakeholder_reporting_types_1.StakeholderReportingError(`Sign-off user lacks STAKEHOLDER_REPORT_DISTRIBUTION_SIGNOFF APPROVE authority (standing or delegated) — required for ${input.audienceClass} audience distribution (invariant 24).`);
            }
        }
        const log = await this.prisma.stakeholderDistributionLog.create({
            data: {
                stakeholderReportRunId: input.stakeholderReportRunId,
                audienceClass: input.audienceClass,
                distributedByUserId: input.distributedByUserId,
                signOffByUserId: input.signOffByUserId,
                recipientDescription: input.recipientDescription,
            },
        });
        await this.prisma.stakeholderReportRun.update({ where: { id: input.stakeholderReportRunId }, data: { status: 'DISTRIBUTED' } });
        await this.audit.record({ actorUserId: input.distributedByUserId, action: 'CREATE', entityType: 'stakeholder_distribution_log', entityId: log.id, after: { audienceClass: input.audienceClass, recipientDescription: input.recipientDescription, signOffByUserId: input.signOffByUserId } });
        return log;
    }
    async listReports() {
        return this.prisma.stakeholderReportRun.findMany({ orderBy: { createdAt: 'desc' } });
    }
    async getReport(reportRunId) {
        return this.prisma.stakeholderReportRun.findUniqueOrThrow({ where: { id: reportRunId } });
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'stakeholder_reporting_activity', entityId: activity, after: { functionCode, level } });
            throw new stakeholder_reporting_types_1.StakeholderReportingError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.StakeholderReportingService = StakeholderReportingService;
exports.StakeholderReportingService = StakeholderReportingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService])
], StakeholderReportingService);
//# sourceMappingURL=stakeholder-reporting.service.js.map