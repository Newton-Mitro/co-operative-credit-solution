import { Module } from '@nestjs/common';
import { AccountSchedulesModule } from './account-schedules/account-schedules.module';
import { ChequeBooksModule } from './cheque-books/cheque-books.module';
import { ChequeLeafsModule } from './cheque-leafs/cheque-leafs.module';
import { DeedOfAgreementsModule } from './deed-of-agreements/deed-of-agreements.module';
import { ProductsModule } from './products/products.module';
import { SubsidiaryLedgerAccountsModule } from './subsidiary-ledger-accounts/subsidiary-ledger-accounts.module';
import { SubsidiaryLedgerClosingBalancesModule } from './subsidiary-ledger-closing-balances/subsidiary-ledger-closing-balances.module';

@Module({
  imports: [
    ChequeBooksModule,
    ChequeLeafsModule,
    ProductsModule,
    SubsidiaryLedgerAccountsModule,
    DeedOfAgreementsModule,
    AccountSchedulesModule,
    SubsidiaryLedgerClosingBalancesModule,
  ],
})
export class CoreBusinessModule {}
