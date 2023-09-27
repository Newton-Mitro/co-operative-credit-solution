import { Test, TestingModule } from '@nestjs/testing';
import { AccountBooksController } from './account-books.controller';
import { AccountBooksService } from './account-books.service';

describe('AccountBooksController', () => {
  let controller: AccountBooksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountBooksController],
      providers: [AccountBooksService],
    }).compile();

    controller = module.get<AccountBooksController>(AccountBooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
