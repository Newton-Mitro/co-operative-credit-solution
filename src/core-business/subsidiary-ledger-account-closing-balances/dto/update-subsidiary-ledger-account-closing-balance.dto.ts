import { PartialType } from '@nestjs/mapped-types';
import { CreateSubsidiaryLedgerAccountClosingBalanceDto } from './create-subsidiary-ledger-account-closing-balance.dto';

export class UpdateSubsidiaryLedgerAccountClosingBalanceDto extends PartialType(CreateSubsidiaryLedgerAccountClosingBalanceDto) {}
