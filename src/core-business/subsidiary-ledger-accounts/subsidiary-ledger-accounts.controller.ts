import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateSubsidiaryLedgerAccountDto } from './dto/create-subsidiary-ledger-account.dto';
import { UpdateSubsidiaryLedgerAccountDto } from './dto/update-subsidiary-ledger-account.dto';
import { SubsidiaryLedgerAccountsService } from './subsidiary-ledger-accounts.service';

@Controller('subsidiary-ledger-accounts')
export class SubsidiaryLedgerAccountsController {
  constructor(
    private readonly subsidiaryLedgerAccountsService: SubsidiaryLedgerAccountsService,
  ) {}

  @Post()
  create(
    @Body() createSubsidiaryLedgerAccountDto: CreateSubsidiaryLedgerAccountDto,
  ) {
    return this.subsidiaryLedgerAccountsService.create(
      createSubsidiaryLedgerAccountDto,
    );
  }

  @Get()
  findAll() {
    return this.subsidiaryLedgerAccountsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subsidiaryLedgerAccountsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSubsidiaryLedgerAccountDto: UpdateSubsidiaryLedgerAccountDto,
  ) {
    return this.subsidiaryLedgerAccountsService.update(
      +id,
      updateSubsidiaryLedgerAccountDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subsidiaryLedgerAccountsService.remove(+id);
  }
}
