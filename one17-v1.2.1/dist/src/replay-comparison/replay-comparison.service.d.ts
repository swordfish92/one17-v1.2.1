import { PrismaService } from '../prisma/prisma.service';
import { HalalFundEngineService } from '../engine-halal-fund/halal-fund-engine.service';
import { MudarabahAllocationComparisonSummary, NavComparisonSummary } from './replay-comparison.types';
export declare class ReplayComparisonService {
    private readonly prisma;
    private readonly halalFundEngine;
    constructor(prisma: PrismaService, halalFundEngine: HalalFundEngineService);
    compareHalalFundNavHistory(): Promise<NavComparisonSummary>;
    compareMudarabahAllocations(): Promise<MudarabahAllocationComparisonSummary>;
}
