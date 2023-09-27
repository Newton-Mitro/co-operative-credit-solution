import { Module } from '@nestjs/common';
import { DeedOfAgreementsController } from './deed-of-agreements.controller';
import { DeedOfAgreementsService } from './deed-of-agreements.service';

@Module({
  controllers: [DeedOfAgreementsController],
  providers: [DeedOfAgreementsService],
})
export class DeedOfAgreementsModule {}
