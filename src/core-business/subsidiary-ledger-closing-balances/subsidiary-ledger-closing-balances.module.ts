import { Module } from '@nestjs/common';
import { SubsidiaryLedgerClosingBalancesService } from './subsidiary-ledger-closing-balances.service';
import { SubsidiaryLedgerClosingBalancesController } from './subsidiary-ledger-closing-balances.controller';

@Module({
  controllers: [SubsidiaryLedgerClosingBalancesController],
  providers: [SubsidiaryLedgerClosingBalancesService],
})
export class SubsidiaryLedgerClosingBalancesModule {}
