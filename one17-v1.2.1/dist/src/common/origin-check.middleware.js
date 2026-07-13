"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.originCheckMiddleware = originCheckMiddleware;
const session_auth_guard_1 = require("../auth/session-auth.guard");
const portal_session_auth_guard_1 = require("../portal-auth/portal-session-auth.guard");
const STATE_CHANGING_METHODS = new Set(['POST', 'PUT', 'PATCH', 'DELETE']);
function originFromReferer(referer) {
    if (!referer)
        return null;
    try {
        const u = new URL(referer);
        return `${u.protocol}//${u.host}`;
    }
    catch {
        return null;
    }
}
function originCheckMiddleware(getAllowedOrigins) {
    return (req, res, next) => {
        if (!STATE_CHANGING_METHODS.has(req.method))
            return next();
        const hasSessionCookie = Boolean(req.cookies?.[session_auth_guard_1.SESSION_COOKIE_NAME] || req.cookies?.[portal_session_auth_guard_1.PORTAL_SESSION_COOKIE_NAME]);
        if (!hasSessionCookie)
            return next();
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
//# sourceMappingURL=origin-check.middleware.js.map