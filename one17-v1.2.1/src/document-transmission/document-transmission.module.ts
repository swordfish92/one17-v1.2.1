import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { NotificationModule } from '../notification/notification.module';
import { TaskModule } from '../task/task.module';
import { DocumentTransmissionService } from './document-transmission.service';

@Module({
  imports: [AuditModule, DelegationModule, NotificationModule, TaskModule],
  providers: [DocumentTransmissionService],
  exports: [DocumentTransmissionService],
})
export class DocumentTransmissionModule {}
