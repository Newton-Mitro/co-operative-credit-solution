import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DeedOfAgreementsService } from './deed-of-agreements.service';
import { CreateDeedOfAgreementDto } from './dto/create-deed-of-agreement.dto';
import { UpdateDeedOfAgreementDto } from './dto/update-deed-of-agreement.dto';

@Controller('deed-of-agreements')
export class DeedOfAgreementsController {
  constructor(
    private readonly deedOfAgreementsService: DeedOfAgreementsService,
  ) {}

  @Post()
  create(@Body() createDeedOfAgreementDto: CreateDeedOfAgreementDto) {
    return this.deedOfAgreementsService.create(createDeedOfAgreementDto);
  }

  @Get()
  findAll() {
    return this.deedOfAgreementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deedOfAgreementsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDeedOfAgreementDto: UpdateDeedOfAgreementDto,
  ) {
    return this.deedOfAgreementsService.update(+id, updateDeedOfAgreementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deedOfAgreementsService.remove(+id);
  }
}
