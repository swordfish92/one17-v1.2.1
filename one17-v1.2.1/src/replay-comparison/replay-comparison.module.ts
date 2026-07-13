import { Module } from '@nestjs/common';
import { HalalFundEngineModule } from '../engine-halal-fund/halal-fund-engine.module';
import { ReplayComparisonService } from './replay-comparison.service';

@Module({
  imports: [HalalFundEngineModule],
  providers: [ReplayComparisonService],
  exports: [ReplayComparisonService],
})
export class ReplayComparisonModule {}
