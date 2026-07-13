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
exports.AuditService = void 0;
const node_crypto_1 = require("node:crypto");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const canonical_json_1 = require("./canonical-json");
let AuditService = class AuditService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async record(input) {
        await this.prisma.$transaction(async (tx) => {
            const [state] = await tx.$queryRaw `
        SELECT "last_hash" FROM "audit_chain_state" WHERE "id" = 1 FOR UPDATE
      `;
            const previousHash = state?.last_hash ?? null;
            const occurredAt = new Date();
            const payload = (0, canonical_json_1.canonicalStringify)({
                occurredAt: occurredAt.toISOString(),
                actorUserId: input.actorUserId ?? null,
                actorRole: input.actorRole ?? null,
                action: input.action,
                entityType: input.entityType,
                entityId: input.entityId,
                workflowStep: input.workflowStep ?? null,
                before: input.before ?? null,
                after: input.after ?? null,
            });
            const tamperHash = (0, node_crypto_1.createHash)('sha256')
                .update((previousHash ?? '') + payload)
                .digest('hex');
            await tx.auditTrail.create({
                data: {
                    occurredAt,
                    actorUserId: input.actorUserId,
                    actorRole: input.actorRole,
                    action: input.action,
                    entityType: input.entityType,
                    entityId: input.entityId,
                    workflowStep: input.workflowStep,
                    before: (input.before ?? undefined),
                    after: (input.after ?? undefined),
                    ipAddress: input.ipAddress,
                    sessionId: input.sessionId,
                    requestId: input.requestId,
                    previousHash,
                    tamperHash,
                },
            });
            await tx.auditChainState.update({
                where: { id: 1 },
                data: { lastHash: tamperHash },
            });
        });
    }
    async verifyChainIntegrity() {
        const rows = await this.prisma.auditTrail.findMany({
            orderBy: [{ occurredAt: 'asc' }, { id: 'asc' }],
        });
        const failures = [];
        let expectedPrevious = null;
        for (const row of rows) {
            if (row.previousHash !== expectedPrevious) {
                failures.push({
                    id: row.id.toString(),
                    occurredAt: row.occurredAt,
                    reason: `previous_hash chain break — expected ${expectedPrevious ?? 'NULL'}, found ${row.previousHash ?? 'NULL'}`,
                });
            }
            const payload = (0, canonical_json_1.canonicalStringify)({
                occurredAt: row.occurredAt.toISOString(),
                actorUserId: row.actorUserId,
                actorRole: row.actorRole,
                action: row.action,
                entityType: row.entityType,
                entityId: row.entityId,
                workflowStep: row.workflowStep,
                before: row.before,
                after: row.after,
            });
            const recomputed = (0, node_crypto_1.createHash)('sha256')
                .update((row.previousHash ?? '') + payload)
                .digest('hex');
            if (recomputed !== row.tamperHash) {
                failures.push({
                    id: row.id.toString(),
                    occurredAt: row.occurredAt,
                    reason: `tamper_hash mismatch — stored ${row.tamperHash}, recomputed ${recomputed} (row content or hash was altered after insert)`,
                });
            }
            expectedPrevious = row.tamperHash;
        }
        return { ok: failures.length === 0, rowsChecked: rows.length, failures };
    }
};
exports.AuditService = AuditService;
exports.AuditService = AuditService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuditService);
//# sourceMappingURL=audit.service.js.map