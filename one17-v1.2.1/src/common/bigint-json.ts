// Invariant 30 (CLAUDE.md): root-cause fix for the CounterpartyService
// .onboard() BigInt-serialization defect found 2026-07-05 — Nest's default
// JSON serializer throws on a bare BigInt, and the per-controller
// stringify-at-the-boundary helpers already in this codebase
// (CounterpartyService.serializeCounterparty, WmService's serializeAsset/
// serializeAssessmentRun) only ever protect the ONE call site each was
// written for, leaving every other controller exposed to the same crash —
// whack-a-mole, not a fix. Patching BigInt.prototype.toJSON once, at
// process bootstrap, makes JSON.stringify (and therefore every Express
// res.json() call app-wide, present and future) safe for any BigInt
// anywhere in any response body.
export function installBigIntJsonSupport() {
  (BigInt.prototype as unknown as { toJSON(): string }).toJSON = function (this: bigint) {
    return this.toString();
  };
}
