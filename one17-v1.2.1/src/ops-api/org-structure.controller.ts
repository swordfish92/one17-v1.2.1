import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { OrgStructureService } from '../org-structure/org-structure.service';
import { DepartmentHeadService } from '../org-structure/department-head.service';
import { CreateOrgUnitDto, CreatePositionDto, ProposeDepartmentHeadDto } from './ops-api.types';

// Invariant 51(a-iii) (CHECK12): "governed position + org-unit creation
// (HR area; currently seed/smoke-only -- blocks 50(b) hiring)."
@Controller('org-structure')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class OrgStructureController {
  constructor(
    private readonly orgStructure: OrgStructureService,
    private readonly departmentHead: DepartmentHeadService,
  ) {}

  // Invariant 74(b) (CHECK27, v1.2): Department Head designation.
  @Get('department-heads')
  @RequiresCapability('DEPARTMENT_HEAD_DESIGNATION', 'VIEW')
  async listDepartmentHeads(@Query('orgUnitCode') orgUnitCode?: string) {
    return this.departmentHead.listDesignations(orgUnitCode);
  }

  @Post('department-heads')
  @RequiresCapability('DEPARTMENT_HEAD_DESIGNATION', 'INITIATE')
  async proposeDepartmentHead(@Body() dto: ProposeDepartmentHeadDto, @CurrentUser() user: AuthenticatedUser) {
    return this.departmentHead.proposeDesignation({ orgUnitCode: dto.orgUnitCode, employeeId: dto.employeeId, effectiveFrom: dto.effectiveFrom ? new Date(dto.effectiveFrom) : undefined }, user.userId);
  }

  @Post('department-heads/:workflowInstanceId/approve')
  @RequiresCapability('DEPARTMENT_HEAD_DESIGNATION', 'APPROVE')
  async approveDepartmentHead(@Param('workflowInstanceId') workflowInstanceId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.departmentHead.approveDesignation(workflowInstanceId, user.userId);
  }

  @Get('org-units')
  @RequiresCapability('ORG_STRUCTURE_MANAGEMENT', 'VIEW')
  async listOrgUnits() {
    return this.orgStructure.listOrgUnits();
  }

  @Post('org-units')
  @RequiresCapability('ORG_STRUCTURE_MANAGEMENT', 'INITIATE')
  async createOrgUnit(@Body() dto: CreateOrgUnitDto, @CurrentUser() user: AuthenticatedUser) {
    return this.orgStructure.createOrgUnit({ code: dto.code, name: dto.name, secondaryReportingLine: dto.secondaryReportingLine, createdByUserId: user.userId });
  }

  @Get('positions')
  @RequiresCapability('ORG_STRUCTURE_MANAGEMENT', 'VIEW')
  async listPositions() {
    return this.orgStructure.listPositions();
  }

  @Post('positions')
  @RequiresCapability('ORG_STRUCTURE_MANAGEMENT', 'INITIATE')
  async createPosition(@Body() dto: CreatePositionDto, @CurrentUser() user: AuthenticatedUser) {
    return this.orgStructure.createPosition({ title: dto.title, orgUnitCode: dto.orgUnitCode, cadre: dto.cadre, notch: dto.notch, createdByUserId: user.userId });
  }

  @Get('cadres')
  @RequiresCapability('ORG_STRUCTURE_MANAGEMENT', 'VIEW')
  async listCadres() {
    return this.orgStructure.listCadres();
  }
}
