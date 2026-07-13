import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
export declare class AppController {
    private readonly appService;
    private readonly prisma;
    constructor(appService: AppService, prisma: PrismaService);
    getHello(): string;
    getVersion(): {
        commit: string;
        builtAt: string;
    };
    getHealth(): {
        status: 'ok';
        uptimeSeconds: number;
    };
    getReady(): Promise<{
        status: 'ready';
        checks: {
            database: 'ok';
        };
    }>;
}
