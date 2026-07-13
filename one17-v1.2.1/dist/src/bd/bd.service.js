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
exports.BdService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const delegation_service_1 = require("../delegation/delegation.service");
const audit_service_1 = require("../audit/audit.service");
const bd_types_1 = require("./bd.types");
let BdService = class BdService {
    prisma;
    delegation;
    audit;
    constructor(prisma, delegation, audit) {
        this.prisma = prisma;
        this.delegation = delegation;
        this.audit = audit;
    }
    async getRegister(viewerUserId) {
        const { eligible } = await this.delegation.hasCapability(viewerUserId, 'BD_REGISTER', 'VIEW');
        if (!eligible) {
            await this.audit.record({
                actorUserId: viewerUserId,
                action: 'PERMISSION_DENIED',
                entityType: 'bd_register',
                entityId: 'register',
                after: { functionCode: 'BD_REGISTER', level: 'VIEW' },
            });
            throw new bd_types_1.BdLifecycleError('User lacks VIEW authority on BD_REGISTER (standing or delegated), required to view the BD register.');
        }
        const rows = [];
        const openLeads = await this.prisma.lead.findMany({
            where: { status: { not: 'CONVERTED' } },
            orderBy: { createdAt: 'desc' },
        });
        for (const lead of openLeads) {
            rows.push({
                source: 'LEAD',
                id: lead.id,
                name: lead.fullNameOrCompany,
                contactEmail: lead.contactEmail,
                contactPhone: lead.contactPhone,
                stage: 'LEAD',
                leadStatus: lead.status,
                createdAt: lead.createdAt,
            });
        }
        const investors = await this.prisma.investor.findMany({
            where: { isDeleted: false },
            include: { productAccounts: true },
            orderBy: { createdAt: 'desc' },
        });
        for (const investor of investors) {
            const hasFunding = investor.productAccounts.some((pa) => pa.principalOrCommittedKobo > 0n || Number(pa.unitsHeld ?? 0) > 0);
            const stage = hasFunding
                ? 'FUNDED'
                : investor.onboardingStage === 'STAGE_2_COMPLETE' && investor.kycStatus === 'KYC_COMPLETE'
                    ? 'FULL_KYC'
                    : 'EXPRESS';
            rows.push({
                source: 'INVESTOR',
                id: investor.investorId,
                name: investor.fullLegalName,
                contactEmail: investor.contactEmail,
                contactPhone: investor.contactPhone,
                stage,
                createdAt: investor.createdAt,
            });
        }
        return rows.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    }
};
exports.BdService = BdService;
exports.BdService = BdService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        delegation_service_1.DelegationService,
        audit_service_1.AuditService])
], BdService);
//# sourceMappingURL=bd.service.js.map