import { Module } from '@nestjs/common';
import { SubsidiaryLedgerAccountClosingBalancesService } from './subsidiary-ledger-account-closing-balances.service';
import { SubsidiaryLedgerAccountClosingBalancesController } from './subsidiary-ledger-account-closing-balances.controller';

@Module({
  controllers: [SubsidiaryLedgerAccountClosingBalancesController],
  providers: [SubsidiaryLedgerAccountClosingBalancesService],
})
export class SubsidiaryLedgerAccountClosingBalancesModule {}
