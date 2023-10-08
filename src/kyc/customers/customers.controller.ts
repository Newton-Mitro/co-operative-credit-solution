import { Controller, Delete, Get, Param, Query } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { FindAllQueryDto } from './dto/find-all-query.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customerService: CustomersService) {}

  @Get('search/:search_text')
  search(
    @Query() findAllQueryDto: FindAllQueryDto,
    @Param('search_text') searchText: string,
  ) {
    return this.customerService.search(searchText, findAllQueryDto);
  }

  @Get()
  findAll(@Query() findAllQueryDto: FindAllQueryDto) {
    return this.customerService.findAll(findAllQueryDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(id);
  }
}
