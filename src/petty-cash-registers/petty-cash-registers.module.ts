import { Module } from '@nestjs/common';
import { PettyCashRegistersService } from './petty-cash-registers.service';
import { PettyCashRegistersController } from './petty-cash-registers.controller';

@Module({
  controllers: [PettyCashRegistersController],
  providers: [PettyCashRegistersService],
})
export class PettyCashRegistersModule {}
