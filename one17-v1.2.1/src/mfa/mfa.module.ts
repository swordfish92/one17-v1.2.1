import { Module, forwardRef } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { AuditModule } from '../audit/audit.module';
import { AuthModule } from '../auth/auth.module';
import { DelegationModule } from '../delegation/delegation.module';
import { MfaService } from './mfa.service';
import { MfaController } from './mfa.controller';

// forwardRef both ways with AuthModule: AuthService needs MfaService
// (isMfaMandatory at login), MfaController needs AuthModule's
// SessionAuthGuard/CapabilityGuard to protect its own routes. Neither
// service depends on the other directly (MfaService has zero AuthService
// dependency) -- this is a module-graph cycle only, the standard case
// forwardRef exists for.
//
// DelegationModule is imported directly (not just transitively via
// AuthModule) because CapabilityGuard's own DelegationService dependency
// must be resolvable within THIS module's scope wherever the guard is
// used from -- the same pattern ops-api.module.ts already documents for
// its own controllers. Missing this import compiles clean (tsc has no
// visibility into Nest's runtime DI graph) but fails at boot with
// UnknownDependenciesException -- caught here by the compiled boot check
// (npm run smoke:boot), not by any smoke test that constructs services
// directly with `new` rather than through Nest's container.
@Module({
  imports: [PrismaModule, AuditModule, DelegationModule, forwardRef(() => AuthModule)],
  controllers: [MfaController],
  providers: [MfaService],
  exports: [MfaService],
})
export class MfaModule {}
