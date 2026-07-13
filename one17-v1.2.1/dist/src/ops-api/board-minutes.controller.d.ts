import type { AuthenticatedUser } from '../auth/auth.types';
import { BoardMinutesService } from '../board-minutes/board-minutes.service';
import { UploadBoardMinutesDto, TransmitBoardMinutesDto } from './ops-api.types';
export declare class BoardMinutesController {
    private readonly boardMinutes;
    constructor(boardMinutes: BoardMinutesService);
    list(user: AuthenticatedUser): Promise<({
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
    get(id: string, user: AuthenticatedUser): Promise<{
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
    upload(dto: UploadBoardMinutesDto, user: AuthenticatedUser): Promise<{
        id: string;
        createdAt: Date;
        fileReference: string;
        uploadedByUserId: string;
        title: string;
        committeeTag: string | null;
    }>;
    transmit(id: string, dto: TransmitBoardMinutesDto, user: AuthenticatedUser): Promise<{
        id: string;
        acknowledgedAt: Date | null;
        transmittedByUserId: string;
        recipientUserId: string;
        minutesId: string;
        transmittedAt: Date;
    }>;
    acknowledge(id: string, user: AuthenticatedUser): Promise<{
        id: string;
        acknowledgedAt: Date | null;
        transmittedByUserId: string;
        recipientUserId: string;
        minutesId: string;
        transmittedAt: Date;
    }>;
}
