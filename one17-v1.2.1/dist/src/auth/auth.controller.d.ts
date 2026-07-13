import type { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './auth.types';
import type { AuthenticatedUser } from './auth.types';
import { PrismaService } from '../prisma/prisma.service';
import { DelegationService } from '../delegation/delegation.service';
export declare class AuthController {
    private readonly authService;
    private readonly prisma;
    private readonly delegation;
    constructor(authService: AuthService, prisma: PrismaService, delegation: DelegationService);
    login(dto: LoginDto, req: Request, res: Response): Promise<{
        userId: string;
        mfaRequired: boolean;
        mfaEnrolled: boolean;
    }>;
    logout(req: Request, res: Response): Promise<{
        ok: boolean;
    }>;
    me(user: AuthenticatedUser): Promise<{
        userId: string;
        email: string;
        displayName: string;
        capabilities: Record<string, ("APPROVE" | "INITIATE" | "VIEW")[]>;
    }>;
}
