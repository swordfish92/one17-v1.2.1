import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../generated/prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      adapter: new PrismaPg({
        connectionString: process.env.DATABASE_URL!,
      }),
    });
  }

  async onModuleInit() {
    await this.$connect();

    try {
      await this.$queryRaw`SELECT 1`;
      console.log('✅ Prisma connected successfully');
    } catch (e) {
      console.error('❌ Prisma test query failed', e);
      throw e;
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}