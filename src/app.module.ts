import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BookkeepingAndAccountingModule } from './bookkeeping-and-accounting/bookkeeping-and-accounting.module';
import { CoreBusinessModule } from './core-business/core-business.module';
import { CustomerAndMemberSupportModule } from './customer-and-member-support/customer-and-member-support.module';
import { KycModule } from './kyc/kyc.module';
import { PettyCashRegistersModule } from './petty-cash-registers/petty-cash-registers.module';
import { UsersModule } from './users/users.module';
import { VoucherAndTransactionsModule } from './voucher-and-transactions/voucher-and-transactions.module';
import { ChequesModule } from './cheques/cheques.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    KycModule,
    CustomerAndMemberSupportModule,
    CoreBusinessModule,
    BookkeepingAndAccountingModule,
    VoucherAndTransactionsModule,
    PettyCashRegistersModule,
    ChequesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
