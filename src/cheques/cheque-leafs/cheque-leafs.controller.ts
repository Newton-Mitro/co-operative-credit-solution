import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ChequeLeafsService } from './cheque-leafs.service';
import { CreateChequeLeafDto } from './dto/create-cheque-leaf.dto';
import { UpdateChequeLeafDto } from './dto/update-cheque-leaf.dto';

@Controller('cheque-leafs')
export class ChequeLeafsController {
  constructor(private readonly chequeLeafsService: ChequeLeafsService) {}

  @Post()
  create(@Body() createChequeLeafDto: CreateChequeLeafDto) {
    return this.chequeLeafsService.create(createChequeLeafDto);
  }

  @Get()
  findAll() {
    return this.chequeLeafsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chequeLeafsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateChequeLeafDto: UpdateChequeLeafDto,
  ) {
    return this.chequeLeafsService.update(+id, updateChequeLeafDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chequeLeafsService.remove(+id);
  }
}
