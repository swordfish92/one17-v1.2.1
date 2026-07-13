export type NotificationType = 'TASK_ASSIGNED' | 'PERSONAL_RECORD_CHANGE_DECIDED' | 'GENERIC' | 'SCHEDULER_JOB_FAILED';
export type CreateNotificationInput = {
    recipientUserId: string;
    recipientInvestorId?: never;
    type: NotificationType;
    title: string;
    body: string;
    linkPath?: string;
} | {
    recipientUserId?: never;
    recipientInvestorId: string;
    type: NotificationType;
    title: string;
    body: string;
    linkPath?: string;
};
