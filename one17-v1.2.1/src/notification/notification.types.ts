export type NotificationType = 'TASK_ASSIGNED' | 'PERSONAL_RECORD_CHANGE_DECIDED' | 'GENERIC' | 'SCHEDULER_JOB_FAILED';

// CHECK16 62(b): exactly one recipient field — an AppUser (staff) or an
// Investor (portal). Never both, never neither — mirrors the schema's own
// CHECK constraint, checked again at the application boundary so a caller
// gets an honest error rather than a DB-level failure.
export type CreateNotificationInput =
  | { recipientUserId: string; recipientInvestorId?: never; type: NotificationType; title: string; body: string; linkPath?: string }
  | { recipientUserId?: never; recipientInvestorId: string; type: NotificationType; title: string; body: string; linkPath?: string };
