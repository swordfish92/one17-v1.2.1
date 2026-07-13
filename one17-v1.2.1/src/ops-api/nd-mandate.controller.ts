import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { NdMandateEngineService } from '../engine-nd-mandate/nd-mandate-engine.service';

// CHECK5 item 5m: "ND Mandate (register + deal-consent queue)" per
// CLAUDE.md's ops-UI screen inventory. Gated on KYC_MANDATE VIEW — the
// existing function code covering mandate setup/review elsewhere in this
// codebase (SRS §6.1's "KYC / Mandate" module), not a new capability.
@Controller('nd-mandate')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class NdMandateController {
  constructor(private readonly ndMandate: NdMandateEngineService) {}

  @Get('accounts')
  @RequiresCapability('KYC_MANDATE', 'VIEW')
  async listAccounts(@Query('ledgerEntityCode') ledgerEntityCode?: string) {
    const accounts = await this.ndMandate.listAccounts(ledgerEntityCode);
    return accounts.map((a) => ({
      ...a,
      investorRatio: a.investorRatio?.toString() ?? null,
      mudaribRatio: a.mudaribRatio?.toString() ?? null,
      wakalahFeeRatePa: a.wakalahFeeRatePa?.toString() ?? null,
      sharedRatio: a.sharedRatio?.toString() ?? null,
      targetReturnPct: a.targetReturnPct?.toString() ?? null,
    }));
  }

  @Get('provisional-accruals/aging')
  @RequiresCapability('KYC_MANDATE', 'VIEW')
  async listAgingProvisionals(@Query('thresholdDays') thresholdDays?: string) {
    return this.ndMandate.listAgingProvisionals(thresholdDays ? Number(thresholdDays) : 30);
  }
}
