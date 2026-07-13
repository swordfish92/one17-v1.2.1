import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import type { Response } from 'express';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { SettingsRegistryService } from '../settings-registry/settings-registry.service';

// Invariant 39(e): the unified Settings area. No @RequiresCapability at
// the class/route level — each entry in the registry is already gated by
// its OWN owning capability (see SettingsRegistryService), so a plain
// authenticated session is the floor, same precedent as
// DocumentController's listByEntity.
@Controller('settings-registry')
@UseGuards(SessionAuthGuard)
export class SettingsRegistryController {
  constructor(private readonly registry: SettingsRegistryService) {}

  @Get()
  async list(@CurrentUser() user: AuthenticatedUser) {
    return this.registry.getRegistry(user.userId);
  }

  @Get('export')
  async export(@CurrentUser() user: AuthenticatedUser, @Res() res: Response) {
    const snapshot = await this.registry.exportForAuditor(user.userId);
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', `attachment; filename="settings-audit-export-${Date.now()}.json"`);
    // BigInt fields serialize via the global BigInt.prototype.toJSON patch
    // (invariant 30, installed at bootstrap) — no per-call replacer needed.
    res.send(JSON.stringify(snapshot, null, 2));
  }
}
