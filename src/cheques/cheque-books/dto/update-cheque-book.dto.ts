import { PartialType } from '@nestjs/mapped-types';
import { CreateChequeBookDto } from './create-cheque-book.dto';

export class UpdateChequeBookDto extends PartialType(CreateChequeBookDto) {}
