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
exports.ShariahGovernanceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ShariahGovernanceService = class ShariahGovernanceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async listMembers() {
        return this.prisma.ssbMember.findMany({ orderBy: { name: 'asc' } });
    }
    async listResolutions() {
        return this.prisma.ssbResolution.findMany({
            orderBy: { resolutionDate: 'desc' },
            include: { proposedByMember: { select: { name: true, memberRef: true } } },
        });
    }
    async listPurificationRecords() {
        const records = await this.prisma.purificationRecord.findMany({ orderBy: { identifiedDate: 'desc' } });
        return records.map((r) => ({ ...r, amountKobo: r.amountKobo.toString() }));
    }
    async listComplianceChecks() {
        return this.prisma.complianceCheck.findMany({
            orderBy: { checkCode: 'asc' },
            include: { reviewedByMember: { select: { name: true, memberRef: true } } },
        });
    }
};
exports.ShariahGovernanceService = ShariahGovernanceService;
exports.ShariahGovernanceService = ShariahGovernanceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ShariahGovernanceService);
//# sourceMappingURL=shariah-governance.service.js.map