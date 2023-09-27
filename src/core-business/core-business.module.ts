import { Module } from '@nestjs/common';
import { ChequeBooksModule } from './cheque-books/cheque-books.module';
import { ChequeLeafsModule } from './cheque-leafs/cheque-leafs.module';
import { DeedOfAgreementsModule } from './deed-of-agreements/deed-of-agreements.module';
import { NoteRegistersModule } from './note-registers/note-registers.module';
import { ProductsModule } from './products/products.module';
import { ScheduleRealizationsModule } from './schedule-realizations/schedule-realizations.module';
import { SchedulesModule } from './schedules/schedules.module';
import { SubsidiaryLedgerAccountClosingBalancesModule } from './subsidiary-ledger-account-closing-balances/subsidiary-ledger-account-closing-balances.module';
import { SubsidiaryLedgerAccountsModule } from './subsidiary-ledger-accounts/subsidiary-ledger-accounts.module';

@Module({
  imports: [
    ChequeBooksModule,
    ChequeLeafsModule,
    NoteRegistersModule,
    ProductsModule,
    ScheduleRealizationsModule,
    SchedulesModule,
    SubsidiaryLedgerAccountsModule,
    SubsidiaryLedgerAccountClosingBalancesModule,
    DeedOfAgreementsModule,
  ],
})
export class CoreBusinessModule {}
