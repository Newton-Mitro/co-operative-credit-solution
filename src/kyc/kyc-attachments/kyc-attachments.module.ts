import { Module } from '@nestjs/common';
import { KycAttachmentsController } from './kyc-attachments.controller';
import { KycAttachmentsService } from './kyc-attachments.service';

@Module({
  controllers: [KycAttachmentsController],
  providers: [KycAttachmentsService],
})
export class KycAttachmentsModule {}
