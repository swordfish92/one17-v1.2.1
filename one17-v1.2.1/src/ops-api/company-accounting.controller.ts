import { Controller, Get, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { LedgerService } from '../ledger/ledger.service';

// CHECK5 item 5i: "Company Accounting (P&L, income mix, inter-entity
// reconciliation)" per CLAUDE.md's screen inventory. Balance Sheet/Income
// Statement/GL for the COMPANY entity reuse FundAccountingController's
// generic (entity-agnostic) endpoints directly — Company Accounting is
// always ledger entity COMPANY, never a toggle, so the ops-UI page calls
// GET /fund-accounting/COMPANY/... rather than a duplicate route. The one
// company-specific surface is inter-entity reconciliation, which no other
// screen needs.
@Controller('company-accounting')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class CompanyAccountingController {
  constructor(private readonly ledger: LedgerService) {}

  @Get('inter-entity-reconciliation')
  @RequiresCapability('FINANCIAL_STATEMENTS', 'VIEW')
  async listInterEntityReconciliations() {
    return this.ledger.listInterEntityReconciliations('COMPANY');
  }
}
