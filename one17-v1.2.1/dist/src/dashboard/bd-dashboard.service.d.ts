import { PrismaService } from '../prisma/prisma.service';
import { DashboardGroup } from './dashboard.types';
export declare class BdDashboardService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getDashboard(viewerUserId: string, scope: 'own' | 'enterprise'): Promise<{
        groups: DashboardGroup[];
        generatedAt: string;
    }>;
}
