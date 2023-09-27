import { PartialType } from '@nestjs/mapped-types';
import { CreateGeneralLedgerClosingBalanceDto } from './create-general-ledger-closing-balance.dto';

export class UpdateGeneralLedgerClosingBalanceDto extends PartialType(CreateGeneralLedgerClosingBalanceDto) {}
