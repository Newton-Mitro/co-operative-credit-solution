import { Module } from '@nestjs/common';
import { ChequeBooksService } from './cheque-books.service';
import { ChequeBooksController } from './cheque-books.controller';

@Module({
  controllers: [ChequeBooksController],
  providers: [ChequeBooksService],
})
export class ChequeBooksModule {}
