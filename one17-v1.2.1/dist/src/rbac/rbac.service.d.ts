import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { AuthService } from '../auth/auth.service';
interface AssignRoleInput {
    userId: string;
    roleCode: string;
    assignedById?: string;
}
interface CreateStaffUserInput {
    email: string;
    displayName: string;
    initialPassword?: string;
    createdByUserId: string;
}
export declare class RbacService {
    private readonly prisma;
    private readonly audit;
    private readonly workflow;
    private readonly authService;
    constructor(prisma: PrismaService, audit: AuditService, workflow: WorkflowEngineService, authService: AuthService);
    createStaffUser({ email, displayName, initialPassword, createdByUserId }: CreateStaffUserInput): Promise<{
        id: string;
        email: string;
        displayName: string;
        status: import("../../generated/prisma/enums").UserStatus;
    }>;
    proposeAssignRole(input: AssignRoleInput & {
        assignedById: string;
    }): Promise<{
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
    approveAssignRole(workflowInstanceId: string, approverUserId: string, target: {
        userId: string;
        roleCode: string;
    }): Promise<{
        id: string;
        userId: string;
        roleCode: string;
        assignedAt: Date;
        assignedById: string | null;
    } | null>;
    assignRole({ userId, roleCode, assignedById }: AssignRoleInput): Promise<{
        id: string;
        userId: string;
        roleCode: string;
        assignedAt: Date;
        assignedById: string | null;
    }>;
    private findConflictReason;
}
export {};
