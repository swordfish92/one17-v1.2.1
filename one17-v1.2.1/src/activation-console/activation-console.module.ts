import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { LedgerModule } from '../ledger/ledger.module';
import { PeriodModule } from '../period/period.module';
import { TaskModule } from '../task/task.module';
import { ActivationConsoleService } from './activation-console.service';

@Module({
  imports: [AuditModule, DelegationModule, LedgerModule, PeriodModule, TaskModule],
  providers: [ActivationConsoleService],
  exports: [ActivationConsoleService],
})
export class ActivationConsoleModule {}
