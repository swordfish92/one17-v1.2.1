import { Module, forwardRef } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { MfaModule } from '../mfa/mfa.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SessionAuthGuard } from './session-auth.guard';
import { CapabilityGuard } from './capability.guard';

@Module({
  imports: [PrismaModule, AuditModule, DelegationModule, forwardRef(() => MfaModule)],
  controllers: [AuthController],
  providers: [AuthService, SessionAuthGuard, CapabilityGuard],
  exports: [AuthService, SessionAuthGuard, CapabilityGuard],
})
export class AuthModule {}
