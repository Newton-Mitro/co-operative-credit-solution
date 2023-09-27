import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AccountBooksService } from './account-books.service';
import { CreateAccountBookDto } from './dto/create-account-book.dto';
import { UpdateAccountBookDto } from './dto/update-account-book.dto';

@Controller('account-books')
export class AccountBooksController {
  constructor(private readonly accountBooksService: AccountBooksService) {}

  @Post()
  create(@Body() createAccountBookDto: CreateAccountBookDto) {
    return this.accountBooksService.create(createAccountBookDto);
  }

  @Get()
  findAll() {
    return this.accountBooksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountBooksService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccountBookDto: UpdateAccountBookDto,
  ) {
    return this.accountBooksService.update(+id, updateAccountBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountBooksService.remove(+id);
  }
}
