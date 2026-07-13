import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { ProfileService } from '../profile/profile.service';
import { TaskService } from '../task/task.service';
import { NotificationService } from '../notification/notification.service';
import { PmsService } from '../pms/pms.service';
import type { RequestGatedChangeInput, UpdateFreeEditFieldsInput } from '../profile/profile.types';

// Check-6C tranche 2 (invariant 29a). Every route is identity-scoped to the
// session's own user — no @RequiresCapability on the hub itself; the PII
// gate (employee-self vs EMPLOYEE_PERSONAL_RECORDS) lives inside
// ProfileService, same "guard only answers may this user touch this
// endpoint at all" boundary as WorkflowInboxController/AiController.
@Controller('profile')
@UseGuards(SessionAuthGuard)
export class ProfileController {
  constructor(
    private readonly profile: ProfileService,
    private readonly task: TaskService,
    private readonly notification: NotificationService,
    private readonly pms: PmsService,
  ) {}

  @Get('me')
  async getMe(@CurrentUser() user: AuthenticatedUser) {
    const employee = await this.profile.getMyEmployee(user.userId);
    const [personalRecord, myTasks, directReportsTasks, notifications, performance, sopLibrary, changeRequests] = await Promise.all([
      this.profile.getPersonalRecord(employee.id, user.userId),
      this.task.listMine(employee.id),
      this.task.listDirectReportsTasks(employee.id),
      this.notification.listMine(user.userId),
      this.pms.getMyPerformanceSummary(user.userId),
      this.profile.listSopLibrary(user.userId),
      this.profile.listMyChangeRequests(employee.id),
    ]);
    return { employee, personalRecord, myTasks, directReportsTasks, notifications, performance, sopLibrary, changeRequests };
  }

  @Post('me/free-fields')
  async updateFreeFields(@Body() dto: UpdateFreeEditFieldsInput, @CurrentUser() user: AuthenticatedUser) {
    const employee = await this.profile.getMyEmployee(user.userId);
    return this.profile.updateFreeEditFields(employee.id, user.userId, dto);
  }

  @Post('me/request-change')
  async requestChange(@Body() dto: RequestGatedChangeInput, @CurrentUser() user: AuthenticatedUser) {
    const employee = await this.profile.getMyEmployee(user.userId);
    return this.profile.requestGatedChange(employee.id, user.userId, dto);
  }

  @Post('me/tasks')
  async assignTask(
    @Body() dto: { title: string; description?: string; assigneeEmployeeId: string; dueAt?: string },
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.task.assignTask({
      title: dto.title,
      description: dto.description,
      assigneeEmployeeId: dto.assigneeEmployeeId,
      dueAt: dto.dueAt ? new Date(dto.dueAt) : undefined,
      assignedByUserId: user.userId,
    });
  }

  @Post('me/tasks/:id/start')
  async startTask(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.task.startTask(id, user.userId);
  }

  @Post('me/tasks/:id/complete')
  async completeTask(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.task.completeTask(id, user.userId);
  }

  @Post('me/notifications/:id/read')
  async markNotificationRead(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.notification.markRead(id, user.userId);
  }

  @Post('me/sop-library')
  async uploadSop(@Body() dto: { documentType: string; fileReference: string }, @CurrentUser() user: AuthenticatedUser) {
    return this.profile.uploadSop(user.userId, dto.documentType, dto.fileReference);
  }

  // Invariant 37(g) completeness audit: ProfileService.getPersonalRecord
  // already correctly gates a caller viewing SOMEONE ELSE's record on
  // EMPLOYEE_PERSONAL_RECORDS VIEW (Corporate Services HR) — but no route
  // ever called it with anything other than the caller's own employee ID
  // (getMe() always passes the caller's own). This is the missing route;
  // the PII gate itself is unchanged, still enforced inside the service.
  @Get('employees/:employeeId/personal-record')
  async getEmployeePersonalRecord(@Param('employeeId') employeeId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.profile.getPersonalRecord(employeeId, user.userId);
  }
}
