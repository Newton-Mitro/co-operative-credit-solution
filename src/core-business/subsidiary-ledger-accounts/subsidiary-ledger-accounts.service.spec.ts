import { Test, TestingModule } from '@nestjs/testing';
import { SubsidiaryLedgerAccountsService } from './subsidiary-ledger-accounts.service';

describe('SubsidiaryLedgerAccountsService', () => {
  let service: SubsidiaryLedgerAccountsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubsidiaryLedgerAccountsService],
    }).compile();

    service = module.get<SubsidiaryLedgerAccountsService>(SubsidiaryLedgerAccountsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
