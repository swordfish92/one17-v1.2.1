import type { Request, Response, NextFunction } from 'express';
import { SESSION_COOKIE_NAME } from '../auth/session-auth.guard';
import { PORTAL_SESSION_COOKIE_NAME } from '../portal-auth/portal-session-auth.guard';

const STATE_CHANGING_METHODS = new Set(['POST', 'PUT', 'PATCH', 'DELETE']);

function originFromReferer(referer: string | undefined): string | null {
  if (!referer) return null;
  try {
    const u = new URL(referer);
    return `${u.protocol}//${u.host}`;
  } catch {
    return null;
  }
}

// Invariant 68(c) H-04 (CHECK22 v1.0.1 remediation): defense-in-depth
// against cross-site request forgery, independent of the CORS allowlist
// (CORS governs what a compliant browser lets a cross-origin SCRIPT do;
// this rejects the request at the server regardless of how it arrived).
// Scoped to requests carrying one of this app's own session cookies —
// that is the actual CSRF-relevant surface (ambient cookie authority a
// browser attaches automatically). Requests with neither session cookie
// (the login endpoints themselves, before a cookie exists; external
// webhook callers like the payment gateway adapter, which authenticate
// via their own HMAC signature and are never browser-originated) are not
// exposed to CSRF in the first place — a browser cannot forge a valid
// HMAC signature or forge presence of a cookie that was never set — so
// gating this check on cookie presence avoids breaking those legitimate
// non-browser callers while still closing the gap for every authenticated
// session-cookie action (approvals, transfers, RBAC changes, ...).
export function originCheckMiddleware(getAllowedOrigins: () => string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!STATE_CHANGING_METHODS.has(req.method)) return next();

    const hasSessionCookie = Boolean(
      req.cookies?.[SESSION_COOKIE_NAME] || req.cookies?.[PORTAL_SESSION_COOKIE_NAME],
    );
    if (!hasSessionCookie) return next();

    const origin = req.headers.origin ?? originFromReferer(req.headers.referer);
    const allowedOrigins = getAllowedOrigins();
    if (!origin || !allowedOrigins.includes(origin)) {
      res.status(403).json({
        statusCode: 403,
        message: 'Request origin could not be verified.',
      });
      return;
    }
    next();
  };
}
