import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { BureauGatewayService } from './bureau-gateway.service';

@Module({
  imports: [AuditModule, DelegationModule],
  providers: [BureauGatewayService],
  exports: [BureauGatewayService],
})
export class BureauGatewayModule {}
