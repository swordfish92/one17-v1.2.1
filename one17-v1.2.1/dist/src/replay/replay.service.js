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
exports.ReplayService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const csv_parser_1 = require("../migration/csv-parser");
const replay_types_1 = require("./replay.types");
let ReplayService = class ReplayService {
    prisma;
    audit;
    delegation;
    constructor(prisma, audit, delegation) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
    }
    async ingestCsv(input) {
        await this.assertCapability(input.uploadedByUserId, 'REPLAY_HARNESS', 'INITIATE', 'ingest a replay-harness source file');
        const lines = input.csvContent.split('\n');
        const content = lines.slice(input.skipLeadingLines).join('\n');
        const records = (0, csv_parser_1.parseCsv)(content);
        const batch = await this.prisma.replayBatch.create({
            data: {
                sourceCode: input.sourceCode,
                fileName: input.fileName,
                totalRows: records.length,
                ingestedByUserId: input.uploadedByUserId,
            },
        });
        const CHUNK = 500;
        for (let i = 0; i < records.length; i += CHUNK) {
            await this.prisma.replaySourceRow.createMany({
                data: records.slice(i, i + CHUNK).map((rawData, j) => ({
                    batchId: batch.id,
                    rowNumber: i + j + 1,
                    rawData,
                })),
            });
        }
        await this.audit.record({
            actorUserId: input.uploadedByUserId,
            action: 'CREATE',
            entityType: 'replay_batch',
            entityId: batch.id,
            after: { sourceCode: input.sourceCode, fileName: input.fileName, totalRows: records.length },
        });
        return batch;
    }
    async listBatches() {
        return this.prisma.replayBatch.findMany({
            orderBy: { createdAt: 'desc' },
            select: { id: true, sourceCode: true, fileName: true, totalRows: true, createdAt: true },
        });
    }
    async reconciliationCounts(sourceCode) {
        const batch = await this.prisma.replayBatch.findFirst({
            where: { sourceCode },
            orderBy: { createdAt: 'desc' },
        });
        if (!batch)
            throw new replay_types_1.ReplayError(`No replay_batch found for source_code ${sourceCode}`);
        const rows = await this.prisma.replaySourceRow.findMany({ where: { batchId: batch.id } });
        const dateKeyPrefixes = ['Date', 'Trade Date', 'Value Date', 'Valuation Date'];
        const idKeyPrefixes = ['Investor ID', 'Txn ID'];
        let plausibleDateRows = 0;
        let defectiveRows = 0;
        const distinctIds = new Set();
        const validDates = [];
        for (const row of rows) {
            const raw = row.rawData;
            const dateKey = Object.keys(raw).find((k) => dateKeyPrefixes.some((p) => k.startsWith(p)));
            const idKey = Object.keys(raw).find((k) => idKeyPrefixes.some((p) => k.startsWith(p)));
            const dateVal = dateKey ? raw[dateKey] : undefined;
            const parsed = dateVal ? parseLooseDate(dateVal) : null;
            if (parsed && !Number.isNaN(parsed.getTime()) && parsed.getFullYear() > 2000) {
                plausibleDateRows++;
                validDates.push(parsed);
            }
            else {
                defectiveRows++;
            }
            if (idKey && raw[idKey])
                distinctIds.add(raw[idKey]);
        }
        const minDate = validDates.length ? new Date(Math.min(...validDates.map((d) => d.getTime()))) : null;
        const maxDate = validDates.length ? new Date(Math.max(...validDates.map((d) => d.getTime()))) : null;
        return {
            sourceCode,
            totalRows: rows.length,
            detail: `${plausibleDateRows} rows carry a plausible calendar date (range ${minDate?.toISOString().slice(0, 10) ?? 'n/a'} to ${maxDate?.toISOString().slice(0, 10) ?? 'n/a'}), ${defectiveRows} rows are workbook artifacts or otherwise undated (placeholder/instruction rows, #VALUE! errors, or a known bad row — not cleaned, staged as-is per instruction), ${distinctIds.size} distinct investor/txn references.`,
        };
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({
                actorUserId: userId,
                action: 'PERMISSION_DENIED',
                entityType: 'replay_activity',
                entityId: activity,
                after: { functionCode, level },
            });
            throw new replay_types_1.ReplayError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.ReplayService = ReplayService;
exports.ReplayService = ReplayService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService])
], ReplayService);
function parseLooseDate(value) {
    const v = value.trim();
    if (!v)
        return null;
    if (/^\d{4}-\d{2}-\d{2}$/.test(v)) {
        const d = new Date(v + 'T00:00:00Z');
        return Number.isNaN(d.getTime()) ? null : d;
    }
    const ddMmmYy = v.match(/^(\d{1,2})-([A-Za-z]{3})-(\d{2,4})$/);
    if (ddMmmYy) {
        const [, day, mon, yearRaw] = ddMmmYy;
        const months = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
        const monthIdx = months[mon.charAt(0).toUpperCase() + mon.slice(1).toLowerCase()];
        if (monthIdx === undefined)
            return null;
        const year = yearRaw.length === 2 ? 2000 + Number(yearRaw) : Number(yearRaw);
        const d = new Date(Date.UTC(year, monthIdx, Number(day)));
        return Number.isNaN(d.getTime()) ? null : d;
    }
    return null;
}
//# sourceMappingURL=replay.service.js.map