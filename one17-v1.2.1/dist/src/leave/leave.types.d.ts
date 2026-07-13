export declare class LeaveError extends Error {
}
export interface ApplyForLeaveInput {
    leaveTypeCode: string;
    startDate: string;
    endDate: string;
    reliefOfficerEmployeeId?: string;
    reason?: string;
}
