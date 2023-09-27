import { Test, TestingModule } from '@nestjs/testing';
import { ChequeLeafsService } from './cheque-leafs.service';

describe('ChequeLeafsService', () => {
  let service: ChequeLeafsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChequeLeafsService],
    }).compile();

    service = module.get<ChequeLeafsService>(ChequeLeafsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
