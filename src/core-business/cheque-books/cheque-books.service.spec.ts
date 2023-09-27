import { Test, TestingModule } from '@nestjs/testing';
import { ChequeBooksService } from './cheque-books.service';

describe('ChequeBooksService', () => {
  let service: ChequeBooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChequeBooksService],
    }).compile();

    service = module.get<ChequeBooksService>(ChequeBooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
