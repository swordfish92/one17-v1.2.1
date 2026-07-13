import { ConsoleLogger, LogLevel } from '@nestjs/common';
import { getCurrentRequestId } from './request-context';

// RES-001 F-01 (CHECK23, v1.0.2): the honest gap CHECK22_EVIDENCE.md §5b/§8
// recorded was "plain NestJS console Logger, no JSON, no log-level config,
// no request-ID-to-log-line correlation." This closes it. One JSON object
// per line -- {timestamp, level, context, message, requestId, ...meta} --
// so a log aggregator (or a human with `jq`) can filter/correlate without
// parsing colorized free text. LOG_LEVEL env var controls the floor
// (default 'log', i.e. log/warn/error but not debug/verbose) -- same
// level names NestJS's own LogLevel type already uses, so no new
// vocabulary to learn.
//
// Extends ConsoleLogger rather than implementing LoggerService from
// scratch: NestJS's internal framework logging (module resolution,
// route mapping at boot) calls the same four methods this overrides, so
// subclassing keeps that output flowing through the same JSON path
// instead of requiring two logging systems to reconcile.
const LEVEL_ORDER: LogLevel[] = ['verbose', 'debug', 'log', 'warn', 'error'];

function levelEnabled(configured: LogLevel, incoming: LogLevel): boolean {
  return LEVEL_ORDER.indexOf(incoming) >= LEVEL_ORDER.indexOf(configured);
}

function resolveConfiguredLevel(): LogLevel {
  const raw = (process.env.LOG_LEVEL ?? 'log').toLowerCase();
  return (LEVEL_ORDER as string[]).includes(raw) ? (raw as LogLevel) : 'log';
}

export class StructuredLogger extends ConsoleLogger {
  private readonly configuredLevel = resolveConfiguredLevel();

  private write(level: LogLevel, message: unknown, context?: string, extra?: Record<string, unknown>) {
    if (!levelEnabled(this.configuredLevel, level)) return;
    const line = {
      timestamp: new Date().toISOString(),
      level,
      context: context ?? this.context,
      message: typeof message === 'string' ? message : JSON.stringify(message),
      requestId: getCurrentRequestId(),
      ...extra,
    };
    // error/warn to stderr, everything else to stdout -- standard stream
    // discipline so a log shipper can split severity by fd alone.
    const target = level === 'error' || level === 'warn' ? console.error : console.log;
    target(JSON.stringify(line));
  }

  log(message: unknown, context?: string) {
    this.write('log', message, context);
  }
  error(message: unknown, stack?: string, context?: string) {
    this.write('error', message, context, stack ? { stack } : undefined);
  }
  warn(message: unknown, context?: string) {
    this.write('warn', message, context);
  }
  debug(message: unknown, context?: string) {
    this.write('debug', message, context);
  }
  verbose(message: unknown, context?: string) {
    this.write('verbose', message, context);
  }
}
