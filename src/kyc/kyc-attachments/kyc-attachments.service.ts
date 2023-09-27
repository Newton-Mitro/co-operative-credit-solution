import { Injectable } from '@nestjs/common';
import { CreateKycAttachmentDto } from './dto/create-kyc-attachment.dto';
import { UpdateKycAttachmentDto } from './dto/update-kyc-attachment.dto';

@Injectable()
export class KycAttachmentsService {
  create(createKycAttachmentDto: CreateKycAttachmentDto) {
    return 'This action adds a new kycAttachment';
  }

  findAll() {
    return `This action returns all kycAttachments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kycAttachment`;
  }

  update(id: number, updateKycAttachmentDto: UpdateKycAttachmentDto) {
    return `This action updates a #${id} kycAttachment`;
  }

  remove(id: number) {
    return `This action removes a #${id} kycAttachment`;
  }
}
