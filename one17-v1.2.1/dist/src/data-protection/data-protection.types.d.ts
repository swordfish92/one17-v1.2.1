import { PrivacyNoticeContext, BreachSeverity } from '../../generated/prisma/client';
export { PrivacyNoticeContext, BreachSeverity };
export declare class DataProtectionError extends Error {
    constructor(message: string);
}
export interface RecordPrivacyNoticeAcknowledgmentInput {
    noticeVersion: number;
    context: PrivacyNoticeContext;
    investorId?: string;
    counterpartyId?: string;
    publicIntakeSubmissionId?: string;
    ipAddress?: string;
}
export interface UpsertRetentionScheduleEntryInput {
    dataClass: string;
    description?: string;
    retentionPeriodMonths?: number;
    statutoryBasis?: string;
    disposalTreatment?: string;
}
export interface ConfirmRetentionScheduleEntryInput {
    entryId: string;
    retentionPeriodMonths: number;
    statutoryBasis: string;
    disposalTreatment: string;
    actorUserId: string;
}
export interface LogBreachInput {
    discoveredAt: Date;
    discoveredByUserId: string;
    description: string;
    affectedDataClasses: string[];
    estimatedAffectedSubjects?: number;
}
export interface AssessBreachInput {
    breachId: string;
    severity: BreachSeverity;
    likelyHighRisk: boolean;
    assessmentNotes?: string;
    dataSubjectsNotificationRequired: boolean;
    actorUserId: string;
}
export interface RecordNdpcNotificationInput {
    breachId: string;
    actorUserId: string;
}
export interface RecordDataSubjectNotificationInput {
    breachId: string;
    actorUserId: string;
}
export interface CloseBreachInput {
    breachId: string;
    postIncidentNotes: string;
    actorUserId: string;
}
