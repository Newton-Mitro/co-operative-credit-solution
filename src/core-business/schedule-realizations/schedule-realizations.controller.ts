import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateScheduleRealizationDto } from './dto/create-schedule-realization.dto';
import { UpdateScheduleRealizationDto } from './dto/update-schedule-realization.dto';
import { ScheduleRealizationsService } from './schedule-realizations.service';

@Controller('schedule-realizations')
export class ScheduleRealizationsController {
  constructor(
    private readonly scheduleRealizationsService: ScheduleRealizationsService,
  ) {}

  @Post()
  create(@Body() createScheduleRealizationDto: CreateScheduleRealizationDto) {
    return this.scheduleRealizationsService.create(
      createScheduleRealizationDto,
    );
  }

  @Get()
  findAll() {
    return this.scheduleRealizationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scheduleRealizationsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateScheduleRealizationDto: UpdateScheduleRealizationDto,
  ) {
    return this.scheduleRealizationsService.update(
      +id,
      updateScheduleRealizationDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scheduleRealizationsService.remove(+id);
  }
}
