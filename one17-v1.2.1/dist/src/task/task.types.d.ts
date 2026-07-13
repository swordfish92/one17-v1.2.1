export declare class TaskError extends Error {
    constructor(message: string);
}
export interface AssignTaskInput {
    title: string;
    description?: string;
    assigneeEmployeeId: string;
    dueAt?: Date;
    assignedByUserId: string;
    deliverableUrl?: string;
    kpiDefinitionId?: string;
}
export interface SystemAssignTaskInput {
    title: string;
    description?: string;
    assigneeEmployeeId: string;
    assignedByUserId: string;
    dueAt?: Date;
    linkPath?: string;
    deliverableUrl?: string;
}
