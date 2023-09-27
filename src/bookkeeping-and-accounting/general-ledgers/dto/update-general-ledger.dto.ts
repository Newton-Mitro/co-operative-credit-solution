import { PartialType } from '@nestjs/mapped-types';
import { CreateGeneralLedgerDto } from './create-general-ledger.dto';

export class UpdateGeneralLedgerDto extends PartialType(CreateGeneralLedgerDto) {}
