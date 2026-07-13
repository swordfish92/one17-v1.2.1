import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { NotificationService } from '../notification/notification.service';
import { TaskService } from '../task/task.service';
import { CreateRepaymentObligationInput } from './counterparty.types';
export declare class PaymentReminderService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly notification;
    private readonly task;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService, notification: NotificationService, task: TaskService);
    createObligation(input: CreateRepaymentObligationInput): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").RepaymentObligationStatus;
        createdAt: Date;
        amountKobo: bigint;
        createdByUserId: string;
        counterpartyId: string;
        paidAt: Date | null;
        facilityApplicationId: string | null;
        dueDate: Date;
        paidByUserId: string | null;
    } & {
        amountKobo: string;
    }>;
    markPaid(obligationId: string, actorUserId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").RepaymentObligationStatus;
        createdAt: Date;
        amountKobo: bigint;
        createdByUserId: string;
        counterpartyId: string;
        paidAt: Date | null;
        facilityApplicationId: string | null;
        dueDate: Date;
        paidByUserId: string | null;
    } & {
        amountKobo: string;
    }>;
    listObligations(counterpartyId: string): Promise<({
        id: string;
        status: import("../../generated/prisma/enums").RepaymentObligationStatus;
        createdAt: Date;
        amountKobo: bigint;
        createdByUserId: string;
        counterpartyId: string;
        paidAt: Date | null;
        facilityApplicationId: string | null;
        dueDate: Date;
        paidByUserId: string | null;
    } & {
        amountKobo: string;
    })[]>;
    listPendingObligations(): Promise<({
        counterparty: {
            legalName: string;
        };
    } & {
        id: string;
        status: import("../../generated/prisma/enums").RepaymentObligationStatus;
        createdAt: Date;
        amountKobo: bigint;
        createdByUserId: string;
        counterpartyId: string;
        paidAt: Date | null;
        facilityApplicationId: string | null;
        dueDate: Date;
        paidByUserId: string | null;
    } & {
        amountKobo: string;
    })[]>;
    private serializeObligation;
    runReminderSweep(now: Date, systemUserId: string): Promise<{
        obligationsChecked: number;
        noticesGenerated: number;
        defaulted: number;
    }>;
    private generateOrFireRung;
    private assignCallTask;
    private assignBureauTask;
    runCreditBureauMonthlySync(now: Date, systemUserId: string): Promise<{
        counterpartiesChecked: number;
        tasksCreated: number;
    }>;
    listPendingDispatchQueue(): Promise<{
        obligation: {
            amountKobo: string;
            counterparty: {
                legalName: string;
            };
            id: string;
            status: import("../../generated/prisma/enums").RepaymentObligationStatus;
            createdAt: Date;
            createdByUserId: string;
            counterpartyId: string;
            paidAt: Date | null;
            facilityApplicationId: string | null;
            dueDate: Date;
            paidByUserId: string | null;
        };
        id: string;
        status: import("../../generated/prisma/enums").PaymentReminderDispatchStatus;
        decidedAt: Date | null;
        decidedByUserId: string | null;
        generatedAt: Date;
        obligationId: string;
        dayOffset: number;
        channels: import("@prisma/client/runtime/client").JsonValue;
    }[]>;
    approveDispatch(queueItemId: string, actorUserId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").PaymentReminderDispatchStatus;
        decidedAt: Date | null;
        decidedByUserId: string | null;
        generatedAt: Date;
        obligationId: string;
        dayOffset: number;
        channels: import("@prisma/client/runtime/client").JsonValue;
    }>;
    rejectDispatch(queueItemId: string, actorUserId: string, reason?: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").PaymentReminderDispatchStatus;
        decidedAt: Date | null;
        decidedByUserId: string | null;
        generatedAt: Date;
        obligationId: string;
        dayOffset: number;
        channels: import("@prisma/client/runtime/client").JsonValue;
    }>;
    listLadderConfig(): Promise<{
        id: string;
        updatedAt: Date;
        createdAt: Date;
        isActive: boolean;
        dayOffset: number;
        channels: import("@prisma/client/runtime/client").JsonValue;
        notifyManagement: boolean;
        createsFollowUpCallTask: boolean;
        isPostGraceDefault: boolean;
    }[]>;
    updateLadderRung(dayOffset: number, updates: {
        channels?: string[];
        notifyManagement?: boolean;
        createsFollowUpCallTask?: boolean;
        isActive?: boolean;
    }, actorUserId: string): Promise<{
        id: string;
        updatedAt: Date;
        createdAt: Date;
        isActive: boolean;
        dayOffset: number;
        channels: import("@prisma/client/runtime/client").JsonValue;
        notifyManagement: boolean;
        createsFollowUpCallTask: boolean;
        isPostGraceDefault: boolean;
    }>;
    private roleHolderUserIds;
    private assertCapability;
}
