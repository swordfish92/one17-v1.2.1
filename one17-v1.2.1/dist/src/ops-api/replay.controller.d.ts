import type { AuthenticatedUser } from '../auth/auth.types';
import { ReplayService } from '../replay/replay.service';
import { IngestReplayCsvDto } from './ops-api.types';
export declare class ReplayController {
    private readonly replay;
    constructor(replay: ReplayService);
    listBatches(): Promise<{
        id: string;
        createdAt: Date;
        fileName: string;
        totalRows: number;
        sourceCode: string;
    }[]>;
    ingestCsv(dto: IngestReplayCsvDto, user: AuthenticatedUser): Promise<{
        id: string;
        createdAt: Date;
        fileName: string;
        totalRows: number;
        sourceCode: string;
        ingestedByUserId: string;
    }>;
    reconciliationCounts(sourceCode: string): Promise<import("../replay/replay.types").ReconciliationCounts>;
}
