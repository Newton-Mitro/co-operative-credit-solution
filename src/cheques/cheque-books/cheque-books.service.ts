import { Injectable } from '@nestjs/common';
import { CreateChequeBookDto } from './dto/create-cheque-book.dto';
import { UpdateChequeBookDto } from './dto/update-cheque-book.dto';

@Injectable()
export class ChequeBooksService {
  create(createChequeBookDto: CreateChequeBookDto) {
    return 'This action adds a new chequeBook';
  }

  findAll() {
    return `This action returns all chequeBooks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chequeBook`;
  }

  update(id: number, updateChequeBookDto: UpdateChequeBookDto) {
    return `This action updates a #${id} chequeBook`;
  }

  remove(id: number) {
    return `This action removes a #${id} chequeBook`;
  }
}
