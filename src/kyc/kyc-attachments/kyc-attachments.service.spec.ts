import { Test, TestingModule } from '@nestjs/testing';
import { KycAttachmentsService } from './kyc-attachments.service';

describe('KycAttachmentsService', () => {
  let service: KycAttachmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KycAttachmentsService],
    }).compile();

    service = module.get<KycAttachmentsService>(KycAttachmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
