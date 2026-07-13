import { PrismaService } from '../prisma/prisma.service';
import { DelegationService } from '../delegation/delegation.service';
export declare class SettingsRegistryService {
    private readonly prisma;
    private readonly delegation;
    constructor(prisma: PrismaService, delegation: DelegationService);
    private visibleEntries;
    getRegistry(userId: string): Promise<{
        rowCount: any;
        domain: string;
        label: string;
        capability: string;
        screenPath: string;
        table: string;
    }[]>;
    exportForAuditor(userId: string): Promise<{
        exportedAt: string;
        exportedByUserId: string;
        sections: {
            domain: string;
            label: string;
            table: string;
            rows: any;
        }[];
    }>;
}
