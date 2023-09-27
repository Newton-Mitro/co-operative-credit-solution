import { Test, TestingModule } from '@nestjs/testing';
import { AccountSchedulesService } from './account-schedules.service';

describe('AccountSchedulesService', () => {
  let service: AccountSchedulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountSchedulesService],
    }).compile();

    service = module.get<AccountSchedulesService>(AccountSchedulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
