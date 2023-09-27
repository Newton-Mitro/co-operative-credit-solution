import { Module } from '@nestjs/common';
import { SubsidiaryLedgerAccountsService } from './subsidiary-ledger-accounts.service';
import { SubsidiaryLedgerAccountsController } from './subsidiary-ledger-accounts.controller';

@Module({
  controllers: [SubsidiaryLedgerAccountsController],
  providers: [SubsidiaryLedgerAccountsService],
})
export class SubsidiaryLedgerAccountsModule {}
