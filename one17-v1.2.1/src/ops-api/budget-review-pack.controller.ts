import { BadRequestException, Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { BudgetReviewPackService } from '../budget-review-pack/budget-review-pack.service';
import { BudgetReviewPackError } from '../budget-review-pack/budget-review-pack.types';
import { GenerateBudgetReviewPackDto } from './ops-api.types';

// CHECK15: task 48 built BudgetReviewPackService in full (Budget Spec §5b)
// but it was never given a controller -- this is the reachability fix,
// not a new capability. Every method below is a thin pass-through; the
// service already does the real work (variance computation, RAG,
// report_run creation, maker!=checker circulation approval).
@Controller('budget-review-pack')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class BudgetReviewPackController {
  constructor(private readonly pack: BudgetReviewPackService) {}

  @Get('variance-preview')
  @RequiresCapability('BUDGET_REVIEW_PACK', 'INITIATE')
  async variancePreview(@Query('budgetVersionId') budgetVersionId: string, @Query('month') month: string) {
    try {
      return await this.pack.computeVarianceView({
        templateCode: 'MONTHLY_MGMT_BUDGET_PACK',
        budgetVersionId,
        month: parseInt(month, 10),
        actualsByLineIdKobo: {},
        generatedByUserId: '',
      });
    } catch (err) {
      if (err instanceof BudgetReviewPackError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  @Post('generate')
  @RequiresCapability('BUDGET_REVIEW_PACK', 'INITIATE')
  async generate(@Body() dto: GenerateBudgetReviewPackDto, @CurrentUser() user: AuthenticatedUser) {
    try {
      const actualsByLineIdKobo: Record<string, bigint> = {};
      for (const [lineId, kobo] of Object.entries(dto.actualsByLineIdKobo)) actualsByLineIdKobo[lineId] = BigInt(kobo);
      return await this.pack.generatePack({
        templateCode: dto.templateCode,
        budgetVersionId: dto.budgetVersionId,
        month: dto.month,
        actualsByLineIdKobo,
        actualDriverOverrides: dto.actualDriverOverrides,
        generatedByUserId: user.userId,
      });
    } catch (err) {
      if (err instanceof BudgetReviewPackError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  @Post(':workflowInstanceId/approve')
  @RequiresCapability('BUDGET_REVIEW_PACK', 'APPROVE')
  async approve(@Param('workflowInstanceId') workflowInstanceId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.pack.approveForCirculation(workflowInstanceId, user.userId);
  }

  @Get('history')
  @RequiresCapability('BUDGET_REVIEW_PACK', 'VIEW')
  async history() {
    return this.pack.listPacks();
  }
}
