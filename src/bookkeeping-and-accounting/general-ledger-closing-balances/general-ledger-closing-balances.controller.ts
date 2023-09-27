import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateGeneralLedgerClosingBalanceDto } from './dto/create-general-ledger-closing-balance.dto';
import { UpdateGeneralLedgerClosingBalanceDto } from './dto/update-general-ledger-closing-balance.dto';
import { GeneralLedgerClosingBalancesService } from './general-ledger-closing-balances.service';

@Controller('general-ledger-closing-balances')
export class GeneralLedgerClosingBalancesController {
  constructor(
    private readonly generalLedgerClosingBalancesService: GeneralLedgerClosingBalancesService,
  ) {}

  @Post()
  create(
    @Body()
    createGeneralLedgerClosingBalanceDto: CreateGeneralLedgerClosingBalanceDto,
  ) {
    return this.generalLedgerClosingBalancesService.create(
      createGeneralLedgerClosingBalanceDto,
    );
  }

  @Get()
  findAll() {
    return this.generalLedgerClosingBalancesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.generalLedgerClosingBalancesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateGeneralLedgerClosingBalanceDto: UpdateGeneralLedgerClosingBalanceDto,
  ) {
    return this.generalLedgerClosingBalancesService.update(
      +id,
      updateGeneralLedgerClosingBalanceDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.generalLedgerClosingBalancesService.remove(+id);
  }
}
