import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { TaskService } from '../task/task.service';
import { IssueBoardDirectiveInput } from './board-directive.types';
export declare class BoardDirectiveService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly task;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService, task: TaskService);
    issueDirective(input: IssueBoardDirectiveInput, actorUserId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").BoardDirectiveStatus;
        createdAt: Date;
        description: string;
        acknowledgedAt: Date | null;
        title: string;
        dueAt: Date;
        committeeTag: string | null;
        resolutionRef: string | null;
        issuedByUserId: string;
        taskId: string | null;
        acknowledgedByUserId: string | null;
        reportedBackAt: Date | null;
        reportedBackByUserId: string | null;
    }>;
    acknowledgeDirective(directiveId: string, actorUserId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").BoardDirectiveStatus;
        createdAt: Date;
        description: string;
        acknowledgedAt: Date | null;
        title: string;
        dueAt: Date;
        committeeTag: string | null;
        resolutionRef: string | null;
        issuedByUserId: string;
        taskId: string | null;
        acknowledgedByUserId: string | null;
        reportedBackAt: Date | null;
        reportedBackByUserId: string | null;
    }>;
    refreshDirectiveStatus(directiveId: string, actorUserId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").BoardDirectiveStatus;
        createdAt: Date;
        description: string;
        acknowledgedAt: Date | null;
        title: string;
        dueAt: Date;
        committeeTag: string | null;
        resolutionRef: string | null;
        issuedByUserId: string;
        taskId: string | null;
        acknowledgedByUserId: string | null;
        reportedBackAt: Date | null;
        reportedBackByUserId: string | null;
    }>;
    reportDirectiveBack(directiveId: string, actorUserId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").BoardDirectiveStatus;
        createdAt: Date;
        description: string;
        acknowledgedAt: Date | null;
        title: string;
        dueAt: Date;
        committeeTag: string | null;
        resolutionRef: string | null;
        issuedByUserId: string;
        taskId: string | null;
        acknowledgedByUserId: string | null;
        reportedBackAt: Date | null;
        reportedBackByUserId: string | null;
    }>;
    listDirectives(actorUserId: string): Promise<({
        issuedBy: {
            displayName: string;
        };
        tasks: {
            id: string;
            status: import("../../generated/prisma/enums").TaskStatus;
            title: string;
            assigneeEmployeeId: string;
        }[];
    } & {
        id: string;
        status: import("../../generated/prisma/enums").BoardDirectiveStatus;
        createdAt: Date;
        description: string;
        acknowledgedAt: Date | null;
        title: string;
        dueAt: Date;
        committeeTag: string | null;
        resolutionRef: string | null;
        issuedByUserId: string;
        taskId: string | null;
        acknowledgedByUserId: string | null;
        reportedBackAt: Date | null;
        reportedBackByUserId: string | null;
    })[]>;
    listOverdueDirectives(): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").BoardDirectiveStatus;
        createdAt: Date;
        description: string;
        acknowledgedAt: Date | null;
        title: string;
        dueAt: Date;
        committeeTag: string | null;
        resolutionRef: string | null;
        issuedByUserId: string;
        taskId: string | null;
        acknowledgedByUserId: string | null;
        reportedBackAt: Date | null;
        reportedBackByUserId: string | null;
    }[]>;
    private assertCapability;
}
