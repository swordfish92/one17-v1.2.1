import { Module } from '@nestjs/common';
import { DelegationModule } from '../delegation/delegation.module';
import { BackupService } from './backup.service';

@Module({
  imports: [DelegationModule],
  providers: [BackupService],
  exports: [BackupService],
})
export class BackupModule {}
