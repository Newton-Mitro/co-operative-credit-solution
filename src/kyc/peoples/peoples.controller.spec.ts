import { Test, TestingModule } from '@nestjs/testing';
import { PeoplesController } from './peoples.controller';
import { PeoplesService } from './peoples.service';

describe('PeoplesController', () => {
  let controller: PeoplesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeoplesController],
      providers: [PeoplesService],
    }).compile();

    controller = module.get<PeoplesController>(PeoplesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
