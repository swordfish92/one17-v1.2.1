import { createHash } from 'node:crypto';
import { Injectable } from '@nestjs/common';
import { Prisma } from '../../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { canonicalStringify } from './canonical-json';
import { RecordAuditEventInput } from './audit.types';

// Everything else in the platform writes here (Build Plan step 2). The
// insert-only guarantee lives in the DB (trigger + REVOKE, see
// prisma/migrations/20260704000000_init_audit_trail/migration.sql); this
// service's job is the hash chain, which is easier to get right in
// application code than in a trigger, and doesn't need to be — it's an
// input to the nightly integrity job, not itself a security boundary.
@Injectable()
export class AuditService {
  constructor(private readonly prisma: PrismaService) {}

  async record(input: RecordAuditEventInput): Promise<void> {
    await this.prisma.$transaction(async (tx) => {
      // SELECT ... FOR UPDATE on the singleton chain-state row serializes
      // concurrent writers so the hash chain has one true order. Prisma's
      // fluent API has no row-lock primitive, hence the raw query.
      const [state] = await tx.$queryRaw<{ last_hash: string | null }[]>`
        SELECT "last_hash" FROM "audit_chain_state" WHERE "id" = 1 FOR UPDATE
      `;
      const previousHash = state?.last_hash ?? null;

      const occurredAt = new Date();
      const payload = canonicalStringify({
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
      const tamperHash = createHash('sha256')
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
          before: (input.before ?? undefined) as
            Prisma.InputJsonValue | undefined,
          after: (input.after ?? undefined) as
            Prisma.InputJsonValue | undefined,
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

  // The nightly integrity job (CLAUDE.md invariant #3 / Build Plan step 2's
  // "SHA-256 tamper hash per row, nightly integrity check") — recomputes
  // every row's expected tamperHash from its own stored content and its
  // predecessor's tamperHash, and confirms the previousHash chain has no
  // break. This is a genuine tamper-EVIDENT check, not a tamper-PREVENTION
  // one — prevention is the DB trigger (BEFORE UPDATE/DELETE, see the
  // init_audit_trail migration); this catches the case where prevention was
  // itself bypassed (trigger disabled, direct superuser write, etc.), since
  // altering a row's content after insert without also correctly
  // recomputing every SUBSEQUENT row's chain is exactly what this detects.
  async verifyChainIntegrity(): Promise<{
    ok: boolean;
    rowsChecked: number;
    failures: { id: string; occurredAt: Date; reason: string }[];
  }> {
    const rows = await this.prisma.auditTrail.findMany({
      orderBy: [{ occurredAt: 'asc' }, { id: 'asc' }],
    });

    const failures: { id: string; occurredAt: Date; reason: string }[] = [];
    let expectedPrevious: string | null = null;

    for (const row of rows) {
      if (row.previousHash !== expectedPrevious) {
        failures.push({
          id: row.id.toString(),
          occurredAt: row.occurredAt,
          reason: `previous_hash chain break — expected ${expectedPrevious ?? 'NULL'}, found ${row.previousHash ?? 'NULL'}`,
        });
      }

      const payload = canonicalStringify({
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
      const recomputed = createHash('sha256')
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
}
