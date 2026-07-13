import { PrismaService } from '../prisma/prisma.service';
import { ReconciliationService } from '../reconciliation/reconciliation.service';
import { ReportingService } from '../reporting/reporting.service';
import { DashboardGroup } from './dashboard.types';
export declare class CompanyAccountingDashboardError extends Error {
    constructor(message: string);
}
export declare class CompanyAccountingDashboardService {
    private readonly prisma;
    private readonly reconciliation;
    private readonly reporting;
    constructor(prisma: PrismaService, reconciliation: ReconciliationService, reporting: ReportingService);
    private moneyMetric;
    private companyEntity;
    private glActuals;
    private getActiveBudget;
    getDashboard(): Promise<{
        groups: DashboardGroup[];
        generatedAt: string;
    }>;
    exportAsReportRun(actorUserId: string): Promise<{
        reportRunId: string;
    }>;
}
