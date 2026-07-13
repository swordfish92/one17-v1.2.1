import { createCipheriv, createDecipheriv, randomBytes, scryptSync } from 'crypto';

// Invariant 75(a) (CHECK28, v1.2.1 audit remediation, audit finding CF-01):
// generalizes calendar-token-crypto.ts's AES-256-GCM pattern (the only
// existing crypto-at-rest precedent in this codebase, built for
// ExternalCalendarConnection's per-user OAuth tokens) to every GATEWAY
// CREDENTIAL column platform-wide -- payment webhook secrets + apiConfig,
// AI provider keys, attendance client-secret/tokens, calendar client-
// secrets, bureau apiConfig, commercial-screening keys -- AND their
// pending-proposed counterparts. Same authenticated-encryption shape as
// calendar-token-crypto.ts, plus KEY VERSIONING (the version that produced
// a ciphertext travels WITH it), so a future key rotation can move to a new
// version gradually via a re-encryption pass rather than needing one
// atomic cutover across every table at once.
//
// Key custody: PHASED per honest deployment reality (the invariant's own
// language) -- the master key lives OUTSIDE the DB, in a persistent
// machine environment variable, the EXACT custody model
// deploy/windows/backup.ps1 already uses for ONE17_BACKUP_PASSPHRASE.
// External KMS/HSM/vault is the named production-hardening/fleet-scale
// upgrade -- not built here, roadmap only.
//
// GATEWAY_SECRET_ENCRYPTION_KEY_V<N> holds the passphrase for key version
// N (any length, stretched to 32 bytes via scrypt with a fixed, non-secret
// salt -- the salt's job is domain separation from calendar-token-crypto's
// own key material, not secrecy). CURRENT_KEY_VERSION is the version new
// encryptions use. Production refuses to boot without the current
// version's key set; dev/local falls back to a fixed, clearly-labelled
// insecure default per version, same "never block local development"
// posture as calendar-token-crypto.ts.
//
// ROTATION PROCEDURE: set GATEWAY_SECRET_ENCRYPTION_KEY_V<N+1>, bump
// CURRENT_KEY_VERSION below, redeploy. Existing ciphertexts keep
// decrypting correctly via their own recorded version (resolveKey reads
// whichever version a given ciphertext names) until
// scripts/reencrypt-gateway-secrets.ts is re-run to rewrite them under the
// new version -- the old env var must stay set until that pass completes.
const CURRENT_KEY_VERSION = 1;
const GCM_IV_BYTES = 12; // NIST SP 800-38D recommended IV length for GCM.
const SALT = 'one17-gateway-secret-crypto-salt-v1'; // domain separation only, not secret

function resolveKey(version: number): Buffer {
  const envVar = `GATEWAY_SECRET_ENCRYPTION_KEY_V${version}`;
  const raw = process.env[envVar];
  if (!raw) {
    if (process.env.NODE_ENV === 'production') {
      throw new Error(
        `${envVar} must be set in production -- gateway credential columns are encrypted at rest per invariant 75(a) (CHECK28), and there is no safe default key for a live environment.`,
      );
    }
    return scryptSync(`one17-dev-only-INSECURE-gateway-secret-key-v${version}-do-not-use-in-production`, SALT, 32);
  }
  return scryptSync(raw, SALT, 32);
}

// Format: v<version>.base64(iv).base64(authTag).base64(ciphertext) -- a
// fresh IV per call (GCM requires never reusing an IV under the same key),
// so the same plaintext encrypts differently every time.
export function encryptSecret(plaintext: string): string {
  const key = resolveKey(CURRENT_KEY_VERSION);
  const iv = randomBytes(GCM_IV_BYTES);
  const cipher = createCipheriv('aes-256-gcm', key, iv);
  const encrypted = Buffer.concat([cipher.update(plaintext, 'utf8'), cipher.final()]);
  const authTag = cipher.getAuthTag();
  return [`v${CURRENT_KEY_VERSION}`, iv.toString('base64'), authTag.toString('base64'), encrypted.toString('base64')].join('.');
}

// Decrypts the v<N>.iv.authTag.ciphertext envelope format. A value that
// does NOT match that shape (wrong part count, or a non-"v<digits>" first
// segment) is treated as legacy/not-yet-migrated plaintext and returned
// unchanged -- scripts/reencrypt-gateway-secrets.ts is the one-time pass
// that converts every existing row to the enveloped form; this fallback is
// what keeps the platform running while that pass is in flight or on a
// fresh dev DB seeded before this invariant, never the intended steady
// state.
export function decryptSecret(value: string): string {
  const parts = value.split('.');
  if (parts.length !== 4 || !/^v\d+$/.test(parts[0])) {
    return value;
  }
  const [versionTag, ivB64, tagB64, dataB64] = parts;
  const version = parseInt(versionTag.slice(1), 10);
  const key = resolveKey(version);
  const decipher = createDecipheriv('aes-256-gcm', key, Buffer.from(ivB64, 'base64'));
  decipher.setAuthTag(Buffer.from(tagB64, 'base64'));
  const decrypted = Buffer.concat([decipher.update(Buffer.from(dataB64, 'base64')), decipher.final()]);
  return decrypted.toString('utf8');
}

// Nullable/empty-string-safe wrappers -- most target columns are nullable
// (pendingClientSecret etc.) and PaymentGatewayProvider.webhookSecret uses
// '' as its own "placeholder row, not yet live" sentinel (see
// PaymentGatewayService.proposeProviderConfig) -- '' is passed through
// unchanged rather than encrypted/decrypted, since it never carries a real
// secret to protect and an empty ciphertext would defeat the point of the
// sentinel (an obviously-empty column at a glance).
export function encryptSecretNullable(value: string | null | undefined): string | null {
  if (value == null || value === '') return value ?? null;
  return encryptSecret(value);
}
export function decryptSecretNullable(value: string | null | undefined): string | null {
  if (value == null || value === '') return value ?? null;
  return decryptSecret(value);
}

// ---------------------------------------------------------------------------
// JSON-config variant -- apiConfig/credentialConfig columns hold an
// arbitrary vendor-specific key/value bag (some of it just as sensitive as
// a bare secret string, e.g. Flutterwave's apiConfig.secretKey). Rather
// than a schema change to a String column, the whole object is serialized
// and encrypted as ONE secret, then wrapped in a small tagged envelope so
// the column stays valid JSON (Prisma's Json column type is unchanged).
// ---------------------------------------------------------------------------
interface EncryptedJsonEnvelope {
  __one17Enc: true;
  v: string; // encryptSecret(JSON.stringify(theRealObject))
}

function isEncryptedJsonEnvelope(value: unknown): value is EncryptedJsonEnvelope {
  return !!value && typeof value === 'object' && (value as any).__one17Enc === true && typeof (value as any).v === 'string';
}

export function encryptJsonSecret(obj: Record<string, unknown> | null | undefined): EncryptedJsonEnvelope | null {
  if (obj == null) return null;
  return { __one17Enc: true, v: encryptSecret(JSON.stringify(obj)) };
}

// A value that isn't the tagged envelope shape is treated as legacy/not-
// yet-migrated plaintext JSON and returned as-is -- same transitional
// fallback rationale as decryptSecret above.
export function decryptJsonSecret(value: unknown): Record<string, unknown> | null {
  if (value == null) return null;
  if (isEncryptedJsonEnvelope(value)) {
    return JSON.parse(decryptSecret(value.v));
  }
  return value as Record<string, unknown>;
}
