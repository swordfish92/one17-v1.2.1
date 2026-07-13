import { ConsoleLogger } from '@nestjs/common';
export declare class StructuredLogger extends ConsoleLogger {
    private readonly configuredLevel;
    private write;
    log(message: unknown, context?: string): void;
    error(message: unknown, stack?: string, context?: string): void;
    warn(message: unknown, context?: string): void;
    debug(message: unknown, context?: string): void;
    verbose(message: unknown, context?: string): void;
}
