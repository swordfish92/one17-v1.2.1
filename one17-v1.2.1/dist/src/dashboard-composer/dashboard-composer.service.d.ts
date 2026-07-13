import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { SaveDashboardInput } from './dashboard-composer.types';
export declare class DashboardComposerService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService);
    listComposableMetrics(actorUserId: string): Promise<{
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
    private actorOrgUnitCode;
    saveDashboard(input: SaveDashboardInput, actorUserId: string): Promise<{
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
    listMyDashboards(actorUserId: string): Promise<({
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
    getDashboard(dashboardId: string, viewerUserId: string): Promise<{
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
    deleteDashboard(dashboardId: string, actorUserId: string): Promise<void>;
}
