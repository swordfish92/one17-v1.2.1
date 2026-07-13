import type { AuthenticatedUser } from '../auth/auth.types';
import { TaskService } from '../task/task.service';
import { AssignTaskDto, SetDeliverableUrlDto, CreateSubmissionDto } from './ops-api.types';
export declare class TaskController {
    private readonly task;
    constructor(task: TaskService);
    list(status: string | undefined, orgUnitCode: string | undefined, user: AuthenticatedUser): Promise<{
        mine: {
            id: string;
            status: import("../../generated/prisma/enums").TaskStatus;
            createdAt: Date;
            description: string | null;
            title: string;
            completedAt: Date | null;
            assigneeEmployeeId: string;
            assignedByUserId: string;
            dueAt: Date | null;
            startedAt: Date | null;
            amberNotifiedAt: Date | null;
            defaultedAt: Date | null;
            deliverableUrl: string | null;
            directiveId: string | null;
            kpiDefinitionId: string | null;
        }[];
        subordinates: ({
            assigneeEmployee: {
                orgUnitCode: string;
                surname: string;
                firstName: string;
                middleName: string | null;
            };
        } & {
            id: string;
            status: import("../../generated/prisma/enums").TaskStatus;
            createdAt: Date;
            description: string | null;
            title: string;
            completedAt: Date | null;
            assigneeEmployeeId: string;
            assignedByUserId: string;
            dueAt: Date | null;
            startedAt: Date | null;
            amberNotifiedAt: Date | null;
            defaultedAt: Date | null;
            deliverableUrl: string | null;
            directiveId: string | null;
            kpiDefinitionId: string | null;
        })[];
    }>;
    listAssignableEmployees(user: AuthenticatedUser): Promise<{
        id: string;
        surname: string;
        firstName: string;
        middleName: string | null;
    }[]>;
    assign(dto: AssignTaskDto, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").TaskStatus;
        createdAt: Date;
        description: string | null;
        title: string;
        completedAt: Date | null;
        assigneeEmployeeId: string;
        assignedByUserId: string;
        dueAt: Date | null;
        startedAt: Date | null;
        amberNotifiedAt: Date | null;
        defaultedAt: Date | null;
        deliverableUrl: string | null;
        directiveId: string | null;
        kpiDefinitionId: string | null;
    }>;
    getMyDayVsScorecard(user: AuthenticatedUser): Promise<{
        tasks: never[];
        employeeId?: undefined;
    } | {
        employeeId: string;
        tasks: ({
            kpiDefinition: {
                id: string;
                kraCode: string;
                kpiText: string;
            } | null;
        } & {
            id: string;
            status: import("../../generated/prisma/enums").TaskStatus;
            createdAt: Date;
            description: string | null;
            title: string;
            completedAt: Date | null;
            assigneeEmployeeId: string;
            assignedByUserId: string;
            dueAt: Date | null;
            startedAt: Date | null;
            amberNotifiedAt: Date | null;
            defaultedAt: Date | null;
            deliverableUrl: string | null;
            directiveId: string | null;
            kpiDefinitionId: string | null;
        })[];
    }>;
    listTasksForKpi(kpiDefinitionId: string, employeeId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").TaskStatus;
        createdAt: Date;
        description: string | null;
        title: string;
        completedAt: Date | null;
        assigneeEmployeeId: string;
        assignedByUserId: string;
        dueAt: Date | null;
        startedAt: Date | null;
        amberNotifiedAt: Date | null;
        defaultedAt: Date | null;
        deliverableUrl: string | null;
        directiveId: string | null;
        kpiDefinitionId: string | null;
    }[]>;
    createSubmission(dto: CreateSubmissionDto, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").TaskSubmissionStatus;
        createdAt: Date;
        description: string | null;
        decidedAt: Date | null;
        title: string;
        deliverableUrl: string | null;
        submittedByEmployeeId: string;
        supervisorEmployeeId: string;
        acceptedTaskId: string | null;
    }>;
    listMySubmissions(user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").TaskSubmissionStatus;
        createdAt: Date;
        description: string | null;
        decidedAt: Date | null;
        title: string;
        deliverableUrl: string | null;
        submittedByEmployeeId: string;
        supervisorEmployeeId: string;
        acceptedTaskId: string | null;
    }[]>;
    listSubmissionsToDecide(user: AuthenticatedUser): Promise<({
        submittedBy: {
            surname: string;
            firstName: string;
            middleName: string | null;
        };
    } & {
        id: string;
        status: import("../../generated/prisma/enums").TaskSubmissionStatus;
        createdAt: Date;
        description: string | null;
        decidedAt: Date | null;
        title: string;
        deliverableUrl: string | null;
        submittedByEmployeeId: string;
        supervisorEmployeeId: string;
        acceptedTaskId: string | null;
    })[]>;
    acceptSubmission(id: string, user: AuthenticatedUser): Promise<{
        submission: {
            id: string;
            status: import("../../generated/prisma/enums").TaskSubmissionStatus;
            createdAt: Date;
            description: string | null;
            decidedAt: Date | null;
            title: string;
            deliverableUrl: string | null;
            submittedByEmployeeId: string;
            supervisorEmployeeId: string;
            acceptedTaskId: string | null;
        };
        task: {
            id: string;
            status: import("../../generated/prisma/enums").TaskStatus;
            createdAt: Date;
            description: string | null;
            title: string;
            completedAt: Date | null;
            assigneeEmployeeId: string;
            assignedByUserId: string;
            dueAt: Date | null;
            startedAt: Date | null;
            amberNotifiedAt: Date | null;
            defaultedAt: Date | null;
            deliverableUrl: string | null;
            directiveId: string | null;
            kpiDefinitionId: string | null;
        };
    }>;
    declineSubmission(id: string, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").TaskSubmissionStatus;
        createdAt: Date;
        description: string | null;
        decidedAt: Date | null;
        title: string;
        deliverableUrl: string | null;
        submittedByEmployeeId: string;
        supervisorEmployeeId: string;
        acceptedTaskId: string | null;
    }>;
    start(id: string, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").TaskStatus;
        createdAt: Date;
        description: string | null;
        title: string;
        completedAt: Date | null;
        assigneeEmployeeId: string;
        assignedByUserId: string;
        dueAt: Date | null;
        startedAt: Date | null;
        amberNotifiedAt: Date | null;
        defaultedAt: Date | null;
        deliverableUrl: string | null;
        directiveId: string | null;
        kpiDefinitionId: string | null;
    }>;
    complete(id: string, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").TaskStatus;
        createdAt: Date;
        description: string | null;
        title: string;
        completedAt: Date | null;
        assigneeEmployeeId: string;
        assignedByUserId: string;
        dueAt: Date | null;
        startedAt: Date | null;
        amberNotifiedAt: Date | null;
        defaultedAt: Date | null;
        deliverableUrl: string | null;
        directiveId: string | null;
        kpiDefinitionId: string | null;
    }>;
    setDeliverableUrl(id: string, dto: SetDeliverableUrlDto, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").TaskStatus;
        createdAt: Date;
        description: string | null;
        title: string;
        completedAt: Date | null;
        assigneeEmployeeId: string;
        assignedByUserId: string;
        dueAt: Date | null;
        startedAt: Date | null;
        amberNotifiedAt: Date | null;
        defaultedAt: Date | null;
        deliverableUrl: string | null;
        directiveId: string | null;
        kpiDefinitionId: string | null;
    }>;
}
