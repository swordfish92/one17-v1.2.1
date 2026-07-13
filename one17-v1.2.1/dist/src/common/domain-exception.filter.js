"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DomainExceptionFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const UNSAFE_ERROR_NAMES = new Set([
    'TypeError', 'RangeError', 'SyntaxError', 'ReferenceError', 'EvalError', 'URIError',
    'PrismaClientKnownRequestError', 'PrismaClientValidationError', 'PrismaClientInitializationError',
    'PrismaClientRustPanicError', 'PrismaClientUnknownRequestError',
]);
let DomainExceptionFilter = DomainExceptionFilter_1 = class DomainExceptionFilter {
    logger = new common_1.Logger(DomainExceptionFilter_1.name);
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const res = ctx.getResponse();
        const req = ctx.getRequest();
        if (exception instanceof common_1.HttpException) {
            res.status(exception.getStatus()).json(exception.getResponse());
            return;
        }
        if (exception instanceof Error && !UNSAFE_ERROR_NAMES.has(exception.name)) {
            const isAuthorizationFlavored = /Authorization|PermissionDenied/.test(exception.name);
            const status = isAuthorizationFlavored ? 403 : 400;
            res.status(status).json({ statusCode: status, message: exception.message, error: exception.name });
            return;
        }
        this.logger.error(`Unhandled ${exception?.name ?? typeof exception} on ${req.method} ${req.originalUrl}: ${exception?.message ?? String(exception)}`, exception?.stack);
        res.status(500).json({ statusCode: 500, message: 'Internal server error' });
    }
};
exports.DomainExceptionFilter = DomainExceptionFilter;
exports.DomainExceptionFilter = DomainExceptionFilter = DomainExceptionFilter_1 = __decorate([
    (0, common_1.Catch)()
], DomainExceptionFilter);
//# sourceMappingURL=domain-exception.filter.js.map