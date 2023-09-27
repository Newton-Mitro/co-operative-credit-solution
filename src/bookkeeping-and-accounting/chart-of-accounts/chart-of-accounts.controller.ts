import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ChartOfAccountsService } from './chart-of-accounts.service';
import { CreateChartOfAccountDto } from './dto/create-chart-of-account.dto';
import { UpdateChartOfAccountDto } from './dto/update-chart-of-account.dto';

@Controller('chart-of-accounts')
export class ChartOfAccountsController {
  constructor(
    private readonly chartOfAccountsService: ChartOfAccountsService,
  ) {}

  @Post()
  create(@Body() createChartOfAccountDto: CreateChartOfAccountDto) {
    return this.chartOfAccountsService.create(createChartOfAccountDto);
  }

  @Get()
  findAll() {
    return this.chartOfAccountsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chartOfAccountsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateChartOfAccountDto: UpdateChartOfAccountDto,
  ) {
    return this.chartOfAccountsService.update(+id, updateChartOfAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chartOfAccountsService.remove(+id);
  }
}
