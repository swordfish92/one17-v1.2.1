import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { LedgerService } from '../ledger/ledger.service';
import { ProposeFrameworkMapVersionInput, AddStatementLineMappingInput, CreateStatementTemplateInput, AddStatementLineInput, RegisterRegulatorTemplateInput, AddRegulatorTemplateLineInput, GenerateReportRunInput } from './reporting.types';
export declare class ReportingService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly workflow;
    private readonly ledger;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService, workflow: WorkflowEngineService, ledger: LedgerService);
    proposeFrameworkMapVersion(input: ProposeFrameworkMapVersionInput): Promise<{
        frameworkMap: {
            id: string;
            status: import("../../generated/prisma/enums").FrameworkMapStatus;
            createdAt: Date;
            description: string;
            version: number;
            approvedByUserId: string | null;
            workflowInstanceId: string | null;
            effectiveFrom: Date;
            effectiveTo: Date | null;
            createdByUserId: string;
        };
        workflowInstance: any;
    }>;
    approveFrameworkMapVersion(workflowInstanceId: string, approverUserId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").FrameworkMapStatus;
        createdAt: Date;
        description: string;
        version: number;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        effectiveFrom: Date;
        effectiveTo: Date | null;
        createdByUserId: string;
    } | null>;
    createStatementTemplate(input: CreateStatementTemplateInput): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").StatementTemplateStatus;
        createdAt: Date;
        name: string;
        version: number;
        effectiveFrom: Date | null;
        createdByUserId: string;
        basis: import("../../generated/prisma/enums").AccountingBasis;
        statementCode: string;
    }>;
    addStatementLine(input: AddStatementLineInput): Promise<{
        id: string;
        sortOrder: number;
        label: string;
        statementTemplateId: string;
        lineCode: string;
        signConvention: string | null;
        parentLineId: string | null;
        computationType: import("../../generated/prisma/enums").StatementLineComputationType;
        formulaExpression: string | null;
    }>;
    addStatementLineMapping(input: AddStatementLineMappingInput): Promise<{
        id: string;
        createdAt: Date;
        frameworkMapId: string;
        chartOfAccountId: string;
        statementLineId: string;
    }>;
    registerRegulatorTemplate(input: RegisterRegulatorTemplateInput): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").RegulatorTemplateStatus;
        createdAt: Date;
        name: string;
        version: number;
        effectiveFrom: Date | null;
        effectiveTo: Date | null;
        createdByUserId: string;
        regulatorCode: string;
        templateCode: string;
        filingFrequency: string | null;
    }>;
    addRegulatorTemplateLine(input: AddRegulatorTemplateLineInput, actorUserId: string): Promise<{
        id: string;
        sortOrder: number;
        label: string;
        lineCode: string;
        regulatorTemplateId: string;
        mapsToStatementLineId: string | null;
        mapsToChartOfAccountId: string | null;
    }>;
    generateReportRun(input: GenerateReportRunInput): Promise<{
        id: string;
        ledgerEntityCode: string;
        generatedByUserId: string;
        periodStart: Date;
        periodEnd: Date;
        basis: import("../../generated/prisma/enums").AccountingBasis;
        statementTemplateId: string | null;
        frameworkMapId: string;
        figures: import("@prisma/client/runtime/client").JsonValue;
        generatedAt: Date;
    }>;
    getBalanceSheet(ledgerEntityCode: string, basis: 'IFRS' | 'AAOIFI', actorUserId: string): Promise<{
        ledgerEntityCode: string;
        basis: "IFRS" | "AAOIFI";
        assets: {
            accountCode: string;
            accountName: string;
            balanceKobo: string;
        }[];
        liabilities: any[];
        equity: any[];
        totalAssetsKobo: string;
        totalLiabilitiesKobo: string;
        totalEquityKobo: string;
    }>;
    getIncomeStatement(ledgerEntityCode: string, periodStart: Date, periodEnd: Date, basis: 'IFRS' | 'AAOIFI', actorUserId: string): Promise<{
        ledgerEntityCode: string;
        basis: "IFRS" | "AAOIFI";
        periodStart: Date;
        periodEnd: Date;
        income: {
            accountCode: string;
            accountName: string;
            balanceKobo: string;
        }[];
        expenses: {
            accountCode: string;
            accountName: string;
            balanceKobo: string;
        }[];
        totalIncomeKobo: string;
        totalExpenseKobo: string;
        netIncomeKobo: string;
    }>;
    getRecentJournals(ledgerEntityCode: string, actorUserId: string, limit?: number): Promise<{
        id: string;
        journalReference: string;
        entryDate: Date;
        description: string;
        lines: {
            accountCode: string;
            accountName: string;
            debitKobo: string;
            creditKobo: string;
            description: string | null;
        }[];
    }[]>;
    private assertCapability;
}
