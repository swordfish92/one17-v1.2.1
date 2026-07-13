import type { AuthenticatedUser } from '../auth/auth.types';
import { BoardDirectiveService } from '../board-directive/board-directive.service';
import { IssueBoardDirectiveDto } from './ops-api.types';
export declare class BoardDirectiveController {
    private readonly boardDirective;
    constructor(boardDirective: BoardDirectiveService);
    list(user: AuthenticatedUser): Promise<({
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
    issue(dto: IssueBoardDirectiveDto, user: AuthenticatedUser): Promise<{
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
    acknowledge(id: string, user: AuthenticatedUser): Promise<{
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
    reportBack(id: string, user: AuthenticatedUser): Promise<{
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
}
