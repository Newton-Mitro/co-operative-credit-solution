import { Module } from '@nestjs/common';
import { ScheduleRealizationsService } from './schedule-realizations.service';
import { ScheduleRealizationsController } from './schedule-realizations.controller';

@Module({
  controllers: [ScheduleRealizationsController],
  providers: [ScheduleRealizationsService],
})
export class ScheduleRealizationsModule {}
