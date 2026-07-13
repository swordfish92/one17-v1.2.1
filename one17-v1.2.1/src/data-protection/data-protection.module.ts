import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { PrivacyNoticeService } from './privacy-notice.service';
import { RetentionScheduleService } from './retention-schedule.service';
import { DataBreachRegisterService } from './data-breach-register.service';

// Invariant 57 (CHECK15, NDPA/GAID compliance pack): build items (i) privacy
// notice + acknowledgment log, (iii) retention schedule registry, (iv)
// breach register. Item (ii) DSR intake lives on ComplaintModule (the
// Enquiries channel, not a parallel module); item (v) AI minimization lives
// in AiModule.
@Module({
  imports: [AuditModule],
  providers: [PrivacyNoticeService, RetentionScheduleService, DataBreachRegisterService],
  exports: [PrivacyNoticeService, RetentionScheduleService, DataBreachRegisterService],
})
export class DataProtectionModule {}
