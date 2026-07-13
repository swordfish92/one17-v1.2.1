import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { KriEngineService } from './kri-engine.service';

@Module({
  imports: [AuditModule],
  providers: [KriEngineService],
  exports: [KriEngineService],
})
export class KriEngineModule {}
