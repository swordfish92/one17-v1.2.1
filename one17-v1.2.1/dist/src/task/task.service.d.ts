import { PrismaService } from '../prisma/prisma.service';
import { NotificationService } from '../notification/notification.service';
import { AssignTaskInput, SystemAssignTaskInput } from './task.types';
export declare class TaskService {
    private readonly prisma;
    private readonly notification;
    constructor(prisma: PrismaService, notification: NotificationService);
    assignTask(input: AssignTaskInput): Promise<{
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
    systemAssignTask(input: SystemAssignTaskInput): Promise<{
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
    listMine(employeeId: string): Promise<{
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
    listDirectReportsTasks(managerEmployeeId: string): Promise<({
        assigneeEmployee: {
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
    })[]>;
    startTask(taskId: string, actorUserId: string): Promise<{
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
    completeTask(taskId: string, actorUserId: string): Promise<{
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
    setDeliverableUrl(taskId: string, deliverableUrl: string, actorUserId: string): Promise<{
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
    listSubordinateEmployeeIds(supervisorEmployeeId: string): Promise<string[]>;
    listSubordinateTasks(supervisorEmployeeId: string): Promise<({
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
    })[]>;
    listForTasksPage(actorUserId: string, filters?: {
        status?: string;
        orgUnitCode?: string;
    }): Promise<{
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
    listAssignableEmployees(actorUserId: string): Promise<{
        id: string;
        surname: string;
        firstName: string;
        middleName: string | null;
    }[]>;
    private assertOwnTask;
    private assertKpiInScorecard;
    getMyDayVsScorecard(actorUserId: string): Promise<{
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
    listTasksForKpi(employeeId: string, kpiDefinitionId: string): Promise<{
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
    createSubmission(actorUserId: string, input: {
        title: string;
        description?: string;
        deliverableUrl?: string;
    }): Promise<{
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
    listMySubmissions(actorUserId: string): Promise<{
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
    listSubmissionsToDecide(actorUserId: string): Promise<({
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
    acceptSubmission(submissionId: string, actorUserId: string): Promise<{
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
    declineSubmission(submissionId: string, actorUserId: string): Promise<{
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
    runEscalationSweep(now: Date): Promise<{
        checked: number;
        amberFired: number;
        defaulted: number;
    }>;
    private fireAmberNotice;
    private defaultTask;
    private roleHolderUserIds;
    countDefaultedTasks(employeeId: string): Promise<number>;
    listEmployeeIdsWithDefaultedTasks(): Promise<string[]>;
}
