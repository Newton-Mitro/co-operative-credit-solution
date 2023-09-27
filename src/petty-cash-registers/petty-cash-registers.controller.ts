import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePettyCashRegisterDto } from './dto/create-petty-cash-register.dto';
import { UpdatePettyCashRegisterDto } from './dto/update-petty-cash-register.dto';
import { PettyCashRegistersService } from './petty-cash-registers.service';

@Controller('petty-cash-registers')
export class PettyCashRegistersController {
  constructor(
    private readonly pettyCashRegistersService: PettyCashRegistersService,
  ) {}

  @Post()
  create(@Body() createPettyCashRegisterDto: CreatePettyCashRegisterDto) {
    return this.pettyCashRegistersService.create(createPettyCashRegisterDto);
  }

  @Get()
  findAll() {
    return this.pettyCashRegistersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pettyCashRegistersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePettyCashRegisterDto: UpdatePettyCashRegisterDto,
  ) {
    return this.pettyCashRegistersService.update(
      +id,
      updatePettyCashRegisterDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pettyCashRegistersService.remove(+id);
  }
}
