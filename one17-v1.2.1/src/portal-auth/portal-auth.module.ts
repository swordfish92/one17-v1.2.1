import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DataProtectionModule } from '../data-protection/data-protection.module';
import { PortalAuthService } from './portal-auth.service';
import { PortalSessionAuthGuard } from './portal-session-auth.guard';
import { PortalAuthController } from './portal-auth.controller';

@Module({
  imports: [AuditModule, DataProtectionModule],
  controllers: [PortalAuthController],
  providers: [PortalAuthService, PortalSessionAuthGuard],
  exports: [PortalAuthService, PortalSessionAuthGuard],
})
export class PortalAuthModule {}
