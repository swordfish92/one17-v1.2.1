import { PrismaService } from '../prisma/prisma.service';
import { ReconciliationResult } from './reconciliation.types';
export declare class ReconciliationService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    reconcile(metricCode: string, operationalKobo: bigint): Promise<ReconciliationResult>;
}
