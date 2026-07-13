import { AsyncLocalStorage } from 'node:async_hooks';

// RES-001 F-01 (CHECK23, v1.0.2): makes the per-request UUID main.ts
// already generates (req.requestId, previously only ever threaded into
// audit_trail rows via explicit @CurrentUser()-style plumbing) available
// to the structured logger WITHOUT changing every call site's signature.
// AsyncLocalStorage propagates through the entire async call chain that
// starts inside RequestContextMiddleware's run() below — every Logger
// call made while handling one request, however deep, can read the same
// requestId back out.
interface RequestContextStore {
  requestId: string;
}

export const requestContext = new AsyncLocalStorage<RequestContextStore>();

export function getCurrentRequestId(): string | undefined {
  return requestContext.getStore()?.requestId;
}
