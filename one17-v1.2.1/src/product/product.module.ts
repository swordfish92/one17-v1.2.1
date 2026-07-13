import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { ParametersModule } from '../parameters/parameters.module';
import { LedgerModule } from '../ledger/ledger.module';
import { ProductService } from './product.service';
import { ProductFactoryService } from './product-factory.service';
import { OffersService } from './offers.service';

@Module({
  imports: [AuditModule, DelegationModule, WorkflowModule, ParametersModule, LedgerModule],
  providers: [ProductService, ProductFactoryService, OffersService],
  exports: [ProductService, ProductFactoryService, OffersService],
})
export class ProductModule {}
