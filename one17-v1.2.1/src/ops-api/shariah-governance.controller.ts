import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { ShariahGovernanceService } from '../shariah-governance/shariah-governance.service';
import { ProductService } from '../product/product.service';
import { PrismaService } from '../prisma/prisma.service';
import { ApproveProductShariahDto } from './ops-api.types';

// CHECK5 item 5l: Shariah Governance approval register — gated on the
// EXISTING SHARIAH_RECORDS function (SHARIAH_REV/MD_CEO/COMPLIANCE/
// AUDITOR/SUPER_ADMIN already hold VIEW; no new capability invented).
@Controller('shariah-governance')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class ShariahGovernanceController {
  constructor(
    private readonly shariah: ShariahGovernanceService,
    private readonly product: ProductService,
    private readonly prisma: PrismaService,
  ) {}

  @Get('members')
  @RequiresCapability('SHARIAH_RECORDS', 'VIEW')
  async listMembers() {
    return this.shariah.listMembers();
  }

  @Get('resolutions')
  @RequiresCapability('SHARIAH_RECORDS', 'VIEW')
  async listResolutions() {
    return this.shariah.listResolutions();
  }

  @Get('purification-records')
  @RequiresCapability('SHARIAH_RECORDS', 'VIEW')
  async listPurificationRecords() {
    return this.shariah.listPurificationRecords();
  }

  @Get('compliance-checks')
  @RequiresCapability('SHARIAH_RECORDS', 'VIEW')
  async listComplianceChecks() {
    return this.shariah.listComplianceChecks();
  }

  // Invariant 44(b): ProductService.approveProductShariah has existed since
  // CHECK9 with ZERO controller wiring at all -- the product-factory's
  // "mandatory Shariah-approval gate before ACTIVE" needs a real screen
  // action to record one, not just a service method only smoke tests ever
  // called.
  @Get('products-pending-shariah')
  @RequiresCapability('SHARIAH_RECORDS', 'VIEW')
  async listProductsPendingShariah() {
    return this.prisma.product.findMany({ where: { shariahApprovedAt: null }, orderBy: { code: 'asc' } });
  }

  @Post('products/:code/approve-shariah')
  @RequiresCapability('SHARIAH_RECORDS', 'APPROVE')
  async approveProductShariah(@Param('code') code: string, @Body() dto: ApproveProductShariahDto, @CurrentUser() user: AuthenticatedUser) {
    return this.product.approveProductShariah({
      productCode: code,
      ssbResolutionRef: dto.ssbResolutionRef,
      approvedByUserId: user.userId,
    });
  }
}
