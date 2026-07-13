import { Controller, Get, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { BdService } from '../bd/bd.service';

// Invariant 27(c): thin adapter over BdService's live derivation — no
// business logic here, no stored register, just VIEW-gated read access.
@Controller('bd')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class BdController {
  constructor(private readonly bd: BdService) {}

  @Get('register')
  @RequiresCapability('BD_REGISTER', 'VIEW')
  async getRegister(@CurrentUser() user: AuthenticatedUser) {
    return this.bd.getRegister(user.userId);
  }
}
