import { Test, TestingModule } from '@nestjs/testing';
import { AccountSchedulesController } from './account-schedules.controller';
import { AccountSchedulesService } from './account-schedules.service';

describe('AccountSchedulesController', () => {
  let controller: AccountSchedulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountSchedulesController],
      providers: [AccountSchedulesService],
    }).compile();

    controller = module.get<AccountSchedulesController>(AccountSchedulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
