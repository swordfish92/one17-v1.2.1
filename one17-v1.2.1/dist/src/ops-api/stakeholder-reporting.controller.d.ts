import type { AuthenticatedUser } from '../auth/auth.types';
import { StakeholderReportingService } from '../stakeholder-reporting/stakeholder-reporting.service';
import { One17AIService } from '../ai/one17-ai.service';
export declare class StakeholderReportingController {
    private readonly stakeholderReporting;
    private readonly ai;
    constructor(stakeholderReporting: StakeholderReportingService, ai: One17AIService);
    listReports(): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").StakeholderReportStatus;
        createdAt: Date;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        generatedByUserId: string;
        periodStart: Date;
        periodEnd: Date;
        figures: import("@prisma/client/runtime/client").JsonValue;
        department: string;
        reportType: string;
        aiDraftedNarrative: string | null;
        aiInteractionLogId: string | null;
        audienceClass: import("../../generated/prisma/enums").StakeholderAudienceClass;
    }[]>;
    generateReport(dto: {
        department: string;
        reportType: string;
        periodStart: string;
        periodEnd: string;
        figures: Record<string, unknown>;
        audienceClass: 'INTERNAL' | 'CLIENT' | 'REGULATOR';
    }, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").StakeholderReportStatus;
        createdAt: Date;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        generatedByUserId: string;
        periodStart: Date;
        periodEnd: Date;
        figures: import("@prisma/client/runtime/client").JsonValue;
        department: string;
        reportType: string;
        aiDraftedNarrative: string | null;
        aiInteractionLogId: string | null;
        audienceClass: import("../../generated/prisma/enums").StakeholderAudienceClass;
    }>;
    submitForApproval(id: string, user: AuthenticatedUser): Promise<{
        id: string;
        entityType: string;
        entityId: string;
        updatedAt: Date;
        status: import("../../generated/prisma/enums").WorkflowStatus;
        createdAt: Date;
        workflowTypeCode: string;
        scenario: string | null;
        approvalRuleId: string;
        amountKobo: bigint | null;
        initiatedByUserId: string;
    }>;
    aiDraftNarrative(id: string, promptText: string, user: AuthenticatedUser): Promise<import("../ai/ai.types").AiInvokeResult | {
        report: {
            id: string;
            status: import("../../generated/prisma/enums").StakeholderReportStatus;
            createdAt: Date;
            approvedByUserId: string | null;
            workflowInstanceId: string | null;
            generatedByUserId: string;
            periodStart: Date;
            periodEnd: Date;
            figures: import("@prisma/client/runtime/client").JsonValue;
            department: string;
            reportType: string;
            aiDraftedNarrative: string | null;
            aiInteractionLogId: string | null;
            audienceClass: import("../../generated/prisma/enums").StakeholderAudienceClass;
        };
        outcome: "ALLOWED" | "REFUSED";
        refusalReason?: string;
        responseText?: string;
        includedDataPointCodes: string[];
        excludedDataPointCodes: string[];
        cacheHit: boolean;
        interactionLogId: string;
    }>;
    distribute(id: string, dto: {
        audienceClass: 'INTERNAL' | 'CLIENT' | 'REGULATOR';
        recipientDescription: string;
        signOffByUserId?: string;
    }, user: AuthenticatedUser): Promise<{
        id: string;
        audienceClass: import("../../generated/prisma/enums").StakeholderAudienceClass;
        stakeholderReportRunId: string;
        distributedByUserId: string;
        signOffByUserId: string | null;
        recipientDescription: string;
        distributedAt: Date;
    }>;
}
