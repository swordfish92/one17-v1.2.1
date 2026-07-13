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
exports.HalalFundLaunchConfigService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const halal_fund_launch_config_types_1 = require("./halal-fund-launch-config.types");
const EPSILON = 1e-9;
let HalalFundLaunchConfigService = class HalalFundLaunchConfigService {
    prisma;
    audit;
    delegation;
    constructor(prisma, audit, delegation) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
    }
    async setLaunchConfig(input) {
        await this.assertCapability(input.createdByUserId, 'PARAMETERS', 'INITIATE', 'set Halal Fund launch config');
        if (input.approvedByUserId) {
            await this.assertCapability(input.approvedByUserId, 'PARAMETERS', 'APPROVE', 'approve Halal Fund launch config');
        }
        this.validate(input);
        const previous = await this.getActiveConfig(input.ledgerEntityCode);
        this.checkGovernanceGate(input, previous);
        const nextVersion = (previous?.version ?? 0) + 1;
        const [, created] = await this.prisma.$transaction([
            this.prisma.halalFundLaunchConfig.updateMany({
                where: { ledgerEntityCode: input.ledgerEntityCode, status: 'ACTIVE' },
                data: { status: 'SUPERSEDED' },
            }),
            this.prisma.halalFundLaunchConfig.create({
                data: {
                    ledgerEntityCode: input.ledgerEntityCode,
                    version: nextVersion,
                    status: 'ACTIVE',
                    launchDate: input.launchDate,
                    launchPrice: input.launchPrice,
                    offerSpreadPct: input.offerSpreadPct,
                    bidSpreadPct: input.bidSpreadPct,
                    feeRates: input.feeRates,
                    boardResolutionRef: input.boardResolutionRef,
                    ssbResolutionRef: input.ssbResolutionRef,
                    createdByUserId: input.createdByUserId,
                    approvedByUserId: input.approvedByUserId,
                },
            }),
        ]);
        await this.audit.record({
            actorUserId: input.createdByUserId,
            action: 'CREATE',
            entityType: 'halal_fund_launch_config',
            entityId: `${input.ledgerEntityCode}:v${nextVersion}`,
            before: previous ? this.snapshot(previous) : null,
            after: this.snapshot(created),
        });
        return created;
    }
    async getActiveConfig(ledgerEntityCode) {
        return this.prisma.halalFundLaunchConfig.findFirst({
            where: { ledgerEntityCode, status: 'ACTIVE' },
            orderBy: { version: 'desc' },
        });
    }
    async listActiveConfigs() {
        return this.prisma.halalFundLaunchConfig.findMany({ where: { status: 'ACTIVE' } });
    }
    checkGovernanceGate(input, previous) {
        if (!previous)
            return;
        const priceChanged = this.decimalChanged(input.launchPrice, previous.launchPrice);
        const offerChanged = this.decimalChanged(input.offerSpreadPct, previous.offerSpreadPct);
        const bidChanged = this.decimalChanged(input.bidSpreadPct, previous.bidSpreadPct);
        const feesChanged = JSON.stringify(input.feeRates) !== JSON.stringify(previous.feeRates);
        if ((priceChanged || offerChanged || bidChanged || feesChanged) &&
            (!input.boardResolutionRef || !input.ssbResolutionRef)) {
            throw new halal_fund_launch_config_types_1.HalalFundLaunchConfigError('Changing launch price, spreads, or fee rates on an ACTIVE Halal Fund launch config requires both boardResolutionRef and ssbResolutionRef (mirrors AMD-01 Board + SSB approval workflow).');
        }
    }
    decimalChanged(next, prev) {
        const prevNum = typeof prev === 'object' && prev !== null && 'toNumber' in prev ? prev.toNumber() : Number(prev);
        return Math.abs(next - prevNum) > EPSILON;
    }
    validate(input) {
        if (input.launchPrice <= 0) {
            throw new halal_fund_launch_config_types_1.HalalFundLaunchConfigError(`launchPrice must be > 0; got ${input.launchPrice}`);
        }
        if (input.offerSpreadPct < 0 || input.bidSpreadPct < 0) {
            throw new halal_fund_launch_config_types_1.HalalFundLaunchConfigError('offerSpreadPct and bidSpreadPct must be >= 0.');
        }
        if (input.feeRates.length === 0) {
            throw new halal_fund_launch_config_types_1.HalalFundLaunchConfigError('feeRates must have at least one fee type (F-HF-04).');
        }
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({
                actorUserId: userId,
                action: 'PERMISSION_DENIED',
                entityType: 'halal_fund_launch_config_activity',
                entityId: activity,
                after: { functionCode, level },
            });
            throw new halal_fund_launch_config_types_1.HalalFundLaunchConfigError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
    snapshot(row) {
        return {
            version: row.version,
            status: row.status,
            launchDate: row.launchDate.toISOString().slice(0, 10),
            launchPrice: row.launchPrice?.toString(),
            offerSpreadPct: row.offerSpreadPct?.toString(),
            bidSpreadPct: row.bidSpreadPct?.toString(),
            feeRates: row.feeRates,
            boardResolutionRef: row.boardResolutionRef,
            ssbResolutionRef: row.ssbResolutionRef,
        };
    }
};
exports.HalalFundLaunchConfigService = HalalFundLaunchConfigService;
exports.HalalFundLaunchConfigService = HalalFundLaunchConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService])
], HalalFundLaunchConfigService);
//# sourceMappingURL=halal-fund-launch-config.service.js.map