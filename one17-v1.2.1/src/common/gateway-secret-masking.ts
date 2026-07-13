// Invariant 73(b)/(d) (CHECK27): the shared write-only-masked-secret
// helper every vendor gateway service (Payment/Bureau/AI/Attendance/
// Calendar) uses so a GET/list response never carries a live credential --
// only a human PROPOSING a new value ever sends one, over POST, and it is
// never echoed back. Purely a serialization-layer concern (like invariant
// 30's BigInt-to-JSON fix) -- no schema change, the underlying columns stay
// exactly as they are.
//
// Two shapes recur across every gateway's provider-config row:
//  1. A single typed secret STRING column (webhookSecret/clientSecret/
//     apiKey) -- maskSecret() reduces it to a boolean + last-4 preview.
//  2. A free-form vendor-config JSON BLOB (apiConfig/credentialConfig) for
//     whatever extra fields a given vendor's credential form needs --
//     maskJsonConfigKeys() exposes only which keys were configured (never
//     their values), maskJsonConfigAllowlist() exposes a named SAFE subset
//     in full (e.g. a username) while dropping everything else outright.
// Each service still composes these into its own return shape (a
// PurchaseOrder-shaped preview means something different per vendor), but
// the actual redaction logic is written once, here, not five times.

const SENSITIVE_KEY_PATTERN = /password|secret|apikey|api_key|token|privatekey|private_key|clientsecret|client_secret/i;

export interface MaskedSecret {
  hasSecret: boolean;
  secretPreview: string | null;
}

// Last 4 characters only, prefixed with a fixed-width mask -- never enough
// to reconstruct or meaningfully narrow the real value, just enough for a
// human to recognize "yes, this is the key I rotated in on Tuesday."
export function maskSecret(value: string | null | undefined): MaskedSecret {
  return { hasSecret: !!value, secretPreview: value ? `••••${value.slice(-4)}` : null };
}

// A pending (proposed-but-not-yet-approved) secret is rarer to preview at
// all -- callers that want a preview of the pending value use maskSecret()
// directly; this is for the common case of "just tell me a rotation is in
// flight."
export function hasPendingSecret(value: string | null | undefined): boolean {
  return value != null && value !== '';
}

export interface MaskedJsonConfigKeys {
  configuredKeys: string[];
  sensitiveKeys: string[];
}

// For an arbitrary vendor-config JSON blob: returns which keys were
// configured, WITHOUT their values. sensitiveKeys flags (by name pattern)
// which of those keys should never be shown even as a preview, so a caller
// that wants to preview a handful of known-safe keys can safely exclude
// this list.
export function maskJsonConfigKeys(json: unknown): MaskedJsonConfigKeys {
  if (!json || typeof json !== 'object') return { configuredKeys: [], sensitiveKeys: [] };
  const keys = Object.keys(json as Record<string, unknown>);
  return { configuredKeys: keys, sensitiveKeys: keys.filter((k) => SENSITIVE_KEY_PATTERN.test(k)) };
}

// For a JSON blob where only a KNOWN, explicitly-named SAFE subset of keys
// should ever be echoed back in full (e.g. a TTLock integrator username,
// never its MD5-hashed password) -- every other key, including any the
// caller didn't anticipate, is dropped entirely rather than allow-listed
// by pattern. Fails closed: an unrecognized key never leaks by accident.
export function maskJsonConfigAllowlist(json: unknown, safeKeys: readonly string[]): Record<string, unknown> {
  if (!json || typeof json !== 'object') return {};
  const src = json as Record<string, unknown>;
  const out: Record<string, unknown> = {};
  for (const k of safeKeys) if (k in src) out[k] = src[k];
  return out;
}
