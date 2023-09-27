import { Module } from '@nestjs/common';
import { ChartOfAccountsService } from './chart-of-accounts.service';
import { ChartOfAccountsController } from './chart-of-accounts.controller';

@Module({
  controllers: [ChartOfAccountsController],
  providers: [ChartOfAccountsService],
})
export class ChartOfAccountsModule {}
