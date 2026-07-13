import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { Controller, Get, ServiceUnavailableException } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Deployment package item 6 (invariant 41): install-one17.ps1 stamps
  // dist/VERSION.json with the git commit deployed and the build
  // timestamp — this just exposes it over HTTP so ops/monitoring can
  // confirm what's actually running without filesystem access. Read at
  // request time (not cached at boot) so it's correct even if something
  // ever hot-patches the file without a full service restart; falls back
  // to 'unknown' in dev, where no installer has run.
  @Get('version')
  getVersion(): { commit: string; builtAt: string } {
    try {
      const raw = readFileSync(join(__dirname, 'VERSION.json'), 'utf-8');
      return JSON.parse(raw);
    } catch {
      return { commit: 'unknown (dev checkout, no install-one17.ps1 run)', builtAt: 'unknown' };
    }
  }

  // CHECK16 62(a): an unauthenticated liveness probe for the reverse proxy
  // and any external monitor — deliberately process-only (no DB round-trip),
  // matching /version's shape. A DB-connectivity check belongs to a real
  // readiness probe, out of this pass's scope; this closes the external
  // review's "missing health check" finding.
  @Get('health')
  getHealth(): { status: 'ok'; uptimeSeconds: number } {
    return { status: 'ok', uptimeSeconds: Math.round(process.uptime()) };
  }

  // RES-001 item 3 (CHECK23, v1.0.2): a genuine READINESS probe, distinct
  // from /health's deliberate process-only liveness check above (invariant
  // 62a's own comment already named this exact gap: "a real readiness
  // probe... out of this pass's scope"). FAIL-CLOSED by construction: the
  // only path to a 200 is the DB round-trip actually succeeding inside the
  // try block. Any exception -- a real outage, a query timeout, a bug in a
  // future check added to this same try block -- falls through to the
  // catch and reports 503, never a false-positive 200 from a swallowed
  // error. See RUNBOOK.md's "Readiness probe (GET /ready)" section for
  // what an operator/load-balancer should do with that 503.
  @Get('ready')
  async getReady(): Promise<{ status: 'ready'; checks: { database: 'ok' } }> {
    try {
      await this.prisma.$queryRaw`SELECT 1`;
    } catch {
      throw new ServiceUnavailableException({ status: 'not_ready', checks: { database: 'fail' } });
    }
    return { status: 'ready', checks: { database: 'ok' } };
  }
}
