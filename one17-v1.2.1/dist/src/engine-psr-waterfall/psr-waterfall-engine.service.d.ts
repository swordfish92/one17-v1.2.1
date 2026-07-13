import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { AllocateLossInput, ComputeWaterfallInput, ComputeWaterfallResult, LossAllocationResult, PurificationResult } from './psr-waterfall-engine.types';
export declare class PsrWaterfallEngineService {
    private readonly prisma;
    private readonly audit;
    private readonly workflow;
    constructor(prisma: PrismaService, audit: AuditService, workflow: WorkflowEngineService);
    computeWaterfall(input: ComputeWaterfallInput): ComputeWaterfallResult;
    private runDcGates;
    runWaterfallDistribution(input: ComputeWaterfallInput): Promise<{
        result: ComputeWaterfallResult;
        distributionId: string;
        workflowInstanceId: string;
    }>;
    allocateLoss(input: AllocateLossInput): LossAllocationResult;
    purifyIncome(nonPermissibleIncomeKobo: bigint): PurificationResult;
}
