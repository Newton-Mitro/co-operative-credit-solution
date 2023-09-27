import { Injectable } from '@nestjs/common';
import { CreateAccountScheduleDto } from './dto/create-account-schedule.dto';
import { UpdateAccountScheduleDto } from './dto/update-account-schedule.dto';

@Injectable()
export class AccountSchedulesService {
  create(createAccountScheduleDto: CreateAccountScheduleDto) {
    return 'This action adds a new accountSchedule';
  }

  findAll() {
    return `This action returns all accountSchedules`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountSchedule`;
  }

  update(id: number, updateAccountScheduleDto: UpdateAccountScheduleDto) {
    return `This action updates a #${id} accountSchedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountSchedule`;
  }
}
