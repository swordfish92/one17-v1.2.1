import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { AttendanceService } from '../attendance/attendance.service';
import {
  ConfigureAttendanceProviderDto,
  DecideExceptionDto,
  ImportFileEventsDto,
  MapLockUserDto,
  RequestExceptionDto,
} from './ops-api.types';

// Invariant 40/63(b)/64(c) (CHECK17): AttendanceGateway staff surface --
// provider config (HR/ICT-owned, MD-approved), FileImport batch upload +
// the lock-user mapping queue, and exception-request adjudication (reports-
// to check, not a capability grant -- see AttendanceService itself).
@Controller('attendance')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class AttendanceController {
  constructor(private readonly attendance: AttendanceService) {}

  @Get('providers')
  @RequiresCapability('ATTENDANCE_GATEWAY_POLICY', 'VIEW')
  async listProviders() {
    return this.attendance.listProviders();
  }

  @Post('providers')
  @RequiresCapability('ATTENDANCE_GATEWAY_POLICY', 'INITIATE')
  async proposeProviderConfig(@Body() dto: ConfigureAttendanceProviderDto, @CurrentUser() user: AuthenticatedUser) {
    return this.attendance.proposeProviderConfig(dto, user.userId);
  }

  @Post('providers/:workflowInstanceId/approve')
  @RequiresCapability('ATTENDANCE_GATEWAY_POLICY', 'APPROVE')
  async approveProviderConfig(@Param('workflowInstanceId') workflowInstanceId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.attendance.approveProviderConfig(workflowInstanceId, user.userId);
  }

  // Invariant 73(b) (CHECK27): the TTLock OAuth2 "connect" action -- a real
  // password-grant token exchange against an already-approved
  // clientId/clientSecret/credentialConfig, not a fabricated "connected"
  // state.
  @Post('providers/:id/connect-ttlock')
  @RequiresCapability('ATTENDANCE_GATEWAY_POLICY', 'INITIATE')
  async connectTTLock(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.attendance.connectTTLock(id, user.userId);
  }

  @Post('providers/:id/import')
  @RequiresCapability('ATTENDANCE_GATEWAY_POLICY', 'INITIATE')
  async importFileEvents(@Param('id') id: string, @Body() dto: ImportFileEventsDto, @CurrentUser() user: AuthenticatedUser) {
    return this.attendance.importFileEvents(id, dto.rows, user.userId);
  }

  @Get('unmapped-events')
  @RequiresCapability('ATTENDANCE_GATEWAY_POLICY', 'VIEW')
  async listUnmappedEvents() {
    return this.attendance.listUnmappedEvents();
  }

  @Post('lock-user-mappings')
  @RequiresCapability('ATTENDANCE_GATEWAY_POLICY', 'INITIATE')
  async mapLockUser(@Body() dto: MapLockUserDto, @CurrentUser() user: AuthenticatedUser) {
    return this.attendance.mapLockUser(dto, user.userId);
  }

  @Post('exceptions')
  async requestException(@Body() dto: RequestExceptionDto, @CurrentUser() user: AuthenticatedUser) {
    return this.attendance.requestException(user.userId, dto);
  }

  @Get('exceptions/mine')
  async listMyExceptionRequests(@CurrentUser() user: AuthenticatedUser) {
    return this.attendance.listMyExceptionRequests(user.userId);
  }

  @Get('exceptions/subordinates')
  async listSubordinateExceptionRequests(@CurrentUser() user: AuthenticatedUser) {
    return this.attendance.listSubordinateExceptionRequests(user.userId);
  }

  @Post('exceptions/:id/decide')
  async decideExceptionRequest(@Param('id') id: string, @Body() dto: DecideExceptionDto, @CurrentUser() user: AuthenticatedUser) {
    return this.attendance.decideExceptionRequest(id, dto.decision, user.userId, dto.notes);
  }
}
