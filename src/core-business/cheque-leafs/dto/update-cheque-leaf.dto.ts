import { PartialType } from '@nestjs/mapped-types';
import { CreateChequeLeafDto } from './create-cheque-leaf.dto';

export class UpdateChequeLeafDto extends PartialType(CreateChequeLeafDto) {}
