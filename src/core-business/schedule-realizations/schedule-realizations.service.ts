import { Injectable } from '@nestjs/common';
import { CreateScheduleRealizationDto } from './dto/create-schedule-realization.dto';
import { UpdateScheduleRealizationDto } from './dto/update-schedule-realization.dto';

@Injectable()
export class ScheduleRealizationsService {
  create(createScheduleRealizationDto: CreateScheduleRealizationDto) {
    return 'This action adds a new scheduleRealization';
  }

  findAll() {
    return `This action returns all scheduleRealizations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scheduleRealization`;
  }

  update(id: number, updateScheduleRealizationDto: UpdateScheduleRealizationDto) {
    return `This action updates a #${id} scheduleRealization`;
  }

  remove(id: number) {
    return `This action removes a #${id} scheduleRealization`;
  }
}
