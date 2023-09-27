import { PartialType } from '@nestjs/mapped-types';
import { CreateDeedOfAgreementDto } from './create-deed-of-agreement.dto';

export class UpdateDeedOfAgreementDto extends PartialType(
  CreateDeedOfAgreementDto,
) {}
