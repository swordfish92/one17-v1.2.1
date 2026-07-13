// Deterministic JSON.stringify: same logical object always produces the same
// byte string, regardless of key insertion order. The hash chain is only
// tamper-evident if this is stable.
export function canonicalStringify(value: unknown): string {
  return JSON.stringify(sortKeysDeep(value));
}

function sortKeysDeep(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(sortKeysDeep);
  }
  // A raw Date has no enumerable own keys — without this check it falls
  // into the object branch below and silently becomes `{}`, which is what
  // it actually stored, since JSON.stringify(date) calls date.toJSON()
  // (== toISOString()) instead of enumerating keys. Converting explicitly
  // here keeps the HASH input identical to what actually gets persisted to
  // the (real) JSON.stringify path in the database write.
  if (value instanceof Date) {
    return value.toISOString();
  }
  if (value !== null && typeof value === 'object') {
    return Object.keys(value)
      .sort()
      .reduce<Record<string, unknown>>((sorted, key) => {
        sorted[key] = sortKeysDeep((value as Record<string, unknown>)[key]);
        return sorted;
      }, {});
  }
  return value;
}
