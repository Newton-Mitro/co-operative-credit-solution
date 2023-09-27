import { Module } from '@nestjs/common';
import { GeneralLedgerClosingBalancesService } from './general-ledger-closing-balances.service';
import { GeneralLedgerClosingBalancesController } from './general-ledger-closing-balances.controller';

@Module({
  controllers: [GeneralLedgerClosingBalancesController],
  providers: [GeneralLedgerClosingBalancesService],
})
export class GeneralLedgerClosingBalancesModule {}
