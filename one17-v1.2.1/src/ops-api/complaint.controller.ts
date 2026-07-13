import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { ComplaintService } from '../complaint/complaint.service';
import { RaiseComplaintDto, AssignComplaintOwnerDto, EscalateComplaintDto, ResolveComplaintDto } from './ops-api.types';

// Invariant 28(f): staff-backend half of the complaint module. The
// client-portal half (raising a complaint about one's own account) lives on
// portal/investor and portal/counterparty controllers, not here.
@Controller('complaints')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class ComplaintController {
  constructor(private readonly complaints: ComplaintService) {}

  @Get()
  @RequiresCapability('COMPLAINT_MANAGEMENT', 'VIEW')
  async listAll(@CurrentUser() user: AuthenticatedUser) {
    return this.complaints.listAll(user.userId);
  }

  // Invariant 57(b)(ii) (CHECK15): the Compliance queue over DSR-tagged
  // complaints, with the statutory response clock.
  @Get('dsr-queue')
  @RequiresCapability('COMPLAINT_MANAGEMENT', 'VIEW')
  async listDsrQueue(@CurrentUser() user: AuthenticatedUser) {
    return this.complaints.listDsrQueue(user.userId);
  }

  @Post()
  @RequiresCapability('COMPLAINT_MANAGEMENT', 'INITIATE')
  async raiseByStaff(@Body() dto: RaiseComplaintDto, @CurrentUser() user: AuthenticatedUser) {
    return this.complaints.raiseByStaff({ ...dto, loggedByUserId: user.userId });
  }

  @Post(':id/assign')
  @RequiresCapability('COMPLAINT_MANAGEMENT', 'INITIATE')
  async assignOwner(@Param('id') id: string, @Body() dto: AssignComplaintOwnerDto, @CurrentUser() user: AuthenticatedUser) {
    return this.complaints.assignOwner({ complaintId: id, ...dto, actorUserId: user.userId });
  }

  @Post(':id/escalate')
  @RequiresCapability('COMPLAINT_MANAGEMENT', 'INITIATE')
  async escalate(@Param('id') id: string, @Body() dto: EscalateComplaintDto, @CurrentUser() user: AuthenticatedUser) {
    return this.complaints.escalate({ complaintId: id, ...dto, actorUserId: user.userId });
  }

  @Post(':id/resolve')
  @RequiresCapability('COMPLAINT_MANAGEMENT', 'INITIATE')
  async resolve(@Param('id') id: string, @Body() dto: ResolveComplaintDto, @CurrentUser() user: AuthenticatedUser) {
    return this.complaints.resolve({ complaintId: id, ...dto, actorUserId: user.userId });
  }

  @Post(':id/close')
  @RequiresCapability('COMPLAINT_MANAGEMENT', 'INITIATE')
  async close(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.complaints.close(id, user.userId);
  }
}
