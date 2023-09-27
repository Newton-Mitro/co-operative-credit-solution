import { Test, TestingModule } from '@nestjs/testing';
import { GeneralLedgersService } from './general-ledgers.service';

describe('GeneralLedgersService', () => {
  let service: GeneralLedgersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeneralLedgersService],
    }).compile();

    service = module.get<GeneralLedgersService>(GeneralLedgersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
