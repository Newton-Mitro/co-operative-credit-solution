import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubsidiaryLedgerClosingBalancesService } from './subsidiary-ledger-closing-balances.service';
import { CreateSubsidiaryLedgerClosingBalanceDto } from './dto/create-subsidiary-ledger-closing-balance.dto';
import { UpdateSubsidiaryLedgerClosingBalanceDto } from './dto/update-subsidiary-ledger-closing-balance.dto';

@Controller('subsidiary-ledger-closing-balances')
export class SubsidiaryLedgerClosingBalancesController {
  constructor(private readonly subsidiaryLedgerClosingBalancesService: SubsidiaryLedgerClosingBalancesService) {}

  @Post()
  create(@Body() createSubsidiaryLedgerClosingBalanceDto: CreateSubsidiaryLedgerClosingBalanceDto) {
    return this.subsidiaryLedgerClosingBalancesService.create(createSubsidiaryLedgerClosingBalanceDto);
  }

  @Get()
  findAll() {
    return this.subsidiaryLedgerClosingBalancesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subsidiaryLedgerClosingBalancesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubsidiaryLedgerClosingBalanceDto: UpdateSubsidiaryLedgerClosingBalanceDto) {
    return this.subsidiaryLedgerClosingBalancesService.update(+id, updateSubsidiaryLedgerClosingBalanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subsidiaryLedgerClosingBalancesService.remove(+id);
  }
}
