import { Test, TestingModule } from '@nestjs/testing';
import { ChartOfAccountsService } from './chart-of-accounts.service';

describe('ChartOfAccountsService', () => {
  let service: ChartOfAccountsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChartOfAccountsService],
    }).compile();

    service = module.get<ChartOfAccountsService>(ChartOfAccountsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
