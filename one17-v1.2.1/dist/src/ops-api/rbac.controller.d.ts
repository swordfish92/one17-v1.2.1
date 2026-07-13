import type { AuthenticatedUser } from '../auth/auth.types';
import { PrismaService } from '../prisma/prisma.service';
import { RbacService } from '../rbac/rbac.service';
import { UserDeactivationService } from '../rbac/user-deactivation.service';
import { ProposeAssignRoleDto, CreateStaffUserDto, DeactivateUserDto } from './ops-api.types';
export declare class RbacController {
    private readonly prisma;
    private readonly rbac;
    private readonly userDeactivation;
    constructor(prisma: PrismaService, rbac: RbacService, userDeactivation: UserDeactivationService);
    listRoles(): Promise<{
        code: string;
        name: string;
        description: string | null;
        isExclusive: boolean;
        excludesAnyApprover: boolean;
        isReadOnly: boolean;
    }[]>;
    listUsers(): Promise<{
        id: string;
        email: string;
        displayName: string;
        status: import("../../generated/prisma/enums").UserStatus;
    }[]>;
    deactivateUser(id: string, dto: DeactivateUserDto, user: AuthenticatedUser): Promise<{
        id: string;
        updatedAt: Date;
        email: string;
        displayName: string;
        status: import("../../generated/prisma/enums").UserStatus;
        passwordHash: string | null;
        failedLoginAttempts: number;
        lockedUntil: Date | null;
        totpSecret: string | null;
        mfaEnabledAt: Date | null;
        createdAt: Date;
    }>;
    reactivateUser(id: string, user: AuthenticatedUser): Promise<{
        id: string;
        updatedAt: Date;
        email: string;
        displayName: string;
        status: import("../../generated/prisma/enums").UserStatus;
        passwordHash: string | null;
        failedLoginAttempts: number;
        lockedUntil: Date | null;
        totpSecret: string | null;
        mfaEnabledAt: Date | null;
        createdAt: Date;
    }>;
    listUserRoles(userId: string): Promise<{
        id: string;
        userId: string;
        roleCode: string;
        assignedAt: Date;
        assignedById: string | null;
    }[]>;
    listProposals(): Promise<{
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
    }[]>;
    proposeAssignment(dto: ProposeAssignRoleDto, user: AuthenticatedUser): Promise<{
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
    createStaffUser(dto: CreateStaffUserDto, user: AuthenticatedUser): Promise<{
        id: string;
        email: string;
        displayName: string;
        status: import("../../generated/prisma/enums").UserStatus;
    }>;
    listApprovalRules(): Promise<({
        approvalRules: ({
            steps: {
                id: string;
                description: string | null;
                approvalRuleId: string;
                stepOrder: number;
                requiredFunctionCode: string;
                requiresAmountLimitCheck: boolean;
                isLockedSeat: boolean;
                lockedSeatRationale: string | null;
            }[];
        } & {
            id: string;
            description: string | null;
            workflowTypeCode: string;
            ruleKey: string | null;
            chainVersionId: string;
            scenario: string | null;
            minAmountKobo: bigint | null;
            maxAmountKobo: bigint | null;
            initiatorFunctionCode: string;
            requiredChecksNote: string | null;
        })[];
    } & {
        code: string;
        description: string | null;
    })[]>;
    getCapabilityMatrix(): Promise<{
        roles: {
            code: string;
            name: string;
            isReadOnly: boolean;
        }[];
        functions: {
            code: string;
            description: string | null;
        }[];
        grants: {
            functionCode: string;
            roleCode: string;
            level: import("../../generated/prisma/enums").PermissionLevel;
            approvalLimitKobo: bigint | null;
        }[];
    }>;
}
