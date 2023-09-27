import { Module } from '@nestjs/common';
import { GeneralLedgersService } from './general-ledgers.service';
import { GeneralLedgersController } from './general-ledgers.controller';

@Module({
  controllers: [GeneralLedgersController],
  providers: [GeneralLedgersService],
})
export class GeneralLedgersModule {}
