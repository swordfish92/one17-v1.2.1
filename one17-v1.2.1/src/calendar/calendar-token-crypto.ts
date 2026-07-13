import { createCipheriv, createDecipheriv, createHmac, randomBytes, scryptSync } from 'crypto';

// Invariant 73(b) (CHECK27), 55(c2)(iv) Phase B: ExternalCalendarConnection's
// own schema.prisma doc comment requires tokens "stored encrypted at the
// application layer (never plaintext)". A grep of this codebase for an
// existing crypto.createCipheriv/createDecipheriv precedent turned up
// nothing (every other "sensitive secret" on the platform -- AttendanceProvider
// .clientSecret, PaymentGatewayProvider's webhookSecret, etc. -- is a
// write-only-masked PLAINTEXT column, never itself encrypted at rest, since
// those are platform-wide app credentials a maker/checker workflow already
// governs the display of). This is therefore a clean, from-scratch AES-256-
// GCM implementation -- the modern authenticated-encryption standard --
// rather than an adaptation of some other module's shape.
//
// Key material: CALENDAR_TOKEN_ENCRYPTION_KEY (any-length passphrase from
// the environment) is stretched to a 32-byte key via scrypt with a fixed,
// non-secret salt (the salt's job is domain separation, not secrecy -- the
// passphrase is the actual secret). Production must set a real key; local/
// dev runs fall back to a fixed, clearly-named insecure default so the rest
// of the platform's "never block local development" posture holds, but a
// production boot with no real key is refused outright (the same choice
// main.ts already makes for e.g. DATABASE_URL implicitly failing fast).
const ENV_KEY = process.env.CALENDAR_TOKEN_ENCRYPTION_KEY;
if (!ENV_KEY && process.env.NODE_ENV === 'production') {
  throw new Error(
    'CALENDAR_TOKEN_ENCRYPTION_KEY must be set in production -- ExternalCalendarConnection.accessTokenEncrypted/refreshTokenEncrypted are encrypted at rest per the schema doc comment, and there is no safe default key for a live environment.',
  );
}
const DEV_FALLBACK_KEY = 'one17-dev-only-INSECURE-calendar-token-key-do-not-use-in-production';
const ENCRYPTION_KEY = scryptSync(ENV_KEY ?? DEV_FALLBACK_KEY, 'one17-calendar-token-crypto-salt-v1', 32);

const GCM_IV_BYTES = 12; // NIST SP 800-38D recommended IV length for GCM.

// Format: base64(iv).base64(authTag).base64(ciphertext) -- three dot-joined
// segments so decryptToken can split deterministically without a length
// prefix. IV is fresh per encryption call (GCM requires never reusing an
// IV under the same key), so the same plaintext token encrypts differently
// every time -- as it should for values this sensitive.
export function encryptToken(plaintext: string): string {
  const iv = randomBytes(GCM_IV_BYTES);
  const cipher = createCipheriv('aes-256-gcm', ENCRYPTION_KEY, iv);
  const encrypted = Buffer.concat([cipher.update(plaintext, 'utf8'), cipher.final()]);
  const authTag = cipher.getAuthTag();
  return [iv.toString('base64'), authTag.toString('base64'), encrypted.toString('base64')].join('.');
}

export function decryptToken(ciphertext: string): string {
  const parts = ciphertext.split('.');
  if (parts.length !== 3) {
    throw new Error('Malformed encrypted calendar token payload (expected iv.authTag.ciphertext).');
  }
  const [ivB64, tagB64, dataB64] = parts;
  const decipher = createDecipheriv('aes-256-gcm', ENCRYPTION_KEY, Buffer.from(ivB64, 'base64'));
  decipher.setAuthTag(Buffer.from(tagB64, 'base64'));
  const decrypted = Buffer.concat([decipher.update(Buffer.from(dataB64, 'base64')), decipher.final()]);
  return decrypted.toString('utf8');
}

// ---------------------------------------------------------------------------
// OAuth2 "state" parameter: signed (HMAC-SHA256), not encrypted -- its job
// is CSRF protection (proving the callback corresponds to an authorization
// request THIS backend actually issued, to the SAME user session, recently),
// not confidentiality. No separate OAuthState DB table exists (schema is
// frozen for this task) -- the state token is self-contained and verified
// statelessly, same "no extra persistence for a short-lived, purely
// protocol-level value" posture as CalendarFeedToken's own bare-token
// design elsewhere in this module.
// ---------------------------------------------------------------------------
export interface OAuthStatePayload {
  providerId: string;
  userId: string;
  nonce: string;
  iat: number;
}

export function signOAuthState(payload: { providerId: string; userId: string }): string {
  const body: OAuthStatePayload = { ...payload, nonce: randomBytes(8).toString('hex'), iat: Date.now() };
  const encoded = Buffer.from(JSON.stringify(body)).toString('base64url');
  const signature = createHmac('sha256', ENCRYPTION_KEY).update(encoded).digest('base64url');
  return `${encoded}.${signature}`;
}

const OAUTH_STATE_MAX_AGE_MS = 10 * 60_000; // 10 minutes -- generous for a human to complete a vendor consent screen, tight enough that a leaked/replayed state token from an old flow is refused.

export function verifyOAuthState(state: string): OAuthStatePayload {
  const parts = state.split('.');
  if (parts.length !== 2) {
    throw new Error('Malformed OAuth state parameter.');
  }
  const [encoded, signature] = parts;
  const expected = createHmac('sha256', ENCRYPTION_KEY).update(encoded).digest('base64url');
  if (signature !== expected) {
    throw new Error('OAuth state signature mismatch -- possible CSRF or a tampered redirect.');
  }
  const payload = JSON.parse(Buffer.from(encoded, 'base64url').toString('utf8')) as OAuthStatePayload;
  if (Date.now() - payload.iat > OAUTH_STATE_MAX_AGE_MS) {
    throw new Error('OAuth state expired -- restart the calendar connect flow.');
  }
  return payload;
}
