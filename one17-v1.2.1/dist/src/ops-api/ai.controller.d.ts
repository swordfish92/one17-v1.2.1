import type { AuthenticatedUser } from '../auth/auth.types';
import { One17AIService } from '../ai/one17-ai.service';
import { AiCapabilityCode, AiInvokeContext } from '../ai/ai.types';
export declare class AiController {
    private readonly ai;
    constructor(ai: One17AIService);
    invoke(dto: {
        capabilityCode: AiCapabilityCode;
        promptText: string;
        requestedDataPointCodes?: string[];
        context?: AiInvokeContext;
        orgUnitCode: string;
    }, user: AuthenticatedUser): Promise<import("../ai/ai.types").AiInvokeResult>;
    listInteractionLog(user: AuthenticatedUser): Promise<{
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
    requestFlagToggle(code: string, user: AuthenticatedUser): Promise<{
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
    activateKillSwitch(reason: string, user: AuthenticatedUser): Promise<{
        id: number;
        updatedAt: Date;
        reason: string | null;
        isActive: boolean;
        activatedByUserId: string | null;
    }>;
    deactivateKillSwitch(user: AuthenticatedUser): Promise<{
        id: number;
        updatedAt: Date;
        reason: string | null;
        isActive: boolean;
        activatedByUserId: string | null;
    }>;
}
