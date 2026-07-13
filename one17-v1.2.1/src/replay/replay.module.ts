import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { ReplayService } from './replay.service';

@Module({
  imports: [AuditModule, DelegationModule],
  providers: [ReplayService],
  exports: [ReplayService],
})
export class ReplayModule {}
