import { PrismaService } from '../prisma/prisma.service';
import { ResolvedTileValue } from './dashboard-composer.types';
export declare const COMPOSABLE_METRIC_REGISTRY: Record<string, (prisma: PrismaService, viewerUserId: string) => Promise<ResolvedTileValue>>;
