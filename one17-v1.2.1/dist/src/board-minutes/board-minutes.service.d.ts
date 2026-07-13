import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { NotificationService } from '../notification/notification.service';
import { UploadBoardMinutesInput } from './board-minutes.types';
export declare class BoardMinutesService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly notification;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService, notification: NotificationService);
    uploadMinutes(input: UploadBoardMinutesInput, actorUserId: string): Promise<{
        id: string;
        createdAt: Date;
        fileReference: string;
        uploadedByUserId: string;
        title: string;
        committeeTag: string | null;
    }>;
    transmitMinutes(minutesId: string, recipientUserId: string, actorUserId: string): Promise<{
        id: string;
        acknowledgedAt: Date | null;
        transmittedByUserId: string;
        recipientUserId: string;
        minutesId: string;
        transmittedAt: Date;
    }>;
    acknowledgeTransmission(minutesId: string, actorUserId: string): Promise<{
        id: string;
        acknowledgedAt: Date | null;
        transmittedByUserId: string;
        recipientUserId: string;
        minutesId: string;
        transmittedAt: Date;
    }>;
    listMinutesForViewer(actorUserId: string): Promise<({
        uploadedBy: {
            displayName: string;
        };
        transmissions: {
            acknowledgedAt: Date | null;
            recipientUserId: string;
            transmittedAt: Date;
        }[];
    } & {
        id: string;
        createdAt: Date;
        fileReference: string;
        uploadedByUserId: string;
        title: string;
        committeeTag: string | null;
    })[]>;
    getMinutes(minutesId: string, actorUserId: string): Promise<{
        uploadedBy: {
            displayName: string;
        };
        transmissions: {
            id: string;
            acknowledgedAt: Date | null;
            transmittedByUserId: string;
            recipientUserId: string;
            minutesId: string;
            transmittedAt: Date;
        }[];
    } & {
        id: string;
        createdAt: Date;
        fileReference: string;
        uploadedByUserId: string;
        title: string;
        committeeTag: string | null;
    }>;
    private assertCapability;
}
