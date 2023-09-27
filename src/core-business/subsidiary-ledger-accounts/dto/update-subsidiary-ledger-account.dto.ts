import { PartialType } from '@nestjs/mapped-types';
import { CreateSubsidiaryLedgerAccountDto } from './create-subsidiary-ledger-account.dto';

export class UpdateSubsidiaryLedgerAccountDto extends PartialType(CreateSubsidiaryLedgerAccountDto) {}
