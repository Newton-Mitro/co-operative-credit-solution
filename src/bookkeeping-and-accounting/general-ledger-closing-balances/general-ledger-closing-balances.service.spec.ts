import { Test, TestingModule } from '@nestjs/testing';
import { GeneralLedgerClosingBalancesService } from './general-ledger-closing-balances.service';

describe('GeneralLedgerClosingBalancesService', () => {
  let service: GeneralLedgerClosingBalancesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeneralLedgerClosingBalancesService],
    }).compile();

    service = module.get<GeneralLedgerClosingBalancesService>(GeneralLedgerClosingBalancesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
