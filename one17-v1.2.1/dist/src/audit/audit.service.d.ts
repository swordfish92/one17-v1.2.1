import { PrismaService } from '../prisma/prisma.service';
import { RecordAuditEventInput } from './audit.types';
export declare class AuditService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    record(input: RecordAuditEventInput): Promise<void>;
    verifyChainIntegrity(): Promise<{
        ok: boolean;
        rowsChecked: number;
        failures: {
            id: string;
            occurredAt: Date;
            reason: string;
        }[];
    }>;
}
