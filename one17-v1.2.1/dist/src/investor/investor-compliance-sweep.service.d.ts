import { PrismaService } from '../prisma/prisma.service';
import { TaskService } from '../task/task.service';
export declare class InvestorComplianceSweepService {
    private readonly prisma;
    private readonly task;
    constructor(prisma: PrismaService, task: TaskService);
    private listComplianceEmployeeIds;
    private assignIfNotAlreadyOpen;
    listComplianceQueue(now: Date): Promise<{
        overdueKycReviews: ({
            kind: "COUNTERPARTY";
            id: string;
            name: string;
            frequency: string | null;
            lastReviewedAt: Date | null;
        } | {
            kind: "INVESTOR";
            id: string;
            name: string;
            frequency: string | null;
            lastReviewedAt: Date | null;
        })[];
        sanctionsDue: {
            investorId: string;
            name: string;
            lastScreenedAt: Date | null;
        }[];
        documentExpiry: {
            documentId: string;
            investorId: string;
            name: string;
            documentType: string;
            expiryDate: Date | null;
            isExpired: boolean;
        }[];
    }>;
    runKycPeriodicReviewSweep(now: Date, systemUserId: string): Promise<{
        overdueCount: number;
        tasksCreated: number;
    }>;
    runSanctionsRescreeningSweep(now: Date, systemUserId: string): Promise<{
        dueCount: number;
        tasksCreated: number;
    }>;
    runDocumentExpirySweep(now: Date, systemUserId: string, warningDays?: number): Promise<{
        expiringCount: number;
        expiredCount: number;
        tasksCreated: number;
    }>;
}
