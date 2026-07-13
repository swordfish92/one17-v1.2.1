import { PrismaService } from '../prisma/prisma.service';
import { ReconciliationService } from '../reconciliation/reconciliation.service';
import { DashboardGroup } from './dashboard.types';
export declare class FundAccountingDashboardService {
    private readonly prisma;
    private readonly reconciliation;
    constructor(prisma: PrismaService, reconciliation: ReconciliationService);
    private moneyMetric;
    private nextAccrualRunLabel;
    getDashboard(): Promise<{
        funds: {
            ledgerEntityCode: string;
            name: string;
            groups: DashboardGroup[];
        }[];
        generatedAt: string;
    }>;
}
