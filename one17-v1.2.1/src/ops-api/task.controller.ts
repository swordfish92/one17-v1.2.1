import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { TaskService } from '../task/task.service';
import { AssignTaskDto, SetDeliverableUrlDto, CreateSubmissionDto } from './ops-api.types';

// Invariant 55(c) (CHECK12, CEO directive 8-Jul-2026): the dedicated Tasks
// page. Everything here is identity-derived from the caller's OWN employee
// record (same realm-isolation discipline as /profile/me/tasks, which
// this supersedes for anyone who wants the fuller view) -- no capability
// gate beyond session auth, since TaskService.assignTask's own reports_to
// check IS the authorization boundary for who may assign to whom, and
// listForTasksPage only ever returns the caller's own tasks + their real
// reporting subtree's tasks, never an arbitrary employeeId a caller
// could supply.
@Controller('tasks')
@UseGuards(SessionAuthGuard)
export class TaskController {
  constructor(private readonly task: TaskService) {}

  @Get()
  async list(@Query('status') status: string | undefined, @Query('orgUnitCode') orgUnitCode: string | undefined, @CurrentUser() user: AuthenticatedUser) {
    return this.task.listForTasksPage(user.userId, { status, orgUnitCode });
  }

  @Get('assignable-employees')
  async listAssignableEmployees(@CurrentUser() user: AuthenticatedUser) {
    return this.task.listAssignableEmployees(user.userId);
  }

  @Post()
  async assign(@Body() dto: AssignTaskDto, @CurrentUser() user: AuthenticatedUser) {
    return this.task.assignTask({
      title: dto.title,
      description: dto.description,
      assigneeEmployeeId: dto.assigneeEmployeeId,
      dueAt: dto.dueAt ? new Date(dto.dueAt) : undefined,
      deliverableUrl: dto.deliverableUrl,
      assignedByUserId: user.userId,
      kpiDefinitionId: dto.kpiDefinitionId,
    });
  }

  // Invariant 64(d)(i): "my day vs my scorecard" view.
  @Get('my-day-vs-scorecard')
  async getMyDayVsScorecard(@CurrentUser() user: AuthenticatedUser) {
    return this.task.getMyDayVsScorecard(user.userId);
  }

  @Get('kpi/:kpiDefinitionId/employee/:employeeId')
  async listTasksForKpi(@Param('kpiDefinitionId') kpiDefinitionId: string, @Param('employeeId') employeeId: string) {
    return this.task.listTasksForKpi(employeeId, kpiDefinitionId);
  }

  // Invariant 64(d)(iii): upline submissions.
  @Post('submissions')
  async createSubmission(@Body() dto: CreateSubmissionDto, @CurrentUser() user: AuthenticatedUser) {
    return this.task.createSubmission(user.userId, dto);
  }

  @Get('submissions/mine')
  async listMySubmissions(@CurrentUser() user: AuthenticatedUser) {
    return this.task.listMySubmissions(user.userId);
  }

  @Get('submissions/to-decide')
  async listSubmissionsToDecide(@CurrentUser() user: AuthenticatedUser) {
    return this.task.listSubmissionsToDecide(user.userId);
  }

  @Post('submissions/:id/accept')
  async acceptSubmission(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.task.acceptSubmission(id, user.userId);
  }

  @Post('submissions/:id/decline')
  async declineSubmission(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.task.declineSubmission(id, user.userId);
  }

  @Post(':id/start')
  async start(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.task.startTask(id, user.userId);
  }

  @Post(':id/complete')
  async complete(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.task.completeTask(id, user.userId);
  }

  @Post(':id/deliverable-url')
  async setDeliverableUrl(@Param('id') id: string, @Body() dto: SetDeliverableUrlDto, @CurrentUser() user: AuthenticatedUser) {
    return this.task.setDeliverableUrl(id, dto.deliverableUrl, user.userId);
  }
}
