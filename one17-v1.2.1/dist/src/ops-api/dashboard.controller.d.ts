import type { AuthenticatedUser } from '../auth/auth.types';
import { DashboardService } from '../dashboard/dashboard.service';
import { CompanyAccountingDashboardService } from '../dashboard/company-accounting-dashboard.service';
import { FundAccountingDashboardService } from '../dashboard/fund-accounting-dashboard.service';
import { BdDashboardService } from '../dashboard/bd-dashboard.service';
export declare class DashboardController {
    private readonly dashboardService;
    private readonly companyAccounting;
    private readonly fundAccounting;
    private readonly bd;
    constructor(dashboardService: DashboardService, companyAccounting: CompanyAccountingDashboardService, fundAccounting: FundAccountingDashboardService, bd: BdDashboardService);
    ceo(): Promise<{
        groups: import("../dashboard/dashboard.types").DashboardGroup[];
        generatedAt: string;
    }>;
    board(): Promise<{
        groups: import("../dashboard/dashboard.types").DashboardGroup[];
        generatedAt: string;
    }>;
    companyAccountingDashboard(): Promise<{
        groups: import("../dashboard/dashboard.types").DashboardGroup[];
        generatedAt: string;
    }>;
    exportCompanyAccountingReportRun(user: AuthenticatedUser): Promise<{
        reportRunId: string;
    }>;
    fundAccountingDashboard(): Promise<{
        funds: {
            ledgerEntityCode: string;
            name: string;
            groups: import("../dashboard/dashboard.types").DashboardGroup[];
        }[];
        generatedAt: string;
    }>;
    bdDashboard(user: AuthenticatedUser, scope?: string): Promise<{
        groups: import("../dashboard/dashboard.types").DashboardGroup[];
        generatedAt: string;
    }>;
}
