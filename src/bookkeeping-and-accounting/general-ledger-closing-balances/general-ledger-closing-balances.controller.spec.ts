import { Test, TestingModule } from '@nestjs/testing';
import { GeneralLedgerClosingBalancesController } from './general-ledger-closing-balances.controller';
import { GeneralLedgerClosingBalancesService } from './general-ledger-closing-balances.service';

describe('GeneralLedgerClosingBalancesController', () => {
  let controller: GeneralLedgerClosingBalancesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeneralLedgerClosingBalancesController],
      providers: [GeneralLedgerClosingBalancesService],
    }).compile();

    controller = module.get<GeneralLedgerClosingBalancesController>(GeneralLedgerClosingBalancesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
