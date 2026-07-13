import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { ProposeDepartmentHeadInput } from './department-head.types';
export declare class DepartmentHeadService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly workflow;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService, workflow: WorkflowEngineService);
    private assertCapability;
    proposeDesignation(input: ProposeDepartmentHeadInput, actorUserId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").DepartmentHeadDesignationStatus;
        createdAt: Date;
        proposedByUserId: string;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        effectiveFrom: Date | null;
        effectiveTo: Date | null;
        orgUnitCode: string;
        employeeId: string;
    }>;
    approveDesignation(workflowInstanceId: string, approverUserId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").DepartmentHeadDesignationStatus;
        createdAt: Date;
        proposedByUserId: string;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        effectiveFrom: Date | null;
        effectiveTo: Date | null;
        orgUnitCode: string;
        employeeId: string;
    }>;
    listDesignations(orgUnitCode?: string): Promise<({
        orgUnit: {
            name: string;
        };
        employee: {
            surname: string;
            firstName: string;
            middleName: string | null;
        };
    } & {
        id: string;
        status: import("../../generated/prisma/enums").DepartmentHeadDesignationStatus;
        createdAt: Date;
        proposedByUserId: string;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        effectiveFrom: Date | null;
        effectiveTo: Date | null;
        orgUnitCode: string;
        employeeId: string;
    })[]>;
    isActiveDepartmentHead(userId: string): Promise<boolean>;
}
