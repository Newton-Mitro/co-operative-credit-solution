import { Test, TestingModule } from '@nestjs/testing';
import { ChartOfAccountsController } from './chart-of-accounts.controller';
import { ChartOfAccountsService } from './chart-of-accounts.service';

describe('ChartOfAccountsController', () => {
  let controller: ChartOfAccountsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChartOfAccountsController],
      providers: [ChartOfAccountsService],
    }).compile();

    controller = module.get<ChartOfAccountsController>(ChartOfAccountsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
