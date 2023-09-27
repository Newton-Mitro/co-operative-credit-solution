import { Test, TestingModule } from '@nestjs/testing';
import { SubsidiaryLedgerClosingBalancesService } from './subsidiary-ledger-closing-balances.service';

describe('SubsidiaryLedgerClosingBalancesService', () => {
  let service: SubsidiaryLedgerClosingBalancesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubsidiaryLedgerClosingBalancesService],
    }).compile();

    service = module.get<SubsidiaryLedgerClosingBalancesService>(SubsidiaryLedgerClosingBalancesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
