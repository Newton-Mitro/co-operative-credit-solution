import { Test, TestingModule } from '@nestjs/testing';
import { ScheduleRealizationsService } from './schedule-realizations.service';

describe('ScheduleRealizationsService', () => {
  let service: ScheduleRealizationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScheduleRealizationsService],
    }).compile();

    service = module.get<ScheduleRealizationsService>(ScheduleRealizationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
