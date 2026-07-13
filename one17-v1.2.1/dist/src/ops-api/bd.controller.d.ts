import type { AuthenticatedUser } from '../auth/auth.types';
import { BdService } from '../bd/bd.service';
export declare class BdController {
    private readonly bd;
    constructor(bd: BdService);
    getRegister(user: AuthenticatedUser): Promise<import("../bd/bd.types").BdRegisterRow[]>;
}
