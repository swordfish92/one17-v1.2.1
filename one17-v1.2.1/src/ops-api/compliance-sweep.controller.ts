import { Controller, Get, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { InvestorComplianceSweepService } from '../investor/investor-compliance-sweep.service';

// Invariant 51(b-vii)/(b-viii)/(c) (CHECK13): the one real landing page the
// three detection sweeps' Tasks link to (deliverableUrl) -- neither the
// investor nor counterparty onboarding-case screens have a per-record route
// for an already-COMPLETE_APPROVED case, so this consolidated Compliance
// Queue is the actionable surface, not a per-entity deep link that doesn't
// exist. Record-review/record-screening actions themselves stay on the
// existing InvestorsController/CounterpartyController endpoints -- this
// controller is read-only.
@Controller('compliance')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class ComplianceSweepController {
  constructor(private readonly sweep: InvestorComplianceSweepService) {}

  @Get('queue')
  @RequiresCapability('SCREENING_PERFORM', 'VIEW')
  async getQueue() {
    return this.sweep.listComplianceQueue(new Date());
  }
}
