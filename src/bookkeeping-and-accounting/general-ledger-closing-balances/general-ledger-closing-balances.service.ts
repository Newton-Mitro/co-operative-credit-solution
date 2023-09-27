import { Injectable } from '@nestjs/common';
import { CreateGeneralLedgerClosingBalanceDto } from './dto/create-general-ledger-closing-balance.dto';
import { UpdateGeneralLedgerClosingBalanceDto } from './dto/update-general-ledger-closing-balance.dto';

@Injectable()
export class GeneralLedgerClosingBalancesService {
  create(createGeneralLedgerClosingBalanceDto: CreateGeneralLedgerClosingBalanceDto) {
    return 'This action adds a new generalLedgerClosingBalance';
  }

  findAll() {
    return `This action returns all generalLedgerClosingBalances`;
  }

  findOne(id: number) {
    return `This action returns a #${id} generalLedgerClosingBalance`;
  }

  update(id: number, updateGeneralLedgerClosingBalanceDto: UpdateGeneralLedgerClosingBalanceDto) {
    return `This action updates a #${id} generalLedgerClosingBalance`;
  }

  remove(id: number) {
    return `This action removes a #${id} generalLedgerClosingBalance`;
  }
}
