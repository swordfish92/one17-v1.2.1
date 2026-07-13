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
exports.RetentionScheduleService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const data_protection_types_1 = require("./data-protection.types");
let RetentionScheduleService = class RetentionScheduleService {
    prisma;
    audit;
    constructor(prisma, audit) {
        this.prisma = prisma;
        this.audit = audit;
    }
    async listAll() {
        return this.prisma.retentionScheduleEntry.findMany({ orderBy: { dataClass: 'asc' } });
    }
    async confirm(input) {
        const entry = await this.prisma.retentionScheduleEntry.findUniqueOrThrow({ where: { id: input.entryId } });
        if (entry.status === 'ACTIVE') {
            throw new data_protection_types_1.DataProtectionError(`Retention schedule entry "${entry.dataClass}" is already ACTIVE -- version a new entry to change a confirmed figure, don't overwrite it.`);
        }
        const updated = await this.prisma.retentionScheduleEntry.update({
            where: { id: input.entryId },
            data: {
                retentionPeriodMonths: input.retentionPeriodMonths,
                statutoryBasis: input.statutoryBasis,
                disposalTreatment: input.disposalTreatment,
                status: 'ACTIVE',
                confirmedByUserId: input.actorUserId,
                confirmedAt: new Date(),
            },
        });
        await this.audit.record({
            actorUserId: input.actorUserId,
            action: 'APPROVE',
            entityType: 'retention_schedule_entry',
            entityId: updated.id,
            after: { dataClass: entry.dataClass, retentionPeriodMonths: input.retentionPeriodMonths, statutoryBasis: input.statutoryBasis },
        });
        return updated;
    }
};
exports.RetentionScheduleService = RetentionScheduleService;
exports.RetentionScheduleService = RetentionScheduleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService])
], RetentionScheduleService);
//# sourceMappingURL=retention-schedule.service.js.map