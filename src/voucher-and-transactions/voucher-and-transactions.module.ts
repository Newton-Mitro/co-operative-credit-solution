import { Module } from '@nestjs/common';
import { VouchersModule } from './vouchers/vouchers.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [VouchersModule, TransactionsModule]
})
export class VoucherAndTransactionsModule {}
