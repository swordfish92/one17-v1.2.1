import { Module } from '@nestjs/common';
import { ShariahGovernanceService } from './shariah-governance.service';

@Module({
  providers: [ShariahGovernanceService],
  exports: [ShariahGovernanceService],
})
export class ShariahGovernanceModule {}
