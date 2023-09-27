import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateGeneralLedgerDto } from './dto/create-general-ledger.dto';
import { UpdateGeneralLedgerDto } from './dto/update-general-ledger.dto';
import { GeneralLedgersService } from './general-ledgers.service';

@Controller('general-ledgers')
export class GeneralLedgersController {
  constructor(private readonly generalLedgersService: GeneralLedgersService) {}

  @Post()
  create(@Body() createGeneralLedgerDto: CreateGeneralLedgerDto) {
    return this.generalLedgersService.create(createGeneralLedgerDto);
  }

  @Get()
  findAll() {
    return this.generalLedgersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.generalLedgersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGeneralLedgerDto: UpdateGeneralLedgerDto,
  ) {
    return this.generalLedgersService.update(+id, updateGeneralLedgerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.generalLedgersService.remove(+id);
  }
}
