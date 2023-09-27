import { Test, TestingModule } from '@nestjs/testing';
import { DeedOfAgreementsService } from './deed-of-agreements.service';

describe('DeedOfAgreementsService', () => {
  let service: DeedOfAgreementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeedOfAgreementsService],
    }).compile();

    service = module.get<DeedOfAgreementsService>(DeedOfAgreementsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
