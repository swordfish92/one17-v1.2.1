export type Cadence = {
    type: 'DAILY';
    hour: number;
    minute: number;
} | {
    type: 'MONTHLY';
    dayOfMonth: number;
    hour: number;
    minute: number;
} | {
    type: 'QUARTERLY';
    hour: number;
    minute: number;
} | {
    type: 'INTERVAL_MINUTES';
    minutes: number;
};
export declare class PartialJobFailure extends Error {
    readonly summary: Record<string, unknown>;
    constructor(message: string, summary: Record<string, unknown>);
}
export interface ScheduledJobConfig {
    code: string;
    description: string;
    cadence: Cadence;
    run: (scheduledFor: Date) => Promise<Record<string, unknown>>;
}
