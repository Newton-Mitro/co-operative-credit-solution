import { Injectable } from '@nestjs/common';
import { CreateChequeLeafDto } from './dto/create-cheque-leaf.dto';
import { UpdateChequeLeafDto } from './dto/update-cheque-leaf.dto';

@Injectable()
export class ChequeLeafsService {
  create(createChequeLeafDto: CreateChequeLeafDto) {
    return 'This action adds a new chequeLeaf';
  }

  findAll() {
    return `This action returns all chequeLeafs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chequeLeaf`;
  }

  update(id: number, updateChequeLeafDto: UpdateChequeLeafDto) {
    return `This action updates a #${id} chequeLeaf`;
  }

  remove(id: number) {
    return `This action removes a #${id} chequeLeaf`;
  }
}
