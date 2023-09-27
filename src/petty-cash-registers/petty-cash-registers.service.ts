import { Injectable } from '@nestjs/common';
import { CreatePettyCashRegisterDto } from './dto/create-petty-cash-register.dto';
import { UpdatePettyCashRegisterDto } from './dto/update-petty-cash-register.dto';

@Injectable()
export class PettyCashRegistersService {
  create(createPettyCashRegisterDto: CreatePettyCashRegisterDto) {
    return 'This action adds a new pettyCashRegister';
  }

  findAll() {
    return `This action returns all pettyCashRegisters`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pettyCashRegister`;
  }

  update(id: number, updatePettyCashRegisterDto: UpdatePettyCashRegisterDto) {
    return `This action updates a #${id} pettyCashRegister`;
  }

  remove(id: number) {
    return `This action removes a #${id} pettyCashRegister`;
  }
}
