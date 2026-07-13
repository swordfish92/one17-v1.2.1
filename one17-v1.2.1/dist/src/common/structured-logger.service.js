"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StructuredLogger = void 0;
const common_1 = require("@nestjs/common");
const request_context_1 = require("./request-context");
const LEVEL_ORDER = ['verbose', 'debug', 'log', 'warn', 'error'];
function levelEnabled(configured, incoming) {
    return LEVEL_ORDER.indexOf(incoming) >= LEVEL_ORDER.indexOf(configured);
}
function resolveConfiguredLevel() {
    const raw = (process.env.LOG_LEVEL ?? 'log').toLowerCase();
    return LEVEL_ORDER.includes(raw) ? raw : 'log';
}
class StructuredLogger extends common_1.ConsoleLogger {
    configuredLevel = resolveConfiguredLevel();
    write(level, message, context, extra) {
        if (!levelEnabled(this.configuredLevel, level))
            return;
        const line = {
            timestamp: new Date().toISOString(),
            level,
            context: context ?? this.context,
            message: typeof message === 'string' ? message : JSON.stringify(message),
            requestId: (0, request_context_1.getCurrentRequestId)(),
            ...extra,
        };
        const target = level === 'error' || level === 'warn' ? console.error : console.log;
        target(JSON.stringify(line));
    }
    log(message, context) {
        this.write('log', message, context);
    }
    error(message, stack, context) {
        this.write('error', message, context, stack ? { stack } : undefined);
    }
    warn(message, context) {
        this.write('warn', message, context);
    }
    debug(message, context) {
        this.write('debug', message, context);
    }
    verbose(message, context) {
        this.write('verbose', message, context);
    }
}
exports.StructuredLogger = StructuredLogger;
//# sourceMappingURL=structured-logger.service.js.map