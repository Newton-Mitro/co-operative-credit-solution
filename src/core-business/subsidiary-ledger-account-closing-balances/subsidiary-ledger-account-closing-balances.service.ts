import { Injectable } from '@nestjs/common';
import { CreateSubsidiaryLedgerAccountClosingBalanceDto } from './dto/create-subsidiary-ledger-account-closing-balance.dto';
import { UpdateSubsidiaryLedgerAccountClosingBalanceDto } from './dto/update-subsidiary-ledger-account-closing-balance.dto';

@Injectable()
export class SubsidiaryLedgerAccountClosingBalancesService {
  create(createSubsidiaryLedgerAccountClosingBalanceDto: CreateSubsidiaryLedgerAccountClosingBalanceDto) {
    return 'This action adds a new subsidiaryLedgerAccountClosingBalance';
  }

  findAll() {
    return `This action returns all subsidiaryLedgerAccountClosingBalances`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subsidiaryLedgerAccountClosingBalance`;
  }

  update(id: number, updateSubsidiaryLedgerAccountClosingBalanceDto: UpdateSubsidiaryLedgerAccountClosingBalanceDto) {
    return `This action updates a #${id} subsidiaryLedgerAccountClosingBalance`;
  }

  remove(id: number) {
    return `This action removes a #${id} subsidiaryLedgerAccountClosingBalance`;
  }
}
