import { Module } from '@nestjs/common';
import { AccountSchedulesService } from './account-schedules.service';
import { AccountSchedulesController } from './account-schedules.controller';

@Module({
  controllers: [AccountSchedulesController],
  providers: [AccountSchedulesService],
})
export class AccountSchedulesModule {}
