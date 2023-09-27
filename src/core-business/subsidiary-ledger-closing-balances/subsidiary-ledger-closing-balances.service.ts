import { Injectable } from '@nestjs/common';
import { CreateSubsidiaryLedgerClosingBalanceDto } from './dto/create-subsidiary-ledger-closing-balance.dto';
import { UpdateSubsidiaryLedgerClosingBalanceDto } from './dto/update-subsidiary-ledger-closing-balance.dto';

@Injectable()
export class SubsidiaryLedgerClosingBalancesService {
  create(createSubsidiaryLedgerClosingBalanceDto: CreateSubsidiaryLedgerClosingBalanceDto) {
    return 'This action adds a new subsidiaryLedgerClosingBalance';
  }

  findAll() {
    return `This action returns all subsidiaryLedgerClosingBalances`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subsidiaryLedgerClosingBalance`;
  }

  update(id: number, updateSubsidiaryLedgerClosingBalanceDto: UpdateSubsidiaryLedgerClosingBalanceDto) {
    return `This action updates a #${id} subsidiaryLedgerClosingBalance`;
  }

  remove(id: number) {
    return `This action removes a #${id} subsidiaryLedgerClosingBalance`;
  }
}
