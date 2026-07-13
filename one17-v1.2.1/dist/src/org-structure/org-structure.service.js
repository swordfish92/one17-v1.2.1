"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgStructureService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const org_structure_types_1 = require("./org-structure.types");
let OrgStructureService = class OrgStructureService {
    prisma;
    audit;
    delegation;
    constructor(prisma, audit, delegation) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
    }
    async assertCapability(userId, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, 'ORG_STRUCTURE_MANAGEMENT', level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'org_structure', entityId: activity, after: { functionCode: 'ORG_STRUCTURE_MANAGEMENT', level } });
            throw new org_structure_types_1.OrgStructureError(`User lacks ${level} authority on ORG_STRUCTURE_MANAGEMENT (standing or delegated), required to ${activity}.`);
        }
    }
    async createOrgUnit(input) {
        await this.assertCapability(input.createdByUserId, 'INITIATE', 'create an org unit');
        const existing = await this.prisma.orgUnit.findUnique({ where: { code: input.code } });
        if (existing) {
            throw new org_structure_types_1.OrgStructureError(`Org unit code ${input.code} already exists (${existing.name}) -- codes must be unique.`);
        }
        const orgUnit = await this.prisma.orgUnit.create({
            data: { code: input.code, name: input.name, secondaryReportingLine: input.secondaryReportingLine },
        });
        await this.audit.record({ actorUserId: input.createdByUserId, action: 'CREATE', entityType: 'org_unit', entityId: orgUnit.code, after: { name: input.name, secondaryReportingLine: input.secondaryReportingLine } });
        return orgUnit;
    }
    async createPosition(input) {
        await this.assertCapability(input.createdByUserId, 'INITIATE', 'create a position');
        const orgUnit = await this.prisma.orgUnit.findUnique({ where: { code: input.orgUnitCode } });
        if (!orgUnit) {
            throw new org_structure_types_1.OrgStructureError(`Org unit ${input.orgUnitCode} does not exist -- create it first.`);
        }
        const existing = await this.prisma.position.findUnique({ where: { title_orgUnitCode: { title: input.title, orgUnitCode: input.orgUnitCode } } });
        if (existing) {
            throw new org_structure_types_1.OrgStructureError(`Position "${input.title}" already exists in org unit ${input.orgUnitCode}.`);
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
    async listCadres() {
        return this.prisma.cadreTierMap.findMany({ orderBy: { cadre: 'asc' } });
    }
};
exports.OrgStructureService = OrgStructureService;
exports.OrgStructureService = OrgStructureService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService])
], OrgStructureService);
//# sourceMappingURL=org-structure.service.js.map