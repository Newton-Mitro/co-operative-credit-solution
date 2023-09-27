import { Test, TestingModule } from '@nestjs/testing';
import { DeedOfAgreementsController } from './deed-of-agreements.controller';
import { DeedOfAgreementsService } from './deed-of-agreements.service';

describe('DeedOfAgreementsController', () => {
  let controller: DeedOfAgreementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeedOfAgreementsController],
      providers: [DeedOfAgreementsService],
    }).compile();

    controller = module.get<DeedOfAgreementsController>(
      DeedOfAgreementsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
