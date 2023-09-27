import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateSubsidiaryLedgerAccountClosingBalanceDto } from './dto/create-subsidiary-ledger-account-closing-balance.dto';
import { UpdateSubsidiaryLedgerAccountClosingBalanceDto } from './dto/update-subsidiary-ledger-account-closing-balance.dto';
import { SubsidiaryLedgerAccountClosingBalancesService } from './subsidiary-ledger-account-closing-balances.service';

@Controller('subsidiary-ledger-account-closing-balances')
export class SubsidiaryLedgerAccountClosingBalancesController {
  constructor(
    private readonly subsidiaryLedgerAccountClosingBalancesService: SubsidiaryLedgerAccountClosingBalancesService,
  ) {}

  @Post()
  create(
    @Body()
    createSubsidiaryLedgerAccountClosingBalanceDto: CreateSubsidiaryLedgerAccountClosingBalanceDto,
  ) {
    return this.subsidiaryLedgerAccountClosingBalancesService.create(
      createSubsidiaryLedgerAccountClosingBalanceDto,
    );
  }

  @Get()
  findAll() {
    return this.subsidiaryLedgerAccountClosingBalancesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subsidiaryLedgerAccountClosingBalancesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateSubsidiaryLedgerAccountClosingBalanceDto: UpdateSubsidiaryLedgerAccountClosingBalanceDto,
  ) {
    return this.subsidiaryLedgerAccountClosingBalancesService.update(
      +id,
      updateSubsidiaryLedgerAccountClosingBalanceDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subsidiaryLedgerAccountClosingBalancesService.remove(+id);
  }
}
