import { PartialType } from '@nestjs/mapped-types';
import { CreatePettyCashRegisterDto } from './create-petty-cash-register.dto';

export class UpdatePettyCashRegisterDto extends PartialType(CreatePettyCashRegisterDto) {}
