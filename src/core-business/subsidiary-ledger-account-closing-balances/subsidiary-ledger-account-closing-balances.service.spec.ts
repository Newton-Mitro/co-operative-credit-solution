import { Test, TestingModule } from '@nestjs/testing';
import { SubsidiaryLedgerAccountClosingBalancesService } from './subsidiary-ledger-account-closing-balances.service';

describe('SubsidiaryLedgerAccountClosingBalancesService', () => {
  let service: SubsidiaryLedgerAccountClosingBalancesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubsidiaryLedgerAccountClosingBalancesService],
    }).compile();

    service = module.get<SubsidiaryLedgerAccountClosingBalancesService>(SubsidiaryLedgerAccountClosingBalancesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
