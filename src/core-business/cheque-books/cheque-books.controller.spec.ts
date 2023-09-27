import { Test, TestingModule } from '@nestjs/testing';
import { ChequeBooksController } from './cheque-books.controller';
import { ChequeBooksService } from './cheque-books.service';

describe('ChequeBooksController', () => {
  let controller: ChequeBooksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChequeBooksController],
      providers: [ChequeBooksService],
    }).compile();

    controller = module.get<ChequeBooksController>(ChequeBooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
