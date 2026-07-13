-- Phase 1 Build Plan step 2: audit_trail, the first table.
-- Hand-authored (not `prisma migrate dev` generated): partitioning, triggers
-- and role grants are not expressible in schema.prisma. Apply with
-- `npx prisma migrate deploy`, not `migrate dev`, so Prisma does not try to
-- diff this against its DSL and "fix" the parts it can't represent.

CREATE TYPE "audit_action" AS ENUM (
  'CREATE', 'UPDATE', 'DELETE', 'APPROVE', 'REJECT', 'EXECUTE',
  'LOGIN', 'LOGIN_FAILED', 'PERMISSION_DENIED'
);

-- Partitioned by year on occurred_at. Postgres requires the partition key to
-- be part of every unique/primary key, hence the composite (id, occurred_at).
CREATE TABLE "audit_trail" (
  "id"            BIGINT GENERATED ALWAYS AS IDENTITY,
  "occurred_at"   TIMESTAMPTZ(6) NOT NULL DEFAULT now(),
  "actor_user_id" UUID,
  "actor_role"    TEXT,
  "action"        "audit_action" NOT NULL,
  "entity_type"   TEXT NOT NULL,
  "entity_id"     TEXT NOT NULL,
  "workflow_step" TEXT,
  "before"        JSONB,
  "after"         JSONB,
  "ip_address"    TEXT,
  "request_id"    UUID,
  "previous_hash" CHAR(64),
  "tamper_hash"   CHAR(64) NOT NULL,
  PRIMARY KEY ("id", "occurred_at")
) PARTITION BY RANGE ("occurred_at");

-- Current + next year prepared now, per Build Plan ("yearly partitioning
-- prepared"). A DEFAULT partition catches anything outside range so inserts
-- never fail for a missing partition; a scheduled job should create next
-- year's partition and drop reliance on DEFAULT well before each year-end
-- (tracked separately — this migration only prepares the two years ahead).
CREATE TABLE "audit_trail_2026" PARTITION OF "audit_trail"
  FOR VALUES FROM ('2026-01-01T00:00:00Z') TO ('2027-01-01T00:00:00Z');
CREATE TABLE "audit_trail_2027" PARTITION OF "audit_trail"
  FOR VALUES FROM ('2027-01-01T00:00:00Z') TO ('2028-01-01T00:00:00Z');
CREATE TABLE "audit_trail_default" PARTITION OF "audit_trail" DEFAULT;

-- Indexes on the parent propagate to all partitions (including ones created
-- later), per Postgres partitioned-index behavior since PG11.
CREATE INDEX "audit_trail_entity_idx" ON "audit_trail" ("entity_type", "entity_id");
CREATE INDEX "audit_trail_actor_idx" ON "audit_trail" ("actor_user_id");
CREATE INDEX "audit_trail_occurred_at_idx" ON "audit_trail" ("occurred_at");

-- Insert-only enforcement, layer 1: block UPDATE/DELETE at the row level.
-- This is the layer that actually matters against "including SUPER_ADMIN" —
-- REVOKE has no effect on a table's owner (owners retain implicit privileges
-- regardless of REVOKE), but triggers fire for the owner too. Bypassing this
-- requires a deliberate `ALTER TABLE ... DISABLE TRIGGER` or DROP TRIGGER
-- first, which is a schema change, not a routine DML mistake or app bug.
CREATE FUNCTION audit_trail_block_mutation() RETURNS TRIGGER AS $$
BEGIN
  RAISE EXCEPTION 'audit_trail is insert-only: % is not permitted on %', TG_OP, TG_TABLE_NAME;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER audit_trail_no_update
  BEFORE UPDATE ON "audit_trail"
  FOR EACH ROW EXECUTE FUNCTION audit_trail_block_mutation();

CREATE TRIGGER audit_trail_no_delete
  BEFORE DELETE ON "audit_trail"
  FOR EACH ROW EXECUTE FUNCTION audit_trail_block_mutation();

-- Insert-only enforcement, layer 2: REVOKE as defense-in-depth for any
-- future least-privilege runtime role (the app does not yet connect as this
-- role — see AUDIT_RUNTIME_DATABASE_URL note in .env.example — but the role
-- and grants are created now so wiring it in later is a config change, not a
-- migration).
-- DEV-ONLY PASSWORD: this matches the plaintext-dev-password convention
-- already used in docker-compose.yml/.env for local Postgres. Never reuse
-- this value, or this pattern, outside local development — production role
-- credentials must come from a secrets manager, not a committed migration.
-- Idempotent CREATE: roles are cluster-global in Postgres, not scoped to one
-- database, so `prisma migrate dev`'s shadow database (a separate database
-- in the same cluster) sees this role as already existing once it's been
-- created once anywhere in the cluster. A bare CREATE ROLE would then fail
-- every subsequent `migrate dev` run.
DO $$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'one17_runtime') THEN
    CREATE ROLE one17_runtime LOGIN PASSWORD 'one17_dev_password_runtime';
  END IF;
END
$$;
GRANT CONNECT ON DATABASE one17_platform TO one17_runtime;
GRANT USAGE ON SCHEMA public TO one17_runtime;
GRANT SELECT, INSERT ON "audit_trail" TO one17_runtime;
REVOKE UPDATE, DELETE, TRUNCATE ON "audit_trail" FROM PUBLIC;
REVOKE UPDATE, DELETE, TRUNCATE ON "audit_trail" FROM one17_runtime;

-- Supporting table for hash-chain computation (see AuditService). Not part
-- of the immutable log itself, so ordinary UPDATE privileges are fine here.
CREATE TABLE "audit_chain_state" (
  "id"         INTEGER PRIMARY KEY DEFAULT 1,
  "last_hash"  CHAR(64),
  "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT now(),
  CONSTRAINT audit_chain_state_singleton CHECK ("id" = 1)
);
INSERT INTO "audit_chain_state" ("id", "last_hash") VALUES (1, NULL);
