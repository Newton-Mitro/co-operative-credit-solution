import { Module } from '@nestjs/common';
import { KycAttachmentsService } from './kyc-attachments.service';
import { KycAttachmentsController } from './kyc-attachments.controller';

@Module({
  controllers: [KycAttachmentsController],
  providers: [KycAttachmentsService],
})
export class KycAttachmentsModule {}
