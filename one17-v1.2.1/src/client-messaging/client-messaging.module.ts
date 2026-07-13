import { Module } from '@nestjs/common';
import { DelegationModule } from '../delegation/delegation.module';
import { AuditModule } from '../audit/audit.module';
import { ClientMessagingService } from './client-messaging.service';

@Module({
  imports: [DelegationModule, AuditModule],
  providers: [ClientMessagingService],
  exports: [ClientMessagingService],
})
export class ClientMessagingModule {}
