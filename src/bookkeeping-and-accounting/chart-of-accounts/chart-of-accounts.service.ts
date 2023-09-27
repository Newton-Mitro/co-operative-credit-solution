import { Injectable } from '@nestjs/common';
import { CreateChartOfAccountDto } from './dto/create-chart-of-account.dto';
import { UpdateChartOfAccountDto } from './dto/update-chart-of-account.dto';

@Injectable()
export class ChartOfAccountsService {
  create(createChartOfAccountDto: CreateChartOfAccountDto) {
    return 'This action adds a new chartOfAccount';
  }

  findAll() {
    return `This action returns all chartOfAccounts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chartOfAccount`;
  }

  update(id: number, updateChartOfAccountDto: UpdateChartOfAccountDto) {
    return `This action updates a #${id} chartOfAccount`;
  }

  remove(id: number) {
    return `This action removes a #${id} chartOfAccount`;
  }
}
