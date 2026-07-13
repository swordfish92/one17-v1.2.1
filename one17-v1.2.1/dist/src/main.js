"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const node_crypto_1 = require("node:crypto");
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const helmet_1 = __importDefault(require("helmet"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app_module_1 = require("./app.module");
const domain_exception_filter_1 = require("./common/domain-exception.filter");
const origin_check_middleware_1 = require("./common/origin-check.middleware");
const bigint_json_1 = require("./common/bigint-json");
const structured_logger_service_1 = require("./common/structured-logger.service");
const request_context_1 = require("./common/request-context");
async function bootstrap() {
    (0, bigint_json_1.installBigIntJsonSupport)();
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { logger: new structured_logger_service_1.StructuredLogger(), rawBody: true });
    const trustProxyHops = parseInt(process.env.TRUST_PROXY_HOPS ?? '0', 10);
    if (trustProxyHops > 0) {
        app.set('trust proxy', trustProxyHops);
    }
    const allowedOrigins = [
        process.env.OPS_UI_ORIGIN ?? 'http://localhost:5173',
        process.env.PORTAL_UI_ORIGIN ?? 'http://localhost:5174',
    ];
    app.use((0, helmet_1.default)());
    app.use((0, cookie_parser_1.default)());
    app.use((0, origin_check_middleware_1.originCheckMiddleware)(() => allowedOrigins));
    app.use((req, _res, next) => {
        const requestId = (0, node_crypto_1.randomUUID)();
        req.requestId = requestId;
        request_context_1.requestContext.run({ requestId }, next);
    });
    app.enableCors({
        origin: allowedOrigins,
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
    app.useGlobalFilters(new domain_exception_filter_1.DomainExceptionFilter());
    if (process.env.NODE_ENV !== 'production') {
        const config = new swagger_1.DocumentBuilder()
            .setTitle('One17 Ops API')
            .setDescription('Internal ops API — onboarding, workflow inbox, approvals')
            .setVersion('1.0')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('api-docs', app, document);
    }
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map