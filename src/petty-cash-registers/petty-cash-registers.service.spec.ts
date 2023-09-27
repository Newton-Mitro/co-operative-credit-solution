import { Test, TestingModule } from '@nestjs/testing';
import { PettyCashRegistersService } from './petty-cash-registers.service';

describe('PettyCashRegistersService', () => {
  let service: PettyCashRegistersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PettyCashRegistersService],
    }).compile();

    service = module.get<PettyCashRegistersService>(PettyCashRegistersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
