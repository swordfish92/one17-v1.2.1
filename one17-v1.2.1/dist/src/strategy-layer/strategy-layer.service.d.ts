import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { DelegationService } from '../delegation/delegation.service';
import { ProposeStrategyStatementInput, ApproveStrategyStatementInput, UpdatePillarGovernanceInput, UpdateObjectiveGovernanceInput, PublishStrategyInput, AddStatementTypeConfigInput, ProposePillarInput, ApprovePillarInput, ProposeObjectiveInput, ApproveObjectiveInput, MapKraToObjectiveInput } from './strategy-layer.types';
export declare class StrategyLayerService {
    private readonly prisma;
    private readonly audit;
    private readonly workflow;
    private readonly delegation;
    constructor(prisma: PrismaService, audit: AuditService, workflow: WorkflowEngineService, delegation: DelegationService);
    proposeStatement(input: ProposeStrategyStatementInput): Promise<{
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
    approveStatement(input: ApproveStrategyStatementInput): Promise<unknown>;
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
    getActiveStrategy(): Promise<{
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
    addStatementTypeConfig(input: AddStatementTypeConfigInput): Promise<{
        createdAt: Date;
        code: string;
        description: string | null;
        sortOrder: number;
        isActive: boolean;
        label: string;
        allowsMultipleActive: boolean;
    }>;
    updatePillarGovernance(input: UpdatePillarGovernanceInput): Promise<{
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
    updateObjectiveGovernance(input: UpdateObjectiveGovernanceInput): Promise<{
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
    proposePillar(input: ProposePillarInput): Promise<{
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
    approvePillar(input: ApprovePillarInput): Promise<{
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
    proposeObjective(input: ProposeObjectiveInput): Promise<{
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
    approveObjective(input: ApproveObjectiveInput): Promise<{
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
    mapKraToObjective(input: MapKraToObjectiveInput): Promise<{
        objectiveCode: string;
        kraCode: string;
    }>;
    unmapKraFromObjective(kraCode: string, objectiveCode: string, actorUserId: string): Promise<void>;
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
    publish(input: PublishStrategyInput): Promise<{
        id: string;
        summary: string;
        publishedByUserId: string;
        publishedAt: Date;
    }>;
    acknowledge(publicationId: string, appUserId: string): Promise<{
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
    private assertCapability;
}
