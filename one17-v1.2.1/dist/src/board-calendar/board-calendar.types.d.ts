export declare class BoardCalendarError extends Error {
    constructor(message: string);
}
export interface CreateBoardCalendarEventInput {
    title: string;
    description?: string;
    committeeTag?: string;
    startsAt: Date;
    endsAt?: Date;
}
export interface SubmitReportPackInput {
    calendarEventId: string;
    title: string;
    fileReference: string;
}
