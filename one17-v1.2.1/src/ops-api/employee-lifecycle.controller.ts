import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { PrismaService } from '../prisma/prisma.service';
import { EmployeeLifecycleService } from '../profile/employee-lifecycle.service';
import { RequestOnboardingDto, RequestOffboardingDto, RequestIncentivePctChangeDto, DecideEmployeeLifecycleDto } from './ops-api.types';

// Invariant 50(b) (CHECK12): the New Employee screen + offboarding +
// performanceIncentivePct amendment. No @RequiresCapability on the
// decide/:workflowInstanceId routes -- EMPLOYEE_LIFECYCLE_APPROVAL and
// EMPLOYEE_INCENTIVE_PCT_APPROVAL are enforced inside
// WorkflowEngineService.approveNextStep itself (same reasoning as every
// other dedicated decide screen in this codebase).
@Controller('employees')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class EmployeeLifecycleController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly employeeLifecycle: EmployeeLifecycleService,
  ) {}

  @Get()
  @RequiresCapability('EMPLOYEE_LIFECYCLE_INITIATION', 'VIEW')
  async list() {
    // Invariant 54(b): reportsTo included so the consolidated Access
    // Control page's "Position: assignments + reports-to view" section can
    // render a compact reporting-line summary from this SAME existing
    // endpoint, without a new route (54(b)'s "deep-link, don't duplicate").
    return this.prisma.employee.findMany({
      orderBy: { createdAt: 'desc' },
      take: 300,
      include: {
        position: true,
        appUser: { select: { email: true, status: true } },
        reportsTo: { select: { id: true, surname: true, firstName: true, middleName: true } },
      },
    });
  }

  @Get('positions')
  @RequiresCapability('EMPLOYEE_LIFECYCLE_INITIATION', 'VIEW')
  async listPositions() {
    return this.prisma.position.findMany({ orderBy: { title: 'asc' }, include: { orgUnit: true } });
  }

  @Get('org-units')
  @RequiresCapability('EMPLOYEE_LIFECYCLE_INITIATION', 'VIEW')
  async listOrgUnits() {
    return this.prisma.orgUnit.findMany({ orderBy: { name: 'asc' } });
  }

  @Get('onboarding-requests')
  @RequiresCapability('EMPLOYEE_LIFECYCLE_INITIATION', 'VIEW')
  async listOnboardingRequests() {
    return this.employeeLifecycle.listOnboardingRequests();
  }

  @Post('onboarding-requests')
  @RequiresCapability('EMPLOYEE_LIFECYCLE_INITIATION', 'INITIATE')
  async requestOnboarding(@Body() dto: RequestOnboardingDto, @CurrentUser() user: AuthenticatedUser) {
    return this.employeeLifecycle.requestOnboarding({
      surname: dto.surname,
      firstName: dto.firstName,
      middleName: dto.middleName,
      positionId: dto.positionId,
      orgUnitCode: dto.orgUnitCode,
      reportsToId: dto.reportsToId,
      hireDate: new Date(dto.hireDate),
      proposedPerformanceIncentivePct: dto.proposedPerformanceIncentivePct,
      linkedUserEmail: dto.linkedUserEmail,
      requestedByUserId: user.userId,
    });
  }

  @Post('onboarding-requests/:workflowInstanceId/decide')
  async decideOnboarding(@Param('workflowInstanceId') workflowInstanceId: string, @Body() dto: DecideEmployeeLifecycleDto, @CurrentUser() user: AuthenticatedUser) {
    return this.employeeLifecycle.decideOnboarding(workflowInstanceId, user.userId, dto.decision, dto.notes);
  }

  @Get('offboarding-requests')
  @RequiresCapability('EMPLOYEE_LIFECYCLE_INITIATION', 'VIEW')
  async listOffboardingRequests() {
    return this.employeeLifecycle.listOffboardingRequests();
  }

  @Post('offboarding-requests')
  @RequiresCapability('EMPLOYEE_LIFECYCLE_INITIATION', 'INITIATE')
  async requestOffboarding(@Body() dto: RequestOffboardingDto, @CurrentUser() user: AuthenticatedUser) {
    return this.employeeLifecycle.requestOffboarding(dto.employeeId, dto.reason, user.userId);
  }

  @Post('offboarding-requests/:workflowInstanceId/decide')
  async decideOffboarding(@Param('workflowInstanceId') workflowInstanceId: string, @Body() dto: DecideEmployeeLifecycleDto, @CurrentUser() user: AuthenticatedUser) {
    return this.employeeLifecycle.decideOffboarding(workflowInstanceId, user.userId, dto.decision, dto.notes);
  }

  @Get('incentive-pct-requests')
  @RequiresCapability('EMPLOYEE_LIFECYCLE_INITIATION', 'VIEW')
  async listIncentivePctRequests() {
    return this.employeeLifecycle.listIncentivePctChangeRequests();
  }

  @Post('incentive-pct-requests')
  @RequiresCapability('EMPLOYEE_LIFECYCLE_INITIATION', 'INITIATE')
  async requestIncentivePctChange(@Body() dto: RequestIncentivePctChangeDto, @CurrentUser() user: AuthenticatedUser) {
    return this.employeeLifecycle.requestIncentivePctChange(dto.employeeId, dto.proposedPct, user.userId);
  }

  @Post('incentive-pct-requests/:workflowInstanceId/decide')
  async decideIncentivePctChange(@Param('workflowInstanceId') workflowInstanceId: string, @Body() dto: DecideEmployeeLifecycleDto, @CurrentUser() user: AuthenticatedUser) {
    return this.employeeLifecycle.decideIncentivePctChange(workflowInstanceId, user.userId, dto.decision, dto.notes);
  }
}
