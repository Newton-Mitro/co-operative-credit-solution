import { Module } from '@nestjs/common';
import { AccountBooksService } from './account-books.service';
import { AccountBooksController } from './account-books.controller';

@Module({
  controllers: [AccountBooksController],
  providers: [AccountBooksService],
})
export class AccountBooksModule {}
