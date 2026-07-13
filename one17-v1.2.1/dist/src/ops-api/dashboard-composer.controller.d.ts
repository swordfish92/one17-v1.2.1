import type { AuthenticatedUser } from '../auth/auth.types';
import { DashboardComposerService } from '../dashboard-composer/dashboard-composer.service';
import { SaveDashboardDto } from './ops-api.types';
export declare class DashboardComposerController {
    private readonly composer;
    constructor(composer: DashboardComposerService);
    listComposableMetrics(user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        version: number;
        requiredFunctionCode: string | null;
        createdByUserId: string;
        metricCode: string;
        displayLabel: string;
        screenCode: string;
        businessMeaning: string;
        sourceTablesAndJoins: string;
        inclusionExclusionRules: string;
        ownerRoleCode: string;
        ledgerReconcilable: boolean;
        supersededByMetricId: string | null;
        composerResolverKey: string | null;
    }[]>;
    listMyDashboards(user: AuthenticatedUser): Promise<({
        tiles: {
            id: string;
            createdAt: Date;
            metricCode: string;
            dashboardId: string;
            presentation: import("../../generated/prisma/enums").TilePresentation;
            position: number;
        }[];
    } & {
        id: string;
        updatedAt: Date;
        createdAt: Date;
        name: string;
        orgUnitCode: string | null;
        ownerUserId: string;
        scope: import("../../generated/prisma/enums").DashboardScope;
    })[]>;
    getDashboard(id: string, user: AuthenticatedUser): Promise<{
        tiles: ({
            id: string;
            createdAt: Date;
            metricCode: string;
            dashboardId: string;
            presentation: import("../../generated/prisma/enums").TilePresentation;
            position: number;
        } & {
            label: string;
            value: unknown;
            ragStatus?: string;
            note?: string;
            redacted: boolean;
        })[];
        id: string;
        updatedAt: Date;
        createdAt: Date;
        name: string;
        orgUnitCode: string | null;
        ownerUserId: string;
        scope: import("../../generated/prisma/enums").DashboardScope;
    }>;
    saveDashboard(dto: SaveDashboardDto, user: AuthenticatedUser): Promise<{
        tiles: {
            id: string;
            createdAt: Date;
            metricCode: string;
            dashboardId: string;
            presentation: import("../../generated/prisma/enums").TilePresentation;
            position: number;
        }[];
    } & {
        id: string;
        updatedAt: Date;
        createdAt: Date;
        name: string;
        orgUnitCode: string | null;
        ownerUserId: string;
        scope: import("../../generated/prisma/enums").DashboardScope;
    }>;
    deleteDashboard(id: string, user: AuthenticatedUser): Promise<{
        deleted: boolean;
    }>;
}
