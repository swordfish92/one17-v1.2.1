import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { ProcurementService } from '../procurement/procurement.service';

// Check-6B, Budget Spec §4: thin adapter over ProcurementService — every
// rule (encumbrance-must-be-APPROVED gate, 3-way match tolerance, maker!=
// checker payment batch) already lives in the service; this layer is
// authn + capability gating + DTO shape only, same discipline as every
// other controller in this codebase.
@Controller('procurement')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class ProcurementController {
  constructor(private readonly procurement: ProcurementService) {}

  @Get('vendors')
  @RequiresCapability('PROCUREMENT_OPERATIONS', 'VIEW')
  async listVendors() {
    return this.procurement.listVendors();
  }

  @Post('vendors')
  @RequiresCapability('PROCUREMENT_OPERATIONS', 'INITIATE')
  async createVendor(@Body() dto: { vendorCode: string; legalName: string; rcNumber?: string; tin?: string; bankName?: string; bankAccountNumber?: string; bankAccountName?: string }, @CurrentUser() user: AuthenticatedUser) {
    return this.procurement.createVendor({ ...dto, createdByUserId: user.userId });
  }

  @Get('purchase-orders')
  @RequiresCapability('PROCUREMENT_OPERATIONS', 'VIEW')
  async listPurchaseOrders() {
    return this.procurement.listPurchaseOrders();
  }

  @Post('purchase-orders')
  @RequiresCapability('PROCUREMENT_OPERATIONS', 'INITIATE')
  async createPurchaseOrder(
    @Body() dto: { poNumber: string; vendorId: string; encumbranceId: string; ledgerEntityCode: string; description: string; lines: { description: string; quantity: number; unitPriceKobo: string }[] },
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.procurement.createPurchaseOrder({
      ...dto,
      lines: dto.lines.map((l) => ({ description: l.description, quantity: l.quantity, unitPriceKobo: BigInt(l.unitPriceKobo) })),
      createdByUserId: user.userId,
    });
  }

  @Post('purchase-orders/:id/issue')
  @RequiresCapability('PROCUREMENT_OPERATIONS', 'INITIATE')
  async issuePurchaseOrder(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.procurement.issuePurchaseOrder(id, user.userId);
  }

  @Post('purchase-orders/:id/goods-receipt')
  @RequiresCapability('PROCUREMENT_OPERATIONS', 'INITIATE')
  async recordGoodsReceipt(@Param('id') id: string, @Body() dto: { receivedAmountKobo: string; notes?: string }, @CurrentUser() user: AuthenticatedUser) {
    return this.procurement.recordGoodsReceipt(id, BigInt(dto.receivedAmountKobo), dto.notes, user.userId);
  }

  @Post('purchase-orders/:id/invoices')
  @RequiresCapability('PROCUREMENT_OPERATIONS', 'INITIATE')
  async recordVendorInvoice(
    @Param('id') id: string,
    @Body() dto: { vendorId: string; invoiceNumber: string; invoiceAmountKobo: string; invoiceDate: string },
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.procurement.recordVendorInvoice(id, dto.vendorId, dto.invoiceNumber, BigInt(dto.invoiceAmountKobo), new Date(dto.invoiceDate), user.userId);
  }

  @Post('invoices/:id/match')
  @RequiresCapability('PROCUREMENT_OPERATIONS', 'INITIATE')
  async matchInvoice(@Param('id') id: string, @Body() dto: { assetUsefulLifeMonths?: number }, @CurrentUser() user: AuthenticatedUser) {
    return this.procurement.matchInvoice({ invoiceId: id, actorUserId: user.userId, assetUsefulLifeMonths: dto.assetUsefulLifeMonths });
  }

  @Post('payment-batches')
  @RequiresCapability('PROCUREMENT_OPERATIONS', 'INITIATE')
  async createPaymentBatch(@Body() dto: { batchNumber: string; ledgerEntityCode: string; vendorInvoiceIds: string[] }, @CurrentUser() user: AuthenticatedUser) {
    return this.procurement.createPaymentBatch(dto.batchNumber, dto.ledgerEntityCode, dto.vendorInvoiceIds, user.userId);
  }

  @Get('asset-register')
  @RequiresCapability('PROCUREMENT_OPERATIONS', 'VIEW')
  async listAssetRegister() {
    return this.procurement.listAssetRegister();
  }

  // Invariant 51(b-x) (CHECK13): fixed-asset disposal/derecognition.
  @Post('asset-register/:id/dispose')
  @RequiresCapability('ASSET_DISPOSAL', 'INITIATE')
  async disposeAsset(@Param('id') id: string, @Body() dto: { disposalDate: string; proceedsKobo: string; gainLossAccountCode: string }, @CurrentUser() user: AuthenticatedUser) {
    return this.procurement.disposeAsset({
      assetRegisterEntryId: id,
      disposalDate: new Date(dto.disposalDate),
      proceedsKobo: BigInt(dto.proceedsKobo),
      gainLossAccountCode: dto.gainLossAccountCode,
      disposedByUserId: user.userId,
    });
  }
}
