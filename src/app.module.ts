import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { BookkeepingAndAccountingModule } from './bookkeeping-and-accounting/bookkeeping-and-accounting.module';
import { ChequesModule } from './cheques/cheques.module';
import { CoreBusinessModule } from './core-business/core-business.module';
import { CustomerAndMemberSupportModule } from './customer-and-member-support/customer-and-member-support.module';
import { DatabaseModule } from './infrastructure/mongoose/database.module';
import { MongooseModelsModule } from './infrastructure/mongoose/mongoose-models.module';
import { KycModule } from './kyc/kyc.module';
import { PettyCashRegistersModule } from './petty-cash-registers/petty-cash-registers.module';
import { UsersModule } from './users/users.module';
import { VoucherAndTransactionsModule } from './voucher-and-transactions/voucher-and-transactions.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    MongooseModelsModule,
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
})
export class AppModule {}
