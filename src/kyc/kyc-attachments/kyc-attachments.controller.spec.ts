import { Test, TestingModule } from '@nestjs/testing';
import { KycAttachmentsController } from './kyc-attachments.controller';
import { KycAttachmentsService } from './kyc-attachments.service';

describe('KycAttachmentsController', () => {
  let controller: KycAttachmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KycAttachmentsController],
      providers: [KycAttachmentsService],
    }).compile();

    controller = module.get<KycAttachmentsController>(KycAttachmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
