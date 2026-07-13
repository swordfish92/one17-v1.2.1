import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { PortalAuthModule } from '../portal-auth/portal-auth.module';
import { WmModule } from '../wm/wm.module';
import { ComplaintModule } from '../complaint/complaint.module';
import { ClientMessagingModule } from '../client-messaging/client-messaging.module';
import { StatementModule } from '../statement/statement.module';
import { CertificateModule } from '../certificate/certificate.module';
import { LetterModule } from '../letter/letter.module';
import { PaymentGatewayModule } from '../payment-gateway/payment-gateway.module';
import { SubscriptionModule } from '../subscription/subscription.module';
import { NotificationModule } from '../notification/notification.module';
import { ProductModule } from '../product/product.module';
import { MarketingModule } from '../marketing/marketing.module';
import { PortalWmController } from './portal-wm.controller';

// Deliberately its own module, imported directly by AppModule (NOT nested
// inside OpsApiModule) — the portal realm's controllers are never wired
// through the same module tree as the ops SessionAuthGuard/CapabilityGuard
// controllers, keeping the "separate auth realm" boundary visible in the
// module graph itself, not just at runtime. AuditModule is imported
// directly (not just transitively via PortalAuthModule) because
// PortalSessionAuthGuard is applied via @UseGuards() on PortalWmController,
// declared HERE — Nest resolves a guard's own constructor dependencies
// against the module that hosts the controller, not just the module that
// exports the guard class (same rule OpsApiModule documents for
// SessionAuthGuard/CapabilityGuard).
@Module({
  imports: [AuditModule, PortalAuthModule, WmModule, ComplaintModule, ClientMessagingModule, StatementModule, CertificateModule, LetterModule, PaymentGatewayModule, SubscriptionModule, NotificationModule, ProductModule, MarketingModule],
  controllers: [PortalWmController],
})
export class PortalWmModule {}
