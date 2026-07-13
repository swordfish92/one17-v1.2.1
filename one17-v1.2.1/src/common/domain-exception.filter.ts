import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from '@nestjs/common';
import type { Request, Response } from 'express';

// Invariant 68(c) H-06 (CHECK22 v1.0.1 remediation): this codebase's own
// convention -- both the 65 dedicated `XxxError extends Error` subclasses
// AND many plain `throw new Error('human message')` call sites across
// services -- is a DELIBERATELY authored, client-safe message (e.g.
// "SUPER_ADMIN cannot approve their own RBAC change", "Product X is
// already ACTIVE."). The smoke suite's own expectReject() assertions and
// the ops-ui/portal-ui's own error-toast UX both depend on that message
// reaching the client unchanged, so a blanket "sanitize every Error" pass
// would be a real regression, not a fix.
//
// What is NOT safe, and never author-reviewed for client exposure: a
// built-in JS RUNTIME error (TypeError/RangeError/...) or a raw Prisma
// DRIVER error -- neither is ever something this codebase's domain logic
// deliberately throws with a considered message; both only occur from a
// genuine bug or unexpected state (a Prisma constraint-violation message
// literally embeds column/table names; a TypeError message can embed
// variable names from the stack). The audit's finding was that this
// filter previously sent .message to the client unconditionally for
// EVERY Error including these. This name-based exclusion list is the
// narrow fix: only genuinely-unexpected exception types are sanitized,
// every deliberately-thrown domain error (subclassed or bare) is
// untouched.
const UNSAFE_ERROR_NAMES = new Set([
  'TypeError', 'RangeError', 'SyntaxError', 'ReferenceError', 'EvalError', 'URIError',
  'PrismaClientKnownRequestError', 'PrismaClientValidationError', 'PrismaClientInitializationError',
  'PrismaClientRustPanicError', 'PrismaClientUnknownRequestError',
]);

@Catch()
export class DomainExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(DomainExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();

    if (exception instanceof HttpException) {
      res.status(exception.getStatus()).json(exception.getResponse());
      return;
    }

    if (exception instanceof Error && !UNSAFE_ERROR_NAMES.has(exception.name)) {
      const isAuthorizationFlavored = /Authorization|PermissionDenied/.test(exception.name);
      const status = isAuthorizationFlavored ? 403 : 400;
      res.status(status).json({ statusCode: status, message: exception.message, error: exception.name });
      return;
    }

    // Unexpected/unsafe: full detail to the log only, generic message to
    // the client, correct 500-class status (this was previously
    // misclassified as 400 alongside every deliberate domain error).
    this.logger.error(
      `Unhandled ${(exception as Error)?.name ?? typeof exception} on ${req.method} ${req.originalUrl}: ${(exception as Error)?.message ?? String(exception)}`,
      (exception as Error)?.stack,
    );
    res.status(500).json({ statusCode: 500, message: 'Internal server error' });
  }
}
