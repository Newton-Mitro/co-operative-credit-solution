import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountScheduleDto } from './create-account-schedule.dto';

export class UpdateAccountScheduleDto extends PartialType(CreateAccountScheduleDto) {}
