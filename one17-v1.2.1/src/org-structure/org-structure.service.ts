import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { OrgStructureError, CreateOrgUnitInput, CreatePositionInput } from './org-structure.types';

// Invariant 51(a-iii) (CHECK12, advisor BA lifecycle-gap register, Tier 1):
// "governed position + org-unit creation (HR area; currently seed/smoke-
// only — blocks 50(b) hiring)." CLAUDE.md's own text for this item carries
// none of the "maker!=checker"/"approval"/"reverification" qualifiers its
// Tier-1 siblings (i)/(ii) get explicitly -- capability-gated single-actor
// write + audit record (the ParameterService.createProduct shape), not a
// workflow.initiate() chain. Flagged in QUESTIONS_FOR_REVIEW.md as a
// judgment call, since Position/OrgUnit now feed the maker!=checker
// EMPLOYEE_ONBOARDING flow (invariant 50b) built earlier this session.
@Injectable()
export class OrgStructureService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
  ) {}

  private async assertCapability(userId: string, level: 'INITIATE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, 'ORG_STRUCTURE_MANAGEMENT', level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'org_structure', entityId: activity, after: { functionCode: 'ORG_STRUCTURE_MANAGEMENT', level } });
      throw new OrgStructureError(`User lacks ${level} authority on ORG_STRUCTURE_MANAGEMENT (standing or delegated), required to ${activity}.`);
    }
  }

  async createOrgUnit(input: CreateOrgUnitInput) {
    await this.assertCapability(input.createdByUserId, 'INITIATE', 'create an org unit');
    const existing = await this.prisma.orgUnit.findUnique({ where: { code: input.code } });
    if (existing) {
      throw new OrgStructureError(`Org unit code ${input.code} already exists (${existing.name}) -- codes must be unique.`);
    }
    const orgUnit = await this.prisma.orgUnit.create({
      data: { code: input.code, name: input.name, secondaryReportingLine: input.secondaryReportingLine },
    });
    await this.audit.record({ actorUserId: input.createdByUserId, action: 'CREATE', entityType: 'org_unit', entityId: orgUnit.code, after: { name: input.name, secondaryReportingLine: input.secondaryReportingLine } });
    return orgUnit;
  }

  async createPosition(input: CreatePositionInput) {
    await this.assertCapability(input.createdByUserId, 'INITIATE', 'create a position');
    const orgUnit = await this.prisma.orgUnit.findUnique({ where: { code: input.orgUnitCode } });
    if (!orgUnit) {
      throw new OrgStructureError(`Org unit ${input.orgUnitCode} does not exist -- create it first.`);
    }
    const existing = await this.prisma.position.findUnique({ where: { title_orgUnitCode: { title: input.title, orgUnitCode: input.orgUnitCode } } });
    if (existing) {
      throw new OrgStructureError(`Position "${input.title}" already exists in org unit ${input.orgUnitCode}.`);
    }
    const position = await this.prisma.position.create({
      data: { title: input.title, orgUnitCode: input.orgUnitCode, cadre: input.cadre, notch: input.notch },
    });
    await this.audit.record({ actorUserId: input.createdByUserId, action: 'CREATE', entityType: 'position', entityId: position.id, after: { title: input.title, orgUnitCode: input.orgUnitCode, cadre: input.cadre, notch: input.notch } });
    return position;
  }

  async listOrgUnits() {
    return this.prisma.orgUnit.findMany({ orderBy: { name: 'asc' } });
  }

  async listPositions() {
    return this.prisma.position.findMany({ orderBy: { title: 'asc' }, include: { orgUnit: true } });
  }

  // Reference list for the cadre picker -- CadreTierMap is a governed
  // reference table (cadre -> PMS tier), not an FK-enforced enum on
  // Position.cadre itself (that column stays a plain String, matching the
  // seed's own freeform cadre values like "Snr Associate 1").
  async listCadres() {
    return this.prisma.cadreTierMap.findMany({ orderBy: { cadre: 'asc' } });
  }
}
