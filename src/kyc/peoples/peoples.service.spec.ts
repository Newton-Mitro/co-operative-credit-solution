import { Test, TestingModule } from '@nestjs/testing';
import { PeoplesService } from './peoples.service';

describe('PeoplesService', () => {
  let service: PeoplesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeoplesService],
    }).compile();

    service = module.get<PeoplesService>(PeoplesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
