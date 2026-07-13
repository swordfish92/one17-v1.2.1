import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { WmModule } from '../wm/wm.module';
import { NotificationModule } from '../notification/notification.module';
import { ZakatService } from './zakat.service';

@Module({
  imports: [AuditModule, DelegationModule, WorkflowModule, WmModule, NotificationModule],
  providers: [ZakatService],
  exports: [ZakatService],
})
export class ZakatModule {}
