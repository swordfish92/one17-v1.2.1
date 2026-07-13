import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { DashboardComposerService } from './dashboard-composer.service';

@Module({
  imports: [AuditModule, DelegationModule],
  providers: [DashboardComposerService],
  exports: [DashboardComposerService],
})
export class DashboardComposerModule {}
