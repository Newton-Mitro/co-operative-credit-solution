import { Test, TestingModule } from '@nestjs/testing';
import { SubsidiaryLedgerClosingBalancesController } from './subsidiary-ledger-closing-balances.controller';
import { SubsidiaryLedgerClosingBalancesService } from './subsidiary-ledger-closing-balances.service';

describe('SubsidiaryLedgerClosingBalancesController', () => {
  let controller: SubsidiaryLedgerClosingBalancesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubsidiaryLedgerClosingBalancesController],
      providers: [SubsidiaryLedgerClosingBalancesService],
    }).compile();

    controller = module.get<SubsidiaryLedgerClosingBalancesController>(SubsidiaryLedgerClosingBalancesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
