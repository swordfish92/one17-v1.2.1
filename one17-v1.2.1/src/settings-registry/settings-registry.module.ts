import { Module } from '@nestjs/common';
import { DelegationModule } from '../delegation/delegation.module';
import { SettingsRegistryService } from './settings-registry.service';

@Module({
  imports: [DelegationModule],
  providers: [SettingsRegistryService],
  exports: [SettingsRegistryService],
})
export class SettingsRegistryModule {}
