import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateKycAttachmentDto } from './dto/create-kyc-attachment.dto';
import { UpdateKycAttachmentDto } from './dto/update-kyc-attachment.dto';
import { KycAttachmentsService } from './kyc-attachments.service';

@Controller('kyc-attachments')
export class KycAttachmentsController {
  constructor(private readonly kycAttachmentsService: KycAttachmentsService) {}

  @Post()
  create(@Body() createKycAttachmentDto: CreateKycAttachmentDto) {
    return this.kycAttachmentsService.create(createKycAttachmentDto);
  }

  @Get()
  findAll() {
    return this.kycAttachmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kycAttachmentsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateKycAttachmentDto: UpdateKycAttachmentDto,
  ) {
    return this.kycAttachmentsService.update(+id, updateKycAttachmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kycAttachmentsService.remove(+id);
  }
}
