import { Test, TestingModule } from '@nestjs/testing';
import { ChequeLeafsController } from './cheque-leafs.controller';
import { ChequeLeafsService } from './cheque-leafs.service';

describe('ChequeLeafsController', () => {
  let controller: ChequeLeafsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChequeLeafsController],
      providers: [ChequeLeafsService],
    }).compile();

    controller = module.get<ChequeLeafsController>(ChequeLeafsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
