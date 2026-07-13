import 'dotenv/config';
import { randomUUID } from 'node:crypto';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { DomainExceptionFilter } from './common/domain-exception.filter';
import { originCheckMiddleware } from './common/origin-check.middleware';
import { installBigIntJsonSupport } from './common/bigint-json';
import { StructuredLogger } from './common/structured-logger.service';
import { requestContext } from './common/request-context';

async function bootstrap() {
  // Invariant 30: must run before any request is handled — every response
  // in the process may contain a kobo BigInt.
  installBigIntJsonSupport();
  // RES-001 F-01 (CHECK23): passed at creation, not via app.useLogger()
  // after the fact, so module-resolution/boot logging goes through the
  // same structured JSON path as request-time logging.
  // Invariant 75(d) (CHECK28, v1.2.1 audit remediation): rawBody:true keeps
  // Nest's normal JSON body parsing (req.body) exactly as before AND
  // additionally populates req.rawBody (the exact bytes received, before
  // any parse/re-serialize round-trip) -- required for vendor webhook HMAC
  // verification schemes (Flutterwave's own docs: "HMAC-SHA256 over the
  // raw request body") where re-serializing the parsed object via
  // JSON.stringify() is not guaranteed to byte-match what the vendor
  // actually signed (key order, whitespace, number formatting can all
  // differ). See src/payment-gateway/adapters/flutterwave.adapter.ts.
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { logger: new StructuredLogger(), rawBody: true });

  // Invariant 68(c) H-03 (CHECK22 v1.0.1 remediation): production always
  // sits behind Caddy (register-caddy.ps1) — without this, Express sees
  // every request as originating from Caddy's own loopback address, so
  // ThrottlerModule's per-user rate limiting and every audit_trail IP
  // capture site would record the reverse proxy's IP, not the real
  // client's. TRUST_PROXY_HOPS counts exactly the number of reverse
  // proxies in front of the app (1 = Caddy on the same host, the only
  // topology this deployment ships) — trusting an unbounded proxy chain
  // (`trust proxy: true`) would let a client forge X-Forwarded-For
  // itself, so this is a fixed hop count, not "trust everything".
  const trustProxyHops = parseInt(process.env.TRUST_PROXY_HOPS ?? '0', 10);
  if (trustProxyHops > 0) {
    app.set('trust proxy', trustProxyHops);
  }

  // CORS locked to an explicit allowlist (CLAUDE.md Stack Decisions item 4)
  // — never '*', since both realms' session cookies are credentialed. The
  // portal-ui origin is a SEPARATE app (CHECK5 item 3 §7.5) — listing it
  // here does not blur the realm boundary: portal requests still only ever
  // carry the one17_portal_session cookie, which ops guards never read.
  const allowedOrigins = [
    process.env.OPS_UI_ORIGIN ?? 'http://localhost:5173',
    process.env.PORTAL_UI_ORIGIN ?? 'http://localhost:5174',
  ];

  app.use(helmet());
  app.use(cookieParser());
  // Invariant 68(c) H-04: explicit Origin/Referer check on every
  // state-changing request, independent of and in addition to CORS
  // (CORS governs what a BROWSER permits scripts to do; this guards the
  // server itself against a state-changing request that arrives without
  // a browser-enforced CORS preflight at all, e.g. a crafted non-CORS
  // form POST or a replayed request from a non-browser client).
  app.use(originCheckMiddleware(() => allowedOrigins));
  app.use((req: any, _res: any, next: () => void) => {
    const requestId = randomUUID();
    req.requestId = requestId;
    // RES-001 F-01: everything downstream of next() -- guards, controllers,
    // services, the structured logger -- runs inside this async context, so
    // StructuredLogger can read the same requestId back out via
    // getCurrentRequestId() without req being threaded through every call.
    requestContext.run({ requestId }, next);
  });

  app.enableCors({
    origin: allowedOrigins,
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }),
  );
  app.useGlobalFilters(new DomainExceptionFilter());

  // OpenAPI is the ops UI's single source of truth for shared types
  // (CLAUDE.md Stack Decisions item 4 / item 4a-4). Screen-by-screen surface
  // only — no bulk-generated endpoints ahead of consumers.
  // Invariant 68(c) H-05 (CHECK22): the audit's sharpest find here was
  // that a live production Swagger UI hands an unauthenticated visitor a
  // complete map of every route + DTO shape — never mounted in
  // production. Dev/UAT keep it (it's the ops-ui's own type source), so
  // this is an explicit NODE_ENV gate, not a delete.
  if (process.env.NODE_ENV !== 'production') {
    const config = new DocumentBuilder()
      .setTitle('One17 Ops API')
      .setDescription('Internal ops API — onboarding, workflow inbox, approvals')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api-docs', app, document);
  }

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
