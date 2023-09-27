import { Module } from '@nestjs/common';
import { PeoplesService } from './peoples.service';
import { PeoplesController } from './peoples.controller';

@Module({
  controllers: [PeoplesController],
  providers: [PeoplesService],
})
export class PeoplesModule {}
