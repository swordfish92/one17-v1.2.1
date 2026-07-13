import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { DistributeStakeholderReportInput, GenerateStakeholderReportInput, StakeholderReportingError } from './stakeholder-reporting.types';

// Check-6B item 2 (invariant 24). Per-department report workspaces (FINCON/
// PORTFOLIO/BD/... — department is config vocabulary, invariant 19) built
// on a purpose-built StakeholderReportRun rather than reusing the existing
// (AMD-11-specific, frameworkMapId-coupled) ReportRun model — see
// CHECK6B2_EVIDENCE.md for why. figures are LOCKED numbers; the AI-drafted
// narrative is the only field an AI capability ever touches, always
// AI_DRAFTED-tagged, always subject to the SAME maker!=checker approval
// before distribution.
@Injectable()
export class StakeholderReportingService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
  ) {}

  async generateReport(input: GenerateStakeholderReportInput) {
    await this.assertCapability(input.generatedByUserId, 'STAKEHOLDER_REPORT_MANAGEMENT', 'INITIATE', 'generate a stakeholder report');
    const report = await this.prisma.stakeholderReportRun.create({
      data: {
        department: input.department,
        reportType: input.reportType,
        periodStart: input.periodStart,
        periodEnd: input.periodEnd,
        figures: input.figures as any,
        audienceClass: input.audienceClass,
        generatedByUserId: input.generatedByUserId,
      },
    });
    await this.audit.record({ actorUserId: input.generatedByUserId, action: 'CREATE', entityType: 'stakeholder_report_run', entityId: report.id, after: { department: report.department, reportType: report.reportType, audienceClass: report.audienceClass } });
    return report;
  }

  // AI drafting is only ever allowed while the report is still DRAFT (the
  // "report workspace" gate 3 context rule checks this exact state) — the
  // narrative is subject to the SAME approval as everything else in the
  // report, never a separate sign-off.
  async attachAiDraftedNarrative(reportRunId: string, narrativeText: string, aiInteractionLogId: string, actorUserId: string) {
    const report = await this.prisma.stakeholderReportRun.findUniqueOrThrow({ where: { id: reportRunId } });
    if (report.status !== 'DRAFT') {
      throw new StakeholderReportingError(`Report ${reportRunId} is ${report.status}, not DRAFT — an AI-drafted narrative can only be attached before submission for approval.`);
    }
    const updated = await this.prisma.stakeholderReportRun.update({
      where: { id: reportRunId },
      data: { aiDraftedNarrative: narrativeText, aiInteractionLogId },
    });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'stakeholder_report_run', entityId: reportRunId, after: { aiDraftedNarrative: true, aiInteractionLogId } });
    return updated;
  }

  async submitForApproval(reportRunId: string, actorUserId: string) {
    const report = await this.prisma.stakeholderReportRun.findUniqueOrThrow({ where: { id: reportRunId } });
    if (report.status !== 'DRAFT') {
      throw new StakeholderReportingError(`Report ${reportRunId} is ${report.status}, not DRAFT — cannot resubmit.`);
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

  async approveReport(workflowInstanceId: string, approverUserId: string) {
    const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
    if (updated.status !== 'APPROVED') return null;
    const report = await this.prisma.stakeholderReportRun.findFirstOrThrow({ where: { workflowInstanceId } });
    const approved = await this.prisma.stakeholderReportRun.update({ where: { id: report.id }, data: { status: 'APPROVED', approvedByUserId: approverUserId } });
    await this.audit.record({ actorUserId: approverUserId, action: 'APPROVE', entityType: 'stakeholder_report_run', entityId: report.id, after: { status: 'APPROVED' } });
    return approved;
  }

  // Invariant 24's own two named adversarial rules: (1) "unapproved cannot
  // distribute" — checked against status, not against the workflow
  // instance directly, since status IS the durable record of that
  // approval having happened; (2) "CLIENT/REGULATOR audience requires
  // MD/delegated sign-off per DoA" — signOffByUserId must be supplied AND
  // must actually hold STAKEHOLDER_REPORT_DISTRIBUTION_SIGNOFF at APPROVE
  // level (standing or delegated) for those audience classes only;
  // INTERNAL distribution needs no such sign-off. Invariant 37(c)(iv)
  // extends the SAME sign-off-required set to BOARD audience ("routed per
  // DoA" — Board Papers are exactly this rule, not a new one).
  async distribute(input: DistributeStakeholderReportInput) {
    const report = await this.prisma.stakeholderReportRun.findUniqueOrThrow({ where: { id: input.stakeholderReportRunId } });
    if (report.status === 'DRAFT') {
      throw new StakeholderReportingError(`Report ${input.stakeholderReportRunId} is DRAFT, not APPROVED — an unapproved report cannot be distributed (invariant 24).`);
    }

    if (input.audienceClass === 'CLIENT' || input.audienceClass === 'REGULATOR' || input.audienceClass === 'BOARD') {
      if (!input.signOffByUserId) {
        throw new StakeholderReportingError(`${input.audienceClass} audience distribution requires MD/delegated sign-off per DoA — no signOffByUserId supplied (invariant 24).`);
      }
      const { eligible } = await this.delegation.hasCapability(input.signOffByUserId, 'STAKEHOLDER_REPORT_DISTRIBUTION_SIGNOFF', 'APPROVE');
      if (!eligible) {
        throw new StakeholderReportingError(`Sign-off user lacks STAKEHOLDER_REPORT_DISTRIBUTION_SIGNOFF APPROVE authority (standing or delegated) — required for ${input.audienceClass} audience distribution (invariant 24).`);
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

  async getReport(reportRunId: string) {
    return this.prisma.stakeholderReportRun.findUniqueOrThrow({ where: { id: reportRunId } });
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'stakeholder_reporting_activity', entityId: activity, after: { functionCode, level } });
      throw new StakeholderReportingError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}
