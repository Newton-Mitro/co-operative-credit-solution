import { Test, TestingModule } from '@nestjs/testing';
import { AccountBooksService } from './account-books.service';

describe('AccountBooksService', () => {
  let service: AccountBooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountBooksService],
    }).compile();

    service = module.get<AccountBooksService>(AccountBooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
