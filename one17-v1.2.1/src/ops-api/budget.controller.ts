import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { BudgetExtractionService } from '../budget/budget-extraction.service';
import { BudgetActivationService } from '../budget/budget-activation.service';
import { CreateBudgetVersionDto, RequestEncumbranceDto } from './ops-api.types';

// Invariant 39(b), Tier 2: BUDGET_MANAGEMENT's "propose/load a budget_version"
// step (task 47, Budget Spec §5a) has existed as a full service
// implementation since Phase 3 but had only ever been exercised via the
// one-time TPL_11 CLI loader script (budget-extraction.run.ts) — no live,
// capability-gated screen for an ANNUAL budget cycle going forward. Scoped
// to version-level authoring only (create/list a budget_version shell,
// browse its loaded lines) — per-line manual entry stays the loader
// script's job (driver-based phasing/gates are workbook-derived content,
// not a shape a hand-typed form should invent without spec guidance; see
// QUESTIONS_FOR_REVIEW.md task #168 for the related parked scoping notes).
// BudgetReviewPackService (BUDGET_REVIEW_PACK capability, variance
// reporting) is a separate, also-unwired capability — out of scope here,
// noted in CHECK8_EVIDENCE.md as an adjacent gap, not silently folded in.
@Controller('budget')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class BudgetController {
  constructor(
    private readonly budget: BudgetExtractionService,
    private readonly activation: BudgetActivationService,
  ) {}

  @Get('versions')
  @RequiresCapability('BUDGET_MANAGEMENT', 'VIEW')
  async listVersions() {
    return this.budget.listBudgetVersions();
  }

  @Post('versions')
  @RequiresCapability('BUDGET_MANAGEMENT', 'INITIATE')
  async createVersion(@Body() dto: CreateBudgetVersionDto, @CurrentUser() user: AuthenticatedUser) {
    return this.budget.createBudgetVersion(dto.fiscalYear, dto.scenarioLabel, dto.status, user.userId);
  }

  @Get('versions/:id/lines')
  @RequiresCapability('BUDGET_MANAGEMENT', 'VIEW')
  async listLines(@Param('id') id: string) {
    return this.budget.listBudgetLines(id);
  }

  // Invariant 49(c)/(g)(ii) (CHECK11): the requisitions/encumbrances
  // register — see BudgetActivationService.listEncumbrances's own comment
  // for why this had zero controller wiring until now.
  @Get('encumbrances')
  @RequiresCapability('BUDGET_MANAGEMENT', 'VIEW')
  async listEncumbrances(@CurrentUser() user: AuthenticatedUser) {
    const rows = await this.activation.listEncumbrances(user.userId);
    return rows.map((e) => ({ ...e, amountKobo: e.amountKobo.toString() }));
  }

  @Get('encumbrances/active-lines')
  @RequiresCapability('BUDGET_MANAGEMENT', 'VIEW')
  async listActiveLinesForEncumbrance(@CurrentUser() user: AuthenticatedUser) {
    return this.activation.listActiveBudgetLinesForEncumbrance(user.userId);
  }

  @Post('encumbrances')
  @RequiresCapability('BUDGET_MANAGEMENT', 'INITIATE')
  async requestEncumbrance(@Body() dto: RequestEncumbranceDto, @CurrentUser() user: AuthenticatedUser) {
    const { encumbrance, workflowInstance } = await this.activation.requestEncumbrance(
      dto.budgetLineId,
      BigInt(dto.amountKobo),
      dto.description,
      user.userId,
    );
    return { encumbrance: { ...encumbrance, amountKobo: encumbrance.amountKobo.toString() }, workflowInstanceId: workflowInstance.id };
  }

  @Post('encumbrances/:id/release')
  @RequiresCapability('BUDGET_MANAGEMENT', 'INITIATE')
  async releaseEncumbrance(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    const encumbrance = await this.activation.releaseEncumbrance(id, user.userId);
    return { ...encumbrance, amountKobo: encumbrance.amountKobo.toString() };
  }
}
