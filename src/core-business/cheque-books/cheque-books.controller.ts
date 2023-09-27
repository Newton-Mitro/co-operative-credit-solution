import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ChequeBooksService } from './cheque-books.service';
import { CreateChequeBookDto } from './dto/create-cheque-book.dto';
import { UpdateChequeBookDto } from './dto/update-cheque-book.dto';

@Controller('cheque-books')
export class ChequeBooksController {
  constructor(private readonly chequeBooksService: ChequeBooksService) {}

  @Post()
  create(@Body() createChequeBookDto: CreateChequeBookDto) {
    return this.chequeBooksService.create(createChequeBookDto);
  }

  @Get()
  findAll() {
    return this.chequeBooksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chequeBooksService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateChequeBookDto: UpdateChequeBookDto,
  ) {
    return this.chequeBooksService.update(+id, updateChequeBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chequeBooksService.remove(+id);
  }
}
