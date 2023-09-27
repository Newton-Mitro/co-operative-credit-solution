import { Injectable } from '@nestjs/common';
import { CreateAccountBookDto } from './dto/create-account-book.dto';
import { UpdateAccountBookDto } from './dto/update-account-book.dto';

@Injectable()
export class AccountBooksService {
  create(createAccountBookDto: CreateAccountBookDto) {
    return 'This action adds a new accountBook';
  }

  findAll() {
    return `This action returns all accountBooks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountBook`;
  }

  update(id: number, updateAccountBookDto: UpdateAccountBookDto) {
    return `This action updates a #${id} accountBook`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountBook`;
  }
}
