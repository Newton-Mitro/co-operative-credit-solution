import { Test, TestingModule } from '@nestjs/testing';
import { GeneralLedgersController } from './general-ledgers.controller';
import { GeneralLedgersService } from './general-ledgers.service';

describe('GeneralLedgersController', () => {
  let controller: GeneralLedgersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeneralLedgersController],
      providers: [GeneralLedgersService],
    }).compile();

    controller = module.get<GeneralLedgersController>(GeneralLedgersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
