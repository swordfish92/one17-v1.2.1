import { PrismaService } from '../prisma/prisma.service';
import { BoardDirectiveService } from '../board-directive/board-directive.service';
import { ReconciliationService } from '../reconciliation/reconciliation.service';
import { DashboardGroup } from './dashboard.types';
export declare class DashboardService {
    private readonly prisma;
    private readonly boardDirective;
    private readonly reconciliation;
    constructor(prisma: PrismaService, boardDirective: BoardDirectiveService, reconciliation: ReconciliationService);
    private moneyMetric;
    private manualStatus;
    private latestKri;
    private latestStress;
    private totalAumKobo;
    private totalInvestorsCount;
    private aumByProductClass;
    private incomeMixYtd;
    private incomeExpenseTrend;
    private mobilizationByMonth;
    private worstRagForCategories;
    private trend;
    private residualFromRag;
    getCeoDashboard(): Promise<{
        groups: DashboardGroup[];
        generatedAt: string;
    }>;
    getBoardDashboard(): Promise<{
        groups: DashboardGroup[];
        generatedAt: string;
    }>;
    private baselineNote;
    private totalStressLossesKobo;
    private kycComplianceRag;
    private amlStatusRag;
    private actionItems;
}
