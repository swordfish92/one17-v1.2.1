export declare class CalendarError extends Error {
    constructor(message: string);
}
export interface CreatePersonalEntryInput {
    title: string;
    description?: string;
    startsAt: Date;
    endsAt?: Date;
    reminderLeadMinutes?: number;
}
export interface UpdatePersonalEntryInput {
    title?: string;
    description?: string;
    startsAt?: Date;
    endsAt?: Date;
    reminderLeadMinutes?: number;
}
export interface CreateMeetingInput {
    title: string;
    description?: string;
    startsAt: Date;
    endsAt?: Date;
    attendeeUserIds: string[];
    reminderLeadMinutes?: number;
}
export interface BusyBlock {
    startsAt: Date;
    endsAt: Date;
}
