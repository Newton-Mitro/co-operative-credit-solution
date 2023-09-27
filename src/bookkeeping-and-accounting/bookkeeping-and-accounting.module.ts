import { Module } from '@nestjs/common';
import { AccountBooksModule } from './account-books/account-books.module';
import { ChartOfAccountsModule } from './chart-of-accounts/chart-of-accounts.module';
import { GeneralLedgerClosingBalancesModule } from './general-ledger-closing-balances/general-ledger-closing-balances.module';
import { GeneralLedgersModule } from './general-ledgers/general-ledgers.module';

@Module({
  imports: [
    AccountBooksModule,
    ChartOfAccountsModule,
    GeneralLedgersModule,
    GeneralLedgerClosingBalancesModule,
  ],
})
export class BookkeepingAndAccountingModule {}
