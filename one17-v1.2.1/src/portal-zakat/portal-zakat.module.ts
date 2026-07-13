import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { PortalAuthModule } from '../portal-auth/portal-auth.module';
import { ZakatModule } from '../zakat/zakat.module';
import { PortalZakatController } from './portal-zakat.controller';

// Deliberately its own module, imported directly by AppModule (NOT nested
// inside OpsApiModule) — same portal-realm module-graph discipline as
// PortalWmModule/PortalCounterpartyModule.
@Module({
  imports: [AuditModule, PortalAuthModule, ZakatModule],
  controllers: [PortalZakatController],
})
export class PortalZakatModule {}
