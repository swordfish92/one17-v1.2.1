import { Body, Controller, Headers, Post, Req } from '@nestjs/common';
import type { RawBodyRequest } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import type { Request } from 'express';
import { PaymentGatewayService } from '../payment-gateway/payment-gateway.service';
import { GatewayWebhookDto } from './ops-api.types';

// Invariant 55(a) (CHECK12): the SECOND unauthenticated controller in this
// codebase (the first is PublicIntakeController, invariant 28d). No
// SessionAuthGuard/CapabilityGuard by design -- a payment gateway vendor
// calls this server-to-server, it holds no browser session. Authenticity
// is HMAC-signature-based instead (PaymentGatewayService.receiveWebhook
// verifies against the ACTIVE provider's webhookSecret), not
// cookie/capability-based. Idempotent on gatewayEventRef -- a retried
// delivery is a safe no-op. A tight @Throttle tightens the global
// 120/60s default (app.module.ts); real bot/replay protection beyond the
// signature check is the same flagged gap public/intake already documents
// -- no provider is contracted, so there is nothing live to harden against
// yet (invariant 55a PARK: vendor selection).
//
// Invariant 73(b) (CHECK27): ONE route per REAL vendor added below the
// legacy synthetic-payload route -- each vendor's own webhook URL, own
// header, own payload shape, verified by the matching adapter in
// src/payment-gateway/adapters/. @Body() is typed as a bare
// Record<string, unknown> (no class-validator DTO) deliberately: the
// global ValidationPipe (whitelist:true, forbidNonWhitelisted:true, see
// main.ts) only validates params with a class-validator-decorated
// metatype -- an untyped plain-object param is Nest's own documented way
// to accept an arbitrary vendor JSON body through that pipe unmodified,
// since a real vendor payload's exact field set is the vendor's contract,
// not ours to whitelist. Each vendor route still returns 200 on any real
// (verified) webhook, even a non-settlement one, per every vendor's own
// documented "ack fast" requirement -- only a failed *signature* check
// throws (-> non-200), matching what every vendor treats as an unhealthy
// endpoint worth retrying/disabling.
@Controller('payment-gateway/webhook')
export class PaymentGatewayWebhookController {
  constructor(private readonly gateway: PaymentGatewayService) {}

  @Post()
  @Throttle({ default: { limit: 30, ttl: 60_000 } })
  async receive(@Body() dto: GatewayWebhookDto) {
    const result = await this.gateway.receiveWebhook(dto);
    return { id: result.id, status: result.status };
  }

  @Post('paystack')
  @Throttle({ default: { limit: 30, ttl: 60_000 } })
  async receivePaystack(@Headers() headers: Record<string, string | string[] | undefined>, @Body() body: Record<string, unknown>) {
    const result = await this.gateway.receiveVendorWebhook('PAYSTACK', headers, body);
    return result ? { received: true, id: result.id, status: result.status } : { received: true, booked: false };
  }

  // Invariant 75(d) (CHECK28, v1.2.1 audit remediation): Flutterwave's
  // signature scheme HMACs the RAW request body, not a re-serialized
  // JSON.stringify(parsedBody) -- @Req() hands the adapter req.rawBody
  // (populated by main.ts's rawBody:true) alongside the normal parsed
  // @Body(). See flutterwave.adapter.ts / types.ts's rawBody doc.
  @Post('flutterwave')
  @Throttle({ default: { limit: 30, ttl: 60_000 } })
  async receiveFlutterwave(@Headers() headers: Record<string, string | string[] | undefined>, @Body() body: Record<string, unknown>, @Req() req: RawBodyRequest<Request>) {
    const result = await this.gateway.receiveVendorWebhook('FLUTTERWAVE', headers, body, req.rawBody);
    return result ? { received: true, id: result.id, status: result.status } : { received: true, booked: false };
  }

  @Post('monnify')
  @Throttle({ default: { limit: 30, ttl: 60_000 } })
  async receiveMonnify(@Headers() headers: Record<string, string | string[] | undefined>, @Body() body: Record<string, unknown>) {
    const result = await this.gateway.receiveVendorWebhook('MONNIFY', headers, body);
    return result ? { received: true, id: result.id, status: result.status } : { received: true, booked: false };
  }

  // Invariant 75(d) (CHECK28, v1.2.1 audit remediation): Paymish is HARD-
  // DISABLED -- no reachable executable route at all until a real vendor
  // contract exists. The @Post('paymish') route is deleted outright (a
  // genuine 404 to any caller), not merely wired to an adapter that
  // throws -- PaymishAdapter itself is also gutted to an inert stub (see
  // paymish.adapter.ts) so the same hard-disable holds even for a direct
  // service-level call bypassing this controller.
}
