import type { AuthenticatedUser } from '../auth/auth.types';
import { PrismaService } from '../prisma/prisma.service';
import { RiskService } from '../risk/risk.service';
import { StressEngineService } from '../stress-engine/stress-engine.service';
import { BureauGatewayService } from '../bureau-gateway/bureau-gateway.service';
import { ConfigureBureauProviderDto, UpdateBureauPolicyDto, ProposeRiskMatrixVersionDto, UpdateRiskCategoryThresholdsDto, ApproveRiskMatrixVersionDto, ApproveRiskRegisterEntryDto, RunStressTestDto } from './ops-api.types';
export declare class ErmController {
    private readonly prisma;
    private readonly risk;
    private readonly stressEngine;
    private readonly bureauGateway;
    constructor(prisma: PrismaService, risk: RiskService, stressEngine: StressEngineService, bureauGateway: BureauGatewayService);
    listKriReadings(kriCode?: string): Promise<({
        definition: {
            name: string;
            direction: import("../../generated/prisma/enums").RiskAppetiteDirection;
            category: string;
            computeStatus: import("../../generated/prisma/enums").KriComputeStatus;
        };
    } & {
        id: string;
        ledgerEntityCode: string | null;
        matrixVersionId: string | null;
        value: import("@prisma/client-runtime-utils").Decimal | null;
        kriCode: string;
        isAggregate: boolean;
        readingDate: Date;
        ragStatus: import("../../generated/prisma/enums").KriRagStatus;
        detail: import("@prisma/client/runtime/client").JsonValue | null;
        computedAt: Date;
    })[]>;
    listKriEscalations(): Promise<{
        id: string;
        ledgerEntityCode: string | null;
        kriCode: string;
        ragStatus: import("../../generated/prisma/enums").KriRagStatus;
        kriReadingId: string;
        ownerLabel: string | null;
        escalatedAt: Date;
        notifiedAt: Date | null;
    }[]>;
    listStressRuns(modelType?: string): Promise<{
        id: string;
        ledgerEntityCode: string;
        modelType: import("../../generated/prisma/enums").StressModelType;
        runMode: import("../../generated/prisma/enums").StressRunMode;
        scenarioConfigId: string | null;
        inputs: import("@prisma/client/runtime/client").JsonValue;
        outputs: import("@prisma/client/runtime/client").JsonValue;
        ranByUserId: string;
        ranAt: Date;
        isApprovedBaseline: boolean;
        approvalWorkflowInstanceId: string | null;
    }[]>;
    getRiskMatrix(): Promise<import("../risk/risk.types").ActiveRiskAppetiteMatrixResult>;
    getRiskRegister(status?: 'DRAFT' | 'ACTIVE'): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").RiskRegisterStatus;
        createdAt: Date;
        description: string | null;
        approvedByUserId: string | null;
        boardResolutionRef: string | null;
        sortOrder: number;
        riskCategory: string;
        subCategory: string | null;
        inherentRiskRating: string | null;
        residualRiskRating: string | null;
        riskAppetiteStatement: string | null;
    }[]>;
    listPendingRiskMatrixVersions(): Promise<({
        categories: {
            id: string;
            sortOrder: number;
            matrixVersionId: string;
            riskCategory: string;
            appetiteStatement: string | null;
            appetiteLevel: string | null;
            direction: import("../../generated/prisma/enums").RiskAppetiteDirection;
            isZeroTolerance: boolean;
            escalationOwner: string | null;
            greenThreshold: import("@prisma/client-runtime-utils").Decimal | null;
            amberThreshold: import("@prisma/client-runtime-utils").Decimal | null;
            redThreshold: import("@prisma/client-runtime-utils").Decimal | null;
        }[];
    } & {
        id: string;
        status: import("../../generated/prisma/enums").RiskMatrixStatus;
        createdAt: Date;
        version: number;
        proposedByUserId: string | null;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        effectiveFrom: Date | null;
        boardResolutionRef: string | null;
    })[]>;
    proposeRiskMatrixVersion(dto: ProposeRiskMatrixVersionDto, user: AuthenticatedUser): Promise<{
        matrixVersion: {
            id: string;
            status: import("../../generated/prisma/enums").RiskMatrixStatus;
            createdAt: Date;
            version: number;
            proposedByUserId: string | null;
            approvedByUserId: string | null;
            workflowInstanceId: string | null;
            effectiveFrom: Date | null;
            boardResolutionRef: string | null;
        };
        workflowInstance: any;
    }>;
    updateRiskCategoryThresholds(categoryId: string, dto: UpdateRiskCategoryThresholdsDto, user: AuthenticatedUser): Promise<{
        id: string;
        sortOrder: number;
        matrixVersionId: string;
        riskCategory: string;
        appetiteStatement: string | null;
        appetiteLevel: string | null;
        direction: import("../../generated/prisma/enums").RiskAppetiteDirection;
        isZeroTolerance: boolean;
        escalationOwner: string | null;
        greenThreshold: import("@prisma/client-runtime-utils").Decimal | null;
        amberThreshold: import("@prisma/client-runtime-utils").Decimal | null;
        redThreshold: import("@prisma/client-runtime-utils").Decimal | null;
    }>;
    approveRiskMatrixVersion(workflowInstanceId: string, dto: ApproveRiskMatrixVersionDto, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").RiskMatrixStatus;
        createdAt: Date;
        version: number;
        proposedByUserId: string | null;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        effectiveFrom: Date | null;
        boardResolutionRef: string | null;
    } | null>;
    approveRiskRegisterEntry(id: string, dto: ApproveRiskRegisterEntryDto, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").RiskRegisterStatus;
        createdAt: Date;
        description: string | null;
        approvedByUserId: string | null;
        boardResolutionRef: string | null;
        sortOrder: number;
        riskCategory: string;
        subCategory: string | null;
        inherentRiskRating: string | null;
        residualRiskRating: string | null;
        riskAppetiteStatement: string | null;
    }>;
    listStressScenarios(modelType?: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").StressConfigStatus;
        createdAt: Date;
        version: number;
        proposedByUserId: string | null;
        approvedByUserId: string | null;
        effectiveFrom: Date | null;
        boardResolutionRef: string | null;
        scenarioLabel: string;
        modelType: import("../../generated/prisma/enums").StressModelType;
        scenarioCode: string;
        parameters: import("@prisma/client/runtime/client").JsonValue;
    }[]>;
    runStressTest(dto: RunStressTestDto, user: AuthenticatedUser): Promise<{
        id: string;
        ledgerEntityCode: string;
        modelType: import("../../generated/prisma/enums").StressModelType;
        runMode: import("../../generated/prisma/enums").StressRunMode;
        scenarioConfigId: string | null;
        inputs: import("@prisma/client/runtime/client").JsonValue;
        outputs: import("@prisma/client/runtime/client").JsonValue;
        ranByUserId: string;
        ranAt: Date;
        isApprovedBaseline: boolean;
        approvalWorkflowInstanceId: string | null;
    }>;
    requestStressBaselinePublication(runId: string, user: AuthenticatedUser): Promise<{
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
    listBureauProviders(): Promise<(Omit<{
        id: string;
        updatedAt: Date;
        updatedByUserId: string | null;
        name: string;
        isActive: boolean;
        providerSlot: number;
        apiConfig: import("@prisma/client/runtime/client").JsonValue;
        costPerPullKobo: bigint;
    }, "apiConfig" | "costPerPullKobo"> & {
        costPerPullKobo: string;
        apiConfigKeys: string[];
        apiConfigSensitiveKeys: string[];
        automationStatus: "AUTOMATED" | "MANUAL_PENDING_API" | "NOT_CONTRACTED";
    })[]>;
    configureBureauProvider(dto: ConfigureBureauProviderDto, user: AuthenticatedUser): Promise<Omit<{
        id: string;
        updatedAt: Date;
        updatedByUserId: string | null;
        name: string;
        isActive: boolean;
        providerSlot: number;
        apiConfig: import("@prisma/client/runtime/client").JsonValue;
        costPerPullKobo: bigint;
    }, "apiConfig" | "costPerPullKobo"> & {
        costPerPullKobo: string;
        apiConfigKeys: string[];
        apiConfigSensitiveKeys: string[];
        automationStatus: "AUTOMATED" | "MANUAL_PENDING_API" | "NOT_CONTRACTED";
    }>;
    getBureauPolicy(): Promise<{
        id: number;
        updatedAt: Date;
        updatedByUserId: string | null;
        minIntervalDays: number;
    } | {
        id: number;
        minIntervalDays: null;
        updatedByUserId: null;
        updatedAt: null;
    }>;
    updateBureauPolicy(dto: UpdateBureauPolicyDto, user: AuthenticatedUser): Promise<{
        id: number;
        updatedAt: Date;
        updatedByUserId: string | null;
        minIntervalDays: number;
    }>;
    listBureauPullRegister(user: AuthenticatedUser): Promise<({
        counterparty: {
            legalName: string;
        };
        provider: {
            name: string;
        };
        pulledBy: {
            email: string;
            displayName: string;
        };
    } & {
        id: string;
        counterpartyId: string;
        providerId: string;
        costKobo: bigint;
        resultSummary: string;
        pulledByUserId: string;
        pulledAt: Date;
    } & {
        costKobo: string;
    })[]>;
}
