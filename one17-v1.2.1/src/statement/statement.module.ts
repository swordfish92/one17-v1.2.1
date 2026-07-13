import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { LetterheadModule } from '../letterhead/letterhead.module';
import { StatementService } from './statement.service';

@Module({
  imports: [PrismaModule, LetterheadModule],
  providers: [StatementService],
  exports: [StatementService],
})
export class StatementModule {}
