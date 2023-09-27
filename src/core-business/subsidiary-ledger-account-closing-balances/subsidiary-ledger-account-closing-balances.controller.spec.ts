import { Test, TestingModule } from '@nestjs/testing';
import { SubsidiaryLedgerAccountClosingBalancesController } from './subsidiary-ledger-account-closing-balances.controller';
import { SubsidiaryLedgerAccountClosingBalancesService } from './subsidiary-ledger-account-closing-balances.service';

describe('SubsidiaryLedgerAccountClosingBalancesController', () => {
  let controller: SubsidiaryLedgerAccountClosingBalancesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubsidiaryLedgerAccountClosingBalancesController],
      providers: [SubsidiaryLedgerAccountClosingBalancesService],
    }).compile();

    controller = module.get<SubsidiaryLedgerAccountClosingBalancesController>(SubsidiaryLedgerAccountClosingBalancesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
