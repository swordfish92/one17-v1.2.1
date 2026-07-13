import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { PortalAuthModule } from '../portal-auth/portal-auth.module';
import { CounterpartyModule } from '../counterparty/counterparty.module';
import { ComplaintModule } from '../complaint/complaint.module';
import { BureauGatewayModule } from '../bureau-gateway/bureau-gateway.module';
import { LetterModule } from '../letter/letter.module';
import { PortalCounterpartyController } from './portal-counterparty.controller';

// Same reasoning as PortalWmModule: its own module, wired directly into
// AppModule (not nested in OpsApiModule), keeping the separate-realm
// boundary visible in the module graph.
@Module({
  imports: [AuditModule, PortalAuthModule, CounterpartyModule, ComplaintModule, BureauGatewayModule, LetterModule],
  controllers: [PortalCounterpartyController],
})
export class PortalCounterpartyModule {}
