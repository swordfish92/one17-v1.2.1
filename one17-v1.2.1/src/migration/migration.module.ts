import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { MigrationService } from './migration.service';

@Module({
  imports: [AuditModule, DelegationModule],
  providers: [MigrationService],
  exports: [MigrationService],
})
export class MigrationModule {}
