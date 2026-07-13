import type { Response } from 'express';
import type { AuthenticatedUser } from '../auth/auth.types';
import { SettingsRegistryService } from '../settings-registry/settings-registry.service';
export declare class SettingsRegistryController {
    private readonly registry;
    constructor(registry: SettingsRegistryService);
    list(user: AuthenticatedUser): Promise<{
        rowCount: any;
        domain: string;
        label: string;
        capability: string;
        screenPath: string;
        table: string;
    }[]>;
    export(user: AuthenticatedUser, res: Response): Promise<void>;
}
