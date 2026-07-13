import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { LeaveService } from '../leave/leave.service';
import { ApplyForLeaveDto, SupervisorDecideLeaveDto } from './ops-api.types';

// Invariant 64(e) (CHECK17): Leave -- application/supervisor-approval are
// self-service/reports-to (session auth only, no capability grant, same
// discipline as TaskService.assignTask); HR acknowledgment + the People-hub
// oversight register are LEAVE_MANAGEMENT-gated.
@Controller('leave')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class LeaveController {
  constructor(private readonly leave: LeaveService) {}

  @Get('types')
  async listLeaveTypes() {
    return this.leave.listLeaveTypes();
  }

  @Get('balances')
  async getMyBalances(@Query('year') year: string | undefined, @CurrentUser() user: AuthenticatedUser) {
    return this.leave.getMyBalancesForActor(user.userId, year ? Number(year) : new Date().getFullYear());
  }

  @Post('applications')
  async applyForLeave(@Body() dto: ApplyForLeaveDto, @CurrentUser() user: AuthenticatedUser) {
    return this.leave.applyForLeave(user.userId, dto);
  }

  @Get('applications/mine')
  async listMyApplications(@CurrentUser() user: AuthenticatedUser) {
    return this.leave.listMyApplications(user.userId);
  }

  @Get('applications/subordinates')
  async listSubordinateApplications(@CurrentUser() user: AuthenticatedUser) {
    return this.leave.listSubordinateApplications(user.userId);
  }

  @Post('applications/:id/supervisor-decide')
  async supervisorDecide(@Param('id') id: string, @Body() dto: SupervisorDecideLeaveDto, @CurrentUser() user: AuthenticatedUser) {
    return this.leave.supervisorDecide(id, dto.decision, user.userId, dto.notes);
  }

  @Post('applications/:id/hr-acknowledge')
  @RequiresCapability('LEAVE_MANAGEMENT', 'INITIATE')
  async hrAcknowledge(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.leave.hrAcknowledge(id, user.userId);
  }

  @Get('applications')
  @RequiresCapability('LEAVE_MANAGEMENT', 'VIEW')
  async listAllApplications() {
    return this.leave.listAllApplications();
  }
}
