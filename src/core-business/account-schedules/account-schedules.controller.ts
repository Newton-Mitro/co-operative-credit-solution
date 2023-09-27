import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountSchedulesService } from './account-schedules.service';
import { CreateAccountScheduleDto } from './dto/create-account-schedule.dto';
import { UpdateAccountScheduleDto } from './dto/update-account-schedule.dto';

@Controller('account-schedules')
export class AccountSchedulesController {
  constructor(private readonly accountSchedulesService: AccountSchedulesService) {}

  @Post()
  create(@Body() createAccountScheduleDto: CreateAccountScheduleDto) {
    return this.accountSchedulesService.create(createAccountScheduleDto);
  }

  @Get()
  findAll() {
    return this.accountSchedulesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountSchedulesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountScheduleDto: UpdateAccountScheduleDto) {
    return this.accountSchedulesService.update(+id, updateAccountScheduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountSchedulesService.remove(+id);
  }
}
