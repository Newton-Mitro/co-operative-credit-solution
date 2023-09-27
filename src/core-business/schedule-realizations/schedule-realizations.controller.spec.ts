import { Test, TestingModule } from '@nestjs/testing';
import { ScheduleRealizationsController } from './schedule-realizations.controller';
import { ScheduleRealizationsService } from './schedule-realizations.service';

describe('ScheduleRealizationsController', () => {
  let controller: ScheduleRealizationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScheduleRealizationsController],
      providers: [ScheduleRealizationsService],
    }).compile();

    controller = module.get<ScheduleRealizationsController>(ScheduleRealizationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
