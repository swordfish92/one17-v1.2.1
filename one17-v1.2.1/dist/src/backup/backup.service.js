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
exports.BackupService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const delegation_service_1 = require("../delegation/delegation.service");
let BackupService = class BackupService {
    prisma;
    delegation;
    constructor(prisma, delegation) {
        this.prisma = prisma;
        this.delegation = delegation;
    }
    async recordRun(dto) {
        return this.prisma.backupRun.create({
            data: {
                dbName: dto.dbName,
                startedAt: new Date(dto.startedAt),
                completedAt: new Date(dto.completedAt),
                status: dto.status,
                dumpSizeBytes: dto.dumpSizeBytes !== undefined ? BigInt(dto.dumpSizeBytes) : undefined,
                offMachineCopyOk: dto.offMachineCopyOk,
                errorMessage: dto.errorMessage,
            },
        });
    }
    async listRecentForUser(userId, limit = 20) {
        const [opsEligible, oversightEligible] = await Promise.all([
            this.delegation.hasCapability(userId, 'SCHEDULER_OPERATIONS', 'VIEW'),
            this.delegation.hasCapability(userId, 'SCHEDULER_OVERSIGHT', 'VIEW'),
        ]);
        if (!opsEligible.eligible && !oversightEligible.eligible) {
            throw new Error('User lacks VIEW authority on SCHEDULER_OPERATIONS or SCHEDULER_OVERSIGHT (standing or delegated), required to view backup run history.');
        }
        return this.prisma.backupRun.findMany({ orderBy: { startedAt: 'desc' }, take: limit });
    }
};
exports.BackupService = BackupService;
exports.BackupService = BackupService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        delegation_service_1.DelegationService])
], BackupService);
//# sourceMappingURL=backup.service.js.map