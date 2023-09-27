import { Test, TestingModule } from '@nestjs/testing';
import { SubsidiaryLedgerAccountsController } from './subsidiary-ledger-accounts.controller';
import { SubsidiaryLedgerAccountsService } from './subsidiary-ledger-accounts.service';

describe('SubsidiaryLedgerAccountsController', () => {
  let controller: SubsidiaryLedgerAccountsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubsidiaryLedgerAccountsController],
      providers: [SubsidiaryLedgerAccountsService],
    }).compile();

    controller = module.get<SubsidiaryLedgerAccountsController>(SubsidiaryLedgerAccountsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
