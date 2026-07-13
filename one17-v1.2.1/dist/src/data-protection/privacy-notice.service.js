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
exports.PrivacyNoticeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const data_protection_types_1 = require("./data-protection.types");
let PrivacyNoticeService = class PrivacyNoticeService {
    prisma;
    audit;
    constructor(prisma, audit) {
        this.prisma = prisma;
        this.audit = audit;
    }
    async getActiveNotice() {
        const notice = await this.prisma.privacyNoticeConfig.findFirst({ where: { status: 'ACTIVE' }, orderBy: { version: 'desc' } });
        if (!notice) {
            throw new data_protection_types_1.DataProtectionError('No ACTIVE privacy_notice_config row — Compliance/DPO has not published a privacy notice yet.');
        }
        return notice;
    }
    async recordAcknowledgment(input) {
        if ((input.investorId ? 1 : 0) + (input.counterpartyId ? 1 : 0) + (input.publicIntakeSubmissionId ? 1 : 0) === 0) {
            throw new data_protection_types_1.DataProtectionError('A privacy-notice acknowledgment must identify an investor, counterparty, or public-intake submission.');
        }
        const notice = await this.prisma.privacyNoticeConfig.findFirst({ where: { version: input.noticeVersion } });
        if (!notice) {
            throw new data_protection_types_1.DataProtectionError(`No privacy_notice_config row at version ${input.noticeVersion}.`);
        }
        const ack = await this.prisma.privacyNoticeAcknowledgment.create({
            data: {
                noticeConfigId: notice.id,
                context: input.context,
                investorId: input.investorId,
                counterpartyId: input.counterpartyId,
                publicIntakeSubmissionId: input.publicIntakeSubmissionId,
                ipAddress: input.ipAddress,
            },
        });
        await this.audit.record({
            action: 'CREATE',
            entityType: 'privacy_notice_acknowledgment',
            entityId: ack.id,
            after: { noticeVersion: input.noticeVersion, context: input.context, investorId: input.investorId, counterpartyId: input.counterpartyId },
        });
        return ack;
    }
    async listAcknowledgments() {
        return this.prisma.privacyNoticeAcknowledgment.findMany({
            orderBy: { acknowledgedAt: 'desc' },
            take: 200,
            include: { noticeConfig: true, investor: { select: { fullLegalName: true } }, counterparty: { select: { legalName: true } } },
        });
    }
};
exports.PrivacyNoticeService = PrivacyNoticeService;
exports.PrivacyNoticeService = PrivacyNoticeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService])
], PrivacyNoticeService);
//# sourceMappingURL=privacy-notice.service.js.map