import { Module } from '@nestjs/common';
import { ChequeLeafsService } from './cheque-leafs.service';
import { ChequeLeafsController } from './cheque-leafs.controller';

@Module({
  controllers: [ChequeLeafsController],
  providers: [ChequeLeafsService],
})
export class ChequeLeafsModule {}
