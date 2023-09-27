import { PartialType } from '@nestjs/mapped-types';
import { CreateNoteRegisterDto } from './create-note-register.dto';

export class UpdateNoteRegisterDto extends PartialType(CreateNoteRegisterDto) {}
