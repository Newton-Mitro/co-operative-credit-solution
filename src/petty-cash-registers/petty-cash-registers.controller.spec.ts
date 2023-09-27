import { Test, TestingModule } from '@nestjs/testing';
import { PettyCashRegistersController } from './petty-cash-registers.controller';
import { PettyCashRegistersService } from './petty-cash-registers.service';

describe('PettyCashRegistersController', () => {
  let controller: PettyCashRegistersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PettyCashRegistersController],
      providers: [PettyCashRegistersService],
    }).compile();

    controller = module.get<PettyCashRegistersController>(PettyCashRegistersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
