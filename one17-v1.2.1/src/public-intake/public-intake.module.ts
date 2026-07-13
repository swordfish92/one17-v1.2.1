import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { InvestorModule } from '../investor/investor.module';
import { CounterpartyModule } from '../counterparty/counterparty.module';
import { DataProtectionModule } from '../data-protection/data-protection.module';
import { PublicIntakeService } from './public-intake.service';

@Module({
  imports: [AuditModule, DelegationModule, InvestorModule, CounterpartyModule, DataProtectionModule],
  providers: [PublicIntakeService],
  exports: [PublicIntakeService],
})
export class PublicIntakeModule {}
