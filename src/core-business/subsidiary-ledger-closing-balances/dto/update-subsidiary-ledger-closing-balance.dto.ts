import { PartialType } from '@nestjs/mapped-types';
import { CreateSubsidiaryLedgerClosingBalanceDto } from './create-subsidiary-ledger-closing-balance.dto';

export class UpdateSubsidiaryLedgerClosingBalanceDto extends PartialType(CreateSubsidiaryLedgerClosingBalanceDto) {}
