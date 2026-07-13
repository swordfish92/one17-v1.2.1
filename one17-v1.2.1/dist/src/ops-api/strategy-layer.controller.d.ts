import type { AuthenticatedUser } from '../auth/auth.types';
import { StrategyLayerService } from '../strategy-layer/strategy-layer.service';
import { ProposeStrategyStatementDto, ApproveStrategyStatementDto, UpdatePillarGovernanceDto, UpdateObjectiveGovernanceDto, PublishStrategyDto, AddStatementTypeConfigDto, ProposePillarDto, ApprovePillarDto, ProposeObjectiveDto, ApproveObjectiveDto, MapKraToObjectiveDto } from './ops-api.types';
export declare class StrategyLayerController {
    private readonly strategyLayer;
    constructor(strategyLayer: StrategyLayerService);
    getActive(): Promise<{
        statements: ({
            statementType: {
                createdAt: Date;
                code: string;
                description: string | null;
                sortOrder: number;
                isActive: boolean;
                label: string;
                allowsMultipleActive: boolean;
            };
        } & {
            id: string;
            status: import("../../generated/prisma/enums").GovernedItemStatus;
            createdAt: Date;
            proposedByUserId: string;
            approvedByUserId: string | null;
            workflowInstanceId: string | null;
            effectiveFrom: Date | null;
            boardResolutionRef: string | null;
            explanation: string | null;
            statementTypeCode: string;
            content: string;
        })[];
        pillars: ({
            objectiveMap: ({
                objective: {
                    status: import("../../generated/prisma/enums").GovernedItemStatus;
                    createdAt: Date;
                    code: string;
                    name: string;
                    proposedByUserId: string | null;
                    approvedByUserId: string | null;
                    workflowInstanceId: string | null;
                    boardResolutionRef: string | null;
                    explanation: string | null;
                };
            } & {
                pillarCode: string;
                objectiveCode: string;
            })[];
        } & {
            status: import("../../generated/prisma/enums").GovernedItemStatus;
            createdAt: Date;
            code: string;
            name: string;
            description: string | null;
            proposedByUserId: string | null;
            approvedByUserId: string | null;
            workflowInstanceId: string | null;
            boardResolutionRef: string | null;
            explanation: string | null;
        })[];
    }>;
    listStatementTypeConfigs(): Promise<{
        createdAt: Date;
        code: string;
        description: string | null;
        sortOrder: number;
        isActive: boolean;
        label: string;
        allowsMultipleActive: boolean;
    }[]>;
    addStatementTypeConfig(dto: AddStatementTypeConfigDto, user: AuthenticatedUser): Promise<{
        createdAt: Date;
        code: string;
        description: string | null;
        sortOrder: number;
        isActive: boolean;
        label: string;
        allowsMultipleActive: boolean;
    }>;
    proposeStatement(dto: ProposeStrategyStatementDto, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        proposedByUserId: string;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        effectiveFrom: Date | null;
        boardResolutionRef: string | null;
        explanation: string | null;
        statementTypeCode: string;
        content: string;
    }>;
    listPendingStatements(): Promise<({
        statementType: {
            createdAt: Date;
            code: string;
            description: string | null;
            sortOrder: number;
            isActive: boolean;
            label: string;
            allowsMultipleActive: boolean;
        };
    } & {
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        proposedByUserId: string;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        effectiveFrom: Date | null;
        boardResolutionRef: string | null;
        explanation: string | null;
        statementTypeCode: string;
        content: string;
    })[]>;
    approveStatement(workflowInstanceId: string, dto: ApproveStrategyStatementDto, user: AuthenticatedUser): Promise<unknown>;
    updatePillarGovernance(code: string, dto: UpdatePillarGovernanceDto, user: AuthenticatedUser): Promise<{
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        code: string;
        name: string;
        description: string | null;
        proposedByUserId: string | null;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        boardResolutionRef: string | null;
        explanation: string | null;
    }>;
    updateObjectiveGovernance(code: string, dto: UpdateObjectiveGovernanceDto, user: AuthenticatedUser): Promise<{
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        code: string;
        name: string;
        proposedByUserId: string | null;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        boardResolutionRef: string | null;
        explanation: string | null;
    }>;
    proposePillar(dto: ProposePillarDto, user: AuthenticatedUser): Promise<{
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        code: string;
        name: string;
        description: string | null;
        proposedByUserId: string | null;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        boardResolutionRef: string | null;
        explanation: string | null;
    }>;
    listPendingPillars(): Promise<{
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        code: string;
        name: string;
        description: string | null;
        proposedByUserId: string | null;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        boardResolutionRef: string | null;
        explanation: string | null;
    }[]>;
    approvePillar(workflowInstanceId: string, dto: ApprovePillarDto, user: AuthenticatedUser): Promise<{
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        code: string;
        name: string;
        description: string | null;
        proposedByUserId: string | null;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        boardResolutionRef: string | null;
        explanation: string | null;
    } | null>;
    proposeObjective(dto: ProposeObjectiveDto, user: AuthenticatedUser): Promise<{
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        code: string;
        name: string;
        proposedByUserId: string | null;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        boardResolutionRef: string | null;
        explanation: string | null;
    }>;
    listPendingObjectives(): Promise<{
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        code: string;
        name: string;
        proposedByUserId: string | null;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        boardResolutionRef: string | null;
        explanation: string | null;
    }[]>;
    approveObjective(workflowInstanceId: string, dto: ApproveObjectiveDto, user: AuthenticatedUser): Promise<{
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        code: string;
        name: string;
        proposedByUserId: string | null;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        boardResolutionRef: string | null;
        explanation: string | null;
    } | null>;
    listKraObjectiveMap(): Promise<({
        objective: {
            status: import("../../generated/prisma/enums").GovernedItemStatus;
            createdAt: Date;
            code: string;
            name: string;
            proposedByUserId: string | null;
            approvedByUserId: string | null;
            workflowInstanceId: string | null;
            boardResolutionRef: string | null;
            explanation: string | null;
        };
        kra: {
            status: import("../../generated/prisma/enums").GovernedItemStatus;
            createdAt: Date;
            code: string;
            name: string;
            orgUnitCode: string;
        };
    } & {
        objectiveCode: string;
        kraCode: string;
    })[]>;
    mapKraToObjective(dto: MapKraToObjectiveDto, user: AuthenticatedUser): Promise<{
        objectiveCode: string;
        kraCode: string;
    }>;
    unmapKraFromObjective(kraCode: string, objectiveCode: string, user: AuthenticatedUser): Promise<void>;
    publish(dto: PublishStrategyDto, user: AuthenticatedUser): Promise<{
        id: string;
        summary: string;
        publishedByUserId: string;
        publishedAt: Date;
    }>;
    acknowledge(publicationId: string, user: AuthenticatedUser): Promise<{
        id: string;
        publicationId: string;
        appUserId: string;
        acknowledgedAt: Date;
    }>;
    getAcknowledgmentStatus(): Promise<{
        publicationId: string;
        summary: string;
        publishedAt: Date;
        acknowledgedCount: number;
        totalStaff: number;
        outstanding: {
            id: string;
            displayName: string;
        }[];
    } | null>;
}
