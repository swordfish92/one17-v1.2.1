import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { NotificationModule } from '../notification/notification.module';
import { DocumentModule } from '../document/document.module';
import { ScreeningGatewayService } from './screening-gateway.service';

@Module({
  imports: [AuditModule, DelegationModule, WorkflowModule, NotificationModule, DocumentModule],
  providers: [ScreeningGatewayService],
  exports: [ScreeningGatewayService],
})
export class ScreeningGatewayModule {}
