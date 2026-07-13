-- Invariant 75(b) (CHECK28, v1.2.1 audit remediation, audit finding
-- CF-02): "ensureScreened stores + compares a SCREENING FINGERPRINT
-- (normalized current name, active source codes + list versions,
-- threshold-config version, timestamp); the gate RE-SCREENS whenever the
-- fingerprint differs ... OR the run exceeds an approved freshness age
-- (governed config). A stale run NEVER satisfies the gate."
--
-- screening_gateway_config.freshness_max_age_days: the governed freshness
-- ceiling (default 90 days -- quarterly, matching this platform's own KYC
-- periodic-review cadence, not a vendor-mandated number).
ALTER TABLE "screening_gateway_config"
  ADD COLUMN "freshness_max_age_days" INTEGER NOT NULL DEFAULT 90;

-- screening_run.fingerprint: the fingerprint string a LOCAL_LISTS run was
-- produced against. Nullable -- existing rows (and MANUAL/COMMERCIAL-mode
-- runs going forward) carry no fingerprint, which is itself a "never
-- matches a freshly computed fingerprint" state -- ensureScreened treats a
-- null fingerprint the same as a mismatched one, forcing a fresh screen
-- rather than silently trusting old data.
ALTER TABLE "screening_run"
  ADD COLUMN "fingerprint" TEXT;
