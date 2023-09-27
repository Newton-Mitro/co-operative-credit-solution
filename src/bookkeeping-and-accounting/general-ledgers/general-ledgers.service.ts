import { Injectable } from '@nestjs/common';
import { CreateGeneralLedgerDto } from './dto/create-general-ledger.dto';
import { UpdateGeneralLedgerDto } from './dto/update-general-ledger.dto';

@Injectable()
export class GeneralLedgersService {
  create(createGeneralLedgerDto: CreateGeneralLedgerDto) {
    return 'This action adds a new generalLedger';
  }

  findAll() {
    return `This action returns all generalLedgers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} generalLedger`;
  }

  update(id: number, updateGeneralLedgerDto: UpdateGeneralLedgerDto) {
    return `This action updates a #${id} generalLedger`;
  }

  remove(id: number) {
    return `This action removes a #${id} generalLedger`;
  }
}
