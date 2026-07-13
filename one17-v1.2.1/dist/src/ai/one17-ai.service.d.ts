import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { AiInvokeInput, AiInvokeResult } from './ai.types';
export declare class One17AIService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly workflow;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService, workflow: WorkflowEngineService);
    invoke(input: AiInvokeInput): Promise<AiInvokeResult>;
    requestFlagToggle(capabilityCode: string, actorUserId: string): Promise<{
        id: string;
        entityType: string;
        entityId: string;
        updatedAt: Date;
        status: import("../../generated/prisma/enums").WorkflowStatus;
        createdAt: Date;
        workflowTypeCode: string;
        scenario: string | null;
        approvalRuleId: string;
        amountKobo: bigint | null;
        initiatedByUserId: string;
    }>;
    approveFlagToggle(workflowInstanceId: string, approverUserId: string): Promise<{
        updatedAt: Date;
        updatedByUserId: string | null;
        workflowInstanceId: string | null;
        capabilityCode: string;
        isEnabled: boolean;
    } | null>;
    activateKillSwitch(actorUserId: string, reason: string): Promise<{
        id: number;
        updatedAt: Date;
        reason: string | null;
        isActive: boolean;
        activatedByUserId: string | null;
    }>;
    deactivateKillSwitch(actorUserId: string): Promise<{
        id: number;
        updatedAt: Date;
        reason: string | null;
        isActive: boolean;
        activatedByUserId: string | null;
    }>;
    listInteractionLog(actorUserId: string, limit?: number): Promise<{
        id: string;
        createdAt: Date;
        outcome: import("../../generated/prisma/enums").AiInteractionOutcome;
        capabilityCode: string;
        askingUserId: string;
        promptText: string;
        requestedDataPointCodes: import("@prisma/client/runtime/client").JsonValue;
        includedDataPointCodes: import("@prisma/client/runtime/client").JsonValue;
        excludedDataPointCodes: import("@prisma/client/runtime/client").JsonValue;
        personalDataPointCodesIncluded: import("@prisma/client/runtime/client").JsonValue;
        contextJson: import("@prisma/client/runtime/client").JsonValue | null;
        gate1FlagEnabled: boolean;
        gate2Granted: boolean;
        gate3ContextOk: boolean;
        killSwitchActive: boolean;
        tokenBudgetOk: boolean;
        refusalReason: string | null;
        responseText: string | null;
        aiDrafted: boolean;
        cacheHit: boolean;
        tokensCharged: number;
    }[]>;
    listCapabilityFlags(): Promise<{
        updatedAt: Date;
        updatedByUserId: string | null;
        workflowInstanceId: string | null;
        capabilityCode: string;
        isEnabled: boolean;
    }[]>;
    listTokenBudgets(): Promise<{
        id: string;
        orgUnitCode: string;
        periodMonth: number;
        periodYear: number;
        tokenLimit: number;
        tokensConsumed: number;
    }[]>;
    getKillSwitchStatus(): Promise<{
        id: number;
        updatedAt: Date;
        reason: string | null;
        isActive: boolean;
        activatedByUserId: string | null;
    } | null>;
    private checkContext;
    private readonly LIVE_QUERY_RESOLVERS;
    private resolveDataPoints;
    private buildResponse;
    private computeCacheKey;
    private refuse;
    private assertCapability;
}
