import { PartialType } from '@nestjs/mapped-types';
import { CreateScheduleRealizationDto } from './create-schedule-realization.dto';

export class UpdateScheduleRealizationDto extends PartialType(CreateScheduleRealizationDto) {}
