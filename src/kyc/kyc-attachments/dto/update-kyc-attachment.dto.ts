import { PartialType } from '@nestjs/mapped-types';
import { CreateKycAttachmentDto } from './create-kyc-attachment.dto';

export class UpdateKycAttachmentDto extends PartialType(CreateKycAttachmentDto) {}
