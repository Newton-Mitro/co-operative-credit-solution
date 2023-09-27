import { Injectable } from '@nestjs/common';
import { CreateSubsidiaryLedgerAccountDto } from './dto/create-subsidiary-ledger-account.dto';
import { UpdateSubsidiaryLedgerAccountDto } from './dto/update-subsidiary-ledger-account.dto';

@Injectable()
export class SubsidiaryLedgerAccountsService {
  create(createSubsidiaryLedgerAccountDto: CreateSubsidiaryLedgerAccountDto) {
    return 'This action adds a new subsidiaryLedgerAccount';
  }

  findAll() {
    return `This action returns all subsidiaryLedgerAccounts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subsidiaryLedgerAccount`;
  }

  update(id: number, updateSubsidiaryLedgerAccountDto: UpdateSubsidiaryLedgerAccountDto) {
    return `This action updates a #${id} subsidiaryLedgerAccount`;
  }

  remove(id: number) {
    return `This action removes a #${id} subsidiaryLedgerAccount`;
  }
}
